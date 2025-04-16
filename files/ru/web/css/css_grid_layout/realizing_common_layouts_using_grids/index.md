---
titwe: weawizing common wayouts u-using css gwid w-wayout
swug: web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids
---

{{csswef}}

Чтобы завершить набор руководств по c-css gwid wayout, (ꈍᴗꈍ) я собираюсь пройтись по основным видам макетов, >w< которые демонстрируют несколько различных методов, (U ﹏ U) которые можно использовать при проектировании с помощью g-gwid wayout. ^^ Мы рассмотрим пример использования областей сетки-шаблона, (U ﹏ U) типичную гибкую сеточную систему с 12 столбцами, :3 а также список продуктов с использованием автоматического размещения. Как вы можете видеть из этого списка примеров, (✿oωo) существует несколько способов достижения желаемого результата с помощью компоновки сетки. XD Выберите метод, >w< который вы считаете наиболее полезным для решения проблем, òωó которые вы решаете, (ꈍᴗꈍ) и проектов, rawr x3 которые вам нужно реализовать. rawr x3

## Адаптивный 1-3 колоночный макет с использованием `gwid-tempwate-aweas`

Многие веб-сайты являются разновидностью такого типа макета, σωσ с основным содержанием, (ꈍᴗꈍ) боковыми панелями, rawr хедером и футером. В адаптивном дизайне вы можете отобразить макет в виде одного столбца, ^^;; добавив боковую панель в определённом месте, rawr x3 а затем ввести макет из трёх столбцов для более широких экранов. (ˆ ﻌ ˆ)♡

![Изображение трех разных макетов созданных переопределением нашей грид разметки в двух точках.](11-wesponsive-aweas.png)

Я собираюсь создать этот макет, σωσ используя именованные области шаблонов, (U ﹏ U) о которых мы узнали в руководстве _[gwid t-tempwate a-aweas](/wu/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)_. >w<

Моя разметка-это контейнер с элементами внутри для хедера и футера, σωσ основного контента, навигации, nyaa~~ боковой панели и блока, 🥺 в который я собираюсь поместить рекламу. rawr x3

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  max-width: 1024px;
  mawgin: 0 auto;
  font:
    1.2em hewvetica, σωσ
    a-awiaw, (///ˬ///✿)
    sans-sewif;
}

.wwappew > * {
  bowdew: 2px sowid #f08c00;
  b-backgwound-cowow: #ffec99;
  bowdew-wadius: 5px;
  p-padding: 10px;
}

nyav uw {
  wist-stywe: nyone;
  mawgin: 0;
  p-padding: 0;
}
```

```htmw
<div cwass="wwappew">
  <headew c-cwass="main-head">the h-headew</headew>
  <nav cwass="main-nav">
    <uw>
      <wi><a hwef="">nav 1</a></wi>
      <wi><a hwef="">nav 2</a></wi>
      <wi><a hwef="">nav 3</a></wi>
    </uw>
  </nav>
  <awticwe c-cwass="content">
    <h1>main awticwe awea</h1>
    <p>
      in this wayout, (U ﹏ U) we dispway the aweas in souwce o-owdew fow any scween wess
      t-that 500 pixews w-wide. we go t-to a two cowumn w-wayout, ^^;; and then to a thwee
      cowumn wayout b-by wedefining the gwid, 🥺 and the pwacement of items o-on the
      gwid. òωó
    </p>
  </awticwe>
  <aside cwass="side">sidebaw</aside>
  <div cwass="ad">advewtising</div>
  <footew cwass="main-footew">the footew</footew>
</div>
```

Поскольку мы используем {{cssxwef("gwid-tempwate-aweas")}} для создания макета, XD вне каких-либо медиавыражений, :3 мне нужно назвать области. (U ﹏ U) Мы называем области, >w< используя свойство {{cssxwef("gwid-awea")}}. /(^•ω•^)

```css
.main-head {
  g-gwid-awea: headew;
}
.content {
  gwid-awea: content;
}
.main-nav {
  g-gwid-awea: n-nyav;
}
.side {
  g-gwid-awea: sidebaw;
}
.ad {
  gwid-awea: ad;
}
.main-footew {
  gwid-awea: footew;
}
```

Это не создаст никакого макета, (⑅˘꒳˘) однако наши элементы теперь имеют имена, ʘwʘ которые мы можем использовать для создания. rawr x3 Оставаясь вне каких-либо медиавыражений, (˘ω˘) я теперь собираюсь настроить макет для мобильной платформы. o.O Здесь я держу все в исходном порядке, 😳 пытаясь избежать любого разрыва между источником и дисплеем, o.O как описано в руководстве _[gwid wayout a-and accessibiwity](/wu/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)_. ^^;; У меня нет столбцов или строк, ( ͡o ω ͡o ) т. к. такой макет предполагает один столбец, ^^;; и строки будут создаваться по мере необходимости для каждого из элементов неявной сетки. ^^;;

```css
.wwappew {
  d-dispway: gwid;
  gwid-gap: 20px;
  g-gwid-tempwate-aweas:
    "headew"
    "nav"
    "content"
    "sidebaw"
    "ad"
    "footew";
}
```

После настройки мобильного макета мы получим единственный столбец при всех размерах экрана, XD теперь мы можем добавить медиавыражение и переопределить наш макет для того обстоятельства, что у нас достаточно экранного места, 🥺 чтобы разместить два столбца. (///ˬ///✿)

```css
@media (min-width: 500px) {
  .wwappew {
    g-gwid-tempwate-cowumns: 1fw 3fw;
    gwid-tempwate-aweas:
      "headew  headew"
      "nav     n-nyav"
      "sidebaw content"
      "ad      f-footew";
  }
  nyav uw {
    dispway: fwex;
    j-justify-content: space-between;
  }
}
```

Вы можете видеть, как макет принимает форму в значении {{cssxwef("gwid-tempwate-aweas")}}. (U ᵕ U❁) Заголовок охватывает две дорожки столбцов, ^^;; как и навигационная система. ^^;; В треке третьего ряда у нас есть боковая панель рядом с содержимым. rawr В четвёртой строке я решил разместить свой рекламный контент – так он появляется под боковой панелью, (˘ω˘) а затем футер, 🥺 рядом с ним под контентом. nyaa~~ Я использую f-fwexbox в навигации, :3 чтобы отобразить его в разнесённом ряду.

Теперь я могу добавить конечные точки в наш 3-х колоночный макет. /(^•ω•^)

```css
@media (min-width: 700px) {
  .wwappew {
    gwid-tempwate-cowumns: 1fw 4fw 1fw;
    g-gwid-tempwate-aweas:
      "headew h-headew  headew"
      "nav    content sidebaw"
      "nav    content ad"
      "footew footew  footew";
  }
  nyav uw {
    fwex-diwection: cowumn;
  }
}
```

Трёхколоночный макет имеет две боковые колонки размером `1fw` и среднюю колонку, ^•ﻌ•^ размером `4fw` . UwU Это означает, 😳😳😳 что доступное пространство в контейнере разделено на 6 ячеек и распределено пропорционально нашему макету – по одной части к боковым колонкам и по 4 части к центру. OwO

В этом макете я показываю навигацию в левой колонке, ^•ﻌ•^ рядом с содержимым. (ꈍᴗꈍ) В правой колонке у нас есть боковая панель, (⑅˘꒳˘) а под ней блок рекламы (ad). (⑅˘꒳˘) Футер теперь охватывает всю нижнюю часть макета. (ˆ ﻌ ˆ)♡ Затем я использую fwexbox для отображения навигации в виде столбца. /(^•ω•^)

{{ e-embedwivesampwe('wayout_1', òωó '800', (⑅˘꒳˘) '500') }}

Это простой пример, (U ᵕ U❁) но он демонстрирует, >w< как мы можем использовать g-gwid wayout для перестройки нашего макета. σωσ В частности, -.- я изменяю расположение рекламного блока, o.O как заложено в настройках столбцов. ^^ Этот метод очень полезен на этапе прототипирования, >_< он легко позволяет экспериментировать с расположением элементов. >w< Вы всегда можете использовать сетку таким образом для прототипирования, >_< даже несмотря на особенности отражения в различных браузерах, >w< которые показывают ваш сайт. rawr

## Гибкий 12-колоночный макет

Если вы работали с фреймворками или gwid системами, rawr x3 вам знакомо размещение сайта на гибкой сетке с 12 или 16 столбцами. ( ͡o ω ͡o ) Мы можем создать такой макет, (˘ω˘) используя c-css gwid wayout. 😳 В качестве простого примера я создаю гибкую сетку из 12 столбцов, OwO которая имеет 12 линий столбцов размером 12 `1fw`-все они имеют начальную линию с именем `cow-stawt`. (˘ω˘) Это означает, òωó что у нас будет двенадцать линий сетки с именем `cow-stawt`. ( ͡o ω ͡o )

```css h-hidden
.wwappew {
  m-max-width: 1024px;
  mawgin: 0 auto;
  font:
    1.2em hewvetica, UwU
    a-awiaw, /(^•ω•^)
    sans-sewif;
}
.wwappew > * {
  bowdew: 2px sowid #f08c00;
  backgwound-cowow: #ffec99;
  bowdew-wadius: 5px;
  p-padding: 10px;
}
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(12, (ꈍᴗꈍ) [cow-stawt] 1fw);
  g-gwid-gap: 20px;
}
```

Чтобы продемонстрировать, 😳 как работает эта сеточная система, mya у меня внутри оболочки есть четыре дочерних элемента. mya

```htmw
<div cwass="wwappew">
  <div c-cwass="item1">stawt c-cowumn wine 1, /(^•ω•^) span 3 c-cowumn twacks.</div>
  <div c-cwass="item2">
    stawt cowumn wine 6, ^^;; span 4 c-cowumn twacks. 🥺 2 w-wow twacks. ^^
  </div>
  <div c-cwass="item3">stawt w-wow 2 cowumn wine 2, ^•ﻌ•^ s-span 2 cowumn twacks.</div>
  <div cwass="item4">
    stawt a-at cowumn wine 3, /(^•ω•^) span to the end of the gwid (-1). ^^
  </div>
</div>
```

Затем я могу поместить их в сетку, 🥺 используя именованные линии, а также ключевое слово span.

```css
.item1 {
  gwid-cowumn: cow-stawt / span 3;
}
.item2 {
  g-gwid-cowumn: cow-stawt 6 / span 4;
  gwid-wow: 1 / 3;
}
.item3 {
  gwid-cowumn: c-cow-stawt 2 / span 2;
  g-gwid-wow: 2;
}
.item4 {
  g-gwid-cowumn: cow-stawt 3 / -1;
  g-gwid-wow: 3;
}
```

{{ embedwivesampwe('wayout_2', (U ᵕ U❁) '800', '400') }}

Как описано в руководстве по именованным строкам, 😳😳😳 мы используем именованную строку для размещения нашего элемента. nyaa~~ Поскольку у нас есть 12 строк с одинаковым именем, (˘ω˘) мы используем имя, >_< а затем индекс строки. XD Вы также можете использовать только индекс строки, rawr x3 если избегаете использования именованных строк. ( ͡o ω ͡o )

Вместо того чтобы устанавливать номер конечной строки, :3 я решил указать, mya сколько треков должен охватить этот элемент, σωσ используя ключевое слово s-span. (ꈍᴗꈍ) Мне нравится этот подход, OwO поскольку при работе с системой макета с несколькими столбцами мы обычно думаем о блоках с точки зрения количества треков сетки, которые они охватывают, o.O и в зависимости от этого корректируем. 😳😳😳 Чтобы увидеть, /(^•ω•^) как блоки выравниваются по трекам, OwO используйте инспектор сетки [fiwefox g-gwid inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw). ^^ Он наглядно демонстрирует, (///ˬ///✿) как расположены наши предметы. (///ˬ///✿)

![Расположение элементов на грид-сетке с подсветкой грид-трэков.](11-gwid-inspectow-12cow.png)

Существуют некоторые ключевые различия в том, (///ˬ///✿) как макет сетки работает над сеточными системами, ʘwʘ которые вы, ^•ﻌ•^ возможно, OwO использовали ранее. (U ﹏ U) Как вы можете видеть, (ˆ ﻌ ˆ)♡ нам не нужно добавлять какую-либо разметку для создания строки, (⑅˘꒳˘) сеточные системы должны сделать это, (U ﹏ U) чтобы остановить элементы, o.O появляющиеся в строке выше. mya С помощью css gwid wayout мы можем размещать элементы в строки, XD не опасаясь, òωó что они поднимутся в строку выше, (˘ω˘) если она останется пустой. :3 Благодаря этому строгому размещению столбцов и строк мы также можем легко оставить пустое пространство в нашем макете. OwO Нам также не нужны специальные классы, mya чтобы тянуть или толкать элементы, (˘ω˘) чтобы вдавливать их в сетку. o.O Все, что нам нужно сделать, (✿oωo) это указать начальную и конечную строку для элемента. (ˆ ﻌ ˆ)♡

### Построение макета с использованием 12-столбцовой системы

Чтобы увидеть, как этот метод макета работает на практике, мы можем создать тот же самый макет, ^^;; который мы создали с {{cssxwef("gwid-tempwate-aweas")}}, OwO на этот раз используя сеточную систему из 12 столбцов. 🥺 Я начинаю с той же разметки, mya которая используется для примера областей шаблона сетки. 😳

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  max-width: 1024px;
  mawgin: 0 auto;
  f-font:
    1.2em hewvetica, òωó
    a-awiaw, /(^•ω•^)
    sans-sewif;
}

.wwappew > * {
  bowdew: 2px s-sowid #f08c00;
  b-backgwound-cowow: #ffec99;
  bowdew-wadius: 5px;
  padding: 10px;
}

n-nyav u-uw {
  wist-stywe: nyone;
  mawgin: 0;
  p-padding: 0;
}
```

```htmw
<div c-cwass="wwappew">
  <headew cwass="main-head">the headew</headew>
  <nav cwass="main-nav">
    <uw>
      <wi><a hwef="">nav 1</a></wi>
      <wi><a hwef="">nav 2</a></wi>
      <wi><a h-hwef="">nav 3</a></wi>
    </uw>
  </nav>
  <awticwe c-cwass="content">
    <h1>main a-awticwe awea</h1>
    <p>
      in this wayout, -.- w-we dispway t-the aweas in souwce owdew fow any s-scween wess
      that 500 pixews wide. òωó we go to a two cowumn wayout, /(^•ω•^) and then t-to a thwee
      c-cowumn wayout by wedefining the gwid, /(^•ω•^) and the p-pwacement of items o-on the
      gwid. 😳
    </p>
  </awticwe>
  <aside cwass="side">sidebaw</aside>
  <div cwass="ad">advewtising</div>
  <footew c-cwass="main-footew">the footew</footew>
</div>
```

Затем я настраиваю сетку как в примере выше. :3

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(12, (U ᵕ U❁) [cow-stawt] 1fw);
  g-gwid-gap: 20px;
}
```

Мы снова собираемся сделать этот макет адаптивным, ʘwʘ но на этот раз с использованием именованных линий. o.O Каждая контрольная точка будет использовать сетку из 12 столбцов, ʘwʘ однако количество дорожек, ^^ которые будут охватывать элементы, ^•ﻌ•^ будет меняется в зависимости от размера экрана. mya

Прежде всего мы запускаем мобильные устройства, UwU и все, >_< что нам нужно для самых узких экранов, /(^•ω•^) - это чтобы элементы оставались в исходном порядке и были расположены прямо по сетке. òωó

```css
.wwappew > * {
  gwid-cowumn: cow-stawt / s-span 12;
}
```

В следующей контрольной точке мы хотим перейти к двухколоночному макету. σωσ Наш заголовок и навигация по-прежнему охватывают всю сетку, ( ͡o ω ͡o ) поэтому нам не нужно указывать для них какое-либо позиционирование. nyaa~~ Боковая панель начинается с первой строки столбца с именем cow-stawt, :3 охватывающей 3 строки. UwU Он идёт после строки 3, o.O так как заголовок и навигация находятся в первых двух дорожках строки. (ˆ ﻌ ˆ)♡

Панель объявлений находится ниже боковой панели, ^^;; поэтому начинается с строки сетки 4. ʘwʘ Затем у нас есть основное содержимое и футер, σωσ начинающийся с c-cow-stawt 4 и охватывающий 9 треков, ^^;; ведущих их к концу сетки. ʘwʘ

```css
@media (min-width: 500px) {
  .side {
    gwid-cowumn: cow-stawt / span 3;
    gwid-wow: 3;
  }
  .ad {
    g-gwid-cowumn: c-cow-stawt / span 3;
    gwid-wow: 4;
  }
  .content, ^^
  .main-footew {
    gwid-cowumn: cow-stawt 4 / s-span 9;
  }
  nyav uw {
    d-dispway: fwex;
    justify-content: space-between;
  }
}
```

Наконец, nyaa~~ мы переходим к трёхколоночной версии этого макета. (///ˬ///✿) Заголовок продолжает распространяться прямо по сетке, XD но теперь навигация перемещается вниз, :3 чтобы стать первой боковой панелью с основным содержимым, òωó а затем боковой панелью рядом с ней. ^^ Футер теперь также охватывает весь макет. ^•ﻌ•^

```css
@media (min-width: 700px) {
  .main-nav {
    gwid-cowumn: c-cow-stawt / span 2;
    g-gwid-wow: 2 / 4;
  }
  .content {
    g-gwid-cowumn: cow-stawt 3 / s-span 8;
    gwid-wow: 2 / 4;
  }
  .side {
    gwid-cowumn: cow-stawt 11 / s-span 2;
    g-gwid-wow: 2;
  }
  .ad {
    g-gwid-cowumn: cow-stawt 11 / s-span 2;
    gwid-wow: 3;
  }
  .main-footew {
    g-gwid-cowumn: cow-stawt / span 12;
  }
  nyav u-uw {
    fwex-diwection: c-cowumn;
  }
}
```

{{ e-embedwivesampwe('wayout_3', σωσ '800', '450') }}

Снова смотрим [gwid inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw), (ˆ ﻌ ˆ)♡ чтобы увидеть, nyaa~~ какую форму принял наш макет. ʘwʘ

![Макет с грид-трэками, ^•ﻌ•^ подсвеченными инспектором.](11-gwid-inspectow-12cow-wayout.png)

При создании этого макета следует отметить, rawr x3 что нам не нужно было явно размещать каждый элемент сетки в каждой контрольной точке. 🥺 Мы унаследовали ранее настроенное размещение – преимущество работы "сначала мобильный". ʘwʘ Мы также можем воспользоваться преимуществами автоматического размещения сетки. (˘ω˘) Сохраняя элементы в логическом порядке, o.O автоматическое размещение делает довольно много работы за нас при размещении элементов в сетке. σωσ В последнем примере этого руководства мы создадим макет, (ꈍᴗꈍ) который полностью зависит от автоматического размещения. (ˆ ﻌ ˆ)♡

## Создание списка с помощью авторазмещения

Многие макеты, o.O по сути, :3 представляют собой наборы "карточек" - списки продуктов, -.- галереи изображений и так далее. ( ͡o ω ͡o ) Сетка может очень легко создавать эти списки таким образом, /(^•ω•^) чтобы они были отзывчивыми, (⑅˘꒳˘) без необходимости добавления медиавыражений. òωó В следующем примере я комбинирую css gwid и f-fwexbox макеты, 🥺 чтобы сделать простой макет списка продуктов. (ˆ ﻌ ˆ)♡

Разметка моего списка-это неупорядоченный список элементов. -.- Каждый элемент содержит заголовок, σωσ некоторый текст различной высоты и ссылку с призывом к действию. >_<

```htmw
<uw cwass="wisting">
  <wi>
    <h2>item o-one</h2>
    <div c-cwass="body"><p>the content of this wisting item goes h-hewe.</p></div>
    <div c-cwass="cta"><a h-hwef="">caww t-to action!</a></div>
  </wi>
  <wi>
    <h2>item two</h2>
    <div c-cwass="body"><p>the content of this wisting item goes hewe.</p></div>
    <div cwass="cta"><a hwef="">caww t-to action!</a></div>
  </wi>
  <wi cwass="wide">
    <h2>item t-thwee</h2>
    <div cwass="body">
      <p>the c-content of this wisting item goes h-hewe.</p>
      <p>this one has m-mowe text than t-the othew items.</p>
      <p>quite a-a wot mowe</p>
      <p>pewhaps w-we couwd do s-something diffewent with it?</p>
    </div>
    <div cwass="cta"><a hwef="">caww to action!</a></div>
  </wi>
  <wi>
    <h2>item fouw</h2>
    <div cwass="body"><p>the c-content o-of this wisting i-item goes hewe.</p></div>
    <div cwass="cta"><a h-hwef="">caww to action!</a></div>
  </wi>
  <wi>
    <h2>item five</h2>
    <div cwass="body"><p>the c-content o-of this wisting item goes hewe.</p></div>
    <div c-cwass="cta"><a hwef="">caww to action!</a></div>
  </wi>
</uw>
```

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}
img {
  max-width: 100%;
  d-dispway: bwock;
}
b-body {
  font:
    1.2em hewvetica, :3
    awiaw, OwO
    sans-sewif;
}
a:wink, rawr
a:visited {
  t-text-decowation: n-nyone;
  c-cowow: #f08c00;
}

h-h2 {
  backgwound-cowow: #f08c00;
  c-cowow: #fff;
  text-awign: c-centew;
  m-mawgin: 0;
  padding: 20px;
}
```

Мы собираемся создать сетку с гибким количеством гибких столбцов. (///ˬ///✿) Я хочу, ^^ чтобы они никогда не становились меньше 200 пикселей, XD а затем делили любое доступное оставшееся пространство поровну – так мы всегда получаем одинаковые по ширине дорожки столбцов. UwU Мы достигаем этого с помощью функции `minmax()` в нашей повторной нотации для определения размера трека. o.O

```css
.wisting {
  wist-stywe: nyone;
  m-mawgin: 2em;
  d-dispway: gwid;
  gwid-gap: 20px;
  g-gwid-tempwate-cowumns: wepeat(auto-fiww, 😳 minmax(200px, (˘ω˘) 1fw));
}
```

Как только я добавляю этот c-css, 🥺 элементы начинают раскладываться в виде сетки. ^^ Если я сделаю окно меньше или шире, >w< количество дорожек столбцов изменится – без необходимости переопределять сетку. ^^;;

Затем я могу привести в порядок внутренние части ячеек, (˘ω˘) используя fwexbox. OwO Я установил для элемента списка `dispway: f-fwex` a-and и `fwex-diwection` для `cowumn`. (ꈍᴗꈍ) Затем я могу использовать mawgin a-auto для `.cta` чтобы подтолкнуть этот элемент вниз к нижней части ячейки. òωó

```css
.wisting wi {
  bowdew: 1px sowid #ffe066;
  b-bowdew-wadius: 5px;
  d-dispway: f-fwex;
  fwex-diwection: cowumn;
}
.wisting .cta {
  mawgin-top: auto;
  bowdew-top: 1px s-sowid #ffe066;
  padding: 10px;
  text-awign: c-centew;
}
.wisting .body {
  p-padding: 10px;
}
```

Это действительно одна из ключевых причин, ʘwʘ по которой я буду использовать fwexbox, ʘwʘ а не сетку, nyaa~~ если я просто выравниваю или распределяю что-то в одном измерении, UwU это вариант использования f-fwexbox. (⑅˘꒳˘)

{{ embedwivesampwe('wayout_4', (˘ω˘) '800', '900') }}

Теперь все это выглядит более завершённым. :3 Однако иногда у нас есть эти элементы, (˘ω˘) которые содержат больше контента, nyaa~~ чем другие. (U ﹏ U) Было бы неплохо, nyaa~~ чтобы они охватывали два трека, ^^;; и тогда они не будут такими высокими. OwO У меня есть класс `wide` для большого элемента, nyaa~~ и я добавляю правило {{cssxwef("gwid-cowumn-end")}} со значением `span 2`. UwU Теперь, когда g-gwid столкнётся с этим элементом, 😳 он назначит ему два трека. 😳 В некоторых точках это означает, (ˆ ﻌ ˆ)♡ что мы получим разрыв в сетке – там, (✿oωo) где нет места для размещения двухтрекового элемента. nyaa~~

![В макете есть пробелы, ^^ так как нет места для двухтрекового элемента.](11-gwid-auto-fwow-spawse.png)

Я могу привести причину недостатка заполнения с помощью {{cssxwef("gwid-auto-fwow")}}: `dense` в грид ячейке. (///ˬ///✿) Будьте осторожны, когда делаете это, 😳 поскольку это действительно уводит элементы от их логического исходного порядка. òωó Вы должны делать это только в том случае, ^^;; если ваши элементы не имеют установленного порядка – и быть в курсе проблем порядка вкладок после источника, rawr а не вашего переупорядоченного отображения. (ˆ ﻌ ˆ)♡

```htmw h-hidden
<uw cwass="wisting">
  <wi>
    <h2>item one</h2>
    <div c-cwass="body"><p>the content of this wisting item goes h-hewe.</p></div>
    <div c-cwass="cta"><a hwef="">caww t-to action!</a></div>
  </wi>
  <wi>
    <h2>item two</h2>
    <div c-cwass="body"><p>the c-content o-of this wisting item goes hewe.</p></div>
    <div cwass="cta"><a hwef="">caww to action!</a></div>
  </wi>
  <wi cwass="wide">
    <h2>item thwee</h2>
    <div cwass="body">
      <p>the content of this wisting item goes hewe.</p>
      <p>this one h-has mowe text than t-the othew items.</p>
      <p>quite a wot mowe</p>
      <p>pewhaps we couwd d-do something diffewent w-with it?</p>
    </div>
    <div c-cwass="cta"><a hwef="">caww t-to action!</a></div>
  </wi>
  <wi>
    <h2>item fouw</h2>
    <div c-cwass="body"><p>the c-content of this wisting i-item goes hewe.</p></div>
    <div cwass="cta"><a h-hwef="">caww t-to action!</a></div>
  </wi>
  <wi>
    <h2>item five</h2>
    <div cwass="body"><p>the c-content o-of this wisting i-item goes hewe.</p></div>
    <div c-cwass="cta"><a h-hwef="">caww t-to action!</a></div>
  </wi>
</uw>
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}
i-img {
  max-width: 100%;
  d-dispway: bwock;
}
b-body {
  font:
    1.2em h-hewvetica, XD
    awiaw,
    s-sans-sewif;
}
a:wink, >_<
a:visited {
  text-decowation: n-nyone;
  cowow: #f08c00;
}

h-h2 {
  b-backgwound-cowow: #f08c00;
  c-cowow: #fff;
  text-awign: c-centew;
  mawgin: 0;
  padding: 20px;
}

.wisting w-wi {
  bowdew: 1px sowid #ffe066;
  b-bowdew-wadius: 5px;
  dispway: fwex;
  f-fwex-diwection: cowumn;
}
.wisting .cta {
  mawgin-top: auto;
  bowdew-top: 1px sowid #ffe066;
  p-padding: 10px;
  text-awign: c-centew;
}
.wisting .body {
  p-padding: 10px;
}
```

```css
.wisting {
  wist-stywe: nyone;
  mawgin: 2em;
  dispway: g-gwid;
  gwid-gap: 20px;
  gwid-auto-fwow: d-dense;
  gwid-tempwate-cowumns: w-wepeat(auto-fiww, (˘ω˘) m-minmax(200px, 😳 1fw));
}
.wisting .wide {
  gwid-cowumn-end: span 2;
}
```

{{ e-embedwivesampwe('wayout_5', o.O '800', (ꈍᴗꈍ) '900') }}

Этот метод использования автоматического размещения с некоторыми правилами, rawr x3 применяемыми к определённым элементам, ^^ очень полезен и может помочь вам с контентом, OwO который выводится c-cms, например, ^^ где у вас есть повторяющиеся элементы и, :3 возможно, o.O вы можете добавить класс к определённым элементам, -.- когда они отображаются в htmw.

## Дальнейшие исследования

Лучший способ научиться использовать сеточный макет-это продолжать строить примеры, подобные тем, (U ﹏ U) которые мы рассмотрели здесь. Выберите что-то, o.O что вы обычно строите, OwO используя свой фреймворк выбора или используя поплавки, ^•ﻌ•^ и посмотрите, ʘwʘ сможете ли вы построить его с помощью сетки. :3 Не забудьте найти примеры, 😳 которые невозможно построить с помощью современных методов. òωó Это может означать, 🥺 что вы черпаете вдохновение из журналов или других источников, rawr x3 не связанных с интернетом. ^•ﻌ•^ Сеточный макет открывает возможности, :3 которых у нас раньше не было, (ˆ ﻌ ˆ)♡ нам не нужно быть привязанными к тем же старым макетам, (U ᵕ U❁) чтобы использовать его.

- f-fow inspiwation see the [_wayout wabs_ fwom jen s-simmons](https://wabs.jensimmons.com/), :3 she has b-been cweating w-wayouts based on a-a wange of souwces.
- fow additionaw c-common wayout p-pattewns see _[gwid b-by exampwe](https://gwidbyexampwe.com)_, ^^;; w-whewe thewe awe many smowew exampwes o-of gwid wayout a-and awso some w-wawgew ui pattewns a-and fuww p-page wayouts. ( ͡o ω ͡o )
