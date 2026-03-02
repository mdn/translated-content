---
title: "HTMLTrackElement : propriété srclang"
short-title: srclang
slug: Web/API/HTMLTrackElement/srclang
l10n:
  sourceCommit: da2997666dd2ac0186ebaaaf55bb7abbaa328f79
---

{{APIRef("HTML DOM")}}

La propriété **`srclang`** de l'interface {{DOMxRef("HTMLTrackElement")}} reflète la valeur de l'attribut [`srclang`](/fr/docs/Web/HTML/Reference/Elements/track#srclang) de l'élément HTML {{HTMLElement("track")}}, ou la chaîne vide si elle n'est pas définie.

L'attribut `srclang` est une {{Glossary("BCP 47 language tag", "étiquette de langue BCP 47")}} indiquant la langue des données de la piste de texte.

## Valeur

Une chaîne de caractères.

## Exemple

```js
const trackElement = document.getElementById("exampleTrack");
console.log(`Langue de la piste : ${trackElement.srclang}`);
trackElement.srclang = "en-US";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLTrackElement")}}
- L'élément HTML {{HTMLElement("track")}}
