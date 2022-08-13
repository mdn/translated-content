---
title: Skalare Daten
slug: Glossary/Primitive
tags:
  - Glossary
  - einfache Datentypen
  - primitive Datentypen
  - skalare Datentypen
translation_of: Glossary/Primitive
original_slug: Glossary/einfache_datenelemente
---
Ein **primitives** (skalares) Datenelement (einfacher Wert, einfacher Datentyp) ist ein Datenelement, das kein {{Glossary("object","Objekt")}} ist und keine {{glossary("method","Methoden")}} besitzt.

In {{Glossary("JavaScript")}} gibt es 6 skalare Datentypen:

- {{Glossary("string","String")}}
- {{Glossary("number","Number")}}
- {{Glossary("Boolean")}}
- {{Glossary("null")}}
- {{Glossary("undefined")}}
- {{Glossary("symbol","Symbol")}} (neu in {{Glossary("ECMAScript")}} 6)

Meistens repräsentiert ein skalares Datenelement die einfachste Datenstruktur einer Programmiersprache.

Alle skalaren Datentypen sind **unveränderbar** (sie können nicht noch weiter vereinfacht werden).

## Skalare Wrapper-Objekte in Javascript

Außer für die Skalare `null` und `undefined`, besitzen alle anderen Datentypen ein equivalentes, gleichnamiges Objekt, welches die einfachen Datentypen ummantelt/umgibt (neudeutsch: wrappt):

- {{jsxref("String")}} für den skalaren Datentyp string.
- {{jsxref("Number")}} für den skalaren Datentyp number.
- {{jsxref("Boolean")}} für den skalaren Datentyp Boolean.
- {{jsxref("Symbol")}} für den skalaren Datentyp Symbol.

DIe Wrapper-Methode [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) gibt als Rückgabewert den skalaren Datentypen des verwendeten Datenelements zurück..

## Lerne weiter

### Allgemeines

- [Einführung in die JavaScript Datentypen](/de/docs/Web/JavaScript/Data_structures)
- {{Interwiki("wikipedia", "Primitive data types")}} auf Wikipedia
