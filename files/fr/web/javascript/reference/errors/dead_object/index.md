---
title: 'TypeError: can''t access dead object'
slug: Web/JavaScript/Reference/Errors/Dead_object
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Dead_object
original_slug: Web/JavaScript/Reference/Erreurs/Dead_object
---
<div>{{JSSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: can't access dead object
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Afin d'améliorer l'utilisation de la mémoire et de prévenir les fuites mémoire, Firefox empêche les modules complémentaires de conserver des références fortes vers les objets du DOM après que leur document parent a été détruit. Un objet mort (<em>dead</em>) est un objet qui contient une référence forte vers un éléments du DOM, même après que celui-ci a été détruit dans le DOM. Pour éviter ces problèmes, les références aux objets du DOM d'un document étranger devraient être enregistrées dans un objet spécifique à ce document et être nettoyées lors de la suppression du document. On peut également utiliser les objets qui permettent d'enregistrer <a href="/fr/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.getWeakReference">des références faibles</a>.</p>

<h2 id="Vérifier_si_un_objet_est_mort">Vérifier si un objet est mort</h2>

<p><code><a href="/fr/docs/Components.utils">Components.utils</a></code> fournit une méthode <code>isDeadWrapper()</code> qui peut être utilisée par du code privilégié :</p>

<pre class="brush: js">if (Components.utils.isDeadWrapper(window)) {
  // dead
}</pre>

<p>Du code sans privilège ne pourra pas accéder à <code>Component.utils</code> et pourra simplement intercepter l'exception :</p>

<pre class="brush: js">try {
  String(window);
}
catch (e) {
  console.log("window est problablement mort ");
}</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://blog.mozilla.org/addons/2012/09/12/what-does-cant-access-dead-object-mean/">Que signifie “can’t access dead object” ? (en anglais)</a></li>
 <li><a href="/fr/docs/Extensions/Common_causes_of_memory_leaks_in_extensions">Les causes principales des fuites mémoire dans les extensions</a></li>
 <li><code><a href="/fr/docs/Components.utils">Components.utils</a></code></li>
 <li><a href="/en-US/docs/Mozilla/Zombie_compartments#Zombie_compartments">Compartiments zombies</a></li>
</ul>
