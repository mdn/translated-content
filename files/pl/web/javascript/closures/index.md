---
title: Domknięcia
slug: Web/JavaScript/Closures
translation_of: Web/JavaScript/Closures
original_slug: Web/JavaScript/Domkniecia
---
{{jsSidebar("Intermediate")}}

Domknięcie jest funkcją skojarzoną z odwołującym się do niej środowiskiem. Innymi słowy domknięcie daje Ci dostęp z funkcji wewnętrznej do zasięgu funkcji zewnętrznej.

## Zasięg leksykalny

Rozważ poniższy przykład:

```js
function init() {
  var name = "Mozilla"; // name jest zmienną lokalną utworzoną przez funkcję init
  function displayName() { // displayName() jest wewnętrzną funkcją, domknięciem
    alert(name); // używa zmiennej zdeklarowanej w funkcji nadrzędnej
  }
  displayName();
}
init();
```

`init()` tworzy zmienną lokalną `name` oraz funkcję `displayName()`. `displayName()` jest funkcją lokalną która została zdefiniowana wewnątrz funkcji `init()` i jest dostępna tylko wewnątrz tej funkcji. `displayName()` nie ma własnych zmiennych lokalnych. Jednakże, ponieważ wewnętrzne funkcje mają dostęp do zmiennych zdefiniowanych w funkcjach zewnętrznych, `displayName()` ma dostęp do zmiennej `name` zdeklarowanej w funkcji nadrzędnej, `init()`.

{{JSFiddleEmbed("https://jsfiddle.net/xAFs9/3/", "js,result", 200)}}

Uruchom kod i zauważ że `alert()` zawarty w funkcji `displayName()` wyświetlił wartość ze zmiennej `name`, która jest zdeklarowana w funkcji nadrzędnej. Jest to przykład _zasięgu leksykalnego_, który opisuje jak parser rozwiązuje zmienne kiedy funkcje są zagnieżdżone. Słowo "leksykalny" odnosi się do faktu że zasięg leksykalny używa lokalizacji zdefiniowania zmiennej w kodzie źródłowym aby określić gdzie ta zmienna jest dostępna. Zagnieżdżone funkcje mają dostęp do zmiennych zdeklarowanych w ich zewnętrznym zasięgu.

## Domknięcie

Teraz rozważmy następujący przykład:

```js
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

Jeżeli uruchomisz ten kod przekonasz się że ma takie samo działanie jak poprzedni przykład z funkcją `init()`: tym razem wartość tekstowa "Mozilla" zostanie wyświetlona w alercie. To, co jest inne, - i interesujące - to to, że wewnętrzna funkcja `displayName()` została zwrócona z nadrzędnej funkcji przed jej wykonaniem.

Na pierwszy rzut oka może się wydawać nieintuicyjne, że kod nadal pracuje. W niektórych językach programowania zmienne lokalne znajdujące się w funkcji istnieją tylko przez czas trwania tej funkcji. W momencie gdy `makeFunc()` zostanie wykonana możesz oczekiwać, że zmienna nie będzie już dostępna. Jednakże, ponieważ w naszym przypadku kod nadal pracuje, jak widać nie dotyczy to języka JavaScript.

Spowodowane jest to tym, że omawiane funkcje przybierają w Javascript formę domknięć. _Domknięcie_ jest kombinacją funkcji i leksykalnego środowiska w którym ta funkcja została zdeklarowana. To środowisko zawiera każdą zmienną lokalną która była w zasięgu w momencie kiedy domknięcie zostało stworzone. W tym przypadku, `myFunc` jest referencją do instancji funkcji `displayName` stworzonej w momencie działania `makeFunc`. Instancja `displayName` zarządza referencją do jej leksykalnego środowiska, w którym istnieje zmienna. Dlatego, kiedy `myFunc` jest uruchomiona, zmienna pozostaje dostępna do użycia i "Mozilla" może być przekazane do `alert`.

Poniżej znajduje się znacznie bardziej interesujący przykład — funkcja `makeAdder`:

    function makeAdder(x) {
      return function(y) {
        return x + y;
      };
    }

    var add5 = makeAdder(5);
    var add10 = makeAdder(10);

    console.log(add5(2));  // 7
    console.log(add10(2)); // 12

W tym przykładzie, zdefiniowaliśmy funkcję `makeAdder(x)`, która pobiera argument, `x`, i zwraca nową funkcję.  Zwrócona funkcja pobiera argument, y, i zwraca sume x i y.

W zasadzie `makeAdder` jest fabryką funkcji — wytwarza funkcje, które mogą dodawać pewną wartość do ich argumentu. W powyższym przykładzie używamy naszej fabryki funkcji do stworzenia dwóch nowych funkcji — jedna, która dodaje 5 do jej argumentu i druga, która dodaje 10.

`add5` i `add10` są domknięciami. Dzielą ten sam kod zawarty w funkcji `makeAdder`, ale przechowują różne leksykalne środowisko. W leksykalnym środowisku `add5`, `x` wynosi 5, natomiast w leksykalnym środowisku `add10`, `x` jest równe 10.

## Praktyczne domknięcia

Domknięcia są przydatne, ponieważ pozwalają Ci powiązać część danych (środowisko leksykalne) z funkcją, która operuje na tych danych. Jest to oczywista analogia do programowania obiektowego, gdzie obiekty pozwalają nam na powiązanie części danych (właściwości obiektu) z jedną lub dwiema metodami.

W rezultacie możesz użyć dokmnięć w sytuacjach, gdzie normalnie byś użył/a obiektu z wyłącznie jedną metodą.

Potencjalne sytuacje zastosowania powyższego zachowania są szczególnie popularne w sieci. Wiele kodu, który piszemy we front-endowym Javascripcie bazuje na zdarzeniach — definiujemy jakieś zachowanie, następnie dołączamy je do wydarzenia, które jest wywoływane przez użytkownika (kliknięciem myszki lub naciśnięciem klawisza klawiatury). Nasz kod jest najczęściej dołączony jako callback (wywołanie zwrotne): pojedyncza funkcja wykonywana jako odpowiedź na wydarzenie.

Przyjmijmy przykładowo, że chcemy dodać do strony przyciski, które zmieniają wielkość tekstu. Jednym ze sposobów na osiągnięcie tego jest określenie rozmiaru czcionki `font-size` elementu `body` w pikselach, następnie ustawienie rozmiaru innych elementów na stronie (takich jak nagłówki) używając jednostki względnej `em`:

    body {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 12px;
    }

    h1 {
      font-size: 1.5em;
    }

    h2 {
      font-size: 1.2em;
    }

Nasze interaktywne przyciski zmiany wielkości tekstu mogą zmienić wlaściwość `font-size` elementu `body`, a inne elementy strony dostosują się dzięki zastosowaniu jednostki względnej.

Poniżej realizacja w JavaScript:

    function makeSizer(size) {
      return function() {
        document.body.style.fontSize = size + 'px';
      };
    }

    var size12 = makeSizer(12);
    var size14 = makeSizer(14);
    var size16 = makeSizer(16);

`size12`, `size14`, oraz `size16` są obecnie funkcjami, które zmienią rozmiar tekstu w `body` do odpowiednio 12, 14 oraz 16 pixeli. Możemy dołączyć je do przycisków (w tym przypadku linków) jak ponżej:

    document.getElementById('size-12').onclick = size12;
    document.getElementById('size-14').onclick = size14;
    document.getElementById('size-16').onclick = size16;

<!---->

    <a href="#" id="size-12">12</a>
    <a href="#" id="size-14">14</a>
    <a href="#" id="size-16">16</a>

{{JSFiddleEmbed("https://jsfiddle.net/vnkuZ/","","200")}}

## Emulowanie prywatnych metod przy użyciu domknięć

Języki takie jak Java dostarczają możliwość zadeklarowania metody jako prywatna, co oznacza, że może ona zostać wywołana wylącznie przez inne metody w tej samej klasie.

JavaScript nie zapewnia do tego wbudowanej metody, jednakże jest możliwa emulacja prywatnych metod przy użyciu domknięć. Prywatne metody nie sa wyłącznie użyteczne z racji możliwości ograniczenia dostępu do kodu: dają również świetną możliwość zarządzania Twoją globalną przestrzenią nazw (namespace) uniemożliwiając nieistotnym metodom zaśmiecenie interfejsu publicznego Twojego kodu.

Poniższy kod ukazuje, w jaki sposób można użyć domknięć do zdefiniowania publicznych funkcji, które mają dostęp do prywatnych funkcji i zmiennych. Używanie dokmnięć w taki sposób znane jest jako [module pattern](http://www.google.com/search?q=javascript+module+pattern):

    var counter = (function() {
      var privateCounter = 0;
      function changeBy(val) {
        privateCounter += val;
      }
      return {
        increment: function() {
          changeBy(1);
        },
        decrement: function() {
          changeBy(-1);
        },
        value: function() {
          return privateCounter;
        }
      };
    })();

    console.log(counter.value()); // logs 0
    counter.increment();
    counter.increment();
    console.log(counter.value()); // logs 2
    counter.decrement();
    console.log(counter.value()); // logs 1

W poprzednich przykładach każde domknięcie miało własne leksykalne środowisko. Jednakże w tym przypadku tworzymy pojedyncze środowisko leksykalne, współdzielone przez trzy funkcje: `counter.increment`, ` counter.decrement oraz ``counter.value `.

Owo współdzielone środowisko leksykalne tworzone jest w ciele funkcji anonimowej, która jest wykonana w momencie, gdy tylko zostanie zdefiniowana. Środowisko leksykalne zawiera dwa prywatne przedmioty: zmienną o nazwie `privateCounter` i funkcję o nazwie `changeBy`. Żaden z tych prywatnych przedmiotów nie może być wywołany bezpośrednio spoza funkcji anonimowej. Zamiast tego, muszą mieć być one wywołane poprzez trzy funkcje publiczne, które są zwracane z anonimowej klasy opakowującej (wrapper).

Te trzy funkcje publiczne to domknięcia, które współdzielą to samo środowisko. Dzięki JavaScriptowemu zakresowi leksykalnemu, każda z nich ma dostęp do zmiennej `privateCounter` oraz funkcji `changeBy.`

Zauważysz, że definiujemy anonimową funkcję, która tworzy licznik, a następnie od razu ją wywołujemy i przypisujemy wynik do zmiennej `counter`. Moglibyśmy przetrzymywać tę funkcję w oddzielnej zmiennej `makeCounter` i użyć jej do stworzenia kilku liczników.

    var makeCounter = function() {
      var privateCounter = 0;
      function changeBy(val) {
        privateCounter += val;
      }
      return {
        increment: function() {
          changeBy(1);
        },
        decrement: function() {
          changeBy(-1);
        },
        value: function() {
          return privateCounter;
        }
      }
    };

    var counter1 = makeCounter();
    var counter2 = makeCounter();
    alert(counter1.value()); /* Alerts 0 */
    counter1.increment();
    counter1.increment();
    alert(counter1.value()); /* Alerts 2 */
    counter1.decrement();
    alert(counter1.value()); /* Alerts 1 */
    alert(counter2.value()); /* Alerts 0 */

Zauważ, że każdy z dwóch liczników, `counter1` oraz `counter2`, jest niezależny od drugiego. Każde domknięcie odnosi się do innej wersji zmiennej `privateCounter` przez własne domknięcie. Za każdym razem gdy któryś z liczników jest wywołany, jego środowisko leksykalne zmienia się przez zmianę wartości tej zmiennej; jednakże zmiany wartości zmiennej jednego domknięcia nie wpływają na wartość w innym domknięciu.

Używanie domknięć w ten sposób dostarcza wielu korzyści, które normalnie kojarzone sa z programowaniem obiektowym — w szczególności ukrywaniem oraz enkapsulacją danych.

## Tworzenie domknięć w pętlach: popularne błędy

W czasach przed wprowadzeniem definicji [`let` ](/pl/docs/Web/JavaScript/Reference/Statements/let "let")w standardzie ECMAScript 2015, popularnym problemem z domknięciami było ich użycie w pętlach.
Rozważmy poniższy kod:

```html
<p id="help">Helpful notes will appear here</p>
<p>E-mail: <input type="text" id="email" name="email"></p>
<p>Name: <input type="text" id="name" name="name"></p>
<p>Age: <input type="text" id="age" name="age"></p>
```

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
```

{{JSFiddleEmbed("https://jsfiddle.net/v7gjv/", "", 200)}}

Tablica `helpText` definiuje trzy podpowiedzi. Każda z nich jest powiązana z ID inputu z dokumentu. Następnie w pętli `for` dodawana jest obsługa zdarzenia `onfocus`, która ma pokazać tekst podpowiedzi podczas ustawienia focusa na pole.

Jeżeli sprawdzisz działanie tego kodu okaże się, że nie działa tak, jak się spodziewaliśmy. Zawsze zostanie wyświetlona podpowiedź dotycząca ostatniego pola (`'Your age (you must be over 16)'`).

Powodem takiego działania funkcji zwrotnej obsługującej `onfocus` jest domknięcie. Składa sie ono z definicji funkcji i przechwyconego kontekstu zakresu z `setupHelp`. Trzy domknięcia stworzone są w pętli, ale dzielą one to samo środowisko leksykalne, ktore posiada zmienną, która jest aktualizowana (`item.help`). Wartości `item.help` są determinowane w pętli, więc kiedy obsługa zdarzenia `onfocus` zostanie wywołana, `item.help` będzie miało wartość z ostatniej iteracji pętli.

Rozwiązaniem tego problemu jest użycie kolejnych domknięć, szczególnie fabryki funkcji opisanej wcześniej:

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
```

{{JSFiddleEmbed("https://jsfiddle.net/v7gjv/1/", "", 300)}}

To rozwiązanie działa zgodnie z oczekiwaniami. W odróżnieniu od wcześniejszego przykładu, `makeHelpCallback` tworzy *nowe środowisko leksykalne* dla każdej funkcji zwrotnej, w której `help` odnosi się do odpowiadającego stringa z tablicy `helpText`.

Innym sposobem zapisu rozwiązania z anonimowymi domknięciami jest:

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    (function() {
       var item = helpText[i];
       document.getElementById(item.id).onfocus = function() {
         showHelp(item.help);
       }
    })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
  }
}

setupHelp();
```

Jeżeli nie chcesz używać domknięć możesz użyć słowa kluczowego `let` ze standardu ES2015:

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
```

Ten przykład używa `let` zamiast `var`, więc każde domknięcie wiąże się z blokowym zasięgiem funkcji, dlatego nie potrzeba żadnych dodatkowych domknięć.

Alternatywą może być użycie `forEach()`, by iterować po tablicy `helpText` i dodać listener dla każdego elementu `<input>`:

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  helpText.forEach(function(text) {
    document.getElementById(text.id).onfocus = function() {
      showHelp(text.help);
    }
  });
}

setupHelp();
```

## Wątpliwości wydajnościowe

Niemądrze jest, aby niepotrzebnie tworzyć funkcje wewnątrz innych funkcji, jeżeli domnkięcia nie są wymagane w danej sytuacji, jako że odbije się to w negatywny sposób na wydajność skryptu, mierzoną poprzez czas wykonywania jak również i używaną pamięć.

Na przykład gdy tworzymy nowy obiekt/klasę, metody powinny być zwykle powiązane z prototypem obiektu zamiast definiowane w konstruktorze obiektu. Przyczyną jest to, że za każdym razem gdy konstruktor zostanie użyty, metody zostaną nadpisane (czyli przy każdym tworzeniu nowego obiektu).

Rozważmy następujący przykład:

    function MyObject(name, message) {
      this.name = name.toString();
      this.message = message.toString();
      this.getName = function() {
        return this.name;
      };

      this.getMessage = function() {
        return this.message;
      };
    }

Ponieważ poprzedni przykład nie wykorzystuje zalet, które płyną z wykorzystania domknięć, możemy to przepisać w następujący sposób:

    function MyObject(name, message) {
      this.name = name.toString();
      this.message = message.toString();
    }
    MyObject.prototype = {
      getName: function() {
        return this.name;
      },
      getMessage: function() {
        return this.message;
      }
    };

Jednakże ponowne definiowanie prototypu nie jest rekomendowane. Poniższy przykład zamiast tego dodaje właściwości do istniejącego prototypu:

    function MyObject(name, message) {
      this.name = name.toString();
      this.message = message.toString();
    }
    MyObject.prototype.getName = function() {
      return this.name;
    };
    MyObject.prototype.getMessage = function() {
      return this.message;
    };

Powyższy przykład może też zostać przepisany w bardziej czytelny sposób, z identycznym wynikiem:

    function MyObject(name, message) {
        this.name = name.toString();
        this.message = message.toString();
    }
    (function() {
        this.getName = function() {
            return this.name;
        };
        this.getMessage = function() {
            return this.message;
        };
    }).call(MyObject.prototype);

W poprzednich trzech przykładach odziedziczony prototyp może być współdzielony przez wszystkie obiektu i definicje metod nie muszą występować przy każdorazowym tworzeniu obiektu. Aby dowiedzieć się więcej, zobacz Szczegóły modelu obiektowego.

In the three previous examples, the inherited prototype can be shared by all objects and the method definitions need not occur at every object creation. See [Details of the Object Model](/pl/docs/Web/JavaScript/Guide/Details_of_the_Object_Model) for more.
