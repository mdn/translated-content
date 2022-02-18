---
title: Sélecteurs d'attribut
slug: Learn/CSS/Building_blocks/Selectors/Attribute_selectors
translation_of: Learn/CSS/Building_blocks/Selectors/Attribute_selectors
original_slug: Apprendre/CSS/Building_blocks/Selectors/Sélecteurs_d_atrribut
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}

Dans l'étude de HTML, nous avons vu les attributs d'un élément. En CSS, on peut utiliser ces attributs pour cibler les éléments. Cette leçon vous montre comment.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Maîtrise élémentaire de l'informatique,
        <a
          href="/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >suite logicielle de base installée</a
        >, compétences élémentaires pour
        <a href="/fr/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >travailler avec des fichiers</a
        >, connaissance de base du HTML (cf.
        <a href="/fr/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction à HTML</a
        >), et une idée de
        <a href="/fr/docs/Learn/CSS/First_steps/How_CSS_works"
          >Comment fonctionne CSS</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>Découvrir les sélecteurs d'attribut et comment les utiliser.</td>
    </tr>
  </tbody>
</table>

## Sélecteur de présence et de valeur

Ces sélecteurs permettent de cibler un élément en fonction de la présence d'un attribut unique (par exemple `href`), ou sur des correspondances variées avec la valeur d'un attribut donné

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
      <td>
        Cible les éléments avec un attribut du nom de <em>attr</em> — la valeur
        entre les crochets droits.
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>=<em>value</em>]</code></td>
      <td><code>a[href="https://example.com"]</code></td>
      <td>
        Cible les éléments dont l'attribut <em>attr</em> a la valeur
        <em>value</em> — la chaîne entre guillemets.
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>~=<em>value</em>]</code></td>
      <td><code>p[class~="special"]</code></td>
      <td>
        <p>
          Cible les éléments avec un attribut <em>attr</em> dont la valeur est
          exactement <em>value</em>, ou les éléments dont l'attribut
          <em>attr</em> contient une ou plusieurs valeurs, dont au moins une
          correspond à <em>value</em>.
        </p>
        <p>
          Notez que dans une liste de plusieurs valeurs, le séparateur est
          l'espace.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>|=<em>value</em>]</code></td>
      <td><code>div[lang|="zh"]</code></td>
      <td>
        Cible les éléments avec un attribut <em>attr</em> dont la valeur peut
        être exactement <em>value</em> ou peut commencer par
        <em>value</em> immédiatement suivie d'un trait d'union.
      </td>
    </tr>
  </tbody>
</table>

Dans l'exemple ci-dessous vous voyez ces sélecteurs en action :

- Avec `li[class]` on cible tout élément `<li>` possédant un attribut `class`. On cible ainsi tous les éléments de la liste sauf le premier.
- `li[class="a"]` cible les `<li>` appartenant à la classe `a` et seulement elle. Un élément `<li>` dans la classe `a` mais aussi dans une autre classe ne sera pas sélectionné. Ce sélecteur cible le deuxième item de la liste.
- `li[class~="a"]` cible tout élément `<li>` dont l'attribut `class` contient `a` dans sa liste de valeurs (séparées par des espaces). Les items deux et trois de la liste sont sélectionnés.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute.html", '100%', 800)}}

## Sélecteurs ciblant une sous-chaîne

Ces sélecteurs permettent une sélection plus fine des sous-chaînes à l'intérieur de la valeur de l'attribut. Par exemple, vous avez défini des classes `box-warning` et `box-error`, vous voulez cibler les classes dont le nom commence par "box-". Le sélecteur d'attribut `[class ^= "box-"]` est là pour ça.

| Sélecteur        | Exemple             | Description                                                                                                    |
| ---------------- | ------------------- | -------------------------------------------------------------------------------------------------------------- |
| `[attr^=value]`  | `li[class^="box-"]` | élément sélectionné quand la valeur _value_ de l'attribut _attr_ commence par la sous-chaîne _value._          |
| `[attr$=value]`  | `li[class$="-box"]` | élément sélectionné quand la valeur de l'attribut _attr_ finit par la sous-chaîne _value._                     |
| `[attr*=value ]` | `li[class*="box"]`  | élément sélectionné quand la la sous-chaîne _value_ apparaît quelque part dans la valeur de l'attribut _attr._ |

L'exemple suivant montre ces sélecteurs en action :

- `li[class^="a"]` correspond à toute valeur d'attribut commençant par un _a,_ ce sélecteur cible donc les deux premiers items de la liste.
- `li[class$="a"]` correspond à toute valeur d'attribut finissant par un _a,_ ce sélecteur cible donc les items un et trois de la liste.
- `li[class*="a"]` correspond à toute valeur d'attribut contenant quelque part un _a,_ ce sélecteur cible donc tous les items de la liste.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-substring.html", '100%', 800)}}

## Sensibilité à la casse

Pour cibler des valeurs d'attribut sans prendre en compte la casse (majuscule ou minuscule indifférentes), ajoutez la valeur `i` avant le crochet fermant. Ce drapeau signale au navigateur d'identifier les caractères ASCII sans se préoccuper de la casse (_a_ = _A_). Sans le drapeau `i`, les valeurs seront identifiées selon la sensibilité à la casse de la langue du document — HTML est sensible à la casse.

Dans l'exemple ci-dessous, le premier sélecteur cible les valeurs commençant par un `a` — seul le premier élément de la liste est ciblé, les deux suivants commencent par un A majuscule. Le second sélecteur est marqué du drapeau _insensible à la casse,_ il cible donc tous les éléments de la liste.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-case.html", '100%', 800)}}

> **Note :** Dans des contextes normalement insensibles à la casse, on peut forcer la sensibilité avec la valeur `s` nouvellement introduite, mais sa prise en charge par les navigateurs est inégale ; elle n'est pas très utile dans un contexte HTML.

## Pas suivants

Nous en avons fini avec les sélecteurs d'attribut, vous pouvez maintenant continuer la visite et passer aux [sélecteurs de pseudo-classes et pseudo-éléments](/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}

## Dans ce cours

1.  [Cascade et héritage](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
2.  [Sélecteurs CSS](/fr/docs/Learn/CSS/Building_blocks/Selectors)

    - [Sélecteurs de classe, de type et d'identifiant](/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - Sélecteurs d'attribut
    - [Pseudo-classes et pseudo-éléments](/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [Combinateurs](/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

3.  [Le modèle de boîte](/fr/docs/Learn/CSS/Building_blocks/The_box_model)
4.  [Arrières-plans et bordures](/fr/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
5.  [Gérer la directionnalité du texte](/fr/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
6.  [Le dépassement du contenu](/fr/docs/Learn/CSS/Building_blocks/Overflowing_content)
7.  [Valeurs et unités](/fr/docs/Learn/CSS/Building_blocks/Values_and_units)
8.  [Dimensionnement des objets en CSS](/fr/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
9.  [Images, médias, et formulaires](/fr/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
10. [Mettre en forme les tableaux](/fr/docs/Learn/CSS/Building_blocks/Styling_tables)
11. [Déboguer CSS](/fr/docs/Learn/CSS/Building_blocks/Debugging_CSS)
12. [Organiser son code CSS](/fr/docs/Learn/CSS/Building_blocks/Organizing)
