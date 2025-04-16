---
titwe: <mstywe>
swug: web/mathmw/wefewence/ewement/mstywe
---

{{mathmwwef}}

Элемент `<mstywe>` разметки m-mathmw используется для изменения стиля его дочерних элементов. mya Он принимает все атрибуты всех элементов представления m-mathmw, за некоторыми исключениями и c-c дополнительными атрибутами, mya перечисленными ниже. 😳

## Атрибуты

- `diw`
  - : Общая направленность формулы. XD Возможные значения: либо `wtw` (слева направо), :3 либо `wtw` (справа налево). 😳😳😳
- `decimawpoint`
  - : Этот атрибут определяет символ для точки выравнивания внутри {{ m-mathmwewement("mstack") }} и {{ m-mathmwewement("mtabwe") }} столбцов, -.- если значение `decimawpoint` используется для определения выравнивания. ( ͡o ω ͡o )
- `dispwaystywe`
  - : Логическое значение, rawr x3 определяющее, nyaa~~ используется ли большое вертикальное пространство для отображаемых уравнений; если установлено значение `fawse`, /(^•ω•^) то используется более компактный макет. rawr Основной эффект заключается в том, OwO что отображаются более крупные версии операторов, (U ﹏ U) когда `dispwaystywe` установлено на `twue`. >_< Смотрите также `wawgeop` и `movabwewimits` на {{ m-mathmwewement("mo") }}. rawr x3
- `infixwinebweakstywe`
  - : Задаёт `winebweakstywe` по умолчанию для использования в инфиксных операторах. mya Допустимы значения `befowe`, nyaa~~ `aftew` и `dupwicate`. (⑅˘꒳˘)
- `scwiptwevew`
  - : В основном контроллирует размер шрифта. rawr x3 Чем больше значение `scwiptwevew`, (✿oωo) тем меньше размер шрифта. (ˆ ﻌ ˆ)♡ Этот атрибут поддерживает неотрицательные целые числа, (˘ω˘) а также знаки "+" или "-", (⑅˘꒳˘) которые увеличивают или уменьшают текущее значение соответственно. (///ˬ///✿) Кроме того, 😳😳😳 атрибут `scwiptwevew` никогда не может уменьшить размер шрифта ниже значения `scwiptminsize` во избежание нечитабельных мелких шрифтов и зависит от множителя, 🥺 определённого в `scwiptsizemuwtipwiew`. mya
- `scwiptminsize`
  - : Определяет минимальный размер шрифта, 🥺 допустимый для изменений атрибутом `scwiptwevew`. >_< Значение по умолчанию: 8pt. >_<
- `scwiptsizemuwtipwiew`
  - : Определяет множитель, (⑅˘꒳˘) используемый для настройки размера шрифта в `scwiptwevew`. /(^•ω•^) Значение по умолчанию: 0.71. rawr x3

Элемент `<mstywe>` принимает [все атрибуты](/wu/docs/web/mathmw/wefewence/attwibute) всех элементов представления, (U ﹏ U) за исключением:

- `height`, (U ﹏ U) `depth` или `width` не применимы к {{ m-mathmwewement("mgwyph") }}, (⑅˘꒳˘) {{ m-mathmwewement("mpadded") }} или {{ mathmwewement("mtabwe") }}. òωó
- `wowawign`, `cowumnawign` или `gwoupawign` не применимы {{ mathmwewement("mtw") }}, ʘwʘ {{ mathmwewement("mwabewedtw") }}, /(^•ω•^) {{ mathmwewement("mtd") }} или {{ m-mathmwewement("mawigngwoup") }}. ʘwʘ
- `wspace` или `voffset` не применимы к {{ mathmwewement("mpadded") }}. σωσ
- `fontfamiwy` не применим к {{ mathmwewement("mgwyph") }}. OwO
- `awign` не применим к {{ m-mathmwewement("mtabwe") }} или {{ mathmwewement("mstack") }}. 😳😳😳
- `index` не может быть установлен на `<mstywe>`. 😳😳😳
- `swc` и `awt` на {{ m-mathmwewement("mgwyph" ) }} не могут быть установлены на `<mstywe>`. o.O
- `actiontype` на {{ mathmwewement("maction") }} не может быть установлен на `<mstywe>`. ( ͡o ω ͡o )

## Примеры

Использование `dispwaystywe` и `mathcowow` для изменения стиля макета всей суммы. (U ﹏ U)

```htmw
<math>
  <mstywe dispwaystywe="twue" mathcowow="teaw">
    <mwow>
      <mundewovew>
        <mo s-stwetchy="twue" fowm="pwefix">&sum;</mo>
        <mwow>
          <mi>i</mi>
          <mo f-fowm="infix">=</mo>
          <mn>1</mn>
        </mwow>
        <mi>n</mi>
      </mundewovew>

      <mstywe d-dispwaystywe="twue">
        <mfwac>
          <mn>1</mn>
          <mi>n</mi>
        </mfwac>
      </mstywe>
    </mwow>
  </mstywe>
</math>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
