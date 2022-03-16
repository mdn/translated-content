---
title: FormData.set()
slug: Web/API/FormData/set
tags:
  - API
  - FormData
  - Méthode
  - Reference
  - XHR
  - XMLHttpRequest
  - set
translation_of: Web/API/FormData/set
---
{{APIRef("XMLHttpRequest")}}

La méthode `set()` de l'interface {{domxref("FormData")}} définit une nouvelle valeur pour une clé existante dans un objet `FormData`, ou ajoute la clé/valeur si elle n'existe pas encore.

La différence entre `set()` et {{domxref("FormData.append")}} est que si la clé spécifiée existe déjà, `set()` écrasera toutes les valeurs existantes avec la nouvelle, tandis que {{domxref("FormData.append")}} ajoutera la nouvelle valeur à la fin de l'ensemble de valeurs existant.

> **Note :** Cette méthode est disponible dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Syntaxe

Il existe deux versions de cette méthode : une version à deux et une version à trois paramètres :

```js
formData.set(name, value);
formData.set(name, value, filename);
```

#### Paramètres

- `name`
  - : Le nom du champ dont les données sont contenues en valeur (`value`).
- `value`
  - : La valeur du champ. Il peut s'agir d'un {{domxref("USVString")}} ou d'un {{domxref("Blob")}} (y compris les sous-classes telles que {{domxref("File")}}). Si aucune de ces sous-classes n'est spécifiée, la valeur est convertie en une chaîne de caractères.
- `filename` {{optional_inline}}
  - : Le nom de fichier communiqué au serveur (un {{domxref("USVString")}}), lorsqu'un {{domxref("Blob")}} ou un {{domxref("File")}} est passée comme deuxième paramètre. Le nom de fichier par défaut pour les objets {{domxref("Blob")}} est "blob". Le nom de fichier par défaut pour les objets {{domxref("File")}} est le nom du fichier.

> **Note :** Si vous spécifiez un {{domxref("Blob")}} comme donnée à ajouter à l'objet FormData, le nom du fichier qui sera rapporté au serveur dans l'en-tête "Content-Disposition" utilisé pour varier d'un navigateur à l'autre.

## Exemple

La ligne suivante crée un objet `FormData` vide:

```js
var formData = new FormData(); // Actuellement vide
```

Vous pouvez définir des paires clé/valeur à ce sujet en utilisant {{domxref("FormData.set")}} :

```js
formData.set('username', 'Chris');
formData.set('userpic', myFileInput.files[0], 'chris.jpg');
```

Si la valeur envoyée est différente de String ou Blob, elle sera automatiquement convertie en `String` :

```js
formData.set('name', 72);
formData.get('name'); // "72"
```

## Spécifications

| Spécification                                                                | Statut                               | Commentaire |
| ---------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('XMLHttpRequest','#dom-formdata-set','set()')}} | {{Spec2('XMLHttpRequest')}} |             |

## Compatibilité des navigateurs

{{Compat("api.FormData.set")}}

## Voir aussi

- {{domxref("XMLHTTPRequest")}}
- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest)
- [Utiliser les objets FormData](/fr/docs/Web/Guide/Using_FormData_Objects)
- {{HTMLElement("Form")}}
