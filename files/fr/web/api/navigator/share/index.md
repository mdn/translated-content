---
title: Navigator.share
slug: Web/API/Navigator/share
translation_of: Web/API/Navigator/share
---
{{APIRef("HTML DOM")}}{{SeeCompatTable}}

La méthode **`Navigator.share()`** invoque le mécanisme de partage natif de l'appareil. Celle-ci appartient à l'API Web Share. Si l'API Web Share n'est pas supportée, alors la méthode sera `undefined`.

## Syntax

    var sharePromise = window.navigator.share(data);

### Paramètres

- _data_
  - : Un objet contenant les données à partager. Au moins un des champs suivant doit être spécifié. Les champs possibles sont les suivant :

<!---->

- `url`: Un {{domxref("USVString")}} représentant l'URL à partager.
- `text`: Un {{domxref("USVString")}} représentant le texte à partager.
- `title`: Un {{domxref("USVString")}} représentant le titre à partager.

<!---->

### Valeur retournée

Une {{domxref("Promise")}} qui sera résolue une fois que l'utilisateur aura finalisé son action de partage. Elle sera rejetée immédiatement si le paramètre _data_ n'est pas correctement spécifié.

Par exemple, sur Chrome pour Android, la `Promise` retournée sera résolue après que l'utilisateur ait choisi une application vers où partager ses données.

## Examples

```js
navigator.share({
  title: document.title,
  text: 'Hello World',
  url: 'https://developer.mozilla.org',
}); // partage l'URL de MDN
```

## Specifications

| Specification                                                            | Status                               | Comment |
| ------------------------------------------------------------------------ | ------------------------------------ | ------- |
| {{SpecName('Web Share API','#share-method','share()')}} | {{Spec2('Web Share API')}} |         |

## Browser compatibility

{{Compat("api.Navigator.share")}}
