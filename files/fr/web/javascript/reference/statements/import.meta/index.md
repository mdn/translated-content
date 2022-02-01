---
title: import.meta
slug: Web/JavaScript/Reference/Statements/import.meta
tags:
  - JavaScript
  - Modules
  - Reference
translation_of: Web/JavaScript/Reference/Statements/import.meta
original_slug: Web/JavaScript/Reference/Instructions/import.meta
---
{{JSSidebar("Statements")}}

L'objet **`import.meta`** est une méta-propriété qui expose des métadonnées d'un module JavaScript spécifiques au contexte. Cet objet contient des informations à propos du module, telles que l'URL du module.

## Syntaxe

    import.meta

## Description

L'objet `import.meta` se compose d'un mot-clé `"import`", suivi d'un point, puis du nom de propriété `"meta"`. En temps normal, "`import."` serait utilisé comme contexte pour un accès à une propriété mais, dans ce cas, `"import."` n'est pas, à proprement parler, un objet.

L'objet `import.meta` est créé par l'implémentation ECMAScript avec un prototype qui vaut {{jsxref("null")}}. Cet objet est extensible et ses propriétés sont accessibles en écriture, configurables et énumérables.

## Exemples

Soit un module `mon-module.js`

```html
<script type="module" src="mon-module.js"></script>
```

Il est possible d'accéder aux métadonnées du module grâce à l'objet `import.meta`.

```js
console.log(import.meta); // { url: "file:///home/user/mon-module.js" }
```

Cet objet contient une propriété `url` qui indique l'URL de base du module. Dans le cas des scripts externes, celle-ci sera l'URL à partir de laquelle le script a été obtenu. Pour les scripts écrits dans le document, ce sera l'URL de base du document englobant.

## Spécifications

| Spécification                                                                                                        | État                             | Commentaires                                     |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------ |
| [Proposition pour `import.meta`](https://github.com/tc39/proposal-import-meta/#importmeta)                           | Niveau 3                         | Définition initiale.                             |
| {{SpecName("HTML WHATWG","webappapis.html#hostgetimportmetaproperties","import.meta")}} | {{Spec2("HTML WHATWG")}} | Définition des propriétés `import.meta` en HTML. |

## Compatibilité des navigateurs

{{Compat("javascript.statements.import_meta")}}

## Voir aussi

- {{jsxref("Instructions/import","import")}}
- {{jsxref("Instructions/export","export")}}
