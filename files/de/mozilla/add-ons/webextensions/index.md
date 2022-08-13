---
title: WebExtensions
slug: Mozilla/Add-ons/WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions
---
{{AddonSidebar}}

WebExtensions sind ein Cross-Browser-System zur Entwicklung von Browser-Add-ons. Das System ist in weiten Teilen kompatibel mit der [extension API](https://developer.chrome.com/extensions), welche von Google Chrome und Opera unterstützt wird. Erweiterungen, welche für diese Browser geschrieben wurden, werden in den meisten Fällen mit [nur wenigen Anpassungen](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Porting_from_Google_Chrome) auch in Firefox oder [Microsoft Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/extensions/) lauffähig sein. Die API ist außerdem vollständig kompatibel mit [Multiprozess-Firefox](https://developer.mozilla.org/en-US/Firefox/Multiprocess_Firefox).

Wir beabsichtigen auch, die APIs zu erweitern, um die Unterstützung für Add-on-Entwickler zu verbessern. Sollten Sie Vorschläge dazu haben, würden wir uns über Ihre Mitteilung freuen. Sie erreichen uns über die englischsprachige [Mailingliste für Add-on-Entwickler](https://mail.mozilla.org/listinfo/dev-addons) oder auf [#webextensions](irc://irc.mozilla.org/webextensions) im [IRC](https://wiki.mozilla.org/IRC).

### Erste Schritte

- [Was sind WebExtensions?](/de/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions_)
- [Deine erste WebExtension](/en-US/Add-ons/WebExtensions/Your_first_WebExtension)
- [Deine zweite WebExtension](/en-US/Add-ons/WebExtensions/Your_second_WebExtension)
- [Anatomie einer WebExtension](/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Beispiel-WebExtensions](/en-US/Add-ons/WebExtensions/Examples)

### Kurzanleitungen

- [Abfangen von HTTP-Anfragen](/de/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)
- [Eine Web-Seite verändern](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page)
- [Eine Schaltfläche zu einer Werkzeugleiste hinzufügen](/de/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Eine Einstellungen-Seite erstellen](/de/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
- Browser-Tabs beeinflussen
- Zugreifen auf und verändern von Lesezeichen
- Zugreifen auf und verändern von Cookies

### Konzepte

- [Verwendung der JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Using_the_JavaScript_APIs)
- [Content scripts](/en-US/Add-ons/WebExtensions/Content_scripts)
- [Match patterns](/en-US/Add-ons/WebExtensions/Match_patterns)
- [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Native messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)

### Portieren

- [Portieren einer Google Chrome-Erweiterung](/en-US/Add-ons/WebExtensions/Porting_from_Google_Chrome)
- [Portieren eines veralteten Firefox Add-ons](/de/docs/Mozilla/Add-ons/WebExtensions/Porting_a_legacy_Firefox_add-on)
- [Eingebettete WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions)
- [Vergleich mit dem Add-on SDK](/de/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_the_Add-on_SDK)
- [Vergleich mit XUL/XPCOM-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_XUL_XPCOM_extensions)
- [Inkompatibilitäten mit Chrome](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)

### Firefox workflow

- [Installation](/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)
- [Debugging](/en-US/Add-ons/WebExtensions/Debugging)
- [Einstieg in Web-Ext](/de/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext)
- [Web-Ext Befehlsreferenz](/de/docs/Mozilla/Add-ons/WebExtensions/web-ext_command_reference)
- [WebExtensions und die Add-On-ID](/de/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID)
- [Veröffentlichen deiner WebExtension](/de/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension)

### Referenz

- [JavaScript-API-Überblick](/de/docs/Mozilla/Add-ons/WebExtensions/API)
- [Tabellen zur Browser-Kompatibilität zu JavaScript-APIs](/en-US/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)

#### JavaScript APIs

{{ ListSubpages ("/en-US/Add-ons/WebExtensions/API") }}

#### Manifest keys

{{ ListSubpages ("/en-US/Add-ons/WebExtensions/manifest.json") }}
