---
title: WebAssembly.Exception.prototype.getArg()
slug: WebAssembly/JavaScript_interface/Exception/getArg
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/getArg
original_slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/getArg
browser-compat: javascript.builtins.WebAssembly.Exception.getArg
---
{{JSRef}}

La méthode **`getArg()`**, rattachée au prototype d'un objet [`Exception`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception), permet d'obtenir la valeur d'un élément spécifique parmi les arguments de donnée d'une exception.

Cette méthode prend comme argument une balise [`WebAssembly.Tag`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag) et fonctionnera uniquement si l'exception levée a été créée avec cette même balise. Dans le cas contraire, la méthode déclenchera une exception `TypeError`. On s'assure ainsi que l'exception puisse être lue seulement si le code appelant a accès à la balise. Les balies qui ne sont ni importées ni exportées dans/depuis le code WebAssembly sont internes et les exceptions correspondantes ne peuvent pas être inspectées avec cette méthode&nbsp;!

> **Note :** Avoir la même séquence des mêmes types de données ne suffit pas. Il faut que la balise ait la même _identité_ (que ce soit la même balise) que celle utilisée pour créer l'exception.

## Syntaxe

```js
getArg(exceptionTag, index)
```

### Paramètres

- `exceptionTag`
  - : Un objet [`WebAssembly.Tag`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag) qui doit correspondre à la balise associée à l'exception. Si les balises ne correspondent pas, une exception  [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) sera levée.
- `index`
  - : L'indice de la valeur, parmi les arguments de données, à renvoyer (l'indexation commence à 0). Si l'indice dépasse le nombre d'éléments disponibles, la méthode lèvera une exception [`RangeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RangeError).

### Valeur de retour

La valeur de l'argument située à la position `index`.

### Exceptions

- [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : L'exception n'a pas été créée avec la balise passée à la méthode.
- [`RangeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
  - : La valeur du paramètre `index` est supérieure ou égale au nombre de champs de données disponibles.

## Exemples

Pour accéder aux valeurs de l'exception, la balise doit être connue du code appelant. Pour cela, il faut qu'elle ait été importée dans ce code ou exportée depuis ce dernier.

### Obtenir la valeur d'exception avec une balise importée

Prenons le fragment de code WebAssembly qui suit en supposant qu'il soit compilé dans un fichier intitulé **exemple.wasm**. On y importe une balise à laquelle on fait référence avec `$tagname`, et on exporte une méthode `run1` qui peut être appelée depuis du code externe et qui lève une exception utilisant la balise.

```wasm
(module
  ;; On importe la balise à laquelle on fera référence avec $tagname
  (import "extmod" "exttag" (tag $tagname (param i32)) )

  ;; La fonction $throwException renvoie un paramère i32 et a une balise $tagname
  (func $throwException (param i32)
    local.get 0
    throw $tagname
  )

  ;; La fonction exportée "run1" qui appelle $throwException
  (func (export "run1")
    i32.const 1
    call $throwException
  )
)
```

Le fragment de code JavaScript qui suit appelle [`WebAssembly.instantiateStreaming`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming) afin d'importer le fichier  'exemple.wasm' et lui passe un objet d'import (`importObject`) contenant une nouvelle balise [`WebAssembly.Tag`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag) intitulée `tag_to_import`. L'objet d'import définit un objet dont les propriétés correspondent à celles de l'instruction `import` présente dans le code WebAssembly (un entier `i32`).

Une fois le fichier instancié, le code invoque la méthode WebAssembly exportée `run1()`, qui déclenche immédiatement une exception.

```js
const tag_to_import = new WebAssembly.Tag( { parameters: ['i32']} );

// Note : les propriétés de l'objet d'import correspondent à la
// structure décrite par l'instruction import dans le code WebAssembly !
const importObject = { "extmod": {"exttag": tag_to_import} }
WebAssembly.instantiateStreaming(fetch('exemple.wasm'), importObject )
  .then(obj => {
    console.log(obj.instance.exports.run1());
  })
  .catch((e) => {
    console.log(`${ e }`);
    console.log(`getArg 0 : ${ e.getArg(tag_to_import, 0) }`);
  });

// Affichage dans la console
// exemple.js:40 WebAssembly.Exception: wasm exception
// exemple.js:41 getArg 0 : 1
```

Le code intercepte l'exception et utilise `getArg()` afin d'afficher la valeur située en première position. Dans ce cas, il s'agit de "1".

### Obtenir la valeur d'exception avec une balise exportée

Lorsqu'il s'agit plutôt d'une balise exportée, le procédé est semblable à celui de l'exemple précédent. On a le même module WebAssembly dans lequel on a juste remplacé l'import par un export.

```wasm
(module

  ;; On exporte la balise avec le nom externe "exptag"
  (tag $tagname (export "exptag") (param i32) )
  (func $throwException (param i32)
     local.get 0
     throw $tagname
  )
  (func (export "run1")
     i32.const 1
     call $throwException
  )
)
```

Le code JavaScript est aussi semblable. Dans ce cas, on n'a pas d'import, on récupère à la place la balise exportée et on l'utilise pour obtenir l'argument. Pour assurer l'ensemble, on teste également qu'il s'agit de la bonne balise en utilisant la méthode [`is()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/is).

```js
let tag_exported_from_wasm;
WebAssembly.instantiateStreaming(fetch('exemple.wasm') )
  .then(obj => {
    // On importe la balise avec le nom exporté depuis WebAssembly
    tag_exported_from_wasm=obj.instance.exports.exptag;

    console.log(obj.instance.exports.run1());
  })
  .catch((e) => {
    console.log(`${ e }`);
    // Si la balise correspond, on récupère la valeur
    if ( e.is(tag_exported_from_wasm) ) {
      console.log(`getArg 0 : ${ e.getArg(tag_exported_from_wasm, 0) }`);
    }
  });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Aperçu général de WebAssembly](/fr/docs/WebAssembly)
- [Concepts WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
