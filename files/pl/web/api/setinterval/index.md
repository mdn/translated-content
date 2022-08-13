---
title: window.setInterval
slug: Web/API/setInterval
tags:
  - DOM
  - DOM_0
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/WindowOrWorkerGlobalScope/setInterval
original_slug: Web/API/WindowOrWorkerGlobalScope/setInterval
---
{{ ApiRef() }}

### Podsumowanie

Ustawia opóźnienie do cyklicznego wywoływania określonej funkcji.

### Składnia

    var idInterwalu = window.setInterval(funkcja, opóźnienie[, parametr1, parametr2, ...]);
    var idInterwalu = window.setInterval(kod, opóźnienie);

Parametry

- `idInterwalu` to identyfikator ustawianego interwału który można przekazać do funkcji [`window.clearInterval()`](/pl/DOM/window.clearInterval "pl/DOM/window.clearInterval").
- `funkcja` to funkcja, dla której ustawiane jest opóźnienie
- `kod `to ciąg znaków zawierający kod javascript do cyklicznego wykonania. Jest to składnia alternatywna, której wykorzystanie **nie jest zalecane** z tych samych powodów, co stosowanie [`eval()`](/en/JavaScript/Reference/Global_Objects/eval#Don%27t_use_eval! "en/JavaScript/Reference/Global Objects/eval#Don't use eval!").
- `opóźnienie` to liczba milisekund (tysięcznych części sekundy), co którą wywoływana będzie `funkcja `lub `kod`

Należy zwrócić uwagę, że przekazywanie dodatkowych parametrów w pierwszej składni nie działa w Internet Explorerze.

### Przykład

```js
idInterwalu = window.setInterval(animuj, 500);
```

W poniższym przykładzie, funkcja `zmienKolorTekstu()` będzie wykonywana co sekundę, dopóki użytkownik nie naciśnie przycisku Stop, co spowoduje wywołanie `clearInterval() `z parametrem `idInterwalu`.

```js
<html>
<head>
<title>przykład z wykorzystaniem setInterval/clearInterval</title>

<script type="text/javascript">
var idInterwalu;

function zmienKolor() {
  idInterwalu = setInterval(zmienKolorTekstu, 1000);
}

function zmienKolorTekstu() {
  var elem = document.getElementById("my_box");
  if (elem.style.color == 'red') {
    elem.style.color = 'blue';
  } else {
    elem.style.color = 'red';
  }
}

function zatrzymajZmianeKoloru() {
  clearInterval(idInterwalu);
}
</script>
</head>

<body onload="zmienKolor();">
<div id="my_box">
<p>Hello World</p>
</div>
<button onclick="zatrzymajZmianeKoloru();">Stop</button>
</body>
</html>
```

### Uwagi

Funkcja setInterval() służy do ustawienia opóźnienia dla cyklicznie wywoływanych funkcji, takich jak funkcje animacji.

Możliwe jest anulowanie wykonania fukcji poprzez wywołanie [`window.clearInterval()`](/pl/DOM/window.clearInterval "pl/DOM/window.clearInterval").

Jeżeli funkcja ma zostać wykonana *tylko raz* a nie być wykonywana cyklicznie to należy skorzystać z  [`window.setTimeout()`](/pl/DOM/window.setTimeout "pl/DOM/window.setTimeout").

### Specyfikacja

{{ DOM0() }}

{{ languages( { "en": "en/DOM/window\.setInterval", "fr": "fr/DOM/window\.setInterval", "ja": "ja/DOM/window\.setInterval", "pl": "pl/DOM/window\.setInterval" } ) }}
