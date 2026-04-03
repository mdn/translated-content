---
title: text-box-edge
slug: Web/CSS/Reference/Properties/text-box-edge
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-box-edge`** définit une quantité d'espace à supprimer du conteneur de bloc d'un élément de texte.

L'espacement vertical varie selon les polices, ce qui rend la composition typographique cohérente historiquement difficile sur le web. La propriété `text-box-edge` — ainsi que sa propriété complémentaire {{CSSxRef("text-box-trim")}}, qui définit quel(s) bord(s) supprimer — facilite l'obtention d'une composition typographique cohérente. La propriété `text-box-edge` n'a aucun effet si `text-box-trim` n'est pas défini ou est défini sur `none`.

> [!NOTE]
> La propriété raccourcie {{CSSxRef("text-box")}} peut être utilisée pour définir les valeurs `text-box-edge` et `text-box-trim` dans une seule déclaration.

## Syntaxe

```css
/* Mot-clé unique */
text-box-edge: auto;
text-box-edge: text;

/* Deux valeurs de type <text-edge> */
text-box-edge: text text;
text-box-edge: text alphabetic;
text-box-edge: cap alphabetic;
text-box-edge: ex text;

/* Valeurs globales */
text-box-edge: inherit;
text-box-edge: initial;
text-box-edge: revert;
text-box-edge: revert-layer;
text-box-edge: unset;
```

### Valeurs

La valeur de la propriété `text-box-edge` est définie comme `auto` ou une valeur {{CSSxRef("&lt;text-edge&gt;")}}&nbsp;:

- `auto`
  - : La valeur par défaut. Équivalente à la valeur `text` de `text-edge`.
- {{CSSxRef("&lt;text-edge&gt;")}}
  - : Un ou deux mots-clés distincts représentant les positions des bords supérieur et inférieur à supprimer dans le conteneur de bloc de l'élément de texte.
    - Si deux valeurs sont définies, la première valeur définit le comportement de suppression à appliquer au bord de début de bloc (supérieur) du texte, et la deuxième valeur définit le comportement de suppression à appliquer au bord de fin de bloc (inférieur) du texte.
      - Valeurs valides pour le bord supérieur&nbsp;: `text`, `cap` et `ex`.
      - Valeurs valides pour le bord inférieur&nbsp;: `text` et `alphabetic`.
    - Si une seule valeur est définie, elle définit le comportement de suppression pour les bords supérieur _et_ inférieur. Au moment de la rédaction, la seule valeur unique valide est `text`.

## Description

La hauteur du contenu composé uniquement de texte est relative à la hauteur de la police. Dans les fichiers de polices numériques, la hauteur inclut tous les caractères, y compris les lettres majuscules, les hampes, les jambages, etc. Les différentes polices ont des hauteurs de ligne de base différentes, ce qui signifie que des lignes de texte avec la même valeur de `font-size` produiront des boîtes de ligne de hauteurs différentes, affectant l'apparence de l'espacement entre les lignes.

La propriété `text-box-edge` permet de supprimer l'espace du bord de début et/ou du bord de fin du conteneur de bloc d'un élément de texte. Cela peut inclure {{Glossary("leading", "l'interligne")}} au bord de début de bloc et au bord de fin de bloc du texte, ainsi que l'espacement défini à l'intérieur de la police (comme décrit ci-dessus). Elle le fait en définissant une valeur {{CSSxRef("&lt;text-edge&gt;")}} qui indique le bord supérieur et le bord inférieur à supprimer.

Les bords à partir desquels supprimer l'espace sont définis à l'aide de la propriété {{CSSxRef("text-box-trim")}}. Par exemple, vous pouvez choisir de supprimer l'espace du bord supérieur ou du bord inférieur du conteneur de bloc du texte, ou des deux.

Ces propriétés facilitent grandement le contrôle de l'espacement du texte dans la direction du bloc.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de `text-box-edge`

Les valeurs les plus courantes de `text-box-edge` que vous utiliserez pour les langues à {{CSSxRef("writing-mode")}} horizontal telles que l'anglais ou l'arabe sont `cap alphabetic` et `ex alphabetic`. La valeur `cap` supprime l'espace du bord supérieur du conteneur de bloc de l'élément de texte jusqu'au sommet des lettres majuscules, tandis que `ex` supprime l'espace du bord supérieur jusqu'à la hauteur de `x` de la police (le bord supérieur des lettres minuscules courtes). Dans chaque cas, `alphabetic` supprime l'espace du bord inférieur jusqu'à la ligne de base du texte.

Dans cet exemple, nous démontrons l'effet de ces deux valeurs courantes sur deux éléments HTML {{HTMLElement("p")}}. De plus, une valeur {{CSSxRef("text-box-trim")}} de `trim-both` a été définie sur les deux, de sorte que leurs bords de début _et_ de fin sont supprimés.

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
p {
  text-box-trim: trim-both;
  border-top: 5px solid magenta;
  border-bottom: 5px solid magenta;
}

.one {
  text-box-edge: cap alphabetic;
}

.two {
  text-box-edge: ex alphabetic;
}
```

#### Résultat

La sortie est la suivante. Notez comment nous avons inclus une bordure supérieure et inférieure sur chaque paragraphe, afin que vous puissiez voir comment l'espace a été supprimé dans chaque cas.

{{EmbedLiveSample("Utilisation simple de `text-box-edge`", "100%", 360)}}

### Comparer les valeurs de `text-box-edge` de manière interactive

Pour un exemple interactif complet de `text-box-edge`, voir la [page `text-box-trim`](/fr/docs/Web/CSS/Reference/Properties/text-box-trim#comparer_les_valeurs_text-box-trim_et_text-box-edge_de_manière_interactive).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("text-box")}}, {{CSSxRef("text-box-trim")}}
- Le type de donnée {{CSSxRef("&lt;text-edge&gt;")}}
- Le module [de disposition en ligne CSS](/fr/docs/Web/CSS/Guides/Inline_layout)
- [La propriété CSS text-box-edge <sup>(angl.)</sup>](https://developer.chrome.com/blog/css-text-box-trim) sur developer.chrome.com (2025)
