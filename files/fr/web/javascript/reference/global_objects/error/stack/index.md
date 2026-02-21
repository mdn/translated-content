---
title: Error.prototype.stack
short-title: stack
slug: Web/JavaScript/Reference/Global_Objects/Error/stack
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

{{Non-standard_Header}}

> [!NOTE]
> La propriété `stack` est de facto implémentée par tous les principaux moteurs JavaScript, et [le comité de standardisation JavaScript envisage de la standardiser <sup>(angl.)</sup>](https://github.com/tc39/proposal-error-stacks). Vous ne pouvez pas vous fier au contenu précis de la chaîne de la pile à cause des incohérences d'implémentation, mais vous pouvez généralement supposer qu'elle existe et l'utiliser à des fins de débogage.

La propriété non standard **`stack`** d'une instance de {{JSxRef("Error")}} fournit une trace des fonctions appelées, dans quel ordre, depuis quelle ligne et quel fichier, et avec quels arguments. La chaîne de la pile va des appels les plus récents aux plus anciens, jusqu'à l'appel initial dans la portée globale.

## Valeur

Une chaîne de caractères.

Comme la propriété `stack` n'est pas standard, les implémentations diffèrent quant à l'endroit où elle est installée.

- Sous Firefox, c'est une propriété d'accesseur sur `Error.prototype`.
- Sous Chrome et Safari, c'est une propriété de donnée sur chaque instance d'`Error`, avec le descripteur&nbsp;:

{{js_property_attributes(1, 0, 1)}}

## Description

Chaque moteur JavaScript utilise son propre format pour les traces de pile, mais ils sont assez cohérents dans leur structure générale. Chaque implémentation utilise une ligne distincte dans la pile pour représenter chaque appel de fonction. L'appel qui a directement causé l'erreur est placé en haut, et l'appel qui a démarré toute la chaîne d'appels est placé en bas. Voici quelques exemples de traces de pile&nbsp;:

```js
function toto() {
  tata();
}

function tata() {
  truc();
}

function truc() {
  console.log(new Error().stack);
}

toto();
```

```plain
#### JavaScriptCore
truc@filename.js:10:24
tata@filename.js:6:6
toto@filename.js:2:6
global code@filename.js:13:4

#### SpiderMonkey
truc@filename.js:10:15
tata@filename.js:6:3
toto@filename.js:2:3
@filename.js:13:1

#### V8
Error
    at truc (filename.js:10:15)
    at tata (filename.js:6:3)
    at toto (filename.js:2:3)
    at filename.js:13:1
```

V8 fournit [l'API de trace de pile <sup>(angl.)</sup>](https://v8.dev/docs/stack-trace-api) non standard pour personnaliser la trace de pile, incluant {{JSxRef("Error.captureStackTrace()")}}, {{JSxRef("Error.stackTraceLimit")}} et `Error.prepareStackTrace()`. D'autres moteurs prennent en charge cette API à des degrés divers.

Différents moteurs définissent cette valeur à des moments différents. La plupart des moteurs modernes la définissent lors de la création de l'objet {{JSxRef("Error")}}. Cela signifie que vous pouvez obtenir la pile complète d'appels dans une fonction en utilisant ce qui suit&nbsp;:

```js
function toto() {
  console.log(new Error().stack);
}
```

Sans avoir à lever une erreur puis à l'intercepter.

Les trames de pile peuvent aussi provenir d'autres éléments que des appels de fonction explicites. Par exemple, les gestionnaires d'évènements, les tâches temporisées et les gestionnaires de promesses démarrent tous leur propre chaîne d'appels. Le code source à l'intérieur des appels à {{JSxRef("Global_Objects/eval", "eval()")}} et au constructeur {{JSxRef("Function")}} apparaît aussi dans la pile&nbsp;:

```js
console.log(new Function("return new Error('Échec de la fonction')")().stack);
console.log("====");
console.log(eval(`new Error("échec de l'évaluation")`).stack);
```

```plain
#### JavaScriptCore
anonymous@
global code@filename.js:1:65
====
eval code@
eval@[native code]
global code@filename.js:3:17

#### SpiderMonkey
anonymous@filename.js line 1 > Function:1:8
@filename.js:1:65

====
@filename.js line 3 > eval:1:1
@filename.js:3:13

#### V8
Error: Échec de la fonction
    at eval (eval at <anonymous> (filename.js:1:13), <anonymous>:1:8)
    at filename.js:1:65
====
Error: échec de l'évaluation
    at eval (eval at <anonymous> (filename.js:3:13), <anonymous>:1:1)
    at filename.js:3:13
```

Dans Firefox, vous pouvez utiliser la directive `//# sourceURL` pour nommer une source d'évaluation. Voir la documentation Firefox [Déboguer des sources évaluées <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/debug_eval_sources/index.html).

## Exemples

### Utiliser la propriété `stack`

Le script suivant montre comment utiliser la propriété `stack` pour afficher une trace de pile dans la fenêtre de votre navigateur. Vous pouvez l'utiliser pour vérifier à quoi ressemble la structure de pile de votre navigateur.

```html hidden
<div id="output"></div>
```

```css hidden
#output {
  white-space: pre;
  font-family: monospace;
}
```

```js
function trace() {
  throw new Error("échec de trace()");
}
function b() {
  trace();
}
function a() {
  b(3, 4, "\n\n", undefined, {});
}
try {
  a("premier appel, premier argument");
} catch (e) {
  document.getElementById("output").textContent = e.stack;
}
```

{{EmbedLiveSample("Utiliser la propriété `stack`", 700, 200)}}

## Spécifications

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [TraceKit <sup>(angl.)</sup>](https://github.com/csnover/TraceKit/)
- [stacktrace.js <sup>(angl.)</sup>](https://github.com/stacktracejs/stacktrace.js)
- [L'API de trace de pile <sup>(angl.)</sup>](https://v8.dev/docs/stack-trace-api) dans la documentation V8
