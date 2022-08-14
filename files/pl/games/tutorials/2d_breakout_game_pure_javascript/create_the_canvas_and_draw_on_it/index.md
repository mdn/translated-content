---
title: Stwórz element Canvas i rysuj na nim
slug: >-
  Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
tags:
  - 2D
  - Canvas
  - Gry
  - HTML
  - JavaScript
  - Początkujący
  - Poradnik
translation_of: >-
  Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
original_slug: >-
  Games/Tutorials/2D_Breakout_game_pure_JavaScript/Stworz_element_Canvas_i_rysuj_na_nim
---
{{GamesSidebar}}{{IncludeSubnav("/en-US/docs/Games")}}

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/posusz_pilka")}}

To jest **1-wszy** z 10-ciu kroków poradnika [Gamedev Canvas tutorial](/pl/docs/Games/Workflows/Breakout_game_from_scratch). Możesz zobaczyć kod źródłowy, który otrzymamy po ukończeniu tej lekcji, na [Gamedev-Canvas-workshop/lesson1.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html).

Zanim zaczniemy pisać funkcjonalność gry, musimy stworzyć podstawową strukturę, w której będziemy renderować grę. Strukturę utworzymy przy wykorzystaniu języka HTML oraz elementu {{htmlelement("canvas")}}.

## Struktura HTML gry

Struktura dokumentu HTML jest dosyć prosta ze względu na fakt, że całość gry będzie renderowana w elemencie {{htmlelement("canvas")}}. Korzystając ze swojego ulubionego edytora utwórz nowy dokument HTML i zapisz go jako `index.html`, oraz dodaj do niego poniższy fragment kodu:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Gamedev Canvas Workshop</title>
    <style>
    	* { padding: 0; margin: 0; }
    	canvas { background: #eee; display: block; margin: 0 auto; }
    </style>
</head>
<body>

<canvas id="myCanvas" width="480" height="320"></canvas>

<script>
	// Tutaj będzie kod JavaScript
</script>

</body>
</html>
```

Zdefiniowaliśmy `charset` , {{htmlelement("title")}} oraz podstawowy styl CSS w elemencie header. Body zawiera elementy {{htmlelement("canvas")}} oraz {{htmlelement("script")}} — w pierwszym będziemy renderowali naszą grę, natomiast kod JavaScript który będzię tę grę kontrolował znajdzie w drugim. Element {{htmlelement("canvas")}} ma ustawiony parametr `id` z wartością `myCanvas` abyśmy mogli w prosty sposób pobrać odniesienie do niego, a jego wymiary ustawiliśmy na 480 pikseli szerokości oraz 360 pikseli wysokości. Cały kod, który napiszemy w tym poradniku, będzie umieszczony pomiędzy otwierającym tagiem `<script>` a zamykającym `</script>`

## Podstawy Canvas

Aby faktycznie móc renderować grafikę w elemencie {{htmlelement("canvas")}}, najpierw musimy pobrać do niego referencję w JavaScript. Dodaj następujący kod tuż pod tagiem otwierającym `<script>`.

```js
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
```

Najpierw przypisujemy referencję do elementu {{htmlelement("canvas")}} do zmiennej `canvas` . Następnie tworzymy zmienną `ctx` do przechowywania kontekstu renderowania 2D — czyli własciwego narzędzia, którego użyjemy do rysowania na elemencie Canvas.

Zobaczmy przykładowy fragment kodu który narysuje nam czerwony kwadrat. Dodaj poniższy kod pod poprzednimi liniami JavaScript, następnie otwórz swój plik `index.html` w przeglądarce żeby to sprawdzić.

```js
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
```

Wszystkie instrukcje znajdują się pomiędzy metodami {{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}} oraz {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}}. Definiujemy prostokąt używając {{domxref("CanvasRenderingContext2D.rect()","rect()")}}: gdzie pierwsze dwie wartości określają współrzędne położenia prostokąta od górnego lewego narożnika, natomiast dwie następne określają jego wysokość i szerokość. W naszym przypadku prostokąt będzie narysowany 20 pikseli od lewej krawędzi oraz 40 pikseli od górnej krawędzi, oraz będzie miał wymiary 50 pikseli szerokości oraz 50 pikseli wysokości, czyli uzyskamy idealny kwadrat. Właściwość {{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}} przechowuje kolor, który zostanie użyty przez metodę {{domxref("CanvasRenderingContext2D.fill()","fill()")}} aby narysować kwadrat, w naszym przypadku, czerwony.

Nie jesteśmy ograniczeni tylko do prostokątów  — poniższy fragment kodu narysuje nam zielone koło. Spróbuj dodać go do poprzedniego kodu JavaScript, następnie zapisz plik i odśwież przeglądarkę:

```js
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

Jak widzisz ponownie użyliśmy metod  {{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}} oraz {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}}. Pomiędzy nimi, najważniejszą częścią powyższego kodu jest metoda {{domxref("CanvasRenderingContext2D.arc()","arc()")}}. Przyjmuje ona sześć parametrów:

- Współrzędne `x` oraz `y` środka łuku
- średnica łuku
- kąt początkowy oraz kąt końcowy (kąt rozpoczęcia i zakończenia rysowania podany w radianach)
- kierunek rysowania (domyślna wartość `false` aby rysować zgodnie z ruchem wskazówek, lub `true` aby rysować przeciwnie do wskazówek zegara.) This last parameter is optional.

Właściwość {{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}} wygląda inaczej, niż poprzednio. To dlatego, że tak, jak w CSS, kolor może być określony w postaci wartości szeznastkowej, słowa kluczowego określającego kolor, funkcji  `rgba()`, lub innych z dostępnych metod przypisywania koloru.

Zamiast używać metody {{domxref("CanvasRenderingContext2D.fill()","fill()")}} króra wypełnia całe figury kolorem, możemy użyć {{domxref("CanvasRenderingContext2D.stroke()","stroke()")}} aby tylko pokolorować zewnętrzny obrys. Spróbuj dodać ten fragment do swojego kodu JavaScript:

```js
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
```

Powyższy kod narysuje pusty prostokąd z niebieskim obrysem. Dzięki wykorzystaniu kanału alpha w funkcji  `rgba()`, niebieski kolor jest półprzezroczysty.

## Porównaj swój kod

Poniżej znajdziesz pełny kod źródłowy pierwszej lekcji z podglądem na żywo:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/x62h15e2/","","395")}}

> **Note:** **Ćwiczenie**: spróbuj pozmieniać wymiary i kolory poszczególnych figur.

## Następne kroki

Mamy już skonfigurowany podstawową strukturę HTML oraz poznaliśmy trochę podstaw o elemencie canvas, przejdźmy teraz do rozdziału drugiego i dowiedzmy się w jaki sposób [Poruszyć piłkę w naszej grze](/pl/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/posusz_pilka).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/posusz_pilka")}}
