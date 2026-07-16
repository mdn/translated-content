---
title: Propriété CSS `scroll-marker-group`
short-title: scroll-marker-group
slug: Web/CSS/Reference/Properties/scroll-marker-group
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`scroll-marker-group`** contrôle si un {{Glossary("scroll container", "conteneur de défilement")}} a un pseudo-élément {{CSSxRef("::scroll-marker-group")}} généré. Si présent, la propriété définit également si le groupe de marqueurs de défilement doit être placé `before` _ou_ `after` le contenu du conteneur du groupe de défilement dans l'ordre visuel et de tabulation par défaut.

> [!NOTE]
> Pour créer un conteneur de groupe de marqueurs de défilement à partir d'un élément existant contenant un ensemble d'éléments HTML {{HTMLElement("a")}}, utilisez la propriété {{CSSxRef("scroll-target-group")}}. Lisez les [différences de comportement](/fr/docs/Web/CSS/Reference/Properties/scroll-target-group#différences_entre_scroll-target-group_et_scroll-marker-group) entre les deux.

## Syntaxe

```css
/* Valeurs uniques */
scroll-marker-group: before;
scroll-marker-group: after;
scroll-marker-group: none;

/* Valeurs globales */
scroll-marker-group: inherit;
scroll-marker-group: initial;
scroll-marker-group: revert;
scroll-marker-group: revert-layer;
scroll-marker-group: unset;
```

### Valeurs

- `after`
  - : Un pseudo-élément {{CSSxRef("::scroll-marker-group")}} est généré en tant que voisin des éléments enfants du conteneur de défilement, les précédant immédiatement, ainsi que tout pseudo-élément {{CSSxRef("::scroll-button()")}} généré. Il apparaît à la fin de l'ordre de tabulation et de l'ordre des boîtes de mise en page du conteneur (mais pas dans la structure DOM).

- `before`
  - : Un pseudo-élément {{CSSxRef("::scroll-marker-group")}} est généré en tant que voisin des éléments enfants du conteneur de défilement, les précédant immédiatement, ainsi que tout pseudo-élément {{CSSxRef("::scroll-button()")}} généré. Le groupe de marqueurs de défilement apparaît au début de l'ordre de tabulation et de l'ordre des boîtes de mise en page du conteneur.

- `none`
  - : Aucun pseudo-élément {{CSSxRef("::scroll-marker-group")}} ne sera généré sur l'élément. C'est la valeur par défaut.

> [!NOTE]
> En tant que bonne pratique en matière d'accessibilité, faites correspondre la position de rendu visuel du conteneur du groupe de marqueurs de défilement avec l'ordre de tabulation. Lors du positionnement du groupe de marqueurs au début du contenu avec des styles appliqués à {{CSSxRef("::scroll-marker-group")}}, placez-le au début de l'ordre de tabulation en utilisant `before`. Lors du positionnement du groupe à la fin du contenu, placez-le à la fin de l'ordre de tabulation en utilisant `after`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Voir [Créer des carrousels CSS](/fr/docs/Web/CSS/Guides/Overflow/Carousels) pour des exemples complets utilisant la propriété `scroll-marker-group`.

### Placement des marqueurs de défilement

Dans cet exemple, nous démontrons les trois valeurs de la propriété `scroll-marker-group`.

#### HTML

Nous avons une liste HTML de base {{HTMLElement("ul")}} avec plusieurs éléments de liste {{HTMLElement("li")}}.

```html hidden
<fieldset>
  <legend>Sélectionnez la valeur de <code>scroll-marker-group</code> :</legend>
  <label><input type="radio" name="p" value="before" />before</label>
  <label><input type="radio" name="p" value="after" checked />after</label>
  <label><input type="radio" name="p" value="none" />none</label>
</fieldset>
```

```html
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
  <li>Élément 4</li>
  <li>Élément 5</li>
  <li>Élément 6</li>
  <li>Élément 7</li>
  <li>Élément 8</li>
</ul>
```

#### CSS

Nous transformons notre `<ul>` en un carrousel en définissant la propriété {{CSSxRef("display")}} sur `flex`, créant une seule ligne d'éléments `<li>` sans retour à la ligne. La propriété {{CSSxRef("overflow-x")}} est définie sur `auto`, ce qui signifie que si les éléments débordent de leur conteneur sur l'axe x, le contenu défilera horizontalement. Nous transformons ensuite le `<ul>` en un [conteneur de défilement avec accrochage](/fr/docs/Glossary/Scroll_snap#scroll_snap_container), garantissant que les éléments s'alignent toujours correctement lorsque le conteneur est défilé avec une valeur {{CSSxRef("scroll-snap-type")}} de `mandatory`.

Nous créons un conteneur de groupe de marqueurs de défilement avec la propriété `scroll-marker-group`, plaçant le groupe après tout le contenu.

```css
ul {
  display: flex;
  gap: 4vw;
  padding-left: 0;
  margin: 32px 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;

  scroll-marker-group: after;
}
```

Ensuite, nous mettons en forme les éléments `<li>`, en utilisant la propriété {{CSSxRef("flex")}} pour les rendre `33%` de la largeur du conteneur. La valeur {{CSSxRef("scroll-snap-align")}} de `start` fait en sorte que le côté gauche de l'élément visible le plus à gauche s'aligne sur le bord gauche du conteneur lorsque le contenu est défilé.

```css
li {
  list-style-type: none;
  background-color: #eeeeee;
  flex: 0 0 33%;
  scroll-snap-align: start;
  text-align: center;
  line-height: 5;
}
```

Nous utilisons ensuite le pseudo-élément {{CSSxRef("::scroll-marker")}} pour créer un marqueur carré pour chaque élément de liste avec une bordure rouge, et appliquons des styles au pseudo-élément {{CSSxRef("::scroll-marker-group")}} pour disposer les marqueurs de défilement en ligne avec un écart de `0.2em` entre chaque.

```css
li::scroll-marker {
  content: " ";
  border: 1px solid red;
  height: 1em;
  width: 1em;
}

::scroll-marker-group {
  display: flex;
  gap: 0.2em;
}
```

Enfin, pour garantir une bonne expérience utilisateur·ice, nous mettons en forme le marqueur de l'élément actuellement défilé différemment des autres, en ciblant le marqueur avec la pseudo-classe {{CSSxRef(":target-current")}}.

```css
::scroll-marker:target-current {
  background: red;
}
```

```css hidden
fieldset {
  width: 20em;
}

label {
  font-family: monospace;
  display: block;
}

:has([value="before"]:checked) ul {
  scroll-marker-group: before;
}
:has([value="after"]:checked) ul {
  scroll-marker-group: after;
}

:has([value="none"]:checked) ul {
  scroll-marker-group: none;
}
```

#### Résultat

{{EmbedLiveSample("Exemples", "", 300)}}

Notez l'emplacement du conteneur du groupe de marqueurs de défilement. Observez comment l'ordre de tabulation du clavier est différent pour `before` par rapport à `after`, et notez comment le groupe disparaît lorsque la valeur est définie sur `none`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("scroll-target-group")}}
- Le pseudo-élément {{CSSxRef("::scroll-button()")}}
- Le pseudo-élément {{CSSxRef("::scroll-marker-group")}}
- Le pseudo-élément {{CSSxRef("::scroll-marker")}}
- La pseudo-classe {{CSSxRef(":target-current")}}
- La pseudo-classe {{CSSxRef(":target-before")}}
- La pseudo-classe {{CSSxRef(":target-after")}}
- [Créer des carroussels CSS](/fr/docs/Web/CSS/Guides/Overflow/Carousels)
- Le module [de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- [Galerie de carrousels CSS <sup>(angl.)</sup>](https://chrome.dev/carousel/) sur chrome.dev (2025)
