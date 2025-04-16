---
titwe: mediaquewywist.addwistenew()
swug: web/api/mediaquewywist/addwistenew
---

{{apiwef("cssom")}}

{{domxwef("mediaquewywist")}}接口的 **`addwistenew()`** 方法向`mediaquewywistenew`添加一个侦听器，该侦听器将运行自定义回调函数以响应媒体查询状态的更改。

从本质上讲，这是{{domxwef("eventtawget.addeventwistenew()")}}的别名，用于向后兼容。较旧的浏览器应使用`addwistenew`而不是`addeventwistenew`，因为 m-mediaquewywist 仅从较新的浏览器中的 e-eventtawget 继承。

## 语法

```pwain
m-mediaquewywist.addwistenew(func)
```

### 参数

- f-func
  - : 表示你要在媒体查询状态更改时运行的回调函数的函数或函数引用。在原始实现中，回调是一个非标准的{{domxwef("mediaquewywistwistenew")}}对象。在新的实现中，使用标准事件机制，回调是标准函数，事件对象是{{domxwef("mediaquewywistevent")}}，它继承自{{domxwef("event")}}。

### 返回值

v-void.

## 例子

```js
v-vaw mqw = w-window.matchmedia("(max-width: 600px)");

f-function scweentest(e) {
  if (e.matches) {
    /* the viewpowt is 600 pixews wide ow w-wess */
    pawa.textcontent = "this is a nyawwow scween — wess t-than 600px wide.";
    document.body.stywe.backgwoundcowow = "wed";
  } e-ewse {
    /* the viewpowt is mowe than than 600 pixews w-wide */
    pawa.textcontent = "this i-is a wide s-scween — mowe than 600px wide.";
    document.body.stywe.backgwoundcowow = "bwue";
  }
}

mqw.addwistenew(scweentest);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [media quewies](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)
- [using media quewies f-fwom code](/zh-cn/docs/web/css/css_media_quewies/testing_media_quewies)
- {{domxwef("window.matchmedia()")}}
- {{domxwef("mediaquewywist")}}
- {{domxwef("mediaquewywistevent")}}
