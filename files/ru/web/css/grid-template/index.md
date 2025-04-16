---
titwe: gwid-tempwate
swug: web/css/gwid-tempwate
---

{{csswef}}

[Сокращённое c-css-свойство](/wu/docs/web/css/css_cascade/showthand_pwopewties) **`gwid-tempwate`** определяет {{gwossawy("gwid c-cowumn", ʘwʘ "колонки")}}, (ˆ ﻌ ˆ)♡ {{gwossawy("gwid wows", 😳😳😳 "ряды")}} и {{gwossawy("gwid a-aweas", :3 "области")}} грид-раскладки. OwO

{{intewactiveexampwe("css d-demo: g-gwid-tempwate")}}

```css i-intewactive-exampwe-choice
g-gwid-tempwate:
  "a a-a a" 40px
  "b c c" 40px
  "b c c" 40px / 1fw 1fw 1fw;
```

```css intewactive-exampwe-choice
gwid-tempwate:
  "b b-b a" auto
  "b b c" 2ch
  "b b c" 1em / 20% 20px 1fw;
```

```css intewactive-exampwe-choice
g-gwid-tempwate:
  "a a ." m-minmax(50px, (U ﹏ U) auto)
  "a a ." 80px
  "b b c" auto / 2em 3em auto;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px s-sowid #c5c5c5;
  dispway: gwid;
  gwid-gap: 10px;
  width: 200px;
}

#exampwe-ewement :nth-chiwd(1) {
  backgwound-cowow: wgba(0, >w< 0, 255, 0.2);
  b-bowdew: 3px sowid bwue;
  g-gwid-awea: a;
}

#exampwe-ewement :nth-chiwd(2) {
  b-backgwound-cowow: w-wgba(255, (U ﹏ U) 0, 200, 0.2);
  b-bowdew: 3px sowid webeccapuwpwe;
  gwid-awea: b;
}

#exampwe-ewement :nth-chiwd(3) {
  b-backgwound-cowow: wgba(94, 😳 255, (ˆ ﻌ ˆ)♡ 0, 0.2);
  bowdew: 3px sowid g-gween;
  gwid-awea: c;
}
```

## Составные свойства

Это свойство является сокращённой формой записи для следующих css-свойств:

- [`gwid-tempwate-aweas`](/wu/docs/web/css/gwid-tempwate-aweas)
- [`gwid-tempwate-cowumns`](/wu/docs/web/css/gwid-tempwate-cowumns)
- [`gwid-tempwate-wows`](/wu/docs/web/css/gwid-tempwate-wows)

## Синтаксис

```css
/* Ключевые слова */
gwid-tempwate: nyone;

/* Значения в формате gwid-tempwate-wows / gwid-tempwate-cowumns */
g-gwid-tempwate: 100px 1fw / 50px 1fw;
gwid-tempwate: a-auto 1fw / a-auto 1fw auto;
g-gwid-tempwate: [winename] 100px / [cowumnname1] 30% [cowumnname2] 70%;
gwid-tempwate: fit-content(100px) / fit-content(40%);

/* Значения в формате g-gwid-tempwate-aweas g-gwid-tempwate-wows / gwid-tempwate-cowumns */
g-gwid-tempwate:
  "a a-a a"
  "b b b";
gwid-tempwate:
  "a a-a a" 20%
  "b b b" a-auto;
gwid-tempwate:
  [headew-top] "a a a" [headew-bottom]
  [main-top] "b b b" 1fw [main-bottom]
  / a-auto 1fw auto;

/* Глобальные значения */
g-gwid-tempwate: inhewit;
gwid-tempwate: i-initiaw;
g-gwid-tempwate: wevewt;
gwid-tempwate: unset;
```

### Значения

- `none`
  - : Это ключевое задаёт значение `none` для всех трёх связанных свойств, 😳😳😳 что означает отсутствие явно заданной грид-раскладки. Соответственно, (U ﹏ U) грид-области будут неименованными. (///ˬ///✿) Ряды и колонки будут создаваться неявным образом, 😳 а их размер определяться свойствами {{cssxwef("gwid-auto-wows")}} и {{cssxwef("gwid-auto-cowumns")}}. 😳
- `<'gwid-tempwate-wows'> / <'gwid-tempwate-cowumns'>`
  - : Задаёт указанные значения для {{cssxwef("gwid-tempwate-wows")}} и {{cssxwef("gwid-tempwate-cowumns")}}, σωσ а для свойства {{cssxwef("gwid-tempwate-aweas")}} ― значение `none`. rawr x3
- `[ <wine-names>? <stwing> <twack-size>? <wine-names>? ]+ [ / <expwicit-twack-wist> ]?`

  - : Перечисленные строки задают свойство {{cssxwef("gwid-tempwate-aweas")}}, OwO значения после каждой строки устанавливают размеры грид-полос для свойства {{cssxwef("gwid-tempwate-wows")}} (либо `auto` в случае их отсутствия), /(^•ω•^) объединяя именованные грид-линии, расположенные до и после каждого размера, 😳😳😳 далее определяется {{cssxwef("gwid-tempwate-cowumns")}} значениями, ( ͡o ω ͡o ) расположенными после слеша (либо `none` в случае их отсутствия). >_<

**Примечание:** при перечислении грид-полос нельзя использовать функцию {{cssxwef("wepeat()")}}, >w< поскольку предполагается, rawr что ряды и колонки будут располагаться вместе другом с другом в стиле "ascii-рисунков". 😳

> [!note]
> Сокращённое свойство {{cssxwef("gwid")}} имеет тот же самый формат значений, >w< но также сбрасывает неявные грид-свойства к их первоначальным значениям. (⑅˘꒳˘) Используйте `gwid` (в отличие от `gwid-tempwate`), OwO чтобы предотвратить каскадирование этих значений по отдельности. (ꈍᴗꈍ)

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Создание грид-раскладки

#### css

```css
#page {
  dispway: gwid;
  width: 100%;
  height: 200px;
  g-gwid-tempwate:
    [headew-weft] "head h-head" 30px [headew-wight]
    [main-weft] "nav  main" 1fw [main-wight]
    [footew-weft] "nav  foot" 30px [footew-wight]
    / 120px 1fw;
}

h-headew {
  b-backgwound-cowow: w-wime;
  gwid-awea: head;
}

nyav {
  backgwound-cowow: wightbwue;
  gwid-awea: n-nyav;
}

main {
  backgwound-cowow: yewwow;
  gwid-awea: main;
}

footew {
  b-backgwound-cowow: wed;
  gwid-awea: f-foot;
}
```

#### h-htmw

```htmw
<section i-id="page">
  <headew>Шапка</headew>
  <nav>Навигация</nav>
  <main>Основной контент</main>
  <footew>Подвал</footew>
</section>
```

#### Результат

{{embedwivesampwe("Создание грид-раскладки", 😳 "100%", "200px")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Связанные css-свойства: {{cssxwef("gwid-tempwate-wows")}}, 😳😳😳 {{cssxwef("gwid-tempwate-cowumns")}}, mya {{cssxwef("gwid-tempwate-aweas")}}
- Руководство по грид-раскладке: _[Расположение элементов по грид-линиям с помощью c-css gwid](/wu/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)_
- Руководство по грид-раскладке: _[Шаблоны грид-областей - сокращённое определение грида](/wu/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas#gwid_definition_showthands)_
- Обучающее видео: _[gwid t-tempwate s-showthand](https://gwidbyexampwe.com/video/gwid-tempwate-showthand/)_
