const TV={
    open:function () {
        console.log('打开电视');
        
    },
    close:function () {
        console.log('关闭电视');
    }
}
const AirConditonal={
    open: function() {
        console.log('打开空调');
    },
    close: function() {
        console.log('关闭空调');
    }
}

function setCommand(obj) {
    const o={};
    if("open" in obj){
        obj.execute=obj.open;
        o.execute=obj.execute;
    }
    return o;
}

setCommand(AirConditonal).execute();
