---
title: "SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead"
slug: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
---

{{jsSidebar("Errors")}}

## Message

```
Warning: SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead

Warning: SyntaxError: Using //@ to indicate sourceMappingURL pragmas is deprecated. Use //# instead
```

## Type d'erreur

Un avertissement prenant la forme d'une exception {{jsxref("SyntaxError")}}. L'exécution du code JavaScript n'est pas interrompue.

## Quel est le problème ?

Une syntaxe dépréciée a été utilisée pour indiquer une correspondance de source (_source map_) dans le code JavaScript.

Il arrive souvent que les fichiers sources JavaScript soient combinés et minifiés afin que le transfert depuis le serveur vers le client soit plus efficace. Grâce [aux correspondances de source (ou _source maps_)](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/), le débogueur peut utiliser les sources des fichiers correspondants aux fichiers minifiés.

La spécification sur cet outil a évolué car il existait un conflit de syntaxe avec IE (après `//@cc_on`, la correspondance était interprétée comme un test conditionnel de compilation du moteur JScript). [Ce commentaire de compilation conditionnelle](https://msdn.microsoft.com/en-us/library/8ka90k2e%28v=vs.94%29.aspx) pour IE est peu connu mais son existence entraînait des erreurs avec [jQuery](https://bugs.jquery.com/ticket/13274) et d'autres bibliothèques.

## Exemples

### Syntaxe dépréciée

La syntaxe utilisant l'arobase (@) est dépréciée :

```js example-bad
//@ sourceMappingURL=http://exemple.com/chemin/vers/la/sourcemap.map
```

### Syntaxe standard

Il faut utiliser le dièse (#) :

```js example-good
//# sourceMappingURL=http://exemple.com/chemin/vers/la/sourcemap.map
```

Autrement, on peut indiquer la correspondance dans un en-tête {{HTTPHeader("SourceMap")}} pour servir le fichier JavaScript afin d'éviter tout commentaire :

```js example-good
X-SourceMap: /path/to/file.js.map
```

## Voir aussi

- [Comment utiliser les _source map_ – Documentation des outils Firefox](/fr/docs/Outils/Débogueur/Comment/Utiliser_une_source_map)
- [Introduction to source maps – HTML5 rocks](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
- {{HTTPHeader("SourceMap")}}
