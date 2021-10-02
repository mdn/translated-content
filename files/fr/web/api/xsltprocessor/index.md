---
title: XSLTProcessor
slug: Web/API/XSLTProcessor
tags:
  - API
  - DOM
  - DOM Reference
  - Reference
  - TopicStub
  - XSLT
translation_of: Web/API/XSLTProcessor
---
<div>{{APIRef("XSLT")}}</div>

<p>Un <strong><code>XSLTProcessor</code></strong> applique une transformation de feuille de style <a href="/en-US/docs/Web/XSLT">XSLT</a> à un document XML pour générer un nouveau document XML. Il fait appel à des méthodes pour charger la feuille de style XSLT, donner des valeurs aux paramètres <code>&lt;xsl:param&gt;</code> et pour appliquer les transformations au document.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Le constructeur n'a pas de paramètre.</p>

<pre class="syntaxbox">new XSLTProcessor()</pre>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt><code><a href="/en-US/docs/Mozilla/WebIDL_bindings#Throws">[Throws]</a> void </code>{{domxref("XSLTProcessor.importStylesheet")}}<code>(</code>{{domxref("Node")}}<code> styleSheet)</code></dt>
 <dd>Importe une feuille de style XSLT. Si le nœud passé en argument est un nœud de document, vous pouvez passer une transformation XSL complète ou un <a href="http://www.w3.org/TR/xslt#result-element-stylesheet">transformation d'élèment résultant</a>; sinon, il doit s'agir d'un élèment <code>&lt;xsl:stylesheet&gt;</code> ou <code>&lt;xsl:transform&gt;</code>.</dd>
 <dt><code><a href="/en-US/docs/Mozilla/WebIDL_bindings#Throws">[Throws]</a> </code>{{domxref("DocumentFragment")}} {{domxref("XSLTProcessor.transformToFragment")}}<code>(</code>{{domxref("Node")}}<code> source, </code>{{domxref("Document")}}<code> owner)</code></dt>
 <dd>Transforme la source du nœud en applicant la fonction {{domxref("XSLTProcessor.importStylesheet()")}}. Le document propriétaire du fragment de document résultant est le nœud propriétaire.</dd>
 <dt><code><a href="/en-US/docs/Mozilla/WebIDL_bindings#Throws">[Throws]</a></code> {{domxref("Document")}} {{domxref("XSLTProcessor.transformToDocument")}}<code>(</code>{{domxref("Node")}}<code> source)</code></dt>
 <dd>
 <p>Transforme la source du nœud en appliquant la feuille de style donnée lors de l'importation à l'aide de la fonction {{domxref ("XSLTProcessor.importStylesheet ()")}}.</p>

 <p>L'objet résultant dépend de la <a href="http://www.w3.org/TR/xslt#output">méthode de sortie</a> de la feuille de style :</p>

 <table class="standard-table">
  <thead>
   <tr>
    <th scope="col">Méthode de sortie</th>
    <th scope="col">Type de résultat</th>
   </tr>
  </thead>
  <tbody>
   <tr>
    <td><code>html</code></td>
    <td>{{domxref("HTMLDocument")}}</td>
   </tr>
   <tr>
    <td><code>xml</code></td>
    <td>{{domxref("XMLDocument")}}</td>
   </tr>
   <tr>
    <td><code>text</code></td>
    <td>{{domxref("XMLDocument")}} avec un seul élèment racine <code>&lt;transformiix:result&gt;</code> avec le texte comme enfant</td>
   </tr>
  </tbody>
 </table>
 </dd>
 <dt><code><a href="/en-US/docs/Mozilla/WebIDL_bindings#Throws">[Throws]</a> void </code>{{domxref("XSLTProcessor.setParameter")}}<code>(</code>{{jsxref("String")}}<code> namespaceURI, </code>{{jsxref("String")}}<code> localName, any value)</code></dt>
 <dd>Définit un paramètre dans la feuille de style XSLT qui a été importée. (Définit la valeur d'un <code>&lt;xsl:param&gt;</code>.) Une valeur nulle pour <code>namespaceURI</code> sera traitée comme une chaîne vide.</dd>
 <dt><code><a href="/en-US/docs/Mozilla/WebIDL_bindings#Throws">[Throws]</a> any </code>{{domxref("XSLTProcessor.getParameter")}}<code>(</code>{{jsxref("String")}}<code> namespaceURI, </code>{{jsxref("String")}}<code> localName)</code></dt>
 <dd>Récupére un paramètre de la feuille de style XSLT. Une valeur nulle pour <code>namespaceURI</code> sera traitée comme une chaîne vide.</dd>
 <dt><code><a href="/en-US/docs/Mozilla/WebIDL_bindings#Throws">[Throws]</a> void </code>{{domxref("XSLTProcessor.removeParameter")}}<code>(</code>{{jsxref("String")}}<code> namespaceURI, </code>{{jsxref("String")}}<code> localName)</code></dt>
 <dd>Supprime le paramètre s'il a déjà été défni. Le <code>XSLTProcessor</code> utilisera alors la valeur par défaut du paramètre. Si une valeur nulle est donnée pour <code>namespaceURI</code>, elle sera traitée comme une chaîne vide.</dd>
 <dt><code>void </code>{{domxref("XSLTProcessor.clearParameters()")}}</dt>
 <dd>Supprime tous les paramètres définis dans le <code>XSLTProcessor</code>. Le <code>XSLTProcessor</code> utilisera alors les valeurs par défaut spécifiées dans la feuille de style XSLT.</dd>
 <dt><code>void </code>{{domxref("XSLTProcessor.reset()")}}</dt>
 <dd>Supprime tous les paramétres et feuilles de style du <code>XSLTProcessor</code>.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<h3 id="Propriétés_non-apparentes_au_Web">Propriétés non-apparentes au Web</h3>

<p>Les propriétés suivantes sont <a href="/en-US/docs/Mozilla/WebIDL_bindings#ChromeOnly"><code>[ChromeOnly]</code></a> et ne sont pas apparentes au contenu Web :</p>

<dl>
 <dt><code><a href="/en-US/docs/Mozilla/WebIDL_bindings#ChromeOnly">[ChromeOnly]</a> attribute unsigned long </code>{{domxref("XSLTProcessor.flags")}}</dt>
 <dd>
 <p>Drapeaux qui modifient le comportement du processeur. Pas de réinitialisation en appelant {{domxref("XSLTProcessor.reset()")}}. Valeur par défaut: <code>0</code></p>

 <p>Possible values are:</p>

 <table class="standard-table">
  <thead>
   <tr>
    <th scope="col">Nom</th>
    <th scope="col">Valeur</th>
    <th scope="col">Effet</th>
   </tr>
  </thead>
  <tbody>
   <tr>
    <td>(None)</td>
    <td><code>0</code></td>
    <td>Aucun</td>
   </tr>
   <tr>
    <td><code>DISABLE_ALL_LOADS</code></td>
    <td><code>1</code></td>
    <td>Désactiver le chargement de documents externes (par ex. <code>&lt;xsl:import&gt;</code> et <code>document()</code>)</td>
   </tr>
  </tbody>
 </table>
 </dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<ol>
 <li><a href="/fr-FR/docs/XSLT/XSLT_JS_Interface_in_Gecko/Basic_Example">Exemple simple</a></li>
 <li><a href="/fr-FR/docs/XSLT/XSLT_JS_Interface_in_Gecko/Advanced_Example">Exemple avancé</a></li>
 <li><a href="/fr-FR/docs/XSLT/XSLT_JS_Interface_in_Gecko/JavaScript_XSLT_Bindings">Exemple additionnel</a></li>
</ol>

<h2 id="Spécifications">Spécifications</h2>

<p><em>Ne fait partie d'aucune spécification.</em> Il s'agit d'une interface propriétaire qui provient de Gecko.</p>

<h2 id="Gecko_IDL">Gecko IDL</h2>

<ul>
 <li><code>{{ Source("dom/webidl/XSLTProcessor.webidl", "XSLTProcessor.webidl") }}</code></li>
 <li><code>{{ Source("dom/xslt/nsIXSLTProcessor.idl", "nsIXSLTProcessor.idl") }}</code></li>
</ul>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.XSLTProcessor")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr-FR/docs/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations">Utilisation de l'interface JavaScript de Mozilla pour les transformations XML</a></li>
</ul>
