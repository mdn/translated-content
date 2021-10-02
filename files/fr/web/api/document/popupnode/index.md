---
title: Document.popupNode
slug: Web/API/Document/popupNode
tags:
  - API
  - DOM
  - Document
  - Fenêtre contextuelle
  - Propriétés
  - XUL
translation_of: Web/API/Document/popupNode
---
<div>{{ApiRef("DOM")}}{{deprecated_header}}</div>

<div class="note">
  <p><strong>Note :</strong> À partir de {{Gecko("2.0")}}, les auteurs sont encouragés à utiliser la propriété <a href="/fr/docs/Mozilla/Tech/XUL/menupopup">menupopup </a>triggerNode à la place.</p>
</div>

<p>Quand une fenêtre contextuelle attachée via les attributs <code>popup</code> ou <code>context</code> est ouverte, la propriété <code>popupNode</code> du document XUL est définie sur le noeud sur lequel vous avez cliqué. Il sera la cible de l'événement de souris qui a activé la fenêtre contextuelle. Si elle a été ouverte avec le clavier, le nœud contextuel peut être défini sur null. En règle générale, cette propriété sera vérifiée au cours de la gestion des événements par popupshowing, un menu contextuel pour initialiser le menu basé sur le contexte.</p>

<p>Cette propriété est uniquement définie pour les fenêtres contextuelles attachées via les attributs <code>popup</code> ou <code>context</code>. Pour les autres types, la valeur n'est pas modifiée. Dans ces autres cas, par exemple lors de l'appel de la méthode <a href="/fr/docs/Mozilla/Tech/XUL/M%C3%A9thodes/showPopup">showPopup</a> de la fenêtre contextuelle, vous pouvez définir la propriété <code>popupNode</code> directement au préalable.</p>

<p>Cette propriété s'applique seulement aux documents XUL.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <var>node</var> = <var>document</var>.popupNode;
</pre>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: xml">&lt;menupopup id="toolbarContextMenu"&gt;
  ...
  &lt;menuitem oncommand="mailNewsCore.deleteButton(document.popupNode)"&gt;
  ...
&lt;/menupopup&gt;
</pre>

<p>Voir <a href="http://www.mozilla.org/xpfe/xptoolkit/popups.html">http://www.mozilla.org/xpfe/xptoolkit/popups.html</a></p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Défini dans {{Source("dom/public/idl/xul/nsIDOMXULDocument.idl#48", "nsIDOMXULDocument.idl")}}. méthode spécifique XUL. Ne fait partie d'aucune spécification.</li>
</ul>
