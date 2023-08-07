---
title: Error.prototype.stack
slug: Web/JavaScript/Reference/Global_Objects/Error/stack
---

{{JSRef}} {{non-standard_header}}

La propriété non-standard **`stack`** des objets {{jsxref("Error")}} fournit une trace des fonctions qui ont été appelées, dans quel ordre, depuis quelle ligne de quel fichier, et avec quels arguments. La chaine de pile remonte des appels les plus récents jusqu'aux plus anciens, ramenant à l'appel original de la portée globale.

## Description

Chaque étape sera séparée par une nouvelle ligne, la première partie de la ligne étant le nom de la fonction (si ce n'est pas un appel depuis la portée globale), suivi du signe arobase (@), de l'emplacement du fichier (sauf quand la fonction est le constructeur d'erreur lorsque l'erreur est déclenchée), de deux-points, et, s'il y a un emplacement de fichier, du numéro de ligne. (Notez que l'objet {{jsxref("Error")}} possède aussi les propriétés `fileName`, `lineNumber` et `columnNumber` pour leur récupération à partir de l'erreur déclenchée (mais seulement l'erreur, et pas sa trace)).

Notez que ceci est le format utilisé par Firefox. Il n'y a aucun formatage standard. Cependant Safari 6+ et Opera 12- utilisent un format très similaire. Les navigateurs utilisant le moteur JavaScript V8 (tel que Chrome, Opera 15+, Navigateur Android) et IE10+, utilisent un format différent (voir la documentation MSDN [error.stack](https://web.archive.org/web/20140210004225/http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx)).

**Valeurs des arguments dans la pile :** avant Firefox 14 ([bug Firefox 744842](https://bugzil.la/744842)), le nom d'une fonction étaient suivis par les valeurs des arguments converties en une chaine de caractères entre parenthèses, immédiatement avant le signe arobase (@). Tandis qu'un objet (ou un tableau, etc.) apparaissait sous la forme convertie `"[object Object]"`, et en tant que tel, ne pouvait pas être réévalué en les objets réels, les valeurs scalaires pouvaient être récupérées (bien qu'il soit plus facile — c'est toujours possible dans Firefox 14 — d'utiliser `arguments.callee.caller.arguments`, tout comme le nom de la fonction pouvait être récupéré avec `arguments.callee.caller.name`). `"undefined"` est listé comme `"(void 0)"`. Notez que si des arguments chaines de caractères étaient passés avec des valeurs comme `"@"`, `"("`, `")"` (ou si dans les noms de fichier), vous ne pouviez pas vous reposez facilement sur ceux-ci pour découper la ligne en les parties qui la composent. Par conséquent, dans Firefox 14 et ultérieur, ceci est moins un problème.

Les différents navigateurs définissent cette valeur à différents instants. Par exemple, Firefox la définit lors de la création d'un objet {{jsxref("Error")}}, tandis que PhantomJS ne la définit que lors du déclenchement de l'{{jsxref("Error")}}, et la [documentation MSDN](https://web.archive.org/web/20140210004225/http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx) semble correspondre à l'implémentation PhantomJS.

## Exemples

Le code HTML suivant démontre l'utilisation de la propriété `stack`.

```html
<!doctype html>
<meta charset="UTF-8" />
<title>Exemple de Trace de Pile</title>
<body>
  <script>
    function trace() {
      try {
        throw new Error("monError");
      } catch (e) {
        alert(e.stack);
      }
    }
    function b() {
      trace();
    }
    function a() {
      b(3, 4, "\n\n", undefined, {});
    }
    a("premier appel, premierarg");
  </script>
</body>
```

En supposant que ce code a été enregistré comme `C:\exemple.html` sur un système de fichier Windows, il produira un message d'alerte dans une nouvelle fenêtre avec le texte suivant :

À partir de Firefox 30 et ultérieur, ce message contiendra le numéro de colonne ([bug Firefox 762556](https://bugzil.la/762556)) :

```plain
trace@file:///C:/exemple.html:9:17
b@file:///C:/exemple.html:16:13
a@file:///C:/exemple.html:19:13
@file:///C:/exemple.html:21:9
```

De Firefox 14 à Firefox 29 :

```plain
trace@file:///C:/exemple.html:9
b@file:///C:/exemple.html:16
a@file:///C:/exemple.html:19
@file:///C:/exemple.html:21
```

Firefox 13 et antérieur aurait produit à la place le texte suivant :

```plain
Error("monError")@:0
trace()@file:///C:/exemple.html:9
b(3,4,"\n\n",(void 0),[object Object])@file:///C:/exemple.html:16
a("premier appel, premierarg")@file:///C:/exemple.html:19
@file:///C:/exemple.html:21
```

### Pile d'un code evalué

À partir de Firefox 30, la pile d'erreur du code dans les appels à `Function()` et `eval()` produit désormais des piles avec des informations plus détaillées sur les numéros de lignes et de colonnes dans ces appels. Les appels de fonction sont indiqués par `"> Function"` et les appels d'`eval` par `"> eval"`. Voir [bug Firefox 332176](https://bugzil.la/332176).

```js
try {
  new Function("throw new Error()")();
} catch (e) {
  console.log(e.stack);
}

// anonymous@file:///C:/exemple.html line 7 > Function:1:1
// @file:///C:/exemple.html:7:6

try {
  eval("eval('ÉCHEC')");
} catch (x) {
  console.log(x.stack);
}

// @file:///C:/exemple.html line 7 > eval line 1 > eval:1:1
// @file:///C:/exemple.html line 7 > eval:1:1
// @file:///C:/exemple.html:7:6
```

Vous pouvez aussi utiliser la directive `//# sourceURL` pour nommer une source eval. Voir aussi [Déboguer des sources évaluées](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/debug_eval_sources/index.html) dans les docs [Débogueur](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), ainsi que ce [blog post](http://fitzgeraldnick.com/weblog/59/).

## Spécifications

Ne fait partie d'aucune spécification. Non-standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Components.stack](/fr-FR/docs/Components.stack)
- Projets externes : [TraceKit](https://github.com/csnover/TraceKit/) et [javascript-stacktrace](https://github.com/eriwen/javascript-stacktrace)
- MSDN : docs [error.stack](https://web.archive.org/web/20140210004225/http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx)
- [Overview of the V8 JavaScript stack trace API](https://github.com/v8/v8/wiki/Stack%20Trace%20API)
