'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with heroes
 */

const Hero = use('App/Models/Hero');

class HeroController {

  async store ({request}) {
    const {name, alias, age} = request.all();
    const hero = await  Hero.create({name,alias,age});
    return hero;
  }

  async show () {
    const heroes = await Hero.all();
    return heroes;
  }

  async showById ({ params }) {
    const hero = await Hero.find(params.id);
    return hero;
  }

  async update ({request, params}) {
    const {name, alias, age} = request.all();
    const hero = await Hero.find(params.id);
    hero.merge({name, alias, age});
    await hero.save();
    return hero;
  }

  async updateAliasAndAge ({params, request}) {
    const hero = await Hero.find(params.id);
    const {alias, age} = request.all();
    hero.merge({alias: alias, age: age});
    await hero.save();
    return hero;
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = HeroController
