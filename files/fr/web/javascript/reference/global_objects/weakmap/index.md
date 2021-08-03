---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
tags:
  - ECMAScript 2015
  - JavaScript
  - Reference
  - WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap
original_slug: Web/JavaScript/Reference/Objets_globaux/WeakMap
---
<div>{{JSRef}}</div>

<p>L'objet <strong><code>WeakMap</code></strong> représente une collection de paires clé-valeur dont les clés sont des objets et pour lesquelles les références sont « faibles » et les valeurs des valeurs quelconques.</p>

<div class="note">
<p><strong>Note :</strong> vous pouvez en savoir plus sur les <code>WeakMap</code> en lisant l'article sur <a href="/fr/docs/Web/JavaScript/Guide/Collections_avec_clés#Le_type_WeakMap">les collections à clé</a>.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">new WeakMap([<var>itérable</var>])
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>itérable</code></dt>
 <dd>Paramètre optionnel. Un tableau (objet <code>Array</code>) ou tout autre objet itérable dont les éléments sont des paires composées d'une clé et d'une valeur (des tableaux de 2 éléments). Chaque paire sera ajoutée à la carte (<em>map</em> en anglais). {{jsxref("null")}} sera traité comme {{jsxref("undefined")}}.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Les clés des objets <code>WeakMap</code> sont nécessairement du type <code>Object</code>. {{Glossary("Primitive", "Des types de données primitifs")}} ne sont pas autorisés pour les clés (ex : un {{jsxref("Symbol")}} ne peut pas être une clé dans un <code>WeakMap</code>).</p>

<p>Les clés d'une <code>WeakMap</code> sont référencées <em>faiblement</em>. Cela signifie que s'il n'existe aucune autre référence « forte » vers la clé, l'élément (la clé et la valeur) sera retiré de la <code>WeakMap</code> par le ramasse-miettes.</p>

<h3 id="Pourquoi_WeakMap">Pourquoi <em>Weak</em>Map ?</h3>

<p>Avec un certain recul, on peut voir que cette API aurait pu être implémentée en JavaScript grâce à deux tableaux (un tableau pour stocker les clés, l'autre pour les valeurs) associées à 4 méthodes.</p>

<p>Une telle implémentation présente deux inconvénients principaux. Le premier est que la recherche serait effectué en O(n) (avec n le nombre de clés). Le second inconvénient concerne les fuites mémoires. Si la carte (<em>map</em>) est construite manuellement, le tableau contenant les clés serait obligé de garder les références vers les objets que sont les clés, ce qui les empêcheraient d'être nettoyés par le ramasse-miette. Grâce aux objets natifs <code>WeakMap</code>, les références vers les clés sont faibles (<em>weak</em>) ce qui permet au ramasse miette de nettoyer l'objet au cas où il n'y aurait pas d'autres références vers cet objet.</p>

<p>Étant donné que les références sont faibles, il est impossible d'énumérer les clés des objets <code>WeakMap</code> (c'est-à-dire qu'on ne dispose pas d'une méthode renvoyant la liste des clés). Si c'était le cas, la liste dépendrait d'un état lié au ramasse-miette et il n'y aurait pas de façon déterministe de connaître le résultat. Si vous souhaitez avoir une liste de clés, vous devriez plutôt utiliser un objet {{jsxref("Map")}}.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt><code>WeakMap.length</code></dt>
 <dd>La valeur de la propriété <code>length</code> vaut 0.</dd>
 <dt>{{jsxref("WeakMap.prototype")}}</dt>
 <dd>Cette propriété représente le prototype du constructeur <code>WeakMap</code>. Il permet d'ajouter des propriétés pour toutes les instances de <code>WeakMap</code>.</dd>
</dl>

<h2 id="Instances_de_WeakMap">Instances de <code>WeakMap</code></h2>

<p>Toutes les instances de <code>WeakMap</code> héritent de {{jsxref("WeakMap.prototype")}}.</p>

<h3 id="Propriétés_2">Propriétés</h3>

<p>{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/WeakMap/prototype','Properties')}}</p>

<h3 id="Méthodes">Méthodes</h3>

<p>{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/WeakMap/prototype','Methods')}}</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_WeakMap">Utiliser <code>WeakMap</code></h3>

<pre class="brush: js">var wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();
var o1 = {},
    o2 = function(){},
    o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // une valeur peut être n'importe quoi, y compris un objet ou une fonction
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // Les clés et les valeurs peuvent n'importe quels objets, y compris des WeakMap

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined car il n'y a pas de valeur pour o2 sur wm2
wm2.get(o3); // undefined car c'est la valeur utilisée

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (même si la valeur est 'undefined')

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1);   // true
wm1.delete(o1);
wm1.has(o1);   // false

</pre>

<h3 id="Implémenter_une_classe_semblable_à_WeakMap_avec_une_méthode_.clear()">Implémenter une classe semblable à <code>WeakMap</code> avec une méthode .clear()</h3>

<pre class="brush: js">class ClearableWeakMap {
    constructor(init) {
        this._wm = new WeakMap(init)
    }
    clear() {
        this._wm = new WeakMap()
    }
    delete(k) {
        return this._wm.delete(k)
    }
    get(k) {
        return this._wm.get(k)
    }
    has(k) {
        return this._wm.has(k)
    }
    set(k, v) {
        this._wm.set(k, v)
        return this
    }
}
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
   <td>{{SpecName('ESDraft', '#sec-weakmap-objects', 'WeakMap')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-weakmap-objects', 'WeakMap')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WeakMap")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a class="link-https" href="/fr/docs/Web/JavaScript/Guide/Collections_avec_clés#Le_type_WeakMap">Le guide sur les collections à clé JavaScript</a></li>
 <li><a href="https://fitzgeraldnick.com/weblog/53/">Masquer des détails d'implémentation avec les WeakMaps ECMAScript 2015</a> (en anglais)</li>
 <li>{{jsxref("Map")}}</li>
 <li>{{jsxref("Set")}}</li>
 <li>{{jsxref("WeakSet")}}</li>
</ul>
