---
title: Event.timeStamp
slug: Web/API/Event/timeStamp
translation_of: Web/API/Event/timeStamp
---
{{ApiRef("DOM")}}

Retourne le temps (en millisecondes) à partir duquel l'événement a été créé.

> **Note :** Cette propriété fonctionne seulement si le système d'évènements le prend en charge pour des évènements particuliers.

## Syntaxe

    event.timeStamp

### Valeur

Cette valeur est un nombre de millisecondes écoulées depuis le début du temps de vie du document courant jusqu'à la création de l'évènement.

Dans les nouvelles implémentations, la valeur est un {{domxref("DOMHighResTimeStamp")}} dont la précision est de 5 microsecondes (0,005 ms). Dans les implémentations plus anciennes, la valeur est un {{domxref("DOMTimeStamp")}} de précision d'une milliseconde.

## Exemple

### HTML

```html
<p>
  Focus this iframe and press any key to get the
  current timestamp for the keypress event.
</p>
<p>timeStamp: <span id="time">-</span></p>
```

### JavaScript

```js
function getTime(event) {
  var time = document.getElementById("time");
  time.firstChild.nodeValue = event.timeStamp;
}
document.body.addEventListener("keypress", getTime);
```

### Résultat

{{EmbedLiveSample("Exemple", "100%", 100)}}

## Précision du temps réduite

Pour offrir une protection contre les attaques de synchronisation et les empreintes digitales, la précision de `event.timeStamp` peut être arrondie en fonction des paramètres du navigateur.
Dans Firefox, la préférence `privacy.reduceTimerPrecision` est activée et à 20 us par défaut dans Firefox 59 ; en version 60 ce sera 2 ms.

```js
// Précision du temps réduite (2ms) dans Firefox 60
event.timeStamp;
// 1519211809934
// 1519211810362
// 1519211811670
// ...


// Précision du temps réduite avec `privacy.resistFingerprinting` activé
event.timeStamp;
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

Dans Firefox, vous pouvez aussi activer `privacy.resistFingerprinting`, la précision sera de 100 ms ou la valeur de `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, selon la valeur la plus grande.

## Spécifications

| Spécification                                                                                    | Statut                               | Commentaire          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('DOM WHATWG', '#dom-event-timestamp', 'Event.timeStamp')}}     | {{ Spec2('DOM WHATWG') }}     |                      |
| {{SpecName('DOM4', '#dom-event-timestamp', 'Event.timeStamp')}}             | {{ Spec2('DOM4') }}             |                      |
| {{SpecName('DOM2 Events', '#Events-Event-timeStamp', 'Event.timeStamp')}} | {{ Spec2('DOM2 Events') }} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Event.timeStamp")}}
