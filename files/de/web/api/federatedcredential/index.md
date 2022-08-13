---
title: FederatedCredential
slug: Web/API/FederatedCredential
tags:
  - API
  - Föderierte Zugangsdaten
  - Schnittstelle
  - Zugangsdaten
translation_of: Web/API/FederatedCredential
---
{{SeeCompatTable}}{{APIRef("Credential Management API")}}

Die **`FederatedCredential`** Schnittstelle der [Credential Management API](/de/docs/Web/API/Credential_Management_API) stellt Informationen über Zugangsdaten eines Anbieters föderierter Identitäten bereit. Ein Anbieter föderierter Identitäten ist ein Gebilde, dem eine Webseite vertraut, eine Nutzerin korrekt zu identifizieren und eine API für diesen Zweck bereit stellt. [OpenID Connect](http://openid.net/developers/specs/) ist ein Beispiel für ein Framework für Anbieter föderierter Identitäten.

In Brwosern, die dies unterstützen, kann eine Instanz dieser Schnittstelle in der `credential` Funktions des `init` Objekt für globales {{domxref('fetch')}} mitgegeben werden.

- {{domxref("FederatedCredential.FederatedCredential()","FederatedCredential()")}}
  - : Erstellt ein neues `FederatedCredential` Objekt.

## Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren, {{domxref("Credential")}}._

- {{domxref("FederatedCredential.provider")}} {{readonlyInline}}
  - : Gibt einen {{domxref("USVString")}} zurück, der den Anbieter föderierter Identitäten eines Satzes von Zugangsdaten enthält.

### Event-Handler

Keine.

## Methoden

Keine.

## Beispiele

```js
var cred = new FederatedCredential({
  id: id,
  name: name,
  provider: 'https://account.google.com',
  iconURL: iconUrl
});

// Store it
navigator.credentials.store(cred)
  .then(function() {
  // Mach etwas anderes.
});
```

## Spezifikationen

| Spezifikation                                    | Status                                       | Kommentar            |
| ------------------------------------------------ | -------------------------------------------- | -------------------- |
| {{SpecName('Credential Management')}} | {{Spec2('Credential Management')}} | Initiale Definition. |

## Browserkompabilität

{{Compat}}
