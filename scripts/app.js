// PROJECTS
(function(module) {
  function Project (opts) {
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
        var eTag = xhr.getResponseHeader('eTag');
        if (!localStorage.eTag || eTag !== localStorage.eTag) {
          localStorage.eTag = eTag;
          Project.getAll();
        } else {
          Project.loadAll(JSON.parse(localStorage.rawProject));
          // workView.initIndexPage();
        }
      }
    });
  }

  Project.getAll = function() {
    $.getJSON('data/projects.json', function(rawProject) {
      Project.loadAll(rawProject);
      localStorage.rawProject = JSON.stringify(rawProject);
      // workView.initIndexPage();
    });
  };
module.Project = Project;
})(window);


// EDUCATION
(function(module) {
  function Edu (opts) {
    this.school = opts.school;
    this.location = opts.location;
    this.years = opts.years;
    this.studied = opts.studied;
    this.mapimg = opts.mapimg;
    this.placeurl = opts.placeurl;
  };

  Edu.all = [];

  Edu.prototype.toHtml = function() {
    var template = Handlebars.compile($('#edu-template').text());
    return template(this);
  };

  Edu.loadAll = function(rawEdu) {
    rawEdu.forEach(function(ele) {
      Edu.all.push(new Edu(ele));
    });
  };

  Edu.fetchAll = function() {
    $.ajax ({
      type: 'HEAD',
      url: 'data/edu.json',
      success: function(data, message, xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        if (!localStorage.eTag || eTag !== localStorage.eTag) {
          localStorage.eTag = eTag;
          Edu.getAll();
        } else {
          Edu.loadAll(JSON.parse(localStorage.rawEdu));
          // eduView.initIndexPage();
        }
      }
    });
  }

  Edu.getAll = function() {
    $.getJSON('data/edu.json', function(rawEdu) {
      Edu.loadAll(rawEdu);
      localStorage.rawEdu = JSON.stringify(rawEdu);
      // eduView.initIndexPage();
    });
  };
module.Edu = Edu;
})(window);


// CONNTECT
(function(module) {
  function Connect (opts) {
    this.contactmethod = opts.contactmethod;
    this.icon = opts.icon;
    this.contacturl = opts.contacturl;
  };

  Connect.all = [];

  Connect.prototype.toHtml = function() {
    var template = Handlebars.compile($('#connect-template').text());
    return template(this);
  };

  Connect.loadAll = function(rawConnect) {
    rawConnect.forEach(function(ele) {
      Connect.all.push(new Connect(ele));
    });
  };

  Connect.fetchAll = function() {
    $.ajax ({
      type: 'HEAD',
      url: 'data/connect.json',
      success: function(data, message, xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        if (!localStorage.eTag || eTag !== localStorage.eTag) {
          localStorage.eTag = eTag;
          Connect.getAll();
        } else {
          Connect.loadAll(JSON.parse(localStorage.rawConnect));
          // connectView.initIndexPage();
        }
      }
    });
  }

  Connect.getAll = function() {
    $.getJSON('data/connect.json', function(rawConnect) {
      Connect.loadAll(rawConnect);
      localStorage.rawConnect = JSON.stringify(rawConnect);
      // connectView.initIndexPage();
    });
  };
module.Connect = Connect;
})(window);
