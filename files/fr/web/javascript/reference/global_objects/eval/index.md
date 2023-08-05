---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
---

{{jsSidebar("Objects")}}

La fonction **`eval()`** permet d'évaluer du code JavaScript représenté sous forme d'une chaîne de caractères.

> **Attention :** L'exécution de JavaScript à partir d'une chaîne de caractères constitue un risque de sécurité énorme. Il est beaucoup trop facile pour un mauvais acteur d'exécuter du code arbitraire lorsque vous utilisez `eval()`. Voir la section [N'utilisez eval() qu'en dernier recours !](#Nutiliser_eval_quen_dernier_recours_!) ci-dessous.

{{EmbedInteractiveExample("pages/js/globalprops-eval.html")}}

## Syntaxe

```js
eval(str);
```

### Paramètres

- `str`
  - : Une chaîne de caractères qui représente une expression JavaScript ou une instruction ou une suite d'instructions JavaScript. L'expression utilisée peut contenir des variables et des propriétés d'objets existants.

### Valeur de retour

La valeur de terminaison du code fourni en argument. Si la valeur de terminaison est vide, c'est la valeur {{jsxref("undefined")}} qui est renvoyée.

## Description

`eval()` est une fonction rattachée à l'objet global.

`eval()` prend en compte un argument qui est une chaîne de caractères. Si cette chaîne représente une expression, `eval()` évaluera l'expression. Si l'argument utilisé représente une ou plusieurs instructions JavaScript, `eval()` évaluera les instructions. `eval()` ne doit pas être utilisé pour évaluer une expression arithmétique. En effet, JavaScript évalue automatiquement les expressions arithmétiques.

Si on construit une expression arithmétique sous la forme d'une chaîne de caractères, on peut utiliser `eval()` pour évaluer cette expression par la suite. Ainsi, si on a une variable `x`, on peut préparer une expression à utiliser plus tard en construisant la chaîne "`3 * x + 2`" par exemple. Au moment où on souhaite procéder à l'évaluation, on appellera `eval()` avec cette chaîne de caractères.

Si l'argument passé à `eval()` n'est pas une chaîne de caractères, `eval()` renverra l'argument inchangé. Dans l'exemple qui suit, on utilise le constructeur `String`, `eval()` renvoie donc un objet `String` au lieu d'évaluer la chaîne de caractères correspondante.

```js
eval(new String("2 + 2")); // renvoie un objet String contenant "2 + 2"
eval("2 + 2"); // renvoie 4
```

Ce comportement peut être résolu de façon générique en utilisant la méthode `toString()`.

```js
var expression = new String("2 + 2");
eval(expression.toString());
```

Si la fonction `eval` est utilisée de manière indirecte, en l'invoquant par une référence autre que `eval`, cela fonctionnera avec une portée globale plutôt que locale (d'après ECMASCript 5). Par exemple, les déclarations de fonctions vont créer des fonctions globales et le code en cours d'évaluation n'aura pas accès aux variables locales déclarées avec la même portée que là où la fonction `eval` est appelée.

```js
function test() {
  var x = 2,
    y = 4;
  console.log(eval("x + y")); // Appel direct, portée locale, résultat de 6
  var geval = eval;
  console.log(geval("x + y")); // Appel indirect, portée globale, lance une exception ReferenceError car `x` n'est pas défini
  (0, eval)("x + y"); // un autre exemple d'appel indirect.
}
```

## N'utiliser `eval()` qu'en dernier recours !

`eval()` est une fonction dangereuse qui exécute le code passé en argument avec les privilèges de l'environnement appelant. Si `eval()` est utilisée avec une chaîne construite de façon mal intentionnée, cela pourra entraîner l'exécution d'un code malveillant sur la machine de l'utilisateur avec les permissions données au site ou au module complémentaire. À un niveau encore plus critique, du code tiers pourrait ainsi consulter la portée dans laquelle `eval()` a été invoquée. Cela peut permettre des attaques qui n'auraient pas été rendues possible en utilisant un objet {{jsxref("Function")}}.

`eval()` est également plus lente que les méthodes alternatives. En effet, l'évaluation nécessite de faire appel à l'interpréteur JavaScript alors que de nombreuses structures sont optimisées par les moteurs JavaScript modernes.

Dans de nombreux cas, il existe des alternatives plus sûres et plus performantes à `eval()`.

De plus, les moteurs JavaScript modernes convertissent le code JavaScript en code machine. Les notions relatives aux noms des variables sont donc transformées. Utiliser `eval()` force le navigateur à enregistrer puis à rechercher parmi les noms existants afin de retrouver les variables. Si besoin, on peut utiliser le constructeur [`Function`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) :

Avec `eval()` :

```js
function looseJsonParse(obj) {
  return eval("(" + obj + ")");
}
console.log(looseJsonParse("{a:(4-1), b:function(){}, c:new Date()}"));
```

Avec `Function` :

```js
function looseJsonParse(obj) {
  return Function('"use strict";return (' + obj + ")")();
}
console.log(looseJsonParse("{a:(4-1), b:function(){}, c:new Date()}"));
```

Dans le premier cas, l'évaluation de `c: new Date()` sera beaucoup plus lente car `Date` peut faire référence à une variable déclarée avant. Dans le second cas, la fonction est évaluée dans la portée globale et le moteur peut donc utiliser {{jsxref("Date")}} directement.

Autrement dit, dans le premier cas, on aurait pu avoir un code comme :

```js
function Date(n) {
  return [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursaday",
    "Friday",
    "Saturday",
    "Sunday",
  ][n % 7 || 0];
}
function looseJsonParse(obj) {
  return eval("(" + obj + ")");
}
console.log(looseJsonParse("{a:(4-1), b:function(){}, c:new Date()}"));
```

Auquel cas, le navigateur doit effectuer une recherche coûteuse afin de vérifier s'il y a des variables locales `Date`.

Pour obtenir un résultat identique, on peut tout à fait se passer d'`eval()` :

```js
function Date(n) {
  return [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursaday",
    "Friday",
    "Saturday",
    "Sunday",
  ][n % 7 || 0];
}
function runCodeWithDateFunction(obj) {
  return Function('"use strict";return (' + obj + ")")()(Date);
}
console.log(runCodeWithDateFunction("function(Date){ return Date(5) }"));
```

1\. Le code passé à `runCodeWithDateFunction` peut être minifié.

2\. Le surcoût lié à un appel de fonction est léger

3\. `Function()` permet d'utiliser `"use strict";` (qui peut également aider à améliorer les performances).

Enfin, pour la plupart des cas, on doit pouvoir éviter de passer par

`eval()` ou `Function()` !

### Accéder aux propriétés d'un objet

`eval()` ne doit pas être utilisée pour convertir des noms de propriétés en propriétés. Par exemple, lorsqu'on ne sait pas quelle propriété va être consultée avant l'exécution, on pourrait utiliser :

```js
var obj = { a: 20, b: 30 };
var nomPropriété = getNomProp(); //une méthode qui renvoie "a" ou "b"

eval("var résultat = obj." + nomPropriété);
```

Cependant, `eval()` n'est pas du tout nécessaire. Il est beaucoup plus simple, plus sécurisé, plus rapide, d'utiliser les [accesseurs de propriétés](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres) :

```js
var obj = { a: 20, b: 30 };
var nomPropriété = getNomProp(); // une méthode qui renvoie  "a" or "b"
var résultat = obj[nomPropriété]; //  obj[ "a" ] correspond à obj.a
```

### Utiliser des fonctions au lieu de morceaux de code

Les fonctions JavaScript sont des [citoyens de premier rang du langage](https://en.wikipedia.org/wiki/First-class_function), cela signifie que les fonctions peuvent être passées comme arguments aux autres API, qu'elles peuvent être stockées dans des variables, dans des propriétés d'objets, etc. De nombreuses API pour le DOM fonctionnent en prenant en argument des fonctions :

```js
// au lieu de setTimeout(" ... ", 1000) on utilisera :
setTimeout(function() { ... }, 1000);

// au lieu de elt.setAttribute("onclick", "...") on utilisera :
elt.addEventListener("click", function() { ... } , false);
```

[Les fermetures (_closures_)](/fr/docs/Web/JavaScript/Guide/Closures) sont utiles lorsqu'on souhaite obtenir des fonctions paramétrées sans avoir à concaténer des chaînes de caractères.

### Convertir des chaînes JSON en objets JavaScript (_parsing_)

Si la chaîne utilisée avec `eval()` contient des données (par exemple, un tableau : `"[1, 2, 3]"`) et non du code, il est conseillé d'utiliser du {{Glossary("JSON")}}, qui permet de représenter un sous-ensemble des données représentables en JavaScript.

On notera que la syntaxe JSON est limitée relativement à la syntaxe JavaScript. De nombreux littéraux JavaScript ne pourront être parsés en JSON (par exemple, les virgules à la fin des instructions ne seront pas autorisées et les noms de propriétés devront être compris entre simples quotes). Il est souvent préférable d'utiliser un outil de sérialisation JSON pour que les chaînes générées puissent être analysée en JSON.

### Transmettre des données et non du code

Si on a par exemple une extension conçue pour parcourir le code d'une page web, on pourra transmettre des données [XPath](/fr/docs/XPath) au lieu d'un code JavaScript.

### Exécuter du code avec des privilèges restreints

S'il faut nécessairement exécuter du code, il faut le faire avec des privilèges restreints. Cela s'applique généralement aux modules complémentaires ou aux applications XUL. Pour cela, on pourra utiliser [Components.utils.evalInSandbox](/fr/docs/Components.utils.evalInSandbox).

## Exemples

### Utiliser `eval()`

Dans le code suivant, les deux instructions passées à `eval()` sous la forme d'une chaîne renvoient 42. La première évaluation porte sur la chaîne "`x + y + 1`" ; la seconde évaluation porte sur la chaîne de caractères "`42`".

```js
var x = 2;
var y = 39;
var z = "42";
eval("x + y + 1"); // renvoie 42
eval(z); // renvoie 42
```

### Utiliser `eval()` pour une chaîne d'instructions

Dans l'exemple qui suit, `eval()` est utilisée pour évaluer la chaîne de caractères `str`. Cette chaîne contient plusieurs instructions JavaScript qui affichent un message dans la console et qui affectent la valeur 42 à la variable `z` si `x` vaut cinq et 0 sinon. Lorsque la seconde instruction est exécutée, `eval()` entraînera l'exécution des instructions, les instructions seront évaluées et la valeur de `z` sera donc renvoyée.

```js
var x = 5;
var str = "if (x == 5) {console.log('z vaut 42'); z = 42;} else z = 0; ";
console.log("z vaut " + eval(str));
```

### Le résultat d'`eval()` est celui de la dernière expression

`eval()` renvoie la valeur de la dernière expression évaluée :

```js
var str = "if ( a ) { 1+1; } else { 1+2; }";
var a = true;
var b = eval(str); // renvoie 2

console.log("b vaut : " + b);

a = false;
b = eval(str); // renvoie 3

console.log("b vaut : " + b);
```

### `eval()` et les fonctions

Pour qu'une fonction soit restituée lors de l'évaluation, il est nécessaire d'encadrer l'expression contenue dans la chaîne de caractères avec des parenthèses :

```js
var fctStr1 = "function a() {}";
var fctStr2 = "(function a() {})";
var fct1 = eval(fctStr1); // renvoie undefined
var fct2 = eval(fctStr2); // renvoie une function
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Objets_globaux/uneval", "uneval()")}}
- {{jsxref("Opérateurs/Opérateurs_de_membres","Les accesseurs de propriétés","",1)}}
- [Utiliser `eval()` dans les scripts de contenu dans les WebExtensions](</fr/Add-ons/WebExtensions/Content_scripts#Using_eval()_in_content_scripts>)
