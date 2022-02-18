---
title: Partage d'objets avec des scripts de page
slug: Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts
tags:
  - Add-ons
  - Extensions
  - Firefox
  - Guide
  - Mozilla
  - Non-standard
  - WebExtensions
  - XPCOM
  - script de contenu
  - scripts de page
translation_of: Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts
original_slug: Mozilla/Add-ons/WebExtensions/partage_d_objets_avec_des_scripts_de_page
---
{{AddonSidebar}}

> **Note :** Les techniques décrites dans cette section sont uniquement disponibles dans Firefox, et seulement à partir de Firefox 49

> **Attention :** En tant que développeur d'extensions, vous devez considérer que les scripts s'exécutant sur des pages Web arbitraires sont des codes hostiles dont le but est de voler les informations personnelles de l'utilisateur, d'endommager leur ordinateur ou de les attaquer d'une autre manière.
>
> L'isolation entre les scripts de contenu et les scripts chargés par les pages Web a pour but de rendre plus difficile la tâche des pages Web hostiles.
>
> Puisque les techniques décrites dans cette section décompose cet isolement, elles sont intrinsèquement dangereuses et devraient être utilisées avec beaucoup de soin.

Comme les [notes du guide de scripts de contenu](/fr/Add-ons/WebExtensions/Content_scripts#DOM_access), les scripts de contenu ne voient pas les modifications apportées au DOM par des scripts chargés par des pages Web.Cela signifie que, par exemple, si une page Web charge une bibliothèque comme jQuery, les scripts de contenu ne pourront pas l'utiliser et devront charger leur propre copie. À l'inverse, les scripts chargés par les pages Web ne peuvent pas voir les modifications apportées par les scripts de contenu.

Cependant, Firefox fournit des API qui permettent aux scripts de contenu de :

- accéder aux objets JavaScript créés par les scripts de page
- exposer leurs propres objets JavaScript aux scripts de pages.

## Vision Xray dans Firefox

Dans Firefox, une partie de l'isolation entre les scripts de contenu et les scripts de pages est implémentée en utilisant une fonction appelée "Vision Xray". Lorsqu'un script dans une portée plus privilégiée accède à un objet défini dans une portée moins privilégiée, il ne voit que la "version native" de l'objet. Toutes les propriétés [expando](/fr/docs/Glossary/Expando) sont invisibles et si des propriétés de l'objet ont été redéfinies, il voit l'implémentation d'origine et non la version redéfinie.

Le but de cette fonctionnalité est de rendre le script moins privilégié plus difficile à confondre le script plus privilégié en redéfinissant les propriétés natives des objets.

Par exemple, lorsqu'un script de contenu accède à la [fenêtre](/fr/docs/Web/API/Window) de la page, il ne voit aucune propriété ajoutée au script de la page, et si le script de la page a redéfini les propriétés de la fenêtre, le script de contenu verra la version originale .

Pour l'histoire complète sur la vision Xray, voir les articles sur [Vision Xray](en-US/docs/Mozilla/Tech/Xray_vision) et la [securité des Scripts](en-US/docs/Mozilla/Gecko/Script_security).

## Accès aux objets de script de page à partir de scripts de contenu

Dans Firefox, les objets DOM dans les scripts de contenu obtiennent une propriété supplémentaire `wrappedJSObject`. C'est une version "déballée" de l'objet, qui inclut toutes les modifications apportées à cet objet par les scripts de page.

Prenons un exemple simple. Supposons qu'une page Web charge un script:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <script type="text/javascript" src="main.js"></script>
  </body>
</html>
```

Le script ajoute une propriété expando à la `fenêtre` globale :

```js
// main.js

var foo = "I'm defined in a page script!";
```

La vision Xray signifie que si un script de contenu tente d'accéder à `foo`, il sera indéfini:

```js
// content-script.js

console.log(window.foo); // undefined
```

Dans Firefox, les scripts de contenu peuvent utiliser `window.wrappedJSObject` pour voir la propriété expando :

```js
// content-script.js

console.log(window.wrappedJSObject.foo); // "I'm defined in a page script!"
```

Notez qu'une fois que vous faites cela, vous ne pouvez plus compter sur les propriétés ou les fonctions de cet objet qui sont, ou font, ce que vous attendez. N'importe lequel d'entre eux, même les setters et les getters, aurait pu être redéfini par un code non fiable.

Notez également que le déballage est transitif: lorsque vous utilisez `wrappedJSObject`, toutes les propriétés de l'objet déplié sont elles-mêmes dépliées (et donc peu fiables). C'est donc une bonne pratique, une fois que vous avez l'objet dont vous avez besoin, de le réemballer, ce que vous pouvez faire comme ceci:

    XPCNativeWrapper(window.wrappedJSObject.foo);

voir le document [vision Xray](/fr/Tech/Xray_vision) pour plus de détails à ce sujet.

## Partage d'objets de script de contenu avec des scripts de page

Firefox fournit également des API permettant aux scripts de contenu de rendre les objets disponibles pour les scripts de page. Il y a plusieurs approches ici:

- [`exportFunction()`](#exportFunction): exporte une fonction vers des scripts de page
- [`cloneInto()`](#cloneInto): exporte un objet vers des scripts de page.
- constructeurs du contexte de la page

### exportFunction

Étant donné une fonction définie dans le script de contenu, `exportFunction()` l'exporte vers la portée du script de page, afin que le script de page puisse l'appeler.

Par exemple, considérons une extension qui a un script d'arrière-plan comme ceci :

```js
/*
Execute content script in the active tab.
*/
function loadContentScript() {
  browser.tabs.executeScript({
    file: "/content_scripts/export.js"
  });
}

/*
Add loadContentScript() as a listener to clicks
on the browser action.
*/
browser.browserAction.onClicked.addListener(loadContentScript);

/*
Show a notification when we get messages from
the content script.
*/
browser.runtime.onMessage.addListener((message) => {
  browser.notifications.create({
    type: "basic",
    title: "Message from the page",
    message: message.content
  });
});
```

Cela fait deux choses :

- exécuter un script de contenu dans l'onglet en cours, lorsque l'utilisateur clique sur une action du navigateur
- écouter les messages du script de contenu et afficher une [notification](/fr/Add-ons/WebExtensions/API/notifications)  lorsque le message arrive.

Le script de contenu ressemble à ceci :

```js
/*
Define a function in the content script's scope, then export it
into the page script's scope.
*/
function notify(message) {
  browser.runtime.sendMessage({content: "Function call: " + message});
}

exportFunction(notify, window, {defineAs:'notify'});
```

Cela définit une fonction `notify()`, qui envoie simplement son argument au script d'arrière-plan. Il exporte ensuite la fonction vers la portée du script de page. Maintenant, le script de la page peut appeler cette fonction:

```js
window.notify("Message from the page script!");
```

Pour l'histoire complète, voir [`Components.utils.exportFunction`](/fr/Tech/XPCOM/Language_Bindings/Components.utils.exportFunction).

### cloneInto

Étant donné un objet défini dans le script de contenu, cela crée un clone de l'objet dans la portée du script de page, rendant ainsi le clone accessible aux scripts de page. Par défaut, cela utilise [l'agorithme clone structuré](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) pour cloner l'objet, ce qui signifie que les fonctions de l'objet ne sont pas incluses dans le clone. Pour inclure des fonctions, passez l'option `cloneFunctions`.

Par exemple, voici un script de contenu qui définit un objet contenant une fonction, puis le clone dans la portée du script de page :

```js
/*
Create an object that contains functions in
the content script's scope, then clone it
into the page script's scope.

Because the object contains functions,
the cloneInto call must include
the `cloneFunctions` option.
*/
var messenger = {
  notify: function(message) {
    browser.runtime.sendMessage({
      content: "Object method call: " + message
    });
  }
};

window.wrappedJSObject.messenger = cloneInto(
  messenger,
  window,
  {cloneFunctions: true});
```

Maintenant les scripts de page vont voir une nouvelle propriété sur la fenêtre, `messenger`, qui a une fonction `notify()`:

```js
window.messenger.notify("Message from the page script!");
```

Pour l'histoire complète, voir [`Components.utils.cloneInto`](/fr/Tech/XPCOM/Language_Bindings/Components.utils.cloneInto).

### Constructeurs du contexte de la page

Sur l'objet fenêtre de xrayed, des constructeurs immaculés pour certains objets javascript intégrés tels que `Object`, `Function` ou `Proxy` et différentes classe DOM sont disponibles. `XMLHttpRequest` ne se comporte pas de cette manière, voir la section [XHR and fetch](/fr/Add-ons/WebExtensions/Content_scripts#XHR_and_Fetch) pour plus de détails. Ils créeront des instances appartenant à la hiérarchie d'objets de la page global, puis retourneront un wrapper xray.

Puisque les objets créés de cette manière appartiennent déjà à la page et que le script de contenu ne les renvoie pas à la page, il ne nécessitera pas de clonage ou d'exportation supplémentaire.

```js
/* javascript built-ins */

const objA = new Object();
const objB = new window.Object();

console.log(
  objA instanceof Object,                        // true
  objB instanceof Object,                        // false
  objA instanceof window.Object,                 // false
  objB instanceof window.Object,                 // true
  'wrappedJSObject' in objB                      // true; xrayed
);

objA.foo = "foo";
objB.foo = "foo";                                // xray wrappers for plain javascript objects pass through property assignments
objB.wrappedJSObject.bar = "bar";                // unwrapping before assignment does not rely on this special behavior

window.wrappedJSObject.objA = objA;
window.wrappedJSObject.objB = objB;              // automatically unwraps when passed to page context

window.eval(`
  console.log(objA instanceof Object);           // false
  console.log(objB instanceof Object);           // true

  console.log(objA.foo);                         // undefined
  objA.baz = "baz";                              // Error: permission denied

  console.log(objB.foo, objB.bar);               // "foo", "bar"
  objB.baz = "baz";
`);

/* other APIs */

const ev = new Event("click");

console.log(
  ev instanceof Event,                           // true
  ev instanceof window.Event,                    // true; Event constructor is actually inherited from the xrayed window
  'wrappedJSObject' in ev                        // true; is an xrayed object
);

ev.propA = "propA"                                // xray wrappers for native objects do not pass through assignments
ev.propB = "wrapper";                             // define property on xray wrapper
ev.wrappedJSObject.propB = "unwrapped";           // define same property on page object
Reflect.defineProperty(ev.wrappedJSObject,        // privileged reflection can operate on less privileged objects
  'propC', {
     get: exportFunction(function() {             // getters must be exported like regular functions
       return 'propC';
     }
  }
);

window.eval(`
  document.addEventListener("click", (e) => {
    console.log(e instanceof Event, e.propA, e.propB, e.propC);
  });
`);

document.dispatchEvent(ev); // true, undefined, "unwrapped", "propC"
```
