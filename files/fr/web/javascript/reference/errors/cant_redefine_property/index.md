---
title: 'TypeError: can''t redefine non-configurable property "x"'
slug: Web/JavaScript/Reference/Errors/Cant_redefine_property
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cant_redefine_property
original_slug: Web/JavaScript/Reference/Erreurs/Cant_redefine_property
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: Cannot modify non-writable property {x} (Edge)
TypeError: can't redefine non-configurable property "x" (Firefox)
TypeError: Cannot redefine property: "x" (Chrome)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>On essaie de redéfinir une propriété alors que celle-ci est <a href="/fr/docs/Web/JavaScript/Structures_de_données#Propriétés">non-configurable</a>. L'attribut <code>configurable</code> permet d'indiquer si la propriété peut être supprimée d'un objet et si ses attributs (en dehors de <code>writable</code>) peuvent être modifiés. Généralement, les propriétés d'un objet créées avec un <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Initialisateur_objet">initialisateur d'objet</a> sont configurables. Cependant, lorsqu'on utilise la méthode {{jsxref("Object.defineProperty()")}}, la propriété n'est pas configurable par défaut.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Propriétés_non-configurables_créées_avec_Object.defineProperty()">Propriétés non-configurables créées avec <code>Object.defineProperty()</code></h3>

<p>La méthode {{jsxref("Object.defineProperty()")}} crée des propriétés non-configurables si on n'indique pas le contraire :</p>

<pre class="brush: js example-bad">var obj = Object.create({});
Object.defineProperty(obj, "toto", {value: "machin"});

Object.defineProperty(obj, "toto", {value: "bidule"});
// TypeError: can't redefine non-configurable property "toto"
</pre>

<p>Si on veut pouvoir redéfinir la propriété "toto" dans la suite du code, il faudra la créer comme étant configurable.</p>

<pre class="brush: js example-good">var obj = Object.create({});
Object.defineProperty(obj, "toto", {value: "machin", configurable: true});
Object.defineProperty(obj, "toto", {value: "bidule", configurable: true});</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Structures_de_données#Propriétés">[[Configurable]]</a></li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
</ul>
