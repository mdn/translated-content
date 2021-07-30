---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
tags:
  - ECMAScript 5
  - JavaScript
  - Méthode
  - Object
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/defineProperties
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Object.defineProperties()</strong></code> permet de définir ou de modifier les propriétés d'un objet directement sur celui-ci. La valeur renvoyée est l'objet modifié.</p>

<div>{{EmbedInteractiveExample("pages/js/object-defineproperties.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Object.defineProperties(<var>obj</var>, <var>props</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>L'objet dont on souhaite modifier ou définir certaines propriétés.</dd>
 <dt><code>props</code></dt>
 <dd>Un objet dont les propriétés propres et énumérables sont des descripteurs de propriétés pour les propriétés à définir ou à modifier. Les descripteurs de propriétés peuvent avoir deux formes (voir {{jsxref("Object.defineProperty()")}} pour plus d'informations) : un descripteur de donnée ou un descripteur d'accesseur. Les descripteurs de donnée et d'accesseur peuvent avoir les clés suivantes :
 <dl>
  <dt><code>configurable</code></dt>
  <dd><code>true</code> si et seulement si le type de ce descripteur peut être modifié et si la propriété peut être supprimée de l'objet.<br>
  <strong>Par défaut : <code>false</code>.</strong></dd>
  <dt><code>enumerable</code></dt>
  <dd><code>true</code> si et seulement si la propriété doit être listée lors des énumérations de propriétés de l'objet (quand on liste les propriétés pour une boucle par exemple).<br>
  <strong>Par défaut : <code>false</code>.</strong></dd>
 </dl>

 <p>Un descripteur de donnée pourra avoir les clés suivantes :</p>

 <dl>
  <dt><code>value</code></dt>
  <dd>La valeur associée à la propriété. Cela peut être n'importe quelle valeur valide en JavaScript (un nombre, un objet, etc.).<br>
  <strong>Par défaut : {{jsxref("undefined")}}.</strong></dd>
  <dt><code>writable</code></dt>
  <dd><code>true</code> si et seulement si la valeur associée à la propriété peut être modifiée par un {{jsxref("Opérateurs/Opérateurs_d_affectation", "opérateur d'affectation", "", 1)}}.<br>
  <strong>Par défaut : <code>false</code>.</strong></dd>
 </dl>

 <p>Un descripteur d'accesseur pourra avoir les clés suivantes :</p>

 <dl>
  <dt><code>get</code></dt>
  <dd>Une fonction utilisée comme accesseur pour la propriété ou {{jsxref("undefined")}} s'il n'y a pas d'accesseur. La fonction renvoyée sera utilisée comme valeur pour la propriété.<br>
  <strong>Par défaut : {{jsxref("undefined")}}.</strong></dd>
  <dt><code>set</code></dt>
  <dd>Une fonction utilisée comme mutateur pour la propriété ou {{jsxref("undefined")}} s'il n'y a pas de mutateur. La fonction qui sera utilisée ensuite recevra la nouvelle valeur à affecter à la propriété comme argument.<br>
  <strong>Par défaut : {{jsxref("undefined")}}.</strong></dd>
 </dl>

 <p>Si un descripteur ne possède aucune clé parmi <code>value</code>, <code>writable</code>, <code>get</code> et <code>set</code>, il sera considéré comme un descripteur de donnée. Si un descripteur possède à la fois les clés <code>value</code>/<code>writable</code> et <code>get</code>/<code>set</code>, une exception sera levée.</p>
 </dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>L'objet passé à la fonction, éventuellement modifié.</p>

<h2 id="Description">Description</h2>

<p><code>Object.defineProperties</code> permet principalement de définir toutes les propriétés  de l'objet <code>obj </code>correspondant aux propriétés énumérable de <code>props</code>.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var obj = {};
Object.defineProperties(obj, {
  "propriété1": {
    value: true,
    writable: true
  },
  "propriété2": {
    value: "Coucou",
    writable: false
  }
  // etc.
});</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>Si on considère un environnement <em>pur</em> où tous les noms et toutes les propriétés font référence à leurs valeurs initiales, <code>Object.defineProperties</code> est quasiment équivalent à l'implémentation suivante en JavaScript (voir la note liée à <code>isCallable</code>) :</p>

<pre class="brush: js">function defineProperties(obj, properties) {
  function convertToDescriptor(desc) {
    function hasProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function isCallable(v) {
      // NB : à modifier s'il y a plus de types
      // que les fonctions qui sont
      // appelables (callables)
      return typeof v === "function";
    }

    if (typeof desc !== "object" || desc === null)
      throw new TypeError("bad desc");

    var d = {};

    if (hasProperty(desc, "enumerable"))
      d.enumerable = !!desc.enumerable;
    if (hasProperty(desc, "configurable"))
      d.configurable = !!desc.configurable;
    if (hasProperty(desc, "value"))
      d.value = desc.value;
    if (hasProperty(desc, "writable"))
      d.writable = !!desc.writable;
    if ( hasProperty(desc, "get") ) {
      var g = desc.get;

      if (!isCallable(g) &amp;&amp; typeof g !== "undefined")
        throw new TypeError("bad get");
      d.get = g;
    }
    if ( hasProperty(desc, "set") ) {
      var s = desc.set;
      if (!isCallable(s) &amp;&amp; typeof s !== "undefined")
        throw new TypeError("bad set");
      d.set = s;
    }

    if (("get" in d || "set" in d) &amp;&amp; ("value" in d || "writable" in d))
      throw new TypeError("identity-confused descriptor");

    return d;
  }

  if (typeof obj !== "object" || obj === null)
    throw new TypeError("bad obj");

  properties = Object(properties);

  var keys = Object.keys(properties);
  var descs = [];

  for (var i = 0; i &lt; keys.length; i++)
    descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);

  for (var i = 0; i &lt; descs.length; i++)
    Object.defineProperty(obj, descs[i][0], descs[i][1]);

  return obj;
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
   <td>{{SpecName('ES5.1', '#sec-15.2.3.7', 'Object.defineProperties')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale. Implémentée par JavaScript 1.8.5</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object.defineproperties', 'Object.defineProperties')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.defineproperties', 'Object.defineProperties')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.defineProperties")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement">Détention et énumération des propriétés</a></li>
</ul>
