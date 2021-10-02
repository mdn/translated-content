---
title: Document.createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
tags:
  - API
  - Création
  - DOM
  - Méthodes
  - Noeuds
  - Reference
  - Traitement
  - instructions
translation_of: Web/API/Document/createProcessingInstruction
---
<div>{{APIRef("DOM")}}</div>

<p><code>createProcessingInstruction()</code> crée un nouveau noeud d'instruction de traitement et le renvoie.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="eval"><em>Processing instruction node</em> = document.createProcessingInstruction(target, data)
</pre>

<h3 id="Parameters">Paramètres</h3>

<ul>
 <li><code>Processing Instruction node</code> est un noeud {{domxref("ProcessingInstruction")}}.</li>
 <li><code>target</code> fait référence à la partie cible du noeud d'instructions de traitement (par exemple, &lt;?<em>target</em> ... ?&gt;).</li>
 <li><code>data</code> est une string (<em>chaîne de caractères</em>) contenant les données à ajouter aux données du noeud.</li>
</ul>

<h3 id="Notes">Exceptions</h3>

<dl>
 <dt><code>NOT_SUPPORTED_ERR</code></dt>
 <dd>Lancée si vous tentez de créer un noeud d'instructions de traitement sur un document HTML dans Gecko 9 {{ geckoRelease("9.0") }} ou antérieurs. Dans Gecko 10.0 {{ geckoRelease("10.0") }} et ultérieurs, vous pouvez utiliser cette méthode sur des documents HTML.</dd>
 <dt><code>DOM_INVALID_CHARACTER</code></dt>
 <dd>Lancée si vous essayez d'ajouter une cible d'instruction de traitement invalide (ce devrait être le cas avec le nom XML et toutes les combinaisons des lettres "xml"), ou si la séquence d'instructions de traitement de fermeture ("?&gt;") est ajoutée aux données. Les données fournies par l'utilisateur ne peuvent donc pas être utilisées en toute sécurité sans échappement ou autres moyens de faire face à de telles situations.</dd>
</dl>

<h2 id="Example">Exemple</h2>

<pre>var docu = new DOMParser().parseFromString('&lt;xml&gt;&lt;/xml&gt;',  "application/xml")

var pi = docu.createProcessingInstruction('xml-stylesheet', 'href="mycss.css" type="text/css"');

docu.insertBefore(pi, docu.firstChild);

alert(new XMLSerializer().serializeToString(docu));
// Affiche: &lt;?xml-stylesheet href="mycss.css" type="text/css"?&gt;&lt;xml/&gt;
</pre>

<h2 id="Specification">Spécifications</h2>

<p><a href="http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-document-createprocessinginstruction">DOM 4: createProcessingInstruction</a></p>
