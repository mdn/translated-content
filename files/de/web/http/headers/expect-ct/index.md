---
title: Expect-CT
slug: Web/HTTP/Headers/Expect-CT
tags:
  - HTTP
  - Reference
  - Referenz
  - Security
  - Sicherheit
  - Verschlüsselung
  - header
translation_of: Web/HTTP/Headers/Expect-CT
---
{{HTTPSidebar}}

Der `Expect-CT` HTTP Header erlaubt es Webseiten, die Anforderungen der [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) (kurz: CT) zu aktivieren und/oder zu erzwingen, um so der (unbemerkten) Verwendung falsch ausgestellter Zertifikate vorzubeugen.

CT-Anforderungen können erfüllt werden über einen der nachstehenden Mechanismen:

- X.509v3 certificate extension: signierte SCTs (SCT=_signed certificate timestamp)_ werden direkt in das Zertifikat einbettet
- Eine TLS-Erweiterung des Typs `signed_certificate_timestamp` wird während des handshakes gesendet
- OCSP stapling (über die `status_request` TLS-Erweiterung) und das Bereitstellen einer `SignedCertificateTimestampList` mit einem oder mehreren SCTs

> **Note:** Wenn eine Webseite die Verwendung des `Expect-CT` Headers aktiviert, fordert sie den Browser darüber auf, jedes im Zusammenhang mit der Webseite verwendete Zertifikat in **[öffentlichen CT Protokollen](https://www.certificate-transparency.org/known-logs) **nachzuschlagen.

> **Note:** Browsers **ignorieren** den `Expect-CT` Header bei HTTP-Verbindungen; der Header hat nur bei HTTPS-Verbindungen einen Effekt.

> **Note:** `Expect-CT` wird im Juni 2021 voraussichtlich obsolet werden. Seit Mai 2018 ist es erforderlich, dass neue ausgestellte Zertifikate standardmäßig SCTs unterstützen. Ältere Zertifikate, vor März 2018 ausgestellt, können eine Gültigkeitsdauer von 39 Monaten haben, wodurch sie alle im Juni 2021 ablaufen.

| Header type                                      | {{Glossary("Response header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | yes                                      |

## Syntax

    Expect-CT: report-uri="<uri>",
               enforce,
               max-age=<age>

## Direktiven

- `max-age`
  - : Die Anzahl der Sekunden nach dem Empfang des `Expect-CT`-Header-Feldes, während der der User-Agent den Host der empfangenen Nachricht als bekannten `Expect-CT` Host betrachten sollte.Falls ein Cache einen Wert enthält der größer ist, als dieser abbilden kann oder seine nachfolgenden Berechnungen überlaufen, dann verwendet der Cache automatisch den für ihn größtmöglichen positiven Ganzzahlwert (integer) bzw. 2,147,483,648 (231).
- `report-uri="<uri>"` {{optional_inline}}
  - : Die URI wohin der Browser `Expect-CT` Fehler melden soll.In Kombination mit der `enforce` Direktive wird die Konfiguration als sogenannte "enforce-and-report" (erzwinge und melde) gewertet, wodurch dem user agent signalisiert wird, dass sowohl die Einhaltung der Certificate Transparency Richtlinien erzwungen als auch jede Verletzung berichtet werden soll.
- `enforce` {{optional_inline}}
  - : Verlangt vom user agent, dass die Einhaltung der Certificate Transparency Richtlinien erzwungen werden soll (anstatt diese nur zu berichten). Gleichzeitig verweigert der user agent zukünftige Verbindungen, die gegen die Certificate Transparency Richtlinien verstoßen.In Kombination mit den Direktiven `enforce` und `report-uri` wird die Konfiguration als sogenannte "enforce-and-report" (erzwinge und melde) gewertet, wodurch dem user agent signalisiert wird, dass sowohl die Einhaltung der Certificate Transparency Richtlinien erzwungen als auch jede Verletzung berichtet werden soll.

## Beispiel

Dieses Beispiel legt fest, dass die Certificate Transparency für den Zeitraum von 24 Stunden erzwungen werden soll und jede Verletzung in dem Zusammenhang wird gemeldet an die angegebene URL unter `foo.example`.

    Expect-CT: max-age=86400, enforce, report-uri="https://foo.example/report"

## Hinweise

Root CAs, die manuell als vertrauenswürdig festgelegt werden, übersteuern und verhindern `Expect-CT` Berichte/Durchsetzung.

Browser merken sich eine `Expect-CT` Richtlinie nicht, außer eine Webseite hat bewiesen, dass sie Zertifikate bereitstellt, die den Certificate Transparency Anforderungen genügen. Browser implementieren ihre eigenen Modelle darüber, welche CT-Protokolle diese für die Bewertung der Vertrauenswürdigkeit heranziehen.

Google Chrome beispielsweise erzwingt eine `Expect-CT` Richtlinie nur für einen Zeitraum von 10 Wochen nach dem Build Datum.

## Spezifikationen

| Specification                                                                 | Title                          |
| ----------------------------------------------------------------------------- | ------------------------------ |
| [Internet Draft](https://tools.ietf.org/html/draft-ietf-httpbis-expect-ct-08) | Expect-CT Erweiterung für HTTP |

## Browser Unterstützung

{{Compat("http.headers.Expect-CT")}}
