---
title: AggregateError
slug: Web/JavaScript/Reference/Global_Objects/AggregateError
tags:
  - AggregateError
  - Classe
  - Experimental
  - Interface
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/AggregateError
original_slug: Web/JavaScript/Reference/Objets_globaux/AggregateError
---
<div>{{JSRef}}</div>

<p>Un objet <code><strong>AggregateError</strong></code> représente une erreur lorsque plusieurs erreurs doivent être agrégées en une seule. Ce type d'exception est levée lorsque plusieurs erreurs sont rapportées par une opération, par exemple avec {{JSxRef("Promise.any()")}} lorsque l'ensemble des promesses qui lui sont passées échouent.</p>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/AggregateError/AggregateError"><code>AggregateError()</code></a></dt>
 <dd>Crée un nouvel objet <code>AggregateError</code>.</dd>
</dl>

<h2 id="Propriétés_des_instances">Propriétés des instances</h2>

<dl>
 <dt>{{JSxRef("Error.prototype.message", "AggregateError.prototype.message")}}</dt>
 <dd>Le message d'erreur. La valeur par défaut est <code>""</code>.</dd>
 <dt>{{JSxRef("Error.prototype.name", "AggregateError.prototype.name")}}</dt>
 <dd>Le nom de l'erreur. La valeur par défaut est <code>"AggregateError"</code>.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Intercepter_une_erreur_AggregateError">Intercepter une erreur <code>AggregateError</code></h3>

<pre class="brush: js; notranslate">Promise.any([
  Promise.reject(new Error("une erreur")),
]).catch(e =&gt; {
  console.log(e instanceof AggregateError); // true
  console.log(e.message);                   // "All Promises rejected"
  console.log(e.name);                      // "AggregateError"
  console.log(e.errors);                    // [ Error: "une erreur" ]
});
</pre>

<h3 id="Créer_un_objet_AggregateError">Créer un objet <code>AggregateError</code></h3>

<pre class="brush: js; notranslate">try {
  throw new AggregateError([
    new Error("une erreur"),
  ], 'Coucou');
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message);                   // "Coucou"
  console.log(e.name);                      // "AggregateError"
  console.log(e.errors);                    // [ Error: "une erreur" ]
}
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Promise.any', '#sec-aggregate-error-object-structure', 'AggregateError')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.AggregateError")}}</p>

<h2 id="Voir">Voir</h2>

<ul>
 <li>{{JSxRef("Error")}}</li>
</ul>
