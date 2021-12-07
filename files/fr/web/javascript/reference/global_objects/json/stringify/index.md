---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
tags:
  - JSON
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/JSON/stringify
original_slug: Web/JavaScript/Reference/Objets_globaux/JSON/stringify
---
{{JSRef}}

La méthode **`JSON.stringify()`** convertit une valeur JavaScript en chaîne JSON. Optionnellement, elle peut remplacer des valeurs ou spécifier les propriétés à inclure si un tableau de propriétés a été fourni.

{{EmbedInteractiveExample("pages/js/json-stringify.html")}}

## Syntaxe

    JSON.stringify( valeur[, remplaçant [, espace]])

### Paramètres

- `valeur`
  - : La valeur à convertir en chaîne JSON.
- `remplaçant` {{optional_inline}}
  - : Une fonction qui modifie le processus de transformation ou un tableau de chaînes de caractères et de nombres qui sont utilisés comme liste blanche pour sélectionner/filtrer les propriétés de l'objet à inclure dans la chaîne JSON. Si cette valeur est {{jsxref("null")}} ou n'est pas fournie, toutes les propriétés de l'objet seront inclues dans la chaîne résultante.
- `espace` {{optional_inline}}
  - : Un objet {{jsxref("String")}} ou {{jsxref("Number")}} qui est utilisé pour insérer des blancs dans la chaîne JSON produite afin de faciliter la lisibilité.

<!---->

- Si cet argument est un nombre, il indiquera le nombre d'espaces à utiliser pour l'indentation (la valeur est ramenée à 10 si elle dépasse 10).
- Si l'argument est une chaîne, les 10 premiers caractères (ou la chaîne si elle est plus courte) seront utilisés pour les blancs.
- Si le paramètre n'est pas fourni (ou s'il est nul), aucun blanc ne sera utilisé.

### Valeur de retour

Une chaîne de caractères JSON qui représente la valeur indiquée.

### Exceptions

- Cette méthode lève une exception {{jsxref("TypeError")}} (« _cyclic object value_ ») lorsqu'elle trouve une référence circulaire.
- Cette méthode lève une exception {{jsxref("TypeError")}} (« _BigInt value can't be serialized in JSON_ ») lorsqu'on tente de convertir une valeur {{jsxref("BigInt")}} en une chaîne de caractères JSON.

## Description

La fonction `JSON.stringify()` convertit un objet en JSON :

- L'ordre des propriétés des objets qui ne sont pas des tableaux n'est pas garanti. Par la suite, ne pas supposer que cet ordre soit respecté.
- Les objets {{jsxref("Boolean")}}, {{jsxref("Number")}} et {{jsxref("String")}} sont convertis en leur valeur primitive correspondante, en accord avec la sémantique traditionnelle.
- Si {{jsxref("undefined")}}, une fonction ou un symbole est rencontré lors de la conversion , il est soit omis ( quand il se trouve dans un objet ) ou ramené à {{jsxref("null")}} ( quand il se trouve dans un tableau). `JSON.stringify()` peut également renvoyer `undefined` lorsqu'il reçoit des valeurs « brutes » qui ne sont pas objectifiées comme par exemple `JSON.stringify(function(){})` ou `JSON.stringify(undefined)`.
- Toutes les propriétés liées aux symboles (cf. {{jsxref("Symbol")}}) seront complètement ignorées , même lorsque la fonction `remplaçant` est utilisée.
- Les propriétés qui ne sont pas énumérables seront ignorées.
- Les instances de {{jsxref("Date")}} implémentent la fonction `toJSON()` en renvoyant une chaîne de caractères (identique à celle renvoyée par `date.toISOString()`). Aussi, les dates sont traitées comme des chaînes de caractères.
- Les nombres {{jsxref("Infinity")}} et {{jsxref("NaN")}}, ainsi que l'objet {{jsxref("null")}} sont traités comme `null`.
- Pour les autres instances d'objets tels que {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}} et {{jsxref("WeakSet")}}, seules les propriétés énumérables sont sérialisées.

```js
JSON.stringify({});                        // '{}'
JSON.stringify(true);                      // 'true'
JSON.stringify("toto");                    // '"toto"'
JSON.stringify([1, "false", false]);       // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]);   // '[null,null,null]'
JSON.stringify({ x: 5 });                  // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5));
// '"2006-01-02T23:04:05.000Z"'

// Exemples
JSON.stringify({x: 5, y: 6});
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String("false"), new Boolean(false)]);
// '[3,"false",false]'

// Les tableaux avec des propriétés ne sont pas énumérables
// et n'ont pas de sens selon JSON
let a = ["toto", "truc"];
a["bidule"] = "youpi"; // a:[ 0: "toto", 1: "truc", bidule: "youpi"]
JSON.stringify(a);
// '["toto","truc"]'

// Symboles
JSON.stringify({x: undefined, y: Object, z: Symbol("")});
// '{}'
JSON.stringify({[Symbol("toto")]: "toto"});
// '{}'
JSON.stringify({[Symbol.for("toto")]: "toto"}, [Symbol.for("toto")]);
// '{}'
JSON.stringify({[Symbol.for("toto")]: "toto"}, function (k, v) {
  if (typeof k === "symbol"){
    return "a symbol";
  }
});
// '{}'
JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] });
// '{"x":[10,null,null,null]}'

// Structures de données classiques
JSON.stringify([new Set([1]), new Map([[1, 2]]), new WeakSet([{a: 1}]), new WeakMap([[{a: 1}, 2]])]);
// '[{},{},{},{}]'

// TypedArray
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Uint8Array([1]), new Uint8ClampedArray([1]), new Uint16Array([1]), new Uint32Array([1])]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Float32Array([1]), new Float64Array([1])]);
// '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({ x: 5, y: 6, toJSON(){ return this.x + this.y; } });
// '11'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
// '{}'
JSON.stringify({ [Symbol('foo')]: 'foo' });
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]);
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function(k, v) {
  if (typeof k === 'symbol') {
    return 'a symbol';
  }
});
// undefined

// Propriétés non énumérables
JSON.stringify(Object.create(null, { x: { value: 'x', enumerable: false }, y: { value: 'y', enumerable: true } }) );
// '{"y":"y"}'

// Échec avec BigInt
JSON.stringify({x: 2n});
// TypeError: BigInt value can't be serialized in JSON
```

### L'argument `remplaçant`

L'argument `remplaçant` est une fonction ou un tableau. Si c'est une fonction, elle prend deux paramètres : une clé et la valeur qui est traitée pour être convertie en chaîne. L'objet dans lequel la clé a été trouvée sera fourni comme paramètre `this` pour la fonction. Cette fonction est d'abord appelée avec une chaîne vide comme clé représentant l'objet à transformer puis elle est appelée sur chaque propriété de l'objet ou du tableau à transformer en chaîne. Cette fonction renvoie la valeur à ajouter à la chaîne JSON :

- Si la valeur renvoyée est un nombre ({{jsxref("Number")}}), la chaîne correspondante au nombre sera utilisée comme valeur à ajouter à la chaîne pour représenter la valeur de la propriété traitée.
- Si la valeur renvoyée est une chaîne de caractères ({{jsxref("String")}}), cette chaîne sera utilisée pour représenter la valeur de la propriété dans la chaîne JSON.
- Si la valeur renvoyée est un {{jsxref("Boolean")}}, "true" ou "false" sera utilisé pour représenter la valeur de la propriété et sera ajouté à la chaîne JSON.
- Si la valeur renvoyée est `null`, `null` sera ajouté à la chaîne JSON.
- Si la valeur renvoyée est un autre objet, cet objet sera, de façon récursive, transformé en une chaîne JSON en appelant la fonction `remplaçant` sur chaque propriété sauf si l'objet est une fonction auquel cas, rien n'est ajouté à la chaîne JSON.
- Si la valeur renvoyée est {{jsxref("undefined")}}, la propriété ne sera pas incluse dans la chaîne JSON.

> **Note :** la fonction `remplaçant` ne peut pas être utilisée pour retirer des valeurs d'un tableau. Si on renvoie `undefined` ou une fonction, ce sera la valeur `null` qui sera utilisée.

> **Note :** Si on souhaite que la fonction `remplaçant` distingue un objet dont une propriété a un clé qui est « réellement » une chaîne vide, il faudra avoir un compteur pour le nombre d'itération. Si le compteur indique que la première itération est passée, alors il s'agit bien d'un clé avec une chaîne vide.

#### Exemple avec une fonction

```js
function remplaçant(clé, valeur) {
  if (typeof valeur === "string") {
    return undefined;
  }
  return valeur;
}

var toto = {fondation: "Mozilla", modèle: "boîte", semaine: 45, transport: "bus", mois: 7};
console.log(JSON.stringify(toto, remplaçant)); // {"semaine":45, "mois":7}
```

#### Exemple avec un tableau

Si `remplaçant` est un tableau, les valeurs du tableau indiquent les propriétés de l'objet à inclure dans la chaîne JSON.

```js
JSON.stringify(toto, ['semaine', 'mois']);
// '{"semaine":45,"mois":7}', on ne garde que "semaines" et "mois"
```

### L'argument `espace`

L'argument `espace` est utilisé pour contrôler les espacements utilisés dans la chaîne finale.

- Si c'est un nombre, les différents niveaux d'indentation auront autant d'espaces qu'indiqué grâce à ce paramètre (jusqu'à 10).
- Si c'est une chaîne, les dix premiers caractères (ou la chaîne complète si elle est plus courte)

```js
JSON.stringify({ a: 2 }, null, ' ');
// '{
//  "a": 2
// }'
```

Dans l'exemple suivant on utilise la tabulation pour rendre lisible le résultat :

```js
JSON.stringify({ uno: 1, dos: 2 }, null, '\t');
// renverra
// '{
//     "uno": 1,
//     "dos": 2
// }'
```

### La fonction `toJSON()`

Pour personnaliser la valeur d'un objet lors de sa conversion en JSON, on peut surcharger la méthode `toJSON()` : la valeur retournée par cette méthode `toJSON()` sera alors utilisée. `JSON.stringify()` invoquera la méthode `toJSON()` de l'objet avec un paramètre :

- Si cet objet est une propriété de donnée, ce sera le nom de la propriété
- Si cet objet est un tableau, ce sera l'indice de l'élément du tableau sous la forme d'une chaîne de caractères
- Une chaîne vide si `JSON.stringify()` était directement appelé sur l'objet.

Ainsi :

```js
var obj = {
  data: 'data',
  toJSON(clef){
    if(clef) {
      return `Un objet imbriqué sous la clef '${clef}'`;
    } else {
      return this;
    }
  }
};

JSON.stringify(obj);
// '{"data":"data"}'

JSON.stringify({ obj })
// '{"obj":"Un objet imbriqué sous la clef 'obj'"}'

JSON.stringify([ obj ])
// '["Un objet imbriqué sous la clef '0'"]'
```

### Le problème des références circulaires

[Le format JSON](https://www.json.org/) ne prend pas en charge les références (bien [qu'un brouillon IETF existe](http://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03)) et une exception {{jsxref("TypeError")}} sera levée si on tente d'encoder un objet possédant des références circulaires.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Sérialiser un objet avec des références circulaires déclenche une "TypeError: cyclic object value"
JSON.stringify(circularReference);
```

Pour sérialiser les références circulaires, on peut utiliser une bibliothèque ([cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) par exemple) ou implémenter sa propre solution (qui consistera à trouver et à remplacer le cycle par des valeurs sérialisables).

### Gestion des terminateurs de ligne

Par le passé, JSON n'était pas un sous-ensemble strict de JavaScript. En effet, en JSON, deux terminateurs de ligne (le caractère de séparation de ligne U+2028 LINE SEPARATOR et le caractère de séparation de paragraphe U+2029 PARAGRAPH SEPARATOR) n'avaient pas besoin d'être échappés dans des données JSON alors qu'ils devaient l'être en JavaScript. Cela a désormais évolué et les deux points de code peuvent apparaître tant en JSON qu'en JavaScript.

Ainsi, si on souhaite avoir une compatibilité avec les anciens moteurs JavaScript, on pourra évaluer ou utiliser les données JSON avec [JSONP](https://fr.wikipedia.org/wiki/JSONP) et la fonction utilitaire suivante :

```js
function jsFriendlyJSONStringify (s) {
    return JSON.stringify(s).
        replace(/\u2028/g, '\\u2028').
        replace(/\u2029/g, '\\u2029');
}

var s = {
    a: String.fromCharCode(0x2028),
    b: String.fromCharCode(0x2029)
};

// dans Firefox, console.log enlève les échappements
// des caractères Unicode, on utilise donc alert :(
alert(jsFriendlyJSONStringify(s)); // {"a":"\u2028","b":"\u2029"}
```

> **Note :** Les propriétés des objets qui ne sont pas des tableaux ne sont pas transformées en chaînes de caractères selon un ordre particulier. Aussi, l'ordre des données en JSON ne saurait constituer une information utile.

```js
var a = JSON.stringify({toto: "truc", bidule: "machin"});
// '{"toto":"truc","bidule":"machin"}'
var b = JSON.stringify({bidule: "machin", toto: "truc"});
// '{"bidule":"machin","toto":"truc"}'
console.log(a !== b); // true
```

### Utiliser `JSON.stringify` avec localStorage

Dans le cas où on souhaite enregistrer un objet créé par l'utilisateur afin de le restorer plus tard (y compris après que le navigateur ait été fermé), on peut utiliser `JSON.stringify`.

> **Attention :** Les fonctions n'ont pas de correspondances en JSON, il ne sera donc pas possible de les enregistrer de cette façon. En revanche, elles peuvent être affichées si elles ont été converties en texte avec la fonction de remplacement. De même, certains objets comme les dates seront transformées en chaîne de caractères après l'utilisation de JSON.parse().

```js
// On crée un objet pour l'exemple
var session = {
    'screens' : [],
    'state' : true
};
session.screens.push({"name":"screenA", "width":450, "height":250});
session.screens.push({"name":"screenB", "width":650, "height":350});
session.screens.push({"name":"screenC", "width":750, "height":120});
session.screens.push({"name":"screenD", "width":250, "height":60});
session.screens.push({"name":"screenE", "width":390, "height":120});
session.screens.push({"name":"screenF", "width":1240, "height":650});

// On convertit l'objet en une chaîne JSON
// et on enregistre cette valeur avec le nom 'session'
localStorage.setItem('session', JSON.stringify(session));

// Ici, on reconvertit la chaîne en un objet
// JSON.stringify and saved in localStorage in JSON object again
var sessionRestaurée = JSON.parse(localStorage.getItem('session'));

// La variable sessionRestaurée contient désormais l'objet précédent
// qui avait été sauvegardé dans localStorage
console.log(sessionRestaurée);
```

### Chaînes bien formées et `JSON.stringify()`

Les moteurs, qui implémentent la spécification sur JSON.stringify() bien formé, transformeront en chaîne de caractères les éléments isolés de paires _surrogates_ via des séquences d'échappement Unicode plutôt que d'utiliser leurs valeurs littérales. Avant cette modification de spécification, `JSON.stringify()` n'aurait pas encodé les éléments _surrogates_ isolés et les chaînes produites n'étaient pas valides selon UTF-8 ou UTF-16 :

```js
JSON.stringify("\uD800"); // '"�"'
```

Avec cette modification, les séquences d'échappement produites permettent d'avoir un contenu UTF-16 ou UTF-8 lisible :

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

Cette modification est rétrocompatible pour toutes les opérations où le résultat de `JSON.stringify()` est passé à des API comme `JSON.parse()` qui acceptent du texte JSON valide. En effet, ces API traiteront les séquences d'échappement de _surrogates_ isolés comme les caractères correspondants. Seul le cas où le code interprète directement le résultat de `JSON.stringify()` doit être adapté afin de gérer les deux encodages possibles pour ces cas.

## Spécifications

| Spécification                                                                        | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.12.3', 'JSON.stringify')}}             | {{Spec2('ES5.1')}}     | Définition initiale. Implémentée avec JavaScript 1.7. |
| {{SpecName('ES6', '#sec-json.stringify', 'JSON.stringify')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-json.stringify', 'JSON.stringify')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.JSON.stringify")}}

## Voir aussi

- {{jsxref("JSON.parse()")}}
- [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) qui ajoute deux fonctions `JSON.decycle` et `JSON.retrocycle` qui permettent d'encoder et de décoder des structures cycliques.
