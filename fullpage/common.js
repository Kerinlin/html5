class PureFullPage{
    constructor(options){
        // 1.手动计算page高度 #PureFullPage?
        this.container = document.getElementById('pureFullPage');
        this.viewHeight=document.documentElement.clientHeight;
        this.viewWidth=document.documentElement.clientWidth;
        this.init();
    }
    init(){ 
        this.container.style.height=`${this.viewHeight}px`;
        // 事件监听
        // this.scrollMouse方法负责滚动 会执行多次，太频繁  
        // throttle在规定时间里只执行一次 重新返回一个函数,将this.scrollMouse封到内部
        const handleMouseWheel=utils.throttle(this.scrollMouse,this,1000);//截流
        // console.log(navigator.userAgent);
        if(navigator.userAgent.toLowerCase().indexOf('firefox')===-1){
            document.addEventListener('mousewheel', handleMouseWheel,false)
        }else{
            document.addEventListener('DOMMouseScroll', handleMouseWheel, false) 
        }
    }
    
    // 滚轮事件处理函数
    scrollMouse(){
        console.log(this.container);   
    }
}