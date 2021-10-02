---
title: FormData
slug: Web/API/FormData
tags:
  - API
  - FormData
  - Interface
  - Reference
  - XMLHttpRequest
translation_of: Web/API/FormData
---
{{APIRef("XMLHttpRequest")}}

L'interface `FormData` permet de construire facilement un ensemble de paires clé/valeur représentant les champs du formulaire et leurs valeurs, qui peuvent ensuite être facilement envoyées en utilisant la méthode {{domxref("XMLHttpRequest.send()")}} de l'objet XMLHttpRequest. Il utilise le même format qu'utilise un formulaire si le type d'encodage est mis à `"multipart/form-data"`.

Vous pouvez également le passer directement au constructeur {{domxref("URLSearchParams")}} si vous souhaitez générer des paramètres de requête de la même manière qu'un {{HTMLElement("form")}} le ferait s'il utilisait une simple soumission `GET`.

Un objet implémentant `FormData` peut être utilisé directement dans une structure {{jsxref("Statements/for...of", "for...of")}}, au lieu de {{domxref('FormData.entries()', 'entries()')}} : `for (var p of myFormData)` est équivalent à `for (var p of myFormData.entries())`.

> **Note :** Cette fonctionnalité est disponible dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Constructeur

- {{domxref("FormData.FormData","FormData()")}}
  - : Crée un nouvel objet `FormData`.

## Méthodes

- {{domxref("FormData.append()")}}
  - : Ajoute une nouvelle valeur à une clé existante dans un objet `FormData`, ou ajoute la clé si elle n'existe pas encore.
- {{domxref("FormData.delete()")}}
  - : Supprime une paire clé/valeur d'un objet `FormData`.
- {{domxref("FormData.entries()")}}
  - : Retourne une {{jsxref("Les_protocoles_iteration", "itération")}} permettant de passer en revue toutes les paires clé/valeur contenues dans cet objet.
- {{domxref("FormData.get()")}}
  - : Renvoie la première valeur associée à une clé donnée à partir d'un objet `FormData`.
- {{domxref("FormData.getAll()")}}
  - : Retourne un tableau de toutes les valeurs associées à une clé donnée à partir d'un `FormData`.
- {{domxref("FormData.has()")}}
  - : Renvoie un booléen indiquant si un objet `FormData` contient une certaine clé.
- {{domxref("FormData.keys()")}}
  - : Retourne une {{jsxref("Les_protocoles_iteration", "itération")}} permettant de parcourir toutes les clés des paires clé/valeur contenues dans cet objet.
- {{domxref("FormData.set()")}}
  - : Définit une nouvelle valeur pour une clé existante dans un objet `FormData`, ou ajoute la clé/valeur si elle n'existe pas encore.
- {{domxref("FormData.values()")}}
  - : Retourne une {{jsxref("Les_protocoles_iteration", "itération")}} permettant de parcourir toutes les clés des paires clé/valeur contenues dans cet objet.

## Spécifications

| Spécification                                                                        | Statut                               | Commentaire                         |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ----------------------------------- |
| {{SpecName('XMLHttpRequest','#interface-formdata','FormData')}} | {{Spec2('XMLHttpRequest')}} | FormData définit dans les specs XHR |

## Compatibilité des navigateurs

{{Compat("api.FormData")}}

## Voir aussi

- {{domxref("XMLHTTPRequest")}}
- [Utilisation de XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest)
- [Utilisation des objects FormData](/fr/docs/Web/API/FormData/Utilisation_objets_FormData)
- {{HTMLElement("Form")}}
