---
title: XMLDocument.load()
slug: Web/API/XMLDocument/load
tags:
  - API
  - DOM
  - Deprecated
  - Experimental
  - Expérimental(2)
  - Method
  - Reference
  - Référence(2)
translation_of: Web/API/XMLDocument/load
---
<p>{{APIRef("DOM")}}</p>

<p><code>document.load()</code> fait partie d'une ancienne version du module W3C <a href="http://www.w3.org/TR/2003/WD-DOM-Level-3-LS-20030619/load-save.html#LS-DocumentLS">DOM Level 3 Load &amp; Save</a>. Elle peut être utilisée avec document.async pour indiquer si la requête est synchrone ou asynchrone (par défaut). À partir d'au moins Gecko 1.9, elle ne prend plus en charge le chargement inter-site de documents (utilisez <a href="/fr/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a> à la place).</p>

<h2 id="Examples">Exemples</h2>

<pre>var docXml = document.implementation.createDocument("", "test", null);

function documentCharge (e) {
  alert(new XMLSerializer().serializeToString(e.target)); // Donne le contenu de querydata.xml comme une chaîne
}

xmlDoc.addEventListener("load", documentCharge, false);
xmlDoc.load('querydata.xml');</pre>

<p>{{Source("content/xml/tests/load/", "Voir aussi l'extrait de chargement")}} dans le dossier de tests XML. (Pour tester cette fonctionnalité, créez les fichiers sur votre disque local ou sur un serveur web, plutôt que de charger le fichier load.html depuis la page générée par LXR, qui servira le fichier text.xml comme HTML.)</p>

<h2 id="Specification">Spécification</h2>

<ul>
 <li><a href="http://www.w3.org/TR/2003/WD-DOM-Level-3-LS-20030619/load-save.html#LS-DocumentLS">Old W3C Working Draft of the DOM Level 3 Load &amp; Save module</a></li>
</ul>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.XMLDocument.load")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Document/async">document.async</a></li>
 <li><a href="/fr/docs/XML_dans_Mozilla">XML dans Mozilla</a></li>
</ul>
