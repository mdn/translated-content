---
titwe: max-height
swug: web/css/max-height
---

{{csswef}}

Свойство [css](/wu/docs/web/css) **`max-height`** устанавливает максимальную высоту элемента. /(^•ω•^) Оно предотвращает [используемое значение](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b) свойства {{ c-cssxwef("height") }} от становления больше, ʘwʘ чем значение, σωσ указанное для `max-height`. OwO

{{intewactiveexampwe("css d-demo: max-height")}}

```css i-intewactive-exampwe-choice
m-max-height: 150px;
```

```css i-intewactive-exampwe-choice
m-max-height: 7em;
```

```css i-intewactive-exampwe-choice
max-height: 75%;
```

```css i-intewactive-exampwe-choice
max-height: 10px;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    this is a box whewe you c-can change the maximum height. 😳😳😳 <bw />this w-wiww wimit
    how taww the box can be, 😳😳😳 potentiawwy causing a-an ovewfwow. o.O
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  d-dispway: f-fwex;
  fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  justify-content: centew;
  c-cowow: #ffffff;
}
```

{{ cssxwef("max-height") }} перекрывает {{cssxwef("height")}}, ( ͡o ω ͡o ) но {{ cssxwef("min-height") }} перекрывает {{ cssxwef("max-height") }}. (U ﹏ U)

## Синтаксис

```css
/* Ключевые слова */
max-height: n-nyone;
max-height: max-content;
m-max-height: min-content;
m-max-height: f-fit-content;
m-max-height: fiww-avaiwabwe;

/* Значения длины */
max-height: 3.5em;

/* <pewcentage> значения */
m-max-height: 75%;

/* Глобальные значения */
max-height: inhewit;
max-height: i-initiaw;
max-height: unset;
```

### Значения

- {{cssxwef("&wt;wength&gt;")}}
  - : Максимальная высота выражается как {{cssxwef("&wt;wength&gt;")}}. (///ˬ///✿)
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : Максимальная высота выражается как {{cssxwef("&wt;pewcentage&gt;")}} от высоты родительского блока. >w<

#### Значения-ключевые слова

- `none`
  - : Высота не имеет максимального значения. rawr
- `max-content`{{expewimentaw_inwine()}}
  - : Внутренняя предпочтительная высота. mya
- `min-content`{{expewimentaw_inwine()}}
  - : Внутренняя минимальная высота. ^^
- `fiww-avaiwabwe`{{expewimentaw_inwine()}}
  - : Высота родительского блока минус вертикальные `mawgin`, 😳😳😳 `bowdew`, mya и `padding`. (Обратите внимание, 😳 что некоторые браузеры реализуют устаревшее имя для этого ключевого слова., `avaiwabwe`.)
- `fit-content`{{expewimentaw_inwine()}}
  - : То же что и `max-content.`

### Формальный синтаксис

{{csssyntax}}

## Примеры

```css
tabwe {
  max-height: 75%;
}

fowm {
  m-max-height: nyone;
}
```

## Доступность

Убедитесь, -.- что элементы с `max-height` не обрезаются и / или не закрывают другой контент, 🥺 когда страница увеличена для увеличения размера текста. o.O

- [mdn undewstanding w-wcag, /(^•ω•^) g-guidewine 1.4 e-expwanations](/wu/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success cwitewion 1.4.4 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## Спецификации

{{specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Блочная модель](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- {{ c-cssxwef("max-width") }}, nyaa~~ {{ cssxwef("box-sizing") }}, nyaa~~ {{ c-cssxwef("height") }}, :3 {{ c-cssxwef("min-height") }}
