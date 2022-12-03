---
title: CSSStyleSheet
slug: Web/API/CSSStyleSheet
---

{{ ApiRef() }}

This section describes the [CSSStyleSheet](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet) object, which represents a single CSS stylesheet.

A CSS stylesheet consists of CSS rules, each of them can be manipulated through its [CSSRule](/en/DOM/cssRule) object. The stylesheet object itself lets you examine and modify the stylesheet, including its list of rules.

You can get the list of stylesheets for a given document using the [document.styleSheets](/en/DOM/document.styleSheets) property.

### Properties

- [stylesheet.cssRules](/en/DOM/stylesheet.cssRules)
  - : Returns all of the CSS rules in the stylesheet as an array.
- [stylesheet.disabled](/en/DOM/stylesheet.disabled)
  - : This property indicates whether the current stylesheet has been applied or not.
- [stylesheet.href](/en/DOM/stylesheet.href)
  - : Returns the location of the stylesheet.
- [stylesheet.media](/en/DOM/stylesheet.media)
  - : Specifies the intended destination medium for style information.
- [stylesheet.ownerNode](/en/DOM/stylesheet.ownerNode)
  - : Returns the node that associates this style sheet with the document.
- [stylesheet.ownerRule](/en/DOM/stylesheet.ownerRule)
  - : If this style sheet comes from an @import rule, the ownerRule property will contain the CSSImportRule.
- [stylesheet.parentStyleSheet](/en/DOM/stylesheet.parentStyleSheet)
  - : Returns the stylesheet that is including this one, if any.
- [stylesheet.title](/en/DOM/stylesheet.title)
  - : Returns the advisory title of the current style sheet.
- [stylesheet.type](/en/DOM/stylesheet.type)
  - : Specifies the style sheet language for this style sheet.

### Methods

- [stylesheet.deleteRule](/en/DOM/stylesheet.deleteRule)
  - : Deletes a rule from the stylesheet.
- [stylesheet.insertRule](/en/DOM/stylesheet.insertRule)
  - : Inserts a new style rule into the current style sheet.

### Specification

[DOM Level 2 Style Sheets: StyleSheet](http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet)

[DOM Level 2 CSS: CSSStyleSheet](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet)
