---
title: Sélecteurs d'attribut
slug: Learn/CSS/Building_blocks/Selectors/Attribute_selectors
l10n:
  sourceCommit: b580c9fe8f354fb00dfe55d9d1fc4083bb49fab8
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}

En étudiant HTML, vous avez vu que les éléments peuvent avoir des attributs, qui leur fournissent des détails supplémentaires. En CSS, on peut utiliser les sélecteurs d'attribut afin de cibler les éléments qui possèdent certains attributs. Dans cet article, nous verrons comment utiliser ces sélecteurs.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td><a href="/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Avoir installé les logiciels de bases pour le développement web</a>, <a href="/fr/docs/Learn/Getting_started_with_the_web/Dealing_with_files">savoir manipuler des fichiers</a>, comprendre les fondamentaux en HTML (voir <a href="/fr/docs/Learn/HTML/Introduction_to_HTML">Une introduction à HTML</a>), avoir une idée générale du fonctionnement de CSS (voir <a href="/fr/docs/Learn/CSS/First_steps">Premiers pas en CSS</a>.)</td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>Apprendre ce que sont les sélecteurs d'attributs et comment les utiliser.</td>
    </tr>
  </tbody>
</table>

## Sélecteurs sur la présence et la valeur

Ces sélecteurs permettent de cibler un élément selon la simple présence d'un attribut (par exemple `href`), ou selon certains critères sur la valeur de l'attribut.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Sélecteur</th>
      <th scope="col">Exemple</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>[<em>attr</em>]</code></td>
      <td><code>a[title]</code></td>
      <td> Cible les éléments avec un attribut <code><em>attr</em></code> (le nom de l'attribut est indiqué entre crochets).</td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>=<em>valeur</em>]</code></td>
      <td><code>a[href="https://example.com"]</code></td>
      <td> Cible les éléments avec un attribut <code><em>attr</em></code> qui vaut exactement <code><em>valeur</em></code>. La valeur attendue est alors indiquée entre doubles quotes.</td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>~=<em>valeur</em>]</code></td>
      <td><code>p[class~="special"]</code></td>
      <td>Cible les éléments avec un attribut <code><em>attr</em></code> qui vaut exactement <code><em>valeur</em></code>, ou qui contient <code><em>valeur</em></code> dans sa liste de valeurs (séparées par des espaces).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>|=<em>valeur</em>]</code></td>
      <td><code>div[lang|="zh"]</code></td>
      <td>Cible les éléments avec un attribut <em>attr</em> qui vaut exactement <code><em>valeur</em></code>, ou qui commence par <code><em>valeur</em></code> suivie immédiatement d'un tiret.</td>
    </tr>
  </tbody>
</table>

Voyons un cas d'usage de ces sélecteurs avec un exemple.

- En utilisant `li[class]`, on peut cibler tout élément de liste avec un attribut `class`. Dans notre exemple ci-après, cela correspond à tous les éléments de liste, à l'exception du premier.
- `li[class="a"]` cible ceux qui ont une classe `a`, mais pas les éléments dont la classe contient `a` parmi une liste de valeurs. Dans notre exemple, ce sélecteur cible le deuxième élément de la liste.
- `li[class~="a"]` cible les éléments de liste avec une classe qui vaut `a` et ceux dont la classe contient `a` parmi la liste des valeurs. Dans notre exemple, le deuxième et le troisième élément sont ciblés.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute.html", '100%', 950)}}

## Cibler en fonction d'une sous-chaîne

Les sélecteurs suivant permettent de cibler un élément en fonction de la valeur de l'attribut et d'une sous-chaîne donnée. Par exemple, si on utilise deux classes `box-warning` et `box-error` et qu'on souhaite cibler tous les éléments avec une classe commençant par `box-`, on pourra utiliser `[class^="box-"]` afin de cibler les deux (ou `[class|="box"]` comme décrite ci-dessus).

| Sélecteur        | Exemple             | Description                                                                                  |
| ---------------- | ------------------- | -------------------------------------------------------------------------------------------- |
| `[attr^=valeur]` | `li[class^="box-"]` | Cible les éléments où la valeur de l'attribut `attr` commence par `valeur`.                  |
| `[attr$=valeur]` | `li[class$="-box"]` | Cible les éléments où la valeur de l'attribut `attr` finit par `valeur`.                     |
| `[attr*=valeur]` | `li[class*="box"]`  | Cible les éléments où la valeur de l'attribut `attr` contient `valeur` au sein de la chaîne. |

> [!NOTE]
> Les caractères `^` et `$` sont également utilisés comme ancres au sein des [expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions) pour signifier respectivement _commence par_ et _finit par_.

Dans l'exemple qui suit, on illustre ces sélecteurs&nbsp;:

- `li[class^="a"]` cible tout élément de liste avec un attribut `class` dont la valeur commence par `a`. Dans notre exemple, cela correspond aux deux premiers éléments de la liste.
- `li[class$="a"]` cible tout élément de liste avec un attribut `class` dont la valeur finit par `a`. Dans notre exemple, cela correspond au premier et troisième éléments de la liste.
- `li[class*="a"]` cible tout élément de liste avec un attribut `class` contient `a`, n'importe où dans la valeur. Dans notre exemple, cela correspond à tous les éléments de la liste.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-substring.html", '100%', 950)}}

## Sensibilité à la casse

Si on souhaite cibler les éléments sans tenir compte de la casse pour les valeurs de l'attribut, on pourra utiliser le marqueur `i` avant le crochet fermant. Ce marqueur indique au navigateur de ne pas tenir compte de la casse (c'est-à-dire majuscule/minuscule). Sans ce marqueur, les correspondances seront considérées selon la sensibilité à la casse propre au langage du document&nbsp;; pour le langage HTML, la casse est importante.

Dans l'exemple qui suit, le premier sélecteur cible l'élément dont la valeur de la classe commence par `a`. Dans l'exemple cela correspond au premier élément, car la valeur des deux suivants commence par un A majuscules. Le deuxième sélecteur utilise le marqueur `i` pour ne pas tenir compte de la casse, et permet dans l'exemple de cibler tous les éléments de la liste.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-case.html", '100%', 800)}}

> [!NOTE]
> Il existe également un marqueur plus récent&nbsp;: `s`, qui forcera une sensibilité à la casse pour les contextes où la casse est normalement ignorée. Toutefois, ce marqueur est moins pris en charge dans les navigateurs et s'avère peu utile dans le cas du HTML.

## Résumé

Maintenant que nous avons vu les sélecteurs d'attribut, nous allons poursuivre avec [les sélecteurs de pseudo-classe et de pseudo-élément](/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}
