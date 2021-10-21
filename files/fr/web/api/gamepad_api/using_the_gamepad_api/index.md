---
title: Utiliser l'API Gamepad
slug: Web/API/Gamepad_API/Using_the_Gamepad_API
translation_of: Web/API/Gamepad_API/Using_the_Gamepad_API
original_slug: Web/Guide/API/Gamepad
---
{{ SeeCompatTable() }}

HTML5 a introduit plusieurs des composants nécessaires pour le développement de jeux vidéos riches et interactifs. Des technologies comme `<canvas>`, WebGL, `<audio>`, et `<video>`, ainsi que les implémentations JavaScript, ont mûri au point de supporter plusieurs fonctions autrefois réservées aux applications natives. L'API Gamepad est une manière pour les développeurs et _`designers`_ d'accéder aux contrôleurs de jeux.

> **Note :** Dans Firefox 29 et plus, l'API Gamepad est activée par défaut, tout comme pour les versions Nightly et Aurora. Depuis Firefox 24, l'API Gamepad était déjà disponible derrière une option dans les préférences. Il est possible de l'activer dans ces versions en ouvrant `about:config` et en activant `dom.gamepad.enabled`.

L'API Gamepad introduit de nouveaux évènements à l'objet {{ domxref("Window") }} pour lire l'état des contrôleurs. En plus de ces événements, l'API ajoute aussi un objet {{ domxref("Gamepad") }} que vous pouvez utiliser pour récupérer l'état d'un contrôleur connecté, et une méthode {{ domxref("navigator.getGamepads") }} que vous pouvez utiliser pour obtenir la liste des contrôleurs connus par la page.

## Connexion au contrôleur

Lorsqu'un nouveau contrôleur est connecté à l'ordinateur, la page active reçoit tout d'abord un événement {{ domxref("Window.gamepadconnected") }}. Si un contrôleur est déjà connecté lorsque la page termine de charger, l'événement {{ domxref("Window.gamepadconnected") }} est envoyé à la page active lorsque l'utilisateur appuie sur un bouton ou bouge un axe.

Dans Firefox, les contrôleurs ne sont rendus visibles à une page que lorsque l'utilisateur s'en sert alors que cette page est active. Cela permet d'éviter que les contrôleurs soient utilisés pour identifier l'utilisateur. Dès lors qu'un contrôleur a été utilisé, les autres contrôleurs connectés seront rendus visibles automatiquement.

Vous pouvez utiliser {{ domxref("Window.gamepadconnected") }} ainsi :

```js
window.addEventListener("gamepadconnected", function(e) {
  console.log("Contrôleur n°%d connecté : %s. %d boutons, %d axes.",
  e.gamepad.index, e.gamepad.id,
  e.gamepad.buttons.length, e.gamepad.axes.length);
});
```

Chaque contrôleur est associé à un identifiant unique, qui est disponible dans la propriété `gamepad` de l'événement.

> **Note :** À l'écriture de ces lignes, Chrome n'implémente pas les événements {{ domxref("Window.gamepadconnected") }} et {{ domxref("Window.gamepaddisconnected") }}. Vous devez utiliser {{ domxref("navigator.getGamepads") }} pour récupérer la liste des contrôleurs disponibles.

## Déconnexion du contrôleur

Lorsqu'un contrôleur est déconnecté, et si la page avait déjà reçu des données de ce contrôleur auparavant (par exemple par l'événement {{ domxref("Window.gamepadconnected") }}), un second événement est envoyé à la fenêtre active :  {{ domxref("Window.gamepaddisconnected") }}.

```js
window.addEventListener("gamepaddisconnected", function(e) {
  console.log("Contrôleur n°%d déconnecté : %s",
  e.gamepad.index, e.gamepad.id);
});
```

La propriété `index` sera unique à chaque périphérique connecté au système, même si plusieurs contrôleurs du même type sont utilisés. La propriété correspond également à l'indice du tableau retourné par {{ domxref("navigator.getGamepads") }}.

```js
var gamepads = {};

function gamepadHandler(event, connecting) {
  var gamepad = event.gamepad;
  // Note :
  // gamepad === navigator.getGamepads()[gamepad.index]

  if (connecting) {
    gamepads[gamepad.index] = gamepad;
  } else {
    delete gamepads[gamepad.index];
  }
}

window.addEventListener("gamepadconnected", function(e) { gamepadHandler(e, true); }, false);
window.addEventListener("gamepaddisconnected", function(e) { gamepadHandler(e, false); }, false);
```

Cet exemple montre également comment la propriété `gamepad` peut être conservée après que l'événement se soit terminé. Cette technique sera utilisée plus tard pour obtenir l'état du périphérique.

\[PAGE NON TRADUITE DEPUIS ICI...]

## Querying the Gamepad object

As you can see, the **gamepad** events discussed above include a `gamepad` property on the event object, which returns a {{ domxref("Gamepad") }} object. We can use this in order to determine which gamepad (i.e., its ID) had caused the event, since multiple gamepads might be connected at once. We can do much more with the {{ domxref("Gamepad") }} object, including holding a reference to it and querying it to find out which buttons and axes are being pressed at any one time. Doing so is often desirable for games or other interactive web pages that need to know the state of a gamepad now vs. the next time an event fires.

Performing such checks tends to involve using the {{ domxref("Gamepad") }} object in conjunction with an animation loop (e.g., {{ domxref("requestAnimationFrame") }}), where developers want to make decisions for the current frame based on the state of the gamepad or gamepads.

> **Note :** The Gamepad API also provides a function -- {{ domxref("Navigator.getGamepads") }}-- that returns a list of all devices currently visible to the webpage, an array of {{ domxref("Gamepad") }} objects. This can then be used to get the same information. For example, the first code example above you be rewritten as shown below:

```js
window.addEventListener("gamepadconnected", function(e) {
  var gp = navigator.getGamepads()[e.gamepad.index];
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
  gp.index, gp.id,
  gp.buttons.length, gp.axes.length);
});
```

The {{ domxref("Gamepad") }} object's properties are as follows:

- `id`: A string containing some information about the controller. This is not strictly specified, but in Firefox it will contain three pieces of information separated by dashes (`-`): two 4-digit hexadecimal strings containing the USB vendor and product id of the controller, and the name of the controller as provided by the driver. This information is intended to allow you to find a mapping for the controls on the device as well as display useful feedback to the user.
- `index`: An integer that is unique for each gamepad currently connected to the system. This can be used to distinguish multiple controllers. Note that disconnecting a device and then connecting a new device may reuse the previous index.
- `mapping`: A string indicating whether the browser has remapped the controls on the device to a known layout. Currently there is only one supported known layout–the [standard gamepad](https://dvcs.w3.org/hg/gamepad/raw-file/default/gamepad.html#remapping). If the browser is able to map controls on the device to that layout the `mapping` property will be set to the string `standard`.
- `connected`: A boolean indicating whether the gamepad is still connected to the system. If this is so the value is `True`; if not, it is `False`.
- `buttons`: An array of {{ domxref("GamepadButton") }} objects representing the buttons present on the device. Each {{ domxref("GamepadButton") }} has a `pressed` and a `value` property:

  - The `pressed` property is a boolean indicating whether the button is currently pressed (`true`) or unpressed (`false`).
  - The `value` property is a floating point value used to enable representing analog buttons, such as the triggers on many modern gamepads. The values are normalized to the range 0.0..1.0, with 0.0 representing a button that is not pressed, and 1.0 representing a button that is fully pressed.

- `axes`: An array representing the controls with axes present on the device (e.g. analog thumb sticks). Each entry in the array is a floating point value in the range -1.0 - 1.0, representing the axis position from the lowest value (-1.0) to the highest value (1.0).
- `timestamp`: This returns a {{ domxref("DOMHighResTimeStamp") }} representing the last time the data for this gamepad was updated, allowing developers to determine if the `axes` and `button` data have been updated from the hardware. The value must be relative to the `navigationStart` attribute of the {{ domxref("PerformanceTiming") }} interface. Values are monotonically increasing, meaning that they can be compared to determine the ordering of updates, as newer values will always be greater than or equal to older values. Note that this property is not currently supported in Firefox.

> **Note :** The Gamepad object is available on the {{ domxref("Window.gamepadconnected") }} event rather than the {{ domxref("Window") }} object itself, for security reasons. Once we have a reference to it, we can query its properties for information about the current state of the gamepad. Behind the scenes, this object will be updated every time the gamepad's state changes.

### Using button information

Let's look at a simple example that displays connection information for one gamepad (it ignores subsequent gamepad connections) and allows you to move a ball around the screen using the four gamepad buttons on the right hand side of the gamepad. You can [view the demo live](http://chrisdavidmills.github.io/gamepad-buttons/), and [find the source code](https://github.com/chrisdavidmills/gamepad-buttons/tree/master) on Github.

To start with, we declare some variables: The `gamepadInfo` paragraph that the connection info is written into, the `ball` that we want to move, the `start` variable that acts as the ID for `requestAnimation Frame`, the `a` and `b` variables that act as position modifiers for moving the ball, and the shorthand variables that will be used for the {{ domxref("requestAnimationFrame") }} and {{ domxref("cancelRequestAnimationFrame") }} cross browser forks.

```js
var gamepadInfo = document.getElementById("gamepad-info");
var ball = document.getElementById("ball");
var start;
var a = 0;
var b = 0;

var rAF = window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.requestAnimationFrame;

var rAFStop = window.mozCancelRequestAnimationFrame ||
  window.webkitCancelRequestAnimationFrame ||
  window.cancelRequestAnimationFrame;
```

Next we use the {{ domxref("Window.gamepadconnected") }} event to check for a gamepad being connected. When one is connected, we grab the gamepad using {{ domxref("Navigator.getGamepads") }}`[0]`, print information about the gamepad into our gamepad info `div`, and fire the `gameLoop()` function that starts the whole ball movement process up.

```js
window.addEventListener("gamepadconnected", function(e) {
  var gp = navigator.getGamepads()[e.gamepad.index];
  gamepadInfo.innerHTML = "Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";

  gameLoop();
});
```

Now we use the {{ domxref("Window.gamepaddisconnected") }} event to check if the gamepad is disconnected again. If so, we stop the {{ domxref("requestAnimationFrame") }} loop (see below) and revert the gamepad information back to what it was originally.

```js
window.addEventListener("gamepaddisconnected", function(e) {
  gamepadInfo.innerHTML = "Waiting for gamepad.";

  rAFStop(start);
});
```

Chrome does things differently here. Instead of constantly storing the gamepad's latest state in a variable it only stores a snapshot, so to do the same thing in Chrome you have to keep polling it and then only use the {{ domxref("Gamepad") }} object in code when it is available. We have done this below using {{ domxref("Window.setInterval") }}; once the object is available the gamepad info is outputted, the game loop is started, and the interval is cleared using {{ domxref("Window.clearInterval") }}. Note that in older versions of Chrome {{ domxref("Navigator.getGamepads") }} is implemented with a `webkit` prefix. We attempt to detect and handle both the prefixed version and the standard version of the function for backwards-compatibility.

```js
if(!('GamepadEvent' in window)) {
  // No gamepad events available, poll instead.
  var interval = setInterval(pollGamepads, 500);
}

function pollGamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  for (var i = 0; i < gamepads.length; i++) {
    var gp = gamepads[i];
    if(gp) {
      gamepadInfo.innerHTML = "Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";
      gameLoop();
      clearInterval(interval);
    }
  }
}
```

Now on to the main game loop. In each execution of the loop we check if one of four buttons is being pressed; if so, we update the values of the `a` and `b` movement variables appropriately, then update the {{ cssxref("left") }} and {{ cssxref("top") }} properties, changing their values to the current values of `a` and `b` respectively. This has the effect of moving the ball around the screen.  In current versions of Chrome (version 34 as of this writing) the button values are stored as an array of double values, instead of {{ domxref("GamepadButton") }} objects. This is fixed in development versions.

After all this is done, we use our `rAF` variable to request the next animation frame, running `gameLoop()` again.

```js
function buttonPressed(b) {
  if (typeof(b) == "object") {
    return b.pressed;
  }
  return b == 1.0;
}

function gameLoop() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  if (!gamepads)
    return;

  var gp = gamepads[0];
  if (buttonPressed(gp.buttons[0])) {
    b--;
  } else if (buttonPressed(gp.buttons[2])) {
    b++;
  }
  if(buttonPressed(gp.buttons[1])) {
    a++;
  } else if(buttonPressed(gp.buttons[3])) {
    a--;
  }

  ball.style.left = a*2 + "px";
  ball.style.top = b*2 + "px";

  var start = rAF(gameLoop);
};
```

### Using axes information

**TBD (basically the same, except using axes\[i] rather than button\[i].value for both Firefox and Chrome.)**

## Complete example: Displaying gamepad state

This example shows how to use the {{ domxref("Gamepad") }} object, as well as the {{ domxref("Window.gamepadconnected") }} and {{ domxref("Window.gamepaddisconnected") }} events in order to display the state of all gamepads connected to the system. You can find a [working demo](http://luser.github.io/gamepadtest/) and look at the [full source code](https://github.com/luser/gamepadtest) on Github.

```js
var haveEvents = 'GamepadEvent' in window;
var controllers = {};
var rAF = window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.requestAnimationFrame;

function connecthandler(e) {
  addgamepad(e.gamepad);
}
function addgamepad(gamepad) {
  controllers[gamepad.index] = gamepad; var d = document.createElement("div");
  d.setAttribute("id", "controller" + gamepad.index);
  var t = document.createElement("h1");
  t.appendChild(document.createTextNode("gamepad: " + gamepad.id));
  d.appendChild(t);
  var b = document.createElement("div");
  b.className = "buttons";
  for (var i=0; i<gamepad.buttons.length; i++) {
    var e = document.createElement("span");
    e.className = "button";
    //e.id = "b" + i;
    e.innerHTML = i;
    b.appendChild(e);
  }
  d.appendChild(b);
  var a = document.createElement("div");
  a.className = "axes";
  for (var i=0; i<gamepad.axes.length; i++) {
    var e = document.createElement("progress");
    e.className = "axis";
    //e.id = "a" + i;
    e.setAttribute("max", "2");
    e.setAttribute("value", "1");
    e.innerHTML = i;
    a.appendChild(e);
  }
  d.appendChild(a);
  document.getElementById("start").style.display = "none";
  document.body.appendChild(d);
  rAF(updateStatus);
}

function disconnecthandler(e) {
  removegamepad(e.gamepad);
}

function removegamepad(gamepad) {
  var d = document.getElementById("controller" + gamepad.index);
  document.body.removeChild(d);
  delete controllers[gamepad.index];
}

function updateStatus() {
  if (!haveEvents) {
    scangamepads();
  }
  for (j in controllers) {
    var controller = controllers[j];
    var d = document.getElementById("controller" + j);
    var buttons = d.getElementsByClassName("button");
    for (var i=0; i<controller.buttons.length; i++) {
      var b = buttons[i];
      var val = controller.buttons[i];
      var pressed = val == 1.0;
      if (typeof(val) == "object") {
        pressed = val.pressed;
        val = val.value;
      }
      var pct = Math.round(val * 100) + "%"
      b.style.backgroundSize = pct + " " + pct;
      if (pressed) {
        b.className = "button pressed";
      } else {
        b.className = "button";
      }
    }

    var axes = d.getElementsByClassName("axis");
    for (var i=0; i<controller.axes.length; i++) {
      var a = axes[i];
      a.innerHTML = i + ": " + controller.axes[i].toFixed(4);
      a.setAttribute("value", controller.axes[i] + 1);
    }
  }
  rAF(updateStatus);
}

function scangamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
  for (var i = 0; i < gamepads.length; i++) {
    if (gamepads[i]) {
      if (!(gamepads[i].index in controllers)) {
        addgamepad(gamepads[i]);
      } else {
        controllers[gamepads[i].index] = gamepads[i];
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

## Specifications

{{page("/en-US/docs/Gamepad","Specifications")}}

## Browser compatibility

{{page("/en-US/docs/Gamepad","Browser_compatibility")}}
