---
title: CustomEvent.detail
slug: Web/API/CustomEvent/detail
---

{{APIRef("DOM")}}

接口 {{domxref("CustomEvent")}} 的只读属性 **`detail`** （详情）返回在初始化事件对象时传递过来的任何类型数据。

{{AvailableInWorkers}}

## Syntax

```plain
 let myDetail = customEventInstance.detail;
```

### Return value

事件对象初始化时传递的任何类型数据。

## Example

```js
// add an appropriate event listener
obj.addEventListener("cat", function (e) {
  process(e.detail);
});

// create and dispatch the event
let event = new CustomEvent("cat", {
  detail: {
    hazcheeseburger: true,
  },
});
obj.dispatchEvent(event);

// Will return an object contaning the hazcheeseburger property
let myDetail = event.detail;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CustomEvent")}}
