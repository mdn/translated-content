---
title: Benutzen des Zwischenspeichers in Firefox 1.5 (caching)
slug: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
tags:
  - Caching
  - Firefox 1.5
  - JavaScript
translation_of: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
original_slug: Benutzen_des_Zwischenspeichers_in_Firefox_1.5_(caching)
---
{{FirefoxSidebar}}

### Einführung

[Firefox 1.5](/de/Firefox_1.5_für_Entwickler "de/Firefox_1.5_für_Entwickler") verwendet einen internen Speicher-Cache, der sich den Inhalt der geladenen Webseiten, sowie den Status von JavaScripts für eine Sitzung merkt. Dadurch verbessert sich die Ladezeit bereits geladener Webseiten erheblich und es kann schnell zwischen bereits besuchten Webseiten vor und zurück gewechselt ohne, dass die Seiten neu geladen werden müssen oder der JavaScript-Status verloren geht. Diese Funktion wird als **bfcache** („Back-Forward Cache“) bezeichnet. Der zwischengespeicherte Status wird solange erhalten, bis der Browser geschlossen wird.

Unter bestimmten Umständen, verwendet Firefox diesen Zwischenspeicher jedoch nicht:

- Die Seite besitzt einen `unload` oder `beforeunload` Handler.
- Die Seite besitzt den „cache-control: no-store“ Header.
- Die Seite besitzt den „cache-control: no-cache“ Header und wird über das https Protokoll gesendet.
- Die Seite ist nicht fertig geladen, wenn der Benutzer die Seite verlässt.
- Die Top-Level Seite besitzt Frames, die nicht zwischenspeicherbar sind.
- Die Seite ist in einem Frame, in dem eine neue Seite geladen wird (in diesem Fall, wird die letzte, geladene Seite des Frames zwischengespeichert).

Die sogenannte _bfcache_ Funktion verändert das Ladeverhalten von Webseiten ungemein. Webentwickler möchten daher unter Umständen:

- Wissen, ob der Benutzer eine bestimmte Seite betreten hat und diese aus dem Cache geholt wird;
- Das Seitenverhalten bestimmen, das sich aufgrund des Verlassens einer bestimmten Seite ändert.

Zwei neue Browser-Events ermöglichen beides.

### Die neuen Browser-Events

Falls man die neuen Events verwendet, werden die Webseiten in anderen und älteren Browsern trotzdem richtig angezeigt. Getestet wurden Firefox, Internet Explorer, Opera und Safari. Die neue _bfcache_-Funktion wird nur verwendet, wenn die Webseite in einen Firefox-Browser 1.5 oder höher geladen wird.

Hinweis: Safari unterstützt die neuen Events in einer zukünftigen Version (10-2009, siehe[WebKit bug](https://bugs.webkit.org/show_bug.cgi?id=28758)).

Standardverhalten bei Webseiten sehen wie folgend aus:

1. Benutzer navigiert zu der Webseite.
2. Wenn sich die Seite aufbaut, werden die Inline-Scripts ausgeführt.
3. Nach vollständigem Aufbau, wird der `unload`-Handler ausgelöst.

Einige Seiten verfügen über einen vierten Schritt. Falls die Seite einen `unload`-Handler besitzt, wird dieser beim Verlassen der Webseite zusätzlich ausgelöst. Falls ein `unload` oder `beforeunload` Handler vorhanden ist, wird die Seite nicht zwischengespeichert.

Wenn ein Benutzer zu einer bereits zwischengespeicherten Seite navigiert, werden die bereits ausgeführten Inline-Scripts und der `onload`-Handler ignoriert (siehe oben: Schritt 2 und 3), damit werden in fast allen Fällen die Effekte dieser Skripte erhalten.

Wenn die Webseite Skripte enthält, oder anderes Verhalten, welches bei jedem neuen Besuch des Benutzers erneut ausgeführt werden soll, oder wenn man wissen möchte, ob ein Benutzer zu einer zwischengespeicherten Seite navigiert, muss man das über das `pageshow`-Event realisieren.

Wenn man eine Aktion ausführen will, die beim Verlassen einer Webseite ausgeführt wird und man den Vorteil des neuen bfcache-Feature nutzen möchte, verwendet man nicht den `unload`-Handler, sondern benutzt das neue `pagehide`-Event.

#### Das `pageshow` Ereignis

Dieses Ereignis funktioniert genauso, wie das `load`-Event, jedoch wird dieses Ereignis bei jedem Aufruf der Webseite ausgelöst (wobei das `onload`-Ereignis nicht ausgelöst wird, wenn die Webseite aus dem Zwischenspeicher des Firefox 1.5 geladen wird). Wird die Webseite das erste Mal geladen, folgt nach dem Auslösen des `onload`-Ereignisses sofort das `pageshow`-Event. Das `pageshow`-Ereignis besitzt eine boolsche Eigenschaft, `persisted`, deren Inhalt auf beim ersten Laden auf `false` steht. Der Wert `true` bedeutet, dass der Browser diese Seite aus dem Zwischenspeicher holt.

Folglich muss man jedes JavaScript, welches bei jedem Besuch der Webseite durchlaufen soll, mit dem `pageshow`-Ereignis verknüpfen.

Werden JavaScript Funktionen als Teil des`pageshow` Events aufgerufen, kann durch den Aufruf des `pageshow` Events im `load` Event sichergestellt werden, dass die Funktionen von anderen Versionen und Browsern als Firefox 1.5, geladen werden. Siehe auch im späteren Beispiel weiter unten.

#### Das `pagehide` Ereignis

Falls ein bestimmtes Verhalten definiert werden soll, wenn der Benutzer von der Seite weg navigiert und man nicht das `unload`-Event verwenden will (welches verursachen würde, dass die Webseite nicht zwischengespeichert wird), kann man nun das neue `pagehide`-Event verwenden. Wie auch das `pageshow` Ereignis, besitzt das `pagehide`-Event die boolsche Eigenschaft `persisted`. Der Inhalt dieser Eigenschaft steht auf `false`, wenn der Seiteninhalt nicht aus dem Zwischenspeicher geholt wird, und steht auf `true`, wenn der Inhalt aus dem Cache geholt wird. Wenn die Eigenschaft auf `false` steht, wird der `unload`-Handler, falls vorhanden, sofort nach dem `pagehide`-Event ausgeführt.

Firefox 1.5 versucht das Ladeverhalten der Webseiten so zu simulieren, als wenn die Seite das erste Mal geladen wird. Frames werden genauso behandelt, wie das Top-Level Fenster. Falls die Webseite Frames enthält und sie aus dem Zwischenspeicher geladen werden:

- werden die `pageshow`-Events aller Frame-Seiten ausgelöst, bevor das `pageshow`-Event der Hauptseite ausgeführt wird.
- Wenn der Benutzer von der zwischengespeicherten Frame-Seite weg navigiert, wird das `pagehide`-Event von allen Frame-Seiten augelöst, bevor das `pagehide`-Event der Hauptseite ausgeführt wird.
- Bei einer Navigation innerhalb eines einzigen Frames, werden nur die Events ausgelöst, die diesen Frame betreffen.

#### Seiten-Caching trotz `unload` und `beforeunload` Handler

Wenn man `unload` oder `beforeunload` Events verwenden möchte und das Seiten-Caching aufrecht erhalten will, können diese Events einfach in der Event-Handler Funktion entfernt werden und wieder in der `pageshow` Handler-Fuktion eingesetzt werden, wenn man auf die Seite zurückkehrt:

    window.addEventListener('pageshow', PageShowHandler, false);
    window.addEventListener('unload', UnloadHandler, false);

    function PageShowHandler() {
     window.addEventListener('unload', UnloadHandler, false);
    }

    function UnloadHandler() {
     window.removeEventListener('beforeunload', UnloadHandler, false);
    }

### Beispiel-Code

Das folgende Beispiel veranschaulicht eine Seite, die beide Events verwendet (`load` und `pageshow`). Die Beispiel-Webseite verhält sich wie folgt:

- In anderen Browsern als dem Firefox 1.5 passiert folgendes zu jedem Zeitpunkt, bei dem die Seite geladen wird: Das `onload`-Ereigniss löst die `onLoad`-Funktion aus, welche wiederum die `onPageShow`-Funktion ausführt (sowie eine zusätzliche Funktion).

- Im Firefox 1.5 verhält sich das `onload`-Event wie bei jedem anderen Browser, wenn die Webseite das erste Mal geladen wird (also nicht aus dem Zwischenspeicher). Zusätzlich wird das `pageshow`-Event ausgelöst und falls die `persisted`-Eigenschaft den Wert `false` besitzt, wird nichts Zusätzliches ausgeführt.

- Wird die Webseite beim Firefox 1.5 aus dem Zwischenspeicher geladen, wird nur das `pageshow`-Event ausgelöst. Besitzt die `persisted`-Eigenschaft den Wert `true`, werden nur die JavaScript-Aktionen ausgeführt, die in der `onPageShow`-Funktion gelistet sind.

In diesem Beispiel:

- Die Webseite ermittelt und visualisiert das derzeitige Datum und die derzeitige Zeit bei jedem Anzeigen der Webseite. Die Berechnung enthält auch Sekunden sowie Millisekunden, sodass die Funktionen einfach getestet werden können.
- Der Cursor wird im Eingabefeld des Formulars für den Namen platziert. Wenn der Benutzer nun beim Firefox 1.5, nach abschicken des Formulars, zurück zur Eingabe navigiert, verharrt der Cursor beim zuletzt ausgewählten Feld. Bei anderen Browsern, wird der Cursor erneut im Namensfeld platziert.

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
       "http://www.w3.org/TR/html4/loose.dtd">
    <HTML>
    <head>
    <title>Order query : Firefox 1.5 Example</title>
    <style type="text/css">
    body, p {
     font-family: Verdana, sans-serif;
     font-size: 12px;
        }
    </style>
    <script type="text/javascript">
    function onLoad() {
     loadOnlyFirst();
     onPageShow();
    }

    function onPageShow() {
    //Berechne die aktuelle Zeit
            var currentTime= new Date();
     var year=currentTime.getFullYear();
     var month=currentTime.getMonth()+1;
     var day=currentTime.getDate();
     var hour=currentTime.getHours();
     var min=currentTime.getMinutes();
     var sec=currentTime.getSeconds();
     var mil=currentTime.getMilliseconds();
     var displayTime = (month + "/" + day + "/" + year + " " +
      hour + ":" + min + ":" + sec + ":" + mil);
     document.getElementById("timefield").value=displayTime;
    }

    function loadOnlyFirst() {
     document.zipForm.name.focus();
    }
    </script>
    </head>
    <body onload="onLoad();" onpageshow="if (event.persisted) onPageShow();">
    <h2>Order query</h2>

    <form name="zipForm" action="http://www.example.com/formresult.html" method="get">
    <label for="timefield">Date and time:</label>
    <input type="text" id="timefield"><br>
    <label for="name">Name:</label>
    <input type="text" id="name"><br>
    <label for="address">Email address:</label>
    <input type="text" id="address"><br>
    <label for="order">Order number:</label>
    <input type="text" id="order"><br>
    <input type="submit" name="submit" value="Submit Query">
    </form>
    </body>
    </html>

Im Gegensatz dazu: Wenn die vorherige Seite nicht auf das `pageshow`-Event hört und alle Berechnungen als Teil des `load`-Events verarbeitet werden (und anstelle des oberen Codes, der untere verwendet wird), wird die Cursor-Position und der Datum/Zeit-Stempel vom Firefox 1.5 zwischengespeichert, falls der Benutzer von der Seite weg navigiert. Kommt der Benutzer nun auf die Webseite zurück, wird der zwischengespeicherte Datum/Zeit-Stempel angezeigt.

    <script>
    function onLoad() {
     loadOnlyFirst();

    //Berechne die aktuelle Zeit
            var currentTime= new Date();
     var year = currentTime.getFullYear();
     var month = currentTime.getMonth()+1;
     var day = currentTime.getDate();
     var hour=currentTime.getHours();
     var min=currentTime.getMinutes();
     var sec=currentTime.getSeconds();
     var mil=currentTime.getMilliseconds();
     var displayTime = (month + "/" + day + "/" + year + " " +
      hour + ":" + min + ":" + sec + ":" + mil);
     document.getElementById("timefield").value=displayTime;
    }

    function loadOnlyFirst() {
     document.zipForm.name.focus();
    }
    </script>
    </head>

    <body onload="onLoad();">

### Entwicklung von Firefox Erweiterungen

Firefox 1.5 Erweiterungen müssen diese Zwischenspeicher Funktionalität unterstützen. Falls Sie eine Erweiterung für den Firefox entwickeln, welche kompatibel zu 1.5 und früheren Versionen sein soll, achten Sie darauf, dass Funktionen des `onload`-Events nur bei Seiten verwendet werden, die zwischengespeichert werden können und Funktionen des `pageshow`-Events benutzen, bei denen kein Cache verwendet werden soll.

Zum Beispiel sollte die Google-Toolbar für den Firefox bei der autolink-Funktion auf das `onload`-Event reagieren und für die PageRank-Funktion mit dem `pageshow`-Event arbeiten, um kompatibel zu allen Firefox-Versionen zu sein.

{{ languages( { "en": "en/Using_Firefox\_1.5\_caching", "it": "it/Usare_il_caching_di_Firefox\_1.5", "fr": "fr/Utilisation_du_cache_de_Firefox\_1.5", "ja": "ja/Using_Firefox\_1.5\_caching" } ) }}
