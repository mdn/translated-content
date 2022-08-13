---
title: Odbijanie od ścian
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
tags:
  - Animacja
  - Canvas
  - Grafika
  - Gry
  - Kurs
  - Początkujący
  - Przykład
  - kolizja
  - wykrywanie
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
original_slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/odbijanie_od_scian
---
{{GamesSidebar}}{{IncludeSubnav("/en-US/docs/Games")}}

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/posusz_pilka", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}

To jest **3-ci** z 10-ciu kroków poradnika [Gra Breakout 2D w czystym JavaScript](/pl/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Możesz zobaczyć kod źródłowy, który otrzymamy po ukończeniu tej lekcji, na [Gamedev-Canvas-workshop/lesson3.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson03.html).

Widzimy naszą piłkę w ruchu, jednak szybko znika ona poza ekranem gry zanim zdążymy się nią nacieszyć! Aby temu zaradzić, zaimplementujemy bardzo proste wykrywanie kolizji (która szczegółowo zostanie wyjaśniona [później](/pl/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/wykrywanie_kolizji)) aby sprawić, żeby piłka obijałą się od każdej z czterech ścian canvasa.

## Proste wykrywanie kolizji

Aby wykryć kolizję, sprawdzimy, czy nasza piłka dotyka (koliduje) ze ścianą, a jeżeli tak, odpowiednio zmienimy jej kierunek ruchu.

Aby ułatwić sobie obliczenia, zdefiniujmy zmienną o nazwie `ballRadius` która będzie przechowywała promień rysowanego koła i będzie używana do obliczeń. Dodaj ten fragment do swojego kodu gdzieś poniżej deklaracji poprzednich zmiennych:

```js
var ballRadius = 10;
```

Teraz zaktualizujmy linię w funkcji `drawBall()`, odpowiedzialną za rysowanie naszej piłki, na taką:

```js
ctx.arc(x, y, ballRadius, 0, Math.PI*2);
```

### Odbijanie od góry i od dołu

Są cztery ściany od których piłka może się odbijać — na początek skupmy się na górnej. W każdej ramce musimy sprawdzić, czy piłka dotyka górnej krawędzi canvasa — jeżeli tak, zmienimy jej ruch tak, aby zaczęła poruszać się w przeciwnym kierunku i przez to pozostała w widocznych granicach. Pamiętając, iż system współrzędnych zaczyna się od górnego lewego narożnika, możemy zastosować takie rozwiązanie:

```js
if(y + dy < 0) {
    dy = -dy;
}
```

Jeżeli wartość `y` pozycji piłki jest mniejsza od zera, zmień kierunek ruchu na osi `y` ustawiając taką samą wartość, jednak z odwróconym znakiem. Jeżeli piłka porusza się w górę z prędkością 2 pikseli na ramkę, teraz będzie będzie poruszała się "do góry", ale z prędkością  -2 pikseli, co właściwie będzie ruchem do dołu z prędkością 2 pikseli na ramkę.

Powyższy kod ma rozwiąże problem odbicia od górnej krawędzi, więc teraz pomyślmy o krawędzi dolnej:

```js
if(y + dy > canvas.height) {
    dy = -dy;
}
```

Jeżeli pozycja `y` piłki jest większa od wysokości canvasa, (pamiętaj, że pozycję `y` liczymy od góry, więc krawędź górna znajduje się na pozycji 0, natomiast dolna krawędź na pozycji  320 pikseli, czyli wysokość canvasa), wtedy odbijmy ją od krawędzi zamieniając kierunek ruchu w osi `y` jak zrobiliśmy to poprzednio.

Możemy połączyć te dwie instrukcje w jedną, aby zaoszczędzić na szczegółowości kodu:

```js
if(y + dy > canvas.height || y + dy < 0) {
    dy = -dy;
}
```

Jeżeli którykolwiek z warunków będzie równy `true`, odwróć kierunek ruchu piłki.

### Odbijanie od lewej i prawej

Mamy już obsługę odbicia od krawędzi górnej i dolnej, więc pomyślmy teraz o krawędziach bocznych. Właściwie kod jest bardzo podobny, więc wszystko co musisz zrobić to powtórzyć go dla `x` zamiast `y`:

```js
if(x + dx > canvas.width || x + dx < 0) {
    dx = -dx;
}

if(y + dy > canvas.height || y + dy < 0) {
    dy = -dy;
}
```

W tym momencie powinieneś wprowadzić powyższy blok kodu do funkcji `draw()`, tuż przed zamykającym nawiasem klamrowym.

### Piłka znika w ścianie!

Przetestuj swój kod na tym etapie, powinieneś być pod wrażeniem — mamy już piłkę, która odbija się od wszystkich krawędzi canvasa! Mamy jednak kolejny problem  — kiedy piłka uderza w ścianę, delikatnie się w niej "zatapia" przed zmianą kierunku:

![](https://mdn.mozillademos.org/files/10432/ball-in-wall.png)

To dlatego, że liczymy punkt zderzenia ściany oraz środka piłki, podczas, gdy powinniśmy to robić dla jej obwodu. Piłka powinna odbić się w momencie, kiedy tylko dotknie ściany, a nie kiedy jest w połowie "w ścianie", poprawmy zatem trochę nasze warunki odbicia. Zaktualizuj swój ostatnio dodany kod na ten:

```js
if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
}
if(y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
}
```

Kiedy odległość pomiędzy środkiem piłki a krawędzią jest dokładnie taka sama, jak promień piłki, zmień kierunek ruchu. Odjęcie wartości średnicy od jednej krawędzi i dodawanie do drugiej da na wrażenie właściwego wykrycia kolizji — piłka odbija się od ścian tak, jak powinna.

## Porównaj swój kod

Sprawdźmy ostateczny kod dla tej części kursu z tym, co otrzymaliśmy oraz pobawmy się trochę:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/redj37dc/","","395")}}

> **Note:** **Ćwiczenie**: spróbuj zmienić kolor piłki na losowy za każdym razem, kiedy ta uderzy w ścianę.

## Następne kroki

Dotarliśmy do momentu, kiedy nasza piłka zarówno porusza się oraz pozostaje na planszy. W czwartym rozdziale nauczymy się w jaki sposób zaimplementować i kontrolować paletkę — zobacz [Paletka i sterowanie z klawiatury](/pl/docs/Games/Workflows/Breakout_game_from_scratch/Paddle_and_keyboard_controls).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/posusz_pilka", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}
