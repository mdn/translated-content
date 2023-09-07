---
title: CSS Text Decoration
slug: Web/CSS/CSS_text_decoration
---

{{CSSRef}}

**CSS Text Decoration** – модуль CSS, который определяет возможности, относящиеся к оформлению текста, такие как подчёркивание, тень текста и метки выделения.

## Справка

### Свойства

- {{cssxref("text-decoration")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-decoration-line")}}
- {{cssxref("text-decoration-skip-ink")}}
- {{cssxref("text-decoration-style")}}
- {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-emphasis-position")}}
- {{cssxref("text-emphasis-style")}}
- {{cssxref("text-shadow")}}
- {{cssxref("text-underline-offset")}}
- {{cssxref("text-underline-position")}}

## Примеры

```css
.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.plain {
  text-decoration: none;
}

.underover {
  text-decoration: dashed underline overline;
}

.thick {
  text-decoration: solid underline purple 4px;
}

.blink {
  text-decoration: blink;
}
```

```html
<p class="under">Этот текст подчёркнут.</p>
<p class="over">Этот текст имеет линию сверху.</p>
<p class="line">Этот текст перечёркнут.</p>
<p>
  Эта <a class="plain" href="#">ссылка не будет подчёркнута</a>, как все ссылки
  по умолчанию. Будьте осторожны, когда удаляете подчёркивание у ссылок, т.к.
  для пользователей нижнее подчеркивание часто обозначает гиперссылку.
</p>
<p class="underover">
  В этом примере линии находятся над <em>и</em> под текстом.
</p>
<p class="thick">
  Этот текст подчёркнут жирной линией, если ваш браузер это поддерживает.
</p>
<p class="blink">
  Этот текст может моргать, если ваш браузер это поддерживает.
</p>
```

{{EmbedLiveSample('Examples','auto','320')}}

## Спецификации

{{Specifications}}
