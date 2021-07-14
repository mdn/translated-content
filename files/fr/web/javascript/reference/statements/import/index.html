---
title: import
slug: Web/JavaScript/Reference/Statements/import
tags:
  - ECMAScript 2015
  - Instruction
  - JavaScript
  - Modules
  - import
translation_of: Web/JavaScript/Reference/Statements/import
original_slug: Web/JavaScript/Reference/Instructions/import
---
<div>{{jsSidebar("Statements")}}</div>

<p>L'instruction <code><strong>import</strong></code> est utilisée pour importer des liens qui sont exportés par un autre module. Les modules importés sont interprétés en <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a> dans tous les cas. L'instruction <code>import</code> ne peut pas être utilisée dans les scripts embarqués sauf si ceux-ci proviennent de ressources avec <code><a href="/fr/docs/Web/HTML/Element/script#Attributs">type="module"</a></code>.</p>

<div class="note">
<p><strong>Note :</strong> Il existe également une forme fonctionnelle, <code>import()</code> (cf. <a href="#dyn">ci-après</a>) qui permet d'avoir des chargements dynamiques. La compatibilité ascendante peut être atteinte en utilisant l'attribut <code>nomodule</code> sur la balise {{HTMLElement("script")}}.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">import <em>exportParDefaut</em> from "<em>nom-module</em>";
import * as <em>nom</em> from "<em>nom-module</em>";
import { <em>export </em>} from "<em>nom-module</em>";
import { <em>export</em> as <em>alias </em>} from "<em>nom-module</em>";
import { <em>export1 , export2</em> } from "<em>nom-module</em>";
import { <em>export1 , export2</em> as <em>alias2</em> , <em>[...]</em> } from "<em>nom-module</em>";
import <em>exportParDefaut</em>, { <em>export</em> [ , <em>[...]</em> ] } from "<em>nom-module</em>";
import <em>exportParDefaut</em>, * as <em>nom</em> from "<em>nom-module</em>";
import "<em>nom-module</em>";
import { <em>toto , truc</em> } from "<em>nom-module/chemin/vers/fichier-non-exporte</em>";
let <em>promesse</em> = import("<em>nom-module</em>");</pre>

<dl>
 <dt><code>exportParDefaut</code></dt>
 <dd>Nom qui fera référence à l'export par défaut du module.</dd>
 <dt><code>nom-module</code></dt>
 <dd>Le module depuis lequel importer. C'est souvent un chemin absolu ou relatif vers le fichier <code>.js</code> contenant le module. Certains empaqueteurs peuvent permettre ou requérir l'utilisation de l'extension ; vérifier votre environnement. Seules les String à apostrophes simples ou doubles sont autorisées.</dd>
 <dt><code>nom</code></dt>
 <dd>Nom de l'objet module qui sera utilisé comme un genre d'espace de noms lors de références aux imports.</dd>
 <dt><code>export</code>, <code>exportN</code></dt>
 <dd>Nom des exports à importer.</dd>
 <dt><code>alias</code>, <code>aliasN</code></dt>
 <dd>Noms qui feront référence aux imports nommés.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Le paramètre <code>nom</code> est le nom de l'"objet module" qui sera utilisé comme un genre d'espace de noms lors de références aux exports. Les paramètres <code>export</code> indiquent les exports nommés individuellement, tandis que la syntaxe <code>import * as nom</code> les importe tous. Ci-dessous d'autres exemples pour clarifier la syntaxe.</p>

<h3 id="Importer_lintégralité_du_contenu_dun_module">Importer l'intégralité du contenu d'un module</h3>

<p>Ce qui suit insère <code>monModule</code> dans la portée courante, contenant tous les exports  du module dans le fichier situé dans <code>/modules/mon-module.js</code>.</p>

<pre class="brush: js">import * as monModule from '/modules/mon-module.js';
</pre>

<p>Ici, accéder aux exports signifie utiliser le nom du module (ici <code>monModule</code>) comme un espace de noms. Par exemple, si le module importé ci-dessus incluait un export <code>faireToutesLesChosesIncroyables()</code>, vous l'écririez comme ceci :</p>

<pre class="brush: js">monModule.faireToutesLesChosesIncroyables();</pre>

<h3 id="Importer_un_seul_export_depuis_un_module">Importer un seul export depuis un module</h3>

<p>Étant donné un objet ou une valeur nommé(e) <code>monExport</code> qui est exporté(e) depuis le module <code>mon-module</code>, soit implicitement (parce que l'intégralité du module est exportée), soit explicitement (en utilisant l'instruction {{jsxref("Statements/export", "export")}}), ce qui suit insére <code>monExport</code> dans la portée courante.</p>

<pre class="brush: js">import {monExport} from '/modules/mon-module.js';</pre>

<h3 id="Importer_plusieurs_éléments_exportés_depuis_un_module">Importer plusieurs éléments exportés depuis un module</h3>

<p>Ce qui suit insère à la fois <code>machin</code> et <code>truc</code> dans la portée courante.</p>

<pre class="brush: js">import {machin, truc} from '/modules/mon-module.js';</pre>

<h3 id="Importer_un_élément_exporté_avec_un_alias">Importer un élément exporté avec un alias</h3>

<p>Vous pouvez renommer un export lors de l'importation. Par exemple, ce qui suit insére <code>nomCourt</code> dans la portée courante.</p>

<pre class="brush: js">import {nomDExportDeModuleVraimentVraimentLong as nomCourt}
  from '/modules/mon-module.js';</pre>

<h3 id="Renommer_plusieurs_exports_pendant_limport">Renommer plusieurs exports pendant l'import</h3>

<p>Importe des exports multiples depuis un module avec des alias commodes :</p>

<pre class="brush: js">import {
  nomDExportDeModuleVraimentVraimentLong as nomCourt,
  unAutreNomDeModuleLong as court
} from '/modules/mon-module.js';</pre>

<h3 id="Importer_un_module_uniquement_pour_ses_effets_de_bord">Importer un module uniquement pour ses effets de bord</h3>

<p>Importe un module complet pour ses effets de bord seulement, sans importer quoi que ce soit. Ce qui suit exécute le code global du module, mais n'importe en fait aucune valeur.</p>

<pre class="brush: js">import '/modules/mon-module.js';
</pre>

<h3 id="Importation_des_défauts">Importation des défauts</h3>

<p>Il est possible d'avoir un {{jsxref("Statements/export", "export")}} par défaut (que ce soit un objet, une fonction, une classe, etc.). L'instruction <code>import</code> peut alors être utilisée pour importer ces défauts.</p>

<p>La version la plus simple importe directement le défaut :</p>

<pre class="brush: js">import monDefaut from '/modules/mon-module.js';</pre>

<p>Il est également possible d'utiliser la syntaxe de défaut avec celles vues ci-dessus (imports d'espaces de noms ou imports nommés). Dans de tels cas, l'import par défaut devra être déclaré en premier. Par exemple :</p>

<pre class="brush: js">import monDefaut, * as monModule from '/modules/mon-module.js';
// monModule utilisé comme un espace de noms</pre>

<p>ou</p>

<pre class="brush: js">import monDefaut, {machin, truc} from '/modules/mon-module.js';
// imports nommés spécifiques
</pre>

<h3 id="Imports_dynamiques">Imports dynamiques</h3>

<p>Le mot-clé <code>import</code> peut être utilisé comme une fonction afin d'importer dynamiquement un module (utile lorsqu'on souhaite charger un module selon une condition donnée ou faire du chargement à la demande). Lorsqu'il est utilisé de cette façon, il renvoie une promesse :</p>

<pre class="brush: js">import('/modules/mon-module.js')
  .then((module) =&gt; {
    // Faire quelque chose avec le module
  });</pre>

<p>On peut utiliser cette forme avec le mot-clé <code>await</code> :</p>

<pre class="brush: js">let module = await import('/modules/mon-module.js');</pre>

<h2 id="Exemples">Exemples</h2>

<p>Importation depuis un module secondaire pour aider le traitement d'une requête AJAX JSON.</p>

<h3 id="Le_module_fichier.js">Le module : fichier.js</h3>

<pre class="brush: js; highlight: [14]">function getJSON(url, rappel) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    rappel(this.responseText)
  };
  xhr.open('GET', url, true);
  xhr.send();
}

export function recupererContenuUtile(url, rappel) {
  getJSON(url, donnees =&gt; rappel(JSON.parse(donnees)));
}</pre>

<h3 id="Le_programme_principal_principal.js">Le programme principal : principal.js</h3>

<pre class="brush: js">import { recupererContenuUtile } from '/modules/fichier.js';

recupererContenuUtile('http://www.example.com',
    donnees =&gt; { faireQuelqueChoseDUtile(donnees); });</pre>

<h3 id="Import_dynamique">Import dynamique</h3>

<p>Dans cet exemple, on voit comment charger une fonctionnalité sur une page lorsqu'un utilisateur effectue une certaine action. Ici, lorsque l'utilisateur clique sur un bouton, cela déclenche l'appel d'une fonction dans le module.</p>

<pre class="brush: js">const main = document.querySelector("main");
for (const link of document.querySelectorAll("nav &gt; a")) {
  link.addEventListener("click", e =&gt; {
    e.preventDefault();

    import('/modules/mon-module.js')
      .then(module =&gt; {
        module.loadPageInto(main);
      })
      .catch(err =&gt; {
        main.textContent = err.message;
      });
  });
}

;</pre>

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
   <td><a href="https://github.com/tc39/proposal-dynamic-import/#import">Proposition pour les imports dynamiques « fonctionnels »</a></td>
   <td>Proposition de niveau 4</td>
   <td>Fera partie de ECMAScript 2020</td>
  </tr>
  <tr>
   <td>{{SpecName("ESDraft", "#sec-imports", "Imports")}}</td>
   <td>{{Spec2("ESDraft")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("ES2018", "#sec-imports", "Imports")}}</td>
   <td>{{Spec2("ES2018")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("ES2017", "#sec-imports", "Imports")}}</td>
   <td>{{Spec2("ES2017")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("ES2016", "#sec-imports", "Imports")}}</td>
   <td>{{Spec2("ES2016")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("ES2015", "#sec-imports", "Imports")}}</td>
   <td>{{Spec2("ES2015")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.import")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Instructions/export", "export")}}</li>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/import.meta">import.meta</a></code></li>
 <li>Limin Zhu, Brian Terlson et l'équipe Microsoft Edge : <a href="https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/">Previewing ES6 Modules and more from ES2015, ES2016 and beyond</a></li>
 <li><a href="https://tech.mozfr.org/post/2015/08/21/ES6-en-details-%3A-les-modules">Jason Orendorff : ES6 en détails : les modules</a></li>
 <li><a class="external" href="https://exploringjs.com/es6/ch_modules.html">Le livre d'Axel Rauschmayer : Exploring JS: Modules</a></li>
 <li><a href="https://tech.mozfr.org/post/2018/04/06/Une-plongee-illustree-dans-les-modules-ECMAScript">Un billet illustré de Lin Clark, traduit en français, sur les modules</a></li>
 <li><a href="https://javascript.info/import-export">Tutoriel JavaScript sur <code>export</code> et <code>import</code></a></li>
</ul>
