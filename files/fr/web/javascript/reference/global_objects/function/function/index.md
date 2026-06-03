---
title: Constructeur Function()
short-title: Function()
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
l10n:
  sourceCommit: fefa80c1e817377a0bbaf6a636ce6b8797f38fbb
---

> [!WARNING]
> Les arguments passés à ce constructeur sont analysés dynamiquement et exécutés comme du JavaScript.
> Les API de ce type sont appelées [points d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_et_usage) et peuvent constituer un vecteur [d'attaques de type injection de scripts intersites (XSS)](/fr/docs/Web/Security/Attacks/XSS).
>
> Vous pouvez atténuer ce risque en passant toujours des objets {{DOMxRef("TrustedScript")}} au lieu de chaînes de caractères et en [imposant des types de confiance](/fr/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
>
> Voir [Considérations de sécurité](#considérations_de_sécurité) pour plus d'informations.

Le constructeur **`Function()`** crée des objets {{JSxRef("Function")}}. Appeler ce constructeur directement permet de créer des fonctions dynamiquement, mais présente des problèmes de sécurité et des problèmes de performance similaires (mais bien moins importants) à ceux de {{JSxRef("Global_Objects/eval", "eval()")}}. Cependant, contrairement à `eval` (qui peut avoir accès à la portée locale), le constructeur `Function` crée des fonctions qui s'exécutent uniquement dans la portée globale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: constructeur Function()", "shorter")}}

```js interactive-example
const sum = new Function("a", "b", "return a + b");

console.log(sum(2, 6));
// Résultat attendu : 8
```

## Syntaxe

```js-nolint
new Function(functionBody)
new Function(arg1, functionBody)
new Function(arg1, arg2, functionBody)
new Function(arg1, arg2, /* …, */ argN, functionBody)

Function(functionBody)
Function(arg1, functionBody)
Function(arg1, arg2, functionBody)
Function(arg1, arg2, /* …, */ argN, functionBody)
```

> [!NOTE]
> `Function()` peut être appelée avec ou sans [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Les deux créent une nouvelle instance de `Function`.

### Paramètres

- `arg1`, …, `argN` {{Optional_Inline}}
  - : Instances de {{DOMxRef("TrustedScript")}} ou chaînes de caractères définissant les noms à utiliser par la fonction comme noms formels d'arguments. La valeur doit correspondre à un paramètre JavaScript valide (soit un [identifiant](/fr/docs/Glossary/Identifier), un [paramètre du reste](/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters), ou un paramètre [déstructuré](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring), éventuellement avec une [valeur par défaut](/fr/docs/Web/JavaScript/Reference/Functions/Default_parameters)), ou une liste de telles chaînes séparées par des virgules.

    Comme les paramètres sont analysés de la même façon que les expressions de fonction, les espaces et les commentaires sont acceptés. Par exemple&nbsp;: `"x", "laValeur = 42", "[a, b] /* nombres */"` — ou `"x, laValeur = 42, [a, b] /* nombres */"`. (`"x, laValeur = 42", "[a, b]"` est aussi correct, mais très difficile à lire.)

- `functionBody`
  - : Un {{DOMxRef("TrustedScript")}} ou une chaîne de caractères contenant les instructions JavaScript qui forment la définition de la fonction.

### Exceptions

- {{JSxRef("SyntaxError")}}
  - : Les arguments des paramètres de la fonction ne peuvent pas être analysés comme une liste de paramètres valide, ou le `functionBody` ne peut pas être analysé comme des instructions JavaScript valides.
- {{JSxRef("TypeError")}}
  - : Un paramètre est une chaîne de caractères lorsque les [types de confiance](/fr/docs/Web/API/Trusted_Types_API) sont [imposés par une CSP](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_des_types_approuvés) et qu'aucune politique par défaut n'est définie.

## Description

Ceci est observable en appelant la méthode [`toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) de la fonction.

Cependant, contrairement aux [expressions de fonction](/fr/docs/Web/JavaScript/Reference/Operators/function) normales, le nom `anonymous` n'est pas ajouté à la portée de `functionBody`, car `functionBody` n'a accès qu'à la portée globale. Si `functionBody` n'est pas en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode) (le corps doit lui-même contenir la directive `"use strict"` car il n'hérite pas du mode strict du contexte), vous pouvez utiliser [`arguments.callee`](/fr/docs/Web/JavaScript/Reference/Functions/arguments/callee) pour référencer la fonction elle-même. Sinon, vous pouvez définir la partie récursive comme une fonction interne&nbsp;:

```js
const recursiveFn = new Function(
  "count",
  `
(function recursiveFn(count) {
  if (count < 0) {
    return;
  }
  console.log(count);
  recursiveFn(count - 1);
})(count);
`,
);
```

Notez que les deux parties dynamiques de la source assemblée — la liste des paramètres `args.join(",")` et `functionBody` — seront d'abord analysées séparément pour s'assurer qu'elles sont chacune syntaxiquement valides. Cela empêche les tentatives d'injection.

```js
new Function("/*", "*/) {");
// SyntaxError: Unexpected end of arg string
// Ne devient pas "function anonymous(/*) {*/) {}"
```

### Considérations de sécurité

La méthode peut être utilisée pour exécuter une entrée arbitraire passée à n'importe quel paramètre. Si l'entrée est une chaîne de caractères potentiellement non sécurisée fournie par un·e utilisateur·ice, cela constitue un vecteur possible [d'attaques par injection de scripts intersites (XSS)](/fr/docs/Web/Security/Attacks/XSS). Par exemple, l'exemple suivant suppose que `untrustedCode` a été fourni par un·e utilisateur·ice&nbsp;:

```js example-bad
const untrustedCode = "alert('Code potentiellement malveillant !');";
const adder = new Function("a", "b", untrustedCode);
```

Les sites web avec une [politique de sécurité du contenu (CSP)](/fr/docs/Web/HTTP/Guides/CSP) qui définit [`script-src`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) ou [`default-src`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) empêcheront par défaut l'exécution de ce type de code. Si vous devez autoriser l'exécution de scripts via `Function()`, vous pouvez atténuer ces problèmes en passant toujours des objets {{DOMxRef("TrustedScript")}} au lieu de chaînes de caractères, et en [imposant des types de confiance](/fr/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) à l'aide de la directive CSP {{CSP("require-trusted-types-for")}}. Cela garantit que l'entrée passe par une fonction de transformation.

Pour autoriser l'exécution de `Function()`, vous devez également définir le mot-clé [`trusted-types-eval`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) dans la directive `script-src` de votre CSP. Le mot-clé [`unsafe-eval`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) autorise aussi `Function()`, mais il est beaucoup moins sûr que `trusted-types-eval` car il permettrait l'exécution même sur les navigateurs qui ne prennent pas en charge les types de confiance.

Par exemple, la CSP requise pour votre site pourrait ressembler à ceci&nbsp;:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<votre_listeautorisante>' 'trusted-types-eval'
```

Le comportement de la fonction de transformation dépend du cas d'utilisation spécifique qui nécessite un script fourni par un·e utilisateur·ice. Si possible, vous devez limiter les scripts autorisés exactement au code que vous jugez fiable. Si cela n'est pas possible, vous pouvez autoriser ou bloquer l'utilisation de certaines fonctions dans la chaîne de caractères fournie.

## Exemples

Notez que ces exemples omettent l'utilisation des types de confiance pour plus de clarté. Pour un exemple de la méthode recommandée, voir [Utiliser `TrustedScript`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval#utiliser_trustedscript) dans `eval()`.

### Définir des arguments avec le constructeur `Function()`

Le code qui suit crée un objet `Function` qui prend deux arguments.

```js
// Exemple exécutable directement dans votre console JavaScript

// Créez une fonction qui prend deux arguments et retourne la somme de ces arguments
const additionneur = new Function("a", "b", "return a + b");

// Appeler la fonction
additionneur(2, 6);
// 8
```

Les arguments `"a"` et `"b"` sont les noms formels des arguments utilisés dans le corps de la fonction&nbsp;: `"return a + b"`.

### Créer un objet de fonction avec une déclaration ou une expression de fonction

```js
// Le constructeur Function() peut prendre plusieurs instructions séparées par des points-virgules.
// Une expression de fonction doit contenir une instruction return avec le nom de la fonction.

// On peut voir ici que le résultat de new Function est appelé.
// Ainsi, on peut invoquer juste après la fonction qui vient d'être créée.
const sommeTableau = new Function(
  "const sommeTableau = (arr) => arr.reduce((precedente, courante) => precedente + courante); return sommeTableau",
)();

// On appelle la fonction
sommeTableau([1, 2, 3, 4]);
// 10

// Si on n'appelle pas new Function au moment de la création,
// on peut toujours utiliser la méthode Function.call() ensuite
const plusGrandNombre = new Function(
  "function plusGrandNombre (arr) { return Math.max(...arr) }; return plusGrandNombre",
);

// On appelle la fonction
plusGrandNombre.call({}).call({}, [2, 4, 1, 8, 5]);
// 8

// Une déclaration de fonction ne nécessite pas d'instruction return
const direCoucou = new Function(
  "return function (nom) { return `Coucou, ${nom}` }",
)();

// On appelle la fonction
direCoucou("monde");
// Coucou, monde
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser le constructeur de fonction](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval#utiliser_le_constructeur_function) dans `eval()`
- L'instruction [`function`](/fr/docs/Web/JavaScript/Reference/Statements/function)
- [L'expression `function`](/fr/docs/Web/JavaScript/Reference/Operators/function)
- {{JSxRef("Functions", "Les fonctions", "", 1)}}
