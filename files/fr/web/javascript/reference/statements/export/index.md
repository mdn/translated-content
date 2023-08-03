---
title: export
slug: Web/JavaScript/Reference/Statements/export
---

{{jsSidebar("Statements")}}

L'instruction **`export`** est utilisée lors de la création de modules JavaScript pour exporter des fonctions, des objets ou des valeurs primitives à partir du module, de sorte qu'ils puissent être utilisés par d'autres programmes grâce à l'instruction {{jsxref("Instructions/import", "import")}}.

Les modules exportés sont interprétés en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode) dans tous les cas. L'instruction `export` ne peut pas être utilisée dans les scripts embarqués.

## Syntaxe

```js
// Exporter des propriétés individuelles
export let nom1, nom2, …, nomN; // utilisable avec var, const
export let nom1 = …, nom2 = …, …, nomN; // utilisable avec var, const
export function nomFonction(){...}
export class NomClasse {...}

// Export d'une liste de valeur
export { nom1, nom2, …, nomN };

// Renommage des valeurs exportées
export { variable1 as nom1, variable2 as nom2, …, nomN };

// Renommage avec la décomposition pour l'affectation
export const { nom1, nom2: truc } = o;

// Exports par défauts
export default expression;
export default function (…) { … } // fonctionne avec class, function*
export default function nom1(…) { … } // fonctionne avec class, function*
export { nom1 as default, … };

// Agrégation de modules
export * from …;
export { nom1, nom2, …, nomN } from …;
export { import1 as nom1, import2 as nom2, …, nomN } from …;
export { default } from …;
```

- `nomN`
  - : Identifiant à exporter (afin qu'il puisse être importé via {{jsxref("Statements/import", "import")}} dans un autre script).

## Description

Il existe deux types d'export différents : les exports **nommés** et les exports **par défaut**. Il est possible d'avoir plusieurs exports nommés mais un seul export par défaut. Chaque type correspond à une des syntaxes ci-dessus&nbsp;:

- Les exports nommés :

  ```js
  // exporte une fonction déclarée précédemment
  export { maFonction };

  // exporte une constante
  export const machin = Math.sqrt(2);
  ```

- Les exports par défaut (fonction) :

  ```js
  export default function () {}
  ```

- Les exports par défaut (classe) :

  ```js
  export default class {}
  ```

Les exports nommés sont utiles pour exporter plusieurs valeurs. Lors de l'importation, il est obligatoire d'utiliser le même nom de l'objet correspondant.

Mais un export par défaut peut être importé avec n'importe quel nom, par exemple :

```js
let k;
export default k = 12; // dans le fichier test.js
import m from "./test"; // notez que nous avons la liberté d'utiliser import m au lieu de import k, parce que k était l'export par défaut
console.log(m); // enregistrera 12
```

La syntaxe suivante n'exporte pas le défaut depuis le module importé :

```js
export * from …;
```

Si vous avez besoin d'exporter le défaut, écrivez ce qui suit à la place :

```js
export { default } from "mod";
```

Il est possible de renommer un export afin d'éviter des conflits de nommage :

```js
export { maFonction as fonction1
         maVariable as variable1 };
```

On peut également agréger les valeurs exportées à celles d'autres modules qu'on aurait importés :

```js
// Dans moduleParent.js
export { maFonction, maVariable } from "moduleFils1.js";
export { maClasse } from "moduleFils2.js";

// Dans le module de plus haut niveau
import { maFonction, maVariable, maClasse } from "moduleParent.js";
```

## Exemples

### Utilisation d'exports nommés

Dans le module, on pourra utiliser le code suivant&nbsp;:

```js
// module "mon-module.js"
function cube(x) {
  return x * x * x;
}
const machin = Math.PI + Math.SQRT2;
export { cube, machin };
```

De cette façon, dans un autre script, on pourra avoir :

```js
import { cube, machin } from "mon-module";
console.log(cube(3)); // 27
console.log(machin); // 4.555806215962888
```

> **Note :** Si l'import est réalisé dans un script HTML, il faut que celui-ci soit chargé avec l'attribut [`type`](/fr/docs/Web/HTML/Global_attributes#type) `"module"` : `<script type="module" src="./demo.js"></script>` sinon il y aura une erreur quant aux origines multiples ([CORS](/fr/docs/Web/HTTP/CORS)).
> Il n'est pas possible de charger des modules JavaScript via une URL `file://` pour des raisons de sécurité (voir [CORS](/fr/docs/Web/HTTP/CORS) également). Il faudra utiliser un serveur HTTP.

### Utilisation d'exports par défaut

Si on souhaite n'exporter qu'une seule valeur ou avoir une valeur de secours pour le module, on peut utiliser un export par défaut&nbsp;:

```js
// module "mon-module.js"
export default function cube(x) {
  return x * x * x;
}
```

Alors, dans un autre script, il sera facile d'importer l'export par défaut :

```js
import cube from "./mon-module.js";
console.log(cube(3)); // 27
```

Notez qu'il n'est pas possible d'utiliser `var`, `let` ou `const` avec `export default`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Instructions/import", "import")}}
- [Guide sur les modules JavaScript](/fr/docs/Web/JavaScript/Guide/Modules)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks blog post par Jason Orendorff
- [Livre d'Axel Rauschmayer : "Exploring JS: Modules"](https://exploringjs.com/es6/ch_modules.html)
- [Un billet illustré de Lin Clark, traduit en français, sur les modules](https://tech.mozfr.org/post/2018/04/06/Une-plongee-illustree-dans-les-modules-ECMAScript)
