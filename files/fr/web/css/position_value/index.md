---
title: <position>
slug: Web/CSS/position_value
tags:
  - CSS
  - Reference
  - Type
translation_of: Web/CSS/position_value
original_slug: Web/CSS/Type_position
---
{{CSSRef}}

Le type de donnée CSS **`<position>`** définit une paire de coordonnées dans l'espace (bidimensionnel) afin de définir la position relative d'une boîte. La position finale obtenue, décrite par la valeur `<position>`, n'est pas nécessairement située à l'intérieur de la boîte de l'élément. Ce type de donnée est notamment utilisé avec la propriété {{cssxref("background-position")}}.

## Syntaxe

![](position_type.png)On peut définir un emplacement grâce à deux mots-clés avec chacun un décalage par rapport au côté correspondant à ce mot-clé. Un mot-clé représente un côté de la boîte ou la ligne du centre située entre les deux bords. Ce mot-clé sera `left`, `right`, `top`, `bottom` ou `center` (ce dernier représente le milieu entre les côtés droit et gauche ou le milieu entre les côtés haut et bas selon le contexte).

Le décalage peut être une valeur relative, exprimée en pourcentages (valeur de type {{cssxref("&lt;percentage&gt;")}} ou une valeur absolue. Les valeurs positives décalent vers la droite ou vers le bas. Les valeurs négatives décalent dans l'autre sens (vers la gauche ou vers le haut).

Si un seul décalage est indiqué, ce sera le décalage horizontal. Lorsqu'un seul décalage ou mot-clé est utilisé, la valeur par défaut pour l'autre axe est `center`.

## Valeurs

```css
/* Syntaxe avec une valeur */
mot-clé                  /* Le côté depuis lequel décaler, on centrera sur l'autre axe*/
<length> ou <percentage> /* La position sur l'axe */

/* Syntaxe avec deux valeurs */
mot-clé mot-clé          /* Un mot-clé pour chaque direction, l'ordre n'est pas important */
mot-clé valeur           /* La valeur indique le décalage par rapport au côté indiqué par le mot-clé */
valeur mot-clé           /* Une valeur pour le décalage horizontal et un mot-clé pour le décalage vertical */
valeur valeur            /* Une valeur pour chaque composante du décalage */

/* Syntaxe avec quatre valeurs */
mot-clé valeur mot-clé valeur /* Chaque valeur indique le décalage par rapport au mot-clé qui le précède */
```

### Syntaxe formelle

    [
     [ left | center | right ] || [ top | center | bottom ]
    |
     [ left | center | right | <length> | <percentage> ]
     [ top | center | bottom | <length> | <percentage> ]?
    |
     [ [ left | right ] [ <length> | <percentage> ] ] &&
     [ [ top | bottom ] [ <length> | <percentage> ] ]
    ]

## Interpolation

Les valeurs des coordonnées en abscisses et en ordonnées sont interpolées indépendamment. La vitesse de l'interpolation est définie par la même fonction de temporisation ({{cssxref("easing-function")}}) et le point se déplacera donc sur une ligne.

## Exemples

### CSS

```css
div {
  background-color: #FFEE99;
  background-repeat: no-repeat;
  width: 300px;
  height: 80px;
  margin-bottom: 12px;
}

.exemple{
  background: url("https://mdn.mozillademos.org/files/11987/startransparent.gif") #FFEE99 no-repeat;
  // Ici un exemple de valeur <position>
  background-position:  2.5cm bottom;
}
```

### HTML

```html
<div class="exemple">Exemple</div>
```

### Résultat

{{EmbedLiveSample('Exemples', 120, 200)}}

## Spécifications

| Spécification                                                                                                    | État                                     | Commentaires                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Values', '#position', '&lt;position&gt;')}}                                 | {{Spec2('CSS3 Values')}}         | Renvoie aux deux définitions avec la contrainte suivante qui permet d'être cohérent : si {{SpecName('CSS3 Backgrounds')}} est pris en charge, c'est sa définition de  `<position>` qui doit être utilisée. |
| {{SpecName('CSS3 Backgrounds', '#position', '&lt;position&gt;')}}                         | {{Spec2('CSS3 Backgrounds')}} | `<position>` est défini de façon explicite et est étendu afin de pouvoir exprimer un décalage depuis n'importe quel côté.                                                                                              |
| {{SpecName('CSS2.1', 'colors.html#propdef-background-position', '&lt;position&gt;')}} | {{Spec2('CSS2.1')}}                 | Autorise la combinaison d'un mot-clé et d'une valeur {{cssxref("&lt;length&gt;")}} ou {{cssxref("&lt;percentage&gt;")}}.                                                                         |
| {{SpecName('CSS1', '#background-position', '&lt;position&gt;')}}                             | {{Spec2('CSS1')}}                 | `<position>` est défini de façon anonyme comme valeur de {{cssxref("background-position")}}.                                                                                                                 |

## Compatibilité des navigateurs

{{Compat("css.types.position")}}

## Voir aussi

- [Valeurs et unités en CSS](/fr/docs/Web/CSS/CSS_Values_and_Units)
- [Tutoriel - Introduction aux valeurs et unités CSS](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- {{cssxref("background-position")}}
- {{cssxref("radial-gradient","radial-gradient()")}}
- {{cssxref("conic-gradient","conic-gradient()")}}
