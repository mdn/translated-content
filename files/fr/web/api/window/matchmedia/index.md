---
title: window.matchMedia
slug: Web/API/Window/matchMedia
translation_of: Web/API/Window/matchMedia
---
{{ApiRef}}

Retourne un nouvel objet {{domxref("MediaQueryList")}} contenant les résultats de la chaîne de caractères [media query](/en-US/docs/CSS/Media_queries) spécifiée.

## Syntaxe

    mql = window.matchMedia(mediaQueryString)

Ici, `mediaQueryString` est une chaîne de caractère représentant la media query pour laquelle on retourne un nouvel objet {{domxref("MediaQueryList")}}.

## Exemple

```js
if (window.matchMedia("(min-width: 400px)").matches) {
  /* the view port is at least 400 pixels wide */
} else {
  /* the view port is less than 400 pixels wide */
}
```

Ce code permet de gérer la mise en page d'une manière différente quand l'écran est moins large.

Voir [Utiliser les media queries avec du code](/en-US/docs/DOM/Using_media_queries_from_code) pour plus d'exemples.

## Spécifications

| Spécification                                                                                        | Statut                           | Commentaire          |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName("CSSOM View", "#dom-window-matchmedia", "Window.matchMedia()")}} | {{Spec2("CSSOM View")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Window.matchMedia")}}

## Voir aussi

- [Media queries](/en-US/docs/CSS/Media_queries)
- [Using media queries from code](/en-US/docs/DOM/Using_media_queries_from_code)
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListListener")}}
