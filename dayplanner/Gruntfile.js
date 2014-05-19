/**
 * Created by buyvich on 19.05.14.
 */

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/angular/',
                        src: ['angular.min.js'],
                        dest: 'public/js/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/css',
                        src: ['bootstrap.min.css', 'bootstrap-theme.min.css'],
                        dest: 'public/css/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/js',
                        src: ['bootstrap.min.js'],
                        dest: 'public/js/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/jquery/dist/',
                        src: ['jquery.min.js'],
                        dest: 'public/js/',
                        filter: 'isFile'
                    },
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy']);
};
