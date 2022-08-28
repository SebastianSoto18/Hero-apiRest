'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with heroes
 */

const Hero = use("App/Models/Hero");

class HeroController {
  async store({ request }) {
    const { name, alias, age, DI } = request.all();
    try {
      const hero = await Hero.create({ name, alias, age, DI });
      return hero;
    } catch (error) {
      return "Failed to create hero\n" + error;
    }
  }

  async show() {
    const heroes = await Hero.all();
    if (heroes.rows.length != 0) {
      return heroes;
    } else {
      return "No heroes found";
    }
  }

  async showByDi({ params }) {
    const hero = await Hero.find(params.id);
    if (hero != null) {
      return hero;
    } else {
      return "Hero not found";
    }
  }

  async update({ request, params }) {
    const { name, alias, age } = request.all();
    const hero = await Hero.findBy("Di", params.Di);
    if (hero != null) {
      hero.merge({ name, alias, age });
      await hero.save();
      return hero;
    } else {
      return "Hero not found";
    }
  }

  async updateAliasAndAge({ params, request }) {
    const hero = await Hero.findBy("DI", params.Di);
    const { alias, age } = request.all();
    if (hero != null) {
      hero.merge({ alias: alias, age: age });
      await hero.save();
      return hero;
    } else {
      return "Hero not found";
    }
  }

  async destroy({ params }) {
    let message = "";
    const hero = await Hero.findBy("Di", params.Di);
    if (hero != null) {
      await hero.delete();
      message = "Hero deleted";
    } else {
      message = "Fail to delete hero: " + error;
    }
    return message;
  }
}

module.exports = HeroController;
