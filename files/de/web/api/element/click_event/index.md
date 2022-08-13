---
title: Globaler Eventhandler onclick
slug: Web/API/Element/click_event
tags:
  - API
  - HTML DOM
  - Méthode
  - Referencen
translation_of: Web/API/GlobalEventHandlers/onclick
original_slug: Web/API/GlobalEventHandlers/onclick
---
{{ ApiRef("HTML DOM") }}

Die **onclick** Methode gibt den c`lick`-`E`venthandler des Elementes zurück.

> **Note:** Wenn man das `click`-`E`vent zum auslösen einer Aktion benutzt, kann man auch in Erwägung ziehen das man die selbe Aktion auf das `keydown`-Event legt, das erlaubt den Nutzern ohne Maus oder Touchscreen die Aktion trotzdem auszuführen.

## Syntax

    element.onclick = function;

_Anstelle von function_ wird der Methodenname eingetragen, der meistens etwas mit der Funktion der Methode zu tun hat. Siehe "[JavaScript Guide:Functions](/de/docs/JavaScript/Guide/Functions)".

Das Eventobject besteht aus der spezielen Eventhandlermethode die ein {{domxref("MouseEvent")}} ist.

## Beispiel

```html
<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8" />
<title>onclick Event Beispiel</title>
<script>
function initElement() {
  var p = document.getElementById("foo");
  // BEACHTE: showAlert(); oder showAlert(param); wird NICHT funktionieren.
  // Es muss ein Methodenname und NICHT ein Methodenaufruf sein.
  p.onclick = showAlert;
};

function showAlert() {
  alert("onclick Event erkannt!")
}
</script>
<style>
#foo {
  border: solid blue 2px;
}
</style>
</head>
<body onload="initElement();">
<span id="foo">Mein Eventelement</span>
<p>Klicke auf das obenstehende Element</p>
</body>
</html>
```

Oder man benutzt eine anonyme Methode, wie hier:

```js
p.onclick = function() { alert("onclick Event erkannt!"); };
```

## Bemerkungen

Dieses Event wird ausgefürt wenn der Benutzer auf das Element klickt. Dieses Event wird nach dem Mousedown- und dem Mouseupevent ausgefürt.

Nur ein Klickhandler kann zu einem Objekt hinzugefügt werden in dieser Variable gespeichert werden. Man kann auch die {{domxref("EventTarget.addEventListener()")}} Methode benutzen, seit es flexibel ist und teil der DOM Evente Spezifikation.

## Spezifikation

{{Specifications}}
