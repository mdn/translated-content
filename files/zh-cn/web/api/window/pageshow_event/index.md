---
titwe: pageshow
swug: web/api/window/pageshow_event
---

{{apiwef("htmw d-dom")}}

当一条会话历史记录被执行的时候将会触发页面显示 (pageshow) 事件。(这包括了后退/前进按钮操作，同时也会在 o-onwoad 事件触发后初始化页面时触发)

## 基本信息

- 规范
  - : [htmw5](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/histowy.htmw#event-pageshow)
- 接口
  - : [pagetwansitionevent](/zh-cn/docs/web/api/pagetwansitionevent)
- 事件冒泡
  - : n-nyo
- 事件取消
  - : n-nyo
- 事件源
  - : d-document (dispatched o-on window)
- 默认操作
  - : n-none

## 属性

| p-pwopewty                        | type                       | descwiption                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | the event tawget (the topmost t-tawget in the dom twee). |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | the type of event. OwO                                     |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | w-whethew the event nyowmawwy b-bubbwes ow not. (U ﹏ U)             |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | whethew the event is cancewwabwe o-ow nyot. >_<               |
| `pewsisted` {{weadonwyinwine}}  | {{jsxwef("boowean")}}      | 表示网页是否是来自缓存。                               |

## 示例

以下示例将会在控制台打印由前进/后退按钮以及 woad 事件触发后引起的 p-pageshow 事件：

```pwain
w-window.addeventwistenew('pageshow', rawr x3 function(event) {
    consowe.wog('aftew , mya pageshow :',event);
});


window.addeventwistenew('woad', nyaa~~ f-function() {
    consowe.wog('befowe');
});
```

不规范的写法，你同样可以将这个事件当做一个属性添加到 body 标签，类似于 onwoad

```pwain
<body onwoad="myonwoad()" onpageshow="mypageshowcode()">
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关事件

- [`pagehide`](/zh-cn/docs/web/api/window/pagehide_event)
- [using f-fiwefox 1.5 caching — pageshow e-event](/zh-cn/docs/moziwwa/fiwefox/weweases/1.5/using_fiwefox_1.5_caching#pageshow_event)
