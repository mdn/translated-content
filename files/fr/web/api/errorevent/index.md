---
title: ErrorEvent
slug: Web/API/ErrorEvent
l10n:
  sourceCommit: c51a68c737afbd68787f4450f0c00da2dbdd5317
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

L'interface **`ErrorEvent`** représente un événement donnant des informations relatives aux erreurs dans les scripts ou dans les fichiers.

{{InheritanceDiagram}}

## Constructeur

- {{DOMxRef("ErrorEvent.ErrorEvent", "ErrorEvent()")}}
  - : Crée un évènement `ErrorEvent` avec les paramètres fournis.

## Propriétés d'instance

_Hérite également des propriétés de son parent {{DOMxRef("Event")}}_.

- {{DOMxRef("ErrorEvent.message")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères contenant un message d'erreur lisible décrivant le problème.
- {{DOMxRef("ErrorEvent.filename")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères contenant le nom du fichier de script dans lequel l'erreur est survenue.
- {{DOMxRef("ErrorEvent.lineno")}} {{ReadOnlyInline}}
  - : Un nombre entier contenant le numéro de ligne du fichier de script dans lequel l'erreur est survenue.
- {{DOMxRef("ErrorEvent.colno")}} {{ReadOnlyInline}}
  - : Un nombre entier contenant le numéro de colonne du fichier de script dans lequel l'erreur est survenue.
- {{DOMxRef("ErrorEvent.error")}} {{ReadOnlyInline}}
  - : Une valeur JavaScript, telle que {{JSxRef("Error")}} ou un objet {{DOMxRef("DOMException")}}, représentant l'erreur associée à cet événement.

## Méthodes d'instance

_Hérite des méthodes de son parent {{DOMxRef("Event")}}_.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utilisation des web workers](/fr/docs/Web/API/Web_Workers_API/Using_web_workers), notamment les objets susceptibles de déclencher un tel événement.
- L'évènement de {{DOMxRef("Window")}}&nbsp;: {{DOMxRef("Window/error_event", "error")}}
- L'évènement de {{DOMxRef("Navigation")}}&nbsp;: {{DOMxRef("Navigation/navigateerror_event", "navigateerror")}}
