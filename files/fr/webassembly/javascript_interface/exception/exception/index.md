---
title: Constructeur pour WebAssembly.Exception
slug: WebAssembly/JavaScript_interface/Exception/Exception
---

{{WebAssemblySidebar}}

Le constructeur **`WebAssembly.Exception()`** permet de créer des objets [`WebAssembly.Exception`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception).

Le constructeur prend comme arguments une balise [`Tag`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception) et un tableau `payload` de champs de données. Les types de données pour chaque élément du tableau `payload` doivent correspondre aux types de données définis par la balise `Tag`.

Il est aussi possible de passer comme argument un objet `options`. Pour cet objet, on peut passer la propriété `options.traceStack` à `true` (elle vaut `false` par défaut) afin d'indiquer que le code WebAssembly qui lève l'exception peut renseigner la propriété [`stack`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/stack) de l'exception avec la trace de la pile d'appels.

## Syntaxe

```js
new Exception(tag, payload, options);
```

### Paramètres

- `tag`
  - : Un objet [`WebAssembly.Tag`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag) qui définit les types de données attendus pour chaque valeur contenue dans `payload`.
- `payload`
  - : Un tableau contenant un ou plusieurs champs de données qui forment la charge utile de l'exception. Les types des éléments doivent correspondre à ceux décrits par la balise `tag`. Si le nombre de champs ou leurs types ne correspond pas, une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) sera levée.
- `options` {{optional_inline}}

  - : Un objet avec la propriété optionnelle suivante&nbsp;:

    - `traceStack` {{optional_inline}}
      - : `true` si l'objet `Exception` peut avoir sa pile d'appels attachée via sa propriété [`stack`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/stack), `false` sinon (qui correspond au comportement par défaut si `options` ou si `options.traceStack` n'est pas fourni).

### Exceptions

- `TypeError`
  - : Les séquences de valeurs pour `payload` et `tag` ne correspondent pas en nombre ou en type.

## Exemples

Dans cet exemple, on illustre la création d'une exception avec une balise simple.

```js
// On crée une balise et on l'utilise pour créer une exception
const tag = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
const exception = new WebAssembly.Exception(tag, [42, 42.3]);
```

L'exemple contenu dans la page [`stack`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/stack#exemples) illustre la création d'une exception avec le paramètre `options`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Aperçu général de WebAssembly](/fr/docs/WebAssembly)
- [Concepts WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
