---
title: border-image-outset
slug: Web/CSS/border-image-outset
---

{{CSSRef}}

La propriété **`border-image-outset`** définit la distance avec laquelle la bordure est déplacée par rapport à la boîte de bordure.

Les fragments de l'image de bordure qui sont affichées en dehors de la boîte de bordure suite à l'utilisation de cette propriété n'entraîneront pas la création de barres de défilement. Ces zones ne capturent ni n'entraînent d'évènements de pointeur par rapport à l'élément concerné.

{{InteractiveExample("CSS Demo: border-image-outset")}}

```css interactive-example-choice
border-image-outset: 0;
```

```css interactive-example-choice
border-image-outset: 15px;
```

```css interactive-example-choice
border-image-outset: 30px;
```

```css interactive-example-choice
border-image-outset: 40px;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is a box with a border around it.</div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: #fff3d4;
  color: #000;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

## Syntaxe

```css
/* Longueur */
/* Type <length> */
border-image-outset: 1rem;

/* Valeur numérique */
/* Type <number> */
border-image-outset: 1.5;

/* côtés verticaux | horizontaux */
border-image-outset: 1 1.2;

/* haut | côtés horizontaux | bas */
border-image-outset: 30px 2 45px;

/* haut | droit | bas | gauche */
border-image-outset: 7px 12px 14px 5px;

/* Valeurs globales */
border-image-outset: inherit;
border-image-outset: initial;
border-image-outset: revert;
border-image-outset: unset;
```

La propriété `border-image-outset` peut être définie à l'aide d'une, deux, trois ou quatre valeurs. Chaque valeur est une longueur ([`<length>`](/fr/docs/Web/CSS/length)) ou un nombre ([`<number>`](/fr/docs/Web/CSS/number)). Les valeurs négatives sont invalides (la déclaration est alors ignorée).

1. Si **une** valeur est indiquée, elle s'applique **aux quatre côtés**.
2. Si **deux** valeurs sont indiquées, la première s'applique aux côtés **haut et bas** et la seconde s'applique aux côtés **gauche et droit**.
3. Si **trois** valeurs sont indiquées, la première s'applique au côté **haut**, la deuxième aux côtés **gauche et droit**, et la troisième au côté **bas**.
4. Si **quatre** valeurs sont indiquées, elles s'appliquent dans le sens des aiguilles d'une montre&nbsp;: la première au côté **haut**, la seconde au côté **droit**, la troisième au côté **bas**, et la quatrième au côté **gauche**.

### Valeurs

- `<length>`
  - : Une valeur de longueur (cf. type [`<length>`](/fr/docs/Web/CSS/length)) qui indique l'espace duquel on peut dépasser de la boîte de bordure. Les valeurs négatives ne sont pas autorisées.
- `<number>`
  - : Une valeur numérique (cf. type [`<number>`](/fr/docs/Web/CSS/number)) qui sera multipliée par la valeur calculée de [`border-width`](/fr/docs/Web/CSS/border-width) afin de déterminer la longueur de l'espace duquel dépasser.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Décaler la bordure d'une image

#### HTML

```html
<div id="outset">Un élément avec une bordure décalée !</div>
```

#### CSS

```css
#outset {
  width: 10rem;
  background: #cef;
  border: 1.4rem solid;
  border-image: radial-gradient(#ff2, #55f) 40;
  border-image-outset: 1.5; /* 1.5 × 1.4rem = 2.1rem */
  margin: 2.1rem;
}
```

#### Résultat

{{EmbedLiveSample('', 'auto', '200')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les arrière-plans et bordures](/fr/docs/Web/CSS/CSS_backgrounds_and_borders)
- [Apprendre le CSS&nbsp;: les arrière-plans et les bordures](/fr/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
