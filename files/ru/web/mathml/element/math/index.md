---
title: <math>
slug: Web/MathML/Element/math
translation_of: Web/MathML/Element/math
---
{{MathMLRef()}}

Элементом верхнего уровня в MathML является тэг `<math>`. Каждый допустимый экземпляр MathML должен быть внутри этого контейнера. Он не допускает вложений, но внутри может быть произвольное число других дочерних элементов.

## Атрибуты

В дополнение к следующим атрибутам, тэг `<math>` воспринимает любые атрибуты из [`<mstyle>`](/ru/docs/Web/MathML/Element/mstyle) .

- class, id, style
  - : При условии использования вместе с [таблицами стилей](/ru/docs/CSS) .
- dir
  - : Указывает направление формулы: `ltr` - слева направо или `rtl` - справа налево.
- ref
  - : Используется для установки гиперссылки на указанный URI.
- mathbackground
  - : Цвет фона. Вы можете использовать `#rgb`, `#rrggbb` и [названия цветов HTML](/ru/docs/CSS/color_value#Color_Keywords).
- mathcolor
  - : Цвет текста. Вы можете использовать `#rgb`, `#rrggbb` и [названия цветов HTML](/ru/docs/CSS/color_value#Color_Keywords).
- display

  - : Этот атрибут определяет способ вывода. Возможные значения:

    - `block` - означает, что этот элемент будет отображаться за пределами текущего диапазона текста, как блока, который может быть расположен в любом месте без изменения смысла текста;
    - `inline` -означает, что этот элемент будет отображаться внутри текущего диапазона текста, и не могут быть перемещены из неё без изменения значения этого текста.

    Значение по умолчанию `inline`.

- mode {{ deprecated_inline() }}
  - : Устаревшие значение [display attribute](/ru/docs/MathML/Element/math#attr-display).
    Возможные значения: `display` (который имеет тот же эффект, как `display="block"` ) и `inline` .
- overflow
  - : Определяет, как выражение ведёт себя, если текст слишком длинный и не помещается в указанном диапазоне ширины.
    Возможные значения: `linebreak` (по умолчанию), `scroll` , `elide` , `truncate` , `scale` .

## Примеры

![Теорема Пифагора](/files/3157/math.jpg)

### Обозначения HTML5

```html
<!DOCTYPE html>
<html>
  <head>
    <title>MathML in HTML5</title>
  </head>
  <body>

  <math>
    <mrow>
      <mrow>
        <msup>
          <mi>a</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
          <mi>b</mi>
          <mn>2</mn>
        </msup>
      </mrow>
      <mo>=</mo>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </math>

  </body>
</html>
```

### Обозначения XHTML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN" "http://www.w3.org/Math/DTD/mathml2/xhtml-math11-f.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <title>MathML in XHTML</title>
</head>
<body>

  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow>
      <mrow>
        <msup>
          <mi>a</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
          <mi>b</mi>
          <mn>2</mn>
        </msup>
      </mrow>
      <mo>=</mo>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </math>

</body>
</html>
```

**Примечания:** XHTML документы с MathML должны быть поданы как `application/xhtml+xml`. Вы можете легко добиться этого, добавив `.xhtml` расширение для локальных файлов. Для серверов Apache вы можете [настроить `.htaccess` файл](http://httpd.apache.org/docs/2.2/mod/mod_mime.html#addtype) для этого расширения на правильный тип MIME. Поскольку мы сохранили наш MathML в виде XML-документа, необходимо быть уверенным в правильно оформленном XML-документе.

## Совместимость браузеров

{{Compat}}

### Особенности ядра Gecko

В Gecko 7.0 (Firefox 7.0 / Thunderbird 7.0 / SeaMonkey 2.4) появилась поддержка всех MathML атрибутов для элементов верхнего уровня (т.е. такое же поведение как [`<mstyle>`](/ru/docs/Web/MathML/Element/mstyle) элемента). Тем не менее, `displaystyle` атрибут не отрабатывается. Его поддержка [была добавлена](https://bugzilla.mozilla.org/show_bug.cgi?id=669719) в Gecko 8.0 (Firefox 8.0 / Thunderbird 8.0 / SeaMonkey 2.5).

Альтернативные текстовые описания (`alttext`) или ссылки на альтернативное изображение, (атрибуты `altimg` , `altimg-width` , `altimg-height` и `altimg-valign`) в настоящее время не реализованы в Gecko.

## Спецификации

| Спецификация                                                                                                                             | Статус       | Комментарий            |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------- |
| [MathML 3.0](http://www.w3.org/TR/MathML3/chapter2.html) | Рекомендация | Текущая спецификация   |
| [MathML 2.0](http://www.w3.org/TR/MathML2/chapter7.html) | Рекомендация | Начальная спецификация |

## Смотрите также

- HTML-элемент верхнего уровня: [`<html>`](/ru/docs/Web/HTML/Element/html)
- SVG элемент верхнего уровня: [`<svg>`](/ru/docs/Web/SVG/Element/svg)
- Тест-браузер MathML: Для [XHTML](https://www.eyeasme.com/Joe/MathML/MathML_browser_test) и [HTML5](https://eyeasme.com/Joe/MathML/HTML5_MathML_browser_test)
