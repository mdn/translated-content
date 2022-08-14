---
title: HTMLTableElement
slug: Web/API/HTMLTableElement
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/HTMLTableElement
---
{{ ApiRef() }}

## Interfejs elementu HTML Table

Obiekt `table` pozwala na dostęp do interfejsu [`HTMLTableElement`](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-64060425), który udostępnia specjalne własności i metody (będące poza zwykłym interfejsem obiektu [`element`](/pl/docs/DOM/element); własności i metody [elementu](/pl/docs/DOM/element) dostępne są poprzez dziedziczenie) do ustawiania układu i wyglądu tabel w języku HTML.

## Własności

- {{domxref("HTMLTableElement.caption")}}
  - : opis tabeli.
- {{domxref("HTMLTableElement.tHead")}}
  - : nagłówek tabeli.
- {{domxref("HTMLTableElement.tFoot")}}
  - : stopka tabeli.
- {{domxref("HTMLTableElement.rows")}} {{readonlyInline}}
  - : **rows** - liczba wierszy tabeli.
- {{domxref("HTMLTableElement.tBodies")}} {{readonlyInline}}
  - : 'ciała' tabeli (tbody).

<!---->

- {{domxref("HTMLTableElement.align")}} {{obsolete_inline}}
  - : ustawia/pobiera wyrównanie tabeli.
- {{domxref("HTMLTableElement.bgColor")}} {{obsolete_inline}}
  - : ustawia/pobiera kolor tła tabeli.
- {{domxref("HTMLTableElement.border")}} {{obsolete_inline}}
  - : ustawia/pobiera obramowanie tabeli.
- {{domxref("HTMLTableElement.cellPadding")}} {{obsolete_inline}}
  - : ustawia/pobiera dopełnienie komórki.
- {{domxref("HTMLTableElement.cellSpacing")}} {{obsolete_inline}}
  - : ustawia/pobiera odstępy pomiędzy komórkami.
- {{domxref("HTMLTableElement.frame")}} {{obsolete_inline}}
  - : określa które krawędzie tabeli mają obramowanie.
- {{domxref("HTMLTableElement.rules")}} {{obsolete_inline}}
  - : określa które wewnętrzne krawędzie są widoczne.
- {{domxref("HTMLTableElement.summary")}} {{obsolete_inline}}
  - : **u**stawia/pobiera podsumowanie tabeli.
- {{domxref("HTMLTableElement.width")}} {{obsolete_inline}}
  - : ustawia/pobiera szerokość tabeli.

## Metody

- {{domxref("HTMLTableElement.createTHead()")}}
  - : tworzy nagłówek tabeli.
- {{domxref("HTMLTableElement.deleteTHead()")}}
  - : usuwa nagłówek tabeli.
- {{domxref("HTMLTableElement.createTFoot()")}}
  - : tworzy stopkę tabeli.
- {{domxref("HTMLTableElement.deleteTFoot()")}}
  - : usuwa stopkę tabeli.
- {{domxref("HTMLTableElement.createCaption()")}}
  - : tworzy nowy opis tabeli.
- {{domxref("HTMLTableElement.deleteCaption()")}}
  - : usuwa opis tabeli.
- {{domxref("HTMLTableElement.insertRow()")}}
  - : wstawia nowy wiersz.
- {{domxref("HTMLTableElement.deleteRow()")}}
  - : usuwa wiersz.
