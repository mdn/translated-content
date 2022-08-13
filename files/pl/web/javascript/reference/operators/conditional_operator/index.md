---
title: Operator warunkowy
slug: Web/JavaScript/Reference/Operators/Conditional_Operator
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Operators/Conditional_Operator
original_slug: Web/JavaScript/Referencje/Operatory/Operator_warunkowy
---
{{jsSidebar("Operators")}}

Operator warunkowy jest jedynym operatorem w JavaScript, który pobiera trzy argumenty. Operator jest często stosowany jako skrócenie instrukcji `if`.

## Składnia

    warunek ? wyr1 : wyr2

### Parametry

- `warunek`
  - : Wyrażenie, które sprawdza czy warunek jest spełniony (`true` lub `false`).

<!---->

- `wyr1`, `wyr2`
  - : Wyrażenia z wartością jakiegoś typu.

## Opis

Jeśli `warunek` jest `true`, operator zwraca wartość `wyr1`; w przeciwnym razie zwraca wartość `wyr2`. Na przykład, do wyświetlenia różnych wiadomości opartych na wartości zmiennej `isMember`, będziesz mógł zastosować poniższą instrukcję:

    console.log("Opłata wynosi " + (isMember ? "$2.00" : "$10.00"));
    console.log("Opłata wynosi " + (zarejestrowany == 1) ? "$2.00" : "$10.00");
