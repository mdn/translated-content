---
title: "HTMLElement : propriété anchorElement"
short-title: anchorElement
slug: Web/API/HTMLElement/anchorElement
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("HTML DOM")}}{{Non-standard_Header}}{{SeeCompatTable}}

La propriété **`anchorElement`** de l'interface {{DOMxRef("HTMLElement")}} retourne une référence vers l'élément d'ancrage de l'élément. Cela fonctionne uniquement pour les éléments associés à leur ancre via l'attribut HTML [`anchor`](/fr/docs/Web/HTML/Reference/Global_attributes/anchor), et non pour les éléments associés à leur ancre via les propriétés CSS {{CSSxRef("anchor-name")}} et {{CSSxRef("position-anchor")}}.

## Valeur

Une instance de {{DOMxRef("HTMLElement")}} représentant l'élément d'ancrage de l'élément, ou `null` s'il n'en possède pas.

## Exemples

### Utilisation simple

Cet exemple associe un élément à une ancre en HTML, et utilise JavaScript pour récupérer une référence vers l'élément d'ancrage.

#### HTML

Dans le HTML, nous créons un élément {{HTMLElement("div")}} avec un [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) égal à `example-anchor`. Ce sera notre élément d'ancrage. Nous ajoutons ensuite un autre `<div>` avec une classe `infobox` et un attribut [`anchor`](/fr/docs/Web/HTML/Reference/Global_attributes/anchor) défini à `example-anchor`. Cela désigne le premier `<div>` comme l'ancre du second `<div>`, les associant ainsi.

Nous ajoutons également un élément {{HTMLElement("p")}} pour afficher le résultat.

```html
<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>Ceci est une boîte d'information.</p>
</div>

<p class="output"></p>
```

#### JavaScript

Nous utilisons JavaScript pour obtenir des références vers l'élément positionné et l'élément d'affichage, puis nous affichons la valeur de l'attribut `id` de la propriété `anchorElement` de l'élément positionné, montrant que l'élément d'ancrage est bien l'`anchorElement` de l'élément positionné.

```js
const posElem = document.querySelector(".infobox");
const outputElem = document.querySelector(".output");

try {
  outputElem.textContent = `L'élément d'ancrage de l'élément positionné est ${posElem.anchorElement.id}.`;
} catch (e) {
  outputElem.textContent = `Votre navigateur ne prend pas en charge la propriété anchorElement.`;
}
```

#### Résultat

Le résultat est le suivant.

{{EmbedLiveSample("Utilisation simple", "100%", 110)}}

## Spécifications

Cet attribut ne fait actuellement pas partie de la spécification HTML. Lisez la discussion sur l'ajout de la propriété `anchorElement` sur [https://github.com/whatwg/html/pull/9144 <sup>(angl.)</sup>](https://github.com/whatwg/html/pull/9144).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML [`anchor`](/fr/docs/Web/HTML/Reference/Global_attributes/anchor)
- Les propriétés CSS {{CSSxRef("anchor-name")}} et {{CSSxRef("position-anchor")}}
- [Le module CSS de positionnement d'ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning)
