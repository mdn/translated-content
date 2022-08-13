---
title: 511 Network Authentication Required
slug: Web/HTTP/Status/511
tags:
  - Fehlermeldung
  - HTTP
  - HTTP-Statuscode
  - Serverfehler
  - Statuscode
translation_of: Web/HTTP/Status/511
---
{{HTTPSidebar}}

Der HTTP-Statuscode **`511 Network Authentication Required`** zeigt an, dass sich der Client authentifizieren muss, um Zugang zu einem Netz zu erhalten.

Dieser Statuscode wird nicht vom angefragten Server ausgegeben, sondern von einem dazwischengeschalteten Proxy, das den Zugang zum Netz kontrolliert.

Netzbetreiber verlangen manchmal eine Authentifizierung, die Zustimmung zu Nutzungsbedingungen oder andere Aktionen des Benutzers, bevor sie Zugang gewähren (z.B. in einem Internet-Café oder an einem Flughafen). Clients, bei denen es daran noch fehlt, werden oft über ihre Media-Access-Control-Adressen ({{Glossary("MAC")}}) identifiziert.

## Status

    511 Network Authentication Required

## Spezifikationen

| Spezifikation                                                                    | Titel                        |
| -------------------------------------------------------------------------------- | ---------------------------- |
| {{RFC("6585", "511 Network Authentication Required" , "6")}} | Additional HTTP Status Codes |

## Siehe auch

- {{Glossary("Proxy server")}}
