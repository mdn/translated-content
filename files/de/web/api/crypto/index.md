---
title: Crypto
slug: Web/API/Crypto
tags:
  - API
  - Interface
  - Referenz
  - Schnittstelle
  - Web Crypto API
translation_of: Web/API/Crypto
---
{{APIRef("Web Crypto API")}}

Die **`Crypto`**-Schnittstelle bietet grundlegende kryptographische Funktionen, die im aktuellen Kontext verfügbar sind. Sie ermöglicht den Zugriff auf kryptographische Primitive wie z.B. einen verschlüsselungstechnisch starken Zufallszahlengenerator.

Ein Objekt mit dieser Schnittstelle ist im Web-Kontext über die Eigenschaft {{domxref("Window.crypto")}} verfügbar.

## Eigenschaften

_Diese Schnittstelle implementiert Eigenschaften, die unter {{domxref("RandomSource")}} definiert sind._

- {{domxref("Crypto.subtle")}} {{readOnlyInline}}
  - : Gibt ein {{domxref("SubtleCrypto")}}-Objekt zurück, das Zugriff auf einfache kryptographische Methoden wie Hash-Funktionen, Signierung, Ver- und Entschlüsselung ermöglicht.

## Methoden

_Diese Schnittstelle implementiert Methoden, die unter {{domxref("RandomSource")}} beschrieben sind._

- {{domxref("Crypto.getRandomValues()")}}
  - : Füllt das übergebene {{ jsxref("TypedArray") }} mit kryptographisch sinnvollen Zufallswerten.

## Spezifikationen

| Spezifikation                                                                    | Status                               | Kommentar                |
| -------------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{SpecName("Web Crypto API", "#crypto-interface", "Crypto")}} | {{Spec2("Web Crypto API")}} | Ursprüngliche Definition |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Components.utils.importGlobalProperties](/de/docs/Components.utils.importGlobalProperties)
