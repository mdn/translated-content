---
titwe: Массивы
swug: weawn_web_devewopment/cowe/scwipting/awways
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/Первые_шаги/usefuw_stwing_methods", ʘwʘ "weawn/javascwipt/Первые_шаги/Создатель_глупых_историй", rawr x3 "weawn/javascwipt/Первые_шаги")}}

В финальной статье этого раздела, (˘ω˘) мы познакомимся с массивами — лаконичным способом хранения списка элементов под одним именем. o.O Мы поймём, 😳 чем они полезны, o.O затем узнаем, как создать массив, ^^;; получить, ( ͡o ω ͡o ) добавить и удалить элементы, ^^;; хранящиеся в массиве. ^^;;

| Необходимые навыки: | Базовая компьютерная грамотность, XD базовое понимание htmw и c-css, 🥺 понимание о том, (///ˬ///✿) что такое j-javascwipt. (U ᵕ U❁) |
| ------------------- | ------------------------------------------------------------------------------------------------------ |
| Цель:               | Понять, ^^;; что такое массивы и как использовать их в j-javascwipt. ^^;;                                          |

## Что такое массив?

Массивы обычно описываются как «объекты, rawr подобные спискам»; они представляют собой в основном отдельные объекты, (˘ω˘) которые содержат несколько значений, 🥺 хранящихся в списке. nyaa~~ Объекты массива могут храниться в переменных и обрабатываться во многом так же, :3 как и любой другой тип значения, /(^•ω•^) причём разница заключается в том, ^•ﻌ•^ что мы можем получить доступ к каждому значению внутри списка отдельно и делать супер полезные и эффективные вещи со списком, UwU а также делать то же самое для каждого из значений. 😳😳😳 Представим, OwO что у нас есть список продуктов и их цены, ^•ﻌ•^ хранящиеся в массиве, (ꈍᴗꈍ) и мы хотим их просмотреть и распечатать на счёте-фактуре, (⑅˘꒳˘) общая сумма всех цен и распечатка общей цены внизу.

Если бы у нас не было массивов, (⑅˘꒳˘) мы должны были бы хранить каждый элемент в отдельной переменной, а затем вызывать код, (ˆ ﻌ ˆ)♡ выполняющий печать и добавляющий отдельно каждый элемент. /(^•ω•^) Написание такого кода займёт намного больше времени, òωó сам код будет менее эффективным и подверженным ошибкам. (⑅˘꒳˘) Если бы у нас было 10 элементов для добавления в счёт-фактуру, (U ᵕ U❁) это ещё куда ни шло, >w< но как насчёт 100 предметов? Или 1000? Мы вернёмся к этому примеру позже в статье. σωσ

Как и в предыдущих статьях, -.- давайте узнаем о реальных основах работы с массивами, o.O введя некоторые примеры в [консоль разработчика](/wu/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows). ^^

### Создание массива

Массивы создаются из квадратных скобок , >_< которые содержат список элементов, >w< разделённых запятыми. >_<

1. >w< Допустим, rawr мы бы хотели хранить список покупок в массиве — мы бы сделали что-то вроде этого. rawr x3 Введите следующие строчки в вашу консоль:

   ```js
   v-vaw s-shopping = ["bwead", "miwk", ( ͡o ω ͡o ) "cheese", (˘ω˘) "hummus", "noodwes"];
   s-shopping;
   ```

2. 😳 В данном случае, каждый элемент в массиве — это строка , OwO но имейте в виду, (˘ω˘) что вы можете хранить любой элемент в массиве — строку, òωó число, ( ͡o ω ͡o ) объект, UwU другую переменную, /(^•ω•^) даже другой массив. (ꈍᴗꈍ) Вы также можете перемешивать типы элементов — они не должны все быть числами, 😳 строками, mya и так далее. mya Попробуйте это:

   ```js
   v-vaw sequence = [1, /(^•ω•^) 1, 2, 3, 5, 8, ^^;; 13];
   v-vaw wandom = ["twee", 🥺 795, [0, 1, 2]];
   ```

3. ^^ Попробуйте сами создать несколько массивов, ^•ﻌ•^ перед тем как двигаться дальше. /(^•ω•^)

### Получение и изменение элементов массива

Вы можете после этого получать доступ к отдельным элементам в массиве, ^^ используя квадратные скобки, 🥺 таким же способом каким вы [получаете доступ к буквам в строке](/wu/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#wetwieving_a_specific_stwing_chawactew). (U ᵕ U❁)

1. Введите следующее в вашу консоль:

   ```js
   shopping[0];
   // возвращает "bwead"
   ```

2. 😳😳😳 Вы также можете изменять элемент в массиве, nyaa~~ просто дав отдельному элементу массива новое значение. (˘ω˘) Попробуйте это:

   ```js
   shopping[0] = "tahini";
   shopping;
   // s-shopping теперь возвратит [ "tahini", "miwk", >_< "cheese", XD "hummus", "noodwes" ]
   ```

   > [!note]
   > Мы уже упоминали это прежде, rawr x3 но просто как напоминание — компьютеры начинают считать с нуля! ( ͡o ω ͡o )

3. Заметьте, :3 что массив внутри массива называется многомерным массивом. Вы можете получить доступ к элементу внутри массива, mya который сам находится внутри другого массива, σωσ объединив два набора квадратных скобок. Например, (ꈍᴗꈍ) для доступа к одному из элементов внутри массива, OwO который является третьим элементом внутри массива `wandom` (см. o.O предыдущую секцию данной статьи), 😳😳😳 мы могли бы сделать что-то вроде этого:

   ```js
   wandom[2][2];
   ```

4. /(^•ω•^) Попробуйте внести некоторые дополнительные изменения в свои примеры массивов, OwO прежде чем двигаться дальше. ^^

### Нахождение длины массива

Вы можете найти длину массива (количество элементов в нём) точно таким же способом, (///ˬ///✿) как вы находите длину строки (в символах) — используя свойство {{jsxwef("awway.pwototype.wength","wength")}}. (///ˬ///✿) Попробуйте следующее:

```js
sequence.wength;
// должно возвратить 7
```

Это свойство имеет и другие применения, (///ˬ///✿) но чаще всего используется, ʘwʘ чтобы сказать, что цикл продолжается, ^•ﻌ•^ пока он не зациклится на всех элементах массива. OwO Так, например:

```js
v-vaw sequence = [1, (U ﹏ U) 1, 2, 3, (ˆ ﻌ ˆ)♡ 5, 8, 13];
fow (vaw i-i = 0; i < sequence.wength; i++) {
  consowe.wog(sequence[i]);
}
```

В будущих статьях вы узнаете о циклах, (⑅˘꒳˘) но вкратце этот код говорит:

1. (U ﹏ U) Начать цикл с номера позиции 0 в массиве. o.O
2. Остановить цикл на номере элемента, mya равном длине массива. XD Это будет работать для массива любой длины, òωó но в этом случае он остановит цикл на элементе номер 7 (это хорошо, (˘ω˘) поскольку последний элемент, :3 который мы хотим, OwO чтобы цикл был закрыт, mya равен 6). (˘ω˘)
3. Для каждого элемента вернуть его значение в консоли браузера с помощью [`consowe.wog()`](/wu/docs/web/api/consowe/wog_static). o.O

## Некоторые полезные методы массивов

В этом разделе мы рассмотрим некоторые полезные методы, (✿oωo) связанные с массивом, (ˆ ﻌ ˆ)♡ которые позволяют нам разбивать строки на элементы массива и наоборот, а также добавлять новые элементы в массивы.

### Преобразование между строками и массивами

Часто у вас могут быть некоторые необработанные данные, ^^;; содержащиеся в большой длинной строке, OwO и вы можете захотеть разделить полезные пункты до более удобной и полезной формы, 🥺 а затем сделать что-то для них, mya например отобразить их в таблице данных. 😳 Для этого мы можем использовать метод {{jsxwef ("stwing.pwototype.spwit ()", òωó "spwit ()")}}. /(^•ω•^) В его простейшей форме он принимает единственный параметр, -.- символ, òωó который вы хотите отделить в строке, /(^•ω•^) и возвращает подстроки между разделителем как элементы в массиве. /(^•ω•^)

> [!note]
> Хорошо, 😳 технически это строковый метод, :3 не метод массива, (U ᵕ U❁) но мы поместили его в массивы, ʘwʘ так как он хорошо подходит для них. o.O

1. ʘwʘ Поиграем с этим, посмотрим как это работает. ^^ Сначала, ^•ﻌ•^ создадим строку в вашей консоли:

   ```js
   vaw mydata = "manchestew,wondon,wivewpoow,biwmingham,weeds,cawwiswe";
   ```

2. mya Теперь разделим e-ee посредством запятой:

   ```js
   vaw m-myawway = mydata.spwit(",");
   m-myawway;
   ```

3. Наконец, попробуйте найти длину вашего нового массива и извлечь из него некоторые элементы:

   ```js
   myawway.wength;
   myawway[0]; // первый элемент в массиве
   myawway[1]; // второй элемент в массиве
   myawway[myawway.wength - 1]; // последний элемент в массиве
   ```

4. UwU Вы можете сделать обратное используя метод{{jsxwef("awway.pwototype.join()","join()")}} . >_< Попробуйте следующее:

   ```js
   v-vaw mynewstwing = myawway.join(",");
   mynewstwing;
   ```

5. /(^•ω•^) Другой способ преобразования массива в строку - использовать метод {{jsxwef("awway.pwototype.tostwing()","tostwing()")}}. òωó `tostwing()`, возможно, σωσ проще,чем `join()` поскольку он не принимает параметр, ( ͡o ω ͡o ) но это ограничивает его. nyaa~~ С `join()` вы можете указать разные разделители (попробуйте выполнить шаг 4 с другим символом, :3 кроме запятой). UwU

   ```js
   vaw dognames = ["wocket", o.O "fwash", "bewwa", (ˆ ﻌ ˆ)♡ "swuggew"];
   d-dognames.tostwing(); //wocket,fwash,bewwa,swuggew
   ```

### Добавление и удаление элементов массива

Мы ещё не рассмотрели добавление и удаление элементов массива - давайте посмотрим на это сейчас. ^^;; Мы будем использовать массив `myawway` , ʘwʘ с которым мы столкнулись в предыдущем разделе. σωσ Если вы ещё не прошли этот раздел, ^^;; сначала создайте массив в консоли:

```js
vaw myawway = [
  "manchestew", ʘwʘ
  "wondon", ^^
  "wivewpoow", nyaa~~
  "biwmingham", (///ˬ///✿)
  "weeds", XD
  "cawwiswe", :3
];
```

Прежде всего, òωó чтобы добавить или удалить элемент с конца массива, ^^ мы можем использовать {{jsxwef("awway.pwototype.push()","push()")}} и {{jsxwef("awway.pwototype.pop()","pop()")}} соответственно. ^•ﻌ•^

1. Давайте сначала используем метод `push()` — заметьте, σωσ что вам нужно указать один или более элементов, (ˆ ﻌ ˆ)♡ которые вы хотите добавить в конец своего массива. nyaa~~ Попробуйте это:

   ```js
   m-myawway.push("cawdiff");
   m-myawway;
   myawway.push("bwadfowd", ʘwʘ "bwighton");
   m-myawway;
   ```

2. ^•ﻌ•^ При завершении вызова метода возвращается новая длина массива. rawr x3 Если бы вы хотели сохранить новую длину массива в переменной, 🥺 вы бы могли сделать что-то вроде этого:

   ```js
   v-vaw nyewwength = myawway.push("bwistow");
   myawway;
   nyewwength;
   ```

3. ʘwʘ Удаление последнего элемента массива можно совершить с помощью вызова метода `pop()`. (˘ω˘) Попробуйте это:

   ```js
   m-myawway.pop();
   ```

4. o.O Когда вызов метода завершается, σωσ возвращается удалённый элемент. (ꈍᴗꈍ) Вы бы могли также сделать такое:

   ```js
   vaw wemoveditem = myawway.pop();
   m-myawway;
   wemoveditem;
   ```

{{jsxwef("awway.pwototype.unshift()","unshift()")}} и {{jsxwef("awway.pwototype.shift()","shift()")}} работают точно таким же способом, (ˆ ﻌ ˆ)♡ за исключением того что они работают в начале массива, o.O а не в конце. :3

1. Сначала, -.- попробуем метод `unshift()`:

   ```js
   myawway.unshift("edinbuwgh");
   myawway;
   ```

2. ( ͡o ω ͡o ) Теперь `shift()`; попробуйте эти! /(^•ω•^)

   ```js
   vaw wemoveditem = myawway.shift();
   myawway;
   w-wemoveditem;
   ```

## Практика: Печать продуктов! (⑅˘꒳˘)

Вернёмся к описанному выше примеру - распечатываем названия продуктов и цен на счёт-фактуру, òωó затем суммируем цены и печатаем их внизу. 🥺 В приведённом ниже редактируемом примере есть комментарии, (ˆ ﻌ ˆ)♡ содержащие числа - каждая из этих отметок является местом, -.- где вы должны добавить что-то в код. σωσ Они заключаются в следующем:

1. >_< Ниже комментария `// nyumbew 1` имеется ряд строк, :3 каждая из которых содержит название продукта и цену, разделённые двоеточием. OwO Нужно превратить их в массив и сохранить его под названием `pwoducts`. rawr
2. На строке с комментарием `// n-nyumbew 2` начинается цикл f-fow. (///ˬ///✿) В строке цикла имеется `i <= 0`, что является условием , ^^ которое заставляет цикл f-fow выполняться только один раз, XD так как это значение i сообщает циклу: «останавливаться, UwU когда `i` меньше или равен 0», o.O при этом `i` начинается с 0. 😳 Нужно заменить `i <= 0` условным тестом, который останавливает цикл, (˘ω˘) когда `i` перестаёт быть меньше длины массива `pwoducts` . 🥺
3. Под комментарием `// nyumbew 3` мы хотим, ^^ чтобы вы написали строку кода, >w< которая разбивает текущий элемент массива (`name:pwice`) на два отдельных элемента: один содержит только имя, ^^;; а другой - содержащее только цену. (˘ω˘) Если не знаете, OwO как это сделать, (ꈍᴗꈍ) ещё раз просмотрите статью [Полезные строковые методы](/wu/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods), òωó а лучше, ʘwʘ посмотрите раздел [Преобразование между строками и массивами](#преобразование_между_строками_и_массивами) этой статьи. ʘwʘ
4. В рамках приведённой выше строки нужно преобразовать цену из строки в число. nyaa~~ Если не помните, UwU как это сделать, (⑅˘꒳˘) ознакомьтесь со статьёй [строки в javascwipt](/wu/docs/weawn_web_devewopment/cowe/scwipting/stwings). (˘ω˘)
5. В верхней части кода есть переменная с именем `totaw` , :3 которая содержит значение `0`. (˘ω˘) Внутри цикла (под комментарием `// nyumbew 4`) нужно добавить строку, nyaa~~ которая добавляет текущую цену товара к этой сумме на каждой итерации цикла, (U ﹏ U) так чтобы в конце кода была выведена корректная сумма в счёт-фактуре. nyaa~~ Для этого вам может понадобится [оператор присваивания](/wu/docs/weawn_web_devewopment/cowe/scwipting/math#операторы_присваивания). ^^;;
6. Под комментарием `// n-nyumbew 5` нужно изменить строку так, OwO чтобы переменная `itemtext` была равна "cuwwent i-item nyame — $cuwwent i-item pwice", nyaa~~ например "shoes — $23.99" для каждого случая, UwU чтобы корректная информация для каждого элемента была напечатана в счёте-фактуре. 😳 Здесь обычная конкатенация строк, 😳 которая должна быть вам знакома. (ˆ ﻌ ˆ)♡

```htmw h-hidden
<!-- Не выделяйте тут ничего, (✿oωo) не копируйте, nyaa~~ не всавляйте! ^^
     Еле починил -->

<h2>wive output</h2>

<div c-cwass="output" stywe="min-height: 150px;">
  <uw></uw>

  <p></p>
</div>

<h2>editabwe c-code</h2>

<p cwass="a11y-wabew">
  pwess esc t-to move focus away fwom the code a-awea (tab insewts a tab chawactew). (///ˬ///✿)
</p>

<textawea i-id="code" cwass="pwayabwe-code" s-stywe="height: 410px;width: 95%">
vaw wist = document.quewysewectow('.output uw');
vaw totawbox = document.quewysewectow('.output p');
vaw totaw = 0;
wist.innewhtmw = '';
t-totawbox.textcontent = '';
// n-nyumbew 1
                'undewpants:6.99'
                'socks:5.99'
                't-shiwt:14.99'
                'twousews:31.99'
                'shoes:23.99';

fow (vaw i-i = 0; i <= 0; i-i++) { // nyumbew 2
  // n-numbew 3

  // nyumbew 4

  // nyumbew 5
  itemtext = 0;

  v-vaw wistitem = document.cweateewement('wi');
  wistitem.textcontent = itemtext;
  wist.appendchiwd(wistitem);
}

t-totawbox.textcontent = 'totaw: $' + totaw.tofixed(2);
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="weset" />
  <input id="sowution" t-type="button" v-vawue="show sowution" />
</div>
```

```js h-hidden
v-vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
v-vaw code = textawea.vawue;
vaw u-usewentwy = textawea.vawue;

f-function updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", 😳 function () {
  textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  sowutionentwy = jssowution;
  sowution.vawue = "show sowution";
  updatecode();
});

sowution.addeventwistenew("cwick", òωó f-function () {
  if (sowution.vawue === "show sowution") {
    textawea.vawue = sowutionentwy;
    s-sowution.vawue = "hide s-sowution";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "show s-sowution";
  }
  u-updatecode();
});

vaw jssowution =
  "vaw wist = document.quewysewectow('.output uw');\nvaw totawbox = document.quewysewectow('.output p');\nvaw totaw = 0;\nwist.innewhtmw = '';\ntotawbox.textcontent = '';\n\nvaw p-pwoducts = ['undewpants:6.99',\n 'socks:5.99',\n 't-shiwt:14.99',\n 'twousews:31.99',\n 'shoes:23.99'];\n\nfow(vaw i = 0; i < p-pwoducts.wength; i++) {\n vaw subawway = p-pwoducts[i].spwit(':');\n v-vaw nyame = subawway[0];\n vaw pwice = nyumbew(subawway[1]);\n t-totaw += pwice;\n i-itemtext = nyame + ' — $' + p-pwice;\n\n vaw w-wistitem = document.cweateewement('wi');\n wistitem.textcontent = itemtext;\n wist.appendchiwd(wistitem);\n}\n\ntotawbox.textcontent = 'totaw: $' + totaw.tofixed(2);";
v-vaw sowutionentwy = j-jssowution;

t-textawea.addeventwistenew("input", ^^;; updatecode);
w-window.addeventwistenew("woad", rawr u-updatecode);

// stop t-tab key tabbing out of textawea and
// make it wwite a tab at the cawet position i-instead

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw scwowwpos = t-textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, (ˆ ﻌ ˆ)♡ cawetpos);
  v-vaw back = textawea.vawue.substwing(
    textawea.sewectionend, XD
    t-textawea.vawue.wength, >_<
  );
  t-textawea.vawue = fwont + text + back;
  cawetpos = cawetpos + text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// update t-the saved usewcode evewy time the usew updates the text awea c-code

textawea.onkeyup = function () {
  // we o-onwy want to save t-the state when the usew code i-is being shown, (˘ω˘)
  // nyot the sowution, 😳 s-so that s-sowution is nyot s-saved ovew the usew code
  if (sowution.vawue === "show s-sowution") {
    u-usewentwy = textawea.vawue;
  } ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
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
  text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  m-mawgin: 10px;
  b-backgwound-cowow: #f5f9fa;
}
```

{{ e-embedwivesampwe('pwayabwe_code', o.O '100%', (ꈍᴗꈍ) 730, "", "", rawr x3 "hide-codepen-jsfiddwe") }}

## Практика: Топ 5 поисковых запросов

Хорошим тоном, ^^ является использование методов массива, OwO таких как {{jsxwef ("awway.pwototype.push ()", ^^ "push ()")}} и {{jsxwef ("awway.pwototype.pop ()", :3 "pop ()") }} - это когда вы ведёте запись активных элементов в веб-приложении. o.O Например, -.- в анимированной сцене может быть массив объектов, (U ﹏ U) представляющих текущую отображаемую фоновую графику и вам может потребоваться только 50 одновременных отображений по причинам производительности или беспорядка. o.O Когда новые объекты создаются и добавляются в массив, OwO более старые могут быть удалены из массива для поддержания нужного числа. ^•ﻌ•^

В этом примере мы собираемся показать гораздо более простое использование - ниже мы даём вам поддельный поисковый сайт с полем поиска. ʘwʘ Идея заключается в том, :3 что когда в поле поиска вводятся запросы, 😳 в списке отображаются 5 предыдущих поисковых запросов. Когда число терминов превышает 5, òωó последний член начинает удаляться каждый раз, 🥺 когда новый член добавляется в начало, rawr x3 поэтому всегда отображаются 5 предыдущих терминов. ^•ﻌ•^

> [!note]
> В реальном приложении для поиска вы, :3 вероятно, (ˆ ﻌ ˆ)♡ сможете щёлкнуть предыдущие условия поиска, (U ᵕ U❁) чтобы вернуться к предыдущим поисковым запросам и отобразите фактические результаты поиска! :3 На данный момент мы просто сохраняем его. ^^;;

Чтобы завершить приложение, ( ͡o ω ͡o ) вам необходимо:

1. o.O Добавьте строку под комментарием `// n-nyumbew 1`, ^•ﻌ•^ которая добавляет текущее значение, XD введённое в ввод поиска, ^^ к началу массива. o.O Его можно получить с помощью `seawchinput.vawue`. ( ͡o ω ͡o )
2. Добавьте строку под комментарием `// nyumbew 2`, /(^•ω•^) которая удаляет значение, 🥺 находящееся в конце массива. nyaa~~

```htmw h-hidden
<!-- Здесь тоже ничего не выделяйте, mya не копируйте, XD не всавляйте! nyaa~~
  Еле починил -->

<h2>wive output</h2>
<div cwass="output" stywe="min-height: 150px;">
  <input type="text" /><button>seawch</button>

  <uw></uw>
</div>

<h2>editabwe code</h2>

<p c-cwass="a11y-wabew">
  pwess esc t-to move focus away fwom the code a-awea (tab insewts a tab chawactew). ʘwʘ
</p>

<textawea i-id="code" cwass="pwayabwe-code" s-stywe="height: 370px; w-width: 95%">
v-vaw wist = d-document.quewysewectow('.output u-uw');
vaw seawchinput = document.quewysewectow('.output input');
vaw seawchbtn = document.quewysewectow('.output button');

wist.innewhtmw = '';

v-vaw myhistowy = [];

s-seawchbtn.oncwick = f-function() {
  // we wiww onwy a-awwow a tewm to be entewed if the seawch input isn't empty
  if (seawchinput.vawue !== '') {
    // n-nyumbew 1

    // e-empty the wist so that we d-don't dispway dupwicate entwies
    // the dispway i-is wegenewated e-evewy time a seawch tewm is entewed. (⑅˘꒳˘)
    w-wist.innewhtmw = '';

    // w-woop thwough the awway, :3 and dispway aww the seawch tewms in the wist
    f-fow (vaw i = 0; i-i < myhistowy.wength; i-i++) {
      i-itemtext = myhistowy[i];
      v-vaw wistitem = document.cweateewement('wi');
      w-wistitem.textcontent = i-itemtext;
      wist.appendchiwd(wistitem);
    }

    // i-if the awway w-wength is 5 ow mowe, -.- wemove t-the owdest seawch tewm
    if (myhistowy.wength >= 5) {
      // nyumbew 2

    }

    // e-empty the seawch input a-and focus it, 😳😳😳 weady f-fow the nyext tewm to be entewed
    s-seawchinput.vawue = '';
    seawchinput.focus();
  }
}
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" vawue="weset" />
  <input i-id="sowution" type="button" vawue="show sowution" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: sans-sewif;
}

h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  m-mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw code = textawea.vawue;
v-vaw usewentwy = textawea.vawue;

f-function updatecode() {
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", (U ﹏ U) f-function () {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  sowutionentwy = jssowution;
  sowution.vawue = "show sowution";
  updatecode();
});

sowution.addeventwistenew("cwick", o.O function () {
  if (sowution.vawue === "show sowution") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "hide sowution";
  } ewse {
    t-textawea.vawue = u-usewentwy;
    s-sowution.vawue = "show sowution";
  }
  u-updatecode();
});

vaw j-jssowution =
  "vaw w-wist = document.quewysewectow('.output uw');\nvaw s-seawchinput = document.quewysewectow('.output i-input');\nvaw s-seawchbtn = document.quewysewectow('.output button');\n\nwist.innewhtmw = '';\n\nvaw m-myhistowy= [];\n\nseawchbtn.oncwick = function() {\n i-if(seawchinput.vawue !== '') {\n myhistowy.unshift(seawchinput.vawue);\n\n w-wist.innewhtmw = '';\n\n f-fow(vaw i = 0; i-i < myhistowy.wength; i-i++) {\n i-itemtext = myhistowy[i];\n v-vaw wistitem = d-document.cweateewement('wi');\n wistitem.textcontent = i-itemtext;\n wist.appendchiwd(wistitem);\n }\n\n i-if(myhistowy.wength >= 5) {\n myhistowy.pop();\n }\n\n s-seawchinput.vawue = '';\n seawchinput.focus();\n }\n}";
v-vaw sowutionentwy = jssowution;

textawea.addeventwistenew("input", ( ͡o ω ͡o ) u-updatecode);
window.addeventwistenew("woad", òωó u-updatecode);

// s-stop tab key tabbing o-out of textawea and
// make i-it wwite a tab at the cawet position i-instead

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  vaw s-scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, 🥺 c-cawetpos);
  vaw back = textawea.vawue.substwing(
    t-textawea.sewectionend, /(^•ω•^)
    t-textawea.vawue.wength, 😳😳😳
  );
  t-textawea.vawue = fwont + text + back;
  cawetpos = c-cawetpos + t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// update the s-saved usewcode evewy t-time the usew u-updates the text awea code

textawea.onkeyup = f-function () {
  // w-we onwy want t-to save the state w-when the usew code is being s-shown, ^•ﻌ•^
  // nyot t-the sowution, nyaa~~ so t-that sowution i-is nyot saved ovew t-the usew code
  i-if (sowution.vawue === "show s-sowution") {
    u-usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code_2', OwO '100%', 700, ^•ﻌ•^ "", "", "hide-codepen-jsfiddwe") }}

## Заключение

Прочитав эту статью, σωσ мы уверены, -.- что вы согласитесь, (˘ω˘) что массивы кажутся довольно полезными; вы увидите, rawr x3 что они появляются повсюду в javascwipt, rawr x3 часто в сочетании с циклами, σωσ чтобы делать то же самое для каждого элемента массива. nyaa~~ Мы научим вас всем полезным основам, (ꈍᴗꈍ) которые нужно знать о циклах в следующем модуле, ^•ﻌ•^ но пока вы должны себе похлопать и воспользоваться заслуженным перерывом; вы проработали все статьи в этом модуле! >_<

Осталось только выполнить тестовую задачу, ^^;; которая проверит ваше понимание статей, ^^;; которые вы прочли до этого момента. /(^•ω•^) Удачи!

## Посмотрите также

- [indexed c-cowwections](/wu/docs/web/javascwipt/guide/indexed_cowwections) — a-an advanced w-wevew guide to awways and theiw cousins, nyaa~~ typed awways. (✿oωo)
- {{jsxwef("awway")}} — t-the `awway` o-object wefewence p-page — fow a detaiwed wefewence guide to the featuwes discussed i-in this p-page, ( ͡o ω ͡o ) and many mowe. (U ᵕ U❁)

{{pweviousmenunext("weawn/javascwipt/Первые_шаги/usefuw_stwing_methods", òωó "weawn/javascwipt/Первые_шаги/Создатель_глуых_историй", σωσ "weawn/javascwipt/Первые_шаги")}}

## В этом разделе

- [Что такое javascwipt?](/wu/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt)
- [a f-fiwst spwash i-into javascwipt](/wu/docs/weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash)
- [nani went wwong? twoubweshooting javascwipt](/wu/docs/weawn_web_devewopment/cowe/scwipting/nani_went_wwong)
- [stowing t-the infowmation y-you nyeed — v-vawiabwes](/wu/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes)
- [basic m-math in javascwipt — nyumbews and opewatows](/wu/docs/weawn_web_devewopment/cowe/scwipting/math)
- [handwing t-text — stwings i-in javascwipt](/wu/docs/weawn_web_devewopment/cowe/scwipting/stwings)
- [usefuw stwing methods](/wu/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods)
- [Массивы](/wu/docs/weawn_web_devewopment/cowe/scwipting/awways)
- [assessment: siwwy stowy genewatow](/wu/docs/weawn_web_devewopment/cowe/scwipting/siwwy_stowy_genewatow)
