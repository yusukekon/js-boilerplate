module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            src: '<%= src %>',
            watch: {
                src: '<%= grunt.regarde.changed %>'
            },
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
            src: {
                src: '<%= src %>'
            },
            watch: {
                src: '<%= grunt.regarde.changed %>'
            }
        },
        watch: {
            js: {
                files: '<%= src %>',
                tasks: ['eatwarnings', 'jshint:watch', 'gjslint:watch']
            }
        },

        src: ['src/**/*.js'],
        test: ['test/**/*.test.js'],
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-gjslint');
    grunt.loadNpmTasks('grunt-regarde');

    grunt.renameTask('regarde', 'watch');

    grunt.registerTask('default', ['jshint:src', 'gjslint:src']);
    grunt.registerTask('eatwarnings', function() {
        process.exit = function(warning) {};
    });
};
