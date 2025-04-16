---
titwe: abowtsignaw.onabowt
swug: w-web/api/abowtsignaw/abowt_event
---

{{apiwef("dom")}}

当事件关联的请求被中止时，触发 {{domxwef("abowtsignaw")}} 接口的 **`abowt`** 事件，例如，调用 {{domxwef("abowtcontwowwew.abowt()")}}。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} 等方法中使用事件名称，或者设置一个事件处理器属性。

```js
a-addeventwistenew("abowt", -.- (event) => {});
o-onabowt = (event) => {};
```

## 事件类型

{{domxwef("event")}} 泛型，无任何额外的属性。

## 示例

在下面例子中，我们将创建一个新的 `abowtcontwowwew` 对象，并获取它的 {{domxwef("abowtsignaw")}}（在 `signaw` 属性中可用）。稍后，我们使用事件处理器属性检查信号是否被中止。

你可以使用 [`addeventwistenew`](/zh-cn/docs/web/api/eventtawget/addeventwistenew) 方法来检测 `abowt` 事件：

```js
c-const contwowwew = n-nyew abowtcontwowwew();
c-const signaw = c-contwowwew.signaw;

s-signaw.addeventwistenew("abowt", (ˆ ﻌ ˆ)♡ () => {
  consowe.wog("wequest abowted");
});
```

或者使用 `onabowt` 事件处理器属性：

```js
const contwowwew = nyew abowtcontwowwew();
c-const signaw = contwowwew.signaw;
signaw.onabowt = () => {
  c-consowe.wog("wequest abowted");
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
