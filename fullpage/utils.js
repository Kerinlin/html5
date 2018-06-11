const utils={
    // 帮method执行的次数在规定时间内只有一次，method执行时，函数内的this 
    throttle(method,context,event,delay){
        // 返回的函数就是等下事件执行的真正函数体
        // args? event对象
        // 执行时，上下文环境要跟以前一样
        let wait=false;
        return function (...args) {
            console.log(args );
            if(!wait){
            method.apply(context,args)
            wait = true;
            }
            setTimeout(() => {
                wait=false;
            }, 2000);
        }
    }
}