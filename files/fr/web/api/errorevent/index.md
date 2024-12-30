---
title: ErrorEvent
slug: Web/API/ErrorEvent
---

{{APIRef("HTML DOM")}}

L'interface **`ErrorEvent`** représente un événement donnant des informations relatives aux erreurs dans les scripts ou dans les fichiers.

## Propriétés

_Hérite également des propriétés de son parent {{domxref("Event")}}_.

- {{domxref("ErrorEvent.message")}} {{readonlyInline}}
  - : Un {{domxref("DOMString")}} contenant un message d'erreur lisible décrivant le problème.
- {{domxref("ErrorEvent.filename")}} {{readonlyInline}}
  - : Un {{domxref("DOMString")}} contenant le nom du fichier de script dans lequel l'erreur est survenue.
- {{domxref("ErrorEvent.lineno")}} {{readonlyInline}}
  - : Un `integer` contenant le numéro de ligne du fichier de script dans lequel l'erreur est survenue.
- {{domxref("ErrorEvent.colno")}} {{readonlyInline}}
  - : Un `integer` contenant le numéro de colonne du fichier de script dans lequel l'erreur est survenue.
- {{domxref("ErrorEvent.error")}} {{readonlyInline}} {{experimental_inline}}
  - : Un `Object` JavaScript qui est concerné par l'événement.

## Constructeur

- {{domxref("ErrorEvent.ErrorEvent", "ErrorEvent()")}}
  - : Crée un événement `ErrorEvent` avec les paramètres fournis.

## Méthodes

_Hérite des méthodes de son parent {{domxref("Event")}}_.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utilisation des web workers](/fr/docs/Web/API/Web_Workers_API/Using_web_workers), notamment les objets susceptibles de déclencher un tel événement.
