---
title: arguments
slug: Web/JavaScript/Reference/Functions/arguments
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Functions/arguments
original_slug: Web/JavaScript/Referencje/Funkcje/arguments
---
### Podsumowanie

Tablicopodobny obiekt odpowiadający argumentom przekazanym do funkcji.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header" colspan="2">
        Zmienna lokalna we wszystkich funkcjach oraz wycofywana własność obiektu
        <a href="pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Function"
          >Function</a
        >
      </td>
    </tr>
    <tr>
      <td>Zaimplementowana w:</td>
      <td>
        JavaScript 1.1, NES 2.0
        <p>
          JavaScript 1.2: dodano własność
          <code
            ><a
              href="pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje/arguments/callee"
              >arguments.callee</a
            ></code
          >.
        </p>
        <p>
          JavaScript 1.3: wycofywana własność
          <code
            ><a
              href="pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje/arguments/caller"
              >arguments.caller</a
            ></code
          >; usunięto obsługę nazw argumentów oraz zmiennych lokalnych jako
          własności obiektu <code>arguments</code>.
        </p>
        <p>
          JavaScript 1.4: wycofywane <code>arguments</code>,
          <code
            ><a
              href="pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje/arguments/callee"
              >arguments.callee</a
            ></code
          >
          oraz
          <code
            ><a
              href="pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje/arguments/length"
              >arguments.length</a
            ></code
          >
          jako własności
          <code
            ><a
              href="pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Function"
              >Function</a
            ></code
          >; zachowanie <code>arguments</code> jako lokalnej zmiennej funkcji
          oraz
          <code
            ><a
              href="pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje/arguments/callee"
              >arguments.callee</a
            ></code
          >
          oraz
          <code
            ><a
              href="pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje/arguments/length"
              >arguments.length</a
            ></code
          >
          jako własności tej zmiennej.
        </p>
      </td>
    </tr>
    <tr>
      <td>Wersja ECMA:</td>
      <td>ECMA-262</td>
    </tr>
  </tbody>
</table>

### Opis

Obiekt `arguments` jest zmienną lokalną dostępną wewnątrz każdej funkcji; `arguments` jako własność `Function` nie może być już używana.

Do argumentów wewnątrz funkcji możesz odwołać się używając obiektu `arguments`. Obiekt ten zawiera pozycję dla każdego argumentu przekazanego funkcji, przy czym indeks pierwszego z nich ma wartość 0. Na przykład, jeśli do funkcji przekazane są trzy argumenty, można się do nich odwołać w następujący sposób:

    arguments[0]
    arguments[1]
    arguments[2]

Argumentom mogą być również przypisywane wartości:

    arguments[1] = 'nowa wartosc';

> **Uwaga:** silnik JavaScript [SpiderMonkey](pl/SpiderMonkey) posiada [bug](https://bugzilla.mozilla.org/show_bug.cgi?id=292215), w którym nie można do `arguments{{ mediawiki.external('n') }}` przypisać wartości, jeśli `n` jest większe niż liczba formalnych lub rzeczywistych parametrów.
> Błąd ten został usunięty w silniku JavaScript 1.6.

Obiekt `arguments` nie jest tablicą. Jest do niej podobny, lecz nie posiada żadnej z własności tablicy poza [`length`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje/arguments/length). Przykładowo nie posiada on metody [`pop`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Array/pop). Może być on jednak skonwertowany do prawdziwej tablicy:

     var args = Array.prototype.slice.call(arguments);

Obiekt `arguments` dostępny jest wyłącznie wewnątrz ciała funkcji. Próba dostępu do obiektu `arguments` spoza części deklaracyjnej funkcji zakończy się błędem.

Możesz użyć obiektu `arguments`, jeśli funkcja wywołana jest z większą liczbą argumentów niż zostało to zadeklarowane. Jest to użyteczne dla funkcji, które wywoływać można ze zmienną liczbą argumentów.
Aby określić liczbę argumentów przekazywanych do funkcji można użyć własności
[`arguments.length`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje/arguments/length), a następnie skorzystać z każdego z argumentów używając obiektu `arguments` (aby określić liczbę argumentów zadeklarowanych podczas definiowania funkcji, skorzystać można z własności [`Function.length`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Function/length)).

### Własności

- [`arguments.callee`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje/arguments/callee)
  - : Określa ciało funkcji aktualnie wykonywanej funkcji.

- [`arguments.caller`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje/arguments/caller) {{ Deprecated_inline() }}
  - : Określa nazwę funkcji, która wywołała aktualnie wykonywaną funkcję.

- [`arguments.length`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje/arguments/length)
  - : Określa liczbę argumentów przekazywanych do funkcji.

### Zgodność wsteczna

#### JavaScript 1.3 i wcześniejsze wersje

Oprócz dostępności jako zmienna lokalna, obiekt `arguments` jest również własnością obiektu `Function` i może być poprzedzony nazwą funkcji. Na przykład, jeżeli do funkcji `myFunc` są przekazywane trzy argumenty o nazwie `arg1`, `arg2`, i `arg3`, można odwołać się do tych argumentów następująco:

    myFunc.arguments[0]
    myFunc.arguments[1]
    myFunc.arguments[2]

#### JavaScript 1.1 i 1.2

Następujące cechy dostępne w JavaScripcie 1.1 i JavaScripcie 1.2 zostały usunięte:

- Każda zmienna lokalna funkcji jest własnością obiektu `arguments`. Na przykład, jeśli funkcja `myFunc` posiada zmienną lokalną nazwaną `myLocalVar`, możesz odwołać się do zmiennej jako `arguments.myLocalVar`.

- Każdy argument formalny funkcji jest własnością obiektu `arguments`. Na przykład, jeżeli funkcja `myFunc` posiada dwa argumenty o nazwie `arg1` i `arg2`, możesz odwołać się do nich jako `arguments.arg1` i `arguments.arg2` (możesz także odwołać się do tych argumentów poprzez `arguments{{ mediawiki.external(0) }}` i `arguments{{ mediawiki.external(1) }}`).

### Przykłady

#### Przykład: Definiowanie funkcji łączącej łańcuchy znaków

Ten przykład definiuje funkcję łączącą kilka łańcuchów znaków. Jedynym formalnym argumentem tej funkcji jest łańcuch znaków, który określa znaki oddzielające poszczególne łączone elementy. Funkcja jest zdefiniowana następująco:

    function myConcat(separator) {
       result = ""; // inicjalizacja listy
       // iteracja pomiędzy argumentami
       for (var i = 1; i < arguments.length; i++) {
          result += arguments[i] + separator;
       }
       return result;
    }

Możesz przesłać dowolną liczbę argumentów do tej funkcji, tworząc na ich bazie listę.

    // zwraca "czerwony, pomaranczowy, niebieski, "
    myConcat(", ", "czerwony", "pomaranczowy", "niebieski");

    // zwraca "slon; zyrafa; lew; gepard; "
    myConcat("; ", "slon", "zyrafa", "lew", "gepard");

    // zwraca "szalwia. bazylia. oregano. pieprz. pietruszka. "
    myConcat(". ", "szalwia", "bazylia", "oregano", "pieprz", "pietruszka");

#### Przykład: Definiowanie funkcji, która tworzy listę HTML

Ten przykład definiuje funkcję, która tworzy łańcuch znaków reprezentujący kod HTML listy. Jedynym argumentem formalnym tej funkcji jest ciąg znaków, który przyjmuje wartość "`u`" dla listy nieuporządkowanej, lub "`o`" w przypadku listy uporządkowanej. Funkcja ta jest zdefiniowana następująco:

    function list(type) {
      var result = "<" + type + "l>";

      // iteracja pomiędzy argumentami
      for (var i = 1; i < arguments.length; i++)
        result += "<li>" + arguments[i] + "</li>";

      result += "</" + type + "l>"; // koniec listy

      return result;
    }

Możesz przekazać funkcji dowolną liczbę argumentów, a ona doda każdy z nich jako kolejną pozycję na liście o wskazanym typie. Przykładowo następujące wywołanie funkcji:

    var listHTML = list("u", "Raz", "Dwa", "Trzy");
    // listHTML zawiera łańcuch "<ul><li>Raz</li><li>Dwa</li><li>Trzy</li></ul>"

{{ languages( { "en": "en/Core_JavaScript\_1.5\_Reference/Functions/arguments", "es": "es/Referencia_de_JavaScript\_1.5/Funciones/arguments", "fr": "fr/R\u00e9f\u00e9rence_de_JavaScript\_1.5\_Core/Fonctions/arguments", "ja": "ja/Core_JavaScript\_1.5\_Reference/Functions/arguments" } ) }}
