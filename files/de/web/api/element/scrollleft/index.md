---
title: Element.scrollLeft
slug: Web/API/Element/scrollLeft
translation_of: Web/API/Element/scrollLeft
---
{{ APIRef("DOM") }}

Die **`Element.scrollLeft`** Eigenschaft setzt die Anzahl an Pixel, die der Inhalt eines Elements nach links gescrollt wird, oder liefert diese zurück.

Beachten Sie: Wenn die Eigenschaft {{cssxref("direction")}} des Elements den Wert `rtl` (right-to-left) aufweist, ist `scrollLeft` `0`, falls der Scrollbalken ganz rechts ist (am Anfang des gescrollten Inhalts), und nimmt zunehmend negative Werte an, wenn man gegen Ende des Inhalts scrollt.

## Syntax

    // Liefert die Anzahl der gescrollten Pixel
    var sLeft = element.scrollLeft;

_sLeft_ ist ein Integer-Wert, der die Anzahl der Pixel repräsentiert, die _element_ nach links gescrollt ist.

    // Set the number of pixels scrolled
    element.scrollLeft = 10;

`scrollLeft` kann als Integerwert gesetzt werden. Dabei gilt:

- Wenn das erste Element nicht gescrollt werden kann (wenn es z.B. keinen overflow hat), erhält `scrollLeft` den Wert 0.
- Wenn ein Wert kleiner als 0 gesetzt wird (größer als 0 für right-to-left Elemente), erhält `scrollLeft` den Wert 0.
- Wenn der Maximalwert, den der Inhalt des gescrollten Elements annehmen kann, überschritten wrid, erhält `scrollLeft` (nur) den Maximalwert.

## Beispiel

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        #container {
            border: 1px solid #ccc; height: 100px; overflow: scroll; width: 100px;
        }
        #content {
            background-color: #ccc; width: 250px;
        }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var button = document.getElementById('slide');
            button.onclick = function () {
                document.getElementById('container').scrollLeft += 20;
            };
        }, false);
    </script>
</head>
<body>
    <div id="container">
        <div id="content">Lorem ipsum dolor sit amet.</div>
    </div>
    <button id="slide" type="button">Slide</button>
</body>
</html>
```

## Spezifikationen

| Spezifikation                                                                            | Status                           | Kommentar |
| ---------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('CSSOM View', '#dom-element-scrollleft', 'scrollLeft')}} | {{Spec2("CSSOM View")}} |           |

## Browserkompatibilität

{{Compat("api.Element.scrollLeft")}}
