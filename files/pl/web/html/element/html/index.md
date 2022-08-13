---
title: '<html>: Dokument HTML / Element Nadrzędny'
slug: Web/HTML/Element/html
tags:
  - Element
  - HTML
  - HTML Element Nadrzędny
  - Reference
  - Web
translation_of: Web/HTML/Element/html
---
{{HTMLRef}}

**Element HTML `<html>`** reprezentuje główny (nadrzędny) element dokumentu HTML, więc jest on również określany jako _element nadrzędny_. Wszystkie pozostałe elementy muszą być potomkami tego elementu.

| [Kategorie treści](/pl/docs/Web/Guide/HTML/Content_categories) | Brak.                                                                                                                                                                                                             |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dozwolona zawartość                                            | Jeden element {{HTMLElement("head")}}, po którym następuje jeden element {{HTMLElement("body")}}.                                                                                               |
| Pominięcie znacznika                                           | Znacznik startowy może zostać pominięty, jeśli pierwszą rzeczą wewnątrz elementu `<html>` nie jest komentarz. Znacznik końcowy może zostać pominięty, jeżeli po elemencie `<html>` nie nastąpi od razu komentarz. |
| Dozwoleni rodzice                                              | Brak. To jest główny element dokumentu.                                                                                                                                                                           |
| Dozwolone role ARIA                                            | Brak                                                                                                                                                                                                              |
| Interfejs DOM                                                  | {{domxref("HTMLHtmlElement")}}                                                                                                                                                                          |

## Atrybuty

Ten element uwzględnia [atrybuty globalne](/pl/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("manifest")}} {{obsolete_inline}}
  - : Określa URI manifestu zasobów, wskazując zasoby, które powinny być buforowane lokalnie. Zobacz sekcję [Korzystanie z pamięci podręcznej aplikacji](/pl/docs/Web/HTML/Zasoby_offline_w_Firefoksie) w celu uzyskania szczegółowych informacji.
- {{htmlattrdef("version")}} {{obsolete_inline}}
  - : Określa wersję {{glossary("DTD", "Definicji Typu Dokumentu")}} HTML, która reguluje bieżący dokument. Ten atrybut nie jest potrzebny, ponieważ jest zbędny w stosunku do informacji o wersji w deklaracji typu dokumentu.
- {{htmlattrdef("xmlns")}}
  - : Określa Przestrzeń Nazw XML dokumentu. Domyślną wartością jest `"http://www.w3.org/1999/xhtml"`. Jest to wymagane w dokumentach przetwarzanych formatem XML oraz opcjonalnie w dokumentach text/html.

## Przykład

```html
<!DOCTYPE html>
<html lang="pl">
  <head>...</head>
  <body>...</body>
</html>
```

## Kwestie dostępności

Nadanie atrybutu {{htmlattrxref("lang")}} z [poprawnym znacznikiem języka identyfikacyjnego IETF](https://www.ietf.org/rfc/bcp/bcp47.txt) w elemencie `html` pomoże w określeniu właściwego języka przez technologię odczytu ekranowego. Znacznik identyfikujący język powinien opisywać język używany przez większość treści strony. Bez niego, czytniki ekranu zazwyczaj domyślnie ustawiają język systemu operacyjnego, co może powodować błędne wymowy.

Dołączenie poprawnej deklaracji `lang` w elemencie `html` zapewnia również, że ważne metadane zawarte w sekcji {{HTMLElement("head")}} strony, takie jak {{HTMLElement("title")}}, są również poprawnie ogłaszane.

- [MDN Zrozumienie WCAG, Wytyczna 3.1 wyjaśnienia](/pl/docs/Web/Accessibility/Understanding_WCAG/Understandable#Guideline_3.1_—_Readable_Make_text_content_readable_and_understandable)
- [Understanding Success Criterion 3.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/meaning-doc-lang-id.html)

## Specyfikacje

| Specyfikacja                                                                                             | Status                           | Komentarz                                                                            |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', 'semantics.html#the-html-element', '&lt;html&gt;')}} | {{Spec2('HTML WHATWG')}} |                                                                                      |
| {{SpecName('HTML5 W3C', 'semantics.html#the-html-element', '&lt;html&gt;')}}     | {{Spec2('HTML5 W3C')}}     | Dodano obsługę atrybutu `manifest` (wycofano później).Przestarzały atrybut `version` |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.3', '&lt;html&gt;')}}             | {{Spec2('HTML4.01')}}     | Nieaktualny atrybut `version`                                                        |

## Kompatybilność z przeglądarką

{{Compat("html.elements.html")}}

## Zobacz także

- Element najwyższego poziomu MathML: {{MathMLElement("math")}}
- Element najwyższego poziomu SVG: {{SVGElement("svg")}}
