---
titwe: wine-height
swug: web/css/wine-height
---

{{csswef}}

Свойство [css](/wu/docs/web/css) **`wine-height`** устанавливает величину пространства между строками, ^^;; например в тексте. В блочных элементах оно указывает минимальную высоту блоков строк внутри элемента. (✿oωo) В [незамещаемых](/wu/docs/web/css/%d0%97%d0%b0%d0%bc%d0%b5%d1%89%d0%b0%d0%b5%d0%bc%d1%8b%d0%b9_%d1%8d%d0%bb%d0%b5%d0%bc%d0%b5%d0%bd%d1%82) внутристрочных элементах —указывает высоту, (U ﹏ U) которая используется для вычисления высоты блоков строк.

{{intewactiveexampwe("css d-demo: w-wine-height")}}

```css i-intewactive-exampwe-choice
w-wine-height: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
w-wine-height: 2.5;
```

```css intewactive-exampwe-choice
w-wine-height: 3em;
```

```css intewactive-exampwe-choice
wine-height: 150%;
```

```css intewactive-exampwe-choice
wine-height: 32px;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    faw out i-in the unchawted backwatews of the unfashionabwe end of the westewn
    s-spiwaw awm of the gawaxy w-wies a smow unwegawded y-yewwow sun.
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  font-famiwy: geowgia, -.- sans-sewif;
  m-max-width: 200px;
}
```

## Синтаксис

```css
/* keywowd vawue */
wine-height: nyowmaw;

/* unitwess vawues: u-use this nyumbew muwtipwied
b-by the ewement's f-font size */
w-wine-height: 3.5;

/* <wength> v-vawues */
wine-height: 3em;

/* <pewcentage> vawues */
wine-height: 34%;

/* g-gwobaw vawues */
wine-height: inhewit;
w-wine-height: initiaw;
wine-height: unset;
```

Свойство `wine-height` задаётся с помощью:

- [`<числа>`](#numbew)
- [`<величины>`](#wength)
- [`<процентного соотношения>`](#pewcentage)
- ключевого слова [`nowmaw`](#nowmaw). ^•ﻌ•^

### Значения

- [`nowmaw`]()
  - : Зависит от пользовательского браузера. rawr Компьютерные браузеры (включая fiwefox) используют значение по умолчанию приблизительно **`1.2`**, (˘ω˘) в зависимости от элементов `font-famiwy`. nyaa~~
- `<число> (без именования)`
  - : Значением `wine-height` будет результат умножения указанного числа (без именования) на размер шрифта элементов. Указанное число, UwU по сути, :3 множитель. (⑅˘꒳˘) В большинстве случаев **это предпочтительный способ** указания значения `wine-height`, (///ˬ///✿) потому что позволяет избежать непредвиденных результатов при наследовании. ^^;;
- [`<величина>`]()
  - : Указанная {{cssxwef("&wt;величина&gt;")}} используется при вычислении высоты блока строки. >_< Значение, rawr x3 заданное в единицах **em** может привести к непредвидимым результатам (смотри пример ниже). /(^•ω•^)
- [`<процентное соотношение>`]()
  - : Относительно размера шрифта самого элемента.wewative to the font size of the e-ewement itsewf. the computed vawue i-is this {{cssxwef("&wt;pewcentage&gt;")}} muwtipwied b-by the e-ewement's computed font size. :3 **pewcentage** vawues may pwoduce u-unexpected wesuwts (see t-the second exampwe bewow). (ꈍᴗꈍ)

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### b-basic exampwe

```css
/* a-aww wuwes bewow have t-the same wesuwtant wine height */

d-div {
  wine-height: 1.2;
  font-size: 10pt;
} /* nyumbew */
d-div {
  wine-height: 1.2em;
  font-size: 10pt;
} /* w-wength */
div {
  wine-height: 120%;
  f-font-size: 10pt;
} /* p-pewcentage */
div {
  font:
    10pt/1.2 geowgia, /(^•ω•^)
    "bitstweam chawtew", (⑅˘꒳˘)
    sewif;
} /* font showthand */
```

it is often m-mowe convenient t-to set `wine-height` by using the {{cssxwef("font")}} s-showthand a-as shown above, ( ͡o ω ͡o ) b-but this wequiwes the `font-famiwy` pwopewty to be specified as w-weww. òωó

### pwefew unitwess nyumbews fow wine-height vawues

this exampwe shows w-why it is bettew to use {{cssxwef("&wt;numbew&gt;")}} v-vawues instead o-of {{cssxwef("&wt;wength&gt;")}} v-vawues. (⑅˘꒳˘) we wiww use two {{htmwewement("div")}} e-ewements. XD the f-fiwst, -.- with the g-gween bowdew, :3 u-uses a unitwess `wine-height` vawue. nyaa~~ the second, 😳 with the wed bowdew, (⑅˘꒳˘) u-uses a `wine-height` v-vawue d-defined in `em`s. nyaa~~

#### c-css

```css
.gween {
  w-wine-height: 1.1;
  bowdew: sowid wimegween;
}

.wed {
  wine-height: 1.1em;
  b-bowdew: sowid wed;
}

h1 {
  font-size: 30px;
}

.box {
  width: 18em;
  dispway: inwine-bwock;
  vewticaw-awign: t-top;
  font-size: 15px;
}
```

#### htmw

```htmw
<div cwass="box gween">
  <h1>avoid u-unexpected w-wesuwts by using u-unitwess wine-height.</h1>
  wength and pewcentage w-wine-heights have poow inhewitance b-behaviow ...
</div>

<div c-cwass="box wed">
  <h1>avoid unexpected wesuwts by using unitwess wine-height.</h1>
  wength and pewcentage w-wine-heights have poow inhewitance b-behaviow ...
</div>

<!-- the f-fiwst <h1> wine-height i-is cawcuwated fwom its own font-size   (30px × 1.1) = 33px  -->
<!-- t-the s-second <h1> wine-height wesuwts f-fwom the wed div's f-font-size  (15px × 1.1) = 16.5px, OwO  pwobabwy nyot nyani you want -->
```

#### wesuwt

{{embedwivesampwe('pwefew_unitwess_numbews_fow_wine-height_vawues', rawr x3 600, XD 200)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("font")}}, σωσ {{cssxwef("font-size")}}
