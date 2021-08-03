---
title: import
slug: Web/JavaScript/Reference/Statements/import
tags:
  - ECMAScript 2015
  - Instruction
  - JavaScript
  - Modules
  - import
translation_of: Web/JavaScript/Reference/Statements/import
original_slug: Web/JavaScript/Reference/Instructions/import
---
{{jsSidebar("Statements")}}

L'instruction **`import`** est utilisée pour importer des liens qui sont exportés par un autre module. Les modules importés sont interprétés en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode) dans tous les cas. L'instruction `import` ne peut pas être utilisée dans les scripts embarqués sauf si ceux-ci proviennent de ressources avec [`type="module"`](/fr/docs/Web/HTML/Element/script#Attributs).

> **Note :** Il existe également une forme fonctionnelle, `import()` (cf. [ci-après](#dyn)) qui permet d'avoir des chargements dynamiques. La compatibilité ascendante peut être atteinte en utilisant l'attribut `nomodule` sur la balise {{HTMLElement("script")}}.

## Syntaxe

    import exportParDefaut from "nom-module";
    import * as nom from "nom-module";
    import { export } from "nom-module";
    import { export as alias } from "nom-module";
    import { export1 , export2 } from "nom-module";
    import { export1 , export2 as alias2 , [...] } from "nom-module";
    import exportParDefaut, { export [ , [...] ] } from "nom-module";
    import exportParDefaut, * as nom from "nom-module";
    import "nom-module";
    import { toto , truc } from "nom-module/chemin/vers/fichier-non-exporte";
    let promesse = import("nom-module");

- `exportParDefaut`
  - : Nom qui fera référence à l'export par défaut du module.
- `nom-module`
  - : Le module depuis lequel importer. C'est souvent un chemin absolu ou relatif vers le fichier `.js` contenant le module. Certains empaqueteurs peuvent permettre ou requérir l'utilisation de l'extension ; vérifier votre environnement. Seules les String à apostrophes simples ou doubles sont autorisées.
- `nom`
  - : Nom de l'objet module qui sera utilisé comme un genre d'espace de noms lors de références aux imports.
- `export`, `exportN`
  - : Nom des exports à importer.
- `alias`, `aliasN`
  - : Noms qui feront référence aux imports nommés.

## Description

Le paramètre `nom` est le nom de l'"objet module" qui sera utilisé comme un genre d'espace de noms lors de références aux exports. Les paramètres `export` indiquent les exports nommés individuellement, tandis que la syntaxe `import * as nom` les importe tous. Ci-dessous d'autres exemples pour clarifier la syntaxe.

### Importer l'intégralité du contenu d'un module

Ce qui suit insère `monModule` dans la portée courante, contenant tous les exports  du module dans le fichier situé dans `/modules/mon-module.js`.

```js
import * as monModule from '/modules/mon-module.js';
```

Ici, accéder aux exports signifie utiliser le nom du module (ici `monModule`) comme un espace de noms. Par exemple, si le module importé ci-dessus incluait un export `faireToutesLesChosesIncroyables()`, vous l'écririez comme ceci :

```js
monModule.faireToutesLesChosesIncroyables();
```

### Importer un seul export depuis un module

Étant donné un objet ou une valeur nommé(e) `monExport` qui est exporté(e) depuis le module `mon-module`, soit implicitement (parce que l'intégralité du module est exportée), soit explicitement (en utilisant l'instruction {{jsxref("Statements/export", "export")}}), ce qui suit insére `monExport` dans la portée courante.

```js
import {monExport} from '/modules/mon-module.js';
```

### Importer plusieurs éléments exportés depuis un module

Ce qui suit insère à la fois `machin` et `truc` dans la portée courante.

```js
import {machin, truc} from '/modules/mon-module.js';
```

### Importer un élément exporté avec un alias

Vous pouvez renommer un export lors de l'importation. Par exemple, ce qui suit insére `nomCourt` dans la portée courante.

```js
import {nomDExportDeModuleVraimentVraimentLong as nomCourt}
  from '/modules/mon-module.js';
```

### Renommer plusieurs exports pendant l'import

Importe des exports multiples depuis un module avec des alias commodes :

```js
import {
  nomDExportDeModuleVraimentVraimentLong as nomCourt,
  unAutreNomDeModuleLong as court
} from '/modules/mon-module.js';
```

### Importer un module uniquement pour ses effets de bord

Importe un module complet pour ses effets de bord seulement, sans importer quoi que ce soit. Ce qui suit exécute le code global du module, mais n'importe en fait aucune valeur.

```js
import '/modules/mon-module.js';
```

### Importation des défauts

Il est possible d'avoir un {{jsxref("Statements/export", "export")}} par défaut (que ce soit un objet, une fonction, une classe, etc.). L'instruction `import` peut alors être utilisée pour importer ces défauts.

La version la plus simple importe directement le défaut :

```js
import monDefaut from '/modules/mon-module.js';
```

Il est également possible d'utiliser la syntaxe de défaut avec celles vues ci-dessus (imports d'espaces de noms ou imports nommés). Dans de tels cas, l'import par défaut devra être déclaré en premier. Par exemple :

```js
import monDefaut, * as monModule from '/modules/mon-module.js';
// monModule utilisé comme un espace de noms
```

ou

```js
import monDefaut, {machin, truc} from '/modules/mon-module.js';
// imports nommés spécifiques
```

### Imports dynamiques

Le mot-clé `import` peut être utilisé comme une fonction afin d'importer dynamiquement un module (utile lorsqu'on souhaite charger un module selon une condition donnée ou faire du chargement à la demande). Lorsqu'il est utilisé de cette façon, il renvoie une promesse :

```js
import('/modules/mon-module.js')
  .then((module) => {
    // Faire quelque chose avec le module
  });
```

On peut utiliser cette forme avec le mot-clé `await` :

```js
let module = await import('/modules/mon-module.js');
```

## Exemples

Importation depuis un module secondaire pour aider le traitement d'une requête AJAX JSON.

### Le module : fichier.js

```js
function getJSON(url, rappel) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    rappel(this.responseText)
  };
  xhr.open('GET', url, true);
  xhr.send();
}

export function recupererContenuUtile(url, rappel) {
  getJSON(url, donnees => rappel(JSON.parse(donnees)));
}
```

### Le programme principal : principal.js

```js
import { recupererContenuUtile } from '/modules/fichier.js';

recupererContenuUtile('http://www.example.com',
    donnees => { faireQuelqueChoseDUtile(donnees); });
```

### Import dynamique

Dans cet exemple, on voit comment charger une fonctionnalité sur une page lorsqu'un utilisateur effectue une certaine action. Ici, lorsque l'utilisateur clique sur un bouton, cela déclenche l'appel d'une fonction dans le module.

```js
const main = document.querySelector("main");
for (const link of document.querySelectorAll("nav > a")) {
  link.addEventListener("click", e => {
    e.preventDefault();

    import('/modules/mon-module.js')
      .then(module => {
        module.loadPageInto(main);
      })
      .catch(err => {
        main.textContent = err.message;
      });
  });
}

;
```

## Spécifications

| Spécification                                                                                                       | État                         | Commentaires                   |
| ------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------ |
| [Proposition pour les imports dynamiques « fonctionnels »](https://github.com/tc39/proposal-dynamic-import/#import) | Proposition de niveau 4      | Fera partie de ECMAScript 2020 |
| {{SpecName("ESDraft", "#sec-imports", "Imports")}}                                                | {{Spec2("ESDraft")}} |                                |
| {{SpecName("ES2018", "#sec-imports", "Imports")}}                                                    | {{Spec2("ES2018")}}     |                                |
| {{SpecName("ES2017", "#sec-imports", "Imports")}}                                                    | {{Spec2("ES2017")}}     |                                |
| {{SpecName("ES2016", "#sec-imports", "Imports")}}                                                    | {{Spec2("ES2016")}}     |                                |
| {{SpecName("ES2015", "#sec-imports", "Imports")}}                                                    | {{Spec2("ES2015")}}     | Définition initiale.           |

## Compatibilité des navigateurs

{{Compat("javascript.statements.import")}}

## Voir aussi

- {{jsxref("Instructions/export", "export")}}
- [`import.meta`](/fr/docs/Web/JavaScript/Reference/Instructions/import.meta)
- Limin Zhu, Brian Terlson et l'équipe Microsoft Edge : [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/)
- [Jason Orendorff : ES6 en détails : les modules](https://tech.mozfr.org/post/2015/08/21/ES6-en-details-%3A-les-modules)
- [Le livre d'Axel Rauschmayer : Exploring JS: Modules](https://exploringjs.com/es6/ch_modules.html)
- [Un billet illustré de Lin Clark, traduit en français, sur les modules](https://tech.mozfr.org/post/2018/04/06/Une-plongee-illustree-dans-les-modules-ECMAScript)
- [Tutoriel JavaScript sur `export` et `import`](https://javascript.info/import-export)
