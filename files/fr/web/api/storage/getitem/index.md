---
title: Storage.getItem()
slug: Web/API/Storage/getItem
tags:
  - API
  - Méthode
  - Stockage
  - Stockage Web
translation_of: Web/API/Storage/getItem
---
{{APIRef("Web Storage API")}}
La méthode `getItem()` de l'interface {{domxref("Storage")}} renvoie la valeur associée à la clé passée en paramètre.

## Syntax

    var aValue = storage.getItem(keyName);

### Paramètre

- _`keyName`_
  - : Une {{domxref("DOMString")}} contenant le nom de la clé voulue.

### Renvoi

Une {{domxref("DOMString")}} contenant la valeur de la clé. `null` est renvoyé si aucune correspondance n'est trouvée.

## Exemple

La fonction suivante récupère trois élément du stockage local, puis réutilise les valeurs renvoyés afin de modifier le style de la page .

```js
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

> **Note :** Pour voir cette fonction utilisée dans un exemple réel, dirigez-vous vers notre [Demo de Stockage Web (en)](https://github.com/mdn/web-storage-demo).

## Spécifications

| Spécification                                                                                                    | État                             | Commentaire |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', 'webstorage.html#dom-storage-getitem', 'Storage.getItem')}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.Storage.getItem")}}

## Voir aussi

[Utilisation de l'API de stockage web](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
