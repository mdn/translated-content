---
title: ShadowRoot
slug: Web/API/ShadowRoot
tags:
  - API
  - Interface
  - Reference
  - ShadowRoot
  - Web Components
translation_of: Web/API/ShadowRoot
---
<div>{{APIRef('Shadow DOM')}}</div>

<p>L'interface <code><strong>ShadowRoot</strong></code>, relative à l'API <em>Shadow DOM</em>, représente la racine d'un sous-arbre du DOM dont le rendu est effectué séparément de celui du DOM de l'arbre principal.</p>

<p>Il est possible de récupérer une référence à la racine <em>shadow</em> d'un élément via la propriété {{domxref("Element.shadowRoot")}} si la racine a été créée avec la méthode {{domxref("Element.attachShadow()")}} et l'option <code>mode</code> qui valait <code>open</code>.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{domxref("ShadowRoot.delegatesFocus")}} {{readonlyinline}} {{non-standard_inline}}</dt>
 <dd>Cette propriété renvoie un booléen qui indique si l'option <code>delegatesFocus</code> a été activée lors de la liaison avec la racine <em>shadow</em> (cf. {{domxref("Element.attachShadow()")}}).</dd>
 <dt>{{domxref("ShadowRoot.host")}} {{readonlyinline}}</dt>
 <dd>Cette propriété renvoie une référence à l'élément DOM auquel la racine <code>ShadowRoot</code> est attachée.</dd>
 <dt>{{domxref("ShadowRoot.innerHTML")}} {{non-standard_inline}}</dt>
 <dd>Cette propriété permet de définir ou de récupérer le sous-arbre DOM contenu à l'intérieur de la racine <code>ShadowRoot</code>.</dd>
 <dt>{{domxref("ShadowRoot.mode")}} {{readonlyinline}}</dt>
 <dd>Cette propriété renvoie le mode utilisé pour la racine <code>ShadowRoot</code> : <code>open</code> ou <code>closed</code>. Cette valeur indique si les fonctionnalités internes à la racine sont accessibles depuis JavaScript.</dd>
</dl>

<h3 id="Propriétés_incluses_via_DocumentOrShadowRoot">Propriétés incluses via <code>DocumentOrShadowRoot</code></h3>

<p><em>L'interface <code>ShadowRoot</code> inclut les propriétés suivantes grâce au </em>mixin<em> {{domxref("DocumentOrShadowRoot")}}. Attention, ceci n'est actuellement (11/2019) implémenté qu'avec Chrome et les autres navigateurs continuent d'implémenter l'interface {{domxref("Document")}}.</em></p>

<dl>
 <dt>{{domxref("DocumentOrShadowRoot.activeElement")}} {{readonlyInline}}</dt>
 <dd>L'élément ({{domxref('Element')}}) au sein du sous-arbre <em>shadow</em> qui a le focus.</dd>
 <dt>{{domxref("DocumentOrShadowRoot.styleSheets")}} {{readonlyInline}}</dt>
 <dd>Une liste {{domxref('StyleSheetList')}} d'objets {{domxref('CSSStyleSheet')}} qui référencent les feuilles de styles liées explicitement ou embarquées dans le document.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em>L'interface <code>ShadowRoot</code> inclut les méthodes suivantes qui proviennent du </em>mixin<em> {{domxref("DocumentOrShadowRoot")}}. Attention, ceci n'est actuellement (11/2019) implémenté qu'avec Chrome et les autres navigateurs continuent d'implémenter l'interface {{domxref("Document")}}.</em></p>

<dl>
 <dt>{{domxref("DocumentOrShadowRoot.getSelection()")}}</dt>
 <dd>Cette méthode renvoie un objet {{domxref('Selection')}} représentant le fragment de texte sélectionné par l'utilisateur ou la position courante du curseur.</dd>
 <dt>{{domxref("DocumentOrShadowRoot.elementFromPoint()")}}</dt>
 <dd>Cette méthode renvoie l'élément le plus haut situé aux coordonnées passées en arguments.</dd>
 <dt>{{domxref("DocumentOrShadowRoot.elementsFromPoint()")}}</dt>
 <dd>Cette méthode renvoie un tableau de tous les éléments situés aux coordonnées passées en arguments.</dd>
 <dt>{{domxref("DocumentOrShadowRoot.caretPositionFromPoint()")}}</dt>
 <dd>Cette méthode renvoie un objet {{domxref('CaretPosition')}} contenant le nœud DOM sur lequel est le curseur ainsi que la position du curseur sur ce nœud.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Les fragments de code suivants sont extraits de l'exemple <a href="https://github.com/mdn/web-components-examples/tree/master/life-cycle-callbacks">life-cycle-callbacks</a> (<a href="https://mdn.github.io/web-components-examples/life-cycle-callbacks">voir le résultat en <em>live</em></a>) qui crée un élément affichant un carré avec une taille et une couleur fournies par les attributs de l'élément.</p>

<p>Dans la définition de la classe pour l'élément <code>&lt;custom-square&gt;</code>, on ajoute certains <em>callbacks</em> permettant de gérer le cycle de vie de l'élément avec un appel à une fonction externe <code>updateStyle()</code> qui applique la taille et la couleur à l'élément. On lui passe l'argument <code>this</code> (c'est-à-dire l'élément lui-même).</p>

<pre class="brush: js">connectedCallback() {
  console.log("Le carré personnalisé a été ajouté à la page.");
  updateStyle(this);
}

attributeChangedCallback(nom, ancienneValeur, nouvelleValeur) {
  console.log("Les attributs du carré ont changé.");
  updateStyle(this);
}</pre>

<p>Quant à la fonction <code>updateStyle()</code>, voyons ici son fonctionnement. On récupère une référence au <em>shadow DOM</em> avec {{domxref("Element.shadowRoot")}}. Ensuite, on utilise un parcours pour le sous-arbre afin de trouver l'élément {{htmlelement("style")}} présent dans le <em>shadow DOM</em> et on met à jour le CSS pour cet élément :</p>

<pre class="brush: js">function updateStyle(elem) {
  var shadow = elem.shadowRoot;
  var childNodes = shadow.childNodes;
  for(var i = 0; i &lt; childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {
      childNodes[i].textContent =
        'div {' +
          'width: ' + elem.getAttribute('l') + 'px;' +
          'height: ' + elem.getAttribute('l') + 'px;' +
          'background-color: ' + elem.getAttribute('c') + ';' +
        '}';
    }
  }
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG','#interface-shadowroot','Interface ShadowRoot')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.ShadowRoot")}}</p>
