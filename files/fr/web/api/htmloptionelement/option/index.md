---
title: Option()
slug: Web/API/HTMLOptionElement/Option
tags:
  - API
  - Constructeur
  - HTML DOM
  - HTMLOptionElement
translation_of: Web/API/HTMLOptionElement/Option
---
<div>{{APIRef("HTML DOM")}}</div>

<p>Le constructeur <strong><code>Option()</code></strong> permet de créer un nouvel objet {{domxref("HTMLOptionElement")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>o</em><em>ptionElementReference</em> = new Option(<em>text</em>, <em>value</em>, <em>defaultSelected</em>, <em>selected</em>);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>text</code> {{optional_inline}}</dt>
 <dd>Une chaîne de caractères {{domxref("DOMString")}} représentant le contenu de l'élément, c'est-à-dire le texte affiché. Si cet argument n'est pas spécifié, c'est la chaîne vide qui sera utilisée.</dd>
 <dt><code>value</code> {{optional_inline}}</dt>
 <dd>Une chaîne de caractères {{domxref("DOMString")}} représentant la valeur de {{domxref("HTMLOptionElement")}}, c’est-à-dire l’attribut HTML <code>value</code> de l'élément {{htmlelement("option")}}. Si cet argument n'est pas fourni, ce sera la valeur de <code>text</code> qui sera reprise comme valeur (par exemple pour l'élément {{htmlelement("select")}} associé lorsque le formulaire est envoyé au serveur).</dd>
 <dt><code>defaultSelected</code> {{optional_inline}}</dt>
 <dd>Un {{domxref("Boolean")}} qui définit la valeur de l'attribut {{htmlattrxref("selected", "option")}}, c'est-à-dire que cette {{htmlelement("option")}} sera la valeur par défaut sélectionné dans l'élément {{htmlelement("select")}} lors du premier chargement de la page. S'il n'est pas spécifié, la valeur <code>false</code> sera utilisée par défaut.</dd>
 <dt><code>selected</code> {{optional_inline}}</dt>
 <dd>Un {{domxref("Boolean")}} qui définit l'état sélectionné de l'option, la valeur par défaut est <code>false</code> (non sélectionné). Si cet argument est absent et même si l'argument <code>defaultSelected</code> vaut <code>true</code>, l'option ne sera pas pas sélectionnée.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Ajouter_de_nouvelles_options">Ajouter de nouvelles options</h3>

<pre class="brush: js">/* Imaginons qu'on ait le code HTML suivant dans le document
&lt;select id='s'&gt;

&lt;/select&gt;
*/

var s = document.getElementById('s');
var options = [Quatre, Cinq, Six];

options.forEach(function(element,key) {
    s[key] = new Option(element,key);
});
</pre>

<h3 id="Ajouter_des_options_avec_différents_paramètres">Ajouter des options avec différents paramètres</h3>

<pre class="brush: js">/* Imaginons qu'ont ait le code HTML suivant dans le document
&lt;select id="s"&gt;
  &lt;option&gt;Premier&lt;/option&gt;
  &lt;option&gt;Deuxième&lt;/option&gt;
  &lt;option&gt;Troisième&lt;/option&gt;
&lt;/select&gt;
*/

var s = document.getElementById('s');
var options = [ 'zéro', 'un', 'deux' ];

options.forEach(function(element, key) {
  if (element == 'zéro') {
    s[s.options.length] = new Option(element, s.options.length, false, false);
  }
  if (element == 'un') {
    s[s.options.length] = new Option(element, s.options.length, true, false); // Ajouter l'attribut "selected"
  }
  if (element == 'deux') {
    s[s.options.length] = new Option(element, s.options.length, false, true); // Sélectionnera l'option
  }
});

/* Résultat dans le DOM / HTML modifié :
&lt;select id="s"&gt;
  &lt;option value="0"&gt;zéro&lt;/option&gt;
  &lt;option value="1" selected=""&gt;un&lt;/option&gt;
  &lt;option value="2"&gt;deux&lt;/option&gt; // L'utilisateur verra cette option sélectionnée
&lt;/select&gt;
*/</pre>

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
   <td><a href="http://www.w3.org/TR/2012/WD-html5-20121025/the-option-element.html#dom-option">HTML5 La définition de Option dans cette spécification.</a></td>
   <td>Recommendation</td>
   <td></td>
  </tr>
 </tbody>
</table>
