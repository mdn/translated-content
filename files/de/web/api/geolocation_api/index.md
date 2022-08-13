---
title: Verwenden von geolocation
slug: Web/API/Geolocation_API
translation_of: Web/API/Geolocation_API
original_slug: Web/WebAPI/verwenden_von_geolocation
---
Die **"geolocation"-API** ermöglicht es Nutzern, einer Web-Applikation die eigene Position mitzuteilen. Um die Privatsphäre des Nutzers zu schützen, wird dieser vorher um Erlaubnis gebeten und muss der Übermittlung zustimmen.

## Das geolocation-Objekt

Die geolocation-API wird durch das {{domxref("window.navigator.geolocation","navigator.geolocation")}}-Objekt offengelegt.

Wenn das Objekt existiert, sind die geolocation-Services vorhanden und nutzbar. Sie können die Funktionstüchtigkeit daher wie folgt testen:

```js
if ("geolocation" in navigator) {
  /* geolocation funktioniert */
} else {
  /* geolocation funktioniert NICHT */
}
```

> **Note:** **Notiz:** In Firefox 24 und älteren Versionen hat `"geolocation" in navigator` immer true zurückgegeben, auch wenn die API ausgeschaltet war. Dies wurde mit [Firefox 25](/de/docs/Mozilla/Firefox/Releases/25/Site_Compatibility) gelöst um mit dem Standard kompatibel zu sein. ({{ bug(884921) }})

### Die derzeitige Position abfragen

Um die derzeitige Position des Nutzers zu erhalten, können Sie die Methode {{domxref("window.navigator.geolocation.getCurrentPosition()","getCurrentPosition()")}} aufrufen. Dies startet eine asynchrone Anfrage für den Abruf der Position zu initiieren. Wenn die Position erhalten wurde, wird die übergebene Callback-Funktion ausgeführt. Sie können optional auch eine zweite Callback-Funktion übergeben, welche im Falle eines Fehlers ausgeführt wird. Ein dritter, optionaler Parameter ist ein Konfigurationsobjekt, in dem Sie das maximale Alter der zurückgegeben Position, die maximale Wartezeit für die Anfrage und den Wunsch für eine hohe Genauigkeit festlegegen können.

> **Note:** **Notiz:** Standardmäßig versucht {{domxref("window.navigator.geolocation.getCurrentPosition()","getCurrentPosition()")}} so schnell wie möglich mit einer geringen Genauigkeit zu antworten. Es ist nützlich wenn Sie eine schnelle Antwort benötigen, unabhängig von der Genauigkeit. Beispielsweise Geräte mit einem GPS können eine Minute oder länger benötigen um eine neue Position zu erhalten, also kann es möglich sein, dass weniger genaue Daten (Ort der IP oder von WLANs) zurückgegeben werden.

```js
navigator.geolocation.getCurrentPosition(function(position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
```

Das obige Beispiel wird die Funktion `do_something()` ausführen, wenn eine Position erhalten wurde.

### Die derzeitige Position überwachen

Wenn sich die Positionsdaten ändern (entweder über die Bewegung des Gerätes oder den Erhalt genauere Geolokationsdaten), können Sie eine Callback-Funktion erstellen, die mit der erneuerten Positionsinformation arbeitet. Dies ist über die Funktion {{domxref("window.navigator.geolocation.watchPosition()","watchPosition()")}} möglich, welche die gleichen Eingabeparameter wie {{domxref("window.navigator.geolocation.getCurrentPosition()","getCurrentPosition()")}}. besitzt. Die Callback-Funktion wird mehrere Male ausgeführt, dies erlaubt dem Browser die Position aufgrund von Bewegungen oder genaueren Positionsdaten, durch das Verwenden von anderen (langsameren) Methoden, zu erneuern. Die Fehler-Callback-Funktion, welche wie auch in {{domxref("window.navigator.geolocation.getCurrentPosition()","getCurrentPosition()")}}, hier optional ist, kann auch mehrfach aufgerufen werden.

> **Note:** **Notiz:** Sie können {{domxref("window.navigator.geolocation.watchPosition()","watchPosition()")}} auch ohne ein vorangestellten Aufruf von {{domxref("window.navigator.geolocation.getCurrentPosition()","getCurrentPosition()")}} nutzen.

```js
var watchID = navigator.geolocation.watchPosition(function(position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
```

Die Methode {{domxref("window.navigator.geolocation.watchPosition()","watchPosition()")}} gibt eine numerische ID zurück, die für die eindeutige Identifikation des Positionsüberwachers verwendet werden kann; diese können Sie in der Methode {{domxref("window.navigator.geolocation.clearWatch()","clearWatch()")}} nutzen, um die Positionsüberwachung zu beenden.

```js
navigator.geolocation.clearWatch(watchID);
```

### Anpassen der Antwort

Sowohl {{domxref("window.navigator.geolocation.getCurrentPosition()","getCurrentPosition()")}} als auch {{domxref("window.navigator.geolocation.watchPosition()","watchPosition()")}} nehmen einen Erfolgs-Callback an, einen optionalen Fehler-Callback und ein optionales `PositionOptions`-Objekt.

{{page("/en-US/docs/DOM/window.navigator.geolocation.getCurrentPosition","PositionOptions")}}

Ein Aufruf von {{domxref("window.navigator.geolocation.watchPosition()","watchPosition")}} könnte wie folgt aussehen:

```js
function geo_success(position) {
  do_something(position.coords.latitude, position.coords.longitude);
}

function geo_error() {
  alert("Entschuldigung, keine Positionsinformationen sind verfügbar.");
}

var geo_options = {
  enableHighAccuracy: true,
  maximumAge        : 30000,
  timeout           : 27000
};

var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
```

Ein (englisches) Beispiel von watchPosition in Aktion: <http://www.thedotproduct.org/experiments/geo/>

## Darstellung einer Position

Die Position des Nutzers wird durch ein `Position`-Objekt dargestellt, welches ein `Coordinates`-Objekt referenziert.

{{page("/en-US/docs/DOM/window.navigator.geolocation.getCurrentPosition","Position")}}

{{page("/en-US/docs/DOM/window.navigator.geolocation.getCurrentPosition","Coordinates")}}

## Fehlerbehandlung

Die Fehler-Callback-Funktion, wenn im Aufruf von `getCurrentPosition()` oder `watchPosition()` vorhanden, nimmt ein PositionError-Objekt als ersten Parameter an.

```js
function errorCallback(error) {
  alert('ERROR(' + error.code + '): ' + error.message);
};
```

{{page("/en-US/docs/DOM/window.navigator.geolocation.getCurrentPosition","PositionError")}}

## Geolokations-Live-Beispiel

```css hidden
body {
  padding: 20px;
  background-color:#ffffc9
}

p { margin : 0; }
```

### HTML Content

```html
<p><button onclick="geoFindMe()">Zeige meine Position an</button></p>
<div id="out"></div>
```

### JavaScript Content

```js
function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolokation wird von ihrem Browser nicht unterstützt</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Die Latitude ist ' + latitude + '° <br>Die Longitude ist ' + longitude + '°</p>';

    var img = new Image();
    img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  };

  function error() {
    output.innerHTML = "Es war nicht möglich Sie zu lokalisieren";
  };

  output.innerHTML = "<p>Lokalisieren…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}
```

### Demo:

{{ EmbedLiveSample('Geolokations-Live-Beispiel',350,410) }}

## Für die Erlaubnis fragen

Jedes Add-On von addons.mozilla.org, welches dieses Feature nutzt, muss explizit, ähnlich der automatischen Frage von Websites, nach Erlaubnis fragen. Die Antwort des Nutzers wird in einer Konfiguration gespeichert, welche von `pref`-Parameter bestimmt wird, wenn möglich. Die Funktion, die als `callback`-Parameter verwendet wird mit einem boolischen Wert aufgerufen, welcher die Antwort des Nutzers anzeigt. Wenn dieser `true` ist, kann das Add-On Geolokationsdaten nutzen.

```js
function prompt(window, pref, message, callback) {
    let branch = Components.classes["@mozilla.org/preferences-service;1"]
                           .getService(Components.interfaces.nsIPrefBranch);

    if (branch.getPrefType(pref) === branch.PREF_STRING) {
        switch (branch.getCharPref(pref)) {
        case "always":
            return callback(true);
        case "never":
            return callback(false);
        }
    }

    let done = false;

    function remember(value, result) {
        return function() {
            done = true;
            branch.setCharPref(pref, value);
            callback(result);
        }
    }

    let self = window.PopupNotifications.show(
        window.gBrowser.selectedBrowser,
        "geolocation",
        message,
        "geo-notification-icon",
        {
            label: "Ort teilen",
            accessKey: "S",
            callback: function(notification) {
                done = true;
                callback(true);
            }
        }, [
            {
                label: "Immer teilen",
                accessKey: "A",
                callback: remember("always", true)
            },
            {
                label: "Niemals teilen",
                accessKey: "N",
                callback: remember("never", false)
            }
        ], {
            eventCallback: function(event) {
                if (event === "dismissed") {
                    if (!done) callback(false);
                    done = true;
                    window.PopupNotifications.remove(self);
                }
            },
            persistWhileVisible: true
        });
}

prompt(window,
       "extensions.foo-addon.allowGeolocation",
       "Foo Add-on möchte deinen Ort abrufen.",
       function callback(allowed) { alert(allowed); });
```

## Browser compatibility

{{Compat}}

### Gecko-Notizen

Firefox besitzt Support für das Lokalisieren über WLAN-Informationen durch die "Google Location"-Services. In einer Transaktion zwischen Firefox und Google werden die Daten übetragen, inklusive Daten des WLAN-Zugriffspunktes, einem Zugriffstoken (ähnlich wie ein zweiwöchiger Cookie), und der IP-Adresse des Nutzers. Für mehr Informationen sollten Sie [Mozillas](http://www.mozilla.com/de/privacy/) und [Googles](www.google.com/privacy/lsf.html) Datenschutzbestimmungen lesen, welche den Rahmen der Datennutzung angeben.

## Siehe auch

- {{domxref("window.navigator.geolocation","navigator.geolocation")}}
- [Geolocation API auf w3.org](http://www.w3.org/TR/geolocation-API/)
- [Demos für die Geolokations-API](/en-US/demos/tag/tech:geolocation "en-US/demos/tag/tech:geolocation/")
- [Who moved my geolocation?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks blog)
