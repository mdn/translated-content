---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
tags:
  - Constructeur
  - JavaScript
  - Mémoire partagée
  - Reference
  - SharedArrayBuffer
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
original_slug: Web/JavaScript/Reference/Objets_globaux/SharedArrayBuffer
---
<div>{{JSRef}}</div>

<p>L'objet <strong><code>SharedArrayBuffer</code></strong> est utilisé afin de représenter un tampon de données binaires brutes générique de longueur fixe. Il est semblable à l'objet {{jsxref("ArrayBuffer")}} mais peut ici être utilisé pour créer différentes vues sur une même mémoire partagée. À la différence d'un <code>ArrayBuffer</code>, un <code>SharedArrayBuffer</code> ne peut pas être détaché.</p>

<div class="note">
<p><strong>Note :</strong> L'objet <code>SharedArrayBuffer</code> a été désactivé le 5 janvier 2018 par défaut pour l'ensemble des principaux navigateurs afin de réduire <a href="https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/">les failles Meltdown et Spectre</a>. <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=821270">Chrome a réactivé cet objet avec la version 67</a> pour les plateformes sur lesquelles des fonctionnalités sont présentes pour protéger des vulnérabilités telles que Spectre (« <em>site-isolation feature</em> »)</p>
</div>

<div>{{EmbedInteractiveExample("pages/js/sharedarraybuffer-constructor.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>


<pre class="syntaxbox">new SharedArrayBuffer([<var>length</var>])
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>longueur</code></dt>
 <dd>La taille, exprimée en octets, du tampon (<em>buffer</em>) de données qu'on souhaite créer.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouvel objet <code>SharedArrayBuffer</code> de la taille donnée, dont les éléments sont initialisés à 0.</p>

<h2 id="Description">Description</h2>

<h3 id="Allouer_et_partager_la_mémoire">Allouer et partager la mémoire</h3>

<p>Pour partager une zone mémoire entre plusieurs objets {{jsxref("SharedArrayBuffer")}} d'un agent à un autre (ici un agent correspond au programme principal de la page web ou à l'un de ses <em>web workers</em>), on utilise <code><a href="/fr/docs/Web/API/Worker/postMessage">postMessage</a></code> et <a href="/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">le clonage structuré</a>.</p>

<p>L'algorithme de clonage structuré permet d'envoyer des objets <code>SharedArrayBuffers</code> et <code>TypedArrays</code> vers <code>SharedArrayBuffers</code>. Dans les deux cas, l'objet <code>SharedArrayBuffer</code> est transmis au récepteur, ce qui crée un nouvel objet <code>SharedArrayBuffer</code>, privé, au sein de l'agent qui reçoit (comme avec  {{jsxref("ArrayBuffer")}}). Cependant, le bloc de mémoire référencé par les deux objets <code>Shared</code><code>ArrayBuffer</code> est bien le même bloc. Aussi, si un agent interagit avec cette zone, l'autre agent pourra voir les modifications.</p>

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
</pre>

<h3 id="Mettre_à_jour_et_synchroniser_la_mémoire_partagée_avec_les_opérations_atomiques">Mettre à jour et synchroniser la mémoire partagée avec les opérations atomiques</h3>

<p>La mémoire partagée peut être créée et mise à jour de façon simultanée entre les <em>workers</em> et le <em>thread</em> d'exécution principal. Selon le système (le processeur, le système d'exploitation, le navigateur), cela peut prendre du temps avant que le changement soit propagé sur l'ensemble des contextes. Pour que la synchronisation s'effectue, on doit utiliser les opérations {{jsxref("Atomics", "atomiques", "", 1)}}.</p>

<h3 id="Les_API_qui_utilisent_des_objets_SharedArrayBuffer">Les API qui utilisent des objets <code>SharedArrayBuffer</code></h3>

<ul>
 <li>{{domxref("WebGLRenderingContext.bufferData()")}}</li>
 <li>{{domxref("WebGLRenderingContext.bufferSubData()")}}</li>
 <li>{{domxref("WebGL2RenderingContext.getBufferSubData()")}}</li>
</ul>

<h3 id="Obligation_d'utiliser_l'opérateur_new">Obligation d'utiliser l'opérateur <code>new</code></h3>

<p>Les constructeurs <code>SharedArrayBuffer</code> doivent être utilisés avec l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Si on appelle un constructeur <code>SharedArrayBuffer</code> comme une fonction, sans <code>new</code>, cela lèvera une exception {{jsxref("TypeError")}}.</p>

<pre class="brush: js example-bad">var sab = SharedArrayBuffer(1024);
// TypeError: appeler le constructeur natif SharedArrayBuffer sans
// new est interdit</pre>

<pre class="brush: js example-good">var sab = new SharedArrayBuffer(1024);</pre>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt><code>SharedArrayBuffer.length</code></dt>
 <dd>La propriété de longueur pour le constructeur <code>SharedArrayBuffer</code> dont la valeur est 1.</dd>
 <dt>{{jsxref("SharedArrayBuffer.prototype")}}</dt>
 <dd>Le prototype permet d'ajouter des propriétés à l'ensemble des objets <code>SharedArrayBuffer</code>.</dd>
</dl>

<h2 id="Le_prototype_de_SharedArrayBuffer">Le prototype de <code>SharedArrayBuffer</code></h2>

<p>Toutes les instances de <code>SharedArrayBuffer</code> héritent de {{jsxref("SharedArrayBuffer.prototype")}}.</p>

<h3 id="Propriétés_2">Propriétés</h3>

<p>{{page('fr/Web/JavaScript/Reference/Objets_globaux/SharedArrayBuffer/prototype','Propriétés')}}</p>

<h3 id="Méthodes">Méthodes</h3>

<p>{{page('fr/Web/JavaScript/Reference/Objets_globaux/SharedArrayBuffer/prototype','Méthodes')}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-sharedarraybuffer-objects', 'SharedArrayBuffer')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES8', '#sec-sharedarraybuffer-objects', 'SharedArrayBuffer')}}</td>
   <td>{{Spec2('ES8')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.SharedArrayBuffer")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Atomics")}}</li>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Tableaux_typés">Les tableaux typés en JavaScript</a></li>
 <li><a href="/fr/docs/Web/API/Web_Workers_API">Web Workers</a></li>
 <li><a href="https://github.com/lars-t-hansen/parlib-simple">parlib-simple </a>– un bibliothèque simple qui fournit des abstractions pour synchroniser et distribuer des tâches</li>
 <li><a href="https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md">La mémoire partagée – un rapide tutoriel</a></li>
 <li><a href="https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/">A Taste of JavaScript’s New Parallel Primitives – Mozilla Hacks (en anglais)</a></li>
</ul>
