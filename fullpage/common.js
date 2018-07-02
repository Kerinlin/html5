class PureFullPage {
    constructor(options) {
        // 1.手动计算page高度 #PureFullPage?
        const defaultOptions = {
            isShowNave: true,
            delay: 1000,
            definePages: () => {
            },
        }
        this.options = Object.assign(defaultOptions, options);
        this.container = document.getElementById('pureFullPage');
        this.viewHeight = document.documentElement.clientHeight;
        this.viewWidth = document.documentElement.clientWidth;
        this.currentPostion=0;
        this.init();
    }
    init() {
        this.container.style.height = `${this.viewHeight}px`;
        this.DELAY = 2000;
        // 事件监听
        // this.scrollMouse方法负责滚动 会执行多次，太频繁  
        // throttle在规定时间里只执行一次 重新返回一个函数,将this.scrollMouse封到内部
        const handleMouseWheel = utils.throttle(this.scrollMouse, this, this.DELAY);//截流
        // console.log(navigator.userAgent);
        if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
            document.addEventListener('mousewheel', handleMouseWheel, false)
        } else {
            document.addEventListener('DOMMouseScroll', handleMouseWheel, false)
        }//判断浏览器


        window.addEventListener('resize', this.handleWindowResize.bind(this), false);

    }
    handleWindowResize(event) {
        // console.log(this);
        // 防抖
        utils.debounce(this.getNewPosition, this, event, this.DELAY);
    }
    getNewPosition() {
        // console.log('debounce');
        this.viewHeight = document.documentElement.clientHeight;
        this.container.style.height = `${this.viewHeight}px`;
    }
    // 滚轮事件处理函数
    scrollMouse(event) {
        // console.log(this.container);
        const delta = utils.getWheelDelta(event);
        if (delta > 0) {
            // 上滚
            this.goUp();


        } else {
            // 下滚
            this.goDown();

        }
        console.log(delta);
    }
    goUp() {

    }
    goDown() {
        this.currentPostion-=this.viewHeight;
        this.container.style.top = `${this.currentPostion}px`;
    }
}