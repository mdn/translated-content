---
title: Storage
slug: Web/API/Storage
tags:
  - API
  - Interface
  - Reference
  - Stockage
  - Storage
translation_of: Web/API/Storage
---
{{APIRef("Web Storage API")}}

L'interface **`Storage`** de l'[API Web Storage](/fr/docs/Web/API/Web_Storage_API) donne accès au stockage de session (`SessionStorage`) ou au stockage local (`LocalStorage`) pour un domaine donné, vous permettant par exemple d'ajouter, de modifier ou de supprimer des éléments enregistrés.

Si vous voulez manipuler le stockage de session pour un domaine, appelez la méthode {{domxref("Window.sessionStorage")}}. Si vous voulez manipuler le stockage local pour un domaine, appelez la méthode {{domxref("Window.localStorage")}}.

## Propriétés

- {{domxref("Storage.length")}} {{readonlyInline}}
  - : Renvoie un entier représentant le nombre d'éléments contenus dans l'objet `Storage`.

## Méthodes

- {{domxref("Storage.key()")}}
  - : Lorsqu'on lui passe un nombre `n`, cette méthode renvoie le nom de la n-ième clé dans le stockage.

<!---->

- {{domxref("Storage.getItem()")}}
  - : Lorqu'on lui passe le nom d'une clé, cette méthode renvoie la valeur de la clé correspondante.
- {{domxref("Storage.setItem()")}}
  - : Lorqu'on lui passe un nom de clé et une valeur, cette méthode ajoute cette clé et cette valeur dans le stockage. Si la clé existe déjà, elle met à jour la valeur.
- {{domxref("Storage.removeItem()")}}
  - : Lorqu'on lui passe le nom d'une clé, cette méthode supprime cette clé du stockage.
- {{domxref("Storage.clear()")}}
  - : Lorsqu'elle est appelée, cette méthode supprime toutes les clés du stockage.

## Exemples

Nous accédons ici à un objet `Storage` en appelant `localStorage`. Nous testons d'abord si le stockage local contient des éléments en utilisant `!localStorage.getItem('bgcolor')`. Si oui, nous exécutons une fonction appelée `setStyles()` qui récupère les éléments en utilisant {{domxref("Storage.getItem()")}}, et utilise ces valeurs pour mettre à jour les styles de page. Sinon, nous exécutons une autre fonction appelée `populateStorage()`, qui utilise {{domxref("Storage.setItem()")}} pour régler les valeurs des éléments, puis qui exécute `setStyles()`.

```js
if(!localStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  localStorage.setItem('font', document.getElementById('font').value);
  localStorage.setItem('image', document.getElementById('image').value);

  setStyles();
}

function setStyles() {
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');
  var currentImage = localStorage.getItem('image');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}
```

## Spécifications

| Spécification                                                                                            | État                             | Commentaires |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'webstorage.html#the-storage-interface', 'Storage')}} | {{Spec2('Web Storage')}} |              |

## Compatibilité des navigateurs

{{Compat("api.Storage")}}

## Voir aussi

- [Utiliser l'API Web Storage](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("Window.localStorage")}}
- {{domxref("Window.sessionStorage")}}
- {{domxref("CacheStorage")}}
