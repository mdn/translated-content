---
title: Gamepad API
slug: Web/API/Gamepad_API
tags:
  - API
  - Experimentel
  - Spiele
  - Übersicht
translation_of: Web/API/Gamepad_API
---
{{DefaultAPISidebar("Gamepad API")}}

Die **Gamepad API** ist ein Weg für Entwickler auf Eingaben eines Gamepads und anderen Spielsteuergeräte in einer einfachen und konsequenten Weise zuzugreifen und darauf zu reagieren. Es enthält drei Schnittstellen, zwei Ereignisse und eine Spezialfunktion, welche verwendet wird, um auf verbindende und trennende Gamepads zu reagieren, um auf andere Informationen des Gamepads selbst zuzugreifen und welche Knöpfe und andere Kontrollelemente gerade gedrückt werden.

## Schnittstellen

- [`Gamepad`](/de/docs/Web/API/Gamepad "The Gamepad interface of the Gamepad API defines an individual gamepad or other controller, allowing access to information such as button presses, axis positions, and id.")
  - : Repräsentiert ein Gamepad/Spielsteuergerät, dass mit dem Computer verbunden ist.
- [`GamepadButton`](/de/docs/Web/API/GamepadButton "The GamepadButton interface defines an individual button of a gamepad or other controller, allowing access to the current state of different types of buttons available on the control device.")
  - : Repräsentiert einen Knopf auf einem verbundenen Gamepad.
- [`GamepadEvent`](/de/docs/Web/API/GamepadEvent "The GamepadEvent interface of the Gamepad API contains references to gamepads connected to the system, which is what the gamepad events Window.gamepadconnected and Window.gamepaddisconnected are fired in response to.")
  - : Das Ereignisobjekt, dass Ereignisse auf dem zusammenhängenden Gamepad repräsentativ auslöst.

### Experimentelle Gamepad Erweiterungen

- [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator "The GamepadHapticActuator interface of the Gamepad API represents hardware in the controller designed to provide haptic feedback to the user (if available), most commonly vibration hardware.")
  - : Repräsentiert Hardware im Steuergeräte welche zur Verfügungstellung von haptischen Feedback für den Nutzer (Falls vefügbar) konzipiert worden ist, meistens handelt es sich um Vibrationsmotoren.
- [`GamepadPose`](/de/docs/Web/API/GamepadPose "The GamepadPose interface of the Gamepad API represents the pose of a WebVR controller at a given timestamp (which includes orientation, position, velocity, and acceleration information.)")
  - : Repräsentiert die Stellung des Steuergeräts (z.B. Position und Orientierung im dreidimensionalen Raum) im Falle eines [WebVR](/de/docs/Web/API/WebVR_API)-Steuergeräts.

Siehe unter [Experimentelle Erweiterungen der Gamepad Schnittstelle](/de/docs/Web/API/Gamepad#Experimental_extensions_to_Gamepad) nach Schnittstellen, die den Zugriff auf die oben erwähnten experimentellen Erweiterungen ermöglichen.

### Erweiterungen für anderen Schnittstellen

#### Navigator

- {{domxref("Navigator.getGamepads()")}}
  - : Eine Erweiterung für das {{domxref("Navigator")}} Objekt, das ein Array von {{domxref("Gamepad")}} Objeketen zurückschickt, jeweils eines für jedes verbundene Gamepad.

#### Window Ereignisse

- {{domxref("Window.ongamepadconnected")}}
  - : Repräsentiert einen Ereignisabwickler, der ausgeführt wird, wenn ein Gamepad verbunden wird (Wenn das {{event('gamepadconnected')}} Ereignis auslöst).
- {{domxref("Window.ongamepaddisconnected")}}
  - : Repräsentiert einen Ereignisabwickler, der ausgeführt wird, wenn ein Gamepad getrennt wird (Wenn das {{event('gamepaddisconnected')}} Ereignis auslöst).

## Einführung und Leitfäden

- [Die Gamepad API verwenden](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Steuergeräte mithilfe der the Gamepad API implementieren](/de/docs/Games/Techniques/Controls_Gamepad_API)

## Spezifikation

| Spezifikation                                                                    | Status                                   | Kommentar                                                                          |
| -------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------- |
| {{SpecName("GamepadExtensions")}}                                     | {{Spec2("GamepadExtensions")}} | Definiert die [Experimental Gamepad extensions](#experimental_gamepad_extensions). |
| {{SpecName("Gamepad", "", "The Gamepad API specification")}} | {{Spec2("Gamepad")}}             | Anfängliche Definition                                                             |

## Browser Kompatibilität

{{Compat("api.Gamepad")}}

## Siehe weiters

- [Die Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) von Ted Mielczarek und Robert Nyman
- [Einfache API Demonstrationswebseite](http://luser.github.io/gamepadtest/) ([Quelle](https://github.com/luser/gamepadtest))
