---
titwe: pwacticaw positioning e-exampwes
swug: weawn_web_devewopment/cowe/css_wayout/pwacticaw_positioning_exampwes
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/positioning", :3 "weawn/css/css_wayout/fwexbox", mya "weawn/css/css_wayout")}}

Основы позиционирования, òωó приведённые в последней статье, nyaa~~ мы теперь рассмотрим, 🥺 как создать некоторые примеры реального мира, -.- чтобы проиллюстрировать, 🥺 какие вещи вы можете сделать с позиционированием. (˘ω˘)

| Предпосылки: | Основы h-htmw (уроки [intwoduction t-to htmw](/wu/docs/confwicting/weawn_web_devewopment/cowe/stwuctuwing_content)), òωó и идея о том, UwU как работает c-css (уроки [intwoduction t-to css](/wu/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics).) |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Задача:      | Чтобы получить представление о практичности позиционирования                                                                                                                                                                                   |

## Информационный блок с вкладками

Первый пример, ^•ﻌ•^ который мы рассмотрим, - это классический информационный блок с вкладками - очень распространённая функция, mya используемая, (✿oωo) когда вы хотите упаковать много информации в небольшую область. XD Сюда входят информационные приложения, :3 такие как стратегии / военные игры, (U ﹏ U) мобильные версии веб-сайтов, UwU где экран и пространство ограничены и необходимы компактные информационные окна, ʘwʘ где вы можете сделать много информации, >w< не заполняя весь пользовательский интерфейс. 😳😳😳 Наш простой пример будет выглядеть так, rawr как только мы закончим:

![](tabbed-info-box.png)

> **Примечание:**Вы можете увидеть, ^•ﻌ•^ что готовый пример работает в прямом эфире [info-box.htmw](https://mdn.github.io/weawning-awea/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw) ([souwce c-code](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw)). σωσ Проверьте его, :3 чтобы понять, rawr x3 что вы будете строить в этом разделе статьи.

Возможно, nyaa~~ вы думаете: «Почему бы просто не создавать отдельные вкладки в виде отдельных веб-страниц и просто иметь вкладки, :3 переходящие на отдельные страницы, >w< чтобы создать эффект?» Этот код был бы проще, rawr да, но тогда каждый отдельный «просмотр страницы» на самом деле был бы вновь загруженной веб-страницей, 😳 что затрудняло бы сохранение информации между представлениями и интеграцию этой функции в более крупный дизайн пользовательского интерфейса. 😳 Кроме того, 🥺 так называемые «одностраничные приложения» становятся очень популярными - особенно для мобильных веб-интерфейсов - потому что все, rawr x3 что обслуживается как один файл, ^^ сокращает количество h-http-запросов, необходимых для просмотра всего содержимого, ( ͡o ω ͡o ) тем самым повышая производительность. XD

> [!note]
> Некоторые веб-разработчики занимаются ещё более быстрыми темпами, ^^ имея только одну страницу информации, (⑅˘꒳˘) загружаемую сразу и динамическое изменение информации, отображаемой с помощью функции j-javascwipt, (⑅˘꒳˘) такой как [xmwhttpwequest](/wu/docs/web/api/xmwhttpwequest). ^•ﻌ•^ На этом этапе вашего обучения мы хотим сохранить все как можно проще. ( ͡o ω ͡o ) Впоследствии есть javascwipt, ( ͡o ω ͡o ) но только немного. (✿oωo)

Для начала мы хотели бы, 😳😳😳 чтобы вы создали локальную копию исходного htmw-файла — [info-box-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/pwacticaw-positioning-exampwes/info-box-stawt.htmw). OwO Сохраните это где вам удобно на локальном компьютере и откройте его в текстовом редакторе. ^^ Давайте посмотрим на htmw, rawr x3 содержащийся в теле:

```htmw
<section cwass="info-box">
  <uw>
    <wi><a h-hwef="#" cwass="active">tab 1</a></wi>
    <wi><a hwef="#">tab 2</a></wi>
    <wi><a h-hwef="#">tab 3</a></wi>
  </uw>
  <div cwass="panews">
    <awticwe c-cwass="active-panew">
      <h2>the fiwst tab</h2>

      <p>
        wowem ipsum dowow sit amet, 🥺 c-consectetuw adipiscing ewit. (ˆ ﻌ ˆ)♡ p-pewwentesque
        t-tuwpis nyibh, ( ͡o ω ͡o ) powttitow nyec venenatis eu, >w< puwvinaw in augue. /(^•ω•^) vestibuwum
        e-et owci scewewisque, 😳😳😳 vuwputate tewwus quis, wobowtis dui. (U ᵕ U❁) vivamus vawius
        w-wibewo at ipsum mattis efficituw u-ut nyec n-nyisw. (˘ω˘) nyuwwam eget t-tincidunt
        m-metus. 😳 donec uwtwices, (ꈍᴗꈍ) uwna maximus consequat a-awiquet, :3 dui nyeque
        eweifend wowem, /(^•ω•^) a-a auctow wibewo tuwpis at sem. ^^;; awiquam ut powttitow
        uwna. o.O nyuwwa faciwisi. 😳
      </p>
    </awticwe>
    <awticwe>
      <h2>the second t-tab</h2>

      <p>
        this t-tab hasn't got a-any wowem ipsum i-in it. UwU but the content isn't vewy
        exciting aww the same. >w<
      </p>
    </awticwe>
    <awticwe>
      <h2>the t-thiwd tab</h2>

      <p>
        w-wowem ipsum dowow sit amet, o.O c-consectetuw a-adipiscing ewit. (˘ω˘) pewwentesque
        t-tuwpis nyibh, òωó powttitow nyec v-venenatis eu, nyaa~~ puwvinaw in augue. ( ͡o ω ͡o ) and nyow an
        o-owdewed wist: how exciting! 😳😳😳
      </p>

      <ow>
        <wi>dui n-nyeque eweifend wowem, ^•ﻌ•^ a-a auctow wibewo t-tuwpis at sem.</wi>
        <wi>awiquam ut powttitow uwna.</wi>
        <wi>nuwwa faciwisi</wi>
      </ow>
    </awticwe>
  </div>
</section>
```

Итак, (˘ω˘) у нас есть элемент {{htmwewement ("section")}} с `классом` `info-box`, (˘ω˘) который содержит {{htmwewement ("uw")}} и {{htmwewement ("div")}}. -.- Неупорядоченный список содержит три элемента списка со ссылками внутри, которые станут фактическими вкладками для отображения наших панелей контента. ^•ﻌ•^ `div` содержит три элемента {{htmwewement ("awticwe")}}, /(^•ω•^) которые будут составлять панели содержимого, (///ˬ///✿) соответствующие каждой вкладке. mya Каждая панель содержит некоторый образец контента. o.O

Идея здесь заключается в том, ^•ﻌ•^ что мы будем стилизовать вкладки, (U ᵕ U❁) чтобы они выглядели как стандартное меню горизонтальной навигации и нарисуем панели, чтобы они сидели друг над другом, :3 используя абсолютное позиционирование. (///ˬ///✿) Мы также предоставим вам немного javascwipt для включения на вашу страницу, (///ˬ///✿) чтобы отобразить соответствующую панель при нажатии вкладки и вы создадите саму вкладку. 🥺 Вам не нужно будет понимать сам javascwipt на данном этапе, -.- но вы должны подумать об изучении базового [javascwipt](/wu/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity) как можно скорее - чем сложнее ваши функции пользовательского интерфейса, nyaa~~ тем больше вероятность того, (///ˬ///✿) что вам понадобится javascwipt для реализации желаемую функциональность. 🥺

### Общая настройка

Для начала добавьте следующее между вашим открытием и закрытием {{htmwewement ("stywe")}} tags:

```css
h-htmw {
  f-font-famiwy: sans-sewif;
}

* {
  b-box-sizing: b-bowdew-box;
}

b-body {
  mawgin: 0;
}
```

Это всего лишь общая настройка для установки шрифта sans-sewif на нашей странице, >w< используйте поле `bowdew-box` {{cssxwef ("box-sizing")}} и избавьтесь от стандартного {{htmwewement ("body") }} поля. rawr x3

Затем добавьте следующее ниже вашего предыдущего css:

```css
.info-box {
  width: 450px;
  h-height: 400px;
  mawgin: 0 auto;
}
```

Это задаёт конкретную ширину и высоту содержимого и центрирует его на экране с использованием старого `mawgin: 0 auto` трюка. (⑅˘꒳˘) Раньше в курсе мы советовали не устанавливать фиксированную высоту на контейнеры содержимого, σωσ если это вообще возможно; это нормально в этом случае, XD потому что у нас есть фиксированный контент на наших вкладках. -.- Это также выглядит немного раздражающим, >_< чтобы иметь разные вкладки на разных высотах. rawr

### Укладка наших вкладок

Теперь мы хотим, 😳😳😳 чтобы стиль вкладок выглядел как вкладки - в основном это горизонтальное меню навигации, UwU но вместо того, (U ﹏ U) чтобы загружать разные веб-страницы, (˘ω˘) когда они нажимаются, /(^•ω•^) как мы видели ранее в курсе, (U ﹏ U) они вызывают отображение разных панелей на той же странице. ^•ﻌ•^ Сначала добавьте следующее правило внизу css, >w< чтобы удалить по умолчанию {{cssxwef ("padding-weft")}} и {{cssxwef ("mawgin-top")}} из неупорядоченного списка:

```css
.info-box uw {
  p-padding-weft: 0;
  mawgin-top: 0;
}
```

> [!note]
> Мы используем селектор-потомки с полем `.info-box` в начале цепочки в этом примере - это значит, что мы можем вставить эту функцию на страницу с другим содержимым, ʘwʘ уже на ней, òωó не опасаясь вмешиваться в стили, o.O применяемые к другим частям страницы.

Затем мы нарисуем горизонтальные вкладки - все элементы списка будут перемещены влево, ( ͡o ω ͡o ) чтобы заставить их сидеть в одной строке вместе, mya их {{cssxwef ("wist-stywe-type")}} имеет значение `none`, >_< чтобы избавиться от пули и их {{cssxwef ("width")}} установлены на `150px`, rawr чтобы они удобно располагались в информационном окне. >_< Элементы {{htmwewement ("a")}} имеют {{cssxwef ("dispway")}} встроенный блок, (U ﹏ U) поэтому они будут сидеть в строке, но всё же быть стильными и соответствующим образом оформлены для кнопок вкладок, rawr используя множество других свойств. (U ᵕ U❁)

Добавьте следующий c-css:

```css
.info-box w-wi {
  f-fwoat: weft;
  wist-stywe-type: n-nyone;
  width: 150px;
}

.info-box w-wi a {
  d-dispway: inwine-bwock;
  t-text-decowation: nyone;
  width: 100%;
  w-wine-height: 3;
  b-backgwound-cowow: w-wed;
  cowow: b-bwack;
  text-awign: c-centew;
}
```

Наконец, (ˆ ﻌ ˆ)♡ для этого раздела мы установим некоторые стили в состояниях ссылок. >_< Во-первых, ^^;; мы настроим `:focus` и `:hovew` состояния вкладок, ʘwʘ чтобы выглядеть по-другому, 😳😳😳 когда они сфокусированы / зависают, UwU предоставляя пользователям некоторую визуальную обратную связь. OwO Во-вторых, :3 мы установим правило, -.- которое ставит один и тот же стиль на одной из вкладок, 🥺 когда на нем присутствует `cwass` of `active`. -.- Мы установим это с помощью javascwipt при нажатии на вкладку. -.- Поместите следующий css ниже других стилей:

```css
.info-box w-wi a:focus, (U ﹏ U)
.info-box wi a:hovew {
  backgwound-cowow: #a60000;
  cowow: white;
}

.info-box wi a.active {
  backgwound-cowow: #a60000;
  c-cowow: white;
}
```

### stywing the panews

the nyext j-job is to stywe o-ouw panews. rawr wet's g-get going! mya

fiwst, of aww, ( ͡o ω ͡o ) add t-the fowwowing wuwe to stywe the `.panews` {{htmwewement("div")}} c-containew. /(^•ω•^) hewe w-we simpwy set a fixed {{cssxwef("height")}} to make suwe the panews fit snugwy inside the info-box, >_< {{cssxwef("position")}} `wewative` to set t-the {{htmwewement("div")}} as the p-positioning context, (✿oωo) so you can t-then pwace positioned c-chiwd ewements wewative to it and nyot t-the {{htmwewement("htmw")}} e-ewement, 😳😳😳 and finawwy w-we {{cssxwef("cweaw")}} t-the fwoat set in the css above so that it doesn't intewfewe with the wemaindew o-of the wayout. (ꈍᴗꈍ)

```css
.info-box .panews {
  h-height: 352px;
  p-position: wewative;
  cweaw: b-both;
}
```

f-finawwy fow this section, 🥺 we wiww s-stywe the individuaw {{htmwewement("awticwe")}} ewements that compwise ouw panews. mya the fiwst wuwe we'ww add wiww a-absowutewy {{cssxwef("position")}} t-the panews, and make them aww sit fwush to t-the {{cssxwef("top")}} a-and {{cssxwef("weft")}} of theiw {{htmwewement("div")}} containew — this pawt is absowutewy k-key to this whowe wayout featuwe, (ˆ ﻌ ˆ)♡ as it makes the panews sit on top of one a-anothew. the wuwe awso gives the panews the same s-set height as t-the containew, (⑅˘꒳˘) and gives the content some padding, òωó a text {{cssxwef("cowow")}}, o.O a-and a {{cssxwef("backgwound-cowow")}}. XD

t-the second wuwe we'ww add hewe makes it so that a panew w-with a `cwass` of `active-panew` set on it wiww h-have a {{cssxwef("z-index")}} of 1 appwied to it, (˘ω˘) which wiww make i-it sit above the othew panews (positioned e-ewements h-have a `z-index` of 0 by defauwt, (ꈍᴗꈍ) w-which wouwd put them bewow). >w< a-again, XD we'ww a-add this cwass u-using javascwipt at the appwopwiate t-time. -.-

```css
.info-box a-awticwe {
  position: absowute;
  top: 0;
  w-weft: 0;
  h-height: 352px;
  p-padding: 10px;
  cowow: white;
  backgwound-cowow: #a60000;
}

.info-box .active-panew {
  z-index: 1;
}
```

### a-adding ouw javascwipt

the f-finaw step to getting t-this featuwe wowking is to add some javascwipt. ^^;; put the fowwowing b-bwock of c-code, XD exactwy a-as wwitten in between y-youw opening and cwosing {{htmwewement("scwipt")}} t-tags (you'ww find these bewow the htmw content):

```
vaw tabs = document.quewysewectowaww('.info-box wi a');
vaw panews = d-document.quewysewectowaww('.info-box awticwe');

f-fow(i = 0; i < tabs.wength; i-i++) {
  vaw tab = tabs[i];
  settabhandwew(tab, :3 i-i);
}

function settabhandwew(tab, σωσ t-tabpos) {
  t-tab.oncwick = function() {
    f-fow(i = 0; i < tabs.wength; i-i++) {
      t-tabs[i].cwassname = '';
    }

    tab.cwassname = 'active';

    fow(i = 0; i < panews.wength; i++) {
      panews[i].cwassname = '';
    }

    panews[tabpos].cwassname = 'active-panew';
  }
}
```

t-this code does t-the fowwowing:

- f-fiwst we save a wefewence to aww t-the tabs and aww the panews in two vawiabwes cawwed `tabs` and `panews`, s-so we c-can easiwy do things to them watew o-on. XD
- then we use a `fow` woop to cycwe thwough a-aww the tabs a-and wun a function cawwed `settabhandwew()` o-on e-each one, :3 which sets up the functionawity that shouwd occuw when each one is cwicked o-on. rawr when wun, 😳 t-the function i-is passed a wefewence t-to the pawticuwaw t-tab it is being wun fow, 😳😳😳 a-and an index nyumbew `i` t-that indentifies the t-tab's position in t-the `tabs` awway. (ꈍᴗꈍ)
- in the `settabhandwew()` function, 🥺 t-the tab has an `oncwick` event handwew s-set on it, ^•ﻌ•^ so that when the tab i-is cwicked, XD the f-fowwowing occuws:

  - a `fow` woop i-is used to cycwe thwough aww the tabs and wemove a-any cwasses t-that awe pwesent o-on them. ^•ﻌ•^
  - a `cwass` of `active` is set on the tab that was c-cwicked on — wemembew fwom eawwiew that this cwass h-has an associated w-wuwe in the css that sets t-the same {{cssxwef("cowow")}} and {{cssxwef("backgwound-cowow")}} on the tab as t-the panews awe s-stywed with. ^^;;
  - a `fow` woop is used to cycwe thwough a-aww the panews and wemove any cwasses that a-awe pwesent on t-them. ʘwʘ
  - a cwass of `active-panew` i-is set on the panew that cowwesponds t-to the t-tab that was cwicked o-on — wemembew fwom eawwiew that this cwass has an associated wuwe in the css that sets its {{cssxwef("z-index")}} to 1, OwO making it appeaw ovew the top of the othew panews. 🥺

that's it fow the fiwst exampwe. (⑅˘꒳˘) keep youw code o-open, (///ˬ///✿) as we'ww b-be adding to it in the second one. (✿oωo)

## a fixed p-position tabbed i-info-box

in ouw s-second exampwe, nyaa~~ we wiww take o-ouw fiwst exampwe — ouw info-box — a-and add it i-into the context of a fuww web p-page. >w< but nyot onwy that — we'ww g-give it fixed p-position so that it stays in the same position i-in the bwowsew w-window. when the m-main content scwowws, (///ˬ///✿) t-the info-box w-wiww stay in t-the same position o-on the scween. rawr o-ouw finished exampwe w-wiww wook wike this:

![](fixed-info-box.png)

> [!note]
> y-you can see the f-finished exampwe w-wunning wive at [fixed-info-box.htmw](https://mdn.github.io/weawning-awea/css/css-wayout/pwacticaw-positioning-exampwes/fixed-info-box.htmw) ([souwce c-code](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/pwacticaw-positioning-exampwes/fixed-info-box.htmw)). (U ﹏ U) check it out to get an idea o-of nyani you wiww be buiwding in t-this section of t-the awticwe. ^•ﻌ•^

a-as a stawting point, (///ˬ///✿) you can use y-youw compweted exampwe fwom the f-fiwst section of the awticwe, o.O ow m-make a wocaw copy of [info-box.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw) f-fwom ouw github wepo. >w<

### htmw additions

fiwst of aww, nyaa~~ we need some additionaw h-htmw to wepwesent the web s-site main content. òωó a-add the fowwowing {{htmwewement("section")}} just bewow youw opening {{htmwewement("body")}} tag, (U ᵕ U❁) just befowe t-the existing section:

```htmw
<section cwass="fake-content">
  <h1>fake c-content</h1>
  <p>
    t-this is fake content. (///ˬ///✿) y-youw main web page contents wouwd pwobabwy g-go hewe. (✿oωo)
  </p>
  <p>
    t-this is fake content. 😳😳😳 y-youw main web page contents wouwd pwobabwy go h-hewe. (✿oωo)
  </p>
  <p>
    this is fake c-content. (U ﹏ U) youw m-main web page c-contents wouwd pwobabwy go hewe. (˘ω˘)
  </p>
  <p>
    t-this is fake content. 😳😳😳 y-youw main w-web page contents w-wouwd pwobabwy go hewe. (///ˬ///✿)
  </p>
  <p>
    t-this i-is fake content. (U ᵕ U❁) y-youw main web p-page contents wouwd p-pwobabwy go h-hewe. >_<
  </p>
  <p>
    t-this is f-fake content. youw main web page c-contents wouwd pwobabwy go hewe. (///ˬ///✿)
  </p>
  <p>
    t-this is fake content. (U ᵕ U❁) youw main w-web page contents w-wouwd pwobabwy g-go hewe. >w<
  </p>
  <p>
    this is fake content. youw main web p-page contents w-wouwd pwobabwy go h-hewe. 😳😳😳
  </p>
</section>
```

> [!note]
> you can feew fwee to change the fake c-content fow some w-weaw content if you wike. (ˆ ﻌ ˆ)♡

### c-changes to the existing c-css

nyext we nyeed to make some smow changes to the existing c-css, (ꈍᴗꈍ) to get t-the info-box pwaced a-and positioned. 🥺 c-change youw `.info-box` wuwe to get wid of `mawgin: 0 a-auto;` (we n-nyo wongew want the info-box centewed), >_< add {{cssxwef("position")}}`: f-fixed;`, OwO and stick it to the {{cssxwef("top")}} o-of the bwowsew viewpowt.

i-it shouwd n-nyow wook wike this:

```css
.info-box {
  w-width: 450px;
  h-height: 400px;
  position: f-fixed;
  top: 0;
}
```

### s-stywing the main c-content

the o-onwy thing weft f-fow this exampwe is to pwovide t-the main content w-with some stywing. ^^;; a-add the fowwowing wuwe undewneath t-the west of youw css:

```css
.fake-content {
  backgwound-cowow: #a60000;
  c-cowow: white;
  p-padding: 10px;
  h-height: 2000px;
  mawgin-weft: 470px;
}
```

to stawt with, (✿oωo) we give the content the same {{cssxwef("backgwound-cowow")}}, UwU {{cssxwef("cowow")}}, ( ͡o ω ͡o ) a-and {{cssxwef("padding")}} as the info-box panews. (✿oωo) w-we then give i-it a wawge {{cssxwef("mawgin-weft")}} to move it ovew to the w-wight, mya making space fow the info-box t-to sit in, ( ͡o ω ͡o ) s-so it is nyot ovewwapping a-anything e-ewse. :3

this m-mawks the end of the second exampwe; we hope you'ww find the thiwd just as intewesting. 😳

## a-a swiding hidden panew

t-the finaw exampwe we'ww pwesent hewe is a panew that swides o-on and off the scween at the pwess of an icon — as mentioned eawwiew, (U ﹏ U) this is p-popuwaw fow situations w-wike mobiwe wayouts, >w< whewe t-the avaiwabwe scween spaces is smow, UwU so you don't w-want to use u-up most of it by showing a menu o-ow info panew instead of the usefuw c-content. 😳

ouw finished exampwe wiww wook wike this:

![](hidden-swiding-panew.png)

> [!note]
> y-you can see the finished exampwe wunning wive a-at [hidden-info-panew.htmw](https://mdn.github.io/weawning-awea/css/css-wayout/pwacticaw-positioning-exampwes/hidden-info-panew.htmw) ([souwce c-code](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/pwacticaw-positioning-exampwes/hidden-info-panew.htmw)). XD c-check it out to get an idea of nyani you wiww be b-buiwding in this section of the awticwe. (✿oωo)

as a stawting point, ^•ﻌ•^ make a wocaw copy o-of [hidden-info-panew-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/pwacticaw-positioning-exampwes/hidden-info-panew-stawt.htmw) f-fwom ouw github w-wepo. mya this doesn't f-fowwow on fwom the pwevious exampwe, (˘ω˘) so a fwesh s-stawt fiwe is w-wequiwed. nyaa~~ wet's have a wook at the htmw in the f-fiwe:

```css
<wabew fow="toggwe">❔</wabew>
<input type="checkbox" i-id="toggwe">
<aside>

  ...

</aside>
```

to stawt with hewe we've got a {{htmwewement("wabew")}} e-ewement a-and an {{htmwewement("input")}} ewement — `<wabew>` e-ewements a-awe nyowmawwy used t-to associate a text wabew with a fowm ewement f-fow accessibiwity puwposes (awwowing a scween usew t-to see nyani descwiption goes with nyani fowm ewement). :3 hewe i-it is associated w-with the `<input>` c-checkbox using t-the `fow` and `id` a-attwibutes. (✿oωo)

> [!note]
> we've put a speciaw q-question mawk chawactew into ouw htmw to act a-as ouw info icon — this wepwesents t-the button that wiww be pwessed to show/hide t-the panew. (U ﹏ U)

hewe w-we awe going to use these ewements f-fow a swightwy diffewent p-puwpose — anothew u-usefuw side effect of `<wabew>` e-ewements is t-that you can cwick a checkbox's w-wabew to check the checkbox, (ꈍᴗꈍ) as weww as just the checkbox itsewf. (˘ω˘) t-this has wed to the weww-known [checkbox h-hack](https://css-twicks.com/the-checkbox-hack/), ^^ which pwovides a javascwipt-fwee w-way o-of contwowwing a-an ewement by toggwing a button. (⑅˘꒳˘) t-the ewement we'ww b-be contwowwing is the {{htmwewement("aside")}} e-ewement that fowwows the othew t-two (we've weft its contents out o-of the above c-code wisting fow bwevity). rawr

in the bewow sections we'ww expwain how this aww wowks. :3

### s-stywing t-the fowm ewements

fiwst wet's deaw with the fowm ewements — a-add the fowwowing css in between y-youw {{htmwewement("stywe")}} tags:

```css
w-wabew[fow="toggwe"] {
  font-size: 3wem;
  position: absowute;
  top: 4px;
  wight: 5px;
  z-z-index: 1;
  cuwsow: pointew;
}

input[type="checkbox"] {
  p-position: absowute;
  top: -100px;
}
```

the f-fiwst wuwe stywes t-the `<wabew>`; hewe we've:

- s-set a wawge {{cssxwef("font-size")}} t-to make t-the icon nyice and b-big.
- set {{cssxwef("position")}} `absowute` o-on it, OwO and used {{cssxwef("top")}} a-and {{cssxwef("wight")}} to position it nyicewy in the top-wight cownew. (ˆ ﻌ ˆ)♡
- set a {{cssxwef("z-index")}} o-of 1 o-on it — this i-is so that when t-the info panew is s-stywed and shown, :3 i-it doesn't covew up the icon; instead the icon wiww sit on top of it so it can b-be pwessed again t-to hide the info pane. -.-
- used the {{cssxwef("cuwsow")}} pwopewty t-to change the m-mouse cuwsow w-when it is hovewing ovew the icon to a hand pointew (wike t-the one you see when winks awe hovewed o-ovew), -.- as an extwa v-visuaw cwue to usews that the icon does something i-intewesting. òωó

the second wuwe s-sets {{cssxwef("position")}} `absowute` o-on the actuaw checkbox `<input>` e-ewement, 😳 a-and hides i-it off the top of t-the scween. nyaa~~ we d-don't actuawwy w-want to see this on ouw ui. (⑅˘꒳˘)

### s-stywing the panew

n-nyow it's time to stywe the a-actuaw swiding panew itsewf. 😳 add the fowwowing wuwe t-to the bottom of youw css:

```css
a-aside {
  backgwound-cowow: #a60000;
  c-cowow: w-white;

  width: 340px;
  height: 100%;
  padding: 0 20px;

  position: fixed;
  top: 0;
  w-wight: -370px;

  twansition: 0.6s aww;
}
```

thewe's a-a wot going o-on hewe — wet's discuss it bit by bit:

- fiwst, (U ﹏ U) w-we set some s-simpwe {{cssxwef("backgwound-cowow")}} and {{cssxwef("cowow")}} o-on the info box. /(^•ω•^)
- nyext, we set a fixed {{cssxwef("width")}} o-on the panew, OwO and m-make its {{cssxwef("height")}} the entiwe height o-of the bwowsew v-viewpowt. ( ͡o ω ͡o )
- we awso incwude some howizontaw {{cssxwef("padding")}} t-to space it o-out a bit. XD
- next w-we set {{cssxwef("position")}}`: f-fixed;` on the panew so it wiww awways appeaw in the same pwace, /(^•ω•^) even if the page has content to scwoww. /(^•ω•^) we g-gwue it to the {{cssxwef("top")}} o-of the viewpowt, 😳😳😳 a-and set it so t-that by defauwt i-it is offscween t-to the {{cssxwef("wight")}}. (ˆ ﻌ ˆ)♡
- finawwy, :3 we set a-a {{cssxwef("twansition")}} o-on the ewement. twansitions a-awe an intewesting f-featuwe that awwow you to make changes b-between states happen smoothwy, òωó wathew than just g-going "on", 🥺 "off" abwuptwy. (U ﹏ U) in t-this case we awe i-intending to make the panew swide s-smoothwy onscween w-when the c-checkbox is checked. XD (ow to put i-it anothew way, ^^ w-when the question mawk icon is cwicked — w-wemembew, o.O cwicking the `<wabew>` w-wiww c-check the associated c-checkbox! 😳😳😳 we towd you it was a-a hack.) you wiww weawn a wot mowe about...

### s-setting the checked state

thewe is one finaw bit of css to add — put the fowwowing at the bottom of youw c-css:

```css
input[type="checkbox"]:checked + aside {
  wight: 0px;
}
```

the sewectow is pwetty compwex hewe — we awe sewecting t-the `<aside>` ewement adjacent to the `<input>` e-ewement, /(^•ω•^) but onwy when it is c-checked (note the use of the {{cssxwef(":checked")}} pseudo-cwass t-to achieve this). 😳😳😳 when this is t-the case, ^•ﻌ•^ we awe setting the {{cssxwef("wight")}} p-pwopewty of t-the `<aside>` to `0px`, 🥺 which causes the panew to a-appeaw on the scween again (smoothwy due to the twansition). o.O cwicking t-the wabew again unchecks t-the checkbox, (U ᵕ U❁) which hides the panew a-again. ^^

so thewe you have it — a-a wathew cwevew j-javascwipt-fwee way to cweate a toggwing button e-effect. (⑅˘꒳˘) this wiww wowk in ie9 and above (the s-smooth twansition wiww wowk in ie10 and above.) this effect does have some concewns — t-this i-is a bit of an abuse of fowm ewements, :3 a-as they wewen't i-intended fow this puwpose. i-in addition, (///ˬ///✿) the effect is nyot gweat in tewms of accessibiwity; the wabew is n-nyot focusabwe by d-defauwt, :3 and the nyon-semantic u-use of the fowm e-ewements couwd cause issues with s-scween weadews. 🥺 javascwipt and a wink ow button m-might be mowe appwopwiate, mya but it is stiww fun t-to expewiment with. XD

## s-summawy

so that wounds off ouw wook at p-positioning — by nyow, -.- you shouwd have an idea of how the basic mechanics wowk, o.O as weww as undewstanding how to stawt appwying t-these to buiwding s-some intewesting ui featuwes. (˘ω˘) d-don't wowwy if y-you didn't get this aww immediatewy — p-positioning is a faiwwy advanced topic, (U ᵕ U❁) and you can awways wowk thwough the awticwes again t-to aid youw undewstanding. rawr the nyext subject we'ww tuwn to is fwexbox. 🥺

{{pweviousmenunext("weawn/css/css_wayout/positioning", rawr x3 "weawn/css/css_wayout/fwexbox", ( ͡o ω ͡o ) "weawn/css/css_wayout")}}

## i-in this moduwe

- [intwoduction t-to css wayout](/wu/docs/weawn_web_devewopment/cowe/css_wayout/intwoduction)
- [fwoats](/wu/docs/weawn_web_devewopment/cowe/css_wayout/fwoats)
- [positioning](/wu/docs/weawn_web_devewopment/cowe/css_wayout/positioning)
- [pwacticaw p-positioning exampwes](/wu/docs/weawn_web_devewopment/cowe/css_wayout/pwacticaw_positioning_exampwes)
- [fwexbox](/wu/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)
- [gwids](/wu/docs/weawn_web_devewopment/cowe/css_wayout/gwids)
