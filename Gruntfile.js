module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
        options: {
            sourceMap: false
        },
        dist: {
            files: {
                'css/style.css': 'sass/style.scss'
            }
        }
    }
    ,
    watch: {
      css: {
        files: 'sass/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('default',['sass']);
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
