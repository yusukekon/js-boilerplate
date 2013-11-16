module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: [
                'src/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        gjslint: {
            options: {
                flags: ['--flagfile .gjslintrc'],
                reporter: {
                    name: 'console'
                }
            },
            all: {
                src: ['src/**/*.js']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-gjslint');

    grunt.registerTask('default', ['jshint']);
};
