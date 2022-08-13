---
title: Web App Manifest
slug: Web/Manifest
translation_of: Web/Manifest
---
{{SeeCompatTable}}

Das Web-App-Manifest liefert Informationen über eine Anwendung (wie Name, Autor, Icon und Beschreibung) in einer JSON-Textdatei. Der Zweck des Manifests ist es, Web-Anwendungen auf dem Homescreen eines Geräts zu installieren, was den Benutzern einen schnelleren Zugriff und eine umfassendere Erfahrung bietet.

Web-App-Manifeste sind Teil einer Sammlung von Web-Technologien namens [progressive Web-Anwendungen](/de/docs/Web/Apps/Progressive), welche wiederum auf dem Homescreen eines Geräts installiert werden können, ohne dass der Benutzer sie über einen App Store installieren muss. Außerdem stellen sie auch andere Technologien wie z.B. die Offline-Fähigkeit und Push-Benachrichtigungen zur Verfügung.

## Bereitstellung eines Manifests

Web-App-Manifeste werden in Ihren HTML-Seiten mit einem Link-Tag im Kopf Ihres Dokuments bereitgestellt:

```html
<link rel="manifest" href="/manifest.webmanifest">
```

## Beispiel Manifest

```json
{
  "name": "HackerWeb",
  "short_name": "HackerWeb",
  "start_url": ".",
  "display": "standalone",
  "background_color" : "#fff" ,
  "description": "Eine einfach lesbare Hacker News App.",
  "icons": [{
    "src": "images/touch/homescreen48.png",
    "sizes": "48x48",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen72.png",
    "sizes": "72x72",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen96.png",
    "sizes": "96x96",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen144.png",
    "sizes": "144x144",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen168.png",
    "sizes": "168x168",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen192.png",
    "sizes": "192x192",
    "type": "image/png"
  }],
  "related_applications": [{
    "platform": "Web"
  }, {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
  }]
}
```

## Eigenschaften

### `background_color`

Definiert die erwartete Hintergrundfarbe für die Webanwendung. Dieser Wert wiederholt, was bereits im Anwendungsstylesheet verfügbar ist, kann aber von Browsern verwendet werden, um die Hintergrundfarbe einer Webanwendung zu zeichnen, wenn das Manifest verfügbar ist, bevor das Stylesheet geladen ist. Dies schafft einen reibungslosen Übergang zwischen dem Starten der Webanwendung und dem Laden des Inhalts der Anwendung.

```json
"background_color": "red"
```

> **Note:** **Hinweis** : Die `background_color` Eigenschaft soll nur die Benutzererfahrung verbessern, während eine Webanwendung geladen wird und sollte nicht vom Browser als Hintergrundfarbe verwendet werden, wenn das Stylesheet der Webanwendung verfügbar ist.

### `description`

Bietet eine allgemeine Beschreibung dessen, was die Web-Anwendung tut.

```json
"description": "Die App, die dir hilft, das beste Essen in der Stadt zu finden!"
```

### `dir`

Definiert die primäre Textrichtung für die `name`, `short_name` und `description` Eigenschaften. Zusammen mit der `lang` Eigenschaft kann es helfen, die korrekte Darstellung von rechts-nach-links-Sprachen zu liefern.

```json
"dir": "rtl",
"lang": "ar",
"short_name": "أنا من التطبيق!"
```

Sie kann einer der folgenden Werte sein:

- `ltr` (links nach rechts)
- `rtl` (rechts nach links)
- `auto` (Weist den Browser an, den Unicode-bidirektionalen Algorithmus zu verwenden, um die Textrichtung zu schätzen.)

> **Note:** **Hinweis** : Wenn der Wert weggelassen wird, ist er standardmäßig auf `auto`.

### `display`

Definiert den vom Entwickler bevorzugten Anzeigemodus für die Webanwendung.

```json
"display": "standalone"
```

Gültige Werte sind:

| Anzeigemodus | Beschreibung                                                                                                                                                                                                                                                                                                                                         | Fallback-Anzeigemodus |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `fullscreen` | Es wird der gesamte verfügbare Anzeigebereich verwendet und kein User agent {{Glossary("Chrome")}} wird angezeigt.                                                                                                                                                                                                                             | `standalone`          |
| `standalone` | Die Anwendung wird sich wie eine eigenständige Anwendung darstellen und anfühlen. Dies kann die Anwendung mit einem anderen Fenster, ein eigenes Icon im Anwendungsstarter usw. enthalten. In diesem Modus schließt der Benutzeragent UI-Elemente zum Steuern der Navigation aus, kann aber auch andere UI-Elemente wie eine Statusleiste enthalten. | `minimal-ui`          |
| `minimal-ui` | Die Anwendung sieht und fühlt sich wie eine eigenständige Anwendung an, wird aber einen minimalen Satz von UI-Elementen zur Steuerung der Navigation haben. Die Elemente variieren je nach Browser.                                                                                                                                                  | `browser`             |
| `browser`    | Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder einem neuen Fenster, je nach Browser und Plattform. Dies ist die Voreinstellung.                                                                                                                                                                                                   | (Keiner)              |

> **Note:** **Hinweis** : Sie können das CSS selektiv auf Ihre App basierend auf dem Anzeigemodus über die [Anzeigemodus-](/docs/Web/CSS/@media/display-mode) Medienfunktion anwenden . Dies kann verwendet werden, um eine konsistente Benutzererfahrung zwischen dem Starten einer Website aus einer URL und starten Sie es von einem Desktop-Symbol.

### `icons`

Gibt ein Array von Bildobjekten an, die als Anwendungssymbole in verschiedenen Kontexten dienen können. Zum Beispiel können sie verwendet werden, um die Webanwendung unter einer Liste anderer Anwendungen darzustellen oder die Webanwendung mit einem Task-Switcher und / oder Systemeinstellungen eines Betriebssystems zu integrieren .

```json
"icons": [
  {
    "src": "icon / lowres.webp",
    "sizes": "48x48",
    "type": "image / webp"
  },
  {
    "src": "icon / lowres",
    "sizes": "48x48"
  },
  {
    "src": "icon / hd_hi.ico",
    "sizes": "72x72 96x96 128x128 256x256"
  },
  {
    "src": "icon / hd_hi.svg",
    "sizes": "72x72"
  }
]
```

Bildobjekte können folgende Werte enthalten:

| Mitglied | Beschreibung                                                                                                                                                                             |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sizes`  | Ein String mit platzgetrennten Bildmaßen.                                                                                                                                                |
| `src`    | Der Pfad zur Bilddatei. Wenn `src`eine relative URL ist, ist die Basis-URL die URL des Manifests.                                                                                        |
| `type`   | Ein Hinweis auf den Medientyp des Bildes. Der Zweck dieses Mitglieds ist es, einem Benutzer-Agenten zu erlauben, schnell Bilder von Medientypen zu ignorieren, die es nicht unterstützt. |

### `lang`

Gibt die Primärsprache für die Werte in den `name`und `short_name`Mitgliedern an. Dieser Wert ist ein String mit einem einzigen Tag.

```json
"lang": "en-US"
```

### `name`

Stellt einen menschlich lesbaren Namen für die Anwendung bereit, wie sie dem Benutzer angezeigt werden soll, zum Beispiel unter einer Liste anderer Anwendungen oder als Label für ein Symbol.

```json
"name": "Google I / O 2017"
```

### `orientation`

Definiert die Standardausrichtung für alle Top-Level der Webanwendung {{Glossary("Browsing-Kontext", "Browsing-Kontexte")}}.

```json
​​"orientation": "portrait-primary"
```

Orientierung kann einer der folgenden Werte sein:

- `any`
- `natural`
- `landscape`
- `landscape-primary`
- `landscape-secondary`
- `portrait`
- `portrait-primary`
- `portrait-secondary`

### `prefer_related_applications`

Gibt einen booleschen Wert an, der darauf hinweist, dass der Benutzeragent dem Benutzer mitteilt, dass die angegebenen verwandten Anwendungen (siehe unten) verfügbar sind und über die Webanwendung empfohlen werden. Dies sollte nur verwendet werden, wenn die verwandten nativen Apps wirklich etwas bieten, das die Webanwendung nicht machen kann.

```json
"prefer_related_applications": false
```

> **Note:** **Hinweis** : Wenn weggelassen, gilt der Wert standardmäßig `false`.

### `related_applications`

Gibt ein Array von "Anwendungsobjekten" an, die native Anwendungen repräsentieren, die von der zugrunde liegenden Plattform installiert oder zugänglich sind - zum Beispiel eine native Android-Anwendung, die über den Google Play Store erhältlich ist. Solche Anwendungen sollen Alternativen zur Webanwendung sein, die ähnliche oder gleichwertige Funktionalität bieten - wie die native App-Version der Web-App.

```json
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  }, {
    "platform": "itunes",
    "url": "https://itunes.apple.com/app/example-app1/id123456789"
  }]
```

Anwendungsobjekte können folgende Werte enthalten:

| Mitglied   | Beschreibung                                                                             |
| ---------- | ---------------------------------------------------------------------------------------- |
| `platform` | Die Plattform, auf der die Anwendung gefunden werden kann.                               |
| `url`      | Die URL, bei der die Anwendung gefunden werden kann.                                     |
| `id`       | Die ID, die verwendet wird, um die Anwendung auf der angegebenen Plattform darzustellen. |

### `scope`

Definiert den Navigationsbereich des Anwendungskontextes dieser Webanwendung. Dies beschränkt grundsätzlich, welche Webseiten angezeigt werden können, während das Manifest angewendet wird. Wenn der Benutzer die Anwendung außerhalb des Gültigkeitsbereichs navigiert, kehrt er zu einer normalen Webseite zurück.

Wenn der Bereich eine relative URL ist, wird die Basis-URL die URL des Manifests sein.

```json
"scope": "/ myapp /"
```

### `short_name`

Bietet einen kurzen menschlich lesbaren Namen für die Anwendung. Dies ist für den Einsatz vorgesehen, wo nicht genügend Platz vorhanden ist, um den vollständigen Namen der Webanwendung anzuzeigen.

```json
"short_name": "I / O 2017"
```

### `start_url`

Gibt die URL an, die geladen wird, wenn ein Benutzer die Anwendung von einem Gerät startet. Wenn als relative URL angegeben, ist die Basis-URL die URL des Manifests.

```json
"start_url": "./?utm_source=web_app_manifest"
```

### `theme_color`

Definiert die Standardthemafarbe für eine Anwendung. Dies beeinflusst manchmal, wie die Anwendung vom Betriebssystem angezeigt wird (z. B. auf Android-Task-Switcher, die Themenfarbe umgibt die Anwendung).

```json
"theme_color": "aliceblue"
```

## Splash-Bildschirme

In Chrome 47 und später wird ein Splash-Screen für eine Web-Anwendung angezeigt, die von einem Startbildschirm gestartet wird. Dieser Begrüßungsbildschirm ist automatisch generierten Objekte im Web - App - Manifest verwenden, insbesondere: `name`, `background_color`und das Symbol in der `icons`Anordnung, die am nächsten zu 128dpi für das Gerät ist.

## Mime Typ

Manifestationen sollten mit dem `application/manifest+json`MIME-Typ bedient werden. Allerdings ist es optional, dies zu tun.

## Spezifikation

| Spezifikation                    | Status                       | Kommentar         |
| -------------------------------- | ---------------------------- | ----------------- |
| {{SpecName ('Manifest')}} | {{Spec2('Manifest')}} | Anfangsdefinition |

## Browser-Kompatibilität

{{Compat}}
