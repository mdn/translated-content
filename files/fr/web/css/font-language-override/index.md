---
title: font-language-override
slug: Web/CSS/font-language-override
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/font-language-override
---
{{CSSRef}}

La propriété **`font-language-override`** permet de contrôler l'utilisation des glyphes spécifiques à une langue pour une police.

```css
/* Valeur avec un mot-clé */
font-language-override: normal;

/* <string> values */
font-language-override: "ENG";  /* Use English glyphs */
font-language-override: "TRK";  /* Use Turkish glyphs */
/* Valeurs globales */
font-language-override: initial;
font-language-override: inherit;
font-language-override: unset;
```

Par défaut, les navigateurs utilisent l'attribut global {{htmlattrxref("lang")}} pour déterminer la langue du texte d'un élément. Grâce à cette information, certains glyphes spéciaux, conçus pour cette langue, peuvent être utilisés. Ainsi, de nombreuses polices possèdent un caractère spécial pour la ligature `fi` afin que le point du `i` fusionne avec le caractère précédent. Cette ligature ne devrait pas être utilisée en turc, car il existe deux formes pour le i, avec et sans point : `i` et `ı`.

Quelques fois, l'auteur d'un document peut vouloir surcharger la langue. Ainsi, si la fonte ne sait pas que la langue azérie possède un i sans point, comme le turc, on pourra utiliser `font-language-override` pour forcer l'utilisation des glyphes turcs qui seront plus adaptés que les glyphes par défaut.

## Syntaxe

Cette propriété est définie avec le mot-clé `normal` ou avec une chaîne de caractères (`<string>`).

### Valeurs

- `normal`
  - : Ce mot-clé force l'utilisation des glyphes de la langue définie pour cette police.
- `<string>`
  - : Cette chaîne de caractère force le navigateur à utiliser les glyphes de la langue correspondante. Les valeurs qui peuvent être utilisées sont [les valeurs du système de langue OpenType](https://www.microsoft.com/typography/otspec/languagetags.htm).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
p.para1 {
  font-language-override: normal;
}

p.para2 {
  font-language-override: "DAN";
}
```

### HTML

```html
<p class="para1">Réglage par défaut.</p>
<p class="para2">
  Un paragraphe pour lequel  <code>font-language-override</code>
  cible le danois
</p>
```

### Résultat

{{EmbedLiveSample('Exemples', '600')}}

## Spécifications

| Spécification                                                                                                        | État                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Fonts', '#propdef-font-language-override', 'font-language-override')}} | {{Spec2('CSS3 Fonts')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.font-language-override")}}

## Voir aussi

- {{cssxref("font-variant")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-synthesis")}}
- {{cssxref("font-kerning")}}
