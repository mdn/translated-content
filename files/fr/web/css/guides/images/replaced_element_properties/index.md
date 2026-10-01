---
title: Mettre en forme les éléments remplacés
slug: Web/CSS/Guides/Images/Replaced_element_properties
l10n:
  sourceCommit: ba3c8980510073ee92674aa71cb2c8c5b71294ab
---

Certaines propriétés [CSS](/fr/docs/Web/CSS) s'appliquent à tous les éléments, certaines uniquement aux conteneurs de grille et flexibles, et d'autres uniquement aux éléments transformables. Ce guide présente les propriétés qui s'appliquent uniquement aux _éléments remplacés_.

Un **{{Glossary("replaced elements", "élément remplacé")}}** est un élément dont la représentation se situe en dehors du champ d'application de CSS&nbsp;; il s'agit d'objets externes dont la représentation est indépendante du modèle de mise en forme CSS. Certains éléments remplacés, comme les éléments HTML {{HTMLElement("iframe")}}, peuvent avoir leur propre feuille de style, mais ils n'héritent pas des styles du document parent.

## Utiliser le CSS avec les éléments remplacés

CSS gère les éléments remplacés de manière particulière dans certains cas, par exemple lors du calcul des marges et de certaines valeurs `auto`. Seuls les éléments remplacés peuvent avoir des {{Glossary("intrinsic size", "dimensions intrinsèques")}}. Certains éléments remplacés, mais pas tous, possèdent des dimensions intrinsèques ou une ligne de base définie, utilisée par certaines propriétés CSS, comme {{CSSxRef("vertical-align")}}.

Bien que les styles du document puissent définir la taille et la position des éléments remplacés, ils n'affectent pas le contenu de ces éléments, à quelques exceptions près&nbsp;: le [module des images CSS](/fr/docs/Web/CSS/Guides/Images) inclut des propriétés qui permettent de contrôler le positionnement du contenu de l'élément dans sa boîte.

## Contrôler la position de l'objet dans la boîte de contenu

Le module des images CSS définit deux propriétés qui permettent de définir comment l'objet contenu dans l'élément remplacé doit être positionné dans la boîte de l'élément. La propriété `object-fit` sert à dimensionner les objets, tandis que la propriété `object-position` sert à les positionner.

### La propriété `object-fit`

La propriété `object-fit` définit comment l'objet de contenu de l'élément remplacé doit s'adapter à la boîte de l'élément englobant. La propriété définit comment les images, les vidéos et les autres formats multimédias incorporables réagissent à la hauteur et à la largeur de la boîte de contenu de l'élément remplacé. Si la hauteur, la largeur ou le rapport d'aspect d'un élément diffère de la ressource qui occupe l'espace réservé à l'élément, les valeurs `fill`, `contain`, `cover`, `scale-down` et `none` définissent si le navigateur redimensionne la ressource, couvre l'espace alloué, contient la ressource dans cet espace ou permet à la ressource d'être déformée.

Lorsque la ressource est contenue ou réduite, les zones de la boîte qui ne sont pas couvertes par l'élément remplacé affichent l'arrière-plan de l'élément.

La propriété `object-fit` n'a aucun effet sur les éléments HTML {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} et {{HTMLElement("fencedframe")}}.

![Une photo carrée du drapeau des fiertés flottant près d'une cheminée.](https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg)

Si nous plaçons l'image, un carré avec un rapport d'aspect de 1:1, dans une boîte de 100px x 300px (rapport d'aspect de 1:3), l'image remplit la boîte par défaut et se déforme. Nous pouvons utiliser la propriété `object-fit` pour définir comment l'image doit être rendue lorsqu'elle est forcée à entrer dans une boîte d'une taille et d'un rapport d'aspect différents&nbsp;:

```html hidden live-sample___example1 live-sample___example2
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau des fiertés" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau des fiertés" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau des fiertés" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau des fiertés" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau des fiertés" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau des fiertés" />
<p>
  <label><input type="checkbox" /> Modifier les dimensions</label>
</p>
```

```css hidden live-sample___example1 live-sample___example2
body {
  display: flex;
  gap: 20px;
  flex-flow: row wrap;
  grid-auto-flow: column;
  max-width: 98%;
  margin: 10px auto 0;
}
img {
  width: 100px;
  height: 300px;
  outline: 2px solid purple;
}
body:has(:checked) img {
  width: 300px;
  height: 100px;
}
```

```css live-sample___example1 live-sample___example2
img:nth-of-type(1) {
  object-fit: fill;
}
img:nth-of-type(2) {
  object-fit: cover;
}
img:nth-of-type(3) {
  object-fit: contain;
}
img:nth-of-type(4) {
  object-fit: scale-down;
}
img:nth-of-type(5) {
  object-fit: none;
}
img:nth-of-type(6) {
  /* aucune propriété object-fit */
  outline: 2px dashed red;
}
```

{{EmbedLiveSample("example1", "100%", 650)}}

Sélectionnez la case pour définir les valeurs de hauteur et de largeur. Notez que seule la valeur `fill` (la valeur par défaut) déforme l'image d'origine. Avec toutes les autres valeurs, le rapport d'aspect intrinsèque de l'image est conservé.

### La propriété `object-position`

La propriété `object-position` définit l'alignement de l'objet de contenu de l'élément remplacé dans la boîte de l'élément.

Souvent utilisée conjointement avec la propriété {{CSSxRef("object-fit")}}, elle accepte comme valeur une valeur {{CSSxRef("position_value", "&lt;position&gt;")}}, du même type que celle utilisée pour {{CSSxRef("background-position")}}.

```css live-sample___example2
img {
  object-position: bottom right;
}
```

{{EmbedLiveSample("example2", "100%", 650)}}

```html hidden live-sample___example3
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau des fiertés" />
```

Elle peut être utilisée sans `object-fit`. Dans ce cas, l'image est rendue à sa taille intrinsèque (218px x 218px), la position de son contenu étant définie par la valeur `object-position`.

```css hidden live-sample___example3
img {
  margin: 10px 0 0 10px;
}
```

```css live-sample___example3
img {
  outline: 2px solid;
  object-position: 114px 72px;
}
```

{{EmbedLiveSample("example3", "100%", 250)}}

La propriété `object-position` fonctionne aussi bien avec les éléments `<iframe>`, `<video>` et `<embed>` qu'avec `<img>`.

## Voir aussi

- [Comprendre les rapports d'aspect](/fr/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- Le module [des images CSS](/fr/docs/Web/CSS/Guides/Images)
- Le module [d'affichage CSS](/fr/docs/Web/CSS/Guides/Display)
- Le module [des arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
