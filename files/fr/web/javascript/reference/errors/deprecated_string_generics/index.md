---
title: 'Warning: String.x is deprecated; use String.prototype.x instead'
slug: Web/JavaScript/Reference/Errors/Deprecated_String_generics
tags:
  - Avertissement
  - JavaScript
  - Warning
translation_of: Web/JavaScript/Reference/Errors/Deprecated_String_generics
original_slug: Web/JavaScript/Reference/Erreurs/Deprecated_String_generics
---
<div>{{jsSidebar("Errors")}}</div>

<div>Les méthodes génériques pour les chaînes de caractères ont été retirées à partir de Firefox 68.</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">Warning: String.charAt            is deprecated; use String.prototype.charAt            instead
Warning: String.charCodeAt        is deprecated; use String.prototype.charCodeAt        instead
Warning: String.concat            is deprecated; use String.prototype.concat            instead
Warning: String.contains          is deprecated; use String.prototype.contains          instead
Warning: String.endsWith          is deprecated; use String.prototype.endsWith          instead
Warning: String.includes          is deprecated; use String.prototype.includes          instead
Warning: String.indexOf           is deprecated; use String.prototype.indexOf           instead
Warning: String.lastIndexOf       is deprecated; use String.prototype.lastIndexOf       instead
Warning: String.localeCompare     is deprecated; use String.prototype.localeCompare     instead
Warning: String.match             is deprecated; use String.prototype.match             instead
Warning: String.normalize         is deprecated; use String.prototype.normalize         instead
Warning: String.replace           is deprecated; use String.prototype.replace           instead
Warning: String.search            is deprecated; use String.prototype.search            instead
Warning: String.slice             is deprecated; use String.prototype.slice             instead
Warning: String.split             is deprecated; use String.prototype.split             instead
Warning: String.startsWith        is deprecated; use String.prototype.startsWith        instead
Warning: String.substr            is deprecated; use String.prototype.substr            instead
Warning: String.substring         is deprecated; use String.prototype.substring         instead
Warning: String.toLocaleLowerCase is deprecated; use String.prototype.toLocaleLowerCase instead
Warning: String.toLocaleUpperCase is deprecated; use String.prototype.toLocaleUpperCase instead
Warning: String.toLowerCase       is deprecated; use String.prototype.toLowerCase       instead
Warning: String.toUpperCase       is deprecated; use String.prototype.toUpperCase       instead
Warning: String.trim              is deprecated; use String.prototype.trim              instead
Warning: String.trimLeft          is deprecated; use String.prototype.trimLeft          instead
Warning: String.trimRight         is deprecated; use String.prototype.trimRight         instead
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>Un avertissement, l'exécution du script n'est pas interrompue.</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Les méthodes génériques non-standards de {{jsxref("String")}} sont dépréciées et ont été retirées à partir de Firefox 68 (il n'y a pas de prise en charge des navigateurs en dehors de Firefox). Les méthodes génériques sont des méthodes utilisées pour manipuler les instances de ce type d'objet et qui sont disponibles sur l'objet <code>String</code>, ce qui permet de les appliquer à n'importe quel objet.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Syntaxe_dépréciée">Syntaxe dépréciée</h3>

<pre class="brush: js example-bad">var num = 15;
String.replace(num, /5/, '2');</pre>

<h3 id="Syntaxe_standard">Syntaxe standard</h3>

<pre class="brush: js example-good">var num = 15;
String(num).replace(/5/, '2');
</pre>

<h2 id="Shim">Shim</h2>

<p>Voici une méthode qui permet d'avoir les méthodes génériques au sein des navigateurs qui ne les prennent pas en charge :</p>

<pre class="brush: js">/*globals define*/
// Assumes all supplied String instance methods already present
// (one may use shims for these if not available)
(function() {
  'use strict';

  var i,
    // We could also build the array of methods with the following, but the
    //   getOwnPropertyNames() method is non-shimable:
    // Object.getOwnPropertyNames(String).filter(function(methodName) {
    //   return typeof String[methodName] === 'function';
    // });
    methods = [
      'contains', 'substring', 'toLowerCase', 'toUpperCase', 'charAt',
      'charCodeAt', 'indexOf', 'lastIndexOf', 'startsWith', 'endsWith',
      'trim', 'trimLeft', 'trimRight', 'toLocaleLowerCase', 'normalize',
      'toLocaleUpperCase', 'localeCompare', 'match', 'search', 'slice',
      'replace', 'split', 'substr', 'concat', 'localeCompare'
    ],
    methodCount = methods.length,
    assignStringGeneric = function(methodName) {
      var method = String.prototype[methodName];
      String[methodName] = function(arg1) {
        return method.apply(arg1, Array.prototype.slice.call(arguments, 1));
      };
    };

  for (i = 0; i &lt; methodCount; i++) {
    assignStringGeneric(methods[i]);
  }
}());</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array#Les_méthodes_génériques_de_manipulation_de_tableaux">Les méthodes génériques pour les tableaux</a> (également dépréciées).</li>
</ul>
