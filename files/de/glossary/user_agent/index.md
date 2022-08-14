---
title: Nutzeragent
slug: Glossary/User_agent
tags:
  - Browser
  - Glossary
  - Nutzeragent
  - agent
translation_of: Glossary/User_agent
---
Ein Nutzeragent (Englisch: User Agent) ist ein Programm, das einem Nutzer den Zugriff auf Netzwerkdienste ermöglicht. Auf das {{Glossary("World Wide Web", "Web")}} bezogen handelt es sich meist um den {{Glossary("Browser","Browser")}}.
Außer einem Browser kann es sich auch um einen Bot handeln, ein automatisches Programm, das das Web durchsucht. Auch Download-Manager sowie andere Programme, die auf das Web zugreifen, fallen in diese Kategorie.

Mit jeder Anfrage, die Browser an einen Server schicken, senden sie die {{Glossary("HTTP")}}-Kopfzeile {{HTTPHeader("User-Agent")}}, mit der sie sich selbst zu erkennen geben. Dieser Text, die User-Agent-Kennung, enthält meistens Informationem über den Browser, seine Version sowie das Betriebssystem des Computers.
Ein typisches Beispiel ist `Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0`.

Spambots, Download-Manager und auch manche Browser senden falsche Angaben, um ihre Identität zu verschleiern und so Restriktionen zu umgehen. Im Englischen wird diese Verschleierung als _user agent spoofing_ bezeichnet.

Die User-Agent-Kennung kann im Browser mit {{Glossary("JavaScript")}} über die Eigenschaft {{domxref("navigator.userAgent")}} ausgelesen werden. Sie ist jedoch von eher geringem Nutzen und insbesondere – obwohl diese Methode nach wie vor weit verbreitet ist – kaum geeignet, um spezielle Fähigkeiten des Browsers festzustellen.

## Siehe auch

### Allgemein

- {{interwiki("wikipedia", "User agent")}} auf Wikipedia

### Technische Referenzen

- {{domxref("navigator.userAgent")}}
- [Browser detection using the user agent](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- {{RFC(2616, "14.43")}}: The `User-Agent` header

1.  [MDN Web Docs Glossary](/de/docs/Glossary)

    1.  {{Glossary("Browser")}}

2.  HTTP Headers

    1.  {{HTTPHeader("User-agent")}}
