---
title: <input type ="button">
slug: Web/HTML/Element/Input/button
tags:
  - Element
  - HTML
  - Input
  - Reference
  - Web
translation_of: Web/HTML/Element/input/button
---
{{HTMLRef}}

Les éléments {{HTMLElement("input")}} de type **`button`** sont affichés comme des boutons poussoirs qui peuvent être programmés afin de contrôler des fonctionnalités de la page via un gestionnaire d'évènement (la plupart du temps pour l'évènement {{event("click")}}).

{{EmbedInteractiveExample("pages/tabbed/input-button.html", "tabbed-shorter")}}

> **Note :** Bien que les éléments `<input>` de type `"button"` représentent toujours des éléments HTML valides, l'élément {{HTMLElement("button")}}, plus récent, est la meilleure méthode pour créer des boutons hors d'un formulaire. Il est aussi possible d'insérer des éléments HTML dans l'étiquette du bouton, ce qui permet notamment d'avoir des images.

## Valeur

L'attribut {{htmlattrxref("value", "input")}} d'un t'el élément contient une chaîne de caractères qui est utilisée comme étiquette pour le bouton (autrement dit, comme texte affiché sur le bouton).

### Exemple 1

```html
<input type="button" value="Bouton cliquer">
```

{{EmbedLiveSample("Exemple_1", 650, 30)}}

### Exemple 2

Si on n'indique aucune valeur, le bouton sera vide :

```html
<input type="button">
```

{{EmbedLiveSample("Exemple_2", 650, 30)}}

## Utiliser les boutons `<input>`

Les éléments `<input type="button">` ne possèdent pas de comportement particulier (leurs analogues [`<input type="submit">`](/fr/docs/Web/HTML/Element/input/submit) et [`<input type="reset">`](/fr/docs/Web/HTML/Element/input/reset) permettent respectivement d'envoyer et de réinitialiser des formulaires). Pour qu'un bouton `<input type="button">` puisse avoir un effet, il est nécessaire d'écrire quelques lignes JavaScript.

### Un bouton simple

Dans cet exemple, commençons par créer un bouton simple avec un gestionnaire d'évènement permettant de déclencher une action au clic afin de démarrer cette machine (enfin, pour être plus précis : on échangera la valeur de l'attribut `value` du bouton et le texte situé dans le paragraphe qui suit) :

```html
<form>
  <input type="button" value="Démarrer la machine">
</form>
<p>La machine est arrêtée.</p>
```

```js
var btn = document.querySelector('input');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value === 'Démarrer la machine') {
    btn.value = 'Arrêter la machine';
    txt.textContent = 'La machine est démarrée !';
  } else {
    btn.value = 'Démarrer la machine';
    txt.textContent = 'La machine est arrêtée.';
  }
}
```

Dans ce script, on récupère une référence à l'objet {{domxref("HTMLInputElement")}} qui représente l'élément `<input>` du DOM et on stocke cette référence dans la variable `btn`. {{domxref("EventTarget.addEventListener", "addEventListener()")}} pour ensuite lui rattacher une fonction qui sera utilisée lorsque l'évènement {{event("click")}} se produira sur le bouton.

{{EmbedLiveSample("Un_bouton_simple", 650, 100)}}

### Ajouter des raccourcis clavier

Les raccourcis clavier permettent à un utilisateur de déclencher une action grâce à une touche ou grâce à une combinaison de touches du clavier. Pour ajouter un raccourci clavier déclenchant le bouton, on pourra ajouter l'attribut universel [`accesskey`](/fr/docs/Web/HTML/Attributs_universels/accesskey) (qu'on peut d'ailleurs utiliser pour les autres éléments {{HTMLElement("input")}}).

Dans l'exemple qui suit, on définit <kbd>s</kbd> comme raccourci (autrement dit, il faudra appuyer sur la touche <kbd>s</kbd> avec une ou plusieurs touches supplémentaires qui dépendent du navigateur et du système d'exploitation, cf. [`accesskey`](/fr/docs/Web/HTML/Attributs_universels/accesskey) pour la liste de ces touches).

```html
<form>
  <input type="button" value="Démarrer la machine" accesskey="s">
</form>
<p>La machine est arrêtée.</p>
```

```js hidden
var btn = document.querySelector('input');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value === 'Démarrer la machine') {
    btn.value = 'Arrêter la machine';
    txt.textContent = 'La machine est démarrée !';
  } else {
    btn.value = 'Démarrer la machine';
    txt.textContent = 'La machine est arrêtée.';
  }
}
```

{{EmbedLiveSample("Ajouter_des_raccourcis_clavier", 650, 100)}}

> **Note :** Un problème de cet exemple est que l'utilisateur ne saura pas quelle touche utiliser comme raccourci. Dans un cas concret, cette information serait affichée ou fournie via un lien simple d'accès qui décrirait les raccourcis disponibles.

### Désactiver et activer un bouton

Pour désactiver un bouton, il suffit d'ajouter l'attribut universel {{htmlattrxref("disabled")}} :

```html
<input type="button" value="Je suis désactivé" disabled>
```

Il est possible d'activer ou de désactiver des boutons lors de de l'utilisation de la page en modifiant l'attribut `disabled` de l'élément dans le DOM. Dans l'exemple qui suit, le bouton est initialement activé et si on appuie dessus : il devient désactivé (c'est ce que fait la ligne de code `btn.disabled = true`). La fonction {{domxref("WindowTimers.setTimeout","setTimeout()")}} est ensuite utilisée afin de réinitialiser le bouton après deux secondes.

#### Exemple 1

```html hidden
<input type="button" value="Activé">
```

```js hidden
var btn = document.querySelector('input');

btn.addEventListener('click', disableBtn);

function disableBtn() {
  btn.disabled = true;
  btn.value = 'Désactivé';
  window.setTimeout(function() {
    btn.disabled = false;
    btn.value = 'Activé';
  }, 2000);
}
```

{{EmbedLiveSample("Exemple_1", 650, 60)}}

Si l'attribut `disabled` n'est pas fourni, il est hérité depuis l'élément parent. De cette façon, on peut activer/désactiver des groupes d'éléments en les plaçant dans un conteneur (par exemple un élément {{HTMLElement("fieldset")}}) et en indiquant `disabled` sur le conteneur.

C'est ce qu'illustre l'exemple suivant. Il est semblable à l'exemple précédent mais l'attribut  `disabled` est activé sur l'élément `<fieldset>` lorsqu'on appuie sur le premier bouton. Les trois autres boutons sont donc désactivés pendant deux secondes.

#### Exemple 2

```html hidden
<fieldset>
  <legend>Groupe de boutons </legend>
  <input type="button" value="Bouton 1">
  <input type="button" value="Bouton 2">
  <input type="button" value="Bouton 3">
</fieldset>
```

```js hidden
var btn = document.querySelector('input');
var fieldset = document.querySelector('fieldset');

btn.addEventListener('click', disableBtn);

function disableBtn() {
  fieldset.disabled = true;
  window.setTimeout(function() {
    fieldset.disabled = false;
  }, 2000);
}
```

{{EmbedLiveSample("Exemple_2", 650, 60)}}

> **Note :** À la différence des autres navigateurs, [Firefox conservera un état désactivé obtenu de façon dynamique lorsque la page est rechargée](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). L'attribut {{htmlattrxref("autocomplete","button")}} peut être utilisé afin de contrôler cette fonctionnalité.

## Validation

Les éléments ` <input`` type="button" ``> ` n'ont pas de contrainte de validation.

## Exemples

Dans l'exemple qui suit, on montre une application de dessin très simple qui utilise un élément {{htmlelement("canvas")}}, une courte feuille de style CSS (masquée) et du code JavaScript. Les deux contrôles situés en haut permettent de choisir la couleur et la taille de la pointe du crayon. Le bouton quant à lui permet de réinitialiser le canevas.

```html
<div class="toolbar">
  <input type="color" aria-label="Sélectionner la couleur du crayon">
  <input type="range" min="2" max="50" value="30" aria-label="Sélectionner la taille de la pointe du crayon"><span class="output">30</span>
  <input type="button" value="Réinitialiser le canevas">
</div>

<canvas class="myCanvas">
  <p>Votre navigateur ne semble pas prendre en charge cette fonctionnalité.</p>
</canvas>
```

```css hidden
body {
  margin: 0;
  overflow: hidden;
  background: #ccc;
}

.toolbar {
  width: 150px;
  height: 75px;
  background: #ccc;
  padding: 5px;
}

input[type="color"], input[type="button"] {
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
var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight-85;
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);

var colorPicker = document.querySelector('input[type="color"]');
var sizePicker = document.querySelector('input[type="range"]');
var output = document.querySelector('.output');
var clearBtn = document.querySelector('input[type="button"]');

// On convertit des degrés en radians
function degToRad(degrees) {
  return degrees * Math.PI / 180;
};

// On met à jour la valeur pour le sélecteur
// de taille
sizePicker.oninput = function() {
  output.textContent = sizePicker.value;
}

// On enregistre les coordonnées du pointeur de la souris
// emouse pointer coordinates, and whether the button is pressed
var curX;
var curY;
var pressed = false;

// On met à jour les coordonnées du pointeur
document.onmousemove = function(e) {
  curX = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
  curY = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}

canvas.onmousedown = function() {
  pressed = true;
};

canvas.onmouseup = function() {
  pressed = false;
}

clearBtn.onclick = function() {
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0,0,width,height);
}

function draw() {
  if(pressed) {
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(curX, curY-85, sizePicker.value, degToRad(0), degToRad(360), false);
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
      <td><strong>{{anch("Valeur")}}</strong></td>
      <td>A {{domxref("DOMString")}} used as the button's label</td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>{{event("click")}}</td>
    </tr>
    <tr>
      <td><strong>Attributs pris en Supported common attributes</strong></td>
      <td>
        {{htmlattrxref("type", "input")}}, and
        {{htmlattrxref("value", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>Aucune</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                                        | État                             | Commentaires |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'forms.html#button-state-(type=button)', '&lt;input type="button"&gt;')}} | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'forms.html#button-state-(type=button)', '&lt;input type="button"&gt;')}}     | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-button")}}

## Voir aussi

- L'élément {{HTMLElement("input")}}
- L'interface DOM {{domxref("HTMLInputElement")}} implémentée par l'élément
- L'élément {{HTMLElement("button")}}, plus moderne
