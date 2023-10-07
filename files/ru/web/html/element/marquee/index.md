---
title: <marquee>
slug: Web/HTML/Element/marquee
---

{{HTMLSidebar}}

## Определение

HTML-элемент `<marquee>` используется для создания на странице прокручивающегося текста (бегущей строки).

## Атрибут

- {{htmlattrdef("behavior")}}
  - : Описывает поведение прокрутки. Допустимые значения: `scroll`, `slide` `и alternate`. Если значение не указано, то используется `scroll`.
- {{htmlattrdef("bgcolor")}}
  - : Задаёт цвет фона (можно использовать имя цвета или шестнадцатеричное значение).
- {{htmlattrdef("direction")}}
  - : Задаёт направление прокрутки. `Допустимые значения: left`, `right`, `up` и `down`. Если значение не указано, то используется `left`.
- {{htmlattrdef("height")}}
  - : Задаёт высоту в пикселях или процентах.
- {{htmlattrdef("hspace")}}
  - : Задаёт поле (margin) слева.
- {{htmlattrdef("loop")}}
  - : Задаёт количество прокруток. Если значение не указано, то используется -1, что означает бесконечную прокрутку
- {{htmlattrdef("scrollamount")}}
  - : Задаёт сдвиг на каждом шаге в пикселях. По умолчанию 6.
- {{htmlattrdef("scrolldelay")}}
  - : Задаёт интервал между каждым шагом в миллисекундах. По умолчанию 85. Обратите внимание, что значения меньше 60 будут проигнорированы и будет использовано 60, если не присутствует атрибут `truespeed`.
- {{htmlattrdef("truespeed")}}
  - : По умолчанию значения меньше 60 в `scrolldelay` игнорируются. Однако, если присутствует `truespeed`, то они не игнорируются
- {{htmlattrdef("vspace")}}
  - : Задаёт вертикальный отступ (margin) в пикселях или процентах.
- {{htmlattrdef("width")}}
  - : Задаёт ширину в пикселях или процентах.

## Обработчики событий

- {{htmlattrdef("onbounce")}}
  - : Срабатывает, когда marquee достиг конечного состояния. Срабатывает только в случаях, когда `behavior` имеет значение `alternate`.
- {{htmlattrdef("onfinish")}}
  - : Срабатывает, когда marquee прокрутился столько раз, сколько было задано в атрибуте `loop`. Срабатывает только тогда, когда атрибут `loop` имеет положительное значение.
- {{htmlattrdef("onstart")}}
  - : Срабатывает в начале прокрутки.

## Методы

- start
  - : Запускает прокрутку marquee.
- stop
  - : Останавливает прокрутку marquee.

## Examples

```html
<marquee>This text will scroll from right to left</marquee>

<marquee direction="up">This text will scroll from bottom to top</marquee>

<marquee
  direction="down"
  width="250"
  height="200"
  behavior="alternate"
  style="border:solid">
  <marquee behavior="alternate"> This text will bounce </marquee>
</marquee>
```

{{EmbedLiveSample("Examples", 600, 450)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
