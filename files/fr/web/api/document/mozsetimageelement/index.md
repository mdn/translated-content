---
title: "Document : méthode mozSetImageElement()"
short-title: mozSetImageElement()
slug: Web/API/Document/mozSetImageElement
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}{{Non-standard_Header}}

La méthode **`mozSetImageElement()`** de l'interface {{DOMxRef("Document")}} change l'élément utilisé comme arrière-plan CSS pour un arrière-plan avec un ID d'élément d'arrière-plan donné.

## Syntaxe

```js-nolint
mozSetImageElement(imageElementId, imageElement)
```

### Paramètres

- `imageElementId`
  - : Une chaîne de caractères indiquant le nom d'un élément qui a été défini comme une image d'arrière-plan en utilisant la fonction CSS {{CSSxRef("element", "-moz-element()")}}.
- `imageElement`
  - : Le nouvel élément à utiliser comme arrière-plan correspondant à cette chaîne d'élément image. Définissez `null` pour supprimer l'élément d'arrière-plan.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Cet exemple change l'arrière-plan d'un bloc {{HTMLElement("div")}} chaque fois que l'utilisateur·ice clique sur le bloc.

[Voir l'exemple en direct <sup>(angl.)</sup>](https://mdn.dev/archives/media/samples/domref/mozSetImageElement.html).

```css
#ma-boite {
  background-image: -moz-element(#canvas-bg);
  text-align: center;
  width: 400px;
  height: 400px;
  cursor: pointer;
}
```

Le CSS défini ci-dessus est utilisé par notre {{HTMLElement("div")}} pour utiliser un élément avec l'identifiant `"canvas-bg"` comme arrière-plan.

```js
let c = 0x00;
function clicked() {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("width", 100);
  canvas.setAttribute("height", 100);

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = `#${c.toString(16)}0000`;
  ctx.fillRect(25, 25, 75, 75);

  c += 0x11;
  if (c > 0xff) {
    c = 0x00;
  }

  document.mozSetImageElement("canvas-bg", canvas);
}
```

Le code ici est appelé chaque fois que l'utilisateur·ice clique sur l'élément HTML {{HTMLElement("div")}}.
Il crée un nouveau {{HTMLElement("canvas")}} avec la largeur et la hauteur définies à 100 pixels, puis dessine un carré de 50 par 50 pixels à l'intérieur. Chaque fois que la fonction est appelée, le carré est d'une couleur différente (sa composante rouge est augmentée à chaque fois), donc chaque fois que l'utilisateur·ice clique sur l'élément, l'arrière-plan est rempli d'un motif de tuiles rouges de plus en plus lumineux.

Une fois le canevas dessiné, `document.mozSetImageElement()` est appelé pour définir l'arrière-plan pour tout CSS utilisant l'ID `"canvas-bg"` comme identifiant d'élément d'arrière-plan pour être notre nouveau canevas.

## Spécifications

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction CSS {{CSSxRef("element", "-moz-element()")}}
