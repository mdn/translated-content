---
title: Tk
slug: Web/HTTP/Headers/Tk
tags:
  - Antwort
  - DNT
  - HTTP
  - Referenz
  - header
  - tracking
translation_of: Web/HTTP/Headers/Tk
---
{{HTTPSidebar}}

Der **`Tk`** Antwort-Header beeinhaltet den Tracking-Status der auf die Anfrage zutraf.

| Header-Typ                                       | {{Glossary("Response header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | Nein                                     |

## Syntax

    Tk: !  (Arbeit im Gange)
    Tk: ?  (Dynamisch)
    Tk: G  (Gateway oder mehrere Partien)
    Tk: N  (Kein Tracking)
    Tk: T  (Tracking)
    Tk: C  (Tracking mit Einwilligung)
    Tk: P  (Mögliche Einwilligung)
    Tk: D  (DNT wird ignoriert)
    Tk: U  (Aktuallisiert)

### Directives

- !
  - : Arbeit im Gange. Der Ursprungsserver testet gerade seine Kommunikation des Tracking-Status.
- ?
  - : Dynamisch. Der Ursprungsserver braucht mehr Information, um den Tracking-Status bestimmen zu können.
- G
  - : Gateway oder mehrere Partien. Der Server handelt als Gateway zu einem Austausch, der mehrere Partien beinhaltet.
- N
  - : Kein Tracking.
- T
  - : Tracking.
- C
  - : Tracking mit Einwilligung. Der Ursprungsserver glaubt, er hat zuvur eine Einwilligung bekommen, diesen Nutzer, User-Agent oder dieses Gerät zu tracken.
- P
  - : Mögliche Einwilligung. Der Ursprungsserver weiß nicht, in Echtzeit, ob er eine zuvorige Einwilligung für das tracken dieses Nutzers, User-Agents oder Geräts, bekommen hat. Verspricht, aber keine `DNT:1`-Daten zu teilen, bis eine Einwilligung festgestellt wurde. Des weiteren, verspricht er alle `DNT:1`-Daten in den folgenen 24 Stunden zu löschen oder zu de-identifizieren.
- D
  - : DNT wird ignoriert. Der Ursprungsserver ist nicht fähig, eine Tracking-Präferenz des User-Agents zu respektieren, oder will einfach nicht.
- U
  - : Aktuallisiert. Die Anfrage hat in eine mögliche Änderung des Tracking-Statueses des Nutzers, User-Agents oder Geräts resultiert.

## Beispiele

Ein `Tk`-Header für eine Resource, die von sich selbst sagt, nicht zu tracken, würde so aussehen:

    Tk: N

Spezifikationen

| Specification                                                                    | Status                       | Comment                |
| -------------------------------------------------------------------------------- | ---------------------------- | ---------------------- |
| {{SpecName('Tracking','#Tk-header-defn', 'Tk header field')}} | {{Spec2("Tracking")}} | Erstmalige Definition. |

## Siehe auch

- {{HTTPHeader("DNT")}} header
- {{domxref("Navigator.doNotTrack")}}
