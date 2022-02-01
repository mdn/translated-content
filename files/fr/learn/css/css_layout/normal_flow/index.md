---
title: Cours normal
slug: Learn/CSS/CSS_layout/Normal_Flow
translation_of: Learn/CSS/CSS_layout/Normal_Flow
original_slug: Apprendre/CSS/CSS_layout/Normal_Flow
---
{{LearnSidebar}}

{{PreviousMenuNext("Apprendre/CSS/CSS_layout/Introduction", "Apprendre/CSS/CSS_layout/Flexbox", "Apprendre/CSS/CSS_layout")}}

Cet article décrit le déroulement normal, c'est-à-dire la façon dont les éléments d'une page web se présentent si vous ne modifiez pas leur mise en page.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Les fondamentaux du HTML (étudiez
        <a href="/fr/Apprendre/HTML/Introduction_%C3%A0_HTML"
          >Introduction au HTML</a
        >) et avoir une idée de la manière dont les CSS fonctionnent (étudiez
        <a href="/fr/Apprendre/CSS/Introduction_à_CSS">Introduction aux CSS</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Expliquer comment les navigateurs composent les pages web par défaut,
        avant que nous commencions à faire des modifications.
      </td>
    </tr>
  </tbody>
</table>

Comme indiqué dans la précédente leçon d'introduction à la mise en page, les éléments d'une page Web suivent un cours normal de mise en page, si vous n'avez pas appliqué de CSS pour changer leur comportement. Et, comme nous avons commencé à le découvrir, vous pouvez changer le comportement des éléments, soit en ajustant leur position dans ce cours normal, soit en les sortant totalement de ce cours. Commencer par un document solide, bien structuré et lisible en cours normal est la meilleure façon de commencer n'importe quelle page Web. Cela garantit un contenu lisible, même si l'utilisateur visite le site avec un navigateur peu performant ou un dispositif tel qu'un lecteur d'écran lisant le contenu de la page. De plus, comme le cours normal a été pensé pour faire en sorte que le document soit lisible, en commençant de cette façon, vous travaillez avec le document au lieu de vous battre contre lui quand vous apportez des modifications à la mise en page.

Avant d'approfondir les diverses méthodes de mise en page, revoir certaines choses déjà exposées dans les modules précédents à propos du cours normal d'affichage d'un document.

## Disposition des éléments par défaut

Tout d'abord, les boîtes des éléments pris isolément sont conditionnées en prenant le contenu des éléments, auquel, autour d'eux, est rapporté le remplissage, l'encadrement et la marge — conformément au modèle de boîte examiné plus tôt.

Par défaut, le contenu d'un élément de niveau bloc prend 100% de la largeur de son élément parent et sa hauteur est commandée par son contenu. Les éléments en ligne ont la hauteur et la largeur de leur contenu. Vous ne pouvez pas définir la largeur ou la hauteur d'éléments en ligne — ils se trouvent uniquement à l'intérieur d'un contenu d'élément de niveau bloc. Si vous voulez contrôler la taille d'un élément en ligne de cette manière, vous devez le paramétrer pour qu'il se comporte comme un élément de niveau bloc avec `display: bloc ;` (ou même `display: inline-block ;` qui mélange les caractéristiques des deux).

Ce qui précède explique le comportement des éléments pris individuellement, mais qu'en est-il de la façon dont les éléments interagissent les uns avec les autres ? Le cours normal de mise en page (mentionné dans l'article d'introduction à la mise en page) est le système par lequel les éléments sont placés à l'intérieur de la fenêtre de vue du navigateur. Par défaut, les éléments de niveau bloc sont disposés dans le sens où les blocs s'affichent dans le mode d'écriture du document — chacun apparaît sur une nouvelle ligne en dessous de la dernière et ils sont séparés par la marge qui leur a été assignée. En anglais donc, ou tout autre mode d'écriture horizontal, de haut en bas, les éléments de niveau bloc sont empilés verticalement.

Les éléments en ligne se comportent différemment — ils ne sont pas sur une nouvelle ligne ; ils se placent sur la même ligne qu'un autre élément inline ou que n'importe quel contenu textuel adjacent (ou entourant) tant qu'il y a de la place pour eux dans la largeur de l'élément parent de niveau de bloc. S'il n'y a pas suffisamment d'espace, le texte ou les éléments débordants se déplaceront sur une nouvelle ligne.

Si deux éléments adjacents ont tous deux une marge et que les deux marges se touchent, seule reste la plus grande des deux et la plus petite est englobée dans la plus grande — c'est ce qu'on appelle la fusion des marges ; nous l'avons déjà rencontrée plus haut.

Voici un exemple simple expliquant cela :

### Exemple

```html
<h2>Cours d'un document de base</h2>

<p>Je suis un élément de niveau bloc de base.
 Mes éléments de niveau bloc adjacents sont sur de
 nouvelles lignes en dessous de moi.</p>

<p>Par défaut, nous occupons 100% de la largeur
 de notre élément parent et nous sommes aussi hauts
 que notre contenu enfant. Nos largeur et hauteur totales
 sont égales à la largeur/hauteur de notre
 contenu + remplissage + encadrement.</p>

<p>Nous sommes séparés de nos marges.
 Comme il y a fusion des marges, nous sommes séparés
 par la largeur de l'une de nos marges et non les deux.</p>

<p>Des éléments inline <span>comme celui-ci</span> ou
 <span>celui‑là</span> sont placés sur la même ligne et
 les nœuds de texte adjacents, s'il y a de la place sur
 la même ligne. Les débordements des éléments inline
 <span>sont placés sur une nouvelle ligne si possible
 (comme celle‑ci contenant du texte)</span>, sinon ils
 sont placés sur une nouvelle ligne, comme cette image :
 <img src="long.jpg"></p>
```

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: rgba(255,84,104,.3);
  border: 2px solid rgb(255,84,104);
  padding: 10px;
  margin: 10px;
}

span {
  background: white;
  border: 1px solid black;
}
```

{{ EmbedLiveSample('Exemple', '100%', 500) }}

## Résumé

Maintenant que vous avez vu ce qu'est le cours normal de la mise en page et la façon dont le navigateur présente les choses par défaut, passons à la page suivante pour comprendre comment modifier cet affichage par défaut pour créer une mise en page conforme à votre design.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}

## Dans ce module

- [Introduction to CSS layout](/fr/docs/Learn/CSS/CSS_layout/Introduction)
- [Normal Flow](/fr/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [Flexbox](/fr/docs/Learn/CSS/CSS_layout/Flexbox)
- [Grid](/fr/docs/Learn/CSS/CSS_layout/Grids)
- [Floats](/fr/docs/Learn/CSS/CSS_layout/Floats)
- [Positioning](/fr/docs/Learn/CSS/CSS_layout/Positioning)
- [Multiple-column Layout](/fr/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Legacy Layout Methods](/fr/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
- [Supporting older browsers](/fr/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [Fundamental Layout Comprehension Assessment](/fr/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
