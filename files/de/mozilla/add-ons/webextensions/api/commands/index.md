---
title: commands
slug: Mozilla/Add-ons/WebExtensions/API/commands
translation_of: Mozilla/Add-ons/WebExtensions/API/commands
---
{{AddonSidebar}}

Verwenden Sie die Ausführungsbefehle der Benutzer, die Sie mit Hilfe des [`Schlüssels commands` der manifest.json](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/commands) registriert haben.

## Typen

- {{WebExtAPIRef("commands.Command")}}
  - : Objekt, das einen Befehl repräsentiert. Es enthält die für den Befehl im [`Schlüssel commands der `manifest.json](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/commands) festgelegten Informationen.

## Funktionen

- {{WebExtAPIRef("commands.getAll")}}
  - : Stellt alle registrierten Befehle für diese Erweiterung zur Verfügung.
- {{WebExtAPIRef("commands.reset")}}
  - : Angegebene Befehlsbeschreibung und das Tastaturkürzel auf die im Manifest-Schlüssel angegebenen Werte zurücksetzen.
- {{WebExtAPIRef("commands.update")}}
  - : Beschreibung oder Tastenkürzel des angegebenen Befehls ändern.

## Ereignisse

- {{WebExtAPIRef("commands.onCommand")}}
  - : Wird ausgelöst, wenn ein Befehl mit Hilfe seines zugewiesenen Tastenkürzels ausgeführt wird.

## Browserkompatibilität

{{Compat("webextensions.api.commands")}} {{WebExtExamples("h2")}}

> **Note:** **Danksagungen**Diese API basiert auf der API [`chrome.commands`](https://developer.chrome.com/extensions/commands) von Chromium.Die Kompatibilitätsdaten von Microsoft Edge werden von der Microsoft Corporation bereitgestellt und stehen hier unter der Lizenz Creative Commons Attribution 3.0 United States.
