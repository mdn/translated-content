---
title: FormData.has()
slug: Web/API/FormData/has
tags:
  - API
  - FormData
  - Méthode
  - Reference
  - XHR
  - XMLHttpRequest
  - has
translation_of: Web/API/FormData/has
---
{{APIRef("XMLHttpRequest")}}

La méthode **`has()`** de l'interface {{domxref("FormData")}} renvoie un booléen indiquant si un objet `FormData` contient une certaine clé.

> **Note :** Cette méthode est disponible dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Syntaxe

```js
formData.has(name);
```

### Paramètres

- `name`
  - : Un {{domxref("USVString")}} représentant le nom de la clé que vous voulez tester.

### Retours

Un {{domxref("Boolean")}}.

## Exemple

La ligne suivante crée un objet `FormData` vide :

```js
var formData = new FormData();
```

L'extrait suivant montre les résultats des tests effectués pour vérifier l'existence d'un `username` dans l'objet FormData, avant et après avoir ajouté une valeur `username` avec {{domxref("FormData.append")}} :

```js
formData.has('username'); // Retourne false
formData.append('username', 'Chris');
formData.has('username'); // Retourne true
```

## Spécifications

| Spécification                                                                | Statut                               | Commentaire |
| ---------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('XMLHttpRequest','#dom-formdata-has','has()')}} | {{Spec2('XMLHttpRequest')}} |             |

## Compatibilité des navigateurs

{{Compat("api.FormData.has")}}

## Voir aussi

- {{domxref("XMLHTTPRequest")}}
- [Utilisation de XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest)
- [Utilisation des objects FormData](/fr/docs/Web/API/FormData/Utilisation_objets_FormData)
- {{HTMLElement("Form")}}
