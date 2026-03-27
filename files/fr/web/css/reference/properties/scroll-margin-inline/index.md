---
title: scroll-margin-inline
slug: Web/CSS/Reference/Properties/scroll-margin-inline
l10n:
  sourceCommit: a14f56b06eabf3b182ae4bc0e02634a8ccc01f20
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`scroll-margin-inline`** définit les marges de défilement d'un élément dans la dimension en ligne.

{{InteractiveExample("Démonstration CSS&nbsp;: scroll-margin-inline")}}

```css interactive-example-choice
scroll-margin-inline: 0;
```

```css interactive-example-choice
scroll-margin-inline: 40px 20px;
```

```css interactive-example-choice
scroll-margin-inline: 4em 0;
```

```css interactive-example-choice
scroll-margin-inline: 0px 3em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller">
    <div>1</div>
    <div id="example-element">2</div>
    <div>3</div>
  </div>
  <div class="info">Défiler »</div>
</section>
```

```css interactive-example
.default-example {
  flex-wrap: wrap;
}

.default-example .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

.scroller {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  width: 250px;
  background-color: rebeccapurple;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: end;
}

.scroller > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## Propriétés constitutives

Cette propriété est un raccourci pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("scroll-margin-inline-end")}}
- {{CSSxRef("scroll-margin-inline-start")}}

## Syntaxe

```css
/* Valeurs de type <length> */
scroll-margin-inline: 10px;
scroll-margin-inline: 1em 0.5em;

/* Valeurs globales */
scroll-margin-inline: inherit;
scroll-margin-inline: initial;
scroll-margin-inline: revert;
scroll-margin-inline: revert-layer;
scroll-margin-inline: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Un décalage par rapport au bord correspondant du conteneur de défilement.

## Description

Les valeurs de `scroll-margin` représentent des décalages définissant la zone d'accrochage au défilement utilisée pour accrocher cette boîte au [port d'accrochage](/fr/docs/Glossary/Scroll_snap#port_daccrochage). La zone d'accrochage au défilement est déterminée en prenant la boîte de bordure transformée, en trouvant sa boîte englobante rectangulaire (alignée sur les axes dans l'espace de coordonnées du conteneur de défilement), puis en ajoutant les décalages spécifiés.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Démonstration simple

Cet exemple met en œuvre quelque chose de très similaire à l'exemple interactif ci-dessus, sauf qu'ici nous allons vous expliquer comment il est implémenté.

L'objectif ici est de créer quatre blocs défilants horizontalement, dont le deuxième et le troisième s'accrochent en place, près mais pas tout à fait à droite de chaque bloc.

#### HTML

Le HTML inclut un conteneur de défilement avec quatre enfants&nbsp;:

```html
<div class="scroller">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### CSS

Passons en revue le CSS. Le conteneur externe est mis en forme comme ceci&nbsp;:

```css
.scroller {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}
```

Les parties principales pertinentes pour l'accrochage au défilement sont `overflow-x: scroll`, qui garantit que le contenu défilera et ne sera pas masqué, et `scroll-snap-type: x mandatory`, qui indique que l'accrochage au défilement doit se produire le long de l'axe horizontal, et que le défilement s'arrêtera toujours sur un point d'accrochage.

Les éléments enfants sont mis en forme comme suit&nbsp;:

```css
.scroller > div {
  flex: 0 0 250px;
  width: 250px;
  background-color: rebeccapurple;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: end;
}

.scroller > div:nth-child(2n) {
  background-color: white;
  color: rebeccapurple;
}
```

La partie la plus pertinente ici est `scroll-snap-align: end`, qui définit que les bords droits (les «&nbsp;fins&nbsp;» le long de l'axe x, dans notre cas) sont les points d'accrochage désignés.

Enfin, nous définissons les valeurs de marge de défilement, une différente pour le deuxième et le troisième élément enfant&nbsp;:

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline: 2rem;
}
```

Cela signifie que lorsque vous faites défiler les éléments enfants du milieu, le défilement s'accrochera à `1rem` en dehors du bord de fin en ligne du deuxième `<div>`, et à `2rem` en dehors du bord de fin en ligne du troisième `<div>`.

> [!NOTE]
> Ici, nous définissons `scroll-margin` sur le début _et_ la fin de l'axe en ligne (x dans notre cas), mais seul le bord de fin est vraiment pertinent. Il serait tout aussi efficace de ne définir une marge de défilement que sur ce bord, par exemple avec `scroll-margin-inline: 0 1rem`, ou `scroll-margin-inline-end: 1rem`.

#### Résultat

Essayez par vous-même&nbsp;:

{{EmbedLiveSample("Démonstration simple", "100%", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module [d'accrochage au défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
- [Contrôler précisément le défilement avec l'accrochage CSS <sup>(angl.)</sup>](https://web.dev/articles/css-scroll-snap) sur web.dev (2018)
