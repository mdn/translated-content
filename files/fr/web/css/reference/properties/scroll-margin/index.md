---
title: Propriété CSS `scroll-margin`
short-title: scroll-margin
slug: Web/CSS/Reference/Properties/scroll-margin
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) `scroll-margin` définit toutes les marges de défilement d'un élément en une seule fois, en attribuant des valeurs de la même manière que la propriété {{CSSxRef("margin")}} le fait pour les marges d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: scroll-margin")}}

```css interactive-example-choice
scroll-margin: 0;
```

```css interactive-example-choice
scroll-margin: 20px;
```

```css interactive-example-choice
scroll-margin: 2em;
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
.default-example .info {
  inline-size: 100%;
  padding: 0.5em 0;
  font-size: 90%;
  writing-mode: vertical-rl;
}

.scroller {
  text-align: left;
  height: 250px;
  width: 270px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: y mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  background-color: rebeccapurple;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("scroll-margin-bottom")}}
- {{CSSxRef("scroll-margin-left")}}
- {{CSSxRef("scroll-margin-right")}}
- {{CSSxRef("scroll-margin-top")}}

## Syntaxe

```css
/* Valeur de type <length> */
scroll-margin: 10px;
scroll-margin: 1em 0.5em 1em 1em;

/* Valeurs globales */
scroll-margin: inherit;
scroll-margin: initial;
scroll-margin: revert;
scroll-margin: revert-layer;
scroll-margin: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Un décalage par rapport au côté correspondant du conteneur de défilement.

## Description

Vous pouvez voir l'effet de `scroll-margin` en faisant défiler le contenu de la «&nbsp;pages&nbsp;» jus'à un point intermédiaraire dans l'exemple. La valeur définie pour `scroll-margin` détermine combien de la page qui est principalement en dehors du [port d'accrochage](/fr/docs/Glossary/Scroll_snap#port_daccrochage) doit rester visible.

Ainsi, les valeurs de `scroll-margin` représentent des marges définissant la zone d'accrochage utilisée pour aligner cette boîte avec le port d'accrochage. La zone d'accrochage est déterminée en prenant la boîte de bordure transformée, en trouvant sa boîte englobante rectangulaire (alignée sur les axes dans l'espace de coordonnées du conteneur de défilement), puis en ajoutant les marges définies.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Démonstration simple

Cet exemple met en œuvre quelque chose de très similaire à l'exemple interactif ci-dessus, sauf qu'ici nous allons vous expliquer comment il est implémenté.

L'objectif ici est de créer quatre blocs défilants horizontalement, dont le deuxième et le troisième s'alignent presque, mais pas tout à fait, sur le côté gauche de chaque bloc.

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

Parlons du CSS. Le conteneur externe est mis en forme comme ceci&nbsp;:

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

Les parties principales pertinentes pour l'accrochage au défilement sont `overflow-x: scroll`, qui garantit que le contenu défilera et ne sera pas masqué, et `scroll-snap-type: x mandatory`, qui dicte que l'accrochage au défilement doit se produire le long de l'axe horizontal, et que le défilement s'arrêtera toujours sur un point d'accrochage.

Les éléments enfants sont mis en forme comme suit&nbsp;²:

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
  scroll-snap-align: start;
}

.scroller > div:nth-child(2n) {
  background-color: white;
  color: rebeccapurple;
}
```

Le plus pertinent ici est `scroll-snap-align: start`, qui définit que les bords gauche (le «&nbsp;début&nbsp;» le long de l'axe x, dans notre cas) sont les points d'accrochage désignés.

Enfin, nous définissons les valeurs de marge de défilement, une différente pour le deuxième et le troisième élément enfant&nbsp;:

```css
.scroller > div:nth-child(2) {
  scroll-margin: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin: 2rem;
}
```

Cela signifie que lorsque vous faites défiler les éléments enfants du milieu, le défilement s'accrochera à `1rem` en dehors du bord gauche du deuxième `<div>`, et à `2rems` en dehors du bord gauche du troisième `<div>`.

> [!NOTE]
> Ici, nous définissons `scroll-margin` sur tous les côtés à la fois, mais seul le bord de début est vraiment pertinent. Il serait tout aussi efficace de ne définir une marge de défilement que sur ce bord, par exemple avec `scroll-margin-inline-start: 1rem`, ou `scroll-margin: 0 0 0 1rem`.

#### Résultat

Essayez par vous-même&nbsp;:

{{EmbedLiveSample("Basic_demonstration", "100%", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module [d'accrochage au défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
- [Contrôler précisément le défilement avec l'accrochage CSS <sup>(angl.)</sup>](https://web.dev/articles/css-scroll-snap) sur web.dev (2018)
