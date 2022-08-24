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
    console.log(name, alias, age);
    const hero = await  Hero.create({name,alias,age});
    return hero;
  }

  async show ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = HeroController
