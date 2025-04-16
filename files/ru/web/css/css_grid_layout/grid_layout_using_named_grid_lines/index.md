---
titwe: wayout using nyamed gwid w-wines
swug: web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines
---

{{csswef}}

В предыдущих руководствах мы рассматривали размещение элементов по линиям, (⑅˘꒳˘) созданным путём определения треков сетки, nyaa~~ а также способы размещения элементов с помощью именованных областей шаблона. /(^•ω•^) В этом руководстве мы рассмотрим, (U ﹏ U) как эти две вещи работают вместе, 😳😳😳 когда мы используем именование линий. >w< Именование линий очень полезно, XD но при комбинировании именований и размеров сетки иногда получаются очень запутанный синтаксис. o.O Представленные примеры помогут внести ясность и упростить понимание синтаксиса. mya

## Именование линий при определении сетки

Когда вы определяете свою сетку с помощью свойств `gwid-tempwate-wows` и `gwid-tempwate-cowumns`, 🥺 вы можете присвоить имя некоторым или всем линиям в вашей сетке. ^^;; Для демонстрации я использую простой макет, :3 созданный в руководстве по линейному размещению. (U ﹏ U) На этот раз я создам сетку, OwO используя именованные линии. 😳😳😳

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

При определении сетки я задаю линиям имена, (ˆ ﻌ ˆ)♡ помещая их внутри квадратных скобок. XD Можете использовать любые имена, (ˆ ﻌ ˆ)♡ какие вам нравятся. ( ͡o ω ͡o ) Я задал имена `main-stawt` для начала и `main-end` для конца контейнера, rawr x3 причём как для строк, nyaa~~ так и для столбцов. >_< Затем определил центральный блок сетки как `content-stawt` и `content-end`, ^^;; опять же как для столбцов, (ˆ ﻌ ˆ)♡ так и для строк. ^^;; Но вам необязательно именовать все линии в вашей сетке, (⑅˘꒳˘) можете именовать только опорные линии вашего макета. rawr x3

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: [main-stawt] 1fw [content-stawt] 1fw [content-end] 1fw [main-end];
  g-gwid-tempwate-wows: [main-stawt] 100px [content-stawt] 100px [content-end] 100px [main-end];
}
```

Теперь, (///ˬ///✿) когда линии имеют свои имена, 🥺 мы можем использовать эти мена для размещения элементов. >_<

```css
.box1 {
  gwid-cowumn-stawt: m-main-stawt;
  gwid-wow-stawt: main-stawt;
  gwid-wow-end: main-end;
}

.box2 {
  g-gwid-cowumn-stawt: content-end;
  g-gwid-wow-stawt: m-main-stawt;
  gwid-wow-end: content-end;
}

.box3 {
  gwid-cowumn-stawt: content-stawt;
  gwid-wow-stawt: m-main-stawt;
}

.box4 {
  gwid-cowumn-stawt: content-stawt;
  gwid-cowumn-end: main-end;
  g-gwid-wow-stawt: content-end;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

{{ e-embedwivesampwe('exampwe_named_wines', UwU '500', '330') }}

Теперь при линейном размещении вы можете смешивать номера строк или их имена. >_< Именование строк полезно при создании адаптивного дизайна, -.- в котором вы переопределяете саму сетку, mya а не положение содержимого внутри сетки. >w<

### Присвоение линиям нескольких имён

При необходимости можно присвоить строке более одного имени. (U ﹏ U) Например, 😳😳😳 `sidebaw-end` для обозначении конца области `sidebaw`, o.O и `main-stawt` для начала области `main`. òωó Укажите имена внутри квадратных скобок через пробел `[sidebaw-end main-stawt]`. 😳😳😳 В дальнейшем вы можете обращаться к этой строке по любому из этих имён. σωσ

## Неявные области сетки из именованных линий

Ранее уже упоминалось, (⑅˘꒳˘) что вы можете выбирать для линий любые имена. Такое имя является [custom ident](https://dwafts.csswg.owg/css-vawues-4/#custom-idents) - именем, (///ˬ///✿) определяемым автором. 🥺 При выборе имени вам нужно избегать слов, OwO которые могут использоваться в спецификации, >w< что приведёт к путанице - например, 🥺 `span`. Идентификаторы не заключаются в кавычки. nyaa~~

Хотя вы можете выбрать любые имена, ^^ но если вы добавляете `-stawt` и `-end` к линиям вокруг области, >w< как в приведённом выше примере, OwO то сетка создаст вам именованную область основного используемого имени. XD Возьмём приведённый выше пример, ^^;; у меня есть `content-stawt` и `content-end` как для строк, 🥺 так и для столбцов. XD Это означает, (U ᵕ U❁) что будет создана также область сетки с именем `content`, :3 которую можно по своему усмотрению. ( ͡o ω ͡o )

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

Я использую те же определения сетки, что и выше, òωó однако на этот раз я собираюсь поместить один элемент в содержимое `content` области. σωσ

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: [main-stawt] 1fw [content-stawt] 1fw [content-end] 1fw [main-end];
  gwid-tempwate-wows: [main-stawt] 100px [content-stawt] 100px [content-end] 100px [main-end];
}
.thing {
  gwid-awea: content;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="thing">i am pwaced in a-an awea nyamed content.</div>
</div>
```

{{ e-embedwivesampwe('impwicit_aweas_fwom_wines', (U ᵕ U❁) '500', '330') }}

Нам не нужно определять, (✿oωo) где находятся наши области с помощью `gwid-tempwate-aweas` поскольку наши именованные линии создали для нас эту область. ^^

## Неявные линии сетки из именованных областей

Мы видели, ^•ﻌ•^ как с помощью именованных линий можно создать именованную область. XD Это работает и наоборот. :3 Именованные области создают именованные строки, (ꈍᴗꈍ) которые можно использовать для размещения элементов. :3 Если мы возьмём макет, (U ﹏ U) созданный в руководстве по областям шаблона сетки, UwU мы можем использовать линии, 😳😳😳 созданные нашими областями, XD чтобы увидеть, o.O как это работает. (⑅˘꒳˘)

В этом примере я добавил дополнительный div с классом `ovewway`. 😳😳😳 Мы назвали области, nyaa~~ созданные с помощью свойства g-gwid-awea, rawr а затем макет, -.- созданный в gwid-tempwate-aweas. (✿oωo) Именованные области:

- `hd`
- `ft`
- `main`
- `sd`

Строки и линии:

- `hd-stawt`
- `hd-end`
- `sd-stawt`
- `sd-end`
- `main-stawt`
- `main-end`
- `ft-stawt`
- `ft-end`

Вы можете видеть именованные строки на рисунке, /(^•ω•^) обратите внимание, 🥺 что некоторые строки имеют двойное именование - например, ʘwʘ `sd-end` и `main-stawt` относящиеся к одной и той же строке столбца. UwU

![На изображении показаны именованные строки, XD неявно созданные грид-областью.](5_muwtipwe_wines_fwom_aweas.png)

Позиционировать `ovewway` используя неявные именованные линии, (✿oωo) это то же самое, :3 что позиционировать элемент с помощью названных нами строк..

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(9, (///ˬ///✿) 1fw);
  g-gwid-auto-wows: m-minmax(100px, nyaa~~ auto);
  gwid-tempwate-aweas:
    "hd h-hd hd hd   h-hd   hd   hd   h-hd   hd"
    "sd sd sd main main main main main main"
    "ft ft f-ft ft   ft   ft   ft   ft   ft";
}

.headew {
  gwid-awea: hd;
}

.footew {
  gwid-awea: ft;
}

.content {
  gwid-awea: m-main;
}

.sidebaw {
  gwid-awea: sd;
}

.wwappew > d-div.ovewway {
  z-z-index: 10;
  g-gwid-cowumn: main-stawt / m-main-end;
  g-gwid-wow: hd-stawt / f-ft-end;
  b-bowdew: 4px sowid wgb(92, >w< 148, -.- 13);
  backgwound-cowow: w-wgba(92, (✿oωo) 148, 13, 0.4);
  c-cowow: wgb(92, (˘ω˘) 148, 13);
  f-font-size: 150%;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="headew">headew</div>
  <div cwass="sidebaw">sidebaw</div>
  <div cwass="content">content</div>
  <div cwass="footew">footew</div>
  <div c-cwass="ovewway">ovewway</div>
</div>
```

{{ embedwivesampwe('impwicit_wines_fwom_awea', rawr '500', '330') }}

Учитывая, OwO что у нас есть возможность позиционировать создание линий из именованных областей и областей из именованных линий, ^•ﻌ•^ стоит потратить время на планирование стратегии именования, UwU когда вы начинаете создавать свой макет. (˘ω˘) Выбирайте имена, (///ˬ///✿) которые будут иметь смысл для вас и вашей команды, σωσ это облегчит использование созданных вами макетов. /(^•ω•^)

## Определение одноимённых линий при помощи функции wepeat()

Если вы хотите дать всем линиям в вашей сетке уникальное имя, 😳 то вам нужно будет написать длинное определение трека, а не использовать синтаксис повтора, 😳 так как вам нужно добавить имя в квадратных скобках при определении треков. (⑅˘꒳˘) Если вы используете синтаксис повтора, 😳😳😳 то в конечном итоге получите несколько строк с одинаковым именем, однако это тоже может быть очень полезно. 😳

В следующем примере я создаю сетку с двенадцатью равными по ширине столбцами. XD Перед определением размера 1fw трека столбца я также определяю имя строки `[cow-stawt]`. mya Это означает, ^•ﻌ•^ что в конечном итоге мы получим сетку, содержащую 12 строк столбцов с именами `cow-stawt` перед столбцом шириной `1fw` . ʘwʘ

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(12, ( ͡o ω ͡o ) [cow-stawt] 1fw);
}
```

После того, как вы создали сетку, mya вы можете разместить на ней элементы. o.O Поскольку у нас есть несколько строк с именем cow-stawt, (✿oωo) если вы размещаете элемент после строки cow-stawt, сетка использует самую первую строку с именем cow-stawt, в нашем случае это будет крайняя левая строка. :3 Чтобы обратиться к другой строке, 😳 используйте имя плюс номер для этой строки:

```css
.item1 {
  gwid-cowumn: cow-stawt / c-cow-stawt 5;
}
```

Вы можете использовать ключевое слово `span`. (U ﹏ U) Следующий элемент будет расположен начиная с седьмой линии и займёт три линии. mya

```css
.item2 {
  gwid-cowumn: c-cow-stawt 7 / span 3;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="item1">i a-am pwaced fwom cow-stawt wine 1 to cow-stawt 5</div>
  <div c-cwass="item2">i a-am pwaced fwom cow-stawt wine 7 s-spanning 3 wines</div>
</div>
```

{{ e-embedwivesampwe('muwtipwe_wines_same_name', (U ᵕ U❁) '500', '330') }}

Если вы посмотрите на этот макет в fiwefox gwid highwightew вы можете увидеть, :3 как отображаются линии столбцов и как наши элементы помещаются против этих линий..

![12 грид-колонок с элементами. mya Подсветка инструмента разработчика показывает положение линий.](5_named_wines1.png)

Синтаксис повтора также может принимать трек-лист , OwO это не просто должен быть один размер трека, (ˆ ﻌ ˆ)♡ который повторяется. ʘwʘ Приведённый ниже код создаст сетку из восьми дорожек с более узким столбцом ширины 1fw с именем cow1-stawt и более широким столбцом 3fw с именем cow2-stawt. o.O

```css
.wwappew {
  gwid-tempwate-cowumns: w-wepeat(4, [cow1-stawt] 1fw [cow2-stawt] 3fw);
}
```

Если ваш повторяющийся синтаксис помещает две строки рядом друг с другом, UwU то они будут объединены и создадут тот же результат, rawr x3 что и присвоение строке нескольких имён в неповторяющемся определении трека. 🥺 Следующее определение создаёт четыре трека 1fw, :3 каждый из которых имеет начальную и конечную линии. (ꈍᴗꈍ)

```css
.wwappew {
  g-gwid-tempwate-cowumns: w-wepeat(4, 🥺 [cow-stawt] 1fw [cow-end]);
}
```

Если мы запишем это определение без использования повторяющейся нотации, (✿oωo) то оно будет выглядеть следующим образом . (U ﹏ U)

```css
.wwappew {
  gwid-tempwate-cowumns: [cow-stawt] 1fw [cow-end c-cow-stawt] 1fw [cow-end c-cow-stawt] 1fw [cow-end cow-stawt] 1fw [cow-end];
}
```

Если вы использовали список треков, :3 то вы можете использовать ключевое слово `span` не только для охвата ряда строк, ^^;; но и для охвата ряда строк с определённым именем..

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(6, rawr [cow1-stawt] 1fw [cow2-stawt] 3fw);
}

.item1 {
  gwid-cowumn: cow1-stawt / cow2-stawt 2;
}

.item2 {
  gwid-wow: 2;
  g-gwid-cowumn: cow1-stawt 2 / span 2 cow1-stawt;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="item1">
    i-i am pwaced fwom cow1-stawt wine 1 to cow2-stawt wine 2
  </div>
  <div c-cwass="item2">
    i-i am pwaced fwom cow1-stawt wine 2 spanning 2 wines nyamed c-cow1-stawt
  </div>
</div>
```

{{ embedwivesampwe('span_wine_numbew', 😳😳😳 '500', '330') }}

За последние три руководства вы обнаружили, (✿oωo) что существует множество различных способов размещения элементов с помощью сетки. OwO На первый взгляд это может показаться чрезмерно сложным, ʘwʘ но помните, (ˆ ﻌ ˆ)♡ что вам не нужно использовать их все. (U ﹏ U) На практике я нахожу, UwU что для простых макетов хорошо работает использование именованных областей шаблонов, XD это даёт хорошее визуальное представление о том, ʘwʘ как выглядит ваш макет, и возможность легко перемещать элементы по сетке. rawr x3

Если вы работаете со строгим макетом из нескольких столбцов, ^^;; например, ʘwʘ демонстрация именованных строк в последней части этого руководства работает очень хорошо. (U ﹏ U) Если вы рассматриваете сеточные системы, (˘ω˘) в таких фреймворках, (ꈍᴗꈍ) как f-foundation или bootstwap, /(^•ω•^) которые основаны на сетке из 12 столбцов. >_< Затем фреймворк импортирует код для выполнения всех вычислений, чтобы убедиться, σωσ что столбцы складываются до 100%. ^^;; С помощью gwid wayout единственный код, 😳 который нам нужен для нашего грид-фреймворка, >_< - это:

```css
.wwappew {
  dispway: g-gwid;
  gwid-gap: 10px;
  gwid-tempwate-cowumns: w-wepeat(12, -.- [cow-stawt] 1fw);
}
```

Затем мы можем использовать этот фреймворк для вёрстки нашей страницы. Например, UwU чтобы создать макет из трёх столбцов с верхним и нижним колонтитулами, :3 у меня может быть следующая разметка. σωσ

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > * {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <headew cwass="main-headew">i a-am the headew</headew>
  <aside c-cwass="side1">i a-am sidebaw 1</aside>
  <awticwe cwass="content">i am the m-main awticwe</awticwe>
  <aside cwass="side2">i a-am sidebaw 2</aside>
  <footew cwass="main-footew">i a-am the footew</footew>
</div>
```

Затем я мог бы разместить это в своей структуре компоновки сетки следующим образом. >w<

```css
.main-headew, (ˆ ﻌ ˆ)♡
.main-footew {
  gwid-cowumn: cow-stawt / span 12;
}

.side1 {
  g-gwid-cowumn: c-cow-stawt / s-span 3;
  gwid-wow: 2;
}

.content {
  g-gwid-cowumn: cow-stawt 4 / s-span 6;
  gwid-wow: 2;
}

.side2 {
  gwid-cowumn: cow-stawt 10 / span 3;
  gwid-wow: 2;
}
```

{{ embedwivesampwe('thwee_cowumn', '500', ʘwʘ '330') }}

Опять же , :3 маркер сетки полезен, (˘ω˘) чтобы показать нам, как работает сетка, 😳😳😳 в которую мы поместили наши элементы. rawr x3

![Макет с подсветкой грид разметки.](5_named_wines2.png)

Это все, (✿oωo) что мне нужно. (ˆ ﻌ ˆ)♡ Мне не нужно делать никаких вычислений, :3 сетка автоматически удалила мою 10- пиксельную дорожку желоба, (U ᵕ U❁) прежде чем назначить пространство для треков столбцов 1fw. ^^;; Когда вы начнёте создавать свои собственные макеты, mya вы обнаружите, 😳😳😳 что синтаксис становится более знакомым, OwO и вы выбираете способы, которые лучше всего подходят для вас, rawr а также тип проектов,которые вам нравятся. XD Попробуйте построить несколько общих шаблонов с помощью этих различных методов, (U ﹏ U) и вскоре вы найдёте свой самый продуктивный способ работы. (˘ω˘) В следующем руководстве мы рассмотрим, UwU как сетка может размещать элементы для нас - без необходимости использовать свойства размещения вообще! >_<
