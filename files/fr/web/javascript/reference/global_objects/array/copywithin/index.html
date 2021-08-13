---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/copyWithin
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>copyWithin()</strong></code> effectue une copie superficielle (<em>shallow copy</em>) d'une partie d'un tableau sur ce même tableau et le renvoie, sans modifier sa taille.</p>

<div>{{EmbedInteractiveExample("pages/js/array-copywithin.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">arr.copyWithin(cible)
arr.copyWithin(cible, début)
arr.copyWithin(cible, début, fin)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>cible</code></dt>
 <dd>
 <p>Indice à partir duquel la séquence sera copiée. Si la valeur est négative, <code>cible </code>sera compté à partir de la fin du tableau.</p>

 <p>Si <code>cible </code>est supérieur ou égal à <code>arr.length</code>, rien ne sera copié. Si <code>cible</code> est positionné apès <code>début</code>, la séquence copiée sera réduite pour correspondre à <code>arr.length</code>.</p>
 </dd>
 <dt><code>début</code> {{optional_inline}}</dt>
 <dd>Indice de début de la séquence a copier. Si la valeur est négative, <code>début</code> sera compté à partir de la fin du tableau. Si <code>début</code> est omis, <code>copyWithin</code> copiera à partir du début du tableau (par défaut 0).</dd>
 <dt><code>fin</code> {{optional_inline}}</dt>
 <dd>Indice de fin de la séquence a copier. <code>copyWithin</code> copie jusqu'à <code>fin</code> (non-inclusif). Si la valeur est négative, <code>end</code> sera compté à partir de la fin du tableau. Si <code>end</code> est omis, <code>copyWithin</code> copiera jusqu'à la fin du tableau (par défaut <code>arr.length</code>).</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le tableau modifié par la méthode.</p>

<h2 id="Description">Description</h2>

<p>La fonction <code>copyWithin()</code> fonctionne de la même façon que <code>memmove</code> en C/C++. C'est une méthode très performante pour décaler les données d'un {{jsxref("Array")}} ou d'un {{jsxref("TypedArray")}} (dans ce cas, on pourra utiliser {{jsxref("TypedArray/copyWithin", "TypedArray.copyWithin()")}}). La séquence est copiée et collée en une opération. La séquence collée aura les valeurs copiées même si les zones de copiage et de collage se chevauchent.</p>

<p>La fonction <code>copyWithin()</code> est intentionnellement générique, il n'est pas nécessaire que <code>this</code> soit un objet {{jsxref("Array", "Array")}}.</p>

<p>De plus, <code>copyWithin()</code> est une méthode qui modifie l'objet courant. Elle ne modifie pas la longueur de <code>this</code>, mais change son contenu et créé de nouvelles propriétés si nécessaire.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]

[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}

// Les tableaux typés ES2015 sont des sous-classes d'Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// Sur les plates-formes qui ne supportent pas encore ES2015 :
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>Cette méthode a été ajoutée à la spécification ECMAScript 6 et peut ne pas être utilisable dans tous les environnements. Voici un fragment de code qui permet d'émuler cette méthode :</p>

<pre class="brush: js">if (!Array.prototype.copyWithin) {
  Object.defineProperty(Array.prototype, 'copyWithin', {
    value: function(target, start/*, end*/) {
    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    var O = Object(this);

    // Steps 3-5.
    var len = O.length &gt;&gt;&gt; 0;

    // Steps 6-8.
    var relativeTarget = target &gt;&gt; 0;

    var to = relativeTarget &lt; 0 ?
      Math.max(len + relativeTarget, 0) :
      Math.min(relativeTarget, len);

    // Steps 9-11.
    var relativeStart = start &gt;&gt; 0;

    var from = relativeStart &lt; 0 ?
      Math.max(len + relativeStart, 0) :
      Math.min(relativeStart, len);

    // Steps 12-14.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end &gt;&gt; 0;

    var final = relativeEnd &lt; 0 ?
      Math.max(len + relativeEnd, 0) :
      Math.min(relativeEnd, len);

    // Step 15.
    var count = Math.min(final - from, len - to);

    // Steps 16-17.
    var direction = 1;

    if (from &lt; to &amp;&amp; to &lt; (from + count)) {
      direction = -1;
      from += count - 1;
      to += count - 1;
    }

    // Step 18.
    while (count &gt; 0) {
      if (from in O) {
        O[to] = O[from];
      } else {
        delete O[to];
      }

      from += direction;
      to += direction;
      count--;
    }

    // Step 19.
    return O;
  },
  configurable: true,
  writable: true
  });
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES2015', '#sec-array.prototype.copywithin', 'Array.prototype.copyWithin')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2016', '#sec-array.prototype.copywithin', 'Array.prototype.copyWithin')}}</td>
   <td>{{Spec2('ES2016')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.copywithin', 'Array.prototype.copyWithin')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.copyWithin")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array", "Array")}}</li>
</ul>
