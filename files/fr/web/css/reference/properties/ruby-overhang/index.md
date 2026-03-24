---
title: ruby-overhang
slug: Web/CSS/Reference/Properties/ruby-overhang
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`ruby-overhang`** définit si une annotation {{HTMLElement("ruby")}} peut dépasser le texte environnant.

{{InteractiveExample("Démonstration CSS&nbsp;: ruby-overhang")}}

```css interactive-example-choice
ruby-overhang: auto;
```

```css interactive-example-choice
ruby-overhang: none;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    あの<ruby>表<rp>(</rp><rt>ひょう</rt><rp>)</rp></ruby
    ><ruby>現<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>は面白い。
  </p>
</section>
```

```css interactive-example
#default-example {
  font-size: 2em;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
ruby-overhang: auto;
ruby-overhang: none;

/* Valeurs globales */
ruby-overhang: inherit;
ruby-overhang: initial;
ruby-overhang: revert;
ruby-overhang: revert-layer;
ruby-overhang: unset;
```

### Values

- `auto`
  - : Lorsqu'un conteneur d'annotation ruby est plus long que son conteneur de base correspondant, l'annotation peut partiellement chevaucher le texte adjacent.
    La manière et l'étendue du chevauchement sont déterminées par l'agent utilisateur.
- `none`
  - : Un mot-clé indiquant que le ruby n'est jamais autorisé à dépasser les conteneurs adjacents.

## Description

La propriété `ruby-overhang` contrôle si la boîte de texte d'annotation ruby ({{HTMLElement("rt")}}) peut chevaucher le texte adjacent en dehors de la boîte du conteneur `<ruby>`.

Lorsque le texte d'annotation ruby n'est pas autorisé à dépasser — lorsque `ruby-overhang: none` est défini sur l'élément `<ruby>` — cet élément se comporte comme une boîte en ligne, comme si sa propriété {{CSSxRef("display")}} était définie sur `inline`, avec uniquement son propre contenu rendu à l'intérieur de ses limites et les éléments adjacents ne franchissant pas la boîte de délimitation.

Par défaut, le contenu d'un élément `<rt>` est autorisé à dépasser, de sorte que le contenu peut chevaucher la boîte du conteneur `<ruby>`, se rendant partiellement au-dessus ou en dessous du contenu environnant de niveau en ligne.
Avec `auto`, la valeur par défaut, le contenu peut dépasser, mais il ne dépassera pas si cela chevaucherait des éléments `<rt>` adjacents ou des éléments avec une valeur de `display` résolvant à `ruby-base` ou `ruby-text`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Ruby dépassant le texte de base

Cet exemple démontre les deux valeurs de la propriété `ruby-overhang`.

#### HTML

Nous incluons deux paragraphes avec un contenu et une structure `<ruby>` identiques, à l'exception de leurs noms de classe.

```html
<p class="auto">
  あの<ruby>表<rp>(</rp><rt>ひょう</rt><rp>)</rp></ruby
  ><ruby>現<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>は面白い。
</p>

<p class="none">
  あの<ruby>表<rp>(</rp><rt>ひょう</rt><rp>)</rp></ruby
  ><ruby>現<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>は面白い。
</p>
```

#### CSS

Un `outline` rouge de `1px` aide à mettre en évidence l'annotation de texte des éléments HTML {{HTMLElement("rt")}}.
Le premier paragraphe a `ruby-overhang: auto` et le second a `ruby-overhang: none`.

```css
p {
  font-size: 40px;
  display: block;
  margin: 0.5rem;
}
rt {
  font-size: 28px;
  outline: 1px solid red;
}
.auto {
  ruby-overhang: auto;
}
.none {
  ruby-overhang: none;
}
```

#### Résultat

{{EmbedLiveSample("Ruby dépassant le texte de base", , 350)}}

Lorsque `ruby-overhang` est défini sur `none`, le texte d'annotation n'est pas autorisé à chevaucher les boîtes adjacentes du texte de base ruby. Si vous regardez de près, vous remarquerez que dans le premier paragraphe, la boîte rouge entourant le texte ruby chevauche légèrement des parties du contenu `<ruby>` non associé, tandis que dans l'exemple `none` dans les navigateurs compatibles, il n'y a aucun chevauchement entre le contenu ruby et le texte ruby non associé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("ruby-align")}}
- La propriété {{CSSxRef("text-transform", "text-transform: full-size-kana")}}
- L'élément HTML {{HTMLElement("ruby")}}
- L'élément HTML {{HTMLElement("rt")}}
- L'élément HTML {{HTMLElement("rp")}}
