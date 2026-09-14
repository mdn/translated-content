---
title: "HTMLImageElement : propriété x"
short-title: x
slug: Web/API/HTMLImageElement/x
l10n:
  sourceCommit: 384b4f1e0490f2f91f154a9ca977da78e0cc63a9
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`x`** de l'interface {{DOMxRef("HTMLImageElement")}} indique la coordonnée x du bord gauche de l'élément HTML {{HTMLElement("img")}} par rapport à l'origine de l'élément racine.

## Valeur

Un entier indiquant la distance en pixels entre le bord gauche de l'élément racine le plus proche au bord gauche de la boîte de bordure de l'élément {{HTMLElement("img")}}. L'élément racine le plus proche est l'élément {{HTMLElement("html")}} le plus à l'extérieur qui contient l'image. Si l'image est dans un élément HTML {{HTMLElement("iframe")}}, sa valeur `x` est relative à ce cadre.

Dans le schéma ci-dessous, le bord gauche correspond au bord gauche de la zone de remplissage bleue. La valeur retournée par `x` est donc la distance entre ce point et le bord gauche de la zone de contenu.

![Schéma montrant les relations entre les différentes boîtes associées à un élément](boxmodel-3.png)

## Exemples

L'exemple ci-dessous montre l'utilisation des propriétés `x` et {{DOMxRef("HTMLImageElement.y", "y")}} de `HTMLImageElement`.

### HTML

```html
<img id="avatar" src="/shared-assets/images/examples/grapefruit-slice.jpg" />
<pre id="journal"></pre>
```

### JavaScript

Le code JavaScript ci-dessous récupère l'image et affiche ses valeurs `x` et `y`.

```js
const boiteJournal = document.querySelector("pre");

const journaliser = (msg) => {
  boiteJournal.innerText += `${msg}\n`;
};

const image = document.getElementById("avatar");

journaliser(`X global de l'image : ${image.x}`);
journaliser(`Y global de l'image : ${image.y}`);
```

Enfin, on affiche les valeurs des propriétés `x` et `y` de l'objet `HTMLImageElement`.

### CSS

Le CSS qui définit la taille de l'image et sa position&nbsp;:

```css
img {
  margin-left: 30px;
  margin-top: 20px;
  max-width: 4em;
}
```

### Résultat

L'image résultante ressemble à ceci&nbsp;:

{{EmbedLiveSample("Exemples", 600, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLImageElement.y")}}
