---
title: -webkit-box-reflect
slug: Web/CSS/Reference/Properties/-webkit-box-reflect
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{Non-standard_Header}}

La propriété [CSS](/fr/docs/Web/CSS) **`-webkit-box-reflect`** peut être utilisée afin de créer un effet de réflexion d'un élément dans une direction donnée.

## Syntaxe

```css
/* Valeurs de directions */
-webkit-box-reflect: above;
-webkit-box-reflect: below;
-webkit-box-reflect: left;
-webkit-box-reflect: right;

/* Valeurs incluant un décalage */
-webkit-box-reflect: below 10px;

/* Valeur de masque */
-webkit-box-reflect: below 0 linear-gradient(transparent, white);

/* Valeurs globales */
-webkit-box-reflect: inherit;
-webkit-box-reflect: initial;
-webkit-border-before: revert;
-webkit-border-before: revert-layer;
-webkit-box-reflect: unset;
```

### Valeurs

- `above`, `below`, `right`, `left`
  - : Des mots-clés qui indiquent la direction dans laquelle créer la réflexion (respectivement&nbsp;: au-dessus, en-dessous, à droite, à gauche).
- {{CSSxRef("&lt;length&gt;")}}
  - : Indique la taille du reflet créé.
- {{CSSxRef("&lt;image&gt;")}}
  - : Décrit le masque à appliquer au reflet.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`-webkit-box-reflect = [ above | below | right | left ]? <length>? <image>?`)}}

## Spécifications

Cette propriété ne fait partie d'aucun standard, mais on pourra utiliser la fonction CSS standardisée {{CSSxRef("element()")}}.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La [documentation <sup>(angl.)</sup>](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html) de Apple.
- La [spécification <sup>(angl.)</sup>](https://webkit.org/blog/182/css-reflections/) de WebKit.
