---
title: console.log()
slug: Web/API/Console/log
translation_of: Web/API/Console/log
browser-compat: api.Console.log
---
<div>{{APIRef("Console API")}}</div>

<p>La méthode <strong><code>console.log()</code></strong> affiche un message dans la console Web. Le message peut être une simple chaine de caractères (avec des valeurs optionnelles de substitution) ou peut être composé d'un ou plusieurs objets JavaScript.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
console.log(<var>obj1</var> [, <var>obj2</var>, ..., <var>objN</var>]);
console.log(<var>msg</var> [, <var>subst1</var>, ..., <var>substN</var>]);
</pre>

<h3 id="parameters">Paramètres</h3>

<dl>
 <dt><code>obj1</code> ... <code>objN</code></dt>
 <dd>Une liste d'objets Javascript à afficher. Les représentations textuelles de chacun de ces objets seront affichées dans la console du navigateur selon l'ordre indiqué. Attention, pour les versions récentes de Chrome et Firefox, ce qui apparaît dans la console est une <strong>référence à l'objet</strong> et pas nécessairement la valeur de l'objet au moment de l'appel à <code>console.log()</code> mais sa valeur au moment où on ouvre la console.</dd>
 <dt><code>msg</code></dt>
 <dd>Une chaîne de caractères JavaScript contenant zéro ou plusieurs chaînes de substitution.</dd>
 <dt><code>subst1</code> ... <code>substN</code></dt>
 <dd>Des objets JavaScript dont les valeurs textuelles remplaceront les emplacements à substituer indiqués dans <code>msg</code>. Cela offre plus de contrôle sur le format d'affichage.</dd>
</dl>

<p>Voir <a href="/fr/docs/Web/API/Console#outputting_text_to_the_console">Afficher du texte sur la console</a> dans la documentation de <a href="/fr/docs/Web/API/Console"><code>console</code></a> pour plus de détails.</p>

<h2 id="difference_between_log_and_dir">Différence entre console.log() et console.dir()</h2>

<p>Vous pourriez vous demander quelles sont les différences entre <a href="/fr/docs/Web/API/Console/dir"><code>console.dir()</code></a> et <code>console.log()</code>.</p>

<p>Celles-ci concernent principalement la gestion particulière des objets du DOM :</p>
<ul>
 <li><code>console.log()</code> affiche les éléments dans un arbre de type HTML,</li>
 <li><code>console.dir()</code> affiche les propriétés de l'objet JavaScript.</li>
</ul>

<p><img alt="" src="dozdcyr.png"></p>


<h2 id="logging_objects">Affichage d'objets dans la console</h2>

<p>Évitez d'utiliser <code>console.log(obj)</code> mais préférez <code>console.log(JSON.parse(JSON.stringify(obj)))</code> si vous souhaîtez être sûr·e d'observer la valeur de l'objet au moment de l'exécution de <code>console.log()</code>. Autrement, de nombreux navigateurs produisent un affichage interactif de l'objet qui se maintient à jour quand les propriétés de l'objet changent. Cela ne pourrait pas être ce que vous voulez et peut porter à confusion.</p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
 <li><a href="https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/console-log">Docs Microsoft : Edge - Afficher des messages dans la console</a></li>
 <li><a href="https://developers.google.com/chrome-developer-tools/docs/console-api#consoledirobject">La référence de l'API Console pour Chrome</a></li>
 <li><a href="https://nodejs.org/docs/latest/api/console.html#console_console_log_data">NodeJS : API Console</a></li>
</ul>
