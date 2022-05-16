---
title: WebAssembly.Exception
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception
browser-compat: javascript.builtins.WebAssembly.Exception
---
{{JSRef}}

Un objet **`WebAssembly.Exception`** représente une exception d'exécution levée depuis WebAssembly vers JavaScript ou levée depuis JavaScript vers un gestionnaire d'exception WebAssembly.

Le [constructeur](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/Exception) prend comme arguments un objet [`WebAssembly.Tag`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag), un tableau de valeurs et un objet `options`.

La balise fournie par l'objet `WebAssembly.Tag` définit de façon unique le _type_ d'une exception, en incluant l'ordre de ses arguments et leurs types de données. Il est nécessaire d'utiliser la même balise que celle utilisée pour la création de l'objet `Exception` afin d'accéder aux arguments de l'exception déclenchée.

Différentes méthodes existent pour tester la correspondance entre une exception et une balise donnée, et pour obtenir une valeur particulière par indice (si l'exception correspond à la balise indiquée).

Le code JavaScript ou d'autre code côté client peut uniquement accéder aux valeurs des exceptions WebAssembly lorsque la balise associée est partagée (on ne peut pas utiliser une autre balise qui ne fait que définir les mêmes types de données). Sans balise correspondante, les exceptions peuvent être interceptées et réémises, mais elles ne peuvent pas être inspectées.

Afin que l'émission des exceptions soit plus rapide, les exceptions levées depuis WebAssembly n'incluent généralement pas la pile d'appels (<i lang="en">stack trace</i>). Le code WebAssembly qui doit fournir une pile d'appels doit appeler une fonction JavaScript pour créer l'exception en passant le paramètre `options.traceStack=true` au constructeur. Une fois l'exception disponible pour le module WebAssembly, il peut y attacher une pile d'appels via la propriété [`stack`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/stack) puis lever l'exception.

{{AvailableInWorkers}}

## Constructeur

- [`WebAssembly.Exception()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/Exception)
  - : Crée un nouvel objet `WebAssembly.Exception`.

## Méthodes des instansces

- [`Exception.prototype.is()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/is)
  - : Teste si une exception correspond à une balise donnée.

- [`Exception.prototype.getArg()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/getArg)
  - : Renvoie les champs de données d'une exception qui correspond à la balise donnée.

## Propriétés des instances

- [`Exception.prototype.stack`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/stack)
  - : Renvoie la pile d'appels de l'exception, ou `undefined`.

## Exemples

Dans cet exemple, on montre comment définir une balise et l'importer dans un module, puis on l'utilise afin de lever une exception interceptée en JavaScript.

Prenons le code WebAssembly suivant et supposons qu'il soit compilé dans un fichier nommé **exemple.wasm**.

- Le module importe une balise à laquelle il est fait référence par `$tagname` et qui a un unique paramètre de type `i32`. La balise doit être passée en utilisant le module `extmod` et la balise `exttag`.
- La fonction `$throwException` lève une exception à l'aide du mot-clé `throw`, en prenant en argument `$tagname` et le paramètre.
- Le module exporte la fonction `run1()` qui lève une exception avec la valeur "42".

```wasm
(module
  ;; on importe la balise qui sera ici désignée par $tagname
  (import "extmod" "exttag" (tag $tagname (param i32)) )

  ;; la fonction $throwException utilise un paramètre i32 pour l'exception $tagname
  (func $throwException (param i32)
    local.get 0
    throw $tagname
  )

  ;; La fonction exportée "run1" appelle $throwException
  (func (export "run1")
    i32.const 42
    call $throwException
  )
)
```

Le fragment de code qui suit appelle [`WebAssembly.instantiateStreaming`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming) pour importer le fichier **exemple.wasm**, en lui passant un «&nbsp;objet d'import&nbsp;» (`importObject`) qui inclue une nouvelle balise ([`WebAssembly.Tag`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag)) intitulée `tag_to_import`. L'objet d'import définit un objet dont les propriétés correspondent à l'instruction  `import` du code WebAssembly.

Une fois le fichier instancié, le code appelle la méthode WebAssembly exportée `run1()`, qui lèvera immédiatement une exception.

```js
const tag_to_import = new WebAssembly.Tag( { parameters: ['i32']} );

// Note : les propriétés de l'objet d'import correspondent à l'instruction
// WebAssembly import
const importObject = { "extmod": {"exttag": tag_to_import} }
WebAssembly.instantiateStreaming(fetch('exemple.wasm'), importObject )
  .then(obj => {
    console.log(obj.instance.exports.run1());
  })
  .catch((e) => {
    console.log(`${ e }`);
    // On vérifie qu'on a la bonne balise pour l'exception
    // Si c'est le cas, on utilise getArg() afin de l'inspecter
    if (e.is(tag_to_import) {
      console.log(`getArg 0 : ${ e.getArg(tag_to_import, 0) }`);
    }
  });

// Affichage dans la console
exemple.js:40 WebAssembly.Exception: wasm exception
exemple.js:41 getArg 0 : 42
```

L'exception est interceptée en JavaScript à l'aide d'un bloc `catch`. On peut voir qu'elle est de type `WebAssembly.Exception`, mais si on ne dispose pas de la bonne balise, on ne pourrait pas en savoir grand-chose de plus.

Ici, nous connaissons la balise et on utilise donc [`Exception.prototype.is()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/is) afin de vérifier que c'est la bonne balise. C'est bien le cas et on appelle [`Exception.prototype.getArg()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/getArg) qui permet de lire la valeur "42".

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Aperçu général de WebAssembly](/fr/docs/WebAssembly)
- [Concepts WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
