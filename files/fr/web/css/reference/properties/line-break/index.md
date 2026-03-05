---
title: line-break
slug: Web/CSS/Reference/Properties/line-break
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`line-break`** définit la façon de couper les lignes de texte chinois, japonais ou coréen (CJK) lors du traitement de la ponctuation et des symboles.

{{InteractiveExample("Démonstration CSS&nbsp;: line-break")}}

```css interactive-example-choice
line-break: auto;
```

```css interactive-example-choice
line-break: anywhere;
```

```css interactive-example-choice
line-break: normal;
```

```css interactive-example-choice
line-break: loose;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    この喫茶店は、いつでもコーヒーの香りを漂わせています。<br />彼女はこの喫茶店で働いて、着々と実力をつけていきました。<br />今では知る人ぞ知る、名人です。
  </p>
</section>
```

```css interactive-example
#example-element {
  font-family: "Yu Gothic", "YuGothic", "Meiryo", "ＭＳ ゴシック", sans-serif;
  border: 2px dashed #999999;
  text-align: left;
  width: 240px;
  font-size: 16px;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
line-break: auto;
line-break: loose;
line-break: normal;
line-break: strict;
line-break: anywhere;

/* Valeurs globales */
line-break: inherit;
line-break: initial;
line-break: revert;
line-break: revert-layer;
line-break: unset;
```

### Valeurs

- `auto`
  - : Coupe le texte en utilisant la règle de saut de ligne par défaut.
- `loose`
  - : Coupe le texte en utilisant la règle de saut de ligne la moins restrictive. Généralement utilisé pour les lignes courtes, comme dans les journaux.
- `normal`
  - : Coupe le texte en utilisant la règle de saut de ligne la plus courante.
- `strict`
  - : Coupe le texte en utilisant la règle de saut de ligne la plus stricte.
- `anywhere`
  - : Il y a une opportunité de retour à la ligne souple autour de chaque unité de caractère typographique, y compris autour de tout caractère de ponctuation ou espace conservé, ou au milieu des mots, sans tenir compte d'aucune interdiction de saut de ligne, même celles introduites par des caractères de classe GL, WJ ou ZWJ ou imposées par la propriété {{CSSxRef("word-break")}}. Les différentes opportunités de retour à la ligne ne doivent pas être hiérarchisées. La césure n'est pas appliquée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le retour à la ligne du texte

Vérifiez si le texte est coupé avant «&nbsp;々&nbsp;», «&nbsp;ぁ&nbsp;» et «&nbsp;。&nbsp;».

#### HTML

```html
<div lang="ja">
  <p class="wrap-box auto">
    auto:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrap-box loose">
    loose:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrap-box normal">
    normal:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrap-box strict">
    strict:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrap-box anywhere">
    anywhere:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
</div>
```

#### CSS

```css
.wrap-box {
  width: 10em;
  margin: 0.5em;
  white-space: normal;
  vertical-align: top;
  display: inline-block;
}
.auto {
  line-break: auto;
}
.loose {
  line-break: loose;
}
.normal {
  line-break: normal;
}
.strict {
  line-break: strict;
}
.anywhere {
  line-break: anywhere;
}
```

#### Résultat

{{EmbedLiveSample("Définir le retour à la ligne du texte", 200, 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [CSS et texte international <sup>(angl.)</sup>](https://www.w3.org/International/articles/css3-text/) sur W3C
