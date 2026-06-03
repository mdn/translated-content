---
title: "HTMLImageElement : propriété crossOrigin"
short-title: crossOrigin
slug: Web/API/HTMLImageElement/crossOrigin
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

La propriété **`crossOrigin`** de l'interface {{DOMxRef("HTMLImageElement")}} est une chaîne de caractères qui spécifie le paramètre Cross-Origin Resource Sharing ({{Glossary("CORS")}}) à utiliser lors de la récupération de l'image. Elle reflète l'attribut de contenu [`crossorigin`](/fr/docs/Web/HTML/Reference/Elements/img#crossorigin) de l'élément HTML `<img>`.

## Valeur

Une chaîne de caractères dont la valeur est soit `anonymous`, soit `use-credentials`. Pour leur signification, voir la référence de l'attribut HTML [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin).

## Exemples

### Définir l'attribut `crossorigin`

Dans cet exemple, un nouvel élément {{HTMLElement("img")}} est créé et ajouté au document, l'image étant chargée avec l'état «&nbsp;Anonymous&nbsp;»&nbsp;: l'image sera chargée en utilisant CORS et les identifiants seront utilisés pour tous les chargements inter-origines.

#### JavaScript

Le code ci-dessous montre comment définir la propriété `crossOrigin` sur un élément `<img>` pour configurer l'accès CORS lors de la récupération d'une image nouvellement créée.

```js
const container = document.querySelector(".container");

function loadImage(url) {
  const image = new Image(200, 200);
  image.addEventListener("load", () => container.prepend(image));

  image.addEventListener("error", () => {
    const errMsg = document.createElement("output");
    errMsg.value = `Error loading image at ${url}`;
    container.append(errMsg);
  });

  image.crossOrigin = "anonymous";
  image.alt = "";
  image.src = url;
}

loadImage("clock-demo-400px.png");
```

#### HTML

```html
<div class="container">
  <p>
    Voici un paragraphe. C'est un paragraphe très intéressant. Ce paragraphe
    vous captive. Continuez à lire ce paragraphe. Voilà, vous pouvez arrêter de
    lire ce paragraphe. Merci de m'avoir lu.
  </p>
</div>
```

#### CSS

```css
body {
  font:
    1.125rem/1.5 Helvetica,
    sans-serif;
}

.container {
  display: flow-root;
  width: 37.5em;
  border: 1px solid #d2d2d2;
}

img {
  float: left;
  padding-right: 1.5em;
}

output {
  background: rgb(100 100 100 / 100%);
  font-family: Courier, monospace;
  width: 95%;
}
```

#### Résultat

{{EmbedLiveSample("Définir l'attribut `crossorigin`", 600, 260)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLLinkElement.crossOrigin")}}
- La propriété {{DOMxRef("HTMLMediaElement.crossOrigin")}}
- La propriété {{DOMxRef("HTMLScriptElement.crossOrigin")}}
