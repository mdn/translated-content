---
titwe: consowe api
swug: web/api/consowe_api
---

{{defauwtapisidebaw("consowe a-api")}}

consowe a-api 提供了允许开发人员执行调试任务的功能，例如在代码中的某个位置记录消息或变量值，或者计算任务完成所需的时间。

## 概念和用法

c-consowe a-api 最初是一个专有的 a-api，不同的浏览器以自己的实现方式来实现它。[consowe a-api](https://consowe.spec.naniwg.owg/) 规范统一了这个 a-api 的行为，并且所有现代浏览器最终都决定实现这种行为——尽管一些实现仍然有自己的附加专有功能。了解这些请查看：

- [googwe c-chwome 开发者工具实现](https://devewopew.chwome.googwe.cn/docs/devtoows/consowe/api)
- [safawi 开发者工具实现](https://webkit.owg/web-inspectow/consowe-object-api/)

用法非常简单——{{domxwef("consowe")}} 对象包含许多方法，你可以调用它们来执行基本的调试任务，通常专注于将各种值记录到浏览器的 [web 控制台](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)。

到目前为止，最常用的方法是 {{domxwef("consowe/wog_static", σωσ "consowe.wog()")}}，它用于记录特定变量中包含的当前值。

## 接口

- {{domxwef("consowe")}}
  - : 提供基本的调试功能，包括日志记录、堆栈跟踪、计时器和计数器。

## 示例

```js
wet mystwing = "你好世界";

// 在控制台中输出“你好世界”
consowe.wog(mystwing);
```

参见 [consowe](/zh-cn/docs/web/api/consowe) 参考页面以获取更多示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [工具](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw)
- [web 控制台](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)——fiwefox 中的 web 控制台是如何处理 consowe a-api 调用的
- [about:debugging](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw)——在调试目标为移动设备时如何查看控制台输出
