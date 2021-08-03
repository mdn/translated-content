---
title: 'URIError: malformed URI sequence'
slug: Web/JavaScript/Reference/Errors/Malformed_URI
tags:
  - Erreurs
  - JavaScript
  - URIError
translation_of: Web/JavaScript/Reference/Errors/Malformed_URI
original_slug: Web/JavaScript/Reference/Erreurs/Malformed_URI
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">URIError: The URI to be encoded contains invalid character (Edge)
URIError: malformed URI sequence (Firefox)
URIError: URI malformed (Chrome)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("URIError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Il y a eu une erreur lors de l'encodage ou du décodage de l'URI. Un argument fourni à {{jsxref("decodeURI")}}, {{jsxref("encodeURI")}}, {{jsxref("encodeURIComponent")}} ou à {{jsxref("decodeURIComponent")}} n'était pas valide et la fonction concernée n'a pas pu encoder ou décoder la valeur correctement.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Encodage">Encodage</h3>

<p>L'encodage permet de remplacer certains caractères par une, deux, trois voire quatre séquences d'échappement qui représente l'encodage UTF-8 du caractère. Une exception {{jsxref("URIError")}} sera levée si on tente d'encoder un caractère <em>surrogate</em> qui ne fait pas partie d'une paire de codets :</p>

<pre class="brush: js example-bad">encodeURI('\uD800');
// "URIError: malformed URI sequence"

encodeURI('\uDFFF');
// "URIError: malformed URI sequence"
</pre>

<p>En revanche, si on dispose de la paire de codets :</p>

<pre class="brush: js example-good">encodeURI('\uD800\uDFFF');
// "%F0%90%8F%BF"</pre>

<h3 id="Décodage">Décodage</h3>

<p>Le décodage permet de remplacer chaque séquence d'échappement dans le composant encodé par le caractère qu'elle représente. S'il n'existe aucun caractère correspondant, une exception sera déclenchée :</p>

<pre class="brush: js example-bad">decodeURIComponent('%E0%A4%A');
// "URIError: malformed URI sequence"
</pre>

<p>Avec la valeur d'entrée correcte, on a généralement quelque chose qui ressemble à :</p>

<pre class="brush: js example-good">decodeURIComponent('JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B');
// "JavaScript_шеллы"</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("URIError")}}</li>
 <li>{{jsxref("decodeURI")}}</li>
 <li>{{jsxref("encodeURI")}}</li>
 <li>{{jsxref("encodeURIComponent")}}</li>
 <li>{{jsxref("decodeURIComponent")}}</li>
</ul>
