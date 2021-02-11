---
title: Utiliser les attributs de données
slug: Learn/HTML/Howto/Use_data_attributes
tags:
  - Guide
  - HTML
  - Web
translation_of: Learn/HTML/Howto/Use_data_attributes
original_slug: Apprendre/HTML/Comment/Utiliser_attributs_donnes
---
<div>{{LearnSidebar}}</div>

<p><a href="/fr/docs/Web/Guide/HTML/HTML5">HTML5</a> est conçu avec le souci de l'extensibilité pour les données qui doivent être associées avec un élément particulier sans qu'on leur donne une signification spécifique. <a href="/fr/docs/Web/HTML/Attributs_universels#attr-data-*">Les attributs <code>data-*</code></a> nous permettent de stocker des informations supplémentaires sur les éléments sémantiques standard sans avoir recours à des attributs non-standard ni à des propriétés supplémentaires du DOM, ni à {{domxref("Node.setUserData()")}}.</p>

<h2 id="Syntaxe_HTML">Syntaxe HTML</h2>

<p>La syntaxe est simple. Tout attribut d'un élément dont le nom commence par <code>data-</code> est un attribut de données (<em>data attribute</em>). Si par exemple vous avez un article pour lequel vous souhaitez stocker des informations supplémentaires et qui n'ont pas de représentation visuelle, il vous suffit d'utiliser des attributs de données pour cela :</p>

<pre class="brush: html">&lt;article
  id="voitureelectrique"
  data-columns="3"
  data-index-number="12314"
  data-parent="voitures"&gt;
...
&lt;/article&gt;</pre>

<h2 id="Accéder_via_du_code_JavaScript">Accéder via du code JavaScript</h2>

<p>Lire les valeurs de ces attributs avec du <a href="/fr/docs/Web/JavaScript">JavaScript</a> est également très simple. Vous pourriez utiliser {{domxref("Element.getAttribute", "getAttribute()")}} avec leur nom HTML complet pour les lire, mais le standard les définit d'une manière plus simple : un {{domxref("DOMStringMap")}} peut être lu via une propriété {{domxref("HTMLElement.dataset", "dataset")}}.</p>

<p>Pour obtenir un attribut <code>data</code> avec l'objet <code>dataset</code>, repérez la propriété avec la partie du nom de l'attribut qui suit le préfixe <code>data-</code> (notez que les tirets sont convertis en <em><a href="https://fr.wikipedia.org/wiki/CamelCase">camelCase</a></em>).</p>

<pre class="brush: js">var article = document.getElementById('voitureelectrique');

article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "voitures"</pre>

<p>Chaque propriété est une chaîne et peut être en lecture et écriture. Dans le cas ci-dessus passer le paramètre <code>article.dataset.columns = 5</code> mettrait l'attribut à <code>"5"</code>.</p>

<h2 id="Accéder_via_du_code_CSS">Accéder via du code CSS</h2>

<p>Remarquez que, dans la mesure où les attributs data sont de simples attributs HTML, vous pouvez même y accéder par les <a href="/fr/docs/Web/CSS">CSS</a>. Par exemple, pour afficher les données associées à l'article, vous pouvez utiliser des <a href="/fr/docs/Web/CSS/content">contenus générés</a> en CSS avec la fonction {{cssxref("attr")}} :</p>

<pre class="brush: css">article::before {
  content: attr(data-parent);
}</pre>

<p>Vous pouvez également utiliser les <a href="/fr/docs/Web/CSS/Sélecteurs_d_attribut">sélecteurs d'attributs</a> en CSS pour modifier les styles en fonction des données :</p>

<pre class="brush: css">article[data-columns='3'] {
  width: 400px;
}
article[data-columns='4'] {
  width: 600px;
}</pre>

<p>Tout cela est visible dans l'exemple<a href="https://jsbin.com/ujiday/2/edit"> JSBin</a>. </p>

<p>Les attributs data peuvent aussi être stockés pour inclure des informations qui changent constamment, telles que les cores dans un jeu. L'utilisation des sélecteurs CSS et de l'accès par le JavaScript permettent ici de créer des effets sympas sans avoir à écrire vos propres routines d'affichage. Regardez cet exemple de <a href="https://www.youtube.com/watch?v=On_WyUB1gOk">capture vidéo d'écran</a> où sont utilisés les contenus générés et les transitions CSS (<a href="https://jsbin.com/atawaz/3/edit">exemple JSBin</a>).</p>

<p>Comme les valeurs des données sont des chaînes, toutes les valeurs doivent être entre guillemets " " sinon le formatage de style sera inopérant.</p>

<h2 id="Problèmes">Problèmes</h2>

<p>Ne stockez pas de contenu qui devrait être visible dans les attributs data, car les technologies d'assistance pourraient ne pas y avoir accès. De plus, les moteurs de recherche pourraient ne pas indexer les valeurs des attributs de données. </p>

<p>Les principaux problèmes à prendre en considération sont le support d'Internet Explorer et la performance. Internet Explorer 11+ prend en charge le standard, mais toutes les versions antérieures  <a href="https://caniuse.com/#feat=dataset">ne prennent pas en charge le <code>dataset</code></a>. Pour prendre en charge IE 10 et versions inférieures vous avez besoin d'accéder aux attributs data avec {{domxref("Element.getAttribute", "getAttribute()")}}. De plus, la <a href="https://jsperf.com/data-dataset">la performance de lecture des attributs de données</a>, au stockage dans des structures de données JavaScript est assez faible. Utiliser un <code>dataset</code> est même plus lent que lire les données avec <code>getAttribute()</code>.</p>

<p>Mais ceci dit, pour les métadonnées personnalisées associées aux éléments, c'est une excellente solution.</p>

<p>Avec Firefox 49.0.2 (et peut-être dans les versions antérieures ou ultérieures), les attributs data qui dépassent 1022 attributs ne seront pas lisibles par Javascript (EcmaScript 4).</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Cet article est une adaptation de <a href="https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/">« Utiliser les attributs de données en JavaScript et CSS »</a> publié sur hacks.mozilla.org (en anglais).</li>
 <li>Les attributs personnalisés sont également pris en charge en SVG 2 ; consultez {{domxref("SVGElement.dataset")}} et {{SVGAttr("data-*")}} pour davantage d'informations.</li>
 <li><em><a href="https://www.sitepoint.com/use-html5-data-attributes/">How to use HTML5 data attributes</a></em> (Sitepoint) (en anglais)</li>
</ul>
