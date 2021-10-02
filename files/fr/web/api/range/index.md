---
title: range
slug: Web/API/Range
translation_of: Web/API/Range
---
<p>{{ ApiRef() }}</p>

<h3 id="Introduction">Introduction</h3>

<p>L'objet <code>Range</code> (littéralement : "étendue" ou "portée", ici : "segment") représente un fragment de document qui peut contenir des nœuds et des parties de nœuds texte dans un document donné.</p>

<p>Un segment peut être crée en utilisant la méthode <a href="/fr/docs/Web/API/document/createRange">createRange</a> de l'objet <a href="/fr/docs/Web/API/document">document</a>. Les objets range peuvent également être récupérés en utilisant la méthode <a href="/fr/docs/Web/API/Selection/getRangeAt">getRangeAt</a> de l'objet <a href="/fr/docs/Web/API/Selection">selection</a>.</p>

<h3 id="Propri.C3.A9t.C3.A9s">Propriétés</h3>

<dl>
 <dt><a href="/fr/docs/Web/API/range/collapsed">collapsed</a></dt>
 <dd>Renvoie un booléen indiquant si le point de départ et le point final du segment sont confondus.</dd>
 <dt><a href="/fr/docs/Web/API/range/commonAncestorContainer">commonAncestorContainer</a></dt>
 <dd>Renvoie le nœud le plus profond qui contient à la fois les nœuds <code>startContainer</code> et <code>endContainer</code>.</dd>
 <dt><a href="/fr/docs/Web/API/range/endContainer">endContainer</a></dt>
 <dd>Renvoie le nœud dans lequel le segment se termine.</dd>
 <dt><a href="/fr/docs/Web/API/range/endOffset">endOffset</a></dt>
 <dd>Renvoie un nombre représentant l'endroit où le segment se termine dans <code>endContainer</code>.</dd>
 <dt><a href="/fr/docs/Web/API/range/startContainer">startContainer</a></dt>
 <dd>Renvoie le nœud dans lequel le segment débute.</dd>
 <dt><a href="/fr/docs/Web/API/range/startOffset">startOffset</a></dt>
 <dd>Renvoie un nombre représentant l'endroit où le segment débute dans <code>startContainer</code>.</dd>
</dl>

<h3 id="M.C3.A9thodes">Méthodes</h3>

<h4 id="M.C3.A9thodes_de_positionnement">Méthodes de positionnement</h4>

<p>Ces méthodes permettent de définir le début et la fin d'un segment.</p>

<dl>
 <dt><a href="/fr/docs/Web/API/range/setStart">setStart</a></dt>
 <dd>Définit le point de départ d'un segment.</dd>
 <dt><a href="/fr/docs/Web/API/range/setEnd">setEnd</a></dt>
 <dd>Définit le point final d'un segment.</dd>
 <dt><a href="/fr/docs/Web/API/range/setStartBefore">setStartBefore</a></dt>
 <dd>Définit le point de départ d'un segment relativement à un autre nœud.</dd>
 <dt><a href="/fr/docs/Web/API/range/setStartAfter">setStartAfter</a></dt>
 <dd>Définit le point de départ d'un segment relativement à un autre nœud.</dd>
 <dt><a href="/fr/docs/Web/API/range/setEndBefore">setEndBefore</a></dt>
 <dd>Définit le point final d'un segment relativement à un autre nœud.</dd>
 <dt><a href="/fr/docs/Web/API/range/setEndAfter">setEndAfter</a></dt>
 <dd>Définit le point final d'un segment relativement à un autre nœud.</dd>
 <dt><a href="/fr/docs/Web/API/range/selectNode">selectNode</a></dt>
 <dd>Le contenu du segment devient le nœud et son contenu.</dd>
 <dt><a href="/fr/docs/Web/API/range/selectNodeContents">selectNodeContents</a></dt>
 <dd>le contenu du segment devient le contenu du nœud.</dd>
 <dt><a href="/fr/docs/Web/API/range/collapse">collapse</a></dt>
 <dd>Replie le segment sur l'un de ses points frontières.</dd>
</dl>

<h4 id="M.C3.A9thodes_de_modification">Méthodes de modification</h4>

<p>Ces méthodes recupèrent les nœuds d'un segment et modifient le contenu d'un segment.</p>

<dl>
 <dt><a href="/fr/docs/Web/API/range/cloneContents">cloneContents</a></dt>
 <dd>Renvoie un fragment de document où sont copiés les nœuds d'un segment.</dd>
 <dt><a href="/fr/docs/Web/API/range/deleteContents">deleteContents</a></dt>
 <dd>Supprime du document le contenu d'un segment.</dd>
 <dt><a href="/fr/docs/Web/API/range/extractContents">extractContents</a></dt>
 <dd>Déplace le contenu d'un segment, de l'arbre du document vers un fragment de document.</dd>
 <dt><a href="/fr/docs/Web/API/range/insertNode">insertNode</a></dt>
 <dd>Insère un nœud au début d'un segment.</dd>
 <dt><a href="/fr/docs/Web/API/range/surroundContents">surroundContents</a></dt>
 <dd>Déplace le contenu d'un segment dans un nouveau nœud.</dd>
</dl>

<h4 id="Autres_m.C3.A9thodes">Autres méthodes</h4>

<dl>
 <dt><a href="/fr/docs/Web/API/range/compareBoundaryPoints">compareBoundaryPoints</a></dt>
 <dd>Compare les points frontières de deux segments.</dd>
 <dt><a href="/fr/docs/Web/API/range/cloneRange">cloneRange</a></dt>
 <dd>Renvoie un objet <code>Range</code> avec des points frontières identiques à ceux du segment cloné.</dd>
 <dt><a href="/fr/docs/Web/API/range/detach">detach</a></dt>
 <dd>Supprime le segment afin d'améliorer la performance.</dd>
 <dt><a href="/fr/docs/Web/API/range/toString">toString</a></dt>
 <dd>Renvoie le texte du segment.</dd>
</dl>

<h4 id="Les_m.C3.A9thodes_Gecko">Les méthodes Gecko</h4>

<p>Cette section décrit les méthodes de range qui sont particulières à Mozilla et ne font pas partie des spécifications DOM W3C.</p>

<dl>
 <dt><a href="/fr/docs/Web/API/range/compareNode">compareNode</a> {{ Obsolete_inline() }}</dt>
 <dd>Renvoie une constante qui indique si le nœud est avant, après, dans ou englobe le segment.</dd>
 <dt><a href="/fr/docs/Web/API/range/comparePoint">comparePoint</a></dt>
 <dd>Renvoie -1, 0, ou 1, indiquant si le point se trouve avant, après, ou dans le segment.</dd>
 <dt><a href="/fr/docs/Web/API/range/createContextualFragment">createContextualFragment</a></dt>
 <dd>Renvoie un fragment de document créé à partir d'un morceau de code donné.</dd>
 <dt><a href="/fr/docs/Web/API/range/intersectsNode">intersectsNode</a> {{ Obsolete_inline() }}</dt>
 <dd>Renvoie un booléen indiquant si un nœud donné a une intersection avec le segment.</dd>
 <dt><a href="/fr/docs/Web/API/range/isPointInRange">isPointInRange</a></dt>
 <dd>Renvoie un booléen indiquant si le point donné est dans le segment.</dd>
</dl>