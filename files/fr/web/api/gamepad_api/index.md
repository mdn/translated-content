---
title: Gamepad API
slug: Web/API/Gamepad_API
---

{{DefaultAPISidebar("Gamepad API")}}

L'**API Gamepad** est un moyen pour les développeurs d'accéder aux signaux provenant des manettes des jeu et des autres unités de commande du jeu d'y répondre de manière simple et systématiq. Il contient trois interfaces, deux événements et une fonction spécialisée, pour répondre aux manettes connectées et déconnectées, et pour accéder à d'autres informations sur les manettes elles-mêmes, ainsi que sur les boutons et autres commandes sur lesquels vous appuyez actuellement.

## Interfaces

- [`Gamepad`](/fr/docs/Web/API/Gamepad)
  - : Représente une manette de jeu / unités de commande du jeu connecté à l'ordinateur.
- [`GamepadButton`](/fr/docs/Web/API/GamepadButton)
  - : Représente un bouton sur un gamepad connecté.
- [`GamepadEvent`](/fr/docs/Web/API/GamepadEvent)
  - : L'objet d'événement qui déclenche des événements sur la manette de jeu contiguë de manière représentative.

### Extensions de manette du jeu expérimentales

- [`GamepadHapticActuator`](/fr/docs/Web/API/GamepadHapticActuator)
  - : Represents hardware in the controller designed to provide haptic feedback to the user (if available), most commonly vibration hardware.
- [`GamepadPose`](/fr/docs/Web/API/GamepadPose)
  - : Represents the pose of a controller (e.g. position and orientation in 3D space) in the case of a [WebVR](/fr/docs/Web/API/WebVR_API)controller.

See also the [extensions to the Gamepad interface](/fr/docs/Web/API/Gamepad#Experimental_extensions_to_Gamepad), for features that allow you to access the above information.

### Extensions à d'autres interfaces

#### Navigator

- {{domxref("Navigator.getGamepads()")}}
  - : An extension to the {{domxref("Navigator")}} object that returns an array of {{domxref("Gamepad")}} objects, one for each connected gamepad.

#### Window events

- {{domxref("Window.ongamepadconnected")}}
  - : Represents an event handler that will run when a gamepad is connected (when the [`gamepadconnected`](/fr/docs/Web/API/Window/gamepadconnected_event) event fires).
- {{domxref("Window.ongamepaddisconnected")}}
  - : Represents an event handler that will run when a gamepad is disconnected (when the [`gamepadisdisconnected`](/fr/docs/Web/API/Window/gamepadisdisconnected_event) event fires).

## Tutoriels et guides

- [Using the Gamepad API](/fr/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Implementing controls using the Gamepad API](/fr/docs/Games/Techniques/Controls_Gamepad_API)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) by Ted Mielczarek and Robert Nyman
- [Simple API demo page](http://luser.github.io/gamepadtest/) ([source](https://github.com/luser/gamepadtest))
