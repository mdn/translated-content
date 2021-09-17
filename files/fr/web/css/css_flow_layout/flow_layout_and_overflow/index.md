---
title: La disposition en flux et le dépassement
slug: Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow
tags:
  - CSS
  - Guide
  - Intermédiaire
translation_of: Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow
original_slug: Web/CSS/CSS_Flow_Layout/Disposition_flux_et_dépassement
---
<div>{{QuickLinksWithSubpages("/fr/docs/Web/CSS/CSS_Flow_Layout/")}}</div>

<p>Lorsque le conteneur est trop petit pour son contenu, on obtient une situation de dépassement. Le comportement du dépassement est importante dès qu'on manipule des objets CSS dont la taille est contrainte. Dans ce guide, nous verrons le fonctionnement du dépassement avec le flux normal.</p>

<h2 id="Qu'est-ce_que_le_dépassement">Qu'est-ce que le dépassement ?</h2>

<p>Pour créer un exemple de dépassement, prenons un élément avec une hauteur et une largeur fixés puis ajoutons un contenu trop important dans la boîte :</p>

<p>{{EmbedGHLiveSample("css-examples/flow/overflow/overflow.html", '100%', 700)}}</p>

<p>Le contenu « arrive » dans la boîte puis remplit celle-ci et ensuite, il dépasse en affichant du contenu en dehors de la boîte éventuellement en dessous du contenu environnant. Pour contrôler le comportement du dépassement, on pourra utiliser la propriété <code><a href="/fr/docs/Web/CSS/overflow">overflow</a></code>. La valeur initiale de cette propriété est <code>visible</code> et c'est pour cela qu'on voit le contenu dépasser.</p>

<h2 id="Contrôler_le_dépassement">Contrôler le dépassement</h2>

<p>La propriété <code>overflow</code> possède d'autres valeurs qui permettent de contrôler le dépassement. Afin de masquer le contenu qui dépasse, on peut utiliser la valeur <code>hidden</code>. Avec cette valeur, une partie du contenu peut ne pas être visible.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/overflow/hidden.html", '100%', 700)}}</p>

<p>Avec la valeur <code>scroll</code>, le contenu est dans la boîte et des barres de défilement sont ajoutées à la boîte afin de pouvoir défiler et voir le contenu. Les barres de défilement seront ajoutées, même si le contenu « tient » dans la boîte.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/overflow/scroll.html", '100%', 700)}}</p>

<p>Avec la valeur <code>auto</code>, le contenu sera affiché sans barre de défilement s'il tient dans la boîte. S'il dépasse, des barres de défilement sont ajoutées. En comparant l'exemple précédent avec celui qui suit, on peut voir que <code>overflow: scroll</code> ajoute des barres de défilement verticales et horizontales (même s'il y a uniquement besoin du défilement vertical). Avec la valeur <code>auto</code>, seules les barres de défilement nécessaires sont ajoutées.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/overflow/auto.html", '100%', 700)}}</p>

<p>Comme nous l'avons vu plus tôt, toute valeur qui est différente de <code>visible</code> créera un nouveau contexte de formatage de bloc.</p>

<div class="note">
<p><strong>Note :</strong> Dans <a href="https://www.w3.org/TR/css-overflow-3/">le brouillon du module de spécification <em>Overflow</em> de niveau 3</a>, une valeur est ajoutée : <code>overflow: clip</code>. Cette valeur agira comme <code>overflow: hidden</code> mais ne permettra de faire défiler le contenu à l'aide de code. La boîte ne pourra pas défiler. De plus, cette valeur ne crée pas de contexte de formatage de bloc.</p>
</div>

<p>Pour être tout à fait précis, la propriété <code>overflow</code> est une <a href="/fr/docs/Web/CSS/Propriétés_raccourcies">propriété raccourcie</a> pour les propriétés <code><a href="/fr/docs/Web/CSS/overflow-x">overflow-x</a></code> et <code><a href="/fr/docs/Web/CSS/overflow-y">overflow-y</a></code>. Si on fournit une valeur, celle-ci sera utilisée pour les deux axes. On peut aussi fournir deux valeurs, auquel cas la première sera utilisée pour <code>overflow-x</code> et la seconde pour <code>overflow-y</code>. Dans l'exemple qui suit, seule <code>overflow-y: scroll</code> est utilisée et la barre de défilement horizontale superflue n'est pas ajoutée.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/overflow/overflow-y.html", '100%', 700)}}</p>

<h2 id="Les_propriétés_relatives">Les propriétés relatives</h2>

<p>Dans le guide sur <a href="/fr/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes">les modes d'écriture et la disposition en flux</a>, nous avons étudié des propriétés plus récentes <code>block-size</code> et <code>inline-size</code> qui permettent de raisonner avec les modes d'écriture plutôt qu'avec les dimensions physiques de l'écran. La spécification de niveau 3 Overflow inclut également les propriétés correspondantes pour le dépassement : <code><a href="/fr/docs/Web/CSS/@media/overflow-block">overflow-block</a></code> et <code><a href="/fr/docs/Web/CSS/@media/overflow-inline">overflow-inline</a></code>. Ces propriétés « logiques » correspondent aux propriétés « physiques » <code>overflow-x</code> et <code>overflow-y</code> où la correspondance varie en fonction du mode d'écriture du document.</p>

<p>À l'heure où nous écrivons ces lignes, ces deux propriétés ne sont pas implémentées par les navigateurs et il faut donc s'en tenir aux propriétés physiques et ajuster selon le mode d'écriture.</p>

<h2 id="Gérer_le_dépassement">Gérer le dépassement</h2>

<p>Dans la spécification de niveau 3 sur le dépassement, certaines propriétés aident à améliorer l'apparence du contenu lors d'un dépassement.</p>

<h3 id="Dépassement_sur_l'axe_en_ligne">Dépassement sur l'axe en ligne</h3>

<p>La propriété <code><a href="/fr/docs/Web/CSS/text-overflow">text-overflow</a></code> indique comment afficher le texte qui dépasse sur l'axe en ligne. La valeur <code>clip</code> qui coupe le contenu qui dépasse, c'est la valeur initiale et le comportement par défaut. La valeur <code>ellipsis</code> permet d'afficher une ellipse qui peut être adaptée en fonction de la langue ou du mode d'écriture utilisé.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/overflow/text-overflow.html", '100%', 500)}}</p>

<h3 id="Dépassement_sur_l'axe_de_bloc">Dépassement sur l'axe de bloc</h3>

<p>Il existe également une proposition pour une propriété <code>block-overflow</code>. Toutefois, celle-ci (ainsi que son nom) est toujours en discussion. La proposition consisterait à pouvoir afficher une ellipse lorsque le contenu dépasse sur l'axe de bloc.</p>

<p>Cette propriété serait par exemple utile lorsqu'on a une liste d'article avec une boîte pour chaque article dont la hauteur est fixée. Si le texte qui dépasse est masqué, ce n'est pas nécessairement évident qu'il y a du contenu supplémentaire et qu'il faut cliquer pour le lire. Ajouter une ellipse rendrait ce dépassement plus perceptible.</p>

<h2 id="Résumé">Résumé</h2>

<p>Qu'on manipule un média « continu » sur le Web ou un format paginé (impression ou EPUB), il est utile de comprendre la façon dont le dépassement agit, quelle que soit la méthode de dépassement. En comprenant comment le dépassement fonctionne avec le flux normal, ce devrait être plus simple de comprendre le fonctionnement du dépassement pour les autres méthodes comme les grilles ou les boîtes flexibles.</p>
