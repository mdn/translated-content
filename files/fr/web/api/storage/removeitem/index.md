---
title: Storage.removeItem()
slug: Web/API/Storage/removeItem
---

{{APIRef("Web Storage API")}}

La méthode **`removeItem()`** de l'interface {{domxref("Storage")}} , lorsque vous lui passez une clé en argument, va supprimer la ressource avec le nom de clé correspondant du storage. L'interface **`Storage`** de l'API [Web Storage API](/fr/docs/Web/API/Web_Storage_API) fournit des accès particuliers dans les domaines des stockages locaux et de sessions.

Si aucun élement n'est donné en paramètre `nomCle`, cette méthode ne fait rien.

## Syntaxe

```js
storage.removeItem(nomCle);
```

### Paramètres

- `nomCle`
  - : Un {{domxref("DOMString")}} contenant le nom de la clé que vous voulez supprimer.

### Valeur de retour

{{jsxref("undefined")}}.

## Exemple

La fonction suivante crée trois données dans le stockage local, puis va supprimer la donnée image.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");

  localStorage.removeItem("image");
}
```

Nous pouvons également faire ceci avec le stockage de session.

```js
function populateStorage() {
  sessionStorage.setItem("bgcolor", "red");
  sessionStorage.setItem("font", "Helvetica");
  sessionStorage.setItem("image", "myCat.png");

  sessionStorage.removeItem("image");
}
```

> **Note :** Pour voir ce code en fonctionnement, voir [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

[Utilisation de l'API de stockage Web](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
