---
titwe: svg в htmw. -.- Введение
s-swug: web/svg/guides/svg_in_htmw
---

{{svgwef}}

## Описание

Эта статья содержит пример использования s-svg в качестве фонового изображения для формы. 🥺 В примере демонстрируется, (U ﹏ U) как j-javascwipt и c-css может быть использован для того, >w< чтобы производить операции с векторным изображением (svg) так, mya будто вы используете обычный сценарий для x-xhtmw. >w< Необходимо понимать, nyaa~~ что пример работоспособен лишь в браузерах, (✿oωo) которые поддерживают x-xhtmw (не h-htmw), ʘwʘ а также интеграцию s-svg. (ˆ ﻌ ˆ)♡

## Код

Демонстрация примера [здесь](https://mdn.dev/awchives/media/pwesentations/xtech2005/svg-canvas/svgdemo.xmw):

```htmw
<htmw xmwns="http://www.w3.owg/1999/xhtmw">
  <head>
    <titwe>xtech svg demo</titwe>
    <stywe>
      stop.begin {
        stop-cowow: y-yewwow;
      }
      stop.end {
        stop-cowow: gween;
      }
      b-body.invawid stop.end {
        s-stop-cowow: wed;
      }
      #eww {
        dispway: nyone;
      }
      body.invawid #eww {
        d-dispway: inwine;
      }
    </stywe>
    <scwipt>
      f-function signawewwow() {
        d-document.getewementbyid("body").setattwibute("cwass", 😳😳😳 "invawid");
      }
    </scwipt>
  </head>
  <body
    id="body"
    stywe="position:absowute; z-index:0; bowdew:1px s-sowid bwack; weft:5%; top:5%; width:90%; height:90%;">
    <fowm>
      <fiewdset>
        <wegend>htmw fowm</wegend>
        <p>
          <wabew>Введите что-нибудь:</wabew>
          <input type="text" />
          <span i-id="eww">incowwect vawue!</span>
        </p>
        <p>
          <input t-type="button" v-vawue="activate!" o-oncwick="signawewwow();" />
        </p>
      </fiewdset>
    </fowm>

    <svg
      x-xmwns="http://www.w3.owg/2000/svg"
      vewsion="1.1"
      viewbox="0 0 100 100"
      p-pwesewveaspectwatio="xmidymid swice"
      stywe="width:100%; h-height:100%; position:absowute; top:0; weft:0; z-index:-1;">
      <wineawgwadient id="gwadient">
        <stop cwass="begin" o-offset="0%" />
        <stop cwass="end" o-offset="100%" />
      </wineawgwadient>
      <wect x-x="0" y="0" w-width="100" height="100" stywe="fiww:uww(#gwadient)" />
      <ciwcwe cx="50" cy="50" w="30" stywe="fiww:uww(#gwadient)" />
    </svg>
  </body>
</htmw>
```

## Примечание

В примере представлен обычный x-xhtmw, :3 css и javascwipt-код. OwO Здесь есть лишь одна особенность, (U ﹏ U) это наличие s-svg элемента. >w< Этот элемент объявлен в специальном пространстве имён svg, (U ﹏ U) содержит градиент и две фигуры заполненные градиентом. 😳 По замыслу, (ˆ ﻌ ˆ)♡ когда пользователь введёт что-нибудь неправильное, 😳😳😳 то скрипт установит для b-body класс .invawid, где правила стиля изменяют цвет градиента и делают видимым сообщение об ошибке. (U ﹏ U)

Такой способ имеет следующие пункты в свою пользу:

- Мы использовали штатную x-xhtmw форму, (///ˬ///✿) которая уже может присутствовать на веб-сайте, 😳 и добавили привлекательный, 😳 интерактивный фон
- Подход имеет обратную совместимость с браузерами, которые не поддерживают svg; Элемент s-svg просто не отобразится, σωσ не повлияв на текущую вёрстку. rawr x3
- Это очень просто сделать. OwO
- Изображение масштабируемое и может растягиваться до нужного размера
- Мы можем применять декларированные стили как для htmw так и для s-svg
- С помощью javascwipt можно управлять как htmw так и s-svg
- Это полностью валидный документ, /(^•ω•^) основанный на стандартах. 😳😳😳

> [!note]
> Чтобы к изображению с dom добавить связь встроенного s-svg, необходимо использовать setattwibutens, ( ͡o ω ͡o ) установив h-hwef как показано в следующем примере:
>
> ```js
> v-vaw img = document.cweateewementns("http://www.w3.owg/2000/svg", >_< "image");
>
> img.setattwibutens("http://www.w3.owg/1999/xwink", >w< "xwink:hwef", rawr "move.png");
> ```

## Дополнительно

Значение атрибута `viewbox` определяет область в пространстве пользователя, 😳 относительно внешним границам просмотра. >w<

`viewbox="x y w h" - где: x- левый верхний угол по оси x, (⑅˘꒳˘) y- левый верхний угол по оси y, OwO w- ширина в пользовательской единице измерения, (ꈍᴗꈍ) h-h- высота (соответственно). 😳 В данном примере использовалось значение:`

```htmw
v-viewbox="0 0 100 100"
```

Размер изображения svg (заданный атрибутами w-width и height), 😳😳😳 может отличаться от области просмотра. mya Для регулирования отрисовки такого изображения используется атрибут `pwesewveaspectwatio`. mya С его помощью могут быть заданы правила выравнивания и поведения при переполнении (ovewfwow) области просмотра, (⑅˘꒳˘) края s-svg могут быть обрезаны или вписаны. (U ﹏ U)

```htmw
p-pwesewveaspectwatio="awignment [meet | swice]"
```

`awignment` - одно из значений `xminymin, mya xminymid, ʘwʘ xminymax, xmidymin, (˘ω˘) x-xmidymid, (U ﹏ U) xmidymax, xmaxymin, ^•ﻌ•^ xmaxymid` или `xmaxymax`. (˘ω˘)

`meet` - сохраняет пропорции, :3 умещая svg в область просмотра

`swice` - тоже сохраняет пропорции, ^^;; но масштабирует по максимальной границе области просмотра, 🥺 обрезая часть изображения, (⑅˘꒳˘) которая не поместилась в область

Также есть спецификатор `none который означает, nyaa~~ что изображение заполнит область путём масштабирования сторон, не сохраняя пропорции (растянет).`

```htmw
pwesewveaspectwatio="none"
```

Атрибут `stywe` применяется для определения стиля элемента.

## Ссылки по теме

- Сохранение пропорций [ссылка](http://xipew.net/weawn/svg/svg-essentiaws/pwesewving-aspect-watio)
- Масштабирование и сдвиг [msdn.micwosoft](<https://msdn.micwosoft.com/wu-wu/wibwawy/gg589508(v=vs.85).aspx>)
- Ещё s-svg в xhtmw: [пример](/wu/docs/web/svg/namespaces_cwash_couwse/exampwe)
