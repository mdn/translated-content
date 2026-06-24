---
title: Propriété CSS `text-decoration-skip`
short-title: text-decoration-skip
slug: Web/CSS/Reference/Properties/text-decoration-skip
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Deprecated_Header}}

La propriété [CSS](/fr/docs/Web/CSS) **`text-decoration-skip`** définit la façon dont les lignes décoratives doivent être appliquées aux éléments et aux caractères. Elle contrôle les lignes décoratives dessinées par l'élément courant ainsi que celles de ses ancêtres.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
text-decoration-skip: none;
text-decoration-skip: objects;
text-decoration-skip: spaces;
text-decoration-skip: edges;
text-decoration-skip: box-decoration;

/* Plusieurs mots-clés */
text-decoration-skip: objects spaces;
text-decoration-skip: leading-spaces trailing-spaces;
text-decoration-skip: objects edges box-decoration;

/* Valeurs globales */
text-decoration-skip: inherit;
text-decoration-skip: initial;
text-decoration-skip: revert;
text-decoration-skip: revert-layer;
text-decoration-skip: unset;
```

### Valeurs

- `none`
  - : Rien n'est ignoré. Ainsi, la décoration de texte est dessinée pour tout le contenu textuel et à travers les boîtes en ligne atomiques.
- `objects`
  - : Toute la boîte de l'élément est ignorée s'il s'agit d'un élément en ligne atomique comme une image ou un élément en ligne de type bloc.
- `spaces`
  - : Tous les espacements sont ignorés&nbsp;: tous les [caractères d'espacement Unicode <sup>(angl.)</sup>](https://www.unicode.org/reports/tr44/#White_Space) et tous les séparateurs de mots, ainsi que tout {{CSSxRef("letter-spacing")}} ou {{CSSxRef("word-spacing")}} adjacent.
- `leading-spaces`
  - : Identique à `spaces`, sauf que seuls les espaces de début sont ignorés.
- `trailing-spaces`
  - : Identique à `spaces`, sauf que seuls les espaces de fin sont ignorés.
- `edges`
  - : Le début et la fin de la décoration de texte sont légèrement décalés (par exemple, de la moitié de l'épaisseur de la ligne) par rapport au bord du contenu de la boîte décorative. Ainsi, les éléments adjacents reçoivent des soulignements séparés. (Ceci est important en chinois, où le soulignement est une forme de ponctuation.)

    ![Un exemple de "text-decoration-skip: edges;".](decoration-skip-edges.png)

- `box-decoration`
  - : La décoration de texte est ignorée sur les marges, bordures et zones de remplissage de la boîte. Cela n'a d'effet que sur les décorations imposées par un ancêtre&nbsp;; une _boîte décorative_ ne dessine jamais sur sa propre décoration de boîte.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Ignorer les bords

#### HTML

```html
<p>Bonjour tout le monde, quelle journée !</p>
```

#### CSS

```css
p {
  margin: 0;
  font-size: 3em;
  text-decoration: underline;
  text-decoration-skip: edges;
}
```

#### Résultat

{{EmbedLiveSample("Ignorer les bords", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("text-decoration-skip-ink")}}
