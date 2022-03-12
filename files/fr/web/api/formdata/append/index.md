---
title: FormData.append()
slug: Web/API/FormData/append
tags:
  - API
  - Append
  - FormData
  - Méthode
  - Reference
  - XHR
  - XMLHttpRequest
translation_of: Web/API/FormData/append
---
{{APIRef("XMLHttpRequest")}}

La méthode **`append()`** de l'interface {{domxref("FormData")}} ajoute une nouvelle valeur à une clé existante dans un objet `FormData`, ou rajoute cette clé et cette valeur quand elle n'existe pas.

La différence entre {{domxref("FormData.set")}} et `append()` est que, quand la clé existe, {{domxref("FormData.set")}} va remplacer les valeurs existantes avec la nouvelle alors qu' `append()` va rajouter celle-ci à la fin de l'ensemble des valeurs existantes.

> **Note :** Cette méthode est disponible dans les [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntaxe

Il y a deux versions de cette méthode : avec deux ou trois paramètres

```js
formData.append(name, value);
formData.append(name, value, filename);
```

### Paramètres

- `name`
  - : Le nom de la clé dont les données sont contenues dans `value`.
- `value`
  - : La valeur du champ clé. Elle peut être une {{domxref("USVString")}} ou un {{domxref("Blob")}} (incluant les sous-classes comme {{domxref("File")}}).
- `filename` {{optional_inline}}
  - : Le nom du fichier envoyé au serveur (a {{domxref("USVString")}}), quand un {{domxref("Blob")}} ou un {{domxref("File")}} est passé en second paramètre. Le nom du fichier par défaut pour des objets {{domxref("Blob")}} est "blob". Le nom du fichier par défaut pour des objets {{domxref("File")}} est le nom du fichier de l'objet.

> **Note :** Si vous spécifiez un  {{domxref("Blob")}} comme donnée rattachée à un objet de type `FormData`, le nom de fichier envoyé au serveur sera dans l'entête "Content-Disposition" mais peut varier selon le navigateur.

### Retours

Void.

## Exemple

La ligne suivante crée un objet `FormData` vide :

```js
var formData = new FormData(); // Actuellement vide
```

Vous pouvez rajouter des paires clé/valeur en utilisant {{domxref("FormData.append")}}:

```js
formData.append('username', 'Chris');
formData.append('userpic', myFileInput.files[0], 'chris.jpg');
```

Comme pour un formulaire classique, vous pouvez ajouter plusieurs valeurs pour la même clé. Par exemple ( et pour être en accord avec les conventions de nommage PHP, on ajoute \[] au nom de la clé):

```js
formData.append('userpic[]', myFileInput.files[0], 'chris1.jpg');
formData.append('userpic[]', myFileInput.files[1], 'chris2.jpg');
```

Cette technique permet de simplement gérer l'envoi de plusieurs fichiers avec l'envoi d'une structure facilement itérable.

## Spécifications

| Spécification                                                                        | Statut                               | Commentaire         |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('XMLHttpRequest','#dom-formdata-append','append()')}} | {{Spec2('XMLHttpRequest')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.FormData.append")}}

## Voir aussi

- {{domxref("XMLHTTPRequest")}}
- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest)
- [Utiliser les objets FormData](/fr/docs/Web/API/FormData/Utilisation_objets_FormData)
- {{HTMLElement("Form")}}
