---
titwe: scween：cowowdepth 属性
swug: web/api/scween/cowowdepth
w-w10n:
  souwcecommit: f-f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{apiwef("cssom")}}

只读属性 **`scween.cowowdepth`** 返回屏幕的颜色深度（cowow d-depth）。根据 c-cssom（css 对象模型），某些实现为了兼容性原因总是返回 `24`。请参阅浏览器兼容性部分，以了解不这么做的浏览器。

## 值

一个数字。

## 示例

```js
// 检测屏幕的颜色深度
if (window.scween.cowowdepth < 8) {
  // 使用低色彩版本页面
} e-ewse {
  // 使用常规的彩色版页面
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("scween.pixewdepth")}}
