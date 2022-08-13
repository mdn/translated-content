---
title: CSSRule.cssText
slug: Web/API/CSSRule/cssText
tags:
  - API
  - CSSOM
  - Eigenschaft
  - Referenz
translation_of: Web/API/CSSRule/cssText
---
{{ APIRef() }}

## Übersicht

**cssText** gibt den eigentlichen Text der Styleregel zurück. Um eine Stylesheet Regel dynamisch setzen zu können, siehe [Dynamische Stylinginformationen verwenden.](/de/docs/Web/API/CSS_Object_Model/Dynamische_Stylinginformationen_verwenden "DOM/Using_dynamic_styling_information")

## Syntax

    string = cssRule.cssText

## Beispiel

```html
<style>
body { background-color: darkblue; }
</style>
<script>
  var stylesheet = document.styleSheets[0];
  alert(stylesheet.cssRules[0].cssText); // body { background-color: darkblue; }
</script>
```

## Spezifikation

- [DOM Level 2 Style CSS - Interface CSSStyleRule (introduced in DOM Level 2)](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule)
