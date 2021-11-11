---
title: Les liaisons JavaScript/XSLT
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/JavaScript_XSLT_Bindings
tags:
  - Traduction_à_relire
translation_of: Web/XSLT/XSLT_JS_interface_in_Gecko/JavaScript_XSLT_Bindings
original_slug: Web/XSLT/Interface_XSLT_JS_dans_Gecko/Les_liaisons_JavaScript_XSLT
---
<h2 id="Les_liaisons_JavaScript.2FXSLT">Les liaisons JavaScript/XSLT</h2>

<p>JavaScript peut exécuter des transformations XSLT à travers l'objet <code>XSLTProcessor</code>. Un fois instancié, un <code>XSLTProcessor</code> a une méthode <code>importStylesheet</code> qui prend comme argument la feuille de style XSLT à utiliser pour la transformation. La feuille de style doit être passée comme un document XML, ce qui signifie que le fichier .xsl doit être chargé par la page avant d'appeler <code>importStylesheet</code>. Cela peut être fait par <code>XMLHttpRequest</code> ou par <code>XMLDocument.load</code>.</p>

<p><small><strong>Figure 1 : Instanciation d'un XSLTProcessor</strong></small></p>

<pre>  var xsltProcessor = new XSLTProcessor();

  // Chargement du fichier xsl à l'aide de XMLHttpRequest synchrone
     (le 3° paramètre est défini à false
  var myXMLHTTPRequest = new XMLHttpRequest();
  myXMLHTTPRequest.open("GET", "example.xsl", false);
  myXMLHTTPRequest.send(null);

  var xslRef = myXMLHTTPRequest.responseXML;

  // Importation du .xsl
  xsltProcessor.importStylesheet(xslRef);
</pre>

<p>Pour la transformation réelle, <code>XSLTProcessor</code> requiert un document XML, qui est utilisé en conjonction avec le fichier XSL importé pour produire le résultat final. Le document XML peut être un fichier XML séparé chargé comme sur la figure 1, ou il peut être une partie d'une page existante. Pour traiter une partie du DOM d'une page, il est nécessaire de commencer par créer un document XML en mémoire. Considérons que le DOM à traiter est contenu dans un élément avec l'ID <code>example</code>, que le DOM peut être « cloné » (ou dupliqué) à l'aide de ma méthode <code>importNode</code> du document XML en mémoire. <code>importNode</code> permet le transfert d'un fragment DOM entre différents documents, dans ce cas, depuis un document HTML vers un document XML. Le premier paramètre référence le nœud DOM à dupliquer. En définissant le deuxième paramètre à <code>true</code>, il dupliquera à l'identique tous les descendants (une copie profonde). Le DOM cloné peut alors être facilement inséré dans le document XML à l'aide de <code>appendChild</code>, comme indiqué sur la figure 2.</p>

<p><small><strong>Figure 2 : Création d'un document XML à partir d'un DOM document</strong></small></p>

<pre>  // création d'u nouveau document XML en mémoire
  var xmlRef = document.implementation.createDocument("", "", null);

  // nous voulons déplacer une partie du DOM depuis un document HTML vers un document XML.
  // importNode est utilisée pour cloner les nœuds que nous voulons traiter via XSLT
  // true permet une copie conforme
  var myNode = document.getElementById("example");
  var clonedNode = xmlRef.importNode(myNode, true);

  // Ajout du DOM cloné dans le document XML
  xmlRef.appendChild(clonedNode);
</pre>

<p>Une fois la feuille de style importée, <code>XSLTProcessor</code> doit exécuter deux méthodes pour la transformations réelle, à savoir <code>transformToDocument()</code> et <code>transformToFragment()</code>. <code>transformToDocument()</code> retourne un document XML entier alors que <code>transformToFragment()</code> retourne un fragment de document qui peut être facilement ajouté à un document XML existant. Les deux prennent le document XML comme premier paramètre à transformer. <code> transformToFragment()</code> requiert un second paramètre, à savoir l'objet document qui possédera le fragment généré. Si le fragment généré est inséré dans le document HTML courant, passer document est suffisant.</p>

<p><small><strong>Figure 2.1 : Création d'un document XML à partir d'une chaîne 'soupe XML'</strong></small></p>

<p>Alors que nous pouvons utiliser la méthode <code>loadXML</code> d'Internet Explorer pour charger une chaîne contenant du XML, nous devons faire quelques arrangements pour faire la même chose dans Mozilla. Nous devons utiliser le DomParser.no pour créer un document, car c'est géré par le<em>DomParser</em> .</p>

<pre class="eval">var parser = new DOMParser();
var doc = parser.parseFromString(aStr, "text/xml");
</pre>

<p><small><strong>Figure 3 : Exécution de la transformation</strong></small></p>

<pre class="eval"> var fragment = xsltProcessor.transformToFragment(xmlRef, document);
</pre>
