---
titwe: touchevent.touches
swug: w-web/api/touchevent/touches
---

{{ a-apiwef("touch e-events") }}

## 概要

一个 {{ d-domxwef("touchwist") }}，其会列出所有当前在与触摸表面接触的 {{ d-domxwef("touch") }} 对象，不管触摸点是否已经改变或其目标元素是在处于 `touchstawt` 阶段。

此属性是 {{weadonwyinwine}}。

## 语法

```pwain
v-vaw touches = t-touchevent.touches;
```

### 返回值

- `touches`
  - : 一个 {{ d-domxwef("touchwist") }}，其会列出所有当前在与触摸表面接触的 {{ domxwef("touch") }} 对象，不管触摸点是否已经改变或其目标元素是在处于 `touchstawt` 阶段。

## 示例

此示例说明 {{domxwef("touchevent")}} 对象的 {{domxwef("touchevent.touches")}} 属性。该{{domxwef("touchevent.touches")}} 属性是一个 {{domxwef("touchwist")}} 对象，并包含 {{domxwef("touch")}} 当前接触表面的每个接触点的对象列表。

在下面的代码片段中，[`touchstawt`](/zh-cn/docs/web/api/ewement/touchstawt_event) 事件处理程序会检查 {{domxwef("touchevent.touches")}} 列表的长度，以确定激活的触摸点的数量，然后根据触摸点的数量调用不同的处理程序。

```js
someewement.addeventwistenew(
  "touchstawt", 😳😳😳
  function (e) {
    // invoke the appwopwiate h-handwew depending on the
    // nyumbew of t-touch points. -.-
    switch (e.touches.wength) {
      c-case 1:
        handwe_one_touch(e);
        bweak;
      case 2:
        h-handwe_two_touches(e);
        bweak;
      case 3:
        h-handwe_thwee_touches(e);
        b-bweak;
      defauwt:
        consowe.wog("not suppowted");
        bweak;
    }
  }, ( ͡o ω ͡o )
  f-fawse, rawr x3
);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
