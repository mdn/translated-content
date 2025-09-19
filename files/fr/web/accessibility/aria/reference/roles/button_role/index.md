---
title: "ARIA : rôle button"
short-title: button
slug: Web/Accessibility/ARIA/Reference/Roles/button_role
original_slug: Web/Accessibility/ARIA/Roles/button_role
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

Le rôle `button` est destiné aux éléments cliquables qui déclenchent une réponse lorsqu'ils sont activés par l'utilisateur. Ajouter `role="button"` indique au lecteur d'écran que l'élément est un bouton, mais ne fournit aucune fonctionnalité de bouton. Utilisez {{HTMLElement("button")}} ou {{HTMLElement("input")}} avec `type="button"` à la place.

## Description

Le rôle `button` identifie un élément comme étant un bouton pour les technologies d'assistance telles que les lecteurs d'écran. Un bouton est un widget utilisé pour effectuer des actions telles que soumettre un formulaire, ouvrir une boîte de dialogue, annuler une action ou exécuter une commande telle que l'insertion d'un nouvel enregistrement ou l'affichage d'informations. Ajouter `role="button"` indique aux technologies d'assistance que l'élément est un bouton, mais ne fournit aucune fonctionnalité de bouton. Utilisez {{HTMLElement("button")}} ou {{HTMLElement("input")}} avec `type="button"` à la place.

Ce rôle de `button` peut être utilisé en combinaison avec l'attribut [`aria-pressed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) pour [créer des boutons interrupteurs](#boutons_à_bascule).

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">
  Enregistrer
</div>
```

L'exemple ci-dessus crée un bouton sur lequel on peut se positionner, mais nécessite JavaScript et CSS pour inclure l'apparence et la fonctionnalité du bouton. Ces fonctionnalités sont fournies par défaut lorsque vous utilisez {{HTMLElement("button")}} ou {{HTMLElement("input")}} avec des éléments `type="button"`&nbsp;:

```html
<button id="saveChanges">Enregistrer</button>
```

> [!NOTE]
> Si on utilise `role="button"` plutôt que les éléments sémantiques `<button>` ou `<input type="button">`, il faudra : permettre à l'élément de recevoir le focus, définir des gestionnaires d'évènements pour {{domxref("Element/click_event", "click")}} et {{domxref("Element/keydown_event", "keydown")}}. Cela comprend la gestion des touches <kbd>Entrée</kbd> et <kbd>Espace</kbd>, afin de traiter la saisie de l'utilisateur. Voir [l'exemple de code officiel de WAI-ARIA <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/).

En plus du widget de bouton ordinaire, `role="button"` doit être inclus lors de la création d'un bouton interrupteur ou d'un bouton de menu à l'aide d'un élément non bouton.

Un bouton interrupteur est un bouton à deux états qui peut être soit éteint (non pressé), soit allumé (pressé). Les valeurs de l'attribut [`aria-pressed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) `true` ou `false` identifient un bouton comme un bouton interrupteur.

Un bouton de menu est un bouton qui contrôle un menu et a un attribut de propriété [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) défini sur `menu` ou `true`.

### Rôles, états et propriétés ARIA associés

- [`aria-pressed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
  - : L'attribut `aria-pressed` définit le bouton comme bouton à bascule. La valeur décrit l'état du bouton. Les valeurs incluent `aria-pressed="false"` lorsqu'un bouton n'est pas actuellement enfoncé, `aria-pressed="true"` pour indiquer qu'un bouton est actuellement enfoncé, et `aria-pressed="mixed"` si le bouton est considéré comme partiellement enfoncé. Si l'attribut est omis ou défini sur sa valeur par défaut `aria-pressed="undefined"`, l'élément ne prend pas en charge l'état «&nbsp;enfoncé&nbsp;».
- [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Si le bouton contrôle un groupe d'autres éléments, l'état `aria-expanded` indique si le groupe contrôlé est actuellement développé ou réduit. Si le bouton a `aria-expanded="false"`, le groupe n'est pas développé&nbsp;; si le bouton a `aria-expanded="true"`, il est développé&nbsp;; si le bouton a `aria-expanded="undefined"` ou si l'attribut est omis, il n'est pas extensible.

### Boutons de base

Les boutons doivent toujours avoir un nom accessible. Pour la plupart des boutons, ce nom sera le même que le texte à l'intérieur du bouton, entre les balises ouvrante et fermante. Dans certains cas, par exemple les boutons représentés par des icônes, le nom accessible peut être fourni par les attributs [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ou [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby).

### Boutons à bascule

Un bouton à bascule a généralement deux états&nbsp;: enfoncé et non enfoncé. Un troisième état «&nbsp;mixed&nbsp;» est disponible pour les boutons à bascule qui contrôlent d'autres éléments, tels que d'autres boutons à bascule ou des cases à cocher, qui ne partagent pas tou·tes la même valeur. Le fait qu'un élément soit un bouton à bascule ou non peut être indiqué avec l'attribut [`aria-pressed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) en plus du rôle `button` (si l'élément n'est pas déjà un bouton natif)&nbsp;:

- Si `aria-pressed` n'est pas utilisé, ou est défini à l'état «&nbsp;undefined&nbsp;», le bouton n'est pas un bouton à bascule.
- Si `aria-pressed="false"` est utilisé, le bouton est un bouton à bascule actuellement non enfoncé.
- Si `aria-pressed="true"` est utilisé, le bouton est un bouton à bascule actuellement enfoncé.
- Si `aria-pressed="mixed"` est utilisé, le bouton est considéré comme partiellement enfoncé.

Par exemple, le bouton muet d'un lecteur audio étiqueté «&nbsp;mute&nbsp;» pourrait indiquer que le son est coupé en définissant l'état `aria-pressed` à `true`. L'étiquette d'un bouton à bascule ne doit pas changer lorsque son état change. Dans notre exemple, l'étiquette reste «&nbsp;Mute&nbsp;» et un lecteur d'écran annoncera «&nbsp;Mute toggle button pressed&nbsp;» ou «&nbsp;Mute toggle button not pressed&nbsp;» selon la valeur de `aria-pressed`. Si la conception devait faire passer l'étiquette du bouton de «&nbsp;Mute&nbsp;» à «&nbsp;Unmute&nbsp;», un bouton à bascule ne serait pas approprié, et l'attribut `aria-pressed` serait omis.

### Interactions clavier

| Touche            | Fonction          |
| ----------------- | ----------------- |
| <kbd>Entrer</kbd> | Active le bouton. |
| <kbd>Espace</kbd> | Active le bouton. |

Après l'activation du bouton, le focus est défini selon le type d'action réalisée. Par exemple, si cliquer sur le bouton ouvre une boîte de dialogue, le focus doit se déplacer vers celle-ci. Si le bouton ferme une boîte de dialogue, le focus doit revenir au bouton qui a ouvert la boîte de dialogue, sauf si la fonction réalisée dans le contexte de la boîte de dialogue mène logiquement à un autre élément. Si le bouton modifie le contexte courant, comme couper et rétablir le son d'un fichier audio, alors le focus reste généralement sur le bouton.

### Fonctionnalités JavaScript requises

#### Gestionnaires d'événements requis

Les boutons doivent pouvoir être utilisés par souris, tactile et clavier. Pour les éléments HTML natifs `<button>`, l'événement `onclick` est déclenché pour les clics de souris et lorsque l'utilisateur·ice appuie sur <kbd>Espace</kbd> ou <kbd>Entrer</kbd> lorsque le bouton a le focus. Mais si une autre balise est utilisée pour créer un bouton, l'événement `onclick` n'est déclenché que lors d'un clic avec la souris, même si `role="button"` est utilisé. Pour cette raison, des gestionnaires d'événements clavier distincts doivent être ajoutés à l'élément afin que le bouton soit déclenché lorsque la touche <kbd>Espace</kbd> ou <kbd>Entrer</kbd> est pressée.

- `onclick`
  - : Gère l'événement levé quand le bouton est activé via un clic souris ou un événement tactile.
- `onKeyDown`
  - : Gère l'événement levé quand le bouton est activé avec les touches Entrer ou Espace du clavier. (À noter et non [l'événement obsolète onKeyPress](/fr/docs/Web/API/Element/keypress_event))

## Exemples

### Exemple de bouton basique

Dans cet exemple, un élément `span` reçoit le rôle `button`. Comme un élément `<span>` est utilisé, l'attribut `tabindex` est requis pour rendre le bouton focalisable et l'ajouter à l'ordre de tabulation de la page. Le style CSS inclus sert à faire ressembler l'élément `<span>` à un bouton, et à fournir des indices visuels lorsqu'il a le focus.

Les gestionnaires d'événements `handleBtnClick` et `handleBtnKeyDown` exécutent l'action du bouton lorsqu'iel est activé·e à l'aide d'un clic de souris ou des touches <kbd>Espace</kbd> ou <kbd>Entrer</kbd>. Ici, l'action ajoute un nouveau nom à la liste des noms.

Essayez l'exemple en ajoutant un nom dans le champ de texte. Le bouton ajoutera le nom à la liste.

#### HTML

```html
<h1>Exemple de bouton ARIA</h1>
<ul id="nameList"></ul>
<label for="newName">Entrez votre nom&nbsp;: </label>
<input type="text" id="newName" />
<span role="button" tabindex="0">Ajouter un nom</span>
```

#### CSS

```css
[role="button"] {
  padding: 2px;
  background-color: navy;
  color: white;
  cursor: default;
}
[role="button"]:hover,
[role="button"]:focus,
[role="button"]:active {
  background-color: white;
  color: navy;
}
ul {
  list-style: none;
}
```

#### JavaScript

```js
function handleCommand(event) {
  // Gère à la fois les clics souris et le clavier
  // activation avec Enter ou Space

  // Les pressions de touches autres que Enter et Space
  // ne doivent pas déclencher la commande
  if (
    event instanceof KeyboardEvent &&
    event.key !== "Enter" &&
    event.key !== " "
  ) {
    return;
  }

  // Récupère la valeur du nouveau nom depuis le champ de saisie
  const newNameInput = document.getElementById("newName");
  const name = newNameInput.value;
  newNameInput.value = ""; // efface le champ texte
  newNameInput.focus(); // redonne le focus pour permettre la saisie d'un autre nom

  // N'ajoute pas d'entrées vides à la liste
  if (name.length > 0) {
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(name));

    // Ajoute le nouveau nom à la liste
    const list = document.getElementById("nameList");
    list.appendChild(listItem);
  }
}

const btn = document.querySelector("span[role='button']");
btn.addEventListener("click", handleCommand);
btn.addEventListener("keydown", handleCommand);
```

#### Résultat

{{EmbedLiveSample("exemple_de_bouton_basique")}}

### Exemple de bouton à bascule

Dans cet extrait, un élément {{HTMLElement("span")}} est converti en bouton à bascule à l'aide du rôle `button` et de l'attribut `aria-pressed`. Lorsque le bouton est activé, la valeur de `aria-pressed` change d'état&nbsp;; passant de `true` à `false` et inversement.

#### HTML

```html
<button type="button">Couper le son</button>

<span role="button" tabindex="0" aria-pressed="false"> Couper le son </span>

<audio
  id="audio"
  src="https://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3">
  Votre navigateur ne prend pas en charge l'élément `audio`.
</audio>
```

#### CSS

```css
button,
[role="button"] {
  padding: 3px;
  border: 2px solid transparent;
}

button:active,
button:focus,
[role="button"][aria-pressed="true"] {
  border: 2px solid black;
}
```

#### JavaScript

```js
function handleBtnClick(event) {
  toggleButton(event.target);
}

function handleBtnKeyDown(event) {
  // Vérifie si Space ou Enter a été pressée
  // "Spacebar" pour la compatibilité IE11
  if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
    // Empêche l'action par défaut pour éviter le défilement avec Space
    event.preventDefault();
    toggleButton(event.target);
  }
}

function toggleButton(element) {
  const audio = document.getElementById("audio");

  // Vérifie si le bouton est enfoncé
  const pressed = element.getAttribute("aria-pressed") === "true";

  // Bascule aria-pressed vers l'état opposé
  element.setAttribute("aria-pressed", !pressed);

  // Bascule l'état de lecture du fichier audio
  if (pressed) {
    audio.pause();
  } else {
    audio.play();
  }
}

const button = document.querySelector("button");
const spanButton = document.querySelector("span[role='button']");
button.addEventListener("click", handleBtnClick);
button.addEventListener("keydown", handleBtnKeyDown);
spanButton.addEventListener("click", handleBtnClick);
spanButton.addEventListener("keydown", handleBtnKeyDown);
```

#### Résultat

{{EmbedLiveSample('exemple_de_bouton_à_bascule')}}

## Problèmes d'accessibilité

Les boutons sont des contrôles interactifs et sont donc focalisables. Si le rôle `button` est ajouté à un élément qui n'est pas focalisable par lui‑même (comme `<span>`, `<div>` ou `<p>`), alors l'attribut `tabindex` doit être utilisé pour rendre le bouton focalisable.

> [!WARNING]
> Soyez prudent·e lors de l'annotation de liens avec le rôle button. Les boutons doivent pouvoir être déclenchés avec les touches <kbd>Espace</kbd> ou <kbd>Entrer</kbd>, alors que les liens doivent être déclenchés avec la touche <kbd>Entrer</kbd>. En d'autres termes, lorsque des liens sont utilisés pour se comporter comme des boutons, ajouter seulement `role="button"` n'est pas suffisant. Il faudra aussi ajouter un gestionnaire d'événement clavier qui écoute la touche <kbd>Espace</kbd> afin d'être cohérent avec les boutons natifs.

Lorsque le rôle `button` est utilisé, les lecteurs d'écran annoncent l'élément comme un bouton, disant généralement «&nbsp;clic&nbsp;» suivi du nom accessible du bouton. Le nom accessible est soit le contenu de l'élément, soit la valeur d'un `aria-label` ou de l'élément référencé par un attribut `aria-labelledby`, ou une description si elle est incluse.

## Bonnes pratiques

Si un lien effectue l'action d'un bouton, donner à l'élément `role="button"` aide les utilisateur·ice·s de technologies d'assistance à comprendre la fonction de l'élément. Toutefois, une meilleure solution consiste à ajuster la conception visuelle pour qu'elle corresponde à la fonction et au rôle ARIA. Lorsque c'est possible, il est recommandé d'utiliser les boutons HTML natifs (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` et `<input type="image">`) plutôt que le rôle `button`, car les boutons HTML natifs sont pris en charge par tou·tes les agents utilisateurs et technologies d'assistance et fournissent par défaut le clavier et la gestion du focus, sans personnalisation supplémentaire.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément {{HTMLElement('button')}}
- L'élément {{HTMLElement("input")}}
- [`<input type="button">`](/fr/docs/Web/HTML/Reference/Elements/input/button)
- [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit)
- [`<input type="reset">`](/fr/docs/Web/HTML/Reference/Elements/input/reset)
- L'attribut ARIA [`aria-pressed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- L'attribut ARIA [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- L'attribut ARIA [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [Sémantique native puissante dans HTML5 <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/dom.html#aria-usage-note)
- [Notes sur l'utilisation de l'ARIA dans HTML <sup>(angl.)</sup>](https://w3c.github.io/using-aria/)
- [Code d'exemple officiel WAI-ARIA <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/)
