---
title: aspect-ratio
slug: Web/CSS/Reference/Properties/aspect-ratio
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`aspect-ratio`** permet de définir le rapport largeur/hauteur désiré pour la boîte d'un élément. Cela signifie que même si la taille du conteneur parent ou de la zone d'affichage change, le navigateur ajuste les dimensions de l'élément pour maintenir le rapport largeur/hauteur défini. Le {{Glossary("aspect ratio", "ratio d'aspect")}} défini est utilisé dans le calcul des tailles automatiques et d'autres fonctions de mise en page.

Au moins une des dimensions de la boîte doit être automatique pour que `aspect-ratio` ait un effet. Si ni la largeur ni la hauteur n'est une taille automatique, alors le rapport d'aspect fourni n'a aucun effet sur les tailles préférentielles de la boîte.

{{InteractiveExample("Démonstration CSS&nbsp;: aspect-ratio")}}

```css interactive-example-choice
aspect-ratio: auto;
```

```css interactive-example-choice
aspect-ratio: 1 / 1;
```

```css interactive-example-choice
aspect-ratio: 16 / 9;
```

```css interactive-example-choice
aspect-ratio: 0.5;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    height="640"
    id="example-element"
    src="/shared-assets/images/examples/plumeria.jpg"
    width="466" />
</section>
```

```css interactive-example
#example-element {
  height: 100%;
  width: auto;
}
```

## Syntaxe

```css
aspect-ratio: 1 / 1;
aspect-ratio: 1;

/* repli de 'auto' pour les éléments remplacés */
aspect-ratio: auto 3/4;
aspect-ratio: 9/6 auto;

/* Valeurs globales */
aspect-ratio: inherit;
aspect-ratio: initial;
aspect-ratio: revert;
aspect-ratio: revert-layer;
aspect-ratio: unset;
```

Cette propriété se définit avec le mot-clé `auto`, un `<ratio>`, ou les deux. Si les deux sont présents et que l'élément est un {{Glossary("replaced elements", "élément remplacé")}}, comme {{HTMLElement("img")}}, alors le rapport défini est utilisé jusqu'a ce que le contenu soit chargé. Une fois le contenu chargé, la valeur `auto` s'applique, donc le rapport d'aspect intrinsèque du contenu chargé est utilisé.

Si l'élément n'est pas un élément remplacé, alors le `ratio` défini est utilisé.

### Valeurs

- `auto`
  - : Les {{Glossary("Replaced elements", "éléments remplacés")}} ayant un rapport d'aspect intrinsèque utilisent _ce_ rapport d'aspect, sinon la boîte n'a pas de rapport d'aspect préférentiel. Les calculs de taille impliquant un rapport d'aspect intrinsèque utilisent toujours les dimensions de la boîte de contenu.

- {{CSSxRef("&lt;ratio&gt;")}}
  - : Le rapport d'aspect préférentiel de la boîte est le rapport défini par `width` / `height`. Si `height` et la barre oblique précédente sont omis, `height` vaut `1`. Les calculs de taille impliquant le rapport d'aspect préférentiel utilisent les dimensions de la boîte définies par `box-sizing`.

- `auto && <ratio>`
  - : Lorsque `auto` et un `<ratio>` sont définis ensemble, `auto` est utilisé si l'élément est un élément remplacé avec un rapport d'aspect naturel, comme un élément `<img>`. Sinon, le rapport défini par `width` / `height` est utilisé comme rapport d'aspect préférentiel.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Explorer les effets de `aspect-ratio` avec une largeur fixe

Dans cet exemple, la largeur des éléments `<div>` est définie à `100px` et la hauteur à `auto`. Puisque la valeur de largeur est fixe ici, la propriété `aspect-ratio` n'affecte que la hauteur des éléments `<div>` afin de maintenir le rapport largeur/hauteur défini.

```html hidden
<div>1/1</div>
<div>0.5</div>
<div>1</div>
<div>1/0.5</div>
<div>16/9</div>
```

```css hidden
div {
  display: inline-flex;
  background-color: lime;
  justify-content: center;
}
```

```css
div {
  width: 100px;
  height: auto;
}
div:nth-child(1) {
  aspect-ratio: 1/1;
}
div:nth-child(2) {
  aspect-ratio: 0.5;
}
div:nth-child(3) {
  aspect-ratio: 1;
}
div:nth-child(4) {
  aspect-ratio: 1/0.5;
}
div:nth-child(5) {
  aspect-ratio: 16/9;
}
```

{{EmbedLiveSample("Explorer les effets de `aspect-ratio` avec une largeur fixe", "100%", 300)}}

### Solution de repli sur le rapport d'aspect naturel

Dans cet exemple, nous utilisons deux éléments `<img>`. Le premier élément n'a pas d'attribut `src` pointant vers un fichier image.

```html
<img src="" /> <img src="plumeria.jpg" />
```

Le code suivant définit `3/2` comme rapport d'aspect préférentiel et `auto` comme solution de repli.

```css
img {
  display: inline;
  width: 200px;
  border: 2px dashed red;
  background-color: lime;
  vertical-align: top;

  aspect-ratio: 3/2 auto;
}
```

Remarquez que la première image sans contenu remplacé conserve le rapport d'aspect `3/2`, tandis que la seconde image, une fois le contenu chargé, utilise le rapport d'aspect naturel de l'image.

{{EmbedLiveSample("Solution de repli sur le rapport d'aspect naturel", "100%", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Comprendre les rapports d'aspect](/fr/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [Rapport d'aspect des images&nbsp;: éviter les saccades lors du chargement](/fr/docs/Learn_web_development/Extensions/Performance/Multimedia#stratégie_de_rendu_pour_prévenir_les_saccades_lors_du_chargement_des_images)
- [Concevoir une unité de rapport d'aspect pour CSS <sup>(angl.)</sup>](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Définir la hauteur et la largeur des images redevient important <sup>(angl.)</sup>](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
