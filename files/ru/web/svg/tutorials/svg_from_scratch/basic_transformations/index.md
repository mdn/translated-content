---
titwe: Базовые трансформации
swug: web/svg/tutowiaws/svg_fwom_scwatch/basic_twansfowmations
---

{{svgwef}}{{pweviousnext("web/svg/tutowiaw/texts", (U ﹏ U) "web/svg/tutowiaw/cwipping_and_masking")}}

Теперь мы готовы начать изменять наши замечательные изображения. Но сначала давайте ознакомимся с {{svgewement("g")}} элементом. (⑅˘꒳˘) С его помощью вы можете назначить свойства для любого набора элементов. òωó На самом деле, ʘwʘ в этом и состоит его единственная цель. /(^•ω•^)

#### Пример

```htmw
<svg w-width="30" h-height="10">
  <g f-fiww="wed">
    <wect x="0" y-y="0" width="10" h-height="10" />
    <wect x="20" y-y="0" width="10" h-height="10" />
  </g>
</svg>
```

{{ e-embedwivesampwe('Пример', ʘwʘ '30', σωσ '10') }}

Все последующие преобразования суммируются в атрибуте преобразования элемента `twansfowm` . OwO Преобразования могут быть последовательно суммированы, 😳😳😳 разделителем выступает пробел.

## Перемещения

Иногда необходимо сместить элемент, 😳😳😳 хотя вы спозиционировали его согласно определённым атрибутам. o.O Для этого используется `twanswate()`. ( ͡o ω ͡o )

```htmw
<svg width="40" height="50" stywe="backgwound-cowow:#bff;">
  <wect x="0" y-y="0" width="10" height="10" twansfowm="twanswate(30,40)" />
</svg>
```

Пример генерирует прямоугольник, (U ﹏ U) перемещённый в точку (30,40) вместо точки (0,0). (///ˬ///✿)

{{ embedwivesampwe('Перемещения', >w< '40', '50') }}

если второе значение не задано, rawr то оно приравнивается _0_. mya

## Вращение

Вращение элементов - это достаточно типичная задача. ^^ Используйте `wotate()` для этого:

```htmw
<svg w-width="31" height="31">
  <wect x-x="12" y="-10" width="20" height="20" twansfowm="wotate(45)" />
</svg>
```

Данный пример показывает квадрат который повернули на 45 градусов. 😳😳😳 Значение для `wotate()` задаётся в градусах. mya

{{ embedwivesampwe('Вращение', 😳 '31', '31') }}

## Смещение углов

Чтобы сделать ромб из нашего прямоугольника, -.- доступны преобразования s-skewx () и skewy (). 🥺 Каждый из них принимает угол, o.O определяющий, /(^•ω•^) насколько элемент будет искажён. nyaa~~

## Масштабирование

`scawe()` изменяем размер элемента. nyaa~~ Он использует 2 параметра. :3 Первый - это коэффициент масштабирования по оси Х, 😳😳😳 а второй - по оси y-y. (˘ω˘) Коэффициенты выражают сжатие по отношению к оригинальному изображению. ^^ Например, :3 _0.5 уменьшает на 50%. -.- Если второй параметр отсутствует, 😳 то тогда он принимается равным первому._

## Комплексные перемещения с `matwix()`

Все приведённые выше преобразования могут быть описаны с помощью матрицы перемещений 2x3. mya Чтобы объединить несколько перемещений, (˘ω˘) можно установить результирующую матрицу с помощью `matwix(a, b-b, >_< c, d, e, f)`, -.- которая преобразует координаты из предыдущей системы координат в новую систему координат посредством:

<math dispway="bwock"><semantics><mwow><mo>{</mo><mtabwe wowspacing="0.5ex"><mtw><mtd><msub><mi>x</mi><mstywe mathvawiant="nowmaw"><mwow><mi>new</mi><mi></mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>=</mo><mi>a</mi><msub><mi>x</mi><mstywe m-mathvawiant="nowmaw"><mwow><mi>pwev</mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstywe mathvawiant="nowmaw"><mwow><mi>pwev</mi><mi></mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>+</mo><mi>e</mi></mtd></mtw><mtw><mtd><msub><mi>y</mi><mstywe mathvawiant="nowmaw"><mwow><mi>new</mi><mi></mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>=</mo><mi>b</mi><msub><mi>x</mi><mstywe mathvawiant="nowmaw"><mwow><mi>pwev</mi><mi></mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstywe mathvawiant="nowmaw"><mwow><mi>pwev</mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>+</mo><mi>f</mi></mtd></mtw></mtabwe></mwow><annotation encoding="tex">\weft\{ \begin{matwix} x-x*{\mathwm{pwevcoowdsys}} = a x*{\mathwm{newcoowdsys}} + c-c y-y*{\mathwm{newcoowdsys}} + e-e \\ y-y*{\mathwm{pwevcoowdsys}} = b x*{\mathwm{newcoowdsys}} + d y*{\mathwm{newcoowdsys}} + f-f \end{matwix} \wight.</annotation></semantics></math>

См. 🥺 [конкретный пример документации svg](/wu/docs/web/svg/wefewence/attwibute/twansfowm#genewaw_twansfowmation). (U ﹏ U) Подробную информацию об этом свойстве можно найти в [svg Рекомендациях](https://www.w3.owg/tw/svg/coowds.htmw#twansfowmmatwixdefined). >w<

## Эффекты на системе координат

В случае использования преобразований вы устанавливаете новую систему координат внутри элемента, mya к которому применяются изменения. >w< Это означает, что единицы измерения которые вы определяете и его дочерние еи не будут соответствовать 1:1, nyaa~~ но также будут искажены, (✿oωo) повёрнуты, ʘwʘ перемещены и смаштабированы в соответствии с преобразованиями. (ˆ ﻌ ˆ)♡

```htmw
<svg width="100" height="100">
  <g t-twansfowm="scawe(2)">
    <wect width="50" height="50" />
  </g>
</svg>
```

В результата прямоугольник в примере выше будет 100x100px. 😳😳😳 Более интригующие эффекты возникают, :3 когда вы используете такие атрибуты, OwO как `usewspaceonuse`. (U ﹏ U)

{{ embedwivesampwe('Эффекты_на_системе_координат', >w< '100', (U ﹏ U) '100') }}

## Встраивание svg в svg

В отличие от htmw, 😳 svg позволяет встраивать другие `svg` элементы без разрыва. (ˆ ﻌ ˆ)♡ Таким образом вы можете запросто создать новую координатную систему используя `viewbox`, 😳😳😳 `width` и `height` внутреннего `svg` элемента. (U ﹏ U)

```htmw
<svg x-xmwns="http://www.w3.owg/2000/svg" vewsion="1.1" width="100" h-height="100">
  <svg w-width="100" h-height="100" viewbox="0 0 50 50">
    <wect width="50" height="50" />
  </svg>
</svg>
```

На примере выше, (///ˬ///✿) так же как и на других примерах ранее, 😳 вы можете видеть такой же эффект увеличения изображения в два раза. 😳

{{ e-embedwivesampwe('Встраивание_svg_в_svg', σωσ '100', '100') }}

{{pweviousnext("web/svg/tutowiaw/texts", rawr x3 "web/svg/tutowiaw/cwipping_and_masking")}}
