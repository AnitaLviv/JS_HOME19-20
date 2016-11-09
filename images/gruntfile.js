module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


   uglify: {
   js:{
     src: 'js/script.js',
     dest: 'news/script.min.js'
   }
},


  cssmin: {
    css: {
      files: {
      'news/screen.min.css' : ['stylesheets/screen.css']
     }
   }
},

   imagemin: {
      dynamic: {
      files: [{
      expand: true,
      cwd: 'images/',
      src: ['**/*.{png,jpg}']
    }]
   }
},
   });


 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-cssmin');
 grunt.loadNpmTasks('grunt-contrib-imagemin');


 grunt.registerTask('default',['uglify','cssmin','imagemin']);

 };


   
