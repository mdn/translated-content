---
title: Scripts asynchrones pour asm.js
slug: Games/Techniques/Async_scripts
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Tout jeu de taille moyenne ou grande doit compiler le code [asm.js](/fr/docs/Games/Tools/asm.js) dans le cadre d'un script asynchrone afin de donner au navigateur la flexibilité maximale pour optimiser le processus de compilation. Dans Gecko, la compilation asynchrone permet au moteur JavaScript de compiler l'asm.js en dehors du thread principal lorsque le jeu se charge et de mettre en cache le code machine généré afin que le jeu n'ait pas besoin d'être recompilé lors des chargements ultérieurs (à partir de Firefox 28). Pour voir la différence, basculez `javascript.options.parallel_parsing` dans `about:config`.

## Passer à la compilation asynchrone

Obtenir une compilation asynchrone est facile&nbsp;: lors de l'écriture de votre JavaScript, utilisez simplement l'attribut `async` comme suit&nbsp;:

```html
<script async src="file.js"></script>
```

ou, pour faire la même chose par un script&nbsp;:

```js
const script = document.createElement("script");
script.src = "file.js";
document.body.appendChild(script);
```

(Les scripts créés à partir du script par défaut sont `async`.) Le shell HTML par défaut généré par Emscripten produit ce dernier.

## Quand est-ce que c'est asynchrone et pas asynchrone ?

Deux situations courantes dans lesquelles un script n'est _pas_ asynchrone (comme [défini par la spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/scripting.html)) sont&nbsp;:

```html
<script async>
  // Code JavaScript en incise
</script>
```

et

```js
const script = document.createElement("script");
script.textContent = "// Code JavaScript en incise";
document.body.appendChild(script);
```

Les deux sont comptés comme des scripts «&nbsp;en incise&nbsp;» (<i lang="en">inline</i> en anglais) et sont compilés puis exécutés immédiatement.

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
