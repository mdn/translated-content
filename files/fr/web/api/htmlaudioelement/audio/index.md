---
title: "HTMLAudioElement : constructeur Audio()"
short-title: Audio()
slug: Web/API/HTMLAudioElement/Audio
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

Le constructeur **`Audio()`** crée et retourne un nouvel objet {{DOMxRef("HTMLAudioElement")}} qui peut être soit attaché à un document pour que l'utilisateur·ice puisse interagir avec et/ou écouter, soit utilisé hors écran pour gérer et lire de l'audio.

## Syntaxe

```js-nolint
new Audio()
new Audio(url)
```

### Paramètres

- `url` {{Optional_Inline}}
  - : Une chaîne de caractères optionnelle contenant l'URL d'un fichier audio à associer au nouvel élément audio.

### Valeur de retour

Un nouvel objet {{DOMxRef("HTMLAudioElement")}}, configuré pour lire l'audio du fichier spécifié par `url`. La propriété {{DOMxRef("HTMLMediaElement.preload", "preload")}} du nouvel objet est définie à `auto` et sa propriété `src` est définie à l'URL spécifiée ou à `null` si aucune URL n'est fournie. Si une URL est spécifiée, le navigateur commence à charger la ressource média _asynchrone_ avant de retourner le nouvel objet.

## Notes d'utilisation

Vous pouvez également utiliser d'autres méthodes de création d'éléments, comme la méthode {{DOMxRef("Document.createElement", "createElement()")}} de l'objet {{DOMxRef("document")}}, pour construire un nouvel objet {{DOMxRef("HTMLAudioElement")}}.

### Déterminer quand la lecture peut commencer

Il existe trois façons de savoir quand suffisamment de données audio ont été chargées pour permettre la lecture&nbsp;:

- Vérifier la valeur de la propriété {{DOMxRef("HTMLMediaElement.readyState", "readyState")}}. Si elle vaut `HTMLMediaElement.HAVE_FUTURE_DATA`, il y a suffisamment de données pour commencer la lecture et lire au moins un court instant. Si elle vaut `HTMLMediaElement.HAVE_ENOUGH_DATA`, il y a assez de données pour que, compte tenu du débit actuel, la lecture puisse se faire jusqu'à la fin sans interruption.
- Écouter l'événement {{DOMxRef("HTMLMediaElement.canplay_event", "canplay")}}. Il est envoyé à l'élément `<audio>` lorsqu'il y a assez d'audio pour commencer la lecture, même si des interruptions peuvent survenir.
- Écouter l'événement {{DOMxRef("HTMLMediaElement.canplaythrough_event", "canplaythrough")}}. Il est envoyé lorsqu'il est estimé que l'audio pourra être lu jusqu'à la fin sans interruption.

L'approche basée sur les événements est la meilleure&nbsp;:

```js
myAudioElement.addEventListener("canplaythrough", (event) => {
  /* l'audio est maintenant lisible ; le lire si les permissions le permettent */
  myAudioElement.play();
});
```

### Utilisation et gestion de la mémoire

Si toutes les références à un élément audio créé avec le constructeur `Audio()` sont supprimées, l'élément ne sera pas retiré de la mémoire par le mécanisme de ramasse-miettes de JavaScript si une lecture est en cours. L'audio continuera à jouer et l'objet restera en mémoire jusqu'à la fin de la lecture. À ce moment-là, l'objet pourra être collecté par le ramasse-miettes.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Technologies des médias web](/fr/docs/Web/Media)
- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("audio")}}.
