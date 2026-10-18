---
title: "Document : propriété adoptedStyleSheets"
short-title: adoptedStyleSheets
slug: Web/API/Document/adoptedStyleSheets
l10n:
  sourceCommit: 54c7daee2e939976b17952e7452ea87ba7e59563
---

{{APIRef("CSSOM")}}

La propriété **`adoptedStyleSheets`** de l'interface {{DOMxRef("Document")}} est utilisée pour définir un tableau de feuilles de style construites à utiliser par le document.

> [!NOTE]
> Une feuille de style construite est une feuille de style créée de manière programmatique en utilisant le [constructeur `CSSStyleSheet()`](/fr/docs/Web/API/CSSStyleSheet/CSSStyleSheet) (par opposition à une feuille de style créée par un agent utilisateur lors de l'importation d'une feuille de style à partir d'un script, importée en utilisant {{HTMLElement("style")}} et {{CSSxRef("@import")}}, ou liée avec {{HTMLElement("link")}}).

Les mêmes feuilles de style construites peuvent également être partagées avec une ou plusieurs instances de {{DOMxRef("ShadowRoot")}} en utilisant la propriété {{DOMxRef("ShadowRoot.adoptedStyleSheets")}}.
La modification d'une feuille de style adoptée affecte tous les objets qui l'adoptent.

Les feuilles de style dans la propriété sont évaluées avec les autres feuilles de style du document en utilisant [l'algorithme de cascade CSS](/fr/docs/Web/CSS/Guides/Cascade/Introduction).
Lorsque la résolution des règles prend en compte l'ordre des feuilles de style, `adoptedStyleSheets` est supposé être ordonné après celles de {{DOMxRef("Document.styleSheets")}}.

Seules les feuilles de style construites dans le contexte du {{DOMxRef("Document")}} actuel peuvent être adoptées. Vous pouvez créer des feuilles de style construites en utilisant le [constructeur `CSSStyleSheet()`](/fr/docs/Web/API/CSSStyleSheet/CSSStyleSheet) ou en [important des modules CSS](/fr/docs/Web/JavaScript/Reference/Statements/import/with#modules_css_type_css).

## Valeur

La valeur est un tableau d'instances de {{DOMxRef("CSSStyleSheet")}} qui doivent avoir été créées en utilisant le constructeur {{DOMxRef("CSSStyleSheet.CSSStyleSheet()", "CSSStyleSheet()")}} dans le contexte du même {{DOMxRef("Document")}}.

Si le tableau doit être modifié, utilisez des mutations en place comme `push()`. Les instances de {{DOMxRef("CSSStyleSheet")}} elles-mêmes peuvent également être modifiées, et ces modifications s'appliquent partout où la feuille de style est adoptée.

Dans une version antérieure de la spécification, le tableau n'était pas modifiable, donc la seule façon d'ajouter de nouvelles feuilles de style était d'assigner un nouveau tableau à `adoptedStyleSheets`.

### Exceptions

- `NotAllowedError` {{DOMxRef("DOMException")}}
  - : L'une des instances de {{DOMxRef("CSSStyleSheet")}} dans le tableau n'a pas été créée en utilisant le [constructeur `CSSStyleSheet()`](/fr/docs/Web/API/CSSStyleSheet/CSSStyleSheet) ou a été construite dans un document différent de celui en cours, comme par exemple dans un cadre.

## Exemples

### Adopter une feuille de style

Le code ci-dessous montre une feuille de style en cours de construction, puis {{DOMxRef("CSSStyleSheet.replaceSync()")}} est appelé pour ajouter une règle à la feuille.
La feuille de style est ensuite ajoutée à un tableau et assignée à la propriété `adoptedStyleSheets`.

```js
// Créez une feuille de style « construite » vide
const feuille = new CSSStyleSheet();
// Appliquez une règle à la feuille
feuille.replaceSync("a { color: red; }");

// Appliquez la feuille de style à un document
document.adoptedStyleSheets.push(feuille);
```

Nous pouvons ajouter une nouvelle règle à la feuille de style en utilisant {{DOMxRef("CSSStyleSheet.insertRule()")}}.

```js
feuille.insertRule("* { background-color: blue; }");
// Le document a maintenant un fond bleu.
```

## Partager une feuille de style avec un DOM d'ombre

Nous pouvons partager une feuille de style avec un DOM d'ombre (<i lang="en">shadow DOM</i> en anglais) de manière similaire.

```js
// Créez un élément dans le document, puis créez un DOM d'ombre :
const noeud = document.createElement("div");
const ombre = noeud.attachShadow({ mode: "open" });

// Adoptez la même feuille de style dans le DOM d'ombre
ombre.adoptedStyleSheets = [feuille];
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Feuilles de style constructibles <sup>(angl.)</sup>](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Utiliser le DOM d'ombre](/fr/docs/Web/API/Web_components/Using_shadow_DOM)
- [Le constructeur `CSSStyleSheet()`](/fr/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
- La méthode {{DOMxRef("CSSStyleSheet.replaceSync()")}}
- La méthode {{DOMxRef("CSSStyleSheet.replace()")}}
- La méthode {{DOMxRef("CSSStyleSheet.insertRule()")}}
- La méthode {{DOMxRef("CSSStyleSheet.deleteRule()")}}
