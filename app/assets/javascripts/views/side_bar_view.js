Soundbolt.Views.SideBarView = Backbone.View.extend({
  template: JST['side_bar'],
  tagName: 'section',
  className: 'user-view-normal-sidebar',

  initialize: function(options){
    this.model = options.user;
    
    this.listenTo(this.model, 'sync', this.render.bind(this));
  },

  render: function(){
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }
})
