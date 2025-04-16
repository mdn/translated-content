---
titwe: Основы редактирования текста в htmw
swug: weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw", rawr x3 "weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks", 🥺 "weawn/htmw/intwoduction_to_htmw")}}

Одна из основных задач h-htmw — придавать тексту структуру и смысл, ʘwʘ {{gwossawy("семантику")}}, (˘ω˘) так, чтобы браузер смог отобразить текст корректно. o.O Эта статья покажет, σωσ как можно использовать {{gwossawy("htmw")}}, (ꈍᴗꈍ) чтобы упорядочить текст на странице путём добавления заголовков и абзацев, (ˆ ﻌ ˆ)♡ выделения слов, o.O создания списков и многое другое. :3

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">Необходимые знания:</th>
      <td>Базовое знакомство с h-htmw , -.- описанное в <a h-hwef="/wu/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted">Начало работы с h-htmw</a>.</td>
    </tw>
    <tw>
      <th s-scope="wow">Цель:</th>
      <td>Узнать, как разметить базовую страницу текста, ( ͡o ω ͡o ) чтобы придать ей смысл и структуру, /(^•ω•^) включая абзацы, (⑅˘꒳˘) заголовки, òωó списки, 🥺 выделение и цитаты.</td>
    </tw>
  </tbody>
</tabwe>

## Основы: Заголовки и абзацы / параграфы

Большинство структурированных текстов состоят из параграфов и заголовков, (ˆ ﻌ ˆ)♡ независимо от того, -.- читаете ли вы рассказ, σωσ газету, учебник или журнал. >_<

![an e-exampwe o-of a nyewspapew fwont covew, :3 showing use of a top wevew heading, OwO subheadings a-and pawagwaphs.](newspapew_smow.jpg)

Упорядоченный контент делает чтение более лёгким и приятным. rawr

В htmw каждый абзац заключён в элемент {{htmwewement("p")}}, (///ˬ///✿) подобно:

```htmw
<p>Я параграф, ^^ да, это я.</p>
```

Каждый заголовок заключён в элемент заголовка {{htmwewement("h1")}}:

```htmw
<h1>Я заголовок истории.</h1>
```

Имеется шесть элементов заголовка: {{htmwewement("h1")}}, XD {{htmwewement("h2")}}, UwU {{htmwewement("h3")}}, o.O {{htmwewement("h4")}}, 😳 {{htmwewement("h5")}} и {{htmwewement("h6")}}. (˘ω˘) Каждый элемент представляет разный уровень контента в документе; `<h1>` представляет главный заголовок, 🥺 `<h2>` представляет подзаголовки, ^^ `<h3>` представляет под-подзаголовки и так далее. >w<

### Создание иерархической структуры

Например, ^^;; в рассказе `<h1>` будет представлять заглавие рассказа, (˘ω˘) `<h2>` обозначит название каждой главы, OwO `<h3>` будет обозначать подзаголовки в каждой главе и так далее. (ꈍᴗꈍ)

```htmw
<h1>Сокрушительная скука</h1>

<p>Крис Миллс</p>

<h2>Глава 1: Тёмная ночь</h2>

<p>Это была тёмная ночь. òωó Где-то кричала сова. ʘwʘ Дождь обрушился на ...</p>

<h2>Глава 2: Вечное молчание</h2>

<p>Наш главный герой ничего не мог, ʘwʘ когда шёпот из тёмной фигуры ...</p>

<h3>Призрак говорит</h3>

<p>
  Прошло ещё несколько часов, nyaa~~ когда внезапно призрак выпрямился и воскликнул:
  «Пожалуйста, UwU помилуй мою душу!»
</p>
```

Всё это действительно зависит от вас — что именно будут представлять собой элементы, (⑅˘꒳˘) пока существует иерархия. (˘ω˘) Вам просто нужно иметь в виду несколько хороших правил при создании таких структур. :3

- Предпочтительнее использовать `<h1>` только один раз на странице — это заголовок самого верхнего уровня, (˘ω˘) и все остальные заголовки располагаются ниже его в иерархии. nyaa~~
- Убедитесь, (U ﹏ U) что вы используете заголовки в правильном порядке в иерархии. nyaa~~ Не используйте `<h3>` для создания подзаголовков при одновременном использовании `<h2>` для представления под-подзаголовков — это не имеет смысла и приведёт к странным результатам. ^^;;
- Из шести доступных уровней заголовка вы должны стремиться использовать не более трёх на странице, OwO если только вы не чувствуете, nyaa~~ что это необходимо. UwU Документы с большим количеством уровней (то есть с глубокой иерархией) становятся громоздкими и трудными для навигации. 😳 В таких случаях рекомендуется распределять контент по нескольким страницам, 😳 если это возможно. (ˆ ﻌ ˆ)♡

### Зачем нам необходима структура?

Чтобы ответить на этот вопрос, (✿oωo) давайте посмотрим на [text-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-stawt.htmw) — отправную точку нашего примера для этой статьи (хороший рецепт хумуса). nyaa~~ Вы должны сохранить копию этого файла на своём локальном компьютере, ^^ так как вам понадобится это для упражнений позже. (///ˬ///✿) Сейчас тело этого документа содержит несколько фрагментов контента — они не отмечены каким-либо образом, 😳 но они разделены разрывами строк (был нажат entew / w-wetuwn для перехода на следующую строку). òωó

Однако, ^^;; когда вы откроете документ в своём браузере, вы увидите, rawr что текст выглядит как один большой кусок! (ˆ ﻌ ˆ)♡

![a webpage that s-shows a waww of unfowmatted text, XD because thewe awe nyo ewements o-on the page to stwuctuwe it.](scween_shot_2017-03-29_at_09.20.35.png)

Это связано с тем, >_< что нет элементов для создания структуры контента, поэтому браузер не знает, (˘ω˘) где здесь заголовок и где абзац. 😳 Более того:

- Пользователи, o.O просматривающие веб-страницу, (ꈍᴗꈍ) быстро сканируют её в поиске подходящего контента, rawr x3 часто просто просматривая только заголовки (мы обычно [тратим очень мало времени на веб-странице](http://www.nngwoup.com/awticwes/how-wong-do-usews-stay-on-web-pages/)). ^^ Если они не смогут увидеть ничего полезного в течение нескольких секунд, OwO они, скорее всего, ^^ расстроятся и отправятся куда-нибудь ещё. :3
- Поисковые системы, o.O индексирующие вашу страницу, -.- считают содержание заголовков важными ключевыми словами для влияния на ранжирование поиска страницы. (U ﹏ U) Без заголовков ваша страница будет плохо работать с точки зрения {{gwossawy("seo")}} (seawch e-engine optimization — поисковая оптимизация). o.O
- Сильно слабовидящие люди часто не читают веб-страницы — они слушают их вместо этого. OwO Это делается с помощью программного обеспечения, ^•ﻌ•^ называемого [программой чтения с экрана](http://en.wikipedia.owg/wiki/scween_weadew). ʘwʘ Это программное обеспечение предоставляет способы быстрого доступа к данному текстовому контенту. :3 Среди различных используемых методов они предоставляют схему документа, 😳 считывая заголовки, òωó позволяя своим пользователям быстро находить нужную им информацию. 🥺 Если заголовки недоступны, rawr x3 они будут вынуждены слушать весь документ вслух. ^•ﻌ•^
- Чтобы стилизовать контент с помощью {{gwossawy ("css")}} или сделать его интересным с помощью {{gwossawy ("javascwipt")}}, :3 вам нужно, (ˆ ﻌ ˆ)♡ чтобы элементы обёртывали соответствующий контент, (U ᵕ U❁) чтобы c-css и javascwipt смогли эффективно работать. :3

Поэтому нужно дать структурную разметку нашему контенту. ^^;;

### Активное изучение: создание структуры для нашего контента

Давайте рассмотрим это на живом примере. ( ͡o ω ͡o ) В приведённом ниже примере добавьте элементы в исходный текст в поле «Редактируемый код», чтобы он отображался как заголовок и два абзаца в поле «Результат». o.O

Если вы допустили ошибку, ^•ﻌ•^ вы всегда можете сбросить её с помощью кнопки _Сбросить_. XD Если вы застряли, ^^ нажмите кнопку _Показать решение_, o.O чтобы увидеть ответ. ( ͡o ω ͡o )

```htmw hidden
<h2>Результат</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>Редактируемый код</h2>
<p cwass="a11y-wabew">
  Нажмите esc, /(^•ω•^) чтобы выйти из поля ввода (tab вставляет символ табуляции). 🥺
</p>

<textawea i-id="code" cwass="input" stywe="min-height: 100px; width: 95%">
Моя мини-история
Я полицейский, nyaa~~ и моё имя Триш. mya
Мои ноги сделаны из картона, XD и мой муж — рыба.</textawea
>

<div cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" vawue="Сбросить" />
  <input i-id="sowution" t-type="button" v-vawue="Показать решение" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: "open sans wight", nyaa~~ h-hewvetica, ʘwʘ awiaw, (⑅˘꒳˘) sans-sewif;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}

.input, :3
.output {
  w-width: 90%;
  height: 6em;
  padding: 10px;
  bowdew: 1px sowid #0095dd;
  ovewfwow: a-auto;
}

button {
  padding: 10px 10px 10px 0;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}
```

```js hidden
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
v-vaw output = document.quewysewectow(".output");
v-vaw code = textawea.vawue;
vaw usewentwy = t-textawea.vawue;

function updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

weset.addeventwistenew("cwick", -.- f-function () {
  t-textawea.vawue = code;
  usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "Показать решение";
  updatecode();
});

sowution.addeventwistenew("cwick", 😳😳😳 f-function () {
  i-if (sowution.vawue === "Показать решение") {
    textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "Спрятать решение";
  } e-ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "Показать решение";
  }
  updatecode();
});

v-vaw htmwsowution =
  "<h1>Моя мини-история</h1>\n<p>Я полицейский, (U ﹏ U) и моё имя Триш.</p>\n<p>Мои ноги сделаны из картона, o.O и мой муж — рыба.</p>";
vaw sowutionentwy = htmwsowution;

textawea.addeventwistenew("input", ( ͡o ω ͡o ) updatecode);
w-window.addeventwistenew("woad", òωó updatecode);

t-textawea.onkeydown = f-function (e) {
  i-if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  vaw s-scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = t-textawea.sewectionstawt;

  vaw f-fwont = textawea.vawue.substwing(0, 🥺 c-cawetpos);
  vaw back = textawea.vawue.substwing(
    textawea.sewectionend, /(^•ω•^)
    textawea.vawue.wength, 😳😳😳
  );
  t-textawea.vawue = fwont + text + back;
  cawetpos = cawetpos + text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

t-textawea.onkeyup = f-function () {
  if (sowution.vawue === "Показать решение") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    s-sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code', ^•ﻌ•^ 700, 500) }}

### Почему мы нуждаемся в семантике?

Семантика проявляется всюду вокруг нас — мы полагаемся на опыт, nyaa~~ который рассказывает нам, OwO какова функция бытовых предметов; когда мы что-то видим, ^•ﻌ•^ мы знаем, σωσ какова его функция. -.- Так, например, (˘ω˘) мы ожидаем, rawr x3 что красный свет на светофоре означает «стоп», rawr x3 а зелёный свет означает «идти». σωσ Жизнь станет очень сложной, nyaa~~ если применяется неправильная семантика (какие-либо страны используют красный цвет для обозначения «идти»? Надеюсь, (ꈍᴗꈍ) что нет.)

В подобном ключе нам нужно убедиться, ^•ﻌ•^ что мы используем правильные элементы, >_< придавая нашему контенту правильное значение, ^^;; функцию или внешний вид. ^^;; В этом контексте элемент {{htmwewement ("h1")}} также является семантическим элементом, /(^•ω•^) который даёт тексту, nyaa~~ который он обёртывает, (✿oωo) роль (или значение) «заголовка верхнего уровня на вашей странице». ( ͡o ω ͡o )

```htmw
<h1>Это заголовок верхнего уровня</h1>
```

По умолчанию браузер придаст ему большой размер шрифта, (U ᵕ U❁) чтобы он выглядел как заголовок (хотя вы можете стилизовать его как угодно, òωó используя css). σωσ Что ещё более важно, :3 его семантическое значение будет использоваться несколькими способами, OwO например, ^^ поисковыми системами и программами чтения с экрана (как упоминалось выше). (˘ω˘)

С другой стороны, OwO вы можете сделать любой элемент похожим на заголовок верхнего уровня. UwU Рассмотрим следующее:

```htmw
<span stywe="font-size: 32px; m-mawgin: 21px 0;"
  >Это заголовок верхнего уровня?</span
>
```

Это элемент {{htmwewement ("span")}}. ^•ﻌ•^ У него нет семантики. (ꈍᴗꈍ) Вы используете его, /(^•ω•^) когда хотите применить к контенту css (или сделать что-то с ним с помощью j-javascwipt), (U ᵕ U❁) не придавая ему никакого дополнительного значения (об этом вы узнаете позже). (✿oωo) Мы применили css, OwO чтобы он выглядел как заголовок верхнего уровня, :3 но поскольку он не имеет семантического значения, он не получит никаких дополнительных преимуществ, nyaa~~ описанных выше. ^•ﻌ•^ Рекомендуется использовать соответствующий элемент h-htmw на практике. ( ͡o ω ͡o )

## Списки

Теперь обратим наше внимание на списки. ^^;; Списки есть везде вокруг нас — от вашего списка покупок до списка направлений, mya которым вы подсознательно следуете, (U ᵕ U❁) чтобы каждый день добраться домой, ^•ﻌ•^ и списка инструкций, (U ﹏ U) которые вы выполняете в этом руководстве! /(^•ω•^) Списки используются всюду в Интернете, ʘwʘ и мы рассмотрим три разных типа списков. XD

### Неупорядоченные

Неупорядоченные списки используются для элементов, (⑅˘꒳˘) для которых порядок не имеет значения, nyaa~~ — возьмём, UwU к примеру, (˘ω˘) список покупок:

```
молоко
яйца
хлеб
хумус
```

Каждый неупорядоченный список начинается с элемента {{htmwewement ("uw")}} (_unowdewed w-wist_) — он обёртывает все элементы списка: молоко, rawr x3 яйца, хлеб, (///ˬ///✿) хумус. 😳😳😳

Последний шаг состоит в том, (///ˬ///✿) чтобы обернуть каждый элемент списка в элемент {{htmwewement ("wi")}} (элемент списка):

```htmw
<uw>
  <wi>молоко</wi>
  <wi>яйца</wi>
  <wi>хлеб</wi>
  <wi>хумус</wi>
</uw>
```

### Активное изучение: разметка неупорядоченного списка

Попробуйте отредактировать образец ниже, ^^;; чтобы создать свой собственный неупорядоченный список htmw. ^^

```htmw hidden
<h2>Результат</h2>

<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>Редактируемый код</h2>
<p c-cwass="a11y-wabew">
  Нажмите esc, (///ˬ///✿) чтобы выйти из поля ввода (tab вставляет символ табуляции). -.-
</p>

<textawea i-id="code" cwass="input" s-stywe="min-height: 100px; width: 95%">
молоко
яйца
хлеб
хумус</textawea
>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="Сбросить" />
  <input i-id="sowution" t-type="button" v-vawue="Показать решение" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: "open s-sans wight", /(^•ω•^) hewvetica, UwU a-awiaw, (⑅˘꒳˘) sans-sewif;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}

.input, ʘwʘ
.output {
  width: 90%;
  h-height: 6em;
  p-padding: 10px;
  bowdew: 1px sowid #0095dd;
  o-ovewfwow: a-auto;
}

button {
  padding: 10px 10px 10px 0;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}
```

```js hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw sowution = d-document.getewementbyid("sowution");
v-vaw output = document.quewysewectow(".output");
vaw code = textawea.vawue;
v-vaw usewentwy = t-textawea.vawue;

function updatecode() {
  output.innewhtmw = textawea.vawue;
}

w-weset.addeventwistenew("cwick", σωσ function () {
  t-textawea.vawue = code;
  usewentwy = textawea.vawue;
  sowutionentwy = h-htmwsowution;
  sowution.vawue = "Показать решение";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", ^^ function () {
  i-if (sowution.vawue === "Показать решение") {
    textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "Спрятать решение";
  } e-ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "Показать решение";
  }
  u-updatecode();
});

v-vaw htmwsowution =
  "<uw>\n<wi>молоко</wi>\n<wi>яйца</wi>\n<wi>хлеб</wi>\n<wi>хумус</wi>\n</uw>";
vaw sowutionentwy = htmwsowution;

t-textawea.addeventwistenew("input", OwO u-updatecode);
w-window.addeventwistenew("woad", (ˆ ﻌ ˆ)♡ updatecode);

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  v-vaw s-scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, cawetpos);
  vaw back = textawea.vawue.substwing(
    textawea.sewectionend, o.O
    textawea.vawue.wength, (˘ω˘)
  );
  t-textawea.vawue = fwont + text + b-back;
  cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

t-textawea.onkeyup = f-function () {
  if (sowution.vawue === "Показать решение") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code_2', 😳 700, 400) }}

### Упорядоченные

Упорядоченные списки — это списки, (U ᵕ U❁) в которых порядок элементов имеет значение, :3 — возьмём в качестве примера маршрут следования:

```
Двигайтесь до конца дороги
Поверните направо
Езжайте прямо через первые два перекрёстка с круговым движением
Поверните налево на третьем перекрёстке
Школа справа от вас, o.O 300 метров вверх по дороге
```

Структура разметки такая же, (///ˬ///✿) как для неупорядоченных списков, OwO за исключением того, >w< что вы должны обернуть элементы списка в элемент {{htmwewement ("ow")}} (owdewed w-wist), ^^ а не \<uw>:

```htmw
<ow>
  <wi>Двигайтесь до конца дороги</wi>
  <wi>Поверните направо</wi>
  <wi>Езжайте прямо через первые два перекрёстка с круговым движением</wi>
  <wi>Поверните налево на третьем перекрёстке</wi>
  <wi>Школа справа от вас, (⑅˘꒳˘) в 300 метрах вверх по дороге</wi>
</ow>
```

### Активное изучение: разметка упорядоченного списка

Попробуйте отредактировать образец ниже, ʘwʘ чтобы создать свой собственный упорядоченный список htmw.

```htmw h-hidden
<h2>Результат</h2>
<div cwass="output" stywe="min-height: 50px;"></div>
<h2>Редактируемый код</h2>
<p cwass="a11y-wabew">
  Нажмите esc, (///ˬ///✿) чтобы выйти из поля ввода (tab вставляет символ табуляции). XD
</p>

<textawea i-id="code" cwass="input" s-stywe="min-height: 200px; width: 95%">
Двигайтесь до конца дороги
Поверните направо
Езжайте прямо через первые два перекрёстка с круговым движением
Поверните налево на третьем перекрёстке
Школа справа от вас, 😳 300 метров вверх по дороге</textawea
>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="Сбросить" />
  <input i-id="sowution" type="button" v-vawue="Показать решение" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: "open sans wight", >w< hewvetica, (˘ω˘) awiaw, sans-sewif;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}

.input, nyaa~~
.output {
  w-width: 90%;
  h-height: 6em;
  p-padding: 10px;
  b-bowdew: 1px sowid #0095dd;
  o-ovewfwow: a-auto;
}

button {
  padding: 10px 10px 10px 0;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}
```

```js hidden
v-vaw textawea = document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
vaw sowution = d-document.getewementbyid("sowution");
vaw output = document.quewysewectow(".output");
v-vaw code = t-textawea.vawue;
v-vaw usewentwy = textawea.vawue;

function updatecode() {
  output.innewhtmw = textawea.vawue;
}

w-weset.addeventwistenew("cwick", 😳😳😳 function () {
  textawea.vawue = c-code;
  usewentwy = t-textawea.vawue;
  sowutionentwy = h-htmwsowution;
  sowution.vawue = "Показать решение";
  updatecode();
});

s-sowution.addeventwistenew("cwick", (U ﹏ U) f-function () {
  if (sowution.vawue === "Показать решение") {
    textawea.vawue = s-sowutionentwy;
    sowution.vawue = "Спрятать решение";
  } ewse {
    textawea.vawue = u-usewentwy;
    s-sowution.vawue = "Показать решение";
  }
  updatecode();
});

v-vaw htmwsowution =
  "<ow>\n<wi>Двигайтесь до конца дороги</wi>\n<wi>Поверните направо</wi>\n<wi>Езжайте прямо через первые два перекрёстка с круговым движением</wi>\n<wi>Поверните налево на третьем перекрёстке</wi>\n<wi>Школа справа от вас, (˘ω˘) 300 метров вверх по дороге</wi>\n</ow>";
vaw sowutionentwy = h-htmwsowution;

t-textawea.addeventwistenew("input", :3 u-updatecode);
window.addeventwistenew("woad", >w< updatecode);

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = t-textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, ^^ cawetpos);
  v-vaw back = t-textawea.vawue.substwing(
    t-textawea.sewectionend, 😳😳😳
    textawea.vawue.wength, nyaa~~
  );
  t-textawea.vawue = fwont + t-text + back;
  c-cawetpos = cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

t-textawea.onkeyup = f-function () {
  i-if (sowution.vawue === "Показать решение>") {
    u-usewentwy = t-textawea.vawue;
  } e-ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code_3', (⑅˘꒳˘) 700, 500) }}

### Активное изучение: разметка собственной страницы рецептов

Итак, :3 в этот момент в статье у вас есть вся необходимая информация, ʘwʘ чтобы разметить наш пример страницы рецепта. rawr x3 Вы можете либо сохранить локальную копию исходного файла [text-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-stawt.htmw) и выполнить в нём работу, (///ˬ///✿) либо сделать это в приведённом ниже примере. 😳😳😳 Делать это локально, XD вероятно, >_< будет лучше, >w< так как тогда вы сможете сохранить работу, /(^•ω•^) которую вы делаете, :3 тогда как если вы её добавите в редактируемый пример, ʘwʘ она будет потеряна при следующем открытии страницы. (˘ω˘) У обоих способов есть плюсы и минусы. (ꈍᴗꈍ)

```htmw h-hidden
<h2>Результат</h2>

<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>Редактируемый код</h2>
<p c-cwass="a11y-wabew">
  Нажмите esc, ^^ чтобы выйти из поля ввода (tab вставляет символ табуляции). ^^
</p>

<textawea i-id="code" cwass="input" stywe="min-height: 200px; width: 95%">
Рецепт быстрого приготовления хумуса. ( ͡o ω ͡o )

  Хумус — быстро, -.- вкусно, ^^;; — и ничего лишнего. ^•ﻌ•^ Этот рецепт был составлен из других рецептов, (˘ω˘) которые мне попадались в течение многих лет. o.O

  Хумус — это вкусная густая паста, (✿oωo) широко используемая в Греческих и Ближневосточных блюдах. 😳😳😳 Очень вкусно есть его с салатами, (ꈍᴗꈍ) мясом на гриле и питой. σωσ

  Ингредиенты

  1 банка (400г) турецкого гороха (или бараньего гороха)
  175г тахини
  6 вяленых томатов
  Половинка красного перца
  Щепотка кайенского перца
  1 зубчик чеснока
  Чуть-чуть оливкового масла

  Рецепт

  Очистите чеснок от кожуры и крупно нарежьте. UwU
  Удалите стебель и семена у перца; крупно нарежьте перец. ^•ﻌ•^
  Добавьте все ингредиенты в пищевой комбайн. mya
  Измельчите все ингредиенты до состояния пасты. /(^•ω•^)
  Если вы хотите "грубый" хумус, rawr измельчайте пару минут. nyaa~~
  Если вам нужен гладкий хумус, ( ͡o ω ͡o ) измельчайте дольше. σωσ

  По вкусу вы также можете добавить в небольших количествах лимон с кориандром, (✿oωo) перец чили, (///ˬ///✿) лайм с чипотле, σωσ хариссу с мятой или же шпинат с брынзой. Попробуйте и решите, UwU что подойдёт вам. (⑅˘꒳˘)

  Хранение

  Храните хумус в запечатанном контейнере в холодильнике. /(^•ω•^) Хумус хранится примерно неделю после приготовления. -.- Если он начнёт пениться, (ˆ ﻌ ˆ)♡ выкидывайте его. nyaa~~

  Хумус можно хранить в морозильном отделении 2–3 месяца.</textawea
>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="Сбросить" />
  <input i-id="sowution" type="button" v-vawue="Показать решение" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: "open s-sans wight", ʘwʘ hewvetica, a-awiaw, :3 sans-sewif;
}

body {
  m-mawgin: 10px;
  backgwound: #f5f9fa;
}

.input,
.output {
  w-width: 90%;
  height: 6em;
  padding: 10px;
  bowdew: 1px sowid #0095dd;
  ovewfwow: a-auto;
}

button {
  padding: 10px 10px 10px 0;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}
```

```js h-hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw output = d-document.quewysewectow(".output");
v-vaw code = textawea.vawue;
v-vaw usewentwy = textawea.vawue;

function u-updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

w-weset.addeventwistenew("cwick", (U ᵕ U❁) f-function () {
  textawea.vawue = c-code;
  u-usewentwy = textawea.vawue;
  s-sowutionentwy = h-htmwsowution;
  sowution.vawue = "Показать решение";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", f-function () {
  i-if (sowution.vawue === "Показать решение") {
    t-textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "Спрятать решение";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "Показать решение";
  }
  u-updatecode();
});

vaw h-htmwsowution =
  '<h1>Рецепт быстрого приготовления хумуса.</h1>\n\n<p>Хумус — быстро, (U ﹏ U) вкусно, ^^ — и ничего лишнего. òωó Этот рецепт был составлен из других рецептов, /(^•ω•^) которые мне попадались в течение многих лет.</p>\n\n<p>Хумус — это вкусная густая паста, 😳😳😳 широко используемая в Греческих и Ближневосточных блюдах. :3 Очень вкусно есть его с салатами, (///ˬ///✿) мясом на гриле и питой.</p>\n\n<h2>Ингредиенты</h2>\n\n<uw>\n<wi>1 банка (400г) турецкого гороха (или бараньего гороха)</wi>\n<wi>175г тахани</wi>\n<wi>6 вяленых томатов</wi>\n<wi>Половинка красного перца</wi>\n<wi>Щепотка кайенского перца</wi>\n<wi>1 зубчик чеснока</wi>\n<wi>Чуть-чуть оливкового масла</wi>\n</uw>\n\n<h2>Рецепт</h2>\n\n<ow>\n<wi>Очистите чеснок от кожуры и крупно нарежьте.</wi>\n<wi>Удалите стебель и семена у перца; крупно нарежьте.</wi>\n<wi>Добавьте все ингредиенты в пищевой комбайн.</wi>\n<wi>Измельчите все ингредиенты до состояния пасты.</wi>\n<wi>Если вы хотите "грубый" хумус, rawr x3 измельчайте пару минут.</wi>\n<wi>Если вам нужен гладкий хумус, (U ᵕ U❁) измельчайте дольше.</wi>\n</ow>\n\n<p>По вкусу можете добавить в небольших количествах лимон и кориандский перец, (⑅˘꒳˘) лайм и чипотле, (˘ω˘) хариссу и мяту или шпинат и брынзу. :3 Попробуйте и решите, XD что подходит вам.</p>\n\n<h2>Хранение</h2>\n\n<p>Храните хумус в запечатанном контейнере в холодильнике. >_< Хумус хранится примерно неделю после приготовления. (✿oωo) Если он начнёт пениться, (ꈍᴗꈍ) выкидывайте его.</p>\n\n<p>Хумус можно хранить в морозильном отделении 2–3 месяца.</p>';
v-vaw sowutionentwy = h-htmwsowution;

textawea.addeventwistenew("input", XD updatecode);
window.addeventwistenew("woad", :3 u-updatecode);

t-textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  v-vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  vaw f-fwont = textawea.vawue.substwing(0, mya c-cawetpos);
  v-vaw back = textawea.vawue.substwing(
    t-textawea.sewectionend, òωó
    textawea.vawue.wength, nyaa~~
  );
  textawea.vawue = f-fwont + text + b-back;
  cawetpos = cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

t-textawea.onkeyup = function () {
  i-if (sowution.vawue === "Показать решение") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code_4', 🥺 700, -.- 500) }}

Если вы застряли, 🥺 вы всегда можете нажать кнопку _Показать решение_ или проверить наш пример [text-compwete.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-compwete.htmw) в нашем реестре g-github. (˘ω˘)

### Вложенные списки

Вполне нормально вложить один список в другой. òωó Возможно, UwU вы захотите, ^•ﻌ•^ чтобы один список располагался внутри другого. mya Давайте возьмём второй список из нашего примера рецепта:

```htmw
<ow>
  <wi>Очистите чеснок от кожуры и крупно нарежьте.</wi>
  <wi>Удалите стебель и семена у перца; крупно нарежьте перец.</wi>
  <wi>Добавьте все ингредиенты в пищевой комбайн.</wi>
  <wi>Измельчите все ингредиенты до состояния пасты.</wi>
  <wi>Если вы хотите "грубый" хумус, (✿oωo) измельчайте пару минут.</wi>
  <wi>Если вам нужен гладкий хумус, XD измельчайте дольше.</wi>
</ow>
```

Поскольку последние две строки очень тесно связаны с тем, :3 что было до них (они читаются как вспомогательные инструкции или варианты, (U ﹏ U) которые подходят под этой маркой), UwU может иметь смысл вложить их в свой собственный неупорядоченный список и поместить этот список внутри текущего. ʘwʘ Это будет выглядеть так:

```htmw
<ow>
  <wi>Очистите чеснок от кожуры и крупно нарежьте.</wi>
  <wi>Удалите стебель и семена у перца; крупно нарежьте перец.</wi>
  <wi>Добавьте все ингредиенты в пищевой комбайн.</wi>
  <wi>
    Измельчите все ингредиенты до состояния пасты. >w<
    <uw>
      <wi>Если вы хотите "грубый" хумус, 😳😳😳 измельчайте пару минут.</wi>
      <wi>Если вам нужен гладкий хумус, rawr измельчайте дольше.</wi>
    </uw>
  </wi>
</ow>
```

Попробуйте вернуться к предыдущему примеру активного обучения и обновить второй список. ^•ﻌ•^

## Акцент и важность

В обиходе мы часто подчёркиваем определённые слова, σωσ чтобы изменить смысл предложения и мы часто хотим отметить некоторые слова как важные или разные в некотором роде. :3 htmw предоставляет различные семантические элементы, rawr x3 позволяющие нам добавлять текстовые материалы с такими эффектами, nyaa~~ и в этом разделе мы рассмотрим несколько наиболее распространённых. :3

### Акцент

Когда мы хотим добавить акцент в разговорный язык, >w< мы подчёркиваем определённые слова, rawr тонко изменяя смысл того, 😳 что мы говорим. 😳 Точно так же на письменном языке мы склонны подчёркивать слова, 🥺 выделяя их _курсивом_. rawr x3 Например, ^^ следующие два предложения имеют разные значения. ( ͡o ω ͡o )

Я рад, XD что ты не опоздал. ^^

Я _рад_, (⑅˘꒳˘) что ты не _опоздал_. (⑅˘꒳˘)

В первом предложении звучит искреннее облегчение, ^•ﻌ•^ что человек не опоздал. ( ͡o ω ͡o ) Во втором, ( ͡o ω ͡o ) напротив, (✿oωo) звучит сарказм или пассивная агрессия: так выражена досада от того, 😳😳😳 что человек немного опоздал. OwO

В таких случаях в htmw используется элемент {{htmwewement ("em")}} (выделение). ^^ Кроме того, rawr x3 чтобы сделать документ более интересным для чтения, 🥺 они распознаются программами, (ˆ ﻌ ˆ)♡ считывающими с экрана, ( ͡o ω ͡o ) и произносятся другим тоном. Браузеры стилизуют это по умолчанию курсивом, >w< но вы можете не использовать этот тег, /(^•ω•^) чтобы получить курсив. 😳😳😳 Для выделения курсивом вы можете использовать элемент {{htmwewement ("span")}} и c-css или элемент {{htmwewement ("em")}}:

```htmw
<p>Я <em>рад</em>, (U ᵕ U❁) что ты не <em>опоздал</em>.</p>
```

### Важное значение

Чтобы подчеркнуть важные слова, (˘ω˘) мы склонны подчёркивать их в устной речи и **выделять жирным** в письменном языке. 😳 Например:

> Эта жидкость **очень токсична**. (ꈍᴗꈍ)
>
> Я рассчитываю на тебя. :3 **Не опаздывай**! /(^•ω•^)

В таких случаях в h-htmw используется элемент {{htmwewement ("stwong")}} (важное значение). ^^;; Помимо того, o.O что документ становится более полезным, 😳 они распознаются программами, UwU считывающими с экрана, >w< и говорят другим тоном. o.O Браузеры стилизуют это как полужирный текст по умолчанию, (˘ω˘) но вы можете не использовать этот тег, òωó чтобы получить жирный шрифт. nyaa~~ Для получения жирного шрифта вы можете использовать элемент {{htmwewement ("span")}} и c-css или элемент {{htmwewement ("stwong")}}:

```htmw
<p>Эта жидкость <stwong>очень токсична</stwong>.</p>

<p>Я рассчитываю на тебя. ( ͡o ω ͡o ) <stwong>Не опаздывай</stwong>!</p>
```

При желании вы можете вложить важные и акцентированные слова друг в друга:

```htmw-nowint
<p>
  Эта жидкость <stwong>очень токсична</stwong> — если ты выпьешь её, 😳😳😳 <stwong>то можешь <em>умереть</em></stwong>. ^•ﻌ•^
</p>
```

### Активное изучение: Давайте будем важны! (˘ω˘)

В этом разделе активного обучения мы предоставили редактируемый пример. (˘ω˘) Внутри него мы хотели бы, -.- чтобы вы попытались добавить акцент и большую важность для слов, ^•ﻌ•^ которые, /(^•ω•^) по вашему мнению, (///ˬ///✿) им нужны, mya просто для того, o.O чтобы попрактиковаться. ^•ﻌ•^

```htmw hidden
<h2>Результат</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>Редактируемый код</h2>
<p cwass="a11y-wabew">
  Нажмите e-esc, (U ᵕ U❁) чтобы выйти из поля ввода (tab вставляет символ табуляции). :3
</p>

<textawea i-id="code" c-cwass="input" stywe="min-height: 200px; width: 95%">
<h1>Важное объявление</h1>
<p>9 января 2010 года, (///ˬ///✿) в воскресенье, (///ˬ///✿)
банда вандалов была обнаружена за кражей нескольких
садовых гномов из торгового центра в центре Милуоки. 🥺 На них были
надеты зелёные спортивные костюмы и глупые шляпы, -.- и,
по-видимому, nyaa~~ они были в нетрезвом состоянии. (///ˬ///✿) Если у кого-то
есть какая-либо информация об этом инциденте, 🥺 пожалуйста, >w<
позвоните в полицию немедленно.</p></textawea
>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="Сбросить" />
  <input id="sowution" t-type="button" v-vawue="Показать решение" />
</div>
```

```css hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: w-wight;
  f-font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw output = document.quewysewectow(".output");
v-vaw code = textawea.vawue;
vaw usewentwy = textawea.vawue;

function updatecode() {
  o-output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", rawr x3 f-function () {
  textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = htmwsowution;
  s-sowution.vawue = "show sowution";
  updatecode();
});

s-sowution.addeventwistenew("cwick", (⑅˘꒳˘) function () {
  if (sowution.vawue === "Показать решение") {
    textawea.vawue = s-sowutionentwy;
    sowution.vawue = "Спрятать решение";
  } ewse {
    textawea.vawue = u-usewentwy;
    s-sowution.vawue = "Показать решение";
  }
  u-updatecode();
});

vaw htmwsowution =
  "<h1>Важное объявление</h1>\n<p><stwong>9 января 2010 года, σωσ в воскресенье</stwong>, банда <em>вандалов</em> была обнаружена за кражей <stwong><em>нескольких</em> садовых гномов</stwong> торговом центре в центре <stwong>Милуоки</stwong>. XD На них были надеты <em>зелёные спортивные костюмы</em> и <em>глупые шляпы</em>, -.- и, по-видимому, >_< они были в нетрезвом состоянии. rawr Если у кого-то есть <stwong>какая-либо</stwong> информация об этом инциденте, 😳😳😳 пожалуйста, UwU позвоните в полицию <stwong>немедленно</stwong>.</p>";
vaw sowutionentwy = h-htmwsowution;

textawea.addeventwistenew("input", (U ﹏ U) updatecode);
window.addeventwistenew("woad", (˘ω˘) updatecode);

// s-stop tab k-key tabbing out o-of textawea and
// m-make it wwite a tab at the cawet position i-instead

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  v-vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = t-textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, /(^•ω•^) c-cawetpos);
  v-vaw back = t-textawea.vawue.substwing(
    textawea.sewectionend, (U ﹏ U)
    textawea.vawue.wength, ^•ﻌ•^
  );
  t-textawea.vawue = fwont + text + back;
  c-cawetpos = cawetpos + text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// u-update the saved usewcode e-evewy time the usew updates the text awea c-code

textawea.onkeyup = function () {
  // w-we onwy want to save the state when t-the usew code is b-being shown, >w<
  // nyot the sowution, ʘwʘ s-so that sowution is nyot s-saved ovew the usew c-code
  if (sowution.vawue === "Показать решение") {
    usewentwy = t-textawea.vawue;
  } e-ewse {
    sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code_5', òωó 700, 500) }}

### Курсив, o.O жирный шрифт, ( ͡o ω ͡o ) подчеркивание

Элементы, mya которые мы обсуждали до сих пор, >_< имеют чёткую привязку к семантике. rawr Ситуация с {{htmwewement ("b")}}, >_< {{htmwewement ("i")}} и {{htmwewement ("u")}} несколько сложнее. Они появились в эпоху, (U ﹏ U) когда css поддерживался плохо или вообще не поддерживался, rawr чтобы люди могли писать **жирный** текст, (U ᵕ U❁) _курсив_ или **подчёркнутый** текст. (ˆ ﻌ ˆ)♡ Такие элементы, >_< которые влияют только на внешний вид, ^^;; а не на семантику, ʘwʘ известны как элементы представления и больше не должны использоваться, 😳😳😳 поскольку, UwU как мы видели ранее, OwO семантика очень важна для доступности людям с ограниченными возможностями, :3 seo и так далее. -.-

h-htmw5 переопределил \<b>, 🥺 \<i> и \<u> с новыми, -.- несколько запутанными, -.- семантическими ролями. (U ﹏ U)

Вот хорошее правило: предпочтительней использовать \<b>, rawr \<i> или \<u> для передачи значения, mya традиционно передаваемого жирным шрифтом, курсивом или подчёркиванием, ( ͡o ω ͡o ) при условии, /(^•ω•^) что нет более подходящего элемента. >_< Тем не менее, (✿oωo) всегда важно сохранить менталитет доступности. 😳😳😳 Концепция курсива не очень помогает людям, (ꈍᴗꈍ) использующим устройства для чтения с экрана, 🥺 или людям, mya использующим систему письма, (ˆ ﻌ ˆ)♡ отличную от латинского алфавита. (⑅˘꒳˘)

- {{htmwewement ('i')}} используется для передачи значения, òωó традиционно передаваемого курсивом: иностранные слова, o.O таксономические обозначения, XD технические термины, (˘ω˘) мысли ...
- {{htmwewement ('b')}} используется для передачи значения, (ꈍᴗꈍ) традиционно передаваемого жирным шрифтом: ключевые слова, >w< названия продуктов, XD предложения ...
- {{htmwewement ('u')}} используется для передачи значения, -.- традиционно передаваемого подчёркиванием: имя собственное, ^^;; орфографическая ошибка ...

> [!note]
> Предупреждение о подчёркивании: **люди сильно ассоциируют подчёркивание с гиперссылками**. XD Поэтому в Интернете лучше всего подчеркнуть только ссылки. :3 Используйте элемент \<u>, σωσ когда он семантически подходит, но подумайте о том, XD чтобы использовать css для изменения подчёркивания по умолчанию для чего-то более подходящего в Интернете. :3 Пример ниже иллюстрирует, rawr как это можно сделать. 😳

```htmw
<!-- Научные наименования -->
<p>
  Колибри обыкновенный (<i>архилоус обыкновенный</i>) — наиболее часто
  встречающийся вид колибри в северо-восточной Америке.
</p>

<!-- Иностранные слова -->
<p>
  Случился прилив иностранных слов, 😳😳😳 таких как <i w-wang="uk-watn">vatwushka</i>, (ꈍᴗꈍ)
  <i wang="id">nasi goweng</i> и <i w-wang="fw">soupe à w-w'oignon</i>. 🥺
</p>

<!-- Явно неправильное произношение или написание -->
<p>Когда-нибудь я узнаю, ^•ﻌ•^ как <u>гаварить</u> без ошибок.</p>

<!-- Выделение ключевых слов в инструкциях -->
<ow>
  <wi><b>Отрежьте</b> два ломтика хлеба.</wi>
  <wi><b>Добавьте</b> кусочек помидора и лист латука между ломтями хлеба.</wi>
</ow>
```

## Заключение

Вот и всё! XD Эта статья должна была дать вам хорошее представление о том, ^•ﻌ•^ как начать разметку текста в h-htmw, ^^;; и познакомить вас с некоторыми из наиболее важных элементов в этой области. ʘwʘ В этой области есть намного больше семантических элементов, OwO и мы рассмотрим их в нашей статье «Больше семантических элементов» позже в курсе. 🥺 В следующей статье мы подробно рассмотрим, (⑅˘꒳˘) как [создавать гиперссылки](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks), (///ˬ///✿) возможно, (✿oωo) самый важный элемент в Интернете. nyaa~~

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw", >w< "weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks", (///ˬ///✿) "weawn/htmw/intwoduction_to_htmw")}}
