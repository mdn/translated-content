---
title: Beispiele für Erweiterungen
slug: Mozilla/Add-ons/WebExtensions/Examples
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Examples
original_slug: Mozilla/Add-ons/WebExtensions/Beispiele
---
{{AddonSidebar}}

Um zu veranschaulichen, wie Erweiterungen entwickelt werden, gibt es von uns ein Repository mit einfachen Beispielerweiterungen unter https\://github.com/mdn/webextensions-examples. Dieser Artikel beschreibt die WebExtension-APIs, die in diesem Repository verwendet werden.

Diese Beispiele funktionieren in Firefox Nightly: Die meisten funktionieren in früheren Versionen von Firefox, aber überprüfen Sie zur Sicherheit den Schlüssel [strict_min_version](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/applications) in der Datei manifest.json der Erweiterung.

Wenn Sie diese Beispiele ausprobieren möchten, haben Sie drei Möglichkeiten:

1\. Klonen Sie das Repository, und laden Sie die Erweiterung direkt aus dem Quellverzeichnis mit der Funktion ["Load Temporary Add-on"](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox). Die Erweiterung bleibt solange geladen, bis Sie Firefox neu starten.
2\. Klonen Sie das Repository und verwenden Sie dann das [web-ext](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext) Befehlszeilentool, um Firefox mit der installierten Erweiterung auszuführen.
3\. Klonen Sie das Repository und gehen Sie dann zum [Build](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)-Verzeichnis. Dieses enthält "Build"- und "Signed"-Versionen aller Beispiele; Sie können sie also einfach in Firefox öffnen (mit Datei / Datei öffnen) und sie dauerhaft installieren, genau wie eine Erweiterung, die Sie von [addons.mozilla.org](https://addons.mozilla.org/) installieren würden.

Wenn Sie einen Beitrag zum Repository leisten möchten, senden Sie uns ein [Pull-Request](https://github.com/mdn/webextensions-examples/blob/master/CONTRIBUTING.md)!

{{WebExtAllExamples}}
