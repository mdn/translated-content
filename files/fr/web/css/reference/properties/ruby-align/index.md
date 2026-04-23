---
title: Propriété CSS `ruby-align`
short-title: ruby-align
slug: Web/CSS/Reference/Properties/ruby-align
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`ruby-align`** définit la façon dont les éléments ruby sont distribués autour du texte de base.

## Syntaxe

```css
/* Valeur avec un mot-clé */
ruby-align: start;
ruby-align: center;
ruby-align: space-between;
ruby-align: space-around;

/* Valeurs globales */
ruby-align: inherit;
ruby-align: initial;
ruby-align: revert;
ruby-align: revert-layer;
ruby-align: unset;
```

### Valeurs

- `start`
  - : Un mot-clé indiquant que les notations ruby sont alignées avec le début du texte de base.
- `center`
  - : Un mot-clé indiquant que les notations ruby sont alignées avec le milieu du texte de base.
- `space-between`
  - : Un mot-clé indiquant qu'un espace supplémentaire sera distribué entre les éléments ruby.
- `space-around`
  - : Un mot-clé indiquant qu'un espace supplémentaire sera distribué entre les éléments ruby et autour d'eux.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Ruby aligné au début du texte de base

#### HTML

```html
<ruby>
  <rb>Un long texte pour tester</rb>
  <rp>（</rp><rt>Un petit ruby</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-align: start;
}
```

#### Résultat

{{EmbedLiveSample("Ruby aligné au début du texte de base", 180, 40)}}

### Ruby aligné au centre du texte de base

#### HTML

```html
<ruby>
  <rb>Ceci est un long texte pour tester</rb>
  <rp>（</rp><rt>un petit ruby</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-align: center;
}
```

#### Résultat

{{EmbedLiveSample("Ruby aligné au centre du texte de base", 180, 40)}}

### Un espace supplémentaire entre les éléments ruby

#### HTML

```html
<ruby>
  <rb>Ceci est un long texte pour tester</rb>
  <rp>（</rp><rt>un petit ruby</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-align: space-between;
}
```

#### Résultat

{{EmbedLiveSample("Un espace supplémentaire entre les éléments ruby", 180, 40)}}

### Un espace supplémentaire entre et autour des éléments ruby

#### HTML

```html
<ruby>
  <rb>Ceci est un long texte pour tester</rb>
  <rp>（</rp><rt>un petit ruby</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-align: space-around;
}
```

#### Résultat

{{EmbedLiveSample("Un espace supplémentaire entre et autour des éléments ruby", 180, 40)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("ruby-position")}}
- Le module [de disposition ruby CSS](/fr/docs/Web/CSS/Guides/Ruby_layout)
- Les éléments HTML Ruby&nbsp;: {{HTMLElement("ruby")}}, {{HTMLElement("rt")}}, {{HTMLElement("rp")}} et {{HTMLElement("rtc")}}
