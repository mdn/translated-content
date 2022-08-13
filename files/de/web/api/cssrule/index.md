---
title: CSSRule
slug: Web/API/CSSRule
tags:
  - CSSOM
translation_of: Web/API/CSSRule
---
{{APIRef("CSSOM")}}

An object implementing the **`CSSRule`** DOM interface represents a single CSS at-rule. References to a `CSSRule`-implementing object may be obtained by looking at a [CSS style sheet's](/de/docs/Web/API/CSSStyleSheet) {{domxref("CSSStyleSheet","cssRules")}} list.

There are several kinds of rules. The `CSSRule` interface specifies the properties common to all rules, while properties unique to specific rule types are specified in the more specialized interfaces for those rules' respective types.

## Syntax

The syntax is described using the [WebIDL](http://dev.w3.org/2006/webapi/WebIDL/) format.

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

## Properties common to all CSSRule instances

- {{domxref("CSSRule.cssText")}}
  - : Represents the textual representation of the rule, e.g. `"h1,h2 { font-size: 16pt }"`
- {{domxref("CSSRule.parentRule")}} {{readonlyinline}}
  - : Returns the containing rule, otherwise `null`. E.g. if this rule is a style rule inside an {{cssxref("@media")}} block, the parent rule would be that {{domxref("CSSMediaRule")}}.
- {{domxref("CSSRule.parentStyleSheet")}} {{readonlyinline}}
  - : Returns the {{domxref("CSSStyleSheet")}} object for the style sheet that contains this rule
- {{domxref("CSSRule.type")}} {{readonlyinline}}
  - : One of the [Type constants](#type_constants) indicating the type of CSS rule.

## Constants

### Type constants

The `CSSRule` interface specifies integer constants that can be used in conjunction with a `CSSRule`'s {{domxref("cssRule/type","type")}} property to discern the rule type (and therefore, which specialized interface it implements). The relationships between these constants and the interfaces are:

| Type                               | Value | Rule-specific interface                                                                                                                                       |
| ---------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CSSRule.STYLE_RULE`               | `1`   | {{domxref("CSSStyleRule")}}                                                                                                                          |
| `CSSRule.MEDIA_RULE`               | `4`   | {{domxref("CSSMediaRule")}}                                                                                                                          |
| `CSSRule.FONT_FACE_RULE`           | `5`   | {{domxref("CSSFontFaceRule")}}                                                                                                                      |
| `CSSRule.PAGE_RULE`                | `6`   | {{domxref("CSSPageRule")}}                                                                                                                          |
| `CSSRule.IMPORT_RULE`              | `3`   | {{domxref("CSSImportRule")}} : [IDL: nsIDOMCSSImportRule](http://mxr.mozilla.org/mozilla-central/source/dom/interfaces/css/nsIDOMCSSImportRule.idl#9) |
| `CSSRule.CHARSET_RULE`             | `2`   | {{domxref("CSSCharsetRule")}} {{obsolete_inline}}                                                                                             |
| `CSSRule.UNKNOWN_RULE`             | `0`   | {{domxref("CSSUnknownRule")}}{{obsolete_inline}}                                                                                              |
| `CSSRule.KEYFRAMES_RULE`           | `7`   | {{domxref("CSSKeyframesRule")}} [1] {{experimental_inline}}                                                                                 |
| `CSSRule.KEYFRAME_RULE`            | `8`   | {{domxref("CSSKeyframeRule")}} [1] {{experimental_inline}}                                                                                 |
| _Reserved for future use_          | `9`   | Should be used to define color profiles in the future                                                                                                         |
| `CSSRule.NAMESPACE_RULE`           | `10`  | {{domxref("CSSNamespaceRule")}} {{experimental_inline}}                                                                                     |
| `CSSRule.COUNTER_STYLE_RULE`       | `11`  | {{domxref("CSSCounterStyleRule")}} {{experimental_inline}}                                                                                 |
| `CSSRule.SUPPORTS_RULE`            | `12`  | {{domxref("CSSSupportsRule")}}                                                                                                                      |
| `CSSRule.DOCUMENT_RULE`            | `13`  | {{domxref("CSSDocumentRule")}} {{experimental_inline}}                                                                                     |
| `CSSRule.FONT_FEATURE_VALUES_RULE` | `14`  | {{domxref("CSSFontFeatureValuesRule")}}                                                                                                          |
| `CSSRule.VIEWPORT_RULE`            | `15`  | {{domxref("CSSViewportRule")}} {{experimental_inline}}                                                                                     |
| `CSSRule.REGION_STYLE_RULE`        | `16`  | {{domxref("CSSRegionStyleRule")}} {{experimental_inline}}                                                                                 |

An up-to-date informal list of constants can be found on the [CSSWG Wiki](http://wiki.csswg.org/spec/cssom-constants).

\[1] On Gecko, before Firefox 19, the keyframe-related constants existed only in their prefixed version: `CSSRule.MOZ_KEYFRAMES_RULE` and `CSSRule.MOZ_KEYFRAME_RULE.` From Firefox 20 onwards, both versions are available. The prefixed version will be removed in the future.

## Specifications

| Specification                                                                                                | Status                                       | Comment                                                                                         |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| {{SpecName('CSSOM', '#css-rules', 'CSSRule')}}                                                 | {{Spec2('CSSOM')}}                     | Obsoleted values `CHARSET_RULE` and `UNKNOWN_RULE`. Added value `NAMESPACE_RULE`.               |
| {{SpecName("CSS3 Animations",'#cssrule', 'CSSRule')}}                                     | {{Spec2('CSS3 Animations')}}         | Added values `KEYFRAMES_RULE` and `KEYFRAME_RULE`.                                              |
| {{SpecName('CSS3 Fonts', '#om-fontfeaturevalues', 'CSSRule')}}                         | {{Spec2('CSS3 Fonts')}}             | Added value `FONT_FEATURE_VALUES_RULE`.                                                         |
| {{SpecName("CSS3 Counter Styles", "#extentions-to-cssrule-interface", 'CSSRule')}} | {{Spec2("CSS3 Counter Styles")}} | Added value `COUNTER_STYLE_RULE`.                                                               |
| {{SpecName("CSS3 Conditional", '#extentions-to-cssrule-interface', 'CSSRule')}}     | {{Spec2('CSS3 Conditional')}}     | Added value `SUPPORTS_RULE`. (`DOCUMENT_RULE` has been pushed to CSS Conditional Rules Level 4) |
| {{SpecName('DOM2 Style', 'css.html#CSS-CSSRule', 'CSSRule')}}                             | {{Spec2('DOM2 Style')}}             | Initial definition.                                                                             |

## Browser compatibility

To get browser compatibility information about the different type constant value, please consult the compatibility table of the associated interface.

{{Compat}}

## See also

- [Using dynamic styling information](/de/docs/Web/Guide/DOM/Using_dynamic_styling_information)
