Todos.Router.map(function() {
  // Render todos template on route '/'
  this.resource('todos', { path: '/' }, function () {

  });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('todo');
  }
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('todos');
  }
});

