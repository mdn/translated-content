---
title: blockquote
slug: Web/HTML/Element/blockquote
tags:
  - HTML:Opis_elementów
translation_of: Web/HTML/Element/blockquote
---
## Podsumowanie

**Cytat blokowy** oznacza, że dany tekst jest większym cytatem. Zazwyczaj pokazywane jest to jako wcięty tekst (zobacz w [notatkach](/pl/docs/HTML/Element/blockquote#Notatki "HTML/Element/blockquote#Notatki") jak to zmienić). Źródło cytatu może być zaznaczone za pomocą [elementu `<cite>`](/pl/docs/HTML/Element/cite "HTML/Element/cite").

- Typ elementu: [blokowy](/pl/docs/HTML/Elementy_blokowe "HTML/Elementy_blokowe")
- Dozwolona zawartość: [elementy blokowe](/pl/docs/HTML/Elementy_blokowe "HTML/Elementy_blokowe")

## Atrybuty

- cite
  - : Wartością tego atrybutu jest URL, który określa źródłowy dokument lub wiadomość dla cytowanej informacji. Ten atrybut jest przeznaczony do wskazywania informacji wyjaśniającej kontekst lub powiązanie cytatu.

## Przykład

```html
<blockquote cite="http://developer.mozilla.org">
  <p>To jest cytat z Mozilla Developer Center.</p>
</blockquote>
```

Powyższy HTML da następujący efekt:

> To jest cytat z Mozilla Developer Center.

## Notatki

By zmienić wcięcie dla `<blockquote>`, użyj własności [CSS](/pl/docs/CSS "CSS") [`margin`](/pl/docs/CSS/Margin "CSS/Margin").

Dla krótkich cytatów użyj elementu [`<q>`](/pl/docs/HTML/Element/q "HTML/Element/q").

## Zobacz także

- [Akapit](/pl/docs/HTML/Element/p "HTML/Element/p")
- [Znacznik `<code>`](/pl/docs/HTML/Element/code "HTML/Element/code")

{{ HTML:Element_Navigation() }}
