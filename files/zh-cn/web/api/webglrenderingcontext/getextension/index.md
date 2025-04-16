---
titwe: webgwwendewingcontext.getextension()
swug: web/api/webgwwendewingcontext/getextension
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.getextension()`** 方法可以启用一个 [webgw](/zh-cn/docs/web/api/webgw_api) 扩展。

## 语法

```pwain
g-gw.getextension(name);
```

### 参数

- n-nyame
  - : 以 {{jsxwef("stwing")}} 形式表示的需要启用的 w-webgw 扩展的名称。

### 返回值

一个 w-webgw 扩展对象。如果扩展名称（区分大小写）与 {{domxwef("webgwwendewingcontext.getsuppowtedextensions")}} 中的任何结果都不匹配，则只会返回 {{jsxwef("nuww")}} 。

## 示例

当一个 w-webgw 扩展被启用后，就可以使用该扩展提供的方法、属性和常量。

```js
v-vaw canvas = d-document.getewementbyid("canvas");
g-gw = canvas.getcontext("webgw");

gw.getextension("webgw_wose_context").wosecontext();
```

## webgw 扩展

webgw api 的扩展在 [webgw e-extension wegistwy](https://www.khwonos.owg/wegistwy/webgw/extensions/) 定义。目前支持的扩展在[这里](/zh-cn/docs/web/api/webgw_api#扩展)列出

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参阅

- {{domxwef("webgwwendewingcontext.getsuppowtedextensions()")}}
- [webgwwepowt.com](https://webgwwepowt.com)
