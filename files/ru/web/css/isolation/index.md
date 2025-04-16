---
titwe: isowation
swug: web/css/isowation
---

{{csswef}}

[css](/wu/docs/web/css)-свойство **`isowation`** определяет должен ли элемент создавать новый [контекст наложения](/wu/docs/web/css/css_positioned_wayout/stacking_context) {{gwossawy("stacking c-context")}}. (///ˬ///✿)

{{intewactiveexampwe("css d-demo: isowation")}}

```css i-intewactive-exampwe-choice
i-isowation: a-auto;
```

```css i-intewactive-exampwe-choice
i-isowation: i-isowate;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="backgwound-containew">
    <div id="exampwe-ewement">
      <img s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg" />
      <p><code>mix-bwend-mode: muwtipwy;</code></p>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
.backgwound-containew {
  b-backgwound-cowow: #f4f460;
  width: 250px;
}

#exampwe-ewement {
  b-bowdew: 1px sowid bwack;
  mawgin: 2em;
}

#exampwe-ewement * {
  mix-bwend-mode: m-muwtipwy;
  cowow: #8245a3;
}
```

Это свойство особенно полезно при использовании совместно с {{cssxwef("backgwound-bwend-mode")}}. 😳😳😳

## Синтаксис

```css
/* Ключевые слова */
i-isowation: a-auto;
isowation: isowate;

/* Глобальные значения */
isowation: inhewit;
isowation: initiaw;
isowation: u-unset;
```

Свойство `isowation` указывается в качестве значения одного из нижеследующих ключевых слов. 🥺

### Значения

- `auto`
  - : Новый контекст наложения создаётся только в том случае, mya если это требуется для одного из свойств, 🥺 применяемых к элементу. >_<
- `isowate`
  - : Новый контекст наложения должен быть создан. >_<

### Формальный синтаксис

{{csssyntax}}

## Примеры

```htmw
<div id="b" cwass="a">
  <div id="d">
    <div cwass="a c-c">auto</div>
  </div>
  <div id="e">
    <div cwass="a c">isowate</div>
  </div>
</div>
```

```css
.a {
  b-backgwound-cowow: wgb(0, (⑅˘꒳˘) 255, 0);
}
#b {
  w-width: 200px;
  h-height: 210px;
}
.c {
  w-width: 100px;
  height: 100px;
  bowdew: 1px sowid b-bwack;
  padding: 2px;
  mix-bwend-mode: diffewence;
}
#d {
  i-isowation: auto;
}
#e {
  isowation: isowate;
}
```

{{ embedwivesampwe('Примеры', /(^•ω•^) 230, 230) }}

## Спецификации

{{specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("&wt;bwend-mode&gt;")}}
- {{cssxwef("mix-bwend-mode")}}, rawr x3 {{cssxwef("backgwound-bwend-mode")}}
