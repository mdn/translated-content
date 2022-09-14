---
title: WebAssembly.Exception.prototype.stack
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/stack
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/stack
browser-compat: javascript.builtins.WebAssembly.Exception.stack
---
{{JSRef}}

La propriété en lecture seule **`stack`**, rattachée à une instance d'[`Exception`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception) _peut_ contenir une trace de pile d'appels pour une exception levée par du code WebAssembly.

Par défaut, les exceptions levées par du code WebAssembly n'incluent pas la pile d'appels. Si le code WebAssembly doit fournir une pile d'appels, il doit appeler une fonction JavaScript pour créer l'exception et passer le paramètre `options.traceStack=true` au [constructeur](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/Exception). La machine virtuelle peut ensuite attacher la pile d'appels à l'exception lorsqu'elle est levée.

> **Note :** Les traces de pile d'appels ne sont pas envoyées par défaut depuis du code WebAssembly afin d'améliorer les performances. La possibilité d'ajouter les traces de pile d'appels à ces exceptions est un outil pour le développement, il ne s'agit pas d'une pratique recommandée plus largement.

## Valeur

Une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString) contenant la pile d'appels, ou [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) si aucune trace n'a été affectée.

La chaîne de caractères décrivant la pile d'appels liste les emplacements de chaque opération de la pile, au format WebAssembly. Il s'agit d'une chaîne de caractères, lisible par un humain, qui indique l'URL, le nom du type de fonction appelé, l'indice de la fonction et son décalage au sein du module binaire. Elle a approximativement ce format (voir [les conventions quant à la pile d'appels](https://webassembly.github.io/spec/web-api/index.html#conventions) dans la spécification pour plus d'informations)&nbsp;:

```
${url}:wasm-function[${funcIndex}]:${pcOffset}
```

## Exemples

Dans l'exemple qui suit, on illustre comment lever une exception depuis du code WebAssembly et qui contient une trace de pile d'appels.

Prenons le code WebAssembly suivant et supposons qu'il soit compilé dans un fichier intitulé **exemple.wasm**. On y importe une balise à laquelle on fait référence, en interne, avec `$tagname` et on importe une fonction à laquelle on fait référence avec `$throwExnWithStack`. Ce module exporte la méthode `run1` qui peut être appelée depuis le code externe afin d'appeler `$throwExnWithStack` (et donc la fonction JavaScript).

```wasm
(module
  ;; On importe la balise à laquelle on fera référence avec $tagname
  (import "extmod" "exttag" (tag $tagname (param i32)) )

  ;; On importe la fonction à laquelle on fera référence avec $throwExnWithStack
  (import "extmod" "throwExnWithStack" (func $throwExnWithStack (param i32) ) )

  ;; On appelle $throwExnWithStack en passant 42 comme paramètre
      (func (export "run1")
     i32.const 42
     call $throwExnWithStack
  )
)
```

Le code JavaScript qui suit définit une nouvelle balise `tag` et la fonction `throwExceptionWithStack`. Ceux-ci sont passés au module WebAssembly via `importObject` lors de son instanciation.

Une fois le fichier instancié, le code appelle la méthode WebAssembly `run1()`, qui déclenchera immédiatement l'exception. La pile d'appels est alors affichée dans la console dans l'instruction `catch`.

```js
let tag = new WebAssembly.Tag( { parameters: ['i32']} );

let throwExceptionWithStack = (param) => {
  // Note : on déclare l'exception avec '{traceStack: true}'
  throw new WebAssembly.Exception(tag, [param], {traceStack: true});
};

// Note : les propriétés d'importObject correspondent aux instructions d'import WebAssembly.
const importObject = { "extmod": {"exttag": tag, "throwExnWithStack": throwExceptionWithStack} }
WebAssembly.instantiateStreaming(fetch('exemple.wasm'), importObject )
  .then(obj => {
    console.log(obj.instance.exports.run1(12));  // On ne fait rien avec la valeur passée
  })
  .catch((e) => {
    console.log(`stack : ${ e.stack }`);
  });

// Affichera dans la console quelque chose comme :
// stack: throwExceptionWithStack@http://<url>/main.js:76:9
// @http://<url>/exemple.wasm:wasm-function[3]:0x73
// @http://<url>/main.js:82:38
```

La partie la plus «&nbsp;intéressante&nbsp;» du code est ici la ligne où l'exception est créée&nbsp;:

```js
new WebAssembly.Exception(tag, [param], {traceStack: true});
```

En passant `{traceStack: true}`, on indique à la machine virtuelle WebAssembly qu'il faut attacher la pile d'appels à l'exception. Sans cette option, la propriété portant la pile aurait valu `undefined`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Aperçu général de WebAssembly](/fr/docs/WebAssembly)
- [Concepts WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
