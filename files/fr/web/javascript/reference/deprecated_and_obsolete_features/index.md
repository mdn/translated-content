---
title: Fonctionnalités dépréciées et obsolètes
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Cette page liste les fonctionnalités de JavaScript qui sont dépréciées (c'est-à-dire encore disponibles mais prévues pour être supprimées) et obsolètes (c'est-à-dire plus utilisables).

## Fonctionnalités dépréciées

Ces fonctionnalités dépréciées peuvent encore être utilisées, mais doivent être utilisées avec prudence car elles ne sont pas obligatoirement implémentées par tous les moteurs JavaScript. Vous devriez travailler à les supprimer de votre code.

Certaines de ces fonctionnalités dépréciées sont listées dans la section [Annexe B <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) de la spécification ECMAScript. Cette section est décrite comme normative optionnelle — c'est-à-dire que les navigateurs web doivent implémenter ces fonctionnalités, tandis que les hôtes non web peuvent ne pas le faire. Ces fonctionnalités sont probablement stables car les supprimer provoquerait des problèmes de compatibilité ascendante et casserait les sites web existants. (JavaScript a pour objectif de conception de «&nbsp;ne pas casser le web&nbsp;».) Cependant, elles ne sont pas portables sur toutes les plateformes et peuvent ne pas être prises en charge par tous les outils d'analyse, il est donc conseillé de ne pas les utiliser, comme l'introduction de l'Annexe B l'indique&nbsp;:

> … Toutes les fonctionnalités et tous les comportements du langage décrits dans la présente annexe présentent une ou plusieurs caractéristiques indésirables et, en l'absence d'usage historique, seraient supprimés de la présente spécification. …
>
> … Les programmeur·euse·s ne devraient pas utiliser ou supposer l'existence de ces fonctionnalités et comportements lors de l'écriture de nouveau code ECMAScript. …

Certaines autres, bien que dans le corps principal de la spécification, sont également marquées comme normatives optionnelles et ne devraient pas être utilisées de manière dépendante.

### Commentaires HTML

Le code source JavaScript, s'il est analysé comme des scripts, permet des commentaires de type HTML, comme si le script faisait partie d'une balise `<script>`.

Le code suivant est un JavaScript valide lorsqu'il est exécuté dans un navigateur web (ou Node.js, qui utilise le moteur V8 de Chrome)&nbsp;:

```js
<!-- commentaire
console.log("a"); <!-- un autre commentaire
console.log("b");
--> Plus de commentaires
// Affiche "a" et "b"
```

`<!--` et `-->` agissent tous deux comme `//`, c'est-à-dire comme des commentaires sur une ligne. `-->` n'est valide qu'au début d'une ligne (pour éviter toute ambiguïté avec un décrément postfixé suivi d'un opérateur supérieur), tandis que `<!--` peut apparaître n'importe où dans la ligne.

### Propriétés de `RegExp`

Les propriétés suivantes sont dépréciées. Cela n'affecte pas leur utilisation dans les [chaînes de caractères de remplacement](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace)&nbsp;:

- [`$1-$9`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
  - : Sous-chaînes de caractères entre parenthèses, si elles existent.
- [`input`, `$_`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
  - : La chaîne de caractères par rapport à laquelle une expression rationnelle est comparée.
- [`lastMatch`, `$&`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
  - : La dernière sous-chaîne de caractères correspondante.
- [`lastParen`, `$+`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
  - : La dernière sous-chaîne de caractères entre parenthèses, si elle existe.
- [`leftContext`, `` $` ``](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
  - : La sous-chaîne de caractères précédant la correspondance la plus récente.
- [`rightContext`, `$'`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
  - : La sous-chaîne de caractères suivant la correspondance la plus récente.

> [!WARNING]
> Évitez d'utiliser ces propriétés statiques, car elles peuvent causer des [problèmes lors de l'interaction avec du code externe <sup>(angl.)</sup>](https://github.com/tc39/proposal-regexp-legacy-features/blob/master/subclass-restriction-motivation.md#legacy-static-properties-regexp1-etc)&nbsp;!

La méthode {{JSxRef("RegExp/compile", "compile()")}} est dépréciée. Il est recommandé de créer une nouvelle instance de `RegExp` à la place.

Les syntaxes regex suivantes sont dépréciées et ne sont disponibles qu'en [mode insensible à Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_insensible_à_unicode). En mode sensible à Unicode, elles sont toutes des erreurs de syntaxe&nbsp;:

- [Les assertions en avant](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) peuvent avoir des [quantificateurs](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier).
- [Les références arrière](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) qui ne se réfèrent pas à un groupe capturant existant deviennent des [échappements octaux hérités](#séquences_déchappements).
- Dans les [classes de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class), les plages de caractères où une limite est une classe de caractères font que le `-` devient un caractère littéral.
- Une séquence d'échappement non reconnue devient un [«&nbsp;échappement d'identité&nbsp;»](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).
- Les séquences d'échappement dans les [classes de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) de la forme `\cX` où `X` est un chiffre ou `_` sont décodées de la même manière que celles avec des lettres {{Glossary("ASCII")}}&nbsp;: `\c0` est identique à `\cP` lorsqu'on prend le modulo 32. De plus, si la forme `\cX` est rencontrée n'importe où où `X` n'est pas l'un des caractères reconnus, alors le backslash est traité comme un caractère littéral.
- La séquence `\k` dans une regex qui n'a pas de [groupes capturants nommés](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) est traitée comme un échappement d'identité.
- Les caractères de syntaxe `]`, `{`, et `}` peuvent apparaître [littéralement](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) sans échappement s'ils ne peuvent pas être interprétés comme la fin d'une classe de caractères ou des délimiteurs de quantificateur.

### Propriétés de `Function`

- La propriété {{JSxRef("Function/caller", "caller")}} des fonctions et la propriété [`arguments.callee`](/fr/docs/Web/JavaScript/Reference/Functions/arguments/callee) sont dépréciées et indisponibles en mode strict.
- Au lieu d'accéder à `arguments` en tant que propriété d'une fonction, vous devez utiliser l'objet {{JSxRef("Functions/arguments", "arguments")}} à l'intérieur des fermetures de fonction.

### Propriétés et méthodes de `Object`

- L'accesseur [`Object.prototype.__proto__`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) est déprécié. Utilisez [`Object.getPrototypeOf`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) et [`Object.setPrototypeOf`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) à la place. Cela ne s'applique pas à la clé littérale `__proto__` dans les littéraux d'objet.
- Les méthodes [`Object.prototype.__defineGetter__`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`Object.prototype.__defineSetter__`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`Object.prototype.__lookupGetter__`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) et [`Object.prototype.__lookupSetter__`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sont dépréciées. Utilisez [`Object.getOwnPropertyDescriptor`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) et [`Object.defineProperty`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) à la place.

### Propriétés de `String`

- Les méthodes d'encapsulation HTML comme {{JSxRef("String.prototype.fontsize")}} et {{JSxRef("String.prototype.big")}} sont dépréciées.
- {{JSxRef("String.prototype.substr")}} ne sera probablement pas supprimée de sitôt, mais elle est définie dans l'annexe B et est donc optionnelle sur le plan normatif.
- `String.prototype.trimLeft` et `String.prototype.trimRight` doivent être remplacés par {{JSxRef("String.prototype.trimStart")}} et {{JSxRef("String.prototype.trimEnd")}}.

### Méthodes de `Date`

- Les méthodes {{JSxRef("Date/getYear", "getYear()")}} et {{JSxRef("Date/setYear", "setYear()")}} sont affectées par le problème de l'an 2000 et ont été remplacées par {{JSxRef("Date/getFullYear", "getFullYear()")}} et {{JSxRef("Date/setFullYear", "setFullYear()")}}.
- La méthode `toGMTString()` est dépréciée. Utilisez {{JSxRef("Date/toUTCString", "toUTCString()")}} à la place.

### Séquences d'échappement

- Les séquences d'échappement octales (\ suivies d'un, deux ou trois chiffres octaux) sont dépréciées dans les littéraux de chaînes de caractères et d'expressions régulières.
- Les fonctions {{JSxRef("escape()")}} et {{JSxRef("unescape()")}} sont dépréciées. Utilisez {{JSxRef("encodeURI()")}}, {{JSxRef("encodeURIComponent()")}}, {{JSxRef("decodeURI()")}} ou {{JSxRef("decodeURIComponent()")}} pour encoder et décoder les séquences d'échappement des caractères spéciaux.

### Instructions

L'instruction {{JSxRef("Statements/with", "with")}} est dépréciée et indisponible en mode strict.

Les initialisateurs dans les déclarations `var` des en-têtes de boucles {{JSxRef("Statements/for...in", "for…in")}} sont dépréciés et produisent des [erreurs de syntaxe](/fr/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) en mode strict. L'expression d'initialisation est évaluée et affectée à la variable, mais la valeur serait immédiatement réaffectée lors de la première itération de la boucle.

Normalement, le bloc `catch` d'une instruction {{JSxRef("Statements/try...catch", "try…catch")}} ne peut contenir aucune déclaration de variable portant le même nom que les variables liées dans le `catch()`. Une grammaire étendue permet au bloc `catch` de contenir une variable déclarée avec {{JSxRef("Statements/var", "var")}} portant le même nom que l'identifiant lié au `catch`, mais uniquement si la liaison `catch` est un identifiant simple, et non un [modèle de déstructuration](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring). Cependant, l'initialisation et l'affectation de cette variable n'agiraient que sur l'identifiant lié au `catch`, au lieu de la variable de portée supérieure, et le comportement pourrait être déroutant.

```js
var a = 2;
try {
  throw new Error();
} catch (a) {
  var a = 1; // Cette valeur 1 est affectée à `a` qui est attrapé, pas au `a` extérieur.
}
console.log(a); // 2

try {
  throw new Error();
  // Note : l'identifiant a été changé en `err` pour éviter le conflit
  // avec la déclaration interne de `a`.
} catch (err) {
  var a = 1; // Cette valeur 1 est affectée à `a` de la portée supérieure.
}
console.log(a); // 1
```

Cela est répertorié dans l'annexe B de la spécification et peut donc ne pas être implémenté partout. Évitez tout conflit de noms entre l'identifiant lié au `catch` et les variables déclarées dans le bloc `catch`.

## Fonctionnalités obsolètes

Ces fonctionnalités obsolètes ont été entièrement supprimées de JavaScript et ne peuvent plus être utilisées à partir de la version indiquée de JavaScript.

### Propriétés de `RegExp`

Les éléments suivants sont désormais des propriétés des instances de `RegExp`, et non plus du constructeur `RegExp`&nbsp;:

| Propriété                                                               | Description                                                                                                                                      |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{JSxRef("RegExp/global", "global")}}                                   | Indique si l'expression régulière doit être testée contre toutes les correspondances possibles dans une chaîne, ou seulement contre la première. |
| {{JSxRef("RegExp/ignoreCase", "ignoreCase")}}                           | Indique si la casse doit être ignorée lors de la tentative de correspondance dans une chaîne.                                                    |
| {{JSxRef("RegExp/lastIndex", "lastIndex")}}                             | L'index à partir duquel commencer la prochaine correspondance.                                                                                   |
| {{JSxRef("RegExp/multiline", "multiline")}} (également via `RegExp.$*`) | Indique si la recherche doit s'effectuer sur plusieurs lignes.                                                                                   |
| {{JSxRef("RegExp/source", "source")}}                                   | Le texte du motif.                                                                                                                               |

La méthode `valueOf()` n'est plus spécialisée pour `RegExp`. Elle utilise {{JSxRef("Object.prototype.valueOf()")}}, qui renvoie elle-même.

### Propriétés de `Function`

- La propriété `arity` des fonctions est obsolète. Utilisez [`length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/length) à la place.

### Propriétés de `Object`

| Propriété                    | Description                                                                                                                  | Alternative                                                                                                                                                                           |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__count__`                  | Retourne le nombre de propriétés énumérables directement sur un objet défini par l'utilisateur·ice.                          | [`Object.keys()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)                                                                                                       |
| `__parent__`                 | Pointe vers le contexte d'un objet.                                                                                          | Pas de remplacement direct                                                                                                                                                            |
| `__iterator__`               | Utilisé avec les [itérateurs hérités](#générateurs_et_itérateurs_hérités).                                                   | [`Symbol.iterator`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) et les nouveaux [protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) |
| `__noSuchMethod__`           | Une méthode appelée lorsqu'une propriété inexistante est appelée en tant que méthode.                                        | {{JSxRef("Proxy")}}                                                                                                                                                                   |
| `Object.prototype.eval()`    | Évalue une chaîne de code JavaScript dans le contexte de l'objet défini.                                                     | Pas de remplacement direct                                                                                                                                                            |
| `Object.observe()`           | Observation asynchrone des changements d'un objet.                                                                           | {{JSxRef("Proxy")}}                                                                                                                                                                   |
| `Object.unobserve()`         | Supprime les observateurs.                                                                                                   | {{JSxRef("Proxy")}}                                                                                                                                                                   |
| `Object.getNotifier()`       | Crée un objet notificateur qui permet de déclencher de manière synthétique un changement observable avec `Object.observe()`. | Pas de remplacement direct                                                                                                                                                            |
| `Object.prototype.watch()`   | Attache un gestionnaire de fonction de rappel à une propriété qui est appelé lorsque la propriété est assignée.              | {{JSxRef("Proxy")}}                                                                                                                                                                   |
| `Object.prototype.unwatch()` | Supprime les gestionnaires de surveillance sur une propriété.                                                                | {{JSxRef("Proxy")}}                                                                                                                                                                   |

### Méthodes de `String`

- Les méthodes génériques non standard de `String` comme `String.slice(myStr, 0, 12)`, `String.replace(myStr, /\./g, "!")`, etc. ont été introduites dans Firefox 1.5 (JavaScript 1.6), dépréciées dans Firefox 53 et supprimées dans Firefox 68. Vous pouvez utiliser les méthodes sur {{JSxRef("String", "String.prototype", "méthodes_dinstance")}} avec {{JSxRef("Function.call()")}} à la place.
- `String.prototype.quote` a été supprimé dans Firefox 37.
- Le paramètre non standard `flags` dans {{JSxRef("String.prototype.search")}}, {{JSxRef("String.prototype.match")}}, et {{JSxRef("String.prototype.replace")}} est obsolète.

### Méthodes de `WeakMap`

- `WeakMap.prototype.clear()` a été ajouté dans Firefox 20 et supprimé dans Firefox 46. Il n'est pas possible de parcourir toutes les clés dans un [`WeakMap`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakMap).

### Méthodes de `Date`

- `Date.prototype.toLocaleFormat()`, qui utilisait une chaîne de caractères de format dans le même format attendu par la fonction `strftime()` en C, est obsolète. Utilisez {{JSxRef("Date/toLocaleString", "toLocaleString()")}} ou {{JSxRef("Intl.DateTimeFormat")}} à la place.

### Méthodes de `Array`

- Les méthodes génériques non standard de `Array` comme `Array.slice(myArr, 0, 12)`, `Array.forEach(myArr, myFn)`, etc. ont été introduites dans Firefox 1.5 (JavaScript 1.6), dépréciées dans Firefox 68 et supprimées dans Firefox 71. Vous pouvez utiliser les méthodes sur {{JSxRef("Array", "Array.prototype", "méthodes_dinstance")}} avec {{JSxRef("Function.call()")}} à la place.

| Propriété           | Description                                            | Alternative         |
| ------------------- | ------------------------------------------------------ | ------------------- |
| `Array.observe()`   | Observation asynchrone des modifications des tableaux. | {{JSxRef("Proxy")}} |
| `Array.unobserve()` | Supprimer les observateurs.                            | {{JSxRef("Proxy")}} |

### Méthodes de `Number`

- `Number.toInteger()` est obsolète. Utilisez {{JSxRef("Math.floor()")}}, {{JSxRef("Math.round()")}}, ou d'autres méthodes à la place.

### Méthodes de `Proxy`

- `Proxy.create()` et `Proxy.createFunction()` sont obsolètes. Utilisez le constructeur {{JSxRef("Proxy/Proxy", "Proxy()")}} à la place.
- Les pièges suivants sont obsolètes&nbsp;:
  - `hasOwn` ([bogue 980565 <sup>(angl.)</sup>](https://bugzil.la/980565), Firefox 33).
  - `getEnumerablePropertyKeys` ([bogue 783829 <sup>(angl.)</sup>](https://bugzil.la/783829), Firefox 37)
  - `getOwnPropertyNames` ([bogue 1007334 <sup>(angl.)</sup>](https://bugzil.la/1007334), Firefox 33)
  - `keys` ([bogue 1007334 <sup>(angl.)</sup>](https://bugzil.la/1007334), Firefox 33)

### L'objet `ParallelArray`

- `ParallelArray` est obsolète.

### Instructions

- `for each...in` est obsolète. Utilisez {{JSxRef("Statements/for...of", "for...of")}} à la place.
- Les blocs `let` et les expressions `let` sont obsolètes.
- Les closures d'expression (`function () 1` comme raccourci de `function () { return 1; }`) sont obsolètes. Utilisez des {{JSxRef("Operators/function", "function")}} régulières ou des {{JSxRef("Functions/Arrow_functions", "fonctions fléchées", "", 1)}} à la place.

### Acquisition du texte source

Les méthodes `toSource()` des tableaux, nombres, chaînes de caractères, etc. et la fonction globale `uneval()` sont obsolètes. Utilisez {{JSxRef("Object/toString", "toString()")}}, ou écrivez votre propre méthode de sérialisation à la place.

### Générateurs et itérateurs hérités

Les instructions de fonction génératrice héritée et les expressions de fonction génératrice héritée sont supprimées. La syntaxe de fonction génératrice héritée réutilise le mot-clé `function`, qui devient automatiquement une fonction génératrice lorsqu'il y a une ou plusieurs expressions `yield` dans le corps — c'est maintenant une erreur de syntaxe. Utilisez les [`instructions function*`](/fr/docs/Web/JavaScript/Reference/Statements/function*) et les [`expressions function*`](/fr/docs/Web/JavaScript/Reference/Operators/function*) à la place.

Les compréhensions de tableau et les compréhensions de générateur sont supprimées.

```js-nolint
// Compréhensions de tableau héritées
[for (x of iterable) x]
[for (x of iterable) if (condition) x]
[for (x of iterable) for (y of iterable) x + y]

// Compréhensions de générateur héritées
(for (x of iterable) x)
(for (x of iterable) if (condition) x)
(for (x of iterable) for (y of iterable) x + y)
```

Firefox, avant la version 26, a implémenté un autre protocole d'itérateur similaire au [protocole d'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) standard. Un objet est un itérateur héritée lorsqu'il implémente une méthode `next()`, qui produit une valeur à chaque appel et lance un objet `StopIteration` à la fin de l'itération. Ce protocole d'itérateur héritée diffère du protocole d'itérateur standard&nbsp;:

- La valeur était retournée directement comme valeur de retour des appels à `next()`, au lieu de la propriété `value` de l'objet `IteratorResult`.
- La fin de l'itération était exprimée en lançant un objet `StopIteration`, au lieu d'utiliser la propriété `done` de l'objet `IteratorResult`.

Cette fonctionnalité, ainsi que le constructeur global `StopIteration`, ont été supprimés dans Firefox 58+. Pour les utilisations futures, envisagez d'utiliser les boucles {{JSxRef("Statements/for...of", "for…of")}} et le [protocole d'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols).

### Variables dièze

Les variables dièze sont obsolètes. Pour créer des structures circulaires, utilisez plutôt des variables temporaires.
