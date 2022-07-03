---
title: Storage.clear()
slug: Web/API/Storage/clear
tags:
  - API
  - Méthode
  - Reference
  - Stockage
  - Stockage Web
translation_of: Web/API/Storage/clear
---
{{APIRef("Web Storage API")}}

La méthode `clear()` de l'interface {{domxref("Storage")}},  lorsqu'elle est invoquée, vide toutes les clés stockées.

## Syntaxe

```js
storage.clear();
```

### Retoune

{{jsxref("undefined")}}

## Exemple

La fonction suivante crée trois entrées de données dans le stockage local, puis les supprime en utilisant clear().

```js
function peuplerLeStockage() {
  localStorage.setItem('bgcolor', 'red');
  localStorage.setItem('font', 'Helvetica');
  localStorage.setItem('image', 'monChat.png');

  localStorage.clear();
}
```

> **Note :** Pour voir un exemple réel, vous pouvez visitez notre [Démo de stockage web](https://mdn.github.io/dom-examples/web-storage/). Les modifications sont visibles dans la console, vous pouvez actualiser la page et conserver les modifications.

## Spécifications

| Specification                                                                                                | État                             | Commentaire |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', 'webstorage.html#dom-storage-clear', 'Storage.clear')}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.Storage.clear")}}

## Voir aussi

- [Utilisation de l'API de stockage web](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
