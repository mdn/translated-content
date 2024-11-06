---
title: ":nth-last-child"
slug: Web/CSS/:nth-last-child
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/CSS/Pseudo-classes) **`:nth-last-child`** permet de cibler les éléments qui possèdent `an+b-1` nœud frères qui les suivent pour un même élément parent avec un indice n entier qui est incrémenté à partir de 0. Avec CSS3, il était nécessaire que l'élément ciblé ait un élément parent, cette restriction a été levée en CSS4.

```css
/* Cible les éléments qui sont les 4e, 8e, 16e     */
/* 20e à partir de la fin, quel que soit leur type */
body: nth-last-child(4n) {
  background-color: lime;
}
```

Cette pseudo-classe fonctionne comme {{cssxref(":nth-child")}} mais cette fois-ci, le comptage s'effectue depuis la fin. Pour plus d'informations sur la syntaxe des arguments, voir {{cssxref(":nth-child")}}.

## Syntaxe

La pseudo-classe `nth-last-child` prend un seul argument qui représente le motif de répétition des éléments ciblés, compté à partir de la fin.

### Valeurs avec un mot-clé

- `odd`
  - : Représente les éléments dont la position est impaire par rapport à leurs voisins lorsqu'elle est comptée depuis la fin.
- `even`
  - : Représente les éléments dont la position est paire par rapport à leurs voisins lorsqu'elle est comptée depuis la fin.

### Notation fonctionnelle

- `<An+B>`
  - : Représente les éléments dont la position, à partir de la fin, est la `An+B`-ième avec `n` qui parcourt les entiers à partir de 0. Les valeurs fournies pour `A` et `B` doivent être des entiers {{cssxref("&lt;integer&gt;")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemples

- `tr:nth-last-child(-n+4)`
  - : Permettra de cibler les quatre dernières lignes d'un tableau.
- `span:nth-last-child(even)` ou `span:nth-last-child(2n)`
  - : Permettra de cibler tous les éléments {{HTMLElement("span")}} pairs en partant de la fin.

### Exemple appliqué

#### CSS

```css
table {
  border: 1px solid blue;
}
tr:nth-last-child(-n + 3) {
  /* les trois derniers enfants */
  background-color: lime;
}
```

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
      <td>Sixième ligne</td>
    </tr>
  </tbody>
</table>
```

#### Résultat

{{EmbedLiveSample('Exemple_appliqué', '100%', 150)}}

### Cas aux limites

`n` commence à zéro et le dernier élément commence à un, `n` et `n+1` sélectionnent donc les mêmes éléments.

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
  </tbody>
</table>
```

#### CSS

```css
tr:nth-last-child(n) {
  background-color: lightgray;
}

tr:nth-last-child(n + 1) {
  font-weight: 600;
}
```

#### Résultat

{{EmbedLiveSample('Cas_aux_limites')}}

### Mise en forme selon le nombre d'éléments

Il est possible d'utiliser les compteurs pour mettre en forme une liste selon le nombre d'éléments qu'elle contient. Dans l'exemple qui suit, on met les éléments de la liste en rouge si celle-ci contient au moins trois éléments. Pour cela, on combine la pseudo-classe `nth-last-child` et [le sélecteur de voisins généraux (_general sibling combinator_)](/fr/docs/Web/CSS/Sélecteurs_de_voisins_généraux).

#### HTML

```html
<h4>Une liste avec quatre éléments :</h4>
<ol>
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
</ol>

<h4>Une liste avec deux éléments :</h4>
<ol>
  <li>Un</li>
  <li>Deux</li>
</ol>
```

#### CSS

```css
li:nth-last-child(n + 3),
li:nth-last-child(n + 3) ~ li {
  color: red;
}
```

#### Résultat

{{EmbedLiveSample("Mise_en_forme_selon_le_nombre_d'éléments", '100%', 270)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":nth-child")}}
- _[Quantity Queries for CSS](https://alistapart.com/article/quantity-queries-for-css)_
