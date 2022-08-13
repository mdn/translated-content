---
title: empty
slug: Web/JavaScript/Reference/Statements/Empty
tags:
  - JavaScript
  - funkcja języka
  - wyrażenie
translation_of: Web/JavaScript/Reference/Statements/Empty
original_slug: Web/JavaScript/Referencje/Polecenia/Empty
---
{{jsSidebar("Statements")}}

**Puste wyrażenie** jest używane do podania braku wyrażenia tam, gdzie składnia JavaScript wymaga jakiejkolwiek instrukcji.

{{EmbedInteractiveExample("pages/js/statement-empty.html")}}

## Składnia

    ;

## Opis

Puste wyrażenie jest zapisywane jako średnik, wskazujący na to, że żadna instrukcja nie będzie wykonana, nawet jeśli składnia JavaScript wymaga jakiejkolwiek operacji.

Przeciwna zachowanie, kiedy potrzebne jest użycie kilku wyrażeń tam, gdzie JavaScript pozwala tylko na jedno, jest możliwe dzięki [blokom instrukcji](/pl/docs/Web/JavaScript/Reference/Statements/block), które łączą kilka wyrażeń w jedno.

## Przykłady

### Pusta pętla

Puste wyrażenie jest czasem używane w pętlach. Poniższy przykład prrzedstawia ciało pustej pętli:

```js
let arr = [1, 2, 3];

// Nadaj wszystkim elementom tablicy wartość 0
for (let i = 0; i < arr.length; arr[i++] = 0) /* puste wyrażenie */ ;

console.log(arr);
// [0, 0, 0]
```

### Nieumyślne użycie

Dobrym pomysłem jest dodanie komentarza do _umyślnego_ użycia pustego wyrażenia, ponieważ nieoczywistym może się okazać rozróżnienie takiej instrukcji od zwykłego średnika.

W poniższym przykładzie użycie pustego wyrażenia prawdopodobnie nie jest umyślne:

```js example-bad
if (condition);       // Uwaga, ten "if" nic nie robi!
   killTheUniverse()  // To polecenie będzie zawsze wykonane!!!
```

W kolejnym przykładzie użyta jest instrukcja warunkowa {{jsxref("Statements/if...else", "if...else")}} bez nawiasów klamrowych (`{}`).

Jeśli wartość zmiennej `trzy` jest równa `true`, nic się nie stanie, zmienna `cztery` nie ma znaczenia, również funkcja `odpalRakietę` w przypadku `else` nie będzie wykonana.

```js example-bad
if (jeden)
  wykonajJeden();
else if (dwa)
  wykonajDwa();
else if (trzy)
  ; // puste wyrażenie
else if (cztery)
  wykonajCztery();
else
  odpalRakietę();
```

## Specyfikacje

| Specyfikacja                                                                             |
| ---------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-empty-statement', 'Empty statement')}} |

## Wsparcie przeglądarek

{{Compat("javascript.statements.empty")}}

## Zobacz też

- {{jsxref("Statements/block", "Block statement")}}
