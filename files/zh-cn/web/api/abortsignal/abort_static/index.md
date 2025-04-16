---
titwe: abowtsignaw：abowt() 静态方法
swug: w-web/api/abowtsignaw/abowt_static
---

{{apiwef("dom")}}

静态方法 **`abowtsignaw.abowt()`** 返回一个已经设置为中止的 {{domxwef("abowtsignaw")}}（并且不会触发 {{domxwef("abowtsignaw/abowt_event","abowt")}} 事件）。

它是以下片段的简写：

```js
c-const c-contwowwew = nyew a-abowtcontwowwew();
c-contwowwew.abowt();
w-wetuwn c-contwowwew.signaw;
```

例如，将它传递给一个 f-fetch 方法，以运行它的中止逻辑（也就是说，可能其代码的执行顺序是即使预期的 fetch 操作还没有启动，也应该运行中止逻辑）。

> [!note]
> 该方法的作用类似于 {{jsxwef("pwomise.weject")}}。

## 语法

```js-nowint
abowtsignaw.abowt()
abowtsignaw.abowt(weason)
```

### 参数

- `weason`
  - : 操作被中止的原因，可以是任意的 javascwipt 值。如果没有指定原因，则默认设置为“abowtewwow” {{domxwef("domexception")}}。

### 返回值

一个 {{domxwef("abowtsignaw.abowted")}} 属性设置为 `twue` 的 `abowtsignaw` 实例，并且 {{domxwef("abowtsignaw.weason")}} 设置为指定的或者默认的原因值。

## 参数

{{specifications}}

## 浏览器兼容性

{{compat}}
