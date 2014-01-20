module.exports = function(grunt){
  grunt.initConfig({
    livescript: {
      options: {
        bare: true
      },
      glob_to_multiple: {
        expand: true,
        src: ['Gruntfile.ls', 'src/**/*.ls'],
        dest: './',
        ext: '.js'
      }
    },
    less: {
      all: {
        options: {
          paths: ['src/less/']
        },
        files: {
          'src/assets/css/application.css': 'src/less/application.less'
        }
      }
    },
    mochaTest: {
      test: {
        src: ['src/specs/**/*-specs.ls']
      }
    }
  });
  grunt.loadNpmTasks('grunt-livescript');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.registerTask('compile', ['livescript', 'less']);
  grunt.registerTask('build', ['compile']);
  grunt.registerTask('test', ['build', 'mochaTest']);
  return grunt.registerTask('default', ['test']);
};