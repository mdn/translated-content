---
title: Rysowanie grafiki z elementem canvas
slug: Web/API/Canvas_API/Tutorial
tags:
  - Grafika
  - HTML
  - HTML5
  - Internet
  - Kanwa
  - Poradnik
  - instrukcja
translation_of: Web/API/Canvas_API/Tutorial
---
{{CanvasSidebar}}[![](https://mdn.mozillademos.org/files/257/Canvas_tut_examples.jpg)](/pl/docs/HTML/Canvas "HTML/Canvas")

[**`<canvas>`**](/pl/docs/Web/HTML/Element/canvas "HTML/Canvas") jest elementem [HTML](/pl/docs/Web/HTML "HTML"), który może być użyty do rysowania grafik używając skryptów (często [JavaScript](/pl/docs/Glossary/JavaScript "JavaScript")'u). To może zostać użyte do  na przykład rysowania wykresów, tworzenia kompozycji zdjęcia lub prostych (i [i nie prostych](/pl/docs/Web/API/Canvas_API/A_basic_ray-caster)) animacji. Obrazy na tej strone pokazują przykłady implementacji **[`<canvas>`](/en-US/docs/Web/HTML/Element/canvas "HTML/Canvas")**, które będą stworzone w tym poradniku.

Ten poradnik opisuje jak używać elementu `<canvas>` do rysowania grafik 2D, rozpoczynając od podstaw. Zawarte przykłady powinny dać Ci kilka czystych pomysłów co możesz zrobić z kanwą i zapewnią przykłady kodu, które mogą ci pomóc w budowaniu własnej zawartości.

Wprowadzono ją jako pierwszą w WebKit przez Apple dla OS X Dashboard, `<canvas>` od tego momentu została wprowadzona do przeglądarek. Dziś wszystkie poważne przeglądarki wspierają kanwę.

## Zanim zaczniesz

Używanie elementu `<canvas>` nie jest trudne, ale potrzebujesz podstawowego zrozumienia [HTML](/pl/docs/Web/HTML "HTML") i [JavaScript](/pl/docs/Web/JavaScript "JavaScript"). Element `<canvas>` nie jest wspierany w kilku starszych przeglądarkach, ale ma wsparcie ze strony nowych wersji poważnych przeglądarek. Domyślnym rozmiarem kanwy jest 300 px × 150 px (szerokość × wysokość). Ale własne rozmiary mogą zostać zdefiniowane za pomocą własności HTML `height` i `width`. W celu narysowania grafik na kanwie używamy obiektu kontekstu w JavaScript, który tworzy grafiki w locie.

## W tym poradniku

- [Podstawowe użycie](/pl/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
- [Rysowanie figur](/pl/docs/Web/API/Canvas_API/Tutorial/rysowanie_ksztaltow "Canvas_tutorial/Drawing_shapes")
- [Dodawanie styli i kolorów](/pl/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors "Canvas_tutorial/Applying_styles_and_colors")
- [Rysowanie tekstu](/pl/docs/Rysowanie_tekstu_przy_użyciu_canvas)
- [Używanie obrazków](/pl/docs/Web/API/Canvas_API/Tutorial/Using_images "Canvas_tutorial/Using_images")
- [Przekształcenia](/pl/docs/Web/API/Canvas_API/Tutorial/Transformations "Canvas_tutorial/Transformations")
- [Compositing and clipping](/pl/docs/Web/API/Canvas_API/Tutorial/Compositing "Canvas_tutorial/Compositing")
- [Podstwowe animacje](/pl/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
- [Zaawansowane animacje](/pl/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
- [Manipulacja pikselami](/pl/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
- [Hitowe regiony i dostępność](/pl/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility)
- [Optymizacja kanwy](/pl/docs/Web/API/Canvas_API/Tutorial/Optymalizacja_canvas)
- [Koniec](/pl/docs/Web/API/Canvas_API/Tutorial/Finale)

## Zobacz także

- [Strona tematów kanwy](/pl/docs/Web/HTML/Canvas "HTML/Canvas")
- [Wtyczka Canvas do Adobe Illustrator'a](http://visitmix.com/labs/ai2canvas/)
- [HTML5CanvasTutorials](http://www.html5canvastutorials.com/)

## Notka dla współtwórców

Z powodu niefortunnego błędu technicznego, który miał miejsce 17 Czerwca 2013, straciliśmy historię tego poradnika, wliczając w to także atrybucje do wszystkich współtwórców do zawartości tego. Przepraszamy za to i mamy nadzieję, że wybaczycie nam tą niefortunną wpadkę.

{{ Next("Web/API/Canvas_API/Tutorial/Basic_usage") }}
