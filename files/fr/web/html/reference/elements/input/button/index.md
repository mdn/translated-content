---
title: <input type="button">
slug: Web/HTML/Reference/Elements/input/button
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Les éléments {{HTMLElement("input")}} de type **`button`** sont affichés comme des boutons poussoirs qui peuvent être programmés afin de contrôler des fonctionnalités de la page via un gestionnaire d'évènement (la plupart du temps pour l'évènement {{DOMxRef("Element/click_event", "click")}}).

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;button&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<input class="styled" type="button" value="Ajouter aux favoris" />
```

```css interactive-example
.styled {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px black;
  border-radius: 10px;
  background-color: tomato;
  background-image: linear-gradient(
    to top left,
    rgb(0 0 0 / 20%),
    rgb(0 0 0 / 20%) 30%,
    transparent
  );
  box-shadow:
    inset 2px 2px 3px rgb(255 255 255 / 60%),
    inset -2px -2px 3px rgb(0 0 0 / 60%);
}

.styled:hover {
  background-color: red;
}

.styled:active {
  box-shadow:
    inset -2px -2px 3px rgb(255 255 255 / 60%),
    inset 2px 2px 3px rgb(0 0 0 / 60%);
}
```

> [!NOTE]
> Bien que les éléments `<input>` de type `"button"` représentent toujours des éléments HTML valides, l'élément {{HTMLElement("button")}}, plus récent, est la meilleure méthode pour créer des boutons hors d'un formulaire. Il est aussi possible d'insérer des éléments HTML dans l'étiquette du bouton, ce qui permet notamment d'avoir des images.

## Valeur

### Bouton avec une valeur

L'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) d'un élément `<input type="button">` contient une chaîne de caractères utilisée comme étiquette du bouton. La `value` fournit la {{Glossary("accessible description", "description accessible")}} pour le bouton.

```html
<input type="button" value="Bouton cliquer" />
```

{{EmbedLiveSample("Bouton avec une valeur", 650, 30)}}

### Bouton sans valeur

Si vous ne définissez pas de `value`, vous obtenez un bouton vide&nbsp;:

```html
<input type="button" />
```

{{EmbedLiveSample("Bouton sans valeur", 650, 30)}}

## Utiliser les boutons

Les éléments `<input type="button">` ne possèdent pas de comportement particulier (leurs analogues `<input type="submit">` et [`<input type="reset">`](/fr/docs/Web/HTML/Reference/Elements/input/reset) permettent respectivement d'envoyer et de réinitialiser des formulaires). Pour qu'un bouton `<input type="button">` puisse avoir un effet, il est nécessaire d'écrire quelques lignes JavaScript.

### Un bouton simple

Nous allons commencer par créer un bouton simple avec un gestionnaire d'évènement {{DOMxRef("Element/click_event", "click")}} qui démarre notre machine (en fait, il échange la `value` du bouton et le contenu texte du paragraphe qui suit)&nbsp;:

```html
<form>
  <input type="button" value="Démarrer la machine" />
</form>
<p>La machine est arrêtée.</p>
```

```js
const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "Démarrer la machine") {
    button.value = "Arrêter la machine";
    paragraph.textContent = "La machine est démarrée !";
  } else {
    button.value = "Démarrer la machine";
    paragraph.textContent = "La machine est arrêtée.";
  }
}
```

Dans ce script, on récupère une référence à l'objet {{DOMxRef("HTMLInputElement")}} qui représente l'élément `<input>` du DOM et on stocke cette référence dans la variable `btn`. {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} pour ensuite lui rattacher une fonction qui sera utilisée lorsque l'évènement [`click`](/fr/docs/Web/API/Element/click_event) se produira sur le bouton.

{{EmbedLiveSample("Un bouton simple", 650, 100)}}

### Ajouter des raccourcis clavier

Les raccourcis clavier permettent à un·e utilisateur·ice de déclencher une action grâce à une touche ou grâce à une combinaison de touches du clavier. Pour ajouter un raccourci clavier déclenchant le bouton, on pourra ajouter l'attribut universel [`accesskey`](/fr/docs/Web/HTML/Reference/Global_attributes/accesskey) (qu'on peut d'ailleurs utiliser pour les autres éléments {{HTMLElement("input")}}).

Dans l'exemple qui suit, on définit <kbd>s</kbd> comme raccourci (autrement dit, il faudra appuyer sur la touche <kbd>s</kbd> avec une ou plusieurs touches supplémentaires qui dépendent du navigateur et du système d'exploitation, cf. [`accesskey`](/fr/docs/Web/HTML/Reference/Global_attributes/accesskey) pour la liste de ces touches).

```html
<form>
  <input type="button" value="Démarrer la machine" accesskey="s" />
</form>
<p>La machine est arrêtée.</p>
```

```js hidden
const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "Démarrer la machine") {
    button.value = "Arrêter la machine";
    paragraph.textContent = "La machine est démarrée !";
  } else {
    button.value = "Démarrer la machine";
    paragraph.textContent = "La machine est arrêtée.";
  }
}
```

{{EmbedLiveSample("Ajouter des raccourcis clavier", 650, 100)}}

> [!NOTE]
> Un problème de cet exemple est que l'utilisateur·ice ne saura pas quelle touche utiliser comme raccourci&nbsp;! Sur un site réel, il faudrait fournir cette information d'une manière qui n'interfère pas avec la présentation du site (par exemple en fournissant un lien facilement accessible qui pointe vers une page listant les raccourcis du site).

### Désactiver et activer un bouton

Pour désactiver un bouton, définissez l'attribut universel [`disabled`](/fr/docs/Web/HTML/Reference/Attributes/disabled) sur celui-ci, comme ceci&nbsp;:

```html
<input type="button" value="Je suis désactivé" disabled />
```

#### Définir l'attribut `disabled`

Vous pouvez activer et désactiver des boutons à l'exécution en définissant `disabled` à `true` ou `false`. Dans cet exemple, notre bouton commence activé, mais si vous appuyez dessus, il est désactivé avec `button.disabled = true`. Une fonction {{DOMxRef("Window.setTimeout", "setTimeout()")}} est ensuite utilisée pour réactiver le bouton après deux secondes.

```html
<input type="button" value="Activé" />
```

```js
const button = document.querySelector("input");

button.addEventListener("click", disableButton);

function disableButton() {
  button.disabled = true;
  button.value = "Désactivé";
  setTimeout(() => {
    button.disabled = false;
    button.value = "Activé";
  }, 2000);
}
```

{{EmbedLiveSample("Définir l'attribut `disabled`", 650, 60)}}

#### Héritage de l'état désactivé

Si l'attribut `disabled` n'est pas fourni, le bouton hérite de l'état `disabled` de son élément parent. De cette façon, on peut activer ou désactiver des groupes d'éléments en les plaçant dans un conteneur (par exemple un élément {{HTMLElement("fieldset")}}) et en indiquant `disabled` sur le conteneur.

L'exemple ci-dessous montre ce comportement. Il est très similaire à l'exemple précédent, sauf que l'attribut `disabled` est défini sur le `<fieldset>` lorsque le premier bouton est pressé — cela désactive les trois boutons jusqu'à la fin du délai de deux secondes.

```html hidden
<fieldset>
  <legend>Groupe de boutons</legend>
  <input type="button" value="Bouton 1" />
  <input type="button" value="Bouton 2" />
  <input type="button" value="Bouton 3" />
</fieldset>
```

```js hidden
const button = document.querySelector("input");
const fieldset = document.querySelector("fieldset");

button.addEventListener("click", disableButton);

function disableButton() {
  fieldset.disabled = true;
  setTimeout(() => {
    fieldset.disabled = false;
  }, 2000);
}
```

{{EmbedLiveSample("Héritage de l'état désactivé", 650, 100)}}

> [!NOTE]
> À la différence des autres navigateurs, Firefox conserve l'état `disabled` d'un élément `<input>` même après le rechargement de la page. Pour contourner ce comportement, définissez l'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Elements/input#autocomplete) de l'élément `<input>` à `off`. (Voir [Firefox boggue 654072 <sup>(angl.)</sup>](https://bugzil.la/654072) pour plus de détails.)

## Validation

Les éléments `<input type="button">` n'ont pas de contrainte de validation.

## Exemples

Dans l'exemple qui suit, on montre une application de dessin très simple qui utilise un élément {{HTMLElement("canvas")}}, une courte feuille de style CSS (masquée) et du code JavaScript. Les deux contrôles situés en haut permettent de choisir la couleur et la taille de la pointe du crayon. Le bouton quant à lui permet de réinitialiser le canevas.

```html
<div class="toolbar">
  <input type="color" aria-label="Sélectionner la couleur du crayon" />
  <input
    type="range"
    min="2"
    max="50"
    value="30"
    aria-label="Sélectionner la taille de la pointe du crayon" /><span
    class="output"
    >30</span
  >
  <input type="button" value="Réinitialiser le canevas" />
</div>

<canvas class="myCanvas">
  <p>Votre navigateur ne semble pas prendre en charge cette fonctionnalité.</p>
</canvas>
```

```css hidden
body {
  background: #cccccc;
  margin: 0;
  overflow: hidden;
}

.toolbar {
  background: #cccccc;
  width: 150px;
  height: 75px;
  padding: 5px;
}

input[type="color"],
input[type="button"] {
  width: 90%;
  margin: 0 auto;
  display: block;
}

input[type="range"] {
  width: 70%;
}

span {
  position: relative;
  bottom: 5px;
}
```

```js
const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight - 85);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);

const colorPicker = document.querySelector('input[type="color"]');
const sizePicker = document.querySelector('input[type="range"]');
const output = document.querySelector(".output");
const clearBtn = document.querySelector('input[type="button"]');

// On convertit des degrés en radians
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

// On met à jour la valeur pour le sélecteur
// de taille
sizePicker.oninput = () => {
  output.textContent = sizePicker.value;
};

// On enregistre les coordonnées du pointeur de la souris
// emouse pointer coordinates, and whether the button is pressed
let curX;
let curY;
let pressed = false;

// On met à jour les coordonnées du pointeur
document.onmousemove = (e) => {
  curX = e.pageX;
  curY = e.pageY;
};

canvas.onmousedown = () => {
  pressed = true;
};

canvas.onmouseup = () => {
  pressed = false;
};

clearBtn.onclick = () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
};

function draw() {
  if (pressed) {
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(
      curX,
      curY - 85,
      sizePicker.value,
      degToRad(0),
      degToRad(360),
      false,
    );
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
```

{{EmbedLiveSample("Exemples", '100%', 600)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>Une chaîne de caractères utilisée comme étiquette du bouton</td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>{{DOMxRef("Element/click_event", "click")}}</td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#type"><code>type</code></a> et
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>Interface DOM</strong></td>
      <td>{{DOMxRef("HTMLInputElement")}}</td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>Aucune</td>
    </tr>
    <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("input")}} et l'interface {{DOMxRef("HTMLInputElement")}} implémentée par l'élément
- L'élément {{HTMLElement("button")}}, plus moderne
