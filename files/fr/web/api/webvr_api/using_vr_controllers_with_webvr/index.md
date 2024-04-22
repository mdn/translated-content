---
title: Utiliser des contrôleurs de réalité virtuelle pour du WebVR
slug: Web/API/WebVR_API/Using_VR_controllers_with_WebVR
---

{{APIRef("WebVR API")}}

La plupart des matériels de WebVR possède des contrôleurs qui viennent avec le casque de réalité virtuelle. Ceux-ci peuvent être utilisés dans les application WebVR grâce à l'[API Gamepad](/fr/docs/Web/API/Gamepad_API), et plus spécifiquement avec l'[API Gamepad Extensions](/fr/docs/Web/API/Gamepad_API#Experimental_Gamepad_extensions) qui ajoute des API pour accéder, entre autres, à la [position du controller](/fr/docs/Web/API/GamepadPose), au [retour haptique](/fr/docs/Web/API/GamepadHapticActuator), etc.. Cet article fournit les bases pour utiliser ces API.

## L'API WebVR

L'[API WebVR](/fr/docs/Web/API/WebVR_API) est jeune mais possède déjà des fonctionnalités très interressantes pour le web et pour que les développeur·euse·s puisse créer des expériences de réalité virtuelle sur le web. Cela est possible grâce à un accès aux données des casques de réalité virtuelle connectés à votre ordinateur. Ceux-ci seront indentifié comme des objets {{domxref("VRDisplay")}},que vous pourrez manipuler pour commencer et arrêter l'affichage dans le casque, récupérer des données de mouvement (orientation, position...) qui pourront être utilisés pour mettre à jour l'affichage d'une animation, par exemple.

Avant de commencer, vous devriez être déjà avoir des bases de l'API WebVR. Si ce n'est pas le cas, allez lire l'article [Utiliser l'API WebVR](/fr/docs/Web/API/WebVR_API/Using_the_WebVR_API), vous aurez également des détails sur la compatibilité des navigateurs web ou du matériel nécessaire.

## L'API Gamepad

L'[API Gamepad](/fr/docs/Web/API/Gamepad_API) est une API assez bien compatible, qui donne aux développeur·euse·s l'accès aux manettes de jeu, connectés à leur ordinateur et de les utilisé dans dans applications web. Les contrôleurs peuvent basiquement être accessible comme des objets {{domxref("Gamepad")}}, avec lesquels nous pouvons faire des requêtes pour savoir quels boutons sont appuyés ou quels joystick sont actionnés, etc..

Vous pouvez avoir plus d'information sur l'usage de API de base des Gamepad avec l'article [Utilisez l'API Gamepad](/fr/docs/Web/API/Gamepad_API/Using_the_Gamepad_API), et [Implementer des contrôles en utilisant l'API Gamepad](/fr/docs/Games/Techniques/Controls_Gamepad_API).

Dans cet article, nous allons nous attardez sur les nouvelles fonctionnalités offertes dans l'API `GamepadExtensions`, laquelle donne accès à des informations avancés comme des données de position ou d'orientation, ou encore contrôler les retours haptiques (vibrations), et bien plus. Cette API est toute nouvelle et, pour l'instant, seulement disponible dans les versions Beta ou Nightly de Firefox 55 (et suppérieur).

## Types de contrôlleurs

Il y a deux principaux types de contrôleurs utilisés pour la réalité virtuelle :

- les "6DoF" (six degrés de liberté) sont des contrôleurs qui donne accès aux informations de position et d'orientation. Un exemple notable serait les manettes du HTC Vive.
- les "3DoF" (trois degrés de liberté) sont des contrôleurs qui donne uniquement accès aux informations d'orientation. Un exemple notable serait la manette du Google Daydream, qui peut être tourné pour sélectionner des objets 3D comme un pointeur laser, mais ne peux être bougé dans la scène 3D.

## Basic controller access

Now onto some code. Let's look first at the basics of how we get access to VR controllers with the Gamepad API. There are a few strange nuances to bear in mind here, so it is worth taking a look.

We've written up a simple example to demonstrate — see our [vr-controller-basic-info](https://github.com/mdn/webvr-tests/blob/master/vr-controller-basic-info/index.html) source code ([see it running live here also](https://mdn.github.io/webvr-tests/vr-controller-basic-info/)). This demo simply outputs information on the VR displays and gamepads connected to your computer.

### Getting the display information

The first notable code is as follows:

```js
var initialRun = true;

if (navigator.getVRDisplays && navigator.getGamepads) {
  info.textContent = "WebVR API and Gamepad API supported.";
  reportDisplays();
} else {
  info.textContent =
    "WebVR API and/or Gamepad API not supported by this browser.";
}
```

Here we first use a tracking variable, `initialRun`, to note that this is the first time we have loaded the page. You'll find out more about this later on. Next, we detect to see if the WebVR and Gamepad APIs are supported by cheking for the existence of the {{domxref("Navigator.getVRDisplays()")}} and {{domxref("Navigator.getGamepads()")}} methods. If so, we run our `reportDisplays()` custom function to start the process off. This function looks like so:

```js
function reportDisplays() {
  navigator.getVRDisplays().then(function (displays) {
    console.log(displays.length + " displays");
    for (var i = 0; i < displays.length; i++) {
      var cap = displays[i].capabilities;
      // cap is a VRDisplayCapabilities object
      var listItem = document.createElement("li");
      listItem.innerHTML =
        "<strong>Display " +
        (i + 1) +
        "</strong>" +
        "<br>VR Display ID: " +
        displays[i].displayId +
        "<br>VR Display Name: " +
        displays[i].displayName +
        "<br>Display can present content: " +
        cap.canPresent +
        "<br>Display is separate from the computer's main display: " +
        cap.hasExternalDisplay +
        "<br>Display can return position info: " +
        cap.hasPosition +
        "<br>Display can return orientation info: " +
        cap.hasOrientation +
        "<br>Display max layers: " +
        cap.maxLayers;
      list.appendChild(listItem);
    }

    setTimeout(reportGamepads, 1000);
    // For VR, controllers will only be active after their corresponding headset is active
  });
}
```

This function first uses the promise-based {{domxref("Navigator.getVRDisplays()")}} method, which resolves with an array containing {{domxref("VRDisplay")}} objects representing the connected displays. Next, it prints out each display's {{domxref("VRDisplay.displayId")}} and {{domxref("VRDisplay.displayName")}} values, and a number of useful values contained in the display's associated {{domxref("VRCapabilities")}} object. The most useful of these are {{domxref("VRCapabilities.hasOrientation","hasOrientation")}} and {{domxref("VRCapabilities.hasPosition","hasPosition")}}, which allow you to detect whether the device can return orientation and position data and set up your app accordingly.

The last line contained in this function is a [`setTimeout()`](/fr/docs/Web/API/setTimeout) call, which runs the `reportGamepads()` function after a 1 second delay. Why do we need to do this? First of all, VR controllers will only be ready after their associated VR headset is active, so we need to invoke this after `getVRDisplays()` has been called and returned the display information. Second, the Gamepad API is much older than the WebVR API, and not promise-based. As you'll see later, the `getGamepads()` method is synchronous, and just returns the `Gamepad` objects immediately — it doesn't wait for the controller to be ready to report information. Unless you wait for a little while, returned information may not be accurate (at least, this is what we found in our tests).

### Getting the Gamepad information

The `reportGamepads()` function looks like this:

```js
function reportGamepads() {
  var gamepads = navigator.getGamepads();
  console.log(gamepads.length + " controllers");
  for (var i = 0; i < gamepads.length; ++i) {
    var gp = gamepads[i];
    var listItem = document.createElement("li");
    listItem.classList = "gamepad";
    listItem.innerHTML =
      "<strong>Gamepad " +
      gp.index +
      "</strong> (" +
      gp.id +
      ")" +
      "<br>Associated with VR Display ID: " +
      gp.displayId +
      "<br>Gamepad associated with which hand: " +
      gp.hand +
      "<br>Available haptic actuators: " +
      gp.hapticActuators.length +
      "<br>Gamepad can return position info: " +
      gp.pose.hasPosition +
      "<br>Gamepad can return orientation info: " +
      gp.pose.hasOrientation;
    list.appendChild(listItem);
  }
  initialRun = false;
}
```

This works in a similar manner to `reportDisplays()` — we get an array of {{domxref("Gamepad")}} objects using the non-promise-based `getGamepads()` method, then cycle through each one and print out information on each:

- The {{domxref("Gamepad.displayId")}} property is the same as the `displayId` of the headet the controller is associated with, and therefore useful for tying controller and headset information together.
- The {{domxref("Gamepad.index")}} property is unique numerical index that identifies each connected controller.
- {{domxref("Gamepad.hand")}} returns which hand the controller is expected to be held in.
- {{domxref("Gamepad.hapticActuators")}} returns an array of the haptic actuators available in the controller. Here we are returning its length so we can see how many each has available.
- Finally, we return {{domxref("GamepadPose.hasPosition")}} and {{domxref("GamepadPose.hasOrientation")}} to show whether the controller can return position and orientation data. This works just the same as for the displays, except that in the case of gamepads these values are available on the pose object, not the capabilities object.

Note that we also gave each list item containing controller information a class name of `gamepad`. We'll explain what this is for later.

The last thing to do here is set the `initialRun` variable to `false`, as the initial run is now over.

### Gamepad events

To finish off this section, we'll look at the gamepad-associated events. There are two we need concern ourselves with — [`gamepadconnected`](/fr/docs/Web/API/Window/gamepadconnected_event) and [`gamepadisdisconnected`](/fr/docs/Web/API/Window/gamepadisdisconnected_event) — and it is fairly obvious what they do.

At the end of our example we first include the `removeGamepads()` function:

```js
function removeGamepads() {
  var gpLi = document.querySelectorAll(".gamepad");
  for (var i = 0; i < gpLi.length; i++) {
    list.removeChild(gpLi[i]);
  }

  reportGamepads();
}
```

This function simply grabs references to all list items with a class name of `gamepad`, and removes them from the DOM. Then it re-runs `reportGamepads()` to populate the list with the updated list of connected controllers.

`removeGamepads()` will be run each time a gamepad is connected or disconnected, via the following event handlers:

```js
window.addEventListener("gamepadconnected", function (e) {
  info.textContent = "Gamepad " + e.gamepad.index + " connected.";
  if (!initialRun) {
    setTimeout(removeGamepads, 1000);
  }
});

window.addEventListener("gamepaddisconnected", function (e) {
  info.textContent = "Gamepad " + e.gamepad.index + " disconnected.";
  setTimeout(removeGamepads, 1000);
});
```

We have `setTimeout()` calls in place here — like we did with the initialization code at the top of the script — to make sure that the gamepads are ready to report their information when `reportGamepads()` is called in each case.

But there's one more thing to note — you'll see that inside the `gamepadconnected` handler, the timeout is only run if `initialRun` is `false`. This is because if your gamepads are connected when the document first loads, `gamepadconnected` is fired once for each gamepad, therefore `removeGamepads()`/`reportGamepads()` will be run several times. This could lead to inaccurate results, therefore we only want to run `removeGamepads()` inside the `gamepadconnected` handler after the initial run, not during it. This is what `initialRun` is for.

## Introducing a real demo

Now let's look at the Gamepad API being used inside a real WebVR demo. You can find this demo at [raw-webgl-controller-example](https://github.com/mdn/webvr-tests/tree/master/raw-webgl-controller-example) ([see it live here also](https://mdn.github.io/webvr-tests/raw-webgl-controller-example/)).

In exactly the same way as our [raw-webgl-example](https://github.com/mdn/webvr-tests/tree/master/raw-webgl-example) (see [Using the WebVR API](/fr/docs/Web/API/WebVR_API/Using_the_WebVR_API) for details), this renders a spinning 3D cube, which you can choose to present in a VR display. The only difference is that, while in VR presenting mode, this demo allows you to move the cube by moving a VR controller (the original demo moves the cube as you move your VR headset).

We'll explore the code differences in this version below — see [webgl-demo.js](https://github.com/mdn/webvr-tests/blob/master/raw-webgl-controller-example/webgl-demo.js).

### Accessing the gamepad data

Inside the `drawVRScene()` function, you'll find this bit of code:

```js
var gamepads = navigator.getGamepads();
var gp = gamepads[0];

if (gp) {
  var gpPose = gp.pose;
  var curPos = gpPose.position;
  var curOrient = gpPose.orientation;
  if (poseStatsDisplayed) {
    displayPoseStats(gpPose);
  }
}
```

Here we get the connected gamepads with {{domxref("Navigator.getGamepads")}}, then store the first gamepad detected in the `gp` variable. As we only need one gamepad for this demo, we'll just ignore the others.

The next thing we do is to get the {{domxref("GamepadPose")}} object for the controller stored in gpPose (by querying {{domxref("Gamepad.pose")}}), and also store the current gamepad position and orientation for this frame in variables so they are easuy to access later. We also display the post stats for this frame in the DOM using the `displayPoseStats()` function. All of this is only done if `gp` actually has a value (if a gamepad is connected), which stops the demo erroring if we don't have our gamepad connected.

Slightly later in the code, you can find this block:

```js
if (gp && gpPose.hasPosition) {
  mvTranslate([
    0.0 + curPos[0] * 15 - curOrient[1] * 15,
    0.0 + curPos[1] * 15 + curOrient[0] * 15,
    -15.0 + curPos[2] * 25,
  ]);
} else if (gp) {
  mvTranslate([0.0 + curOrient[1] * 15, 0.0 + curOrient[0] * 15, -15.0]);
} else {
  mvTranslate([0.0, 0.0, -15.0]);
}
```

Here we alter the position of the cube on the screen according to the {{domxref("GamepadPose.position","position")}} and {{domxref("GamepadPose.orientation","orientation")}} data received from the connected controller. These values (stored in `curPos` and `curOrient`) are {{domxref("Float32Array")}}s containing the X, Y, and Z values (here we are just using \[0] which is X, and \[1] which is Y).

If the `gp` variable has a `Gamepad` object inside it and it can return position values (`gpPose.hasPosition`), indicating a 6DoF controller, we modify the cube position using position and orientation values. If only the former is true, indicating a 3DoF controller, we modify the cube position using the orientation values only. If there is no gamepad connected, we don't modify the cube position at all.

### Displaying the gamepad pose data

In the `displayPoseStats()` function, we grab all of the data we want to display out of the {{domxref("GamepadPose")}} object passed into it, then print them into the UI panel that exists in the demo for displaying such data:

```js
function displayPoseStats(pose) {
  var pos = pose.position;
  var orient = pose.orientation;
  var linVel = pose.linearVelocity;
  var linAcc = pose.linearAcceleration;
  var angVel = pose.angularVelocity;
  var angAcc = pose.angularAcceleration;

  if (pose.hasPosition) {
    posStats.textContent =
      "Position: x " +
      pos[0].toFixed(3) +
      ", y " +
      pos[1].toFixed(3) +
      ", z " +
      pos[2].toFixed(3);
  } else {
    posStats.textContent = "Position not reported";
  }

  if (pose.hasOrientation) {
    orientStats.textContent =
      "Orientation: x " +
      orient[0].toFixed(3) +
      ", y " +
      orient[1].toFixed(3) +
      ", z " +
      orient[2].toFixed(3);
  } else {
    orientStats.textContent = "Orientation not reported";
  }

  linVelStats.textContent =
    "Linear velocity: x " +
    linVel[0].toFixed(3) +
    ", y " +
    linVel[1].toFixed(3) +
    ", z " +
    linVel[2].toFixed(3);
  angVelStats.textContent =
    "Angular velocity: x " +
    angVel[0].toFixed(3) +
    ", y " +
    angVel[1].toFixed(3) +
    ", z " +
    angVel[2].toFixed(3);

  if (linAcc) {
    linAccStats.textContent =
      "Linear acceleration: x " +
      linAcc[0].toFixed(3) +
      ", y " +
      linAcc[1].toFixed(3) +
      ", z " +
      linAcc[2].toFixed(3);
  } else {
    linAccStats.textContent = "Linear acceleration not reported";
  }

  if (angAcc) {
    angAccStats.textContent =
      "Angular acceleration: x " +
      angAcc[0].toFixed(3) +
      ", y " +
      angAcc[1].toFixed(3) +
      ", z " +
      angAcc[2].toFixed(3);
  } else {
    angAccStats.textContent = "Angular acceleration not reported";
  }
}
```

This article has given you a very basic idea of how to use the Gamepad Extensions to use VR controllers inside WebVR apps. In a real app you'd probably have a much more complex control system in effect, with controls assigned to the buttons on the VR controllers, and the display being affected by both the display pose and the controller poses simultaneously. Here however, we just wanted to isolate the pure Gamepad Extensions parts of that.

## Voir aussi

- [WebVR API](/fr/docs/Web/API/WebVR_API)
- [Gamepad API](/fr/docs/Web/API/Gamepad_API)
- [Using the WebVR API](/fr/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Implementing controls using the Gamepad API](/fr/docs/Games/Techniques/Controls_Gamepad_API)
