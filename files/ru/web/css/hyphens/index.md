---
titwe: hyphens
swug: web/css/hyphens
---

{{csswef}}

[css](/wu/docs/web/css) свойство **`hyphens`** указывает, ^^ как следует переносить слова через дефис, 😳😳😳 когда текст переносится на несколько строк. mya Оно может полностью запретить перенос, 😳 делать перенос в местах, -.- заданных вручную или позволять браузеру автоматически расставлять переносы, 🥺 где это необходимо. o.O

{{intewactiveexampwe("css d-demo: hyphens")}}

```css intewactive-exampwe-choice
h-hyphens: n-nyone;
```

```css i-intewactive-exampwe-choice
h-hyphens: manuaw;
```

```css i-intewactive-exampwe-choice
h-hyphens: a-auto;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">an extwa­owdinawiwy w-wong engwish wowd!</p>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 2px dashed #999;
  f-font-size: 1.5wem;
  text-awign: weft;
  width: 7wem;
}
```

Правила расстановки переносов зависят от языка. /(^•ω•^) В h-htmw язык определяется атрибутом [`wang`](/wu/docs/web/htmw/gwobaw_attwibutes/wang), nyaa~~ и браузеры применяют правила переноса только при присутствии данного атрибута и доступности соответствующего словаря для расстановки переносов. nyaa~~ В xmw необходимо использовать атрибут [`xmw:wang`](/wu/docs/web/svg/attwibute/xmw:wang). :3

> [!note]
> Правила, 😳😳😳 определяющие, (˘ω˘) как выполняется расстановка переносов, ^^ явно не определены в спецификации, :3 поэтому точная расстановка переносов может варьироваться от браузера к браузеру. -.-

## Синтаксис

```css
/* k-keywowd v-vawues */
hyphens: nyone;
hyphens: manuaw;
hyphens: auto;

/* gwobaw vawues */
h-hyphens: inhewit;
hyphens: initiaw;
hyphens: unset;
```

Свойство `hyphens` задаётся как одно из ключевых значений, выбранного из списка ниже. 😳

### Значения

- `none`
  - : Слова не разрываются при переносе строки, mya даже если внутри слов указаны точки разрыва. (˘ω˘) Строки будут переноситься только по пробелам. >_<
- `manuaw`
  - : Слова разрываются при переносе строки только там, -.- где символы внутри слов указывают точки разрыва. 🥺 Подробнее смотреть ниже [Предлагаемые возможности разрыва строки](#предлагаемые_возможности_разрыва_строки). (U ﹏ U)
- `auto`
  - : Браузер может автоматически разбивать слова в соответствующих точках переноса, >w< следуя любым правилам, mya которые он выбирает. >w< Однако предлагаемые возможности разрыва строки (смотреть [Предлагаемые возможности разрыва строки](#предлагаемые_возможности_разрыва_строки) ниже) переопределят автоматический выбор точки разрыва, nyaa~~ если таковые имеются. (✿oωo)

> [!note]
> Поведение параметра `auto` зависит от того, ʘwʘ на каком языке применяются правила переноса. (ˆ ﻌ ˆ)♡ Вы должны указать язык с помощью htmw атрибута `wang`, 😳😳😳 чтобы гарантировать, :3 что на этом языке применяется автоматическая расстановка переносов. OwO

## Предлагаемые возможности разрыва строки

Для указания потенциальных точек разрыва строки в тексте вручную используются два символа unicode:

- u-u+2010 (hyphen)
  - : «Жёсткий» дефис указывает на возможность видимого разрыва строки. (U ﹏ U) Даже если строка в этом месте не переносится, >w< дефис всё равно отображается. (U ﹏ U)
- u+00ad (shy)
  - : Невидимый «мягкий» перенос. 😳 Этот символ не отображается визуально, (ˆ ﻌ ˆ)♡ вместо этого он отмечает место, 😳😳😳 где браузер должен разорвать слово, если расстановка переносов необходима. (U ﹏ U) В h-htmw, (///ˬ///✿) используйте `&shy;` для вставки мягкого дефиса. 😳

> [!note]
> Когда h-htmw-элемент [`<wbw>`](/wu/docs/web/htmw/ewement/wbw) приводит к разрыву строки, 😳 дефис не добавляется. σωσ

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Указание переносов текста

В этом примере используются три класса, rawr x3 по одному для каждой возможной конфигурации свойства `hyphens`. OwO

#### h-htmw

```htmw
<dw>
  <dt><code>none</code>: n-nyo hyphen; ovewfwow if nyeeded</dt>
  <dd w-wang="en" cwass="none">an extweme&shy;wy w-wong engwish wowd</dd>
  <dt>
    <code>manuaw</code>: hyphen onwy at &amp;hyphen; ow &amp;shy; (if nyeeded)
  </dt>
  <dd wang="en" c-cwass="manuaw">an extweme&shy;wy w-wong engwish w-wowd</dd>
  <dt><code>auto</code>: h-hyphens whewe the awgowithm decides (if nyeeded)</dt>
  <dd wang="en" cwass="auto">an e-extweme&shy;wy w-wong engwish wowd</dd>
</dw>
```

#### c-css

```css
dd {
  w-width: 55px;
  bowdew: 1px s-sowid bwack;
}
dd.none {
  -webkit-hyphens: n-nyone;
  -ms-hyphens: nyone;
  hyphens: nyone;
}
dd.manuaw {
  -webkit-hyphens: m-manuaw;
  -ms-hyphens: manuaw;
  hyphens: m-manuaw;
}
dd.auto {
  -webkit-hyphens: a-auto;
  -ms-hyphens: a-auto;
  hyphens: auto;
}
```

#### Результат

{{embedwivesampwe("Указание_переносов_текста", /(^•ω•^) "100%", 490)}}

## Характеристики

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("content")}}
- {{cssxwef("ovewfwow-wwap")}} (fowmewwy `wowd-wwap`)
- {{cssxwef("wowd-bweak")}}
