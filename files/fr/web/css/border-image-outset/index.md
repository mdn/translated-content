---
title: border-image-outset
slug: Web/CSS/border-image-outset
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/border-image-outset
---
{{CSSRef}}

La propriété **`border-image-outset`** définit la distance avec laquelle la bordure est déplacée par rapport à la boîte de bordure.

{{EmbedInteractiveExample("pages/css/border-image-outset.html")}}

Les fragments de l'image de bordure qui sont affichées en dehors de la boîte de bordure suite à l'utilisation de cette propriété n'entraîneront pas la création de barres de défilement. Ces zones ne capturent ni n'entraînent d'événements de pointeur par rapport à l'élément concerné.

## Syntaxe

```css
/* border-image-outset :                 */
/* Une même valeur pour les quatre côtés */
border-image-outset: 1.5;

/* border-image-outset :              */
/* Première valeur : côtés verticaux  */
/* Seconde valeur : côtés horizontaux */
border-image-outset: 1 1.2;

/* border-image-outset :               */
/* Première valeur : côté haut         */
/* Deuxième valeur : côtés horizontaux */
/* Troisième valeur : côté bas         */
border-image-outset: 30px 2 45px;

/* border-image-outset :          */
/* Première valeur : côté haut    */
/* Deuxième valeur : côté droit   */
/* Troisième valeur : côté bas    */
/* Quatrième valeur : côté gauche */
border-image-outset: 7px 12px 14px 5px;

/* Valeurs globales */
border-image-outset: inherit;
border-image-outset: initial;
border-image-outset: unset;
```

### Valeurs

- `<length>`
  - : Une valeur de longueur (cf. type {{cssxref("&lt;length&gt;")}}) qui indique l'espace duquel on peut dépasser de la boîte de bordure. Les valeurs négatives ne sont pas autorisées.
- `<number>`
  - : Une valeur numérique (cf. type {{cssxref("&lt;number&gt;")}}) qui sera multipliée par la valeur calculée de {{cssxref("border-width")}} afin de déterminer la longueur de l'espace duquel dépasser.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
p {
  border-image-source: url("https://mdn.mozillademos.org/files/10470/border.png");
  border-image-slice: 30;
  border-image-width: 20px;
  border-image-repeat: round;
  border-image-outset: 10px;
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

| Spécification                                                                                                    | État                                     | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-border-image-outset', 'border-image-outset')}} | {{Spec2('CSS3 Backgrounds')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-image-outset")}}
