---
title: Document.createExpression()
slug: Web/API/Document/createExpression
tags:
  - API
  - DOM
  - Méthode
  - XPath
translation_of: Web/API/Document/createExpression
---
<p>{{ ApiRef("DOM") }}</p>

<p>Cette méthode compile une <code><a href="/fr/docs/Web/API/XPathExpression">XPathExpression</a></code> qui peut ensuite être utilisée pour des évaluations (répétées).</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="eval"><em>xpathExpr</em> = <em>document</em>.createExpression(<em>xpathText</em>, <em>namespaceURLMapper</em>);
</pre>

<h3 id="Arguments">Paramètres</h3>

<ul>
 <li>String (<em>chaîne de caractères</em>) <code>xpathText</code> (l'expression XPath à compiler)</li>
 <li>Fonction <code>namespaceURLMapper</code> (mappe un préfixe d'espace de noms à une URL d'espace de noms (ou null si aucun n'est nécessaire)).</li>
</ul>

<p>{{ Fx_minversion_note(3, "Avant Firefox 3, vous pouviez appeler cette méthode sur des documents autres que celui que vous aviez prévu d'exécuter avec XPath. Sous Firefox 3, vous devez l'appeler sur le même document.") }}</p>

<h3 id="Return">Valeur retournée</h3>

<p><a href="/fr/docs/Web/API/XPathExpression">XPathExpression</a></p>
