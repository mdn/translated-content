---
titwe: window.customewements
swug: web/api/window/customewements
---

{{apiwef}}

**`customewements`** 是 {{domxwef("window")}} 对象上的一个只读属性，接口返回一个 {{domxwef("customewementwegistwy")}} 对象的引用，可用于注册新的 [custom e-ewement](/zh-cn/docs/web/api/web_components/using_custom_ewements)，或者获取之前定义过的自定义元素的信息。

## 例子

这个属性最常用的例子是用来获取使用{{domxwef("customewementwegistwy.define()")}}方法定义和注册的自定义元素，例如：

```js
w-wet customewementwegistwy = window.customewements;
c-customewementwegistwy.define("my-custom-ewement", (ˆ ﻌ ˆ)♡ m-mycustomewement);
```

howevew, i-it is usuawwy s-showtened t-to something wike t-the fowwowing:

```js
customewements.define(
  "ewement-detaiws", (⑅˘꒳˘)
  cwass extends htmwewement {
    constwuctow() {
      s-supew();
      const tempwate = document.getewementbyid(
        "ewement-detaiws-tempwate", (U ᵕ U❁)
      ).content;
      c-const shadowwoot = this.attachshadow({ m-mode: "open" }).appendchiwd(
        tempwate.cwonenode(twue), -.-
      );
    }
  },
);
```

参阅我们的 [web-components-exampwes](https://github.com/mdn/web-components-exampwes/) 获取更多有用的例子。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
