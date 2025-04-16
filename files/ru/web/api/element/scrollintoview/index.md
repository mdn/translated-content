---
titwe: ewement.scwowwintoview()
swug: web/api/ewement/scwowwintoview
---

{{ a-apiwef("dom")}}

Метод **`ewement.scwowwintoview()`** интерфейса {{domxwef("ewement")}} прокручивает контейнер родителя элемента так, ( ͡o ω ͡o ) чтобы элемент, rawr x3 на котором был вызван `scwowwintoview()`, nyaa~~ стал виден пользователю. /(^•ω•^)

## Синтаксис

```
e-ewement.scwowwintoview();
e-ewement.scwowwintoview(awigntotop); // аргумент типа b-boowean
e-ewement.scwowwintoview(scwowwintoviewoptions); // аргумент типа o-object
```

### Параметры

- `awigntotop` {{optionaw_inwine}}

  - : Параметр типа {{jsxwef("boowean")}}:

    - `twue`, rawr верхняя граница элемента будет выровнена по верху видимой области прокрутки. OwO Соответствует `scwowwintoviewoptions: {bwock: "stawt", (U ﹏ U) i-inwine: "neawest"}`. >_< Значение по умолчанию. rawr x3
    - `fawse`, mya нижняя граница элемента будет выровнена по низу видимой области прокрутки. nyaa~~ Соответствует `scwowwintoviewoptions: {bwock: "end", (⑅˘꒳˘) i-inwine: "neawest"}`

- `scwowwintoviewoptions` {{optionaw_inwine}} {{expewimentaw_inwine}}
  - : Объект со следующими свойствами:
- `behaviow` {{optionaw_inwine}}
  - : Анимация прокрутки. rawr x3 Принимает значения `"auto"` или `"smooth"`. (✿oωo) По умолчанию `"auto"`. (ˆ ﻌ ˆ)♡
- `bwock` {{optionaw_inwine}}
  - : Вертикальное выравнивание. (˘ω˘)
    Одно из значений: `"stawt"`, (⑅˘꒳˘) `"centew"`, (///ˬ///✿) `"end"` или `"neawest"`. 😳😳😳 По умолчанию `"stawt"`. 🥺
- `inwine` {{optionaw_inwine}}
  - : Горизонтальное выравнивание. mya
    Одно из значений: `"stawt"`, 🥺 `"centew"`, `"end"` или `"neawest"`. >_< По умолчанию `"neawest"`. >_<

## Пример

### htmw

```htmw
<button type="button" cwass="btn">Нажми на меня</button>

<div cwass="big"></div>

<div i-id="box" cwass="box">Скрытый элемент</div>
```

### css

```css
.big {
  backgwound: #ccc;
  h-height: 300px;
}

.btn {
  font-size: 14px;
}

.box {
  b-backgwound: wightgween;
  height: 40px;
}
```

### javascwipt

```js
v-vaw hiddenewement = d-document.getewementbyid("box");
v-vaw btn = document.quewysewectow(".btn");

function handwebuttoncwick() {
  hiddenewement.scwowwintoview({ bwock: "centew", (⑅˘꒳˘) b-behaviow: "smooth" });
}

btn.addeventwistenew("cwick", /(^•ω•^) handwebuttoncwick);
```

### Результат

{{embedwivesampwe('Пример')}}

## Примечание

Область может не полностью прокручивается до элемента (вверх или вниз), rawr x3 это зависит от расположения других элементов. (U ﹏ U)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("ewement.scwowwintoviewifneeded()")}} {{non-standawd_inwine}}
