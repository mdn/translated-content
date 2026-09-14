---
title: "HTMLMediaElement : propriété networkState"
short-title: networkState
slug: Web/API/HTMLMediaElement/networkState
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

La propriété **`networkState`** de l'interface {{DOMxRef("HTMLMediaElement")}} indique l'état actuel de la récupération des médias sur le réseau.

## Valeur

Un `unsigned short`. Les valeurs possibles sont&nbsp;:

| Constante           | Valeur | Description                                                                              |
| ------------------- | ------ | ---------------------------------------------------------------------------------------- |
| `NETWORK_EMPTY`     | 0      | Il n'y a pas encore de données. De plus, `readyState` vaut `HAVE_NOTHING`.               |
| `NETWORK_IDLE`      | 1      | HTMLMediaElement est actif et a sélectionné une ressource, mais n'utilise pas le réseau. |
| `NETWORK_LOADING`   | 2      | Le navigateur télécharge les données de HTMLMediaElement.                                |
| `NETWORK_NO_SOURCE` | 3      | Aucune source HTMLMediaElement trouvée.                                                  |

## Exemples

Cet exemple écoutera l'élément audio pour commencer la lecture, puis vérifiera s'il est
toujours en chargement des données.

```html
<audio id="example" preload="auto">
  <source src="sound.ogg" type="audio/ogg" />
</audio>
```

```js
const obj = document.getElementById("example");

obj.addEventListener("playing", () => {
  if (obj.networkState === 2) {
    // Toujours en chargement…
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.networkState`
