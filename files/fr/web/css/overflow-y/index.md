---
title: overflow-y
slug: Web/CSS/overflow-y
l10n:
  sourceCommit: 40cfeaf2623824ff3acf9d95af67a0498e23e3e8
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`overflow-y`** permet de définir les mécanismes à utiliser (rognage, ascenseurs, dépassement, etc.) lorsque le contenu dépasse des bords haut et bas de la boîte. Cette propriété peut aussi être définie par la propriété raccourcie [`overflow`](/fr/docs/Web/CSS/overflow).

{{EmbedInteractiveExample("pages/css/overflow-y.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overflow-y: visible;
overflow-y: hidden;
overflow-y: clip;
overflow-y: scroll;
overflow-y: auto;

/* Valeurs globales */
overflow-y: inherit;
overflow-y: initial;
overflow-y: revert;
overflow-y: revert-layer;
overflow-y: unset;
```

La propriété `overflow-y` est définie avec une valeur de type [`<overflow>`](/fr/docs/Web/CSS/overflow_value) (voir les valeurs ci-après).

Si [`overflow-x`](/fr/docs/Web/CSS/overflow-y) vaut `hidden`, `scroll` ou `auto` et que cette propriété vaut `visible` (la valeur par défaut), la valeur calculée sera implicitement `auto`.

### Valeurs

- `visible`
  - : Le contenu n'est pas rogné. Il peut être affiché en dehors de la boîte de remplissage (<i lang="en">padding box</i>) en haut et en bas malgré le manque d'espace. La boîte de l'élément n'est pas un [conteneur de défilement](/fr/docs/Glossary/Scroll_container).
- `hidden`
  - : Le contenu est rogné afin de tenir verticalement dans la boîte de remplissage (<i lang="en">padding box</i>) et aucun ascenseur vertical n'est affiché.
- `clip`
  - : Le contenu qui dépasse est rogné sur _le bord de la limite de dépassement_ définie avec la propriété [`overflow-clip-margin`](/fr/docs/Web/CSS/overflow-clip-margin). Ainsi, le contenu dépasse de la boîte de remplissage de l'élément d'autant que la longueur fournie par `overflow-clip-margin` ou de `0px` si cette dernière n'est pas définie. Contrairement à `hidden`, `clip` interdit tout défilement, y compris celui qui proviendrait d'un script. Aucun contexte de formatage supplémentaire n'est créé. Pour établir un contexte de formatage, il faudra utiliser `overflow: clip` avec [`display: flow-root`](/fr/docs/Web/CSS/display#flow-root). La boîte de l'élément n'est pas un [conteneur de défilement](/fr/docs/Glossary/Scroll_container).
- `scroll`
  - : Le contenu est rogné afin de tenir verticalement au sein de la boîte de remplissage (<i lang="en">padding box</i>) et le navigateur affiche des barres de défilement (ascenseurs) dans tous les cas. Cela permet d'éviter d'avoir des barres qui apparaissent / disparaissent dans un environnement dynamique. Les imprimantes peuvent imprimer le contenu qui dépasse.
- `auto`
  - : Le contenu qui dépasse est rogné dans la boîte de contenu et on peut le faire défiler pour le faire apparaître. À la différence de `scroll`, les agents utilisateur afficheront les ascenseurs uniquement si le contenu dépasse et les masqueront par défaut. Si le contenu tient dans la boîte de remplissage de l'élément, cette valeur aura le même effet que `visible` et établira un nouveau contexte de formatage de bloc. Les navigateurs de bureau fournissent des barres de défilement si le contenu dépasse.

> **Note :** La valeur `overlay` est un synonyme historique de `auto`. Avec `overlay`, les barres de défilement étaient dessinées au-dessus du contenu plutôt que de prendre de l'espace.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<ul>
  <li>
    <code>overflow-y:hidden</code> — cache le texte en dehors de la boîte
    <div id="div1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y:scroll</code> — ajoute toujours un ascenseur
    <div id="div2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y:visible</code> — affiche le texte en dehors de la boîte si
    besoin
    <div id="div3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y:auto</code> — sur la plupart des navigateurs, cela sera
    équivalent à <code>scroll</code>
    <div id="div4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
```

### CSS

```css
div {
  border: 1px solid black;
  width: 250px;
  height: 100px;
}

#div1 {
  overflow-y: hidden;
  margin-bottom: 12px;
}
#div2 {
  overflow-y: scroll;
  margin-bottom: 12px;
}
#div3 {
  overflow-y: visible;
  margin-bottom: 120px;
}
#div4 {
  overflow-y: auto;
  margin-bottom: 120px;
}
```

### Résultat

{{EmbedLiveSample("", "100%", "780")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`clip`](/fr/docs/Web/CSS/clip)
- [`display`](/fr/docs/Web/CSS/display)
- [`text-overflow`](/fr/docs/Web/CSS/text-overflow)
- [`white-space`](/fr/docs/Web/CSS/white-space)
- [Le module de spécification CSS sur le dépassement (<i lang="en">overflow</i>)](/fr/docs/Web/CSS/CSS_overflow)
- [Apprendre le débordement de contenu](/fr/docs/Learn/CSS/Building_blocks/Overflowing_content)
