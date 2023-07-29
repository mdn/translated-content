---
title: overflow-inline
slug: Web/CSS/overflow-inline
l10n:
  sourceCommit: 40cfeaf2623824ff3acf9d95af67a0498e23e3e8
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`overflow-inline`** est une propriété logique qui définit ce qu'il faut afficher quand le contenu dépasse d'une boîte sur les bords en ligne (ceux parallèles au sens d'écriture). On peut choisir d'afficher rien, une barre de défilement ou de laisser le contenu dépasser.

> **Note :** La propriété `overflow-inline` correspond à [`overflow-y`](/fr/docs/Web/CSS/overflow-y) ou [`overflow-x`](/fr/docs/Web/CSS/overflow-x) selon le mode d'écriture du document.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overflow-inline: visible;
overflow-inline: hidden;
overflow-inline: clip;
overflow-inline: scroll;
overflow-inline: auto;

/* Valeurs globales */
overflow-inline: inherit;
overflow-inline: initial;
overflow-inline: revert;
overflow-inline: revert-layer;
overflow-inline: unset;
```

La propriété `overflow-inline` est définie avec une valeur de type [`<overflow>`](/fr/docs/Web/CSS/overflow_value) (voir les valeurs ci-après).

### Valeurs

- `visible`
  - : Le contenu n'est pas rogné et peut être affiché en dehors des limites en ligne de la boîte.
- `hidden`
  - : Le contenu qui dépasse est masqué afin de ne pas dépasser dans l'axe en ligne. Aucune barre de défilement n'est affichée.
- `clip`
  - : Le contenu qui dépasse est rogné sur le bord de dépassement de l'élément, défini avec la propriété [`overflow-clip-margin`](/fr/docs/Web/CSS/overflow-clip-margin).
- `scroll`
  - : Le contenu est rogné si nécessaire selon l'axe en ligne pour tenir dans la boîte (de remplissage). Les navigateurs affichent des barres de défilement que le contenu soit rogné ou non (on évite ainsi d'avoir des barres qui apparaissent/disparaissent lorsque le contenu change). Les imprimantes peuvent imprimer le contenu qui dépasse.
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
    <code>overflow-inline: hidden</code> (masque le texte en dehors de la boîte)
    <div id="div1">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: scroll</code> (ajoute une barre de défilement quoi
    qu'il arrive)
    <div id="div2">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: visible</code> (affiche le texte en dehors de la
    boîte si nécessaire)
    <div id="div3">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: auto</code> (équivalent à <code>scroll</code> pour la
    plupart des navigateurs)
    <div id="div4">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: clip</code> (masque le texte en dehors de la boîte
    au-delà du bord de dépassement)
    <code>clip</code>
    <div id="div5">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>
</ul>
```

### CSS

```css
div {
  border: 1px solid black;
  width: 250px;
  margin-bottom: 12px;
}

#div1 {
  overflow-inline: hidden;
}
#div2 {
  overflow-inline: scroll;
}
#div3 {
  overflow-inline: visible;
}
#div4 {
  overflow-inline: auto;
}
#div5 {
  overflow-inline: clip;
  overflow-clip-margin: 2em;
}
```

### Résultat

{{EmbedLiveSample("", "100%", "320")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés CSS associées&nbsp;:
  - [`clip`](/fr/docs/Web/CSS/clip)
  - [`display`](/fr/docs/Web/CSS/display)
  - [`overflow`](/fr/docs/Web/CSS/overflow)
  - [`overflow-block`](/fr/docs/Web/CSS/overflow-block)
  - [`overflow-clip-margin`](/fr/docs/Web/CSS/overflow-clip-margin)
  - [`overflow-x`](/fr/docs/Web/CSS/overflow-x)
  - [`overflow-y`](/fr/docs/Web/CSS/overflow-y)
  - [`text-overflow`](/fr/docs/Web/CSS/text-overflow)
  - [`white-space`](/fr/docs/Web/CSS/white-space)
- [Le module de spécification CSS sur le dépassement (<i lang="en">overflow</i>)](/fr/docs/Web/CSS/CSS_overflow)
- [Les propriétés logiques](/fr/docs/Web/CSS/CSS_logical_properties_and_values)
- [Les modes d'écritures](/fr/docs/Web/CSS/CSS_writing_modes)
- [Apprendre le débordement de contenu](/fr/docs/Learn/CSS/Building_blocks/Overflowing_content)
