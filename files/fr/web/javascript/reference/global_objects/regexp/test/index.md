---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/test
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/test
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>test()</strong></code> vérifie s'il y a une correspondance entre un texte et une expression rationnelle. Elle retourne <code>true</code> en cas de succès et <code>false</code> dans le cas contraire.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-test.html", "taller")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox notranslate"><var>regexObj</var>.test(<var>chaîne</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>chaîne</code></dt>
 <dd>La chaîne de caractères qu'on souhaite comparer à l'expression rationnelle.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un booléen : <code>true</code> ou <code>false</code> selon qu'une correspondance a été trouvée entre la chaîne de caractères et la chaîne passée en argument.</p>

<h2 id="Description">Description</h2>

<p>On utilisera <code>test()</code> dès qu'on souhaite savoir si une partie d'une chaîne de caractères correspond à une expression rationnelle (similaire à la méthode {{jsxref("String.prototype.search()")}}). Pour obtenir plus d'informations (mais une exécution moins rapide), on utilisera la méthode {{jsxref("RegExp.prototype.exec()", "exec()")}} (similaire à la méthode {{jsxref("String.prototype.match()")}}). Comme avec {{jsxref("RegExp.prototype.exec()", "exec()")}} (et même en combinant les deux), des appels successifs à <code>test()</code> sur une même instance d'une expression rationnelle permettent de rechercher après la dernière occurence. Cette méthode est différente de <code>search</code> car elle renvoie un booléen et non la position de la correspondance si elle est trouvée (ou <code>-1</code> sinon).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_test">Utiliser <code>test()</code></h3>

<p>Voici un exemple simple qui illustre comment détecter si la chaîne <code>coucou</code> est contenue au début d'une chaîne :</p>

<pre class="brush: js notranslate">const chaine = "coucou le monde !";
const resultat = /^coucou/.test(chaine);
console.log(resultat); // true
</pre>

<p>L'exemple ci-dessous affiche un message qui dépend du succès du test :</p>

<pre class="brush: js notranslate">function testinput(regex, chaine){
    var midstring;
    if (regex.test(chaine)) {
        midstring = " contient ";
    } else {
        midstring = " ne contient pas ";
    }
    console.log(str + midstring + re.source);
}

testinput(/^coucou/, "coucou le monde"); // coucou le monde contient coucou
testinput(/^coucou/, "salut le monde") // salut le monde ne contient pas coucou
</pre>

<h3 id="Utiliser_test_avec_le_marqueur_global_g">Utiliser <code>test()</code> avec le marqueur global (<code>/g</code>)</h3>

<p>Si l'expression rationnelle utilise le marqueur global (<code>g</code>), la méthode <code>test()</code> avancera la propriété {{jsxref("RegExp.lastIndex", "lastIndex")}} associée à l'expression rationnelle. Ainsi, si on utilise <code>test()</code> ensuite, la recherche commencera à partir de la nouvelle valeur de <code>lastIndex</code> (de même {{jsxref("RegExp.prototype.exec()","exec()")}} fera également avancer la propriété <code>lastIndex</code>). On notera que la propriété <code>lastIndex</code> ne sera pas réinitialisée si la recherche est effectuée sur une autre chaîne de caractères.</p>

<pre class="brush: js notranslate">var regex = /toto/g;

// regex.lastIndex se situe à 0
regex.test("toto"); // true

// regex.lastIndex se situe désormais à 4
regex.test("toto"); // false
</pre>

<p>Avec le même mécanisme, on peut utiliser une boucle pour compter le nombre de mots contenus dans une chaîne de caractères</p>

<pre class="brush: js notranslate">function compterMots(texte) {
  for (var regex = /\w+/g, nbMots = 0; regex.test(texte); nbMots++);
  return nbMots;
}

console.log(compterMots("Ah que coucou Bob")); // 4
</pre>

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
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.2.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.10.6.3', 'RegExp.test')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-regexp.prototype.test', 'RegExp.test')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-regexp.prototype.test', 'RegExp.test')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.RegExp.test")}}</p>

<h2 id="Notes_spécifiques_à_Firefox">Notes spécifiques à Firefox</h2>

<p>Pour les versions antérieures à Firefox 8.0, l'implémentation de <code>test()</code> était erronée. Quand la méthode était appelée sans aucun paramètre, elle effectuait son test par rapport à la dernière entrée (la propriété <code>RegExp.input</code>) et non par rapport à la chaîne <code>"undefined"</code>. Ce comportement a été corrigé  ; désormais <code>/undefined/.test()</code> retourne bien <code>true</code> au lieu d'une erreur.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Le chapitre sur <a href="/fr/docs/Web/JavaScript/Guide/Expressions_régulières">les expressions rationnelles</a> du <a href="/fr/docs/Web/JavaScript/Guide">guide JavaScript</a></li>
 <li>{{jsxref("RegExp")}}</li>
</ul>
