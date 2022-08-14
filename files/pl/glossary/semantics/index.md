---
title: Semantyka
slug: Glossary/Semantics
translation_of: Glossary/Semantics
original_slug: Glossary/Semantyka
---
W programowaniu **Semantyka** oznacza _znaczenie_ kawałka kodu — na przykład: "Jaki efekt da ta linia kodu w JavaScripcie?" lub "Jaki cel lub rolę odgrywa ten element HTML?" (ale nie "Jak to wygląda?").

## Semantyka w języku JavaScript

Załóżmy, że chcemy stworzyć funkcję, która przyjmuje string jako parametr i zwraca element {{htmlelement("li")}} z tym napisem jako jego `textContent`. Zwróć uwagę na to, czy potrzebowałbyć przeczytać kod, by dowiedzieć się co dokładnie robi ta funkcja, gdyby była nazwana `build('Peach')` lub `createLiWithContent('Peach')`.

## Semantyka w języku CSS

Załóżmy, że chcesz ostylować listę `li` elementów reprezentującą różne owoce. Zwróć uwagę na to, czy wiedziałbyć do której części DOM jest odnosi się selektor `div > ul > li` lub `.fruits__item`.

## Semantyka w języku HTML

W języku HTML, element semantyczny {{htmlelement("h1")}}, nadaje rolę (lub znaczenie) napisowi pomiędzy znacznikami: "najważniejszy nagłówek na twojej stronie"

```html
<h1>To jest najważniejszy nagłówek</h1>
```

Domyślnie, większość przeglądarek [ostylowuje](/pl/docs/Web/CSS/Cascade#User-agent_stylesheets) element {{htmlelement("h1")}} dużą czcionką by _wyglądał_ jak nagłówek (jednak możesz go ostylować jak chcesz).

Z drugiej strony, możesz dowolny element możesz ostylować tak by _wyglądał_ jak nagłówek. Tak jak poniżej:

```html
<span style="font-size: 32px; margin: 21px 0;">Czy to jest najważniejszy nagłówek?</span>
```

Powyższy element będzie wyglał jak najważniejszy nagłówek, nie ma wartości semantycznej. Dlatego najlepiej używać elementów HTML zgodnie z ich przeznaczeniem.

Kod HTML powinien reprezentować _dane_ i nie być oparty na domyślnym stylowaniu. Prezentacja (czyli jak powinny one wyglądać) to zadanie wyłącznie języka [CSS](/pl/docs/Web/CSS).

Poniżej przedstawiono niektóre zalety poprawnego stosowania semantycznych znaczników:

- Wyszukiwarki będą rozpoznawały zawartość jako ważne słowa kluczowe co wpłynie na ranking stron i zasięg strony (zobacz {{glossary("SEO")}})
- Czytniki będą mogły używać ich jako wskazówek pomagając osobom z pewnymi niepełnosprawnościami wzrokowymi poruszać się po stronie
- Poruszanie po kodzie z wymownymi nazwami znaczników będzie znacznie łatwiejsze
- Sugeruje typ zawartości, która ma się znaleźć między znacznikami

Gdy zastanawiasz się, który znacznik należy użyć, zapytaj się, "Który element najlepiej określa/reprezentuje zawartość, którą chcę podać?". Na przykład: Czy to lista ponumerowana czy nie? Czy to artykuł podzielony na sekcję i częścią boczną? Czy to lista definicji? Czy to powinno mieć własny nagłówek? Czy ten obrazek potrzebuje podpisu? itp.

## Elementy semantyczne

Oto _niektóre_ z około 100 [elementów](/pl/docs/Web/HTML/Element) semantycznych:

- {{htmlelement("article")}}
- {{htmlelement("aside")}}
- {{htmlelement("details")}}
- {{htmlelement("figcaption")}}
- {{htmlelement("figure")}}
- {{htmlelement("footer")}}
- {{htmlelement("header")}}
- {{htmlelement("main")}}
- {{htmlelement("mark")}}
- {{htmlelement("nav")}}
- {{htmlelement("section")}}
- {{htmlelement("summary")}}
- {{htmlelement("time")}}

## Zobacz także

- [HTML element reference](/pl/docs/Web/HTML/Element#Inline_text_semantics) on MDN
- [Using HTML sections and outlines](/pl/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#Problems_solved_by_HTML5) on MDN
- {{interwiki("wikipedia", "Semantics#Computer_science", "The meaning of semantics in computer science")}} on Wikipedia

<!---->

- [MDN Web Docs Glossary](/pl/docs/Glossary)

  - {{Glossary("SEO")}}

- Some of semantic elements in HTML

  - {{htmlelement("article")}}
  - {{htmlelement("aside")}}
  - {{htmlelement("details")}}
  - {{htmlelement("figcaption")}}
  - {{htmlelement("figure")}}
  - {{htmlelement("footer")}}
  - {{htmlelement("header")}}
  - {{htmlelement("main")}}
  - {{htmlelement("mark")}}
  - {{htmlelement("nav")}}
  - {{htmlelement("section")}}
  - {{htmlelement("summary")}}
  - {{htmlelement("time")}}
