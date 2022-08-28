'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with heroes
 */

const Hero = use('App/Models/Hero');

class HeroController {
  async store ({ request,response }) {
    const { name, alias, age,DI} = request.all();
    try {
      const hero = await  Hero.create({name,alias,age,DI});
      response.status(200).send({
        message: "Hero created successfully",
        hero
      })
    } catch (error) {
      response.status(400).send({
        message: "Error creating hero",
        error
      })
    }
  }

  async show ({ response }) {
    const heroes = await Hero.all();
    if (heroes.rows.length != 0) {
      response.status(200).send({
        heroes
      });
    } else {
      response.status(404).send({ message: "Heros Database empty" });
    }
  }

  async showById ({ params,response }) {
    const hero = await Hero.find(params.id);
    if (hero != null) {
        response.status(200).send({
          hero
        });
    } else {
      response.status(404).send({ message: "Hero not found" });
    }
  }

  async update ({request, params,response}) {
    const {name, alias, age, Di } = request.all();
    const hero = await Hero.find(params.id);
    if (hero != null) {
      hero.merge({ name, alias, age, Di });
      await hero.save();
      response.status(200).send({
        message: "Hero updated successfully",
        hero
      });
    } else {
      response.status(404).send({ message: "Hero not found" });
    }
  }

  async updateAliasAndAge ({params, request,response}) {
    const hero = await Hero.find(params.id);
    const { alias, age } = request.all();
    if (hero != null) {
      hero.merge({ alias: alias, age: age });
      await hero.save();
      response.status(200).send({
        message: "Hero updated successfully",
        hero
      });
    } else {
      response.status(404).send({ message: "Hero not found" });
    }
  }

  async destroy ({ params,response }) {
    let message = "";
    const hero = await Hero.find(params.id);
    if (hero != null) {
      await hero.delete();
      response.status(200).send({
        message: "Hero deleted successfully"
      });
    } else {
      response.status(404).send({message: "Hero not found"});
    }
    
    return message;
  }
}

module.exports = HeroController;
