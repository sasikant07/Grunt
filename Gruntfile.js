module.exports = function (grunt) {

    /* grunt.registerTask('speak', () => {
        console.log("I am Speaking");
    })

    grunt.registerTask('yell', () => {
        console.log("I am YELLING!");
    })

    //grunt.registerTask('both', ['speak', 'yell']);

    grunt.registerTask('default', ['speak', 'yell']); */


    // Project configuration. (for cancat file)
    grunt.initConfig({
        concat: {
            js: {
                src: ['js/1.js', 'js/2.js'],
                dest: 'build/js/scripts.js',
            },
            css: {
                src: ['css/main.css', 'css/theme.css'],
                dest: 'build/css/styles.js',
            },
        },

        // (for watching changes in code system)
        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat'],
            },
            css: {
                files: ['css/**/*.css'],
                tasks: ['concat'],
            },
        },
    }),

        grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'watch']);
};