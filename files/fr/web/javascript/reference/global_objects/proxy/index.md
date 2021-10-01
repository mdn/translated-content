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
{{JSRef}}

L'objet **Proxy** est utilisé afin de définir un comportement sur mesure pour certaines opérations fondamentales (par exemple, l'accès aux propriétés, les affectations, les énumérations, les appels de fonctions, etc.).

## Terminologie

- [gestionnaire](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Proxy/handler) (_handler_)
  - : Un objet qui contient les trappes qui intercepteront les opérations.
- trappes
  - : Les méthodes qui fournissent l'accès aux propriétés. Ce concept est analogue aux [trappes](https://en.wikipedia.org/wiki/Trap_%28computing%29) utilisées dans les systèmes d'exploitations.
- cible
  - : L'objet virtualisé par le proxy. Il est souvent utilisé comme objet de stockage. Les invariants (c'est-à-dire les éléments de sémantique qui restent inchangés) relatifs à la non-extensibilité et au caractère non-configurable des propriétés sont vérifiés par rapport à la cible.

## Syntaxe

    var p = new Proxy(cible, gestionnaire);

### Paramètres

- `cible`
  - : Une cible (qui peut être n'importe quel objet, un tableau, une fonction, ou même un autre proxy) qu'on souhaite envelopper dans un `Proxy`.
- `gestionnaire`
  - : Un objet dont les propriétés sont des fonctions qui définissent le comportement du proxy lorsqu'on utilise une opération sur celui-ci.

## Méthodes

- {{jsxref("Proxy.revocable()")}}
  - : Permet de créer un objet `Proxy` révocable.

## Méthodes pour le gestionnaire

L'objet utilisé comme gestionnaire regroupe les différentes fonctions « trappes » pour le `Proxy`.

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Proxy/handler', 'Méthodes') }}

## Exemples

### Exemple simple

Dans ce court exemple, on renvoie le nombre `37` comme valeur par défaut lorsque la propriété nommée n'est pas présente dans l'objet. Pour cela, on utilise le gestionnaire correspondant à {{jsxref("Objets_globaux/Proxy/handler/get","get")}}.

```js
var handler = {
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
```

### Proxy « invisible »

Dans cet exemple, le proxy transfère toutes les opérations qui sont appliquées à l'objet cible.

```js
var cible = {};
var p = new Proxy(cible, {});

p.a = 37; // L'opération est transmise à la cible par le proxy

console.log(cible.a); // 37. L'opération a bien été transmise
```

### Validation

En utilisant un `Proxy`, il devient simple de valider les valeurs passées à un objet. Dans cet exemple, on utilise le gestionnaire correspondant à {{jsxref("Objets_globaux/Proxy/handler/set","set")}}.

```js
let validateur = {
  set: function(obj, prop, valeur) {
    if (prop === 'âge') {
      if (!Number.isInteger(valeur)) {
        throw new TypeError('Cet âge n\'est pas un entier.');
      }
      if (valeur > 200) {
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
```

### Étendre un constructeur

En utilisant une fonction proxy, on peut étendre un constructeur avec un nouveau constructeur. Dans cet exemple, on utilise les gestionnaires correspondants à {{jsxref("Objets_globaux/Proxy/handler/construct","construct")}} et {{jsxref("Objets_globaux/Proxy/handler/apply","apply")}}.

```js
function étendre(sup,base) {
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
console.log(Pierre.âge);  // 13
```

### Manipuler les nœuds DOM

Parfois, on veut passer un attribut ou un nom de classe entre deux éléments différents. Dans cet exemple, on utilise le gestionnaire lié à {{jsxref("Objets_globaux/Proxy/handler/set","set")}}.

```js
let vue = new Proxy({
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
```

### Corriger une valeur et ajouter une propriété supplémentaire

Dans l'exemple qui suit, le proxy `produits` évalue la valeur passée et la convertit en tableau si besoin. L'objet supporte également la propriété supplémentaire `dernierNavigateur` à la fois comme accesseur et mutateur.

```js
let produits = new Proxy({
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
console.log(produits.navigateurs); // ['Firefox'] <- pas de problème, elle est convertie en tableau

produits.dernierNavigateur = 'Chrome';
console.log(produits.navigateurs); // ['Firefox', 'Chrome']
console.log(produits.dernierNavigateur); // 'Chrome'
```

### Trouver un élément dans un tableau grâce à sa propriété

Dans cet exemple, ce proxy étend le tableau avec des fonctionnalités supplémentaires. Ici, on définit des propriétés sans utiliser {{jsxref("Objets_globaux/Object/defineProperties","Object.defineProperties")}}. Cet exemple pourrait être adapté pour trouver la ligne d'un tableau à partir d'une de ces cellules (la cible serait alors [`table.rows`](/fr/docs/Web/API/HTMLTableElement.rows)).

```js
let produits = new Proxy([
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
```

### Un exemple avec toutes les trappes

Pour illustrer l'ensemble des trappes, on tente de « proxifier » un objet non natif : l'objet global `docCookies` créé grâce à [cet exemple](/fr/docs/Web/API/Document/cookie/Simple_document.cookie_framework).

```js
/*
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
    if (oDesc && "value" in oDesc) { oTarget.setItem(sKey, oDesc.value); }
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
console.log(docCookies.mon_cookie1);
```

## Spécifications

| Spécification                                                            | État                         | Commentaires         |
| ------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-proxy-objects', 'Proxy')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ES2016', '#sec-proxy-objects', 'Proxy')}} | {{Spec2('ES2016')}}     |                      |
| {{SpecName('ES2017', '#sec-proxy-objects', 'Proxy')}} | {{Spec2('ES2017')}}     |                      |
| {{SpecName('ESDraft', '#sec-proxy-objects', 'Proxy')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Proxy", 2)}}

## Voir aussi

- [“Proxies are awesome”, une présentation de Brendan Eich à JSConf](https://www.youtube.com/watch?v=sClk6aB_CPk) (en anglais) ([présentation](https://www.slideshare.net/BrendanEich/metaprog-5303821))
- [La page pour la proposition ECMAScript Harmony sur Proxy](https://wiki.ecmascript.org/doku.php?id=harmony:proxies) et [la page sur la sémantique des proxies ECMAScript Harmony](https://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics)
- [Un tutoriel sur les proxies](http://web.archive.org/web/20171007221059/http://soft.vub.ac.be/~tvcutsem/proxies/) (en anglais)
- [L'ancienne API pour les Proxy SpiderMonkey](/fr/docs/JavaScript/Old_Proxy_API)
- {{jsxref("Object.watch()")}}, une fonctionnalité non-standard présente dans Gecko.

## Notes de licence

Certains composants de cette page (texte, exemples) ont été copiés ou adaptés du [Wiki ECMAScript](https://wiki.ecmascript.org/doku.php) dont le contenu est sous licence [CC 2.0 BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/2.0/).
