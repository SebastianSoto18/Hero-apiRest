'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Hero extends Model {

    static get table(){
        return 'heroes';
    }

    static get primaryKey(){
        return 'id';
    }

    static get createdAtColumn(){
        return 'created_at';
    }

    static get connection(){
        return 'sqlite';
    }

    static get incrementing(){
        return true;
    }

    static get visible(){
        return ['id', 'name', 'alias', 'age','DI','created_at', 'updated_at'];
    }

}

module.exports = Hero
