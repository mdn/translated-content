---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
tags:
  - ECMAScript 2015
  - JavaScript
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy
---
<div>{{JSRef}}</div>

<p>L'objet <strong>Proxy</strong> est utilisé afin de définir un comportement sur mesure pour certaines opérations fondamentales (par exemple, l'accès aux propriétés, les affectations, les énumérations, les appels de fonctions, etc.).</p>

<h2 id="Terminologie">Terminologie</h2>

<dl>
 <dt><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Proxy/handler">gestionnaire</a> (<em>handler</em>)</dt>
 <dd>Un objet qui contient les trappes qui intercepteront les opérations.</dd>
 <dt>trappes</dt>
 <dd>Les méthodes qui fournissent l'accès aux propriétés. Ce concept est analogue aux <a href="https://en.wikipedia.org/wiki/Trap_%28computing%29">trappes</a> utilisées dans les systèmes d'exploitations.</dd>
 <dt>cible</dt>
 <dd>L'objet virtualisé par le proxy. Il est souvent utilisé comme objet de stockage. Les invariants (c'est-à-dire les éléments de sémantique qui restent inchangés) relatifs à la non-extensibilité et au caractère non-configurable des propriétés sont vérifiés par rapport à la cible.</dd>
</dl>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var p = new Proxy(cible, gestionnaire);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>cible</code></dt>
 <dd>Une cible (qui peut être n'importe quel objet, un tableau, une fonction, ou même un autre proxy) qu'on souhaite envelopper dans un <code>Proxy</code>.</dd>
 <dt><code>gestionnaire</code></dt>
 <dd>Un objet dont les propriétés sont des fonctions qui définissent le comportement du proxy lorsqu'on utilise une opération sur celui-ci.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{jsxref("Proxy.revocable()")}}</dt>
 <dd>Permet de créer un objet <code>Proxy</code> révocable.</dd>
</dl>

<h2 id="Méthodes_pour_le_gestionnaire">Méthodes pour le gestionnaire</h2>

<p>L'objet utilisé comme gestionnaire regroupe les différentes fonctions « trappes » pour le <code>Proxy</code>.</p>

<div>{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Proxy/handler', 'Méthodes') }}</div>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_simple">Exemple simple</h3>

<p>Dans ce court exemple, on renvoie le nombre <code>37</code> comme valeur par défaut lorsque la propriété nommée n'est pas présente dans l'objet. Pour cela, on utilise le gestionnaire correspondant à {{jsxref("Objets_globaux/Proxy/handler/get","get")}}.</p>

<pre class="brush: js">var handler = {
    get: function(obj, prop){
        return prop in obj?
            obj[prop] :
            37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37
</pre>

<h3 id="Proxy_«_invisible_»">Proxy « invisible »</h3>

<p>Dans cet exemple, le proxy transfère toutes les opérations qui sont appliquées à l'objet cible.</p>

<pre class="brush: js">var cible = {};
var p = new Proxy(cible, {});

p.a = 37; // L'opération est transmise à la cible par le proxy

console.log(cible.a); // 37. L'opération a bien été transmise
</pre>

<h3 id="Validation">Validation</h3>

<p>En utilisant un <code>Proxy</code>, il devient simple de valider les valeurs passées à un objet. Dans cet exemple, on utilise le gestionnaire correspondant à {{jsxref("Objets_globaux/Proxy/handler/set","set")}}.</p>

<pre class="brush: js">let validateur = {
  set: function(obj, prop, valeur) {
    if (prop === 'âge') {
      if (!Number.isInteger(valeur)) {
        throw new TypeError('Cet âge n\'est pas un entier.');
      }
      if (valeur &gt; 200) {
        throw new RangeError('Cet âge semble invalide.');
      }
    }

    // Le comportement par défaut : enregistrer la valeur
    obj[prop] = valeur;

    // On indique le succès de l'opération
    return true;
  }
};

let personne = new Proxy({}, validateur);

personne.âge = 100;
console.log(personne.âge); // 100
personne.âge = 'jeune';    // lève une exception
personne.âge = 300;        // lève une exception
</pre>

<h3 id="Étendre_un_constructeur">Étendre un constructeur</h3>

<p>En utilisant une fonction proxy, on peut étendre un constructeur avec un nouveau constructeur. Dans cet exemple, on utilise les gestionnaires correspondants à {{jsxref("Objets_globaux/Proxy/handler/construct","construct")}} et {{jsxref("Objets_globaux/Proxy/handler/apply","apply")}}.</p>

<pre class="brush: js">function étendre(sup,base) {
  var descripteur = Object.getOwnPropertyDescriptor(
    base.prototype, "constructor"
  );
  base.prototype = Object.create(sup.prototype);
  var gestionnaire = {
    construct: function(cible, args) {
      var obj = Object.create(base.prototype);
      this.apply(cible,obj,args);
      return obj;
    },
    apply: function(cible, that, args) {
      sup.apply(that,args);
      base.apply(that,args);
    }
  };
  var proxy = new Proxy(base,gestionnaire);
  descripteur.value = proxy;
  Object.defineProperty(base.prototype, "constructor", descripteur);
  return proxy;
}

var Personne = function(nom){
  this.nom = nom;
};

var Garçon = étendre(Personne, function(nom, âge) {
  this.âge = âge;
});

Garçon.prototype.genre = "M";

var Pierre = new Garçon("Pierre", 13);
console.log(Pierre.genre);  // "M"
console.log(Pierre.nom);  // "Pierre"
console.log(Pierre.âge);  // 13</pre>

<h3 id="Manipuler_les_nœuds_DOM">Manipuler les nœuds DOM</h3>

<p>Parfois, on veut passer un attribut ou un nom de classe entre deux éléments différents. Dans cet exemple, on utilise le gestionnaire lié à {{jsxref("Objets_globaux/Proxy/handler/set","set")}}.</p>

<pre class="brush: js">let vue = new Proxy({
  selected: null
},
{
  set: function(obj, prop, nouvelleValeur) {
    let ancienneValeur = obj[prop];

    if (prop === 'selected') {
      if (ancienneValeur) {
        ancienneValeur.setAttribute('aria-selected', 'false');
      }
      if (nouvelleValeur) {
        nouvelleValeur.setAttribute('aria-selected', 'true');
      }
    }

    // Le comportement par défaut : enregistrer la valeur
    obj[prop] = nouvelleValeur;

    // On indique le succès de l'opération
    return true;
  }
});

let i1 = vue.selected = document.getElementById('item-1');
console.log(i1.getAttribute('aria-selected')); // 'true'

let i2 = vue.selected = document.getElementById('item-2');
console.log(i1.getAttribute('aria-selected')); // 'false'
console.log(i2.getAttribute('aria-selected')); // 'true'
</pre>

<h3 id="Corriger_une_valeur_et_ajouter_une_propriété_supplémentaire">Corriger une valeur et ajouter une propriété supplémentaire</h3>

<p>Dans l'exemple qui suit, le proxy <code>produits</code> évalue la valeur passée et la convertit en tableau si besoin. L'objet supporte également la propriété supplémentaire <code>dernierNavigateur</code> à la fois comme accesseur et mutateur.</p>

<pre class="brush: js">let produits = new Proxy({
  navigateurs: ['Internet Explorer', 'Netscape']
},
{
  get: function(obj, prop) {
    // Une propriété supplémentaire
    if (prop === 'dernierNavigateur') {
      return obj.navigateurs[obj.navigateurs.length - 1];
    }

    // Le comportement par défaut : renvoyer la valeur
    return obj[prop];
  },
  set: function(obj, prop, valeur) {
    // Une propriété supplémentaire
    if (prop === 'dernierNavigateur') {
      obj.navigateurs.push(valeur);
      return true;
    }

    // on convertit la valeur si ce n'est pas un tableau
    if (typeof valeur === 'string') {
      valeur = [valeur];
    }

    // Le comportement par défaut : enregistrer la valeur
    obj[prop] = valeur;

    // On indique le succès de l'opération
    return true;
  }
});

console.log(produits.navigateurs); // ['Internet Explorer', 'Netscape']
produits.navigateurs = 'Firefox'; // on passe une chaîne
console.log(produits.navigateurs); // ['Firefox'] &lt;- pas de problème, elle est convertie en tableau

produits.dernierNavigateur = 'Chrome';
console.log(produits.navigateurs); // ['Firefox', 'Chrome']
console.log(produits.dernierNavigateur); // 'Chrome'
</pre>

<h3 id="Trouver_un_élément_dans_un_tableau_grâce_à_sa_propriété">Trouver un élément dans un tableau grâce à sa propriété</h3>

<p>Dans cet exemple, ce proxy étend le tableau avec des fonctionnalités supplémentaires. Ici, on définit des propriétés sans utiliser {{jsxref("Objets_globaux/Object/defineProperties","Object.defineProperties")}}. Cet exemple pourrait être adapté pour trouver la ligne d'un tableau à partir d'une de ces cellules (la cible serait alors <a href="/fr/docs/Web/API/HTMLTableElement.rows"><code>table.rows</code></a>).</p>

<pre class="brush: js">let produits = new Proxy([
  { nom: 'Firefox', type: 'navigateur' },
  { nom: 'SeaMonkey', type: 'navigateur' },
  { nom: 'Thunderbird', type: 'client mail' }
],
{
  get: function(obj, prop) {
    // Le comportement par défaut : on renvoie la valeur
    // prop est généralement un entier
    if (prop in obj) {
      return obj[prop];
    }

    // On obtient le nombre de produits
    // un alias pour products.length
    if (prop === 'nombre') {
      return obj.length;
    }

    let résultat, types = {};

    for (let produit of obj) {
      if (produit.nom === prop) {
        résultat = produit;
      }
      if (types[produit.type]) {
        types[produit.type].push(produit);
      } else {
        types[produit.type] = [produit];
      }
    }

    // Obtenir un produit grâce à un nom
    if (résultat) {
      return résultat;
    }

    // Obtenir un produit par type
    if (prop in types) {
      return types[prop];
    }

    // Obtenir les types de produits
    if (prop === 'types') {
      return Object.keys(types);
    }

    return undefined;
  }
});

console.log(produits[0]); // { nom: 'Firefox', type: 'navigateur' }
console.log(produits['Firefox']); // { nom: 'Firefox', type: 'navigateur' }
console.log(produits['Chrome']); // undefined
console.log(produits.navigateur); // [{ nom: 'Firefox', type: 'navigateur' }, { nom: 'SeaMonkey', type: 'navigateur' }]
console.log(produits.types); // ['navigateur', 'client mail']
console.log(produits.nombre); // 3
</pre>

<h3 id="Un_exemple_avec_toutes_les_trappes">Un exemple avec toutes les trappes</h3>

<p>Pour illustrer l'ensemble des trappes, on tente de « proxifier » un objet non natif : l'objet global <code>docCookies</code> créé grâce à <a href="/fr/docs/Web/API/Document/cookie/Simple_document.cookie_framework">cet exemple</a>.</p>

<pre class="brush: js">/*
  var docCookies = ... définir l'objet "docCookies" grâce à
  https://developer.mozilla.org/en-US/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support
*/

var docCookies = new Proxy(docCookies, {
  "get": function (oTarget, sKey) {
    return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
  },
  "set": function (oTarget, sKey, vValue) {
    if (sKey in oTarget) { return false; }
    return oTarget.setItem(sKey, vValue);
  },
  "deleteProperty": function (oTarget, sKey) {
    if (sKey in oTarget) { return false; }
    return oTarget.removeItem(sKey);
  },
  "enumerate": function (oTarget, sKey) {
    return oTarget.keys();
  },
  "ownKeys": function (oTarget, sKey) {
    return oTarget.keys();
  },
  "has": function (oTarget, sKey) {
    return sKey in oTarget || oTarget.hasItem(sKey);
  },
  "defineProperty": function (oTarget, sKey, oDesc) {
    if (oDesc &amp;&amp; "value" in oDesc) { oTarget.setItem(sKey, oDesc.value); }
    return oTarget;
  },
  "getOwnPropertyDescriptor": function (oTarget, sKey) {
    var vValue = oTarget.getItem(sKey);
    return vValue ? {
      "value": vValue,
      "writable": true,
      "enumerable": true,
      "configurable": false
    } : undefined;
  },
});

/* Cookies test */

console.log(docCookies.mon_cookie1 = "Première valeur");
console.log(docCookies.getItem("mon_cookie1"));

docCookies.setItem("mon_cookie1", "Valeur modifiée");
console.log(docCookies.mon_cookie1);</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-proxy-objects', 'Proxy')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2016', '#sec-proxy-objects', 'Proxy')}}</td>
   <td>{{Spec2('ES2016')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES2017', '#sec-proxy-objects', 'Proxy')}}</td>
   <td>{{Spec2('ES2017')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-objects', 'Proxy')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Proxy", 2)}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://www.youtube.com/watch?v=sClk6aB_CPk">“Proxies are awesome”, une présentation de Brendan Eich à JSConf</a> (en anglais) (<a href="https://www.slideshare.net/BrendanEich/metaprog-5303821">présentation</a>)</li>
 <li><a href="https://wiki.ecmascript.org/doku.php?id=harmony:proxies">La page pour la proposition ECMAScript Harmony sur Proxy</a> et <a href="https://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics">la page sur la sémantique des proxies ECMAScript Harmony</a></li>
 <li><a href="http://web.archive.org/web/20171007221059/http://soft.vub.ac.be/~tvcutsem/proxies/">Un tutoriel sur les proxies</a> (en anglais)</li>
 <li><a href="/fr/docs/JavaScript/Old_Proxy_API">L'ancienne API pour les Proxy SpiderMonkey</a></li>
 <li>{{jsxref("Object.watch()")}}, une fonctionnalité non-standard présente dans Gecko.</li>
</ul>

<h2 id="Notes_de_licence">Notes de licence</h2>

<p>Certains composants de cette page (texte, exemples) ont été copiés ou adaptés du <a href="https://wiki.ecmascript.org/doku.php">Wiki ECMAScript</a> dont le contenu est sous licence <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/">CC 2.0 BY-NC-SA</a>.</p>
