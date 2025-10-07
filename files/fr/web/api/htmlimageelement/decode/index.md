---
title: "HTMLImageElement : méthode decode()"
short-title: decode()
slug: Web/API/HTMLImageElement/decode
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

La méthode **`decode()`** de l'interface {{domxref("HTMLImageElement")}} retourne une promesse ({{jsxref("Promise")}}) qui est résolue une fois que l'image est décodée et qu'il est sûr de l'ajouter au DOM.

Ceci peut être utilisé pour initier le chargement de l'image avant de l'attacher à un élément du DOM (ou de l'ajouter comme nouvel élément), afin que l'image puisse être affichée immédiatement lors de son ajout au DOM. Cela évite que le rendu de la prochaine image après l'ajout dans le DOM ne provoque un délai dû au chargement de l'image.

## Syntaxe

```js-nolint
decode()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse {{jsxref('Promise')}} qui se résout avec `undefined` lorsque les données de l'image sont prêtes à être utilisées.

### Exceptions

- `EncodingError`
  - : Un {{domxref('DOMException')}} indiquant qu'une erreur est survenue lors du décodage de l'image.

## Notes d'utilisation

Un cas d'usage courant pour `decode()`&nbsp;: lors du chargement d'images très volumineuses (par exemple dans un album photo en ligne), vous pouvez d'abord afficher une miniature basse résolution, puis la remplacer par l'image en pleine résolution en instanciant un nouveau {{domxref("HTMLImageElement")}}, en définissant sa source sur l'URL de l'image haute résolution, puis en utilisant `decode()` pour obtenir une promesse qui sera résolue lorsque l'image haute résolution sera prête à l'emploi. À ce moment-là, vous pouvez remplacer la miniature par l'image haute résolution désormais disponible.

## Exemples

### Utilisation simple

L'exemple suivant montre comment utiliser la méthode `decode()` pour contrôler le moment où une image est ajoutée au DOM.

```js
const img = new Image();
img.src = "nebula.jpg";
img
  .decode()
  .then(() => {
    document.body.appendChild(img);
  })
  .catch((encodingError) => {
    // Do something with the error.
  });
```

> [!NOTE]
> Sans méthode retournant une promesse {{jsxref('Promise')}}, vous ajouteriez l'image au DOM dans un gestionnaire d'événement {{domxref("Window/load_event", "load")}}, et géreriez l'erreur dans le gestionnaire de l'événement {{domxref("HTMLElement/error_event", "error")}}.

### Éviter les images vides

Dans l'exemple ci-dessous, vous obtiendrez probablement une image vide affichée sur la page pendant le téléchargement de l'image&nbsp;:

```js
const img = new Image();
img.src = "img/logo.png";
document.body.appendChild(img);
```

L'utilisation de `decode()` permet de retarder l'insertion de l'image dans le DOM jusqu'à ce qu'elle soit entièrement téléchargée et décodée, évitant ainsi le problème d'image vide&nbsp;:

```js
async function getImage() {
  const img = new Image();
  img.src = "img/logo.png";
  await img.decode();
  document.body.appendChild(img);
  const p = document.createElement("p");
  p.textContent = "L'image est complètement chargée !";
  document.body.appendChild(p);
}
```

Ceci est particulièrement utile si vous remplacez dynamiquement une image existante par une nouvelle, et cela évite également que des rendus non liés à ce code soient bloqués pendant le décodage de l'image.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Que fait réellement l'attribut de décodage d'image&nbsp;? <sup>(angl.)</sup>](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) sur tunetheweb.com (2023)
- La propriété {{domxref("HTMLImageElement.decoding")}}
