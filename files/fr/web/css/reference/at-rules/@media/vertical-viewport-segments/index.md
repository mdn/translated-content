---
title: vertical-viewport-segments
slug: Web/CSS/Reference/At-rules/@media/vertical-viewport-segments
original_slug: Web/CSS/@media/vertical-viewport-segments
l10n:
  sourceCommit: ee348fc4da928b445f95660fae094269604b1b9c
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`vertical-viewport-segments`** permet de détecter si l'appareil possède un nombre spécifié de segments de zone d'affichage (<i lang="en">viewport</i>) disposés verticalement (de haut en bas).

En lien avec l'[API Viewport Segments](/fr/docs/Web/API/Viewport_segments_API), la caractéristique `vertical-viewport-segments` permet de créer des conceptions réactives adaptées aux appareils multi-vues&nbsp;: des appareils dont l'écran est divisé en segments de zone d'affichage logiquement séparés, comme les appareils pliables ou à charnière.

## Syntaxe

La caractéristique `vertical-viewport-segments` s'exprime comme une valeur {{cssxref("integer", "entier")}} supérieure ou égale à `1`, représentant le nombre de segments verticaux de la zone d'affichage de l'appareil.

- La valeur sera `1` pour&nbsp;:
  - Un appareil non pliable (par exemple, un smartphone ou une tablette à écran unique standard).
  - Un appareil pliable qui est soit déplié, soit fermé (en [posture d'appareil `continuous`](/fr/docs/Web/API/Device_Posture_API#continuous)).
  - Un appareil à deux écrans à charnière ou un appareil pliable actuellement plié et orienté horizontalement, de sorte que les segments soient côte à côte.
- La valeur sera `2` pour un appareil à deux écrans à charnière ou un appareil pliable actuellement plié (en [posture d'appareil `folded`](/fr/docs/Web/API/Device_Posture_API#folded)) et orienté verticalement, de sorte que les segments soient l'un au-dessus de l'autre.
- La valeur peut être supérieure à `2` pour les appareils pliables comportant plus d'un pli.

## Exemples

### Utilisation basique de `vertical-viewport-segments`

Dans cet extrait, on utilise une requête média `vertical-viewport-segments` pour gérer le cas des appareils pliables où les segments sont disposés de haut en bas.

On définit la hauteur du conteneur supérieur égale à la hauteur du segment supérieur (`env(viewport-segment-height 0 0)`), et celle du conteneur inférieur égale à la hauteur du segment inférieur (`env(viewport-segment-height 0 1)`).

Pour calculer la hauteur occupée par le pli entre les deux, on soustrait la position du bas du conteneur supérieur à la position du haut du conteneur inférieur (`calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));`).

```css
.wrapper {
  height: 100%;
  display: flex;
}

@media (vertical-viewport-segments: 2) {
  .wrapper {
    flex-direction: column;
  }

  .list-view {
    height: env(viewport-segment-height 0 0);
  }

  .fold {
    width: 100%;
    height: calc(
      env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0)
    );
    background-color: black;
  }

  .detail-view {
    height: env(viewport-segment-height 0 1);
  }
}
```

Consultez notre [démo de l'API Viewport Segments <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/viewport-segments-api/) pour un exemple complet ([code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Vous pouvez aussi lire [Utiliser l'API Viewport Segments](/fr/docs/Web/API/Viewport_segments_API/Using) pour une explication détaillée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}
- L'[API Viewport Segments](/fr/docs/Web/API/Viewport_segments_API)
- [Expérimentation origin pour les API Foldable <sup>(angl.)</sup>](https://developer.chrome.com/blog/foldable-apis-ot) sur developer.chrome.com
