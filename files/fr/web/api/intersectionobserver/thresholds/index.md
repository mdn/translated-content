---
title: IntersectionObserver.thresholds
slug: Web/API/IntersectionObserver/thresholds
---

{{APIRef("Intersection Observer API")}}

La propriété en lecture seule **`thresholds`** de l'interface [`IntersectionObserver`](/fr/docs/Web/API/IntersectionObserver) retourne la liste des seuils d'intersection spécifiés lors de l'instanciation avec [`IntersectionObserver()`](/fr/docs/Web/API/IntersectionObserver/IntersectionObserver). Si un seul seuil a été fourni lors de l'instanciation de l'objet, cette propriété sera un tableau contenant cette unique valeur numérique.

Voir [la section sur les seuils](/fr/docs/Web/API/Intersection_Observer_API#Thresholds) pour apprendre comment fonctionnent les seuils d'intersection.

## Syntaxe

```js
thresholds = IntersectionObserver.thresholds;
```

### Valeur

Un tableau de seuils d'intersection, spécifiés lors de l'instanciation via `options.threshold`. Si un seul seuil a été fourni, sans être donné dans un tableau (avec une valeur numérique « brute » donc), la valeur de la propriété sera un tableau contenant cette unique valeur. Quel qu'ait été l'ordre du tableau fourni à l'origine, celui fournit par `thresholds` sera trié par ordre croissant.

Si aucune option `threshold` n'est fournie lors de l'instanciation avec `IntersectionObserver()`, la valeur par défaut de `thresholds` est définie à `[0]`.

> **Attention :** Bien que l'objet d'`options` qu'on peut spécifier à la création d'un [`IntersectionObserver`](/fr/docs/Web/API/IntersectionObserver) possède une propriété champ nommée [`threshold`](/fr/docs/Web/API/IntersectionObserver/IntersectionObserver), cette propriété-ci s'appelle `thresholds` (avec un « s » supplémentaire donc). _Cela peut porter à confusion_. Si vous utilisez `thresholds` par erreur comme nom pour la propriété de l'objet `options`, le tableau porté par `thresholds` va se retrouver égal à `[0.0]`, ce qui n'est probablement pas ce à quoi vous vous attendiez. Le déboguage n'en sera que plus chaotique.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
