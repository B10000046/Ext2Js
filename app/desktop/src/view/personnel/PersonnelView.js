Ext.define('MyExtGenApp.view.personnel.PersonnelView',{
    extend: 'Ext.grid.Grid',
    xtype: 'personnelview',
    cls: 'personnelview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'personnelviewcontroller'},
    viewModel: {type: 'personnelviewmodel'},
    store: {type: 'personnelviewstore'},
    grouped: true,
    groupFooter: {
        xtype: 'gridsummaryrow'
    },
    plugins: {
        rowedit: {
            autoConfirm: false
        }
    },
    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            editable: true,
            width: 100,
            cell: {userCls: 'bold'}
        },
        {
            text: 'Email',
            dataIndex: 'email',
            editable: true, 
            width: 230
        },
        {
            text: 'Phone',
            dataIndex: 'phone',
            editable: true,
            width: 150
        },
        {
           text: 'Job',
            dataIndex: 'job',
            editable: true,
            width: 150
        }
    ],
    listeners: {
        canceledit: 'onEditCancelled'
    }
});
Ext.create(Ext.data.ArrayStore,{
    id:"",
    fields:["Month",{name:"2010",type:"int"}],
    data:[["一月",30],["二月",29],["三月",31],["四月",30],["五月",31],["六月",30],["七月",31],["八月",31],["九月",30],["十月",31],["十一月",30],["十二月",31]]
});
Ext.create('Ext.chart.CartesianChart',{
   series: [{
      type: 'line',
      xField: 'name',
      yField: 'G1'
   }]
});