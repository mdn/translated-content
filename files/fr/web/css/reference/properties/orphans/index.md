---
title: Propriété CSS `orphans`
short-title: orphans
slug: Web/CSS/Reference/Properties/orphans
l10n:
  sourceCommit: e4ed2e4bfb88dab98ae65c44c134e3359b623d9b
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

### Contrôler les orphelins de colonne

Cet exemple utilise une case à cocher pour basculer `orphans` entre `2` et `1`. Avec `orphans: 2`, au moins deux lignes d'un paragraphe doivent apparaître en bas d'une colonne. Avec `orphans: 1`, le paragraphe peut être coupé n'importe où.

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
<form>
  <input type="checkbox" id="orphans" checked />
  <label for="orphans">Appliquer orphans: 2</label>
</form>
```

#### CSS

```css
div {
  background-color: #8cffa0;
  width: 420px;
  height: 120px;
  columns: 3;
  column-fill: auto;
  orphans: 1;
  widows: 1;
}

div:has(~ form input:checked) {
  orphans: 2;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### Résultat

{{EmbedLiveSample("Contrôler les orphelins de colonne", "", 240)}}

Dans Firefox, qui ne prend pas en charge `orphans`, le comportement dans cet exemple est essentiellement équivalent à `orphans: 1`, quel que soit l'état de la case à cocher. La capture d'écran suivante montre le résultat avec `orphans: 2` dans un navigateur compatible&nbsp;:

![Trois paragraphes en trois colonnes. Le premier paragraphe occupe la première colonne. Le deuxième paragraphe commence dans la deuxième colonne, laissant de l'espace sous le premier paragraphe, et continue dans la troisième colonne. Le troisième paragraphe occupe le reste de la troisième colonne.](with-orphans.png)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("widows")}}
- [Média paginés](/fr/docs/Web/CSS/Guides/Paged_media)
