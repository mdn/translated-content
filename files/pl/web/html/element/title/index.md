---
title: '<title>: Element Tytułu Dokumentu'
slug: Web/HTML/Element/title
tags:
  - Element
  - HTML
  - HTML metadane dokumentu
  - HTML:Metadane zawartość
  - Nazwa Okna
  - Nazwa Strony
  - Nazwa Zakładki
  - Reference
  - Tytuł
  - Tytuł Okna
  - Tytuł Strony
  - Tytuł Zakładki
  - Web
translation_of: Web/HTML/Element/title
---
{{HTMLRef}}

**Element tytułu HTML** (**`<title>`**) określa tytuł dokumentu, który jest wyświetlany na pasku tytułu przeglądarki lub w zakładce strony. Zawiera on tylko tekst, a znaczniki wewnątrz elementu są ignorowane.

| [Kategorie treści](/pl/docs/Web/Guide/HTML/Content_categories) | [Zawartość metadanych](/pl/docs/Web/Guide/HTML/Content_categories#Metadata_content).                                                                                      |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dozwolona zawartość                                            | Tekst, który nie jest przestrzenią białych znaków.                                                                                                                        |
| Pominięcie znacznika                                           | Wymagane są zarówno znaczniki otwarcia jak i zamknięcia. Należy pamiętać, że pozostawienie `</title>` powinno spowodować, że przeglądarka będzie ignorować resztę strony. |
| Dozwoleni rodzice                                              | Element {{ HTMLElement("head") }}, który nie zawiera żadnego innego elementu {{ HTMLElement("title") }}.                                                 |
| Dozwolone role ARIA                                            | Brak.                                                                                                                                                                     |
| Interfejs DOM                                                  | {{domxref("HTMLTitleElement")}}                                                                                                                                  |

## Atrybuty

Ten element uwzględnia tylko [atrybuty globalne](/pl/docs/Web/HTML/Global_attributes).

## Uwagi dotyczące zastosowania

Element `<title>` jest zawsze używay w bloku {{HTMLElement("head")}} strony.

## Przykład

```html
<title>Wspaniały tytuł strony</title>
```

## Kwestie dostępności

Ważne jest, aby podać wartość `tytułu`, która opisuje przeznaczenie strony.

Powszechną techniką nawigacji dla użytkowników technologii wspomagającej jest czytanie tytułu strony i wnioskowanie, jaką treść ona zawiera. Dzieje się tak, ponieważ nawigacja po stronie w celu określenia jej zawartości może być czasochłonnym i potencjalnie mylącym procesem.

#### Przykład

    <title>Menu - Kuchnia Chińska Blue House - FoodYum: Już dziś online!</title>

Aby pomóc użytkownikowi, zaktualizuj wartość `tytułu` strony tak, aby odzwierciedlała istotne zmiany stanu strony (np. problemy z walidacją formularza).

#### Przykład

    <title>2 błędy - Twoje zamówienie - Kuchnia Chińska Blue House - FoodYum: Już dziś online!</title>

- [MDN Zrozumienie WCAG, Wytyczna 2.4 wyjaśnienie](/pl/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_%E2%80%94_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.2  | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html)

## Specyfikacje

| Specyfikacja                                                                                                         | Status                           | Komentarz |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-title-element', '&lt;title&gt;')}}         | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'document-metadata.html#the-title-element', '&lt;title&gt;')}} | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.4.2', '&lt;title&gt;')}}                     | {{Spec2('HTML4.01')}}     |           |

## Kompatybilność z przeglądarką

{{Compat("html.elements.title")}}
