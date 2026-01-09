---
title: "HTMLImageElement : méthode decode()"
short-title: decode()
slug: Web/API/HTMLImageElement/decode
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

La méthode **`decode()`** de l'interface {{DOMxRef("HTMLImageElement")}} retourne une promesse ({{JSxRef("Promise")}}) qui est résolue une fois que l'image est décodée et qu'il est sûr de l'ajouter au DOM.

Ceci peut être utilisé pour initier le chargement de l'image avant de l'attacher à un élément du DOM (ou de l'ajouter comme nouvel élément), afin que l'image puisse être affichée immédiatement lors de son ajout au DOM. Cela évite que le rendu de la prochaine image après l'ajout dans le DOM ne provoque un délai dû au chargement de l'image.

## Syntaxe

```js-nolint
decode()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse {{JSxRef('Promise')}} qui se résout avec `undefined` lorsque les données de l'image sont prêtes à être utilisées.

### Exceptions

- `EncodingError` {{DOMxRef("DOMException")}}
  - : Une erreur s'est produite lors du décodage de l'image. Cela peut arriver si&nbsp;:
    - La requête a échoué
    - La requête d'image a changé après l'appel à `decode()` (par exemple, en modifiant son `src`)
    - Les données de l'image sont corrompues

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
    // Faire quelque chose avec l'erreur.
  });
```

> [!NOTE]
> Sans méthode retournant une promesse {{JSxRef('Promise')}}, vous ajouteriez l'image au DOM dans un gestionnaire d'événement {{DOMxRef("Window/load_event", "load")}}, et géreriez l'erreur dans le gestionnaire de l'événement {{DOMxRef("HTMLElement/error_event", "error")}}.

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

Ceci est particulièrement utile si vous remplacez dynamiquement une image existante par une nouvelle, et cela évite également que des rendus non liés à ce code soient bloqués pendant le décodage de l'image. Par exemple, dans un album photo en ligne, vous pouvez d'abord présenter une image miniature basse résolution, puis la remplacer par l'image en pleine résolution en instanciant un nouveau {{DOMxRef("HTMLImageElement")}}, en définissant sa source sur l'URL de l'image haute résolution, puis en utilisant `decode()` pour obtenir une promesse qui sera résolue lorsque l'image haute résolution sera prête à l'emploi. À ce moment-là, vous pouvez remplacer la miniature par l'image haute résolution désormais disponible.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLImageElement.decoding")}}
- [Que fait réellement l'attribut de décodage d'image&nbsp;? <sup>(angl.)</sup>](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) sur tunetheweb.com (2023)
