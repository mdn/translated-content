---
title: font-variation-settings
slug: Web/CSS/@font-face/font-variation-settings
tags:
  - '@font-face'
  - CSS
  - Descripteur
  - Reference
translation_of: Web/CSS/@font-face/font-variation-settings
---
{{CSSRef}}

Le descripteur **`font-variation-settings`**, associé à la règle @ {{cssxref("@font-face")}} permet d'indiquer les variations de police de bas niveau pour les polices OpenType ou TrueType.

## Syntaxe

    /* On utilise les paramètres par défaut */
    font-variation-settings: normal;

    /* On indique les valeurs pour les noms des axes OpenType */
    font-variation-settings: "xhgt" 0.7;

### Valeurs

- `normal`
  - : Le texte est disposé avec les paramètres par défaut.
- `<string> <number>`
  - : Lorsque le texte est affiché, la liste des noms des axes OpenType est envoyée au moteur afin d'activer ou de désactiver des paramètres de la police. Chaque paramètre se compose d'un nom ({{cssxref("&lt;string&gt;")}}) de 4 caractères ASCII, suivis d'un nombre ({{cssxref("number")}}) qui indique la valeur de l'axe. Si la chaîne de caractères contient moins ou plus de caractères ou contient des caractères en dehors de l'intervalle de points de code U+20 - U+7E, la propriété entière sera considérée comme invalide. Le nombre utilisé peut être décimal ou négatif.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
@font-face {
  font-family: 'OpenTypeFont';
  src: url('open_type_font.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-variation-settings: 'wght' 400, 'wdth' 300;
}
```

## Spécifications

| Spécification                                                                                    | État                             | Commentaires         |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('CSS4 Fonts', '#font-rend-desc', 'font-variation-settings')}} | {{Spec2('CSS4 Fonts')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.at-rules.font-face.font-variation-settings")}}
