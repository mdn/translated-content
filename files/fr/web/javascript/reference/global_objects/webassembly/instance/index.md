---
title: WebAssembly.Instance()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance
tags:
  - API
  - Constructeur
  - JavaScript
  - Reference
  - WebAssembly
  - instance
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/Instance
---
{{JSRef}}

Un objet **`WebAssembly.Instance`** représente un objet exécutable, avec un état, qui est une instance d'un [module WebAssembly](/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Module). Un objet `Instance` contient l'ensemble [des fonctions WebAssembly exportées](/fr/docs/WebAssembly/Exported_functions) qui permettent d'invoquer du code WebAssembly depuis du code JavaScript.

Le constructeur `WebAssembly.Instance()` peut être appelé afin de créer, de façon synchrone, une instance d'un {{jsxref("WebAssembly.Module")}} donné. Toutefois, pour obtenir une instance, on utilisera généralement la fonction asynchrone {{jsxref("WebAssembly.instantiateStreaming()")}}.

## Syntaxe

> **Attention :** L'instanciation de modules volumineux peut être coûteuse en temps/ressource. `Instance()` ne doit être utilisée que lorsqu'une instanciation synchrone est nécessaire. Pour tous les autres cas, c'est la méthode {{jsxref("WebAssembly.instantiateStreaming()")}} qui devrait être utilisée.

    var monInstance = new WebAssembly.Instance(module, importObject);

### Paramètres

- `module`
  - : L'objet [`WebAssembly.Module`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Module "The Module() constructor of the WebAssembly global object creates a new Module object instance.") qu'on souhaite instancier.
- `importObject` {{optional_inline}}
  - : Un objet qui contient des valeurs à importer dans l'instance. Ce peuvent être des fonctions ou des objets [`WebAssembly.Memory`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Memory "The Memory() constructor of the WebAssembly global object creates a new Memory object instance, which represents a WebAssembly memory. These can be thought of as resizeable array buffers, wrappers around WebAssembly memories."). Il doit exister une propriété correspondante pour chaque import, si ce n'est pas le cas, un exception [`WebAssembly.LinkError`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/LinkError) sera levée.

## Instances d'`Instance`

Toutes les instances du type `Instance` héritent du prototype du constructeur `Instance()`. Celui-ci peut être modifié afin de modifier l'ensemble des instances de `Instance`.

### Propriétés

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Instance/prototype', 'Propriétés')}}

### Méthodes

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Instance/prototype', 'Méthodes')}}

## Spécifications

| Spécification                                                                                        | État                                 | Commentaires                                            |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------- |
| {{SpecName('WebAssembly JS', '#webassemblyinstance-objects', 'Instance')}} | {{Spec2('WebAssembly JS')}} | Définition initiale dans un brouillon de spécification. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WebAssembly.Instance")}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
