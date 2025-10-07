---
title: "HTMLImageElement : propriété naturalHeight"
short-title: naturalHeight
slug: Web/API/HTMLImageElement/naturalHeight
l10n:
  sourceCommit: f4372ac9926fc2a1cbe408dae02b381b7f1909da
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`naturalHeight`** de l'interface {{domxref("HTMLImageElement")}} retourne la hauteur intrinsèque (naturelle), corrigée de la densité, de l'image en {{Glossary("CSS pixel", "pixels CSS")}}.

Il s'agit de la hauteur de l'image lorsqu'aucune contrainte n'est appliquée&nbsp;: si vous ne spécifiez pas de hauteur pour l'image, ou si l'image est placée dans un conteneur qui limite ou définit explicitement la hauteur, elle sera affichée à cette hauteur naturelle.

> [!NOTE]
> La plupart du temps, la hauteur naturelle correspond à la hauteur réelle de l'image envoyée par le serveur.
> Cependant, les navigateurs peuvent modifier une image avant de l'afficher. Par exemple, Chrome [réduit la résolution des images sur les appareils d'entrée de gamme <sup>(angl.)</sup>](https://crbug.com/1187043#c7). Dans ce cas, `naturalHeight` considère la hauteur de l'image modifiée par ce type d'intervention du navigateur comme la hauteur naturelle, et retourne cette valeur.

## Valeur

Un entier indiquant la hauteur intrinsèque, en pixels CSS, de l'image. Il s'agit de la hauteur à laquelle l'image est affichée naturellement lorsqu'aucune contrainte ou valeur spécifique n'est définie pour l'image. Cette hauteur naturelle est corrigée en fonction de la densité de pixels de l'appareil sur lequel elle est affichée, contrairement à {{domxref("HTMLImageElement.height", "height")}}.

Si la hauteur intrinsèque n'est pas disponible — soit parce que l'image ne la spécifie pas, soit parce que les données de l'image ne sont pas accessibles pour obtenir cette information — `naturalHeight` retourne 0.

## Exemples

Cet exemple affiche à la fois la taille naturelle, corrigée de la densité, d'une image ainsi que sa taille rendue, modifiée par le CSS de la page et d'autres facteurs.

### HTML

```html
<div class="box">
  <img
    src="/en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png"
    class="image"
    alt="Une horloge murale ronde avec un cadran blanc et des chiffres noirs" />
</div>
<pre></pre>
```

Le HTML présente une image de 400×398 pixels placée dans un élément {{HTMLElement("div")}}.

### CSS

```css
.box {
  width: 200px;
  height: 200px;
}

.image {
  width: 100%;
}
```

Le point principal à noter dans le CSS ci-dessus est que le conteneur dans lequel l'image est dessinée fait 200px de large, et l'image est étirée pour remplir toute la largeur (100%).

### JavaScript

```js
const output = document.querySelector("pre");
const image = document.querySelector("img");

image.addEventListener("load", (event) => {
  const { naturalWidth, naturalHeight, width, height } = image;
  output.textContent = `\nTaille naturelle : ${naturalWidth} x ${naturalHeight} pixels\nTaille affichée : ${width} x ${height} pixels\n`;
});
```

Le code JavaScript affiche les tailles naturelle et affichée dans l'élément {{HTMLElement("pre")}}. Cela se fait en réponse à l'événement {{domxref("HTMLElement.load_event", "load")}} de l'image, afin de s'assurer que l'image est disponible avant d'examiner sa largeur et sa hauteur.

### Résultat

{{EmbedLiveSample("exemples", 600, 280)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
