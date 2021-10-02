---
title: style
slug: Web/API/HTMLStyleElement
tags:
  - Référence_du_DOM_Gecko
translation_of: Web/API/HTMLStyleElement
---
<p>{{ ApiRef() }}</p>
<h3 id="Notes">Notes</h3>
<p>Consultez les pages suivantes pour plus d'informations sur certains des objets utilisés pour manipuler les propriétés CSS depuis le DOM :</p>
<ul>
 <li><a href="fr/DOM/element.style">L'objet DOM element.style</a></li>
 <li><a href="fr/DOM/stylesheet">L'objet DOM stylesheet</a></li>
 <li><a href="fr/DOM/cssRule">L'objet DOM cssRule</a></li>
 <li><a href="fr/DOM/CSS">La liste des propriétés DOM CSS</a></li>
</ul>
<h3 id="Informations_.C3.A0_d.C3.A9placer_vers_d.27autres_pages">Informations à déplacer vers d'autres pages</h3>
<p>L'objet basique <code>style</code> explose les interfaces <code>StyleSheet</code> et <code>CSSStyleSheet</code> de la spécification
 <i>
  DOM Level 2 Style</i>
 . Ces interfaces contiennent des membres comme <code>insertRule</code>, <code>selectorText</code>, et <code>parentStyleSheet</code> permettant d'accéder et de manipuler les règles de style individuelles qui constituent une feuille de style CSS.</p>
<p>Pour obtenir les objets <code>style</code> depuis un objet <code>document</code>, il est possible d'utiliser la propriété <code>document.styleSheets</code> et d'accéder aux objets individuels par un index (par exemple, <code>document.styleSheets{{ mediawiki.external(0) }}</code> est la première feuille de style définie pour le document, et ainsi de suite). Bien qu'il existe plusieurs syntaxes pour exprimer les feuilles de style d'un document, les navigateurs basés sur Mozilla gèrent uniquement CSS. Par conséquent, l'objet <code>style</code> récupéré depuis ce tableau implémente à la fois les interfaces StyleSheet et CSSStyleSheet.</p>
<pre class="eval">var ss = document.styleSheets[1];
ss.cssRules[0].style.backgroundColor="blue";
</pre>
<p>La liste des propriétés disponibles dans le DOM pour la propriété de style est donnée dans la <a href="fr/DOM/CSS">liste des propriétés DOM CSS</a>.</p>
<p>La propriété <a href="fr/DOM/style">style</a> de l'élément peut également être utilisée pour obtenir et définir les styles d'un élément. Cependant, cette propriété renvoie uniquement les attributs de style qui ont été définis
 <i>
  in-line</i>
 ou directement sur cet élément à l'aide de <code>element.style.propertyName</code> (par exemple <code>&lt;td style="background-color: lightblue"&gt;</code> renvoie la chaîne "background-color:lightblue", même si d'autres styles peuvent s'appliquer à l'élément depuis une feuille de style).</p>
<p>De plus, lorsque cette propriété est définie sur un élément, elle écrase et efface tout style qui peut avoir été défini ailleurs pour cette propriété particulière de l'élément. Par exemple, définir la propriété <code>border</code> écrasera les réglages définis ailleurs pour la propriété <code>border</code> de cet élément dans la section <code>head</code> du document ou dans des feuilles de style externes. Cependant, cela n'affectera pas les autres déclarations de propriétés pour les styles de cet élément, comme <code>padding</code>, <code>margin</code> ou <code>font</code> par exemple.</p>
<p>Pour changer le style d'un élément particulier, l'exemple suivant peut être adapté :</p>
<pre class="brush: html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;exemple de style simple&lt;/title&gt;

&lt;script type="text/javascript"&gt;

function alterStyle(elem) {
  elem.style.background = 'green';
}

function resetStyle(elemId) {
  elem = document.getElementById(elemId);
  elem.style.background = 'white';
}
&lt;/script&gt;

&lt;style type="text/css"&gt;
#p1 {
 border: solid blue 2px;
}
&lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

&lt;!-- passe une référence à l'objet de l'élément comme paramètre 'this'. --&gt;
&lt;p id="p1" onclick="alterStyle(this)";&gt;
 Cliquez ici pour changer la couleur de fond. &lt;/p&gt;

&lt;!-- passe l'id 'p1' d'un autre style de l'élément à modifier. --&gt;
&lt;button onclick="resetStyle('p1');"&gt;Réinitialiser la couleur de fond&lt;/button&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>La méthode <code>getComputedStyle()</code> de l'objet <code>document.defaultView</code> renvoie tous les styles qui ont finalement été calculés pour un élément. Consultez l'<a href="fr/R%c3%a9f%c3%a9rence_du_DOM_Gecko/Exemples#Exemple_6_:_getComputedStyle">exemple 6 : getComputedStyle</a> dans le chapitre des exemples pour plus d'informations sur l'utilisation de cette méthode.</p>
<h3 id="L.27objet_DOM_style">L'objet DOM style</h3>
<p>L'objet <code>style</code> représente une règle de style individuelle. Contrairement aux règles individuelles disponibles depuis la collection <code><a href="fr/DOM/document.styleSheets">document.styleSheets</a></code>, on accède à l'objet depuis l'objet <code>document</code> ou depuis les éléments auxquels ce style est appliqué. Il représente les styles
 <i>
  in-line</i>
 d'un élément particulier.</p>
<p>Mais il y a plus important que les deux propriétés exposées ici, c'est l'utilisation de l'objet <code>style</code> pour définir des propriétés de style individuelles sur un élément :</p>
<pre>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
  "http://www.w3.org/TR/html4/loose.dtd"&gt;
&lt;html&gt;
 &lt;head&gt;
  &lt;title&gt;style Property Example&lt;/title&gt;
  &lt;link rel="StyleSheet" href="example.css" type="text/css"&gt;
  &lt;script type="text/javascript"&gt;
    function stilo()
    {
      document.getElementById("d").style.color = "orange";
    }
  &lt;/script&gt;
 &lt;/head&gt;

 &lt;body&gt;
  &lt;div id="d" class="thunder"&gt;Thunder&lt;/div&gt;
  &lt;button onclick="stilo()"&gt;ss&lt;/button&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>
<p>Les attributs <b>media</b> et <b>type</b> du style peuvent être donnés ou non. Notez qu'il est également possible de changer les styles d'un élément en obtenant une référence vers cet élément et en utilisant ensuite sa méthode DOM <a href="fr/DOM/element.setAttribute">setAttribute()</a> pour spécifier à la fois la propriété CSS et sa valeur.</p>
<pre class="eval">var el = document.getElementById("un-element");
el.setAttribute("style", "background-color:darkblue;");
</pre>
<p><br>
 Soyez cependant conscient que <code>setAttribute</code> écrasera toute propriété de style qui pourrait déjà avoir été définie dans l'objet style de cet élément. Si l'élément « un-element » ci-dessus avait déjà un attribut indiquant par exemple <code>style="font-size: 18px"</code>, cette valeur serait supprimée par l'utilisation de <code>setAttribute</code>.</p>
<h5 id="Propri.C3.A9t.C3.A9s">Propriétés</h5>
<dl>
 <dt>
  <a href="fr/DOM/style.media">style.media</a></dt>
 <dd>
  spécifie le média de destination pour lequel l'information de style est prévue.</dd>
 <dt>
  <a href="fr/DOM/style.type">style.type</a></dt>
 <dd>
  renvoie le type de style appliqué par cette règle.</dd>
</dl>