---
title: "HTMLImageElement : propriété crossOrigin"
short-title: crossOrigin
slug: Web/API/HTMLImageElement/crossOrigin
l10n:
  sourceCommit: 0145c6497d2f2206dca1326593fe308f7b771a08
---

{{APIRef("HTML DOM")}}

L'attribut **`crossOrigin`** de l'interface {{domxref("HTMLImageElement")}} est une chaîne de caractères qui définit le paramètre de partage des ressources entre origines multiples ({{Glossary("CORS", "Cross-Origin Resource Sharing")}}) à utiliser lors de la récupération de l'image.

## Valeur

Une chaîne de caractères contenant un mot-clé qui précise le mode CORS à utiliser lors de la récupération de la ressource image. Si vous ne spécifiez pas `crossOrigin`, l'image est récupérée sans CORS (mode `no-cors` de fetch).

Les valeurs autorisées sont&nbsp;:

- `anonymous`
  - : Les requêtes de l'élément HTML {{HTMLElement("img")}} ont leur {{domxref("Request.mode", "mode")}} défini à `cors` et leur mode {{domxref("Request.credentials", "credentials")}} à `same-origin`. Cela signifie que CORS est activé et que les identifiants sont envoyés _uniquement si_ l'image est récupérée depuis la même origine que le document.
- `use-credentials`
  - : Les requêtes de l'interface {{domxref("HTMLImageElement")}} utiliseront le mode `cors` et le mode d'identifiants `include`&nbsp;: toutes les requêtes d'image de l'élément utiliseront CORS, quel que soit le domaine d'origine.

Si `crossOrigin` est une chaîne vide (`""`), le mode `anonymous` est sélectionné.

## Exemples

Dans cet exemple, un nouvel élément {{HTMLElement("img")}} est créé et ajouté au document, l'image étant chargée avec l'état «&nbsp;Anonymous&nbsp;»&nbsp;: l'image sera chargée en utilisant CORS et les identifiants seront utilisés pour tous les chargements inter-origines.

### JavaScript

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

### HTML

```html
<div class="container">
  <p>
    Voici un paragraphe. C'est un paragraphe très intéressant. Ce paragraphe
    vous captive. Continuez à lire ce paragraphe. Voilà, vous pouvez arrêter de
    lire ce paragraphe. Merci de m'avoir lu.
  </p>
</div>
```

### CSS

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

### Résultat

{{EmbedLiveSample("exemples", 600, 260)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("HTMLLinkElement.crossOrigin")}}
- {{domxref("HTMLMediaElement.crossOrigin")}}
- {{domxref("HTMLScriptElement.crossOrigin")}}
