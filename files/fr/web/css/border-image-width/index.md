---
title: border-image-width
slug: Web/CSS/border-image-width
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/border-image-width
---
{{CSSRef}}

La propriété **`border-image-width`** définit la largeur de la bordure imagée.

{{EmbedInteractiveExample("pages/css/border-image-width.html")}}

Si `border-image-width` est supérieur à {{cssxref("border-width")}}, la bordure imagée s'étendra au-delà du _padding_ voire du contenu.

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

/* épaisseur verticale | horizontale */
border-image-width: 2em 3em;

/* haut | côtés horizontaux | bas */
border-image-width: 5% 15% 10%;

/* haut | droit | bas | gauche */
border-image-width: 5% 2em 10% auto;

/* Valeurs globales */
border-image-width: inherit;
border-image-width: initial;
border-image-width: unset;
```

La propriété `border-image-width` est définie avec une, deux, trois ou quatre valeurs parmi celles de la liste qui suit.

- Lorsqu'une valeur est utilisée, c'est cette valeur qui est utilisée pour les quatre côtés
- Lorsque deux valeurs sont utilisées, la premières s'applique aux côtés haut et bas et la seconde aux côté gauche et droit
- Lorsque trois valeurs sont utilisées, la première s'applique au côté haut, la deuxième aux côtés gauche et droit et la troisième au côté bas.
- Lorsque quatre valeurs sont utilisées, elles s'appliquent (dans cet ordre) au côté haut, droit, bas et gauche (dans le sens horaire).

### Valeurs

- `<length-percentage>`
  - : Une longueur ou un pourcentage représentant la largeur de la bordure. Cette longueur peut être absolue (ex. `px`) ou relative (ex. `rem`). Les pourcentages sont relatifs à la largeur de la boîte de bordure. Les valeurs négatives sont considérées invalides`.`
- `<number>`
  - : Représente un multiple de [la valeur calculée](/fr/docs/Web/CSS/Valeur_calculée) de la propriété {{cssxref("border-width")}} de l'élément. Les valeurs négatives sont considérées invalides.
- `auto`
  - : L'épaisseur de la bordure imagée est égale à la largeur ou à la hauteur (selon ce qui peut s'appliquer) de la propriété {{cssxref("border-image-slice")}} correspondante. Si l'image ne possède pas de dimensions intrinsèques, c'est la valeur calculée de `border-width` qui sera utilisée à la place.
- `inherit`
  - : Un mot-clé qui indique que les quatre valeurs sont héritées des valeurs calculées pour la propriété de l'élément parent.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
p {
  border: 20px solid;
  border-image: url("https://mdn.mozillademos.org/files/10470/border.png") 30 round;
  border-image-width: 16px;
  padding: 40px;
}
```

### HTML

```html
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
  no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
```

### Résultat

{{EmbedLiveSample('Exemples', '480', '320')}}

## Spécifications

| Spécification                                                                                                | État                                     | Commentaires         |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-border-image-width', 'border-image-width')}} | {{Spec2('CSS3 Backgrounds')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-image-width")}}
