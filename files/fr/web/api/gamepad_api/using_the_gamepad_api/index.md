---
title: Utiliser l'API Gamepad
slug: Web/API/Gamepad_API/Using_the_Gamepad_API
---

{{DefaultAPISidebar("Gamepad API")}}

HTML5 a introduit de nombreuses briques technologiques qui permettent le développement de jeux interactifs. Les fonctionnalités offertes par `<canvas>`, WebGL, `<audio>`, et `<video>`, ainsi que les API JavaScript correspondantes, ont suffisamment gagné en maturité pour réaliser des tâches qui nécessitaient auparavant du code natif. L'API <i lang="en">Gamepad</i> est un outil qui permet d'accéder et d'utiliser les manettes et autres contrôleurs de jeux.

L'API [<i lang="en">Gamepad</i>](/fr/docs/Web/API/Gamepad_API) introduit de nouveaux évènements sur l'objet [`Window`](/fr/docs/Web/API/Window) qui permettent de lire l'état de la manette. En plus de ces évènements, l'API ajoute également un objet [`Gamepad`](/fr/docs/Web/API/Gamepad), qui permet de connaître l'état d'une manette connectée et une méthode [`navigator.getGamepads()`](/fr/docs/Web/API/Navigator/getGamepads) qu'on peut utiliser pour obtenir la liste des manettes connues sur la page.

## Connecter une manette

Lorsqu'une nouvelle manette est connectée à l'ordinateur, la page qui a le focus reçoit d'abord un évènement [`gamepadconnected`](/fr/docs/Web/API/Window/gamepadconnected_event). Si une manette est déjà connectée lorsque la page est chargée, l'évènement [`gamepadconnected`](/fr/docs/Web/API/Window/gamepadconnected_event) est émis sur la page lorsque la personne appuie sur un bouton ou déplace un axe.

> **Note :** Dans Firefox, les manettes sont uniquement exposées à la page après qu'il y a eu une interaction de la personne avec la page. Cela permet d'éviter à ce que les manettes soient utilisées pour créer une empreinte, de faciliter le pistage. Une fois qu'une manette a interagi avec la page, les autres manettes connectées seront automatiquement visibles.

On peut utiliser [`gamepadconnected`](/fr/docs/Web/API/Window/gamepadconnected_event) comme ceci&nbsp;:

```js
window.addEventListener("gamepadconnected", function (e) {
  console.log(
    "Manette connectée à l'indice %d : %s. %d boutons, %d axes.",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
});
```

Chaque manette dispose d'un identifiant unique qui lui est associé et qui est disponible via la propriété [`gamepad`](/fr/docs/Web/API/GamepadEvent/gamepad) de l'évènement.

## Déconnecter une manette

Lorsqu'une manette est déconnectée et si la page avait déjà reçu des données pour cette manette (par exemple avec [`gamepadconnected`](/fr/docs/Web/API/Window/gamepadconnected_event)), un deuxième évènement est envoyé sur la fenêtre, [`gamepaddisconnected`](/fr/docs/Web/API/Window/gamepaddisconnected_event)&nbsp;:

```js
window.addEventListener("gamepaddisconnected", function (e) {
  console.log(
    "Manette déconnectée à l'indice %d : %s",
    e.gamepad.index,
    e.gamepad.id,
  );
});
```

La propriété [`index`](/fr/docs/Web/API/Gamepad/index) de l'objet porté par `gamepad` sera unique pour chaque appareil connecté au système, même si plusieurs manettes du même type sont utilisées. La propriété `index` fonctionne également comme l'indice qui peut être utilisé pour parcourir le tableau ([`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)) renvoyé par la méthode [`Navigator.getGamepads()`](/fr/docs/Web/API/Navigator/getGamepads).

```js
let gamepads = {};

function gamepadHandler(event, connecting) {
  let gamepad = event.gamepad;
  // Note :
  // gamepad === navigator.getGamepads()[gamepad.index]

  if (connecting) {
    gamepads[gamepad.index] = gamepad;
  } else {
    delete gamepads[gamepad.index];
  }
}

window.addEventListener(
  "gamepadconnected",
  function (e) {
    gamepadHandler(e, true);
  },
  false,
);
window.addEventListener(
  "gamepaddisconnected",
  function (e) {
    gamepadHandler(e, false);
  },
  false,
);
```

L'exemple qui précède illustre également comment la propriété `gamepad` peut être retenue après la fin de l'évènement. Nous utiliserons cette technique plus tard pour faire des requêtes sur l'état de l'appareil.

## Utiliser l'objet `Gamepad`

Comme vous pouvez le voir, les évènements `gamepad` présentés ci-avant incluent une propriété `gamepad` rattachée à l'objet de l'évènement. Cette propriété fournit un objet [`Gamepad`](/fr/docs/Web/API/Gamepad). On peut utiliser cet objet afin de déterminer la manette qui a causé l'évènement (avec son identifiant), car plusieurs manettes pourraient être connectées simultanément. On peut faire bien plus avec cet objet [`Gamepad`](/fr/docs/Web/API/Gamepad), y compris garder une référence vers celui-ci et l'utiliser pour déterminer les boutons et axes utilisés à tout moment. Une telle utilisation est souvent nécessaire pour les jeux ou les pages interactives lorsqu'il faut connaître l'état de la manette à l'instant T et l'état dans lequel elle sera au moment du prochain évènement.

Généralement, ces opérations sont effectuées en utilisant un objet [`Gamepad`](/fr/docs/Web/API/Gamepad) avec une boucle d'animation (par exemple avec [`requestAnimationFrame`](/fr/docs/Web/API/Window/requestAnimationFrame)), où on peut développer la logique du jeu afin de choisir quoi faire pour la <i lang="en">frame</i> courante selon l'état de la (ou des) manette(s).

La méthode [`Navigator.getGamepads()`](/fr/docs/Web/API/Navigator/getGamepads) renvoie un tableau de l'ensemble des appareils qui sont actuellement visibles de la page web sous la forme d'objets [`Gamepad`](/fr/docs/Web/API/Gamepad) (la première valeur vaut toujours `null`, et c'est `null` qui est renvoyé s'il n'y a pas de manettes connectées). On peut l'utiliser pour obtenir les mêmes informations. Ainsi, le premier exemple de code ci-avant pourrait être réécrit de la façon suivante&nbsp;:

```js
window.addEventListener("gamepadconnected", function (e) {
  var gp = navigator.getGamepads()[e.gamepad.index];
  console.log(
    "Manette connectée à l'indice %d : %s. %d boutons, %d axes.",
    gp.index,
    gp.id,
    gp.buttons.length,
    gp.axes.length,
  );
});
```

Les propriétés d'un objet [`Gamepad`](/fr/docs/Web/API/Gamepad) sont&nbsp;:

- `id`
  - : Une chaîne de caractères contenant des informations sur la manette. Le format n'est pas spécifié de façon stricte. Pour Firefox, ce sera trois informations séparées par des tirets (`-`)&nbsp;: deux chaînes de caractères avec 4 chiffres hexadécimaux indiquant l'éditeur du pilote USB et l'identifiant produit de la manette puis le nom de la manette fourni par le pilote. Ces informations doivent permettre de trouver la correspondance des touches de l'appareil et de fournir des retours pertinents à la personne qui utilise la manette.
- `index`
  - : Un entier, unique pour chaque manette actuellement connectée au système. Elle peut être utilisée afin de distinguer une manette parmi plusieurs. On notera que déconnecter un appareil puis en reconnecter un nouveau pourra réutiliser un des indices précédemment utilisé.
- `mapping`
  - : Une chaîne de caractères qui indique si le navigateur a adapté les contrôles de l'appareil sur une disposition connue. Il existe actuellement une seule disposition prise en charge, [la manette standard](https://dvcs.w3.org/hg/gamepad/raw-file/default/gamepad.html#remapping). Si le navigateur est capable de faire correspondre les contrôles de l'appareil avec cette disposition, la propriété `mapping` vaudra la chaîne de caractères `standard`.
- `connected`
  - : Un booléen qui indique si la manette est toujours connectée au système (`true` si c'est le cas, `false` sinon).
- `buttons`
  - : Un tableau d'objets [`GamepadButton`](/fr/docs/Web/API/GamepadButton) représentant les boutons présents sur l'appareil. Chaque objet [`GamepadButton`](/fr/docs/Web/API/GamepadButton) aura deux propriétés, `pressed` et `value`&nbsp;:
    - `pressed`
      - : Un booléen qui indique si le bouton est actuellement enfoncé/appuyé (`true`) ou relâché (`false`).
    - `value`
      - : Un nombre flottant utilisée pour représenter la valeur des boutons analogiques comme les gâchettes. Les valeurs sont normalisées sur l'intervalle `[0.0, 1.0]`, avec `0.0` qui représente un bouton sur lequel il n'y a aucune pression et `1.0` qui représente un bouton complètement appuyé/enfoncé.
- `axes`
  - : Un tableau qui représente les contrôles où des axes sont présents sur l'appareil (par exemple les joysticks analogiques). Chaque élément du tableau est une valeur flottante sur l'intervalle `[-1.0, 1.0]` qui représente la position sur un axe, de la valeur la plus faible (`-1.0`), à la valeur la plus haute (`1.0`).
- `timestamp`
  - : : Un objet [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) indiquant le dernier instant auquel les données des manettes ont été mises à jour. Cela permet de déterminer si les données fournies par `axes` et `button` ont été mises à jour par le matériel. Cette valeur doit être relative à l'attribut `navigationStart` de l'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming). Les valeurs augmentent de façon monotone, ce qui signifie qu'on peut les comparer pour déterminer l'ordre des mises à jour (les valeurs les plus récentes seront toujours supérieures aux valeurs antérieures). Cette propriété n'est actuellement pas prise en charge par Firefox.

> **Note :** L'objet `Gamepad` est disponible sur l'évènement [`gamepadconnected`](/fr/docs/Web/API/Window/gamepadconnected_event) plutôt que sur l'objet [`Window`](/fr/docs/Web/API/Window) pour des raisons de sécurité. Une fois qu'une référence est obtenue, on peut consulter ses propriétés pour obtenir des informations à propos de la manette. Sous le capot, cet objet est mis à jour à chaque fois que l'état de la manette change.

### Utiliser les informations des boutons

Prenons un exemple simple, qui affiche les informations de connexion d'une seule manette (on ignore ici les connexions des manettes qui auraient lieu après) et qui permet de déplacer une balle sur l'écran à l'aide des quatre boutons situés sur le côté droit de la manette. Vous pouvez [voir la démonstration en direct](https://chrisdavidmills.github.io/gamepad-buttons/), ainsi que [le code source correspondant](https://github.com/chrisdavidmills/gamepad-buttons/tree/master) sur GitHub.

Pour commencer, on déclare quelques variables&nbsp;:

- `gamepadInfo` qui correspond au paragraphe dans lequel on écrit les informations de connexion
- `ball` qui est la balle qu'on souhaite déplacer
- `start` qui est la variable utilisée comme identifiant pour `requestAnimationFrame()`
- `a` et `b` qui serviront de modificateurs de position pour la balle

On a également (dans le code, mais pas ici par souci de concision), des variables pour faciliter l'accès à [`requestAnimationFrame()`](/fr/docs/Web/API/Window/requestAnimationFrame) et [`cancelAnimationFrame()`](/fr/docs/Web/API/Window/cancelAnimationFrame) dans les différents navigateurs.

```js
let gamepadInfo = document.getElementById("gamepad-info");
let ball = document.getElementById("ball");
let start;
let a = 0;
let b = 0;
```

Ensuite, on utilise l'évènement [`gamepadconnected`](/fr/docs/Web/API/Window/gamepadconnected_event) pour vérifier si une manette est connectée. Lorsqu'une manette est connectée, on récupère l'objet correspondant avec [`Navigator.getGamepads()[0]`](/fr/docs/Web/API/Navigator/getGamepads) et on affiche les informations dans l'élément `div` correspondant puis on déclenche la fonction `gameLoop()` qui démarre la procédure pour le mouvement de la balle.

```js
window.addEventListener("gamepadconnected", function (e) {
  let gp = navigator.getGamepads()[e.gamepad.index];
  gamepadInfo.innerHTML =
    "Manette connectée à l'indice" +
    gp.index +
    " : " +
    gp.id +
    ". Elle a " +
    gp.buttons.length +
    " boutons et " +
    gp.axes.length +
    " axes.";

  gameLoop();
});
```

On gère également l'évènement [`gamepaddisconnected`](/fr/docs/Web/API/Window/gamepaddisconnected_event) pour vérifier si la manette a été déconnectée. Si c'est le cas, on arrête la boucle [`requestAnimationFrame()`](/fr/docs/Web/API/Window/requestAnimationFrame) (voir après) et on réinitialise les informations affichées sur la manette.

```js
window.addEventListener("gamepaddisconnected", function (e) {
  gamepadInfo.innerHTML = "En attente d'une manette.";

  cancelRequestAnimationFrame(start);
});
```

Pour Chrome, les choses sont différentes. Le navigateur ne stocke qu'un instantané de l'état de la manette et il faut donc continuellement rafraîchir l'état connu avant d'utiliser l'objet [`Gamepad`](/fr/docs/Web/API/Gamepad) lorsque celui-ci devient disponible. Dans le code qui suit, on fait cela avec [`setInterval()`](/fr/docs/Web/API/setInterval). Une fois que l'objet est disponible, les informations sont affichées, la boucle de jeu commence et l'intervalle de répétition pour l'état de la manette est arrêté avec [`clearInterval`](/fr/docs/Web/API/clearInterval). Pour les versions les plus anciennes de Chrome, [`Navigator.getGamepads()`](/fr/docs/Web/API/Navigator/getGamepads) est implémentée avec un préfixe `webkit`. Pour une rétro-compatibilité, on essaie ici de détecter et de gérer les deux cas (avec et sans préfixe).

```js
let interval;

if (!("ongamepadconnected" in window)) {
  // Les évènements gamepad ne sont pas disponibles
  // On boucle pour connaître l'état à la place
  interval = setInterval(pollGamepads, 500);
}

function pollGamepads() {
  let gamepads = navigator.getGamepads
    ? navigator.getGamepads()
    : navigator.webkitGetGamepads
    ? navigator.webkitGetGamepads
    : [];
  for (let i = 0; i < gamepads.length; i++) {
    let gp = gamepads[i];
    if (gp) {
      gamepadInfo.innerHTML =
        "Manette connectée à l'indice " +
        gp.index +
        " : " +
        gp.id +
        ". Elle a " +
        gp.buttons.length +
        " boutons et " +
        gp.axes.length +
        " axes.";
      gameLoop();
      clearInterval(interval);
    }
  }
}
```

Voyons maintenant la boucle de jeu principale. Pour chaque exécution de la boucle, on regarde si un des quatre boutons est pressé. Si c'est le cas, on met à jour les variables de mouvement `a` et `b` de façon correspondante. Ensuite, on met à jour les propriétés CSS [`left`](/fr/docs/Web/CSS/left) et [`top`](/fr/docs/Web/CSS/top) avec les valeurs respectives de `a` et `b`. En pratique, cela aura pour effet de déplacer la balle sur l'écran.

Une fois que tout ça est fait, on utilise `requestAnimationFrame()` pour passer à la <i lang="en">frame</i> suivante, où on exécute à nouveau `gameLoop()`.

```js
function buttonPressed(b) {
  if (typeof b == "object") {
    return b.pressed;
  }
  return b == 1.0;
}

function gameLoop() {
  let gamepads = navigator.getGamepads
    ? navigator.getGamepads()
    : navigator.webkitGetGamepads
    ? navigator.webkitGetGamepads()
    : [];
  if (!gamepads) {
    return;
  }

  let gp = gamepads[0];
  if (buttonPressed(gp.buttons[0])) {
    b--;
  } else if (buttonPressed(gp.buttons[2])) {
    b++;
  }
  if (buttonPressed(gp.buttons[1])) {
    a++;
  } else if (buttonPressed(gp.buttons[3])) {
    a--;
  }

  ball.style.left = a * 2 + "px";
  ball.style.top = b * 2 + "px";

  start = requestAnimationFrame(gameLoop);
}
```

## Exemple complet&nbsp;: afficher l'état de la manette

Cet exemple illustre comment utiliser l'objet [`Gamepad`](/fr/docs/Web/API/Gamepad) ainsi que les évènements [`gamepadconnected`](/fr/docs/Web/API/Window/gamepadconnected_event) et [`gamepaddisconnected`](/fr/docs/Web/API/Window/gamepaddisconnected_event) afin d'afficher l'état de l'ensemble des manettes connectées au système. Vous pouvez [voir la démonstration fonctionner](https://luser.github.io/gamepadtest/) et consulter [le code source complet sur GitHub](https://github.com/luser/gamepadtest).

```js
let haveEvents = "ongamepadconnected" in window;
let controllers = {};

function connecthandler(e) {
  addgamepad(e.gamepad);
}

function addgamepad(gamepad) {
  controllers[gamepad.index] = gamepad;

  let d = document.createElement("div");
  d.setAttribute("id", "controller" + gamepad.index);

  let t = document.createElement("h1");
  t.appendChild(document.createTextNode("gamepad: " + gamepad.id));
  d.appendChild(t);

  let b = document.createElement("div");
  b.className = "buttons";
  for (let i = 0; i < gamepad.buttons.length; i++) {
    let e = document.createElement("span");
    e.className = "button";
    //e.id = "b" + i;
    e.innerHTML = i;
    b.appendChild(e);
  }

  d.appendChild(b);

  let a = document.createElement("div");
  a.className = "axes";

  for (let i = 0; i < gamepad.axes.length; i++) {
    let p = document.createElement("progress");
    p.className = "axis";
    //p.id = "a" + i;
    p.setAttribute("max", "2");
    p.setAttribute("value", "1");
    p.innerHTML = i;
    a.appendChild(p);
  }

  d.appendChild(a);

  // Voir https://github.com/luser/gamepadtest/blob/master/index.html
  let start = document.getElementById("start");
  if (start) {
    start.style.display = "none";
  }

  document.body.appendChild(d);
  requestAnimationFrame(updateStatus);
}

function disconnecthandler(e) {
  removegamepad(e.gamepad);
}

function removegamepad(gamepad) {
  let d = document.getElementById("controller" + gamepad.index);
  document.body.removeChild(d);
  delete controllers[gamepad.index];
}

function updateStatus() {
  if (!haveEvents) {
    scangamepads();
  }

  let i = 0;
  let j;

  for (j in controllers) {
    let controller = controllers[j];
    let d = document.getElementById("controller" + j);
    let buttons = d.getElementsByClassName("button");

    for (i = 0; i < controller.buttons.length; i++) {
      let b = buttons[i];
      let val = controller.buttons[i];
      let pressed = val == 1.0;
      if (typeof val == "object") {
        pressed = val.pressed;
        val = val.value;
      }

      let pct = Math.round(val * 100) + "%";
      b.style.backgroundSize = pct + " " + pct;

      if (pressed) {
        b.className = "button pressed";
      } else {
        b.className = "button";
      }
    }

    let axes = d.getElementsByClassName("axis");
    for (i = 0; i < controller.axes.length; i++) {
      let a = axes[i];
      a.innerHTML = i + ": " + controller.axes[i].toFixed(4);
      a.setAttribute("value", controller.axes[i] + 1);
    }
  }

  requestAnimationFrame(updateStatus);
}

function scangamepads() {
  let gamepads = navigator.getGamepads
    ? navigator.getGamepads()
    : navigator.webkitGetGamepads
    ? navigator.webkitGetGamepads()
    : [];
  for (let i = 0; i < gamepads.length; i++) {
    if (gamepads[i]) {
      if (gamepads[i].index in controllers) {
        controllers[gamepads[i].index] = gamepads[i];
      } else {
        addgamepad(gamepads[i]);
      }
    }
  }
}

window.addEventListener("gamepadconnected", connecthandler);
window.addEventListener("gamepaddisconnected", disconnecthandler);

if (!haveEvents) {
  setInterval(scangamepads, 500);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
