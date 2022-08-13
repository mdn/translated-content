---
title: element.lang
slug: Web/API/HTMLElement/lang
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/HTMLElement/lang
original_slug: Web/API/Element/lang
---
{{ ApiRef() }}

### Podsumowanie

Własność ta pozwala pobrać lub ustawić język bazowy wartości atrybutów i treści elementu.

### Składnia i wartości

    var languageUsed = elementNodeReference.lang;
    elementNodeReference.lang = NewLanguage;

- _languageUsed_ to zmienna (ciąg znaków) do której przypisany zostanie aktualny język elementu.
- _NewLanguage_ to zmienna której wartość będzie użyta jako nowy język elementu.

### Przykład

    // poniższy fragment kodu porównuje język bazowy i odsyła
    // do innych URL na podstawie odczytanego kodu języka
    if (document.documentElement.lang == "en")
       {
        window.location.href = "Some_document.html.en";
       }
    else if(document.documentElement.lang == "ru")
       {
        window.location.href = "Some_document.html.ru";
       };

### Uwagi

Kod języka zwracany przez w/w właściwość zgodny jest z kodami zdefiniowanymi w dokumencie [RFC 1766](http://tools.ietf.org/html/rfc1766). Przykładowo: "en" dla języka angielskiego, "ja" dla japońskiego, "es" dla hiszpańskiego itd. Domyślna wartość atrybutu to `unknown`. Wartość tego atrybutu ustawiana jest zwykle dla podstawowego (najwyższego) elementu dokumentu.

### Specyfikacja

[W3C DOM Level 2 HTML: lang](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-59132807)



{{ languages( { "en": "en/DOM/element.lang", "fr": "fr/DOM/element.lang", "ja": "ja/DOM/element.lang" } ) }}
