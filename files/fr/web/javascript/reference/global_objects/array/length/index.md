---
title: Array.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/Array/length
tags:
  - Array
  - JavaScript
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/length
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/length
---
<div>{{JSRef}}</div>

<p>La propriété <code><strong>length</strong></code> (longueur) est un entier non-signé de 32 bits qui indique le nombre d'éléments présents dans le tableau. Elle est toujours supérieure au plus grand indice du tableau.</p>

<div>{{EmbedInteractiveExample("pages/js/array-length.html")}}</div>



<h2 id="Description">Description</h2>

<p>La valeur de la propriété <code>length</code> est un entier de signe positif dont la valeur est inférieure à 2 à la puissance 32 (2^32).</p>

<pre class="brush: js notranslate">var tableauA = new Array(4294967296); // 2 à la puissance 32 = 4294967296
var tableauC = new Array(-100) // une valeur négative

console.log(tableauA.length); // RangeError: Invalid array length
console.log(tableauC.length); // RangeError: Invalid array length

var tableauB = [];
tableauB.length = Math.pow(2,32)-1; // On déclare une longueur inférieure à 2 puissance 32
console.log(tableauB.length); // 4294967295
</pre>

<p>Vous pouvez modifier la propriété <code>length</code> d'un tableau à loisir pour le tronquer. Quand vous étendez un tableau en modifiant la valeur de sa propriété <code>length</code>, le nombre d'éléments réellement présents dans ce tableau n'augmente pas : par exemple, si vous affectez la valeur 3 à la propriété <code>length</code> d'un tableau alors qu'elle vaut 2, le tableau contiendra toujours seulement 2 éléments. La troisième « case » ne sera pas itérable. De ce fait, la propriété <code>length</code> d'un tableau ne renseigne en rien sur le nombre de valeurs définies dans le tableau. Voir aussi <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array#Relation_entre_length_et_les_propri.C3.A9t.C3.A9s_num.C3.A9riques">la relation entre longueur et propriétés numériques</a>.</p>

<pre class="brush: js notranslate">const arr = [1, 2, 3];
console.table(arr);
// [1, 2]

arr.length = 5; // On définit une longueur à 5
console.table(arr);
// [1, 2, &lt;3 éléments vides&gt;]

arr.forEach(element =&gt; console.log(element));
// 1
// 2
</pre>

<p>{{js_property_attributes(1,0,0)}}</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Renvoyer_la_longueur_dun_tableau">Renvoyer la longueur d'un tableau</h3>

<pre class="brush: js notranslate">var items = ["chaise", "bureau", "table", "sac"];
items.length; // 4
</pre>

<h3 id="Parcourir_un_tableau">Parcourir un tableau</h3>

<p>Dans l'exemple suivant, on itère sur le tableau <code>nombres</code> en utilisant la propriété <code>length</code> afin de connaître son nombre d'élément. La valeur de chaque élément est ensuite multipliée par deux :</p>

<pre class="brush:js notranslate">var nombres = [1,2,3,4,5];

for (var i = 0; i &lt; nombres.length; i++) {
  nombres[i] *= 2;
}
// nombres vaut maintenant [2,4,6,8,10];
</pre>

<h3 id="Tronquer_un_tableau">Tronquer un tableau</h3>

<p>L'exemple suivant raccourcit le tableau <code>etatsUS</code> à 50 si sa longueur actuelle est supérieure à 50.</p>

<pre class="brush:js notranslate">if (etatsUS.length &gt; 50) {
   etatsUS.length = 50;
}</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.5.2', 'Array.length')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-properties-of-array-instances-length', 'Array.length')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-properties-of-array-instances-length', 'Array.length')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.length")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array")}}</li>
</ul>
