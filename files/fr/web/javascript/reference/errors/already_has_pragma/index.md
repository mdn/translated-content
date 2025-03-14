---
title: "Warning: -file- is being assigned a //# sourceMappingURL, but already has one"
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
---

{{jsSidebar("Errors")}}

## Message

```
Warning: -fichier- is being assigned a //# sourceMappingURL, but already has one.
```

## Type d'erreur

Un avertissement. L'exécution du script JavaScript n'est pas interrompue.

## Quel est le problème ?

Un fichier _source map_ a été défini plus d'une fois pour un fichier source JavaScript donné.

La plupart du temps, les fichiers sources des scripts JavaScript sont fusionnés et minifiés afin que les transferts de fichiers du serveur vers le navigateur soient plus efficaces. Grâce [aux fichiers de correspondance des sources (_source maps_)](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/), il est possible d'indiquer au débogueur le code original correspondant. Il existe deux méthodes pour déclarer une correspondance de sources : en utilisant un commentaire ou définissant un en-tête pour le fichier JavaScript.

## Exemples

Voici une correspondance de source déclarée via un commentaire dans le fichier :

```js example-good
//# sourceMappingURL=http://exemple.com/chemin/vers/la/sourcemap.map
```

Une autre méthode consiste à indiquer la source originale dans l'en-tête du fichier JavaScript :

```js example-good
X-SourceMap: /chemin/vers/le/fichier.js.map
```

## Voir aussi

- [Comment utiliser une correspondance de source - Les outils de développement Firefox](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
- [Une introduction aux correspondances de sources – HTML5 Rocks (en anglais)](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
