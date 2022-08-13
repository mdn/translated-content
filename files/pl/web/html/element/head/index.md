---
title: '<head>: Element metadanych dokumentu (Nagłówek)'
slug: Web/HTML/Element/head
tags:
  - Element
  - HTML
  - HTML metadane dokumentu
  - HTML:Metadane zawartość
  - Reference
  - Web
translation_of: Web/HTML/Element/head
---
{{HTMLRef}}

**Element** **HTML `<head>`** zawiera maszynowo odczytywane informacje ({{glossary("metadata", "metadane")}}) o dokumencie, takie jak [tytuł](/pl/docs/Web/HTML/Element/title), [skrypty](/pl/docs/Web/HTML/Element/script) i [arkusze stylów](/pl/docs/Web/HTML/Element/style).

> **Uwaga:** `<head>` posiada przede wszystkim informacje do przetwarzania maszynowego, a nie do odczytywania przez ludzi. Informacje widoczne dla człowieka, takie jak nagłówki najwyższego poziomu i wymienieni autorzy, znajdują się w elemencie {{HTMLElement("header")}}.

| [Kategorie treści](/pl/docs/Web/Guide/HTML/Content_categories) | Brak.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Dozwolona zawartość                                            | Jeśli dokument jest dokumentem {{htmlattrxref("srcdoc", "iframe")}} w {{HTMLElement("iframe")}}, lub jeśli informacja tytułowa jest dostępna z protokołu wyższego poziomu (np. temat w e-mailu HTML), zero lub więcej elementów zawartości metadanych. W przeciwnym wypadku, jeden lub więcej elementów zawartości metadanych, gdzie dokładnie jeden jest elementem {{HTMLElement("title")}}. |
| Pominięcie znacznika                                           | Znacznik startowy może zostać pominięty, jeśli pierwszą rzeczą wewnątrz elementu `<head>` jest element. Znacznik końcowy może zostać pominięty, jeśli pierwszą rzeczą następującą po elemencie `<head>` nie jest znak spacji lub komentarz.                                                                                                                                                                              |
| Dozwoleni rodzice                                              | Element {{HTMLElement("html")}}, jako jego pierwsze dziecko.                                                                                                                                                                                                                                                                                                                                                    |
| Dozwolone role ARIA                                            | Brak                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Interfejs DOM                                                  | {{domxref("HTMLHeadElement")}}                                                                                                                                                                                                                                                                                                                                                                                 |

## Atrybuty

Ten element uwzględnia [atrybuty globalne](/pl/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("profile")}} {{obsolete_inline}}
  - : URI jednego lub więcej profili metadanych, oddzielone białym znakiem.

## Przykład

```html
<!doctype html>
<html>
  <head>
    <title>Tytuł dokumentu</title>
  </head>
</html>
```

## Uwagi

Nowoczesne, zgodne z HTML5 przeglądarki automatycznie tworzą element `<head>`, jeśli tagi są pomijane w znaczniku. [Takie zachowanie nie może być zagwarantowane w starych przeglądarkach](https://www.stevesouders.com/blog/2010/05/12/autohead-my-first-browserscope-user-test/).

## Specyfikacje

| Specyfikacja                                                                                                     | Status                           | Komentarz                                 |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-head-element', '&lt;head&gt;')}}         | {{Spec2('HTML WHATWG')}} | Bez zmian w stosunku do najnowszej wersji |
| {{SpecName('HTML5 W3C', 'document-metadata.html#the-head-element', '&lt;head&gt;')}} | {{Spec2('HTML5 W3C')}}     | Przestarzały `profile`                    |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.4.1', '&lt;head&gt;')}}                     | {{Spec2('HTML4.01')}}     |                                           |

## Kompatybilność z przeglądarką

{{Compat("html.elements.head")}}

## Zobacz także

- Elementy, które mogą być używane wewnątrz `<head>`:

  - {{HTMLElement("title")}}
  - {{HTMLElement("base")}}
  - {{HTMLElement("link")}}
  - {{HTMLElement("style")}}
  - {{HTMLElement("meta")}}
  - {{HTMLElement("script")}}
  - {{HTMLElement("noscript")}}
  - {{HTMLElement("template")}}
