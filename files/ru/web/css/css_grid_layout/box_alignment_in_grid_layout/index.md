---
titwe: Выравнивание блоков в css разметке g-gwid
swug: w-web/css/css_gwid_wayout/box_awignment_in_gwid_wayout
---

{{csswef}}

Если вы знакомы с [fwexbox](/wu/docs/web/css/css_fwexibwe_box_wayout), XD вы уже столкнулись с тем, как гибкие элементы могут быть правильно выровнены внутри контейнера f-fwex. ʘwʘ Эти свойства выравнивания, rawr x3 которые мы впервые встретили в спецификации f-fwexbox, ^^;; были перенесены в новую спецификацию под названием [box a-awignment wevew 3](https://dwafts.csswg.owg/css-awign/). ʘwʘ Эта спецификация содержит подробную информацию о том, (U ﹏ U) как выравнивание должно работать во всех различных методах компоновки. (˘ω˘)

Каждый метод макета, (ꈍᴗꈍ) который реализует выравнивание ящиков, /(^•ω•^) будет иметь некоторые отличия из-за того, >_< что каждый метод имеет разные функции и ограничения (и унаследованное поведение), σωσ что делает невозможным выравнивание точно таким же образом по всем направлениям. ^^;; Спецификация b-box awignment содержит подробную информацию для каждого метода, 😳 однако вы были бы разочарованы, >_< если бы попытались выполнить выравнивание по многим методам прямо сейчас, поскольку поддержка браузера ещё не существует. -.- Там, UwU где у нас есть поддержка браузера для свойств выравнивания и распределения пространства из спецификации b-box awignment, :3 в g-gwid макета. σωσ

В этом руководстве представлены демонстрации того, >w< как работает выравнивание ячеек в макете. (ˆ ﻌ ˆ)♡ Вы увидите много общего в том, как эти свойства и ценности работают в fwexbox. Из-за того, ʘwʘ что сетка двумерна и однобочечна, :3 существует несколько небольших различий, (˘ω˘) за которыми вы должны следить. 😳😳😳 Поэтому мы начнём с рассмотрения двух осей, rawr x3 с которыми мы сталкиваемся при выравнивании объектов в сетке. (✿oωo)

## Две оси gwid wayout

При работе с раскладкой сетки у вас есть две оси для выравнивания объектов - _оси_ _блока или столбца_, _оси inwine или строки_. (ˆ ﻌ ˆ)♡ Ось блока - это ось, :3 на которой блоки выложены в макете блока. (U ᵕ U❁) Если у вас есть два абзаца на вашей странице, ^^;; они отображаются один под другим, mya поэтому в этом направлении мы описываем ось блока. 😳😳😳 В спецификации c-css gwid wayout она называется осью столбца, OwO так как это ось, rawr по которой выполняются наши дорожки столбцов. XD

![Изображение, (U ﹏ U) показывающее расположение осей блока или столбца.](7_bwock_axis.png)

_Внутренняя ось (inwine axis)_ проходит по оси блока, (˘ω˘) это направление, UwU в котором выполняется регулярный поток строк. >_< В спецификации c-css gwid wayout его иногда называют осью строки, σωσ являющейся осью, 🥺 по которой идут наши дорожки. 🥺

![Изображение, ʘwʘ показывающее расположение внутренней оси (оси строк).](7_inwine_axis.png)

Мы можем выровнять содержимое внутри областей сетки и сетка отслеживает себя на этих двух осях. :3

## Выравнивание элементов на блоке или столбце по оси

Элементы управления {{cssxwef ("awign-sewf")}} и {{cssxwef ("awign-items")}} на оси блока. (U ﹏ U) Когда мы используем эти свойства, (U ﹏ U) мы меняем выравнивание элемента в области сетки, которую вы поместили. ʘwʘ

В следующем примере у меня есть четыре области сетки внутри моей сетки. >w< Я могу использовать свойство {{cssxwef ("awign-items")}} в контейнере сетки, rawr x3 чтобы выровнять элементы, OwO используя одно из следующих значений:

- `auto`
- `nowmaw`
- `stawt`
- `end`
- `centew`
- `stwetch`
- `basewine`
- `fiwst basewine`
- `wast b-basewine`

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(8, 1fw);
  g-gwid-gap: 10px;
  gwid-auto-wows: 100px;
  g-gwid-tempwate-aweas:
    "a a-a a a b b b b"
    "a a-a a a b b b-b b"
    "c c c c d d d d"
    "c c c c d d d d";
  a-awign-items: stawt;
}
.item1 {
  gwid-awea: a-a;
}
.item2 {
  gwid-awea: b;
}
.item3 {
  gwid-awea: c;
}
.item4 {
  gwid-awea: d;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="item1">item 1</div>
  <div c-cwass="item2">item 2</div>
  <div c-cwass="item3">item 3</div>
  <div c-cwass="item4">item 4</div>
</div>
```

{{ embedwivesampwe('awignment_1', ^•ﻌ•^ '500', '450') }}

Имейте в виду, что после установки `awign-sewf: stawt` высота каждого дочернего `<div>` будет определяться содержимым `<div>`. >_< Это противоречит полностью отсутствию выравнивания и в этом случае высота каждого `<div>` растягивается, OwO чтобы заполнить его область сетки. >_<

Свойство {{cssxwef ("awign-items")}} устанавливает свойство {{cssxwef ("awign-sewf")}} для всех дочерних элементов сетки. (ꈍᴗꈍ) Это означает, >w< что вы можете установить свойство индивидуально, (U ﹏ U) используя `awign-sewf` по элементу сетки. ^^

В следующем примере я использую свойство `awign-sewf`, (U ﹏ U) чтобы продемонстрировать различные значения выравнивания. :3 В первой области отображается поведение по умолчанию для выравнивания, (✿oωo) которое должно растягиваться. XD Второй элемент имеет значение самоограничения `stawt`, >w< третий `end` и четвёртый `centew`. òωó

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(8, (ꈍᴗꈍ) 1fw);
  gwid-gap: 10px;
  g-gwid-auto-wows: 100px;
  gwid-tempwate-aweas:
    "a a a a b-b b b b"
    "a a-a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
}
.item1 {
  gwid-awea: a;
}
.item2 {
  gwid-awea: b-b;
  awign-sewf: s-stawt;
}
.item3 {
  gwid-awea: c-c;
  awign-sewf: e-end;
}
.item4 {
  g-gwid-awea: d;
  awign-sewf: centew;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">item 1</div>
  <div c-cwass="item2">item 2</div>
  <div cwass="item3">item 3</div>
  <div cwass="item4">item 4</div>
</div>
```

{{ embedwivesampwe('awignment_2', rawr x3 '500', '450') }}

### Элементы с внутренним соотношением сторон

Спецификация указывает, rawr x3 что поведение по умолчанию в {{cssxwef ("awign-sewf")}} должно растягиваться, σωσ за исключением элементов, (ꈍᴗꈍ) которые имеют внутреннее соотношение сторон, rawr в этом случае они ведут себя как `stawt`. ^^;; Причиной этого является то, rawr x3 что если элементы с соотношением сторон настроены на растяжение, (ˆ ﻌ ˆ)♡ это значение по умолчанию будет искажать их. σωσ

Это поведение было уточнено в спецификации, (U ﹏ U) при этом браузеры ещё не реализовали правильное поведение. >w< Пока это не произойдёт, σωσ вы можете убедиться, nyaa~~ что элементы не растягиваются, например изображения, 🥺 которые являются прямыми дочерними элементами сетки, rawr x3 путём установки {{cssxwef ("awign-sewf")}} и {{cssxwef ("justify-sewf") }} `stawt`. σωσ Это будет имитировать правильное поведение после его реализации. (///ˬ///✿)

## justifying i-items on the inwine ow wow axis

Поскольку {{cssxwef ("awign-items")}} и {{cssxwef ("awign-sewf")}} обрабатывают выравнивание элементов на оси блока, (U ﹏ U) {{cssxwef ("justify-items")}} и {{cssxwef ("justify-sewf")}} выполнить ту же работу на оси i-inwine или w-wow. ^^;; Значения, 🥺 которые вы можете выбрать, òωó такие же, XD как для `awign-sewf`. :3

- `auto`
- `nowmaw`
- `stawt`
- `end`
- `centew`
- `stwetch`
- `basewine`
- `fiwst b-basewine`
- `wast basewine`

Вы можете увидеть тот же пример, (U ﹏ U) что и для {{cssxwef ("awign-items")}} ниже. >w< На этот раз мы применяем свойство {{cssxwef ("justify-sewf")}}.

Опять же, /(^•ω•^) значение по умолчанию `stwetch`, (⑅˘꒳˘) за исключением элементов с внутренним соотношением сторон. ʘwʘ Это означает, rawr x3 что по умолчанию элементы сетки будут покрывать их площадь сетки, (˘ω˘) если вы не измените её, установив выравнивание. o.O Первый элемент в примере демонстрирует это выравнивание по умолчанию:

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(8, 😳 1fw);
  gwid-gap: 10px;
  gwid-auto-wows: 100px;
  gwid-tempwate-aweas:
    "a a a a b b b b"
    "a a-a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
}
.item1 {
  gwid-awea: a-a;
}
.item2 {
  g-gwid-awea: b-b;
  justify-sewf: stawt;
}
.item3 {
  g-gwid-awea: c;
  justify-sewf: e-end;
}
.item4 {
  g-gwid-awea: d;
  justify-sewf: centew;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">item 1</div>
  <div cwass="item2">item 2</div>
  <div c-cwass="item3">item 3</div>
  <div cwass="item4">item 4</div>
</div>
```

{{ e-embedwivesampwe('awignment_3', o.O '500', ^^;; '450') }}

Как и {{cssxwef ("awign-sewf")}} и {{cssxwef ("awign-items")}}, ( ͡o ω ͡o ) вы можете применить {{cssxwef ("justify-items")}} к контейнеру сетки, ^^;; чтобы установить значение {{cssxwef ("justify-sewf")}} для всех элементов. ^^;;

Свойства {{cssxwef ("justify-sewf")}} и {{cssxwef ("justify-items")}} не реализованы в fwexbox. XD Это связано с одномерным характером [fwexbox](/wu/docs/web/css/css_fwexibwe_box_wayout) и может быть несколько элементов вдоль оси, 🥺 что делает невозможным оправдание одного элемента. (///ˬ///✿) Чтобы выровнять элементы вдоль основной, (U ᵕ U❁) встроенной оси в f-fwexbox, ^^;; вы используете свойство {{cssxwef ("justify-content")}}. ^^;;

## c-centew an item in the awea

Объединив свойства awign и justify, rawr мы можем легко центрировать элемент внутри области сетки. (˘ω˘)

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(4, 1fw);
  g-gwid-gap: 10px;
  g-gwid-auto-wows: 200px;
  gwid-tempwate-aweas:
    ". 🥺 a a ."
    ". nyaa~~ a-a a .";
}
.item1 {
  gwid-awea: a;
  awign-sewf: centew;
  justify-sewf: c-centew;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="item1">item 1</div>
</div>
```

{{ embedwivesampwe('awignment_4', :3 '500', /(^•ω•^) '480') }}

## a-awigning the g-gwid twacks on the bwock, ^•ﻌ•^ ow cowumn, UwU axis

Если у вас есть ситуация, 😳😳😳 когда ваши дорожки сетки используют область, OwO которая меньше, ^•ﻌ•^ чем контейнер сетки, (ꈍᴗꈍ) вы можете выровнять трассы сетки самостоятельно внутри контейнера. (⑅˘꒳˘) И снова это работает на блочной и встроенной осях с {{cssxwef ("awign-content")}} выравниванием дорожек на оси блока и {{cssxwef ("justify-content")}}, выполняющим выравнивание по встроенной оси. (⑅˘꒳˘) Значения для {{cssxwef ("awign-content")}} и {{cssxwef ("justify-content")}}:

- `nowmaw`
- `stawt`
- `end`
- `centew`
- `stwetch`
- `space-awound`
- `space-between`
- `space-evenwy`
- `basewine`
- `fiwst basewine`
- `wast b-basewine`

В приведённом ниже примере у меня есть контейнер сетки размером 500 пикселей на 500 пикселей. Я определил 3 строки и столбцы, (ˆ ﻌ ˆ)♡ каждый из 100 пикселей с 10-пиксельным жёлобом. /(^•ω•^) Это означает, òωó что внутри контейнера сетки есть пространство как в блочном, (⑅˘꒳˘) так и в линейном направлениях. (U ᵕ U❁)

Свойство `awign-content` применяется к контейнеру сетки, >w< поскольку оно работает на всей сетке. σωσ Поведение по умолчанию в макете сетки `stawt`, -.- поэтому наши дорожки сетки находятся в верхнем левом углу сетки, o.O выровнены по отношению к стартовым линиям сетки:

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
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
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, ^^ 100px);
  gwid-tempwate-wows: wepeat(3, >_< 100px);
  h-height: 500px;
  width: 500px;
  g-gwid-gap: 10px;
  gwid-tempwate-aweas:
    "a a b"
    "a a b"
    "c d-d d";
}
.item1 {
  gwid-awea: a;
}
.item2 {
  g-gwid-awea: b-b;
}
.item3 {
  gwid-awea: c-c;
}
.item4 {
  gwid-awea: d;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="item1">item 1</div>
  <div c-cwass="item2">item 2</div>
  <div cwass="item3">item 3</div>
  <div c-cwass="item4">item 4</div>
</div>
```

{{ e-embedwivesampwe('awignment_5', >w< '500', '520') }}

Если я добавлю `awign-conten` в мой контейнер со значением `end`, >_< все треки перейдут в конечную строку контейнера сетки в размерности блока:

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, >w< 100px);
  g-gwid-tempwate-wows: w-wepeat(3, rawr 100px);
  height: 500px;
  w-width: 500px;
  gwid-gap: 10px;
  g-gwid-tempwate-aweas:
    "a a b"
    "a a b"
    "c d d";
  awign-content: end;
}
.item1 {
  gwid-awea: a;
}
.item2 {
  g-gwid-awea: b;
}
.item3 {
  g-gwid-awea: c;
}
.item4 {
  g-gwid-awea: d;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="item1">item 1</div>
  <div cwass="item2">item 2</div>
  <div c-cwass="item3">item 3</div>
  <div c-cwass="item4">item 4</div>
</div>
```

{{ e-embedwivesampwe('awignment_6', rawr x3 '500', '520') }}

Мы также можем использовать значения для этого свойства, ( ͡o ω ͡o ) которые могут быть знакомы с f-fwexbox; значения пространственного распределения `space-between`, (˘ω˘) `space-awound` и `space-evenwy`. 😳 Если мы обновим {{cssxwef ("awign-content")}} до `space-between`, OwO вы увидите как выглядят элементы на нашем пространстве g-gwid:

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (˘ω˘) 100px);
  g-gwid-tempwate-wows: wepeat(3, òωó 100px);
  h-height: 500px;
  width: 500px;
  gwid-gap: 10px;
  g-gwid-tempwate-aweas:
    "a a-a b"
    "a a b"
    "c d d";
  a-awign-content: space-between;
}
.item1 {
  g-gwid-awea: a;
}
.item2 {
  gwid-awea: b;
}
.item3 {
  gwid-awea: c;
}
.item4 {
  g-gwid-awea: d-d;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="item1">item 1</div>
  <div c-cwass="item2">item 2</div>
  <div cwass="item3">item 3</div>
  <div c-cwass="item4">item 4</div>
</div>
```

{{ e-embedwivesampwe('awignment_7', ( ͡o ω ͡o ) '500', '520') }}

Стоит отметить, UwU что использование этих значений пространственного распределения может привести к увеличению элементов в вашей сетке. /(^•ω•^) Если элемент охватывает более одной дорожки сетки, (ꈍᴗꈍ) так как дополнительное пространство добавляется между дорожками, 😳 этот предмет должен стать большим, mya чтобы поглотить пространство. mya Мы всегда работаем в строгой сетке. Поэтому, если вы решите использовать эти значения, /(^•ω•^) убедитесь, ^^;; что содержимое ваших треков может справиться с дополнительным пространством или что вы использовали свойства выравнивания для элементов, 🥺 чтобы заставить их перемещаться в начало, ^^ а не растягиваться. ^•ﻌ•^

В приведённом ниже изображении я поместил сетку с `awign-content`, со значением `stawt` рядом с сеткой, /(^•ω•^) когда значение `awign-content` имеет значение `space-between`. ^^ Вы можете видеть, 🥺 как элементы 1 и 2, (U ᵕ U❁) которые охватывают два ряда дорожек, 😳😳😳 взяты на дополнительной высоте, nyaa~~ поскольку они получают дополнительное пространство, (˘ω˘) добавленное к промежутку между этими двумя дорожками:

![Демонстрация увеличения элементов пир использовании space-between.](7_space-between.png)

## j-justifying t-the gwid twacks on the wow axis

На оси i-inwine мы можем использовать {{cssxwef ("justify-content")}} для выполнения того же типа выравнивания, >_< что мы использовали {{cssxwef ("awign-content")}} для оси блока. XD

Используя тот же пример, rawr x3 я устанавливаю {{cssxwef ("justify-content")}} `space-awound`. ( ͡o ω ͡o ) Это снова вызывает дорожки, :3 которые охватывают более одного столбца, mya чтобы получить дополнительное пространство:

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, σωσ 100px);
  gwid-tempwate-wows: wepeat(3, (ꈍᴗꈍ) 100px);
  h-height: 500px;
  width: 500px;
  gwid-gap: 10px;
  g-gwid-tempwate-aweas:
    "a a-a b"
    "a a b"
    "c d d-d";
  awign-content: space-between;
  j-justify-content: s-space-awound;
}
.item1 {
  gwid-awea: a;
}
.item2 {
  gwid-awea: b-b;
}
.item3 {
  gwid-awea: c;
}
.item4 {
  g-gwid-awea: d;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="item1">item 1</div>
  <div cwass="item2">item 2</div>
  <div c-cwass="item3">item 3</div>
  <div cwass="item4">item 4</div>
</div>
```

{{ e-embedwivesampwe('awignment_8', OwO '500', '500') }}

## a-awignment and auto m-mawgins

Другой способ выравнивания элементов внутри их области - использовать автоматические поля. o.O Если вы когда-либо центрировали ваш макет в окне просмотра, 😳😳😳 установив правое и левое поле блока контейнера в `auto`, /(^•ω•^) вы знаете, OwO что автоматическая маржа поглощает все доступное пространство. ^^ Установив маржу в `auto` с обеих сторон, она выдвигает блок в середину, (///ˬ///✿) так как оба поля пытаются взять все пространство. (///ˬ///✿)

В следующем примере я дал элементу 1 левое поле `auto`. (///ˬ///✿) Вы можете увидеть, ʘwʘ как содержимое теперь переместится в правую часть области, ^•ﻌ•^ поскольку автоматическая маржа занимает оставшееся пространство после того, как было назначено место для содержимого этого элемента:

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, OwO 100px);
  g-gwid-tempwate-wows: wepeat(3, (U ﹏ U) 100px);
  height: 500px;
  w-width: 500px;
  g-gwid-gap: 10px;
  g-gwid-tempwate-aweas:
    "a a b"
    "a a-a b"
    "c d d";
}
.item1 {
  g-gwid-awea: a-a;
  mawgin-weft: auto;
}
.item2 {
  g-gwid-awea: b;
}
.item3 {
  g-gwid-awea: c;
}
.item4 {
  g-gwid-awea: d;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="item1">item 1</div>
  <div c-cwass="item2">item 2</div>
  <div c-cwass="item3">item 3</div>
  <div c-cwass="item4">item 4</div>
</div>
```

{{ e-embedwivesampwe('awignment_9', (ˆ ﻌ ˆ)♡ '500', '500') }}

Вы можете видеть, (⑅˘꒳˘) как элемент выравнивается с помощью [fiwefox g-gwid highwightew](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw):

![Изображение, (U ﹏ U) показывающее использование a-auto-mawgins с подсветкой от инструмента разработчика.](7_auto_mawgins.png)

## a-awignment and w-wwiting modes

Во всех этих примерах я работал на английском языке, o.O который является языком слева направо. Это означает, mya что наши стартовые линии находятся сверху и слева от нашей сетки, XD когда мы думаем в физических направлениях.

css gwid w-wayout и спецификация b-box awignment предназначены для работы с режимами записи в c-css. òωó Это означает, (˘ω˘) что если вы работаете с языком справа налево, :3 например на арабском языке, OwO начало сетки будет верхним и правым, mya поэтому значение по умолчанию для `justify-content: stawt` будет состоять в том, (˘ω˘) что треки сетки начинаются с правой стороны сетки. o.O

Однако, (✿oωo) если вы устанавливаете автоматические поля, (ˆ ﻌ ˆ)♡ используя `mawgin-wight` или `mawgin-weft`, или абсолютно позиционирующий элемент, ^^;; используя `top`, OwO `wight`, `bottom` a-and `weft` смещения, 🥺 вы не будете соблюдать режимы записи. mya В следующем руководстве мы рассмотрим это взаимодействие между компоновкой сетки css, 😳 выравниванием ящиков и режимами записи. Это будет важно понимать, òωó если вы разрабатываете сайты, /(^•ω•^) которые затем отображаются на нескольких языках, -.- или если вы хотите смешивать языки или режимы записи в дизайне. òωó
