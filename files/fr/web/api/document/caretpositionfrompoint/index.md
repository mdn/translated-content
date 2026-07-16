---
title: "Document : méthode caretPositionFromPoint()"
short-title: caretPositionFromPoint()
slug: Web/API/Document/caretPositionFromPoint
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("CSSOM view API")}}

La méthode **`caretPositionFromPoint()`** de l'interface {{DOMxRef("Document")}} retourne un objet {{DOMxRef('CaretPosition')}}, contenant le nœud DOM, ainsi que le caret et le décalage (<i lang="en">offset</i> en anglais) du caractère du caret dans ce nœud.

## Syntaxe

```js-nolint
caretPositionFromPoint(x, y)
caretPositionFromPoint(x, y, options)
```

### Paramètres

- `x`
  - : La coordonnée horizontale d'un point.
- `y`
  - : La coordonnée verticale d'un point.
- `options` {{Optional_Inline}}
  - : Les propriétés optionnelles suivantes peuvent également être définies.
    - `shadowRoots` {{Optional_Inline}}
      - : Un tableau d'objets {{DOMxRef("ShadowRoot")}}.
        La méthode peut retourner une position de caret pour un nœud défini dans le DOM d'ombre (<i lang="en">shadow DOM</i> en anglais) d'une racine d'ombre (<i lang="en">shadow root</i> en anglais) fournie.
        Si la position du caret se trouve dans une racine d'ombre qui n'est pas fournie, le `CaretPosition` retourné sera remappé vers le nœud qui est l'hôte de la racine d'ombre.

### Valeur de retour

Un objet {{DOMxRef('CaretPosition')}} ou `null`.

La valeur retournée est `null` s'il n'y a pas de zone d'affichage associée au document, si les coordonnées `x` ou `y` sont négatives ou en dehors de la zone d'affichage, ou si les coordonnées indiquent un point où aucun indicateur de point d'insertion de texte ne pourrait être inséré.

## Exemples

### Diviser les nœuds de texte à la position du caret dans le DOM

Cet exemple montre comment obtenir la position du caret à partir d'un nœud DOM sélectionné, utiliser cette position pour diviser le nœud et insérer un saut de ligne entre les deux nœuds.
L'exemple utilise `caretPositionFromPoint()` pour obtenir la position du caret si elle est prise en charge, avec la méthode non standard {{DOMxRef("Document.caretRangeFromPoint()")}} comme solution de repli.

On notera que certaines parties du code sont masquées, y compris le code utilisé pour la journalisation, car cela n'est pas utile pour comprendre cette méthode.

#### HTML

Le HTML définit un paragraphe de texte.

```html hidden
<div id="message">
  Ce navigateur ne prend en charge ni document.caretRangeFromPoint ni
  document.caretPositionFromPoint
</div>
```

```html hidden
<button id="reset" type="button">Réinitialiser</button>
```

```html
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
```

```html hidden
<pre id="log">Journal</pre>
```

```css hidden
#log {
  height: 30px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}

const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

```css hidden
#message {
  color: red;
  font-weight: bold;
}

#message.fallback {
  color: darkorange;
}

#message.supported {
  color: green;
}
```

#### JavaScript

La méthode ci-dessous vérifie d'abord la prise en charge de `document.caretPositionFromPoint` et l'utilise pour obtenir le nœud de texte et le décalage à la position du curseur.
Si le navigateur ne prend pas en charge cette méthode, le code vérifie ensuite la présence de {{DOMxRef("Document.caretRangeFromPoint", "document.caretRangeFromPoint")}} et l'utilise à la place.

Si le nœud à la position du caret est un nœud de texte, le code [divise le nœud](/fr/docs/Web/API/Text/splitText) en deux au décalage sélectionné, et insère un saut de ligne entre les deux nœuds.

```js
function insertBreakAtPoint(e) {
  let range;
  let textNode;
  let offset;

  if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(e.clientX, e.clientY);
    textNode = range.offsetNode;
    offset = range.offset;
  } else if (document.caretRangeFromPoint) {
    // Utiliser la méthode de repli propriétaire de WebKit
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  } else {
    // Aucune des méthodes n'est prise en charge, ne rien faire
    return;
  }

  // Code de journalisation (utilise une méthode cachée pour obtenir une sous-chaîne de caractères avec ^ à l'offset)
  if (textNode?.nodeType === 3) {
    const caretInText = getSubstringAroundOffset(textNode.textContent, offset);
    log(
      `node: ${textNode.nodeName}, offset: ${offset}, insert: ${caretInText}`,
    );
  }

  // Ne diviser que les TEXT_NODEs
  if (textNode?.nodeType === 3) {
    let replacement = textNode.splitText(offset);
    let br = document.createElement("br");
    textNode.parentNode.insertBefore(br, replacement);
  }
}
```

La méthode est ensuite ajoutée comme gestionnaire d'évènements de clic pour tous les éléments de paragraphe.

```js
const paragraphs = document.getElementsByTagName("p");
for (const paragraph of paragraphs) {
  paragraph.addEventListener("click", insertBreakAtPoint);
}
```

```js hidden
// Insère ^ à l'offset et obtient une sous-chaîne de caractères pour le journal
function getSubstringAroundOffset(text, offset, length = 10) {
  const start = Math.max(0, offset - length);
  const end = Math.min(text.length, offset + length + 1);
  // Insère le caractère caret à l'offset
  const modifiedText = `${text.substring(0, offset)}^${text.substring(offset)}`;
  return `...${modifiedText.substring(start, end)}...`;
}
```

```js hidden
let message = document.getElementById("message");
if (document.caretPositionFromPoint) {
  message.textContent =
    "Ce navigateur prend en charge la méthode standard document.caretPositionFromPoint";
  message.classList.add("supported");
} else if (document.caretRangeFromPoint) {
  message.textContent =
    "Ce navigateur prend en charge la méthode propriétaire document.caretRangeFromPoint";
  message.classList.add("supported");
}
```

#### Résultat

Cliquez n'importe où dans le paragraphe **Lorem ipsum ...** ci-dessous pour insérer un saut de ligne à l'endroit où vous cliquez.
On notera que le journal affiche le `nodeName`, l'offset et un fragment du nœud sélectionné avec un caractère `^` à l'offset.

{{EmbedLiveSample('Split text nodes at caret position in DOM','100%','400px')}}

### Diviser les nœuds de texte aux positions du caret dans un DOM d'ombre

Cet exemple montre comment obtenir la position du caret à partir d'un nœud sélectionné dans une racine d'ombre.
L'exemple est très similaire à l'exemple uniquement DOM ci-dessus, sauf qu'une partie du texte se trouve dans une racine d'ombre.
Nous fournissons un bouton pour vous permettre de voir la différence lorsque une racine d'ombre est passée/non passée à `caretPositionFromPoint()`.

On notera que certaines parties du code sont masquées, y compris le code utilisé pour la journalisation, car cela n'est pas utile pour comprendre cette méthode.

#### HTML

Le HTML définit un paragraphe de texte à l'intérieur d'un élément HTML {{HTMLElement("div")}}.
Le paragraphe contient un élément HTML {{HTMLElement("span")}} avec un `id` `"host"` que nous utiliserons comme hôte pour une racine d'ombre.
Il y a également quelques boutons que nous utiliserons pour réinitialiser l'exemple et pour ajouter/supprimer l'argument de l'option de racine d'ombre à `caretPositionFromPoint()`.

```html hidden
<div id="message">
  Ce navigateur ne prend en charge ni document.caretRangeFromPoint ni
  document.caretPositionFromPoint
</div>
```

```html
<button id="reset" type="button">Réinitialiser</button>
<button id="shadowButton" type="button">Ajouter dans l'ombre</button>
<div>
  <p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut <span id="host"></span> labore et dolore magna
    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
    Lorem ipsum dolor sit amet.
  </p>
</div>
```

```html hidden
<pre id="log">Log</pre>
```

#### CSS

Ici nous utilisons le CSS pour rendre l'élément `#host` rouge et en gras.
Cela facilite la distinction entre le texte dans le DOM et le texte dans le DOM d'ombre.

```css
#host {
  color: red;
  font-weight: bold;
}
```

```css hidden
#log {
  height: 30px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```css hidden
#message {
  color: red;
  font-weight: bold;
}

#message.fallback {
  color: darkorange;
}

#message.supported {
  color: green;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}

const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

Tout d'abord, nous avons du code pour peupler notre DOM d'ombre.
Nous utilisons JavaScript pour attacher dynamiquement une racine d'ombre, car le système d'exemples MDN ne nous permet pas de le faire de manière déclarative en utilisant l'élément HTML {{HTMLElement("template")}}.
Le contenu du DOM d'ombre est un élément HTML {{HTMLElement("span")}} qui contient le texte «&nbsp;Je suis dans le DOM d'ombre&nbsp;».

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const shadowSpan = document.createElement("span");
shadowSpan.textContent = "Je suis dans le DOM d'ombre";
shadow.appendChild(shadowSpan);
```

Ensuite, nous ajoutons un gestionnaire pour notre bouton «&nbsp;Activer/Désactiver l'ombre&nbsp;».
Ce code bascule la valeur de la variable `useShadows` et met à jour le texte du bouton en conséquence.

```js
let useShadows = false;

const shadowButton = document.querySelector("#shadowButton");
shadowButton.addEventListener("click", () => {
  useShadows = !useShadows;
  shadowButton.innerText = useShadows
    ? "Supprimer de l'ombre"
    : "Ajouter dans l'ombre";
});
```

La méthode ci-dessous vérifie d'abord la prise en charge de `document.caretPositionFromPoint` et l'utilise pour obtenir le nœud de texte et l'offset à la position du caret.
La valeur de la variable `useShadows` est utilisée pour déterminer si la racine d'ombre hébergée dans notre texte est passée à `caretPositionFromPoint()`.

- Si le navigateur ne prend pas en charge cette méthode, le code vérifie ensuite la présence de {{DOMxRef("Document.caretRangeFromPoint", "document.caretRangeFromPoint")}} et l'utilise à la place.
- Si le nœud à la position du caret est un nœud de texte, le code divise alors le nœud à l'offset sélectionné et insère un saut de ligne entre les deux.
- Si le nœud est un nœud d'élément, le code insère un nœud d'élément de saut de ligne à l'offset.

```js
function insertBreakAtPoint(e) {
  let range;
  let textNode;
  let offset;

  if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(
      e.clientX,
      e.clientY,
      useShadows ? { shadowRoots: [shadow] } : null,
    );
    textNode = range.offsetNode;
    offset = range.offset;
  } else if (document.caretRangeFromPoint) {
    // Utilise la méthode de repli propriétaire WebKit
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  } else {
    // Aucune méthode n'est prise en charge, ne rien faire
    return;
  }

  // Code de journalisation (utilise une méthode cachée pour obtenir une sous-chaîne avec ^ à l'offset)
  if (textNode) {
    if (textNode.nodeType === 3) {
      const caretInText = getSubstringAroundOffset(
        textNode.textContent,
        offset,
      );
      log(
        `type: TEXT_NODE, name: ${textNode.nodeName}, offset: ${offset}:
${caretInText}`,
      );
    } else if (textNode.nodeType === 1) {
      log(`type: ELEMENT_NODE, name: ${textNode.nodeName}, offset: ${offset}`);
    } else {
      log(
        `type: ${textNode.nodeType}, name: ${textNode.nodeName}, offset: ${offset}`,
      );
    }
  }

  // Insérer une ligne à la position du caret
  if (textNode?.nodeType === 3) {
    // TEXT_NODE - diviser le texte à l'offset et ajouter un br
    let replacement = textNode.splitText(offset);
    let br = document.createElement("br");
    textNode.parentNode.insertBefore(br, replacement);
  } else if (textNode?.nodeType === 1) {
    // ELEMENT_NODE - Ajouter un nœud br à l'offset
    let br = document.createElement("br");
    const targetNode = textNode.childNodes[offset];
    textNode.insertBefore(br, targetNode);
  } else {
    // Ne rien faire
  }
}
```

Enfin, nous ajoutons deux gestionnaires d'évènements de clic pour les éléments de paragraphe dans le DOM et dans la racine d'ombre, respectivement.
Notez que nous devons interroger spécifiquement les éléments à l'intérieur de la `shadowRoot` car ils ne sont pas visibles pour les méthodes de requête DOM normales.

```js
// Gestionnaire d'évènements de clic pour les éléments <p> dans le DOM
const paragraphs = document.getElementsByTagName("p");
for (const paragraph of paragraphs) {
  paragraph.addEventListener("click", insertBreakAtPoint);
}

// Gestionnaire d'évènements de clic pour les éléments <p> dans le DOM d'ombre
const shadowParagraphs = host.shadowRoot.querySelectorAll("p");
for (const paragraph of shadowParagraphs) {
  console.log(paragraph);
  paragraph.addEventListener("click", insertBreakAtPoint);
}
```

```js hidden
// Insère ^ à l'offset et obtient une sous-chaîne pour le journal
function getSubstringAroundOffset(text, offset, length = 10) {
  const start = Math.max(0, offset - length);
  const end = Math.min(text.length, offset + length + 1);
  // Insérer le caractère caret à l'offset
  const modifiedText = `${text.substring(0, offset)}^${text.substring(offset)}`;
  return `...${modifiedText.substring(start, end)}...`;
}
```

```js hidden
let message = document.getElementById("message");
if (document.caretPositionFromPoint) {
  message.textContent =
    "Ce navigateur prend en charge la méthode standard document.caretPositionFromPoint";
  message.classList.add("supported");
} else if (document.caretRangeFromPoint) {
  message.textContent =
    "Ce navigateur prend en charge la méthode non standard document.caretRangeFromPoint";
  message.classList.add("supported");
}
```

#### Résultats

Cliquez dans le paragraphe **Lorem ipsum ...** avant ou après le texte du DOM d'ombre pour insérer un saut de ligne à l'endroit où vous cliquez.
Notez que dans ce cas, le journal montre que vous avez sélectionné un `TEXT_NODE`, l'offset et un fragment du nœud sélectionné avec un caractère `^` à l'offset.

Initialement, la racine d'ombre n'est pas passée à `caretPositionFromPoint()`, donc si vous cliquez sur le texte "I'm in the shadow DOM", le nœud de position du caret retourné est le nœud parent de l'hôte, à l'offset de la racine d'ombre.
Le saut de ligne est donc ajouté avant le nœud plutôt qu'au point que vous avez sélectionné.
Notez que le nœud de position du caret dans ce cas a le type `ELEMENT_NODE`.

Si vous cliquez sur le bouton «&nbsp;Ajouter dans l'ombre&nbsp;», la racine d'ombre est passée à `caretPositionFromPoint()`, donc la position du caret retournée est le nœud spécifique sélectionné dans le DOM d'ombre.
Cela fait que le texte du DOM d'ombre se comporte comme le texte des autres paragraphes.

{{EmbedLiveSample("Diviser les nœuds de texte aux positions du caret dans un DOM d'ombre", "100%", 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef('CaretPosition')}}
