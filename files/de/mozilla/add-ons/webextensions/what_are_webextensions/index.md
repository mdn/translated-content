---
title: Was sind WebExtensions?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
---
{{AddonSidebar}}

WebExtensions erweitern und modifizieren die Funktionen eines Web-Browsers. Sie werden unter Verwendung von Standard-Webtechnologien - JavaScript, HTML und CSS - sowie zusätzlichen speziell dafür vorgesehenen JavaScript APIs erstellt. Unter anderem können mit so einer Erweiterung neue Funktionen zum Browser hinzufügt, das Erscheinungsbild oder der Inhalt bestimmter Webseiten verändert werden.

Erweiterungen für Firefox werden mit Hilfe von WebExtensions APIs erstellt, einem Cross-Browser-System zum Entwickeln von Browsererweiterungen. Zum größten Teil ist die API kompatibel mit der [extension API](https://developer.chrome.com/extensions) für Google Chrome und Opera. Erweiterungen, die für diese Browser erstellt wurden, laufen in den meisten Fällen mit [wenigen Änderungen](/de/docs/Mozilla/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension) in Firefox oder Microsoft Edge. Die API ist ebenfalls vollständig mit [Multiprozess-Firefox](/de/Firefox/Multiprocess_Firefox) kompatibel.

Vor WebExtensions gab es drei unterschiedliche Möglichkeiten, Erweiterungen für Firefox zu erstellen: [XUL/XPCOM overlays](/de/Add-ons/überliegende_Erweiterungen), [bootstrapped extensions](/de/Add-ons/Bootstrapped_extensions) und das [Add-on SDK](/de/Add-ons/SDK). Seit Ende November 2017 sind WebExtensions APIs die einzige Möglichkeit, Firefox-Erweiterungen zu entwickeln, die vorherigen Systeme gelten als veraltet.

Wir sind stets bemüht, die API ständig zu erweitern, um den Anforderungen der Add-on-Entwickler gerecht zu werden. Sollten Sie Anregungen dazu haben, würden wir uns über Ihre Mitteilung auf der englischsprachigen [Mailingliste für Add-on-Entwickler](https://mail.mozilla.org/listinfo/dev-addons) oder auf [#webextensions](irc://irc.mozilla.org/webextensions) im [IRC](https://wiki.mozilla.org/IRC) freuen.

## Nächste Schritte?

- [WebExtensions Beispiele](/de/Add-ons/WebExtensions/Examples).
- [Aufbau einer WebExtension](/de/Add-ons/WebExtensions/Anatomy_of_a_WebExtension).
- [Schritt-für-Schritt Entwicklung einer einfachen WebExtension](/de/Add-ons/WebExtensions/Your_first_WebExtension).
