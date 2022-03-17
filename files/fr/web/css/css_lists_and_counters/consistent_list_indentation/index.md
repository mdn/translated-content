---
title: Indentation homogène des listes
slug: Web/CSS/CSS_Lists_and_Counters/Consistent_list_indentation
tags:
  - CSS
  - Guide
  - Intermédiaire
translation_of: Web/CSS/CSS_Lists_and_Counters/Consistent_list_indentation
original_slug: Web/CSS/CSS_Lists/Indentation_homogène_des_listes
---
{{CSSRef}}

La modification la plus fréquemment apportée sur une liste concerne la distance d'indentation (autrement dit, la distance de laquelle les éléments sont décalés vers la droite). Ce point peut être source de frustration car les navigateurs se comportent différemment à ce sujet. Ainsi, si on déclare une liste sans marge à gauche, elles sont déplacées Internet Explorer mais restent obstinément à la même place dans les navigateurs Gecko.

Pour comprendre pourquoi cela se produit ainsi, et surtout afin d'éviter ces problèmes, nous allons devoir examiner en détail la construction des listes.

## Construire une liste

Commençons par une simple liste minimale. L'élément de la liste ne possède aucune puce (le marqueur devant l'élément). Pour le moment, il ne fait pas partie d'une liste.

![](consistent-list-indentation-figure1.gif)

La bordure pointillée rouge représente la limite extérieure de la zone de contenu de l'élément de la liste. Pour le moment, cet élément ne possède ni remplissage (_padding_) ni bordure. Si on ajoute deux autres éléments à la liste, on obtient alors ce résultat :

![](consistent-list-indentation-figure2.gif)

À présent, nous allons placer ces éléments dans un élément parent. Pour cet exemple, nous utiliserons une liste non-ordonnée avec {{HTMLElement("ul")}}. Selon [le modèle de boîtes CSS](/fr/docs/Apprendre/CSS/Les_bases/Le_mod%C3%A8le_de_bo%C3%AEte), les boîtes des éléments de la liste s'inscrivent dans la boîte de contenu de l'élément parent. Cette dernière n'a, pour l'instant, aucune marge ni aucun remplissage (_padding_). On obtient donc ce résultat :

![](consistent-list-indentation-figure3.gif)

Ici, la bordure pointillée bleue révèle les limites de la zone de contenu de l'élément `ul`. Puisqu'il n'a pas de remplissage (_padding_), cette limite épouse étroitement celles des trois éléments de la liste.

On ajoute maintenant les puces aux éléments de la liste. Puisqu'il s'agit d'une liste non ordonnée, nous ajoutons les traditionnelles puces en forme de disques pleins, comme ceci :

![](consistent-list-indentation-figure4.gif)

Visuellement, ces marqueurs apparaissent en dehors de la zone de contenu de l'élément `ul`, mais ce n'est pas ce qui est le plus important ici. Ce qui compte, c'est que ces marqueurs prennent place en dehors de la «&nbsp;boîte principale&nbsp;» des éléments `li`. Ils apparaissent comme des sortes d'appendices aux items de liste, qui se tiennent en dehors de la zone de contenu de chaque item, tout en étant attaché à chaque `li`.

C'est pourquoi, dans tous les navigateurs sauf Internet Explorer Windows, les marqueurs sont placés à l'extérieur des bordures de l'élément `li`, dès lors que la propriété {{cssxref("list-style-position")}} vaut `outside`. Si cette valeur est changée en `inside`, les marqueurs seront alors déplacés à l'intérieur du contenu des éléments `li`, comme s'il s'agissait d'une boîte en ligne placée au tout début de ceux-ci.

### Obtenir une double indentation

Comment cela va-t-il être rendu dans un document&nbsp;? Pour le moment, nous avons un résultat équivalent à ces styles&nbsp;:

```css
ul, li {
  margin-left: 0;
  padding-left: 0;
}
```

Si nous plaçons cette liste en l'état dans un document, elle n'aura aucune indentation apparente, et nos marqueurs courront le risque d'être rejetés au-delà de la limite gauche de la fenêtre du navigateur.

Afin d'éviter ça et d'imposer une indentation, le navigateur pourra implémenter l'une des trois approches suivantes :

1.  Doter chaque élément `li` d'une marge gauche&nbsp;;
2.  Doter chaque élément `ul` d'une marge gauche&nbsp;;
3.  Doter chaque élément `ul` d'un padding gauche quelconque.

Telles que les choses se sont faites, aucun navigateur ne semble avoir choisi la première solution. Internet Explorer pour Windows et Macintosh, ainsi qu'Opera, ont adopté la seconde solution. La troisième a été choisie par Gecko et donc par tous les navigateurs embarquant celui-ci.

Observons de plus près ces deux dernières approches. Dans Internet Explorer et Opera, les listes sont indentées en fixant une marge gauche de 40 pixels pour l'élément `ul`. Si nous appliquons une couleur d'arrière-plan, à celui-ci en conservant les bordures des éléments de la liste et de cet élément `ul`, nous obtenons le résultat qui suit :

![](consistent-list-indentation-figure5.gif)

De son côté, Gecko applique un _padding_ gauche de 40 pixels à cet élément `ul`. Avec les mêmes styles que dans le cas précédent, notre exemple s'affichera dans un navigateur basé sur Gecko de la façon suivante :

![](consistent-list-indentation-figure6.gif)

Comme nous pouvons le voir, les marqueurs restent attachés aux éléments `li`, où qu'ils soient. La différence réside uniquement dans la manière dont l'élément `ul` est mis en forme. Nous ne pouvons voir cette différence que si nous essayons de donner un arrière-plan ou des bordures à cet élément `ul`

## Obtenir un rendu homogène

Après ces observations, nous obtenons la conclusion suivante : si on souhaite obtenir un rendu de liste homogène entre Gecko, Internet Explorer et Opera, il est nécessaire de spécifier _à la fois_ la marge gauche et le _padding_ gauche de l'élément `ul`. L'élément `li` peut être ignoré ici. Si vous voulez reproduire le rendu par défaut de Netscape 6.x, vous écrirez&nbsp;:

```css
ul {
  margin-left: 0;
  padding-left: 40px;
}
```

Si vous préférez suivre le modèle Internet Explorer/Opera, vous écrirez alors&nbsp;:

```css
ul {
  margin-left: 40px;
  padding-left: 0;
}
```

Naturellement, vous pouvez utiliser les valeurs de votre choix. Les fixer toutes deux à `1.25em` si vous en avez envie - il n'y a aucune raison de s'en tenir uniquement à des valeurs en pixels. Et si vous voulez obtenir des listes sans indentation, vous devrez alors, là encore, spécifier à la fois un _padding_ et une marge nuls&nbsp;:

```css
ul {
  margin-left: 0;
  padding-left: 0;
}
```

Souvenez-vous, cependant, qu'en faisant ainsi, vos puces se tiendront en dehors de votre liste et de son élément parent. Si ce parent est l'élément `body`, il y a de fortes chances qu'elles se retrouvent complètement en dehors de la fenêtre d'affichage du navigateur et qu'elles ne soient donc invisibles.

## Conclusion

Au bout du compte, on voit qu'aucun des navigateurs mentionnés dans cet article n'a tort ou raison sur ce point. Ces navigateurs utilisent différents styles par défaut et c'est là que réside le seul problème. En veillant à mettre en forme à la fois la marge gauche et le _padding_ gauche des listes, on peut obtenir un rendu bien plus homogène de l'indentation sur les différents navigateurs.

## Recommandations

- Lorsque vous modifiez l'indentation des listes, veillez à indiquer à la fois le _padding_ et la marge.
