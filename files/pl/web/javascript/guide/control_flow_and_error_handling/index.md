---
title: Przepływ danych i obsługa błędów
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
tags:
  - JavaScript
  - Początkujący
  - Przewodnik
translation_of: Web/JavaScript/Guide/Control_flow_and_error_handling
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript jest językiem zawierającym w sobie szeroki wachlarz instrukcji. Część z nich odnosi się do sterowania przepływem programu *(\_\_ang. control flow)* i może być pomyślnie użyta w celu nadania Twojej aplikacji kolejnych poziomów interaktywności. W rozdziale tym omówimy te instrukcje.

[JavaScript reference](/pl/docs/Web/JavaScript/Reference/Statements) zawiera wyczerpujący opis instrukcji wymienionych w tym artykule. Średnik (;) jest używany do oddzielenia od siebie kolejnych poleceń w języku JavaScript. Chodź w większości przypadków brak średnika na końcu instrukcji nie powoduje błędu, by kod był jak najbardziej semantyczny, należy go tam umieszczać.

Każde wyrażenie w języku JavaScript jest również instrukcją. [Expressions and operators](/pl/docs/Web/JavaScript/Guide/Expressions_and_Operators) zawiera kompletny opis wyrażeń.

## Instrukcja blokowa

Najprostszym rodzajem instrukcji jest instrukcja blokowa, która służy do grupowania wyrażeń. Blok jest ograniczony parą nawiasów klamrowych.

    { wyrazenie_1; wyrazenie_2; . . . wyrazenie_n; }

### Przykład

Instrukcje blokowe są bardzo często używane w połączeniu z instrukcjami sterującymi (np. `if`, `for`, `while`).

```js
while (x < 10) {
  x++;
}
```

W tym przypadku, { x++; } jest instrukcją blokową.

**Ważne**: Blok w JavaScript w wersji do ECMAScript6 nie posiada własnego scope (zasięgu zmiennych). Zmienne zadeklarowane wewnątrz takiego bloku bowiem mają scope (zasięg zmiennych) związany z funkcją lub skryptem, w którym blok się bezpośrednio znajduje. Efektem tego jest to, że każda zmienna zadeklarowana w bloku istnieje również i poza nim. W innych słowach - instrukcje blokowe nie definują nowego scope (zasięgu zmiennych). Samodzielne bloki w JavaScript mogą wyprodukować zupełnie inne wyniki od tych, których moglibyśmy się spodziewać w językach takich jak C czy Java. Przykład:

```js
var x = 1;
{
  var x = 2;
}
console.log(x); // wypisze 2
```

Wypisane zostanie 2 ponieważ wyrażenie var x wewnątrz bloku dzieli scope (zasięg zmiennych) z wyrażeniem var x na zewnątrz bloku. W C lub Javie, równoważny kod wypisałby 1.

Począwszy od specyfikacji ECMAScript 6, za pomocą słowa kluczowego `let` mamy mozliwość tworzenia zmiennych o zasięgu blokowym.

## Instrukcje warunkowe

Instrukcje warunkowe są zbiorem instrukcji, które pozwalają na wykonywanie danej porcji kodu gdy warunki (parametry instrukcji) zwracają wartość true. JavaScript wspiera dwa rodzaje instrukcji warunkowych:\*\* **`if . . . else`  oraz `switch`**.\*\*

### Instrukcje `if...else`

Instrukcja `if`\*\* **wykonuje blok instrukcji jeżeli jej warunki zwrócą wartość `true`. Aby obsłużyć sytuacje gdy warunki nie zostały spełnione i zwracają `false`, można posłużyć się np. instrukcją `else`**:\*\*

    if (warunki) {
      intrukcja_1;
    }
    else {
      instrukcja_2;
    }

Warunkami mogą być wszystkie twierdzania które można przekształcić do typu boolean (`true` lub `false`). W powyższym przykładzie `instrukcja_1` wykona się jeśli warunki zwrócą `true`, w przeciwnym wypadku wykonana zostanie `instrukcja_2`.

Za pomocą `else if`\*\* \*\*można tworzyć złożone sekwencyjnie testowe oparte na wielu instrukcjach warunkowych. Jeśli `warunek_1` nie zostanie spełniony, skrypt sprawdza kolejne warianty:

    if (warunek_1) { instrukcja_1; }
    else if (warunek_2) { instrukcja_2; }
    else if (warunek_n) { instrukcja_n; }
    else { ostatnia_instrukcja; }

Aby wykonać wiele instrukcji można je zgrupować za pomocą deklaracji bloku (`{ ... }`). Mimo, że nie jest wymagane by pojedyncze instrukcje byly zawierane w bloku, warto stosować to rozwiązanie dla lepszej czytelności kodu:

    if (warunek_1) {
      instrukcja_1;
      instrukcja_2;
    }
    else if (warunek_2) {
      instrukcja_3;
    }
    else
       instrukcja_4;
       // Pojedyńcze instrukcje nie wymagają zawierania ich w nawiasy.

Wskazane jest, by nie używać przypisywania w wyrażeniu warunków:



```js example-bad
if (x = y) {
  /* instrukcje */
}
```

Jeśli konieczne jest użycie operatora przypisania w wyrażeniu warunku, najczęściej stosowaną praktyką jest zawieranie przypisania w dodatkowe nawiasy:

```js
if ((x = y)) {
  /* statements here */
}
```

#### Wartości false

Poniższe wartości użyte w wyrażeniu warunku zostaną przekształcone w wartość `false`:

- `false`, zmienna typu Boolean
- `undefined`
- `null`
- `0`, zmienna typu Number
- `NaN`, zmienna typu Number
- `""`, zmienna typu String

Wszystkie inne wartości, włączając w to wszystkie obiekty, zostają przekształcone do wartości `true`.

Nie należy mylić pierwotnych wartości `true` i `false` z wartościami `true` i `false` obiektu {{jsxref("Boolean")}}:

```js
var b = new Boolean(false);
if (b) // Warunek zwróci wartość true gdyż zmienna b jest obiektem
if (b == true) // Warunek zwróci wartość false
```

#### Przykład

Następujący przykład przedstawia funkcje `checkData`, która zwróci `true` jeżeli liczba znaków w wartości elementu `threeChar` jest równa `3`, w przeciwnym wypadku zostanie wyświetlony alert i zwrócona wartość `false`.

```js
function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert("Enter exactly three characters. " +
    document.form1.threeChar.value + " is not valid.");
    return false;
  }
}
```

### Instrukcja `switch`

Instrukcja `switch` pozwala na wykonanie bloku instrukcji jeśli podana wyrażenie zgadza się z identyfikatorem danego bloku. Gdy użyte zostanie słowo kluczowe `break`, switch wykonuje tylko instrukcje dopasowanego bloku. Bez niego wykonywane są wszystkie bloki poniżej dopasowania. Taka kaskadowość jest w wielu sytuacjach użyteczna.
W przypadku gdy wyrażenie nie zostanie dopasowane do żadnego identyfikatora, wykonywany jest kod z bloku o identyfikatorze `default`. Default nie jest obowiązkowy i może zostać pominięty.

    switch (wyrażenie) {
      case identyfikator_1:
        instruckje_1
        [break;]
      case identyfikator_2:
        instrukcje_2
        [break;]
        ...
      default:
        instruckje_def
        [break;]
    }

#### Przykład

W następującym przykładzie, jeśli `fruittype` przekaże wartość "Bananas", program dopasuje ją do bloku z identyfikatorem "Bananas" i wykona instrukcje które zostały w tym bloku zdefiniowane. Po napotkaniu i wykonaniu instrukcji `break`, program przerywa działanie instrukcji switch. Gdyby w bloku "Bananas" nie występował break, zostałyby wykonane również instrukcje dla bloku "Cherries" i zatrzymały na tam napotkanej instrukcji `break`.

```js
switch (fruittype) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
   console.log("Sorry, we are out of " + fruittype + ".");
}
console.log("Is there anything else you'd like?");
```

## Instrukcje obsługi wyjątków

Możliwe jest wywoływanie wyjątków za pomocą `throw` i ich późniejsza obsługa za pomocą instrukcji `try...catch.`

- [`throw` statement](#throw_statement)
- [`try...catch` statement](#try_catch_statement)

### Typy wyjątków

Praktycznie każda wartość czy obiekt może posłużyć do wygenerowania wyjątku w JavaScript. Nie mniej jednak  bardziej efektywne jest skorzystanie z już wbudowanych, specjalnie do tego przygotowanych typów jak np.

- [Error](/pl/docs/Web/JavaScript/Referencje/Obiekty/Error)

### Instrukcja `throw`

`throw` tworzy wyjątek. Kiedy wywołujesz wyjątek, musisz podać w danym wyrażeniu wartość, którą ma ten wyjątek zwrócić:

    throw wyrażenie;

Możesz wywoływać wyjątek z jakąkolwiek wartością. Podany kod rzuca wyjątki z wartościami różnych typów:

```js
throw "Error2";   // Ciąg znaków
throw 42;         // Typ liczbowy
throw true;       // Wartość Boolean
throw {toString: function() { return "I'm an object!"; } };
```

> **Note:** **Notatka:** Za pomocą instrukcji throw możesz zwrócić rówież obiekt. Możliwe jest osniesienie wartości objektu do właściwości bloku `catch`. Poniższy przykład tworzy obiekt `myUserException` typu `UserException` i używa go w instrukcji throw.

```js
// Create an object type UserException
function UserException(message) {
  this.message = message;
  this.name = "UserException";
}

// Make the exception convert to a pretty string when used as a string
// (e.g. by the error console)
UserException.prototype.toString = function() {
  return this.name + ': "' + this.message + '"';
}

// Create an instance of the object type and throw it
throw new UserException("Value too high");
```

### Instrukcja `try...catch`

`try...catch `jest instrukcją wykonującą pewien blok kodu i wyłąpującą w nim ewentualne wyjątki i błędy, które mogą zostać odpowiednio obsłużone.

Instrukcja `try...catch `zawiera blok `try`, w którym znajduje się jedna bądź więcej instrukcji i zero lub więcej bloków `catch` określających zachowanie programu w przypadku napotkania w bloku `try` jakiegoś wyjątku. Blok `try` testuje nie tylko bezpośrednio wywołane instrukcje, ale cały stos wywołań użytych funkcji.

```js
function test1() {
   test2();
};

function test2() {
   console.log(name);
};

try{
   test1();
}
catch(e){
   console.error(e); //ReferenceError: name is not defined
}
```

```js
function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
                "Aug","Sep","Oct","Nov","Dec"];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; //throw keyword is used here
  }
}

try { // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
  monthName = "unknown";
  logMyErrors(e); // pass exception object to error handler -> your own function
}
```

#### Blok **`catch`**

Możesz użyć bloku `catch` do obsługi wszystkich wyjątków jakie wystąpią w bloku `try`.

    catch (catchID) {
      instrukcje
    }

Blok `catch` przyjmuje parametr catchID, który jest po prostu wartością wyrzuconą przez wyjątek.

#### Blok **`finally`**

Możliwe jest dodanie bloku `finally`, który wykona się niezależnie od tego czy kod w bloku `try` rzucił jakimś wyjątkiem czy nie.

```js
function test1(){
   test2();
};

function test2(){
   console.log(name)
};

try{
   test1();
}
catch(e){
   console.error(e) //ReferenceError: name is not defined
}
finally{
   console.log('Taka zmienna nie została zadeklarowana!')
}
```

#### Zagnieżdzone instrukcje **try...catch**

W swoim programie możesz użyć wielu zagnieżdzonych bloków `try...catch. `Jeśli wewnętrzny `try...catch `nie będzie posiadał bloku `catch,` wyjątek zostanie przekazany do zewnętrznego` try...catch.`

### Wykorzystanie obiektu Error

W zależności od rodzaju błędu jaki chcesz wygnerować w swoim programie, możesz skorzystać z pól 'name' i 'message', aby uzyskać bardziej wyrafinowany log. 'name' zabiera nazwe ogólnej klasy błędu (np. 'DOMException'), z kolei 'message' zawiera bardziej szczegółową informacje okolicznościach powstania danego błędu.

Jeśli chcesz wywoływać własne wyjątki, aby skorzystać z zalet tych pól możesz użyć konstruktora Error:

```js
function doSomethingErrorProne () {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
....
try {
  doSomethingErrorProne();
}
catch (e) {
  console.log(e.name); // logs 'Error'
  console.log(e.message); // logs 'The message' or a JavaScript error message)
}
```

## Obietnice

Począwszy od specyfikacji ECMAScript 6, JavaScript obsługuje obiekty obietnic pozwalające na kontrole przepływu opóźnionych i asynchronicznych operacji.

Obietnica może znajdować się w jednym z następujących stanów:

- _oczekiwanie_: stan początkowy, obietnica nie jest ani spełniona ani odrzucona.
- _spełnienie_: operacja zakończona sukcesem.
- _odrzucenie_: operacja zakończona niepowodzeniem.
- _rozliczenie_: obietnica została spełniona lub odrzucona i nie jest już w stanie oczekiwania.

![](https://mdn.mozillademos.org/files/8633/promises.png)

### Ładowanie zdjęcia za pomocą XHR

Prosty przykład użycia `Promise and XMLHttpRequest `do załadowania zdjęcia jeśli jest dostępne w MDN GitHub promise-test repozytorium.

```js
function imgLoad(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';
    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error('Image didn\'t load successfully; error code:'
                     + request.statusText));
      }
    };
    request.onerror = function() {
      reject(Error('There was a network error.'));
    };
    request.send();
  });
}
```

Aby dowiedzieć się więcej, sprawdź {{jsxref("Promise")}}.

{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}
