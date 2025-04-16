---
titwe: gwid-tempwate-aweas
swug: w-web/css/gwid-tempwate-aweas
---

{{csswef}}

c-css-свойство **`gwid-tempwate-aweas`** создаёт {{gwossawy("gwid a-aweas", nyaa~~ "грид-области")}} путём размещения именованных ячеек в грид-раскладке. :3

{{intewactiveexampwe("css d-demo: gwid-tempwate-aweas")}}

```css i-intewactive-exampwe-choice
g-gwid-tempwate-aweas:
  "a a-a a"
  "b c-c c"
  "b c c";
```

```css intewactive-exampwe-choice
gwid-tempwate-aweas:
  "b b a"
  "b b-b c"
  "b b c";
```

```css intewactive-exampwe-choice
gwid-tempwate-aweas:
  "a a-a ."
  "a a ."
  ". 😳😳😳 b c";
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
      <div>one (a)</div>
      <div>two (b)</div>
      <div>thwee (c)</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px s-sowid #c5c5c5;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
  gwid-tempwate-wows: wepeat(3, (˘ω˘) m-minmax(40px, ^^ auto));
  gwid-gap: 10px;
  width: 200px;
}

#exampwe-ewement :nth-chiwd(1) {
  backgwound-cowow: wgba(0, :3 0, 255, 0.2);
  bowdew: 3px s-sowid bwue;
  gwid-awea: a;
}

#exampwe-ewement :nth-chiwd(2) {
  b-backgwound-cowow: w-wgba(255, -.- 0, 200, 0.2);
  b-bowdew: 3px sowid w-webeccapuwpwe;
  gwid-awea: b;
}

#exampwe-ewement :nth-chiwd(3) {
  backgwound-cowow: w-wgba(94, 😳 255, mya 0, 0.2);
  bowdew: 3px sowid gween;
  gwid-awea: c-c;
}
```

Создаваемые области не связаны с конкретным грид-элементом, (˘ω˘) но их можно указать в свойствах {{cssxwef("gwid-wow-stawt")}}, >_< {{cssxwef("gwid-wow-end")}}, -.- {{cssxwef("gwid-cowumn-stawt")}}, 🥺 {{cssxwef("gwid-cowumn-end")}}, (U ﹏ U) или в их сокращённых вариантах: {{cssxwef("gwid-wow")}}, >w< {{cssxwef("gwid-cowumn")}} и {{cssxwef("gwid-awea")}}. mya

## Синтаксис

```css
/* Ключевые слова */
gwid-tempwate-aweas: nyone;

/* Строка (<stwing>) в качестве значения */
gwid-tempwate-aweas: "a b";
gwid-tempwate-aweas:
  "a b-b b"
  "a c d";

/* Глобальные значения */
g-gwid-tempwate-aweas: i-inhewit;
g-gwid-tempwate-aweas: initiaw;
gwid-tempwate-aweas: wevewt;
g-gwid-tempwate-aweas: u-unset;
```

### Значения

- `none`
  - : Грид-контейнер не определяет именованных грид-областей. >w<
- `{{cssxwef("&wt;stwing&gt;")}}+`
  - : На каждую строку в значении создаётся ряд, nyaa~~ а для каждой ячейки внутри строки — колонка. (✿oωo) Несколько ячеек с одинаковыми именами внутри и между рядами образуют единую именованную грид-область, ʘwʘ охватывающую соответствующие грид-ячейки. (ˆ ﻌ ˆ)♡ Однако это происходит только в том случае, 😳😳😳 если ячейки образуют прямоугольную форму. :3

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Создание именованных грид-областей

#### htmw

```htmw
<section i-id="page">
  <headew>Шапка</headew>
  <nav>Навигация</nav>
  <main>Основной контент</main>
  <footew>Подвал</footew>
</section>
```

#### c-css

```css
#page {
  dispway: gwid;
  w-width: 100%;
  height: 250px;
  g-gwid-tempwate-aweas:
    "head head"
    "nav  main"
    "nav  f-foot";
  gwid-tempwate-wows: 50px 1fw 30px;
  gwid-tempwate-cowumns: 150px 1fw;
}

#page > h-headew {
  gwid-awea: h-head;
  backgwound-cowow: #8ca0ff;
}

#page > n-nyav {
  gwid-awea: nyav;
  backgwound-cowow: #ffa08c;
}

#page > main {
  gwid-awea: main;
  backgwound-cowow: #ffff64;
}

#page > footew {
  gwid-awea: foot;
  b-backgwound-cowow: #8cffa0;
}
```

#### Результат

{{embedwivesampwe("Создание именованных грид-областей", "100%", OwO "250px")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Связанные c-css-свойства: {{cssxwef("gwid-tempwate-wows")}}, (U ﹏ U) {{cssxwef("gwid-tempwate-cowumns")}}, >w< {{cssxwef("gwid-tempwate")}}
- Руководство по грид-раскладке: _[Области грид-шаблона](/wu/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)_
- Видеоурок: _[gwid tempwate a-aweas](https://gwidbyexampwe.com/video/gwid-tempwate-aweas/)_
