---
title: Typumwandlung
slug: Glossary/Type_Conversion
tags:
  - CodingScripting
  - Glossary
  - Typ-Casting
  - Typ-Konvertierung
  - Typumwandlung
translation_of: Glossary/Type_Conversion
---
Typumwandlung (oder Typ-Konvertierung) meint den Transfer von Daten aus Datentyp in einen anderen. _Implizite Umwandlung_ geschieht, wenn der Kompiler automatisch Datentypen zuweist. Der Quellcode kann aber auch _explizit_ die Umwandlung von Typen festlegen.

#### Beispiel

Gegeben sein die folgende Anweisungen:

    var a = 5 + 2.0;
    var b = Number("0x11");

(a) Die Gleitkommazahl (`float`) 2.0 wird hier implizit ein eine Ganzzahl (`integer`) umgewandelt.

(b) Der String `0x11` wird explizit in die Ganzzahl `17` umgewandelt.

1. [Glossar](/de/docs/Glossary)

    1. [Typ](/de/docs/Glossary/Typ)
    2. {{Glossary("Type coercion")}}

2. Wikipedia Artikel

    1. {{Interwiki("wikipedia", "Typumwandlung")}}
