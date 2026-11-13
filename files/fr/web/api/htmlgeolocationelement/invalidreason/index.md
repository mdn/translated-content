---
title: "HTMLGeolocationElement : propriété invalidReason"
short-title: invalidReason
slug: Web/API/HTMLGeolocationElement/invalidReason
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

La propriété en lecture seule **`invalidReason`** de l'interface {{DOMxRef("HTMLGeolocationElement")}} retourne une valeur énumérée représentant la raison pour laquelle l'élément associé {{HTMLElement("geolocation")}} est invalide (bloqué), le cas échéant.

Lorsqu'un [bloqueur](/fr/docs/Web/HTML/Reference/Elements/geolocation#blocage_de_geolocation) est actif sur un élément `<geolocation>`, il est invalide&nbsp;: cela signifie qu'il est empêché de fonctionner, soit temporairement, soit définitivement, selon la raison.

Vous pouvez interroger la propriété {{DOMxRef("HTMLGeolocationElement.isValid")}} pour vérifier si l'élément `<geolocation>` est valide ou non.

## Valeur

La chaîne vide (`""`) si l'élément n'a pas de bloqueur actif, ou l'une des valeurs suivantes (par ordre de priorité)&nbsp;:

- `illegal_subframe`
  - : L'élément HTML `<geolocation>` est imbriqué dans un élément HTML {{HTMLElement("fencedframe")}}.

    Bloqueur permanent.

- `unsuccessful_registration`
  - : Plus de trois éléments HTML `<geolocation>` ont été insérés dans le même document.

    Bloqueur temporaire.

- `recently_attached`
  - : L'élément HTML `<geolocation>` vient d'être ajouté au DOM.

    Bloqueur expirant.

- `intersection_changed`
  - : L'élément HTML `<geolocation>` est en cours de déplacement.

    Bloqueur expirant.

- `intersection_out_of_viewport_or_clipped`
  - : L'élément HTML `<geolocation>` est affiché en dehors ou partiellement dans la zone d'affichage.

    Bloqueur temporaire.

- `intersection_occluded_or_distorted`
  - : L'élément HTML `<geolocation>` est entièrement affiché dans la zone d'affichage, mais il est masqué d'une certaine manière, par exemple affiché derrière un autre contenu.

    Bloqueur temporaire.

- `style_invalid`
  - : L'élément HTML `<geolocation>` a des styles restreints appliqués (voir [restrictions de mise en forme](/fr/docs/Web/HTML/Reference/Elements/geolocation#restreindre_la_mise_en_forme)).

    Bloqueur temporaire.

Ces raisons d'invalidité sont listées par ordre de priorité, de la plus haute à la plus basse.
Si plusieurs bloqueurs sont actifs, la valeur `invalidReason` retournée sera celle représentant le bloqueur actif de plus haute priorité.

Notez également que les descriptions ci-dessus incluent un «&nbsp;type de bloqueur&nbsp;» pour chaque raison d'invalidité, qui peut être&nbsp;:

- Permanent
  - : L'élément `<geolocation>` est définitivement invalide jusqu'à ce que le·la développeur·euse mette à jour le code pour empêcher le bloqueur de se produire.
- Temporaire
  - : L'élément `<geolocation>` est invalide tant que la condition de blocage persiste. Ensuite, le bloqueur temporaire devient un bloqueur expirant.
- Expirant
  - : L'élément `<geolocation>` est invalide pendant une courte période, après quoi il redevient valide.

## Exemples

### Exemple simple

```html
<geolocation></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.invalidReason);
// "", tant que l'élément `<geolocation>` n'est pas bloqué d'une quelconque manière
```

### Explorer les raisons d'invalidité

Dans cet exemple, nous proposons un contrôle de formulaire pour appliquer différents styles à un élément `<geolocation>` afin de le rendre invalide. Lorsque chaque ensemble de styles est appliqué, nous rapportons la valeur `invalidReason` fournie par le navigateur.

#### HTML

Nous commençons par inclure un élément `<geolocation>` et un élément HTML {{HTMLElement("div")}} qui pourra ensuite être affiché au-dessus de l'élément `<geolocation>`.

```html
<geolocation>
  Votre navigateur ne prend pas en charge l'élément
  <code>&lt;geolocation&gt;</code>.
</geolocation>
<div id="cover">Élément de couverture</div>
```

Ensuite, nous ajoutons un élément HTML {{HTMLElement("p")}} qui affichera la raison d'invalidité générée par chaque ensemble de styles.

```html
<p id="reason"></p>
```

Enfin, nous ajoutons un élément HTML {{HTMLElement("select")}} pour permettre à l'utilisateur·ice de choisir différents effets de mise en forme qui invalident l'élément `<geolocation>`.

```html
<form>
  <label for="invalidate"
    >Choisissez une façon d'invalider l'élément
    <code>&lt;geolocation&gt;</code>&nbsp;:</label
  >
  <select id="invalidate">
    <option value="">Aucune</option>
    <option value="move-behind">Déplacer derrière l'élément</option>
    <option value="move-out">Déplacer hors de la zone d'affichage</option>
    <option value="bad-contrast">Mauvais contraste</option>
  </select>
</form>
```

#### CSS

Dans nos styles, nous commençons par donner à l'élément `<geolocation>` une valeur {{CSSxRef("position")}} de `relative` pour qu'il puisse être positionné, et une valeur {{CSSxRef("z-index")}} de `1`.

```css hidden
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin-left: 50px;
}

geolocation {
  font-size: small;
}

#cover {
  width: 200px;
  height: 50px;
  color: white;
  background-color: darkblue;
  padding: 10px;
}
```

```css
geolocation {
  position: relative;
  z-index: 1;
}
```

Ensuite, nous mettons en forme notre `<div>` `#cover` avec `position: absolute` et utilisons {{Glossary("inset properties", "propriétés d'encart")}} pour le placer à droite de l'élément `<geolocation>`. Nous lui donnons également une valeur de `z-index` de `2` afin que, si notre `<div>` est placé dans la même zone que l'élément `<geolocation>`, le `<div>` soit affiché au-dessus.

```css
#cover {
  position: absolute;
  top: 72px;
  left: 250px;
  z-index: 2;
}
```

Nous définissons maintenant trois styles de classe qui seront appliqués à l'élément `<geolocation>` lorsque les différentes options du `<select>` sont choisies par l'utilisateur·ice. `.move-behind` le déplace derrière le `<div>` `#cover`, `.move-out` le déplace hors écran, et `.bad-contrast` lui donne un mauvais [contraste de couleur](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast). Ces trois styles rendent l'élément `<geolocation>` invalide.

```css
.move-behind {
  left: 150px;
}

.move-out {
  right: 250px;
}

.bad-contrast {
  background-color: red;
  color: orange;
}
```

#### JavaScript

Dans notre script, nous commençons par récupérer les références vers les éléments `<geolocation>`, `<div>`, `<p>` et `<select>`.

```js
const geo = document.querySelector("geolocation");
const coverElem = document.querySelector("#cover");
const reasonElem = document.querySelector("#reason");
const selectElem = document.querySelector("select");
```

Ensuite, nous ajoutons un écouteur d'évènement `input` à l'élément `<select>`. Lorsqu'une nouvelle valeur est choisie, nous définissons l'attribut `class` de l'élément `<geolocation>` égal à la valeur sélectionnée, ce qui applique l'un des styles invalidants. Après un délai de 4 secondes, nous réinitialisons la `class` à `""`, pour rendre l'élément `<geolocation>` à nouveau valide.

```js
selectElem.addEventListener("input", () => {
  geo.className = selectElem.value;
  setTimeout(() => {
    geo.className = "";
  }, 4000);
});
```

Enfin, nous incluons du code pour rapporter les changements de statut de validation qui se produisent lorsque différentes valeurs de sélection sont choisies. Nous commençons par définir le contenu texte du `<p>` pour inclure la raison d'invalidité active au chargement de la page. Nous ajoutons ensuite un écouteur d'évènement {{DOMxRef("HTMLGeolocationElement.validationstatuschange_event", "validationstatuschange")}} à l'élément `<geolocation>`. À chaque changement de statut de validation, nous vérifions si l'élément `<geolocation>` est valide avec {{DOMxRef("HTMLGeolocationElement.isValid")}}, et si c'est le cas, nous affichons un message de confirmation dans le contenu texte du `<p>`. Si l'élément `<geolocation>` est invalide, nous affichons la raison d'invalidité dans le contenu texte du `<p>`.

```js
reasonElem.textContent = `Raison d'invalidité : ${geo.invalidReason}`;

geo.addEventListener("validationstatuschange", () => {
  if (geo.isValid) {
    reasonElem.textContent = `<geolocation> est valide`;
  } else {
    reasonElem.textContent = `Raison d'invalidité : ${geo.invalidReason}`;
  }
});
```

#### Résultat

Voir ce code [en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/geolocation-element/exploring-invalid-reasons/) (voir aussi le [code source complet <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/geolocation-element/exploring-invalid-reasons)). Essayez de choisir différentes options d'invalidation pour voir quelles raisons d'invalidation sont rapportées dans chaque cas.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("geolocation")}}
