---
title: Storage.key()
slug: Web/API/Storage/key
---

{{APIRef()}}

La méthode `key()` de l'interface {{domxref("Storage")}} prend un nombre n en argument et retourne la n-ième clé contenue dans storage. L'ordre des clés étant définie par le navigateur, il est recommandé de ne pas s'y référer .

## Syntaxe

```js
var unNomDeCle = storage.key(cle);
```

### Paramètres

- _cle_
  - : Un entier représentant le numéro de la clé voulue. L'index débute à zero.

### Valeur de retour

Un {{domxref("DOMString")}} contenant le nom de la clé .

## Exemple

La fonction suivante parcours les éléments présents dans le local storage.

```js
function forEachKey(callback) {
  for (var i = 0; i < localStorage.length; i++) {
    callback(localStorage.key(i));
  }
}
```

> **Note :** Pour un exemple plus poussé, consultez la [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Autre exemple

La fonction suivante parcourt chaque clé présente dans le localStorage et affiche les valeurs correspondantes.

```js
for (var i = 0; i < localStorage.length; i++) {
  console.log(localStorage.getItem(localStorage.key(i)));
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utilisation de l'API de stockage web](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
