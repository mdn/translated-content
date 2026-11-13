---
title: "Window : méthode requestResize()"
short-title: requestResize()
slug: Web/API/Window/requestResize
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef}}{{SeeCompatTable}}

La méthode **`requestResize()`** de l'interface {{DOMxRef("Window")}} met à jour les informations de taille partagées par un document intégré avec son parent d'intégration, mais uniquement si le document intégré a choisi de partager ses informations de taille par le biais de la balise méta [`<meta name="responsive-embedded-sizing">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing).

## Syntaxe

```js-nolint
requestResize()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `NotAllowedError` {{DOMxRef("DOMException")}}
  - : Levée si&nbsp;:
    - La méthode `requestResize()` a été appelée depuis un document de premier niveau (non intégré).
    - L'élément d'intégration n'est pas un {{HTMLElement("iframe")}}.
    - Le document intégré n'a pas choisi de partager sa taille de mise en page en incluant une balise [`<meta name="responsive-embedded-sizing">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing).

> [!NOTE]
> Si le document parent ne définit pas la propriété CSS {{CSSxRef("frame-sizing")}} sur un `<iframe>` d'intégration, aucune exception n'est levée, mais un `<iframe>` n'est pas redimensionné.

## Description

Pour des raisons de sécurité et de confidentialité, les éléments HTML {{HTMLElement("iframe")}} n'exposent pas par défaut au document parent des informations sur la taille du contenu du document qu'ils intègrent.

Pour permettre le redimensionnement réactif des éléments `<iframe>` en fonction de leur contenu, la balise [`<meta name="responsive-embedded-sizing">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) peut être incluse dans un document intégré pour qu'il choisisse de partager ses informations de taille avec le document parent. La propriété CSS {{CSSxRef("frame-sizing")}} peut ensuite être définie sur le `<iframe>` pour qu'il adopte la même taille horizontale ou verticale que la taille de mise en page réelle du document intégré (appelée **taille intrinsèque de mise en page interne** dans la spécification). Cela garantit que le contenu du document s'intègre parfaitement dans son `<iframe>` d'intégration, évitant ainsi les barres de défilement inutiles.

La taille de mise en page du document intégré est automatiquement signalée une fois lorsque son évènement {{DOMxRef("Document.DOMContentLoaded_event", "DOMContentLoaded")}} se déclenche, et à nouveau lorsque l'évènement {{DOMxRef("Window.load_event", "load")}} de l'objet {{DOMxRef("Window")}} se déclenche.

Dans d'autres circonstances, vous pouvez appeler la méthode `requestResize()` depuis le document intégré pour qu'il signale une taille de mise en page mise à jour&nbsp;; cela se fait généralement depuis le gestionnaire d'évènement qui a provoqué le changement de taille du contenu intégré. Si un `<iframe>` est dimensionné en utilisant `frame-sizing`, il met alors automatiquement à jour sa taille afin de contenir correctement le contenu intégré.

## Exemples

### Utiliser `requestResize()`

Cet exemple montre comment la méthode `requestResize()` peut être utilisée pour redimensionner automatiquement un `<iframe>` lorsque la taille de mise en page du contenu de son document intégré change.

Nous avons deux documents, le document principal `index.html` et le document intégré `frame.html`.

#### Le document principal `index.html`

Le HTML du document `index.html` contient un en-tête et un `<iframe>`, dans lequel est intégré le document `frame.html`&nbsp;:

```html
<h1>Cadres intégrés réactifs — exemple simple</h1>

<iframe src="frame.html"></iframe>
```

Dans le CSS de `index.html`, nous donnons au `<iframe>` une valeur `frame-sizing` de `content-block-size`. Comme le `<iframe>` a un `writing-mode` horizontal, sa `height` est définie sur la hauteur de mise en page du document intégré.

```css
iframe {
  frame-sizing: content-block-size;
  border: 2px solid gray;
}
```

#### Le document intégré `frame.html`

Le document `frame.html` contient un élément {{HTMLElement("div")}} avec un attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) ayant la valeur `0` afin qu'il puisse recevoir la sélection. Il contient un en-tête et quelques paragraphes. Le document inclut également la balise `<meta name="responsive-embedded-sizing" />`, qui permet de partager la taille de mise en page de son contenu avec le document parent. Enfin, nous incluons un élément {{HTMLElement("script")}} contenant du JavaScript pour contrôler la démonstration.

```html
<head>
  <!-- … -->

  <meta name="responsive-embedded-sizing" />

  <!-- … -->
</head>
<body>
  <div tabindex="0">
    <h1>Ceci est mon cadre</h1>
    <p>Voici le contenu de mon cadre.</p>
    <p>Voici encore un peu de contenu.</p>
  </div>
  <script>
    /* … */
  </script>
</body>
```

Le script à l'intérieur de `frame.html` commence par récupérer une référence à l'élément `<div>`. Il définit ensuite des écouteurs d'évènements `click` et `keydown` sur le `<div>`, qui exécutent tous deux une fonction personnalisée appelée `ajouterParagraphe()` lorsque l'évènement se déclenche.

```js
const divElem = document.querySelector("div");
divElem.addEventListener("click", ajouterParagraphe);
window.addEventListener("keydown", ajouterParagraphe);
```

La fonction `ajouterParagraphe()` génère un nouvel élément de paragraphe et l'ajoute à la fin du `<div>` en tant qu'enfant, augmentant ainsi sa hauteur. Elle appelle ensuite `requestResize()` afin que la nouvelle taille soit signalée au document parent.

```js
function ajouterParagraphe() {
  const para = document.createElement("p");
  para.textContent = "Nouveau contenu.";
  divElem.appendChild(para);
  window.requestResize();
}
```

#### Résultat

Ouvrez notre [démonstration de `requestResize()` <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/responsive-iframe-sizing/js-request-resize/) dans un onglet séparé pour la voir en action ([voir le code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/responsive-iframe-sizing/js-request-resize)).

Même si aucune hauteur (`height`) explicite n'a été définie sur un `<iframe>`, celui-ci est dimensionné à la bonne hauteur pour contenir exactement son document intégré, sans barres de défilement. Essayez de cliquer sur le contenu ou de le mettre au point et d'appuyer sur une touche du clavier. Lorsqu'un nouveau paragraphe est ajouté au `<div>`, le `<div>` augmente en hauteur, mais un `<iframe>` augmente également en hauteur pour correspondre.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{CSSxRef("frame-sizing")}}
- Le module [de dimensionnement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_sizing)
- L'élément HTML [`<meta name="responsive-embedded-sizing">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing)
