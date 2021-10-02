---
title: window.onload
slug: Web/API/GlobalEventHandlers/onload
tags:
  - Référence_du_DOM_Gecko
translation_of: Web/API/GlobalEventHandlers/onload
---
<p>{{ ApiRef() }}</p>
<h3 id="R.C3.A9sum.C3.A9">Résumé</h3>
<p>Un gestionnaire d'évènement pour l'évènement <code>load</code> (chargement) de la fenêtre.</p>
<h3 id="Syntaxe">Syntaxe</h3>
<pre>window.onload = refFct;
</pre>
<h3 id="Param.C3.A8tres">Paramètres</h3>
<ul>
 <li><code>refFct</code> est une référence à une fonction.</li>
</ul>
<h3 id="Exemple">Exemple</h3>
<pre>window.onload = init;
</pre>
<h3 id="Notes">Notes</h3>
<p>L'évènement <code>load</code> se déclenche à la fin du processus de chargement du document. À ce moment, tous les objets du document sont dans le DOM.</p>
<h3 id="Sp.C3.A9cification">Spécification</h3>
<p>Ne fait partie d'aucune spécification.</p>