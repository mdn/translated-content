---
title: 'ARIA : le rôle button'
slug: Web/Accessibility/ARIA/Roles/button_role
tags:
  - ARIA
  - ARIA Role
  - ARIA button
  - Accessibility
  - Button Role
  - Reference
translation_of: Web/Accessibility/ARIA/Roles/button_role
original_slug: Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_button
---
Le rôle **[button](https://www.w3.org/WAI/PF/aria/roles#button)** devrait être utilisé pour les éléments cliquables qui déclenchent une réponse lorsqu'activés par l'utilisateur. Ajouter `role="button"` permettra à un élément d'apparaître comme un bouton de contrôle pour un lecteur d'écran. Ce rôle peut être utilisé avec l'attribut `aria-pressed` afin de créer des boutons interrupteurs.

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Enregistrer</div>
```

L'exemple précédent crée un bouton simple qui sera le premier à obtenir le focus. Toutefois, on devrait plutôt utiliser les éléments [`<button>`](/fr/docs/Web/HTML/Element/Button) ou [`<input>`](/fr/docs/Web/HTML/Element/Input) avec `type="button"` pour représenter des boutons :

```html
<button id="saveChanges">Enregistrer</button>
```

> **Note :** Si on utilise `role="button"` plutôt que les éléments sémantiques `<button>` ou `<input type="button">`, il faudra : permettre à l'élément de recevoir le focus, définir des gestionnaires d'évènements pour [`click`](/fr/docs/Web/API/Element/click_event) et [`keydown`](/fr/docs/Web/API/Document/keydown_event), y compris la gestion des touches <kbd>Entrée</kbd> et <kbd>Espace</kbd>, afin de traiter la saisie de l'utilisateur. Voir [l'exemple de code officiel de WAI-ARIA](https://www.w3.org/TR/wai-aria-practices/examples/button/button.html).

## Description

Le rôle `button` identifie un élément comme étant un bouton pour les lecteurs d'écran. Un bouton est un contrôle graphique qui permet d'effectuer des actions comme soumettre un formulaire, ouvrir une boîte de dialogue, annuler une action ou effectuer une commande (par exemple ajouter un nouvel enregistrement ou afficher des informations).

Pour indiquer qu'un bouton déclenchera l'ouverture d'une boîte de dialogue, on pourra utiliser la convention qui consiste à ajouter une ellipse (…) après l'étiquette du bouton, par exemple : "Enregistrer sous…".

En complément `role="button"` devrait également être utilisé pour les interrupteurs ou les menus qui n'utilisent pas l'élément HTML `<button>`. Un interrupteur est un bouton à deux états qui peut être éteint ou actif. Les valeurs de l'attribut `aria-pressed` : `true` ou `false` permettront d'identifier un bouton comme étant un interrupteur. Un bouton de menu permet, comme son nom l'indique, de contrôler un menu et possède un attribut `aria-haspopup` qui vaut `menu` ou `true`.

### Rôles, propriétés et états ARIA associés

- `aria-pressed`
  - : Définit le bouton comme étant un interrupteur. La valeur de `aria-pressed` décrit l'état du bouton. Les valeurs utilisables incluent `aria-pressed="false"` pour indiquer qu'un bouton n'est pas pressé, `aria-pressed="true"` pour indiquer qu'un bouton est pressé et `aria-pressed="mixed"` pour indiquer que le bouton est partiellement pressé. Si cet attribut est omis ou qu'il utilise la valeur par défaut `aria-pressed="undefined"`, on ne pourra pas appuyer sur l'élément.
- `aria-expanded`
  - : Si le bouton contrôle un groupe d'autres éléments, l'état `aria-expanded` indique si le groupe contrôlé est développé ou replié. Si le bouton a `aria-expanded="false"`, le groupe n'est pas développé ; si le bouton a `aria-expanded="true"`, cela indique qu'il est actuellement développé ; si le bouton a `aria-expanded="undefined"` ou que l'attribut est absent, cela indique que le groupe ne peut pas être développé.

### Boutons simples

Les boutons devraient toujours avoir un nom accessible. Pour la plupart des boutons, le nom sera le même que le texte écrit à l'intérieur du bouton. Dans certains cas, par exemple pour les boutons représentés par une icône, le nom accessible pourra être fourni par l'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) ou [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute).

### Interrupteurs

Un interrupteur possède généralement deux états : activé ou désactivé. Un troisième état hybride est disponible pour les interrupteurs qui contrôlent d'autres éléments tels que d'autres interrupteurs ou cases à cocher qui n'ont pas tous la même valeur. On pourra indiquer qu'un élément est un interrupteur ou non via l'attribut `aria-pressed` en complément du rôle `button` (si l'élément n'est pas déjà un élément de bouton natif) :

- Si `aria-pressed` n'est pas utilisé ou qu'il est défini avec l'état `"undefined"`, le bouton n'est pas un interrupteur.
- Si `aria-pressed="false"` est utilisé, le bouton est un interrupteur qui n'est pas actif/pressé.
- Si `aria-pressed="true"` est utilisé, le bouton est un interrupteur qui est actif/pressé.
- Si `aria-pressed="mixed"` est utilisé, le bouton est considéré comme partiellement actif.

On peut, par exemple, avoir un bouton « Couper le son » sur un lecteur audio. Dans ce cas, on peut indiquer que le son est éteint lorsque l'état `aria-pressed` vaut `true`. Le libellé utilisé pour un interrupteur ne doit pas changer lorsque l'état change. Dans notre exemple, le libellé reste « Couper le son » et un lecteur d'écran indiquera « L'interrupteur couper le son est actif" ou « L'interrupteur couper le son est inactif » selon la valeur de `aria-pressed`. Si on souhaite avoir un changement de libellé et passer de « Couper le son » à « Réactiver le son », un interrupteur ne serait pas approprié et `aria-pressed` devrait alors être évité.

### Interactions au clavier

| Touche            | Fonction          |
| ----------------- | ----------------- |
| <kbd>Entrée</kbd> | Activer le bouton |
| <kbd>Espace</kbd> | Activer le bouton |

Une fois le bouton activé, la gestion du focus dépendra du type d'action effectuée par le bouton. Ainsi, si cliquer sur le bouton déclenche l'ouverture d'une boîte de dialogue, le focus doit passer à cette boîte de dialogue. Si le bouton ferme une boîte de dialogue, le focus doit revenir sur le bouton qui permet d'ouvrir la boîte à moins que la fonction de la boîte de dialogue mène logiquement à un autre élément. Si le bouton modifie le contexte courant, le focus reste généralement sur le bouton (par exemple pour couper/remettre le son).

### Fonctionnalités JavaScript nécessaires

#### Gestionnaires d'évènements nécessaires

Les boutons peuvent être manipulés avec une souris, le toucher et le clavier. Pour les éléments HTML natifs `<button>`, l'évènement `onclick` du bouton est déclenché lors du clic de la souris ou lorsque l'utilisatrice ou l'utilisateur utilise la touche <kbd>Espace</kbd> ou <kbd>Entrée</kbd> lorsque le bouton a le focus. Si un autre élément est utilisé pour créer un bouton, l'évènement `onclick` ne se déclenche qu'au clic de la souris, y compris lorsqu'on utilise `role="button"`. C'est pour cette raison qu'on doit ajouter des gestionnaires d'évènements distincts à l'élément afin de réagir aux appuis sur les touches <kbd>Espace</kbd> ou <kbd>Entrée</kbd>.

- `onclick`
  - : Gère l'évènement déclenché lorsque le bouton est activé avec un clic de souris ou au toucher.
- `onKeyDown`

  - : Gère l'évènement déclenché lorsque le bouton est activé à l'aide de la touche

    <kbd>Espace</kbd>

    ou

    <kbd>Entrée</kbd>

    du clavier (attention, il ne s'agit pas de l'évènement déprécié [`onKeyPress`](/fr/docs/Web/API/Document/keypress_event)).

#### Modifier les valeurs des attributs

##### aria-pressed

La valeur de `aria-pressed` définit l'état d'un interrupteur. Cet attribut peut avoir l'une des quatre valeurs suivantes :

- `true`,
- `false`,
- `mixed`,
- `undefined`.

## Exemples

### Exemple de bouton simple

Dans cet exemple, on a un élément `<span>` pour lequel on a mis le rôle `button`. Comme il s'agit d'un élément `<span>`, l'attribut `tabindex` est nécessaire pour permettre au bouton de recevoir le focus et de s'inscrire dans l'ordre des tabulations. Le style CSS inclus permet de transformer visuellement l'élément `<span>` afin qu'il ressemble à un bouton et pour fournir une indication visuelle lorsque celui-ci a le focus.

Les gestionnaires d'évènements `handleBtnClick` et `handleBtnKeyDown` exécutent l'action du bouton lorsqu'il est activé avec un clic de souris ou au clavier avec la touche <kbd>Espace</kbd> ou <kbd>Entrée</kbd>. Dans cet exemple, l'action consiste à ajouter un nouveau nom à une liste de noms.

Vous pouvez essayer l'exemple en ajoutant un nom dans le champ texte. Le bouton ajoutera ensuite le nom à la liste.

#### HTML

```html
<h1>Exemple de bouton avec ARIA</h1>
<ul id="nameList"></ul>
<label for="newName">Saisissez votre nom :</label>
<input type="text" id="newName">
<span role="button" tabindex="0" onclick="handleCommand(event)" onKeyDown="handleCommand(event)">Ajouter le nom</span>
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
  // Gère à la fois l'activation à la souris
  // et au clavier

  // Les touches autres que Entrée et Espace ne devraient
  // déclencher de commande
  if (event instanceof KeyboardEvent && event.key !== 'Enter' && event.key !== ' ') {
    return;
  }

  // On récupère la valeur du nouveau nom à partir
  // du champ en saisie
  let newNameInput = document.getElementById('newName');
  let name = newNameInput.value;
  newNameInput.value = ''; // On vide le champ texte
  newNameInput.focus();  // On passe le focus au champ texte pour
                         // permettre la saisie d'un autre nom

  // On évite d'ajouter des noms vides à la liste
  if(name.length > 0) {
    listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(name));

    // On ajoute le nouveau nom à la liste.
    let list = document.getElementById('nameList');
    list.appendChild(listItem);
  }
}
```

{{EmbedLiveSample("Exemple_de_bouton_simple")}}

### Exemple d'interrupteur

Dans le fragment qui suit, on convertit un élément [`<span>`](/fr/docs/Web/HTML/Element/span) en interrupteur grâce au rôle `button` et à l'attribut `aria-pressed`. Lorsque le bouton est activé, `aria-pressed` change de valeur et alterne entre `true` et `false`.

#### HTML

```html
<button type="button" onclick="handleBtnClick()" onKeyDown="handleBtnKeyDown()">
  Couper le son
</button>

<span role="button" tabindex="0"
 aria-pressed="false" onclick="handleBtnClick(event)"
 onKeyDown="handleBtnKeyDown(event)">
  Couper le son
</span>

<audio id="audio" src="https://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3">
  Votre navigateur ne prend pas en charge l'élément <code>audio</code>.
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
    border: 2px solid #000;
}
```

#### JavaScript

```js
function handleBtnClick(event) {
  toggleButton(event.target);
}

function handleBtnKeyDown(event) {
  // On vérifie si les touches Entrée ou Espace sont pressées
  if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") { // Prise en charge de "Spacebar" pour IE11
    // On empêche le défilement par défaut lorsque
    // la touche espace est utilisée
    event.preventDefault();
    toggleButton(event.target);
  }
}

function toggleButton(element) {
  var audio = document.getElementById('audio');
  // On vérifie si le bouton est pressé
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // On fait alterner aria-pressed vers l'état opposé
  element.setAttribute("aria-pressed", !pressed);
  // On modifie l'état de lecture du fichier audio
  if(pressed) {
     audio.pause();
  } else {
     audio.play();
  }
}
```

#### Résultat

{{EmbedLiveSample('Exemple_d\'interrupteur')}}

## Accessibilité

Les boutons sont des contrôles interactifs et, à ce titre, peuvent recevoir le focus. Si le rôle `button` est ajouté à un élément qui ne peut recevoir le focus nativement (comme `<span>`, `<div>` ou `<p>`), l'attribut `tabindex` devra être utilisé afin de permettre le focus sur le bouton.

> **Attention :** Lorsqu'on utilise des liens avec le rôle `button`, il faut rajouter un gestionnaire d'évènement pour la touche <kbd>Espace</kbd>. En effet, les boutons s'activent avec <kbd>Espace</kbd> ou <kbd>Entrée</kbd> tandis que, nativement, les liens ne se déclenchent qu'avec <kbd>Entrée</kbd>.

Lorsqu'on utilise le rôle `button`, les lecteurs d'écran annonce l'élément comme un bouton, généralement en énonçant « clic » suivi du nom accessible du bouton. Le nom accessible correspond au contenu de l'élément ou à la valeur de `aria-label` ou à l'élément référencé avec l'attribut `aria-labelledby`, ou à une description si elle existe.

## Bonnes pratiques

Si un lien effectue l'action d'un bouton, fournir `role="button"` à l'élément permettra aux outils d'assistance de comprendre la fonction de l'élément. Toutefois, une meilleure solution consiste à ajuster l'aspect visuel afin qu'il corresponde à la fonction et au rôle ARIA. Lorsque c'est possible, il est recommandé d'utiliser les boutons HTML natifs (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` et `<input type="image">`) plutôt que le rôle `button`. En effet, les boutons HTML natifs sont pris en charge par l'ensemble des agents utilisateurs et outils d'assistance et satisfont aux règles de gestion du focus et du clavier, sans qu'il soit nécessaire d'ajouter des adaptations.

## Spécifications

| Spécification                                                                    | État                                             |
| -------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#button","button")}}                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices","#button","button")}} | {{Spec2('ARIA Authoring Practices')}} |

## Notes

### Attributs ARIA utilisés

- [`button`](https://www.w3.org/TR/wai-aria/roles#button)
- [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed)
- [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded)
- [`aria-haspopup`](https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup)

### Ressources complémentaires

- [Sémantique native forte en HTML5](https://www.w3.org/TR/html5/dom.html#aria-usage-note)
- [Notes sur l'utilisation d'ARIA en HTML](https://www.w3.org/TR/aria-in-html/)
- [Exemple de code officiel WAI-ARIA](https://www.w3.org/TR/wai-aria-practices/examples/button/button.html)
- [Rôle ARIA `menubutton`](/fr/docs/Web/Accessibility/ARIA/Roles/menubutton_role)
- [**Rôles WAI-ARIA**](/fr/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}
