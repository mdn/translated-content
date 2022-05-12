---
title: Échappement des propriétés Unicode
slug: Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes
tags:
  - Expressions rationnelles
  - Expressions régulières
  - Guide
  - JavaScript
  - regex
translation_of: Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes
original_slug: Web/JavaScript/Guide/Expressions_régulières/Échappement_propriétés_Unicode
---
{{jsSidebar("JavaScript Guide")}}

Les séquences d'échappement pour les propriétés Unicode permettent de distinguer les caractères Unicodes en fonction de leurs propriétés : majuscules, minuscules, symboles mathématiques, ponctuation, etc.

## Syntaxe

```js
// Valeurs non-binaires
\p{UnicodePropertyName=ValeurPropriétéUnicode}
\p{UnicodePropertyName}

// Valeurs binaires et non-binaires
\p{UnicodePropertyName}
```

- `ValeurPropriétéUnicode`
  - : Une des valeurs listées ci-après. Pour certaines valeurs, le mot-clé `NomPropriétéUnicode` et le signe égal peuvent être omis.

## Valeurs

### Non-binaires

| Échappements                                                                 | Signification                                                                                                    |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `\p{LC} \p{Cased_Letter} \p{UnicodePropertyName=Cased_Letter}`               | N'importe quelle lettre avec la version minuscule et la version majuscule. Équivalent à `\p{Lu}\|\p{Ll}\|p{Lt}`. |
| `\p{Close_Punctuation} \p{UnicodePropertyName=Close_Punctuation}`            |                                                                                                                  |
| `\p{Connector_Punctuation} \p{UnicodePropertyName=Connector_Punctuation}`    |                                                                                                                  |
| `\p{Control} \p{UnicodePropertyName=Control}`                                |                                                                                                                  |
| `\p{Currency_Symbol} \p{UnicodePropertyName=Currency_Symbol}`                |                                                                                                                  |
| `\p{Dash_Punctuation} \p{UnicodePropertyName=Dash_Punctuation}`              |                                                                                                                  |
| `\p{Decimal_Number} \p{UnicodePropertyName=Decimal_Number}`                  |                                                                                                                  |
| `\p{Enclosing_Mark} \p{UnicodePropertyName=Enclosing_Mark}`                  |                                                                                                                  |
| `\p{Final_Punctuation} \p{UnicodePropertyName=Final_Punctuation}`     |                                                                                                                  |
| `\p{Format} \p{UnicodePropertyName=Format}`                           |                                                                                                                  |
| `\p{Initial_Punctuation} \p{UnicodePropertyName=Initial_Punctuation}` |                                                                                                                  |
| `\p{Letter} \p{UnicodePropertyName=Letter}`                           |                                                                                                                  |
| `\p{Letter_Number} \p{UnicodePropertyName=Line_Separator}`            |                                                                                                                  |
| `\p{Lowercase_Letter} \p{UnicodePropertyName=Lowercase_Letter}`       |                                                                                                                  |
| `\p{Mark} \p{UnicodePropertyName=Mark}`                               |                                                                                                                  |
| `\p{Math_Symbol;} \p{UnicodePropertyName=Math_Symbol}`                |                                                                                                                  |
| `\p{Modifier_Letter} \p{UnicodePropertyName=Modifier_Letter}`         |                                                                                                                  |
| `\p{Modifier_Symbol} \p{UnicodePropertyName=Modifier_Symbol}`         |                                                                                                                  |
| `\p{Nonspacing_Mark} \p{UnicodePropertyName=Nonspacing_Mark}`         |                                                                                                                  |
| `\p{Number} \p{UnicodePropertyName=Number}`                           |                                                                                                                  |
| `\p{Open_Punctuation} \p{UnicodePropertyName=Open_Punctuation}`       |                                                                                                                  |
| `\p{Other} \p{UnicodePropertyName=Other_Letter}`                      |                                                                                                                  |
| `\p{Other_Letter} \p{UnicodePropertyName=Other_Letter}`               |                                                                                                                  |
| `\p{Other_Number} \p{UnicodePropertyName=Other_Number}`               |                                                                                                                  |
| `\p{Other_Punctuation} \p{UnicodePropertyName=Other_Punctuation}`     |                                                                                                                  |
| `\p{Paragraph_Separator} \p{UnicodePropertyName=Paragraph_Separator}` |                                                                                                                  |
| `\p{Private_Use}`Meaning `\p{UnicodePropertyName=Private_Use}`        |                                                                                                                  |
| `\p{Punctuation} \p{UnicodePropertyName=Punctuation}`                 |                                                                                                                  |
| `\p{Separator} \p{UnicodePropertyName=Separator}`                     |                                                                                                                  |
| `\p{Space_Separator} \p{UnicodePropertyName=Space_Separator}`         |                                                                                                                  |
| `\p{Spaceing_Mark} \p{UnicodePropertyName=Spacing_Mark}`              |                                                                                                                  |
| `\p{Surrogate} \p{UnicodePropertyName=Surrogate}`                     |                                                                                                                  |
| `\p{Symbol} \p{UnicodePropertyName=Symbol}`                           |                                                                                                                  |
| `\p{Titlecase_Letter} \p{UnicodePropertyName=Titlecase_Letter}`       |                                                                                                                  |
| `\p{Unassigned} \p{UnicodePropertyName=Unassigned}`                   |                                                                                                                  |
| `\p{Uppercase_Letter} \p{UnicodePropertyName=UppercaseLetter}`        |                                                                                                                  |

### Binaires

| Échappement                        | Signification |
| ---------------------------------- | ------------- |
| `\p{Alphabetic}`                   |               |
| `\p{Bidi_Control}`                 |               |
| `\p{Bidi_Mirrored}`                |               |
| `\p{Case_Ignorable}`               |               |
| `\p{Cased}`                        |               |
| `\p{Changes_When_Casefolded}`      |               |
| `\p{Changes_When_Casemapped}`      |               |
| `\p{Changes_When_Lowercased}`      |               |
| `\p{Changes_When_NFKC_Casefolded}` |               |
| `\p{Changes_When_Titlecased}`      |               |
| `\p{Changes_When_Uppercased}`      |               |
| `\p{Dash}`                         |               |
| `\p{Default_Ignorable_Code_Point}` |               |
| `\p{Deprecated}`                   |               |
| `\p{Diacritic}`                    |               |
| `\p{Emoji}`                        |               |
| `\p{Emoji_Component}`              |               |
| `\p{Emoji_Modifier}`               |               |
| `\p{Emoji_Modifier_Base}`          |               |
| `\p{Emoji_Presentation}`           |               |
| `\p{Extender}`                     |               |
| `\p{Grapheme_Base}`                |               |
| `\p{Grapheme_Extend}`              |               |
| `\p{Hex_Digit}`                    |               |
| `\p{ID_Continue}`                  |               |
| `\p{ID_Start}`                     |               |
| `\p{Ideographic}`                  |               |
| `\p{IDS_Binary_Operator}`          |               |
| `\p{IDS_Trinary_Operator}`         |               |
| `\p{Join_Control}`                 |               |
| `\p{Logical_Order_Exception}`      |               |
| `\p{Lowercase}`                    |               |
| `\p{Math}`                         |               |
| `\p{Noncharacter_Code_Point}`      |               |
| `\p{Pattern_Syntax}`               |               |
| `\p{Pattern_White_Space}`          |               |
| `\p{Quotation_Mark}`               |               |
| `\p{Radical}`                      |               |
| `\p{RegionalIndicator}`            |               |
| `\p{Sentence_Terminal}`            |               |
| `\p{Soft_Dotted}`                  |               |
| `\p{Terminal_Punctuation}`         |               |
| `\p{Unified_Ideograph}`            |               |
| `\p{Uppercase}`                    |               |
| `\p{Variation_Selector}`           |               |
| `\p{White_Space}`                  |               |
| `\p{XID_Continue}`                 |               |
| `\p{XID_Start}`                    |               |
