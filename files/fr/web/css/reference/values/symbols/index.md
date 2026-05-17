---
title: Fonction CSS `symbols()`
short-title: symbols()
slug: Web/CSS/Reference/Values/symbols
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`symbols()`** permet de définir des styles de compteur en ligne, directement comme valeur de propriétés telles que {{CSSxRef("list-style")}}, offrant une alternative moins puissante mais plus simple à la méthode {{CSSxRef("@counter-style")}} de définition d'un style de compteur.

Contrairement à {{CSSxRef("@counter-style")}}, qui définit un style de compteur réutilisable, `symbols()` est _anonyme_ (c'est-à-dire qu'elle ne peut être utilisée qu'une seule fois). Cette fonction accepte des chaînes de caractères et des images comme valeurs. En comparaison, le descripteur {{CSSxRef("@counter-style/symbols", "symbols")}} de {{CSSxRef("@counter-style")}} accepte également des identifiants.

## Syntaxe

```css
symbols() = symbols( <symbols-type>? [ <string> | <image> ]+ );
```

`<symbols-type>` est l'un des mots-clés suivants&nbsp;:

- `cyclic`&nbsp;: Le système parcourt les valeurs données dans l'ordre de leur définition et revient au début lorsqu'il atteint la fin.
- `numeric`&nbsp;: Le système interprète les valeurs données comme les unités successives d'un système de numération positionnelle.
- `alphabetic`&nbsp;: Le système interprète les valeurs données comme les chiffres d'un système de numération alphabétique, similaire à un système de numération positionnelle mais sans `0`.
- `symbolic`&nbsp;: Le système parcourt les valeurs, les affichant une fois de plus à chaque cycle (une fois pour le premier cycle, deux fois pour le deuxième, etc.).
- `fixed`&nbsp;: Le système parcourt les valeurs données une fois, puis revient aux chiffres arabes.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<ol>
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
</ol>
```

### CSS

```css
ol {
  list-style: symbols(cyclic "*" "†" "‡");
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les descripteurs de {{CSSxRef("@counter-style")}}&nbsp;: {{CSSxRef("@counter-style/system","system")}}, {{CSSxRef("@counter-style/symbols", "symbols")}}, {{CSSxRef("@counter-style/additive-symbols", "additive-symbols")}}, {{CSSxRef("@counter-style/prefix", "prefix")}}, {{CSSxRef("@counter-style/suffix", "suffix")}}, {{CSSxRef("@counter-style/range", "range")}}, {{CSSxRef("@counter-style/pad", "pad")}}, {{CSSxRef("@counter-style/speak-as", "speak-as")}}, {{CSSxRef("@counter-style/fallback", "fallback")}}
- Les propriétés de styles de listes&nbsp;: {{CSSxRef("list-style")}}, {{CSSxRef("list-style-type")}}
- Le module [des styles de compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
- Le module [des listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
