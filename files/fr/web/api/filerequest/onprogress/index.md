---
title: FileRequest.onprogress
slug: Web/API/FileRequest/onprogress
tags:
  - API
  - DOM
  - Fichier
  - Propriétés
translation_of: Web/API/FileRequest/onprogress
---
<p>{{APIRef("File System API")}} {{non-standard_header}}</p>

<p>Cette propriété spécifie une fonction de rappel devant être exécutée de façon répétée pendant que l'opération représentée par un objet  {{ domxref("FileRequest") }} est en cours.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="eval"><em>instanceOfFileRequest</em>.onprogress = <em>function</em>;
</pre>

<p>Où <code><em>instanceOfFileRequest</em></code> est un objet {{ domxref("FileRequest") }} et <code><em>function</em></code> est la fonction JavaScript à exécuter.</p>

<p>Chaque fois que la fonction callback est appelée, elle obtient un objet en tant que premier paramètre. Ces objets contiennent deux propriétés :</p>

<dl>
 <dt><code>loaded</code></dt>
 <dd>Un nombre représentant la quantité actuelle d'octets traités par l'opération.</dd>
 <dt><code>total</code></dt>
 <dd>Un nombre représentant le nombre total d'octets qui seront traités par l'opération.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">// Supposons 'request' qui est un objet FileRequest

request.onprogress = function (status) {
  var progress = document.querySelector('progress');

  progress.value = status.loaded;
  progress.max   = status.total;
}
</pre>

<h2 id="Specification">Spécification</h2>

<p>Ne fait partie d'aucune spécification.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{ domxref("DOMRequest") }}</li>
 <li>{{ domxref("LockedFile") }}</li>
</ul>
