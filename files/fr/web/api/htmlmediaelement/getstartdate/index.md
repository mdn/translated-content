---
title: "HTMLMediaElement : méthode getStartDate()"
short-title: getStartDate()
slug: Web/API/HTMLMediaElement/getStartDate
l10n:
  sourceCommit: af9a8ff87cfa6563c9a082162ce4ed7ba0b204e1
---

{{APIRef("HTML DOM")}}

La méthode **`getStartDate()`** de l'interface {{DOMxRef("HTMLMediaElement")}} retourne un nouvel objet {{JSxRef("Date")}} représentant la date et l'heure réelles correspondant au début du média.

Cette fonctionnalité est utile pour les flux multimédias rattachés à une horloge réelle, comme une diffusion en direct qui a commencé à une date et une heure spécifiques. Pour les médias qui n'incluent pas d'informations de date et d'heure, l'objet `Date` retourné aura une valeur temporelle de {{JSxRef("NaN")}}.

## Syntaxe

```js-nolint
getStartDate()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{JSxRef("Date")}} représentant la date et l'heure de début du média. Si le média n'inclut pas d'informations de date et d'heure, l'objet `Date` retourné aura une valeur temporelle de `NaN`.

## Description

En interne, chaque élément multimédia suit une date de début, qui commence comme `NaN` (non définie). Une fois que le navigateur a chargé suffisamment de données pour lire les métadonnées du média, il définit la date de début sur l'heure réelle correspondant au début du média — si le format en fournit une. Sinon, la date de début reste `NaN`.

Pour les médias qui définissent une heure et une date de début (par exemple, une diffusion télévisée en direct diffusée sur le web), `getStartDate()` retourne un objet `Date` correspondant à l'heure réelle à laquelle le média commence. Cela permet aux contrôles du lecteur multimédia d'afficher des heures absolues (comme «&nbsp;14:30&nbsp;») plutôt que des heures relatives au début de la lecture (comme «&nbsp;3 heures, 12 minutes&nbsp;»).

L'objet `Date` retourné aura une valeur temporelle de `NaN` (ce qui en fait une [date invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide)) dans l'un des cas suivants&nbsp;:

- Aucune donnée n'a encore été chargée ({{DOMxRef("HTMLMediaElement.readyState", "readyState")}} est `HAVE_NOTHING`), donc la date de début n'a pas été définie.
- Le format du média n'inclut pas d'informations de date et d'heure.

La date de début n'est pas garantie d'être disponible dès que l'évènement {{DOMxRef("HTMLMediaElement/loadedmetadata_event", "loadedmetadata")}} se déclenche. Par exemple, les flux [HLS <sup>(angl.)</sup>](https://developer.apple.com/documentation/http-live-streaming) transportent des dates dans des balises `#EXT-X-PROGRAM-DATE-TIME` au niveau des segments, qui peuvent ne pas avoir été lues à ce moment-là. Écouter plutôt l'évènement {{DOMxRef("HTMLMediaElement/loadeddata_event", "loadeddata")}} est plus fiable à travers les formats, car à ce moment-là, le navigateur a chargé suffisamment de données pour déterminer la date de début.

## Exemples

### Afficher la date de début d'un flux en direct

Cet exemple récupère la date de début d'un flux en direct — la date et l'heure réelles auxquelles la diffusion a commencé, telles qu'elles sont intégrées dans le flux par le serveur — et l'affiche. Il écoute l'évènement {{DOMxRef("HTMLMediaElement/loadeddata_event", "loadeddata")}}, qui se déclenche une fois que suffisamment de données ont été chargées pour que la date de début soit disponible.

#### HTML

```html
<video src="livestream.m3u8" controls></video>
<output>Date de début&nbsp;: chargement…</output>
```

#### JavaScript

```js
const video = document.querySelector("video");
const display = document.querySelector("output");

video.addEventListener("loadeddata", () => {
  const startDate = video.getStartDate();

  if (isNaN(startDate.getTime())) {
    display.textContent = "Date de début : non disponible";
  } else {
    display.textContent = `Date de début : ${startDate.toLocaleString()}`;
  }
});
```

#### Résultat

La sortie ci-dessous montre la date de début du média, telle que fournie par le serveur.
Notez que cela est encodé dans les métadonnées d'exemple dans [stream.m3u8 <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/blob/main/media/getstartdate/stream.m3u8).

{{EmbedGHLiveSample("dom-examples/media/getstartdate/", "100%", 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}
- La propriété {{DOMxRef("HTMLMediaElement.currentTime")}}
- La propriété {{DOMxRef("HTMLMediaElement.duration")}}
