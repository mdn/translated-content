---
title: :nth-last-child
slug: Web/CSS/Reference/Selectors/:nth-last-child
original_slug: Web/CSS/:nth-last-child
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:nth-last-child`** permet de cibler les éléments qui possèdent `an+b-1` nœud frères qui les suivent pour un même élément parent avec un indice n entier qui est incrémenté à partir de 0. Avec CSS3, il était nécessaire que l'élément ciblé ait un élément parent, cette restriction a été levée en CSS4.

{{InteractiveExample("Démonstration CSS&nbsp;: :nth-last-child", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

li:nth-last-child(-n + 3) {
  border: 2px solid orange;
  margin-top: 1px;
}

li:nth-last-child(even) {
  background-color: lightyellow;
}
```

```html interactive-example
<p>Les huit incendies de forêt les plus meurtriers&nbsp;:</p>
<ol reversed>
  <li>Feu de Matheson</li>
  <li>Feu de Miramichi</li>
  <li>Feux de 1997 en Indonésie</li>
  <li>Feu de Thumb</li>
  <li>Feu de Great Hinckley</li>
  <li>Feu de Cloquet</li>
  <li>Feu de Kursha-2</li>
  <li>Feu de Peshtigo</li>
</ol>
```

## Syntaxe

```css-nolint
:nth-last-child(<nth> [of <complex-selector-list>]?) {
  /* ... */
}
```

### Parameters

La pseudo-classe `nth-last-child` prend un seul argument qui représente le motif de répétition des éléments ciblés, compté à partir de la fin.

### Valeurs avec un mot-clé

- `odd`
  - : Représente les éléments dont la position est impaire par rapport à leurs voisins lorsqu'elle est comptée depuis la fin.
- `even`
  - : Représente les éléments dont la position est paire par rapport à leurs voisins lorsqu'elle est comptée depuis la fin.

### Notation fonctionnelle

- `<An+B>`
  - : Représente les éléments dont la position, à partir de la fin, est la `An+B`-ième avec `n` qui parcourt les entiers à partir de 0. Les valeurs fournies pour `A` et `B` doivent être des entiers {{cssxref("&lt;integer&gt;")}}.

#### La syntaxe `of <selector>`

En passant un sélecteur en argument, nous pouvons sélectionner le **n-ième dernier** élément qui correspond à ce sélecteur. Par exemple, le sélecteur suivant correspond aux trois derniers éléments de liste _importants_, qui sont assignés avec `class="important"`.

```css
:nth-last-child(-n + 3 of li.important) {
}
```

> [!NOTE]
> Cela est différent de déplacer le sélecteur en dehors de la fonction, comme&nbsp;:

```css
li.important:nth-last-child(-n + 3) {
}
```

Ce sélecteur applique un style aux éléments de liste s'ils font également partie des trois derniers enfants.

## Exemples

### Exemple de sélecteurs

- `tr:nth-last-child(odd)` ou `tr:nth-last-child(2n+1)`
  - : Représente les lignes impaires d'un tableau HTML : 1, 3, 5, etc., en partant de la fin.
- `tr:nth-last-child(even)` ou `tr:nth-last-child(2n)`
  - : Représente les lignes paires d'un tableau HTML : 2, 4, 6, etc., en partant de la fin.
- `:nth-last-child(7)`
  - : Représente le septième élément, en partant de la fin.
- `:nth-last-child(5n)`
  - : Représente les éléments 5, 10, 15, etc., en partant de la fin.
- `:nth-last-child(3n+4)`
  - : Représente les éléments 4, 7, 10, 13, etc., en partant de la fin.
- `:nth-last-child(-n+3)`
  - : Représente les trois derniers éléments parmi un groupe de frères.
- `p:nth-last-child(n)` ou `p:nth-last-child(n+1)`
  - : Représente chaque élément `<p>` parmi un groupe de frères. Cela est identique à un simple sélecteur `p`. (Puisque `n` commence à zéro, tandis que le dernier élément commence à un, `n` et `n+1` sélectionneront tous deux les mêmes éléments.)
- `p:nth-last-child(1)` ou `p:nth-last-child(0n+1)`
  - : Représente chaque `<p>` qui est le premier élément parmi un groupe de frères, en partant de la fin. Cela est identique au sélecteur {{cssxref(":last-child")}}.

### Exemple de tableau

#### HTML

```html
<table>
  <tbody>
    <tr>
      <td>Première ligne</td>
    </tr>
    <tr>
      <td>Deuxième ligne</td>
    </tr>
    <tr>
      <td>Troisième ligne</td>
    </tr>
    <tr>
      <td>Quatrième ligne</td>
    </tr>
    <tr>
      <td>Cinquième ligne</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  border: 1px solid blue;
}

/* Sélectionne les trois derniers éléments */
tr:nth-last-child(-n + 3) {
  background-color: pink;
}

/* Sélectionne chaque élément à partir de l'avant-dernier */
tr:nth-last-child(n + 2) {
  color: blue;
}

/* Sélectionne uniquement l'avant-dernier élément */
tr:nth-last-child(2) {
  font-weight: 600;
}
```

#### Résultat

{{EmbedLiveSample('Exemple_de_tableau', 300, 150)}}

### Requêtes de quantité

La mise en forme _quantity query_ des éléments dépend du nombre d'entre eux. Dans cet exemple, les éléments de liste deviennent rouges lorsqu'il y en a au moins trois dans une liste donnée. Cela est accompli en combinant les capacités de la pseudo-classe `nth-last-child` et du [combinator de frère suivant](/fr/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator).

#### HTML

```html
<h4>Une liste de quatre éléments (avec style)&nbsp;:</h4>
<ol>
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
</ol>

<h4>Une liste de deux éléments (sans style)&nbsp;:</h4>
<ol>
  <li>Un</li>
  <li>Deux</li>
</ol>
```

#### CSS

```css
/* Si il y a au moins trois éléments de liste,
   appliquez-leur tous un style */
li:nth-last-child(n + 3),
li:nth-last-child(3) ~ li {
  color: red;
}
```

#### Résultat

{{EmbedLiveSample('quantité_de_requêtes', '100%', 270)}}

### Exemple de syntaxe `of <selector>`

Dans cet exemple, il y a une liste non ordonnée de noms. Certains éléments ont une classe `noted` appliquée et sont ensuite mis en surbrillance avec une bordure inférieure épaisse.

#### HTML

```html
<ul>
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
  <li>Aylin</li>
  <li>Leo</li>
  <li>Leyla</li>
  <li class="noted">Bruce</li>
  <li>Aisha</li>
  <li>Veronica</li>
  <li class="noted">Kyouko</li>
  <li>Shireen</li>
  <li>Tanya</li>
  <li class="noted">Marlene</li>
</ul>
```

#### CSS

```css
* {
  font-family: sans-serif;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 1.2rem;
  padding-left: 0;
}

li {
  margin: 0.125rem;
  padding: 0.25rem;
  border: 1px solid tomato;
}

.noted {
  border-bottom: 5px solid tomato;
}
```

Dans le CSS suivant, nous ciblons les éléments de liste **impairs** qui sont marqués avec `class="noted"`.

```css
li:nth-last-child(odd of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### Résultat

Les éléments avec `class="noted"` ont une bordure inférieure épaisse et les éléments 1, 7, 14 et 20 ont un fond solide car ce sont les éléments de liste _impairs_ avec `class="noted"`.

{{EmbedLiveSample('exemple_de_syntaxe_of_selector', 550, 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{Cssxref(":nth-child")}}
- {{Cssxref(":nth-last-of-type")}}
- [Requêtes de quantité pour CSS <sup>(angl.)</sup>](https://alistapart.com/article/quantity-queries-for-css)
