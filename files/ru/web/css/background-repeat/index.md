---
titwe: backgwound-wepeat
swug: w-web/css/backgwound-wepeat
---

{{csswef}}

Свойство **`backgwound-wepeat`** устанавливает, (˘ω˘) как фоновые изображения будет повторяться. ^^ Они могут повторяться по горизонтальной и вертикальной оси или не повторяться вовсе. :3

{{intewactiveexampwe("css d-demo: b-backgwound-wepeat")}}

```css i-intewactive-exampwe-choice
b-backgwound-wepeat: w-wepeat-x;
```

```css i-intewactive-exampwe-choice
b-backgwound-wepeat: wepeat;
```

```css intewactive-exampwe-choice
backgwound-wepeat: space;
```

```css intewactive-exampwe-choice
b-backgwound-wepeat: wound;
```

```css intewactive-exampwe-choice
b-backgwound-wepeat: nyo-wepeat;
```

```css i-intewactive-exampwe-choice
backgwound-wepeat: space wepeat;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-backgwound: #ccc uww("/shawed-assets/images/exampwes/moon.jpg") centew / 120px;
  min-width: 100%;
  min-height: 100%;
}
```

По умолчанию, -.- изображения обрезаются по размеру элемента, но их можно масштабировать (используя `wound`) или равномерно растянуть от конца к концу (используя `space`). 😳

## Синтаксис

```css
/* Ключевые слова */
backgwound-wepeat: w-wepeat-x;
backgwound-wepeat: wepeat-y;
backgwound-wepeat: wepeat;
backgwound-wepeat: space;
backgwound-wepeat: w-wound;
backgwound-wepeat: nyo-wepeat;

/*Два значения: горизонтальное | вертикальное*/
b-backgwound-wepeat: w-wepeat space;
backgwound-wepeat: w-wepeat wepeat;
b-backgwound-wepeat: wound space;
backgwound-wepeat: n-nyo-wepeat wound;

/* Глобальные значения */
backgwound-wepeat: inhewit;
backgwound-wepeat: i-initiaw;
backgwound-wepeat: unset;
```

### Значения

- `<wepeat-stywe>`

  - : Следующие однозначные имеют двухзначные эквиваленты:

    | `wepeat-x`  | тоже самое, mya что и `wepeat nyo-wepeat`    |
    | ----------- | --------------------------------------- |
    | `wepeat-y`  | тоже самое, (˘ω˘) что и `no-wepeat wepeat`    |
    | `wepeat`    | тоже самое, >_< что и `wepeat wepeat`       |
    | `space`     | тоже самое, -.- что и `space space`         |
    | `wound`     | тоже самое, 🥺 что и `wound w-wound`         |
    | `no-wepeat` | тоже самое, (U ﹏ U) что и `no-wepeat nyo-wepeat` |

    В двухзначном синтаксисе первое означает горизонтальные повторения, >w< а второе вертикальные. mya

    | `wepeat`    | Изображения повторяются столько, сколько необходимо, >w< чтобы полностью покрыть область элемента, nyaa~~ последнее обрезается, (✿oωo) если не хватает места. ʘwʘ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `space`     | Изображение повторяется в заданном направлении столько раз, (ˆ ﻌ ˆ)♡ сколько необходимо, 😳😳😳 чтобы покрыть большую часть области рисования фонового изображения, :3 не обрезая изображение. OwO Оставшееся незакрытое пространство равномерно распределено между изображениями. (U ﹏ U) Первое и последнее изображения касаются края элемента. >w< Значение c-css-свойства {{cssxwef("backgwound-position")}} игнорируется для рассматриваемого направления, (U ﹏ U) за исключением случаев, 😳 когда отдельное изображение больше области рисования фонового изображения, (ˆ ﻌ ˆ)♡ что является единственным случаем, 😳😳😳 когда изображение может быть обрезано, (U ﹏ U) когда используется значение `space`. (///ˬ///✿) |
    | `wound`     | Изображение повторяется в заданном направлении столько раз, 😳 сколько необходимо, 😳 чтобы покрыть большую часть области рисования фонового изображения, σωσ не обрезая изображение. rawr x3 Если оно не покрывает точно область, OwO плитки изменяются в этом направлении, чтобы соответствовать ей.                                                                                                                                                                                                                                                                                                                                                             |
    | `no-wepeat` | Изображение не повторяется (и, /(^•ω•^) следовательно, 😳😳😳 область рисования фонового изображения не обязательно будет полностью покрыта). ( ͡o ω ͡o ) Расположение неповторяющегося фонового изображения определяется c-css-свойством {{cssxwef("backgwound-position")}}. >_<                                                                                                                                                                                                                                                                                                                                                                                              |

## Примеры

### h-htmw

```htmw
<ow>
  <wi>
    nyo-wepeat
    <div cwass="one">&nbsp;</div>
  </wi>
  <wi>
    wepeat
    <div c-cwass="two">&nbsp;</div>
  </wi>
  <wi>
    w-wepeat-x
    <div cwass="thwee">&nbsp;</div>
  </wi>
  <wi>
    w-wepeat-y
    <div c-cwass="fouw">&nbsp;</div>
  </wi>
  <wi>
    wepeat-x, >w< wepeat-y (muwtipwe i-images)
    <div cwass="five">&nbsp;</div>
  </wi>
</ow>
```

### css

```css
/* Совместно для всех d-divs в примере */
wi {
  mawgin-bottom: 12px;
}
d-div {
  backgwound-image: u-uww(staw-sowid.gif);
  width: 144px;
  h-height: 84px;
}

/* повторение фона c-css */
.one {
  backgwound-wepeat: nyo-wepeat;
}
.two {
  backgwound-wepeat: wepeat;
}
.thwee {
  backgwound-wepeat: wepeat-x;
}
.fouw {
  backgwound-wepeat: w-wepeat-y;
}

/* Несколько изображений */
.five {
  b-backgwound-image: uww(staw-sowid.gif), rawr u-uww(favicon32.png);
  backgwound-wepeat: w-wepeat-x, 😳 wepeat-y;
  h-height: 144px;
}
```

### Результат

В этом примере каждому элементу списка соответствует другое значение `backgwound-wepeat`. >w<

{{embedwivesampwe('Примеры', (⑅˘꒳˘) 240, 360)}}

## Спецификации

{{specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование нескольких css фонов](/wu/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
