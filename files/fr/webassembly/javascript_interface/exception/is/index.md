---
title: WebAssembly.Exception.prototype.is()
slug: WebAssembly/JavaScript_interface/Exception/is
---

{{WebAssemblySidebar}}

La méthode **`is()`**, rattachée au prototype d'un objet [`Exception`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception), peut être utilisée afin de déterminer si l'objet `Exception` correspond à une balise donnée.

La méthode peut être utilisée afin de tester si une balise est correcte avant de la passer à [`Exception.prototype.getArg()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/getArg) pour obtenir les valeurs passées à l'exception. Elle peut être utilisée pour les balises créées côté JavaScript ou créées dans du code WebAssembly qui les exporte en JavaScript.

> **Note :** Avoir la même séquence des mêmes types de données ne suffit pas. Il faut que la balise ait la même _identité_ (que ce soit la même balise) que celle utilisée pour créer l'exception.

## Syntaxe

```js
is(tag);
```

### Paramètres

- `tag`
  - : Une balise WebAssembly, [`WebAssembly.Tag`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag), qui peut être utilisée pour vérifier le type de l'exception.

### Valeur de retour

Un booléen qui indique si la balise fournie correspond à l'exception, `true` si c'est le cas, `false` sinon.

## Exemples

Le fragment de code qui suit illustre comment utiliser la méthode `is()` afin de vérifier qu'une balise correspond au type d'une [`Exception`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception).

```js
// On crée la balise et on l'utilise pour créer une exception
const tag1 = new WebAssembly.Tag({ parameters: ["i32", "f64"] });
const exception1 = new WebAssembly.Exception(tag1, [42, 42.3]);

// On vérifie que "tag1" correspond pour cette exception
console.log(`Tag1 : ${exception1.is(tag1)}`);

// Affichage dans la console :
// Tag1 : true
```

On peut aussi montrer que l'exception ne correspondra pas à une autre balise, même si cette dernière utilise la même structure de paramètres.

```js
// On crée une nouvelle balise avec les mêmes paramètres
// et on vérifie qu'elle ne correspond pas
const tag2 = new WebAssembly.Tag({ parameters: ["i32", "f64"] });
console.log(`Tag2 : ${exception1.is(tag2)}`);

// Affichage dans la console :
// Tag2 : false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Aperçu général de WebAssembly](/fr/docs/WebAssembly)
- [Concepts WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
