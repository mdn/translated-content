---
title: >-
  SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //#
  instead
slug: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
original_slug: Web/JavaScript/Reference/Erreurs/Deprecated_source_map_pragma
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">Warning: SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead

Warning: SyntaxError: Using //@ to indicate sourceMappingURL pragmas is deprecated. Use //# instead
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>Un avertissement prenant la forme d'une exception {{jsxref("SyntaxError")}}. L'exécution du code JavaScript n'est pas interrompue.</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Une syntaxe dépréciée a été utilisée pour indiquer une correspondance de source (<em>source map</em>) dans le code JavaScript.</p>

<p>Il arrive souvent que les fichiers sources JavaScript soient combinés et minifiés afin que le transfert depuis le serveur vers le client soit plus efficace. Grâce <a href="http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/">aux correspondances de source (ou <em>source maps</em>)</a>, le débogueur peut utiliser les sources des fichiers correspondants aux fichiers minifiés.</p>

<p>La spécification sur cet outil a évolué car il existait un conflit de syntaxe avec IE (après <code>//@cc_on</code>, la correspondance était interprétée comme un test conditionnel de compilation du moteur JScript).<a href="https://msdn.microsoft.com/en-us/library/8ka90k2e%28v=vs.94%29.aspx"> Ce commentaire de compilation conditionnelle</a> pour IE est peu connu mais son existence entraînait des erreurs avec <a href="https://bugs.jquery.com/ticket/13274">jQuery</a> et d'autres bibliothèques.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Syntaxe_dépréciée">Syntaxe dépréciée</h3>

<p>La syntaxe utilisant l'arobase (@) est dépréciée :</p>

<pre class="brush: js example-bad">//@ sourceMappingURL=http://exemple.com/chemin/vers/la/sourcemap.map
</pre>

<h3 id="Syntaxe_standard">Syntaxe standard</h3>

<p>Il faut utiliser le dièse (#) :</p>

<pre class="brush: js example-good">//# sourceMappingURL=http://exemple.com/chemin/vers/la/sourcemap.map</pre>

<p>Autrement, on peut indiquer la correspondance dans un en-tête {{HTTPHeader("SourceMap")}} pour servir le fichier JavaScript afin d'éviter tout commentaire :</p>

<pre class="brush: js example-good">X-SourceMap: /path/to/file.js.map</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Outils/Débogueur/Comment/Utiliser_une_source_map">Comment utiliser les <em>source map</em> – Documentation des outils Firefox</a></li>
 <li><a href="http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/">Introduction to source maps – HTML5 rocks</a></li>
 <li>{{HTTPHeader("SourceMap")}}</li>
</ul>
