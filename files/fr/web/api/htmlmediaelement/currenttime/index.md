---
title: "HTMLMediaElement : propriété currentTime"
short-title: currentTime
slug: Web/API/HTMLMediaElement/currentTime
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

{{APIRef("HTML DOM")}}

La propriété **`currentTime`** de l'interface {{DOMxRef("HTMLMediaElement")}} définit le temps de lecture actuel en secondes.

Changer la valeur de `currentTime` permet de déplacer la lecture vers le nouveau temps.

## Valeur

Une valeur en virgule flottante double précision indiquant le temps de lecture actuel en
secondes.

Si le média n'est pas encore en cours de lecture, la valeur de `currentTime` indique la position temporelle dans le média à laquelle la lecture commence une fois que la méthode {{DOMxRef("HTMLMediaElement.play", "play()")}} est appelée.

Définir `currentTime` sur une nouvelle valeur permet de déplacer la lecture vers le temps donné, si le média est disponible.

Pour les médias dont la durée n'est pas connue, comme les médias diffusés en direct, il est possible que le navigateur ne puisse pas obtenir certaines parties du média qui ont expiré de la mémoire tampon du média. De plus, les médias dont la chronologie ne commence pas à 0 seconde ne peuvent pas être recherchés à un moment antérieur au moment le plus tôt de leur chronologie.

La durée du média en secondes peut être déterminée en utilisant la propriété {{DOMxRef("HTMLMediaElement.duration", "duration")}}.

## Exemples

```js
const video = document.createElement("video");
console.log(video.currentTime);
```

## Notes d'utilisation

### Précision temporelle

Le navigateur n'applique pas d'arrondi du minuteur à `currentTime`, y compris aux valeurs fournies par le script. La recherche peut toujours ajuster la position de lecture résultante à une position prise en charge par le média.

La valeur de `currentTime` est une approximation de la position de lecture actuelle. Le navigateur met à jour cette valeur au fur et à mesure de la lecture. La [spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/media.html#official-playback-position) exige que la position de lecture signalée reste stable pendant l'exécution des scripts.

La fréquence de mise à jour dépend du navigateur et du pipeline de lecture multimédia. En conséquence, des lectures successives peuvent retourner le même `currentTime` même lorsque {{JSxRef("Date.now()")}} a avancé. Le nombre de décimales dans la valeur n'indique pas la fréquence de mise à jour ni la précision avec laquelle elle correspond à l'audio ou à la vidéo présentée.

Par exemple, des lectures successives pendant la lecture peuvent produire ces valeurs&nbsp;:

```js
video.currentTime;
// Peut être :
// 23.404
// 23.404
// 23.452
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.currentTime`
- La méthode {{DOMxRef("HTMLMediaElement.fastSeek()")}}&nbsp;: une autre façon de définir le temps
- La propriété {{DOMxRef("HTMLMediaElement.duration")}}&nbsp;: la durée du média en secondes
