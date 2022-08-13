---
title: ':hover'
slug: Web/CSS/:hover
translation_of: Web/CSS/:hover
---
{{CSSRef}}

## Pseudo klasa:hover

Właściwość **`:hover`** [CSS](/pl/docs/Web/CSS) [pseudo-class](/pl/docs/Web/CSS/Pseudo-classes "Pseudo-classes") jest używana gdy użytkownik wchodzi w interakcję z elementem za pomocą urządzenia wskazującego, ale niekoniecznie go aktywuje. Generalnie wyzwalanie następuje gdy użytkownik wskaże element kursorem, np. wskaźnikiem myszy.

```css
/* Wybierz każdy element <a>, który zostanie najechany kursorem */
a:hover {
  color: orange;
}
```

Style zdefiniowane przez pseudo-klasę `:active` będą nadpisywane przez każdą kolejną powiązaną pseudo-klasę ({{ cssxref(":link") }}, {{ cssxref(":visited") }}, lub {{ cssxref(":active") }}) która ma conajmniej taką samą specyfikację. Aby dopasować odpowiednio linki umieść `:hover` za `:link` i `:visited` ale przed `:active` zgodnie z zasadą *LVHA* : `:link` — `:visited` — `:hover` — `:active`.

> **Note:** **Notatka**: Pseudo-klasa `:hover` wykazuje problem na ekranach dotykowych. W zależności od przeglądarki `:hover` może nigdy nie być  zgodna, może zmienić styl na czas wskazania elementu lub zmienić go do czasu oznaczenia innego elementu. Web developerzy powinni zadbać o to aby elementy działy również na urządzeniach z ograniczeniami obługi funkcji.

## Składnia

{{csssyntax}}

## Przykład

### HTML

```html
<a href="#">Wskaż ten link.</a>
```

### CSS

```css
a {
  background-color: powderblue;
  transition: background-color .5s;
}

a:hover {
  background-color: gold;
}
```

#### Rezultat

{{EmbedLiveSample("Przykład")}}

### Galeria obrazów

Możesz użyć pseudo-klasy `:hover` do utworzenia galerii obrazów, gdzie pełnowymiarowe obrazy będą wyświetlae wtedy, gdy kursor przesunie się nad miniaturą. Zobacz [demo](/@api/deki/files/6247/=css-gallery.zip "css-gallery.zip") takiego rozwiązania.

> **Note:** **Notatka:** Dla analogicznego efektu, ale opartego o pseudo-klasę [`:checked`](/pl/docs/Web/CSS/%3Achecked) (zastostosowane dla ukrytych radio-box'ów), zobacz[ demo](/@api/deki/files/6268/=css-checked-gallery.zip "css-checked-gallery.zip"), zaczerpnięte z strony dotyczącej [:checked](/pl/docs/Web/CSS/:checked).

## Specyfikacja

| Specyfikacja                                                                                                         | Status                                   | Komentarz                                            |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------- |
| {{ SpecName('HTML WHATWG', 'scripting.html#selector-hover', ':hover') }}                     | {{ Spec2('HTML WHATWG') }}     |                                                      |
| {{ SpecName('CSS4 Selectors', '#the-hover-pseudo', ':hover') }}                                 | {{ Spec2('CSS4 Selectors') }} | Allows `:hover` to be applied to any pseudo-element. |
| {{ SpecName('CSS3 Selectors', '#the-user-action-pseudo-classes-hover-act', ':hover') }} | {{ Spec2('CSS3 Selectors') }} | No significant change.                               |
| {{ SpecName('CSS2.1', 'selector.html#dynamic-pseudo-classes', ':hover') }}                 | {{ Spec2('CSS2.1') }}             | Initial definition.                                  |

## Kompatybilne przeglądarki

{{Compat("css.selectors.hover")}}

## Zobacz także

- [Chromium bug #370155: Don't make `:hover` sticky on tap on sites that set a mobile viewport](https://code.google.com/p/chromium/issues/detail?id=370155)
- [Chromium bug #306581: Immediately show hover and active states on touch when page isn't scrollable.](https://code.google.com/p/chromium/issues/detail?id=306581)
