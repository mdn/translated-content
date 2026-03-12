---
title: "Document : propriété styleSheets"
short-title: styleSheets
slug: Web/API/Document/styleSheets
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("CSSOM")}}

La propriété en lecture seule **`styleSheets`** de l'interface {{DOMxRef("Document")}} retourne un tableau {{DOMxRef('StyleSheetList')}} d'objets {{DOMxRef('CSSStyleSheet')}}, pour les feuilles de style explicitement liées ou intégrées dans un document.

## Valeur

La liste retournée est ordonnée comme suit&nbsp;:

- Les feuilles de style récupérées à partir des en-têtes {{HTTPHeader("Link")}} sont placées en premier, triées dans l'ordre des en-têtes.
- Les feuilles de style récupérées à partir du DOM sont placées après, triées selon [l'ordre de l'arbre <sup>(angl.)</sup>](https://dom.spec.whatwg.org/#concept-tree-order).

## Exemples

### Récupérer une feuille de style spécifique par son titre

```js
function getStyleSheet(uniqueTitle) {
  for (const sheet of document.styleSheets) {
    if (sheet.title === uniqueTitle) {
      return sheet;
    }
  }
}
```

### Accéder aux règles dans la feuille de style

Vous pouvez accéder à ces feuilles de style et à leurs règles individuellement en utilisant les objets feuille de style, style et {{DOMxRef("CSSRule")}}, comme le montre cet exemple, qui affiche tous les sélecteurs de règles de style dans la console.

```js
for (const styleSheet of document.styleSheets) {
  for (const rule of styleSheet.cssRules) {
    console.log(`${rule.selectorText}\n`);
  }
}
```

Pour un document avec une seule feuille de style dans laquelle les trois règles suivantes sont définies&nbsp;:

```css
body {
  background-color: darkblue;
}
p {
  font-family: "Arial";
  font-size: 10pt;
  margin-left: 0.125in;
}
#lumpy {
  display: none;
}
```

Ce script affiche ce qui suit&nbsp;:

```plain
BODY
P
#LUMPY
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
