---
title: ruby-align
slug: Web/CSS/ruby-align
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`ruby-align`** définit la façon dont les éléments ruby sont distribués autour du texte de base.

```css
/* Valeur avec un mot-clé */
ruby-align: start;
ruby-align: center;
ruby-align: space-between;
ruby-align: space-around;

/* Valeurs globales */
ruby-align: inherit;
ruby-align: initial;
ruby-align: unset;
```

## Syntaxe

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

Ce fragment HTML sera affiché différemment en fonction des valeurs de `ruby-align` :

```html
<ruby>
  <rb>Un long texte pour tester</rb>
  <rp>（</rp><rt>Un petit ruby</rt><rp>）</rp>
</ruby>
```

### Alignement par rapport au début du texte de base

```html hidden
<ruby>
  <rb>This is a long text to check</rb>
  <rp>（</rp><rt>short ruby</rt><rp>）</rp>
</ruby>
```

```css
ruby {
  ruby-align: start;
}
```

Avec ce CSS, on obtient le résultat suivant :

{{EmbedLiveSample("Alignement_par_rapport_au_début_du_texte_de_base", 180, 40)}}

### Alignement par rapport au centre

```html hidden
<ruby>
  <rb>This is a long text to check</rb>
  <rp>（</rp><rt>short ruby</rt><rp>）</rp>
</ruby>
```

```css
ruby {
  ruby-align: center;
}
```

Avec ce CSS, on obtient le résultat suivant :

{{EmbedLiveSample("Alignement_par_rapport_au_centre", 180, 40)}}

### Un espace supplémentaire entre les éléments ruby

```html hidden
<ruby>
  <rb>This is a long text to check</rb>
  <rp>（</rp><rt>short ruby</rt><rp>）</rp>
</ruby>
```

```css
ruby {
  ruby-align: space-between;
}
```

Avec ce CSS, on obtient le résultat suivant :

{{EmbedLiveSample("Un_espace_supplémentaire_entre_les_éléments_ruby", 180, 40)}}

### Un espace supplémentaire entre et autour des éléments ruby

```css
ruby {
  ruby-align: space-around;
}
```

Avec ce CSS, on obtient le résultat suivant :

{{EmbedLiveSample("Un_espace_supplémentaire_entre_et_autour_des_éléments_ruby", 180, 40)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments HTML liés aux notations Ruby : {{HTMLElement("ruby")}}, {{HTMLElement("rt")}}, {{HTMLElement("rp")}} et {{HTMLElement("rtc")}}.
- Les propriétés CSS liées aux notations Ruby : {{cssxref("ruby-position")}}, {{cssxref("ruby-merge")}}.
