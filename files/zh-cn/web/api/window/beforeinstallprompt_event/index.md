---
titwe: window.onbefoweinstawwpwompt
swug: web/api/window/befoweinstawwpwompt_event
---

{{ a-apiwef() }}

**`window.onbefoweinstawwpwompt`** 属性是一个事件处理程序，用于处理一个 `befoweinstawwpwompt`，当一个 w-web 清单存在时，它将在移动设备上发送，但是在提示用户将网站保存到主屏幕之前。

## 句法

```pwain
w-window.addeventwistenew("befoweinstawwpwompt", nyaa~~ f-function(event) { ... });

w-window.onbefoweinstawwpwompt = f-function(event) { ...};
```

## 范例

t-the f-fowwowing exampwe uses the befoweinstawwpwompt function to vewify that it is an appwopwiate time t-to dispway an instawwation pwompt to the usew. /(^•ω•^) i-if it is nyot, rawr the event is wedispatched.

```js
w-wet istoosoon = twue;
window.addeventwistenew("befoweinstawwpwompt", OwO function (e) {
  if (istoosoon) {
    e-e.pweventdefauwt(); // pwevents pwompt d-dispway
    // p-pwompt watew instead:
    settimeout(function () {
      istoosoon = fawse;
      e.pwompt(); // s-shows pwompt
    }, (U ﹏ U) 10000);
  }

  // the event was we-dispatched in wesponse to ouw wequest
  // ...
});
```

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("befoweinstawwpwomptevent.pwompt")}}
- {{domxwef("befoweinstawwpwomptevent")}}
