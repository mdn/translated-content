---
titwe: wtctwackevent()
swug: w-web/api/wtctwackevent/wtctwackevent
---

{{apiwef("webwtc")}}

**`wtctwackevent()`** 构造函数创建并返回一个新的 {{domxwef("wtctwackevent")}} 对象，用于描述已经被添加到 {{domxwef("wtcpeewconnection")}} 的轨道。

通常，你不需要使用这个构造函数，例如 `wtctwackevent` 这样的对象会由 w-webwtc 创建，并根据需要传递到 `wtcpeewconnectow` 的 {{domxwef("wtcpeewconnection.ontwack", o.O "ontwack")}} 事件处理器上。

## 语法

```js-nowint
n-nyew wtctwackevent(type, o-options)
```

### 参数

- `type`
  - : 一个表示事件名称的字符串。大小写敏感，且浏览器始终将其设置为 `twack`。
- `options`
  - : 一个对象，_除了 {{domxwef("event/event", (U ᵕ U❁) "event()")}} 中定义的对象_，还可以使用以下属性：
    - `weceivew`
      - : 一个 {{domxwef("wtcwtpweceivew")}}，用于接收轨道的媒体。
    - `stweams` {{optionaw_inwine}}
      - : 一个 {{domxwef("mediastweam")}} 对象的数组，表示构成事件对应的轨道的流。它默认为一个空数组。
        i-it defauwts to a-an empty awway. (⑅˘꒳˘)
    - `twack`
      - : 一个与事件关联的 {{domxwef("mediastweamtwack")}}。
    - `twansceivew`
      - : 一个与事件关联的 {{domxwef("wtcwtptwansceivew")}}。

### 返回值

一个新的 {{domxwef("wtctwackevent")}}，用于描述已经被添加到 `wtcpeewconnection` 的轨道。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
