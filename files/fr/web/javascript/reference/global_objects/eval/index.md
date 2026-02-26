---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: fefa80c1e817377a0bbaf6a636ce6b8797f38fbb
---

> [!WARNING]
> L'argument transmis à cette fonction est analysé dynamiquement et exécuté comme du JavaScript.
> Les API de ce type sont appelées [points d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_and_usage) et peuvent être une source potentielle d'attaques [par injection de script inter-sites (XSS)](/fr/docs/Web/Security/Attacks/XSS).
>
> Vous pouvez réduire ce risque en transmettant toujours des objets {{DOMxRef("TrustedScript")}} au lieu de chaînes de caractères et en [imposant des types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_imposer_des_types_de_confiance).
>
> Voir [Considérations de sécurité](#considérations_de_sécurité) pour plus d'informations.

La fonction **`eval()`** évalue du code JavaScript représenté sous forme de chaîne de caractères et retourne sa valeur de terminaison. La source est analysée comme un script.

{{InteractiveExample("Démonstration JavaScript&nbsp;: eval()")}}

```js interactive-example
console.log(eval("2 + 2"));
// Résultat attendu : 4

console.log(eval(new String("2 + 2")));
// Résultat attendu : 2 + 2

console.log(eval("2 + 2") === eval("4"));
// Résultat attendu : true

console.log(eval("2 + 2") === eval(new String("2 + 2")));
// Résultat attendu : false
```

## Syntaxe

```js-nolint
eval(script)
```

### Paramètres

- `script`
  - : Une instance de {{DOMxRef("TrustedScript")}} ou une chaîne de caractères représentant une expression JavaScript, une instruction ou une suite d'instructions JavaScript. L'expression peut inclure des variables et des propriétés d'objets existants. Elle sera analysée comme un script, donc les déclarations {{JSxRef("Statements/import", "import")}} (qui ne peuvent exister que dans des modules) ne sont pas autorisées.

### Valeur de retour

La valeur de terminaison du code évalué. Si la valeur de terminaison est vide, {{JSxRef("undefined")}} est retournée. Si `script` n'est pas une instance de {{DOMxRef("TrustedScript")}} ou une chaîne de caractères primitive, `eval()` retourne l'argument inchangé.

### Exceptions

- {{JSxRef("SyntaxError")}}
  - : Le paramètre `script` ne peut pas être analysé comme un script.
- {{JSxRef("TypeError")}}
  - : `script` est une chaîne de caractères lorsque les [types de confiance](/fr/docs/Web/API/Trusted_Types_API) sont [imposés par une CSP](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_imposer_des_types_de_confiance) et qu'aucune politique par défaut n'est définie.

La méthode lance également toute exception qui survient lors de l'évaluation du code.

## Description

`eval()` est une propriété de fonction de l'objet global.

L'argument de la fonction `eval()` est une chaîne de caractères. Elle évalue la chaînes de caractères source comme un corps de script, ce qui signifie que les instructions et les expressions sont autorisées. Elle retourne la valeur de fin du code. Pour les expressions, il s'agit de la valeur à laquelle l'expression est évaluée. De nombreuses instructions et déclarations ont également des valeurs de fin, mais le résultat peut être surprenant (par exemple, la valeur de fin d'une affectation est la valeur affectée, mais la valeur de fin de {{JSxRef("Statements/let", "let")}} est indéfinie), il est donc recommandé de ne pas se fier aux valeurs de fin des instructions.

En mode strict, déclarer une variable nommée `eval` ou réassigner `eval` est une erreur de syntaxe ({{JSxRef("SyntaxError")}}).

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

Si l'argument de `eval()` n'est pas une instance de {{DOMxRef("TrustedScript")}} ou une chaîne de caractères primitive, `eval()` retourne l'argument inchangé. Dans l'exemple suivant, passer un objet `String` au lieu d'une chaîne primitive fait que `eval()` retourne l'objet `String` au lieu d'évaluer la chaîne.

```js
eval(new String("2 + 2")); // retourne un objet String contenant "2 + 2"
eval("2 + 2"); // retourne 4
```

Pour contourner ce comportement de façon générique, vous pouvez [contraindre l'argument en chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#contrainte_de_chaîne_de_caractères) vous-même avant de le passer dans `eval()`.

```js
const expression = new String("2 + 2");
eval(String(expression)); // retourne 4
```

### Évaluation directe et indirecte

Il existe deux modes d'appel de `eval()`&nbsp;: l'évaluation _directe_ et l'évaluation _indirecte_.L'évaluation directe, comme son nom l'indique, fait référence à l'appel direct de la fonction globale `eval` avec `eval(…)`. Tout le reste, y compris l'invocation à l'aide d'une variable alias, à l'aide d'un accès membre ou d'une autre expression, ou à l'aide de l'opérateur de chaînage optionnel [`?.`](/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining), est indirect.

```js
// Appel direct
eval("x + y");

// Appel indirect utilisant l'opérateur virgule pour retourner eval
(0, eval)("x + y");

// Appel indirect via le chaînage optionnel
eval?.("x + y");

// Appel indirect utilisant une variable pour stocker et retourner eval
const myEval = eval;
myEval("x + y");

// Appel indirect via l'accès aux membres
const obj = { eval };
obj.eval("x + y");
```

L'évaluation indirecte peut être vue comme si le code était évalué dans une balise `<script>` séparée. Cela signifie&nbsp;:

- L'évaluation indirecte fonctionne dans le contexte global plutôt que dans le contexte local, et le code évalué n'a pas accès aux variables locales dans le contexte où il est appelé.

  ```js
  function test() {
    const x = 2;
    const y = 4;
    // Appel direct, utilise le contexte local
    console.log(eval("x + y")); // Le résultat est 6
    // Appel indirect, utilise le contexte global
    console.log(eval?.("x + y")); // Lève une erreur car x n'est pas défini dans le contexte global
  }
  ```

- Un `eval` indirect n'hérite pas de la rigueur du contexte environnant, et n'est en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode) que si la chaîne source elle-même contient une directive `"use strict"`.

  ```js
  function nonStrictContext() {
    eval?.(`with (Math) console.log(PI);`);
  }
  function strictContext() {
    "use strict";
    eval?.(`with (Math) console.log(PI);`);
  }
  function strictContextStrictEval() {
    "use strict";
    eval?.(`"use strict"; with (Math) console.log(PI);`);
  }
  nonStrictContext(); // Affiche 3.141592653589793
  strictContext(); // Affiche 3.141592653589793
  strictContextStrictEval(); // Uncaught SyntaxError: Strict mode code may not include a with statement
  ```

  En revanche, l'évaluation directe hérite de la rigueur du contexte appelant.

  ```js
  function nonStrictContext() {
    eval(`with (Math) console.log(PI);`);
  }
  function strictContext() {
    "use strict";
    eval(`with (Math) console.log(PI);`);
  }
  function strictContextStrictEval() {
    "use strict";
    eval(`"use strict"; with (Math) console.log(PI);`);
  }
  nonStrictContext(); // Affiche 3.141592653589793
  strictContext(); // Uncaught SyntaxError: Strict mode code may not include a with statement
  strictContextStrictEval(); // Uncaught SyntaxError: Strict mode code may not include a with statement
  ```

- Les variables déclarées avec `var` et les [déclarations de fonction](/fr/docs/Web/JavaScript/Reference/Statements/function) seraient placées dans la portée environnante si la chaîne de caractères source n'était pas interprétée en mode strict — pour l'évaluation indirecte, elles deviennent des variables globales. S'il s'agit d'une évaluation directe dans un contexte en mode strict, ou si la chaîne de caractères source `eval` elle-même est en mode strict, alors les déclarations `var` et les déclarations de fonction ne «&nbsp;fuient&nbsp;» pas dans la portée environnante.

  ```js
  // Ni le contexte ni la chaîne de caractères source ne sont stricts,
  // donc var crée une variable dans la portée environnante.
  eval("var a = 1;");
  console.log(a); // 1
  // Le contexte n'est pas strict, mais la source eval est stricte,
  // donc b est limité au script évalué.
  eval("'use strict'; var b = 1;");
  console.log(b); // ReferenceError: b is not defined

  function strictContext() {
    "use strict";
    // Le contexte est strict, mais ceci est indirect et la chaîne source
    // n'est pas stricte, donc c est toujours global
    eval?.("var c = 1;");
    // Évaluation directe dans un contexte strict, donc d est limité
    eval("var d = 1;");
  }
  strictContext();
  console.log(c); // 1
  console.log(d); // ReferenceError: d is not defined
  ```

  Les déclarations {{JSxRef("Statements/let", "let")}} et {{JSxRef("Statements/const", "const")}} à l'intérieur de la chaîne évaluée sont toujours limitées à ce script.

- L'évaluation directe peut avoir accès à des expressions contextuelles supplémentaires. Par exemple, dans le corps d'une fonction, on peut utiliser [`new.target`](/fr/docs/Web/JavaScript/Reference/Operators/new.target):

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

### Ne jamais utiliser `eval()` directement !

L'utilisation directe de `eval()` présente plusieurs problèmes&nbsp;:

- `eval()` exécute le code qui lui est passé avec les privilèges de l'appelant. Si vous exécutez `eval()` avec une chaîne de caractères qui pourrait être affectée par une partie malveillante, vous pourriez finir par exécuter du code malveillant sur la machine de l'utilisateur·ice avec les permissions de votre page Web / extension. Plus important encore, permettre à du code tiers d'accéder à la portée dans laquelle `eval()` a été invoqué (si c'est un eval direct) peut entraîner des attaques possibles qui lisent ou modifient les variables locales. Voir [Considérations de sécurité](#considérations_de_sécurité) pour des approches qui atténuent ces risques.
- `eval()` est plus lent que les autres solutions, car il doit invoquer l'interpréteur JavaScript, alors que de nombreuses autres constructions sont optimisées par les moteurs JS modernes.
- Les interpréteurs JavaScript modernes convertissent le JavaScript en code machine Cela signifie que tout concept de nommage de variable est supprimé. Ainsi, toute utilisation de `eval()` obligera le navigateur à effectuer de longues et coûteuses recherches de noms de variables pour déterminer où la variable existe dans le code machine et définir sa valeur. De plus, de nouveaux éléments peuvent être introduits dans cette variable grâce à `eval()`, comme la modification du type de cette variable, ce qui oblige le navigateur à réévaluer tout le code machine généré pour compenser.
- Les minificateurs renoncent à toute minification si la portée dépend de manière transitive de `eval()`, car sinon `eval()` ne peut pas lire la variable correcte à l'exécution.

Il existe de nombreux cas où l'utilisation de `eval()` ou de méthodes associées peut être optimisée, voire évitée.

#### Utiliser la fonction `eval()` indirectement

Considérez ce code&nbsp;:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Le simple fait d'utiliser une évaluation indirecte et d'imposer le mode strict peut considérablement améliorer le code&nbsp;:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Les deux extraits de code ci-dessus peuvent sembler fonctionner de la même manière, mais ce n'est pas le cas&nbsp;; le premier, qui utilise une évaluation directe, présente plusieurs problèmes.

- Il est beaucoup plus lent, en raison de nombreuses inspections de portée. Remarquez `c: new Map()` dans la chaîne de caractères évaluée. Dans la version avec évaluation indirecte, l'objet est évalué dans la portée globale, il est donc sûr pour l'interpréteur de supposer que `Map` fait référence au constructeur global `Map()` au lieu d'une variable locale appelée `Map`. Cependant, dans le code utilisant l'évaluation directe, l'interpréteur ne peut pas supposer cela. Par exemple, dans le code suivant, `Map` dans la chaîne de caractères évaluée ne fait pas référence à `window.Map()`.

  ```js
  function looseJsonParse(obj) {
    class Map {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Map() }`));
  ```

  Ainsi, dans la version `eval()` du code, le navigateur est contraint d'effectuer un appel de recherche coûteux pour vérifier s'il existe des variables locales appelées `Map()`.

- Si vous n'utilisez pas le mode strict, les déclarations `var` dans la source `eval()` deviennent des variables dans la portée environnante. Cela entraîne des problèmes difficiles à déboguer si la chaîne de caractères est acquise à partir d'une entrée externe, en particulier s'il existe déjà une variable portant le même nom.
- L'évaluation directe peut lire et modifier les liaisons dans la portée environnante, ce qui peut entraîner la corruption des données locales par des entrées externes.
- Lors de l'utilisation directe de `eval`, en particulier lorsque la source d'évaluation ne peut pas être prouvée comme étant en mode strict, le moteur — et les outils de compilation — doivent désactiver toutes les optimisations liées à la mise en ligne (<i lang="en">inlining</i> en anglais), car la source `eval()` peut dépendre de n'importe quel nom de variable dans son champ d'application environnant.

Cependant, l'utilisation indirecte de `eval()` ne permet pas de passer des liaisons supplémentaires autres que les variables globales existantes pour que la source évaluée puisse les lire. Si vous devez définir des variables supplémentaires auxquelles la source évaluée doit avoir accès, envisagez d'utiliser le constructeur `Function()`.

#### Utiliser le constructeur `Function()`

Le constructeur [`Function()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function) est très similaire à l'exemple d'évaluation indirecte ci-dessus&nbsp;: il évalue également le code JavaScript qui lui est passé dans la portée globale sans lire ni modifier les liaisons locales, ce qui permet aux moteurs d'effectuer plus d'optimisations que l'évaluation directe avec `eval()`.

La différence entre `eval()` et `Function()` réside dans le fait que la chaîne de caractères source transmise à `Function()` est analysée comme un corps de fonction, et non comme un script. Il existe quelques nuances — par exemple, vous pouvez utiliser des instructions `return` au niveau supérieur d'un corps de fonction, mais pas dans un script.

Le constructeur `Function()` est utile si vous souhaitez créer des liaisons locales dans votre source évaluée, en passant les variables comme paramètres.

```js
function add(a, b) {
  return a + b;
}
function runCodeWithAddFunction(obj) {
  return Function("add", `"use strict";return (${obj});`)(add);
}
console.log(runCodeWithAddFunction("add(5, 7)")); // 12
```

Les fonctions `eval()` et `Function()` évaluent implicitement du code arbitraire et sont interdites dans les paramètres stricts [CSP](/fr/docs/Web/HTTP/Guides/CSP). Il existe également des alternatives plus sûres (et plus rapides&nbsp;!) à `eval()` ou `Function()` pour les cas d'utilisation courants.

#### Utiliser les accesseurs par crochet

Vous ne devez pas utiliser `eval()` pour accéder dynamiquement aux propriétés. Prenons l'exemple suivant, où la propriété de l'objet à laquelle il faut accéder n'est connue qu'au moment où le code est exécuté. Cela peut être fait avec `eval()`&nbsp;:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // retourne "a" ou "b"

const result = eval(`obj.${propName}`);
```

Cependant, `eval()` n'est pas nécessaire ici — en fait, il est plus sujet aux erreurs, car si `propName` n'est pas un identifiant valide, cela entraîne une erreur de syntaxe. De plus, si `getPropName` n'est pas une fonction que vous contrôlez, cela peut entraîner l'exécution de code arbitraire. À la place, utilisez les [accesseurs de propriétés](/fr/docs/Web/JavaScript/Reference/Operators/Property_accessors), qui sont beaucoup plus rapides et sûrs&nbsp;:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // retourne "a" ou "b"
const result = obj[propName]; // obj["a"] équivaut à obj.a
```

Vous pouvez même utiliser cette méthode pour accéder aux propriétés descendantes. Avec `eval()`, cela ressemblerait à ceci&nbsp;:

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose que cela retourne "a.b.c"

const result = eval(`obj.${propPath}`); // 0
```

Éviter `eval()` ici peut être fait en divisant le chemin de la propriété et en parcourant les différentes propriétés&nbsp;:

```js
function getDescendantProp(obj, desc) {
  const arr = desc.split(".");
  while (arr.length) {
    obj = obj[arr.shift()];
  }
  return obj;
}

const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose que cela retourne "a.b.c"
const result = setDescendantProp(obj, propPath); // 0
```

Définir une propriété de cette manière fonctionne de manière similaire&nbsp;:

```js
function setDescendantProp(obj, desc, value) {
  const arr = desc.split(".");
  while (arr.length > 1) {
    obj = obj[arr.shift()];
  }
  return (obj[arr[0]] = value);
}

const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose que cela retourne "a.b.c"
const result = setDescendantProp(obj, propPath, 1); // obj.a.b.c vaut désormais 1
```

Cependant, sachez que l'utilisation d'accesseurs entre crochets avec une entrée non contrainte n'est pas non plus sûre : cela peut entraîner des [attaques par injection d'objet <sup>(angl.)</sup>](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md).

#### Utiliser les fonctions de rappel

JavaScript dispose de [fonctions de première classe](/fr/docs/Glossary/First-class_Function), ce qui signifie que vous pouvez passer des fonctions en tant qu'arguments à d'autres API, les stocker dans des variables et des propriétés d'objets, etc. De nombreuses API DOM sont conçues dans cette optique, vous pouvez (et devriez) donc écrire&nbsp;:

```js
// Au lieu de setTimeout("…", 1000) utilisez :
setTimeout(() => {
  // …
}, 1000);

// Au lieu de elt.setAttribute("onclick", "…") utilisez :
elt.addEventListener("click", () => {
  // …
});
```

[Les closures](/fr/docs/Web/JavaScript/Guide/Closures) sont également utiles pour créer des fonctions paramétrées sans concaténer des chaînes de caractères.

#### Utiliser JSON

Si la chaîne de caractères sur laquelle vous appelez `eval()` contient des données (par exemple, un tableau&nbsp;: `"[1, 2, 3]"`), par opposition à du code, vous devriez envisager de passer à {{Glossary("JSON")}}, qui permet à la chaîne de caractères d'utiliser un sous-ensemble de la syntaxe JavaScript pour représenter les données.

Notez que, la syntaxe JSON étant plus limitée que celle de JavaScript, de nombreux littéraux JavaScript valides ne seront pas analysés en tant que JSON. Par exemple, les virgules finales ne sont pas autorisées en JSON, et les noms de propriétés (clés) dans les littéraux d'objet doivent être placés entre guillemets. Veillez à utiliser un sérialiseur JSON pour générer des chaînes de caractères qui seront ensuite analysées en tant que JSON.

Il est généralement préférable de transmettre des données soigneusement contrôlées plutôt que du code arbitraire. Par exemple, une extension conçue pour extraire le contenu de pages Web pourrait définir ses règles d'extraction dans [XPath](/fr/docs/Web/XML/XPath) plutôt que dans du code JavaScript.

### Considérations de sécurité

Cette méthode peut être utilisée pour exécuter une entrée arbitraire avec les privilèges de l'appelant. Si l'entrée est une chaîne de caractères potentiellement dangereuse fournie par un·e utilisateur·ice, cela constitue un vecteur possible pour des attaques de [par script inter-site (XSS)](/fr/docs/Web/Security/Attacks/XSS).

Par exemple, le code suivant montre comment `eval()` pourrait exécuter `codeMailveillant` fourni par un·e utilisateur·ice&nbsp;:

```js example-bad
const codeMailveillant = "alert('Code potentiellement malveillant !');";
const vipere = eval(codeMailveillant);
```

Les sites web dotés d'une [politique de sécurité du contenu (CSP)](/fr/docs/Web/HTTP/Guides/CSP) qui définissent [`script-src`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) ou [`default-src`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) empêcheront l'exécution de ce code par défaut. Si vous devez autoriser l'exécution des scripts via `eval()`, vous pouvez atténuer les risques en affectant toujours une instance de {{DOMxRef("TrustedScript")}} au lieu d'une chaîne de caractères, et en [imposant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_des_types_approuvés) à l'aide de la directive CSP [`require-trusted-types-for`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for). Cela garantit que l'entrée est passée par une fonction de transformation.

Pour permettre l'exécution de `eval()`, vous devez également définir [le mot-clé `trusted-types-eval`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) dans votre directive CSP `script-src`. Le mot-clé [`unsafe-eval`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) permet également `eval()`, mais est beaucoup moins sûr que `trusted-types-eval` car il permettrait l'exécution même sur les navigateurs qui ne prennent pas en charge les types de confiance.

Par exemple, la CSP requise pour votre site pourrait ressembler à ceci&nbsp;:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Le comportement de la fonction de transformation implémentée dans votre politique de types de confiance dépend du cas d'utilisation spécifique qui nécessite un script fourni par l'utilisateur·ice. Si possible, vous devez verrouiller les scripts autorisés sur le code exact que vous acceptez d'exécuter. Si cela n'est pas possible, vous pouvez autoriser ou bloquer l'utilisation de certaines fonctions dans l'entrée fournie.

## Exemples

Notez que le premier exemple montre comment utiliser la méthode avec les types de confiance. Les autres exemples omettent cette étape pour plus de concision.

### Utiliser `TrustedScript`

Pour atténuer le risque de XSS, il faut toujours affecter des instances de `TrustedScript` au paramètre `script`. Il faut également le faire si vous imposez les types de confiance pour d'autres raisons et souhaitez autoriser certaines sources de scripts permises (par `CSP: script-src`).

Les types de confiance ne sont pas encore pris en charge sur tous les navigateurs, donc nous définissons d'abord le [prothèse minimale de Trusted Types](/fr/docs/Web/API/Trusted_Types_API#prothèse_minimale_de_trusted_types). Cela agit comme un remplacement transparent pour l'API JavaScript Trusted Types&nbsp;:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Ensuite, nous créons un {{DOMxRef("TrustedTypePolicy")}} qui définit une méthode {{DOMxRef("TrustedTypePolicy/createScript", "createScript()")}} pour transformer des chaînes de caractères en instances de {{DOMxRef("TrustedScript")}}.

Dans cet exemple, nous supposons que vous disposez d'une fonction `transformedScript()` qui définit votre logique de transformation/filtrage.

```js
const policy = trustedTypes.createPolicy("script-policy", {
  createScript(input) {
    const transformed = transformedScript(input); // Notre méthode de filtrage
    return transformed;
  },
});
```

Ensuite, nous utilisons l'objet `policy` pour créer un objet `TrustedScript` à partir d'une chaîne de caractères potentiellement non sûre&nbsp;:

```js
// La chaîne de caractères potentiellement malveillante
const untrustedScript = "alert('Code potentiellement malveillant !');";

// Créer une instance TrustedScriptURL à l'aide de la politique
const trustedScript = policy.createScript(untrustedScript);
```

L'objet `TrustedScript` peut maintenant être transmis à `eval()`&nbsp;:

```js
eval(trustedScript);
```

### Utiliser la fonction `eval()`

Dans le code suivant, les deux instructions contenant `eval()` retournent 42.
La première évalue la chaîne de caractères `"x + y + 1"`&nbsp;; la seconde évalue la chaîne de caractères `"42"`.

```js
const x = 2;
const y = 39;
const z = "42";
eval("x + y + 1"); // 42
eval(z); // 42
```

### `eval()` retourne la valeur de complétion des instructions

`eval()` retourne la valeur de complétion des instructions. Pour `if`, ce serait la dernière expression ou instruction évaluée.

```js
const str = "if (a) { 1 + 1 } else { 1 + 2 }";
let a = true;
let b = eval(str);

console.log(`b vaut : ${b}`); // b vaut : 2

a = false;
b = eval(str);

console.log(`b vaut : ${b}`); // b vaut : 3
```

L'exemple suivant utilise `eval()` pour évaluer la chaîne de caractères `str`. Cette chaîne de caractères consiste en des instructions JavaScript qui affectent à `z` la valeur de 42 si `x` vaut cinq, et 0 sinon. Lorsque la seconde instruction est exécutée, `eval()` entraînera l'exécution des instructions, les instructions seront évaluées et la valeur de `z` sera donc retournée, car la valeur de complétion d'une affectation est la valeur affectée.

```js
const x = 5;
const str = `if (x === 5) {
  console.log("z is 42");
  z = 42;
} else {
  z = 0;
}`;

console.log("z is ", eval(str)); // z is 42  z is 42
```

Si vous affectez plusieurs valeurs, la dernière valeur est retournée.

```js
let x = 5;
const str = `if (x === 5) {
  console.log("z vaut 42");
  z = 42;
  x = 420;
} else {
  z = 0;
}`;

console.log("x vaut", eval(str)); // z vaut 42  x vaut 420
```

### Utiliser `eval()` pour définir une fonction sous forme de chaîne de caractères nécessite « ( » et « ) » en préfixe et suffixe

```js
// C'est une déclaration de fonction
const fctStr1 = "function a() {}";
// C'est une expression de fonction
const fctStr2 = "(function b() {})";
const fct1 = eval(fctStr1); // retourne undefined mais `a` est maintenant disponible comme une fonction globale
const fct2 = eval(fctStr2); // retourne une function `b`
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les accesseurs de propriétés](/fr/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions&nbsp;: utiliser eval dans les scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#utiliser_eval_dans_les_scripts_de_contenu)
