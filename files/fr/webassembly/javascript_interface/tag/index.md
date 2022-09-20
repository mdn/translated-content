---
title: WebAssembly.Tag
slug: WebAssembly/JavaScript_interface/Tag
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag
original_slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag
browser-compat: javascript.builtins.WebAssembly.Tag
---
{{JSRef}}

L'objet **`WebAssembly.Tag`** définit un _type_ d'exception WebAssembly qui peut être levée depuis ou vers du code WebAssembly.

Lorsqu'on crée un objet [`WebAssembly.Exception`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception), la balise (<i lang="en">tag</i>) définit les types de données et l'ordre des valeurs portées par l'exception. La même instance de cette balise doit être utilisée ensuite afin d'accéder aux valeurs portées par les exceptions déclenchées (par exemple, en utilisant la méthode [`Exception.prototype.getArg()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/getArg)).

[Construire](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag/Tag) une instance de `Tag` crée une nouvelle balise unique. Cette balise peut ensuite être passée à un module WebAssembly pour qu'il l'importe et qui deviendra alors une balise typée, définie dans la _section des balises (<i lang="en">tag section</i>)_ du module WebAssembly. On peut aussi exporter une balise définie dans un module pour l'utiliser afin d'inspecter les exceptions déclenchées par le module.

> **Note :** Il n'est pas possible d'accéder aux valeurs d'une exception avec une autre balise qui décrirait la même structure. Il faut que ce soit exactement la même balise qui soit utilisée&nbsp;! Cela permet de s'assurer que les modules WebAssembly puissent garder privées des informations sur les exceptions internes si nécessaire. Le code JavaScript peut toujours intercepter et relancer les exceptions qu'il ne peut pas inspecter.

## Constructeur

- [`WebAssembly.Tag()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag/Tag)
  - : Crée un nouvel objet `WebAssembly.Tag`.

## Méthodes des instances

- [`Tag.prototype.type()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag/type)
  - : Renvoie l'objet définissant le tableau des types de données de la balise (tel que défini lors de la construction).

## Exemples

Le fragment de code qui suit crée une nouvelle instance de `Tag`.

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
```

Dans le fragment qui suit, on illustre comment on peut passer cette balise à un module **exemple.wasm** lors de l'instanciation, à l'aide d'un objet d'import.

```js
const importObject = { "extmod": {"exttag": tagToImport} }
WebAssembly.instantiateStreaming(fetch('exemple.wasm'), importObject )
  .then(obj => {
    …
```

Le module WebAssembly pourra alors importer la balise comme ceci&nbsp;:

```wasm
(module

  (import "extmod" "exttag" (tag $tagname (param i32 f32)) )
```

Si la balise est ensuite utilisée pour lever une exception qui atteint le code, on pourra l'utiliser pour inspecter les valeurs portées par l'exception.

> **Note :** Il existe d'autres façons&nbsp;: on pourrait aussi utiliser la balise afin de créer un objet [`WebAssembly.Exception`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception) et la déclencher depuis une fonction appelée côté WebAssembly.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Aperçu général de WebAssembly](/fr/docs/WebAssembly)
- [Concepts WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
