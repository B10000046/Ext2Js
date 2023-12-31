Ext.define('MyExtGenApp.Application', {
	extend: 'Ext.app.Application',
	name: 'MyExtGenApp',
	requires: ['MyExtGenApp.*'],
	defaultToken: 'homeview',

	removeSplash: function () {
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)
	},

	launch: function () {
		this.removeSplash()
		var whichView = 'mainview'
		Ext.Viewport.add([{xtype: whichView}])
                Ext.define('Test',{
                           extend:'Ext.data.Model',
                           fields:['id','text'],
                           proxy:{
                                type:'format',
                                api:{
                                   create:'/test/add',
                                   read:'/test/',
                                   update:'/test/update',                
                                   destroy:'/test/delete'
                                   } 
                           }
              });
              Test.load(1,{
           success: function(rec,opts){
     console.log(rec);
     rec.destroy();
}
})
   var a = Ext.create('Test',{text:'test'});
   a.save();
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
