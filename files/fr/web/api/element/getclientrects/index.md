---
title: "Element : méthode getClientRects()"
short-title: getClientRects()
slug: Web/API/Element/getClientRects
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("DOM")}}

La méthode **`getClientRects()`** de l'interface {{DOMxRef("Element")}} retourne une collection d'objets {{DOMxRef("DOMRect")}} qui indiquent les rectangles de délimitation pour chaque [boîte de bordure CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction) dans le client.

La plupart des éléments n'ont qu'une seule boîte de bordure chacun, mais un [élément en ligne](/fr/docs/Glossary/Inline-level_content) multi-ligne (comme un élément {{HTMLElement("span")}} multi-ligne, par défaut) a une boîte de bordure autour de chaque ligne.

## Syntaxe

```js-nolint
getClientRects()
```

### Paramètres

Aucun.

### Valeur de retour

La valeur retournée est une collection d'objets {{DOMxRef("DOMRect")}}, un pour chaque boîte de bordure CSS associée à l'élément. Chaque objet {{DOMxRef("DOMRect")}} décrit la boîte de bordure, en pixels, avec le coin supérieur gauche relatif au coin supérieur gauche de la zone d'affichage. Pour les tableaux avec légendes, la légende est incluse même si elle est en dehors de la boîte de bordure du tableau. Lorsqu'elle est appelée sur des éléments SVG autres qu'un `<svg>` externe, la «&nbsp;zone d'affichage&nbsp;» à laquelle les rectangles résultants sont relatifs est le viewport que l'élément `<svg>` externe établit (et pour être clair, les rectangles sont également transformés par la transformation `viewBox` du `<svg>` externe, le cas échéant).

Le montant du défilement qui a été effectué dans la zone d'affichage (ou tout autre élément défilable) est pris en compte lors du calcul des rectangles.

Les rectangles retournés n'incluent pas les limites des éléments enfants qui peuvent déborder.

Pour les éléments HTML {{HTMLElement("area")}}, les éléments SVG qui ne rendent rien eux-mêmes, les éléments `display:none` et, de manière générale, tous les éléments qui ne sont pas rendus directement, une liste vide est retournée.

Des rectangles sont retournés même pour les boîtes CSS qui ont des boîtes de bordure vides. Les coordonnées `left`, `top`, `right` et `bottom` peuvent toujours être significatives.

Des décalages de pixels fractionnaires sont possibles.

## Exemples

Ces exemples dessinent des rectangles côté client dans différentes couleurs. Notez que la fonction JavaScript qui dessine ces rectangles est liée au code HTML grâce à la classe `avecSuperpositionRectsClient`.

### HTML

Exemple 1&nbsp;: ce code HTML crée trois paragraphes contenant un élément `<span>`, chacun intégré dans un bloc `<div>`. Les rectangles client sont affichés pour le paragraphe du deuxième bloc et pour l'élément `<span>` du troisième bloc.

```html
<h3>Un paragraphe contenant un élément span</h3>
<p>
  Le span et le paragraphe ont tous deux une bordure définie. Les rectangles
  client sont en rouge. Notez que le p ne possède qu'une seule bordure de boîte,
  tandis que le span en possède plusieurs.
</p>

<div>
  <strong>Original</strong>
  <p>
    <span>Paragraphe s'étendant sur plusieurs lignes</span>
  </p>
</div>

<div>
  <strong>Rectangle de la balise p</strong>
  <p class="avecSuperpositionRectsClient">
    <span>Paragraphe s'étendant sur plusieurs lignes</span>
  </p>
</div>

<div>
  <strong>Rectangle de la balise span</strong>
  <p>
    <span class="avecSuperpositionRectsClient"
      >Paragraphe s'étendant sur plusieurs lignes</span
    >
  </p>
</div>
```

Exemple 2&nbsp;: ce code HTML crée trois listes ordonnées. Les rectangles client sont affichés pour le `<ol>` du deuxième bloc et pour chaque élément `<li>` du troisième bloc.

```html
<h3>Une liste</h3>
<p>
  Notez que la boîte de bordure n'inclut pas le numéro, donc les rectangles
  client non plus.
</p>

<div>
  <strong>Original</strong>
  <ol>
    <li>Élément 1</li>
    <li>Élément 2</li>
  </ol>
</div>

<div>
  <strong>Rectangle de la balise ol</strong>
  <ol class="avecSuperpositionRectsClient">
    <li>Élément 1</li>
    <li>Élément 2</li>
  </ol>
</div>

<div>
  <strong>Rectangle de chaque balise li</strong>
  <ol>
    <li class="avecSuperpositionRectsClient">Élément 1</li>
    <li class="avecSuperpositionRectsClient">Élément 2</li>
  </ol>
</div>
```

Exemple 3&nbsp;: ce code HTML crée deux tableaux avec des légendes. Les rectangles client sont affichés pour le `<table>` du deuxième bloc.

```html
<h3>Un tableau avec une légende</h3>
<p>
  Bien que la boîte de bordure du tableau n'inclue pas la légende, les
  rectangles client l'incluent.
</p>

<div>
  <strong>Original</strong>
  <table>
    <caption>
      légende
    </caption>
    <thead>
      <tr>
        <th>en-tête</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>contenu</td>
      </tr>
    </tbody>
  </table>
</div>

<div>
  <strong>rectangle du tableau</strong>
  <table class="avecSuperpositionRectsClient">
    <caption>
      légende
    </caption>
    <thead>
      <tr>
        <th>en-tête</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>contenu</td>
      </tr>
    </tbody>
  </table>
</div>
```

### CSS

Le CSS dessine des bordures autour du paragraphe et du `<span>` à l'intérieur de chaque bloc `<div>` pour le premier exemple, autour du `<ol>` et du `<li>` pour le deuxième exemple, et autour des éléments `<table>`, `<th>` et `<td>` pour le troisième exemple.

```css
strong {
  text-align: center;
}
div {
  display: inline-block;
  width: 150px;
}
div p,
ol,
table {
  border: 1px solid blue;
}
span,
li,
th,
td {
  border: 1px solid green;
}
```

### JavaScript

Le code JavaScript dessine les rectangles client pour tous les éléments HTML qui ont la classe CSS `avecSuperpositionRectsClient` assignée.

```js
function addClientRectsOverlay(elt) {
  /* Positionne de manière absolue une balise div par-dessus chaque
     rectangle client de sorte que la largeur de sa bordure soit
     identique à celle du rectangle.
     Note : les superpositions sont décalées si l'utilisateur·ice
     redimensionne la page ou effectue un zoom. */
  const rects = elt.getClientRects();
  for (const rect of rects) {
    const tableRectDiv = document.createElement("div");
    tableRectDiv.style.position = "absolute";
    tableRectDiv.style.border = "1px solid red";
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft =
      document.documentElement.scrollLeft || document.body.scrollLeft;
    tableRectDiv.style.margin = tableRectDiv.style.padding = "0";
    tableRectDiv.style.top = `${rect.top + scrollTop}px`;
    tableRectDiv.style.left = `${rect.left + scrollLeft}px`;
    // Nous voulons que rect.width corresponde à la largeur de la bordure, de sorte que la largeur du contenu soit inférieure de 2px.
    tableRectDiv.style.width = `${rect.width - 2}px`;
    tableRectDiv.style.height = `${rect.height - 2}px`;
    document.body.appendChild(tableRectDiv);
  }
}

(() => {
  /* Appelle la fonction addClientRectsOverlay(elt) pour tous les
     éléments ayant la classe "avecSuperpositionRectsClient" assignée */
  const elems = document.getElementsByClassName("avecSuperpositionRectsClient");
  for (const elem of elems) {
    addClientRectsOverlay(elem);
  }
})();
```

### Résultat

{{EmbedLiveSample("Exemples", 680, 650)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.getBoundingClientRect()")}}
