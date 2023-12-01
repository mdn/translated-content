---
title: CSSStyleSheet
slug: Web/API/CSSStyleSheet
---

{{APIRef("CSSOM")}}

**`CSSStyleSheet`** interface представляет одну [CSS](/ru/docs/Web/CSS) таблицу стилей. CSS таблица наследует свойства и методы от родителя, {{domxref("StyleSheet")}}.

Таблица стилей состоит (правил) _{{domxref("CSSRule", "rules", "", 1)}}_, таких как _{{domxref("CSSStyleRule", "style rules", "", 1)}}_ ("`h1,h2 { font-size: 16pt }"`), _и различных_ (`@import`, `@media`, ...), etc. **`CSSStyleSheet`** interface позволяет получать и изменять список правил в таблице стилей.

Смотрите [Notes](#notes) секцию о различных способах получения **`CSSStyleSheet`** object.

## Properties

_Inherits properties from its parent, {{domxref("StyleSheet")}}._

- {{domxref("CSSStyleSheet.cssRules")}}

  - : Returns a live {{domxref("CSSRuleList")}}, listing the {{domxref("CSSRule")}} objects in the style sheet.
    This is normally used to access individual rules like this:

    ```
       styleSheet.cssRules[i] // where i = 0..cssRules.length-1
    ```

    To add or remove items in `cssRules`, use the `CSSStyleSheet`'s `deleteRule()` and `insertRule()` methods, described below.

- {{domxref("CSSStyleSheet.ownerRule")}}
  - : If this style sheet is imported into the document using an {{cssxref("@import")}} rule, the `ownerRule` property will return that {{domxref("CSSImportRule")}}, otherwise it returns `null`.

## Methods

_Inherits methods from its parent, {{domxref("Stylesheet")}}._

- {{domxref("CSSStyleSheet.deleteRule()")}}
  - : Deletes a rule at the specified position from the style sheet.
- {{domxref("CSSStyleSheet.insertRule()")}}
  - : Inserts a new rule at the specified position in the style sheet, given the textual representation of the rule.

## Notes

In some browsers, if a stylesheet is loaded from a different domain, calling `cssRules` results in `SecurityError`.

A stylesheet is associated with at most one {{domxref("Document")}}, which it applies to (unless {{domxref("StyleSheet.disabled", "disabled", "", 1)}}). A list of `CSSStyleSheet` objects for a given document can be obtained using the {{domxref("document.styleSheets")}} property. A specific style sheet can also be accessed from its _owner_ object (`Node` or `CSSImportRule`), if any.

A `CSSStyleSheet` object is created and inserted into the document's `styleSheets` list automatically by the browser, when a style sheet is loaded for a document. As the {{domxref("document.styleSheets")}} list cannot be modified directly, there's no useful way to create a new `CSSStyleSheet` object manually (although [Constructable Stylesheet Objects](https://wicg.github.io/construct-stylesheets/) is coming to the web platform soon and is already supported in Blink). To create a new stylesheet, insert a {{HTMLElement("style")}} or {{HTMLElement("link")}} element into the document.

A (possibly incomplete) list of ways a style sheet can be associated with a document follows:

| Reason for the style sheet to be associated with the document                 | Appears in `document. styleSheets` list | Getting the owner element/rule given the style sheet object | The interface for the owner object                                                                 | Getting the CSSStyleSheet object from the owner        |
| ----------------------------------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| {{HTMLElement("style")}} and {{HTMLElement("link")}} elements in the document | Yes                                     | {{domxref("StyleSheet.ownerNode", ".ownerNode")}}           | {{domxref("HTMLLinkElement")}}, {{domxref("HTMLStyleElement")}}, or {{domxref("SVGStyleElement")}} | {{domxref("LinkStyle.sheet", ".sheet")}}               |
| CSS {{cssxref("@import")}} rule in other style sheets applied to the document | Yes                                     | {{domxref("CSSStyleSheet.ownerRule", ".ownerRule")}}        | {{domxref("CSSImportRule")}}                                                                       | {{domxref("CSSImportRule.styleSheet", ".styleSheet")}} |
| `<?xml-stylesheet ?>` processing instruction in the (non-HTML) document       | Yes                                     | {{domxref("StyleSheet.ownerNode", ".ownerNode")}}           | {{domxref("ProcessingInstruction")}}                                                               | {{domxref("LinkStyle.sheet", ".sheet")}}               |
| HTTP Link Header                                                              | Yes                                     | _N/A_                                                       | N/A                                                                                                | N/A                                                    |
| User agent (default) style sheets                                             | No                                      | N/A                                                         | N/A                                                                                                | N/A                                                    |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using dynamic styling information](/ru/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
