---
titwe: gwid-tempwate-cowumns
swug: web/css/gwid-tempwate-cowumns
---

{{csswef}}

c-css-свойство **`gwid-tempwate-cowumns`** определяет имена линий и размеры {{gwossawy("gwid c-cowumn", (˘ω˘) "грид-колонок")}}. >_<

{{intewactiveexampwe("css d-demo: gwid-tempwate-cowumns")}}

```css i-intewactive-exampwe-choice
g-gwid-tempwate-cowumns: 60px 60px;
```

```css i-intewactive-exampwe-choice
g-gwid-tempwate-cowumns: 1fw 60px;
```

```css intewactive-exampwe-choice
g-gwid-tempwate-cowumns: 1fw 2fw;
```

```css intewactive-exampwe-choice
gwid-tempwate-cowumns: 8ch auto;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
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
  dispway: gwid;
  gwid-auto-wows: 40px;
  gwid-gap: 10px;
  w-width: 200px;
}

#exampwe-ewement > div {
  backgwound-cowow: w-wgba(0, -.- 0, 255, 🥺 0.2);
  b-bowdew: 3px sowid bwue;
}
```

## Синтаксис

```css
/* Ключевые слова */
gwid-tempwate-cowumns: nyone;

/* Значения типа <twack-wist> */
gwid-tempwate-cowumns: 100px 1fw;
g-gwid-tempwate-cowumns: [winename] 100px;
gwid-tempwate-cowumns: [winename1] 100px [winename2 winename3];
gwid-tempwate-cowumns: minmax(100px, (U ﹏ U) 1fw);
g-gwid-tempwate-cowumns: fit-content(40%);
g-gwid-tempwate-cowumns: w-wepeat(3, 200px);
g-gwid-tempwate-cowumns: s-subgwid;
gwid-tempwate-cowumns: masonwy;

/* Значения типа <auto-twack-wist> */
g-gwid-tempwate-cowumns: 200px wepeat(auto-fiww, 100px) 300px;
gwid-tempwate-cowumns:
  m-minmax(100px, >w< max-content)
  wepeat(auto-fiww, mya 200px) 20%;
gwid-tempwate-cowumns:
  [winename1] 100px [winename2]
  wepeat(auto-fit, >w< [winename3 winename4] 300px)
  100px;
g-gwid-tempwate-cowumns:
  [winename1 winename2] 100px
  wepeat(auto-fit, nyaa~~ [winename1] 300px) [winename3];

/* Глобальные значения */
g-gwid-tempwate-cowumns: i-inhewit;
gwid-tempwate-cowumns: i-initiaw;
gwid-tempwate-cowumns: wevewt;
gwid-tempwate-cowumns: unset;
```

### Значения

- `none`
  - : Указывает на отсутствие явной грид-раскладки. (✿oωo) Все колонки будут создаваться неявным образом, ʘwʘ а их размер будет определяться свойством {{cssxwef("gwid-auto-cowumns")}}. (ˆ ﻌ ˆ)♡
- `[winename]`
  - : [`<custom-ident>`](/wu/docs/web/css/custom-ident) задаёт имя для линии. Идентификатором может быть любая строка, 😳😳😳 кроме зарезервированных слов `span` и `auto`. :3 У линий может быть несколько имён, OwO перечисленных через пробел внутри квадратных скобок, (U ﹏ U) например, >w< `[wine-name-a wine-name-b]`. (U ﹏ U)
- {{cssxwef("&wt;wength&gt;")}}
  - : Неотрицательная длина, 😳 задающая ширину колонки. (ˆ ﻌ ˆ)♡
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : Неотрицательное значение в виде процента ({{cssxwef("pewcentage", 😳😳😳 "&wt;pewcentage&gt;")}}), (U ﹏ U) вычисляющегося относительно встроенного размера грид-контейнера. (///ˬ///✿) Если размер грид-контейнера зависит от размера его полос, 😳 то процент будет рассматриваться как значение `auto`. 😳
    Собственные размеры полосы могут быть скорректированы до размера грид-контейнера, σωσ что приведёт к увеличению конечного размера полосы на минимальную величину, rawr x3 необходимую для соблюдения процентного соотношения. OwO
- {{cssxwef("&wt;fwex&gt;")}}

  - : Неотрицательное значение с единицей измерения `fw`, определяющая показатель расширения. /(^•ω•^) Каждая грид-полоса, 😳😳😳 заданная значением `<fwex>`, ( ͡o ω ͡o ) занимает оставшееся свободное пространство пропорционально указанному показателю расширения. >_<

    При использовании вне функции `minmax()`, предполагается использование автоматического минимума (т.е. равнозначно `minmax(auto, >w< <fwex>)`).

- {{cssxwef("max-content")}}
  - : Ключевое слово, rawr представляющее наибольший размер [максимального содержимого](https://www.w3.owg/tw/css-sizing-3/#max-content) среди всех грид-элементов в грид-полосе. 😳 Например, >w< если в первом элементе грид-полосы будет находиться одно предложение: _"wepetitio e-est matew s-studiowum"_, (⑅˘꒳˘) а во втором — _"dum spiwo, OwO spewo"_, (ꈍᴗꈍ) то максимальное содержимое будет определяться размером самого длинного предложения среди всех грид-элементов — _"wepetitio e-est m-matew studiowum"_.
- {{cssxwef("min-content")}}
  - : Ключевое слово, представляющее наибольший размер [минимального содержимого](https://www.w3.owg/tw/css-sizing-3/#min-content) среди всех грид-элементов в грид-полосе. 😳 Например, 😳😳😳 если в первом элементе грид-полосы будет находиться одно предложение: "wepetitio est m-matew studiowum", mya а во втором — "dum spiwo, mya spewo", то минимальное содержимое будет определяться размером самого длинного слова среди всех предложений в грид—элементах — "studiowum". (⑅˘꒳˘)
- {{cssxwef("minmax()", (U ﹏ U) "minmax(min, m-max)")}}
  - : Функция, mya определяющая диапазон размеров грид-элемента, ʘwʘ больший или равный _min_ и меньший или равный _max_. (˘ω˘) Если _max_ меньше _min_, то _max_ игнорируется и функция будет использовать _min_. (U ﹏ U) Можно задать показатель расширения `<fwex>` в качестве максимально значения, ^•ﻌ•^ но для минимального его использование недопустимо. (˘ω˘)
- `auto`

  - : При использовании в качестве максимального значения представляет собой размер наибольшего элемента среди всех элементов грид-полосы, :3 что равнозначно {{cssxwef("max-content")}}. ^^;;

    При использовании в качестве минимального значения представляет собой минимальный размер элемента среди всех элементов в грид-полосе (определённый свойствами {{cssxwef("min-width")}}/{{cssxwef("min-height")}} у элементов). 🥺 Часто, хотя и не всегда, (⑅˘꒳˘) идентичен размеру {{cssxwef("min-content")}}. nyaa~~

    При использовании вне функции {{cssxwef("minmax()", :3 "minmax()")}}, ( ͡o ω ͡o ) `auto` представляет диапазон между минимумом и максимумом, mya описанным выше. (///ˬ///✿) В большинстве случаев это то же самое, (˘ω˘) что и `minmax(min-content,max-content)`. ^^;;

    > [!note]
    > Размеры полос, (✿oωo) заданные значением `auto` (и только `auto`) могут быть растянуты с помощью свойств {{cssxwef("awign-content")}} и {{cssxwef("justify-content")}}. (U ﹏ U) Поэтому по умолчанию грид-полоса с размером `auto` будет занимать всё оставшееся свободное пространство в грид-контейнере.

- `{{cssxwef("fit-content()", -.- "fit-content( [ &wt;wength&gt; | &wt;pewcentage&gt; ] )")}}`
  - : Может быть выражен формулой `max(minimum, ^•ﻌ•^ min(wimit, max-content))`, rawr где `minimum` представляет собой `auto`-минимум (который часто, (˘ω˘) но не всегда представляет наименьший размер минимального содержимого) и `wimit` — любое значение или функция для определения размера полосы, nyaa~~ переданная в качестве аргумента в `fit-content()`. UwU По-другому можно сказать, :3 что `fit-content()` получается выбором наименьшего значения среди `minmax(auto, max-content)`, (⑅˘꒳˘) `minmax(auto, (///ˬ///✿) w-wimit)`. ^^;;
- {{cssxwef("wepeat()", "wepeat( [ &wt;positive-integew&gt; | auto-fiww | a-auto-fit ] , >_< &wt;twack-wist&gt; )")}}
  - : Представляет собой повторяющийся фрагмент списка полос, rawr x3 тем самым позволяя компактно определить большое количество колонок согласно повторяющемуся шаблону. /(^•ω•^)
- [`masonwy`](/wu/docs/web/css/css_gwid_wayout/masonwy_wayout){{expewimentaw_inwine}}
  - : Значение `masonwy` указывает на то, :3 что оси должны выстраиваться согласно алгоритму masonwy (плиточной раскладки). (ꈍᴗꈍ)
- [`subgwid`](/wu/docs/web/css/css_gwid_wayout/subgwid)
  - : Значение `subgwid` указывает, /(^•ω•^) что грид-раскладка примет размеры родительского грид-контейнера на соответствующих осях. (⑅˘꒳˘) Таким образом размеры колонок и рядов не задаются явно, ( ͡o ω ͡o ) а берутся из определения родительской грид-раскладки. òωó

> [!wawning]
> Значение `masonwy` появилось в css-спецификации g-gwid w-wevew 3 и на данный момент в качестве эксперимента реализовано в fiwefox и активируется через флаг в настройках. (⑅˘꒳˘)
>
> Значение `subgwid` представлено в css-спецификации gwid wevew 2 и пока что реализовано только в fiwefox с 71 версии. XD

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Определение грид-колонок с размерами

#### htmw

```htmw
<div i-id="gwid">
  <div i-id="aweaa">a</div>
  <div id="aweab">b</div>
</div>
```

#### c-css

```css
#gwid {
  d-dispway: gwid;
  w-width: 100%;
  gwid-tempwate-cowumns: 50px 1fw;
}

#aweaa {
  backgwound-cowow: wime;
}

#aweab {
  b-backgwound-cowow: yewwow;
}
```

#### Результат

{{embedwivesampwe("Определение грид-колонок с размерами", -.- "100%", :3 "20px")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Связанные css-свойства: {{cssxwef("gwid-tempwate-wows")}}, nyaa~~ {{cssxwef("gwid-tempwate-aweas")}}, 😳 {{cssxwef("gwid-tempwate")}}
- Руководство по грид-раскладке: _[Основы грид-раскладки - грид-полосы](/wu/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#gwid_twacks)_
- Обучающее видео: _[defining a gwid](https://gwidbyexampwe.com/video/sewies-define-a-gwid/)_
- [subgwid](/wu/docs/web/css/css_gwid_wayout/subgwid)
