---
title: "HTMLImageElement : propriété decoding"
short-title: decoding
slug: Web/API/HTMLImageElement/decoding
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

La propriété **`decoding`** de l'interface {{DOMxRef("HTMLImageElement")}} fournit une indication au navigateur sur la façon dont il doit décoder l'image. Plus précisément, s'il doit attendre que l'image soit décodée avant de présenter d'autres mises à jour de contenu ou non. Elle reflète l'attribut de contenu [`decoding`](/fr/docs/Web/HTML/Reference/Elements/img#decoding) de l'élément HTML `<img>`.

## Valeur

Une chaîne de caractères dont la valeur est `sync`, `async`, ou `auto`. Pour leur signification, voir la référence HTML [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img#decoding).

## Exemples

Dans l'exemple ci-dessous, vous obtiendrez probablement une image vide affichée sur la page pendant le téléchargement de l'image. Définir `decoding` ne l'empêchera pas.

```js
const img = new Image();
img.decoding = "sync";
img.src = "img/logo.png";
document.body.appendChild(img);
```

Insérer une image après le téléchargement peut rendre la propriété `decoding` plus pertinente&nbsp;:

```js
async function loadImage(url, elem) {
  return new Promise((resolve, reject) => {
    elem.onload = () => resolve(elem);
    elem.onerror = reject;
    elem.src = url;
  });
}

const img = new Image();
await loadImage("img/logo.png", img);
// L'utilisation de `sync` permet de s'assurer que les autres contenus ne sont mis à jour qu'avec l'image
img.decoding = "sync";
document.body.appendChild(img);
const p = document.createElement("p");
p.textContent = "L'image est complètement chargée !";
document.body.appendChild(p);
```

Une meilleure solution consiste cependant à utiliser la méthode {{DOMxRef("HTMLImageElement.decode()")}} pour résoudre ce problème. Elle permet de décoder une image de façon asynchrone, en retardant son insertion dans le DOM jusqu'à ce qu'elle soit entièrement téléchargée et décodée, évitant ainsi le problème d'image vide mentionné ci-dessus. Ceci est particulièrement utile si vous remplacez dynamiquement une image existante par une nouvelle, et cela évite également que des rendus non liés à ce code soient bloqués pendant le décodage de l'image.

L'utilisation de `img.decoding = "async"` peut éviter de bloquer l'affichage d'autres contenus si le décodage prend du temps&nbsp;:

```js
const img = new Image();
img.decoding = "async";
img.src = "img/logo.png";
document.body.appendChild(img);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLImageElement.decode()")}}
- L'attribut `decoding` de l'élément HTML {{HTMLElement("img")}}
- [Que fait réellement l'attribut de décodage d'image&nbsp;? <sup>(angl.)</sup>](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) sur tunetheweb.com (2023)
