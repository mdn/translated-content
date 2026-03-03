---
title: "HTMLTrackElement : propriété kind"
short-title: kind
slug: Web/API/HTMLTrackElement/kind
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`kind`** de l'interface {{DOMxRef("HTMLTrackElement")}} représente le type de piste, ou la façon dont la piste de texte doit être utilisée. Elle reflète l'attribut énuméré [`kind`](/fr/docs/Web/HTML/Reference/Elements/track#kind) de l'élément HTML {{HTMLElement("track")}}.

Si aucun `kind` n'est défini, `subtitles` est utilisé. Si l'attribut n'est pas défini sur l'une des valeurs énumérées valides, il est invalide et `metadata` est utilisé. Les autres valeurs valides incluent `captions`, `descriptions` et `chapters`.

## Valeur

Une chaîne de caractères&nbsp;; en minuscules `captions`, `descriptions`, `chapters`, `subtitles` ou `metadata`.

## Exemple

À partir de l'exemple suivant&nbsp;:

```html
<track src="track.vtt" id="exampleTrack" />
```

On obtient les résultats suivants&nbsp;:

```js
const trackElement = document.getElementById("exampleTrack");
// valeur manquante
console.log(trackElement.kind); // "subtitles"
trackElement.kind = "INVALID";
// valeur invalide
console.log(trackElement.kind); // "metadata"
trackElement.kind = "CAPTIONS";
// valeur valide
console.log(trackElement.kind); // "captions"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTrackElement.track")}}
- La propriété {{DOMxRef("HTMLTrackElement.label")}}
