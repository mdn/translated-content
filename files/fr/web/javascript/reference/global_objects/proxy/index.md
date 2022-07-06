---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy
browser-compat: javascript.builtins.Proxy
---
{{JSRef}}

Un objet **Proxy** permet de créer un intermédiaire pour un autre objet et qui peut intercepter et redéfinir certaines opérations fondamentales pour lui.

## Description

Un objet `Proxy` permet de créer un objet qui peut être utilisé à la place de l'objet original en redéfinissant certaines opérations fondamentales comme l'accès, la modification et la définition de propriétés. Les objets `Proxy` sont généralement utilisés pour journaliser l'accès aux propriétés, valider, formater ou nettoyer des valeurs saisies, etc.

La création d'un objet `Proxy` se fait avec deux paramètres&nbsp;:

- `cible`
  - : L'objet original devant lequel on veut placer un intermédiaire
- `gestionnaire`
  - : Un objet qui définit les opérations qui seront interceptées et comment celles-ci seront redéfinies.

Dans l'exemple qui suit, on a une cible simple avec deux propriétés et un gestionnaire encore plus simple, sans propriété.

```js
const cible = {
  message1: "coucou",
  message2: "tout le monde"
};

const gestionnaire1 = {};

const proxy1 = new Proxy(cible, gestionnaire1);
```

Le gestionnaire étant vide, le proxy se comporte à l'identique de la cible&nbsp;:

```js
console.log(proxy1.message1); // coucou
console.log(proxy1.message2); // tout le monde
```

Pour adapter le proxy, on définit des fonctions sur le gestionnaire&nbsp;:

```js
const cible = {
  message1: "coucou",
  message2: "tout le monde"
};

const gestionnaire2 = {
  get(cible, prop, recepteur) {
    return "le monde";
  }
};

const proxy2 = new Proxy(cible, gestionnaire2);
```

Ici, on a fourni une implémentation du gestionnaire [`get()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get), qui intercepte les tentatives d'accès aux propriétés de la cible.

Les fonctions d'un gestionnaire sont parfois appelées des _trappes_, car les appels originaux tombent dans ces trappes. Celle qui est utilisée dans `gestionnaire2` redéfinit l'accès pour toutes les propriétés&nbsp;:

```js
console.log(proxy2.message1); // le monde
console.log(proxy2.message2); // le monde
```

Avec [`Reflect`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Reflect), on peut rediriger certains accesseurs vers leur comportement original et en redéfinir d'autres&nbsp;:

```js
const cible = {
  message1: "coucou",
  message2: "tout le monde"
};

const gestionnaire3 = {
  get(cible, prop, recepteur) {
    if (prop === "message2") {
      return "le monde";
    }
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(cible, gestionnaire3);

console.log(proxy3.message1); // coucou
console.log(proxy3.message2); // le monde
```

## Constructeur

- [`Proxy()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
  - : Crée un nouvel objet `Proxy`.

## Méthodes statiques

- [`Proxy.revocable()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable)
  - : Crée un objet `Proxy` révocable.

## Exemples

### Exemple simple

Dans ce court exemple, on renvoie le nombre `37` comme valeur par défaut lorsque la propriété nommée n'est pas présente dans l'objet. Pour cela, on utilise le gestionnaire correspondant à [`get()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get).

```js
const handler = {
  get(obj, prop) {
    return prop in obj ?
      obj[prop] :
      37;
  }
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);
// 1, undefined

console.log('c' in p, p.c);
// false, 37
```

### Proxy «&nbsp;invisible&nbsp;»

Dans cet exemple, le proxy transfère toutes les opérations qui sont appliquées à l'objet cible.

```js
const target = {};
const p = new Proxy(target, {});

p.a = 37;
// L'opération est transmise à la cible par le proxy


console.log(target.a);
// 37
// L'opération a bien été transmise
```

On notera que bien que ceci fonctionne pour les objets JavaScript construits dans les scripts, ça ne fonctionne pas pour les objets natifs de l'environnement (comme les éléments du DOM dans un navigateur).

### Validation

En utilisant un `Proxy`, on peut simplement valider les valeurs passées à un objet. Dans cet exemple, on utilise le gestionnaire correspondant à [`set()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set).

```js
let validateur = {
  set: function(obj, prop, valeur) {
    if (prop === 'age') {
      if (!Number.isInteger(valeur)) {
        throw new TypeError("Cet a n'est pas un entier.");
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

const personne = new Proxy({}, validateur);

personne.age = 100;
console.log(personne.age); // 100
personne.age = 'jeune';    // lève une exception
personne.age = 300;        // lève une exception
```

### Étendre un constructeur

En utilisant une fonction proxy, on peut étendre un constructeur avec un nouveau constructeur. Dans cet exemple, on utilise les gestionnaires correspondants à [`construct()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct) et [`apply()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply).

```js
function etendre(sup,base) {
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

var Garcon = etendre(Personne, function(nom, âge) {
  this.âge = âge;
});

Garcon.prototype.genre = "M";

var Pierre = new Garcon("Pierre", 13);
console.log(Pierre.genre); // "M"
console.log(Pierre.nom);   // "Pierre"
console.log(Pierre.âge);   // 13
```

### Manipuler les nœuds DOM

Dans cet exemple, on utilise `Proxy` afin qu'un attribut alterne entre deux éléments différents&nbsp;: si on définit l'attribut sur un élément, il sera retiré de l'autre.

On crée un objet `vue` qui est un proxy pour l'objet avec une `selected`. Le gestionnaire du proxy définit la fonction [`set()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set).

Lorsqu'on affecte un élément HTML à `view.selected`, l'attribut `'aria-selected'` de l'élément est placé à `true`. Si on affecte ensuite un autre élément à `view.selected`, ce nouvel élément aura l'attribut `'aria-selected'` défini à `true` et l'élément précédent verra son attribut `'aria-selected'` automatiquement défini à `false`.

```js
let vue = new Proxy({
  selected: null
},
{
  set(obj, prop, nouvelleValeur) {
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

const element1 = document.getElementById('elem-1');
const element2 = document.getElementById('elem-2');

// on sélectionne element1
view.selected = element1;

console.log(`element1 : ${element1.getAttribute('aria-selected')}`);
// element1 : true

// on sélectionne element2 et cela entraîne
// la déselection automatique de element1
view.selected = element2;

console.log(`element1 : ${element1.getAttribute('aria-selected')}`);
// element1 : false

console.log(`element2 : ${element2.getAttribute('aria-selected')}`);
// element2 : true
```

### Corriger une valeur et ajouter une propriété supplémentaire

Dans l'exemple qui suit, le proxy `produits` évalue la valeur passée et la convertit en tableau si besoin. L'objet prend également en charge la propriété supplémentaire `dernierNavigateur` à la fois comme accesseur et mutateur.

```js
let produits = new Proxy({
  navigateurs: ['Internet Explorer', 'Netscape']
},
{
  get(obj, prop) {
    // Une propriété supplémentaire
    if (prop === 'dernierNavigateur') {
      return obj.navigateurs[obj.navigateurs.length - 1];
    }

    // Le comportement par défaut : renvoyer la valeur
    return obj[prop];
  },
  set(obj, prop, valeur) {
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

console.log(produits.navigateurs);
// ['Internet Explorer', 'Netscape']

produits.navigateurs = 'Firefox';
// on passe une chaîne
console.log(produits.navigateurs);
// ['Firefox'] <- pas de problème, elle est convertie en tableau

produits.dernierNavigateur = 'Chrome';

console.log(produits.navigateurs);
// ['Firefox', 'Chrome']

console.log(produits.dernierNavigateur);
// 'Chrome'
```

### Trouver un élément dans un tableau grâce à sa propriété

Dans cet exemple, ce proxy étend le tableau avec des fonctionnalités supplémentaires. Ici, on définit des propriétés sans utiliser [`Object.defineProperties()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties). Cet exemple pourrait être adapté pour trouver la ligne d'un tableau à partir d'une de ces cellules (la cible serait alors [`table.rows`](/fr/docs/Web/API/HTMLTableElement.rows)).

```js
let produits = new Proxy([
  { nom: 'Firefox', type: 'navigateur' },
  { nom: 'SeaMonkey', type: 'navigateur' },
  { nom: 'Thunderbird', type: 'client mail' }
],
{
  get(obj, prop) {
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

    let resultat, types = {};

    for (let produit of obj) {
      if (produit.nom === prop) {
        resultat = produit;
      }
      if (types[produit.type]) {
        types[produit.type].push(produit);
      } else {
        types[produit.type] = [produit];
      }
    }

    // Obtenir un produit grâce à un nom
    if (resultat) {
      return resultat;
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

console.log(produits[0]);
// { nom: 'Firefox', type: 'navigateur' }

console.log(produits['Firefox']);
// { nom: 'Firefox', type: 'navigateur' }

console.log(produits['Chrome']);
// undefined

console.log(produits.navigateur);
// [{ nom: 'Firefox', type: 'navigateur' }, { nom: 'SeaMonkey', type: 'navigateur' }]

console.log(produits.types);
// ['navigateur', 'client mail']

console.log(produits.nombre);
// 3
```

### Un exemple avec toutes les trappes

Pour illustrer l'ensemble des trappes, on tente de «&nbsp;proxifier&nbsp;» un objet non natif&nbsp;: l'objet global `docCookies` créé grâce à [cet exemple](https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework).

```js
/*
  var docCookies = ... définir l'objet "docCookies" grâce à
  https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework
*/

var docCookies = new Proxy(docCookies, {
  get (oTarget, sKey) {
    return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
  },
  set: function (oTarget, sKey, vValue) {
    if (sKey in oTarget) { return false; }
    return oTarget.setItem(sKey, vValue);
  },
  deleteProperty: function (oTarget, sKey) {
    if (!sKey in oTarget) { return false; }
    return oTarget.removeItem(sKey);
  },
  ownKeys: function (oTarget, sKey) {
    return oTarget.keys();
  },
  has: function (oTarget, sKey) {
    return sKey in oTarget || oTarget.hasItem(sKey);
  },
  defineProperty: function (oTarget, sKey, oDesc) {
    if (oDesc && 'value' in oDesc) { oTarget.setItem(sKey, oDesc.value); }
    return oTarget;
  },
  getOwnPropertyDescriptor: function (oTarget, sKey) {
    var vValue = oTarget.getItem(sKey);
    return vValue ? {
      value: vValue,
      writable: true,
      enumerable: true,
      configurable: false
    } : undefined;
  },
});

/* Test */

console.log(docCookies.monCookie1 = 'Première valeur');
console.log(docCookies.getItem('monCookie1'));

docCookies.setItem('monCookie1', 'Valeur modifiée');
console.log(docCookies.monCookie1);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La vidéo de la présentation «&nbsp;Les proxies c'est génial&nbsp;» de BrendanEich, à JSConf](https://www.youtube.com/watch?v=sClk6aB_CPk) ([le support de la présentation](https://www.slideshare.net/BrendanEich/metaprog-5303821))
- [Un tutoriel sur les proxies (en anglais)](https://web.archive.org/web/20171007221059/https://soft.vub.ac.be/~tvcutsem/proxies/)
