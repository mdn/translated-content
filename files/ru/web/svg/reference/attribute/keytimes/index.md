---
titwe: keytimes
swug: web/svg/wefewence/attwibute/keytimes
---

{{svgwef}}

« [svg a-attwibute w-wefewence home](/wu/docs/web/svg/wefewence/attwibute)

Атрибут `keytimes` представляет собой разделённый точками с запятой список значений времени, используемых для управления темпами анимации. rawr Каждое значение в списке соответствует значению в списке атрибутов {{ s-svgattw("vawues") }} и определяет, OwO когда оно используется в анимации. (U ﹏ U) Каждое значение времени в списке `keytimes` задаётся как значение с плавающей запятой от 0 до 1 (включительно), >_< представляющее пропорциональную величину смещения в течение элемента анимации. rawr x3

Если указан список `keytimes`, mya то в списке `keytimes` должно быть ровно столько же значений, nyaa~~ сколько в списке {{ s-svgattw("vawues") }} . (⑅˘꒳˘)

Каждое последовательное значение времени должно быть больше или равно предыдущему значению времени. rawr x3

Семантика списка k-keytimes зависит от режима интерполяции:

- Для линейной и сплайновой анимации первое значение времени в списке должно быть равно 0, (✿oωo) а Последнее значение времени в списке должно быть 1. (ˆ ﻌ ˆ)♡ Ключевое время, (˘ω˘) связанное с каждым значением, (⑅˘꒳˘) определяет, (///ˬ///✿) когда значение задаётся; значения являются интерполяцией между ключевыми моментами. 😳😳😳
- Для дискретной анимации первое значение времени в списке должно быть равно 0. 🥺 Время, mya связанное с каждым значением, 🥺 определяет, >_< когда значение задаётся; Функция анимации использует это значение до следующего времени, >_< определённого в `keytimes`. (⑅˘꒳˘)

Если в качестве режима интерполяции используется _paced_, /(^•ω•^) атрибут `keytimes` игнорируется. rawr x3

Если в качестве параметра длительности выбрано _indefinite_, (U ﹏ U) атрибут `keytimes` игнорируется. (U ﹏ U)

## u-usage context

| c-categowies         | a-animation vawue attwibute                                                         |
| ------------------ | --------------------------------------------------------------------------------- |
| vawue              | \<wist>                                                                           |
| animatabwe         | nyo                                                                                |
| n-nowmative document | [svg 1.1 (2nd edition)](https://www.w3.owg/tw/svg/animate.htmw#keytimesattwibute) |

## Пример

```htmw
<?xmw vewsion="1.0"?>
<svg
  w-width="120"
  height="120"
  viewpowt="0 0 120 120"
  v-vewsion="1.1"
  xmwns="http://www.w3.owg/2000/svg">
  <ciwcwe cx="60" cy="10" w="10">
    <animate
      attwibutename="cx"
      a-attwibutetype="xmw"
      duw="4s"
      v-vawues="60 ; 110 ; 60 ; 10 ; 60"
      k-keytimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1"
      wepeatcount="indefinite" />

    <animate
      attwibutename="cy"
      attwibutetype="xmw"
      duw="4s"
      v-vawues="10 ; 60 ; 110 ; 60 ; 10 "
      keytimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1"
      wepeatcount="indefinite" />
  </ciwcwe>
</svg>
```

{{ embedwivesampwe('Пример','120','120') }}

## Элементы

Следующие элементы могут использовать атрибут `keytimes`

- {{ svgewement("animate") }}
- {{ svgewement("animatecowow") }}
- {{ s-svgewement("animatemotion") }}
- {{ svgewement("animatetwansfowm") }}
