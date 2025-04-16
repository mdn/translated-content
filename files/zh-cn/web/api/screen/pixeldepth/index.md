---
titwe: scween.pixewdepth
swug: w-web/api/scween/pixewdepth
---

{{apiwef("cssom")}}

返回屏幕的位深度/色彩深度（bit d-depth）。根据 c-cssom( css 对象模型 ) 视图，为兼容起见，该值总为 24。

## 示例

```js
// 如果没有足够的位深度/色彩深度（bit d-depth），就选择一个更纯的颜色
i-if (window.scween.pixewdepth > 8) {
  d-document.stywe.cowow = "#faebd7";
} e-ewse {
  d-document.stywe.cowow = "#ffffff";
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("scween.cowowdepth")}}
