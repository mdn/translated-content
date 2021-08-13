---
title: WebAssembly.Module.customSections()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/customSections
tags:
  - API
  - Constructeur
  - JavaScript
  - Module
  - Méthode
  - Object
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/customSections
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/Module/customSections
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>WebAssembly.customSections()</code></strong> renvoie un tableau qui contient les sections personnalisées (<em>custom sections</em>) disponibles dans un module WebAssembly et qui ont un nom donné.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var custSec = WebAssembly.Module.customSections(<em>module</em>, <em>nomSection</em>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>module</code></dt>
 <dd>L'objet {{jsxref("WebAssembly.Module")}} pour lequel on veut obtenir les sections personnalisées.</dd>
 <dt><code>nomSection</code></dt>
 <dd>Le nom de la section personnalisée qu'on souhaite obtenir.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un tableau contenant des {{domxref("ArrayBuffer")}} dont chacun contient les données d'une section personnalisée du module qui correspond à <code>nomSection</code>.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Si le module passé en argument n'est pas une instance de {{jsxref("WebAssembly.Module")}}, la méthode lèvera une exception {{jsxref("TypeError")}}.</p>

<h2 id="Les_sections_personnalisées">Les sections personnalisées</h2>

<p>Un module wasm contient une série de <strong>sections</strong>. La plupart de ces sections sont spécifiées et validées par la spécification WebAssembly mais les modules peuvent contenir certaines sections « personnalisées » (<em>custom sections</em>) qui sont ignorées lors de la phase de validation. Pour plus d'informations, consulter<a href="https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#high-level-structure"> l'article sur les structures de haut niveau</a> qui détaille la structure des sections et les différences entre les sections normales (« connues ») et les sections personnalisées.</p>

<p>Cela permet aux développeurs d'inclure des données personnalisées dans un module WebAssembly pour d'autres desseins. Par exemple, on peut avoir <a href="https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#name-section">une section personnalisée <code>name</code></a>, qui permet aux développeurs de fournir des noms pour les fonctions et les variables locales du module (à la façon des « symboles » utilisé pour les programmes compilés).</p>

<p>Le format WebAssembly ne possède actuellement aucune syntaxe pour ajouter une section personnalisée. Il est toutefois possible d'ajouter une section nommée au module wasm pendant la conversion du texte vers .wasm. La commande <code>wast2wasm</code>, disponible avec l'outil <code><a href="https://github.com/webassembly/wabt">wabt</a></code>, possède une option <code>--debug-names</code> qui permet de créer un module <code>.wasm</code> avec une section personnalisée <code>name</code> :</p>

<pre class="brush: bash">wast2wasm simple-name-section.was -o simple-name-section.wasm --debug-names</pre>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit (tiré de <a href="https://github.com/mdn/webassembly-examples/blob/master/other-examples/custom-section.html">ce fichier source</a> et de <a href="https://mdn.github.io/webassembly-examples/other-examples/custom-section.html">cette démonstration</a>), on compile et on instancie le bytecode <code>simple-name-section.wasm</code> et on importe une fonction JavaScript dans le module lors de cette étape. Ensuite, on exporte une fonction depuis le module grâce à <code>Instance.exports</code>.</p>

<p>On faut aussi une vérification sur <code>WebAssembly.Module.customSections</code> pour vérifier si celle-ci contient une section personnalisée <code>"name"</code> dont on vérifie si la longueur est supérieure à 0. Ce module contenant une section <code>name</code>, les appels à <code>console.log()</code> sont exécutés et montrent que le tableau renvoyé par la méthode contient des objets {{domxref("ArrayBuffer")}}.</p>

<pre class="brush: js">WebAssembly.compileStreaming(fetch('simple-name-section.wasm'))
.then(function(mod) {
  var nameSections = WebAssembly.Module.customSections(mod, "name");
  if (nameSections.length != 0) {
    console.log("Le module contient une section nommée");
    console.log(nameSections[0]);
  };
});</pre>

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
   <td>{{SpecName('WebAssembly JS', '#webassemblymodulecustomsections', 'customSections()')}}</td>
   <td>{{Spec2('WebAssembly JS')}}</td>
   <td>Brouillon de définition initiale pour WebAssembly.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WebAssembly.Module.customSections")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAssembly">Le portail WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Concepts">Les concepts relatifs à WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Using_the_JavaScript_API">Utiliser l'API JavaScript WebAssembly</a></li>
</ul>
