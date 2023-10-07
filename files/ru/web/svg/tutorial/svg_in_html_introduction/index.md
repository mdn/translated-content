---
title: SVG в HTML. Введение
slug: Web/SVG/Tutorial/SVG_In_HTML_Introduction
---

## Описание

Эта статья содержит пример использования SVG в качестве фонового изображения для формы. В примере демонстрируется, как JavaScript и CSS может быть использован для того, чтобы производить операции с векторным изображением (svg) так, будто вы используете обычный сценарий для XHTML. Необходимо понимать, что пример работоспособен лишь в браузерах, которые поддерживают XHTML (не HTML), а также интеграцию SVG.

## Код

Демонстрация примера [здесь](/presentations/xtech2005/svg-canvas/SVGDemo.xml):

```html
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>XTech SVG Demo</title>
    <style>
      stop.begin {
        stop-color: yellow;
      }
      stop.end {
        stop-color: green;
      }
      body.invalid stop.end {
        stop-color: red;
      }
      #err {
        display: none;
      }
      body.invalid #err {
        display: inline;
      }
    </style>
    <script>
      function signalError() {
        document.getElementById("body").setAttribute("class", "invalid");
      }
    </script>
  </head>
  <body
    id="body"
    style="position:absolute; z-index:0; border:1px solid black; left:5%; top:5%; width:90%; height:90%;">
    <form>
      <fieldset>
        <legend>HTML Form</legend>
        <p>
          <label>Введите что-нибудь:</label>
          <input type="text" />
          <span id="err">Incorrect value!</span>
        </p>
        <p>
          <input type="button" value="Activate!" onclick="signalError();" />
        </p>
      </fieldset>
    </form>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      style="width:100%; height:100%; position:absolute; top:0; left:0; z-index:-1;">
      <linearGradient id="gradient">
        <stop class="begin" offset="0%" />
        <stop class="end" offset="100%" />
      </linearGradient>
      <rect x="0" y="0" width="100" height="100" style="fill:url(#gradient)" />
      <circle cx="50" cy="50" r="30" style="fill:url(#gradient)" />
    </svg>
  </body>
</html>
```

## Примечание

В примере представлен обычный XHTML, CSS и JavaScript-код. Здесь есть лишь одна особенность, это наличие SVG элемента. Этот элемент объявлен в специальном пространстве имён SVG, содержит градиент и две фигуры заполненные градиентом. По замыслу, когда пользователь введёт что-нибудь неправильное, то скрипт установит для BODY класс .invalid, где правила стиля изменяют цвет градиента и делают видимым сообщение об ошибке.

Такой способ имеет следующие пункты в свою пользу:

- Мы использовали штатную XHTML форму, которая уже может присутствовать на веб-сайте, и добавили привлекательный, интерактивный фон
- Подход имеет обратную совместимость с браузерами, которые не поддерживают SVG; Элемент SVG просто не отобразится, не повлияв на текущую вёрстку.
- Это очень просто сделать.
- Изображение масштабируемое и может растягиваться до нужного размера
- Мы можем применять декларированные стили как для HTML так и для SVG
- С помощью JavaScript можно управлять как HTML так и SVG
- Это полностью валидный документ, основанный на стандартах.

> **Примечание:** Чтобы к изображению с DOM добавить связь встроенного SVG, необходимо использовать setAttributeNS, установив href как показано в следующем примере:
>
> ```js
> var img = document.createElementNS("http://www.w3.org/2000/svg", "image");
>
> img.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "move.png");
> ```

## Дополнительно

Значение атрибута `viewBox` определяет область в пространстве пользователя, относительно внешним границам просмотра.

`viewBox="x y w h" - где: x- левый верхний угол по оси x, y- левый верхний угол по оси y, w- ширина в пользовательской единице измерения, h- высота (соответственно). В данном примере использовалось значение:`

```html
viewBox="0 0 100 100"
```

Размер изображения svg (заданный атрибутами width и height), может отличаться от области просмотра. Для регулирования отрисовки такого изображения используется атрибут `preserveAspectRatio`. С его помощью могут быть заданы правила выравнивания и поведения при переполнении (overflow) области просмотра, края svg могут быть обрезаны или вписаны.

```html
preserveAspectRatio="alignment [meet | slice]"
```

`alignment` - одно из значений `xMinYMin, xMinYMid, xMinYMax, xMidYMin, xMidYMid, xMidYMax, xMaxYMin, xMaxYMid` или `xMaxYMax`.

`meet` - сохраняет пропорции, умещая svg в область просмотра

`slice` - тоже сохраняет пропорции, но масштабирует по максимальной границе области просмотра, обрезая часть изображения, которая не поместилась в область

Также есть спецификатор `none который означает, что изображение заполнит область путём масштабирования сторон, не сохраняя пропорции (растянет).`

```html
preserveAspectRatio="none"
```

Атрибут `style` применяется для определения стиля элемента.

## Ссылки по теме

- Сохранение пропорций [ссылка](http://xiper.net/learn/svg/svg-essentials/preserving-aspect-ratio)
- Масштабирование и сдвиг [msdn.microsoft](<https://msdn.microsoft.com/ru-ru/library/gg589508(v=vs.85).aspx>)
- Ещё SVG в XHTML: [пример](/ru/docs/SVG/Namespaces_Crash_Course/Example)
