---
title: "HTMLMediaElement : propriété playbackRate"
short-title: playbackRate
slug: Web/API/HTMLMediaElement/playbackRate
l10n:
  sourceCommit: ed9ebd794add41de1f2e759502b73e8650afe56b
---

{{APIRef("HTML DOM")}}

La propriété **`playbackRate`** de l'interface {{DOMxRef("HTMLMediaElement")}} définit la vitesse à laquelle le média est lu. Elle est utilisée pour implémenter des contrôles utilisateur pour l'avance rapide, le ralenti, etc. La vitesse de lecture normale est multipliée par cette valeur pour obtenir la vitesse actuelle, donc une valeur de 1.0 indique une vitesse normale.

Une valeur négative de `playbackRate` indique que le média doit être lu en arrière, mais la prise en charge de cette fonctionnalité n'est pas encore généralisée. (Voir la [compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails.)

Le son est coupé lorsque l'avance rapide ou le ralenti est en dehors d'une plage utile (par exemple, Gecko coupe le son en dehors de la plage `0.25` à `4.0`).

La hauteur du son est corrigée par défaut. Vous pouvez désactiver la correction de la hauteur en utilisant la propriété {{DOMxRef("HTMLMediaElement.preservesPitch")}}.

## Valeur

Un [`double` <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Double-precision_floating-point_format). `1.0` pour «&nbsp;vitesse normale&nbsp;», des valeurs inférieures à `1.0` ralentissent la lecture du média, des valeurs supérieures à `1.0` l'accélèrent. (**Par défaut&nbsp;:** `1.0`)

## Exemples

```js
const obj = document.createElement("video");
console.log(obj.playbackRate); // Sortie attendue : 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.playbackRate`
- Rapports de bogues des navigateurs pour prendre en charge `playbackRate` négatif dans [Firefox <sup>(angl.)</sup>](https://bugzil.la/1468019) et [Blink <sup>(angl.)</sup>](https://crbug.com/40410591) (Chrome, etc.)
- Le groupe de travail Web Hypertext Application Technology (WHATWG) [problème pour exiger la prise en charge de `playbackRate` négatif <sup>(angl.)</sup>](https://github.com/whatwg/html/issues/3754)
