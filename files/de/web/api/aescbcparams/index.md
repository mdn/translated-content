---
title: AesCbcParams
slug: Web/API/AesCbcParams
translation_of: Web/API/AesCbcParams
---
{{ APIRef("Web Crypto API") }}

Das **`AesCbcParams`** Verzeichnis (dictionary) der [Web Crypto API ](/de/docs/Web/API/Web_Crypto_API)wird als `algorithm` Parameter an die Funktionen {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}} und {{domxref("SubtleCrypto.unwrapKey()")}} übergeben, wenn der Algorithmus [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#AES-CBC) verwendet wird.

## Eigenschaften

- `name`
  - : A {{domxref("DOMString")}}. Der Wert sollte auf `AES-CBC` gesetzt werden.
- `iv`
  - : Ein {{domxref("BufferSource")}}. Der Initialisierungsvektor. Er muss 16 Bytes lang sein und sollte unvorhersehbar und am besten kryptografisch zufällig sein. Er muss aber nicht geheim sein, er kann unverschlüsselt mit dem Kryptogram übertragen werden.

## Beispiele

Siehe Beispiele für {{domxref("SubtleCrypto.encrypt()")}} und {{domxref("SubtleCrypto.decrypt()")}}.

## Spezifikationen

| Spezifikation                                                                                                | Status                                   | Kommentar |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | --------- |
| {{ SpecName('Web Crypto API', '#dfn-AesCbcParams', 'SubtleCrypto.AesCbcParams') }} | {{ Spec2('Web Crypto API') }} |           |

## Browser Kompatibilität

Browser mit Unterstützung für den "AES-CBC" Algorithmus werden die Methoden {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}} und {{domxref("SubtleCrypto.unwrapKey()")}} für diesen Typ unterstützen.

## Siehe auch

- CBC Modus wird in Sektion 6.2 des [NIST SP800-38A standard](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D) spezifiziert.
- {{domxref("SubtleCrypto.encrypt()")}}.
- {{domxref("SubtleCrypto.decrypt()")}}.
- {{domxref("SubtleCrypto.wrapKey()")}}.
- {{domxref("SubtleCrypto.unwrapKey()")}}.
