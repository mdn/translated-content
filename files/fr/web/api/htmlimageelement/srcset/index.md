---
title: "HTMLImageElement : propriété srcset"
short-title: srcset
slug: Web/API/HTMLImageElement/srcset
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("HTML DOM")}}

La propriété **`srcset`** de l'interface {{domxref("HTMLImageElement")}} est une chaîne de caractères qui identifie une ou plusieurs **chaînes candidates d'image**, séparées par des virgules (`,`), chacune désignant des ressources d'image à utiliser selon les circonstances.

Chaque chaîne candidate d'image contient une URL d'image et un descripteur optionnel de largeur ou de densité de pixels, qui indique dans quelles conditions cette candidate remplace l'image définie par la propriété {{domxref("HTMLImageElement.src", "src")}}.

La propriété `srcset`, avec {{domxref("HTMLImageElement.sizes", "sizes")}}, est un élément clé pour concevoir des sites web adaptatifs, car elles permettent d'utiliser des images appropriées selon la situation d'affichage.

> [!NOTE]
> Si l'attribut [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset) utilise des descripteurs de largeur, l'attribut `sizes` doit aussi être présent, sinon `srcset` sera ignoré.

## Valeur

Une chaîne de caractères contenant une liste, séparée par des virgules, d'une ou plusieurs chaînes candidates d'image à utiliser pour déterminer quelle ressource afficher dans l'élément {{HTMLElement("img")}} représenté par `HTMLImageElement`.

Chaque chaîne candidate d'image commence par une URL valide pointant vers une ressource graphique non interactive. Elle est suivie d'un espace, puis d'un descripteur de condition qui indique dans quelles circonstances l'image doit être utilisée. Les espaces, à l'exception de celui séparant l'URL et le descripteur, sont ignorés (avant/après chaque virgule, en début ou fin de chaîne de caractères).

Le descripteur de condition peut prendre deux formes&nbsp;:

- Pour indiquer que la ressource doit être utilisée lorsque l'image est affichée à une largeur précise en pixels, fournissez un **descripteur de largeur** composé du nombre de pixels suivi de la lettre minuscule «&nbsp;w&nbsp;». Par exemple, pour une image de 450 pixels de large, utilisez `450w`. La largeur doit être un entier positif non nul et _doit_ correspondre à la largeur intrinsèque de l'image référencée. Si un `srcset` contient des descripteurs «&nbsp;w&nbsp;», le navigateur les utilise avec l'attribut {{domxref("HTMLImageElement.sizes", "sizes")}} pour choisir la ressource.
- Vous pouvez aussi utiliser un **descripteur de densité de pixels**, qui précise la densité d'affichage à laquelle la ressource doit être utilisée. Il s'écrit avec la valeur de densité (flottant positif non nul) suivie de la lettre minuscule «&nbsp;x&nbsp;». Par exemple, pour une densité double, utilisez `2x` ou `2.0x`.

Si le descripteur de condition n'est pas fourni (la chaîne candidate ne contient qu'une URL), la chaîne candidate reçoit par défaut le descripteur «&nbsp;1x&nbsp; ».

```plain
"images/team-photo.jpg, images/team-photo-retina.jpg 2x"
```

Cette chaîne de caractères fournit des versions d'une image à utiliser pour la densité standard (non décrite, donc `1x` par défaut) et pour une densité double (`2x`).

Quand un élément image a un `srcset` avec des descripteurs «&nbsp;x&nbsp;», les navigateurs considèrent aussi l'URL de l'attribut {{domxref("HTMLImageElement.src", "src")}} (si présent) comme candidate, avec le descripteur `1x` par défaut.

```plain
"header640.png 640w, header960.png 960w, header1024.png 1024w"
```

Cette chaîne de caractères fournit des versions d'une image d'en-tête à utiliser lorsque le moteur d'affichage de l'{{Glossary("user agent", "agent utilisateur")}} a besoin d'une image de 640px, 960px ou 1024px de large.

Remarque&nbsp;: si une ressource d'un `srcset` utilise un descripteur «&nbsp;w&nbsp;», toutes les ressources du `srcset` doivent aussi utiliser «&nbsp;w&nbsp;», et l'attribut {{domxref("HTMLImageElement.src", "src")}} n'est pas considéré comme candidate.

## Exemples

### HTML

Le HTML ci-dessous indique que la ressource d'image par défaut, contenue dans l'attribut {{domxref("HTMLImageElement.src", "src")}}, doit être utilisée pour les écrans 1x, et qu'une version 400 pixels (dans `srcset`, avec le descripteur `2x`) doit être utilisée pour les écrans 2x.

```html
<div class="box">
  <img
    src="/fr/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png"
    alt="Clock"
    srcset="/fr/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png 2x" />
</div>
```

### CSS

Le CSS ci-dessous définit l'image et son conteneur à 200 pixels de côté, avec une bordure. La propriété {{cssxref("word-break")}} avec la valeur `break-all` force le retour à la ligne dans la largeur disponible.

```css
.box {
  width: 200px;
  border: 2px solid rgb(150 150 150);
  padding: 0.5em;
  word-break: break-all;
}

.box img {
  width: 200px;
}
```

### JavaScript

Le code suivant utilise la propriété {{domxref("HTMLImageElement.currentSrc", "currentSrc")}} de l'image pour obtenir et afficher l'URL sélectionnée par le navigateur à partir de `srcset`.

```js
const box = document.querySelector(".box");
const image = box.querySelector("img");

const newElem = document.createElement("p");
newElem.textContent = "Image : ";
newElem.appendChild(document.createElement("code")).textContent =
  image.currentSrc;
box.appendChild(newElem);
```

### Résultat

Dans l'exemple ci-dessous, l'URL sélectionnée dépend de la densité de votre écran (1x ou 2x). Si vous avez un écran standard et un écran haute densité, essayez de déplacer la fenêtre entre les deux et de recharger la page pour voir le changement.

{{EmbedLiveSample("Examples", 640, 320)}}

Pour d'autres exemples, voir le guide [Images réactives](/fr/docs/Web/HTML/Guides/Responsive_images).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Images HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Images réactives](/fr/docs/Web/HTML/Guides/Responsive_images)
- [Guide des types et formats d'images](/fr/docs/Web/Media/Guides/Formats/Image_types)
