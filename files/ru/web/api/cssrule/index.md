---
title: CSSRule
slug: Web/API/CSSRule
---

{{APIRef("CSSOM")}}

Интерфейс **CSSRule** представляет собой одно правило CSS. Есть несколько типов правил, перечисленных в разделе [Type constants](#type_constants) ниже.

Интерфейс CSSRule определяет общие свойства для всех правил, в то время как свойства характерные только для определённых типов правил указаны в более специализированных интерфейсах для соответствующих типов этих правил.

Ссылки на CSSRule вы можете получить на странице {{domxref ("CSSStyleSheet")}} список cssRules.

## Общие свойства для всех экземпляров CSSRule

- {{domxref("CSSRule.cssText")}}
  - : Represents the textual representation of the rule, e.g. "`h1,h2 { font-size: 16pt }`" or "`@import 'url'`". To access or modify parts of the rule (e.g. the value of "font-size" in the example) use the properties on the [specialized interface for the rule's type](#type_constants).
- {{domxref("CSSRule.parentRule")}} {{readonlyinline}}
  - : Returns the containing rule, otherwise `null`. E.g. if this rule is a style rule inside an {{cssxref("@media")}} block, the parent rule would be that {{domxref("CSSMediaRule")}}.
- {{domxref("CSSRule.parentStyleSheet")}} {{readonlyinline}}
  - : Returns the {{domxref("CSSStyleSheet")}} object for the style sheet that contains this rule
- {{domxref("CSSRule.type")}} {{readonlyinline}}
  - : One of the [Type constants](#type_constants) indicating the type of CSS rule.

## Константы

### Типы констант

The `CSSRule` interface specifies integer constants that can be used in conjunction with a `CSSRule`'s {{domxref("cssRule/type","type")}} property to discern the rule type (and therefore, which specialized interface it implements). The relationships between these constants and the interfaces are:

| Type                               | Value | Rule-specific interface                                    | Comments and examples                                                                                                                                                                                                                               |
| ---------------------------------- | ----- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CSSRule.STYLE_RULE`               | `1`   | {{domxref("CSSStyleRule")}}                                | The most common kind of rule: `selector { prop1: val1; prop2: val2; }`                                                                                                                                                                              |
| `CSSRule.IMPORT_RULE`              | `3`   | {{domxref("CSSImportRule")}}                               | An {{cssxref("@import")}} rule. (Until the documentation is completed, see the interface definition in the Mozilla source code: [nsIDOMCSSImportRule](http://mxr.mozilla.org/mozilla-central/source/dom/interfaces/css/nsIDOMCSSImportRule.idl#9).) |
| `CSSRule.MEDIA_RULE`               | `4`   | {{domxref("CSSMediaRule")}}                                |                                                                                                                                                                                                                                                     |
| `CSSRule.FONT_FACE_RULE`           | `5`   | {{domxref("CSSFontFaceRule")}}                             |                                                                                                                                                                                                                                                     |
| `CSSRule.PAGE_RULE`                | `6`   | {{domxref("CSSPageRule")}}                                 |                                                                                                                                                                                                                                                     |
| `CSSRule.KEYFRAMES_RULE`           | `7`   | {{domxref("CSSKeyframesRule")}} {{experimental_inline}}    |                                                                                                                                                                                                                                                     |
| `CSSRule.KEYFRAME_RULE`            | `8`   | {{domxref("CSSKeyframeRule")}} {{experimental_inline}}     |                                                                                                                                                                                                                                                     |
| _Reserved for future use_          | `9`   |                                                            | Should be used to define color profiles in the future                                                                                                                                                                                               |
| `CSSRule.NAMESPACE_RULE`           | `10`  | {{domxref("CSSNamespaceRule")}} {{experimental_inline}}    |                                                                                                                                                                                                                                                     |
| `CSSRule.COUNTER_STYLE_RULE`       | `11`  | {{domxref("CSSCounterStyleRule")}} {{experimental_inline}} |                                                                                                                                                                                                                                                     |
| `CSSRule.SUPPORTS_RULE`            | `12`  | {{domxref("CSSSupportsRule")}}                             |                                                                                                                                                                                                                                                     |
| `CSSRule.DOCUMENT_RULE`            | `13`  | {{domxref("CSSDocumentRule")}} {{experimental_inline}}     |                                                                                                                                                                                                                                                     |
| `CSSRule.FONT_FEATURE_VALUES_RULE` | `14`  | {{domxref("CSSFontFeatureValuesRule")}}                    |                                                                                                                                                                                                                                                     |
| `CSSRule.VIEWPORT_RULE`            | `15`  | {{domxref("CSSViewportRule")}} {{experimental_inline}}     |                                                                                                                                                                                                                                                     |
| `CSSRule.REGION_STYLE_RULE`        | `16`  | {{domxref("CSSRegionStyleRule")}} {{experimental_inline}}  |                                                                                                                                                                                                                                                     |
| `CSSRule.UNKNOWN_RULE`             | `0`   | {{domxref("CSSUnknownRule")}}                              |                                                                                                                                                                                                                                                     |
| `CSSRule.CHARSET_RULE`             | `2`   | `CSSCharsetRule`                                           | (Removed in most browsers.)                                                                                                                                                                                                                         |

An up-to-date informal list of constants can be found on the [CSSWG Wiki](http://wiki.csswg.org/spec/cssom-constants).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using dynamic styling information](/ru/docs/Web/Guide/DOM/Using_dynamic_styling_information)
