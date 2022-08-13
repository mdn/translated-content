---
title: Optymalizacja elementu canvas
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
tags:
  - Canvas
  - Grafika
  - HTML
  - HTML5
  - Poradnik
  - Tutorial
  - zaawansowany
translation_of: Web/API/Canvas_API/Tutorial/Optimizing_canvas
original_slug: Web/API/Canvas_API/Tutorial/Optymalizacja_canvas
---
{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}

{{HTMLElement("canvas")}}  to jeden z najczęściej używanych standardów do renderowania grafiki 2D w przeglądarce. Zazwyczaj stosuje się go do tworzenia gier i skomplikowanych wizualizacji, które nierzadko starają się wycinąć z „płótna" maksimum jego możliwości. Niestety, równie często prowadzi to do spadków wydajności. W tym artykule przygotowaliśmy dla was kilka wskazówek jak zoptymalizować element canvas, aby poprawić działanie waszych stron i aplikacji.

## Wskazówki dot. wydajności

Poniżej znajdziecie kilka rozwiązań, które poprawią wydajność elementu canvas:

### Pre-renderuj proste lub powtażające się obiekty na dodatkowym canvasie poza ekranem

Jeśli w każdej klatce rysujesz wiele podobnych obiektów, stwórz niewyświetlany, roboczy canvas, narysuj na nim swój element raz (lub za każdym razem gdy ulega zmianom), a następnie wykorzystaj render w głównym canvasie.

```js
obiekt.canvasRoboczy = document.createElement('canvas');
obiekt.canvasRoboczy.width = obiekt.width;
obiekt.canvasRoboczy.height = obiekt.height;
obiekt.canvasRoboczy = obiekt.canvasRoboczy.getContext('2d');

obiekt.render(obiekt.offscreenContext);
```

### Staraj się używać liczb całkowitch do koordynatów

Renderowanie między pikselami zachodzi, gdy rysujesz obiekt używając niepełnych wartości.

```js
ctx.drawImage(myImage, 0.3, 0.5);
```

Ta praktyka zmusza przeglądarkę do wykonania dodatkowych obliczeń, by wytworzyć efekt anty-aliasingu. Żeby temu zapobiec, zaokrąglij koordynaty, na przykład przy użyciu {{jsxref("Math.floor()")}}.

### Nie skaluj obrazów za pomocą `drawImage`

Posłuż się canvasem poza ekranem, renderując swój obrazek w kilku różnych rozmiarach podczas ładowania, zamiast renderować go w każdej klatce.

### Używaj wielu warstw w skomplikowanych scenach

Tak jak niektóre elementy nieustannie są w ruchu, inne (jak np. UI) nigdy nie zmieniają położenia. Dobrym sposobem na optymalizację w tej sytuacji jest zastosowanie warstw przy użyciu kilku canvasów roboczych.

Przykładowo, możesz stworzyć warstwę dla interfejsu rysowaną nad innymi, która aktualizuje się tylko w momentach, gdy jest używana. Oprócz tego, możesz przenaczyć jedną warstwę na pierwszy plan, gdzie umieścisz wszystkie elementy, które odnawiane są często oraz jedną warstwę na tło, na której obiekty aktualizowane są bardzo rzadko.

```html
<div id="scena">
  <canvas id="warstwaUi" width="480" height="320"></canvas>
  <canvas id="warstwaGry" width="480" height="320"></canvas>
  <canvas id="warstwaTla" width="480" height="320"></canvas>
</div>

<style>
  #scena {
    width: 480px;
    height: 320px;
    position: relative;
    border: 2px solid black
  }
  canvas { position: absolute; }
  #warstwaUI { z-index: 3 }
  #warstwaGry { z-index: 2 }
  #warstwaTla { z-index: 1 }
</style>
```

### Użyj CSS dla dużych obrazów w tle

Jeśli twoja gra, jak większość, posiada statyczne tło, stwórz element {{HTMLElement("div")}} z własnością CSS {{cssxref("background")}} , który umieścisz pod canvasem. Dzięki temu unikniesz rysowania dużego obrazu w każdej klatce z osobna.

### Skaluj canvas za pomocą CSS

[Transformacje CSS](/pl/docs/Web/Guide/CSS/Using_CSS_transforms) są szybsze dzięki wykorzystaniu karty graficznej. Powiększanie canvasu działa szybciej niż jego pomniejszanie. Dla Firefox OS ustaw 480 x 320 px.

```js
var scaleX = window.innerWidth / canvas.width;
var scaleY = window.innerHeight / canvas.height;

var scaleToFit = Math.min(scaleX, scaleY);
var scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = '0 0'; //scale from top left
stage.style.transform = 'scale(' + scaleToFit + ')';
```

### Wyłącz przezroczystość

Jeśli twoja gra korzysta z canvasu i nie ma potrzeby, by był on przezroczysty, ustaw wartość `alpha` na `false` podczas tworzenia kontekstu: [`HTMLCanvasElement.getContext()`](/pl/docs/Web/API/HTMLCanvasElement/getContext "The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported."). To powinno poprawić wydajność.

```js
var ctx = canvas.getContext('2d', { alpha: false });
```

### Pozostałe wskazówki

- Ujednolić wywołania canvasu (przykładowo, narysuj linię łamaną zamiast kilku osobnych linii).
- Unikaj niepotrzebnych zmian stanu canvasu.
- Renderuj tylko fragmenty, które uległy zmianie, zamiast całej, nowej klatki.
- Unikaj {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}} kiedy to możliwe.
- Unikaj wyświetlania tekstu, kiedy to możliwe.
- Wykorzystuj różne sposoby na wyczyszczenie canvasu: ({{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}}, {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} lub zmiana rozmiaru canvasu).
- Do tworzenie animacji skorzystaj z  {{domxref("window.requestAnimationFrame()")}} zamiast {{domxref("window.setInterval()")}} .
- Ostrożnie używaj dużych bibliotek do obliczania fizyki.

## Zobacz również:

- [Poprawa wydajności Canvas HTML5 – HTML5](http://www.html5rocks.com/en/tutorials/canvas/performance/#toc-ref)
- [Optymalizacja skryptów JavaScript na Firefox OS – Mozilla Hacks](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}
