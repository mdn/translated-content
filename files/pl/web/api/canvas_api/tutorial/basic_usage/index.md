---
title: Podstawowe użycie elementu canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
tags:
  - Canvas
  - Grafika
  - HTML
  - Płótno
  - Sredniozaawansowany
  - Tutorial
translation_of: Web/API/Canvas_API/Tutorial/Basic_usage
---
{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

Zacznijmy od przyjrzenia się znacznikowi {{HTMLElement("canvas")}} należącego do zbioru elementów {{Glossary("HTML")}}. W tym rozdziale nauczysz się jak ustanowić dwuwymiarowy kontekst płótna, oraz narysujesz swój pierwszy rysunek.

## Element `<canvas>`

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

> **Note:** **Uwaga:** W tym tutorialu będziemy używać słowa **canvas** zamiennie ze słowem **płótno**.

Na pierwszy rzut oka {{HTMLElement("canvas")}} wygląda jak element {{HTMLElement("img")}}, z tą różnicą, że nie posiada on atrybutów `src` oraz `alt`. W swojej specyfice element `<canvas>` posiada jedynie dwa atrybuty, {{htmlattrxref("width", "canvas")}} oraz {{htmlattrxref("height", "canvas")}}. Nie są one wymagane oraz mogą być ustanowione za pomocą [właściwości](/pl/docs/Web/API/HTMLCanvasElement) {{Glossary("DOM")}}. Jeśli wartości atrybutów `width` oraz `height` nie zostaną określone, zostaną użyte domyślne: szerokość - **300 pikseli**, wysokość - **150 pikseli**. Za pomocą {{Glossary("CSS")}} możemy narzucić rozmiar płótna, ale podczas renderowania dokumentu, rysunek zostanie dopasowany do domyślnej wielkości: jeśli wartości określone za pomocą CSS nie będą proporcjonalne z wartościami domyślnymi, rysunek zostanie zniekształcony.

> **Note:** **Uwaga:** Jeśli rysunek wydaje się zniekształcony, spróbuj określić atrybuty `width` oraz `height` bezpośrednio wewnątrz znacznika `<canvas>`, a nie za pomocą CSS.

[`id`](/pl/docs/Web/HTML/Global_attributes/id) jest [globalnym atrybutem HTML](/pl/docs/Web/HTML/Global_attributes) i można go stosować z każdym elementem HTML (tak samo jak np. [`class`](/en-US/docs/Web/HTML/Global_attributes/class)). Warto go używać, aby w ten sposób mieć dostęp do elementu z poziomy skryptu.

Element `<canvas>` można stylizować za pomocą CSS tak, jak każdy obraz ({{cssxref("margin")}}, {{cssxref("border")}}, {{cssxref("background")}}…). Z tym, że żadna z reguł CSS nie wpłynie na zawartość płótna. Zobaczymy to w [późniejszym rozdziale](/pl/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) tego tutorialu. Jeśli nie określimy inaczej, tło płótna będzie w pełni przezroczyste.

### Treść zastępcza

Inaczej niż w przypadku {{HTMLElement("img")}}, w elemencie `<canvas>` tak samo jak w {{HTMLElement("video")}}, {{HTMLElement("audio")}}, czy {{HTMLElement("picture")}} łatwo jest określić to, co będzie wyświetlane w starszych przeglądarkach albo tych, które jeszcze nie obsługują tego elementu, jak np. Internet Explorer poprzedzający wersję 9 oraz przeglądarki tekstowe.

Aby zapewnić treść zastępczą wystarczy zagnieździć ją wewnątrz elementu `<canvas> ... </canvas>`. Przeglądarki nieobsługujące tego elementu, zignorują rysunek i zamiast tego wyświetlą to, co zagnieździliśmy wewnątrz tegoż elementu. Natomiast przeglądarki obsługujące element `<canvas>` wygenerują jego zawartość ignorując przy tym wszystko, co znajduje się wewnątrz tego elementu.

> **Note:** **Uwaga:** Gdy mówimy o tym, co znajduje się **w znaczniku** `<canvas>`, mamy na myśli jego atrybuty czyli to, co znajduje się pomiędzy znakami `<` oraz `>` (np. `<canvas class="nazwa-klasy">`. Natomiast gdy mówimy o tym, co znajduje się **wewnątrz elementu** `<canvas>`, mamy na myśli wszystko, co znajduje się pomiędzy znacznikiem otwierającym `<canvas>`, a znacznikiem zamykającym `</canvas>` (np. `<canvas><img src="/canvas.jpg"></canvas>`). W tym drugim przypadku mówimy o *zagnieżdżaniu*   jednego elementu w drugim.

Treść zastępczą może stanowić opis, tego co znajduje się na płótnie lub statyczny obraz wygenerowanej zawartości. Oto przykład:

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt=""/>
</canvas>
```

Umieszczanie tekstu w stylu: _Twoja przeglądarka nie obsługuje elementu canvas_, nie pomoże czytelnikowi w zrozumieniu treści. Zapewnienie treści zastępczej uczyni [element canvas bardziej dostępnym](/pl/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility).

### Wymagany znacznik końca `</canvas>`

Z uwagi na sposób w jaki tworzymy treść zastępczą, znacznikowi `<canvas>` **musi towarzyszyć** znacznik zamykający `</canvas>`.  Gdybyśmy go nie wprowadzili, przeglądarka zinterpretowałaby wszystko, co znajduje się po znaczniku otwierającym `<canvas>` jako treść zastępczą.

Jeśli nie decydujemy się, aby zapewnić treść zastępczą, w dalszym ciągu **musimy** użyć znaczników początkowego i końcowego `<canvas id="foo" ...></canvas>`, z tą różnicą, że nie będziemy umieszczać niczego wewnątrz tego elementu. Jest to prawidłowy zapis dla przeglądarki, która obsługuje element `canvas`. Przeglądarki, które go nie obsługują, niczego w tym miejscu nie wyświetlą.

## Kontekst renderingu

Element {{HTMLElement("canvas")}} tworzy powierzchnię rysunkową o stałym rozmiarze zapewniając jeden lub więcej kontekstów renderingu, które są używane do tworzenia i manipulowania wyświetlaną zawartością. W tym tutorialu skupimy się na kontekście dwuwymiarowym (2D). Inne konteksty mogą wykorzystywać odmienne sposoby renderowania, np [WebGL](/pl/docs/Web/WebGL) wykorzystuje kontekst trójwymiarowy (3D) bazujący na [OpenGL ES](https://pl.wikipedia.org/wiki/OpenGL_ES).

Początkowo płótno jest puste, pozbawione tła. Aby coś na nim wyświetlić, skrypt musi posiadać dostęp do kontekstu renderowania a następnie musi coś w nim narysować. Element {{HTMLElement("canvas")}} posiada metodę {{domxref("HTMLCanvasElement.getContext", "getContext()")}} niezbędną, aby uzyskać dostęp do nowego kontekstu renderowania oraz jego funcji rysujących. Metoda `getContext()` wymaga podania jednego argumentu, który określa typ kontekstu. Dla rysunków dwuwymiarowych, o których mowa w tym tutorialu, argument metody {{domxref("CanvasRenderingContext2D")}} wymaga podania wartości tekstowej "2d".

```js
var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
```

W pierwszej lini program uzyskuje dostęp do węzła DOM reprezentującego element {{HTMLElement("canvas")}} za pomocą metody {{domxref("document.getElementById()")}}. Posiadając dostęp do węzła DOM, możemy następnie uzyskać dostęp do kontekstu renderowania rysunku za pomocą metody `getContext()`.

## Test zgodności

Treść zastępcza jest wyświetlana w przeglądarce, która nie obsługuje elementu {{HTMLElement("canvas")}}. Również z poziomu skryptu możemy sprawdzić czy przeglądarka wspiera znacznik `canvas`. W tym celu posługujemy się metodą `getContext()`. Oto przykład:

```js
var canvas = document.getElementById('tutorial');

if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

Przeglądarka, która nie wspiera znacznika `canvas`, nie rozpoznaje również metody `getContext()`. W takim wypadku wyrażenie `canvas.getContext` zwróci logiczną wartość `false`.

##  Szkielet szablonu

Poniżej znajduje się szablon dokumentu HTML, którego będziemy używać jako podstawy w kolejnych przykładach ilustrujących `canvas`.

> **Note:** **Uwaga:** podczas produkcji stron internetowych warto umieszczać skrypty oraz arkusze stylów w osobnych plikach dla lepszej organizacji kodu. W tym tutorialu przykładowe skrypty będziemy jednak osadzać wewnątrz kodu HTML, tak aby cały przykład był zwięzły oraz w pełni funcjonalny.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Canvas tutorial</title>
    <script type="text/javascript">
      function draw() {
        var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
        }
      }
    </script>
    <style type="text/css">
      canvas { border: 1px solid black; }
    </style>
  </head>
  <body onload="draw();">
    <canvas id="tutorial" width="150" height="150"></canvas>
  </body>
</html>
```

Skrypt zawiera funckcję `draw()`, która jest wykonywana po załadowaniu strony; uczyniliśmy to za pomocą obserwatora zdarzenia {{event("load")}} dokumentu HTML. Funkcja taka może być również wywołana za pomocą metody {{domxref("WindowTimers.setTimeout", "window.setTimeout()")}}, {{domxref("WindowTimers.setInterval", "window.setInterval()")}} lub jeszcze innej, która obsługuje zdarzenia, po tym jak strona zostanie załadowana.

Oto jak szablon wygląda w akcji. Jak widać, początkowo jest on pusty.

{{EmbedLiveSample("A_skeleton_template", 160, 160)}}

## Prosty przykład

Na razie spójrzmy na poniższy przykład, zawierający rysunek dwóch przecinających się kwadratów, z których jeden jest przezroczysty. Szczegóły działania poszczególnych elementów kodu poznamy w dalszej części tego tutorialu.

```html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8"/>
  <script type="application/javascript">
    function draw() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
      }
    }
  </script>
 </head>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

Przykład wygląda następująco:

{{EmbedLiveSample("A_simple_example", 160, 160, "https://mdn.mozillademos.org/files/228/canvas_ex1.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}
