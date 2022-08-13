---
title: Window.dump()
slug: Web/API/Window/dump
tags:
  - DOM
translation_of: Web/API/Window/dump
---
{{ApiRef}}

## Übersicht

Schreibt eine Nachricht auf die (systemeigene) Konsole.

## Syntax

    window.dump(message);

    dump(message);

- `message` ist die zu protokollierende Nachricht.

## Bemerkungen

`dump` wird normalerweise verwendet um JavaScript zu debuggen. Privilegierter Code kann auch [`Components.utils.reportError`](/en-US/docs/Components.utils.reportError "Components.utils.reportError") und [`nsIConsoleService`](/en-US/docs/XPCOM_Interface_Reference/nsIConsoleService "nsIConsoleService") verwenden, um Nachrichten in die [Fehler-Konsole](/de/docs/Error_Console "Error_Console") zu schreiben.

In [Gecko](/de/docs/Gecko "Gecko") ist `dump` standardmäßig deaktiviert – beim Aufruf passiert also nichts und es wird auch kein Fehler erzeugt. Um die `dump` Ausgabe zu sehen, muss die Einstellung `browser.dom.window.dump.enabled` auf `true` gesetzt werden. Diese Einstellung kann in [about:config](http://kb.mozillazine.org/About:config) oder in der [user.js Datei](http://kb.mozillazine.org/User.js_file) vorgenommen werden. Anmerkung: Diese Einstellung ist in `about:config` normalerweise nicht enthalten, sie muss erst erzeugt werden (Rechtsklick in den Fensterbereich -> Neu -> Boolean).

In Windows benötigt man eine Konsole, um überhaupt etwas zu sehen. Wenn noch keine vorhanden ist, kann durch einen Neustart der Anwendung mit dem Parameter `-console` eine Konsole erzeugt werden. Auf anderen Betriebssystemen ist es ausreichend die Anwendung aus einem Terminal aufzurufen.

Um die Konsolenausgabe in eine Datei umzuleiten, muss Firefox _ohne_ den Parameter `-console` gestartet und folgende Syntax zum Umleiten von stderr und stdout in eine Datei verwendet werden, zB.:

    firefox > console.txt 2>&1

`dump` steht auch in JavaScript geschriebenen XPCOM Komponenten zur verfügbar, obwohl [`window`](/en-US/docs/DOM/window "DOM/window") nicht das globale Objekt in Komponenten ist. Allerdings wird diese Verwendung von `dump` nicht durch die oben genannte Einstellung beeinflusst -- die Ausgabe findet immer statt. Deshalb ist es anzuraten, diese Einstellung selbst zu prüfen oder eine eigene Debug-Einstellung zu erzeugen. Damit sichergestellt ist, dass nicht unnötig viele Debug-Daten in die Konsole des Benutzers geschrieben werden, wenn dieser überhaupt nicht an diesen interessiert ist. Achtung, die Ausgabe von `dump` von XPCOM Komponenten wird zu `stderr` geleitet, während ein Aufruf von `dump`an andere Stelle auf `stdout` ausgibt.

## Spezifikation

{{DOM0}}
