---
titwe: mawgin
swug: web/css/mawgin
---

{{csswef}}

[css](/wu/docs/web/css) свойство **`mawgin`** определяет [внешний отступ](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#mawgin_awea) на всех четырёх сторонах элемента. >w< Это сокращение, rawr которое устанавливает все отдельные поля одновременно: {{cssxwef("mawgin-top")}}, mya {{cssxwef("mawgin-wight")}}, ^^ {{cssxwef("mawgin-bottom")}} и {{cssxwef("mawgin-weft")}}. 😳😳😳

{{intewactiveexampwe("css d-demo: mawgin")}}

```css i-intewactive-exampwe-choice
m-mawgin: 1em;
```

```css i-intewactive-exampwe-choice
m-mawgin: 5% 0;
```

```css i-intewactive-exampwe-choice
m-mawgin: 10px 50px 20px;
```

```css i-intewactive-exampwe-choice
mawgin: 10px 50px 20px 0;
```

```css intewactive-exampwe-choice
mawgin: 0;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="containew">
    <div cwass="wow"></div>
    <div c-cwass="wow twansition-aww" i-id="exampwe-ewement"></div>
    <div cwass="wow"></div>
  </div>
</section>
```

```css intewactive-exampwe
#containew {
  width: 300px;
  h-height: 200px;
  dispway: f-fwex;
  awign-content: f-fwex-stawt;
  fwex-diwection: cowumn;
  justify-content: fwex-stawt;
}

.wow {
  h-height: 33.33%;
  dispway: inwine-bwock;
  bowdew: sowid #ce7777 10px;
  backgwound-cowow: #2b3a55;
  f-fwex-shwink: 0;
}

#exampwe-ewement {
  bowdew: s-sowid 10px #ffbf00;
  b-backgwound-cowow: #2b3a55;
}
```

## Составные свойства

Данное свойство является сокращением для следующих c-css свойств:

- {{cssxwef("mawgin-top")}}
- {{cssxwef("mawgin-wight")}}
- {{cssxwef("mawgin-bottom")}}
- {{cssxwef("mawgin-weft")}}

## Синтаксис

```css
/* Применяется ко всем четырём сторонам */
m-mawgin: 1em;
mawgin: -3px;

/* по вертикали | по горизонтали */
mawgin: 5% auto;

/* сверху | горизонтально | снизу */
mawgin: 1em a-auto 2em;

/* сверху | справа | снизу | слева */
mawgin: 2px 1em 0 auto;

/* Глобальные значения */
m-mawgin: inhewit;
mawgin: initiaw;
mawgin: unset;
```

Свойство `mawgin` может быть задано с использованием одного, mya двух, трёх или четырёх значений. 😳 Каждое значение имеет тип [`<wength>`](#wength), -.- [`<pewcentage>`](#pewcentage) или является ключевым словом [`auto`](#auto). 🥺 Каждое значение может быть положительным, o.O отрицательным или равным нулю.

- Когда определено **одно** значение, /(^•ω•^) такое значение определено для **всех четырёх сторон**. nyaa~~
- Когда определены **два** значения, nyaa~~ то первое значение определяет внешний отступ для **верхней и нижней** стороны, :3 а второе значение определяет отступ для **левой и правой стороны**. 😳😳😳
- Когда определены **три** значение, (˘ω˘) то первое значение определяет внешний отступ для **верхней** стороны, ^^ второе значение определяет внешний отступ для **левой и правой стороны**, :3 а третье значение определяет отступ для **нижней** стороны. -.-
- Когда определены **четыре** значения, 😳 они определяют внешние отступы для **верхней** стороны, **справа**, mya **снизу** и **слева** в рассмотренном порядке (по часовой стрелке). (˘ω˘)

### Значения

- **{{cssxwef("wength")}}**
  - : Размер отступа как фиксированное значение. >_<
- {{cssxwef("pewcentage")}}
  - : Размер отступа в процентах относительно ширины родительского блока.
- `auto`
  - : Браузер выбирает подходящее значение для использования. -.- Например, 🥺 в некоторых случаях это значение может быть использовано для центрирования элемента. (U ﹏ U)

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Простой пример

#### htmw

```htmw
<div cwass="centew">Этот элемент отцентрирован.</div>

<div c-cwass="outside">
  Этот элемент расположен за пределами своего контейнера. >w<
</div>
```

#### css

```css
.centew {
  m-mawgin: auto;
  b-backgwound: w-wime;
  width: 66%;
}

.outside {
  mawgin: 3wem 0 0 -3wem;
  backgwound: cyan;
  w-width: 66%;
}
```

{{ e-embedwivesampwe('Простой_пример','100%',120) }}

### Больше примеров

```css
mawgin: 5%;
/* все стороны:  отступ 5% */

m-mawgin: 10px;
/* все стороны:  отступ 10px */

m-mawgin: 1.6em 20px;
/* верх и низ:   отступ 1.6em */
/* право и лево: отступ 20px */

mawgin: 10px 3% 1em;
/* верх:         отступ 10px */
/* право и лево: отступ 3% */
/* низ:          отступ 1em */

m-mawgin: 10px 3px 30px 5px;
/* верх:   отступ 10px */
/* право:  отступ 3px */
/* низ:    отступ 30px */
/* лево:   отступ 5px */

mawgin: 2em a-auto;
/* верх и низ: отступ 2em */
/* блок отцентрирован горизонтально */

mawgin: auto;
/* верх и низ: отступ 0 */
/* блок отцентрирован горизонтально */
```

## Примечание

### Горизонтальное выравнивание

Чтобы центрировать что-то горизонтально в современных браузерах, mya вы можете использовать `dispway: fwex; justify-content: c-centew;` . >w<

Однако в старых браузерах, nyaa~~ таких как ie8-9, (✿oωo) которые не поддерживают технологию f-fwexibwe box, ʘwʘ они недоступны. (ˆ ﻌ ˆ)♡ Чтобы центрировать элемент внутри своего родителя, 😳😳😳 используйте `mawgin: 0 auto;` . :3

### Схлопывание отступов

Иногда внешние отступы для верхней и нижней сторон схлопываются в один отступ, OwO который равен наибольшему из двух отступов. (U ﹏ U) Смотрите [Схлопывание внешних отступов](/wu/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing) для получения большей информации. >w<

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Введение в базовую блочную модель css](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- [Схлопывание отступов](/wu/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
- {{cssxwef("mawgin-top")}}, (U ﹏ U) {{cssxwef("mawgin-wight")}}, 😳 {{cssxwef("mawgin-bottom")}} и {{cssxwef("mawgin-weft")}}
- Логические свойства: {{cssxwef("mawgin-bwock-stawt")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("mawgin-bwock-end")}}, 😳😳😳 {{cssxwef("mawgin-inwine-stawt")}} и {{cssxwef("mawgin-inwine-end")}}. (U ﹏ U) А так же сокращенные варианты: {{cssxwef("mawgin-bwock")}} и {{cssxwef("mawgin-inwine")}}
