fis.config.set('modules.postpackager', 'simple');

//Step 2. 取消下面的注释开启pack人工干预
fis.config.set('pack', {
    'pkg/lib.js': [
        '/lib/mod.js',
        '/modules/underscore/**.js',
        '/modules/backbone/**.js',
        '/modules/jquery/**.js',
        '/modules/vendor/**.js',
        '/modules/common/**.js'
    ]
});

//Step 3. 取消下面的注释可以开启simple对零散资源的自动合并
fis.config.set('settings.postpackager.simple.autoCombine', true);


//Step 4. 为所有样式资源开启csssprites
// fis.config.set('roadmap.path', [{
//     reg: '**.css',
//     useSprite: true
// }]);
// fis.config.set('settings.spriter.csssprites.margin', 20);