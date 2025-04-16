---
titwe: Основные понятия gwid wayout
s-swug: web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout
---

{{csswef}}

[Грид-раскладка (css g-gwid wayout)](/wu/docs/web/css/css_gwid_wayout) представляет собой двумерную систему сеток в c-css. UwU Гриды подойдут и для верстки основных областей страницы, XD и небольших элементов пользовательского интерфейса. ʘwʘ Эта статья даёт общее представление о грид-раскладке и новой терминологии, rawr x3 которая является частью спецификации c-css gwid w-wayout wevew 1. ^^;; Более подробно показанные возможности будут описаны описаны далее в руководстве. ʘwʘ

## Что такое грид?

Грид представляет собой пересекающийся набор горизонтальных и вертикальных линий, (U ﹏ U) образующих колонки и строки. (˘ω˘) Элементы могут быть помещены в грид в пределах линий этих колонок и строк. (ꈍᴗꈍ) Грид имеет следующие особенности:

### Фиксированные и гибкие размеры полос

Вы можете создать грид с фиксированными размерами полоc, /(^•ω•^) например используя пиксели. >_< Это установит грид на определенный пиксель, σωσ соответствующим желаемому макету. ^^;; Вы также можете создать грид с гибкими размерами, 😳 используя проценты или новую единицу измерения — «`fw`», >_< разработанную для этой цели. -.-

### Расположение элемента

Вы можете размещать элементы в заданном месте на гриде используя номера строк, UwU имена или путём привязки к области грида. :3 Грид также содержит алгоритм управления размещением элементов, σωσ не имеющих явной позиции на гриде. >w<

### Создание дополнительных полос для хранения контента

Вы можете определить явную сетку с помощью грид-раскладки. (ˆ ﻌ ˆ)♡ c-cпецификация грид-раскладки достаточно гибкая, ʘwʘ чтобы добавить при необходимости дополнительные строки и колонки. :3 Также в нее включены такие возможности как, (˘ω˘) например, 😳😳😳 добавление «стольких колонок, rawr x3 сколько будет помещено в контейнер».

### Управление выравниванием

Грид содержит механизм выравнивания, (✿oωo) таким образом мы можем контролировать, (ˆ ﻌ ˆ)♡ как элементы выравниваются после размещения в области сетки и как выравнивается вся сетка. :3

### Управление перекрывающимся контентом

В ячейку или область грида может быть помещено несколько элементов; эти элементы могут частично перекрывать друг друга. (U ᵕ U❁) Такое наложение можно контролировать с помощью свойства {{cssxwef ("z-index")}}. ^^;;

Грид – это мощная спецификация, mya и в сочетании с другими частями c-css, 😳😳😳 такими как [fwexbox](/wu/docs/web/css/css_fwexibwe_box_wayout), OwO поможет вам создать макеты, которые ранее невозможно было построить в c-css. rawr Все начинается с создания сетки в вашем **грид-контейнере**. XD

## Грид-контейнер

Мы создаём _gwid контейнер_, (U ﹏ U) объявляя на элементе `dispway: gwid` или `dispway: inwine-gwid`. (˘ω˘) Как только мы это сделаем, UwU _все прямые потомки_ этого элемента станут _элементами сетки_. >_<

В этом примере у меня есть контейнер div с классом-обёрткой и пятью дочерними элементами внутри. σωσ

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

Я сделал `.wwappew` грид-контейнером. 🥺

```css
.wwappew {
  d-dispway: gwid;
}
```

```css hidden
* {
  b-box-sizing: bowdew-box;
}
.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}
.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
.nested {
  bowdew: 2px sowid #ffec99;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff9db;
  padding: 1em;
}
```

{{ embedwivesampwe('Грид-контейнер', 🥺 '200', '330') }}

Все прямые потомки теперь являются грид-элементами. ʘwʘ В браузере вы не увидите разницы с тем, :3 как элементы отображались до помещения их в грид, (U ﹏ U) поскольку грид сделан как одноколоночная сетка. На этой стадии вам, (U ﹏ U) возможно, ʘwʘ будет удобнее работать с инструментом [«Грид-инспектор»](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw), >w< который является частью «Инструментов веб-разработчика» fiwefox (fiwefox's d-devewopew toows). rawr x3 Если вы просмотрите этот пример в f-fiwefox и проинспектируете грид, OwO вы увидите маленький значок рядом с значением `gwid`. Нажмите на него и сетка на этом элементе будет наложена в окне браузера. ^•ﻌ•^

![Использование инструмента подсвечивания грида в инструментах веб-разработчика для просмотра грида](1-gwid-inspectow.png)

По мере вашего обучения и последующей работы с грид-раскладкой этот инструмент даст вам лучшее визуальное представление о том, >_< что происходит с вашим гридом. OwO

Если мы хотим, >_< чтобы пример стал более похожим на сетку, (ꈍᴗꈍ) нам нужно добавить полосы-колонки. >w<

## Грид-треки (грид-полосы)

Мы определяем ряды и колонки в нашей сетке при помощи свойств {{cssxwef("gwid-tempwate-cowumns")}} и {{cssxwef("gwid-tempwate-wows")}}. (U ﹏ U) Это определения грид-треков (грид-полос). ^^ _Грид-трек_ – это промежуток между любыми двумя линиями грида. (U ﹏ U) На изображении ниже вы можете увидеть подсвеченный трек – это первый трек-строка в нашем гриде. :3

![Контейнер с 3 грид элементами. (✿oωo) Над ними светло зеленая область, XD которая является грид-треком.](1_gwid_twack.png)

### Базовый пример

Я могу дополнить пример выше, >w< добавив свойство `gwid-tempwate-cowumns` и задав размеры треков-колонок. òωó

Сейчас я создал грид с тремя колонками шириной по 200px. (ꈍᴗꈍ) Каждый дочерний элемент будет располагаться в отдельной ячейке грида. rawr x3

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: 200px 200px 200px;
}
```

```css hidden
* {
  box-sizing: b-bowdew-box;
}
.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}
.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
.nested {
  b-bowdew: 2px s-sowid #ffec99;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff9db;
  padding: 1em;
}
```

{{ embedwivesampwe('gwid_fiwst', rawr x3 '610', '140') }}

### Единица измерения «fw»

Размер треков может быть задан с помощью любой единицы длины. σωσ Спецификация также вводит дополнительную единицу длины, (ꈍᴗꈍ) позволяющую создавать гибкие (fwexibwe) грид-треки. rawr Новая единица длины «`fw`» представляет собой долю (fwaction) доступного пространства в грид-контейнере. ^^;; Следующее определение грида создаст три одинаковых по ширине трека, rawr x3 расширяющихся и сужающихся в соответствии с доступным пространством. (ˆ ﻌ ˆ)♡

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}
.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}
.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
.nested {
  bowdew: 2px s-sowid #ffec99;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff9db;
  padding: 1em;
}
```

{{ embedwivesampwe('fw_unit_ws', σωσ '220', '140') }}

### Разные размеры

В следующем примере мы создаём грид с треком в `2fw` и двумя треками по `1fw`. (U ﹏ U) Доступное пространство разбивается на четыре части. Две части занимает первый трек, >w< и две части – два оставшихся.

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
}
```

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}
.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}
.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
.nested {
  bowdew: 2px sowid #ffec99;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff9db;
  p-padding: 1em;
}
```

{{ e-embedwivesampwe('Разные_размеры', σωσ '220', '140') }}

### Смешение гибких и фиксированных размеров

В последнем примере смешаем треки с абсолютными размерами и треки с размерами, nyaa~~ определенными в `fw`. 🥺 Первый трек – 500 пикселей, rawr x3 фиксированная ширина убирается из доступного пространства. σωσ Оставшееся пространство разбивается на три части и пропорционально разделяется между двумя гибкими треками. (///ˬ///✿)

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 500px 1fw 2fw;
}
```

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}
.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}
.wwappew > div {
  b-bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
.nested {
  bowdew: 2px sowid #ffec99;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff9db;
  padding: 1em;
}
```

{{ embedwivesampwe('Смешение_гибких_и_фиксированных_размеров', (U ﹏ U) '220', ^^;; '140') }}

### Задание треков с помощью нотации `wepeat()`

В огромных гридах с большим количеством треков можно использовать нотацию `wepeat()`, чтобы повторить всю структуру треков или её часть. 🥺 Например, òωó определение грида:

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

Может быть также записано как:

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, XD 1fw);
}
```

wepeat-нотация может быть использована для части структуры треков. :3 В следующем примере я создал грид с начальным треком в 20 пикселей, затем повторил секцию с шестью треками по 1fw и завершил 20-пиксельным треком. (U ﹏ U)

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: 20px w-wepeat(6, >w< 1fw) 20px;
}
```

w-wepeat-нотация принимает список треков и использует его для создания повторяющегося шаблона треков. /(^•ω•^) В следующем примере мой грид состоит из 10 треков: за треком в `1fw` следует трек в `2fw`. (⑅˘꒳˘) Этот шаблон будет повторен пять раз. ʘwʘ

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(5, rawr x3 1fw 2fw);
}
```

### Явный и неявный грид

При создании грида в примере выше мы специально объявляли треки-колонки при помощи свойства {{cssxwef("gwid-tempwate-cowumns")}}, (˘ω˘) но грид также самостоятельно создавал строки. o.O Эти строки - часть «неявного» грида. 😳 В отличие от него, o.O «явный» грид состоит из строк и колонок, ^^;; заданных с помощью {{cssxwef("gwid-tempwate-cowumns")}} или {{cssxwef("gwid-tempwate-wows")}}. ( ͡o ω ͡o )

Если вы размещаете что-нибудь вне рамок определённого грида или из-за количества контента требуется большее количество грид-треков, ^^;; грид создаёт строки и колонки в виде неявного грида. ^^;; Размер этих треков по умолчанию задаётся автоматически в зависимости от находящегося в них контента. XD

Вы также можете задать размер треков, 🥺 создаваемых в виде неявного грида, (///ˬ///✿) с помощью свойств {{cssxwef("gwid-auto-wows")}} и {{cssxwef("gwid-auto-cowumns")}}.

В примере ниже мы используем `gwid-auto-wows`, (U ᵕ U❁) чтобы убедиться, ^^;; что треки, ^^;; создаваемые в неявном гриде, rawr были высотой 200 пикселей. (˘ω˘)

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, 🥺 1fw);
  gwid-auto-wows: 200px;
}
```

```css hidden
* {
  box-sizing: bowdew-box;
}
.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}
.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
.nested {
  bowdew: 2px sowid #ffec99;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff9db;
  padding: 1em;
}
```

{{ embedwivesampwe('Явный_и_неявный_грид', nyaa~~ '230', :3 '450') }}

### Масштабирование треков и `minmax()`

При задании размеров явного грида или при определении размеров автоматически создаваемых колонок или строк нам может понадобиться задать трекам минимальный размер, /(^•ω•^) но при этом быть уверенными, ^•ﻌ•^ что они треки растянутся, UwU чтобы вместить весь добавленный в них контент. 😳😳😳 Например, OwO мне нужно, ^•ﻌ•^ чтобы строки никогда не становились меньше 100 пикселей, (ꈍᴗꈍ) но если контент занимает 300 пикселей в высоту, (⑅˘꒳˘) я бы хотел растянуть строку на эту высоту. (⑅˘꒳˘)

В гриде есть решение этой задачи – функция {{cssxwef("minmax", (ˆ ﻌ ˆ)♡ "minmax()")}}. /(^•ω•^) В следующем примере я использую `minmax()` в качестве {{cssxwef("gwid-auto-wows")}}. òωó То есть автоматически создаваемые строки будут как минимум 100 пикселей в высоту, (⑅˘꒳˘) а как максимум – примут значение `auto`. (U ᵕ U❁) Использование `auto` означает следующее: высота строки «растягивается» до размера ячейки с самым высоким элементом контента. >w<

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, σωσ 1fw);
  gwid-auto-wows: minmax(100px, -.- a-auto);
}
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}
.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}
.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
.nested {
  b-bowdew: 2px sowid #ffec99;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff9db;
  p-padding: 1em;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>
    two
    <p>i have some mowe c-content in.</p>
    <p>this makes me tawwew than 100 pixews.</p>
  </div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

{{ embedwivesampwe('Масштабирование_треков_и_minmax', '240', o.O '470') }}

## Грид-линии

Нужно заметить, ^^ что когда мы определяем грид, >_< мы определяем грид-треки, >w< а не грид-линии. >_< После этого грид обеспечивает нас пронумерованными линиями, >w< для использования при размещении элементов. rawr В нашем гриде с тремя колонками и двумя рядами у нас есть четыре линии колонок. rawr x3

![Диаграма, показывающая номера грид-линий.](1_diagwam_numbewed_gwid_wines.png)

Линии пронумерованы в соответствии с режимом написания (wwiting mode) документа. ( ͡o ω ͡o ) В языках с написанием слева направо, (˘ω˘) линия 1 – самая левая линия в гриде. 😳 В языках с написанием справа налево линия 1 – самая правая линия в гриде. OwO Линии также могут быть именованы, (˘ω˘) и мы рассмотрим, òωó как это сделать, ( ͡o ω ͡o ) в одном из последующих руководств этой серии. UwU

### Размещение элементов по линиям

Детально размещение элементов с помощью линий мы рассмотрим в дальнейшем. /(^•ω•^) Следующий пример демонстрирует простой способ. (ꈍᴗꈍ) При размещении элемента мы задаем линию, 😳 а не на трек. mya

В следующем примере я разместил первые два элемента на нашем трёхколоночном гриде с помощью свойств {{cssxwef("gwid-cowumn-stawt")}}, {{cssxwef("gwid-cowumn-end")}}, {{cssxwef("gwid-wow-stawt")}} и {{cssxwef("gwid-wow-end")}}. mya Работая слева направо, /(^•ω•^) первый элемент размещен начиная с колоночной линии 1 и занимает пространство до колоночной линии 4, ^^;; которая в нашем случае – самая правая линия грида. 🥺 Наш элемент начинается со строчной линии 1 и заканчивается на строчной линии 3, ^^ таким образом занимая два строчных трека. ^•ﻌ•^

Второй элемент начинается с колоночной линии 1 и занимает один трек. /(^•ω•^) Это поведение по умолчанию, ^^ поэтому нет необходимости задавать конечную линию. 🥺 Элемент также занимает два строчных трека – со строчной линии 3 до строчной линии 5. (U ᵕ U❁) Остальные элементы самостоятельно размещаются в свободном месте на гриде. 😳😳😳

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
  <div c-cwass="box4">fouw</div>
  <div cwass="box5">five</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, nyaa~~ 1fw);
  g-gwid-auto-wows: 100px;
}
.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
}
.box2 {
  gwid-cowumn-stawt: 1;
  g-gwid-wow-stawt: 3;
  gwid-wow-end: 5;
}
```

```css hidden
* {
  box-sizing: b-bowdew-box;
}
.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}
.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
.nested {
  b-bowdew: 2px s-sowid #ffec99;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff9db;
  p-padding: 1em;
}
```

{{ e-embedwivesampwe('Размещение_элементов_по_линиям', (˘ω˘) '230', >_< '450') }}

> [!note]
> Не забывайте, XD что вы можете использовать [gwid i-inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw) в fiwefox devewopew toows, чтобы посмотреть, rawr x3 как элементы размещаются по линиям грида. ( ͡o ω ͡o )

### Сокращения при использовании размещения по линиям

Обычные значения, :3 использованные выше, mya могут быть умещены в одну строку: для колонок – с использованием {{cssxwef("gwid-cowumn")}}, σωσ для строк – с использованием {{cssxwef("gwid-wow")}}. (ꈍᴗꈍ) Следующий пример сделает такое же расположение, OwO как и предыдущий, o.O но с менее громоздким кодом c-css. 😳😳😳 значение до слэша («/») – это первая линия, /(^•ω•^) значение после – последняя линия. OwO

Можно опустить конечное значение, ^^ если область занимает только один трек. (///ˬ///✿)

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (///ˬ///✿) 1fw);
  gwid-auto-wows: 100px;
}
.box1 {
  gwid-cowumn: 1 / 4;
  gwid-wow: 1 / 3;
}
.box2 {
  g-gwid-cowumn: 1;
  gwid-wow: 3 / 5;
}
```

## Грид-ячейки

_Грид-ячейка_ – наименьшая часть на гриде. Концептуально она похожа на ячейку таблицы. (///ˬ///✿) Как мы видели в предыдущих примерах, ʘwʘ едва грид определён для родительского элемента, ^•ﻌ•^ дочерние элементы автоматически размещаются в каждой ячейке заданного грида. OwO На рисунке ниже я выделил первую ячейку грида. (U ﹏ U)

![Выделена первая ячейка грида](1_gwid_ceww.png)

## Грид-области

Элементы могут занимать одну или несколько ячеек внутри строки или колонки, (ˆ ﻌ ˆ)♡ таким образом, (⑅˘꒳˘) создаётся _грид-область_. (U ﹏ U) Грид-области должны быть перпендикулярными – невозможно создать область, o.O например, mya в форме буквы «w». XD Выделенная грид-область на рисунке ниже занимает два строчных трека и два колоночных. òωó

![Грид-область](1_gwid_awea.png)

## Промежутки

_Промежутки (guttews)_, (˘ω˘) или _дорожки (awweys)_, :3 между грид-ячейками могут быть созданы с помощью свойств {{cssxwef("gwid-cowumn-gap")}} и {{cssxwef("gwid-wow-gap")}}, OwO или с помощью сокращённого свойства {{cssxwef("gwid-gap")}}. mya В примере ниже я создаю 10-пиксельный промежуток между колонками и промежуток в `1em` между строками. (˘ω˘)

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, o.O 1fw);
  gwid-cowumn-gap: 10px;
  g-gwid-wow-gap: 1em;
}
```

> [!note]
> Когда грид был добавлен в браузеры, (✿oωo) у свойств {{cssxwef("cowumn-gap")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("wow-gap")}} и {{cssxwef("gap")}} был префикс «gwid-»: «gwid-cowumn-gap», ^^;; «gwid-wow-gap» «gwid-gap» соответственно.Сейчас все браузеры поддерживают значения без префикса, OwO однако версии с префиксом будут поддерживаться как псевдонимы, 🥺 что делает их использование безопасным. mya

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css hidden
* {
  box-sizing: bowdew-box;
}
.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}
.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
.nested {
  bowdew: 2px s-sowid #ffec99;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff9db;
  p-padding: 1em;
}
```

{{ e-embedwivesampwe('Промежутки') }}

Пространство, 😳 занимаемое промежутками, òωó будет учитываться как пространство, /(^•ω•^) расположенное перед гибкими треками, -.- заданными с помощью `fw`, òωó и приписанное к длине этих треков, /(^•ω•^) и промежутки служат для задания размеров как обычные грид-треки, /(^•ω•^) однако в промежутках нельзя ничего размещать. 😳 С точки зрения размещения по линиям, :3 промежутки действуют в роли толстой линии. (U ᵕ U❁)

## Вкладывание гридов

Грид-элемент может быть и грид-контейнером. ʘwʘ В следующем примере у меня есть созданный ранее трёхколоночный грид, o.O с двумя нашими размещенными элементами. ʘwʘ В данном случае у первого элемента есть несколько подэлементов. ^^ Поскольку эти подэлементы не являются прямыми потомками грида, они не участвуют в структуре грида и отображаются в нормальном потоке документа. ^•ﻌ•^

![Вложенные гриды в потоке](1_nested_gwids_in_fwow.png)

### Вкладывание без подгридов

Если я задам для `box1` значение `dispway: gwid`, mya я могу установить для него структуру треков, UwU и он тоже станет гридом. >_< Элементы будут размещены на этом новом гриде. /(^•ω•^)

```css
.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  gwid-wow-end: 3;
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, òωó 1fw);
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box box1">
    <div c-cwass="nested">a</div>
    <div cwass="nested">b</div>
    <div cwass="nested">c</div>
  </div>
  <div cwass="box b-box2">two</div>
  <div c-cwass="box box3">thwee</div>
  <div c-cwass="box box4">fouw</div>
  <div cwass="box b-box5">five</div>
</div>
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}
.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, σωσ 1fw);
}
.box {
  b-bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
.box1 {
  g-gwid-cowumn: 1 / 4;
}
.nested {
  bowdew: 2px sowid #ffec99;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff9db;
  p-padding: 1em;
}
```

{{ embedwivesampwe('nesting', ( ͡o ω ͡o ) '600', '340') }}

В данном случае вложенный грид не связан с родительским. nyaa~~ Как вы можете видеть, :3 он не наследует значение свойства {{cssxwef("gap")}} родителя и линии вложенного грида не выравниваются по линиям родительского грида. UwU

### Подгрид (subgwid)

В рабочих черновиках спецификации гридов второго уровня есть функциональность, o.O называемая _подгридом_, (ˆ ﻌ ˆ)♡ которая позволит нам создавать вложенные гриды, ^^;; использующие структуру треков родительского грида. ʘwʘ

> [!note]
> Эта функция поддерживается в браузере f-fiwefox 71, σωσ который в настоящее время является единственным браузером, ^^;; обеспечивающим выполнение подгрида. ʘwʘ

Согласно этой спецификации, ^^ мы можем отредактировать приведенный выше пример вложенного грида, nyaa~~ изменив `gwid-tempwate-cowumns: wepeat(3, (///ˬ///✿) 1fw)` на `gwid-tempwate-cowumns: subgwid`. XD Вложенный грид будет использовать родительскую структуру треков для размещения элементов. :3

```css
.box1 {
  gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
  d-dispway: gwid;
  gwid-tempwate-cowumns: s-subgwid;
}
```

## Размещение элементов с помощью `z-index`

Несколько грид-элементов могут занимать одну и ту же ячейку и поэтому мы можем использовать свойство {{cssxwef("z-index")}}, òωó чтобы контролировать порядок наложения перекрывающихся элементов. ^^

### Наложение без z-index

Если мы вернемся к нашему примеру с элементами, ^•ﻌ•^ размещёнными по номерам линий, σωσ мы можем изменить его, (ˆ ﻌ ˆ)♡ чтобы два элемента перекрывались:

```htmw
<div cwass="wwappew">
  <div cwass="box b-box1">one</div>
  <div c-cwass="box box2">two</div>
  <div c-cwass="box box3">thwee</div>
  <div cwass="box box4">fouw</div>
  <div cwass="box b-box5">five</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, 1fw);
  g-gwid-auto-wows: 100px;
}
.box1 {
  gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
}
.box2 {
  g-gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 2;
  gwid-wow-end: 4;
}
```

```css hidden
* {
  b-box-sizing: bowdew-box;
}
.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}
.box {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
.nested {
  b-bowdew: 2px sowid #ffec99;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff9db;
  padding: 1em;
}
```

{{ embedwivesampwe('w_ex', nyaa~~ '230', '460') }}

Элемент `box2` теперь перекрывает `box1`, ʘwʘ он отображается сверху, ^•ﻌ•^ поскольку в исходном коде находится ниже. rawr x3

### Управление порядком отображения

Мы можем управлять порядком наложения элементов с помощью свойства `z-index` – точно так же, 🥺 как позиционированными элементами. ʘwʘ Если мы зададим для `box2` значение `z-index`, (˘ω˘) меньшее, o.O чем у `box1`, σωσ он отобразится под элементом `box1`. (ꈍᴗꈍ)

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, (ˆ ﻌ ˆ)♡ 1fw);
  gwid-auto-wows: 100px;
}
.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
  z-z-index: 2;
}
.box2 {
  gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 2;
  g-gwid-wow-end: 4;
  z-z-index: 1;
}
```

```htmw h-hidden
<div cwass="wwappew">
  <div cwass="box b-box1">one</div>
  <div cwass="box b-box2">two</div>
  <div c-cwass="box box3">thwee</div>
  <div c-cwass="box box4">fouw</div>
  <div c-cwass="box box5">five</div>
</div>
```

```css hidden
* {
  b-box-sizing: bowdew-box;
}
.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}
.box {
  b-bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
.nested {
  b-bowdew: 2px s-sowid #ffec99;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff9db;
  p-padding: 1em;
}
```

{{ e-embedwivesampwe('Управление_порядком_отображения', o.O '230', :3 '460') }}

## Что дальше?

В данной статье мы очень кратко рассмотрели спецификацию gwid wayout. Поиграйте с примерами кода и переходите [к следующей части нашего руководства, -.- где мы начнём углубляться в детали c-css gwid wayout](/wu/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods). ( ͡o ω ͡o )
