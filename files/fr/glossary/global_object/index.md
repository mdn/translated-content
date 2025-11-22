---
title: Objet global
slug: Glossary/Global_object
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un objet global est un {{Glossary("Object", "objet")}} qui existe toujours dans la {{Glossary("Global scope", "portée globale")}}.

> [!NOTE]
> _Objets disponibles globalement_ (c'est-à-dire les objets dans la {{Glossary("global scope", "portée globale")}}) sont parfois aussi appelés objets globaux, mais à proprement parler, il n'existe qu'un seul objet global par environnement.

Dans chaque environnement JavaScript, il existe toujours un objet global défini. L'interface de l'objet global dépend du contexte d'exécution dans lequel le script s'exécute. Par exemple&nbsp;:

- Dans un navigateur web, tout code que le script n'a pas explicitement lancé comme tâche d'arrière-plan a {{DOMxRef("Window")}} comme objet global. C'est la grande majorité du code JavaScript sur le Web.
- Le code exécuté dans un {{DOMxRef("Worker")}} a {{DOMxRef("WorkerGlobalScope")}} comme objet global.
- Les scripts exécutés sous {{Glossary("Node.js")}} ont un objet appelé [`global` <sup>(angl.)</sup>](https://nodejs.org/api/globals.html#globals_global) comme objet global.

La propriété globale [`globalThis`](/fr/docs/Web/JavaScript/Reference/Global_Objects/globalThis) permet d'accéder à l'objet global quel que soit l'environnement courant.

Les instructions [`var`](/fr/docs/Web/JavaScript/Reference/Statements/var) et les [déclarations de fonctions](/fr/docs/Web/JavaScript/Reference/Statements/function) au niveau supérieur d'un script créent des propriétés de l'objet global. En revanche, les déclarations {{JSxRef("Statements/let", "let")}} et {{JSxRef("Statements/const", "const")}} ne créent jamais de propriétés de l'objet global.

Les propriétés de l'objet global sont automatiquement ajoutées à la {{Glossary("global scope", "portée globale")}}.

En JavaScript, l'objet global détient toujours une référence à lui-même&nbsp;:

```js
console.log(globalThis === globalThis.globalThis); // true (partout)
console.log(window === window.window); // true (dans un navigateur)
console.log(self === self.self); // true (dans un navigateur ou un Web Worker)
console.log(frames === frames.frames); // true (dans un navigateur)
console.log(global === global.global); // true (dans Node.js)
```

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("global scope", "Portée globale")}}
  - {{Glossary("object", "Objet")}}
- La propriété globale JavaScript {{JSxRef("globalThis")}}
- L'interface {{DOMxRef("Window")}}
- L'interface {{DOMxRef("WorkerGlobalScope")}}
- La propriété {{DOMxRef("Window.window")}}
- La propriété {{DOMxRef("Window.self")}}
- La propriété {{DOMxRef("Window.frames")}}
- La propriété {{DOMxRef("WorkerGlobalScope.self")}}
- [`global` <sup>(angl.)</sup>](https://nodejs.org/api/globals.html#globals_global) sur nodejs.org
