---
title: Sélecteurs de type, de classe et d'ID
slug: Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors
translation_of: Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors
original_slug: Apprendre/CSS/Building_blocks/Selectors/Sélecteurs_de_type_classe_ID
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}

Dans cette leçon, nous examinons les sélecteurs les plus simples qu'on puisse trouver, ce sont ceux que vous utiliserez le plus couramment dans votre travail.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Notions de base en l'informatique,
        <a
          href="/fr/docs/Apprendre/Commencer_avec_le_web/Installation_outils_de_base"
          >logiciels de base installés</a
        >,
        <a href="/fr/docs/Apprendre/Commencer_avec_le_web/Gérer_les_fichiers"
          >savoir manipuler des fichiers</a
        >, connaissance de base de HTML (cf. <a
          href="/fr/docs/Apprendre/HTML/Introduction_à_HTML"
          >Introduction à HTML</a
        >.) et une première idée du fonctionnement de CSS (voir <a
          href="/fr/docs/Learn/CSS/First_steps"
          >premiers pas en CSS</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>Voir dans les détails comment les sélecteurs CSS fonctionnent.</td>
    </tr>
  </tbody>
</table>

## Sélecteur de type

Un sélecteur de type cible un élément HTML (une balise) de votre document, on parle aussi de sélecteur de balise ou d'élément. Dans l'exemple ci-dessous on utilise les sélecteurs span, em et strong. Chaque instance de `<span>`, `<em>` et `<strong>` est ainsi mise en forme.

**Essayez d'ajouter une règle CSS pour sélectionner l'élément `<h1>` et changer sa couleur en bleu.**

{{EmbedGHLiveSample("css-examples/learn/selectors/type.html", '100%', 1100)}}

## Le sélecteur universel

Le sélecteur universel est indiqué par un astérisque (\*) et sélectionne tout dans le document (ou à l'intérieur de l'élément parent s'il est enchaîné avec un autre élément et un combinateur descendant, par exemple). Dans l'exemple suivant, nous avons utilisé le sélecteur universel pour supprimer les marges de tous les éléments. Cela signifie qu'au lieu du style par défaut ajouté par le navigateur, qui espace les en-têtes et les paragraphes avec des marges, tout est collé, la distinction des paragraphes est mal aisée.

{{EmbedGHLiveSample("css-examples/learn/selectors/universal.html", '100%', 750)}}

On peut rencontrer ce type de comportement dans les "feuilles de style de réinitialisation" qui suppriment toutes les mises en forme par défaut du navigateur. Très populaires à une époque, ces réinitialisations ont un gros inconvénient, la suppression de tous les styles par défaut signifie en effet qu'on doit construire la mise en forme de zéro ! On utilisera donc le sélecteur universel avec précaution, dans des situations très spécifiques, comme par exemple celle décrite ci-dessous.

### Utiliser le sélecteur universel pour rendre les sélecteurs plus lisibles

On peut utiliser `*` pour rendre les sélecteurs plus lisibles, pour clarifier leur fonctionnement. Par exemple, si je veux sélectionner le premier descendant de chaque élément `<article>` pour le mettre en gras, je peux utiliser le sélecteur {{cssxref(":first-child")}}, qu'on verra dans la leçon sur les [pseudo-classes et pseudo-éléments](/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)&nbsp;:

```css
article :first-child {

}
```

On peut néanmoins confondre ce sélecteur avec `article:first-child` ciblant les éléments `<article>`  qui sont le premier descendant d'un élément.

Pour éviter cette confusion, on peut ajouter le sélecteur universel `*` à `:first-child`, le fonctionnement de ce dernier sera plus clair : il cible *tout* élément premier descendant d'un élément `<article>` :

```css
article *:first-child {

}
```

## Sélecteurs de classe

Le sélecteur de classe commence par un point  `.` et sélectionne tout élément du document auquel cette classe est appliquée. Dans l'exemple live ci-dessous, nous avons créé une classe appelée `.highlight` et l'avons appliquée à plusieurs endroits du document. Tous les éléments auxquels la classe est appliquée sont mis en évidence.

{{EmbedGHLiveSample("css-examples/learn/selectors/class.html", '100%', 750)}}

### Cibler des classes d'un élément donné

On peut créer un sélecteur ciblant les éléments d'un type donné appartenant à une classe donnée. Dans l'exemple suivant, la classe `highlight` met en surbrillance, mais elle le fait différemment quand elle s'applique à un \<span> ou à un titre \<h1>. Nous le faisons en utilisant le sélecteur de type pour l'élément ciblé, avec la classe ajoutée, sans espace blanc entre les deux.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-type.html", '100%', 750)}}

Cette approche rend le CSS moins réutilisable : la déclaration ne s'applique qu'à ces éléments particuliers, et il faudrait ajouter un nouveau sélecteur pour que la règle parvienne à cibler d'autres éléments.

### Cibler un élément appartenant à plus d'une classe

Vous pouvez attribuer plusieurs classes à un même élément et les sélectionner individuellement, ou cibler l'élément seulement quand toutes les classes apparaissent dans le sélecteur. Cela peut s'avérer utile si vous créez des composants qui peuvent être combinés de différentes manières sur votre site.

L'exemple ci-dessous présente trois `<div>` contenant chacun une note. Si la boîte est dans la classe `notebox` elle a une bordure grise. Si de plus elle est dans la classe `warning` ou `danger`, on change la {{cssxref("border-color")}}.

On indique au navigateur la combinaison de classes ciblée en enchaînant les sélecteurs de classe sans laisser d'espace entre.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-many.html", '100%', 900)}}

## Sélecteurs d'ID

Un sélecteur d'ID commence par un `#` plutôt que par un point, mais est essentiellement utilisé de la même manière qu'un sélecteur de classe. Une ID ne peut cependant être utilisée qu'une seule fois par document. Le sélecteur cible l'élément avec l'`id` associée&nbsp;; on peut faire précéder l'ID d'un sélecteur de type pour ne cibler l'élément que si l'élément et l'ID correspondent. Voyons ces deux utilisations dans l'exemple suivant :

{{EmbedGHLiveSample("css-examples/learn/selectors/id.html", '100%', 750)}}

> **Note :** Comme on l'a vu dans la leçon sur la spécificité, on attribue une haute spécificité aux ID, les sélecteurs d'ID l'emportent donc sur la plupart des autres. Cela peut rendre leur usage compliqué. La plupart du temps il est préférable de passer par des sélecteurs de classe plutôt que d'ID, cependant si l'utilisation d'une ID est la seule façon de cibler un élément — peut-être que vous n'avez pas accès au balisage, que vous ne pouvez pas l'éditer — cela fonctionnera.

## Prochain article

Notre exploration des sélecteurs se poursuit par l'étude des [sélecteurs d'attributs](/fr/docs/Apprendre/CSS/Building_blocks/Selectors/Sélecteurs_d_atrribut).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}

## Dans ce cours

1.  [Cascade and inheritance](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
2.  [CSS selectors](/fr/docs/Learn/CSS/Building_blocks/Selectors)

    - [Type, class, and ID selectors](/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [Attribute selectors](/fr/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [Pseudo-classes and pseudo-elements](/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [Combinators](/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

3.  [The box model](/fr/docs/Learn/CSS/Building_blocks/The_box_model)
4.  [Backgrounds and borders](/fr/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
5.  [Handling different text directions](/fr/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
6.  [Overflowing content](/fr/docs/Learn/CSS/Building_blocks/Overflowing_content)
7.  [Values and units](/fr/docs/Learn/CSS/Building_blocks/Values_and_units)
8.  [Sizing items in CSS](/fr/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
9.  [Images, media, and form elements](/fr/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
10. [Styling tables](/fr/docs/Learn/CSS/Building_blocks/Styling_tables)
11. [Debugging CSS](/fr/docs/Learn/CSS/Building_blocks/Debugging_CSS)
12. [Organizing your CSS](/fr/docs/Learn/CSS/Building_blocks/Organizing)
