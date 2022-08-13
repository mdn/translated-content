---
title: Add-ons
slug: Mozilla/Add-ons
tags:
  - Add-ons
  - Erweiterungen
  - Mozilla
translation_of: Mozilla/Add-ons
---
{{AddonSidebar}}**\_**Ändern und Erweitern von Mozilla-Anwendungen**\_**

Add-ons fügen neue Funktionalitäten zu [Gecko](/de/docs/Mozilla/Gecko)-basierten Anwendungen wie zum Beispiel Firefox, SeaMonkey und Thunderbird hinzu.\*\* \*\*Es gibt zwei Arten von Add-ons: [Erweiterungen](#Extensions) fügen neue Funktionen zur Anwendung hinzu, während [Themes](#Themes) nur die Oberfläche verändern.

Für Erweiterungen und Themes betreibt Mozilla ein Repository auf [addons.mozilla.org](https://addons.mozilla.org), auch bekannt als AMO. Wenn Sie [Add-ons bei AMO einreichen](/de/docs/Mozilla/Add-ons/Submitting_an_add-on_to_AMO) werden diese überprüft und erst nach bestandener Prüfung veröffentlicht. Allerdings ist es nicht zwingend erforderlich, dass Add-ons nur über AMO veröffentlicht werden, aber durch die Überprüfung gewinnen Anwender an Vertrauen und im Gegenzug können Sie von AMO als einer zentralen Plattform, auf der viele hilfreiche Add-ons zu finden sind, nur profitieren.

Add-ons können großen Einfluss auf das Verhalten der Anwendung haben, die sie hosten. Wir haben eine Reihe von [Richtlinien](/de/docs/Mozilla/Add-ons/Add-on_guidelines) entwickelt, um sicherzustellen, dass Sie eine gute Erfahrung für Benutzer bereitstellen. Diese Richtlinien gelten für alle Arten von Add-ons, ob sie auf [addons.mozilla.org](https://addons.mozilla.org/) oder nicht gehostet werden.

---

## Erweiterungen

Erweiterungen fügen neue Funktionalität bei Mozilla-Anwendungen wie Firefox und Thunderbird hinzu. Sie können dem Browser neue Funktionen hinzufügen, z. B. eine andere Möglichkeit zum Verwalten von Registerkarten, neue Funktionen hinzufügen und sie können Web-Inhalte zur Verbesserung der Benutzerfreundlichkeit oder die Sicherheit von bestimmten Webseiten ändern.

Es gibt drei verschiedene Ansätze Erweiterungen zu erstellen können: Add-on SDK-basierte Erweiterungen, manuell bootstrapped restartless Erweiterungen und Overlay-Erweiterungen.

### [Add-on SDK Erweiterungen](https://developer.mozilla.org/de/Add-ons/SDK)

Erweiterungen, die auf high-level JavaScript APIs aufbauen und keinen Browserneustart bei der Installation erfordern.

### [Restartless Erweiterungen](/en-US/Add-ons/Bootstrapped_extensions)

Erweiterungen, die keinen Browserneustart bei der Installation erfordern.

### [Overlay Erweiterungen](/de/Add-ons/Overlay_Extensions)

Overlay-Erweiterungen, die gewöhnlich [XUL-Overlays](/de/docs/Mozilla/Tech/XUL/Overlays) verwenden, und einen Browserneustart bei der Installation erfordernWenn Sie können, ist es ratsam, das Add-on-SDK zu verwenden, die Add-on-SDK verwendet die restartless Erweiterungsmechanismus die aber bestimmte Aufgaben vereinfacht und sich selbst bereinigt. Wenn das Add-on SDK nicht ausreichend für Ihre Bedürfnisse ist, implementieren Sie stattdessen eine manuelle restartless-Erweiterung.Lesen Sie für weitere Informationen zur Auswahl "welche Technik verwenden" diesen [Vergleich](/de/Add-ons/Comparing_Extension_Toolchains).

### Debugging

Die Entwicklung von Erweiterung wird erschwert, wenn man für den Debug über keine Möglichkeit verfügt zu sehen, in welcher Zeile der Fehler aufgetreten ist. Sie müssen die Entwickler Präferenzen aktivieren, damit die logs in der Browser Konsole gezeigt werden. Für Dektopnutzer: [Einrichten einer Entwicklungsumgebung für Erweiterungen](/de/docs/Einrichten_einer_Entwicklungsumgebung_f%C3%BCr_Erweiterungen#Entwicklungseinstellungen).

Für eine Desktop-Umgebung nutzen Sie: [Eine Entwicklungsumgebung einrichten](/de/docs/XUL/School_tutorial/Eine_Entwicklungsumgebung_einrichten_Environment), für Mobile Geräte (Android/iOS) nutzen Sie: [Debugging Firefox for Android with WebIDE](/de/docs/Tools/Remote_Debugging/Debugging_Firefox_for_Android_with_WebIDE). Letztere verwendet die "Browser Toolbox" innerhalb der Dektop WebIDE, um auf dem Mobilgerät auftretende Fehler zu erkennen, nutzen Sie für Firefox OS auch die WebIDE.

### Empfohlene Vorgehensweisen

Egal, wie Sie eine Erweiterung entwickeln. Gibt es einige Richtlinien, denen Sie folgen können, um sicherzustellen, dass Ihre Erweiterung einem Benutzer eine möglichst gute Nutzererfahrung bietet.

- [Leistung](/de/Add-ons/Performance_best_practices_in_extensions)
  - : Die Erweiterung ist schnell, reaktionsfähig und Speicher-effizient.
- [Sicherheit](/de/Add-ons/Security_best_practices_in_extensions)
  - : Die Erweiterung setzt den Nutzer keinen schädlichen Websites aus.
- [Etikette](/de/Add-ons/Extension_etiquette)
  - : Die Erweiterung arbeitet problemlos mit anderen Erweiterungen.

### Anwendungsspezifische

Der Großteil der Dokumentation geht davon aus, dass Sie für Firefox Desktop entwickeln. Wenn Sie für einige andere Gecko-basierte Anwendung entwickeln, gibt es große Unterschiede, über die Sie Bescheid wissen müssen.

- [Thunderbird](/de/Add-ons/Thunderbird)
  - : Entwicklung von Erweiterungen für den Thunderbird-Mail-Client.
- [Firefox for Android](/de/Add-ons/Firefox_for_Android)
  - : Entwicklung von Erweiterungen für Firefox für Android.
- [SeaMonkey](/de/Add-ons/SeaMonkey_2)
  - : Entwicklung von Erweiterungen für [SeaMonkey](http://www.seamonkey-project.org/) Software-Suite.

---

## Themes

Themen sind Add-ons, die Benutzeroberfläche der Anwendung anpassen. Es gibt zwei Arten von Themen: leichte Themen und komplette Themen.

[Leichte Themen](https://addons.mozilla.org/de/developers/docs/themes) sind viel einfacher zu implementieren als komplette Themen, aber sie bieten sehr begrenzte Anpassungs möglichkeiten .

Mit [kompletten Themes ](/de/docs/Themes)machen Sie viel tieferen Änderungen an der Benutzeroberfläche der Anwendung. Die Dokumentation für komplette Themes ist veraltet, aber ist hier als eine mögliche Grundlage für aktualisierte Dokumentation verbunden.

## Andere Arten von Add-ons

[Search engine plugins](/de/docs/Creating_OpenSearch_plugins_for_Firefox) sind eine einfache und sehr spezifische Art von Add-on: sie fügen neue Suchmaschinen zu den Browser-Suchleiste hinzu.**[Plugins](/de/docs/Plugins)** helfen den Anwendung den Inhalt zu verstehen, die nicht nativ unterstützt werden. Wir sind dabei ablehnend Plugins zu Supporten, da sie eine Geschichte der Stabilität, Leistung und Sicherheitsprobleme verursacht haben.

## Inhalt

1.  [Overlay Erweiterung](/de/Add-ons/Overlay_Extensions "Overlay extensions")
2.  [Restartless Erweiterung](/de/Add-ons/Bootstrapped_extensions "Restartless extensions")
3.  [Add-on SDK](/de/Add-ons/SDK)
4.  Erweiterung Bewährte

    1.  [Leistung](/de/Add-ons/Performance_best_practices_in_extensions "Performance")
    2.  [Sicherheit](/de/Add-ons/Security_best_practices_in_extensions "Security")
    3.  [Etikette](/de/Add-ons/Extension_etiquette "Etiquette")

5.  Themes

    1.  [Leichte Themes](https://addons.mozilla.org/de/developers/docs/themes "Lightweight themes")
    2.  [Komplete Themes](/de/docs/Themes "Complete themes")

6.  Veröffentlichung Add-ons

    1.  [addons.mozilla.org](https://addons.mozilla.org/ "addons.mozilla.org")
    2.  [Add-on Richtlinien](/de/docs/Mozilla/Add-ons/Add-on_guidelines)
