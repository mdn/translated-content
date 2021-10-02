---
title: KeyboardEvent.key
slug: Web/API/KeyboardEvent/key
tags:
  - API
  - DOM
  - KeyboardEvent
  - Lecture-seule
  - Propriété
  - Reference
  - UI Events
translation_of: Web/API/KeyboardEvent/key
---
{{APIRef("DOM Events")}}

La propriété en lecture seule de `key` de l'interface {{domxref("KeyboardEvent")}} retourne la valeur d’une ou plusieurs touches pressées par l’utilisateur, tout en tenant compte de l'état des touches de modification telles que la touche <kbd>Shift</kbd> (_majuscules_) ainsi que les paramètres régionaux des clavier et mise en page. Ce peut être l’une des valeurs suivantes :

#### Valeurs des touches

Voir une liste complète des [valeurs de touches](/fr/docs/Web/API/KeyboardEvent/key/Key_Values)

- Si la valeur a une représentation d’impression, ce sera une chaîne de caractères Unicode non vide
- Si la valeur est une touche de contrôle, une des [valeurs de touches pré-définies](#Key_values).
- Si l’`KeyboardEvent` est causé par l’appui sur une touche morte, la valeur de la touche sera "`Dead`".
- Certaines touches de clavier spécialisées (telles que les touches étendues de contrôle des médias sur les claviers multimédias) ne génèrent pas de codes de touches sous Windows ; à la place, ils déclenchent les événements `WM_APPCOMMAND`. Ces événements sont connectés aux événements de clavier DOM et sont répertoriés parmi les «codes de touche virtuelle» pour Windows, même s'ils ne sont pas réellement des codes de touche.
- Si la valeur ne peut être identifiée, '`Unidentified`' sera retourné.

## Séquence KeyboardEvent

Les événements `KeyboardEvents` sont déclenchés selon une séquence prédéterminée, et la compréhension de ces éléments contribuera à comprendre la valeur de la propriété `key` pour un événement `KeyboardEvent` particulier. Pour une touche donnée, la séquence de KeyboardEvents est la suivante, en supposant que {{domxref ("Event.preventDefault")}} n'est pas appelée :

1.  Un événement {{domxref("Element/keydown_event", "keydown")}} (_touche abaissée_) est d'abord déclenché. Si la touche est maintenue enfoncée et que la touche est une touche de caractère, l'événement continue d'être émis dans un intervalle dépendant de l'implémentation de la plateforme, et la propriété en lecture seule {{domxref ("KeyboardEvent.repeat")}} est définie sur `true` (_vrai_).
2.  Si la touche est une touche de caractère qui entraînerait l'insertion d'un caractère dans {{HTMLElement ("entrée")}}, {{HTMLElement ("textarea")}} ou un élément dont {{domxref ("HTMLElement. contentEditable ")}} a la valeur `true`, les types d'événements {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} et {{domxref("HTMLElement/input_event", "input")}} sont déclenchés dans cet ordre. Notez que d'autres implémentations peuvent déclencher l'événement {{event ("keypress")}} si elles sont prises en charge. Les événements seront déclenchés à plusieurs reprises tant que la touche est maintenue enfoncée.
3.  Un évènement {{domxref("Element/keyup_event", "keyup")}} est déclenché une fois la touche relachée. Ceci complète le processus.

Dans les étapes 1 et 3, l'attribut `KeyboardEent.key` est défini et est déclaré à une valeur appropriée en fonction des règles définies.

## Exemple de séquence KeyboardEvent

Considérez la séquence d'événements générée lorsque nous interagissons avec la touche <kbd>Shift</kbd> et la touche <kbd>2</kbd> en utilisant un clavier américain et un clavier britannique.

Essayez d'expérimenter en utilisant les deux cas de test suivants :

1.  Maintenez la touche

    <kbd>shift</kbd>

    enfoncée, puis appuyez sur

    <kbd>2</kbd>

    et relâchez-la. Ensuite, relâchez la touche

    <kbd>shift</kbd>

    .

2.  Maintenez la touche `shift` enfoncée, puis appuyez sur

    <kbd>2</kbd>

    . Relâchez la touche

    <kbd>shift</kbd>

    . Finalement, relâchez la touche

    <kbd>2</kbd>

    .

### HTML

```html
<div class="fx">
  <div>
    <textarea rows="5" name="test-target" id="test-target"></textarea>
    <button type="button" name="btn-clear-console" id="btn-clear-console">clear console</button>
  </div>
  <div class="flex">
    <div id="console-log"></div>
  </div>
</div>
```

### CSS

```css
.fx {
  -webkit-display: flex;
  display: flex;
  margin-left: -20px;
  margin-right: -20px;
}

.fx > div {
  padding-left: 20px;
  padding-right: 20px;
}

.fx > div:first-child {
   width: 30%;
}

.flex {
  -webkit-flex: 1;
  flex: 1;
}

#test-target {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
```

### JavaScript

```js
let textarea = document.getElementById('test-target'),
consoleLog = document.getElementById('console-log'),
btnClearConsole = document.getElementById('btn-clear-console');

function logMessage(message) {
  let p = document.createElement('p');
  p.appendChild(document.createTextNode(message));
  consoleLog.appendChild(p);
}

textarea.addEventListener('keydown', (e) => {
  if (!e.repeat)
    logMessage(`first keydown event. key property value is "${e.key}"`);
  else
    logMessage(`keydown event repeats. key property value is "${e.key}"`);
});

textarea.addEventListener('beforeinput', (e) => {
  logMessage(`beforeinput event. you are about inputing "${e.data}"`);
});

textarea.addEventListener('input', (e) => {
  logMessage(`input event. you have just inputed "${e.data}"`);
});

textarea.addEventListener('keyup', (e) => {
  logMessage(`keyup event. key property value is "${e.key}"`);
});

btnClearConsole.addEventListener('click', (e) => {
  let child = consoleLog.firstChild;
  while (child) {
   consoleLog.removeChild(child);
   child = consoleLog.firstChild;
  }
});
```

### Résultat

{{EmbedLiveSample('Exemple_de_séquence_KeyboardEvent')}}

> **Note :** Sur les navigateurs qui n'implémentent pas complètement l'interface {{domxref("InputEvent")}} qui est utilisée pour les événements {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} et {{domxref("HTMLElement/input_event", "input")}}, vous pouvez obtenir une réponse incorrecte sur ces lignes du journal de sortie.

### Cas 1

Lorsque la touche Maj (_shift_) est enfoncée, un événement {{domxref("Element/keydown_event", "keydown")}} est d'abord déclenché et la valeur de la propriété `key` est définie sur la chaîne `"Shift"`. Comme nous gardons cette touche enfoncée, l'événement {{event ("keydown")}} est continu et ne se répéte pas car la touche Maj ne produit pas de caractère.

Lorsque la `key 2` est enfoncée, un autre événement {{domxref("Element/keydown_event", "keydown")}} est déclenché pour cette nouvelle touche, et la valeur de la propriété `key` pour l'événement est définie sur la chaîne `"@"` pour le clavier de type américain et `"""` pour le clavier de type britannique, à cause de la touche de changement de modificateur active. Les événements {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} et {{domxref("HTMLElement/input_event", "input")}} sont déclenchés ensuite parce qu'une touche de caractère a été activée.

Lorsque nous relâchons la `key 2`, un événement {{domxref("Element/keyup_event", "keyup")}} est déclenché et la propriété `key` conserve les valeurs de chaîne `"@"` et `"""` pour les différents claviers respectivement.

Lorsque nous relâchons enfin la touche `shift`, un autre événement {{domxref("Element/keyup_event", "keyup")}} est déclenché pour elle, et la valeur de l'attribut de la touche reste `"Shift"`.

### Cas 2

Lorsque la touche Maj est enfoncée, un événement {{domxref("Element/keydown_event", "keydown")}} est d'abord déclenché et la valeur de la propriété `key` est définie sur la chaîne "Shift". Comme nous maintenons cette touche enfoncée, l'événement {{domxref("Element/keydown_event", "keydown")}} est continu et ne se répéte pas car la touche Maj ne produit pas de caractère.

Lorsque la `key 2` est enfoncée, un autre événement {{domxref("Element/keydown_event", "keydown")}} est déclenché pour cette nouvelle touche, et la valeur de la propriété `key` pour l'événement est définie sur la chaîne `"@"` pour le clavier de type américain et `"""` pour le clavier de type britanique, à cause de la touche de changement de modificateur active. Les événements {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} et {{domxref("HTMLElement/input_event", "input")}} sont déclenchés ensuite parce qu'une touche de caractère a été activée. Comme nous maintenons la touche enfoncée, l'événement {{domxref("Element/keydown_event", "keydown")}} continue à se déclencher à plusieurs reprises et la propriété {{domxref ("KeyboardEvent.repeat")}} est définie sur `true`. Les évènements {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} et {{domxref("HTMLElement/input_event", "input")}} sont également déclenchés.

Lorsque nous relâchons la touche `shift`, un événement {{domxref("Element/keyup_event", "keyup")}} est déclenché et la valeur de l'attribut clé reste "Shift". À ce stade, notez que la valeur de la propriété `key` pour l'événement de répétition du clavier de la touche `key 2` est désormais "2" car la touche de modification du sélecteur n'est plus active. Il en va de même pour la propriété {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} des événements {{domxref("HTMLElement/input_event", "input")}} et {{event ("input")}}.

Lorsque nous relâchons enfin la touche `key 2`, un événement {{domxref("Element/keyup_event", "keyup")}} est déclenché mais la propriété `key` est définie sur la valeur de chaîne `"2"` pour les deux configurations de clavier car la touche de modification `shift` n'est plus active.

## Exemple

Cet exemple utilise {{domxref("EventTarget.addEventListener()")}} pour écouter les événements {{domxref("Element/keydown_event", "keydown")}} . Quand ils se produisent, la valeur de la touche est vérifiée pour voir si c'est l'une des touches qui intéressent le code, et si c'est le cas, elle est traitée (éventuellement en pilotant un vaisseau spatial, peut-être en changeant la cellule sélectionnée dans une feuille de calcul).

```js
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
  }

  switch (event.key) {
    case "ArrowDown":
      // Faire quelque chose pour la touche "flèche vers le bas" pressée.
      break;
    case "ArrowUp":
      // Faire quelque chose pour la touche "up arrow" pressée.
      break;
    case "ArrowLeft":
      // Faire quelque chose pour la touche "left arrow" pressée.
      break;
    case "ArrowRight":
      // Faire quelque chose pour la touche "right arrow" pressée.
      break;
    case "Enter":
      // Faire quelque chose pour les touches "enter" ou "return" pressées.
      break;
    case "Escape":
      // Faire quelque chose pour la touche "esc" pressée.
      break;
    default:
      return; // Quitter lorsque cela ne gère pas l'événement touche.
  }

  // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
  event.preventDefault();
}, true);
```

## Spécification

| Spécification                                                                                        | Statut                           | Commentaire                                           |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------- |
| {{SpecName('DOM3 Events', '#widl-KeyboardEvent-key', 'KeyboardEvent.key')}} | {{Spec2('DOM3 Events')}} | Définition initiale, incluant les valeurs de touches. |

## Compatibilité des navigateurs

{{Compat("api.KeyboardEvent.key")}}
