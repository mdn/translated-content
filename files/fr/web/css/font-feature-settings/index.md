---
title: font-feature-settings
slug: Web/CSS/font-feature-settings
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/font-feature-settings
---
{{CSSRef}}

La propriété **`font-feature-settings`** permet de contrôler les fonctionnalités typographiques des polices OpenType.

{{EmbedInteractiveExample("pages/css/font-feature-settings.html")}}

> **Note :** Lorsque c'est possible, les auteurs devraient utiliser la propriété raccourcie {{cssxref("font-variant")}} ou l'une des propriétés détaillées correspondantes parmi {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-numeric")}} ou {{cssxref("font-variant-position")}}.
>
> Cette propriété est une fonctionnalité bas-niveau permettant de gérer des cas particuliers où il n'y a aucun moyen d'accéder à une fonctionnalité OpenType donnée. Cette propriété CSS ne devrait notamment pas être utilisée pour activer les petites majuscules.

## Syntaxe

```css
/* On utilise le réglage par défaut */
font-feature-settings: normal;

/* On définit la valeur des étiquettes OpenType */
font-feature-settings: "smcp";
font-feature-settings: "smcp" on;
font-feature-settings: "swsh" 2;
font-feature-settings: "smcp", "swsh" 2;

/* Valeurs globales */
font-feature-settings: inherit;
font-feature-settings: initial;
font-feature-settings: unset;
```

### Valeurs

- `normal`
  - : Le texte est disposé en utilisant les réglages par défaut.
- `<feature-tag-value>`
  - : Lors du rendu du texte, l'étiquette de fonctionnalité OpenType est passée au moteur afin d'activer ou de désactiver certaines fonctionnalités de la police. L'étiquette est toujours une chaîne (type {{cssxref("&lt;string&gt;")}}) de 4 caractères ASCII. Si la chaîne contient plus ou moins de 4 caractères ou contient des caractères en dehors de l'intervalle U+20 - U+7E, la déclaration sera considérée comme invalide.
    La valeur associée à l'étiquette est un entier positif. Les deux mots-clés `on` et `off` sont des synonymes respectifs des valeurs `1` et `0`. Si aucune valeur n'est donnée pour une étiquette, la valeur par défaut sera `1`. Pour les fonctionnalités OpenType qui ne sont pas booléennees, la valeur implique qu'un glyphe donné soit sélectionné.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
/* on utilise les glyphes alternatifs en small-cap */
.smallcaps { font-feature-settings: "smcp" on; }

/* on convertit les majuscules et minuscules en petites
   capitales */
.allsmallcaps { font-feature-settings: "c2sc", "smcp"; }

/* on utilise les zéros barrés d'une barre oblique afin de
   les différencier de "O" */
.nicezero { font-feature-settings: "zero"; }

/* on active les formes historiques */
.hist { font-feature-settings: "hist"; }

/* on désactive les ligatures communément utilisées */
.noligs { font-feature-settings: "liga" 0; }

/* on active les chiffres tabulaires (chasse fixe) */
td.tabular { font-feature-settings: "tnum"; }

/* on active les fractions automatiques */
.fractions { font-feature-settings: "frac"; }

/* on utilise le deuxième caractère de « swash » */
.swash { font-feature-settings: "swsh" 2; }

/* On active l'ensemble stylistique 7 */
.fancystyle {
  font-family: Gabriola; /* Windows 7 et Mac OS */
  font-feature-settings: "ss07";
}
```

## Spécifications

| Spécification                                                                                                    | État                             | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Fonts', '#propdef-font-feature-settings', 'font-feature-settings')}} | {{Spec2('CSS3 Fonts')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.font-feature-settings")}}

## Voir aussi

- [La liste des fonctionnalités OpenType](https://www.microsoft.com/typography/otspec/featurelist.htm)
- [_Using the whole font_, un article MSDN en anglais](https://blogs.msdn.com/b/ie/archive/2012/01/09/css-corner-using-the-whole-font.aspx)
