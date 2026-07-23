---
title: FormData
slug: Web/API/FormData
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

L'interface **`FormData`** fournit un moyen de construire un ensemble de paires clé/valeur représentant les champs du formulaire et leurs valeurs, qui peuvent être envoyées en utilisant les méthodes {{DOMxRef("Window/fetch", "fetch()")}}, {{DOMxRef("XMLHttpRequest.send()")}} ou {{DOMxRef("navigator.sendBeacon()")}}. Elle utilise le même format qu'un formulaire utilise si le type d'encodage était défini sur `"multipart/form-data"`.

Vous pouvez également le passer directement au constructeur {{DOMxRef("URLSearchParams")}} si vous souhaitez générer des paramètres de requête de la même manière qu'un {{HTMLElement("form")}} le ferait s'il utilisait un simple envoi `GET`.

Un objet implémentant `FormData` peut être utilisé directement dans une structure {{JSxRef("Statements/for...of", "for...of")}}, au lieu de {{DOMxRef('FormData.entries()', 'entries()')}}&nbsp;: `for (const p of myFormData)` est équivalent à `for (const p of myFormData.entries())`.

## Constructeur

- {{DOMxRef("FormData.FormData","FormData()")}}
  - : Crée un nouvel objet `FormData`.

## Méthodes d'instance

- {{DOMxRef("FormData.append()")}}
  - : Ajoute une nouvelle valeur à une clé existante au sein d'un objet `FormData`, ou crée la clé si elle n'existe pas encore.
- {{DOMxRef("FormData.delete()")}}
  - : Supprime une paire clé/valeur d'un objet `FormData`.
- {{DOMxRef("FormData.entries()")}}
  - : Retourne un [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) qui parcourt toutes les paires clé/valeur contenues dans l'objet `FormData`.
- {{DOMxRef("FormData.get()")}}
  - : Retourne la première valeur associée à une clé donnée dans un objet `FormData`.
- {{DOMxRef("FormData.getAll()")}}
  - : Retourne un tableau de toutes les valeurs associées à une clé donnée dans un objet `FormData`.
- {{DOMxRef("FormData.has()")}}
  - : Retourne un booléen si un objet `FormData` contient une clé donnée.
- {{DOMxRef("FormData.keys()")}}
  - : Retourne un [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) qui parcourt toutes les clés des paires clé/valeur contenues dans l'objet `FormData`.
- {{DOMxRef("FormData.set()")}}
  - : Définit une nouvelle valeur pour une clé existante au sein d'un objet `FormData`, ou ajoute la paire clé/valeur si elle n'existe pas encore.
- {{DOMxRef("FormData.values()")}}
  - : Retourne un [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) qui parcourt toutes les valeurs contenues dans l'objet `FormData`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des objets `FormData`](/fr/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- L'élément HTML {{HTMLElement("form")}}
