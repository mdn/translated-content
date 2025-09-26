---
title: CSSRule
slug: Web/API/CSSRule
---

{{APIRef("CSSOM")}}

**`CSSRule`** 接口表示一条 CSS 规则。有几种不同的规则类型，在下面的[类型常量](#类型常量)部分中有悉数列出。

`CSSRule` 接口指定了所有类型的规则的公共属性，而特定类型的规则的专有属性则在这些规则各自类型的、更专用的接口中被指定。

可以通过 {{domxref("CSSStyleSheet")}} 的 `cssRules` 列表了解更多关于 `CSSRule` 的介绍。

## 所有 CSSRule 实例共有的属性

- {{domxref("CSSRule.cssText")}}
  - : 返回规则的文本表示。例如 `"h1,h2 { font-size: 16pt }"`
- {{domxref("CSSRule.parentRule")}} {{readonlyinline}}
  - : 返回包含规则，否则返回 `null`。例如：如果此规则是 {{cssxref("@media")}} 块中的样式规则，则其父规则将是该 {{domxref("CSSMediaRule")}}。
- {{domxref("CSSRule.parentStyleSheet")}} {{readonlyinline}}
  - : 返回包含此规则的样式表的 {{domxref("CSSStyleSheet")}} 对象。
- {{domxref("CSSRule.type")}} {{readonlyinline}}
  - : 规则类型，表示 CSS 规则类型 [类型常量](#类型常量) 中的一种类型。

## 常量

### 类型常量

`CSSRule` 接口通过一系列整型常量来约束 `CSSRule` 的 {{domxref("cssRule/type","type")}} 取值范围，同时这些常量也对应规则的具体实现接口。这些常量和接口的对应关系如下：

- {{DOMXRef("CSSStyleRule")}}
- {{DOMXRef("CSSImportRule")}}
- {{DOMXRef("CSSMediaRule")}}
- {{DOMXRef("CSSFontFaceRule")}}
- {{DOMXRef("CSSPageRule")}}
- {{DOMXRef("CSSNamespaceRule")}}
- {{DOMXRef("CSSKeyframesRule")}}
- {{DOMXRef("CSSKeyframeRule")}}
- {{DOMXRef("CSSCounterStyleRule")}}
- {{DOMXRef("CSSDocumentRule")}}
- {{DOMXRef("CSSSupportsRule")}}
- {{DOMXRef("CSSFontFeatureValuesRule")}}
- {{DOMXRef("CSSViewportRule")}}

An up-to-date informal list of constants can be found on the [CSSWG Wiki](https://wiki.csswg.org/spec/cssom-constants).

## 语法

使用 [WebIDL](https://dev.w3.org/2006/webapi/WebIDL/) 语法格式进行描述。

```plain
interface CSSRule {
    const unsigned short STYLE_RULE = 1;
    const unsigned short CHARSET_RULE = 2;
    const unsigned short IMPORT_RULE = 3;
    const unsigned short MEDIA_RULE = 4;
    const unsigned short FONT_FACE_RULE = 5;
    const unsigned short PAGE_RULE = 6;
    const unsigned short KEYFRAMES_RULE = 7;
    const unsigned short KEYFRAME_RULE = 8;
    const unsigned short NAMESPACE_RULE = 10;
    const unsigned short COUNTER_STYLE_RULE = 11;
    const unsigned short SUPPORTS_RULE = 12;
    const unsigned short DOCUMENT_RULE = 13;
    const unsigned short FONT_FEATURE_VALUES_RULE = 14;
    const unsigned short VIEWPORT_RULE = 15;
    const unsigned short REGION_STYLE_RULE = 16;
    readonly attribute unsigned short type;
    attribute DOMString cssText;
    readonly attribute CSSRule? parentRule;
    readonly attribute CSSStyleSheet? parentStyleSheet;
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using dynamic styling information](/zh-CN/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
