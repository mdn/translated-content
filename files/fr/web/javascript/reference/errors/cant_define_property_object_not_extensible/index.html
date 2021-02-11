---
title: 'TypeError: can''t define property "x": "obj" is not extensible'
slug: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
original_slug: Web/JavaScript/Reference/Erreurs/Cant_define_property_object_not_extensible
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: Cannot create property for a non-extensible object (Edge)
TypeError: can't define property "x": "obj" is not extensible (Firefox)
TypeError: Cannot define property: "x", object is not extensible. (Chrome)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>La plupart du temps, un objet est extensible, ce qui signifie qu'on peut lui ajouter de nouvelles propriétés. Cependant, dans ce cas, on a utilisé la méthode {{jsxref("Object.preventExtensions()")}} afin de marquer l'objet comme non-extensible. Celui-ci ne pourra donc pas recevoir de nouvelles propriétés en plus de celles dont il dispose déjà.</p>

<h2 id="Exemples">Exemples</h2>

<p>En <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a>, si on essaie d'ajouter une nouvelle propriété sur un objet non-extensible, on obtient une exception <code>TypeError</code>. En mode non-strict, l'ajout de la nouvelle propriété est ignoré silencieusement.</p>

<pre class="brush: js example-bad">'use strict';

var obj = {};
Object.preventExtensions(obj);

obj.x = 'toto';
// TypeError: can't define property "x": "obj" is not extensible
</pre>

<p>Pour le mode strict ete le mode non-strict, un appel à {{jsxref("Object.defineProperty()")}} déclenchera une exception lorsqu'on utilisera cette méthode pour ajouter une nouvelle propriété à un objet non-extenssible.</p>

<pre class="brush: js example-bad">var obj = { };
Object.preventExtensions(obj);

Object.defineProperty(obj,
  'x', { value: "toto" }
);
// TypeError: can't define property "x": "obj" is not extensible
</pre>

<p>Pour corriger cet erreur, il faut retirer l'appel à {{jsxref("Object.preventExtensions()")}} pour que l'objet soit extensible, soit ajouter la propriété avant que l'objet devienne non-extensible, soit retirer l'ajout de cette propriété si elle n'est pas nécessaire.</p>

<pre class="brush: js example-good">'use strict';

var obj = {};
obj.x = 'toto'; // On ajoute la propriété avant de
               // bloquer l'ajout d'autres propriétés

Object.preventExtensions(obj);</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
</ul>
