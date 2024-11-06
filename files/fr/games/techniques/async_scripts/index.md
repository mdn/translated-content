---
title: Scripts asynchrones pour asm.js
slug: Games/Techniques/Async_scripts
l10n:
  sourceCommit: f3ef176745e4875e42584df143fba15a63c7ad32
---

{{GamesSidebar}}

Chaque jeu moyen ou volumineux doit compiler le code [asm.js](/fr/docs/Games/Tools/asm.js) dans le cadre d'un script asynchrone afin de donner au navigateur le maximum de flexibilité pour optimiser le processus de compilation.

Dans Gecko, la compilation asynchrone permet au moteur JavaScript de compiler l'asm.js en dehors du fil d'exécution principal lors du chargement du jeu et de mettre en cache le code machine généré afin que le jeu n'ait pas besoin d'être compilé lors des chargements suivants (à partir de Firefox 28) . Pour voir la différence, basculez `javascript.options.parallel_parsing` dans `about:config`.

## Passer à la compilation asynchrone

Obtenir une compilation asynchrone est facile&nbsp;: lors de l'écriture de votre JavaScript, utilisez simplement l'attribut `async` comme suit&nbsp;:

```html
<script async src="file.js"></script>
```

ou, pour faire la même chose via un script&nbsp;:

```js
const script = document.createElement("script");
script.src = "file.js";
document.body.appendChild(script);
```

(Les scripts créés à partir du script par défaut sont `async`.) Le shell HTML par défaut généré par Emscripten produit ce dernier.

## Attention aux `async` en réalité synchrones

Il existe deux situations courantes où un script n'est \*pas\* asynchrone malgré l'utilisation d'`async` ou du chargement d'un script (voir [la spécification HTML à ce sujet](https://html.spec.whatwg.org/multipage/scripting.html))&nbsp;:

```html
<script async>
  code;
</script>
```

et

```js
const script = document.createElement("script");
script.textContent = "code";
document.body.appendChild(script);
```

Les deux sont comptés comme des scripts «&nbsp;en ligne&nbsp;» (<i lang="en">inline</i>) et sont compilés puis exécutés immédiatement.

Que faire si votre code est dans une chaîne de caractères JavaScript&nbsp;? Au lieu d'utiliser `eval()` ou `textContent`, qui déclenchent tous deux une compilation synchrone, privilégiez un blob avec une URL d'objet&nbsp;:

```js
const blob = new Blob([codeString]);
const script = document.createElement("script");
const url = URL.createObjectURL(blob);
script.onload = script.onerror = () => URL.revokeObjectURL(url);
script.src = url;
document.body.appendChild(script);
```

Dans ce dernier exemple, c'est l'utilisation de `src` plutôt que de `innerHTML` qui rend le chargement du script asynchrone.
