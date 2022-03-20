---
title: border-image-width
slug: Web/CSS/border-image-width
translation_of: Web/CSS/border-image-width
browser-compat: css.properties.border-image-width
---
{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`border-image-width`** définit la largeur de [l'image de bordure](/fr/docs/Web/CSS/border-image) d'un élément.

{{EmbedInteractiveExample("pages/css/border-image-width.html")}}

Si la valeur de cette propriété est supérieure à [`border-width`](/fr/docs/Web/CSS/border-width), la bordure imagée s'étendra au-delà du remplissage (<i lang="en">padding</i>) voire du contenu.

## Syntaxe

```css
/* Valeur avec un mot-clé */
border-image-width: auto;

/* Longueur */
/* Type <length> */
border-image-width: 1rem;

/* Valeur proportionnelle */
/* Type <percentage> */
border-image-width: 25%;

/* Valeur numérique */
/* Type <number> */
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
border-image-width: unset;
```

La propriété `border-image-width` est définie avec une, deux, trois ou quatre valeurs parmi celles de la liste qui suit.

- Lorsqu'**une** valeur est utilisée, c'est cette valeur qui est utilisée pour **les quatre côtés**
- Lorsque **deux** valeurs sont utilisées, la première s'applique aux côtés haut et bas et la seconde aux côtés **gauche et droit**
- Lorsque **trois** valeurs sont utilisées, la première s'applique au côté haut, la deuxième aux côtés **gauche et droit** et la troisième au côté bas.
- Lorsque **quatre** valeurs sont utilisées, elles s'appliquent (dans cet ordre) au côté **haut**, **droit**, **bas** et **gauche** (dans le sens horaire).

### Valeurs

- `<length-percentage>`
  - : Une longueur ([`<length>`](/fr/docs/Web/CSS/length)) ou un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)) représentant la largeur de la bordure. Cette longueur peut être absolue (ex. `px`) ou relative (ex. `rem`). Les pourcentages sont relatifs à la largeur de la boîte de bordure. Les valeurs négatives sont considérées invalides.
- `<number>`
  - : Représente un multiple de [la valeur calculée](/fr/docs/Web/CSS/computed_value) de la propriété [`border-width`](/fr/docs/Web/CSS/border-width) de l'élément. Les valeurs négatives sont considérées invalides.
- `auto`
  - : L'épaisseur de la bordure imagée est égale à la largeur ou à la hauteur (selon ce qui peut s'appliquer) de la propriété [`border-image-slice`](/fr/docs/Web/CSS/border-image-slice) correspondante. Si l'image ne possède pas de dimensions intrinsèques, c'est la valeur calculée de `border-width` qui sera utilisée à la place.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Réaliser un pavage avec une image de bordure

Dans cet exemple on crée une image de bordure en utilisant le fichier ".png" suivant, qui mesure 90 pixels par 90 pixels&nbsp;:

![](border.png)

Chaque cercle sur l'image a un diamètre de 30 pixels.

#### HTML

```html
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
   eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
   no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
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

{{EmbedLiveSample('', 200, 280)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Arrière-plans et bordures](/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders)
- [Apprendre le CSS&nbsp;: arrière-plans et bordures](/fr/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
