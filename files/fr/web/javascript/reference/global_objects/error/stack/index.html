---
title: Error.prototype.stack
slug: Web/JavaScript/Reference/Global_Objects/Error/Stack
tags:
  - Error
  - JavaScript
  - Non-standard
  - Propriété
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error/Stack
original_slug: Web/JavaScript/Reference/Objets_globaux/Error/Stack
---
<div>{{JSRef}} {{non-standard_header}}</div>

<p>La propriété non-standard <code><strong>stack</strong></code> des objets {{jsxref("Error")}} fournit une trace des fonctions qui ont été appelées, dans quel ordre, depuis quelle ligne de quel fichier, et avec quels arguments. La chaine de pile remonte des appels les plus récents jusqu'aux plus anciens, ramenant à l'appel original de la portée globale.</p>

<h2 id="Description">Description</h2>

<p>Chaque étape sera séparée par une nouvelle ligne, la première partie de la ligne étant le nom de la fonction (si ce n'est pas un appel depuis la portée globale), suivi du signe arobase (@), de l'emplacement du fichier (sauf quand la fonction est le constructeur d'erreur lorsque l'erreur est déclenchée), de deux-points, et, s'il y a un emplacement de fichier, du numéro de ligne. (Notez que l'objet {{jsxref("Error")}} possède aussi les propriétés <code>fileName</code>, <code>lineNumber</code> et <code>columnNumber</code> pour leur récupération à partir de l'erreur déclenchée (mais seulement l'erreur, et pas sa trace)).</p>

<p>Notez que ceci est le format utilisé par Firefox. Il n'y a aucun formatage standard. Cependant Safari 6+ et Opera 12- utilisent un format très similaire. Les navigateurs utilisant le moteur JavaScript V8 (tel que Chrome, Opera 15+, Navigateur Android) et IE10+, utilisent un format différent (voir la documentation MSDN <a href="https://web.archive.org/web/20140210004225/http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx">error.stack</a>).</p>

<p><strong>Valeurs des arguments dans la pile :</strong> avant Firefox 14 ({{bug("744842")}}), le nom d'une fonction étaient suivis par les valeurs des arguments converties en une chaine de caractères entre parenthèses, immédiatement avant le signe arobase (@). Tandis qu'un objet (ou un tableau, etc.) apparaissait sous la forme convertie <code>"[object Object]"</code>, et en tant que tel, ne pouvait pas être réévalué en les objets réels, les valeurs scalaires pouvaient être récupérées (bien qu'il soit plus facile — c'est toujours possible dans Firefox 14 — d'utiliser <code>arguments.callee.caller.arguments</code>, tout comme le nom de la fonction pouvait être récupéré avec <code>arguments.callee.caller.name</code>). <code>"undefined"</code> est listé comme <code>"(void 0)"</code>. Notez que si des arguments chaines de caractères étaient passés avec des valeurs comme <code>"@"</code>, <code>"("</code>, <code>")"</code> (ou si dans les noms de fichier), vous ne pouviez pas vous reposez facilement sur ceux-ci pour découper la ligne en les parties qui la composent. Par conséquent, dans Firefox 14 et ultérieur, ceci est moins un problème.</p>

<p>Les différents navigateurs définissent cette valeur à différents instants. Par exemple, Firefox la définit lors de la création d'un objet {{jsxref("Error")}}, tandis que PhantomJS ne la définit que lors du déclenchement de l'{{jsxref("Error")}}, et la <a href="https://web.archive.org/web/20140210004225/http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx">documentation MSDN</a> semble correspondre à l'implémentation PhantomJS.</p>

<h2 id="Exemples">Exemples</h2>

<p>Le code HTML suivant démontre l'utilisation de la propriété <code>stack</code>.</p>

<pre class="brush: html">&lt;!DOCTYPE HTML&gt;
&lt;meta charset="UTF-8"&gt;
&lt;title&gt;Exemple de Trace de Pile&lt;/title&gt;
&lt;body&gt;
    &lt;script&gt;
        function trace() {
            try {
                throw new Error('monError');
            }
            catch(e) {
                alert(e.stack);
            }
        }
        function b() {
            trace();
        }
        function a() {
            b(3, 4, "\n\n", undefined, {});
        }
        a("premier appel, premierarg");
    &lt;/script&gt;
</pre>

<p>En supposant que ce code a été enregistré comme <code>C:\exemple.html</code> sur un système de fichier Windows, il produira un message d'alerte dans une nouvelle fenêtre avec le texte suivant :</p>

<p>À partir de Firefox 30 et ultérieur, ce message contiendra le numéro de colonne  ({{bug(762556)}}) :</p>

<pre class="brush: html">trace@file:///C:/exemple.html:9:17
b@file:///C:/exemple.html:16:13
a@file:///C:/exemple.html:19:13
@file:///C:/exemple.html:21:9</pre>

<p>De Firefox 14 à Firefox 29 :</p>

<pre><samp>trace@file:///C:/exemple.html:9
b@file:///C:/exemple.html:16
a@file:///C:/exemple.html:19
@file:///C:/exemple.html:21
</samp></pre>

<p>Firefox 13 et antérieur aurait produit à la place le texte suivant :</p>

<pre><samp>Error("monError")@:0
trace()@file:///C:/exemple.html:9
b(3,4,"\n\n",(void 0),[object Object])@file:///C:/exemple.html:16
a("premier appel, premierarg")@file:///C:/exemple.html:19
@file:///C:/exemple.html:21
</samp></pre>

<h3 id="Pile_d'un_code_evalué">Pile d'un code evalué</h3>

<p>À partir de Firefox 30 {{geckoRelease("30")}}, la pile d'erreur du code dans les appels à <code>Function()</code> et <code>eval()</code> produit désormais des piles avec des informations plus détaillées sur les numéros de lignes et de colonnes dans ces appels. Les appels de fonction sont indiqués par <code>"&gt; Function"</code> et les appels d'<code>eval</code> par <code>"&gt; eval"</code>. Voir {{bug("332176")}}.</p>

<pre class="brush: js">try {
  new Function('throw new Error()')();
} catch (e) {
  console.log(e.stack);
}

// anonymous@file:///C:/exemple.html line 7 &gt; Function:1:1
// @file:///C:/exemple.html:7:6

try {
  eval("eval('ÉCHEC')");
} catch (x) {
  console.log(x.stack);
}

// @file:///C:/exemple.html line 7 &gt; eval line 1 &gt; eval:1:1
// @file:///C:/exemple.html line 7 &gt; eval:1:1
// @file:///C:/exemple.html:7:6</pre>

<p>Vous pouvez aussi utiliser la directive <code>//# sourceURL</code> pour nommer une source eval. Voir aussi <a href="https://developer.mozilla.org/fr-FR/docs/Tools/Debugger/How_to/Debug_eval_sources">Déboguer des sources évaluées</a> dans les docs <a href="https://developer.mozilla.org/fr-FR/docs/Tools/Debugger">Débogueur</a>, ainsi que ce <a href="http://fitzgeraldnick.com/weblog/59/">blog post</a>.</p>

<h2 id="Spécifications">Spécifications</h2>

<p>Ne fait partie d'aucune spécification. Non-standard.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Error.stack")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr-FR/docs/Components.stack">Components.stack</a></li>
 <li>Projets externes : <a class="link-https" href="https://github.com/csnover/TraceKit/">TraceKit</a> et <a class="link-https" href="https://github.com/eriwen/javascript-stacktrace">javascript-stacktrace</a></li>
 <li>MSDN : docs <a href="https://web.archive.org/web/20140210004225/http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx">error.stack</a></li>
 <li><a href="https://github.com/v8/v8/wiki/Stack%20Trace%20API">Overview of the V8 JavaScript stack trace API</a></li>
</ul>
