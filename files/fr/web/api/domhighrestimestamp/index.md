---
title: DOMHighResTimeStamp
slug: Web/API/DOMHighResTimeStamp
---

{{APIRef("High Resolution Time")}}

Le type **`DOMHighResTimeStamp`** est un `double` et est utilisé pour stocker une valeur temporelle. La valeur peut représenter un point dans le temps ou la différence entre deux points dans le temps.

L'unité est la milliseconde et sa précision est en principe de 5 µs (microsecondes). Cependant, si le navigateur n'est pas capable de fournir une valeur temporelle avec une précision de 5 microsecondes (en raison par exemple de contraintes hardware ou software), le navigateur peut représenter la valeur comme un temps en millisecondes avec une précision d'une milliseconde. Référez-vous également à la section ci-dessous concernant la réduction de précision temporelle contrôlée par les préférences du navigateur pour éviter les attaques de synchronisation et le fingerprinting.

De plus, si l'appareil ou le système d'exploitation sur lequel tourne le navigateur n'est pas doté d'une horloge avec une précision de l'ordre de la microseconde, la précision peut également être de l'ordre de la milliseconde.

## Précision temporelle réduite

Pour offrir une protection contre les attaques de synchronisation et le fingerprinting, la précision des timestamps peut être arrondie en fonction des préférences du navigateur.
Dans Firefox, l'option `privacy.reduceTimerPrecision` est activée par défaut et vaut 20µs par défaut dans Firefox 59; dans la version 60 cette valeur est portée à 2ms par défaut.

```js
// précision temporelle réduite (2ms) dans Firefox 60
event.timeStamp;
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// précision temporelle réduite avec `privacy.resistFingerprinting` activé
event.timeStamp;
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

Dans Firefox, vous pouvez aussi activer `privacy.resistFingerprinting`, la précision sera alors de 100ms ou la valeur de `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, la valeur la plus large étant retenue.

## Propriétés

_Ce type n'a pas de propriétés. C'est une valeur à virgule flottante double précision._

### Valeur

La valeur d'un `DOMHighResTimeStamp` est un nombre flottant double précision qui décrit le nombre de millisecondes (avec une précision de 5 microsecondes si l'appareil le supporte) écoulé entre deux points dans le temps. Le temps de départ peut être soit un point spécifique dans le temps déterminé par le script d'un site web ou d'une application, ou l'**origine temporelle**.

#### L'origine temporelle

L'**origine temporelle** est une heure qui est considéré comme l'heure de commencement de la vie du document. Elle est calculée comme suit :

- Si l'{{Glossary("objet global")}} du script est {{domxref("Window")}}, l'origine temporelle est déterminée comme suit :

  - Si le {{domxref("Document")}} courant est le premier à être chargé dans la fenêtre, l'origine temporelle est l'heure à laquelle le contexte du navigateur a été créé.
  - Si pendant le processus de déchargement du document précédemment chargé dans la fenêtre, un dialogue de confirmation a été affiché pour demander à l'utilisateur de confirmer s'il souhaite quitter la page précédente, l'origine temporelle est l'heure à laquelle l'utilisateur a confirmé que naviguer vers la nouvelle page était acceptable.
  - Si aucun des points ci-dessus ne détermine l'origine temporelle, celle-ci est l'heure à laquelle la navigation responsable de la création du `Document` courant de la fenêtre a eu lieu.

- Si l'objet global du script est un {{domxref("WorkerGlobalScope")}} (si le script tourne comme un _web worker_), l'origine temporelle est le moment auquel le worker a été créé.
- Dans tous les autres cas, l'origine temporelle est `undefined`.

## Méthodes

_Ce type n'a pas de méthodes._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Navigation Timing API](/fr/docs/Navigation_timing)
- [performance.now()](/fr/docs/Web/API/Performance/now)
