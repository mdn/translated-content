---
title: Tester les requêtes média en JavaScript
slug: Web/CSS/Media_Queries/Testing_media_queries
tags:
  - Avancé
  - CSS
  - DOM
  - Guide
translation_of: Web/CSS/Media_Queries/Testing_media_queries
original_slug: Web/CSS/Requêtes_média/Tester_les_media_queries
---
{{CSSRef}}

Le {{Glossary("DOM")}} fournit un certain nombre de fonctionnalités qui permettent de tester les résultats d'une requête média (_media query_) avec un script. Pour cela, on utilise l'interface {{domxref("MediaQueryList")}} ainsi que ses méthodes et ses propriétés. Une fois qu'on a créé un objet {{domxref("MediaQueryList") }}, on peut vérifier le résultat de la requête ou également recevoir des notifications automatiques lorsque le résultat de la requête change.

## Créer une liste de requêtes média

Avant d'évaluer les résultats d'une requête, on doit créer un objet {{domxref("MediaQueryList")}} qui représente la requête média. Pour cela, on utilisera la méthode {{domxref("window.matchMedia")}}.

Ainsi, si on veut avoir une liste de requête qui détermine si l'appareil utilisé est orienté en portrait ou en paysage, on pourra écrire :

```js
var mql = window.matchMedia("(orientation: portrait)");
```

## Vérifier le résultat d'une requête

Une fois que la liste de requêtes média a été créée, on peut vérifier le résultat de la requête grâce à la propriété `matches` qui représente les résultat de la requête :

```js
if (mql.matches) {
  /* La zone d'affichage/viewport est en portrait */
} else {
  /* La zone d'affichage/viewport est en paysage */
}
```

## Recevoir des notifications liées à la requête

Afin de savoir lorsque l'évaluation d'une requête a changé, il sera plus efficace de déclarer un _listener_ plutôt que d'interroger sans cesse le résultat. Pour cela, on pourra utiliser la méthode `addListener()` sur l'objet {{domxref("MediaQueryList")}} et définir un observateur qui implémente l'interface {{domxref("MediaQueryListListener")}} :

```js
var mql = window.matchMedia("(orientation: portrait)");
mql.addListener(handleOrientationChange);
handleOrientationChange(mql);
```

Ce code crée la liste de requêtes média qui teste l'orientation (l'objet `mql`) puis ajoute un _listener_. Une fois qu'on a ajouté le _listener_, on l'invoque une fois. Cela permet d'ajuster l'état initial du _listener_ selon l'orientation de l'appareil (sinon, le code aurait considéré que l'appareil était en portrait par défaut même si ce dernier était en paysage, ce qui aurait engendré des incohérences).

La méthode `handleOrientationChange()` qu'on implémente ensuite consulte le résultat de la requête et gère le cas où l'orientation est modifiée :

```js
function handleOrientationChange(mql) {
  if (mql.matches) {
    /* La zone d'affichage/viewport est en portrait */
  } else {
    /* La zone d'affichage/viewport est en paysage */
  }
}
```

## Terminer la réception des notifications

Lorsqu'on ne souhaite plus recevoir de notifications sur les modifications apportées à la valeur de la requête média, on pourra simplement utiliser `removeListener()` sur l'objet  {{domxref("MediaQueryList") }} :

```js
mql.removeListener(handleOrientationChange);
```

## Compatibilité des navigateurs

### Interface `MediaQueryList`

{{Compat("api.MediaQueryList")}}

## Voir aussi

- [Les requêtes média (_media queries_)](/fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries "CSS/Media queries")
- {{domxref("window.matchMedia()")}}
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListEvent")}}
