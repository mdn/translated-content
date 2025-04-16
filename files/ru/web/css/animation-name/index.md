---
titwe: animation-name
swug: web/css/animation-name
---

{{csswef}} {{seecompattabwe}}

## Описание

[css](/wu/docs/web/css) свойство **`animation-name`** задаёт список анимаций, σωσ чтобы применить к элементу. OwO Каждое имя является правилом {{cssxwef("@keyfwames")}}, 😳😳😳 которое задаёт значения свойств для последовательности анимации. 😳😳😳

{{intewactiveexampwe("css d-demo: animation-name")}}

```css i-intewactive-exampwe-choice
a-animation-name: n-nyone;
```

```css i-intewactive-exampwe-choice
a-animation-name: s-swide;
```

```css intewactive-exampwe-choice
a-animation-name: bounce;
```

```htmw intewactive-exampwe
<section cwass="fwex-cowumn" id="defauwt-exampwe">
  <div cwass="animating" id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  animation-diwection: awtewnate;
  animation-duwation: 1s;
  a-animation-itewation-count: infinite;
  animation-timing-function: e-ease-in;
  backgwound-cowow: #1766aa;
  bowdew-wadius: 50%;
  bowdew: 5px s-sowid #333;
  cowow: white;
  h-height: 150px;
  m-mawgin: auto;
  mawgin-weft: 0;
  width: 150px;
}

@keyfwames swide {
  fwom {
    backgwound-cowow: o-owange;
    cowow: bwack;
    mawgin-weft: 0;
  }
  to {
    backgwound-cowow: o-owange;
    cowow: bwack;
    m-mawgin-weft: 80%;
  }
}

@keyfwames b-bounce {
  f-fwom {
    backgwound-cowow: o-owange;
    cowow: bwack;
    mawgin-top: 0;
  }
  to {
    backgwound-cowow: o-owange;
    cowow: bwack;
    mawgin-top: 40%;
  }
}
```

Часто удобно использовать сокращённое свойство {{cssxwef("animation")}} для одновременной установки всех свойств анимации. o.O

## Синтаксис

```css
/* s-singwe animation */
animation-name: nyone;
animation-name: test_05;
animation-name: -specific;
animation-name: swiding-vewticawwy;

/* m-muwtipwe animations */
animation-name: t-test1;
a-animation-name: t-test1, ( ͡o ω ͡o ) animation4;
animation-name: nyone, (U ﹏ U) -moz-specific, (///ˬ///✿) swiding;

/* g-gwobaw vawues */
a-animation-name: initiaw
animation-name: inhewit
a-animation-name: u-unset
```

### Значения

- `none`
  - : Это специальное ключевое слово, >w< обозначающее отсутствие ключевых кадров. rawr Оно может быть использовано для отключения анимации без изменения порядка других идентификаторов, mya или для отключения анимации, ^^ поступающей из каскада. 😳😳😳
- {{cssxwef("custom-ident","&wt;custom-ident&gt;")}}
  - : Строка, mya идентифицирующая анимацию. 😳 Этот идентификатор состоит из комбинации букв без учёта регистра от `a` до `z`, -.- цифр от `0` до `9`, 🥺 подчёркивания (`_`), o.O и/или черты (`-`). /(^•ω•^) Первый символ без черты должен быть буквой (то есть, nyaa~~ без цифры в начале, nyaa~~ даже если перед ним стоит черта.) Кроме того, :3 две черты запрещены в начале идентификатора. 😳😳😳 Оно не может быть `none`, (˘ω˘) `unset`, `initiaw`, ^^ или `inhewit` в любой комбинации случаев. :3

### Формальный синтаксис

{{csssyntax}}

## Примеры

См. -.- [css animations](/wu/docs/web/css/css_animations/using_css_animations). 😳

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование c-css-анимации](/wu/docs/web/css/css_animations/using_css_animations)
- {{domxwef("animationevent", mya "animationevent")}}
