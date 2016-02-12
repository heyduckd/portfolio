(function(module) {

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
  };

  Project.fetchAll = function() {
    $.ajax ({
      type: 'HEAD',
      url: 'data/projects.json',
      success: function(data, message, xhr) {
        console.log(xhr);
        var eTag = xhr.getResponseHeader('eTag');
        if (!localStorage.eTag || eTag !== localStorage.eTag) {
          localStorage.eTag = eTag;
          Project.getAll();
        } else {
          Project.loadAll(JSON.parse(localStorage.rawProject));
          workView.initIndexPage();
        }
      }
    });
  }

  Project.getAll = function() {
    $.getJSON('data/projects.json', function(rawProject) {
      Project.loadAll(rawProject);
      localStorage.rawProject = JSON.stringify(rawProject);
      workView.initIndexPage();
    });
  };
  
module.Project = Project;
})(window);
