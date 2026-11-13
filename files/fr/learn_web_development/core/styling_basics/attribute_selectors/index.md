---
title: Sélecteurs d'attribut
slug: Learn_web_development/Core/Styling_basics/Attribute_selectors
l10n:
  sourceCommit: c9f602a26092661130a031b7148d696a3ac9802e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics")}}

Comme vous l'avez appris en étudiant le HTML, les éléments peuvent posséder des attributs qui fournissent des informations supplémentaires sur l'élément balisé. En CSS, vous pouvez utiliser des sélecteurs d'attributs pour cibler des éléments dotés de certains attributs. Cette leçon vous apprend à utiliser ces sélecteurs très utiles.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Les bases de HTML (étudier
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Syntaxe de base HTML</a
        >), <a href="/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Sélecteurs CSS de base</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Le concept de base des sélecteurs d'attributs.</li>
          <li>Sélecteurs d'attributs basés sur la présence et la valeur.</li>
          <li>Sélecteurs d'attributs basés sur la correspondance de sous-chaînes de caractères.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Sélecteurs sur la présence et la valeur

Ces sélecteurs permettent de cibler un élément selon la simple présence d'un attribut (par exemple `href`), ou selon certains critères sur la valeur de l'attribut.

| Sélecteur         | Exemple                         | Description                                                                                                                                                |
| ----------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[attr]`          | `a[title]`                      | Cible les éléments avec un attribut _`attr`_ (le nom de l'attribut est indiqué entre crochets).                                                            |
| `[attr=valeur]`   | `a[href="https://example.com"]` | Cible les éléments avec un attribut _`attr`_ qui vaut exactement _`value`_. La valeur attendue est alors indiquée entre doubles quotes.                    |
| `[attr~=valeur]`  | `p[class~="special"]`           | Cible les éléments avec un attribut _`attr`_ qui vaut exactement _`value`_, ou qui contient _`value`_ dans sa liste de valeurs (séparées par des espaces). |
| `[attr\|=valeur]` | `div[lang\|="zh"]`              | Cible les éléments avec un attribut _`attr`_ qui vaut exactement _`value`_, ou qui commence par _`value`_ suivie immédiatement d'un tiret.                 |

Voyons un cas d'usage de ces sélecteurs avec un exemple.

- En utilisant `li[class]`, on peut cibler tout élément de liste avec un attribut `class`. Dans notre exemple ci-après, cela correspond à tous les éléments de liste, à l'exception du premier.
- `li[class="a"]` cible ceux qui ont une classe `a`, mais pas les éléments dont la classe contient `a` parmi une liste de valeurs. Dans notre exemple, ce sélecteur cible le deuxième élément de la liste.
- `li[class~="a"]` cible les éléments de liste avec une classe qui vaut `a` et ceux dont la classe contient `a` parmi la liste des valeurs. Dans notre exemple, le deuxième et le troisième élément sont ciblés.

```html live-sample___attribute
<h1>Présence d'attributs et sélecteurs de valeur</h1>
<ul>
  <li>Élément 1</li>
  <li class="a">Élément 2</li>
  <li class="a b">Élément 3</li>
  <li class="ab">Élément 4</li>
</ul>
```

```css live-sample___attribute
body {
  font-family: sans-serif;
}
li[class] {
  font-size: 120%;
}

li[class="a"] {
  background-color: yellow;
}

li[class~="a"] {
  color: red;
}
```

{{EmbedLiveSample("attribute", "", 200)}}

Essayez de modifier le CSS ci-dessus pour ajouter une règle qui sélectionne uniquement les éléments de liste avec une valeur d'attribut `class` de `ab`, et leur donne une `color` de texte `white` et un `background-color` `purple`.

## Cibler en fonction d'une sous-chaîne de caractères

Les sélecteurs suivant permettent de cibler un élément en fonction de la valeur de l'attribut et d'une sous-chaîne de caractères donnée. Par exemple, si on utilise deux classes `box-warning` et `box-error` et qu'on souhaite cibler tous les éléments avec une classe commençant par `box-`, on peut utiliser `[class^="box-"]` afin de cibler les deux (ou `[class|="box"]` comme décrite ci-dessus).

| Sélecteur        | Exemple             | Description                                                                                                |
| ---------------- | ------------------- | ---------------------------------------------------------------------------------------------------------- |
| `[attr^=valeur]` | `li[class^="box-"]` | Cible les éléments où la valeur de l'attribut `attr` commence par `valeur`.                                |
| `[attr$=valeur]` | `li[class$="-box"]` | Cible les éléments où la valeur de l'attribut `attr` finit par `valeur`.                                   |
| `[attr*=valeur]` | `li[class*="box"]`  | Cible les éléments où la valeur de l'attribut `attr` contient `valeur` au sein de la chaîne de caractères. |

Dans l'exemple qui suit, on illustre ces sélecteurs&nbsp;:

- `li[class^="a"]` cible tout élément de liste avec un attribut `class` dont la valeur commence par `a`. Dans notre exemple, cela correspond aux deux premiers éléments de la liste.
- `li[class$="a"]` cible tout élément de liste avec un attribut `class` dont la valeur finit par `a`. Dans notre exemple, cela correspond au premier et troisième éléments de la liste.
- `li[class*="a"]` cible tout élément de liste avec un attribut `class` contient `a`, n'importe où dans la valeur. Dans notre exemple, cela correspond à tous les éléments de la liste.

```html live-sample___attribute-substring
<h1>Sélecteurs de correspondance de sous-chaîne de caractères d'attribut</h1>
<ul>
  <li class="a">Élément 1</li>
  <li class="ab">Élément 2</li>
  <li class="bca">Élément 3</li>
  <li class="bcabc">Élément 4</li>
</ul>
```

```css live-sample___attribute-substring
body {
  font-family: sans-serif;
}
li[class^="a"] {
  font-size: 120%;
}

li[class$="a"] {
  background-color: yellow;
}

li[class*="a"] {
  color: red;
}
```

{{EmbedLiveSample("attribute-substring", "", 220)}}

Essayez de modifier le CSS ci-dessus pour ajouter une règle qui sélectionne uniquement les éléments de liste dont la valeur de l'attribut `class` se termine par `b` ou `c`, et leur donne une `border` de `2px`, `solid`, `black`. Vous devez peut-être utiliser une [liste de sélecteurs](/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#listes_de_sélecteurs) pour résoudre cet exercice.

## Résumé

Maintenant que nous avons terminé avec les sélecteurs d'attribut, vous pouvez continuer avec le prochain article et lire sur les sélecteurs de pseudo-classe et de pseudo-élément.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics")}}
