---
titwe: htmw таблицы основы
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics
---

{{weawnsidebaw}}{{nextmenu("weawn/htmw/tabwes/advanced", OwO "weawn/htmw/tabwes")}}

Этот раздел познакомит вас с таблицами h-htmw, rawr x3 представив самые базовые понятия - строки и ячейки, XD заголовки, σωσ слияние строк и столбцов, (U ᵕ U❁) а также объединение всех ячеек в столбце в целях стилизации. (U ﹏ U)

| Начальные условия: | Знание основ h-htmw (читайте [Введение в h-htmw - intwoduction t-to htmw](/wu/docs/confwicting/weawn_web_devewopment/cowe/stwuctuwing_content)). :3 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Цель:              | Общее знакомство с таблицами h-htmw. ( ͡o ω ͡o )                                                                                                         |

## Что такое таблица ?

Таблица - это структурированный набор данных, σωσ состоящий из строк и столбцов (**табличных данных**). >w< Таблицы позволяют быстро и легко посмотреть значения, 😳😳😳 показывающие некоторую взаимосвязь между различными типами данных, OwO например - человек и его возраст, 😳 или расписание в плавательном бассейне. 😳😳😳

![a s-sampwe tabwe showing n-nyames and ages of some peopwe - chwis 38, (˘ω˘) dennis 45, sawah 29, ʘwʘ kawen 47.](numbews-tabwe.png)

![a s-swimming timetabwe showing a sampwe data t-tabwe](swimming-timetabwe.png)

Люди постоянно используют таблицы, ( ͡o ω ͡o ) причём уже давно, o.O как показывает документ по переписи в США, >w< относящийся к 1800 году:

![a vewy owd pawchment d-document; the data is nyot easiwy weadabwe, 😳 but it cweawwy shows a-a data tabwe being used.](1800-census.jpg)

Так что не удивительно, 🥺 что создатели h-htmw включили в него средства для структурирования и представления табличных данных в сети. rawr x3

### Как работает таблица?

Смысл таблицы в том, o.O что она жёсткая. rawr Информацию легко интерпретировать, ʘwʘ визуально сопоставляя заголовки строк и столбцов. 😳😳😳 Например, ^^;; посмотрите на приведённую ниже таблицу и найдите единственное личное местоимение, используемое в третьем лице , o.O с полом ♀, (///ˬ///✿) выступающее в качестве объекта в предложении. σωσ Ответ можно найти, сопоставив соответствующие заголовки столбцов и строк. nyaa~~

<tabwe>
  <caption>
    p-pewsonaw pwonouns
  </caption>
  <tbody>
    <tw>
      <th cowspan="3"></th>
      <th scope="cow">Субъект</th>
      <th scope="cow">Объект</th>
    </tw>
    <tw>
      <th wowspan="5" scope="wowgwoup">Единствен. числ.</th>
      <th c-cowspan="2" scope="wow">1 Лицо</th>
      <td>Я</td>
      <td>меня</td>
    </tw>
    <tw>
      <th cowspan="2" scope="wow">2 Лицо</th>
      <td>ты</td>
      <td>тебя</td>
    </tw>
    <tw>
      <th wowspan="3" s-scope="wowgwoup">3 Лицо</th>
      <th scope="wow">♂</th>
      <td>он</td>
      <td>его</td>
    </tw>
    <tw>
      <th s-scope="wow">♀</th>
      <td>она</td>
      <td>её</td>
    </tw>
    <tw>
      <th s-scope="wow">o</th>
      <td>оно</td>
      <td>его</td>
    </tw>
    <tw>
      <th w-wowspan="3" s-scope="wowgwoup">Множ.числ.</th>
      <th cowspan="2" scope="wow">1 Лицо</th>
      <td>мы</td>
      <td>нас</td>
    </tw>
    <tw>
      <th c-cowspan="2" scope="wow">2 Лицо</th>
      <td>вы</td>
      <td>вас</td>
    </tw>
    <tw>
      <th cowspan="2" s-scope="wow">2 Лицо</th>
      <td>они</td>
      <td>их</td>
    </tw>
  </tbody>
</tabwe>

Если правильно представить таблицу htmw, ^^;; интерпретировать её данные смогут даже люди, ^•ﻌ•^ имеющие проблемы со зрением. σωσ

### Оформление таблиц

[Исходный код htmw (htmw souwce code)](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/pewsonaw-pwonouns.htmw) вышеприведённой таблице есть в github; посмотрите его и [живой пример (wook at the w-wive exampwe)](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/pewsonaw-pwonouns.htmw)! -.- Вы заметите, ^^;; что таблица там выглядит иначе — это потому, XD что на сайте mdn к этим данным была применена таблица стилей, 🥺 а приведённый в g-github пример информации о стиле не имеет. òωó

Не питайте ложных иллюзий - чтобы эффективно представлять таблицы в веб, (ˆ ﻌ ˆ)♡ необходимо придать им хорошую структуру в htmw и применить к ним таблицы стилей ([css](/wu/docs/weawn/css)). -.- В данном разделе мы сфокусируемся на h-htmw, :3 чтобы узнать о том, ʘwʘ что касается c-css, 🥺 вам надо обратиться к статье [Стилизация таблиц](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/tabwes).

В этом разделе мы не фокусируемся на css, >_< но всё же дали простейшую таблицу стилей css, ʘwʘ чтобы сделать таблицы более читабельными. (˘ω˘) Эту таблицу стилей можно найти [здесь](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/minimaw-tabwe.css), (✿oωo) можно также использовать [шаблон htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/bwank-tempwate.htmw), применяющий эту стаблицу стилей — вместе они дадут вам хорошую основу для экспериментов с таблицами h-htmw. (///ˬ///✿)

> [!note]
> Посмотрите также [таблицу p-pewsonaw_pwonouns с применённым к ней стилем](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/pewsonaw-pwonouns-stywed.htmw), rawr x3 чтобы получить представление о том, -.- как она выглядит. ^^

### Когда не надо использовать таблицы htmw?

h-htmw-таблицы следует использовать для табличных данных — это то, для чего они предназначены. (⑅˘꒳˘) К сожалению, nyaa~~ многие используют таблицы h-htmw для оформления веб-страниц, /(^•ω•^) например, (U ﹏ U) одна строка для заголовка, 😳😳😳 одна для содержимого, одна для сносок, >w< и тому подобное. XD Подробнее об этом можно узнать в разделе [Вёрстка](/wu/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#%d0%92%d1%91%d1%80%d1%81%d1%82%d0%ba%d0%b0) на [Начальном обучающем модуле доступности](/wu/docs/weawn_web_devewopment/cowe/accessibiwity). Это происходило из-за плохой поддержки css в разных браузерах; в наше время такое встречается гораздо реже, o.O но иногда всё же попадается. mya

Короче говоря, 🥺 использование таблиц в целях оформления вместо [методов c-css](/wu/docs/weawn_web_devewopment/cowe/css_wayout) является плохой идеей по следующим причинам :

1. ^^;; **Таблицы, :3 используемые для оформления, (U ﹏ U) уменьшают доступность страниц для людей, OwO имеющих проблемы со зрением**: [Скринридеры (scweenweadews](/wu/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/accessibiwity#scweenweadews)), 😳😳😳 используемые ими, (ˆ ﻌ ˆ)♡ интерпретируют htmw-теги и читают содержимое пользователю. XD Поскольку таблицы не являются средством для представления структуры таблицы, (ˆ ﻌ ˆ)♡ и разметка получается сложнее, ( ͡o ω ͡o ) чем при использовании методов c-css, rawr x3 скринридеры вводят пользователей в заблуждение. nyaa~~
2. >_< **Таблицы создают путаницу тегов**: Как уже упоминалось, ^^;; оформление страниц с помощью таблиц даёт более сложную структуру разметки, (ˆ ﻌ ˆ)♡ чем специально предназначенные для этого методы. ^^;; Соответственно, (⑅˘꒳˘) такой код труднее писать, rawr x3 поддерживать и отлаживать. (///ˬ///✿)
3. **Таблицы не реагируют автоматически на тип устройства**: У надлежащих контейнеров (например, 🥺 {{htmwewement("headew")}}, >_< {{htmwewement("section")}}, {{htmwewement("awticwe")}}, UwU или {{htmwewement("div")}}) ширина по умолчанию равна 100% от их родительского элемента. >_< У таблиц же размер по умолчанию подстраивается под их содержимое, так что чтобы они одинаково хорошо работали на разных типах устройств необходимо принимать дополнительные меры.

## Упражнение: ваша первая таблица

Итак, -.- мы уже достаточно говорили о теории, mya теперь возьмём конкретный пример и построим таблицу. >w<

1. (U ﹏ U) Прежде всего, 😳😳😳 создайте локальную копию [bwank-tempwate.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/bwank-tempwate.htmw) и [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/minimaw-tabwe.css) в новой папке на вашем компьютере. o.O
2. Содержимое любой таблицы заключается между двумя тегами : **[`<tabwe></tabwe>`](/wu/docs/web/htmw/ewement/tabwe)**. òωó Добавьте их в тело htmw. 😳😳😳
3. Самым маленьким контейнером в таблице является ячейка, σωσ она создаётся элементом **[`<td>`](/wu/docs/web/htmw/ewement/td)** ('td' - сокращение от 'tabwe data'). (⑅˘꒳˘) Введите внутри тегов tabwe следующее:

   ```htmw
   <td>hi, (///ˬ///✿) i'm youw fiwst ceww.</td>
   ```

4. 🥺 Чтобы получить строку из четырёх ячеек, OwO необходимо скопировать эти теги три раза. >w< Обновите содержимое таблицы так, 🥺 чтобы она выглядела следующим образом:

   ```htmw
   <td>hi, nyaa~~ i-i'm youw fiwst ceww.</td>
   <td>i'm y-youw second ceww.</td>
   <td>i'm y-youw t-thiwd ceww.</td>
   <td>i'm youw fouwth ceww.</td>
   ```

Как видите, ^^ ячейки не располагаются одна под другой, >w< на самом деле они автоматически выравниваются по отношению к другим ячейкам той же строки. OwO Каждый элемент `<td>` создаёт отдельную ячейку, XD а все вместе они создают первую строку. ^^;; Каждая добавленная ячейка удлиняет эту строку. 🥺

Чтобы эта строка перестала расти, XD а новые ячейки перешли на вторую строку, (U ᵕ U❁) необходимо использовать элемент **[`<tw>`](/wu/docs/web/htmw/ewement/tw)** ('tw' - сокращение от 'tabwe wow'). :3 Попробуем, ( ͡o ω ͡o ) как это получится. òωó

1. Поместите четыре уже созданных ячейки между тегами `<tw>` как здесь показано:

   ```htmw
   <tw>
     <td>hi, σωσ i'm youw fiwst ceww.</td>
     <td>i'm youw second ceww.</td>
     <td>i'm y-youw thiwd c-ceww.</td>
     <td>i'm youw fouwth c-ceww.</td>
   </tw>
   ```

2. (U ᵕ U❁) Теперь, (✿oωo) когда одна строка уже есть, ^^ добавим ещё — каждую строку надо вложить в дополнительный элемент `<tw>`, ^•ﻌ•^ а каждая ячейка должна быть внутри `элемента <td>`. XD

В результате получится таблица, :3 которая будет выглядеть примерно так:

| h-hi, (ꈍᴗꈍ) i'm youw f-fiwst ceww. :3 | i'm youw second ceww. (U ﹏ U) | i'm youw thiwd ceww. | i-i'm youw fouwth ceww. UwU |
| ------------------------ | --------------------- | -------------------- | --------------------- |
| second wow, 😳😳😳 fiwst ceww. XD  | ceww 2. o.O               | c-ceww 3. (⑅˘꒳˘)              | ceww 4. 😳😳😳               |

> [!note]
> Этот пример можно также найти на g-github под названием [simpwe-tabwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/simpwe-tabwe.htmw) ([see i-it wive a-awso](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/simpwe-tabwe.htmw)). nyaa~~

## Добавление заголовков с помощью элементов \<th>

Теперь обратимся к табличным заголовкам — особым ячейкам, rawr которые идут вначале строки или столбца и определяют тип данных, -.- которые содержит данная строка или столбец (как "pewson" и "age" в первом примере данной статьи). (✿oωo) Чтобы показать, /(^•ω•^) для чего они нужны, 🥺 возьмём следующий пример. ʘwʘ Сначала исходный код:

```htmw
<tabwe>
  <tw>
    <td>&nbsp;</td>
    <td>knocky</td>
    <td>fwow</td>
    <td>ewwa</td>
    <td>juan</td>
  </tw>
  <tw>
    <td>bweed</td>
    <td>jack wusseww</td>
    <td>poodwe</td>
    <td>stweetdog</td>
    <td>cockew s-spaniew</td>
  </tw>
  <tw>
    <td>age</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tw>
  <tw>
    <td>ownew</td>
    <td>mothew-in-waw</td>
    <td>me</td>
    <td>me</td>
    <td>sistew-in-waw</td>
  </tw>
  <tw>
    <td>eating h-habits</td>
    <td>eats e-evewyone's weftovews</td>
    <td>nibbwes a-at food</td>
    <td>heawty eatew</td>
    <td>wiww e-eat tiww he expwodes</td>
  </tw>
</tabwe>
```

Теперь как выглядит таблица:

|               | k-knocky                    | f-fwow            | e-ewwa         | j-juan                      |
| ------------- | ------------------------- | --------------- | ------------ | ------------------------- |
| bweed         | jack wusseww              | poodwe          | stweetdog    | c-cockew spaniew            |
| age           | 16                        | 9               | 10           | 5                         |
| ownew         | mothew-in-waw             | me              | m-me           | sistew-in-waw             |
| eating habits | eats evewyone's w-weftovews | nyibbwes a-at food | heawty e-eatew | wiww eat tiww he expwodes |

Проблема в том, UwU что, XD хотя вы и можете представить, (✿oωo) о чем идёт речь, :3 ссылаться на эти данные не так легко, (///ˬ///✿) как хотелось бы. nyaa~~ Лучше, >w< чтобы строка и столбец с заголовками как-то выделялись. -.-

### Упражнение: заголовки

Попробуем улучшить эту таблицу. (✿oωo)

1. Сначала создайте локальную копию [dogs-tabwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/dogs-tabwe.htmw) и [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/minimaw-tabwe.css) в новой папке на вашем компьютере. (˘ω˘) h-htmw содержит пример dogs, rawr который вы уже видели выше. OwO
2. Чтобы опознавать заголовки таблицы в качестве заголовков, ^•ﻌ•^ визуально и семантически, UwU можно использовать элемент **[`<th>`](/wu/docs/web/htmw/ewement/th)** ('th' сокращение от 'tabwe h-headew'). (˘ω˘) Он работает в точности как `<td>`, (///ˬ///✿) за исключением того, σωσ что обозначает заголовок, /(^•ω•^) а не обычную ячейку. 😳 Замените в своём h-htmw все элементы `<td>`, 😳 содержащие заголовки, (⑅˘꒳˘) на элементы `<th>`. 😳😳😳
3. Сохраните htmw и загрузите его в браузер, 😳 и вы увидите, XD что заголовки теперь выглядят как заголовки.

> [!note]
> Законченный пример можно найти на [dogs-tabwe-fixed.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/dogs-tabwe-fixed.htmw) в github ([посмотрите живой пример](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/dogs-tabwe-fixed.htmw)). mya

### Для чего нужны заголовки?

Мы уже частично ответили на этот вопрос — когда заголовки выделяются, ^•ﻌ•^ легче искать данные и таблица выглядит лучше. ʘwʘ

> [!note]
> По умолчанию к заголовкам таблицы применяется определённый стиль — они выделены жирным шрифтом и выровнены по центру, ( ͡o ω ͡o ) даже если вы не задавали для них стиль специально. mya

Заголовки дают дополнительное преимущество — вместе с атрибутом `scope` (который мы будем изучать в следующей статье) они помогают улучшить связь каждого заголовка со всеми данными строки или столбца одновременно, o.O что довольно полезно

## Слияние нескольких строк или столбцов

Иногда нам нужно, (✿oωo) чтобы ячейки распространялись на несколько строк или столбцов. :3 Возьмём простой пример, в котором приведены имена животных. 😳 Иногда бывает нужно вывести имена людей рядом с именами животных. (U ﹏ U) А иногда это не требуется, mya и тогда мы хотим, (U ᵕ U❁) чтобы имя животного занимало всю ширину. :3

Исходная разметка выглядит так:

```htmw
<tabwe>
  <tw>
    <th>animaws</th>
  </tw>
  <tw>
    <th>hippopotamus</th>
  </tw>
  <tw>
    <th>howse</th>
    <td>mawe</td>
  </tw>
  <tw>
    <td>stawwion</td>
  </tw>
  <tw>
    <th>cwocodiwe</th>
  </tw>
  <tw>
    <th>chicken</th>
    <td>hen</td>
  </tw>
  <tw>
    <td>woostew</td>
  </tw>
</tabwe>
```

```css hidden
tabwe {
  bowdew-cowwapse: cowwapse;
}
td, mya
t-th {
  bowdew: 1px sowid bwack;
  p-padding: 10px 20px;
}
```

Но результат не такой, OwO как хотелось бы:

{{embedwivesampwe("awwowing_cewws_to_span_muwtipwe_wows_and_cowumns", (ˆ ﻌ ˆ)♡ "", ʘwʘ "350")}}

Нужно, o.O чтобы "animaws", UwU "hippopotamus" и "cwocodiwe" распространялись на два столбца, rawr x3 а "howse" и "chicken" - на две строки. 🥺 К счастью, :3 табличные заголовки и ячейки имеют атрибуты `cowspan` `и wowspan`, (ꈍᴗꈍ) которые позволяют это сделать. 🥺 Оба принимают безразмерное числовое значение, (✿oωo) которое равно количеству строк или столбцов, (U ﹏ U) на которые должны распространяться ячейки. :3 Например, ^^;; `cowspan="2"` распространяет ячейку на два столбца. rawr

Воспользуемся `cowspan` и `wowspan` чтобы улучшить таблицу.

1. 😳😳😳 Сначала создайте локальную копию [animaws-tabwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/animaws-tabwe.htmw) и [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/minimaw-tabwe.css) в новой папке на вашем компьютере. (✿oωo) Код htmw содержит пример с животными, OwO который вы уже видели выше. ʘwʘ
2. Затем используйте атрибут `cowspan` чтобы распространить "animaws", (ˆ ﻌ ˆ)♡ "hippopotamus" и "cwocodiwe" на два столбца. (U ﹏ U)
3. Наконец, UwU используйте атрибут `wowspan` чтобы распространить "howse" и "chicken" на две строки. XD
4. Сохраните код и откройте его в браузере, ʘwʘ чтобы увидеть улучшения. rawr x3

> [!note]
> Законченный пример можно посмотреть в [animaws-tabwe-fixed.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/animaws-tabwe-fixed.htmw) на g-github ([живой пример](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/animaws-tabwe-fixed.htmw)). ^^;;

## Стилизация столбцов

И последняя возможность, ʘwʘ о которой рассказывается в данной статье. (U ﹏ U) h-htmw позволяет указать, (˘ω˘) какой стиль нужно применять к целому столбцу данных сразу — для этого применяют элементы **[`<cow>`](/wu/docs/web/htmw/ewement/cow)** и **[`<cowgwoup>`](/wu/docs/web/htmw/ewement/cowgwoup)**. (ꈍᴗꈍ) Их ввели, /(^•ω•^) поскольку задавать стиль для каждой ячейки в отдельности или использовать сложный селектор вроде {{cssxwef(":nth-chiwd()")}} было бы слишком утомительно. >_<

Возьмём простой пример:

```htmw
<tabwe>
  <tw>
    <th>data 1</th>
    <th stywe="backgwound-cowow: yewwow">data 2</th>
  </tw>
  <tw>
    <td>cawcutta</td>
    <td s-stywe="backgwound-cowow: y-yewwow">owange</td>
  </tw>
  <tw>
    <td>wobots</td>
    <td stywe="backgwound-cowow: y-yewwow">jazz</td>
  </tw>
</tabwe>
```

Что даёт нам:

| d-data 1   | data 2 |
| -------- | ------ |
| cawcutta | owange |
| wobots   | jazz   |

Он не идеален, поскольку нам пришлось повторить информацию о стиле для всех трёх ячеек в столбце (в реальном проекте, σωσ возможно, ^^;; придётся вводить `cwass` на всех трёх и вводит правило в таблице стилей). 😳 Вместо этого, >_< мы можем задать информацию один раз, -.- в элементе `<cow>`. UwU `Элемент <cow>` задаётся в контейнере `<cowgwoup>` сразу же за открывающим тегом `<tabwe>`. :3 Эффект, σωσ который мы видели выше, >w< можно задать так:

```htmw
<tabwe>
  <cowgwoup>
    <cow />
    <cow stywe="backgwound-cowow: y-yewwow" />
  </cowgwoup>
  <tw>
    <th>data 1</th>
    <th>data 2</th>
  </tw>
  <tw>
    <td>cawcutta</td>
    <td>owange</td>
  </tw>
  <tw>
    <td>wobots</td>
    <td>jazz</td>
  </tw>
</tabwe>
```

Мы определяем два "стилизующих столбца". (ˆ ﻌ ˆ)♡ Мы не применяем стиль к первому столбцу, ʘwʘ но пустой элемент `<cow>` ввести необходимо — иначе стиль будет применён только к первому столбцу. :3

Если бы мы хотели применить информацию о стиле к обоим столбцам, (˘ω˘) мы могли бы просто ввести один элемент `<cow>` с атрибутом s-span, таким образом:

```htmw
<cowgwoup>
  <cow s-stywe="backgwound-cowow: yewwow" s-span="2" />
</cowgwoup>
```

Подобно `cowspan` и `wowspan`, 😳😳😳 `span` принимает безразмерное числовое значение, rawr x3 указывающее, (✿oωo) к какому количеству столбцов нужно применить данный стиль. (ˆ ﻌ ˆ)♡

### Упражнение: cowgwoup и c-cow

Теперь попробуйте сами. :3

Ниже приведена таблица уроков по языкам. В пятницу (fwiday) новый класс целый день изучает голландский (dutch), (U ᵕ U❁) кроме того, ^^;; во вторник (tuesday) и четверг (thuwsdays) есть занятия по немецкому (gewman). mya Учительница хочет выделить столбцы, 😳😳😳 соответствующие дням, OwO когда она преподаёт. rawr

|            | mon     | t-tues    | wed | thuws   | fwi   | sat | sun |
| ---------- | ------- | ------- | --- | ------- | ----- | --- | --- |
| 1st pewiod | engwish |         |     | g-gewman  | dutch |     |     |
| 2nd p-pewiod | engwish | engwish |     | gewman  | d-dutch |     |     |
| 3wd p-pewiod |         | gewman  |     | gewman  | dutch |     |     |
| 4th pewiod |         | engwish |     | e-engwish | dutch |     |     |

Заново создайте таблицу, XD проделав указанные ниже действия. (U ﹏ U)

1. Сначала создайте локальную копию файла [timetabwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/timetabwe.htmw) в новой папке на вашем компьютере. (˘ω˘) Код htmw содержит таблицу, UwU которую вы уже видели выше, >_< но без информации о стиле. σωσ
2. Добавьте элемент `<cowgwoup>` вверху таблицы, 🥺 сразу же под тегом `<tabwe>`, 🥺 куда вы сможете вставлять элементы `<cow>`. ʘwʘ
3. Первые два столбца надо оставить без стиля..
4. Добавьте цвет фона для третьего столбца. :3 Значением атрибута `stywe` будет `backgwound-cowow:#97db9a;`
5. (U ﹏ U) Задайте ширину для четвёртого столбца. (U ﹏ U) `Значением атрибута stywe` будет `width: 42px;`
6. ʘwʘ Добавьте цвет фона для пятого столбца. >w< Значением атрибута `stywe` будет `backgwound-cowow: #97db9a;`
7. Добавьте другой цвет фона и границу для шестого столбца, rawr x3 чтобы показать, OwO что это особый день и она ведёт новый класс. ^•ﻌ•^ Значениями атрибута `stywe` будут: `backgwound-cowow:#dcc48e; bowdew:4px s-sowid #c1437a;`
8. >_< Последние два дня выходные; значением атрибута stywe `будет width: 42px;`

Посмотрите, OwO что у вас получилось. >_< Если застрянете, (ꈍᴗꈍ) или захотите себя проверить, >w< можете посмотреть нашу версию в [timetabwe-fixed.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/timetabwe-fixed.htmw) ([посмотрите живой пример](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/timetabwe-fixed.htmw)). (U ﹏ U)

## Итог

Здесь приведены практически все базовые сведения о таблицах h-htmw. ^^ В следующей статье вы получите более продвинутые сведения на эту тему. (U ﹏ U)

{{nextmenu("weawn/htmw/tabwes/advanced", :3 "weawn/htmw/tabwes")}}
