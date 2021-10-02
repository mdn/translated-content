---
title: DOMImplementation.createHTMLDocument()
slug: Web/API/DOMImplementation/createHTMLDocument
tags:
  - API
  - DOM
  - DOM Référence(2)
  - DOM implémentation
  - Expérimental(2)
  - Méthode
  - Référence(2)
translation_of: Web/API/DOMImplementation/createHTMLDocument
---
<p>{{ApiRef("DOM")}}{{SeeCompatTable}}</p>

<p>La méthode <strong><code>DOMImplementation.createHTMLDocument()</code></strong>  crée un nouveau {{domxref("Document")}} HTML.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>newDoc</em> = document.implementation.createHTMLDocument(<em>titre</em>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><em>title</em>  {{optional_inline}}  (excepté dans IE)</dt>
 <dd>C'est une {{domxref("DOMString")}} qui contient le titre à donner au nouveau document HTML.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<p>Dans cet exemple, on crée un nouveau document HTML que l'on insère dans un {{HTMLElement("iframe")}} dans le document courant.</p>

<p>Ci-dessous, le code HTML pour cet exemple:</p>

<pre class="brush: html">&lt;body&gt;
  &lt;p&gt;Cliquez &lt;a href="javascript:makeDocument()"&gt;ici&lt;/a&gt; pour créer un nouveau document et l'insérer au dessous.&lt;/p&gt;
  &lt;iframe id="laFrame" src="about:blank" /&gt;
&lt;/body&gt;
</pre>

<p>L'implémentation en JavaScript de la méthode <code>makeDocument()</code>:</p>

<pre class="brush: js">function makeDocument() {
  var frame = document.getElementById("laFrame");

  var doc = document.implementation.createHTMLDocument("Nouveau Document");
  var p = doc.createElement("p");
  p.innerHTML = "Ceci est un nouveau paragraphe.";

  try {
    doc.body.appendChild(p);
  } catch(e) {
    console.log(e);
  }

  // Copie le nouveau document HTML dans la frame

  var destDocument = frame.contentDocument;
  var srcNode = doc.documentElement;
  var newNode = destDocument.importNode(srcNode, true);

  destDocument.replaceChild(newNode, destDocument.documentElement);
}
</pre>

<p>Le code des lignes 4 à 12 permet la création du nouveau document HTML et l'insertion de contenu dans ce dernier. La ligne 4 utilise la méthode <code>createHTMLDocument()</code> pour construire le nouveau document HTML et définir son {{ HTMLElement("title") }} comme "Nouveau Document". Dans les lignes 5 et 6, est créé un nouvel élément paragraphe avec un simple contenu, enfin, les lignes 8 à 12 permettent l'insertion de ce nouveau paragraphe dans le nouveau document.</p>

<p>La ligne 16 récupère le <code>contentDocument</code> <em>(contenu du document)</em> du cadre ; c'est le document dans lequel nous allons injecter le nouveau contenu. Les deux lignes suivantes permettent d'importer le contenu du nouveau document dans le nouveau contexte du document. Pour finir, la ligne 20 remplace le contenu du cadre par le contenu du nouveau document.</p>

<p><a href="/samples/domref/createHTMLDocument.html">Voir l'exemple sur une page</a></p>

<p>Le document retourné est préconstruit avec le code HTML suivant :</p>

<pre class="brush: html">&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;titre&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;
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
   <td>{{SpecName('DOM WHATWG', '#dom-domimplementation-createhtmldocument', 'DOMImplementation.createHTMLDocument')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Première définition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.DOMImplementation.createHTMLDocument")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface {{domxref("DOMImplementation")}}.</li>
</ul>
