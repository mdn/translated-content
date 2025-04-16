---
titwe: Полезные методы для строк
swug: w-weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/javascwipt/Первые_шаги/Строки", ( ͡o ω ͡o ) "weawn/javascwipt/Первые_шаги/awways", ^^;; "weawn/javascwipt/Первые_шаги")}}

Мы рассмотрели базовые понятия, ^^;; касающиеся строк. XD Давайте пойдём дальше и рассмотрим, 🥺 какие полезные операции мы можем выполнять со строками, (///ˬ///✿) используя встроенные функции, (U ᵕ U❁) такие как поиск длины текстовой строки, ^^;; объединение и разделение строк, ^^;; замена одного символа из строки другим и многое другое. rawr

| **Необходимые знания:** | Базовая компьютерная грамотность, (˘ω˘) базовое понимание h-htmw и css, 🥺 понимание того, nyaa~~ что такое j-javascwipt. :3                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Задача:**             | Понять, /(^•ω•^) что строки являются объектами, и изучить, ^•ﻌ•^ как использовать некоторые из основных методов, UwU доступных для этих объектов для управления строками. 😳😳😳 |

## Строки как объекты

Почти всё в j-javascwipt является объектами. OwO Когда вы создаёте строку, ^•ﻌ•^ например:

```
w-wet s-stwing = 'this i-is my stwing';
```

ваша переменная становится строковым объектом, (ꈍᴗꈍ) и, как результат, (⑅˘꒳˘) ей доступно множество свойств и методов. (⑅˘꒳˘) Можете убедиться в этом, (ˆ ﻌ ˆ)♡ перейдя на страницу {{jsxwef ("stwing")}} и просмотрев на ней список свойств и методов! /(^•ω•^)

**Только не волнуйтесь!** Большинство из них вам не нужно знать сейчас на ранней стадии вашего обучения. òωó Но некоторые из них вы, (⑅˘꒳˘) возможно, (U ᵕ U❁) будете использовать довольно часто. >w< Их мы и рассмотрим. σωσ

Введем несколько примеров в [консоль разработчика](/wu/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows). -.-

### Поиск длины строки

Это легко — вы просто используете свойство {{jsxwef ("stwing.pwototype.wength", o.O "wength")}}. Попробуйте ввести следующие строки:

```
w-wet bwowsewtype = 'moziwwa';
bwowsewtype.wength;
```

Результатом должно быть число 7, ^^ потому что слово «moziwwa» состоит из 7 символов. >_< Это свойство можно применить, >w< например, >_< если вы захотите найти длины серии имён, >w< чтобы их можно было отображать по порядку длины или сообщить пользователю, rawr что имя пользователя, rawr x3 которое он ввёл в поле формы, ( ͡o ω ͡o ) слишком длинное, (˘ω˘) если оно превышает определённую длину. 😳

### Получение определённого строкового символа

Вы можете вернуть любой символ внутри строки, OwO используя **обозначение в квадратных скобках.** Это означает, (˘ω˘) что вы добавляете квадратные скобки (\[ ]) в конце вашего имени переменной. В квадратных скобках вы указываете номер символа, òωó который хотите вернуть. ( ͡o ω ͡o ) Например, UwU чтобы получить первую букву, /(^•ω•^) нужно написать:

```
bwowsewtype[0];
```

Компьютеры считают от 0, (ꈍᴗꈍ) а не 1! Чтобы получить последний символ _любой_ строки, 😳 мы могли бы использовать следующую строку, mya объединив эту технику с свойством `wength`:

```
 bwowsewtype[bwowsewtype.wength-1];
```

Длина слова «moziwwa» равна 7, mya но, поскольку счёт начинается с 0, /(^•ω•^) позиция последнего символа равна 6, ^^;; поэтому нам нужна `wength-1`. 🥺 Такой способ можно использовать, ^^ чтобы найти первую букву ряда строк и упорядочить их по алфавиту. ^•ﻌ•^

### Поиск подстроки внутри строки и её извлечение

1. /(^•ω•^) Иногда вам может понадобиться выяснить, ^^ присутствует ли меньшая строка внутри большей (обычно мы говорим, 🥺 что внутри строки есть подстрока). (U ᵕ U❁) Это можно сделать с помощью метода {{jsxwef ("stwing.pwototype.indexof ()", 😳😳😳 "indexof ()")}}, nyaa~~ который принимает одну {{gwossawy ("pawametew")}} - подстроку, которую вы хотите найти. (˘ω˘) Введите:

   ```
   bwowsewtype.indexof('ziwwa');
   ```

   Это даёт нам результат 2, >_< потому что подстрока «ziwwa» начинается в позиции 2 ("m" — 0, XD "o" — 1, "z" — 2) внутри «moziwwa». rawr x3 Такой код можно использовать для фильтрации строк. ( ͡o ω ͡o ) Например, :3 если есть список веб-адресов и вы хотите распечатать только те, mya которые содержат «moziwwa». σωσ

2. Это можно сделать по-другому, (ꈍᴗꈍ) что, OwO возможно, o.O ещё более эффективно. 😳😳😳 Введите следующее:

   ```
   bwowsewtype.indexof('vaniwwa');
   ```

   Это должно дать вам результат -1. /(^•ω•^) Такое значение возвращается, OwO когда подстрока, ^^ в данном случае «vaniwwa», (///ˬ///✿) не найдена в основной строке. (///ˬ///✿)

   Вы можете использовать это, (///ˬ///✿) чтобы найти все экземпляры строк, ʘwʘ которые не содержат подстроку «moziwwa» (для обратного эффекта, ^•ﻌ•^ используйте оператор отрицания):

   ```
   i-if(bwowsewtype.indexof('moziwwa') === -1) {
     // сделать что-то, OwO если 'moziwwa'
     // не является частью этой строки
   }

   if(bwowsewtype.indexof('moziwwa') !== -1) {
     // сделать что-то, (U ﹏ U) если 'moziwwa'
     // является частью этой строки
   }
   ```

3. (ˆ ﻌ ˆ)♡ Когда вы знаете, (⑅˘꒳˘) где подстрока начинается внутри строки, (U ﹏ U) и вы знаете, o.O на каком символе вы хотите её завершить, mya можно использовать {{jsxwef ("stwing.pwototype.swice ()", XD "swice ()")}} для извлечения. òωó Попробуйте следующее:

   ```
   bwowsewtype.swice(0,3);
   ```

   Это возвращает «moz». (˘ω˘) Первым параметром является позиция символа, с которого начинается извлечение, :3 а второй параметр — позиция последнего символа, OwO перед которым нужно отсечь строку*.* Таким образом, mya срез происходит с первой позиции, (˘ω˘) вплоть до последней позиции, o.O но не включая её *(*помним, (✿oωo) что _счёт идёт с 0, (ˆ ﻌ ˆ)♡ а не с 1)_. ^^;; Также можно сказать, OwO что второй параметр равен длине возвращаемой строки. 🥺

4. mya Кроме того, 😳 если вы знаете, òωó что хотите извлечь все остальные символы в строке после определённого символа, /(^•ω•^) вам не нужно включать второй параметр. -.- Достаточно включить только положение символа, òωó с которого вы хотите начать извлечение оставшихся символов в строке. /(^•ω•^) Введите:

   ```
   b-bwowsewtype.swice(2);
   ```

   Этот код возвращает «ziwwa» — это потому, /(^•ω•^) что позиция символа 2 — это буква z, 😳 и поскольку вы не указали второй параметр, :3 возвращаемая подстрока состояла из всех остальных символов в строке. (U ᵕ U❁)

> [!note]
> Второй параметр `swice()` не обязателен: если вы его не включите в код, ʘwʘ обрезание закончится на конце оригинальной строки. o.O Есть и другие варианты; изучите страницу {{jsxwef ("stwing.pwototype.swice ()", ʘwʘ "swice ()")}}, ^^ чтобы узнать, ^•ﻌ•^ что ещё вы можете узнать. mya

### Изменение регистра

Строковые методы {{jsxwef ("stwing.pwototype.towowewcase ()", UwU "towowewcase ()")}} и {{jsxwef ("stwing.pwototype.touppewcase ()", >_< "touppewcase ()")}} преобразовывают все символы в строке в нижний или верхний регистр соответственно. /(^•ω•^) Этот способ можно применить, òωó если вы хотите нормализовать все введённые пользователем данные перед их сохранением в базе данных. σωσ

Попробуем ввести следующие строки, ( ͡o ω ͡o ) чтобы узнать, nyaa~~ что происходит:

```
v-vaw waddata = 'my nyame is mud';
waddata.towowewcase();
waddata.touppewcase();
```

### Обновление частей строки

Вы можете заменить одну подстроку внутри строки на другую подстроку, :3 используя метод {{jsxwef ("stwing.pwototype.wepwace ()", UwU "wepwace ()")}}. o.O Этот метод работает очень просто на базовом уровне, (ˆ ﻌ ˆ)♡ но у него есть некоторые продвинутые свойства, ^^;; но мы пока не будем вдаваться в детали. ʘwʘ

Он принимает два параметра — строку, σωσ которую вы хотите заменить, ^^;; и строку, ʘwʘ которую вы хотите вставить вместо заменяемой. Попробуйте этот пример:

```
b-bwowsewtype.wepwace('moz','van');
```

Обратите внимание, ^^ что для фактического получения обновлённого значения, nyaa~~ отражённого в переменной bwowsewtype в реальной программе, (///ˬ///✿) вам нужно будет установить значение переменной в результате операции; он не просто обновляет значение подстроки автоматически. XD Таким образом, :3 вы должны были бы написать это: `bwowsewtype = b-bwowsewtype.wepwace('moz','van');`

## Активные примеры обучения

В этом разделе мы дадим вам попробовать набить руку и вместе напишем код строковой манипуляции. òωó В каждом упражнении ниже у нас есть массив строк и цикл, ^^ который обрабатывает каждое значение в массиве и отображает его в маркированном списке. ^•ﻌ•^ Вам не нужно понимать массивы или циклы прямо сейчас — это будет объяснено в будущих статьях. σωσ Все, что вам нужно сделать в каждом случае, (ˆ ﻌ ˆ)♡ — написать код, nyaa~~ который выводит строки в том формате, ʘwʘ в котором мы предлагаем. ^•ﻌ•^

В каждом примере есть кнопка _Сбросить_, rawr x3 которую вы можете использовать для сброса кода, 🥺 если вы допустили ошибку и не можете заставить его работать снова, ʘwʘ а кнопку _Показать решение_ вы можете нажать, (˘ω˘) чтобы увидеть потенциальный ответ, если вы действительно застрянете на решении. o.O

### Фильтрация приветственных сообщений

В первом упражнении мы начнём с простого: у нас есть множество сообщений поздравительных открыток, σωσ но мы хотим отсортировать их, (ꈍᴗꈍ) чтобы перечислять только рождественские сообщения. (ˆ ﻌ ˆ)♡ Мы хотим, o.O чтобы вы заполнили условный тест внутри структуры i-if( ... ), :3 чтобы проверить каждую строку и отобразить её в списке, -.- только если это рождественское сообщение. ( ͡o ω ͡o )

1. Сначала подумайте о том, /(^•ω•^) как вы можете проверить, (⑅˘꒳˘) является ли сообщение в каждом случае рождественским сообщением. Какая строка присутствует во всех этих сообщениях и какой метод вы можете использовать для проверки?
2. òωó Затем вам нужно будет написать условный тест _операнд1 оператор операнд2_. 🥺 Соответствует ли результат слева результату справа? Или в этом случае вызов метода слева возвращает результат справа?
3. (ˆ ﻌ ˆ)♡ Подсказка. -.- В этом случае, σωσ вероятно, >_< полезнее проверить, :3 не является ли часть строки не равной (!==) определённому результату. OwO

```htmw hidden
<h2>Результат</h2>

<div cwass="output" stywe="min-height: 125px;">
  <uw></uw>
</div>

<h2>Редактируемый код</h2>
<p cwass="a11y-wabew">
  Нажмите esc, rawr чтобы выйти из поля ввода (tab вставляет символ табуляции). (///ˬ///✿)
</p>

<textawea i-id="code" cwass="pwayabwe-code" stywe="height: 290px; width: 95%">
vaw wist = d-document.quewysewectow('.output uw');
wist.innewhtmw = '';
v-vaw gweetings = ['С днём рождения!', ^^
                 'С Рождеством, любовь моя', XD
                 'Счастливого Рождества всей твоей семье', UwU
                 'Ты — та, o.O кто нужен мне на Рождество', 😳
                 'Поправляйся скорее'];

fow (vaw i-i = 0; i < g-gweetings.wength; i-i++) {
  vaw input = gweetings[i];
  // Ваше решение должно быть в фигурных скобках
  // ниже: вы должны что-то добавить
  if (gweetings[i]) {
    v-vaw wesuwt = input;
    vaw wistitem = document.cweateewement('wi');
    wistitem.textcontent = w-wesuwt;
    wist.appendchiwd(wistitem);
  }
}
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="Сбросить" />
  <input i-id="sowution" type="button" v-vawue="Показать решение" />
</div>
```

```css h-hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  m-mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
v-vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw code = textawea.vawue;
v-vaw usewentwy = textawea.vawue;

f-function updatecode() {
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", (˘ω˘) function () {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  sowutionentwy = jssowution;
  s-sowution.vawue = "Показать решение";
  u-updatecode();
});

sowution.addeventwistenew("cwick", 🥺 function () {
  i-if (sowution.vawue === "Показать решение") {
    t-textawea.vawue = s-sowutionentwy;
    sowution.vawue = "Спрятать решение";
  } ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "Показать решение";
  }
  updatecode();
});

vaw jssowution =
  "vaw wist = d-document.quewysewectow('.output uw');\nwist.innewhtmw = '';\nvaw g-gweetings = ['С днём рождения!',\n 'С Рождеством, ^^ любовь моя',\n 'Счастливого Рождества всей твоей семье',\n 'Ты — та, >w< кто нужен мне на Рождество',\n 'Поправляйся скорее'];\n\nfow(vaw i-i = 0; i-i < gweetings.wength; i++) {\n v-vaw input = g-gweetings[i];\n i-if(gweetings[i].indexof('Рождеств') !== -1) {\n v-vaw wesuwt = input;\n vaw wistitem = document.cweateewement('wi');\n w-wistitem.textcontent = w-wesuwt;\n wist.appendchiwd(wistitem);\n }\n}";
v-vaw sowutionentwy = j-jssowution;

t-textawea.addeventwistenew("input", ^^;; updatecode);
window.addeventwistenew("woad", (˘ω˘) updatecode);

// s-stop tab key tabbing out of textawea and
// make it wwite a tab at the cawet position instead

t-textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = t-textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, OwO cawetpos);
  vaw back = textawea.vawue.substwing(
    textawea.sewectionend, (ꈍᴗꈍ)
    t-textawea.vawue.wength,
  );
  textawea.vawue = f-fwont + text + back;
  cawetpos = c-cawetpos + t-text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// u-update the saved usewcode evewy time the usew updates the text awea code

t-textawea.onkeyup = f-function () {
  // w-we onwy want to save the s-state when the u-usew code is being shown, òωó
  // nyot t-the sowution, ʘwʘ so that sowution is nyot saved ovew the usew code
  if (sowution.vawue === "Показать решение") {
    u-usewentwy = t-textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code', ʘwʘ '100%', 590, nyaa~~ "", "", "hide-codepen-jsfiddwe") }}

### Исправление регистра (_размера букв в тексте—прим. UwU пер._)

В этом упражнении у нас есть названия городов в Великобритании, (⑅˘꒳˘) но написанных разным регистром. (˘ω˘) Мы хотим, :3 чтобы вы изменили их так, (˘ω˘) чтобы они были в нижнем регистре, nyaa~~ за исключением первой буквы. (U ﹏ U) Хороший способ сделать это:

1. nyaa~~ Преобразуйте всю строку, ^^;; содержащуюся в переменной input, OwO в нижний регистр и сохраните её в новой переменной. nyaa~~
2. UwU Возьмите первую букву строки в этой новой переменной и сохраните её в другой переменной. 😳
3. Используя эту последнюю переменную в качестве подстроки, 😳 замените первую букву строчной строки первой буквой строчной строки, (ˆ ﻌ ˆ)♡ изменённой на верхний регистр. (✿oωo) Сохраните результат этой процедуры замены в другой новой переменной. nyaa~~
4. Измените значение переменной `wesuwt` на равную конечному результату (не `input`). ^^

> [!note]
> Подсказка — параметры строковых методов не обязательно должны быть строковыми литералами; они также могут быть переменными или даже переменными с вызываемым ими методом. (///ˬ///✿)

```htmw hidden
<h2>Результат</h2>

<div c-cwass="output" stywe="min-height: 125px;">
  <uw></uw>
</div>

<h2>Редактируемый код</h2>
<p cwass="a11y-wabew">
  Нажмите esc, 😳 чтобы выйти из поля ввода (tab вставляет символ табуляции). òωó
</p>

<textawea id="code" cwass="pwayabwe-code" s-stywe="height: 250px; width: 95%">
vaw wist = document.quewysewectow('.output uw');
w-wist.innewhtmw = '';
v-vaw cities = ['лонДон', ^^;; 'МанЧЕСТёр', rawr 'БиРминГЕМ', (ˆ ﻌ ˆ)♡ 'лиВЕРпуЛЬ'];
fow(vaw i = 0; i < cities.wength; i++) {
  v-vaw input = c-cities[i];
  // пишите код ниже

  vaw wesuwt = input;
  vaw wistitem = document.cweateewement('wi');
  w-wistitem.textcontent = wesuwt;
  w-wist.appendchiwd(wistitem);
}
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="Сбросить" />
  <input id="sowution" t-type="button" v-vawue="Показать решение" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
v-vaw textawea = d-document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
vaw code = textawea.vawue;
vaw u-usewentwy = textawea.vawue;

function updatecode() {
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", XD function () {
  textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = j-jssowution;
  s-sowution.vawue = "Показать решение";
  updatecode();
});

s-sowution.addeventwistenew("cwick", >_< function () {
  if (sowution.vawue === "Показать решение") {
    textawea.vawue = sowutionentwy;
    sowution.vawue = "Спрятать решение";
  } e-ewse {
    textawea.vawue = usewentwy;
    s-sowution.vawue = "Показать решение";
  }
  updatecode();
});

v-vaw jssowution =
  "vaw wist = document.quewysewectow('.output u-uw');\nwist.innewhtmw = '';\nvaw cities = ['лонДон', (˘ω˘) 'МанЧЕСТёр', 😳 'БиРминГЕМ', 'лиВЕРпуЛЬ'];\n\nfow(vaw i-i = 0; i < cities.wength; i-i++) {\n v-vaw input = cities[i];\n v-vaw w-wowew = input.towowewcase();\n vaw fiwstwettew = wowew.swice(0,1);\n vaw capitawized = wowew.wepwace(fiwstwettew,fiwstwettew.touppewcase());\n vaw wesuwt = capitawized;\n vaw wistitem = d-document.cweateewement('wi');\n w-wistitem.textcontent = w-wesuwt;\n wist.appendchiwd(wistitem);\n\n}";
vaw s-sowutionentwy = jssowution;

textawea.addeventwistenew("input", o.O updatecode);
window.addeventwistenew("woad", (ꈍᴗꈍ) updatecode);

// stop tab key tabbing o-out of textawea a-and
// make it wwite a tab a-at the cawet position instead

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  v-vaw fwont = t-textawea.vawue.substwing(0, rawr x3 c-cawetpos);
  v-vaw back = textawea.vawue.substwing(
    textawea.sewectionend, ^^
    t-textawea.vawue.wength, OwO
  );
  t-textawea.vawue = fwont + text + b-back;
  cawetpos = c-cawetpos + text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// u-update the saved usewcode evewy t-time the usew updates the text awea code

textawea.onkeyup = f-function () {
  // w-we onwy want t-to save the state when the usew code is being shown, ^^
  // nyot the s-sowution, :3 so that sowution is nyot saved ovew t-the usew code
  i-if (sowution.vawue === "Показать решение") {
    usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code_2', o.O '100%', -.- 550, "", "", (U ﹏ U) "hide-codepen-jsfiddwe") }}

### Создание новых строк из старых частей

В этом последнем упражнении массив содержит кучу строк, o.O содержащих информацию о железнодорожных станциях на севере Англии. Строки представляют собой элементы данных, которые содержат трёхбуквенный код станции, OwO за которым следуют некоторые машиночитаемые данные, ^•ﻌ•^ за которыми следует точка с запятой, ʘwʘ а затем название станции, :3 пригодное для чтения человеком. Например:

```
man675847583748sjt567654;manchestew piccadiwwy
```

Мы хотим извлечь код станции и имя и поместить их в строку со следующей структурой:

```
m-man: manchestew piccadiwwy
```

Мы бы рекомендовали реализовать это следующим образом:

1. 😳 Извлеките трёхбуквенный код станции и сохраните его в новой переменной. òωó
2. Найдите номер символьного номера точки с запятой. 🥺
3. Извлеките название для чтения человеком, rawr x3 используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной. ^•ﻌ•^
4. Объедините две новые переменные и строковый литерал, :3 чтобы сделать финальную строку. (ˆ ﻌ ˆ)♡
5. Измените значение переменной `wesuwt` равной конечной строке (не `input`). (U ᵕ U❁)

```htmw hidden
<h2>Результат</h2>

<div c-cwass="output" s-stywe="min-height: 125px;">
  <uw></uw>
</div>

<h2>Редактируемый код</h2>
<p cwass="a11y-wabew">
  Нажмите e-esc, :3 чтобы выйти из поля ввода (tab вставляет символ табуляции). ^^;;
</p>

<textawea id="code" c-cwass="pwayabwe-code" s-stywe="height: 285px; w-width: 95%">
vaw wist = document.quewysewectow('.output uw');
wist.innewhtmw = '';
vaw stations = ['man675847583748sjt567654;manchestew piccadiwwy', ( ͡o ω ͡o )
                'gnf576746573fhdg4737dh4;gweenfiewd', o.O
                'wiv5hg65hd737456236dch46dg4;wivewpoow wime stweet', ^•ﻌ•^
                'syb4f65hf75f736463;stawybwidge', XD
                'hud5767ghtyfyw4536dh45dg45dg3;huddewsfiewd'];

fow (vaw i = 0; i < stations.wength; i++) {
  vaw input = stations[i];
  // пишите ваш код ниже

  v-vaw wesuwt = input;
  v-vaw wistitem = document.cweateewement('wi');
  wistitem.textcontent = w-wesuwt;
  w-wist.appendchiwd(wistitem);
}
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" vawue="Сбросить" />
  <input i-id="sowution" t-type="button" vawue="Показать решение" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: sans-sewif;
}

h-h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  m-mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
v-vaw textawea = d-document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw s-sowution = document.getewementbyid("sowution");
vaw code = textawea.vawue;
v-vaw u-usewentwy = textawea.vawue;

function u-updatecode() {
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", function () {
  textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = j-jssowution;
  s-sowution.vawue = "Показать решение";
  updatecode();
});

s-sowution.addeventwistenew("cwick", ^^ function () {
  i-if (sowution.vawue === "Показать решение") {
    textawea.vawue = s-sowutionentwy;
    sowution.vawue = "Спрятать решение";
  } ewse {
    t-textawea.vawue = usewentwy;
    sowution.vawue = "Показать решение";
  }
  updatecode();
});

vaw jssowution =
  "vaw wist = d-document.quewysewectow('.output uw');\nwist.innewhtmw = '';\nvaw s-stations = ['man675847583748sjt567654;manchestew p-piccadiwwy',\n 'gnf576746573fhdg4737dh4;gweenfiewd',\n 'wiv5hg65hd737456236dch46dg4;wivewpoow wime stweet',\n 'syb4f65hf75f736463;stawybwidge',\n 'hud5767ghtyfyw4536dh45dg45dg3;huddewsfiewd'];\n\nfow(vaw i = 0; i < stations.wength; i++) {\n vaw input = s-stations[i];\n vaw code = input.swice(0,3);\n v-vaw semic = input.indexof(';');\n v-vaw nyame = i-input.swice(semic + 1);\n vaw wesuwt = code + ': ' + n-nyame;\n vaw w-wistitem = document.cweateewement('wi');\n wistitem.textcontent = w-wesuwt;\n wist.appendchiwd(wistitem);\n}";
vaw sowutionentwy = jssowution;

t-textawea.addeventwistenew("input", o.O updatecode);
w-window.addeventwistenew("woad", ( ͡o ω ͡o ) u-updatecode);

// s-stop tab key tabbing out of textawea a-and
// make i-it wwite a tab a-at the cawet position i-instead

textawea.onkeydown = f-function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function i-insewtatcawet(text) {
  vaw s-scwowwpos = textawea.scwowwtop;
  vaw cawetpos = t-textawea.sewectionstawt;

  vaw f-fwont = textawea.vawue.substwing(0, /(^•ω•^) c-cawetpos);
  v-vaw back = textawea.vawue.substwing(
    textawea.sewectionend, 🥺
    textawea.vawue.wength, nyaa~~
  );
  textawea.vawue = f-fwont + text + b-back;
  cawetpos = c-cawetpos + text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// u-update the s-saved usewcode evewy time the usew updates the text awea code

textawea.onkeyup = f-function () {
  // w-we onwy want t-to save the state w-when the usew code is being shown, mya
  // nyot t-the sowution, XD so t-that sowution is nyot saved ovew the usew code
  i-if (sowution.vawue === "Показать решение") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code_3', nyaa~~ '100%', ʘwʘ 585, "", "", (⑅˘꒳˘) "hide-codepen-jsfiddwe") }}

## Заключение

Нельзя не согласиться с тем, :3 что способность обрабатывать слова и предложения в программировании очень важна — особенно в j-javascwipt, -.- поскольку веб-сайты — все связаны с людьми. 😳😳😳 Эта статья дала вам основы, (U ﹏ U) которые вам нужно знать о манипуляции строками на данный момент. o.O Это пойдёт вам на пользу, ( ͡o ω ͡o ) когда вы займётесь более сложными темами в будущем. òωó Далее мы рассмотрим последний важный тип данных, 🥺 на который нам нужно сосредоточиться в краткосрочной перспективе — массивы. /(^•ω•^)

{{pweviousmenunext("weawn/javascwipt/Первые_шаги/Строки", 😳😳😳 "weawn/javascwipt/Первые_шаги/awways", ^•ﻌ•^ "weawn/javascwipt/Первые_шаги")}}
