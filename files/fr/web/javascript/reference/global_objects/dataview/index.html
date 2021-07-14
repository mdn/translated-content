---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
tags:
  - Constructor
  - DataView
  - JavaScript
  - Reference
  - TypedArray
translation_of: Web/JavaScript/Reference/Global_Objects/DataView
original_slug: Web/JavaScript/Reference/Objets_globaux/DataView
---
<div>{{JSRef}}</div>

<p>La vue <strong><code>DataView</code></strong> fournit une interface de bas niveau pour lire et écrire des données de différents types numériques dans un {{jsxref("ArrayBuffer")}}, quel que soit le « <a href="https://fr.wikipedia.org/wiki/Endianness">boutisme</a> » de la plate-forme.</p>

<div>{{EmbedInteractiveExample("pages/js/dataview-constructor.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">new DataView(buffer [, décalageOctets [, longueurOctets]])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>buffer</code></dt>
 <dd>Un {{jsxref("ArrayBuffer")}} ou {{jsxref("SharedArrayBuffer")}}{{experimental_inline}} existant à utiliser pour la mise en mémoire du nouvel objet <code>DataView</code>.</dd>
 <dt><code>décalageOctets </code>{{optional_inline}}</dt>
 <dd>Le décalage, exprimé en octets, pour trouver le premier octet significatif du buffer à représenter dans la vue. Si ce paramètre n'est pas fourni, la vue commencera au premier octet du buffer.</dd>
 <dt><code>longueurOctets </code>{{optional_inline}}</dt>
 <dd>Le nombre d'éléments dans le tableau d'octets. Si ce paramètre n'est pas fourni, la longueur de la vue correspondra à celle du buffer.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouvel objet <code>DataView</code> représentant le tampon mémoire (<em>buffer</em>) fourni.</p>

<p>L'objet ainsi renvoyé peut être vu comme un interpréteur du tampon mémoire. Cet objet sait comment convertir des nombres afin de lire ou d'écrire des valeurs dans le tampon. C'est la vue qui s'occupe de la gestion des entiers, de la conversion des flottants, du boutisme utilisé et des autres détails de représentation binaire.</p>

<h3 id="Erreurs_renvoyées">Erreurs renvoyées</h3>

<dl>
 <dt><code>{{jsxref("RangeError")}}</code></dt>
 <dd>Renvoyée si les paramètres <code>décalageOctets</code> et <code>longueurOctets</code> dépassent la fin du buffer fourni.</dd>
</dl>

<p>Ainsi, si la taille du tampon mémoire est de 16 octets, que <code>décalageOctets</code>vaut 8 et que <code>longueurOctets</code> vaut 10, cette exception est levée car la vue résultante dépassera de deux octets la longueur totale du tampon mémoire.</p>

<h2 id="Description">Description</h2>

<h3 id="Le_boutisme_(endianness)">Le boutisme (<em>endianness</em>)</h3>

<p>En utilisant cet objet, vous pouvez détecter le type d'architecture qui exécute votre script, ce qui peut être utile dans certains cas. Voici un fragment de code pour permettre cette détection. Voir {{Glossary("Endianness")}} pour plus d'informations.</p>

<pre class="brush: js">var littleEndian = (function() {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /*littleEndian donc */);
  // Int16Array utilise le boutisme de la plate-forme
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true ou false
</pre>

<h3 id="Gestion_des_valeurs_entières_sur_64_bits">Gestion des valeurs entières sur 64 bits</h3>

<p>JavaScript manipule les nombres comme des valeurs sur 32 bits. Aussi, le moteur ne prend pas en charge la gestion des entiers sur 64 bits et on ne peut donc pas manipuler de telles valeurs avec <code>DataView</code>. Afin de contourner ce problème, on peut implémenter une méthode <code>getUint64()</code> afin d'otbenir une valeur avec une précision allant jusqu'à {{jsxref("Number.MAX_SAFE_INTEGER")}}, ce qui peut être suffisant dans certains cas.</p>

<pre class="brush: js">function getUint64(dataview, byteOffset, littleEndian) {
  // on décompose la valeur 64 sur bits en deux nombres 32 bits
  const gauche = dataview.getUint32(byteOffset, littleEndian);
  const droite = dataview.getUint32(byteOffset + 4, littleEndian);

  // on combine les deux valeurs 32 bits
  const combinaison = littleEndian ? gauche + 2**32*droite : 2**32*gauche + droite;
  if(!Number.isSafeInteger(combinaison)){
    console.warn(combinaison, " dépasse MAX_SAFE_INTEGER : perte de précision !");
  }
  return combinaison;
}</pre>

<p>On peut également créer un objet {{jsxref("BigInt")}} si on veut avoir accès à 64 bits :</p>

<pre class="brush: js">function getUin64BigInt(dataview, byteOffset, littleEndian) {
  const left = dataview.getUint32(byteOffset, littleEndian);
  const right = dataview.getUint32(byteOffset, littleEndian);

  const combined = littleEndian ?
    right.toString(16) + left.toString(16).padStart(8, '0') :
    left.toString(16) + right.toString(16).padStart(8, '0');

  return BigInt(`0x${combined}`);
}</pre>

<div class="blockIndicator note">
<p><strong>Note :</strong> Sur le plan des performances, les grands entiers ({{jsxref("BigInt")}} ont une taille variable, aussi leur manipulation sera nécessairement plus lente que celle des nombres stockés sur 32 bits. Ceci étant écrit, les valeurs natives {{jsxref("BigInt")}} seront plus performantes que les implémentations tierces (bibliothèques, etc.).</p>
</div>

<h2 id="Propriétés">Propriétés</h2>

<p>Toutes les instances de <code>DataView</code> héritent de {{jsxref("DataView.prototype")}} qui permet d'ajouter des propriétés à l'ensemble des objets <code>DataView</code>.</p>

<p>{{page("fr/Web/JavaScript/Reference/Objets_globaux/DataView/prototype","Propriétés")}}</p>

<h2 id="Méthodes">Méthodes</h2>

<p>{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/DataView/prototype','Méthodes')}}</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var buffer = new ArrayBuffer(16);
var dv = new DataView(buffer, 0);

dv.setInt16(1, 42);
dv.getInt16(1); //42
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('Typed Array')}}</td>
   <td>{{Spec2('Typed Array')}}</td>
   <td>Remplacée par ECMAScript 6</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-dataview-constructor', 'DataView')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale au sein d'un standard ECMA.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-dataview-constructor', 'DataView')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.DataView")}}</p>

<h3 id="Notes_de_compatibilité">Notes de compatibilité</h3>

<p>A partir de Firefox 40 {{geckoRelease(40)}}, <code>DataView</code> doit êre construit avec l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Si on invoque <code>DataView()</code> sans utiliser <code>new</code>, cela lèvera une exception {{jsxref("TypeError")}}.</p>

<pre class="brush: js example-bad">var dv = DataView(buffer, 0);
// TypeError: calling a builtin DataView constructor without new is forbidden</pre>

<pre class="brush: js example-good">var dv = new DataView(buffer, 0);</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a class="link-https" href="https://github.com/jDataView/jDataView">jDataView</a> : une bibliothèque JavaScrit qui ajoute des prothèses et des extensions à l'API <code>DataView</code> afin de pouvoir la manipuler au travers des différents navigateurs et de Node.js.</li>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li>{{jsxref("SharedArrayBuffer")}}</li>
</ul>
