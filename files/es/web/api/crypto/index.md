---
title: Crypto
slug: Web/API/Crypto
---

{{APIRef("Web Crypto API")}}

La interfaz **`Crypto`** representa las características básicas de criptografía disponibles en el contexto actual. Permite acceder a un generador de números aleatorios criptográficamente fuerte y a primitivos criptográficos.

Un objeto con esta interfaz está disponible en el contexto de la Web a través de la propiedad {{domxref("Window.crypto")}}.

## Propiedades

_Esta interfaz implementa las propiedades definidas en {{domxref("RandomSource")}}._

- {{domxref("Crypto.subtle")}} {{readOnlyInline}}
  - : Retorna un {{domxref("SubtleCrypto")}} objeto proporcionando acceso a primitivos criptográficos comunes, como el hashing, el firmado, cifrado o descifrado.

## Métodos

_Esta interfaz implementa las propiedades definidas en {{domxref("RandomSource")}}._

- {{domxref("Crypto.getRandomValues()")}}
  - : Llena el pasado {{ jsxref("TypedArray") }} valores aleatorio sólidos criptográficamente.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Components.utils.importGlobalProperties](/es/docs/Components.utils.importGlobalProperties)
