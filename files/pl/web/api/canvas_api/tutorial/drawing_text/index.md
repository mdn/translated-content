---
title: Rysowanie tekstu przy użyciu canvas
slug: Web/API/Canvas_API/Tutorial/Drawing_text
tags:
  - HTML
  - HTML:Canvas
  - NeedsContent
  - Wszystkie_kategorie
translation_of: Web/API/Canvas_API/Tutorial/Drawing_text
original_slug: Rysowanie_tekstu_przy_użyciu_canvas
---
Element [`<canvas>`](pl/HTML/Canvas) wspiera obsługę rysowania tekstu przez eksperymentalne API stworzone w Mozilli.

## Method overview

| `void mozDrawText(w DOMString textToDraw);`                        |
| ------------------------------------------------------------------ |
| `float mozMeasureText(w DOMString textToMeasure);`                 |
| `void mozPathText(w DOMString textToPath);`                        |
| `void mozTextAlongPath(w DOMString textToDraw, w boolean stroke);` |

## Atrybuty

| Atrybut        | Typ                         | Opis                                                                                                                                                                                                                                                                                             |
| -------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `mozTextStyle` | [`DOMString`](pl/DOMString) | Przy rysowaniu tekstu używany jest aktualny styl. Ciąg używa takiej samej składni jak [CSS font](pl/CSS/font). Aby zmienić styl tekstu, po prostu zmień wartości atrybutu tak jak zaprezentowano to poniżej. Domyślna czcionka to 12-point sans-serif.Przykład: ctx.mozTextStyle = "20pt Arial"; |

## Metody

### mozDrawText()

Rysuje podany tekst używając stylu tekstu podanego w atrybucie `mozTextStyle`. Kolor wypełnienia kontekstu zostanie użyty jako kolor tekstu.

    void mozDrawText(
       in DOMString textToDraw
    );

###### Parametry

- \<tt>textToDraw\</tt>
  - : Tekst rysowany w tym kontekście.

###### Przykład

    ctx.translate(10, 50);
    ctx.fillStyle = "Red";
    ctx.mozDrawText("Przykładowy ciąg");

Ten kod rysuje tekst "Przykładowy ciąg" na czerwono w pozycji (10,50) elementu canvas.

### mozMeasureText()

Zwraca szerokość, w pikselach, jaką podany tekst zajmie kiedy zostanie narysowany w aktualnie użytym stylu.

    float mozMeasureText(
      in DOMString textToMeasure
    );

###### Parametery

- \<tt>textToMeasure\</tt>
  - : Ciąg, którego szerokośc w pikselach chcemy ustalić.

###### Zwracana wartość

Szerokość tekstu w pikselach.

###### Przykład

    var text = "Przykładowy ciąg";
    var width = ctx.canvas.width;
    var len = ctx.mozMeasureText(text);
    ctx.translate((width - len)/2, 0);
    ctx.mozDrawText(text);

Ten przykład określa szerokość ciągu, a następnie korzstając z tych danych ryskuje go na horyzontalnym środku w elemencie canvas.

### mozPathText()

Dodaje kontury tekstu do aktualnej ścieżki. Pozwala to na obrysowanie tekstu zamiast wypełniania go.

    void mozPathText(
      in DOMString textToPath
    );

###### Parametery

- \<tt>textToPath\</tt>
  - : Tekst, którego kontury mają zostać dodane do aktualnej ścieżki.

###### Example

    ctx.fillStyle = "green";
    ctx.strokeStyle = "black";
    ctx.mozPathText("Przykładowy ciąg");
    ctx.fill()
    ctx.stroke()

Ten kod narysuje tekst "Przykładowy ciąg" na zielono z czarną obwódką przez dodanie konturów tekstu do ścieżki, a następnie wypełniając ścieżkę i nakładając kontur.

### mozTextAlongPath()

Dodaje (lub rysuje) określony tekst wzdłuż podanej ścieżki.

    void mozTextAlongPath(
      in DOMString textToDraw,
      in boolean stroke
    );

###### Parametery

- \<tt>textToDraw\</tt>
  - : Tekst, który ma zostać narysowany wzdłuż podanej ścieżki.
- \<tt>stroke\</tt>
  - : Jeśli ten parametr ma wartość `true`, wówczas tekst będzie rysowany wzdłuż podanej ścieżki. Jeśli ma wartość `false`, tekst zostanie zamiast tego dodany do ścieżki, na końcu.

###### Uwagi

Glify nie są skalowane ani transformowane zgodnie z krzywymi ścieżki; zamiast tego, każdy glif jest renderowany traktując ścieżkę pod sobą jako prostą linię. Można to wykorzystać do stworzenia unikatowych efektów.

## Notatki

- Te rozszerzenia nie są jeszcze ustandardyzowane przez WHATWG.
- Nie potrzebujesz specjalnego kontekstu, aby tego używać; kontekst 2D wystarczy.
- Wszelkie rysowanie odbywa się przy użyciu aktualnej transformacji.
- Aby dowiedzieć się więcej o detalach implementacji zajrzyj do {{ Bug(339553) }}.

## Dodatkowe przykłady

- [Rysowanie tekstu konturem wokół ścieżki](https://bugzilla.mozilla.org/attachment.cgi?id=273497)
- [Rysowanie wzdłuż ścieżki](https://bugzilla.mozilla.org/attachment.cgi?id=273498)
- [Animowanie ruchu tekstu wokół kółka](https://bugzilla.mozilla.org/attachment.cgi?id=273499).

{{ languages( { "en": "en/Drawing_text_using_a_canvas", "es": "es/Dibujar_texto_usando_canvas", "fr": "fr/Dessin_de_texte_avec_canvas", "ja": "ja/Drawing_text_using_a_canvas" } ) }}
