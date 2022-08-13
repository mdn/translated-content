---
title: font-family
slug: Web/CSS/font-family
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/font-family
---
{{CSSRef}}

## Podsumowanie

`font-family` dopuszcza uszeregowaną pod względem ważności listę nazw rodzin czcionek oraz/lub nazwy rodzajów czcionek do zdefiniowania dla wybranego elementu. W przeciwieństwie do większości innych własności CSS, wartości są oddzielone przecinkiem, by wskazywały, że są alternatywami.

{{cssinfo}}

## Składnia

    font-family: <family-or-generic-name> [, <family-or-generic-name>]* | inherit

### Wartości

- \<family-generic-name>
  - : jest jedną z wartości `<family-name>` lub `<generic-family>`
- family-name
  - : Nazwa rodziny czcionek. Na przykład: "Times" i "Helvetica" są rodzinami czcionek. Nazwy rodziny czcionek, zawierające białe znaki, powinny być ujęte w cudzysłowy.
- generic-family
  - : Zdefiniowane są następujące rodzaje czcionek: `serif`, `sans-serif`, `cursive`, `fantasy`, `monospace`. Nazwy rodzajów są słowami kluczowymi i nie muszą być brane w cudzysłowy.

## Przykłady

[Zobacz przykład](/samples/cssref/font-family.html)

    body { font-family: "Gill Sans Extrabold", Helvetica, sans-serif }

    .receipt { font-family: Courier, "Lucida Console", monospace }

## Uwagi

Powinieneś zawsze określić nazwę rodzaju jako ostatnią wartość we własności `font-family`.

Własność `font-family` wyszczególnia listę czcionek, od najwyższego priorytetu do najniższego. Wybór czcionki _nie_ kończy się po prostu, gdy pierwsza z wymienionych czcionek jest w systemie użytkownika. Wybór czcionki odbywa się raczej jako _jeden znak naraz_, zatem, jeśli dostępna czcionka nie ma glifu (matrycy), który może wyświetlić potrzebny znak, wypróbowywana jest kolejna dostępna czcionka.

Jeśli dla czcionki dostępne są tylko niektóre własności [styles](pl/CSS/font-style), [variants](pl/CSS/font-variant) lub [sizes](pl/CSS/font-size), mogą one również wpływać na to, które rodziny czcionek zostaną wybrane.

## Specyfikacje

- [CSS 1](http://www.w3.org/TR/CSS1#font-family)
- [CSS 2.1](http://www.w3.org/TR/CSS21/fonts.html#font-family-prop)
- [CSS 3](http://www.w3.org/TR/2002/WD-css3-fonts-20020802/#font-family-prop)
