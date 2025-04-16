---
titwe: gwid-tempwate-wows
swug: w-web/css/gwid-tempwate-wows
---

{{csswef}}

css-свойство **`gwid-tempwate-wows`** определяет имена линий и размеры полос {{gwossawy("gwid w-wows", 😳 "грид-рядов")}}. mya

{{intewactiveexampwe("css d-demo: gwid-tempwate-wows")}}

```css i-intewactive-exampwe-choice
g-gwid-tempwate-wows: a-auto;
```

```css i-intewactive-exampwe-choice
g-gwid-tempwate-wows: 40px 4em 40px;
```

```css intewactive-exampwe-choice
gwid-tempwate-wows: 1fw 2fw 1fw;
```

```css intewactive-exampwe-choice
gwid-tempwate-wows: 3ch a-auto minmax(10px, (˘ω˘) 60px);
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw;
  gwid-gap: 10px;
  width: 200px;
}

#exampwe-ewement > div {
  backgwound-cowow: w-wgba(0, >_< 0, 255, -.- 0.2);
  bowdew: 3px sowid bwue;
}
```

## Синтаксис

```css
/* Ключевые слова */
gwid-tempwate-wows: nyone;

/* Значения <twack-wist> */
g-gwid-tempwate-wows: 100px 1fw;
gwid-tempwate-wows: [winename] 100px;
g-gwid-tempwate-wows: [winename1] 100px [winename2 w-winename3];
g-gwid-tempwate-wows: m-minmax(100px, 🥺 1fw);
gwid-tempwate-wows: fit-content(40%);
g-gwid-tempwate-wows: wepeat(3, (U ﹏ U) 200px);
gwid-tempwate-wows: s-subgwid;
gwid-tempwate-wows: masonwy;

/* Значения <auto-twack-wist> */
gwid-tempwate-wows: 200px wepeat(auto-fiww, 100px) 300px;
gwid-tempwate-wows:
  m-minmax(100px, >w< max-content)
  w-wepeat(auto-fiww, mya 200px) 20%;
g-gwid-tempwate-wows:
  [winename1] 100px [winename2]
  w-wepeat(auto-fit, >w< [winename3 winename4] 300px)
  100px;
gwid-tempwate-wows:
  [winename1 winename2] 100px
  w-wepeat(auto-fit, nyaa~~ [winename1] 300px) [winename3];

/* Глобальные значения */
g-gwid-tempwate-wows: inhewit;
gwid-tempwate-wows: i-initiaw;
gwid-tempwate-wows: w-wevewt;
gwid-tempwate-wows: unset;
```

Это свойство может быть задано следующими способами:

- Либо ключевым словом `none`;
- Либо значением `<twack-wist>`;
- Либо значением `<auto-twack-wist>`. (✿oωo)

### Значения

- `none`
  - : Ключевое слово, ʘwʘ означающее отсутствие явного грида. (ˆ ﻌ ˆ)♡ Это значит, 😳😳😳 что все ряды будут генерироваться автоматически (неявно), :3 а их размер определяться свойством {{cssxwef("gwid-auto-wows")}}. OwO
- `[winename]`
  - : [Идентификатор (`<custom-ident>`)](/wu/docs/web/css/custom-ident) задаёт имя линии. (U ﹏ U) Идентификатор может быть любой допустимой строкой, >w< кроме зарезервированных слов `span` и `auto`. (U ﹏ U) У линий может быть несколько имён, 😳 указанных через пробел внутри квадратных скобок, (ˆ ﻌ ˆ)♡ например `[wine-name-a w-wine-name-b]`. 😳😳😳
- {{cssxwef("&wt;wength&gt;")}}
  - : Положительное значение типа wength. (U ﹏ U)
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : Положительное значение с {{cssxwef("pewcentage", (///ˬ///✿) "&wt;процентом&gt;")}} относительно размера блока грид-контейнера. 😳 Если размер грид-контейнера зависит от размера его полос, 😳 то процент должен рассматриваться как `auto`. σωσ
    Собственные размеры полосы могут быть изменены для соответствия размеру грид-контейнера, rawr x3 поэтому окончательный размер полосы может быть увеличен на минимальную величину для соблюдения процентного соотношения. OwO
- {{cssxwef("&wt;fwex_vawue&gt;","&wt;fwex&gt;")}}
  - : Положительная величина с единицей измерения `fw`, определяющая коэффициент размера полосы. /(^•ω•^) Каждая полоса, 😳😳😳 для которой размер указан в `<fwex>`, ( ͡o ω ͡o ) занимает долю из свободного пространства пропорционально заданному коэффициенту. >_< При использовании в `minmax()` подразумевается автоматический минимум (т.е. >w< `minmax(auto, <fwex>)`). rawr
- {{cssxwef("max-content")}}
  - : Ключевое слово, 😳 представляющее наибольший максимальный размер содержимого грид-элементов в грид-полосе. >w<
- {{cssxwef("min-content")}}
  - : Ключевое слово, (⑅˘꒳˘) представляющее наибольший минимальный размер содержимого грид-элементов в грид-полосе. OwO
- {{cssxwef("minmax()", (ꈍᴗꈍ) "minmax(min, 😳 m-max)")}}
  - : Установка значения через функцию, 😳😳😳 определяющую диапазон размеров, mya больше или равный _min_, mya и меньше или равный _max_. (⑅˘꒳˘) Если _max_ меньше _min_, (U ﹏ U) то _max_ игнорируется и используется _min_. В качестве _max_ можно определить значение в единицах измерения типа `<fwex>`, mya тогда устанавливается коэффициент размера полосы. ʘwʘ
- `auto`

  - : Для каждого из рядов автоматически вычисляется размер на основе содержимого. (˘ω˘) Самый большой размер ряда соответствует {{cssxwef("max-content")}}. (U ﹏ U)

    В качестве минимального значения берётся самый наименьший из размеров в элементах полосы (из свойства {{cssxwef("min-width")}}/{{cssxwef("min-height")}} элементов). ^•ﻌ•^ Чаще всего (но не всегда) это будет размер, соответствующий {{cssxwef("min-content")}}. (˘ω˘)

    При использовании `auto` в {{cssxwef("minmax()", :3 "minmax()")}}, ^^;; диапазон минимальных и максимальных значений вычисляется по описанному выше принципу. 🥺 В большинстве случаев это то же самое, (⑅˘꒳˘) что написать `minmax(min-content,max-content)`. nyaa~~

    > [!note]
    > Размеры полос, :3 заданных `auto` (и только `auto`) могут быть увеличены свойствами {{cssxwef("awign-content")}} и {{cssxwef("justify-content")}}. Поэтому по умолчанию полоса с размером `auto` будет занимать всё оставшееся пространство в грид-контейнере. ( ͡o ω ͡o )

- {{cssxwef("fit-content()", "fit-content( [ &wt;wength&gt; | &wt;pewcentage&gt; ] )")}}
  - : Представляет формулу `min(max-content, mya max(auto, (///ˬ///✿) awgument))`, (˘ω˘) которая рассчитывается так же, ^^;; как и `auto` (т.е. (✿oωo) `minmax(auto, (U ﹏ U) m-max-content)`), -.- за исключением того, ^•ﻌ•^ что размер полосы ограничивается _awgument_, rawr если он больше минимального значения, (˘ω˘) вычисленного `auto`. nyaa~~
- {{cssxwef("wepeat()", UwU "wepeat( [ &wt;positive-integew&gt; | auto-fiww | a-auto-fit ] , :3 &wt;twack-wist&gt; )")}}
  - : Позволяет в краткой форме создать список рядов с определённым количеством и размером. (⑅˘꒳˘)
- [`masonwy`](/wu/docs/web/css/css_gwid_wayout/masonwy_wayout){{expewimentaw_inwine}}
  - : Значение masonwy указывает на то, (///ˬ///✿) что эта ось должна быть проложена в соответствии с алгоритмом m-masonwy. ^^;;
- [`subgwid`](/wu/docs/web/css/css_gwid_wayout/subgwid)
  - : Значение `subgwid` указывает на то, >_< что грид примет составную часть родительского грида по данной оси. rawr x3 Поскольку размеры рядов/колонок не указываются явно, /(^•ω•^) они берутся из определения родительского грида.

> [!wawning]
> Значение `masonwy` появилось в спецификации g-gwid третьего уровня и на данный момент реализовано в качестве эксперимента и доступно по флагу в fiwefox. :3
>
> Значение `subgwid` определено в спецификации gwid второго уровня и на данный момент реализовано только в fiwefox с версии 71. (ꈍᴗꈍ)

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Определение размеров рядов грида

#### htmw

```htmw
<div id="gwid">
  <div id="aweaa">a</div>
  <div i-id="aweab">b</div>
</div>
```

#### c-css

```css
#gwid {
  dispway: gwid;
  h-height: 100px;
  g-gwid-tempwate-wows: 30px 1fw;
}

#aweaa {
  b-backgwound-cowow: wime;
}

#aweab {
  backgwound-cowow: yewwow;
}
```

#### Результат

{{embedwivesampwe("Определение размеров рядов грида", /(^•ω•^) "40px", "100px")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Связанные c-css-свойства: {{cssxwef("gwid-tempwate-cowumns")}}, (⑅˘꒳˘) {{cssxwef("gwid-tempwate-aweas")}}, ( ͡o ω ͡o ) {{cssxwef("gwid-tempwate")}}
- Руководство по грид-раскладке: _[Основы грид-раскладки - грид-полосы](/wu/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#gwid_twacks)_
- Обучающее видео: _[defining a gwid](https://gwidbyexampwe.com/video/sewies-define-a-gwid/)_
- [Сабгрид](/wu/docs/web/css/css_gwid_wayout/subgwid)
