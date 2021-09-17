---
title: font-weight
slug: Web/CSS/@font-face/font-weight
tags:
  - '@font-face'
  - CSS
  - Descripteur
  - Reference
translation_of: Web/CSS/@font-face/font-weight
---
{{CSSRef}}

Le descripteur CSS **`font-weight`** permet aux auteurs d'indiquer les graisses pour les polices fournies dans une règle {{cssxref("@font-face")}}. La propriété [`font-weight`](/fr/docs/Web/CSS/font-weight) peut être utilisée séparément pour indiquer la graisse des caractères d'un texte (c'est-à-dire s'ils sont en gras, normaux ou plus fins).

Pour une police particulière, les auteurs peuvent télécharger différentes fontes qui utilisent les différents styles d'une même police et alors utiliser le descripteur `font-weight` afin de définir explicitement le niveau de graisse. La valeur utilisée pour le descripteur est la même que celle qui peut être utilisée pour la propriété.

{{cssinfo}}

Il existe généralement un nombre limité de niveaux de graisse pour une police donnée. Lorsqu'on utilise un niveau de graisse qui n'existe pas, c'est le niveau le plus proche qui est utilisé. Les polices qui ne disposent pas d'une fonte en gras sont généralement synthétisées par l'agent utilisateur (pour empêcher cette synthèse, on pourra utiliser la propriété {{cssxref('font-synthesis')}}).

## Syntaxe

    /* Valeurs simples */
    font-weight: normal;
    font-weight: bold;
    font-weight: 400;

    /* Valeurs multiples */
    font-weight: normal bold;
    font-weight: 300 500;

### Valeurs

- `normal`
  - : Le niveau de graisse normal (équivaut à la valeur numérique `400`).
- `bold`
  - : La fonte en gras (équivaut à la valeur numérique `700`).
- `<number>`
  - : Un nombre (une valeur de type {{cssxref("&lt;number&gt;")}}) comprise entre 1 et 1000 (et incluant ces limites). Plus la valeur est élevée, plus le niveau de graisse utilisé sera important. Certains valeurs communément utilisées possèdent un nom : voir ci-après le tableau de correspondance entre les noms et les valeurs).

Dans les versions antérieures de la spécification, `font-weight` n'acceptait que les mots-clés et les valeurs numériques 100, 200, 300, 400, 500, 600, 700, 800 et 900. Les polices qui ne sont pas variables pourront n'utiliser que ces valeurs (les valeurs intermédiaires, ex. 451) seront ramenées à la valeur palier la plus proche.

Avec la spécification CSS Fonts de niveau 4, la syntaxe a été étendue afin que n'importe quel nombre entre 1 and 1000 (au sens large) puisse être utilisé. Les polices variables (voir plus bas) ont aussi été introduites et on peut donc avoir un contrôle plus précis sur le niveau de graisse utilisé.

### Correspondance entre les noms et les valeurs numériques

Les valeurs numériques entre `100` et `900` correspondent (approximativement) à ces noms communément utilisés :

| Valeur | Nom commun                |
| ------ | ------------------------- |
| 100    | Thin (Hairline)           |
| 200    | Extra Light (Ultra Light) |
| 300    | Light                     |
| 400    | Normal                    |
| 500    | Medium                    |
| 600    | Semi Bold (Demi Bold)     |
| 700    | Bold                      |
| 800    | Extra Bold (Ultra Bold)   |
| 900    | Black (Heavy)             |

### Polices variables

La plupart des polices se déclinent en fontes avec des niveaux de graisses distincts. Toutefois, certaines polices, appelées polices variables, permettent d'utiliser des niveaux de graisse intermédiaires plus ou moins finement. On peut ainsi obtenir une fonte d'un niveau de graisse plus précis.

Pour les polices variables TrueType ou OpenType, c'est l'axe de variation `"wght"` qui est utilisé afin d'implémenter ces largeurs variables.

### Syntaxe formelle

{{csssyntax}}

## Exemples

Dans l'exemple suivant, on récupère une police Open Sans et on l'importe en utilisant le niveau de graisse normal.

    @font-face {
      font-family: "Open Sans";
      src: local("Open Sans") format("woff2"),
           url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
      font-weight: 400;
    }

## Accessibilité

Pour les personnes ayant une vision faible, il peut être extrêmement difficile de lire un texte avec `font-weight` qui vaut `100` ou `200`, notamment [si le contraste entre le texte et l'arrière-plan est faible](/fr/docs/Web/CSS/color#Accessibilité).

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [_Understanding Success Criterion 1.4.8 - W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Spécifications

| Spécification                                                                    | État                             | Commentaires |
| -------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('CSS4 Fonts', '#font-prop-desc', 'font-weight')}} | {{Spec2('CSS4 Fonts')}} |              |
| {{SpecName('CSS3 Fonts', '#font-prop-desc', 'font-weight')}} | {{Spec2('CSS3 Fonts')}} |              |

## Compatibilité des navigateurs

{{Compat("css.at-rules.font-face.font-weight")}}

## Voir aussi

- [`font-weight`](/fr/docs/Web/CSS/font-weight)
- {{cssxref("@font-face/font-display", "font-display descriptor")}}
- {{cssxref("@font-face/font-family", "font-family descriptor")}}
- {{cssxref("@font-face/font-stretch", "font-stretch descriptor")}}
- {{cssxref("@font-face/font-style", "font-style descriptor")}}
- {{cssxref("@font-face/font-variant", "font-variant descriptor")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range descriptor")}}
