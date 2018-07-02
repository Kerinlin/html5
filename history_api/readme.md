网站由网页构成，超链接
web app mobile
native app(ios,android) 多页应用

多页应用会跳转，重新刷新页面


多页应用缺点
- 用户体验极差，每次点链接都要等待http请求及响应，整个页面的刷新，页面白一下，如果传输时间大于0.5s，会看到明显的白屏
- 相同的html片段重复被下载

1. preventDefault a
2. 得到herf属性
3. jquery ajax动态得到html内容
4. p content img src $('').content() $('').src() 



SPA Singer Page Application  单页应用

- 页面状态 可以对应一个路由
SPA解决了用户体验的问题，但却带来另一个及其严重的问题，浏览记录没有了

如何为每个状态改变，（路由状态）， 产生一个url(路由),并且生成一次浏览记录，让SPA的访问，更像传统的访问

- 一个页面对应多个页面状态，每个页面状态都会有一个route 路由（d地址，state，数据）,又会对应一个组件
vue 单页应用开发 由route 响应 匹配响应的组件显示，再一直组件化的过程