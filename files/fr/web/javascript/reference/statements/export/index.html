---
title: export
slug: Web/JavaScript/Reference/Statements/export
tags:
  - ECMAScript 2015
  - Instruction
  - JavaScript
  - Modules
  - export
translation_of: Web/JavaScript/Reference/Statements/export
original_slug: Web/JavaScript/Reference/Instructions/export
---
<div>{{jsSidebar("Statements")}}</div>

<p>L'instruction <strong><code>export</code></strong> est utilisée lors de la création de modules JavaScript pour exporter des fonctions, des objets ou des valeurs primitives à partir du module, de sorte qu'ils puissent être utilisés par d'autres programmes grâce à l'instruction {{jsxref("Instructions/import", "import")}}.</p>

<p>Les modules exportés sont interprétés en <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a> dans tous les cas. L'instruction <code>export</code> ne peut pas être utilisée dans les scripts embarqués.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">// Exporter des propriétés individuelles
export let <var>nom1</var>, <var>nom2</var>, …, <var>nomN</var>; // utilisable avec var, const
export let <var>nom1</var> = …, <var>nom2</var> = …, …, <var>nomN</var>; // utilisable avec var, const
export function nomFonction(){...}
export class NomClasse {...}

// Export d'une liste de valeur
export { <var>nom1</var>, <var>nom2</var>, …, <var>nomN</var> };

// Renommage des valeurs exportées
export { <var>variable1</var> as <var>nom1</var>, <var>variable2</var> as <var>nom2</var>, …, <var>nomN</var> };

// Renommage avec la décomposition pour l'affectation
export const { <var>nom1</var>, <var>nom2: truc</var><var> </var>} = o;

// Exports par défauts
export default <em>expression</em>;
export default function (…) { … } // fonctionne avec class, function*
export default function nom1(…) { … } // fonctionne avec class, function*
export { <var>nom1</var> as default, … };

// Agrégation de modules
export * from …;
export { <var>nom1</var>, <var>nom2</var>, …, <var>nomN</var> } from …;
export { <var>import1</var> as <var>nom1</var>, <var>import2</var> as <var>nom2</var>, …, <var>nomN</var> } from …;
export { default } from …;</pre>

<dl>
 <dt><code>nomN</code></dt>
 <dd>Identifiant à exporter (afin qu'il puisse être importé via {{jsxref("Statements/import", "import")}} dans un autre script).</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Il existe deux types d'export différents : les exports <strong>nommés</strong> et les exports <strong>par défaut</strong>. Il est possible d'avoir plusieurs exports nommés mais un seul export par défaut. Chaque type correspond à une des syntaxes ci-dessus :</p>

<ul>
 <li>Les exports nommés :
  <pre class="brush: js">// exporte une fonction déclarée précédemment
export { maFonction };

// exporte une constante
export const machin = Math.sqrt(2);</pre>
 </li>
 <li>Les exports par défaut (fonction) :
  <pre class="brush: js">export default function() {} </pre>
 </li>
 <li>Les exports par défaut (classe) :
  <pre class="brush: js">export default class {} </pre>
 </li>
</ul>

<p>Les exports nommés sont utiles pour exporter plusieurs valeurs. Lors de l'importation, il est obligatoire d'utiliser le même nom de l'objet correspondant.</p>

<p>Mais un export par défaut peut être importé avec n'importe quel nom, par exemple :</p>

<pre class="brush: js">let k;
export default k = 12; // dans le fichier test.js
import m from './test'; // notez que nous avons la liberté d'utiliser import m au lieu de import k, parce que k était l'export par défaut
console.log (m); // enregistrera 12</pre>

<p>La syntaxe suivante n'exporte pas le défaut depuis le module importé :</p>

<pre class="brush: js">export * from …;</pre>

<p>Si vous avez besoin d'exporter le défaut, écrivez ce qui suit à la place :</p>

<pre class="brush: js">export {default} from 'mod';</pre>

<p>Il est possible de renommer un export afin d'éviter des conflits de nommage :</p>

<pre class="brush: js">export { maFonction as fonction1
         maVariable as variable1 };</pre>

<p>On peut également agréger les valeurs exportées à celles d'autres modules qu'on aurait importés :</p>

<pre class="brush: js">// Dans moduleParent.js
export { maFonction, maVariable } from 'moduleFils1.js';
export { maClasse } from 'moduleFils2.js'

// Dans le module de plus haut niveau
import { maFonction, maVariable, maClasse } from 'moduleParent.js';</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utilisation_d'exports_nommés">Utilisation d'exports nommés</h3>

<p>Dans le module, on pourra utiliser le code suivant :</p>

<pre class="brush: js">// module "mon-module.js"
function cube(x) {
  return x * x * x;
}
const machin = Math.PI + Math.SQRT2;
export { cube, machin };
</pre>

<p>De cette façon, dans un autre script, on pourra avoir :</p>

<pre class="brush: js">import { cube, machin } from 'mon-module';
console.log(cube(3)); // 27
console.log(machin);    // 4.555806215962888</pre>

<div class="note">
<p><strong>Note :</strong> Si l'import est réalisé dans un script HTML, il faut que celui-ci soit chargé avec l'attribut {{htmlattrxref("type")}} <code>"module"</code> : <code>&lt;script type="module" src="./demo.js"&gt;&lt;/script&gt;</code> sinon il y aura une erreur quant aux origines multiples (<a href="/fr/docs/Web/HTTP/CORS">CORS</a>).<br>
 Il n'est pas possible de charger des modules JavaScript via une URL <code>file://</code> pour des raisons de sécurité (voir <a href="/fr/docs/Web/HTTP/CORS">CORS</a> également). Il faudra utiliser un serveur HTTP.</p>
</div>

<h3 id="Utilisation_d'exports_par_défaut">Utilisation d'exports par défaut</h3>

<p>Si on souhaite n'exporter qu'une seule valeur ou avoir une valeur de secours<em> </em>pour le module, on peut utiliser un export par défaut :</p>

<pre class="brush: js">// module "mon-module.js"
export default function cube(x) {
  return x * x * x;
}
</pre>

<p>Alors, dans un autre script, il sera facile d'importer l'export par défaut :</p>

<pre class="brush: js">import cube from './mon-module.js';
console.log(cube(3)); // 27
</pre>

<p>Notez qu'il n'est pas possible d'utiliser <code>var</code>, <code>let</code> ou <code>const</code> avec <code>export default</code>.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-exports', 'Exports')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-exports', 'Exports')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.export")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Instructions/import", "import")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Modules">Guide sur les modules JavaScript</a></li>
 <li><a href="https://hacks.mozilla.org/2015/08/es6-in-depth-modules/">ES6 in Depth: Modules</a>, Hacks blog post par Jason Orendorff</li>
 <li><a href="https://exploringjs.com/es6/ch_modules.html">Livre d'Axel Rauschmayer : "Exploring JS: Modules"</a></li>
 <li><a href="https://tech.mozfr.org/post/2018/04/06/Une-plongee-illustree-dans-les-modules-ECMAScript">Un billet illustré de Lin Clark, traduit en français, sur les modules</a></li>
</ul>
