module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var pkg = grunt.file.readJSON('package.json');

    var lessFiles = {
        "dist/neo-light.css":"less/style.less", 
        "dist/red.css": "less/red.less",
        "dist/pink.css": "less/pink.less",
        "dist/purple.css": "less/purple.less",
        "dist/indigo.css": "less/indigo.less",
        "dist/blue.css": "less/style.less", 
        "dist/cyan.css": "less/light-blue.less",
        "dist/green.css": "less/green.less",
        "dist/lime.css": "less/lime.less",
        "dist/yellow.css": "less/yellow.less",
        "dist/orange.css": "less/orange.less",
        "dist/brown.css": "less/brown.less",
        "dist/blue-grey.css": "less/blue-grey.less",

    };

    grunt.initConfig({
        clean: {
            dist: {
                src: ["dist/*"]
            }
        },

        less: {
            dist: {
                files: lessFiles,
                options: {
                    ieCompat: false,
                    sourceMap: true,
                    sourceMapBasepath: 'dist/',
                    modifyVars: {
                        version: '"' + pkg.version + '"'
                    },
                },
            },
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')(),
                    require('cssnano')({
                        preset: ['default', {
                            svgo: {
                                plugins: [{
                                    removeRasterImages: true,
                                    sortAttrs: true,
                                    removeStyleElement: true,
                                }],
                            },
                        }],
                    }),
                ],
            },
            dist: {
                src: 'dist/neo-*.css'
            }
        }
    });

    // Default task
    grunt.registerTask('default', ['clean', 'less', 'postcss']);
};

// vim: set ts=4 sw=4 et:
