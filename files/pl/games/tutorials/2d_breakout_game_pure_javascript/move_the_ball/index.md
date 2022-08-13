---
title: Porusz piłką
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
tags:
  - 2D
  - Canvas
  - Gry
  - JavaScript
  - Początkujący
  - Poradnik
  - Pętla
  - ruch
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
original_slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/posusz_pilka
---
{{GamesSidebar}}{{IncludeSubnav("/en-US/docs/Games")}}

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Stworz_element_Canvas_i_rysuj_na_nim", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/odbijanie_od_scian")}}

To jest **2-gi** z 10-ciu kroków poradnika [Gra Breakout 2D w czystym JavaScript](/pl/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Możesz zobaczyć kod źródłowy, który otrzymamy po ukończeniu tej lekcji, na [Gamedev-Canvas-workshop/lesson2.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson02.html).

Z poprzedniej części dowiedziałeś się w jaki sposób narysować piłkę, a teraz ją poruszymy. Z technicznego punktu widzenia, będziemy malować piłkę na ekranie, czyścić ten ekran i malować ją ponownie w nieco innej pozycji w każdej klatce aby uzyskać wrażenie ruchu — dokładnie tak, jak uzyskujemy ruch w filmach.

## Definiowanie pętli rysowania

Aby stale aktualizować rysunek w każdej klatce, musimy zdefiniować funkcję rysowania, która będzie działała w kółko, za każdym razem z różnym zestawem wartości zmiennych aby zmieniać pozycję sprite'a, itd.  Możesz uruchomiać funkcję w kółko używając wbudowanych w JavaScript funkcji takich, jak  {{domxref("WindowTimers.setInterval()", "setInterval()")}} lub {{domxref("window.requestAnimationFrame()", "requestAnimationFrame()")}}.

Usuń cały poprzedni kod JavaScript który miałeś dotychczas w swoim pliku HTML z wyjątkiem pierwszych dwóch linijek oraz dodaj pod nimi poniższy kod. Funkcja `draw()` będzie wykonywana w środku `setInterval` co 10 milisekund:

```js
function draw() {
    // kod rysowania
}
setInterval(draw, 10);
```

Dzięki wykorzystaniu `setInterval`, funkcja `draw()` będzie wywoływana co 10 milisekund bez przerwy, lub do czasu, kiedy ją zatrzymamy. Narysujmy więc teraz piłkę — dodaj ten kod do swojej funkcji `draw()`:

```js
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI*2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
```

Wypróbuj swój kod — piłka powinna być przerysowywana przy każdej klatce.

## Poruszmy piłkę

W tym momencie nie będziesz w stanie zauważyć, że piłka stale jest przerysowywana, jako że nie zmienia swojej pozycji. Zmieńmy więc to. Po pierwsze, zamiast wpisanej na stałe pozycji (50,50), ustalmy punkt początkowy w dolnej środkowej części Canvas za pomocą zmiennych o nazwach `x` i `y`, a następnie użyjemy tych zmiennych do zdefiniowania pozycji na której będzie rysowana nasza piłka.

Najpierw dodaj poniższe dwie linie kodu nad twoją funkcją `draw()` aby zdefiniować `x` i `y`:

```js
var x = canvas.width/2;
var y = canvas.height-30;
```

Następnie zmień swoją funkcję `draw()` tak, aby używała zmiennych `x` i `y` w metodzie {{domxref("CanvasRenderingContext2D.arc()","arc()")}} tak, jak zaznaczyliśmy to w poniższej linijce:

```js
function draw() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
```

Teraz czas na najważniejszą część: po narysowaniu każdej ramki, będziemy dodawać niewielkie wartości do zmiennych `x` oraz `y` aby wyglądało na to, że nasza piłka się porusza. Zdefiniujmy te małe wartości jako `dx` i `dy` oraz przypiszmy do nich wartości kolejno 2 oraz -2. Dodaj ten kod poniżej definicji zmiennych x i y:

```js
var dx = 2;
var dy = -2;
```

Ostatnią rzeczą do zrobienia jest zaktualizowanie `x` i `y` o wartości zmiennych `dx` i `dy` w każdej ramce, dzięki czemu piłka będzie rysowana w nowej pozycji przy każdym odświeżeniu. Dodaj dwie, poniżej zaznaczone, linie do swojej funkcji `draw()`:

```js
function draw() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
}
```

Zapisz ponownie kod i wypróbuj go w przeglądarce. Działa ok, jednak zdaje się, że piłka zostawia za sobą ślad:

![](https://mdn.mozillademos.org/files/10430/ball-trail.png)

## Czyszczenie canvas przed każdą ramką

Piłka pozostawia ślad, ponieważ za każdym razem rysujemy nowe koło jednak bez usunięcia poprzedniego. Nie martw się, ponieważ dostępna jest metoda do czyszczenia całej zawartości canvas: {{domxref("CanvasRenderingContext2D.clearRect()","clearRect()")}}. Przekazujemy do niej cztery parametry: pozycję x i y górnego lewego narożnika oraz pozycję x i y dolnego prawego narożnika prostokąta. Cała powierzchnia pokryta przez ten prostokąt zostanie wyczyszczona ze wszystkich wcześniej namalowanych tam elementów.

Dodaj podświetloną linie do funkcji `draw()`:

```js
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
}
```

Zapisz kod i uruchom go jeszcze raz. Tym razem zobaczysz poruszają się piłkę bez żadnego śladu. Co 10 millisekund canvas jest czyszczony, niebieskie koło (nasza piłka) jest rysowana na podanych współrzędnych `x` i `y` po czym ich wartości są aktualizowane.

## Oczyszczanie naszego kodu

Do naszej funkcji `draw()` będziemy dodawać coraz więcej i więcej poleceń w następnych krokach, więc dobrze jest utrzymać ją jak najbardziej przejrzystą i czytelną. Zacznijmy więc od przeniesienia kodu odpowiedzialnego za rysowanie piłki do osobnej funkcji.

Zastąp naszą funkcję `draw()` poniższymi dwiema funkcjami:

```js
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}
```

## Porównaj swój kod

Możesz porównać kod z tego etapu ze swoim kodem w poniższym podglądem na żywo, oraz spróbować pobawić się nim, aby lepiej zrozumieć jak to działa:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/3x5foxb1/","","395")}}

Ćwiczenie: spróbuj zmienić prędkość i kierunek pooruszania się piłki.

## Następne kroki

Narysowaliśmy naszą piłkę i nadaliśmy jej ruch, jednak znika ona poza krawędzią canvasa. W rozdziale trzecim odkryjemy w jaki sposób spraić, aby [odbijała się od ścian](/pl/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/odbijanie_od_scian).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Stworz_element_Canvas_i_rysuj_na_nim", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/odbijanie_od_scian")}}
