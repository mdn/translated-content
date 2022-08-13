---
title: '<abbr>: Element Skrótu'
slug: Web/HTML/Element/abbr
tags:
  - Akronim
  - Definicje
  - Element
  - HTML
  - HTML semantyka na poziomie tekstu
  - Reference
  - Web
  - semantyka
  - skrót
translation_of: Web/HTML/Element/abbr
---
{{HTMLRef}}

**Element skrótu HTML** (**`<abbr>`**) reprezentuje skrót lub akronim; opcjonalny atrybut {{htmlattrxref("title")}} może stanowić rozwinięcie lub opis skrótu. Jeśli występuje, `title` musi zawierać pełny opis i nic więcej.

Artykuł *[Jak oznaczać skróty i uczynić je zrozumiałymi](/pl/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)* jest przewodnikiem do nauki używania `<abbr>` i elementów pokrewnych.

| [Kategorie treści](/pl/docs/Web/Guide/HTML/Content_categories) | [Treść płynna](/pl/docs/Web/Guide/HTML/Content_categories#Flow_content), [Treść frazowania](/pl/docs/Web/Guide/HTML/Content_categories#Phrasing_content), zawartość zdzieralna. |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dozwolona zawartość                                            | [Treść frazowania](/pl/docs/Web/Guide/HTML/Content_categories#Phrasing_content)                                                                                                 |
| Pominięcie znacznika                                           | Brak, zarówno znacznik początkowy jak i końcowy są obowiązkowe.                                                                                                                 |
| Dozwoleni rodzice                                              | Każdy element, który akceptuje [zawartość frazowania](/pl/docs/Web/Guide/HTML/Content_categories#Phrasing_content)                                                              |
| Dozwolone role ARIA                                            | Każdy                                                                                                                                                                           |
| Interfejs DOM                                                  | {{domxref("HTMLElement")}}                                                                                                                                            |

## Atrybuty

Ten element obsługuje tylko [atrybuty globalne](/pl/docs/Web/HTML/Global_attributes). Atrybut {{htmlattrxref("title")}} ma specyficzne znaczenie semantyczne, gdy jest używany z elementem `<abbr>`; *musi* zawierać pełny opis czytelny dla człowieka lub rozwinięcie skrótu. Tekst ten jest często prezentowany przez przeglądarki jako etykieta pomocnicza, gdy kursor myszy jest zawieszony nad elementem.

Każdy element `<abbr>`, którego używasz jest niezależny od wszystkich innych; podanie `title` dla jednego elementu nie załącza automatycznie tego samego rozszerzenia tekstu do innych o tej samej treści.

## Uwagi dotyczące użycia

### Typowe zastosowania

Z pewnością nie jest wymagane, aby wszystkie skróty były oznaczane przy użyciu `<abbr>`. Jest jednak kilka przypadków, w których jest to pomocne:

- Jeśli używany jest skrót i chcesz zapewnić rozszerzenie lub definicję poza obiegiem treści dokumentu, użyj `<abbr>` z odpowiednim atrybutem {{htmlattrxref("title")}}.
- Aby zdefiniować skrót, który może być nieznany czytelnikowi, należy przedstawić termin używając `<abbr>` oraz atrybutu `title` lub tekstu liniowego podającego definicję.
- W przypadku, gdy należy zwrócić uwagę semantycznie na obecność skrótu w tekście, przydatny jest element `<abbr>`. To z kolei może być użyte do celów stylizacyjnych lub skryptowych.
- Możesz użyć `<abbr>` w porozumieniu z {{HTMLElement("dfn")}} aby ustalić definicje terminów, które są skrótami lub akronimami. Zobacz przykład [Definiowanie skrótu](#definiowanie_skrótu) poniżej.

### Uwagi gramatyczne

W języka z {{interwiki("wikipedia", "grammatical number")}} (czyli w tych językach, w których liczba elementów wpływa na gramatykę zdania), użyj tej samej liczby gramatycznej w atrybucie `title`, co wewnątrz elementu `<abbr>`. Jest to szczególnie ważne w językach z więcej niż dwoma liczbami, takich jak Arabski, ale jest również istotne w języku angielskim.

## Domyślna stylizacja

Celem tego znacznika jest jedynie wygoda dla autora i wszystkie przeglądarki domyślnie wyświetlają go w linii ({{cssxref('display')}}`: inline`), choć jego stylizacja różni się w zależności od przeglądarki:

- Niektóre przeglądarki, takie jak Internet Explorer, nie stylizują go inaczej niż elementu {{HTMLElement("span")}}.
- Opera, Firefox i inne dodają kropkowane podkreślenie zawartości elementu.
- Kilka przeglądarek nie tylko dodaje kropkowane podkreślenie, ale także dodaje do nich wariant "small-caps"; aby uniknąć tej stylizacji, dodanie czegoś w rodzaju {{cssxref('font-variant')}}`: none` w CSS załatwia tę sprawę.

## Przykłady

### Oznaczanie skrótu semantycznie

Aby oznaczyć skrót bez podania rozwinięcia lub opisu, po prostu użyj `<abbr>` bez żadnych atrybutów, jak widać w tym przykładzie.

#### HTML

```html
<p>Używanie <abbr>HTML</abbr> jest fajne i proste!</p>
```

#### Rezultat

Używanie HTML jest fajne i proste!

### Stylistyka skrótów

Możesz użyć CSS, aby ustawić własny styl skrótów, jak pokazano w tym prostym przykładzie.

#### HTML

```html
<p>Używając <abbr>CSS</abbr>, możesz stylizować swoje skróty!</p>
```

#### CSS

```css
abbr {
  font-variant: all-small-caps;
}
```

#### Rezultat

Używając CSS, możesz stylizować swoje skróty!

### Dostarczanie rozszerzenia

Dodanie atrybutu {{htmlattrxref("title")}} pozwala na rozwinięcie lub zdefiniowanie skrótu lub akronimu.

#### HTML

```html
<p>Funkcję rejestru nazw internetowych w domenie .pl pełni <abbr title="Naukowa i Akademicka Śieć Komputerowa">NASK</abbr>.</p>
```

#### Rezultat

Funkcję rejestru nazw internetowych w domenie .pl pełni NASK.

### Definiowanie skrótu

Możesz użyć `<abbr>` w połączeniu z {{HTMLElement("dfn")}}, aby bardziej formalnie zdefiniować skrót, jak pokazano tutaj.

#### HTML

```html
<p><dfn id="html"><abbr title="HyperText Markup Language">HTML</abbr>
</dfn> jest językiem znaczników używanym do tworzenia semantyki i struktury strony internetowej.</p>

<p><dfn id="spec">Specyfikacja</dfn>
(<abbr title="Specyfikacja">spec</abbr>) jest dokumentem, który przedstawia w szczegółach, jak technologia lub API ma funkcjonować i jak wygląda dostęp do nich.</p>
```

#### Rezultat

\_HTML \_jest językiem znaczników używanym do tworzenia semantyki i struktury strony internetowej.

_Specyfikacja_ (spec) jest dokumentem, który przedstawia w szczegółach, jak technologia lub API ma funkcjonować i jak wygląda dostęp do nich.

Zobacz bardziej szczegółowe przykłady w artykule *[Jak oznaczyć skróty i uczynić je zrozumiałymi](/pl/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#Abbreviations)*.

## Kwiestie dostępności

Wypisanie akronimu lub skrótu w całości za pierwszym razem, gdy jest on używany na stronie, jest korzystne, aby pomóc ludziom go zrozumieć, zwłaszcza jeśli treść jest żargonem technicznym lub branżowym.

#### Przykład

```html
<p>JavaScript Object Notation (<abbr>JSON</abbr>) jest lekkim formatem wymiany danych.</p>
```

Jest to szczególnie pomocne dla osób, które nie znają terminologii lub pojęć omawianych w treści, dla osób, które są nowe w języku oraz dla osób z problemami poznawczymi.

## Specyfikacje

| Specyfikacja                                                                                                         | Status                           | Komentarz |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-abbr-element', '&lt;abbr&gt;')}}             | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-abbr-element', '&lt;abbr&gt;')}} | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'struct/text.html#edef-ABBR', '&lt;abbr&gt;')}}                         | {{Spec2('HTML4.01')}}     |           |

## Kompatybilność z przeglądarką

{{Compat("html.elements.abbr")}}

## Zobacz także

- [Używanie elementu `<abbr>`](/pl/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
- Inne elementy zawierające [semantykę na poziomie tekstu](/pl/docs/Web/HTML/Text_level_semantics_conveying_elements): {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("b")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
- Przestarzały element {{HTMLElement("acronym")}}, którego obowiązki zostały przeniesione na `<abbr>`
