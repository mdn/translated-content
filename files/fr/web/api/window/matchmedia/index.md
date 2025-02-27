---
title: window.matchMedia
slug: Web/API/Window/matchMedia
---

{{ApiRef}}

Retourne un nouvel objet {{domxref("MediaQueryList")}} contenant les résultats de la chaîne de caractères [media query](/fr/docs/Web/CSS/CSS_media_queries/Using_media_queries) spécifiée.

## Syntaxe

```js
mql = window.matchMedia(mediaQueryString);
```

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

Voir [Utiliser les media queries avec du code](/fr/docs/Web/CSS/CSS_media_queries/Testing_media_queries) pour plus d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Media queries](/fr/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Using media queries from code](/fr/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListListener")}}
