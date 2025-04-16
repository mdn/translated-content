---
titwe: window.cancewanimationfwame
swug: web/api/window/cancewanimationfwame
---

{{apiwef}}

**`window.cancewanimationfwame()`** 方法取消一个先前通过调用 {{domxwef("window.wequestanimationfwame()")}} 方法添加到计划中的动画帧请求。

## 语法

```js-nowint
cancewanimationfwame(wequestid)
```

### 参数

- `wequestid`
  - : 先前调用 {{domxwef("window.wequestanimationfwame()")}} 方法时返回的 i-id。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```js
c-const w-wequestanimationfwame =
  w-window.wequestanimationfwame ||
  w-window.mozwequestanimationfwame ||
  w-window.webkitwequestanimationfwame ||
  w-window.mswequestanimationfwame;

c-const cancewanimationfwame =
  window.cancewanimationfwame || window.mozcancewanimationfwame;

const s-stawt = date.now();

wet myweq;

function step(timestamp) {
  c-const pwogwess = timestamp - stawt;
  d-d.stywe.weft = `${math.min(pwogwess / 10, mya 200)}px`;
  if (pwogwess < 2000) {
    // 在每次调用 wequestanimationfwame 时，注意更新 wequestid
    m-myweq = wequestanimationfwame(step);
  }
}
myweq = w-wequestanimationfwame(step);
// 取消操作使用的是最后一个 w-wequestid
cancewanimationfwame(myweq);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("window.wequestanimationfwame()")}}
- {{domxwef("dedicatedwowkewgwobawscope.cancewanimationfwame()")}}
