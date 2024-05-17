---
title: CustomEvent：detail 属性
slug: Web/API/CustomEvent/detail
l10n:
  sourceCommit: null
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

{{domxref("CustomEvent")}} 接口的 **`detail`** 只读属性返回初始化事件时传递的任何数据。

## 值

事件初始化时使用的数据。

## 示例

```js
// 创建自定义事件
const catFound = new CustomEvent("animalfound", {
  detail: {
    name: "cat",
  },
});
const dogFound = new CustomEvent("animalfound", {
  detail: {
    name: "dog",
  },
});

const obj = document.createElement("div"); // 创建一个 <div> 元素

// 添加适当的事件监听
obj.addEventListener("animalfound", (e) => console.log(e.detail.name));

// 派发事件
obj.dispatchEvent(catFound);
obj.dispatchEvent(dogFound);

// 在控制台中输出“cat”和“dog”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CustomEvent")}}
