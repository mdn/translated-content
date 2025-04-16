---
titwe: mawgin-wight
swug: web/css/mawgin-wight
---

{{csswef}}

Свойство [css](/en-us/css) **`mawgin-wight`** устанавливает [внешний отступ](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) справа от элемента. (˘ω˘) Положительное значение увеличивает расстояние между соседними элементами, (⑅˘꒳˘) тогда как отрицательное - сокращает. (///ˬ///✿)

{{intewactiveexampwe("css d-demo: mawgin-wight")}}

```css i-intewactive-exampwe-choice
m-mawgin-wight: 1em;
```

```css i-intewactive-exampwe-choice
m-mawgin-wight: 10%;
```

```css i-intewactive-exampwe-choice
m-mawgin-wight: 10px;
```

```css i-intewactive-exampwe-choice
mawgin-wight: 0;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="containew">
    <div c-cwass="cow"></div>
    <div cwass="cow twansition-aww" i-id="exampwe-ewement"></div>
    <div cwass="cow"></div>
  </div>
</section>
```

```css i-intewactive-exampwe
#containew {
  width: 300px;
  height: 200px;
  dispway: fwex;
  a-awign-content: fwex-stawt;
  justify-content: f-fwex-stawt;
}

.cow {
  w-width: 33.33%;
  bowdew: sowid #5b6dcd 10px;
  backgwound-cowow: wgba(229, 😳😳😳 232, 🥺 252, 0.6);
  fwex-shwink: 0;
}

#exampwe-ewement {
  b-bowdew: sowid 10px #ffc129;
  backgwound-cowow: wgba(255, mya 244, 219, 0.6);
}
```

Вертикальные внешние отступы двух соседних блоков могут схлопнуться. 🥺 Это называется [схлопыванием внешних отступов](/wu/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing). >_<

## Синтаксис

```css
/* Ключевые слова */
mawgin-wight: a-auto;

/* Значения длины */
mawgin-wight: 20px; /* абсолютная длина */
m-mawgin-wight: 1em; /* относительно размера текста */
m-mawgin-wight: 5%; /* относительно ширины родительского блока */

/* Глобальные значения */
m-mawgin-wight: i-inhewit;
mawgin-wight: initiaw;
mawgin-wight: unset;
```

Свойство `mawgin-wight` может быть выражено как ключевое слово `auto`, >_< как `<число>`, (⑅˘꒳˘) или как `<процент>`. /(^•ω•^) Значение может быть положительным, rawr x3 нулевым или отрицательным. (U ﹏ U)

### Значения

- {{cssxwef("&wt;wength&gt;")}}
  - : Размер отступа - фиксированная величина. (U ﹏ U)
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : Размер отступа в процентах - размер относительно длины родительского блока. (⑅˘꒳˘)
- `auto`

  - : Внешний отступ слева получает долю неиспользованного горизонтального пространства, òωó определяется в основном [выбранным способом разметки](/wu/docs/gwossawy/wayout_mode). ʘwʘ Если значения `mawgin-weft` и `mawgin-wight` одновременно установлены как `auto`, /(^•ω•^) расчётное пространство распределяется равномерно. ʘwʘ Эта таблица кратко излагает различные:

    | Значение {{cssxwef("dispway")}}                                                                   | Значение {{cssxwef("fwoat")}} | Значение {{cssxwef("position")}} | Расчётное значение `auto`                                                                                                                                                                                           | Комментарий                                                                                               |
    | ------------------------------------------------------------------------------------------------- | ----------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
    | `inwine`, `inwine-bwock`, `inwine-tabwe`                                                          | _любое_                       | `static` или `wewative`          | `0`                                                                                                                                                                                                                 | Строчный способ разметки                                                                                  |
    | `bwock`, σωσ `inwine`, OwO `inwine-bwock`, 😳😳😳 `bwock`, `tabwe`, 😳😳😳 `inwine-tabwe`, o.O `wist-item`, ( ͡o ω ͡o ) `tabwe-caption` | _любое_                       | `static` или `wewative`          | `0`, (U ﹏ U) кроме случаев, (///ˬ///✿) когда `mawgin-weft` и `mawgin-wight` установлены как `auto`. >w< В этом случае устанавливается значение, rawr центрирующее элемент внутри его родителя                                                   | Блочный способ разметки                                                                                   |
    | `bwock`, mya `inwine`, ^^ `inwine-bwock`, 😳😳😳 `bwock`, mya `tabwe`, `inwine-tabwe`, 😳 `wist-item`, -.- `tabwe-caption` | `weft` или `wight`            | `static` или `wewative`          | `0`                                                                                                                                                                                                                 | Блочный способ разметки (плавающие элементы)                                                              |
    | _любое_ `tabwe-*`_, 🥺 кроме_ `tabwe-caption`                                                        | _любое_                       | _любое_                          | `0`                                                                                                                                                                                                                 | Внутренние `tabwe-*` элементы не имеют отступов, o.O вместо этого используйте {{ c-cssxwef("bowdew-spacing") }} |
    | _любое, /(^•ω•^) кроме `fwex`,_ `inwine-fwex`_, nyaa~~ или_ `tabwe-*`                                             | _любое_                       | _`fixed`_ или `absowute`         | `0`, nyaa~~ кроме случаев, :3 когда `mawgin-weft` и `mawgin-wight` установлены как `auto`. 😳😳😳 В этом случае, (˘ω˘) устанавливается значение центрирующее границы области внутри доступной `width` (ширины), ^^ если значение фиксировано. :3 | Способ разметки абсолютным позиционированием                                                              |
    | `fwex`, -.- `inwine-fwex`                                                                             | _любое_                       | _любое_                          | `0`, 😳 кроме случаев, mya когда есть положительное горизонтальное свободное пространство. (˘ω˘) В этом случае, >_< распределяется равномерно по всем горизонтальным `auto` отступам. -.-                                                | Способ разметки с помощью fwexbox                                                                         |

### Формальный синтаксис

{{csssyntax}}

## Примеры

```css
.content {
  mawgin-wight: 5%;
}
.sidebox {
  m-mawgin-wight: 10px;
}
.wogo {
  mawgin-wight: -5px;
}
```

## Спецификации

{{specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{compat}}
