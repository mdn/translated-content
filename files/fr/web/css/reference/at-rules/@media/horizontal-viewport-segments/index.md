---
title: horizontal-viewport-segments
slug: Web/CSS/Reference/At-rules/@media/horizontal-viewport-segments
original_slug: Web/CSS/@media/horizontal-viewport-segments
l10n:
  sourceCommit: ee348fc4da928b445f95660fae094269604b1b9c
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`horizontal-viewport-segments`** permet de détecter si l'appareil possède un nombre spécifié de segments de zone d'affichage disposés horizontalement (côte à côte).

En lien avec l'[API Viewport Segments](/fr/docs/Web/API/Viewport_segments_API), la caractéristique `vertical-viewport-segments` permet de créer des conceptions adaptatives qui fonctionnent bien sur les appareils à multiples zones d'affichage — des appareils dont l'écran est divisé en segments logiquement séparés, comme les appareils pliables ou à charnière.

## Syntaxe

La caractéristique `horizontal-viewport-segments` se définit comme une valeur {{cssxref("integer", "entière")}} de `1` ou plus, représentant le nombre de segments horizontaux de la zone d'affichage de l'appareil.

- La valeur sera `1` pour&nbsp;:
  - Un appareil non pliable (par exemple, un smartphone ou une tablette à écran unique classique)
  - Un appareil pliable, déplié ou fermé (en [posture de l'appareil `continuous`](/fr/docs/Web/API/Device_Posture_API#continuous)).
  - Un appareil à deux écrans à charnière ou un appareil pliable actuellement plié et orienté verticalement, avec les segments l'un au-dessus de l'autre.
- La valeur sera `2` pour un appareil à deux écrans à charnière ou un appareil pliable actuellement plié (en [posture de l'appareil `folded`](/fr/docs/Web/API/Device_Posture_API#folded)) et orienté horizontalement, avec les segments côte à côte.
- La valeur peut être supérieure à `2` pour les appareils pliables comportant plus d'un pli.

## Exemples

### Utilisation basique de `horizontal-viewport-segments`

Dans cet extrait, on utilise une requête média `horizontal-viewport-segments` pour gérer le cas des appareils pliables où les segments sont côte à côte.

On définit la largeur du conteneur de gauche comme étant égale à la largeur du segment gauche (`env(viewport-segment-width 0 0)`), et celle du conteneur de droite comme étant égale à la largeur du segment droit (`env(viewport-segment-width 1 0)`).

Pour calculer la largeur occupée par le pli entre les deux, on soustrait le décalage du bord gauche du conteneur de droite à celui du bord droit du conteneur de gauche (`calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));`).

```css
.wrapper {
  height: 100%;
  display: flex;
}

@media (horizontal-viewport-segments: 2) {
  .wrapper {
    flex-direction: row;
  }

  .list-view {
    width: env(viewport-segment-width 0 0);
  }

  .fold {
    width: calc(
      env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0)
    );
    background-color: black;
    height: 100%;
  }

  .detail-view {
    width: env(viewport-segment-width 1 0);
  }
}
```

Consultez notre [démo de l'API Viewport Segments <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/viewport-segments-api/) pour une démonstration complète ([code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Vous pouvez aussi lire [Utiliser l'API Viewport Segments](/fr/docs/Web/API/Viewport_segments_API/Using) pour une explication détaillée de la démo.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} (caractéristique `@media`)
- L'[API Viewport Segments](/fr/docs/Web/API/Viewport_segments_API)
- [Expérimentation des API Foldable <sup>(angl.)</sup>](https://developer.chrome.com/blog/foldable-apis-ot) sur developer.chrome.com (2024)
