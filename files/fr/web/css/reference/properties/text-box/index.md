---
title: text-box
slug: Web/CSS/Reference/Properties/text-box
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`text-box`** correspond aux propriétés {{CSSxRef("text-box-trim")}} et {{CSSxRef("text-box-edge")}}, qui définissent ensemble la quantité d'espace à supprimer du bord de début de bloc et du bord de fin de bloc du conteneur de bloc d'un élément de texte.

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("text-box-trim")}}
- {{CSSxRef("text-box-edge")}}

## Syntaxe

```css
/* Mot-clé unique */
text-box: normal;

/* Un mot-clé text-box-edge */
text-box: trim-start text;
text-box: trim-both text;

/* Deux mots-clés text-box-edge */
text-box: trim-start cap alphabetic;
text-box: trim-both ex text;

/* Valeurs globales */
text-box: inherit;
text-box: initial;
text-box: revert;
text-box: revert-layer;
text-box: unset;
```

### Valeurs

La valeur `text-box` peut être composée d'une valeur {{CSSxRef("text-box-trim")}} et d'une valeur {{CSSxRef("text-box-edge")}} séparées par un espace. Consultez ces pages pour la description des valeurs.

La propriété `text-box` peut également prendre le mot-clé `normal`, qui est équivalent à `text-box: none auto;`

Si `text-box-trim` est omis, il est défini sur `trim-both`. Si `text-box-edge` est omis, il est défini sur `auto`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Description

La hauteur du contenu composé uniquement de texte est relative à la hauteur de la police. Dans les fichiers de polices numériques, la hauteur inclut tous les caractères, y compris les lettres majuscules, les hampes, les jambages, etc. Les différentes polices ont des hauteurs de ligne de base différentes, ce qui signifie que des lignes de texte avec la même valeur de `font-size` produiront des boîtes de ligne de hauteurs différentes, affectant l'apparence de l'espacement entre les lignes.

Les propriétés `text-box` permettent de supprimer l'espace supplémentaire du bord de début de bloc et du bord de fin de bloc du conteneur de bloc d'un élément de texte, ce qui peut inclure {{Glossary("leading", "l'interligne")}} au bord de début de bloc et au bord de fin de bloc du texte, ainsi que l'espacement défini à l'intérieur de la police (comme décrit ci-dessus). Cela facilite grandement le contrôle de l'espacement du texte dans la direction du bloc.

## Exemples

### Utilisation simple de `text-box`

Dans l'exemple suivant, nous avons deux éléments `<p>` avec des classes `one` et `two`.

Nous appliquons une valeur `text-box` de `trim-end cap alphabetic` au premier paragraphe. La valeur `cap alphabetic` de {{CSSxRef("text-box-edge")}} définit le bord supérieur au sommet des lettres majuscules et le bord inférieur aligné avec la ligne de base du texte. Comme la valeur de {{CSSxRef("text-box-trim")}} est définie sur `trim-end`, seul le bord inférieur du paragraphe est défini.

Nous appliquons une valeur `text-box` de `trim-both ex alphabetic` au second paragraphe. La valeur `ex alphabetic` de {{CSSxRef("text-box-edge")}} définit le bord supérieur à la hauteur `x` de la police (le sommet des petites lettres minuscules) et le bord inférieur aligné avec la ligne de base du texte. Comme la valeur de {{CSSxRef("text-box-trim")}} est définie sur `trim-both`, les bords supérieur _et_ inférieur du paragraphe sont définis.

```html hidden
<p class="one">C'est le .un</p>

<p class="two">C'est le .deux</p>
```

```css hidden
html {
  font-family: sans-serif;
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
}

p {
  margin: 0;
  font-size: 6rem;
  font-weight: bold;
}
```

```css
.one {
  text-box: trim-end cap alphabetic;
}

.two {
  text-box: trim-both ex alphabetic;
}

p {
  border-top: 5px solid magenta;
  border-bottom: 5px solid magenta;
}
```

#### Résultat

La sortie est la suivante. Notez comment nous avons inclus une bordure supérieure et inférieure sur chaque paragraphe, afin que vous puissiez voir comment l'espace a été réduit dans chaque cas.

{{EmbedLiveSample("Utilisation simple de `text-box`", "100%", 360)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("text-box-edge")}}, {{CSSxRef("text-box-trim")}}
- Le type de donnée {{CSSxRef("&lt;text-edge&gt;")}}
- Le module [de disposition en ligne CSS](/fr/docs/Web/CSS/Guides/Inline_layout)
- [La propriété CSS text-box-edge <sup>(angl.)</sup>](https://developer.chrome.com/blog/css-text-box-trim) sur developer.chrome.com (2025)
