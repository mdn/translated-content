---
title: Propriété CSS `table-layout`
short-title: table-layout
slug: Web/CSS/Reference/Properties/table-layout
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`table-layout`** permet de définir l'algorithme utilisé pour disposer les cellules, lignes et colonnes d'un tableau ({{HTMLElement("table")}}).

{{InteractiveExample("Démonstration CSS&nbsp;: table-layout")}}

```css interactive-example-choice
table-layout: auto;
width: 150px;
```

```css interactive-example-choice
table-layout: fixed;
width: 150px;
```

```css interactive-example-choice
table-layout: auto;
width: 100%;
```

```css interactive-example-choice
table-layout: fixed;
width: 100%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <table class="transition-all" id="example-element">
    <tr>
      <th>Nom</th>
      <th>Emplacement</th>
    </tr>
    <tr>
      <td>Lion</td>
      <td>Afrique</td>
    </tr>
    <tr>
      <td>Lemming norvégien</td>
      <td>Europe</td>
    </tr>
    <tr>
      <td>Phoque</td>
      <td>Antarctique</td>
    </tr>
    <tr>
      <td>Tigre</td>
      <td>Asie</td>
    </tr>
  </table>
</section>
```

```css interactive-example
table {
  border: 1px solid #113399;
}

th,
td {
  border: 2px solid #aa1199;
  padding: 0.25rem 0.5rem;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
table-layout: auto;
table-layout: fixed;

/* Valeurs globales */
table-layout: inherit;
table-layout: initial;
table-layout: revert;
table-layout: revert-layer;
table-layout: unset;
```

### Valeurs

- `auto`
  - : L'algorithme automatique de disposition des tableaux est utilisé. Les largeurs du tableau et de ses cellules sont ajustées pour s'adapter au contenu. La plupart des navigateurs utilisent cet algorithme par défaut.

- `fixed`
  - : L'algorithme de disposition fixe des tableaux est utilisé. Lors de l'utilisation de ce mot-clé, la largeur du tableau _doit être définie explicitement_ à l'aide de la propriété {{CSSxRef("width")}}. Si la valeur de la propriété `width` est définie sur `auto` ou n'est pas spécifiée, le navigateur utilise l'algorithme automatique de disposition des tableaux, auquel cas la valeur `fixed` n'a aucun effet.
    L'algorithme de disposition fixe des tableaux est plus rapide que l'algorithme automatique car la disposition horizontale du tableau dépend uniquement de la largeur du tableau, de la largeur des colonnes, des bordures ou de l'espacement des cellules. La disposition horizontale ne dépend pas du contenu des cellules car elle dépend uniquement des largeurs définies explicitement.

    Avec l'algorithme de disposition fixe, la largeur de chaque colonne est déterminée comme suit&nbsp;:
    - Un élément de colonne avec une largeur explicite définit la largeur de cette colonne.
    - Sinon, une cellule de la première ligne avec une largeur explicite détermine la largeur de cette colonne.
    - Sinon, la colonne obtient la largeur de l'espace horizontal restant partagé.

    Avec cet algorithme, l'ensemble du tableau peut être affiché une fois que la première ligne du tableau a été téléchargée et analysée. Cela peut accélérer le temps d'affichage par rapport à la méthode de disposition «&nbsp;automatique&nbsp;», mais le contenu des cellules suivantes peut ne pas tenir dans les largeurs de colonnes fournies. Les cellules utilisent la propriété {{CSSxRef("overflow")}} pour déterminer s'il faut couper tout contenu débordant, mais seulement si le tableau a une largeur connue&nbsp;; sinon, elles ne déborderont pas des cellules.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Tableaux à largeur fixe avec dépassement de texte

Cet exemple utilise une disposition de tableau fixe, combinée avec la propriété {{CSSxRef("width")}}, pour restreindre la largeur du tableau. La propriété {{CSSxRef("text-overflow")}} est utilisée pour appliquer une ellipse aux mots trop longs pour tenir. Si la disposition du tableau était `auto`, le tableau s'agrandirait pour s'adapter à son contenu, même si une largeur a été définie.

#### HTML

```html
<table>
  <tbody>
    <tr>
      <td>Ed</td>
      <td>Wood</td>
    </tr>
    <tr>
      <td>Albert</td>
      <td>Schweitzer</td>
    </tr>
    <tr>
      <td>Jane</td>
      <td>Fonda</td>
    </tr>
    <tr>
      <td>William</td>
      <td>Shakespeare</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  table-layout: fixed;
  width: 120px;
  border: 1px solid red;
}

td {
  border: 1px solid blue;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

#### Résultat

{{EmbedLiveSample("Tableaux à largeur fixe avec dépassement de texte")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("table")}}
- Le module [de tableau CSS](/fr/docs/Web/CSS/Guides/Table)
