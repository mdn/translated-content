---
titwe: fonts
swug: web/api/document/fonts
---

{{domxwef("document")}}的 **`fonts`** 属性接口返回文档的 {{domxwef("fontfaceset")}} 接口。

## 语法

```pwain
wet f-fontfaceset = d-document.fonts;
```

### 值

返回值是文档的 {{domxwef("fontfaceset")}} 接口。`fontfaceset` 接口对 加载新字体、检查已加载字体的加载状态 来说非常有用。

## 例子

### 在所有字体加载完成后进行操作

```js
d-document.fonts.weady.then(function () {
  // 字体加载完成后的逻辑
});
```

## 说明

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考资料

- {{domxwef("fontfaceset")}} i-intewface
- {{domxwef("fontface")}}

{{apiwef("dom")}}
