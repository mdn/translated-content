---
title: Combinateurs
slug: Learn_web_development/Core/Styling_basics/Combinators
l10n:
  sourceCommit: 57bc2729e3963907c0b54158ae1a31318a2ebbd1
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics")}}

Les derniers sélecteurs que nous allons examiner sont appelés les combinateurs. Les combinateurs servent à associer d'autres sélecteurs de manière à nous permettre de sélectionner des éléments en fonction de leur emplacement dans le DOM par rapport à d'autres éléments (par exemple, les enfants ou les voisins).

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
          <li>Combinateurs de voisin adjacent et général.</li>
          <li>Imbrication.</li>
          <li>Combinaison de combinateurs avec des sélecteurs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Combinateur descendant

Le **combinateur descendant** — en général représenté par un seul espace (<code> </code>) — combine deux sélecteurs de sorte que les éléments choisis par le second sélecteur sont sélectionnés s'ils ont un élément ancêtre (parent, parent de parent, parent de parent de parent, etc...) qui correspond au premier sélecteur. Les sélecteurs qui utilisent un combinateur descendant sont appelés sélecteurs descendants.

```css
body article p {
}
```

Dans l'exemple ci-dessous, nous sélectionnons uniquement l'élément `<p>` qui se trouve à l'intérieur d'un élément ayant la classe `.boite`.

```html live-sample___descendant
<div class="boite"><p>Le texte est dans un .boite</p></div>
<p>Le texte n'est pas dans un .boite</p>
```

```css live-sample___descendant
.boite p {
  color: red;
}
```

{{EmbedLiveSample("descendant")}}

> [!NOTE]
> [Aparté&nbsp;: Sélecteurs composés <sup>(angl.)</sup>](https://scrimba.com/frontend-path-c0j/~0br?via=mdn) <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup> de Scrimba est une leçon interactive qui propose un traitement pratique des combinateurs descendants.

## Combinateur enfant

Le **combinateur enfant** (`>`) est placé entre deux sélecteurs CSS. Il correspond uniquement aux éléments correspondant au second sélecteur qui sont les enfants directs des éléments correspondants au premier. Les éléments descendants plus bas dans la hiérarchie ne correspondent pas. Par exemple, pour sélectionner uniquement les éléments `<p>` qui sont des enfants directs des éléments `<article>`&nbsp;:

```css
article > p {
  /* … */
}
```

Dans l'exemple ci-dessous, nous avons une liste ordonnée ({{HTMLElement("ol")}}) imbriquée à l'intérieur d'une liste non ordonnée ({{HTMLElement("ul")}}). Le combinateur enfant sélectionne uniquement les éléments `<li>` qui sont des enfants directs d'un `<ul>`, et leur applique une bordure supérieure.

```html live-sample___child
<ul>
  <li>Élément non ordonné</li>
  <li>
    Élément non ordonné
    <ol>
      <li>Élément 1</li>
      <li>Élément 2</li>
    </ol>
  </li>
</ul>
```

```css live-sample___child
ul > li {
  border-top: 5px solid red;
}
```

{{EmbedLiveSample("child")}}

Dans l'exemple précédent, essayez de supprimer le `>` qui désigne le sélecteur comme un sélecteur enfant. Vous vous retrouvez avec un sélecteur descendant, et tous les éléments `<li>` ont une bordure rouge.

## Combinateur de voisin adjacent

Le **combinateur de voisin adjacent** (`+`) est utilisé pour sélectionner quelque chose s'il est juste à côté d'un autre élément au même niveau de la hiérarchie. Par exemple, pour sélectionner tous les éléments `<img>` qui viennent juste après les éléments `<p>`&nbsp;:

```css
p + img {
  /* … */
}
```

Un cas d'utilisation courant consiste à faire quelque chose avec un paragraphe qui suit un titre, comme dans l'exemple ci-dessous. Ici, nous sélectionnons tout paragraphe qui partage un élément parent avec un `<h1>`, et qui suit immédiatement ce `<h1>`.

```html live-sample___adjacent
<article>
  <h1>Un titre</h1>
  <p>
    Les légumes, c'est un plus pour vous, c'est pourquoi je vous demande de
    mettre davantage de chou-rave, ciboulette, daikon, amarante, tatsoi,
    tomatillo, melon, haricots azuki, ail.
  </p>

  <p>
    Feuilles de betterave, maïs, soko, endive, courge à gumbo. Persil, échalote,
    courgette, tatsoi, pousses de pois, fèves, chou vert, pissenlit, gombo,
    wakamé, tomate. Pissenlit, concombre, arachide, pois, cacahuète, soko,
    courgette.
  </p>
</article>
```

```css live-sample___adjacent
body {
  font-family: sans-serif;
}

h1 + p {
  font-weight: bold;
  background-color: #333333;
  color: white;
  padding: 0.5em;
}
```

{{EmbedLiveSample("adjacent", "", 220)}}

Dans l'exemple précédent&nbsp;:

1. Essayez d'insérer un autre élément tel qu'un `<h2>` entre le `<h1>` et le `<p>`. Vous constatez que le paragraphe n'est plus sélectionné par le sélecteur et ne reçoit donc pas la couleur de fond et de premier plan appliquée lorsque l'élément est adjacent.
2. Modifiez maintenant le sélecteur `h1 + p` afin que le style spécial soit à nouveau appliqué au premier paragraphe.

## Combinateur de voisin général

Si vous souhaitez sélectionner les voisins d'un élément même s'ils ne sont pas directement adjacents, vous pouvez utiliser le combinateur de voisin général (`~`). Pour sélectionner tous les éléments `<img>` qui viennent n'importe où après les éléments `<p>`, nous ferions ceci&nbsp;:

```css
p ~ img {
  /* … */
}
```

Dans l'exemple ci-dessous, nous sélectionnons tous les éléments `<p>` qui viennent après le `<h1>`, et même s'il y a aussi un `<div>` dans le document, le `<p>` qui vient après lui est sélectionné.

```html live-sample___general
<article>
  <h1>Un titre</h1>
  <p>Je suis un paragraphe.</p>
  <div>Je suis un div</div>
  <p>Je suis un autre paragraphe.</p>
</article>
```

```css live-sample___general
body {
  font-family: sans-serif;
}

h1 ~ p {
  font-weight: bold;
  background-color: #333333;
  color: white;
  padding: 0.5em;
}
```

{{EmbedLiveSample("general", "", 220)}}

## Combiner les combinateurs avec les sélecteurs

Vous pouvez combiner n'importe lequel des sélecteurs que nous avons découverts dans les leçons précédentes avec des combinateurs afin de sélectionner une partie de votre document. Par exemple, pour sélectionner des éléments de liste avec une `class` de `a` qui sont des enfants directs d'un `<ul>`, essayez ce qui suit&nbsp;:

```css
ul > li[class="a"] {
}
```

Prenez garde, cependant, lorsque vous créez de longues listes de sélecteurs qui sélectionnent des parties très spécifiques de votre document. Il est difficile de réutiliser les règles CSS puisque vous avez rendu le sélecteur très spécifique à l'emplacement de cet élément dans le balisage.

Il est souvent préférable de créer une classe simple et de l'appliquer à l'élément en question. Cela dit, votre connaissance des combinateurs est très utile si vous devez mettre en forme quelque chose dans votre document et que vous ne pouvez pas accéder au HTML, peut-être parce qu'il est généré par un {{Glossary("CMS")}}.

## Résumé

C'est tout pour les sélecteurs, pour l'instant. Ensuite, nous vous proposons quelques tests que vous pouvez utiliser pour vérifier dans quelle mesure vous avez compris et retenu les informations que nous avons fournies sur les sélecteurs CSS.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics")}}
