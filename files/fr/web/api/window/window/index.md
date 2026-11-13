---
title: "Window : propriété window"
short-title: window
slug: Web/API/Window/window
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

La propriété **`window`** de l'interface {{DOMxRef("Window")}} pointe vers l'objet de la fenêtre lui-même.

Ainsi, les expressions suivantes retournent toutes le même objet de fenêtre&nbsp;:

```js
window.window;
window.window.window;
window.window.window.window;
// …
```

Dans les pages web, l'objet window est également un _objet global_. Cela signifie&nbsp;:

1. Les variables globales de votre script sont, en fait, des propriétés de `window`&nbsp;:

   ```js
   var global = { data: 0 };
   alert(global === window.global); // affiche "true"
   ```

2. Vous pouvez accéder aux propriétés intégrées de l'objet window sans avoir à les préfixer avec `window.`&nbsp;:

   ```js
   setTimeout(() => alert("Hi!"), 50); // équivalent à l'utilisation de window.setTimeout() et window.alert().
   alert(window === window.window); // affiche "true"
   ```

Le fait que la propriété `window` fasse référence à l'objet lui-même permet probablement de faciliter la référence à l'objet global. Sinon, vous devez effectuer manuellement une affectation `let window = this;` en haut de votre script.

Une autre raison est que, sans cette propriété, vous ne pouvez pas écrire, par exemple, {{DOMxRef("window.open","window.open('https://google.com/')")}}. Vous devez utiliser `open('https://google.com/')` à la place.

Une autre raison d'utiliser cette propriété, c'est qu'elle permet aux bibliothèques de proposer des versions orientées objet et non orientées objet (en particulier des modules JavaScript). Par exemple, si vous faites référence à «&nbsp;this.window\.location.href&nbsp;», un [module JavaScript](/fr/docs/Web/JavaScript/Guide/Modules) peut définir une propriété appelée «&nbsp;window&nbsp;» dans une classe qu'il définit (puisqu'aucune variable globale «&nbsp;window&nbsp;» n'existe par défaut pour elle), qui peut être créée après avoir transmis un objet de fenêtre au constructeur de la classe du module. Ainsi, «&nbsp;this.window&nbsp;» dans ses fonctions fait référence à cet objet fenêtre. Dans la version sans espace de noms, «&nbsp;this.window&nbsp;» fait à nouveau référence à «&nbsp;window&nbsp;» et peut aussi facilement accéder à l'emplacement du document. Un autre avantage, c'est que les objets d'une telle classe (même si la classe est définie en dehors d'un module) peuvent modifier à volonté leur référence à la fenêtre, ce qu'ils ne peuvent pas faire s'ils ont codé en dur une référence à «&nbsp;window&nbsp;». La valeur par défaut de la classe peut toujours être définie comme l'objet fenêtre actuel.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
