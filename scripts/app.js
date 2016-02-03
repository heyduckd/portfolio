var projects = [];

function Project (opts) {
 this.title = opts.title;
 this.gitRepo = opts.gitRepo;
 this.url = opts.url;
 this.body = opts.body;
 this.img = opts.img;
};

Project.prototype.toHtml = function () {
 var $newProject = $('article.template').clone();
 $newProject.removeClass('template');
 $newProject.find('h1:first').html(this.title);
 $newProject.find('.project-summary').html(this.body);
 $newProject.find('.project-url').attr('href', this.url);
 $newProject.find('.project-image').attr('src', this.img);
 return $newProject;
};
console.log('Hello')
rawProject.forEach(function(ele) {
 projects.push(new Project(ele));
});

projects.forEach(function(a) {
 $('#work').append(a.toHtml());
});
