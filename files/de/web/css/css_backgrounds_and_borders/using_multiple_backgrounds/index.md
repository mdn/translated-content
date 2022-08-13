---
title: Mehrere Hintergründe in CSS verwenden
slug: Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds
tags:
  - Beispiel
  - CSS
  - CSS Hintergrund
  - Guide
  - Intermediate
translation_of: Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds
translation_of_original: Web/CSS/CSS_Background_and_Borders/Using_CSS_multiple_backgrounds
original_slug: Web/CSS/CSS_Background_and_Borders/Mehrere_Hintergründe_in_CSS_verwenden
---
{{CSSRef}}

Mit [CSS3](/de/docs/Web/CSS/CSS3) können einem Element mehrere Hintergründe zugewiesen werden. Diese werden aufeinander gestapelt wobei der erste Hintergrund zuoberst ist und der letzte zuunterst. Nur dem untersten Hintergrund kann eine Hintergrundfarbe zugewiesen werden.

Mehrere Hintergründe festzulegen ist einfach:

```css
.myclass {
  background: background1, background 2, ..., background;
}
```

Du kannst dies mit beiden Varianten, der verkürzten {{cssxref("background")}} Eigenschaft und dem Einzel-Eigenschafts-Selektor davon ausser {{cssxref("background-color")}}. Die folgenden Hintergrund Eigenschaften können als Liste festgelegt werden, eine pro Hintergrund: {{cssxref("background")}}, {{cssxref("background-attachment")}}, {{cssxref("background-clip")}},``{{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}}.

## Beispiel

In diesem Beispiel werden drei Hintergründe übereinandergelegt: das Firefox Logo, ein [linearer Farbverlauf](/de/docs/Web/CSS/linear-gradient) und ein Bild mit Blasen:

```css
.multi_bg_example {
  background-image: url(https://mdn.mozillademos.org/files/11305/firefox.png),
                    url(https://mdn.mozillademos.org/files/11307/bubbles.png),
                    linear-gradient(to right, rgba(30, 75, 115, 1),  rgba(255, 255, 255, 0));

  background-repeat: no-repeat,
                     no-repeat,
                     no-repeat;

  background-position: bottom right,
                       left,
                       right;
}
```

```html hidden
<div class="multi_bg_example"></div>
```

```css hidden
.multi_bg_example {
  width:100%;
  height:400px;
  background: url(https://mdn.mozillademos.org/files/11305/firefox.png),
            url(https://mdn.mozillademos.org/files/11307/bubbles.png),
  -moz-linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0)),
  -webkit-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0)),
  -ms-linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0)),
  linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
}
```

## Ergebnis

{{EmbedLiveSample('Beispiel', '100%', '400')}}

Wie oben zu erkennen ist, liegt das Firefox Logo (als erstes aufgelistet) zuoberst, gefolgt vom Hintergrund mit Blasen, welcher wiederum auf dem Farbverlauf liegt. Jede nachfolgende Untereigenschaft ({{cssxref("background-repeat")}} und {{cssxref("background-position")}}) gilt für den entsprechenden Hintergrund. Demzufolge gilt der erste aufgelistete Wert für {{cssxref("background-repeat")}} für den ersten (vordersten) Hintergrund und so weiter.

## Siehe auch

- [Verwendung von CSS Farbverläufen](/de/docs/Farbverläufe_in_CSS)
