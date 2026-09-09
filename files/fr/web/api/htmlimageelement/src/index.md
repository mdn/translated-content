---
title: "HTMLImageElement : propriété src"
short-title: src
slug: Web/API/HTMLImageElement/src
l10n:
  sourceCommit: 153625a091c46a21882a44740d26699c16565a24
---

{{APIRef("HTML DOM")}}

La propriété **`src`** de l'interface {{DOMxRef("HTMLImageElement")}} reflète l'attribut HTML `{{HTMLElement("img#src", "src")}}` qui définit l'image à afficher dans l'élément HTML {{HTMLElement("img")}}.

Définir la propriété `src` déclenche la planification d'une tâche pour récupérer la ressource définie&nbsp;; l'élément n'a pas besoin d'être inséré dans le document actif au préalable.
Sauf si le chargement est défini sur `lazy`, l'image est récupérée presque immédiatement (si le chargement paresseux est défini, la requête est différée jusqu'à ce que l'élément soit proche de la zone d'affichage&nbsp;: ce qui ne peut se produire tant que l'élément n'est pas inséré).

## Valeur

Une chaîne de caractères. Pour plus d'informations sur la syntaxe de l'attribut `src`, voir la référence HTML `{{HTMLElement("img#src", "&lt;img&gt;")}}`.

## Exemples

### Définir l'attribut `src`

```js
const img = new Image();
img.src = "exemple.png";
img.alt = "Une image d'exemple";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLImageElement.currentSrc")}}
- La propriété {{DOMxRef("HTMLImageElement.srcset")}}
- La propriété {{DOMxRef("HTMLImageElement.sizes")}}
