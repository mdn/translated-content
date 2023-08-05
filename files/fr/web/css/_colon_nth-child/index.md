---
title: ":nth-child"
slug: Web/CSS/:nth-child
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:nth-child(an+b)`** permet de cibler un élément qui possède `an+b-1` éléments voisins (au même niveau) avant lui dans l'arbre du document pour des valeurs entières `n` et qui possède un élément parent. Autrement dit, un sélecteur utilisant cette pseudo-classe permettra de cibler les éléments fils d'un élément dont les positions correspondent au motif _an+b_.

```css
/* Cible les éléments en fonction de leur position dans */
/* le document : ici le 4e, 8e, 16e, 20e, etc. quel que */
/* soit le type de l'élément */
body :nth-child(4n) {
  background-color: lime;
}
```

> **Note :** Pour CSS3, pour que l'élément soit ciblé, il faut qu'il ait un élément parent. En CSS4, cette restriction a été levée.

Illustrons cela avec quelques exemples :

- `1n+0` ou `n` ciblera chaque élément fils. `n` ne cible aucun élément pour le navigateur Android jusqu'à la version 4.3 alors qu'`1n` fonctionne. `1n` est synonyme de `1n+0` et les deux peuvent donc être utilisés de façon équivalente.
- `2n+0` ou `2n` ciblera les éléments fils 2, 4, 6, 8, etc. On pourra utiliser le mot-clé **`even`** à la place de cette expression.
- `2n+1` ciblera les éléments fils 1, 3, 5, 7, etc. On pourra utiliser le mot-clé **`odd`** à la place de cette expression.
- `3n+4` permettra de cibler les éléments fils 4, 7, 10, 13, etc.
- `0n+3` (ou plus simplement `3`) permettra de cibler le troisième élément.

Les valeurs des coefficients `a` et `b` doivent être des entiers et l'indice du premier élément fils commence à 1. Autrement dit, cette pseudo-classe permettra de cibler les éléments fils dont l'indice appartient à l'ensemble `{ an + b; n = 0, 1, 2, ... }`.

Cette pseudo-classe pourra ainsi être utilisée pour mettre en forme certaines lignes d'un tableau.

## Syntaxe

La pseudo-classe `nth-child` prend un seul argument qui représente le motif de répétition des éléments ciblés.

### Valeurs avec un mot-clé

- `odd`
  - : Représente les éléments dont la position est impaire par rapport à leurs voisins.
- `even`
  - : Représente les éléments dont la position est paire par rapport à leurs voisins.

### Notation fonctionnelle

- `<An+B>`
  - : Représente les éléments dont la position est la `An+B`-ième avec `n` qui parcourt les entiers à partir de 0. Les valeurs fournies pour `A` et `B` doivent être des entiers ({{cssxref("&lt;integer&gt;")}}).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemples de sélecteurs

- `tr:nth-child(2n+1)`
  - : Permettra de cibler les lignes impaires d'un tableau.
- `tr:nth-child(odd)`
  - : Permettra de cibler les lignes impaires d'un tableau.
- `tr:nth-child(2n)`
  - : Permettra de cibler les lignes paires d'un tableau.
- `tr:nth-child(even)`
  - : Permettra de cibler les lignes paires d'un tableau.
- `span:nth-child(0n+1)`
  - : Permettra de cibler un élément {{HTMLElement("span")}} qui est le premier fils de son parent. Cela aura le même effet que la pseudo-classe {{cssxref(":first-child")}}.
- `span:nth-child(1)`
  - : Synonyme à l'exemple précédent.
- `span:nth-child(-n+3)`
  - : Permettra de cibler un élément si celui-ci fait partie des trois premiers fils d'un parent et que c'est également un élément `span`.

### Exemple démonstratif

#### CSS

```css
html {
  font-family: sans-serif;
}

span,
div em {
  padding: 10px;
  border: 1px solid green;
  display: inline-block;
  margin-bottom: 3px;
}

.premier span:nth-child(2n + 1),
.deuxieme span:nth-child(2n + 1),
.troisieme span:nth-of-type(2n + 1) {
  background-color: lime;
}
```

#### HTML

```html
<p>
  <code>span:nth-child(2n+1)</code>, <em>sans</em> un <code>&lt;em&gt;</code>
  parmi les éléments. Les éléments fils 1, 3, 5 et 7 sont sélectionnés.
</p>

<div class="premier">
  <span>Ce span est sélectionné !</span>
  <span>Pas ce span ci. :(</span>
  <span>Celui-ci ?</span>
  <span>Celui-là ?</span>
  <span>Un autre exemple</span>
  <span>Et encore un</span>
  <span>Puis un dernier</span>
</div>

<p>
  <code>span:nth-child(2n+1)</code>, <em>avec</em> un élément
  <code>&lt;em&gt;</code>
  parmi les fils. Les éléments fils 1, 5, et 7 sont sélectionnés. 3 est compté
  mais n'est pas ciblé car ce n'est pas
  <code>&lt;span&gt;</code>.
</p>

<div class="deuxieme">
  <span>Ce span est sélectionné !</span>
  <span>Pas ce span ci. :(</span>
  <em>Ici on a un em.</em>
  <span>Qu'en est-il de celui-ci ?</span>
  <span>De celui-là ?</span>
  <span>Voici un autre exemple</span>
  <span>Et encore un</span>
  <span>Puis un dernier</span>
</div>

<p>
  <code>span:nth-of-type(2n+1)</code>, <em>avec</em> un
  <code>&lt;em&gt;</code> parmi les éléments fils. Les éléments fils 1, 4, 6 et
  8 sont sélectionnés. 3 n'est pas compté ni ciblé car c'est un
  <code>&lt;em&gt;</code>, et pas un <code>&lt;span&gt;</code> et
  <code>nth-of-type</code> ne sélectionne que les fils de ce type. Ce
  <code>&lt;em&gt;</code> est sauté et est ignoré.
</p>

<div class="troisieme">
  <span>Ce span est sélectionné !</span>
  <span>Pas ce span ci. :(</span>
  <em>Ici on a un em.</em>
  <span>Qu'en est-il de celui-ci ?</span>
  <span>De celui-là ?</span>
  <span>Voici un autre exemple</span>
  <span>Et encore un</span>
  <span>Puis un dernier</span>
</div>
```

#### Résultat

{{EmbedLiveSample('Exemple_démonstratif','100%', '550')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":nth-of-type")}}
- {{cssxref(":first-child")}}
- {{cssxref(":last-child")}}
