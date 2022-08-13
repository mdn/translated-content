---
title: KeyboardEvent
slug: Web/API/KeyboardEvent
translation_of: Web/API/KeyboardEvent
---
{{APIRef("DOM Events")}}

**`KeyboardEvent`** Objekte beschreiben eine Benutzerinteraktion mit dem Keyboard. Jedes Event beschreibt eine Taste. Der Eventtyp (`keydown`, `keypress`, oder `keyup`) identifiziert welche Art von Aktivität ausgeführt wurde.

> **Hinweis:** Das `KeyboardEvent` deutet nur an was mit einer Taste passiert. Wenn Sie Texteingaben behandeln müssen, verwenden sie stattdessen das HTML5 [`input`](/en-US/docs/DOM/DOM_event_reference/input) Event. Beispiel: Wenn ein Benutzer Text über ein Handschriftsystem - wie auf einem Tablet - eingibt, werden Tastenevents möglicherweise nicht ausgelöst.

## Konstruktor

- {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}
  - : Erzeugt ein `KeyboardEvent` Objekt.

## Methoden

_Diese Schnittstelle erbt auch Methoden seiner Eltern {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("KeyboardEvent.getModifierState()")}}
  - : Liefert einen {{jsxref("Boolean")}} Wert welcher angibt ob eine Hilfstaste wie <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, oder <kbd>Meta</kbd> gedrückt war als das Event erzeugt wurde.
- {{domxref("KeyboardEvent.initKeyEvent()")}}{{deprecated_inline}}
  - : Initialisiert ein `KeyboardEvent` Objekt. Dies wurde nur durch Gecko implementiert (andere verwendeten {{domxref("KeyboardEvent.initKeyboardEvent()")}}) und sollte nicht mehr benutzt werden. Der moderne Standardweg ist, den {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} Konstrutor zu verwenden.
- {{domxref("KeyboardEvent.initKeyboardEvent()")}}{{deprecated_inline}}
  - : Initialisiert ein `KeyboardEvent` Objekt. Dies wurde nie von Gecko implementiert (da stattdessen {{domxref("KeyboardEvent.initKeyEvent()")}} verwendet wurde) und sollte nicht mehr benutzt werden. Der moderne Standardweg ist, den {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} Konstruktor zu verwenden.

## Eigenschaften

_Diese Schnittstelle erbt auch Methoden seiner Eltern {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("KeyboardEvent.altKey")}} {{Readonlyinline}}
  - : Liefert einen {{jsxref("Boolean")}} Wert der `true` ist falls die <kbd>Alt</kbd> ( <kbd>Option</kbd> oder <kbd>⌥</kbd> unter OS X) Taste aktiv war, als das Tastenevent erzeugt wurde.
- {{domxref("KeyboardEvent.char")}} {{Non-standard_inline}}{{Deprecated_inline}}{{Readonlyinline}}
  - : Liefert einen {{domxref("DOMString")}} der das Zeichen der Taste repräsentiert. Wenn die Taste einem druckbaren Zeichen entspricht, ist dieser Wert eine nicht-leere Unicode-Zeichenkette die dieses Zeichen enthält. Fall die Taste keine druckbare Darstellung besitzt, ist der Wert eine leere Zeichenkette.

  > **Hinweis:** Falls die Taste als Makro verwendet wird, das mehrere Zeichen einfügt, ist der Wert dieses Attributs die gesamte Zeichenkette, nicht nur das erste Zeichen.

  > **Warnung:** Dies wurde aus den DOM Level 3 Events entfernt. Es wird nur von IE9+ und Microsoft Edge unterstützt.
- {{domxref("KeyboardEvent.charCode")}} {{Deprecated_inline}}{{Readonlyinline}}
  - : Liefert einen {{jsxref("Number")}} Wert der die Unicode-Kennziffer der Taste repräsentiert; dieses Attribut wird nur vom `keypress` Event verwendet. Für Tasten deren `char` Attribut mehrere Zeichen enthält ist der Wert dieses Attributs der Unicode-Wert des ersten Zeichens . In Firefox 26 liefert dies Codes für druckbare Zeichen.

  > **Warnung:** Dieses Attribut ist veraltet; Sie sollten stattdessen - wenn vorhanden - {{domxref("KeyboardEvent.key")}} verwenden.
- {{domxref("KeyboardEvent.code")}} {{Readonlyinline}}
  - : Liefert einen {{domxref("DOMString")}} mit dem Codewert der Taste, welche durch das Event repräsentiert wird.
- {{domxref("KeyboardEvent.ctrlKey")}} {{Readonlyinline}}
  - : Liefert einen {{jsxref("Boolean")}} Wert der `true` ist, falls die <kbd>Ctrl</kbd> Taste aktiv war als das Key-Event erzeugt wurde.
- {{domxref("KeyboardEvent.isComposing")}} {{Readonlyinline}}
  - : Liefert einen {{jsxref("Boolean")}} Wert der `true` ist falls das Event nach `compositionstart` und vor `compositionend` ausgelöst wird.
- {{domxref("KeyboardEvent.key")}} {{Readonlyinline}}
  - : Liefert einen {{domxref("DOMString")}} der den Wert der Taste darstellt die durch das Event repräsentiert wird.
- {{domxref("KeyboardEvent.keyCode")}} {{deprecated_inline}}{{Readonlyinline}}
  - : Liefert einen {{jsxref("Number")}} Wert der einen system- und implementationsabhängigen Zahlencode darstellt, der den unmodifizierten Wert der gedrückten Taste repräsentiert.

  > **Warnung:** Dieses Attribut ist veraltet; Sie sollten stattdessen - wenn vorhanden - {{domxref("KeyboardEvent.key")}} verwenden.
- {{domxref("KeyboardEvent.keyIdentifier")}} {{Non-standard_inline}}{{deprecated_inline}}{{Readonlyinline}}
  - : Diese Eigenschaft ist nicht standardisiert und veraltet. Es sollte stattdessen {{domxref("KeyboardEvent.key")}} verwendet werden. Sie war Teil einer alten Version von DOM Level 3 Events.
- {{domxref("KeyboardEvent.keyLocation")}} {{Non-standard_inline}}{{deprecated_inline}}{{Readonlyinline}}
  - : Dies ist ein nicht-standardisierter Alias für {{domxref("KeyboardEvent.location")}}. Sie war Teil einer alten Version von DOM Level 3 Events.
- {{domxref("KeyboardEvent.locale")}} {{Readonlyinline}}
  - : Liefert einen {{domxref("DOMString")}} der das Gebietsschema identifiziert für die das Keyboard konfiguriert ist. Diese Zeichenkette kann leer sein, wenn der Browser oder das Gerät das Gebietsschema des Keyboards nicht kennt.

  > **Hinweis:** Dies beschreibt nicht das Gebietsschema der eingegebenen Daten. Ein Benutzer könnte ein Tastaturlayout nutzen während er Text in einer anderen Sprache eingibt.
- {{domxref("KeyboardEvent.location")}} {{Readonlyinline}}
  - : Liefert einen {{jsxref("Number")}} Wert der die Lage der Taste auf der Tastatur oder einem anderen Eingabegerät repräsentiert.
- {{domxref("KeyboardEvent.metaKey")}} {{Readonlyinline}}
  - : Liefert einen {{jsxref("Boolean")}} Wert der `true` ist, falls die <kbd>Meta</kbd> Taste (auf Mac-Tastaturen, die <kbd>⌘ Command</kbd> Taste; auf Windows-Tastaturen, die Windows -Taste (<kbd>⊞</kbd>)) aktiv war, als das Key-Event erzeugt wurde.
- {{domxref("KeyboardEvent.repeat")}} {{Readonlyinline}}
  - : Liefert einen {{jsxref("Boolean")}} Wert der `true` ist, falls die Taste gedrückt gehalten wird, so dass sie sich automatisch wiederholt.
- {{domxref("KeyboardEvent.shiftKey")}} {{Readonlyinline}}
  - : Liefert einen {{jsxref("Boolean")}} Wert der `true` ist, falls die <kbd>Shift</kbd> Taste aktiv war, als das Key-Event erzeugt wurde.
- {{domxref("KeyboardEvent.which")}} {{deprecated_inline}}{{Readonlyinline}}
  - : Liefert einen {{jsxref("Number")}} Wert der einen system- und implementationsabhängigen Zahlencode darstellt, der den unmodifizierten Wert der gedrückten Taste repräsentiert; das ist gewöhnlich das Gleiche wie `keyCode`.

  > **Warnung:** Dieses Attribut ist veraltet; Sie sollten stattdessen - wenn vorhanden - {{domxref("KeyboardEvent.key")}} verwenden.

## Anmerkungen

Es gibt `keydown`, `keypress`, and `keyup` Events. Für die meisten Tasten versendet Gecko eine Sequenz von Key-Events wie folgt:

1. Wenn die Taste gedrückt wird, wird ein `keydown` Event gesendet.
2. Falls die Taste keine Hilfstaste ist, wird das `keypress` Event gesendet.
3. Wenn der Nutzer die Taste loslässt, wird das `keyup` Event gesendet.

### Sonderfälle

Einige Taste schalten den Status einer Kontrollleuchte um; dazu gehören Caps Lock, Num Lock, und Scroll Lock. Unter Windows und Linux senden diese Tasten nur `keydown` and `keyup` Events.

> **Note:** Unter Linux versendet Firefox 12 und eher das `keypress` Event auch für diese Tasten.

Jedoch sorgen die Einschränkungen des Mac OS X Event-Modells dafür, dass Caps Lock nur das `keydown` Event versendet. Num Lock wurde auf einigen älteren Laptop-Modellen (Modelle 2007 und älter) unterstützt, aber seitdem hat Mac OS X Num Lock nicht mehr untertstützt - nicht einmal auf externen Tastaturen. Auf älteren MacBooks mit einer Num Lock Taste, erzeugt diese Taste überhaupt keine KeyEvents. Gecko unterstützt die Scroll Lock Taste, falls eine externe Tastatur, die eine F14 Taste besitzt, angeschlossen ist. In bestimmten älteren Firefox-Versionen erzeugt diese Taste ein `keypress` Event; dieses inkonsistente Verhalten war {{bug(602812)}}.

### Behandlung von Auto-repeat

Wenn eine Taste gedrückt und gehalten wird, beginnt sie die automatische Wiederholung (sog. _auto-repeat_). Das Resultat ist das Versenden einer Reihe von Events ähnlich der folgenden:

1. `keydown`
2. `keypress`
3. `keydown`
4. `keypress`
5. <\<wiederholt sich bis der Nutzer die Taste loslässt>>
6. `keyup`

Das sollte laut DOM Level 3 Spezifikation passieren. Allerdings gibt es einige Ausnahmen, wie unten beschrieben.

#### Auto-repeat in einigen GTK-Umgebungen wie Ubuntu 9.4

In einigen GTK-basierten Umgebungen versendet auto-repeat automatisch ein natives Key-Up Event während der automatischen Wiederholung und es ist für Gecko deshalb nicht möglich zwischen wiederholten Tastendrücken und einem auto-repeat unterscheiden zu können. Auf diesen Platformen wird eine Auto-Repeat Taste also die folgende Reihe von Events erzeugen:

1. `keydown`
2. `keypress`
3. `keyup`
4. `keydown`
5. `keypress`
6. `keyup`
7. <\<wiederholt sich bis der Nutzer die Taste loslässt>>
8. `keyup`

Innerhalb dieser Umgebungen gibt es leider keine Möglichkeit für Webinhalte den Unterschied zwischen selbst-wiederholenden Tasten und Tasten die wiederholt gedrückt werden herauszufinden.

#### Behandlung von auto-repeat vor Gecko 5.0

Vor Gecko 5.0 {{geckoRelease('5.0')}} war platformübergreifendes Tastatur-Handling weniger einheitlich.

- Windows
  - : Das Auto-Repeat-Verhalten ist das Gleiche wie in Gecko 4.0 und später.
- Mac
  - : Nach dem initialen keydown Event werden nur keypress Events gesendet bis das keyup Event auftritt; die dazwischendliegenden keydown Events werden nicht gesendet.
- Linux
  - : Das Event-Verhalten hängt von der spezifischen Platform ab. Es wird sich entweder so verhalten wie Windows oder Mac, abhängig davon was das native Event-Modell macht.

> **Hinweis:** manuelles Auslösen eines Events erzeugt _nicht_ die mit dem Event verbundene Standard-Aktion. Zum Beispiel: manuelles Auslösen eines KeyEvent führt nicht dazu, dass der Buchstabe in einem fokussierten Eingabefeld auftaucht. Im Fall von UI-Events ist dies aus Sicherheitsgründen wichtig, da es verhindert, dass Skripte Benutzeraktionen simulieren, die mit dem Browser selbst interagieren.

## Beispiel

```js
<!DOCTYPE html>
<html>
<head>
<script>
'use strict';

document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (keyName === 'Control') {
    // not alert when only Control key is pressed.
    return;
  }

  if (event.ctrlKey) {
    // Even though event.key is not 'Control' (i.e. 'a' is pressed),
    // event.ctrlKey may be true if Ctrl key is pressed at the time.
    alert(`Combination of ctrlKey + ${keyName}`);
  } else {
    alert(`Key pressed ${keyName}`);
  }
}, false);

document.addEventListener('keyup', (event) => {
  const keyName = event.key;

  // As the user release the Ctrl key, the key is no longer active.
  // So event.ctrlKey is false.
  if (keyName === 'Control') {
    alert('Control key was released');
  }
}, false);

</script>
</head>

<body>
</body>
</html>
```

## Spezifikationen

| Specification                                                                                    | Status                           | Comment             |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('DOM3 Events', '#interface-keyboardevent', 'KeyboardEvent')}} | {{Spec2('DOM3 Events')}} | Initiale Definition |

Die `KeyboardEvent` Schnittstelle lief durch eine Vielzahl von Entwurfsversionen, erst unter DOM Events Level 2, wo sie verworfen wurde als kein Konsens entstand, danach unter DOM Events Level 3. Dies führte zu einer Implementation von nicht standardisierten Initialisationsmethoden, der frühen DOM Events Level 2 Version``{{domxref("KeyboardEvent.initKeyEvent()")}} durch Gecko Browser und die frühe DOM Events Level 3 Version, {{domxref("KeyboardEvent.initKeyboardEvent()")}} durch Andere. Beide wurden durch den modernen Einsatz eines Konstruktors ersetzt: {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.

## Browserkompatibilität

{{Compat}}

\[1] Die Argumente von `initKeyboardEvent()` von WebKit and Blink weichen von der Definition in DOM Level 3 Events ab. Die Methode ist: `initKeyboardEvent(in DOMString typeArg, in boolean canBubbleArg, in boolean cancelableArg, in views::AbstractView viewArg, in DOMString keyIdentifierArg, in number locationArg, in boolean ctrlKeyArg, in boolean altKeyArg, in boolean shiftKeyArg, in boolean metaKeyArg, in boolean altGraphKeyArg)`

\[2] Gecko wird `initKeyboardEvent()` nicht unterstützen, weil es die Feature-Erkennung von Web-Apllikationen komplett zerstört. Siehe {{Bug(999645)}}.

\[3] Das Argument von `initKeyboardEvent()` von IE weicht von der Definition in DOM Level 3 Events ab. Die Methode ist: `initKeyboardEvent(in DOMString typeArg, in boolean canBubbleArg, in boolean cancelableArg, in views::AbstractView viewArg, in DOMString keyArg, in number locationArg, in DOMString modifierListArg, in boolean repeatArt, in DOMString locationArg)`. Siehe [document of `initKeyboardEvent()` in MSDN](http://msdn.microsoft.com/en-us/library/ie/ff975297%28v=vs.85%29.aspx).

## Siehe auch

- {{domxref("KeyboardEvent.code")}}.
- {{domxref("KeyboardEvent.key")}}.
- {{domxref("KeyboardEvent.getModifierState")}}
