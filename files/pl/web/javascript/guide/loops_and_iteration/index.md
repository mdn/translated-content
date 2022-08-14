---
title: Pętle i iteracje
slug: Web/JavaScript/Guide/Loops_and_iteration
translation_of: Web/JavaScript/Guide/Loops_and_iteration
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}

Za pomocą pętli możemy w łatwy sposób powtarzać pewne czynności. Ten rodział [JavaScript Guide](/pl/docs/Web/JavaScript/Guide) zapoznaje z różnymi rodzajami pętli, dostępnymi w JavaScript.

Możesz myśleć o pętli jak o skomputeryzowanej wersji gry w której mówisz komuś, żeby zrobił X kroków w jedym kierunku a następnie Y kroków w innym; przykład "Zrób 5 kroków na zachód" może być wyrażone za pomocą pętli w ten sposób:

```js
var step;
for (step = 0; step < 5; step++) {
  // Uruchamia się 5 razy, z wartościami od 0 do 4.
  console.log('Idę na zachód jeden krok');
}
```

Jest wiele różnych rodzajów pętli, lecz zwykle wszystkie robią to samo: powtarzają zadaną akcję pewną ilość razy (liczba powtórzeń może także wynosić 0).  Różne mechanizmy pętli oferują różne sposoby określania początku i końca pętli. W różnych sytuacjach łatwiej jest użyć danego typu pętli niż innego.

Wyrażenia dla pętli obsługiwane w JavaScript:

- [for](#for)
- [do...while](#do...while)
- [while](#while)
- [label](#label)
- [break](#break)
- [continue](#continue)
- [for...in](#for...in)
- [for...of](#for...of)

## `for`

Pętla [`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for) powtarza wykonie instrukcji, dopóki dostarczony warunek nie zwraca false. Pętla for w JavaScript jest podobna do tej z języków Java czy C. Składnia tej pętli wygląda następująco:

    for ([wyrażenieInicjalizacji]; [warunek]; [wyrażenieInkrementacji])
      Instrukcja

Podczas wykonywania się pętli for, mają miejsce następujące operacje:

1.  Wykonywane jest wyrażenie `wyrażenieInicjalizacji`, o ile takie istnieje. Zazwyczaj w tym miejscu inicjalizuje się zmienne, które posłużą później jako liczniki dla pętli.
2.  Sprawdzana jest wartość zwracana przez wyrażenie `warunek`, jeśli jest to true, pętla będzie wykonywać się dalej. Jeśli z kolei będzie to false, pętla zostanie przerwana. W przypadku nie podania żadnego wyrażenia warunkowego, pętla będzie traktować to jako true.
3.  Wykonuje się `Instrukcja`.  W celu wykonania wielu instrukcji w jednym przebiegu pętli, należy je zgrupować i umieścić w bloku ( `{ ... }` ).
4.  Wykonywane zostaje `wyrażenie inkrementacji`, o ile istnieje. W tym miejscu powiększamy wartość licznika pętli.
5.  Zarządzanie pętlą wraca do kroku 2.

### Przykład

Następująca funkcja zawiera pętle `for`, która zlicza elementy \<option> w rozwijalnej liście \<select>. W pętli zostaje zadeklarowana zmienna `i` z wartością 0. Sprawdza czy `i` jest mniejsze niż liczba elementów \<option>, wykonuje kod wewnątrz i zwiększa wartość `i `po każdym przebiegu.

```html
<form name="selectForm">
  <p>
    <label for="musicTypes">Choose some music types, then click the button below:</label>
    <select id="musicTypes" name="musicTypes" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>Jazz</option>
      <option>Blues</option>
      <option>New Age</option>
      <option>Classical</option>
      <option>Opera</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="How many are selected?" /></p>
</form>

<script>
function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
  alert('Number of options selected: ' + howMany(document.selectForm.musicTypes))
});
</script>
```

## `do...while`

`Pętla do...while` powtarza `instrukcje` wewnątrz, dopóki `warunek` nie zwróci false. Wygląda to następująco:

    do
      instrukcja
    while (warunek);

Możemy skorzystać z wyrażenia bloku (`{ ... }`), by zgrupować wiele instrukcji. Na końcu wykonywania instrukcji sprawdzany jest warunek. Jeśli zwróci on true, Pętla wykonan się po raz kolejny, z kolei false przerwie pętle. Warto zwrócić uwagę, że ze względu na miejsce umieszczenia warunku, zawsze wykona się ona przynajmniej raz.

### Przykład

W tym przykładzie pętla będzie iterawoć do momentu kiedy licznik `i` nie będzie większy od 5.

```js
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

## `while`

Pętla [`while`](/en-US/docs/Web/JavaScript/Reference/Statements/while) wykonuje się dopóki podany warunek zwraca true. Składnia jest następująca:

    while (warunek)
      instrukcja

Jeśli `warunek` zwróci false, pętla zostaje zatrzymana. W odróżniu od pętli `do ... while`, sprawdzania warunku mamy na początku. Oznacza to, że jeśli warunek na start zwraca name false, pętla nie wykona się ani razu.

W tym przypadku również możemy zgrupować instrukcje za pomocą (`{ ... }`).

### Przykład 1

Następująca pętla `while` iteruje tak długo aż n jest mniejszy od 3:

```js
n = 0;
x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

Z każdą iteracją, pętla inkrementuje wartość n i dodaje ją do x. W związku z tym x i n przyjmują następujące wartości:

- Po pierwszym przebiegu: n = 1 i x = 1
- Po drugim przebiegu: n = 2 i x = 3
- Po trzecim przebiegu: n = 3 i x = 6

Po wykonaniu trzeciego przebiegu, warunek n < 3 nie zwraca już dłużej true, więc pętla zostaje przerwana.

### Przykład 2

Unikaj nieskończonych pętli. Upewnij się, że podany warunek ma możliwośc zwrócenia false; w przeciwnym razie pętla nigdy nie zostanie przerwana, co w najgorszym razie spowoduje zawieszenie przeglądarki.

Poniższy przykład przedstawia pętla, która nigdy nie zostanie przerwana, ponieważ podany warunek zawsze zwróci true:

```js
while (true) {
  console.log("Hello, world");
}
```

## `label` statement

A [label](/pl/docs/Web/JavaScript/Reference/Statements/label) provides a statement with an identifier that lets you refer to it elsewhere in your program. For example, you can use a label to identify a loop, and then use the `break` or `continue` statements to indicate whether a program should interrupt the loop or continue its execution.

The syntax of the label statement looks like the following:

    label :
       statement

The value of `label` may be any JavaScript identifier that is not a reserved word. The `statement` that you identify with a label may be any statement.

### Example

In this example, the label `markLoop` identifies a `while` loop.

```js
markLoop:
while (theMark == true) {
   doSomething();
}
```

## `break` statement

Use the [`break`](/en-US/docs/Web/JavaScript/Reference/Statements/break) statement to terminate a loop, `switch`, or in conjunction with a label statement.

- When you use `break` without a label, it terminates the innermost enclosing `while`, `do-while`, `for`, or `switch` immediately and transfers control to the following statement.
- When you use `break` with a label, it terminates the specified labeled statement.

The syntax of the `break` statement looks like this:

1.  `break;`
2.  `break label;`

The first form of the syntax terminates the innermost enclosing loop or `switch`; the second form of the syntax terminates the specified enclosing label statement.

### **Example** **1**

The following example iterates through the elements in an array until it finds the index of an element whose value is `theValue`:

```js
for (i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}
```

### **Example 2:** Breaking to a label

```js
var x = 0;
var z = 0
labelCancelLoops: while (true) {
  console.log("Outer loops: " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops: " + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
```

## `continue` statement

The [`continue`](/en-US/docs/Web/JavaScript/Reference/Statements/continue) statement can be used to restart a `while`, `do-while`, `for`, or `label` statement.

- When you use `continue` without a label, it terminates the current iteration of the innermost enclosing `while`, `do-while`, or `for` statement and continues execution of the loop with the next iteration. In contrast to the `break` statement, `continue` does not terminate the execution of the loop entirely. In a `while` loop, it jumps back to the condition. In a `for` loop, it jumps to the `increment-expression`.
- When you use `continue` with a label, it applies to the looping statement identified with that label.

The syntax of the `continue` statement looks like the following:

1.  `continue;`
2.  `continue `_`label;`_

### Example 1

The following example shows a `while` loop with a `continue` statement that executes when the value of `i` is three. Thus, `n` takes on the values one, three, seven, and twelve.

```js
i = 0;
n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}
```

### Example 2

A statement labeled `checkiandj` contains a statement labeled `checkj`. If `continue` is encountered, the program terminates the current iteration of `checkj` and begins the next iteration. Each time `continue` is encountered, `checkj` reiterates until its condition returns `false`. When `false` is returned, the remainder of the `checkiandj` statement is completed, and `checkiandj` reiterates until its condition returns `false`. When `false` is returned, the program continues at the statement following `checkiandj`.

If `continue` had a label of `checkiandj`, the program would continue at the top of the `checkiandj` statement.

```js
checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) == 0) {
          continue checkj;
        }
        console.log(j + " is odd.");
      }
      console.log("i = " + i);
      console.log("j = " + j);
  }
```

## `for...in` statement

The [`for...in`](/pl/docs/Web/JavaScript/Reference/Statements/for...in) statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A `for...in` statement looks as follows:

    for (variable in object) {
      statements
    }

### Example

The following function takes as its argument an object and the object's name. It then iterates over all the object's properties and returns a string that lists the property names and their values.

```js
function dump_props(obj, obj_name) {
  var result = "";
  for (var i in obj) {
    result += obj_name + "." + i + " = " + obj[i] + "<br>";
  }
  result += "<hr>";
  return result;
}
```

For an object `car` with properties `make` and `model`, `result` would be:

```js
car.make = Ford
car.model = Mustang
```

### Arrays

Although it may be tempting to use this as a way to iterate over {{jsxref("Array")}} elements, the **for...in** statement will return the name of your user-defined properties in addition to the numeric indexes. Thus it is better to use a traditional [`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for) loop with a numeric index when iterating over arrays, because the **for...in** statement iterates over user-defined properties in addition to the array elements, if you modify the Array object, such as adding custom properties or methods.

## `for...of` statement

The [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) statement creates a loop Iterating over [iterable objects](/pl/docs/Web/JavaScript/Guide/iterable) (including {{jsxref("Array")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, [arguments](/pl/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments) object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

    for (variable of object) {
      statement
    }

The following example shows the difference between a `for...of` loop and a [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in "en-US/docs/JavaScript/Reference/Statements/for...in") loop. While `for...in` iterates over property names, `for...of` iterates over property values:

```js
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs "3", "5", "7"
}
```

{{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}
