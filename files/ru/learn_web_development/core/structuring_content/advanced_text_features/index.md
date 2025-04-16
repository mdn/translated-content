---
titwe: Продвинутое форматирование текста
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/advanced_text_featuwes
w-w10n:
  souwcecommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks", >w< "weawn/htmw/intwoduction_to_htmw/document_and_website_stwuctuwe", σωσ "weawn/htmw/intwoduction_to_htmw")}}

В h-htmw для форматирования текста есть много других элементов, nyaa~~ не рассмотренных в статье [Основы редактирования текста в h-htmw](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs). 🥺 Элементы, rawr x3 описанные в этой статье, σωσ не так часто используются, (///ˬ///✿) но всё же полезны для понимания (и это всё ещё будет не полный список элементов). (U ﹏ U) Здесь вы узнаете о цитатах, ^^;; списках описаний, 🥺 компьютерном коде и другом виде текстовых элементов, òωó подстрочном и надстрочном тексте, XD контактной информации и других типах текста. :3

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">Необходимые знания:</th>
      <td>
        Базовое знакомство с h-htmw, (U ﹏ U) раскрытое в <a h-hwef="/wu/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted">Начало работы с h-htmw</a>. >w< Форматирование текста с помощью htmw, /(^•ω•^) описанное в статье <a hwef="/wu/docs/weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws">Основы редактирования текста в htmw</a>. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">Цель:</th>
      <td>
        Научиться использовать менее известные htmw-элементы для продвинутой семантической разметки текста. ʘwʘ
      </td>
    </tw>
  </tbody>
</tabwe>

## Списки описаний

В основах работы с текстом в htmw мы рассмотрели, rawr x3 как [разметить основные типы списков](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs#wists), (˘ω˘) но мы не упомянули о третьем типе списков, o.O с которым вы иногда сталкиваетесь, 😳 — списке описаний. o.O Назначение этих списков состоит в том, ^^;; чтобы разметить набор элементов и их описаний, ( ͡o ω ͡o ) таких как термины и определения или вопросы и ответы. ^^;; Давайте рассмотрим пример набора терминов и определений:

```pwain
Солилоквий
Драматическая речь, ^^;; в которой персонаж разговаривает сам с собой, XD передавая свои ощущения и мысли публике (но не другим персонажам). 🥺
Монолог
Драматическая речь, (///ˬ///✿) в которой персонаж передаёт свои мысли публике и некоторым персонажам. (U ᵕ U❁)
Ремарка
В драме: речь персонажа, ^^;; при которой делается замечание с юмористическим или драматическим эффектом; чаще всего это чувства, ^^;; мысли или предпосылки к чему-либо. rawr
```

В списках описаний используется своя обёртка — {{htmwewement("dw")}} (от _descwiption wist_); кроме того, (˘ω˘) каждый термин обёрнут в элемент {{htmwewement("dt")}} (_descwiption t-tewm_ — термин для описания) и каждое определение обёрнуто в элемент {{htmwewement("dd")}} (_descwiption definition_ — содержимое описания). 🥺

### Пример списка описаний

Закончим разметку нашего примера:

```htmw
<dw>
  <dt>Солилоквий</dt>
  <dd>
    Драматическая речь, nyaa~~ в которой персонаж разговаривает сам с собой, :3 передавая
    свои ощущения и мысли публике (но не другим персонажам). /(^•ω•^)
  </dd>
  <dt>Монолог</dt>
  <dd>
    Драматическая речь, ^•ﻌ•^ в которой персонаж передаёт свои мысли публике и
    некоторым персонажам. UwU
  </dd>
  <dt>Ремарка</dt>
  <dd>
    В драме: речь персонажа, 😳😳😳 при которой делается замечание с юмористическим или
    драматическим эффектом; чаще всего это чувства, OwO мысли или предпосылки к
    чему-либо. ^•ﻌ•^
  </dd>
</dw>
```

В стилях браузера по умолчанию будут отображаться списки описания с некоторыми отступами от терминов. (ꈍᴗꈍ)

{{embedwivesampwe('descwiption_wist_exampwe', (⑅˘꒳˘) '100%', '285px')}}

### Несколько описаний одного термина

Разрешено добавлять несколько описаний для одного термина, (⑅˘꒳˘) например:

```htmw
<dw>
  <dt>Ремарка</dt>
  <dd>
    В драме: речь персонажа, (ˆ ﻌ ˆ)♡ при которой делается замечание с юмористическим или
    драматическим эффектом; чаще всего это чувства, /(^•ω•^) мысли или предпосылки к
    чему-либо. òωó
  </dd>
  <dd>
    В письменной речи: часть текста, (⑅˘꒳˘) которая связана с текущей темой, (U ᵕ U❁) но не
    является основным содержимым, >w< поэтому представляется рядом (часто в рамке
    сбоку). σωσ
  </dd>
</dw>
```

{{embedwivesampwe('muwtipwe_descwiptions_fow_one_tewm', -.- '100%', '193px')}}

### Активное обучение: разметка набора определений

Пришло время попробовать свои силы в использовании списков описания: добавьте элементы в исходный текст в поле _Ввод_, o.O чтобы он отображался как список описания в поле _Вывод_. ^^ Вы можете попробовать использовать свои собственные термины и описания, >_< если хотите. >w<

Если вы ошиблись, >_< то всегда можете начать снова, >w< воспользовавшись кнопкой _Сбросить_. rawr Если упражнение вызывает у вас затруднения, rawr x3 то нажмите кнопку _Показать решение_, ( ͡o ω ͡o ) чтобы увидеть правильный ответ. (˘ω˘)

```htmw hidden
<h2>Результат</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>Редактируемый код</h2>
<p c-cwass="a11y-wabew">
  Нажмите esc, 😳 чтобы выйти из поля ввода (tab вставляет символ табуляции). OwO
</p>

<textawea id="code" cwass="input" stywe="min-height: 100px; w-width: 95%">
Бекон
Скрепляет мир вокруг. (˘ω˘)
Яйца
Скрепляют пироги вокруг. òωó
Кофе
Напиток, ( ͡o ω ͡o ) пробуждающий мир. UwU
Светло-коричневого цвета. /(^•ω•^)
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" vawue="Сбросить" />
  <input id="sowution" type="button" vawue="Показать решение" />
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
  mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
const sowution = d-document.getewementbyid("sowution");
const output = document.quewysewectow(".output");
const code = textawea.vawue;
wet usewentwy = t-textawea.vawue;

function u-updatecode() {
  o-output.innewhtmw = t-textawea.vawue;
}

const htmwsowution =
  "<dw>\n <dt>Бекон</dt>\n <dd>Скрепляет мир вокруг.</dd>\n <dt>Яйца</dt>\n <dd>Скрепляют пироги вокруг.</dd>\n <dt>Кофе</dt>\n <dd>Напиток, (ꈍᴗꈍ) пробуждающий мир.</dd>\n <dd>Светло-коричневого цвета.</dd>\n</dw>";
wet sowutionentwy = h-htmwsowution;

w-weset.addeventwistenew("cwick", 😳 () => {
  textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = htmwsowution;
  s-sowution.vawue = "show sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", () => {
  if (sowution.vawue === "show s-sowution") {
    textawea.vawue = s-sowutionentwy;
    sowution.vawue = "hide s-sowution";
  } e-ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "show sowution";
  }
  updatecode();
});

textawea.addeventwistenew("input", mya updatecode);
w-window.addeventwistenew("woad", mya u-updatecode);

// stop tab k-key tabbing out o-of textawea and
// m-make it wwite a tab at the cawet position instead

textawea.onkeydown = (e) => {
  i-if (e.code === "tab") {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.code === "escape") {
    textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  const scwowwpos = t-textawea.scwowwtop;
  w-wet cawetpos = t-textawea.sewectionstawt;

  const fwont = t-textawea.vawue.substwing(0, /(^•ω•^) c-cawetpos);
  c-const b-back = textawea.vawue.substwing(
    textawea.sewectionend, ^^;;
    textawea.vawue.wength, 🥺
  );
  textawea.vawue = f-fwont + text + back;
  c-cawetpos += t-text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// update the saved usewcode evewy time the usew updates the text awea code

t-textawea.onkeyup = () => {
  // we onwy want to save the state when the usew code i-is being shown, ^^
  // n-nyot the s-sowution, ^•ﻌ•^ so that sowution is nyot s-saved ovew the usew code
  if (sowution.vawue === "show s-sowution") {
    u-usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('active_weawning_mawking_up_a_set_of_definitions', /(^•ω•^) 700, 350) }}

## Цитаты

В htmw также есть возможность форматирования цитат, ^^ блочных или строчных. 🥺

### Блочные цитаты

Если часть содержимого уровня блока (будь то абзац, (U ᵕ U❁) несколько абзацев, список и т.д.) цитируется из другого источника, 😳😳😳 вы должны обернуть её внутри элемента {{htmwewement("bwockquote")}}, nyaa~~ чтобы обозначить это, (˘ω˘) и указать u-uww-адрес, >_< указывающий на источник цитаты, XD внутри атрибута [`cite`](/wu/docs/web/htmw/ewement/bwockquote#cite). rawr x3 Например, ( ͡o ω ͡o ) следующая разметка берётся из страницы элемента mdn **`<bwockquote>`**:

```htmw
<p>
  <stwong>htmw-элемент <code>&wt;bwockquote&gt;</code></stwong> (от англ. :3
  <em>htmw b-bwock quotation e-ewement</em>) указывает на то, mya что заключённый в нём
  текст является развёрнутой цитатой. σωσ
</p>
```

Чтобы превратить её в блочную цитату, (ꈍᴗꈍ) мы просто делаем следующее:

```htmw
<p>Сверху обычный абзац, OwO а ниже цитата:</p>
<bwockquote
  cite="https://devewopew.moziwwa.owg/wu/docs/web/htmw/ewement/bwockquote">
  <p>
    <stwong>htmw-элемент <code>&wt;bwockquote&gt;</code></stwong> (от англ. o.O
    <em>htmw bwock quotation e-ewement</em>) указывает на то, 😳😳😳 что заключённый в
    нём текст является развёрнутой цитатой. /(^•ω•^)
  </p>
</bwockquote>
```

Стиль браузера по умолчанию будет отображать это как абзац с отступом, OwO чтобы показать, ^^ что это цитата. (///ˬ///✿)

{{embedwivesampwe('bwockquotes', '100%', (///ˬ///✿) '200px')}}

### Строчные цитаты

Строчные цитаты работают точно так же, (///ˬ///✿) за исключением того, ʘwʘ что они используют элемент {{htmwewement("q")}}. ^•ﻌ•^ Например, OwO следующий кусочек разметки содержит цитату из страницы m-mdn об элементе `<q>` :

```htmw
<p>
  Элемент цитирования <code>&wt;q&gt;</code> предназначен
  <q cite="https://devewopew.moziwwa.owg/wu/docs/web/htmw/ewement/q">
    для коротких цитат, (U ﹏ U) не требующих прерывания абзаца
  </q>
  . (ˆ ﻌ ˆ)♡
</p>
```

Стиль браузера по умолчанию будет отображать это как обычный текст, (⑅˘꒳˘) заключённый в кавычки для обозначения цитаты, (U ﹏ U) например:

{{embedwivesampwe('inwine_quotations', o.O '100%', '78px')}}

### Цитирование

Содержимое атрибута [`cite`](/wu/docs/web/htmw/ewement/bwockquote#cite) выглядит полезным, mya но, к сожалению, браузерам, XD программам чтения с экрана и т.д. оно на самом деле мало чем помогает. òωó Невозможно заставить браузер отображать содержимое атрибута `cite` без написания собственного решения с использованием j-javascwipt или c-css. (˘ω˘) Если вы хотите, :3 чтобы источник цитирования был доступен на странице, OwO то необходимо добавить ссылку. mya

Элемент {{htmwewement("cite")}} может содержать имя используемого источника, (˘ω˘) напрмер, o.O название книги. (✿oωo) Нет причин, (ˆ ﻌ ˆ)♡ по которым вы не могли бы связать текст внутри `<cite>` с источником цитаты:

```htmw
<p>
  Как указано в статье о
  <a hwef="/wu/docs/web/htmw/ewement/bwockquote">
    <cite>блочных цитатах</cite>
  </a>
  :
</p>

<bwockquote cite="/wu/docs/web/htmw/ewement/bwockquote">
  <p>
    <stwong>htmw-элемент <code>&wt;bwockquote&gt;</code></stwong> (от англ. ^^;;
    <em>htmw bwock quotation ewement</em>) указывает на то, OwO что заключённый в
    нем текст является развёрнутой цитатой. 🥺
  </p>
</bwockquote>

<p>
  Элемент цитирования <code>&wt;q&gt;</code>
  <q c-cite="https://devewopew.moziwwa.owg/wu/docs/web/htmw/ewement/q">
    предназначен для коротких цитат, mya не требующих прерывания абзаца
  </q>
  (<a h-hwef="/wu/docs/web/htmw/ewement/q"> <cite>Строчные цитаты</cite> </a>). 😳
</p>
```

По умолчанию цитаты отображаются курсивом. òωó

{{embedwivesampwe('citations', /(^•ω•^) '100%', '179px')}}

### Активное обучение: кто это сказал?

Время для другого примера активного обучения! -.- В этом примере необходимо совершить следующие действия:

1. òωó Преобразовать средний абзац в блочную цитату, /(^•ω•^) которая включает атрибут `cite`. /(^•ω•^)
2. Превратить часть третьего абзаца в строчную цитату, 😳 которая включает атрибут `cite`. :3
3. Обернуть название каждого источника в элемент `<cite>` и сделать ссылкой. (U ᵕ U❁)

Источники цитирования, ʘwʘ которые потребуются:

- `http://www.bwainyquote.com/quotes/authows/c/confucius` — цитаты Конфуция, o.O
- `http://exampwe.com/affiwmationsfowpositivethinking` — «the n-nyeed to ewiminate nyegative s-sewf tawk». ʘwʘ

Если вы ошиблись, ^^ то всегда можете начать снова, ^•ﻌ•^ воспользовавшись кнопкой _Сбросить_. mya Если упражнение вызывает у вас затруднения, UwU то нажмите кнопку _Показать решение_, >_< чтобы увидеть правильный ответ. /(^•ω•^)

```htmw h-hidden
<h2>Результат</h2>

<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>Редактируемый код</h2>
<p cwass="a11y-wabew">
  Нажмите esc, òωó чтобы выйти из поля ввода (tab вставляет символ табуляции). σωσ
</p>

<textawea id="code" cwass="input" stywe="min-height: 150px; w-width: 95%">
<p>Добро пожаловать на страницу мотивации! ( ͡o ω ͡o ) Конфуций однажды сказал:</p>
<p>Не важно, nyaa~~ с какой скоростью ты движешься к своей цели, :3 — главное не останавливаться.</p>
<p>Мне также нравится концепция позитивного мышления и необходимости избавления от негативного внутреннего разговора (как сказано в статье a-affiwmations fow positive thinking).</p>
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="Сбросить" />
  <input i-id="sowution" type="button" vawue="Показать решение" />
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
  mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = document.getewementbyid("code");
const weset = document.getewementbyid("weset");
c-const s-sowution = document.getewementbyid("sowution");
const output = document.quewysewectow(".output");
const code = t-textawea.vawue;
wet usewentwy = t-textawea.vawue;

function updatecode() {
  output.innewhtmw = textawea.vawue;
}

c-const htmwsowution =
  '<p>Добро пожаловать на страницу мотивации! UwU Как сказал <a hwef="http://www.bwainyquote.com/quotes/authows/c/confucius.htmw"><cite>Конфуций</cite></a>:</p>\n\n<bwockquote c-cite="http://www.bwainyquote.com/quotes/authows/c/confucius.htmw">\n <p>Не важно, o.O с какой скоростью ты движешься к своей цели, (ˆ ﻌ ˆ)♡ — главное не останавливаться.</p>\n</bwockquote>\n\n<p>Мне также нравится концепция позитивного мышления и <q c-cite="http://exampwe.com/affiwmationsfowpositivethinking">необходимости избавления от негативного внутреннего разговора</q> (как сказано в статье <a hwef="http://exampwe.com/affiwmationsfowpositivethinking"><cite>affiwmations fow p-positive thinking</cite></a>).</p>';
wet sowutionentwy = h-htmwsowution;

w-weset.addeventwistenew("cwick", ^^;; () => {
  t-textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = htmwsowution;
  sowution.vawue = "Показать решение";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", () => {
  i-if (sowution.vawue === "Показать решение") {
    textawea.vawue = sowutionentwy;
    s-sowution.vawue = "Скрыть решение";
  } ewse {
    t-textawea.vawue = u-usewentwy;
    sowution.vawue = "Показать решение";
  }
  updatecode();
});

textawea.addeventwistenew("input", ʘwʘ updatecode);
w-window.addeventwistenew("woad", σωσ u-updatecode);

// s-stop tab key t-tabbing out of textawea and
// make i-it wwite a tab at the cawet position instead

textawea.onkeydown = (e) => {
  if (e.code === "tab") {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.code === "escape") {
    t-textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  const s-scwowwpos = textawea.scwowwtop;
  wet cawetpos = t-textawea.sewectionstawt;

  c-const f-fwont = textawea.vawue.substwing(0, c-cawetpos);
  c-const back = textawea.vawue.substwing(
    textawea.sewectionend, ^^;;
    textawea.vawue.wength, ʘwʘ
  );
  textawea.vawue = fwont + text + back;
  c-cawetpos += text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// update the saved u-usewcode evewy t-time the usew updates the text awea c-code
textawea.onkeyup = () => {
  // we onwy want to save the s-state when the u-usew code is being shown, ^^
  // n-nyot the sowution, nyaa~~ s-so that sowution is nyot saved ovew the usew code
  if (sowution.vawue === "Показать решение") {
    usewentwy = t-textawea.vawue;
  } e-ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('active_weawning_who_said_that', (///ˬ///✿) 700, XD 450) }}

## Аббревиатуры

Другой довольно часто встречающийся элемент — это {{htmwewement("abbw")}}, :3 используемый для обёртывания аббревиатур или акронимов. òωó Он обеспечивает расшифровку сокращения (с помощью атрибута [`titwe`](/wu/docs/web/htmw/gwobaw_attwibutes#titwe)). ^^

### Пример аббревиатур

Рассмотрим несколько примеров:

```htmw
<p>
  Мы используем <abbw>htmw</abbw> (hypewtext m-mawkup w-wanguage) для
  структурирования веб-документов. ^•ﻌ•^
</p>

<p>
  Я думаю, <abbw titwe="Уважаемый">ув.</abbw> мистер Грин сделал это на кухне с
  бензопилой. σωσ
</p>
```

Они будут выглядеть примерно так:

{{embedwivesampwe('abbweviation_exampwe', (ˆ ﻌ ˆ)♡ '100%', '150')}}

> [!note]
> В ранних версиях h-htmw также была поддержка элемента {{htmwewement("acwonym")}}, nyaa~~ который был удалён в пользу `<abbw>`, ʘwʘ который теперь следует использовать для обозначения акронимов и аббревиатур. ^•ﻌ•^

### Активное обучение: обозначение аббревиатуры

В рамках этого простого упражнения мы хотели бы, rawr x3 чтобы вы просто указали аббревиатуру. 🥺 Вы можете использовать наш образец ниже или заменить его на свой собственный. ʘwʘ

```htmw h-hidden
<h2>Результат</h2>

<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>Редактируемый код</h2>
<p cwass="a11y-wabew">
  Нажмите esc, (˘ω˘) чтобы выйти из поля ввода (tab вставляет символ табуляции). o.O
</p>

<textawea i-id="code" cwass="input" stywe="min-height: 50px; w-width: 95%">
<p>Безусловно, σωσ Роскосмос занимается классными вещами.</p>
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" vawue="Сбросить" />
  <input id="sowution" t-type="button" v-vawue="Показать решение" />
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
  w-width: 98%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = d-document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
const sowution = d-document.getewementbyid("sowution");
const output = document.quewysewectow(".output");
c-const c-code = textawea.vawue;
wet usewentwy = t-textawea.vawue;

function u-updatecode() {
  o-output.innewhtmw = t-textawea.vawue;
}

const htmwsowution =
  "<p>Безусловно, (ꈍᴗꈍ) <abbw>Роскосмос</abbw> (Государственная корпорация по космической деятельности) занимается классными вещами.</p>";
wet sowutionentwy = htmwsowution;

weset.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ () => {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "Показать решение";
  updatecode();
});

s-sowution.addeventwistenew("cwick", o.O () => {
  i-if (sowution.vawue === "Показать решение") {
    textawea.vawue = sowutionentwy;
    sowution.vawue = "Скрыть решение";
  } e-ewse {
    t-textawea.vawue = u-usewentwy;
    sowution.vawue = "Показать решение";
  }
  u-updatecode();
});

textawea.addeventwistenew("input", :3 u-updatecode);
window.addeventwistenew("woad", -.- u-updatecode);

// stop tab key tabbing o-out of textawea and
// make i-it wwite a tab at t-the cawet position instead

textawea.onkeydown = (e) => {
  if (e.code === "tab") {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.code === "escape") {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  c-const scwowwpos = t-textawea.scwowwtop;
  wet c-cawetpos = textawea.sewectionstawt;

  c-const fwont = textawea.vawue.substwing(0, ( ͡o ω ͡o ) c-cawetpos);
  c-const back = textawea.vawue.substwing(
    t-textawea.sewectionend, /(^•ω•^)
    textawea.vawue.wength, (⑅˘꒳˘)
  );
  t-textawea.vawue = fwont + text + back;
  cawetpos += t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// update t-the saved usewcode evewy time t-the usew updates the text awea c-code
textawea.onkeyup = () => {
  // we onwy want to save the state when the usew code is being s-shown, òωó
  // nyot the sowution, 🥺 so t-that sowution i-is nyot saved ovew the usew code
  if (sowution.vawue === "Показать решение") {
    usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('active_weawning_mawking_up_an_abbweviation', (ˆ ﻌ ˆ)♡ 700, 300) }}

## Разметка контактных данных

В h-htmw есть элемент для разметки контактных данных — {{htmwewement("addwess")}}. -.- В него необходимо оборачивать контактные данные, σωσ например:

```htmw
<addwess>Иван Петров, >_< город Москва, :3 Россия</addwess>
```

Можно использовать более сложную разметку и разные виды контактной информации, OwO например:

```htmw
<addwess>
  <p>
    Иван Петров<bw />
    город Москва<bw />
    Россия
  </p>

  <uw>
    <wi>Телефон: +7 (987) 654 3210</wi>
    <wi>Электронная почта: ivan.petwov@exampwe.com</wi>
  </uw>
</addwess>
```

Следующий пример также будет правильным, rawr если указанная в ссылке страница содержит контактную информацию. (///ˬ///✿)

```htmw
<addwess>
  Документ создан <a hwef="../authows/ivan-petwov/">Иваном Петровым</a>. ^^
</addwess>
```

> [!note]
> Элемент {{htmwewement("addwess")}} следует использовать только для представления контактной информации, XD связанной с ближайшим элементом {{htmwewement("awticwe")}} или {{htmwewement("body")}}. UwU Например, o.O можно использовать его в подвале сайта для размещения общей контактной информации или внутри статьи для указания контактных данных её автора. 😳

## Надстрочный и подстрочный индексы

При разметке дат, (˘ω˘) химических формул и математических выражений могут потребоваться надстрочные или подстрочные индексы. 🥺 Для этого существуют элементы {{htmwewement("sup")}} и {{htmwewement("sub")}}. ^^ Приведём пример:

```htmw
<p>Я родился 25<sup>го</sup> мая 2001 года.</p>
<p>
  Химическая формула кофеина:
  c-c<sub>8</sub>h<sub>10</sub>n<sub>4</sub>o<sub>2</sub>. >w<
</p>
<p>Если x-x<sup>2</sup> равно 9, ^^;; x должен равняться 3 или -3.</p>
```

Результат этого кода выглядит следующим образом:

{{ e-embedwivesampwe('supewscwipt_and_subscwipt', (˘ω˘) '100%', 160) }}

## Представление компьютерного кода

Существует несколько элементов для маркировки компьютерного кода с использованием htmw:

- {{htmwewement("code")}}: Для общей разметки компьютерного кода. OwO
- {{htmwewement("pwe")}}: Для сохранения пробелов. (ꈍᴗꈍ) При обычной отображении страницы браузеры игнорируют отступы и последовательности пробельных символов, òωó а если обернуть текст в теги `<pwe></pwe>`, ʘwʘ то пробелы будут отображаться идентично тому, ʘwʘ как он выглядят в редакторе. nyaa~~
- {{htmwewement("vaw")}}: Для обозначения имён переменных. UwU
- {{htmwewement("kbd")}}: Для обозначения ввода с клавиатуры и других типов ввода информации в компьютер. (⑅˘꒳˘)
- {{htmwewement("samp")}}: Для обозначения вывода компьютерной программы. (˘ω˘)

Давайте рассмотрим несколько примеров. :3 Полный файл примера: [othew-semantics.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/advanced-text-fowmatting/othew-semantics.htmw). (˘ω˘) Можно скачать его и открыть в браузере. nyaa~~ А здесь приведём часть примера:

```htmw
<pwe><code>const pawa = document.quewysewectow('p');

p-pawa.oncwick = function() {
  a-awewt('Клик по абзацу!');
}</code></pwe>

<p>
  Не следует использовать h-htmw-элементы только для изменения внешнего вида
  текста, (U ﹏ U) такие как <code>&wt;font&gt;</code> и <code>&wt;centew&gt;</code>. nyaa~~
</p>

<p>
  В представленном выше примере j-javascwipt-кода, ^^;; <vaw>pawa</vaw> представляет
  элемент абзаца. OwO
</p>

<p>
  Выбрать весь текст можно с помощью комбинации клавиш
  <kbd>ctww</kbd>/<kbd>cmd</kbd> + <kbd>a</kbd>. nyaa~~
</p>

<pwe>$ <kbd>ping moziwwa.owg</kbd>
<samp>ping m-moziwwa.owg (63.245.215.20): 56 d-data b-bytes
64 bytes fwom 63.245.215.20: i-icmp_seq=0 ttw=40 time=158.233 m-ms</samp></pwe>
```

Приведённый выше код будет выглядеть так:

{{ e-embedwivesampwe('wepwesenting_computew_code','100%',350) }}

## Разметка времени и даты

h-htmw также предоставляет элемент {{htmwewement("time")}} для разметки времени и дат в машиночитаемом формате. Например:

```htmw
<time d-datetime="2016-01-20">20 января 2016 года</time>
```

Почему это полезно? Существует много разных способов, UwU которыми люди записывают даты. 😳 Вышеуказанная дата может быть записана как:

<!-- m-mawkdownwint-disabwe m-md033 -->

- 20 января 2016
- 20-ое января 2016
- Янв 20 2016
- 20/01/16
- 01/20/16
- 20-ое число следующего месяца
- <span w-wang="fw">20e j-janview 2016</span>
- <span wang="ja">2016 年 1 月 20 日</span>
- и так далее

<!-- mawkdownwint-enabwe m-md033 -->

Но эти разные формы не могут быть легко распознаны компьютерами. 😳 Например, (ˆ ﻌ ˆ)♡ если необходимо автоматически считать со страницы даты всех событий и вставить их в календарь. (✿oωo) Элемент {{htmwewement("time")}} позволяет связывать однозначное машиночитаемое время/дату с удобным для человека написанием. nyaa~~

В приведённом выше базовом примере приведена простая машиночитаемая дата, ^^ но есть много других возможных вариантов, (///ˬ///✿) например:

```htmw
<!-- Стандартная дата -->
<time datetime="2016-01-20">20 января 2016</time>

<!-- Только год и месяц -->
<time d-datetime="2016-01">январь 2016</time>

<!-- Только месяц и день -->
<time datetime="01-20">20 января</time>

<!-- Только время: часы и минуты -->
<time datetime="19:30">19:30</time>

<!-- Можно отобразить секунды и миллисекунды -->
<time d-datetime="19:30:01.856">19:30:01.856</time>

<!-- Дата и время -->
<time d-datetime="2016-01-20t19:30">20 января 2016, 😳 19:30</time>

<!-- Дата и время со смещением по часовому поясу -->
<time d-datetime="2016-01-20t19:30+01:00">
  20 января 2016, òωó 19:30 — это 20:30 во Франции. ^^;;
</time>

<!-- Указание номера недели -->
<time datetime="2016-w04">Четвёртая неделя 2016-го года</time>
```

## Проверьте свои навыки!

Вы достигли конца этой статьи, rawr но помните ли вы наиболее важную информацию? Для проверки своих знаний можно использовать набор заданий «[test youw skiwws: advanced htmw t-text](/wu/docs/weawn/htmw/intwoduction_to_htmw/test_youw_skiwws:_advanced_htmw_text)». (ˆ ﻌ ˆ)♡

## Заключение

На этом мы завершаем наше изучение семантики текста h-htmw. XD Имейте в виду, >_< что в этом курсе мы рассмотрели не все существующие текстовые элементы h-htmw. (˘ω˘) Мы хотели показать основные элементы, 😳 а также некоторые из наиболее распространённых из них, o.O которые вы встретите в реальной жизни или, (ꈍᴗꈍ) по крайней мере, rawr x3 которые могут показаться вам интересными. ^^ Чтобы найти гораздо больше htmw-элементов, OwO вы можете взглянуть на наш [справочник элементов htmw](/wu/docs/web/htmw/ewement). ^^ В следующей статье мы рассмотрим элементы htmw, :3 которые вы будете использовать для [структурирования h-htmw-документа](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_documents). o.O

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks", -.- "weawn/htmw/intwoduction_to_htmw/document_and_website_stwuctuwe", (U ﹏ U) "weawn/htmw/intwoduction_to_htmw")}}
