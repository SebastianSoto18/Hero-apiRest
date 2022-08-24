'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HeroSchema extends Schema {
  up () {
    this.create('heroes', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('alias', 80).notNullable().unique()
      table.integer('age', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('heroes')
  }
}

module.exports = HeroSchema
