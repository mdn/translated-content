---
title: Element.closest()
slug: Web/API/Element/closest
tags:
  - API
  - DOM
  - Element
  - Méthodes
translation_of: Web/API/Element/closest
---
<p>{{APIRef('Shadow DOM')}}</p>

<p>La méthode <code><strong>Element.closest()</strong></code> renvoie l'ancêtre le plus proche de l'élément courant (ou l'élément courant) qui correspond aux sélecteurs passés comme paramètres. S'il n'existe pas de tel ancêtre, la méthode renvoie <code>null</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>elt =</em><em> element</em>.closest(<em>selecteurs</em>);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>selecteurs</code></dt>
 <dd>Une chaîne {{domxref("DOMString")}} qui contient une liste de sélecteurs tels que <code>"p:hover, .toto + q"</code></dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>L'élément ({{domxref("Element")}}) qui est le plus proche ancêtre de l'élément courant et qui correspond aux sélecteurs décrits dans le paramètres ou {{jsxref("null")}} s'il n'y en a aucun.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
 <li>{{exception("SyntaxError")}} sera levée si <code>selecteurs</code> n'est pas une liste de sélecteurs valide.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;article&gt;
  &lt;div id="div-01"&gt;Here is div-01
    &lt;div id="div-02"&gt;Here is div-02
      &lt;div id="div-03"&gt;Here is div-03&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/article&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">var el = document.getElementById('div-03');

var r1 = el.closest("#div-02");
// Renvoie l'élément avec l'identifiant id=div-02

var r2 = el.closest("div div");
// Renvoie le plus proche ancêtre qui est un div
// dans un div. Ici, c'est div-03 lui-même.

var r3 = el.closest("article &gt; div");
// Renvoie le plus proche ancêtre qui est un div
// et dont l'élément parent est article. Ici c'est
// div-01.

var r4 = el.closest(":not(div)");
// Renvoie le plus proche ancêtre qui n'est pas un
// div. Dans ce cas, c'est l'élément article.</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>Pour les navigateurs qui ne prennent pas en charge <code>Element.closest()</code> mais qui permettent d'utiliser <code>element.matches()</code> (ou un équivalent préfixé, à partir d'IE9+), on peut utiliser le polyfill suivant :</p>

<pre class="brush: js">if (!Element.prototype.matches)
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
                                Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest)
    Element.prototype.closest = function(s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null &amp;&amp; el.nodeType == 1);
        return null;
    };</pre>

<p>Cependant, si vous avez besoin de supporter IE 8, vous pouvez utiliser la prothèse suivante qui marchera, mais beaucoup plus lentement. Elle ne supporte que les sélecteurs CSS 2.1 dans IE 8, et peut causer de gros pics de latence dans les sites web :</p>

<pre class="brush: js">if (window.Element &amp;&amp; !Element.prototype.closest) {
  Element.prototype.closest =
  function(s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i,
        el = this;
    do {
      i = matches.length;
      while (--i &gt;= 0 &amp;&amp; matches.item(i) !== el) {};
    } while ((i &lt; 0) &amp;&amp; (el = el.parentElement));
    return el;
  };
}
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-element-closest', 'Element.closest()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Element.closest")}}</p>

<h3 id="Notes_de_compatibilité">Notes de compatibilité</h3>

<ul>
 <li>Dans Edge <code>document.createElement(tagName).closest(tagName)</code> retournera <code>null</code> si l'élément n'est pas attaché au DOM au préalable.</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface {{domxref("Element")}}</li>
 <li><a href="/fr/Apprendre/CSS/Les_bases/Les_sélecteurs">La syntaxe pour les sélecteurs</a></li>
 <li>Autres méthodes utilisant des sélecteurs: {{domxref("element.querySelector()")}} et {{domxref("element.matches()")}}.</li>
</ul>
