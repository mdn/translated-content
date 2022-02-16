---
title: border-image-slice
slug: Web/CSS/border-image-slice
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/border-image-slice
---
{{CSSRef}}

La propriété **`border-image-slice`** permet de découper l'image fournie via la propriété {{cssxref("border-image-source")}} en 9 régions : quatre pour les coins, quatre pour les côtés et une pour le milieu. Ces régions sont définies à l'aide de quatre valeurs mesurées depuis les bords vers l'intérieur de l'image.

{{EmbedInteractiveExample("pages/css/border-image-slice.html")}}

![Les 9 zones définies par border-image-slice](border-image-slice.png)

Les quatre valeurs contrôlent les positions des lignes de découpe. Si certaines ne sont pas définies, leurs valeurs sont déduites des valeurs fournies (se référer à la section sur la syntaxe).

La zone du milieu ne sera pas utilisée par la bordure même mais pourra être utilisée comme image d'arrière-plan si on utilise le mot-clé `fill`. Ce mot-clé peut être utilisé à n'importe quelle position dans la déclaration (avant, après ou entre les autres valeurs).

Les propriétés {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}}, {{cssxref("border-image-outset")}} définissent la façon dont ces images seront utilisées.

La propriété raccourcie {{cssxref("border-image")}} peut éventuellement réinitialiser cette propriété avec sa valeur par défaut.

## Syntaxe

```css
/* border-image-slice :                       */
/* Une valeur qui s'applique aux quatre côtés */
border-image-slice: 30%;

/* border-image-slice :                */
/* Première valeur : côtés verticaux   */
/* Deuxième valeur : côtés horizontaux */
border-image-slice: 10% 30%;

/* border-image-slice :                */
/* Première valeur : côté haut         */
/* Deuxième valeur : côtés horizontaux */
/* Troisième valeur : côté bas         */
border-image-slice: 30 30% 45;

/* border-image-slice :           */
/* Première valeur : côté haut    */
/* Deuxième valeur : côté droit   */
/* Troisième valeur : côté bas    */
/* Quatrième valeur : côté gauche */
border-image-slice: 7 12 14 5;

/* border-image-slice: … fill          */
/* Le mot-clé fill peut être intercalé */
/* à n'importe quel endroit            */
border-image-slice: 10% fill 7 12;

/* Valeurs globales */
border-image-slice: inherit;
border-image-slice: initial;
border-image-slice: unset;
```

### Valeurs

- `slice`
  - : Une valeur de type {{cssxref("&lt;number&gt;")}} ou {{cssxref("&lt;percentage&gt;")}} qui indique le décalage entre le bord de l'image et la droite utilisée pour « découper » l'image. On notera qu'une valeur de type {{cssxref("&lt;length&gt;")}} n'est pas autorisée et est donc invalide. Une valeur de type {{cssxref("&lt;number&gt;")}} correspondra à des _pixels_ pour les images matricielles et à des coordonnées pour les images vectorielles. Les valeurs de type {{cssxref("&lt;percentage&gt;")}} sont relatives à la hauteur de l'image pour les axes verticaux et à la largeur de l'image pour les axes horizontaux. Les valeurs négatives sont invalides et les valeurs dépassant les bornes sont ramenées à `100%`. Il est préférable d'utiliser des pourcentages pour les images vectorielles.
- `fill`
  - : Un mot-clé qui, s'il est présent, force la zone centrale de l'image à être affichée par dessus l'image d'arrière plan de l'élément. La hauteur et la largeur de l'image sont redimensionnées comme les tranches haute et gauche.

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
| {{SpecName('CSS3 Backgrounds', '#the-border-image-slice', 'border-image-slice')}} | {{Spec2('CSS3 Backgrounds')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-image-slice")}}

## Voir aussi

- [Description illustrée de la syntaxe multi-valuée](/fr/docs/Web/CSS/Shorthand_properties#quelques_cas_aux_limites_%c3%a9pineux)
