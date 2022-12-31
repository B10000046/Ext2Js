Ext.define('MyExtGenApp.view.personnel.PersonnelViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.personnelviewstore',
    fields: [
        'name', 'email', 'phone', 'job'
    ],
    groupField: 'dept',
    data: { items: [
        { name: 'Jean Luc',   email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", job: "收割作業" },
        { name: 'ModernWorf', email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", job: "網頁編寫" },
        { name: 'Deanna',     email: "deanna.troi@enterprise.com",    phone: "555-333-3333", job: "栽種農作" },
        { name: 'Data',       email: "mr.data@enterprise.com",        phone: "555-444-4444", job: "系統管理" }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
