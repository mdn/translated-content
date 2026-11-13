---
title: Propriété CSS `orphans`
short-title: orphans
slug: Web/CSS/Reference/Properties/orphans
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`orphans`** définit le nombre minimum de lignes dans un bloc englobant qui doivent être affichées en bas d'une [page](/fr/docs/Web/CSS/Guides/Paged_media), d'une région ou d'une [colonne](/fr/docs/Web/CSS/Guides/Multicol_layout).

En typographie, un orphelin (<i lang="en">orphan</i> en anglais) est la première ligne d'un paragraphe qui apparaît isolée en bas d'une page (le paragraphe poursuivant sur la page suivante).

## Syntaxe

```css
/* Valeurs de type <integer> */
orphans: 2;
orphans: 3;

/* Valeurs globales */
orphans: inherit;
orphans: initial;
orphans: revert;
orphans: revert-layer;
orphans: unset;
```

### Valeurs

- {{CSSxRef("&lt;integer&gt;")}}
  - : Le nombre minimum de lignes qui peuvent rester seules en bas d'un fragment avant une rupture de fragmentation. La valeur doit être positive.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir une taille minimale d'orphelin de trois lignes

#### HTML

```html
<div>
  <p>Ceci est le premier paragraphe contenant du texte.</p>
  <p>
    Ceci est le deuxième paragraphe contenant un peu plus de texte que le
    premier. Il est utilisé pour démontrer le fonctionnement de la propriété
    orphans.
  </p>
  <p>
    Ceci est le troisième paragraphe. Il contient un peu plus de texte que le
    premier.
  </p>
</div>
```

#### CSS

```css
div {
  background-color: #8cffa0;
  height: 150px;
  columns: 3;
  orphans: 3;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### Résultat

{{EmbedLiveSample("Définir une taille minimale d'orphelin de trois lignes", 380, 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("widows")}}
- [Média paginés](/fr/docs/Web/CSS/Guides/Paged_media)
