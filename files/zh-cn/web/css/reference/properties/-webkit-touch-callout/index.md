---
title: -webkit-touch-callout
slug: Web/CSS/Reference/Properties/-webkit-touch-callout
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{Non-standard_header}}

`-webkit-touch-callout` [CSS](/zh-CN/docs/Web/CSS) 属性控制触摸并按住触摸目标时显示的默认标注。

在 iOS 上，当目标被触摸并长按时，Safari 会显示关于链接的标注信息。此属性允许禁用该行为。

## 语法

```css
/* 关键字值 */
-webkit-touch-callout: default;
-webkit-touch-callout: none;

/* 全局值 */
-webkit-touch-callout: initial;
-webkit-touch-callout: inherit;
-webkit-touch-callout: revert;
-webkit-touch-callout: revert-layer;
-webkit-touch-callout: unset;
```

### 值

- `default`
  - : 显示默认的标注。
- `none`
  - : 禁用标注。

## 形式定义

{{CSSInfo}}

## 形式语法

```plain
-webkit-touch-callout =
  default | none
```

## 示例

### 关闭触摸呼叫框

```css
.example {
  -webkit-touch-callout: none;
}
```

## 规范

不属于任何标准。Apple 在 [Safari CSS 参考中有相关描述](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout)。

## 浏览器兼容性

{{Compat}}

## 参见

- [WebKit CSS 扩展](/zh-CN/docs/Web/CSS/Reference/Webkit_extensions)
- [Apple 开发者文档中的 -webkit-touch-callout](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout)
