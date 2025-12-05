---
title: "HTMLButtonElement : propriété command"
short-title: command
slug: Web/API/HTMLButtonElement/command
l10n:
  sourceCommit: b5a6d8bc5fd751032f70b88e7ec1ec61339937de
---

{{APIRef("Invoker Commands API")}}

La propriété **`command`** de l'interface {{DOMxRef("HTMLButtonElement")}} permet d'obtenir et de définir l'action à effectuer sur un élément contrôlé par ce bouton. Pour que cela ait un effet, [`commandfor`](/fr/docs/Web/HTML/Reference/Elements/button#commandfor) doit être défini.

Elle reflète l'attribut HTML [`command`](/fr/docs/Web/HTML/Reference/Elements/button#command).

## Valeur

Une chaîne de caractères. Voir l'attribut [`command`](/fr/docs/Web/HTML/Reference/Elements/button#command) pour les valeurs valides.

## Exemples

### Exemple simple

```html
<button id="toggleBtn" commandfor="mypopover" command="toggle-popover">
  Afficher la fenêtre contextuelle
</button>

<div popover id="mypopover">
  <button commandfor="mypopover" command="hide-popover">
    Masquer la fenêtre contextuelle
  </button>
</div>
```

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.command = "show-popover";
```

### Utilisation de valeurs personnalisées pour les commandes

Dans cet exemple, trois boutons ont été créés en utilisant des [valeurs personnalisées](/fr/docs/Web/HTML/Reference/Elements/button#custom_values) pour `command`.
Chaque bouton cible la même image à l'aide de l'attribut `commandfor`.

```html
<div class="controls">
  <button commandfor="the-image" command="--rotate-left">
    Tourner à gauche
  </button>
  <button commandfor="the-image" command="--reset">Réinitialiser</button>
  <button commandfor="the-image" command="--rotate-right">
    Tourner à droite
  </button>
</div>

<img
  id="the-image"
  src="/shared-assets/images/examples/dino.svg"
  alt="tête de dinosaure tournée de 0 degrés" />
```

```css hidden
.controls {
  margin-block-end: 20px;
}
```

Un écouteur d'événement est attaché à l'image en utilisant l'[événement `command`](/fr/docs/Web/API/CommandEvent).
Lorsqu'un des boutons est cliqué, l'écouteur exécute du code en fonction de la valeur personnalisée de `command` assignée au bouton, fait pivoter l'image et met également à jour son texte `alt` pour indiquer le nouvel angle de l'image.

```js
const image = document.getElementById("the-image");

image.addEventListener("command", (event) => {
  let rotate = parseInt(event.target.style.rotate || "0", 10);
  if (event.command === "--reset") {
    rotate = 0;
    event.target.style.rotate = `${rotate}deg`;
  } else if (event.command === "--rotate-left") {
    rotate = rotate === -270 ? 0 : rotate - 90;
    event.target.style.rotate = `${rotate}deg`;
  } else if (event.command === "--rotate-right") {
    rotate = rotate === 270 ? 0 : rotate + 90;
    event.target.style.rotate = `${rotate}deg`;
  }
  event.target.alt = `tête de dinosaure tournée de ${rotate} degrés`;
});
```

{{EmbedLiveSample('Utilisation de valeurs personnalisées pour les commandes', '100%', 220)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("Invoker Commands API", "L'API Invoker Commands", "", "nocode")}}
- La propriété {{DOMxRef("HTMLButtonElement.commandForElement")}}
- L'interface {{DOMxRef("CommandEvent")}}
- [L'attribut `command` de `<button>`](/fr/docs/Web/HTML/Reference/Elements/button#command)
