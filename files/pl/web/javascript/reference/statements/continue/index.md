---
title: continue
slug: Web/JavaScript/Reference/Statements/continue
tags:
  - JavaScript
  - instrukcja
  - polecenie
translation_of: Web/JavaScript/Reference/Statements/continue
original_slug: Web/JavaScript/Referencje/Polecenia/continue
---
{{jsSidebar("Statements")}}

**Polecenie continue** zatrzymuje wykonanie pętli w obecnej iteracji, w obecnej lub wskazanej pętli i kontynuuje wykonanie pętli w kolejnej jej iteracji.

{{EmbedInteractiveExample("pages/js/statement-continue.html")}}

## Składnia

    continue [etykieta];

- `etykieta`
  - : Identyfikator powiązany z etykietą instrukcji.

## Opis

W przeciwieństwie do instrukcji {{jsxref("Statements/break", "break")}}, `continue` nie zatrzymuje całkowicie wykonania pętli, natomiast:

- w pętli {{jsxref("Statements/while", "while")}} powoduje przejście do warunku pętli,

<!---->

- w pętli {{jsxref("Statements/for", "for")}}, powoduje przejście do wyrażenia aktualizującego pętlę.

Instrukcja `continue` może opcjonalnie zawierać etykietę, która pozwala programowi przejść do kolejnej iteracji pętli, której tę etykietę przypisano, zamiast kolejnej iteracji obecnej pętli. W tym przypadku, polecenie `continue` musi być zawarte wewnątrz instrukcji z etykietą.

## Przykłady

### Użycie continue z while

Poniższy przykład pokazuje pętlę {{jsxref("Statements/while", "while")}}, zawierającą polecenie `continue`, które jest wykonywane, gdy wartość zmiennej `i` równa jest 3 – zatem `n` przyjmuje kolejno wartości 1, 3, 7 i 12.

```js
var i = 0;
var n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
}
```

### Użycie continue z etykietą

W poniższym przykładzie, instrukcja z etykietą `checkiandj` zawiera instrukcję z etykietą `checkj`. Jeśli zostanie napotkane polecenie `continue`, wykonanie programu jest kontynuowane od góry instukcji `checkj`. Za każdym razem, gdy napotkane jest `continue`, `chekckj` jest przeiterowywane dopóki jego warunek nie zwróci wartości false. Kiedy zwracane jest false, wykonywana jest pozostała część `checkiandj`.

Gdyby `continue` miało etykietę `checkiandj`, wówczas program powinien przejść na początek instrukcji `checkiandj`.

Zobacz też {{jsxref("Statements/label", "label")}}.

```js
var i = 0;
var j = 8;

checkiandj: while (i < 4) {
  console.log('i: ' + i);
  i += 1;

  checkj: while (j > 4) {
    console.log('j: ' + j);
    j -= 1;

    if ((j % 2) == 0)
      continue checkj;
    console.log('Liczba' + j + ' jest nieparzysta.');
  }
  console.log('i = ' + i);
  console.log('j = ' + j);
}
```

Wyjście:

```js
i: 0

// początek checkj
j: 8
Liczba 7 jest nieparzysta.
j: 7
j: 6
Liczba 5 jest nieparzysta.
j: 5
// koniec checkj

i = 1
j = 4

i: 1
i = 2
j = 4

i: 2
i = 3
j = 4

i: 3
i = 4
j = 4
```

## Specyfikacje

| Specyfikacja                                                                                     | Status                       | Uwagi                                   |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | --------------------------------------- |
| {{SpecName('ES1')}}                                                                         | {{Spec2('ES1')}}         | Wstępna definicja. Wersja bez etykiety. |
| {{SpecName('ES3')}}                                                                         | {{Spec2('ES3')}}         | Dodano wersję z etykietą.               |
| {{SpecName('ES5.1', '#sec-12.7', 'Continue statement')}}                     | {{Spec2('ES5.1')}}     |                                         |
| {{SpecName('ES6', '#sec-continue-statement', 'Continue statement')}}     | {{Spec2('ES6')}}         |                                         |
| {{SpecName('ESDraft', '#sec-continue-statement', 'Continue statement')}} | {{Spec2('ESDraft')}} |                                         |

## Wsparcie przeglądarek

{{Compat("javascript.statements.continue")}}

## Zobacz też

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/label", "label")}}
