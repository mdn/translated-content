---
title: element.dir
slug: Web/API/HTMLElement/dir
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/HTMLElement/dir
original_slug: Web/API/Element/dir
---
{{ApiRef}}

## Podsumowanie

Atrybut **dir** ustawia lub pobiera kierunek pisania tekstu dla zawartości bieżącego elementu.

## Składnia i wartości

    var bieżącyKierunekPisania = elementNodeReference.dir;
    elementNodeReference.dir = nowyKierunekPisania;

_bieżącyKierunekPisania_ jest łańcuchem reprezentującym kierunek pisania tekstu bieżącego elementu. _nowyKierunekPisania_ to zmienna łańcuchowa, której wartość reprezentuje kierunek pisania tekstu.

Możliwe wartości **dir** to `ltr` dla "od lewej do prawej" i `rtl` dla "od prawej do lewej".

## Przykład

```js
var parg = document.getElementById("para1");

parg.dir = "rtl";
// zmienia kierunek tekstu w paragrafie "para1"
```

## Uwagi

Kierunek pisania tekstu elementu oznacza kierunek, w którym idzie tekst (do obsługi różnych języków). Języki arabski i hebrajski to typowe przykłady użycia kierunku _rtl_.

Obrazek może mieć atrybut _dir_ ustawiony na _rtl_. W takim wypadku atrybuty _title_ i _alt_ będą sformatowane i wyświetlona jako _rtl_.

Jeśli tabela ma kierunek _rtl_, kolumny porządkowane są od prawej do lewej.

## Specyfikacja

- [W3C DOM Level 2 HTML: dir](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-52460740)
