---
title: with
slug: Web/JavaScript/Reference/Statements/with
---

{{jsSidebar("Statements")}}

> **Attention :** Il n'est pas recommandé d'utiliser l'instruction `with`. En effet, elle est parfois source de problèmes de compatibilité ou de bogues. Se référer au paragraphe « Inconvénient : l'ambiguïté » de la section « Description » pour plus de détails.

L'instruction **`with`** permet d'étendre la portée chaînée d'une instruction.

## Syntaxe

```js
with (expression) {
  instruction;
}
```

- `expression`
  - : L'expression fournie est ajoutée à la portée chaînée utilisée lors de l'évaluation de l'instruction. Les parenthèses sont obligatoires.
- `instruction`
  - : N'importe quelle instruction. Afin d'utiliser plusieurs instructions, on peut utiliser un bloc d'instructions ({ ... }) pour les regrouper.

## Description

Dès qu'un nom non-qualifié est utilisé, JavaScript cherche dans la chaîne des portées associée à l'exécution une fonction ou un script qui contiendrait ce nom. L'instruction `with` ajoute l'objet donné à la tête de la chaîne des portées lors de l'évaluation des instructions qu'elle contient. Si un nom non-qualifié est utilisé parmi ces instructions correspond à une propriété de la chaîne des portées, le nom sera alors lié à la propriété et à l'objet contenant cette propriété, sinon une erreur `ReferenceError` est renvoyée.

> **Note :** L'utilisation de l'instruction `with` n'est pas recommandée et est interdite dans le [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode) d'ECMAScript 5. L'alternative recommandée est d'assigner l'objet utilisant les propriétés désirées à une variable temporaire.

### Avantages et inconvénients : les performances

- **Avantage :** l'instruction `with` permet de réduire la taille d'un fichier en réduisant la répétition d'un objet dont la dénomination est longue, et ce sans qu'il y ait d'impact sur les performances. Le changement apporté à la chaîne des portées ne représente pas un ajout de complexité important. Utiliser l'instruction de `with` soulagera l'interpréteur lors de l'analyses des références objets potentiellement longues. On notera que l'alternative présentée ci-dessus permet également d'aboutir à ces avantages.
- **Inconvénient :** en utilisant `with`, l'objet spécifié sera utilisé à chaque fois en premier lors de la recherche des noms. Ainsi, tous les identifiants qui ne sont pas des membres de l'objet donné à l'instruction seront trouvés plus lentement. Quand il s'agit d'obtenir de bonnes performances, l'instruction `with` devrait seulement être utilisée pour englober des fragments de codes où il n'y a que des accès à des membres de l'objet spécifié.

### Inconvénient : l'ambiguïté

- **Inconvénient :** l'instruction `with` peut rendre plus compliquée, que ce soit pour un humain ou un compilateur, la recherche d'un nom non-qualifié le long de la chaîne des portées. Ainsi, avec cet exemple :

  ```js
  function f(x, o) {
    with (o) console.log(x);
  }
  ```

  ce n'est que quand `f` est appelée que `x` est trouvé ou non, s'il est trouvé à partir de `o` ou (si o n'a pas de telle propriété) dans l'objet d'activation de `f` où `x` représente le premier argument de la fonction. Si `x` n'est pas défini dans l'objet passé en second argument, il n'y aura pas d'erreur renvoyée, juste des résultats imprévus.

- **Inconvénient :** Du code utilisant l'instruction `with` pourrait ne pas être compatible dans le futur, en particulier lorsqu'il est utilisé avec autre chose qu'un objet simple. Par exemple :

  ```js
  function f(toto, values) {
    with (toto) {
      console.log(values);
    }
  }
  ```

  Si vous appelez `f([1,2,3], obj)` dans un environnement ECMAScript 5, la référence à `values` à l'intérieur de l'instruction `with` sera liée avec `obj`. Cependant, ECMAScript 2015 (ES6) a introduit une propriété `values` pour {{jsxref("Array.prototype")}} (afin qu'elle soit disponible pour chaque tableau). Dans un environnement ECMAScript 2015, la référence à `values` utilisée à l'intérieur de l'instruction `with` sera résolue avec `[1,2,3].values`.

## Exemples

### Utiliser `with`

L'instruction `with` suivante indique que l'objet {{jsxref("Math")}} est l'objet par défaut. Les instructions qui suivent font référence à la propriété {{jsxref("Math.PI")}} et aux méthodes {{jsxref("Math.cos()")}} et {{jsxref("Math.sin()")}}, sans objet spécifié. JavaScript utilise donc l'objet `Math` pour ces références.

```js
var a, x, y;
var r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Instructions/bloc", "Bloc d'instructions","",1)}}
- {{jsxref("Strict_mode","Mode strict","",1)}}
- {{jsxref("Symbol.unscopables")}}
- {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}
