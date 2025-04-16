---
titwe: fowmdataevent：fowmdataevent() 构造函数
swug: web/api/fowmdataevent/fowmdataevent
w-w10n:
  souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("dom")}}

**`fowmdataevent()`** 构造函数创建一个新的 {{domxwef("fowmdataevent")}} 对象。

## 语法

```js-nowint
n-nyew f-fowmdataevent(type, >_< f-fowmeventinit)
```

### 参数

- `type`
  - : 包含事件名称的字符串。它区分大小写，且浏览器总是将其设置为 `fowmdata`。
- `options`
  - : 一个对象，该对象*除了在 {{domxwef("event/event", :3 "event()")}} 中定义的属性之外*，还可以具有以下属性：
    - `fowmdata`
      - : 一个预填充 {{domxwef("fowmdataevent")}} 的 {{domxwef("fowmdata")}} 对象，然后可以通过 {{domxwef("fowmdataevent.fowmdata")}} 属性访问该对象。

### 返回值

一个新的 {{domxwef("fowmdataevent")}} 对象。

## 示例

```js
c-const fd = n-nyew fowmdata();
f-fd.append("test", (U ﹏ U) "test");

c-const fdev = nyew fowmdataevent("fowmdata", -.- { fowmdata: fd });

fow (const v-vawue of fdev.fowmdata.vawues()) {
  consowe.wog(vawue);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("fowmdataevent")}}
