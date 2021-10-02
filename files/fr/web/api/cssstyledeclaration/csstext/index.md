---
title: CSSStyleDeclaration.cssText
slug: Web/API/CSSStyleDeclaration/cssText
translation_of: Web/API/CSSStyleDeclaration/cssText
---
A ne pas confondre avec la règle de style de feuille de style {{domxref("CSSRule.cssText")}}.

{{APIRef("CSSOM") }}

**cssText** retourne ou définit seulement le texte de la déclaration de style **inline** de l'élément. Pour pouvoir définir dynamiquement une règle d'une **stylesheet**, voir [Utilisation d'informations de mise en forme dynamiques.](/fr-FR/docs/DOM/Using_dynamic_styling_information)

## Syntaxe

```js
chaine = elem.style.cssText
```

## Exemple

```html
<span id="s1" style="color: red;">
Du texte
</span>

<script>
  var elem = document.getElementById("s1");
  alert(elem.style.cssText); // "color: red;"
</script>
```

## Spécification

- [DOM Level 2 Style CSS - Interface CSSStyleDeclaration (introduced in DOM Level 2)](http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration)
