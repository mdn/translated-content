---
title: ruby-position
slug: Web/CSS/ruby-position
tags:
  - CSS
  - Propriété
  - Reference
  - Ruby
translation_of: Web/CSS/ruby-position
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`ruby-position`** définit la position d'un élément ruby par rapport à son élément de base. L'élément ruby peut ainsi être positionné au-dessus de l'élément (`over`), en-dessous (`under`) ou entre les caractères, sur leur droite (`inter-character`).

```css
/* Valeurs avec un mot-clé */
ruby-position: over;
ruby-position: under;
ruby-position: inter-character;

/* Valeurs globales */
ruby-position: inherit;
ruby-position: initial;
ruby-position: unset;
```

## Syntaxe

### Valeurs

- `over`
  - : Un mot-clé qui indique que les annotations ruby doivent être placée au-dessus du texte pour les scripts horizontaux et à droite pour les scripts verticaux.
- `under`
  - : Un mot-clé qui indique que les annotations ruby doivent être placés sous le texte pour les scripts horizontaux et à gauche pour les scripts verticaux.
- `inter-character`
  - : Un mot-clé qui indique que les annotations ruby doivent être placées entre les différents caractères.

### Syntaxe formelle

{{csssyntax}}

## Exemples

Ce fragment HTML rendra un résultat différent pour chaque valeur de `ruby-position` :

```html
<ruby>
  <rb>超電磁砲</rb>
  <rp>（</rp><rt>レールガン</rt><rp>）</rp>
</ruby>
```

### Au-dessus du texte

```html hidden
<ruby>
  <rb>超電磁砲</rb>
  <rp>（</rp><rt>レールガン</rt><rp>）</rp>
</ruby>
```

```css
ruby {
    ruby-position:over;
}
```

On obtiendra le résultat suivant :

{{EmbedLiveSample("Au-dessus_du_texte", 100, 40)}}

### En-dessous du texte

```html hidden
<ruby>
  <rb>超電磁砲</rb>
  <rp>（</rp><rt>レールガン</rt><rp>）</rp>
</ruby>
```

```css
ruby {
    ruby-position:under;
}
```

On obtiendra le résultat suivant :

{{EmbedLiveSample("En-dessous_du_texte", 100, 40)}}

## Spécifications

| Spécification                                                            | État                         | Commentaires         |
| ------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('CSS3 Ruby', '#rubypos', 'ruby-position')}} | {{Spec2('CSS3 Ruby')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.ruby-position")}}

## Voir aussi

- Les éléments HTML à propos de Ruby : {{HTMLElement("ruby")}}, {{HTMLElement("rt")}}, {{HTMLElement("rp")}} et {{HTMLElement("rtc")}}.
- Les propriétés CSS à propos de Ruby : {{cssxref("ruby-align")}}, {{cssxref("ruby-merge")}}.
