---
title: Async scripts for asm.js
slug: Games/Techniques/Async_scripts
tags:
  - Games
  - JavaScript
  - asm.js
  - async
---
{{GamesSidebar}}

Chaque jeu moyen ou volumineux doit compiler le code [asm.js](/en-US/docs/Games/Tools/asm.js) dans le cadre d'un script asynchrone afin de donner au navigateur le maximum de flexibilité pour optimiser le processus de compilation.

Dans Gecko, la compilation asynchrone permet au moteur JavaScript de compiler l'asm.js du fil d'exécution principal lors du chargement du jeu et de mettre en cache le code machine généré afin que le jeu n'ait pas besoin d'être compilé lors des chargements suivants (à partir de Firefox 28) . Pour voir la différence, basculez `javascript.options.parallel_parsing` dans `about:config`.

## Mettre l'asynchrone en action

Obtenir une compilation asynchrone est facile&nbsp;: lors de l'écriture de votre JavaScript, utilisez simplement l'attribut "async" comme suit&nbsp;:

```html
<script async src="file.js"></script>
```

ou, pour faire la même chose via un script&nbsp;:

```js
const script = document.createElement('script');
script.src = "file.js";
document.body.appendChild(script);
```

(Les scripts créés à partir du script par défaut sont `async`.) Le shell HTML par défaut généré par Emscripten produit ce dernier.

## Quand l'async n'est-il pas asynchrone&nbsp;?

Deux situations courantes dans lesquelles un script n'est \*pas\* asynchrone (comme [défini par la spécification HTML](https://html.spec.whatwg.org/multipage/scripting.html)) sont&nbsp;:

```html
<script async>code</script>
```

et

```js
const script = document.createElement('script');
script.textContent = "code";
document.body.appendChild(script);
```

Les deux sont comptés comme des scripts "en ligne" et sont compilés puis exécutés immédiatement.

Que faire si votre code est dans une chaîne JS&nbsp;? Au lieu d'utiliser `eval` ou `innerHTML`, qui déclenchent tous deux une compilation synchrone, vous devez utiliser un Blob avec une URL d'objet&nbsp;:

```js
const blob = new Blob([codeString]);
const script = document.createElement('script');
const url = URL.createObjectURL(blob);
script.onload = script.onerror = () => URL.revokeObjectURL(url);
script.src = url;
document.body.appendChild(script);
```

Le réglage de `src` plutôt que `innerHTML` est ce qui rend ce script asynchrone.
