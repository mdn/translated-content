---
title: "HTMLElement : propriété attributeStyleMap"
short-title: attributeStyleMap
slug: Web/API/HTMLElement/attributeStyleMap
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("CSSOM")}}

La propriété en lecture seule **`attributeStyleMap`** de l'interface {{DOMxRef("HTMLElement")}} retourne un objet {{DOMxRef("StylePropertyMap")}} dynamique qui contient la liste des propriétés de style de l'élément définies dans l'attribut `style` en ligne, ou assignées via la propriété {{DOMxRef("HTMLElement.style", "style")}} de l'interface {{DOMxRef("HTMLElement")}} par script.

Les propriétés abrégées sont développées. Si vous définissez `border-top: 1px solid black`, les propriétés détaillées ({{CSSxRef("border-top-color")}}, {{CSSxRef("border-top-style")}} et {{CSSxRef("border-top-width")}}) sont définies à la place.

La principale différence entre la propriété {{DOMxRef("HTMLElement.style", "style")}} et la propriété `attributeStyleMap` est que la propriété `style` retourne un objet {{DOMxRef("CSSStyleDeclaration")}}, tandis que la propriété `attributeStyleMap` retourne un objet {{DOMxRef("StylePropertyMap")}}.

Bien que la propriété elle-même ne soit pas modifiable, vous pouvez lire et écrire les styles en ligne via l'objet {{DOMxRef("StylePropertyMap")}} qu'elle retourne, tout comme avec l'objet {{DOMxRef("CSSStyleDeclaration")}} retourné par la propriété `style`.

## Valeur

Un objet {{DOMxRef("StylePropertyMap")}} dynamique.

## Exemples

L'extrait de code suivant montre la relation entre l'attribut `style` et la propriété `attributeStyleMap`&nbsp;:

```html
<div id="el" style="border-top: 1px solid blue; color: red;">
  Un élément d'exemple
</div>
<div id="output"></div>
```

```css
#el {
  font-size: 16px;
}

#output {
  white-space: pre-line;
}
```

```js
const element = document.getElementById("el");
const output = document.getElementById("output");

for (const property of element.attributeStyleMap) {
  output.textContent += `${property[0]} = ${property[1][0].toString()}\n`;
}
```

{{EmbedLiveSample("Exemples", 200, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLElement.style")}}
- La propriété {{DOMxRef("SVGElement.attributeStyleMap")}}
- La propriété {{DOMxRef("MathMLElement.attributeStyleMap")}}
