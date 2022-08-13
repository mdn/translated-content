---
title: Obiekty
slug: Web/JavaScript/Reference/Global_Objects
tags:
  - Dokumentacja
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects
original_slug: Web/JavaScript/Referencje/Obiekty
---
{{jsSidebar("Objects")}}

W tym rozdziale opisano wszystkie standardowe obiekty wbudowane JavaScript, w tym ich metody i właściwości.

Pojęcie "obiekty globalne" (lub standardowe obiekty wbudowane) tutaj nie są tym samym, co **obiekt globalny**, który  odnosi się do **obiektów o zasięgu globalnym**. Dostęp do **obiektu globalnego** można uzyskać za pomocą operatoa {{jsxref("Operatory/this", "this")}} w zakresie globalnym (ale tylko, jeśli nie jest właczony tryb ścisły ECMAScript 5. W trybie ścisłym, w takim przypadku zostanie zwrócona wartość  {{jsxref("undefined")}}). W rzeczywistości, zakres globalny **składa się** z własciwości obiektu globalnego, w tym właściwości dziedziczonych, jeśli istnieją.

Innymi obiektami o zasięgu globalnym są [obiekty tworzone w skryptach przez użytkowników](/pl/docs/Web/JavaScript/Guide/Working_with_Objects#Creating_new_objects) albo dostarczane przez aplikacje hosta. Obiekty hosta dostępne w kontekście przeglądarki są opisane w  [informatorze API](/pl/docs/Web/API/Reference). Więcej informacji o różnicach dzielących [DOM](/pl/docs/DOM/DOM_Reference) i rdzeń [JavaScript](/pl/docs/Web/JavaScript), znajdziesz we [Przeglądzie technologii JavaScript](/pl/docs/Web/JavaScript/JavaScript_technologies_overview).

## Obiekty standardowe wg kategorii

### Wartości

Właściwości globalne zwracają proste wartości, które nie mają swoich własciwości ani metod

- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}
- literał {{jsxref("null")}}

### Funkcje

Należą tu funkcje globalne (wywoływane globalnie a nie w jakimś obiekcie), które  zwracają swoją wartość bezpośredni do wywołania.

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Global_Objects/uneval", "uneval()")}} {{non-standard_inline}}
- {{jsxref("Global_Objects/isFinite", "isFinite()")}}
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
- {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
- {{jsxref("Global_Objects/escape", "escape()")}} {{deprecated_inline}}
- {{jsxref("Global_Objects/unescape", "unescape()")}} {{deprecated_inline}}

### Obiekty podstawowe

Są to  fundamentalne, podstawowe obiekty, stanowiące podstawę do tworzenia innych obiektów. Obejmuje to obiekty reprezentujace obiekty ogólne, funkcje i błędy.

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}
- {{jsxref("Error")}}
- {{jsxref("EvalError")}}
- {{jsxref("InternalError")}}
- {{jsxref("RangeError")}}
- {{jsxref("ReferenceError")}}
- {{jsxref("SyntaxError")}}
- {{jsxref("TypeError")}}
- {{jsxref("URIError")}}

### Liczby i daty

Są to obiekty podstawowe reprezentujace liczby, daty i obliczenia matematyczne.

- {{jsxref("Number")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}

### Przetwarzanie tekstu

Kategorie te tworzą obiekty reprezentujące łańcuchy i obsługujace manipulowanie łańcuchami.

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Indeksowane kolekcje

Obiekty te reprezentują kolekcje danych, ktore są uporządkowane według wartości indeksu. Opejmuje to tablice, typowane tablice i konstrukcje podobne do tablic.

- {{jsxref("Array")}}
- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}

### Kolekcje z kluczami

Są to obiekty reprezentujące kolekcje stosujace klucze. Zawierają elementy, które są iterowalne w kolejności estawiania.

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### Kolekcje wektorowe

Typy danych wektorowych {{Glossary("SIMD")}} są obiektami, w których dane formowane są w potoki.

- {{jsxref("SIMD")}} {{experimental_inline}}
- {{jsxref("Float32x4", "SIMD.Float32x4")}} {{experimental_inline}}
- {{jsxref("Float64x2", "SIMD.Float64x2")}} {{experimental_inline}}
- {{jsxref("Int8x16", "SIMD.Int8x16")}} {{experimental_inline}}
- {{jsxref("Int16x8", "SIMD.Int16x8")}} {{experimental_inline}}
- {{jsxref("Int32x4", "SIMD.Int32x4")}} {{experimental_inline}}
- {{jsxref("Uint8x16", "SIMD.Uint8x16")}} {{experimental_inline}}
- {{jsxref("Uint16x8", "SIMD.Uint16x8")}} {{experimental_inline}}
- {{jsxref("Uint32x4", "SIMD.Uint32x4")}} {{experimental_inline}}
- {{jsxref("Bool8x16", "SIMD.Bool8x16")}} {{experimental_inline}}
- {{jsxref("Bool16x8", "SIMD.Bool16x8")}} {{experimental_inline}}
- {{jsxref("Bool32x4", "SIMD.Bool32x4")}} {{experimental_inline}}
- {{jsxref("Bool64x2", "SIMD.Bool64x2")}} {{experimental_inline}}

### Dane strukturalne

Obiekty tej kategorii reprezentują i współdziałają ze strukturyzowanymi buforami danych i danymi kodowymi uzywającymi notacji JSON (JavaScript Object Notation).

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}} {{experimental_inline}}
- {{jsxref("Atomics")}} {{experimental_inline}}
- {{jsxref("DataView")}}
- {{jsxref("JSON")}}

### Kontrola obiektów abstrakcyjnych

- {{jsxref("Promise")}}
- {{jsxref("Generator")}}
- {{jsxref("GeneratorFunction")}}
- {{experimental_inline}} {{jsxref("AsyncFunction")}}

### Refleksy

- {{jsxref("Reflect")}}
- {{jsxref("Proxy")}}

### Internacjonalizacja

Dodatki do jadra ECMAScript dla funkcji językowych.

- {{jsxref("Intl")}}
- {{jsxref("Global_Objects/Collator", "Intl.Collator")}}
- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Global_Objects/NumberFormat", "Intl.NumberFormat")}}

### WebAssembly

- {{jsxref("WebAssembly")}}
- {{jsxref("WebAssembly.Module")}}
- {{jsxref("WebAssembly.Instance")}}
- {{jsxref("WebAssembly.Memory")}}
- {{jsxref("WebAssembly.Table")}}
- {{jsxref("WebAssembly.CompileError")}}
- {{jsxref("WebAssembly.LinkError")}}
- {{jsxref("WebAssembly.RuntimeError")}}

### Pozostałe

- [`arguments`](/pl/docs/Web/JavaScript/Reference/Functions/arguments)
