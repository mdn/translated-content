---
title: commands
slug: Mozilla/Add-ons/WebExtensions/manifest.json/commands
tags:
  - Add-ons Erweiterungen WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/commands
---
{{AddonSidebar}}

| Typ           | `Objekt` |
| ------------- | -------- |
| Obligatorisch | Nein     |
| Beispiel      | ```json  |

"commands": { "toggle-feature": { "suggested_key": { "default": "Ctrl+Shift+Y", "linux": "Ctrl+Shift+U" }, "description": "Ereignis 'toggle-feature' senden" } }

````|

Verwenden Sie den`commands-Schlüssel, um für Ihre Erweiterung eine oder mehrere Tastenkürzel zu definieren`.

Jedes Tastenkürzel wird mit einem Namen, eine Kombination von Tasten und einer Beschreibung definiert. Sobald Sie einige Befehle in der manifest.json definiert haben, können Sie die zugewiesenen Tastenkombinationen mittels der JavaScript-API {{WebExtAPIRef("commands")}} verwenden.

## Syntax

Der `commands-Schlüssel`ist ein Objekt, und jedes Tastenkürzel ist eine Eigenschaft von ihm. Der Name der Eigenschaft ist der Name des Tastenkürzels.

Jedes Tastenkürzel ist selbst ein Objekt, das bis zu zwei Eigenschaften hat:

*   `suggested_key`: diese definiert die Tastenkombination
*   `description`: eine Zeichenkette, die dieses Tastenkürzel beschreibt

Die Eigenschaft `suggested_key` ist selbst ein Objekt, das folgende Eigenschaften haben kann, die alle Zeichenketten sind:

*   `"default"`, `"mac"`, `"linux"`, `"windows"`, `"chromeos"`, `"android"`, `"ios"`

Der Wert jeder Eigenschaft ist das Tastenkürzel für den Befehl auf der angegebenen Plattform, der als Zeichenkette angegeben wird, die die durch ein „+“ voneinander getrennten Tasten enthält. Der Wert für `„default“` wird auf allen Plattformen verwendet, die nicht ausdrücklich angegeben sind.

Beispiel:

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Alt+Shift+U",
      "linux": "Ctrl+Shift+U"
    },
    "description": "'toggle-feature'-Ereignis an die Erweiterung senden"
  },
  "do-another-thing": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
````

Dies definiert zwei Tastenkürzel:

- eine mit dem Namen "toggle-feature", auf die mit Hilfe von

  <kbd>Ctrl</kbd>

  \+

  <kbd>Shift</kbd>

  \+

  <kbd>U</kbd>

  auf Linux und

  <kbd>Alt</kbd>

  \+

  <kbd>Shift</kbd>

  \+

  <kbd>U</kbd>

  auf allen anderen Plattformen zugegriffen wird

- eine mit dem Namen "do-another-thing", auf die mit Hilfe von

  <kbd>Ctrl</kbd>

  \+

  <kbd>Shift</kbd>

  \+

  <kbd>Y</kbd>

  auf allen Plattformen zugegriffen wird.

Sie könnten dann den ersten dieser Befehle mit einem Code wie diesen verwenden:

```js
browser.commands.onCommand.addListener(function(command) {
  if (command == "toggle-feature") {
    console.log("toggling the feature!");
  }
});
```

### Besondere Tastenkürzel

Es gibt drei besondere Tastenkürzel:

- \_execute_browser_action: funktioniert wie ein Klick auf die [Browseraktion](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_action) der Erweiterung.
- \_execute_page_action: funktioniert wie ein Klick auf die [Seitenaktion](/de/docs/Mozilla/Add-ons/WebExtensions/Page_actions) der Erweiterung.
- \_execute_sidebar_action: öffnet die [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/Sidebars) der Erweiterung. Wird nur in Firefox unterstützt und erst ab Firefox Version 54.

Dies definiert zum Beispiel eine Tastenkombination, um auf die Browseraktion der Erweiterung zu klicken:

```js
"commands": {
  "_execute_browser_action": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

## Tastenkürzel-Werte

Es gibt zwei gültige Formate für Tastenkürzel: als Tastenkombination oder als Medien-Taste.

### Tastenkombinationen

Auf Macs wird "Ctrl" als "Command"-Taste interpretiert, geben Sie also "MacCrtl" an, wenn Sie eigentlich "Ctrl" brauchen.

Tastenkombinationen müssen aus zwei oder mehr Tasten bestehen:

- **Modifikator** (obligatorisch, mit Ausnahme der Funktionstasten). Dieser kann sein: "Ctrl", "Alt", "Command", "MacCtrl".
- **zweiter Modifikator** (optional). Wenn angegeben, muss dieser entweder "Shift" oder (für Firefox ≥ 63) "Ctrl", "Alt", "Command" und "MacCtrl" sein, wenn sie nicht als Hauptmodifikator verwendet werden.
- **Taste** (obligatorisch). Die kann sein:

  - die Buchstaben A-Z
  - die Zahlen 0-9
  - die Funktionstasten F1-F12
  - Comma (Komma), Period (Punkt), Home (Pos1), End (Ende), PageUp (Bild hoch) , PageDown (Bild runter), Space (Leertaste), Insert (Einfg), Delete (Entf), Up (Pfeil hoch), Down (Pfeil runter), Left (Pfeil links), Right (Pfeil rechts)

Die Taste wird dann als Zeichenkette angegeben, die den Satz an Tastenwerten enthält, in der oben angegebenen Reihenfolge, getrennt durch "+": zum Beispiel "Ctrl+Shift+Z".

Wenn eine Tastenkombination bereits vom Browser (zum Beispiel "Ctrl+P") oder durch ein bestehendes Add-on verwendet wird, können Sie sie nicht überschreiben. Sie dürfen sie definieren, aber Ihr Eventhandler wird nicht aufgerufen, wenn der Benutzer sie eingibt.

### Medientasten

Alternativ kann das Tastenkürzel als eine der folgenden Medientasten angegeben werden:

- "MediaNextTrack", "MediaPlayPause", "MediaPrevTrack", "MediaStop"

## Beispiel

Definieren Sie ein einzelnes Tastenkürzel, das nur standardmäßig verwendet wird:

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    },
    "description": "Ereignis'toggle-feature' senden"
  }
}
```

Definieren Sie zwei Tastenkürzel, eins mit einer plattformspezifischen Tastenkombination:

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Alt+Shift+U",
      "linux": "Ctrl+Shift+U"
    },
    "description": "Ereignis 'toggle-feature' senden"
  },
  "do-another-thing": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

## Browserkompatibilität

{{Compat("webextensions.manifest.commands")}}
