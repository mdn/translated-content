---
title: background-position
slug: Web/CSS/background-position
tags:
  - CSS
  - CSS Background
  - CSS Property
  - Reference
translation_of: Web/CSS/background-position
---
{{ CSSRef() }}

## Podsumowanie

`background-position` ustawia początkowe położenie obrazka tła, który został zdefiniowany.

{{cssinfo}}

## Składnia

    background-position: [ <percentage> | <length> | left | center | right  ]
                         [ <percentage> | <length> | top  | center | bottom ] ? ;

    background-position: [ top | center | bottom ];

    background-position: inherit;

### Wartości

- {{cssxref("&lt;percentage&gt;")}} \<percentage>
  - : Wraz z parą wartości '0% 0%', lewy górny róg obrazka jest wyrównany względem górnego lewego rogu dopełnienia bloku. Para wartości '100% 100%' umieszcza dolny prawy róg obrazka w dolnym prawym rogu obszaru dopełnienia. Wraz z parą wartości '14% 84%', punkt 14% wszerz i 84% w dół obrazka jest umiejscawiany w punkcie 14% wszerz i 84% w dół obszaru dopełnienia'.
- {{cssxref("&lt;length&gt;")}} \<length>
  - : Wraz z parą wartości '2cm 1cm', górny lewy róg obrazka jest umieszczony 2cm od prawego i 1cm poniżej górnego krańca obszaru dopełnienia.
- top left oraz left top
  - : Tak samo jak '0% 0%'.
- top, top center, oraz center top
  - : Tak samo jak '50% 0%'.
- right top oraz top right
  - : Tak samo jak '100% 0%'.
- left, left center, oraz center left
  - : Tak samo jak '0% 50%'.
- center oraz center center
  - : Tak samo jak '50% 50%'.
- right, right center, oraz center right
  - : Tak samo jak '100% 50%'.
- bottom left oraz left bottom
  - : Tak samo jak '0% 100%'.
- bottom, bottom center, oraz center bottom
  - : Tak samo jak '50% 100%'.
- bottom right oraz right bottom
  - : Tak samo jak '100% 100%'.

Jeśli tylko jedna wartość jest określona, wtedy ustawia położenie poziome, z pozycją pionową 50%. W innym przypadku pierwsza wartość określa położenie w poziomie. Dozwolone są kombinacje słów kluczowych, długości i procentów, jednak, jeśli słowa kluczowe są wymieszane z innymi wartościami, wartości 'left' i 'right' mogą być używane tylko jako pierwsza wartość, zaś wartości 'top' i 'bottom' mogą być używane tylko jako druga wartość. Położenie ujemne jest dozwolone.

## Przykłady

    .exampleone {
    	background-image: url("logo.png");
    	background-position: top center;
    }

    .exampletwo {
    	background-image: url("logo.png");
    	background-position: 25% 75%;
    }

    .examplethree {
    	background-image: url("logo.png");
    	background-position: 2cm bottom;
    }

    .examplefour {
    	background-image: url("logo.png");
    	background-position: center 10%;
    }

    .examplefive {
    	background-image: url("logo.png");
    	background-position: 2cm 50%;
    }

## Specyfikacje

- [CSS 1](http://www.w3.org/TR/CSS1#background-position)
- [CSS 2.1](http://www.w3.org/TR/CSS21/colors.html#propdef-background-position)
- [CSS 3](http://www.w3.org/TR/2005/WD-css3-background-20050216/#background-position)

## Zgodność z przeglądarką

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer | 4                |
| Firefox           | 1                |
| Netscape          | 6                |
| Opera             | 3.5              |
