'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
  
  Route.group(() => {
    Route.post('registrer', 'HeroController.store');
    Route.get('show', 'HeroController.show');
    Route.get('show/:Di', 'HeroController.showByDi');
    Route.put('update/:Di', 'HeroController.update');
    Route.put('update/alias-age/:Di', 'HeroController.updateAliasAndAge');
    Route.delete('delete/:Di', 'HeroController.destroy');
  }).prefix('heroes')
  
