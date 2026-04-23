---
title: TimeRanges
slug: Web/API/TimeRanges
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("HTML DOM")}}

Lors du chargement d'une ressource média pour une utilisation avec un élément HTML {{HTMLElement("audio")}} ou {{HTMLElement("video")}}, l'interface **`TimeRanges`** est utilisée pour représenter les plages de temps de la ressource média qui ont été mises en mémoire tampon, les plages de temps qui ont été lues et les plages de temps qui sont accessibles par recherche.

Un objet `TimeRanges` comprend une ou plusieurs plages de temps, chacune définie par une position de début et de fin. On récupère ces valeurs en utilisant les méthodes `start()` et `end()`, en passant en paramètre l'index de la plage de temps que l'on souhaite récupérer.

## Objets TimeRanges normalisés

Plusieurs membres des objets {{DOMxRef("HTMLMediaElement")}} retournent un **objet TimeRanges normalisé** — que [la spécification décrit <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/media.html#normalised-timeranges-object) comme ayant les caractéristiques suivantes&nbsp;:

_Les plages dans un tel objet sont ordonnées, ne se chevauchent pas et ne se touchent pas (les plages adjacentes sont fusionnées en une seule plage plus grande). Une plage peut être vide (référant à un seul instant dans le temps)._

## Propriétés d'instance

- {{DOMxRef("TimeRanges.length")}} {{ReadOnlyInline}}
  - : Retourne un `unsigned long` représentant le nombre de plages de temps représentées par l'objet TimeRanges.

## Méthodes d'instance

- {{DOMxRef("TimeRanges.start()")}}
  - : Retourne le temps pour le début de la plage avec l'index défini.
- {{DOMxRef("TimeRanges.end()")}}
  - : Retourne le temps pour la fin de la plage avec l'index défini.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
