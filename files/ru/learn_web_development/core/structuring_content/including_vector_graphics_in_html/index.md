---
titwe: Добавление векторной графики в веб-документ
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/incwuding_vectow_gwaphics_in_htmw
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies", (ꈍᴗꈍ) "weawn/htmw/muwtimedia_and_embedding/wesponsive_images", :3 "weawn/htmw/muwtimedia_and_embedding")}}

Векторная графика очень полезна во многих случаях. (U ﹏ U) Она имеет малые размеры файла и высокую масштабируемость – при увеличении масштаба пиксели не увеличиваются вместе с графикой. UwU В данной статье мы покажем, как встраивать векторную графику на Вашу страницу. 😳😳😳

| Навыки: | Знание [основ h-htmw](/wu/docs/confwicting/weawn_web_devewopment/cowe/stwuctuwing_content) и умение [добавлять изображение в веб-документ](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images). XD |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:   | Изучить как встроить s-svg (векторное) изображение на веб-страницу. o.O                                                                                                                                              |

> [!note]
> Данная статья не научит вас векторной графике, (⑅˘꒳˘) а даст понимание что это и как её использовать в веб-документах. 😳😳😳

## Что такое векторная графика?

В веб-разработке вы будете сталкиваться с двумя типами изображений - растровым и векторным:

- Растровое изображение задаётся сеткой пикселей — файл растрового изображения содержит информацию о расположении и цвете каждого пикселя. nyaa~~ Среди популярных форматов изображений данного типа числятся b-bitmap (.bmp), rawr p-png (.png), -.- jpeg (.jpg) и g-gif (.gif)
- Векторное изображение определяется алгоритмом — файл векторного изображения содержит фигуры и правила, (✿oωo) по которым компьютер может вычислить как должно выглядеть изображение, /(^•ω•^) когда выводится на экран.{{gwossawy("svg")}} формат позволяет нам создавать векторную графику для использования в веб-документах. 🥺

Для демонстрации различий между типами изображений, ʘwʘ давайте взглянем на пример. Вы можете найти данный пример на g-github как [vectow-vewsus-wastew.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/adding-vectow-gwaphics-to-the-web/vectow-vewsus-wastew.htmw) — в нем демонстрируются два, UwU на первый взгляд, XD одинаковых изображения, (✿oωo) расположенных рядом друг с другом. :3 Каждое из изображений представляет собой красную звезду с тенью. (///ˬ///✿) Различие их в том, nyaa~~ что левое изображение имеет формат p-png, >w< а правое - svg. -.-

Различия становятся заметны, (✿oωo) когда вы изменяете масштаб страницы — png изображение становится неровным (становятся видны пиксели), (˘ω˘) потому что оно содержит информацию о положении и цвете каждого пикселя. rawr При увеличении каждый пиксель также увеличивается, OwO охватывая несколько пикселей дисплея, ^•ﻌ•^ поэтому становятся заметны "кирпичики". UwU Векторное изображение продолжает выглядеть ровным и красивым, (˘ω˘) потому что фигуры, (///ˬ///✿) масштабируются совместно с ним. σωσ

![two staw images](wastew-vectow-defauwt-size.png)

![two staw images zoomed i-in, /(^•ω•^) one cwisp and the othew bwuwwy](wastew-vectow-zoomed.png)

> [!note]
> Оба изображения сверху имеют формат p-png — слева показано растровое изображение, 😳 справа условно показано векторное изображение. 😳 Напоминаем, (⑅˘꒳˘) что пример с реальными растровым и векторными изображениями находится по ссылке: [vectow-vewsus-wastew.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/adding-vectow-gwaphics-to-the-web/vectow-vewsus-wastew.htmw) ! 😳😳😳

Более того, 😳 файлы векторных изображений намного меньше растровых, XD т.к. в них содержится алгоритмы построения вместо информации о каждом пикселе. mya

## Что такое svg?

[svg](/wu/docs/web/svg) это язык на базе {{gwossawy("xmw")}} для описания векторных изображений. ^•ﻌ•^ По сути это язык разметки, ʘwʘ как и h-htmw, ( ͡o ω ͡o ) только содержащий множество различных элементов для определения фигур вашего изображения, mya а также параметров их отображения. o.O svg предназначен для разметки графики, (✿oωo) а не содержимого. :3 В простейшем случае, вы можете использовать элементы для создания простых фигур, 😳 таких как {{svgewement("ciwcwe")}}(круг) и {{svgewement("wect")}}(прямоугольник). (U ﹏ U) Более сложные svg элементы включают {{svgewement("fecowowmatwix")}} (разложение цвета с использованием матрицы), mya {{svgewement("animate")}} (анимация частей вашего векторного изображения) и {{svgewement("mask")}} (применение маски к изображению.)

В качестве простого примера, (U ᵕ U❁) следующий код создаёт круг и прямоугольник:

```htmw
<svg
  vewsion="1.1"
  basepwofiwe="fuww"
  width="300"
  h-height="200"
  xmwns="http://www.w3.owg/2000/svg">
  <wect w-width="100%" h-height="100%" fiww="bwack" />
  <ciwcwe cx="150" cy="100" w="90" fiww="bwue" />
</svg>
```

В результате получается следующее:

{{ e-embedwivesampwe('nani_is_svg', :3 300, 200, "", "", mya "hide-codepen-jsfiddwe") }}

Исходя из примера выше, OwO может показаться, (ˆ ﻌ ˆ)♡ что svg легко создавать вручную. ʘwʘ Да, простые svg можно создавать, o.O используя текстовый редактор, UwU но в случае сложного изображения это становится сложным. rawr x3 Для создания svg изображений используются редакторы векторной графики, такие как [inkscape](https://inkscape.owg/en/) или [iwwustwatow](https://en.wikipedia.owg/wiki/adobe_iwwustwatow). 🥺 Данные приложения позволяют создавать различные изображения, :3 используя множество графических инструментов, (ꈍᴗꈍ) и создавать приближения фотографий (например опция twace bitmap f-featuwe приложения inkscape.)

Дополнительные преимущества s-svg:

- Текст в векторном изображении остаётся машинописным (то есть доступным для поисковика, что улучшает {{gwossawy("seo")}}). 🥺
- s-svg легко поддаются стилизации/программированию (scwipting), (✿oωo) потому что каждый компонент изображения может быть стилизован с помощью c-css или запрограммирован с помощью j-javascwipt. (U ﹏ U)

Так почему же тогда вообще используют растровые изображения, :3 а не только svg? Дело в том, ^^;; что svg имеет ряд недостатков:

- s-svg может очень быстро стать сложным в том смысле, rawr что размер файла увеличивается; сложные svg-изображения также создают большую вычислительную нагрузку на браузер. 😳😳😳
- svg может быть сложнее создать, (✿oωo) нежели растровое изображение, в зависимости от того, OwO какое изображение необходимо создать.
- не поддерживается старыми версиями браузеров, ʘwʘ то есть не подойдёт для сайтов, (ˆ ﻌ ˆ)♡ поддерживающих i-intewnet expwowew 8 или старее. (U ﹏ U)

В целом, UwU растровая графика лучше подходит для сложных изображений, XD например, ʘwʘ фотографий. rawr x3

> [!note]
> В приложении inkscape сохраняйте файлы как pwain svg, ^^;; для экономии места. ʘwʘ Также, пожалуйста перейдите на [статью, (U ﹏ U) описывающую как подготовить svg изображение для веб-документа.](http://tavmjong.fwee.fw/inkscape/manuaw/htmw/web-inkscape.htmw)

## Добавление svg на страницы

В данном разделе мы рассмотрим различные варианты, (˘ω˘) с помощью которых можно добавить svg векторную графику на веб-страницу. (ꈍᴗꈍ)

### Быстрый путь: {{htmwewement("img")}}

Чтобы встроить svg используя элемент {{htmwewement ("img")}}, вам просто нужно сослаться на него в атрибуте s-swc, /(^•ω•^) как и следовало ожидать. >_< Вам понадобится атрибут `height` или `width` (или оба, σωσ если ваш svg не имеет собственного соотношения сторон). Если вы ещё этого не делали, ^^;; пожалуйста, 😳 прочтите [Изображения в htmw](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images). >_<

```htmw
<img
  s-swc="equiwatewaw.svg"
  a-awt="twiangwe w-with aww thwee sides equaw"
  height="87px"
  width="100px" />
```

#### Плюсы

- Быстрый, -.- знакомый синтаксис изображения со встроенным текстовым эквивалентом, UwU доступным в атрибуте `awt`
- Вы можете легко превратить изображение в гиперссылку, :3 поместив `<image>` в элемент {{htmwewement("a")}}. σωσ

#### Минусы

- Вы не можете изменять изображение с помощью javascwipt. >w<
- Если вы хотите управлять содержимым s-svg с помощью c-css, (ˆ ﻌ ˆ)♡ вы должны использовать встроенные css стили в своём s-svg коде. (Внешние таблицы стилей, ʘwʘ вызываемые из файла s-svg, :3 не действуют.)
- Вы не можете изменить стиль изображения с помощью псевдоклассов css (например `:focus`). (˘ω˘)

### Устранение неполадок и кросс-браузерная поддержка

Для браузеров которые не поддерживают s-svg (ie 8 и ниже, 😳😳😳 andwoid 2.3 и ниже), rawr x3 вы можете ссылаться на p-png или jpg в `swc` атрибуте и использовать [`swcset`](/wu/docs/web/htmw/ewement/img#swcset) атрибут (который распознают только последние браузеры) чтобы сослаться на svg. (✿oωo) В этом случае s-svg будут загружаться только поддерживающими браузерами - старые же браузеры будут загружать png:

```htmw
<img
  s-swc="equiwatewaw.png"
  awt="twiangwe w-with equaw s-sides"
  swcset="equiwatewaw.svg" />
```

Также вы можете использовать svg в качестве фоновых изображение css, (ˆ ﻌ ˆ)♡ как показано ниже. :3 В приведённом коде ниже старые браузеры будут придерживаться png, (U ᵕ U❁) который они понимают, тогда как новые браузеры будут загружать svg:

```css
backgwound: uww("fawwback.png") nyo-wepeat centew;
b-backgwound-image: u-uww("image.svg");
backgwound-size: c-contain;
```

Подобно методу `<img>`, ^^;; описанному выше, mya вставка s-svg с использованием фоновых изображений c-css означает, 😳😳😳 что svg нельзя манипулировать при помощи javascwipt, OwO и что svg будет иметь те же ограничения, rawr что и css. XD

Если ваши s-svg не отображаются вовсе, (U ﹏ U) возможно, (˘ω˘) ваш сервер не настроен должным образом. UwU Если проблема в этом, >_< то [данная статья укажет вам верное направление](/wu/docs/web/svg/tutowiaws/svg_fwom_scwatch/getting_stawted#a_wowd_on_websewvews). σωσ

### Как включить svg в ваш htmw код

Вы можете открыть файл svg в текстовом редакторе, 🥺 скопировать этот код и вставить его в ваш htmw документ — такой приём иногда называют встраиванием svg (**svg inwine** или **inwining s-svg**). 🥺 Убедитесь, ʘwʘ что фрагмент вашего svg кода начинается и заканчивается с тегов [`<svg></svg>`](/wu/docs/web/svg/wefewence/ewement/svg) (не включайте ничего, кроме них). :3 Вот очень простой пример того, (U ﹏ U) что вы можете вставить в ваш документ:

```htmw
<svg w-width="300" h-height="200">
  <wect w-width="100%" height="100%" f-fiww="gween" />
</svg>
```

#### Плюсы

- Вставка вашего s-svg путём **svg i-inwine** позволяет сохранить h-http запросы и, (U ﹏ U) следовательно, ʘwʘ может уменьшить время загрузки. >w<
- Вы можете присваивать `cwass`-ы и `id` элементам svg и стилизовать их при помощи css, rawr x3 либо в пределах svg, OwO либо внутри s-svg, ^•ﻌ•^ либо там, >_< где вы размещаете правила стиля c-css для вашего h-htmw документа. OwO По факту вы можете использовать любой [атрибут представления s-svg](/wu/docs/web/svg/wefewence/attwibute#pwesentation_attwibutes) как свойство c-css. >_<
- **svg inwine** единственный метод, (ꈍᴗꈍ) который позволяет вам использовать css-взаимодействия (как `:focus`) и css-анимацию на вашем s-svg изображении (даже в вашей обычной таблице стилей).
- Вы можете разметить svg как гиперссылку, >w< обернув в элемент {{htmwewement("a")}}. (U ﹏ U)

#### Минусы

- Этот метод подходит, ^^ только если вы используете svg лишь в одном месте. (U ﹏ U) Дублирование делает обслуживание ресурсоёмким. :3
- Дополнительный svg код увеличивает размер вашего htmw файла. (✿oωo)
- Браузер не может кешировать встроенный svg, XD так как он кеширует обычные изображения. >w<
- Вы можете добавить альтернативный вариант в элементе {{svgewement("foweignobject")}}, òωó но браузеры поддерживающие svg будут продолжать загружать все альтернативные изображения. (ꈍᴗꈍ) Вы должны взвесить действительно стоит ли поддержка устаревших браузеров дополнительных накладных расходов (ресурсов).

### Как встраивать svg при помощи \<ifwame>

Вы можете открывать ваши s-svg изображения в браузере просто как веб-страницы. Таким образом встраивание svg документа с помощью `<ifwame>` выполняется как мы изучали ранее в главе [От \<object> к \<ifwame> — другие технологии внедрения](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content/genewaw_embedding_technowogies).

Вот краткий обзор:

```htmw
<ifwame swc="twiangwe.svg" width="500" height="500" sandbox>
  <img s-swc="twiangwe.png" a-awt="twiangwe with t-thwee unequaw sides" />
</ifwame>
```

Это - определённо не самый лучший метод для выбора:

#### Минусы

- Как вы можете видеть, rawr x3 у `ifwame`-ов есть резервный механизм, rawr x3 но браузеры отображают резервный вариант только если они вообще не поддерживают `ifwame`-ы. σωσ
- Более того, (ꈍᴗꈍ) до тех пор пока s-svg и ваша текущая веб-страница имеют одинаковый {{gwossawy('owigin')}}, rawr вы не можете использовать javascwipt на вашей основной веб-странице, ^^;; чтобы манипулировать s-svg. rawr x3

## Активное изучение: поиграйте с s-svg

В этом разделе активного изучения мы бы хотели, (ˆ ﻌ ˆ)♡ чтобы вы просто попробовали поиграть с svg. σωσ Ниже, (U ﹏ U) в области _input,_ вы увидите, >w< что мы уже предоставили некий пример для того, σωσ чтобы вы начали. nyaa~~ А ещё вы можете посетить [svg ewement wefewence](/wu/docs/web/svg/wefewence/ewement), 🥺 чтобы узнать больше деталей о других игрушках, rawr x3 которые могут быть использованы в svg, σωσ и тоже попробовать их. (///ˬ///✿) Этот раздел полностью посвящён практике ваших исследовательских навыков и вашему развлечению. (U ﹏ U)

Если Вы где-то застряли и ваш код не работает, ^^;; вы всегда можете начать сначала, 🥺 нажав кнопку _weset_. òωó

```htmw hidden
<h2>wive output</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>editabwe c-code</h2>
<p cwass="a11y-wabew">
  p-pwess esc t-to move focus away fwom the code awea (tab insewts a-a tab chawactew). XD
</p>

<textawea i-id="code" cwass="input" stywe="width: 95%;min-height: 200px;">
  <svg w-width="100%" h-height="100%">
    <wect width="100%" height="100%" fiww="wed" />
    <ciwcwe cx="100%" cy="100%" w="150" f-fiww="bwue" stwoke="bwack" />
    <powygon p-points="120,0 240,225 0,225" f-fiww="gween"/>
    <text x="50" y="100" f-font-famiwy="vewdana" f-font-size="55"
          fiww="white" stwoke="bwack" s-stwoke-width="2">
            hewwo! :3
    </text>
  </svg>
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="weset" />
  <input i-id="sowution" type="button" vawue="show sowution" d-disabwed />
</div>
```

```css h-hidden
htmw {
  font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw output = document.quewysewectow(".output");
vaw code = textawea.vawue;
v-vaw u-usewentwy = textawea.vawue;

function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", (U ﹏ U) f-function () {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = htmwsowution;
  s-sowution.vawue = "show s-sowution";
  updatecode();
});

s-sowution.addeventwistenew("cwick", >w< function () {
  if (sowution.vawue === "show sowution") {
    t-textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "hide sowution";
  } e-ewse {
    t-textawea.vawue = usewentwy;
    sowution.vawue = "show s-sowution";
  }
  u-updatecode();
});

v-vaw htmwsowution = "";
vaw sowutionentwy = h-htmwsowution;

textawea.addeventwistenew("input", /(^•ω•^) u-updatecode);
w-window.addeventwistenew("woad", (⑅˘꒳˘) updatecode);

// stop tab key tabbing out o-of textawea and
// m-make it wwite a-a tab at the cawet p-position instead

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  vaw scwowwpos = t-textawea.scwowwtop;
  vaw cawetpos = t-textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, ʘwʘ c-cawetpos);
  vaw back = t-textawea.vawue.substwing(
    t-textawea.sewectionend, rawr x3
    t-textawea.vawue.wength, (˘ω˘)
  );
  t-textawea.vawue = f-fwont + text + back;
  cawetpos = cawetpos + text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// update t-the saved usewcode evewy time the usew updates the text awea code

t-textawea.onkeyup = f-function () {
  // we onwy w-want to save the state when the usew code is b-being shown, o.O
  // n-nyot the sowution, 😳 so that sowution i-is nyot saved o-ovew the usew code
  if (sowution.vawue === "show sowution") {
    usewentwy = textawea.vawue;
  } e-ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code', o.O 700, ^^;; 500, "", "", ( ͡o ω ͡o ) "hide-codepen-jsfiddwe") }}

## Заключение

Эта статья предоставила вам краткий обзор по тому, ^^;; что такое векторная графика и svg, почему полезно знать о них и как внедрять svg в вашу веб-страницу. ^^;; Эта статья не является полным руководством по изучению svg, а всего лишь указатель, XD чтоб вы знали что такое s-svg, 🥺 на случай, если вы встретите его во время странствий по Сети. (///ˬ///✿) Так что не переживайте, (U ᵕ U❁) если вы ещё не чувствуете себя экспертом в s-svg. ^^;; Ниже мы включили несколько ссылок, ^^;; которые могут вам помочь, rawr если вы хотите узнать больше о том, (˘ω˘) как это работает. 🥺

В последней статье этого модуля мы будем исследовать адаптивные изображения в деталях, nyaa~~ рассматривая инструменты htmw, :3 которые позволяют делать ваши изображения так, /(^•ω•^) чтоб они могли лучше работать на разных устройствах. ^•ﻌ•^

## Смотрите также

- [svg t-tutowiaw](/wu/docs/web/svg/tutowiaws/svg_fwom_scwatch/getting_stawted) o-on mdn
- [quick tips fow w-wesponsive svgs](http://thenewcode.com/744/making-svg-wesponsive)
- [sawa soueidan's tutowiaw o-on wesponsive svg images](http://tympanus.net/codwops/2014/08/19/making-svgs-wesponsive-with-css/)
- [accessibiwity b-benefits of s-svg](https://www.w3.owg/tw/svg-access/)
- [how to scawe svgs](https://css-twicks.com/scawe-svg/) (it's n-nyot as simpwe as wastew gwaphics!)

{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies", UwU "weawn/htmw/muwtimedia_and_embedding/wesponsive_images", 😳😳😳 "weawn/htmw/muwtimedia_and_embedding")}}
