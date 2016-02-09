// var projects = [];
function Project (opts) {
  this.id = opts.id;
  this.title = opts.title;
  this.gitRepo = opts.gitRepo;
  this.url = opts.url;
  this.body = opts.body;
  this.img = opts.img;
};

Project.all = [];

Project.prototype.toHtml = function() {
  var template = Handlebars.compile($('#work-template').text());
  return template(this);
};

Project.loadAll = function(rawProject) {
  rawProject.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
}

Project.fetchAll = function() {
  // if (localStorage.rawProject) {
  //   Project.loadAll(JSON.parse(localStorage.rawProject));
  //
  // } else {
    $.ajax ({
      type: 'HEAD',
      url: 'data/projects.json',
      success: function(data, message, xhr) {
        console.log("i am running");
        localStorage.setItem('rawProject', JSON.stringify (data));
        Project.loadAll(JSON.parse(data));
        workView.initIndexPage();
      }
    });
  // }
}
