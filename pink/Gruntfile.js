module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Настройка для объединения файлов находится тут
            dist: {
        src: [
            'js/libs/*.js', // Все JS в папке libs
            'js/global.js'  // Конкретный файл
        ],
        dest: 'js/build/production.js',
    }
        },

        less: {
         development: {
            options: {
               compress: true,
               yuicompress: true,
               optimization: 2
            },
            files: {
               // target.css file: source.less file
               "css/style.css": "less/style.less"
            }
        }
   },

   watch: {
      styles: {
         files: ['less/**/*.less'], // which files to watch
         tasks: ['less'],
         options: {
            nospawn: true
         }
      }
   }


    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('default', ['less']);
    //grunt.registerTask('default', ['concat']);

};