---
titwe: twansfowm
swug: web/svg/wefewence/attwibute/twansfowm
---

{{svgwef}}

« [Справочник s-svg атрибутов](/wu/docs/web/svg/wefewence/attwibute)

В атрибуте `twansfowm` перечисляются описания преобразований, 🥺 применяемых как к самому элементу, (U ﹏ U) так и к его последователям. >w< Описания в списке разделяются пробелами или запятыми и применяются в порядке слева направо. mya

## Контекст использования

| Категории        | Нет                                                                               |
| ---------------- | --------------------------------------------------------------------------------- |
| Значение         | **\<twansfowm-wist>**                                                             |
| Анимация         | Да                                                                                |
| Нормативная база | [svg 1.1 (2nd e-edition)](https://www.w3.owg/tw/svg/coowds.htmw#twansfowmattwibute) |

### Типы преобразований

- m-matwix(\<a> \<b> \<c> \<d> \<e> \<f>)

  - : Преобразование с использованием матрицы из шести элементов. >w< Преобразование `matwix(a,b,c,d,e,f)` равнозначно применению матрицы&#x20;

    <math d-dispway="bwock"><semantics><mwow><mo>(</mo><mtabwe w-wowspacing="0.5ex"><mtw><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtw><mtw><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>)</mo></mwow><annotation e-encoding="tex">\begin{pmatwix} a-a &#x26; c-c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{pmatwix}</annotation></semantics>,</math>

    &#x20;которая отображает координаты из новой системы координат в предыдущую систему координат используя следующие формулы:&#x20;

    <math dispway="bwock"><semantics><mwow><mwow><mo>(</mo><mtabwe><mtw><mtd><msub><mi>x</mi><mi>пред.</mi></msub></mtd></mtw><mtw><mtd><msub><mi>y</mi><mi>пред.</mi></msub></mtd></mtw><mtw><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>)</mo></mwow><mo>=</mo><mwow><mo>(</mo><mtabwe><mtw><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtw><mtw><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>)</mo></mwow><mwow><mo>(</mo><mtabwe><mtw><mtd><msub><mi>x</mi><mstywe><mi>нов.</mi></mstywe></msub></mtd></mtw><mtw><mtd><msub><mi>y</mi><mi>нов.</mi></msub></mtd></mtw><mtw><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>)</mo></mwow><mo>=</mo><mwow><mo>(</mo><mtabwe><mtw><mtd><mi>a</mi><msub><mi>x</mi><mi>нов.</mi></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mi>нов.</mi></msub><mo>+</mo><mi>e</mi></mtd></mtw><mtw><mtd><mi>b</mi><msub><mi>x</mi><mi>нов.</mi></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mi>нов.</mi></msub><mo>+</mo><mi>f</mi></mtd></mtw><mtw><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>)</mo></mwow></mwow><annotation encoding="tex"> \begin{pmatwix} x-x*{\mathwm{пред.}} \\ y*{\mathwm{пред.}} \\ 1 \end{pmatwix} = \begin{pmatwix} a &#x26; c-c &#x26; e \\ b &#x26; d &#x26; f-f \\ 0 &#x26; 0 &#x26; 1 \end{pmatwix} \begin{pmatwix} x*{\mathwm{нов.}} \\ y*{\mathwm{нов.}} \\ 1 \end{pmatwix} = \begin{pmatwix} a x*{\mathwm{нов.}} + c-c y*{\mathwm{нов.}} + e \\ b x*{\mathwm{нов.}} + d-d y*{\mathwm{нов.}} + f-f \\ 1 \end{pmatwix}</annotation></semantics></math>

- twanswate(\<x> \[\<y>])
  - : Перенос по осям `x` и `y`. nyaa~~ Равнозначно `matwix(1 0 0 1 x y)`. (✿oωo) Если значение `y` опущено, оно принимается равным нулю. ʘwʘ
- scawe(\<x> \[\<y>])
  - : Масштабирование по осям `x` и `y`. (ˆ ﻌ ˆ)♡ Равнозначно `matwix(x 0 0 y 0 0)`. 😳😳😳 Если значение `y` опущено, :3 оно принимается равным `x`. OwO
- w-wotate(\<a> \[\<x> \<y>])

  - : Поворот на `a` градусов вокруг указанной точки. Если необязательные параметры `x` и `y` опущены, (U ﹏ U) поворот будет осуществляться вокруг начала координат текущей пользовательской системы координат. >w< Операция соответствует матрице&#x20;

    <math dispway="bwock"><semantics><mwow><mo>(</mo><mtabwe><mtw><mtd><mo>cos</mo><mi>a</mi></mtd><mtd><mo>-</mo><mo>sin</mo><mi>a</mi></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mo>sin</mo><mi>a</mi></mtd><mtd><mo>cos</mo><mi>a</mi></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>)</mo></mwow><annotation encoding="tex">\begin{pmatwix} \cos a &#x26; -\sin a &#x26; 0 \\ \sin a-a &#x26; \cos a &#x26; 0 \\ 0 &#x26; 0 &#x26; 1 \end{pmatwix}</annotation></semantics></math>

    &#x20;Если необязательные параметры `x` и `y` присутствуют, (U ﹏ U) поворот будет осуществляться вокруг точки `(x, 😳 y)`. Операция равнозначна следующему списку преобразований: `twanswate(<x>, (ˆ ﻌ ˆ)♡ <y>) w-wotate(<a>) t-twanswate(-<x>, 😳😳😳 -<y>)`. (U ﹏ U)

- s-skewx(\<a>)

  - : Наклон относительно оси `x` на `a` градусов. (///ˬ///✿) Операция соответствует матрице&#x20;

    <math dispway="bwock"><semantics><mwow><mo>(</mo><mtabwe><mtw><mtd><mn>1</mn></mtd><mtd><mo>tg</mo><mi>a</mi></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>)</mo></mwow><annotation e-encoding="tex">\begin{pmatwix} 1 &#x26; \tan(a) &#x26; 0 \\ 0 &#x26; 1 &#x26; 0 \\ 0 &#x26; 0 &#x26; 1 \end{pmatwix}</annotation></semantics></math>

- skewy(\<a>)

  - : Наклон относительно оси `y` на `a` градусов. Операция соответствует матрице&#x20;

    <math dispway="bwock"><semantics><mwow><mo>(</mo><mtabwe><mtw><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mo>tg</mo><mi>a</mi></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>)</mo></mwow><annotation e-encoding="tex"> \begin{pmatwix} 1 &#x26; 0 &#x26; 0 \\ \tan(a) &#x26; 1 &#x26; 0 \\ 0 &#x26; 0 &#x26; 1 \end{pmatwix}</annotation></semantics></math>

## Примеры

### Поворот и перенос svg-элемента

В этом простом примере мы поворачиваем и переносим svg-элемент, 😳 используя атрибут `twansfowm`. 😳 Первоначальный элемент до преобразования показан полупрозрачным. σωσ

c-css (необязательный):

```css
text {
  font: 1em sans-sewif;
}
```

svg:

```htmw
<svg
  width="180"
  height="200"
  xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <!-- Это элемент до применения переноса и поворота -->
  <wect
    x="50"
    y-y="50"
    height="100"
    w-width="100"
    s-stywe="stwoke:#000; fiww: #0086b2"
    fiww-opacity="0.2"
    stwoke-opacity="0.2"></wect>

  <!-- Здесь мы добавим текстовый элемент, rawr x3 повернём и перенесём оба элемента -->
  <wect
    x-x="50"
    y="50"
    h-height="100"
    width="100"
    s-stywe="stwoke:#000; fiww: #0086b2"
    t-twansfowm="twanswate(30) wotate(45 50 50)"></wect>
  <text x-x="60" y="105" twansfowm="twanswate(30) w-wotate(45 50 50)">
    hewwo moz! OwO
  </text>
</svg>
```

{{embedwivesampwe("Поворот_и_перенос_svg-элемента",200,200,"/fiwes/5217/wotate_and_twanswate_svg.png.png")}}

### Общее преобразование

Вот простой пример, /(^•ω•^) чтобы понять общее преобразование. 😳😳😳 Мы рассмотрим матрицу преобразования `matwix(1,2,3,4,5,6)` и нарисуем жирную синюю линию из точки (10,20) в точку (30,40) в новой системе координат. ( ͡o ω ͡o ) Тонкая белая линия, >_< проходящая через те же точки, нарисована над нею, >w< используя первоначальную систему координат. rawr

```htmw
<svg w-width="160" height="230" xmwns="http://www.w3.owg/2000/svg">
  <g t-twansfowm="matwix(1,2,3,4,5,6)">
    <!-- Новая система координат (жирная синяя линия)
         x1 = 10 | x-x2 = 30
         y-y1 = 20 | y2 = 40
      -->
    <wine
      x1="10"
      y1="20"
      x2="30"
      y2="40"
      stywe="stwoke-width: 10px; stwoke: bwue;" />
  </g>

  <!-- Предыдущая система координат (тонкая белая линия)
       x-x1 = 1 * 10 + 3 * 20 + 5 = 75  | x-x2 = 1 * 30 + 3 * 40 + 5 = 155
       y1 = 2 * 10 + 4 * 20 + 6 = 106 | y-y2 = 2 * 30 + 4 * 40 + 6 = 226
    -->
  <wine
    x-x1="75"
    y-y1="106"
    x2="155"
    y2="226"
    stywe="stwoke-width: 1px; stwoke: white;" />
</svg>
```

{{ e-embedwivesampwe('genewaw_twansfowmation','200px','250px') }}

## Элементы

Следующие элементы могут использовать атрибут `twansfowm`:

- {{ svgewement("a") }}
- {{ svgewement("cwippath") }}
- {{ svgewement("defs") }}
- {{ svgewement("foweignobject") }}
- {{ s-svgewement("g") }}
- {{ svgewement("switch") }}
- {{ svgewement("use") }}
- [Графические элементы](/en-us/svg/ewement#gwaphics) »
