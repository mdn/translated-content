---
title: FormData
slug: Web/API/FormData
translation_of: Web/API/FormData
browser-compat: api.FormData
---
{{APIRef("XMLHttpRequest")}}

L'interface **`FormData`** permet de construire facilement un ensemble de paires clé/valeur représentant les champs du formulaire et leurs valeurs, qui peuvent ensuite être facilement envoyées en utilisant la méthode [`XMLHttpRequest.send()`](/fr/docs/Web/API/XMLHttpRequest/send) de l'objet `XMLHttpRequest`. Elle utilise le même format qu'utilise un formulaire si le type d'encodage est mis à `"multipart/form-data"`.

Vous pouvez également le passer directement au constructeur [`URLSearchParams`](/fr/docs/Web/API/URLSearchParams) si vous souhaitez générer des paramètres de requête de la même manière qu'un [`<form>`](/fr/docs/Web/HTML/Element/Form) le ferait s'il utilisait une simple soumission `GET`.

Un objet implémentant `FormData` peut être utilisé directement dans une structure [`for…of`](/fr/docs/Web/JavaScript/Reference/Statements/for...of), au lieu de [`entries()`](/fr/docs/Web/API/FormData/entries)&nbsp;: `for (var p of myFormData)` est équivalent à `for (var p of myFormData.entries())`.

> **Note :** Cette fonctionnalité est disponible dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Constructeur

- [`FormData()`](/fr/docs/Web/API/FormData/FormData)
  - : Crée un nouvel objet `FormData`.

## Méthodes

- [`FormData.append()`](/fr/docs/Web/API/FormData/append)
  - : Ajoute une nouvelle valeur à une clé existante dans un objet `FormData`, ou ajoute la clé si elle n'existe pas encore.
- [`FormData.delete()`](/fr/docs/Web/API/FormData/delete)
  - : Supprime une paire clé/valeur d'un objet `FormData`.
- [`FormData.entries()`](/fr/docs/Web/API/FormData/entries)
  - : Renvoie un [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) permettant de passer en revue toutes les paires clé/valeur contenues dans cet objet.
- [`FormData.get()`](/fr/docs/Web/API/FormData/get)
  - : Renvoie la première valeur associée à une clé donnée à partir d'un objet `FormData`.
- [`FormData.getAll()`](/fr/docs/Web/API/FormData/getAll)
  - : Renvoie un tableau de toutes les valeurs associées à une clé donnée à partir d'un objet `FormData`.
- [`FormData.has()`](/fr/docs/Web/API/FormData/has)
  - : Renvoie un booléen indiquant si un objet `FormData` contient une certaine clé.
- [`FormData.keys()`](/fr/docs/Web/API/FormData/keys)
  - : Renvoie un [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) permettant de parcourir toutes les clés des paires clé/valeur contenues dans cet objet.
- [`FormData.set()`](/fr/docs/Web/API/FormData/set)
  - : Définit une nouvelle valeur pour une clé existante dans un objet `FormData`, ou ajoute la clé/valeur si elle n'existe pas encore.
- [`FormData.values()`](/fr/docs/Web/API/FormData/values)
  - : Renvoie un [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) permettant de parcourir toutes les valeurs contenues dans cet objet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest)
- [Utilisation de `XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [Utilisation des objets `FormData`](/fr/docs/Web/API/FormData/Using_FormData_Objects)
- [`<form>`](/fr/docs/Web/HTML/Element/Form)
