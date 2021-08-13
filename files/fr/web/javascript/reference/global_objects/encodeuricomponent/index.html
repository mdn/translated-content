---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
tags:
  - JavaScript
  - Reference
  - URI
translation_of: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
original_slug: Web/JavaScript/Reference/Objets_globaux/encodeURIComponent
---
<div>{{jsSidebar("Objects")}}</div>

<p>La fonction <code><strong>encodeURIComponent()</strong></code> permet d'encoder un composant d'un Uniform Resource Identifier (URI) en remplaçant chaque exemplaire de certains caractères par une, deux, trois ou quatres séquences d'échappement UTF-8 correspondantes (quatre séquences seront utilisées uniquement lorsque les caractères à encoder sont composés de deux caractères « <em>surrogate</em> »).</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-encodeuricomponent.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">encodeURIComponent(<var>str</var>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>str</code></dt>
 <dd>Une chaîne de caractères qui correspond à un composant d'URI.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une nouvelle chaîne de caractères qui représente un composant d'URI obtenu en encodant la chaîne passée en argument.</p>

<h2 id="Description">Description</h2>

<p><code>encodeURIComponent()</code> échappe tous les caractères sauf : les lettres de l'alphabet latin, les chiffres (arabes) et <code>- _ . ! ~ * ' ( )</code></p>

<p>La méthode <code>encodeURIComponent()</code> diffère de la méthode <code>encodeURI()</code> par rapport aux caractères qui sont encodés :</p>

<pre class="brush: js">var set1 = ";,/?:@&amp;=+$";  // Caractères réservés
var set2 = "-_.!~*'()";   // Caractères non-réservés
var set3 = "#";           // Croisillon
var set4 = "ABC abc 123"; // Caractères alphanumériques et espace

console.log(encodeURI(set1)); // ;,/?:@&amp;=+$
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // #
console.log(encodeURI(set4)); // ABC%20abc%20123 (l'espace est encodé en %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // #
console.log(encodeURIComponent(set4)); // ABC%20abc%20123 (l'espace est encodé en %20)

</pre>

<p>Une exception {{jsxref("URIError")}} sera levée lorsqu'on utilise cette fonction sur un unique demi-codet qui est censé faire partie d'une paire de demi-codets :</p>

<pre class="brush: js">// la paire de demi-codets : OK
console.log(encodeURIComponent('\uD800\uDFFF'));

// seul le demi-codet supérieur : "URIError: malformed URI sequence"
console.log(encodeURIComponent('\uD800'));

// seul le demi-codet inférieur : "URIError: malformed URI sequence"
console.log(encodeURIComponent('\uDFFF'));
</pre>

<p>Afin d'éviter des requêtes inattendues vers le serveur, il est conseillé d'utiliser la fonction <code>encodeURIComponent()</code> pour n'importe quel paramètre qui aurait été saisi par l'utilisateur et qui ferait partie d'un URI. Ainsi, si un utilisateur peut saisir "<code>Thym &amp;access=admin</code>" dans une variable <code>commentaire</code> et qu'on n'utilise pas <code>encodeURIComponent()</code>, on obtiendra la chaîne <code>commentaire=Thym%20&amp;access=admin</code>. On voit ici que l'esperluette (&amp;) et le signe égal forment une nouvelle paire clé/valeur. Au lieu d'avoir une clé POST <code>commentaire</code> égale à "<code>Thym &amp;access=admin</code>", on aura deux clés POST, l'une égale à "<code>Thym </code>" et une seconde (<code>access</code>) égale à <code>admin</code>.</p>

<p>Pour <a href="https://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#application/x-www-form-urlencoded-encoding-algorithm"><code>application/x-www-form-urlencoded</code></a>, les espaces sont remplacés par un '+', aussi, dans ce cas, on pourra ajouter un remplacement supplémentaire après <code>encodeURIComponent()</code> pour remplacer "%20" par "+".</p>

<p>Pour utiliser une fonction qui respecte la <a class="external" href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>, plus stricte (qui réserve les caractères !, ', (, ), et * même si ces caractères n'ont pas d'usage normalisé), on pourra utiliser la fonction suivante :</p>

<pre class="brush: js">function fixedEncodeURIComponent (str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
}
</pre>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on utilise une méthode spéciale pour l'encodage afin d'utiliser les paramètres d'en-tête de réponse <code>Content-Disposition</code> et <code>Link</code> (pour, par exemple, représenter des noms de fichiers en UTF-8) :</p>

<pre class="brush: js">var nomFichier = 'mon fichier(2).txt';
var header = "Content-Disposition: attachment; filename*=UTF-8''"
             + encodeRFC5987ValueChars(nomFichier);

console.log(header);
// affiche "Content-Disposition: attachment; filename*=UTF-8''mon%20fichier%282%29.txt"


function encodeRFC5987ValueChars (str) {
    return encodeURIComponent(str).
        // Bien que la RFC 3986 réserve "!", RFC 5987 ne réserve pas ce caractère,
        // il n'est donc pas nécessaire l'échapper
        replace(/['()]/g, escape). // c'est-à-dire %27 %28 %29
        replace(/\*/g, '%2A').
            // Selon la RFC 5987 ce qui suit n'est pas nécessairement requis
            // on peut donc bénéficier d'un peu plus de lisibilité : |`^
            replace(/%(?:7C|60|5E)/g, unescape);
}

// Voici une autre version équivalente
function encodeRFC5987ValueChars2(str) {
  return encodeURIComponent(str).
    // Bien que la RFC 3986 réserve "!", RFC 5987 ne réserve pas ce caractère,
    // il n'est donc pas nécessaire l'échapper
    replace(/['()*]/g, c =&gt; '%' + c.charCodeAt(0).toString(16)). // i.e., %27 %28 %29 %2a
    // on notera que l'encodage valide pour "*" est %2A et qui faut donc appeler toUpperCase()
    // pour encoder exactement.

    // Selon la RFC 5987 ce qui suit n'est pas nécessairement requis
    // on peut donc bénéficier d'un peu plus de lisibilité : |`^
    replace(/%(7C|60|5E)/g, (str, hex) =&gt; String.fromCharCode(parseInt(hex, 16)));
}
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.1.3.4', 'encodeURIComponent')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-encodeuricomponent-uricomponent', 'encodeURIComponent')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-encodeuricomponent-uricomponent', 'encodeURIComponent')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.encodeURIComponent")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("decodeURI")}}</li>
 <li>{{jsxref("encodeURI")}}</li>
 <li>{{jsxref("decodeURIComponent")}}</li>
</ul>
