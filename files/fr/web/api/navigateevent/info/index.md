---
title: "NavigateEvent : propriété info"
short-title: info
slug: Web/API/NavigateEvent/info
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`info`** de l'interface {{DOMxRef("NavigateEvent")}} retourne la valeur des données `info` transmises par l'opération de navigation initiatrice (par exemple, {{DOMxRef("Navigation.back()")}} ou {{DOMxRef("Navigation.navigate()")}}), ou `undefined` si aucune donnée `info` n'a été transmise.

## Valeur

La valeur `info` transmise par l'opération de navigation initiatrice, ou `undefined` si aucune n'a été transmise.

## Exemples

Un exemple de la manière dont `info` peut être utilisé est de déclencher différents rendus de navigation sur une seule page en fonction de la manière dont une certaine route a été atteinte. Par exemple, considérez une application de galerie photo, où vous pouvez atteindre la même URL et le même état de photo avec différentes routes. Vous pouvez vouloir utiliser une animation différente pour afficher la photo pour chaque route.

```js
navigation.addEventListener("navigate", (event) => {
  if (isPhotoNavigation(event)) {
    event.intercept({
      async handler() {
        switch (event.info?.via) {
          case "go-left": {
            await animateLeft();
            break;
          }
          case "go-right": {
            await animateRight();
            break;
          }
          case "gallery": {
            await animateZoomFromThumbnail(event.info.thumbnail);
            break;
          }
        }

        // TODO: charger réellement la photo.
      },
    });
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
- Les méthodes permettant de transmettre des informations — {{DOMxRef("Navigation.back()")}}, {{DOMxRef("Navigation.forward()")}}, {{DOMxRef("Navigation.navigate()")}}, {{DOMxRef("Navigation.reload()")}} et {{DOMxRef("Navigation.traverseTo()")}}
