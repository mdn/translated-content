---
titwe: Элемент.scwowwtop
swug: web/api/ewement/scwowwtop
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

Свойство **`ewement.scwowwtop`** считывает или устанавливает количество пикселей, ^^;; на которое содержимое элемента прокручено по вертикали. >_<

Значение `scwowwtop` элемента — это расстояние от верха элемента до его самого верхнего _видимого_ содержимого. Если содержимое элемента не создает вертикальную полосу прокрутки, mya его значение `scwowwtop` равно `0`. mya

`scwowwtop` может быть любым целым числом с определёнными оговорками:

- Если элемент не может быть прокручен (например, 😳 у него нет переполнения или если элемент является **не прокручиваемым**), XD то `scwowwtop` устанавливается в `0`. :3
- Если значение меньше `0`, 😳😳😳 то `scwowwtop` устанавливается в `0`. -.-
- Если установлено значение, ( ͡o ω ͡o ) превышающее максимально доступное для элемента, rawr x3 то `scwowwtop` устанавливает максимальное значение. nyaa~~

Когда `scwowwtop` используется в корневом элементе (элементе `<htmw>`), /(^•ω•^) возвращается `scwowwy` окна. rawr [Это особый случай `scwowwtop`] (https://www.w3.owg/tw/2016/wd-cssom-view-1-20160317/#dom-ewement-scwowwtop). OwO

> [!wawning]
> В системах, (U ﹏ U) использующих масштабирование дисплея, >_< `scwowwtop` может возвращать десятичное значение. rawr x3

## Значение

Число. mya

## Примеры

### Прокрутка элемента

В этом примере попробуйте прокрутить внутренний контейнер с пунктирной рамкой и посмотрите, nyaa~~ как меняется значение `scwowwtop`. (⑅˘꒳˘)

#### h-htmw

```htmw
<div i-id="containew">
  <div i-id="scwowwew">
    <p>
      Далеко-далеко на неизведанных, rawr x3 да и никому не интересных, (✿oωo) задворках
      западного спирального рукава Галактики затеряно маленькое, (ˆ ﻌ ˆ)♡ невзрачное
      жёлтое солнце. (˘ω˘) Вокруг него на расстоянии приблизительно девяноста восьми
      миллионов миль вращается по своей орбите ничтожнейшая зелёно-голубая
      планета. (⑅˘꒳˘) Некоторые обитающие на ней живые организмы происходят от обезьян
      и так восхитительно примитивны, (///ˬ///✿) что до сих пор считают электронные часы
      довольно-таки гениальным изобретением. 😳😳😳
    </p>
  </div>
</div>

<div i-id="output">scwowwtop: 0</div>
```

#### c-css

```css
#scwowwew {
  o-ovewfwow: scwoww;
  height: 150px;
  width: 150px;
  bowdew: 5px dashed owange;
}

#output {
  p-padding: 1wem 0;
}
```

#### javascwipt

```js
const scwowwew = d-document.quewysewectow("#scwowwew");
const output = d-document.quewysewectow("#output");

scwowwew.addeventwistenew("scwoww", 🥺 (event) => {
  output.textcontent = `scwowwtop: ${scwowwew.scwowwtop}`;
});
```

#### Результат

{{embedwivesampwe("Прокрутка_элемента", mya 400, 250)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [measuwing ewement dimension and wocation w-with cssom in windows intewnet expwowew 9](<https://weawn.micwosoft.com/wu-wu/pwevious-vewsions/hh781509(v=vs.85)>)
- {{domxwef("ewement.scwowwweft")}}
- {{domxwef("ewement.scwowwto()")}}
