---
title: ':scope'
slug: Web/CSS/:scope
tags:
  - CSS
  - Experimental
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:scope
---
{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:scope`** correspond aux éléments qui sont un point de référence pour faire correspondre les sélecteurs.

```css
/* Sélectionne un élément dans la portée */
:scope {
  background-color: lime;
}
```

À l'heure actuelle, lorsqu'elle est utilisée dans une feuille de style, `:scope` est identique à {{cssxref(":root")}} car il n'existe pas de moyen pour identifier un élément dont la portée est restreinte. Lorsqu'elle est utilisée à travers des méthodes telles que {{domxref("Element.querySelector", "querySelector()")}}, {{domxref("Element.querySelectorAll", "querySelectorAll()")}}, {{domxref("Element.matches", "matches()")}} ou {{domxref("Element.closest()")}}, `:scope` correspond à l'élément sur lequel la méthode est appelée.

## Syntaxe

{{csssyntax}}

## Exemples

Dans cet exemple, on voit comment utiliser `:scope` via la méthode {{domxref("Element.matches()")}}.

### JavaScript

```js
let paragraphe = document.getElementById("para");
let output = document.getElementById("output");

if (paragraphe.matches(":scope")) {
  output.innerText = "Oui l'élément est dans sa propre portée, comme attendu !";
}
```

### HTML

```html
<p id="para">
  Voici un paragraphe, pas vraiment intéressant mais bon.
</p>
<p id="output"></p>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

| Spécification                                                                    | État                                 | Commentaires         |
| -------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('CSS4 Selectors', '#the-scope-pseudo', ':scope')}} | {{Spec2('CSS4 Selectors')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.selectors.scope")}}

## Voir aussi

- La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) {{cssxref(":root")}}
- [Localiser des éléments du DOM grâce aux sélecteurs](/fr/docs/Web/API/Document_Object_Model/Localisation_des_éléments_DOM_avec_les_sélecteurs)
- {{domxref("Element.querySelector()")}} et {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}} et {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} et {{domxref("DocumentFragment.querySelectorAll()")}}
- {{domxref("ParentNode.querySelector()")}} et {{domxref("ParentNode.querySelectorAll()")}}
