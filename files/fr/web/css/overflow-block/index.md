---
title: overflow-block
slug: Web/CSS/overflow-block
l10n:
  sourceCommit: 40cfeaf2623824ff3acf9d95af67a0498e23e3e8
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`overflow-block`** est une propriété logique qui définit ce qu'il faut afficher quand le contenu dépasse d'un élément de bloc sur les bords de bloc (ceux orthogonaux au sens d'écriture). On peut choisir d'afficher rien, une barre de défilement ou de laisser le contenu dépasser.

> **Note :** La propriété `overflow-block` correspond à [`overflow-y`](/fr/docs/Web/CSS/overflow-y) ou [`overflow-x`](/fr/docs/Web/CSS/overflow-x) selon le mode d'écriture du document.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overflow-block: visible;
overflow-block: hidden;
overflow-block: clip;
overflow-block: scroll;
overflow-block: auto;

/* Valeurs globales */
overflow-block: inherit;
overflow-block: initial;
overflow-block: revert;
overflow-block: revert-layer;
overflow-block: unset;
```

La propriété `overflow-block` est définie avec une valeur de type [`<overflow>`](/fr/docs/Web/CSS/overflow_value) (voir les valeurs ci-après).

### Valeurs

- `visible`
  - : Le contenu n'est pas rogné et peut être affiché en dehors des limites de bloc de la boîte.
- `hidden`
  - : Le contenu qui dépasse est masqué afin de ne pas dépasser dans l'axe de bloc. Aucune barre de défilement n'est affichée.
- `clip`
  - : Le contenu qui dépasse est rogné sur le bord de dépassement de l'élément, défini avec la propriété [`overflow-clip-margin`](/fr/docs/Web/CSS/overflow-clip-margin).
- `scroll`
  - : Le contenu est rogné si nécessaire selon l'axe de bloc pour tenir dans la boîte (de remplissage). Les navigateurs affichent des barres de défilement que le contenu soit rogné ou non (on évite ainsi d'avoir des barres qui apparaissent/disparaissent lorsque le contenu change). Les imprimantes peuvent imprimer le contenu qui dépasse.
- `auto`
  - : Le comportement de cette valeur dépend de l'agent utilisateur. Si le contenu tient dans la boîte de remplissage, elle se comportera comme `visible` mais établira un nouveau contexte de formatage. Les navigateurs de bureau affichent des barres de défilement si le contenu dépasse.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<ul>
  <li>
    <code>overflow-block:hidden</code> — masque le texte en dehors
    <div id="div1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block:scroll</code> — ajoute une barre de défilement
    <div id="div2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: clip</code> (masque le texte en dehors de la boîte
    au-delà du bord de dépassement)
    <div id="clip">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block:visible</code> — affiche le texte en dehors si besoin
    <div id="div3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block:auto</code> — pour la plupart des navigateurs,
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
  margin-bottom: 120px;
}

#hidden {
  overflow-block: hidden;
}
#scroll {
  overflow-block: scroll;
}
#scroll {
  overflow-block: clip;
}
#visible {
  overflow-block: visible;
}
#auto {
  overflow-block: auto;
}
```

### Résultat

{{EmbedLiveSample("", "100%", "780")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés CSS associées&nbsp;:
  - [`clip`](/fr/docs/Web/CSS/clip)
  - [`display`](/fr/docs/Web/CSS/display)
  - [`overflow`](/fr/docs/Web/CSS/overflow)
  - [`overflow-inline`](/fr/docs/Web/CSS/overflow-inline)
  - [`overflow-clip-margin`](/fr/docs/Web/CSS/overflow-clip-margin)
  - [`overflow-x`](/fr/docs/Web/CSS/overflow-x)
  - [`overflow-y`](/fr/docs/Web/CSS/overflow-y)
  - [`text-overflow`](/fr/docs/Web/CSS/text-overflow)
  - [`white-space`](/fr/docs/Web/CSS/white-space)
- [Le module de spécification CSS sur le dépassement (<i lang="en">overflow</i>)](/fr/docs/Web/CSS/CSS_overflow)
- [Les propriétés logiques](/fr/docs/Web/CSS/CSS_logical_properties_and_values)
- [Les modes d'écritures](/fr/docs/Web/CSS/CSS_writing_modes)
- [Apprendre le débordement de contenu](/fr/docs/Learn/CSS/Building_blocks/Overflowing_content)
