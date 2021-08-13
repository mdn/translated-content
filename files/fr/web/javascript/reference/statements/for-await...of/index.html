---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
tags:
  - Instruction
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Statements/for-await...of
original_slug: Web/JavaScript/Reference/Instructions/for-await...of
---
<div>{{jsSidebar("Statements")}}</div>

<p>L'instruction <strong><code>for await...of</code> </strong>permet de créer une boucle qui parcourt les objets itérables asynchrones de la même façon qu'on parcourt les itérables synchrones (tels que les chaînes de caractères ({{jsxref("String")}}), les tableaux {{jsxref("Array")}}, les objets semblables aux tableaux comme {{jsxref("Fonctions/arguments", "arguments")}} ou {{domxref("NodeList")}}), {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}. Cette instruction invoque un mécanisme d'itération spécifique et les instructions à exécuter pour chaque propriété de l'objet.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">for await (<em>variable</em> of <em>iterable</em>) {
  <em>instruction
</em>}
</pre>

<dl>
 <dt><code>variable</code></dt>
 <dd>À chaque itération, la valeur d'une propriété différente est affectée à <em>variable</em>. Cette variable peut être déclarée avec <code>const</code>, <code>let</code> ou <code>var</code>.</dd>
 <dt><code>iterable</code></dt>
 <dd>Un objet pour lequel on parcourt les propriétés itérables.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Parcourir_des_itérables_asynchrones">Parcourir des itérables asynchrones</h3>

<pre class="brush:js">var asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i &lt; 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      }
    };
  }
};

(async function() {
   for await (let num of asyncIterable) {
     console.log(num);
  }
})();
// 0
// 1
// 2
</pre>

<h3 id="Parcourir_des_générateurs_asynchrones">Parcourir des générateurs asynchrones</h3>

<p>Les générateurs asynchrones implémentent le protocole d'itérateur asynchrone et on peut donc les parcourir avec <code>for await...of</code>:</p>

<pre>async function* asyncGenerator() {
  var i = 0;
  while (i &lt; 3) {
    yield i++;
  }
}

(async function() {
  for await (let num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2</pre>

<p>Pour prendre un exemple plus concret, on peut parcourir les données fournies par une API avec un générateur asynchrone grâce à <code>for await... of</code>. Dans cet exemple, on commence par créer un itérateur asynchrone à partir d'un flux de données puis on utilise cet itérateur et <code>for await...of</code> afin de calculer la taille de la réponse fournie par l'API :</p>

<pre class="brush: js">async function* streamAsyncIterator(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
// On récupère les données d'une URL et
// on calcule la taille de la réponse
// avec un générateur asynchrone
async function getResponseSize(url) {
  const response = await fetch(url);
  // La taille de la réponse, exprimée en octets.
  let responseSize = 0;
  // La boucle for-await-of qui parcourt, de façon asynchrone,
  // chaque portion de la réponse.
  for await (const chunk of streamAsyncIterator(response.body)) {
    responseSize += chunk.length;
  }

  console.log(`Taille de la réponse : ${responseSize} octets`);
  return responseSize;
}
getResponseSize('https://jsonplaceholder.typicode.com/photos');</pre>

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
   <td>{{SpecName('ESDraft', '#sec-for-in-and-for-of-statements', 'ECMAScript Language: The for-in, for-of, and for-await-of Statements')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.for_await_of")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Instructions/for...of")}}</li>
</ul>
