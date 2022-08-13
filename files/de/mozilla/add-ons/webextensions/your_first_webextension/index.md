---
title: Deine erste Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
tags:
  - Anleitung
  - Erweiterung
  - Weberweiterung
translation_of: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
original_slug: Mozilla/Add-ons/WebExtensions/Deine_erste_WebErweiterung
---
{{AddonSidebar}}

In diesem Artikel wird die Erstellung einer Erweiterung (Extension) für Firefox komplett beschrieben. Diese Erweiterung soll einen roten Rand zu jeder Seite, die von "mozilla.org" oder einer Subdomain geladen wurde, hinzufügen.

Der Quellcode für dieses Beispiel ist auf GitHub auffindbar: <https://github.com/mdn/webextensions-examples/tree/master/borderify>.

Als Erstes benötigst du Firefox Version 45 oder neuer.

## Schreiben der Erweiterung

Erstelle ein neues Verzeichnis und navigiere zu diesem:

```bash
mkdir borderify
cd borderify
```

### manifest.json

Jetzt erstelle eine Datei namens "manifest.json" direkt in dem "borderify" -Verzeichnis mit dem folgenden Inhalt:

```json
{

  "manifest_version": 2,
  "name": "Borderify",
  "version": "1.0",

  "description": "Adds a red border to all webpages matching mozilla.org.",

  "icons": {
    "48": "icons/border-48.png"
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]

}
```

- Die ersten drei _Keys_: [`manifest_version`](/en-US/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/en-US/Add-ons/WebExtensions/manifest.json/name) und [`version`](/en-US/Add-ons/WebExtensions/manifest.json/version) sind verpflichtend und beinhalten grundlegende Metadaten für die Erweiterung.
- [`description`](/en-US/Add-ons/WebExtensions/manifest.json/description) ist optional, aber empfehlenswert: diese wird dann im Add-ons Manager angezeigt.
- [`icons`](/en-US/Add-ons/WebExtensions/manifest.json/icons) ist optional, aber empfehlenswert: es erlaubt es dir ein Icon für deine Erweiterung festzulegen, welches ebenfalls im Add-ons Manager angezeigt wird.

Der interessanteste _Key_ hier ist [`content_scripts`](/en-US/Add-ons/WebExtensions/manifest.json/content_scripts), welcher Firefox auffordert, ein Skript in allen Webseiten zu laden, deren URLs einem spezifischen Muster zuzuordnen sind. In diesem Fall fragen wir Firefox nach dem Skript namens "borderify.js", um es in allen HTTP oder HTTPS Seiten von "mozilla.org" oder einer Subdomain zu laden.

- [Lerne mehr über content scripts.](/en-US/Add-ons/WebExtensions/Content_scripts)
- [Lerne mehr über übereinstimmende Muster](/en-US/Add-ons/WebExtensions/Match_patterns).

> **Warning:** [In manchen Situation musst eine ID für deine Erweiterung festlegen](/en-US/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID#When_do_you_need_an_Add-on_ID). Wenn du eine Add-on ID festlegen musst, schreibe den [`applications`](/en-US/Add-ons/WebExtensions/manifest.json/applications) key in `manifest.json` und setze die `gecko.id`-Eigenschaft:```json
> "applications": {
> "gecko": {
> "id": "borderify@example.com"
> }
> }
>
> ```
>
> ```

### icons/border-48.png

Die Erweiterung sollte ein Icon haben. Dieses wird neben dem Erweiterungseintrag in dem Add-ons manager angezeigt. Unsere manifest.json gibt den Ort des Icons unter "icons/border-48.png" an.

Erstelle das "icons" Verzeichnis direkt in dem "borderify" Verzeichnis. Speichere dort ein Icon namens "border-48.png". Du kannst dazu das [von unserem Beispiel benutzen](https://github.com/mdn/webextensions-examples/blob/master/borderify/icons/border-48.png), welches von der Google Material Design Iconsammlung stammt und unter den Richtlinien der [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz steht.

Wenn du dich entscheidest ein eigenes Icon zu verwenden, dann sollte dieses 48x48 Pixel groß sein. Du kannst ebenfalls ein 96x96 Pixel großes Icon für hochauflösende Bildschirme, übergeben, welches dann als die `96` Property des `icons`-Objekts in der manifest.json festgelegt wird:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Alternativ kannst du auch eine SVG-Datei übergeben, welche dann automatisch korrekt skaliert wird.
(Beachte: Wenn du SVG verwendest und dein Symbol Text enthält, kannst du das Werkzeug "convert to path" deines SVG-Editors verwenden, um den Text zu verflachen, so dass er mit einer einheitlichen Größe/Position skaliert wird.

- [Lerne mehr über das festlegen von Icons.](/en-US/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Schließlich erstelle eine Datei namens "borderify.js" direkt in dem "borderify"-Verzeichnis mit diesem Inhalt:

```js
document.body.style.border = "5px solid red";
```

Dieses Skript wird in Seiten geladen, welche mit dem Muster des `content_scripts`-Keys in der manifest.json Datei übereinstimmen. Das Skript hat direkten Zugriff auf das Dokument, genauso wie die Skripte, die von der Seite selbst geladen werden.

- [Lerne mehr über content scripts.](/en-US/Add-ons/WebExtensions/Content_scripts)

## Probiere es aus:

Als Erstes stelle sicher, dass du die richtigen Dateien an den richtigen Orten hast:

    borderify/
        icons/
            border-48.png
        borderify.js
        manifest.json

### Installiere nun das Plugin

Öffne "about:debugging" in Firefox, klicke "Add-on temporär laden" und wähle eine beliebige Datei aus deinem Erweiterungsverzeichnis:

{{EmbedYouTube("cer9EUKegG4")}}

Die Erweiterung wird nun ausgeführt und ist solange aktiv, bis du Firefox neustartest.

Alternativ kannst du Erweiterung auch von der Kommandozeile mit dem [web-ext](/de/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext) Tool ausführen.

### Teste es nun aus

Nun besuche eine Seite von "mozilla.org". Du solltest jetzt einen roten Rand um die Seite erkennen:

{{EmbedYouTube("rxBQl2Z9IBQ")}}

> **Note:** Versuche es allerdings nicht auf addons.mozilla.org! Content Scripts werden zurzeit auf dieser Domain geblockt.

Experimentiere nun ein bisschen. Bearbeite das "content script", um die Farbe des Randes zu ändern oder mache etwas anderes mit dem Seiteninhalt. Speichere das "content script", lade die Erweiterungsdateien in about:debugging neu mit Hilfe des "Neu laden"-Knopfs. Du kannst die Änderungen sofort sehen:

{{EmbedYouTube("NuajE60jfGY")}}

- [Lerne mehr über das Laden von Erweiterungen](/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)

## Verpacken und Veröffentlichen

Damit andere Personen deine Erweiterung benutzen können musst du deine Erweiterung verpacken und zum Signieren an Mozilla senden. Um mehr darüber zu lernen, siehe ["Deine Erweiterung veröffentlichen"](/de/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension).

## Was nun?

Jetzt hast du eine Vorstellung vom Prozess der WebExtension-Entwicklung für Firefox erhalten. Versuche:

- [mehr über die Anatomie von Erweiterungen zu lesen](/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [eine komplexere Erweiterung zu schreiben](/en-US/Add-ons/WebExtensions/Your_second_WebExtension)
- [über die verfügbaren JavaScript APIs für Erweiterungen zu lesen.](/en-US/Add-ons/WebExtensions/API)
