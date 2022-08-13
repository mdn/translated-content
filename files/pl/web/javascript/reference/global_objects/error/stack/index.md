---
title: Error.prototype.stack
slug: Web/JavaScript/Reference/Global_Objects/Error/Stack
tags:
  - JavaScript
  - Prototyp
  - Referencja
  - Własność
  - niestandardowe
translation_of: Web/JavaScript/Reference/Global_Objects/Error/Stack
original_slug: Web/JavaScript/Referencje/Obiekty/Error/Stack
---
{{JSRef}} {{non-standard_header}}

Niestandardowa własność **`stack`** obiektów {{jsxref("Error")}} podaje ścieżkę wywołań funkcji – które z nich były wywołane, w jakiej kolejności, z której linii i pliku, z jakimi argumentami. Stos wywołań zaczyna się od ostatnich wywołań, przez wcześniejsze, prowadząc do pierwotnego wywołania z zakresu globalnego.

## Opis

Każdy krok będzie znajdował się w oddzielnej linii, zawierając w pierwszej części nazwę funkcji (jeśli nie jest to wywołanie z zakresu globalnego), następnie znak _at_ (`@`), lokalizację pliku (z wyjątkiem sytuacji, w których funkcja jest konstruktorem zgłaszanego błędu), dwukropek oraz numer linii (jeśli zdefiniowana jest lokalizacja pliku). (Zauważ, że obiekt {{jsxref("Error")}} także posiada własności `fileName`, `lineNumber` i `columnNumber`, które można odczytać z danego błędu, jednak jedynie błędu, a nie jego stosu wywołań).

Należy podkreślić, że opisany wyżej format jest formatem przeglądarki Firefox – nie ma standardu formatowania, jednakże Safari 6+ i Opera 12- używają bardzo podobnego formatu. Przeglądarki używające silnika JavaScript V8 (takie jak Chrome, Opera 15+, Android Browser) oraz IE10+, używają natomiast innego formatu (zobacz [archiwalną dokumentację MSDN dla error.stack](https://web.archive.org/web/20140210004225/http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx)).

**Wartości argumentów w stosie:** w wersjach wcześniejszych niż Firefox 14, po nazwie funkcji następowały wartości argumentów przekonwertowane do łańcucha znaków (_string_) w nawiasach, przed znakiem _at_ (`@`). Podczas gdy obiekt (lub tablica itp.) pojawia się w przekonwertowanej formie `"[object Object]"` i nie może być przekonwertowany z powrotem do właściwych obiektów, wartości skalarne mogą być odzyskane (choć być może — w Firefoksie 14 nadal jest to możliwe — łatwiej będzie użyć `arguments.callee.caller.arguments`, tak jak nazwa funkcji może być uzyskana przez  `arguments.callee.caller.name`). `"undefined"` jest wylistowany jako `"(void 0)"`. Zauważ, że jeśli argumenty typu _string_ były przekazane z wartościami takimi jak `"@"`, `"("`, `")"` (lub znaki te występują w nazwach plików), nie możesz polegać po prostu na podzieleniu linii na części składowe – dlatego w Firefoksie 14 i nowszych jest to mniejszy problem**.**

Różne przeglądarki ustawiają tę wartość w różnych momentach. Przykładowo, Firefox ustawia ją podczas tworzenia obiektu {{jsxref("Error")}}, natomiast PhantomJS ustawia ją jedynie podczas wyrzucania {{jsxref("Error")}} – i [archiwalna dokumentacja MSDN](https://web.archive.org/web/20140210004225/http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx) również wydaje się zgadzać z implementacją PhantomJS.

## Przykłady

### Użycie własności `stack`

Poniższy dokument HTML prezentuje użycie własności `stack`.

```html
<!DOCTYPE HTML>
<meta charset="UTF-8">
<title>Stack Trace Example</title>
<body>
<script>
function trace() {
  try {
    throw new Error('myError');
  }
  catch(e) {
    alert(e.stack);
  }
}
function b() {
  trace();
}
function a() {
  b(3, 4, '\n\n', undefined, {});
}
a('first call, firstarg');
</script>
```

Zakładając, że powyższy dokument zapisany jest pod adresem `C:\example.html` w systemie plików Windows, kod utworzy okno typu _alert_ z następującą treścią:

W przeglądarce Firefox 30 i późniejszych wersjach, wraz z numerem kolumny:

    trace@file:///C:/example.html:9:17
    b@file:///C:/example.html:16:13
    a@file:///C:/example.html:19:13
    @file:///C:/example.html:21:9

Od Firefoxa 14 do Firefoxa 29:

    trace@file:///C:/example.html:9
    b@file:///C:/example.html:16
    a@file:///C:/example.html:19
    @file:///C:/example.html:21

Firefox 13 i wcześniejsze zwróci zamiast tego następujący tekst:

    Error("myError")@:0
    trace()@file:///C:/example.html:9
    b(3,4,"\n\n",(void 0),[object Object])@file:///C:/example.html:16
    a("first call, firstarg")@file:///C:/example.html:19
    @file:///C:/example.html:21

### Stos ewaluowanego kodu

Od Firefoxa 30, stos błędu w wywołaniach `Function()` i `eval()` tworzy stos z bardziej szczegółową informacją o linii i kolumnie wewnątrz tych wywołań. Wywołania funkcji są wskazywane przez `"> Function"`, a eval przez `"> eval"`.

```js
try {
  new Function('throw new Error()')();
} catch (e) {
  console.log(e.stack);
}

// anonymous@file:///C:/example.html line 7 > Function:1:1
// @file:///C:/example.html:7:6


try {
  eval("eval('FAIL')");
} catch (x) {
  console.log(x.stack);
}

// @file:///C:/example.html line 7 > eval line 1 > eval:1:1
// @file:///C:/example.html line 7 > eval:1:1
// @file:///C:/example.html:7:6
```

Możesz także użyć dyrektywy `//# sourceURL` do nazwania źródła `eval`. Zobacz też źródła [Debug eval](/pl/docs/Tools/Debugger/How_to/Debug_eval_sources) w dokumentacji [Debuggera](/pl/docs/Tools/Debugger) oraz w [tym artykule](http://fitzgeraldnick.com/weblog/59/).

## Specyfikacje

Nie jest częścią żadnego standardu.

## Wsparcie przeglądarek

{{Compat("javascript.builtins.Error.stack")}}

## Zobacz też

- [Components.stack](/pl/docs/Components.stack)
- Projekty zewnetrzne: [TraceKit](https://github.com/csnover/TraceKit/) i [javascript-stacktrace](https://github.com/eriwen/javascript-stacktrace)
- MSDN: [archiwalna dokumentacja error.stack](https://web.archive.org/web/20140210004225/http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx)
- [Przegląd API stosu wywołań w JavaScript V8](https://github.com/v8/v8/wiki/Stack%20Trace%20API)
