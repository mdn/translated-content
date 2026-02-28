---
title: border-image-width
slug: Web/CSS/Reference/Properties/border-image-width
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-image-width`** définit la largeur de [l'image de bordure](/fr/docs/Web/CSS/Reference/Properties/border-image) d'un élément.

Si la valeur de cette propriété est supérieure à celle de {{CSSxRef("border-width")}}, l'image de bordure s'étendra au-delà du remplissage (et/ou du contenu).

{{InteractiveExample("Démonstration CSS&nbsp;: border-image-width")}}

```css interactive-example-choice
border-image-width: 30px;
```

```css interactive-example-choice
border-image-width: 15px 40px;
```

```css interactive-example-choice
border-image-width: 2.6rem;
```

```css interactive-example-choice
border-image-width: 20% 8%;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Ceci est une boîte entourée d'une bordure.</div>
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
  color: black;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

Si la valeur de cette propriété est supérieure à [`border-width`](/fr/docs/Web/CSS/Reference/Properties/border-width), la bordure imagée s'étendra au-delà du remplissage (<i lang="en">padding</i>) voire du contenu.

## Syntaxe

```css
/* Valeur avec un mot-clé */
border-image-width: auto;

/* Valeurs de type <length> */
border-image-width: 1rem;

/* Valeurs de type <percentage> */
border-image-width: 25%;

/* Valeurs de type <number> */
border-image-width: 3;

/* côtés verticaux | horizontaux */
border-image-width: 2em 3em;

/* haut | côtés horizontaux | bas */
border-image-width: 5% 15% 10%;

/* haut | droit | bas | gauche */
border-image-width: 5% 2em 10% auto;

/* Valeurs globales */
border-image-width: inherit;
border-image-width: initial;
border-image-width: revert;
border-image-width: revert-layer;
border-image-width: unset;
```

La propriété `border-image-width` est définie avec une, deux, trois ou quatre valeurs parmi celles de la liste qui suit.

- Lorsqu'**une** valeur est utilisée, c'est cette valeur qui est utilisée pour **les quatre côtés**
- Lorsque **deux** valeurs sont utilisées, la première s'applique aux côtés haut et bas et la seconde aux côtés **gauche et droit**
- Lorsque **trois** valeurs sont utilisées, la première s'applique au côté haut, la deuxième aux côtés **gauche et droit** et la troisième au côté bas.
- Lorsque **quatre** valeurs sont utilisées, elles s'appliquent (dans cet ordre) au côté **haut**, **droit**, **bas** et **gauche** (dans le sens horaire).

### Valeurs

- `<length-percentage>`
  - : La largeur de la bordure, définie comme une longueur ({{CSSxRef("&lt;length&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}). Les pourcentages sont relatifs à la _largeur_ de la zone d'image de bordure pour les décalages horizontaux et à la _hauteur_ de la zone d'image de bordure pour les décalages verticaux. Ne doit pas être négatif.
- `<number>`
  - : La largeur de la bordure, définie comme un multiple de la {{CSSxRef("border-width")}} correspondante. Ne doit pas être négatif.
- `auto`
  - : La largeur de la bordure est rendue égale à la largeur ou à la hauteur intrinsèque (selon le cas) de la {{CSSxRef("border-image-slice")}} correspondante. Si l'image ne possède pas la dimension intrinsèque requise, la `border-width` correspondante est utilisée à la place.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Réaliser un pavage avec une image de bordure

Dans cet exemple on crée une image de bordure en utilisant le fichier `.png` suivant, qui mesure 90 pixels par 90 pixels&nbsp;:

![Image carrée contenant huit cercles. Les cercles dans chaque coin sont violet clair. Les quatre cercles sur les côtés sont bleus. La zone au centre, où un neuvième cercle pourrait tenir, est vide.](border.png)

Chaque cercle sur l'image a un diamètre de 30 pixels.

#### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
```

#### CSS

```css
p {
  border: 20px solid;
  border-image: url("border.png") 30 round;
  border-image-width: 16px;
  padding: 40px;
}
```

#### Résultat

{{EmbedLiveSample("Réaliser un pavage avec une image de bordure", 200, 240)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Arrière-plans et bordures](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [Apprendre le CSS&nbsp;: arrière-plans et bordures](/fr/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Images de bordure dans CSS&nbsp;: un domaine clé pour l'Interop 2023](/fr/blog/border-images-interop-2023/) sur le blog MDN (2023)
