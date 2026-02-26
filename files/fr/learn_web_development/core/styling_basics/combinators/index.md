---
title: Combinateurs
slug: Learn_web_development/Core/Styling_basics/Combinators
original_slug: Learn/CSS/Building_blocks/Selectors/Combinators
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics")}}

Les derniers sélecteurs que nous allons étudier sont appelés combinateurs, car ils combinent différents sélecteurs de façon à leur donner une relation utile et l'emplacement du contenu dans le document.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions de base en HTML (étudiez
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Syntaxe HTML de base</a
        >), <a href="/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Sélecteurs CSS de base</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Le concept fondamental de combinateurs.</li>
          <li>Combinateurs descendant et enfant.</li>
          <li>Combinateurs de frère adjacent et de frère général.</li>
          <li>Imbrication.</li>
          <li>Combinaison de combinateurs avec des sélecteurs.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Combinateur descendant

Le **combinateur descendant** — en général représenté par un seul espace (" ") — combine deux sélecteurs de sorte que les éléments choisis par le second sélecteur sont sélectionnés s'ils ont un élément ancêtre (parent, parent de parent, parent de parent de parent, etc...) qui correspond au premier sélecteur. Les sélecteurs qui utilisent un combinateur descendant sont appelés sélecteurs descendants.

```css
body article p {
}
```

Dans l'exemple ci-dessous, nous sélectionnons uniquement l'élément `<p>` qui se trouve à l'intérieur d'un élément ayant la classe `.box`.

```html live-sample___descendant
<div class="box"><p>Le texte est dans un .box</p></div>
<p>Le texte n'est pas dans un .box</p>
```

```css live-sample___descendant
.box p {
  color: red;
}
```

{{EmbedLiveSample("descendant")}}

> [!NOTE]
> [Aparté&nbsp;: Sélecteurs composés <sup>(angl.)</sup>](https://scrimba.com/frontend-path-c0j/~0br?via=mdn) <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup> de Scrimba est une leçon interactive qui propose un traitement pratique des combinateurs descendants.

## Combinateur enfant

Le combinateur enfant (`>`) est placé entre deux sélecteurs CSS. Il correspond uniquement aux éléments correspondant au second sélecteur qui sont les enfants directs des éléments correspondants au premier. Les éléments descendants plus bas dans la hiérarchie ne correspondent pas. Par exemple, pour sélectionner uniquement les éléments `<p>` qui sont des enfants directs des éléments `<article>`:

```css
article > p
```

Dans cet exemple suivant, nous avons une liste non ordonnée, imbriquée à l'intérieur de laquelle se trouve une liste ordonnée. Nous utilisons le combinateur enfant pour sélectionner uniquement les éléments `<li>` qui sont un enfant direct d'un `<ul>`, et leur ai donné une bordure supérieure.

si vous supprimez le `>` qui désigne cela comme un combinateur enfant, vous vous retrouvez avec un sélecteur descendant et tous les éléments `<li>` auront une bordure rouge.

{{EmbedGHLiveSample("css-examples/learn/selectors/child.html", '100%', 600)}}

## Combinateur frère adjacents

Le sélecteur de frère adjacent (`+`) est utilisé pour sélectionner quelque chose s'il est juste à côté d'un autre élément au même niveau de la hiérarchie. Par exemple, pour sélectionner tous les éléments `<img>` qui viennent juste après les éléments `<p>`:

```css
p + img
```

Un cas d'utilisation courant consiste à faire quelque chose avec un paragraphe qui suit un titre, comme dans mon exemple ci-dessous. Ici, nous recherchons un paragraphe qui est directement adjacent à un `<h1>`, et le stylisons.

Si vous insérez un autre élément tel qu'un `<h2>` entre le `<h1>` et le `<p>`, vous constaterez que le paragraphe ne correspond plus au sélecteur et ne reçoit donc pas la couleur d'arrière-plan et de premier plan appliquée lorsque le l'élément est adjacent.

{{EmbedGHLiveSample("css-examples/learn/selectors/adjacent.html", '100%', 800)}}

## Combinateur général de frères

Si vous souhaitez sélectionner les frères d'un élément même s'ils ne sont pas directement adjacents, vous pouvez utiliser le combinateur général de frères (`~`). Pour sélectionner tous les éléments `<img>` qui viennent n'importe où après les éléments `<p>`, nous ferions ceci:

```css
p ~ img
```

Dans l'exemple ci-dessous, nous sélectionnons tous les éléments `<p>` qui viennent après le `<h1>`, et même s'il y a aussi un `<div>` dans le document, le `<p>` qui vient après qu'il est sélectionné.

{{EmbedGHLiveSample("css-examples/learn/selectors/general.html", '100%', 600)}}

## Utilisation de combinateurs

Vous pouvez combiner n'importe lequel des sélecteurs que nous avons découverts dans les leçons précédentes avec des combinateurs afin de sélectionner une partie de votre document. Par exemple, si nous voulons sélectionner des éléments de liste avec une classe de "a", qui sont des enfants directs d'un `<ul>`, je pourrais utiliser ce qui suit.

```css
ul > li[class="a"] {
}
```

Faites cependant attention lorsque vous créez de grandes listes de sélecteurs qui sélectionnent des parties très spécifiques de votre document. Il sera difficile de réutiliser les règles CSS car vous avez rendu le sélecteur très spécifique à l'emplacement de cet élément dans le balisage.

Il est souvent préférable de créer une classe simple et de l'appliquer à l'élément en question. Cela dit, votre connaissance des combinateurs vous sera très utile si vous avez besoin d'accéder à quelque chose dans votre document et que vous ne parvenez pas à accéder au HTML, peut-être parce qu'il est généré par un CMS.

## Testez vos compétences!

Nous en avons beaucoup vu dans cet article, mais pouvez-vous vous souvenir des informations les plus importantes? Vous pouvez trouver d'autres tests pour vérifier que vous avez conservé ces informations avant de continuer - voir [Test your skills: Selectors](/fr/docs/Learn/CSS/Building_blocks/Selectors/Selectors_Tasks).

## Passer à la suite

Ceci est la dernière section de nos leçons sur les sélecteurs. Ensuite, nous passerons à une autre partie importante du CSS - le [modèle de Boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model).

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics")}}
