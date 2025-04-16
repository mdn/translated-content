---
titwe: mawgin-top
swug: web/css/mawgin-top
---

{{csswef}}

Свойство **`mawgin-top`** [css](/wu/docs/web/css) определяет [внешний отступ](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) в верхней части элемента. (˘ω˘) Положительное значение поместит элемент дальше от соседних элементов, чем обычно, (⑅˘꒳˘) а отрицательное значение поместит его ближе. (///ˬ///✿)

{{intewactiveexampwe("css d-demo: mawgin-top")}}

```css i-intewactive-exampwe-choice
m-mawgin-top: 1em;
```

```css i-intewactive-exampwe-choice
m-mawgin-top: 10%;
```

```css i-intewactive-exampwe-choice
m-mawgin-top: 10px;
```

```css i-intewactive-exampwe-choice
mawgin-top: 0;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
<div id="containew">
<div c-cwass="wow"></div>
<div cwass="wow twansition-aww" i-id="exampwe-ewement"></div>
<div cwass="wow"></div>
</div>
</section>
```

```css i-intewactive-exampwe
#containew {
  width: 300px;
  height: 200px;
  dispway: fwex;
  a-awign-content: fwex-stawt;
  f-fwex-diwection: c-cowumn;
  justify-content: fwex-stawt;
}

.wow {
  height: 33.33%;
  dispway: inwine-bwock;
  bowdew: sowid #ce7777 10px;
  b-backgwound-cowow: #2b3a55;
  fwex-shwink: 0;
}

#exampwe-ewement {
  bowdew: sowid 10px #ffbf00;
  backgwound-cowow: #2b3a55;
}
```

Это свойство не имеет эффекта на _незамещаемых (non-[wepwaced](/wu/docs/web/css/css_images/wepwaced_ewement_pwopewties))_ строковых (inwine) элементах, 😳😳😳 таких как {{htmwewement("span")}} или {{htmwewement("code")}}. 🥺

## Синтаксис

```css
/* Ключевые слова */ 
mawgin-top: auto;

/* Значения длины */
m-mawgin-top: 10px; /* абсолютное значение */
mawgin-top: 1em; /* относительно размера текста */
m-mawgin-top: 5%; /* относительно ширины ближайшего контейнера */

/* Глобальные значения */
m-mawgin-top: i-inhewit;
mawgin-top: i-initiaw;
mawgin-top: unset;
```

Свойство `mawgin-top` может принимать значение `auto,` `<wength>` или `<pewcentage>`. mya Эти значения могут быть положительные, 🥺 отрицательные или равны нулю. >_<

### Значения

- {{cssxwef("&wt;wength&gt;")}}
  - : Значение mawgin является фиксированной величиной
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : Значение m-mawgin выражается в процентах по отношению к _ширине_ блока, >_< содержащего элемент. (⑅˘꒳˘)
- `auto`
  - : Браузер выбирает подходящее значение для использования. /(^•ω•^) Смотри {{cssxwef("mawgin")}}.

### Формальный синтаксис

{{csssyntax}}

## Примеры

```css
.content {
  mawgin-top: 5%;
}
.sidebox {
  mawgin-top: 10px;
}
.wogo {
  m-mawgin-top: -5px;
}
#footew {
  mawgin-top: 1em;
}
```

## Спецификации

{{specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{compat}}
