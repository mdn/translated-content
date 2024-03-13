---
title: TimeRanges
slug: Web/API/TimeRanges
---

{{ APIRef }}

L'interface TimeRanges est utilisée pour représenter un ensemble de plages de temps, principalement dans le but de savoir quelles portions du média ont été mises en mémoire tampon lors du chargement avec les éléments {{ HTMLElement("audio") }} et {{ HTMLElement("video") }}.

Un objet TimeRanges comprend une ou plusieurs plages de temps, chacune définie par une position de début et de fin. On récupère ces valeurs en utilisant les méthodes start() et end(), en passant en paramètre l'index de la plage de temps que l'on souhaite récupérer.

Le terme "[normalized TimeRanges object](http://www.w3.org/TR/html5/the-iframe-element.html#normalized-timeranges-object)" (objet TimeRanges normalisé) indique que les plages dans un tel objet sont ordonnées, ne se chevauchent pas, ne sont pas vides, et ne se touchent pas (les plages adjacentes sont encapsulées dans une plage plus grande).

### Propriétés

<table class="standard-table">
  <tbody>
    <tr>
      <th>Nom</th>
      <th>Description</th>
      <th>Type retourné</th>
      <th>Disponibilité</th>
    </tr>
    <tr>
      <td>
        <a href="/en/DOM/TimeRanges.length"><code>TimeRanges.length</code></a>
      </td>
      <td>
        <p>
          Le nombre de plages de temps contenues dans l'objet TimeRanges.
          <strong>Lecture seule</strong>.
        </p>
      </td>
      <td><p>unsigned long</p></td>
      <td>?</td>
    </tr>
  </tbody>
</table>

### Méthodes

- {{ domxref("TimeRanges.start") }}
  - : Retourne la position de début de la plage de temps. En paramètre, l'index de la plage de temps souhaitée.
- {{ domxref("TimeRanges.end") }}
  - : Retourne la position de fin de la plage de temps. En paramètre, l'index de la plage de temps souhaitée.

### Spécification

- [WHATWG Working Draft](http://www.whatwg.org/specs/web-apps/current-work/#timeranges)
