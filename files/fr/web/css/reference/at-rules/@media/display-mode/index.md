---
title: display-mode
slug: Web/CSS/Reference/At-rules/@media/display-mode
original_slug: Web/CSS/@media/display-mode
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`display-mode`** permet de tester si une application web est affichée dans un onglet de navigateur classique ou d'une autre manière, comme une application autonome ou en mode plein écran.

Par exemple&nbsp;:

- Une [application web progressive](/fr/docs/Web/Progressive_web_apps) [peut définir son mode d'affichage](/fr/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) en définissant la propriété [`display`](/fr/docs/Web/Progressive_web_apps/Manifest/Reference/display) dans son manifeste. Dans ce cas, la valeur de `display-mode` identifie la valeur définie (mais il faut noter que cela peut différer de la valeur demandée dans le manifeste, car le navigateur peut ne pas prendre en charge le mode demandé).

- Toute application web peut utiliser l'[API Fullscreen](/fr/docs/Web/API/Fullscreen_API) ou l'[API Document <i lang="en">Picture-in-Picture</i>](/fr/docs/Web/API/Document_Picture-in-Picture_API) pour définir le mode d'affichage, et dans ce cas la valeur de `display-mode` identifie le mode défini.

La valeur de `display-mode` s'applique au contexte de navigation de plus haut niveau ainsi qu'à tous les contextes enfants.

## Syntaxe

La caractéristique `display-mode` se définit à l'aide d'une valeur-mot-clé choisie parmi la liste suivante&nbsp;:

- `browser`
  - : L'application s'ouvre dans un onglet de navigateur classique ou une nouvelle fenêtre, selon le navigateur et la plateforme.
- `fullscreen`
  - : Toute la surface d'affichage disponible est utilisée et aucun {{glossary("chrome", "aspect visible")}} de l'agent utilisateur n'est affichée. Cela permet d'appliquer du CSS uniquement lorsque l'application est en mode plein écran via l'[API Fullscreen](/fr/docs/Web/API/Fullscreen_API) ou en utilisant la valeur `fullscreen` de la propriété [`display`](/fr/docs/Web/Progressive_web_apps/Manifest/Reference/display) du manifeste de l'application web.
- `minimal-ui`
  - : L'application ressemble à une application autonome, mais dispose d'un ensemble minimal d'éléments d'interface pour la navigation. Les éléments varient selon le navigateur.
- `picture-in-picture`
  - : Ce mode permet à l'utilisateur·ice de continuer à consommer un contenu spécifique tout en interagissant avec d'autres sites ou applications sur son appareil. L'application est affichée dans une fenêtre flottante toujours au premier plan. Cela permet d'appliquer du CSS uniquement lorsque l'application est en mode <i lang="en">Picture-in-Picture</i> via l'[API Document <i lang="en">Picture-in-Picture</i>](/fr/docs/Web/API/Document_Picture-in-Picture_API).
- `standalone`
  - : L'application ressemble à une application autonome. Cela peut inclure une fenêtre différente, sa propre icône dans le lanceur d'applications, etc. Dans ce mode, l'agent utilisateur exclut les éléments d'interface pour la navigation, mais peut inclure d'autres éléments comme une barre d'état.
- `window-controls-overlay`
  - : Dans ce mode, l'application ressemble à une application de bureau autonome et la fonctionnalité [de superposition des commandes de fenêtre](/fr/docs/Web/API/Window_Controls_Overlay_API) est activée.

## Exemples

### Appliquer du CSS si l'application est en mode plein écran

```css
@media (display-mode: fullscreen) {
  body {
    margin: 0;
    border: 5px solid black;
  }
}
```

### Fournir un thème clair et sombre au contenu Picture-in-Picture

Dans cet exemple, on combine la valeur `display-mode: picture-in-picture` avec la caractéristique média {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} pour créer des thèmes clair et sombre appliqués selon la préférence de l'utilisateur·ice, uniquement lorsque l'application est affichée en mode image dans l'image (<i lang="en">Picture-in-Picture</i> en anglais).

```css
@media (display-mode: picture-in-picture) and (prefers-color-scheme: light) {
  body {
    background: antiquewhite;
  }
}

@media (display-mode: picture-in-picture) and (prefers-color-scheme: dark) {
  body {
    background: #333333;
  }

  a {
    color: antiquewhite;
  }
}
```

Voir [Utiliser l'API Document Picture-in-Picture](/fr/docs/Web/API/Document_Picture-in-Picture_API/Using) pour plus d'informations et un exemple complet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@media")}}
