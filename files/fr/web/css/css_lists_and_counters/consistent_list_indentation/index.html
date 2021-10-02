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
<div>{{CSSRef}}</div>

<p>La modification la plus fréquemment apportée sur une liste concerne la distance d'indentation (autrement dit, la distance de laquelle les éléments sont décalés vers la droite). Ce point peut être source de frustration car les navigateurs se comportent différemment à ce sujet. Ainsi, si on déclare une liste sans marge à gauche, elles sont déplacées Internet Explorer mais restent obstinément à la même place dans les navigateurs Gecko.</p>

<p>Pour comprendre pourquoi cela se produit ainsi, et surtout afin d'éviter ces problèmes, nous allons devoir examiner en détail la construction des listes.</p>

<h2 id="Construire_une_liste">Construire une liste</h2>

<p>Commençons par une simple liste minimale. L'élément de la liste ne possède aucune puce (le marqueur devant l'élément). Pour le moment, il ne fait pas partie d'une liste.</p>

<p><img alt="" src="consistent-list-indentation-figure1.gif"></p>

<p>La bordure pointillée rouge représente la limite extérieure de la zone de contenu de l'élément de la liste. Pour le moment, cet élément ne possède ni remplissage (<em>padding</em>) ni bordure. Si on ajoute deux autres éléments à la liste, on obtient alors ce résultat :</p>

<p><img alt="" src="consistent-list-indentation-figure2.gif"></p>

<p>À présent, nous allons placer ces éléments dans un élément parent. Pour cet exemple, nous utiliserons une liste non-ordonnée avec {{HTMLElement("ul")}}. Selon <a href="/fr/docs/Apprendre/CSS/Les_bases/Le_mod%C3%A8le_de_bo%C3%AEte">le modèle de boîtes CSS</a>, les boîtes des éléments de la liste s'inscrivent dans la boîte de contenu de l'élément parent. Cette dernière n'a, pour l'instant, aucune marge ni aucun remplissage (<em>padding</em>). On obtient donc ce résultat :</p>

<p><img alt="" src="consistent-list-indentation-figure3.gif"></p>

<p>Ici, la bordure pointillée bleue révèle les limites de la zone de contenu de l'élément <code>ul</code>. Puisqu'il n'a pas de remplissage (<em>padding</em>), cette limite épouse étroitement celles des trois éléments de la liste.</p>

<p>On ajoute maintenant les puces aux éléments de la liste. Puisqu'il s'agit d'une liste non ordonnée, nous ajoutons les traditionnelles puces en forme de disques pleins, comme ceci :</p>

<p><img alt="" src="consistent-list-indentation-figure4.gif"></p>

<p>Visuellement, ces marqueurs apparaissent en dehors de la zone de contenu de l'élément <code>ul</code>, mais ce n'est pas ce qui est le plus important ici. Ce qui compte, c'est que ces marqueurs prennent place en dehors de la « boîte principale » des éléments <code>li</code>. Ils apparaissent comme des sortes d'appendices aux items de liste, qui se tiennent en dehors de la zone de contenu de chaque item, tout en étant attaché à chaque <code>li</code>.</p>

<p>C'est pourquoi, dans tous les navigateurs sauf Internet Explorer Windows, les marqueurs sont placés à l'extérieur des bordures de l'élément <code>li</code>, dès lors que la propriété {{cssxref("list-style-position")}} vaut <code>outside</code>. Si cette valeur est changée en <code>inside</code>, les marqueurs seront alors déplacés à l'intérieur du contenu des éléments <code>li</code>, comme s'il s'agissait d'une boîte en ligne placée au tout début de ceux-ci.</p>

<h3 id="Obtenir_une_double_indentation">Obtenir une double indentation</h3>

<p>Comment cela va-t-il être rendu dans un document ? Pour le moment, nous avons un résultat équivalent à ces styles :</p>

<pre class="brush: css">ul, li {
  margin-left: 0;
  padding-left: 0;
}</pre>

<p>Si nous plaçons cette liste en l'état dans un document, elle n'aura aucune indentation apparente, et nos marqueurs courront le risque d'être rejetés au-delà de la limite gauche de la fenêtre du navigateur.</p>

<p>Afin d'éviter ça et d'imposer une indentation, le navigateur pourra implémenter l'une des trois approches suivantes :</p>

<ol>
 <li>Doter chaque élément <code>li</code> d'une marge gauche ;</li>
 <li>Doter chaque élément <code>ul</code> d'une marge gauche ;</li>
 <li>Doter chaque élément <code>ul</code> d'un padding gauche quelconque.</li>
</ol>

<p>Telles que les choses se sont faites, aucun navigateur ne semble avoir choisi la première solution. Internet Explorer pour Windows et Macintosh, ainsi qu'Opera, ont adopté la seconde solution. La troisième a été choisie par Gecko et donc par tous les navigateurs embarquant celui-ci.</p>

<p>Observons de plus près ces deux dernières approches. Dans Internet Explorer et Opera, les listes sont indentées en fixant une marge gauche de 40 pixels pour l'élément <code>ul</code>. Si nous appliquons une couleur d'arrière-plan, à celui-ci en conservant les bordures des éléments de la liste et de cet élément <code>ul</code>, nous obtenons le résultat qui suit :</p>

<p><img alt="" src="consistent-list-indentation-figure5.gif"></p>

<p>De son côté, Gecko applique un <em>padding</em> gauche de 40 pixels à cet élément <code>ul</code>. Avec les mêmes styles que dans le cas précédent, notre exemple s'affichera dans un navigateur basé sur Gecko de la façon suivante :</p>

<p><br>
 <img alt="" src="consistent-list-indentation-figure6.gif"></p>

<p>Comme nous pouvons le voir, les marqueurs restent attachés aux éléments <code>li</code>, où qu'ils soient. La différence réside uniquement dans la manière dont l'élément <code>ul</code> est mis en forme. Nous ne pouvons voir cette différence que si nous essayons de donner un arrière-plan ou des bordures à cet élément <code>ul</code></p>

<h2 id="Obtenir_un_rendu_homogène">Obtenir un rendu homogène</h2>

<p>Après ces observations, nous obtenons la conclusion suivante : si on souhaite obtenir un rendu de liste homogène entre Gecko, Internet Explorer et Opera, il est nécessaire de spécifier <em>à la fois</em> la marge gauche et le <em>padding</em> gauche de l'élément <code>ul</code>. L'élément <code>li</code> peut être ignoré ici. Si vous voulez reproduire le rendu par défaut de Netscape 6.x, vous écrirez :</p>

<pre class="brush: css">ul {
  margin-left: 0;
  padding-left: 40px;
}</pre>

<p>Si vous préférez suivre le modèle Internet Explorer/Opera, vous écrirez alors :</p>

<pre class="brush: css">ul {
  margin-left: 40px;
  padding-left: 0;
}</pre>

<p>Naturellement, vous pouvez utiliser les valeurs de votre choix. Les fixer toutes deux à <code>1.25em</code> si vous en avez envie - il n'y a aucune raison de s'en tenir uniquement à des valeurs en pixels. Et si vous voulez obtenir des listes sans indentation, vous devrez alors, là encore, spécifier à la fois un <em>padding</em> et une marge nuls :</p>

<pre class="brush: css">ul {
  margin-left: 0;
  padding-left: 0;
}</pre>

<p>Souvenez-vous, cependant, qu'en faisant ainsi, vos puces se tiendront en dehors de votre liste et de son élément parent. Si ce parent est l'élément <code>body</code>, il y a de fortes chances qu'elles se retrouvent complètement en dehors de la fenêtre d'affichage du navigateur et qu'elles ne soient donc invisibles.</p>

<h2 id="Conclusion">Conclusion</h2>

<p>Au bout du compte, on voit qu'aucun des navigateurs mentionnés dans cet article n'a tort ou raison sur ce point. Ces navigateurs utilisent différents styles par défaut et c'est là que réside le seul problème. En veillant à mettre en forme à la fois la marge gauche et le <em>padding</em> gauche des listes, on peut obtenir un rendu bien plus homogène de l'indentation sur les différents navigateurs.</p>

<h2 id="Recommandations">Recommandations</h2>

<ul>
 <li>Lorsque vous modifiez l'indentation des listes, veillez à indiquer à la fois le <em>padding</em> et la marge.</li>
</ul>
