---
title: Les tableaux typés en JavaScript
slug: Web/JavaScript/Typed_arrays
tags:
  - Advanced
  - Guide
  - JavaScript
  - Typed Arrays
translation_of: Web/JavaScript/Typed_arrays
original_slug: Web/JavaScript/Tableaux_typés
---
<div>{{JsSidebar("Advanced")}}</div>

<p>Les tableaux typés JavaScript sont des objets semblables à des tableaux qui permettent d'accéder à des données binaires brutes. Pour rappel, les objets {{jsxref("Array")}} qui représentent des tableaux en JavaScript peuvent être agrandis ou réduits dynamiquement et permettent de stocker n'importe quelle valeur JavaScript. Afin que la manipulation de ces objets soit efficace, le moteur JavaScript applique un certain nombre d'optimisations. Cependant, avec les avancées réalisées (telles que les flux audio et vidéo avec WebRTC et les WebSockets), il devient nécessaire de pouvoir manipuler des données binaires brutes au sein de tableaux typés, c'est pour ça que ces objets ont été introduits.</p>

<p>Ne pas confondre les tableaux typés et les tableaux « classiques » ({{jsxref("Array")}}). En effet, la méthode {{jsxref("Array.isArray()")}} renverra <code>false</code> lorsqu'elle sera utilisée sur un tableau typé. De plus, certaines des méthodes des tableaux « classiques » ne sont pas disponibles pour les tableaux typés (par exemple <code>push</code> et <code>pop</code>).</p>

<h2 id="Tampon_de_mémoire_et_vue_l'architecture_des_tableaux_typés">Tampon de mémoire et vue : l'architecture des tableaux typés</h2>

<p>Afin de permettre une meilleure efficacité et une meilleure flexibilité, l'implémentation des tableaux typés JavaScript est séparée entre : les <strong>tampons de mémoire (<em>buffers</em>)</strong> d'une part et <strong>les vues (<em>views</em>)</strong> d'autre part. Un tampon de mémoire, implémenté avec l'objet {{jsxref("ArrayBuffer")}}, est un objet qui représente un fragment de données, il n'a pas de format à proprement parler et n'offre aucune fonctionnalité pour accéder à son contenu. Afin d'accéder à la mémoire contenue dans le tampon, on doit utiliser une vue. Une vue fournit un contexte (c'est-à-dire un type de donnée, un emplacement pour le début de la lecture (<em>offset</em>) et un nombre d'éléments ; c'est ce contexte qui permet de définir le tableau typé.</p>

<p><img alt="Typed arrays in an ArrayBuffer" src="https://mdn.mozillademos.org/files/8629/typed_arrays.png"></p>

<h3 id="ArrayBuffer"><code>ArrayBuffer</code></h3>

<p>Le type {{jsxref("ArrayBuffer")}} est un type de données générique pour représenter un tampon de données de longueur fixe. Le contenu d'un <code>ArrayBuffer</code> ne peut pas être manipulé directement, il faut pour cela créer une vue sous forme d'un tableau typé ou une vue {{jsxref("DataView")}} qui représente le tampon dans un format donné et utiliser cet objet pour lire et écrire du contenu dans le tampon de données.</p>

<h3 id="Les_vues_sous_forme_de_tableaux_typés">Les vues sous forme de tableaux typés</h3>

<p>Les tableaux typés qui sont les vues sur ces tampons de mémoire possèdent des noms explicites correspondant aux types numériques habituels tels que <code>Int8</code>, <code>Uint32</code>, <code>Float64</code> et ainsi de suite. Il existe un type de tableau typé spécial, <code>Uint8ClampedArray</code>. Ce type permet de ramener (<em>clamp</em>) les valeurs observées entre 0 et 255. Cela peut notamment être utilisé pour <a href="/fr/docs/Web/API/ImageData">traiter les données d'un canvas</a> par exemple.</p>

<p>{{page("/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray", "Les_objets_TypedArray")}}</p>

<h3 id="DataView"><code>DataView</code></h3>

<p>Le type {{jsxref("DataView")}} permet de créer des objets qui seront des interfaces (bas niveau) pour lire/écrire des données dans le tampon de mémoire. Cela peut par exemple être utile lorsqu'on souhaite manipuler différents types de données. Les vues sous forme de tableaux typés suivent le même boutisme (endianness) que la plate-forme. Avec un objet <code>DataView</code>, il est possible de définir l'ordre des octets à considérer (qui sera par défaut du grand boutisme (<em>big-endian</em>) mais qui pourra être défini en petit boutisme (<em>little-endian</em>) dans les différentes méthodes d'accès/écriture).</p>

<h2 id="Les_API_Web_utilisant_les_tableaux_typés">Les API Web utilisant les tableaux typés</h2>

<dl>
 <dt><a href="/fr/docs/Web/API/FileReader"><code>FileReader.prototype.readAsArrayBuffer()</code></a></dt>
 <dd>La méthode <code>FileReader.prototype.readAsArrayBuffer()</code> permet de lire le contenu d'un <a href="/fr/docs/Web/API/Blob"><code>Blob</code></a> ou <a href="/fr/docs/Web/API/File"><code>File</code></a> donné.</dd>
 <dt><a href="/fr/docs/Web/API/XMLHttpRequest"><code>XMLHttpRequest.prototype.send()</code></a></dt>
 <dd><code>XMLHttpRequest</code> et sa méthode <code>send()</code> peuvent désormais être utilisées avec un argument qui est un tableau typé ou un {{jsxref("ArrayBuffer")}}.</dd>
 <dt><code><a href="/fr/docs/Web/API/ImageData">ImageData.data</a></code></dt>
 <dd>Un objet du type {{jsxref("Uint8ClampedArray")}} qui représente un tableau unidimensionnel contenant les données de l'image dans l'ordre RGBA, les entiers utilisés sont compris entre <code>0</code> et <code>255</code> (au sens large).</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_les_vues_et_les_tampons">Utiliser les vues et les tampons</h3>

<p>Tout d'abord, il faut créer un tampon (<em>buffer</em>). Ici, on crée un buffer de 16 octets :</p>

<pre class="brush:js">let buffer = new ArrayBuffer(16);
</pre>

<p>Grâce à cette instruction, on dispose désormaits d'un fragment de mémoire dont tous les octets sont pré-initialisés à 0. Si c'est déjà une bonne chose de faite, cela n'a pas grande utilité. On peut déjà confirmer que la longueur du tampon est bien celle spécifiée initialement :</p>

<pre class="brush:js">if (buffer.byteLength === 16) {
  console.log("Oui, il mesure bien 16 octets.");
} else {
  console.log("Non, ce n'est pas la bonne taille !");
}
</pre>

<p>Avant qu'on puisse travailler avec ce tampon, il faut créer une vue. Ici, on crée une vue qui traite le tampon comme un tableau d'entiers signés représentés sur 32 bits :</p>

<pre class="brush:js">let int32View = new Int32Array(buffer);
</pre>

<p>Désormais, on peut accéder aux éléments du tableau typé comme avec un tableau classique :</p>

<pre class="brush:js">for (let i = 0; i &lt; int32View.length; i++) {
  int32View[i] = i * 2;
}
</pre>

<p>Ce fragment de code permet de remplir les 4 éléments du tableau (4 éléments faisant chacun 4 octets, ce qui remplit les 16 octets du tableau) avec les valeurs 0, 2, 4, et 6.</p>

<h3 id="Plusieurs_vues_sur_les_mêmes_données">Plusieurs vues sur les mêmes données</h3>

<p>On commence à avoir des cas d'utilisation intéressants quand on peut créer plusieurs vues sur les mêmes données. Ainsi, en utilisant le code précédent, on peut continuer avec :</p>

<pre class="brush:js">let int16View = new Int16Array(buffer);

for (let i = 0; i &lt; int16View.length; i++) {
  console.log("Élément " + i + " : " + int16View[i]);
}
</pre>

<p>Ici, on crée une vue pour des éléments sur 16 bits qui partage le même tampon que la vue précédente (qui était une vue avec des éléments sur 32 bits) et on affiche les valeurs contenues dans le tampon sous formes d'entiers représentés sur 16 bits. Le résultat obtenu est ici 0, 0, 2, 0, 4, 0, 6, 0.</p>

<p>On peut aller encore plus loin, par exemple :</p>

<pre class="brush:js">int16View[0] = 32;
console.log("L'élément 0 du tableau 32 bits est désormais " + int32View[0]);
</pre>

<p>Le résultat obtenu sera "L'élément 0 du tableau 32 bits est désormais 32". Autrement dit, les deux tableaux typés construits ne sont que des vues sur le même tampon de données. Ce genre de manipulation peut être effectuée avec n'importe quel <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray">type de vue</a>.</p>

<h3 id="Manipuler_des_structures_de_données_complexes">Manipuler des structures de données complexes</h3>

<p>En combinant un même tampon et plusieurs vue de différents types, chacune commençant à un endroit différent dans le tampon, il est possible d'interagir avec des données qui représentent des objets contenant plusieurs types de données. Cela permet entre autres d'intéragir avec des structures de données complexes telles que <a href="/fr/docs/Web/WebGL">WebGL</a>, des fichiers de données, des structures C (notamment avec <a href="/fr/docs/Mozilla/js-ctypes">js-ctypes</a>).</p>

<p>Si on a cette structure C :</p>

<pre class="brush:cpp">struct uneStruct {
  unsigned long id;
  char nom_utilisateur[16];
  float montant;
};</pre>

<p>On peut réceptionner les données d'un tampon qui contiendrait des objets de ce type grâce à:</p>

<pre class="brush:js">let buffer = new ArrayBuffer(24);

// ... on lit les données dans le tampon ...

let vueId = new Uint32Array(buffer, 0, 1);
let vueNomUtilisateur = new Uint8Array(buffer, 4, 16);
let vueMontant = new Float32Array(buffer, 20, 1);</pre>

<p>On peut ensuite accéder au montant lié à un utilisateur, par exemple, avec <code>vueMontant[0]</code>.</p>

<div class="note"><p><strong>Note :</strong> <a href="https://fr.wikipedia.org/wiki/Alignement_en_m%C3%A9moire">L'alignement des structures de données</a> dans une structure C dépend de la plate-forme. Il est donc nécessaire de prendre des précautions quant au format attendu.</p></div>

<h3 id="Convertir_un_tableau_typé_en_un_tableau_normal">Convertir un tableau typé en un tableau normal</h3>

<p>Dans certains cas d'utilisation, après avoir traité un tableau typé, il peut être utile de convertir le tableau typé en un tableau normal ({{jsxref("Array")}}) afin de bénificier des propriétés du prototype d'<code>Array</code>. Pour cela, on peut utiliser la méthode {{jsxref("Array.from")}}. Si <code>Array.from()</code> n'est pas disponible, on peut effectuer cette conversion de la façon suivante :</p>

<pre class="brush:js">let tableauTypé = new Uint8Array([1, 2, 3, 4]),
    tableauNormal = Array.prototype.slice.call(tableauTypé);
tableauNormal.length === 4;
tableauNormal.constructor === Array;
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
   <td>Remplacée par ECMAScript 2015.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-typedarray-objects', 'TypedArray Objects')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale au sein d'un standard ECMA.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-typedarray-objects', 'TypedArray Objects')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Int8Array")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Décoder_encoder_en_base64#Annexe_.3A_D.C3.A9coder_une_cha.C3.AEne_en_base64_en_un_objet_Uint8Array_ou_ArrayBuffer">Manipuler des chaînes encodées en base 64 avec des <code>ArrayBuffer</code>s ou des tableaux typés</a></li>
 <li><a href="/fr/docs/Code_snippets/StringView"><code>StringView</code> – une représentation des chaînes semblable à la réprésentation C, utilisant des tableaux typés</a></li>
 <li><a href="https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays">Manipuler les pixels d'un canvas plus efficacement avec les tableaux typés</a> (en anglais)</li>
 <li><a href="https://www.html5rocks.com/en/tutorials/webgl/typed_arrays">Les tableaux typés : des données binaires arrivent dans le navigateur</a> (en anglais)</li>
 <li>{{Glossary("Boutisme")}}</li>
</ul>
