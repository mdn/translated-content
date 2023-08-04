---
title: Sélecteurs CSS
slug: Learn/CSS/Building_blocks/Selectors
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

Dans {{Glossary("CSS")}}, les sélecteurs sont utilisés pour cibler les éléments {{glossary("HTML")}} à mettre en forme dans nos pages web. CSS propose une grande diversité de sélecteurs, offrant ainsi une précision très fine dans la façon de cibler les éléments. Dans cet article nous explorerons en détails le fonctionnement de ces différents types.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions de base en l'informatique,
        <a
          href="/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >logiciels de base installés</a
        >,
        <a href="/fr/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >savoir manipuler des fichiers</a
        >, connaissance de base de HTML (cf.
        <a href="/fr/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction à HTML</a
        >.) et une première idée du fonctionnement de CSS (voir
        <a href="/fr/docs/Learn/CSS/First_steps">premiers pas en CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>Voir dans les détails comment les sélecteurs CSS fonctionnent.</td>
    </tr>
  </tbody>
</table>

## Qu'est-ce qu'un sélecteur ?

Vous les avez déjà rencontrés : toute règle CSS commence par un sélecteur. Un sélecteur est une expression qui indique au navigateur à quelle entité HTML s'applique la règle CSS correspondante. Le ou les éléments ciblés par le sélecteur sont le _sujet_ de ce sélecteur.

![Du code où h1 est surligné.](selector.png)

Vous avez rencontré plusieurs sélecteurs dans des articles précédents, vous avez vu que les sélecteurs ont différentes façons de cibler le document HTML — on peut par exemple cibler les éléments `h1`, ou la classe `.special`.

En CSS, les sélecteurs sont définis dans la spécification CSS Selectors ; comme tout le reste de CSS, le bon fonctionnement des sélecteurs dépend de la prise en charge par les navigateurs. La plupart des sélecteurs que vous rencontrerez sont définis dans la [spécification de niveau 3 pour les sélecteurs](https://www.w3.org/TR/selectors-3/), une spécification mature, aussi la prise en charge par les navigateurs est excellente.

## Listes de sélecteurs

Quand un groupe de déclarations CSS s'applique à plusieurs éléments distincts, on peut combiner les sélecteurs individuels en une liste. Par exemple, si j'ai le même CSS pour un `h1` et pour une classe `.special`, je pourrais écrire deux règles :

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

ou bien une seule règle en combinant les sélecteurs, séparés par une virgule :

```css
h1,
.special {
  color: blue;
}
```

L'espace est valide avant ou après la virgule. Vous trouverez peut-être la version suivante plus lisible avec un sélecteur par ligne :

```css
h1,
.special {
  color: blue;
}
```

Dans l'exemple live ci-dessous, essayez de combiner les sélecteurs dont les déclarations sont identiques. Le rendu visuel devrait être inchangé.

{{EmbedGHLiveSample("css-examples/learn/selectors/selector-list.html", '100%', 1000)}}

Quand on regroupe ainsi des sélecteurs, si l'un des sélecteurs est invalide la règle toute entière sera ignorée.

Dans l'exemple suivant, la règle avec le sélecteur de classe invalide sera ignorée, alors que le `h1` sera mis en forme comme prévu.

```css
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

En combinant les sélecteurs, la règle est considérée invalide et donc ignorée : ni `h1` ni les éléments de classe `.special` ne seront mis en forme.

```css
h1,
..special {
  color: blue;
}
```

## Types de sélecteurs

On peut regrouper les sélecteurs en différents groupes ; classer les sélecteurs par type vous aidera à identifier l'outil pertinent pour chaque situation. Dans les sections suivantes, nous passons en revue ces différents types de sélecteurs.

### Sélecteurs de type, de classe, et d'ID

Ce groupe inclut les sélecteurs ciblant les élements HTML tels que `<h1>` :

```css
h1 {
}
```

On trouve aussi les sélecteurs ciblant une classe :

```css
.box {
}
```

ou un ID :

```css
#unique {
}
```

### Sélecteurs d'attribut

Ce groupe de sélecteurs offre différents mécanismes pour cibler des éléments en fonction de la présence d'un attribut donné pour un élément donné :

```css
a[title] {
}
```

Ou même de baser la sélection sur la présence d'un attribut avec une valeur bien précise :

```css
a[href="https://example.com"]
{
}
```

### Pseudo-classes et pseudo-éléments

Ce groupe de sélecteurs inclut les pseudo-classes, qui ciblent des éléments dans un état donné. Par exemple, la pseudo-classe `:hover` sélectionne un élément seulement s'il est survolé par le pointeur de la souris :

```css
a:hover {
}
```

Ce groupe inclut aussi les pseudo-éléments, qui ciblent une certaine partie d'un élément plutôt que l'élément tout entier. Par exemple, `::first-line` sélectionne la première ligne d'un texte contenu dans un élément (un `<p>` dans l'exemple ci-dessous), comme si la première ligne du texte mis en forme était placée entre `<span>` et qu'après coup on appliquait un style sur cet élément.

```css
p::first-line {
}
```

### Combinateurs

Dans la dernière catégorie, on combine les sélecteurs pour cibler plus finement les éléments dans nos documents. L'exemple suivant sélectionne les paragraphes enfants directs de `<article>` grâce au combinateur enfant (`>`) :

```css
article > p {
}
```

## À faire ensuite

Vous pouvez consulter ci-dessous le tableau de référence des sélecteurs avec des liens directs vers les différents types de sélecteurs dans cette section _Apprendre_ ou dans d'autres rubriques de MDN ; vous pouvez aussi suivre le fil de ce cours et en apprendre plus sur les [sélecteurs de type, de classe, et d'ID](/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

## Table de référence des sélecteurs

Le tableau ci-dessous donne un aperçu des sélecteurs disponibles, ainsi que des liens vers les pages qui vous montreront comment utiliser chaque type de sélecteur. J'ai également inclus un lien vers la page MDN pour chaque sélecteur où vous pouvez vérifier les informations sur la prise en charge par les navigateurs. Pour la suite de ce cours, ou dans vos expériences CSS à venir, cette table sera votre référence quand vous rechercherez des informations sur les sélecteurs.

| Sélecteur                                                                   | Exemple             | Tutoriel CSS                                                                                                                |
| --------------------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [Sélecteur de type](/fr/docs/Web/CSS/Type_selectors)                        | `h1 { }`            | [Sélecteurs de type](/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)                              |
| [Sélecteur universel](/fr/docs/Web/CSS/Universal_selectors)                 | `* { }`             | [The universal selector](/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#the_universal_selector)   |
| [Sélecteur de classe](/fr/docs/Web/CSS/Class_selectors)                     | `.box { }`          | [Class selectors](/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#class_selectors)                 |
| [Sélecteur d'ID](/fr/docs/Web/CSS/ID_selectors)                             | `#unique { }`       | [ID selectors](/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#id_selectors)                       |
| [Sélecteur d'attribut](/fr/docs/Web/CSS/Attribute_selectors)                | `a[title] { }`      | [Attribute selectors](/fr/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)                                     |
| [Pseudo-class selectors](/fr/docs/Web/CSS/Pseudo-classes)                   | `p:first-child { }` | [Pseudo-classes](/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-class)    |
| [Pseudo-element selectors](/fr/docs/Web/CSS/Pseudo-elements)                | `p::first-line { }` | [Pseudo-elements](/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-element) |
| [Sélecteur descendant](/fr/docs/Web/CSS/Descendant_combinator)              | `article p`         | [Descendant combinator](/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators#descendant_selector)                       |
| [Sélecteur enfant](/fr/docs/Web/CSS/Child_combinator)                       | `article > p`       | [Child combinator](/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators#child_combinator)                               |
| [Sélecteur de frère adjacent](/fr/docs/Web/CSS/Adjacent_sibling_combinator) | `h1 + p`            | [Adjacent sibling](/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators#adjacent_sibling)                               |
| [Sélecteur de frère général](/fr/docs/Web/CSS/General_sibling_combinator)   | `h1 ~ p`            | [General sibling](/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators#general_sibling)                                 |
