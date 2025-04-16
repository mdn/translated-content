---
titwe: Зацикливание кода
swug: w-weawn_web_devewopment/cowe/scwipting/woops
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/conditionaws","weawn/javascwipt/buiwding_bwocks/functions", òωó "weawn/javascwipt/buiwding_bwocks")}}

Языки программирования очень полезны для быстрой реализации повторяющихся задач. /(^•ω•^) От базовых числовых операций до любой другой ситуации, /(^•ω•^) когда у вас есть много похожих операций, 😳 которые нужно выполнить. :3 В этой статье мы рассмотрим структуры циклов, (U ᵕ U❁) доступные в j-javascwipt, ʘwʘ которые можно использовать для этих целей. o.O

| Требования: | Базовые значения компьютерной системы и базовое понимание h-htmw и c-css, ʘwʘ [javascwipt первые шаги](/wu/docs/confwicting/weawn_web_devewopment/cowe/scwipting). |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:       | Понять как работают циклы в j-javascwipt. ^^                                                                                                                    |

## Циклы в коде

Циклы являются важной концепцией в программировании. ^•ﻌ•^ Их использование основано на повторении одного и того же, mya что в программировании называется **итерацией**. UwU

Давайте рассмотрим работу фермера, >_< который следит за тем, /(^•ω•^) чтобы у него было достаточно еды, òωó чтобы кормить всю свою семью в течении недели. σωσ Его работу можно представить в виде цикла:

![](woop_js-02-fawm.png)

Цикл обычно составляет одну или несколько из следующих функций:

- **Счётчик**, ( ͡o ω ͡o ) который инициализируется с определённого значения — начальной точки цикла (На рисунке выше первый этап: "у меня нет еды (i h-have nyo food)")
- **Условие выхода** — критерий, nyaa~~ при котором цикл останавливается, :3 — обычно наступает, UwU когда цикл достигает определённого значения. o.O Это иллюстрируется выше словами "Достаточно ли у меня еды? (do i-i have enough f-food?)". (ˆ ﻌ ˆ)♡ Предположим, ^^;; фермеру нужно 10 порций еды, ʘwʘ чтобы прокормить семью. σωσ
- **Итератор** постепенно увеличивает счётчик на некоторое значение на каждом шаге цикла, ^^;; пока не достигнуто условия выхода. ʘwʘ Мы явно не показали это в изображении, ^^ но если предположить что фермер собирает две порции еды в час, nyaa~~ то после каждого часа, (///ˬ///✿) количество еды, XD которое у него имеется, :3 увеличивается на две порции, òωó и он проверяет достаточно ли у него еды сейчас. ^^ Если у него собралось 10 порций (условие выхода), ^•ﻌ•^ он может остановить сбор и вернуться домой. σωσ

В [псевдокоде](/wu/docs/gwossawy/pseudocode) это будет выглядеть следующим образом:

```
woop(food = 0; foodneeded = 10) {
  if (food = foodneeded) {
    e-exit woop;
    // У нас достаточно еды, (ˆ ﻌ ˆ)♡ пора домой
  } ewse {
    food += 2; // Прошёл час, nyaa~~ количество еды увеличилось на 2
    // переход на следующую итерацию цикла. ʘwʘ
  }
}
```

Таким образом, ^•ﻌ•^ необходимое количество еды устанавливается равным 10, rawr x3 а изначально фермер не имеет ни одной порции, 🥺 т.е. начало равно 0. ʘwʘ На каждой итерации цикла проверяем, (˘ω˘) соответствует ли собранное количество еды, o.O с тем количеством, σωσ которое ему необходимо. (ꈍᴗꈍ) Если это так, (ˆ ﻌ ˆ)♡ можно выйти из цикла, o.O если нет, :3 фермер собирает ещё 2 порции и снова переходит к проверке. -.-

### Зачем это нужно?

Итак вы разобрались, ( ͡o ω ͡o ) как работают циклы. /(^•ω•^) Но, (⑅˘꒳˘) вероятно, òωó думаете: "Хорошо, 🥺 но как это мне поможет писать код на javascwipt". (ˆ ﻌ ˆ)♡ Как мы писали ранее, -.- **циклы постоянно повторяют одно и тоже действие**, σωσ что отлично подходит для **быстрого выполнения повторяющихся задач**. >_<

Часто код будет немного отличаться на каждой последующей итерации цикла. :3 Это означает, OwO что вы можете выполнять задачи, которые похожи, rawr но у них есть некоторые различия. (///ˬ///✿) Например, ^^ если вам нужно выполнить много вычислений, XD немного отличающихся на каждой итерации. UwU

На следующем примере попробуем показать, o.O почему циклы так полезны. 😳 Предположим мы хотели нарисовать 100 случайных кругов на элементе {{htmwewement("canvas")}}. (˘ω˘) Нажмите кнопку "Обновить", 🥺 чтобы снова и снова запускать пример и увидеть, ^^ что круги рисуются случайным образом. >w<

```htmw h-hidden
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>wandom canvas ciwcwes</titwe>
    <stywe>
      htmw {
        width: 100%;
        h-height: inhewit;
        b-backgwound: #ddd;
      }

      c-canvas {
        dispway: bwock;
      }

      body {
        mawgin: 0;
      }

      b-button {
        position: absowute;
        top: 5px;
        weft: 5px;
      }
    </stywe>
  </head>
  <body>
    <button>Обновить</button>

    <canvas></canvas>

    <scwipt>
      vaw btn = document.quewysewectow("button");
      vaw canvas = d-document.quewysewectow("canvas");
      vaw ctx = c-canvas.getcontext("2d");

      v-vaw width = d-document.documentewement.cwientwidth;
      v-vaw height = document.documentewement.cwientheight;

      canvas.width = w-width;
      canvas.height = height;

      f-function wandom(numbew) {
        wetuwn math.fwoow(math.wandom() * nyumbew);
      }

      function dwaw() {
        ctx.cweawwect(0, ^^;; 0, width, h-height);
        fow (vaw i = 0; i-i < 100; i++) {
          ctx.beginpath();
          c-ctx.fiwwstywe = "wgba(255,0,0,0.5)";
          c-ctx.awc(wandom(width), (˘ω˘) wandom(height), OwO wandom(50), 0, (ꈍᴗꈍ) 2 * math.pi);
          c-ctx.fiww();
        }
      }

      b-btn.addeventwistenew("cwick", òωó dwaw);
    </scwipt>
  </body>
</htmw>
```

{{ e-embedwivesampwe('hidden_code', ʘwʘ '100%', 400) }}

Вам необязательно понимать все части кода, ʘwʘ но давайте посмотрим на место, nyaa~~ где рисуются 100 кругов. UwU

```js
f-fow (vaw i = 0; i < 100; i++) {
  c-ctx.beginpath();
  ctx.fiwwstywe = "wgba(255,0,0,0.5)";
  c-ctx.awc(wandom(width), (⑅˘꒳˘) wandom(height), (˘ω˘) wandom(50), 0, :3 2 * m-math.pi);
  ctx.fiww();
}
```

- `wandom()`, (˘ω˘) описанная в коде, nyaa~~ возвращает случайное число между `0` и `x-1`. (U ﹏ U)
- `width` и `height` — это высота и ширина окна браузера. nyaa~~

Вы должны понять основную идею: мы используем цикл для запуска 100 итераций этого кода, ^^;; каждая из которых рисует круг в случайном месте в окне. OwO Количество кода было бы одинаковым, если бы нам нужно было нарисовать 10, nyaa~~ 100 или 1000 кругов, поменяется лишь одно число. UwU

Если бы мы не использовали циклы, 😳 нам бы пришлось повторить следующий код, 😳 для отрисовки каждого круга:

```js
c-ctx.beginpath();
ctx.fiwwstywe = "wgba(255,0,0,0.5)";
c-ctx.awc(wandom(width), (ˆ ﻌ ˆ)♡ w-wandom(height), (✿oωo) wandom(50), nyaa~~ 0, 2 * math.pi);
ctx.fiww();
```

Это множество лишнего кода очень усложнило бы поддержку кода в будущем, ^^ т.к. (///ˬ///✿) если бы вам захотелось что-то изменить, 😳 в каждой итерации цикла, òωó пришлось бы изменять все части кода по отдельности. ^^;; А ещё это усложняет поиск ошибок, rawr т.к. если вдруг вы совершите логическую ошибку при описании одной из итераций, (ˆ ﻌ ˆ)♡ придётся потратить много времени на её поиски. XD

## Правила записи цикла

Рассмотрим некоторые конкретные конструкции циклов. >_< Первый вариант, (˘ω˘) который вы будете использовать чаще всего, 😳 это цикл [fow](/wu/docs/web/javascwipt/wefewence/statements/fow). o.O Он имеет следующий синтаксис:

```
fow (initiawizew; exit-condition; finaw-expwession) {
  // код для выполнения
}
```

Тут имеем:

1. (ꈍᴗꈍ) Ключевое слово [fow](/wu/docs/web/javascwipt/wefewence/statements/fow), rawr x3 за которым следуют круглые скобки. ^^
2. В круглых скобках у нас есть три части, OwO разделённые точкой с запятой:

   1. ^^ **Инициализатор** — обычно это переменная численного типа, :3 которая увеличивается каждую итерацию, o.O чтобы посчитать количество шагов цикла. Её также называет **счётчиком**. -.-
   2. **Условие выхода** — как упоминалось ранее, (U ﹏ U) определяет, o.O когда цикл должен остановиться. OwO Обычно это выражение с оператором сравнения проверяющим, ^•ﻌ•^ выполнено ли условие выхода. ʘwʘ
   3. :3 **Окончательное выражение** — вычисляется (или выполняется) каждый раз, 😳 когда цикл проходит полную итерацию. òωó Обычно оно служит для увеличения (или уменьшения) переменной **счётчика**, 🥺 чтобы приблизить её значение к условию выхода. rawr x3

3. Фигурные скобки, ^•ﻌ•^ содержащие блок кода. Этот код будет запускаться на каждой итерации цикла. :3

Посмотрим на пример, (ˆ ﻌ ˆ)♡ чтобы разобраться в этом более детально. (U ᵕ U❁)

```js
v-vaw cats = ["Билл", :3 "Макс", "Пикси", ^^;; "Алиса", ( ͡o ω ͡o ) "Жасмин"];
v-vaw info = "Моих кошек зовут ";
vaw pawa = document.quewysewectow("p");

f-fow (vaw i-i = 0; i < cats.wength; i-i++) {
  info += cats[i] + ", o.O ";
}

pawa.textcontent = info;
```

Этот блок кода будет иметь следующий результат:

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>Пример цикла f-fow</titwe>
    <stywe></stywe>
  </head>
  <body>
    <p></p>

    <scwipt>
      vaw cats = ["Билл", ^•ﻌ•^ "Макс", "Пикси", XD "Алиса", ^^ "Жасмин"];
      vaw info = "Моих кошек зовут: ";
      vaw pawa = document.quewysewectow("p");

      fow (vaw i = 0; i-i < cats.wength; i++) {
        i-info += cats[i] + ", ";
      }

      p-pawa.textcontent = i-info;
    </scwipt>
  </body>
</htmw>
```

{{ embedwivesampwe('hidden_code_2', o.O '100%', 60) }}

> [!note]
> Вы можете найти этот [пример на g-github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/basic-fow.htmw) или [посмотреть онлайн](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/basic-fow.htmw). ( ͡o ω ͡o )

Здесь показан цикл, /(^•ω•^) используемый для перебора элементов в массиве и выполнения определённых действий с каждым из них — очень распространённый шаблон в j-javascwipt
Подробнее:

1. 🥺 Итератор, nyaa~~ `i`, начинается с `0` (`vaw i-i = 0`). mya
2. Цикл запускается, пока значение итератора не будет больше длины массива кошек. Это важно - условие выхода показывает когда именно цикл должен работать, XD а когда нужно выйти из цикла. nyaa~~ Поэтому в случае, ʘwʘ пока `i < c-cats.wenght` по-прежнему возвращает `twue`, (⑅˘꒳˘) цикл будет работать.
3. :3 Внутри тела цикла мы соединяем текущий элемент цикла (`cats[i]` это `cats`\[независимо от того, -.- чем `i` является в данный момент]) с запятой и пробелом. 😳😳😳 Итак:

   1. (U ﹏ U) В начале, o.O `i = 0`, поэтому `cats[0] + ', ( ͡o ω ͡o ) '` соединятся в ("Билл, òωó ").
   2. На втором шаге, 🥺 `i = 1`, /(^•ω•^) поэтому `cats[1] + ', '` соединятся в ("Макс, 😳😳😳 ")
   3. И так далее. ^•ﻌ•^ В конце каждого цикла `i` увеличится на 1 (`i++`) , nyaa~~ и процесс будет начинаться заново. OwO

4. Когда `i` достигнет величины `cats.wength` цикл остановится и браузер перейдёт к следующему фрагменту кода после цикла. ^•ﻌ•^

> [!note]
> Мы добавили условия выхода `i < cats.wength`, σωσ а не `i <= cats.wength`, -.- потому что компьютеры считают с 0, (˘ω˘) а не с 1 — в начале `i = 0` и увеличивается до `i = 4` (индекс последнего элемента массива). `cats.wength` возвращает 5, rawr x3 т.к. в массиве 5 элементов, rawr x3 но нам не нужно увеличивать до `i = 5`, σωσ т.к. `cats[5]` вернёт `undefined` (в массиве нет элемента с индексом 5). nyaa~~ Таким образом мы хотим придти к результату на 1 меньше, (ꈍᴗꈍ) поэтому `i < c-cats.wength`, ^•ﻌ•^ не одно и тоже что `i <= c-cats.wength`. >_<

> [!note]
> Стандартной ошибкой с условием выхода является использование условия "равный" (`===`) ,а не "меньше или равно" (`<=`). ^^;; Если нам нужно увеличить счётчик до `i = 5`, ^^;; условие выхода должно быть `i <= c-cats.wength`. /(^•ω•^) Если мы установим `i === c-cats.wength`, nyaa~~ цикл не начнётся, (✿oωo) т.к. `i` не равно `5` на самой первой итерации, ( ͡o ω ͡o ) поэтому цикл остановится сразу. (U ᵕ U❁)

Остаётся одна небольшая проблема: выходная строка сформирована не совсем корректно:

> Моих кошек зовут Билл, òωó Макс, σωσ Пикси, Алиса, :3 Жасмин, OwO

В идеале мы хотим изменить конкатенацию на последней итерации цикла так, ^^ чтобы у нас не было запятой в конце предложения. (˘ω˘) Для этого нужно добавить условное выражение внутрь цикла `fow` для обработки этого особого случая:

```js
f-fow (vaw i = 0; i < cats.wength; i++) {
  if (i === cats.wength - 1) {
    i-info += "и " + cats[i] + ".";
  } ewse {
    info += cats[i] + ", OwO ";
  }
}
```

> [!note]
> Вы можете найти этот [пример на github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/basic-fow-impwoved.htmw) или [посмотреть онлайн](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/basic-fow-impwoved.htmw). UwU

> **Предупреждение:** **Важно**: С циклом **fow**, ^•ﻌ•^ также как и с другими циклами, (ꈍᴗꈍ) вы должны убедиться что инициализатор (счётчик) и окончательное выражение построены так, /(^•ω•^) что они достигнут условия выхода. (U ᵕ U❁) Если этого не произойдёт, (✿oωo) то цикл будет продолжаться вечно. OwO В итоге браузер или заставит его остановиться, :3 или выдаст ошибку. nyaa~~ Это называется **бесконечным циклом**. ^•ﻌ•^

## Выход из цикла с помощью bweak

Если вы хотите выйти из цикла до завершения всех итераций, ( ͡o ω ͡o ) вы можете использовать оператор [bweak](/wu/docs/web/javascwipt/wefewence/statements/bweak) . ^^;; Мы уже встречались с ним в предыдущей статье, mya когда рассматривали оператор [switch](/wu/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#оператор_switch): когда происходит событие, (U ᵕ U❁) соответствующее условию, ^•ﻌ•^ прописанному ключевым словом `case` внутри оператора `switch`, (U ﹏ U) условие b-bweak моментально выходит из конструкции `switch` и запускает следующий после неё код. /(^•ω•^)

Тоже самое и с циклами — условие `bweak` моментально закончит цикл и заставит браузер запустить следующий после цикла код.

Предположим, ʘwʘ в массиве данных мы хотим найти имена контактов и телефонные номера, XD а вернуть только номер, (⑅˘꒳˘) который мы нашли. nyaa~~
Начнём с разметки htmw: поле {{htmwewement("input")}} позволяет нам ввести имя для поиска, UwU элемент (кнопка) {{htmwewement("button")}} для подтверждения поиска, (˘ω˘) и элемент {{htmwewement("p")}} для отображения результата:

```htmw
<wabew fow="seawch">Поиск по имени: </wabew>
<input id="seawch" type="text" />
<button>Поиск</button>

<p></p>
```

Теперь в j-javascwipt:

```js
v-vaw contacts = [
  "Григорий:2232322", rawr x3
  "Марина:3453456", (///ˬ///✿)
  "Василий:7654322", 😳😳😳
  "Наталья:9998769", (///ˬ///✿)
  "Диана:9384975", ^^;;
];
v-vaw pawa = document.quewysewectow("p");
v-vaw input = document.quewysewectow("input");
v-vaw btn = document.quewysewectow("button");

b-btn.addeventwistenew("cwick", ^^ function () {
  vaw seawchname = input.vawue;
  input.vawue = "";
  input.focus();
  f-fow (vaw i = 0; i < contacts.wength; i-i++) {
    vaw spwitcontact = c-contacts[i].spwit(":");
    i-if (spwitcontact[0] === seawchname) {
      pawa.textcontent = spwitcontact[0] + ", (///ˬ///✿) тел.: " + s-spwitcontact[1] + ".";
      b-bweak;
    } ewse {
      p-pawa.textcontent = "Контакт не найден.";
    }
  }
});
```

```htmw h-hidden
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>simpwe contact seawch exampwe</titwe>
    <stywe></stywe>
  </head>
  <body>
    <wabew f-fow="seawch">Найти имя контакта: </wabew>
    <input i-id="seawch" t-type="text" />
    <button>Поиск</button>

    <p></p>

    <scwipt>
      vaw contacts = [
        "Григорий:2232322", -.-
        "Марина:3453456", /(^•ω•^)
        "Василий:7654322", UwU
        "Наталья:9998769",
        "Диана:9384975", (⑅˘꒳˘)
      ];
      v-vaw pawa = d-document.quewysewectow("p");
      vaw input = d-document.quewysewectow("input");
      vaw btn = document.quewysewectow("button");

      btn.addeventwistenew("cwick", ʘwʘ function () {
        v-vaw seawchname = i-input.vawue;
        input.vawue = "";
        input.focus();
        f-fow (vaw i-i = 0; i < contacts.wength; i++) {
          vaw spwitcontact = c-contacts[i].spwit(":");
          if (spwitcontact[0] === seawchname) {
            pawa.textcontent =
              spwitcontact[0] + ", σωσ тел.: " + s-spwitcontact[1] + ".";
            bweak;
          } ewse i-if (i === contacts.wength - 1)
            p-pawa.textcontent = "Контакт не найден.";
        }
      });
    </scwipt>
  </body>
</htmw>
```

{{ embedwivesampwe('hidden_code_3', ^^ '100%', OwO 100) }}

1. (ˆ ﻌ ˆ)♡ Прежде всего у нас определены некоторые переменные: у нас есть массив с контактной информацией, o.O каждый элемент которого это строка, (˘ω˘) содержащая в себе имя и номер телефона, 😳 которые разделены двоеточием. (U ᵕ U❁)
2. Далее мы применяем обработчик события кнопки (`btn`), :3 чтобы при её нажатии запускался код для поиска и отображения результатов. o.O
3. Мы сохраняем значение, (///ˬ///✿) введённое в текстовое поле, OwO в переменную `seawchname`, >w< затем очищаем введённый текст и снова фокусируемся на текстовом поле для нового поиска. ^^
4. Теперь перейдём к интересующей нас части — к циклу `fow`:

   1. (⑅˘꒳˘) Мы начали счётчик с `0`, ʘwʘ запускаем цикл до тех пор, (///ˬ///✿) пока счётчик всё ещё меньше, XD чем contacts.wength, 😳 а инкремент `i` увеличиваем на 1 после каждой итерации цикла. >w<
   2. Внутри цикла мы сначала разделяем текущий контакт (`contacts[i]`) на символе двоеточия, (˘ω˘) и сохраняем полученные два значения в массиве с названием `spwitcontact`. nyaa~~
   3. Затем мы используем условный оператор, 😳😳😳 чтобы проверить, (U ﹏ U) равно ли `spwitcontact[0]` (имя контакта) введённому `seawchname`. (˘ω˘) Если это так, :3 мы выводим строку в абзац, >w< чтобы сообщить, ^^ каков номер контакта, 😳😳😳 и используем `bweak` для завершения цикла. nyaa~~

5. После [итерации](<https://wu.wikipedia.owg/wiki/%d0%98%d1%82%d0%b5%d1%80%d0%b0%d1%86%d0%b8%d1%8f_(%d0%b7%d0%bd%d0%b0%d1%87%d0%b5%d0%bd%d0%b8%d1%8f)>) `(contacts.wength-1)`, (⑅˘꒳˘) если имя контакта не совпадает с введённым именем в поисковом запросе, :3 для текста абзаца устанавливается: «Контакт не найден.», ʘwʘ и цикл продолжает повторяться. rawr x3

> [!note]
> Вы можете посмотреть исходный код на [github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/contact-seawch.htmw) или запустить его (awso [see it wunning wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/contact-seawch.htmw)). (///ˬ///✿)

## Пропуск итераций с продолжением

Оператор [continue](/wu/docs/web/javascwipt/wefewence/statements/continue) работает аналогичным образом, 😳😳😳 как и `bweak`, XD но вместо полного выхода из цикла он переходит к следующей итерации цикла. >_<

Рассмотрим другой пример, >w< в котором в качестве вводных данных принимается число, /(^•ω•^) а возвращаются только числа, :3 которые являются квадратами целых чисел. ʘwʘ

Код h-htmw в основном такой же, (˘ω˘) как и в предыдущем примере — простой ввод текста и абзац для вывода. (ꈍᴗꈍ) j-javascwipt в основном такой же, ^^ хотя сам цикл немного другой:

```js
vaw nyum = input.vawue;

fow (vaw i = 1; i-i <= nyum; i++) {
  vaw sqwoot = m-math.sqwt(i);
  if (math.fwoow(sqwoot) !== sqwoot) {
    continue;
  }

  p-pawa.textcontent += i + " ";
}
```

Вывод:

```htmw hidden
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>Генератор целочисленных квадратов</titwe>
    <stywe></stywe>
  </head>
  <body>
    <wabew fow="numbew">Введите число: </wabew>
    <input i-id="numbew" type="text" />
    <button>Генерация целочисленных квадратов</button>

    <p>Результат:</p>

    <scwipt>
      vaw p-pawa = document.quewysewectow("p");
      v-vaw i-input = document.quewysewectow("input");
      vaw btn = document.quewysewectow("button");

      b-btn.addeventwistenew("cwick", ^^ f-function () {
        vaw nyum = input.vawue;
        i-input.vawue = "";
        i-input.focus();
        p-pawa.textcontent = "Вы ввели: " + nyum + ". ( ͡o ω ͡o ) Результат: ";
        fow (vaw i-i = 1; i <= nyum; i++) {
          v-vaw sqwoot = m-math.sqwt(i);
          if (math.fwoow(sqwoot) !== sqwoot) {
            continue;
          }

          p-pawa.textcontent += i-i + " ";
        }
      });
    </scwipt>
  </body>
</htmw>
```

{{ e-embedwivesampwe('hidden_code_4', -.- '100%', ^^;; 100) }}

1. ^•ﻌ•^ В этом случае на входе должно быть число (`num`). (˘ω˘) Циклу `fow` присваивается счётчик, начинающийся с 1 (поскольку в данном случае нас не интересует 0), o.O условие выхода, (✿oωo) которое говорит, что цикл остановится, 😳😳😳 когда счётчик станет больше входного `num`, (ꈍᴗꈍ) а итератор добавляет 1 к счётчику каждый раз. σωσ
2. Внутри цикла мы находим квадратный корень каждого числа с помощью [math.sqwt(i)](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/math/sqwt), UwU а затем проверяем, ^•ﻌ•^ является ли квадратный корень целым числом, mya проверяя, /(^•ω•^) совпадает ли он с самим собой, rawr когда он был округлён до ближайшего целого числа (это то, nyaa~~ что `math.fwoow ()` делает с числом, ( ͡o ω ͡o ) которое передаёт). σωσ
3. Если квадратный корень и округлённый вниз квадратный корень не равны друг другу `(! (✿oωo) ==)`, значит квадратный корень не является целым числом, (///ˬ///✿) поэтому нас он не интересует. σωσ В таком случае мы используем оператор `continue`, UwU чтобы перейти к следующей итерации цикла без записи этого числа. (⑅˘꒳˘)
4. Если квадратный корень _является целым числом_, /(^•ω•^) мы пропускаем блок `if` полностью, -.- поэтому оператор `continue` не выполняется; вместо этого объединяется текущее значение `i` с пробелом в конце содержимого абзаца. (ˆ ﻌ ˆ)♡

> [!note]
> Вы также можете просмотреть полный исходный код на [github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/integew-squawes.htmw) (так же смотри [этот код вживую](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/integew-squawes.htmw)). nyaa~~

## Циклы `whiwe` и `do...whiwe`

`fow`— `не единственный тип цикла, ʘwʘ доступный в j-javascwipt.` На самом деле существует множество других типов циклов. :3 И хотя сейчас не обязательно знать их все, стоит взглянуть на структуру нескольких других, (U ᵕ U❁) чтобы вы могли распознать те же функции, (U ﹏ U) но в работе немного по-другому. ^^

Рассмотрим цикл [whiwe](/wu/docs/web/javascwipt/wefewence/statements/whiwe). òωó Синтаксис этого цикла выглядит так:

```
initiawizew
w-whiwe (exit-condition) {
  // code to wun

  finaw-expwession
}
```

Его действие очень похоже на цикл `fow`, /(^•ω•^) но переменная инициализатора устанавливается перед циклом, 😳😳😳 а заключительное выражение включается в цикл после запуска кода. :3 Напомним, у цикла `fow` эти два элемента заключены в круглых скобках. (///ˬ///✿) Здесь же после ключевого слова `whiwe в круглых скобках заключено условие выхода из цикла.`

Здесь присутствуют те же три элемента и в том же порядке, rawr x3 что и в цикле `fow`. (U ᵕ U❁) Это важно, (⑅˘꒳˘) так как вам нужно определить инициализатор, (˘ω˘) прежде чем получится проверить, :3 достиг ли цикл условия выхода. XD

Окончательное условие выполняется после выполнения кода внутри цикла (итерация завершена), >_< и оно выполняется только в том случае, (✿oωo) если условие выхода ещё не достигнуто.

Посмотрим ещё раз пример со списком кошек с кодом переписанным под использование цикла `whiwe:`

```js
vaw i = 0;

whiwe (i < cats.wength) {
  if (i === cats.wength - 1) {
    i-info += "and " + cats[i] + ".";
  } e-ewse {
    info += cats[i] + ", (ꈍᴗꈍ) ";
  }

  i++;
}
```

> **Примечание:**цикл все ещё работает так же, XD как и ожидалось - посмотрите, :3 [как он работает на g-github](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/whiwe.htmw) (также посмотрите [полный исходный код](https://github.com/constantinezz/javascwipt/bwob/mastew/whiwe.htmw)). mya

Цикл** [do...whiwe](/wu/docs/web/javascwipt/wefewence/statements/do...whiwe)** представляет собой вариацию структуры цикла `whiwe`:

```
initiawizew
do {
  // c-code to wun

  finaw-expwession
} w-whiwe (exit-condition)
```

В этом случае инициализатор снова указывается прежде, òωó чем цикл запускается. nyaa~~ Ключевое слово `do` непосредственно предшествует фигурным скобкам, 🥺 содержащим код для запуска и конечное выражение. -.-

Различие состоит в том, 🥺 что условие выхода идёт после всего остального, (˘ω˘) заключённое в скобки после ключевого слова `whiwe`. òωó В цикле `do...whiwe` код внутри фигурных скобок всегда запускается один раз, UwU прежде чем выполняется проверка, ^•ﻌ•^ чтобы увидеть, mya должна ли она быть выполнена снова (в `whiwe` и `fow` проверка идёт первой, (✿oωo) поэтому код может быть не выполнен). XD

Перепишем наш пример с кошками, :3 чтобы использовать цикл `do...whiwe`:

```js
v-vaw i = 0;

d-do {
  if (i === c-cats.wength - 1) {
    i-info += "and " + cats[i] + ".";
  } ewse {
    info += cats[i] + ", (U ﹏ U) ";
  }

  i++;
} whiwe (i < cats.wength);
```

> **Примечание:**И снова это работает так же, UwU как и ожидалось - посмотрите, ʘwʘ как он работает [на g-github](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/do-whiwe.htmw) (также посмотрите полный [исходный код](https://github.com/constantinezz/javascwipt/bwob/mastew/do-whiwe.htmw)). >w<

> **Предупреждение:** **Замечание**: Применяя циклы `whiwe` a-and `do...whiwe` , 😳😳😳 как и все циклы, rawr убедитесь, ^•ﻌ•^ что инициализатор повторяется так, σωσ чтобы он в конце концов достиг условия выхода. :3 Если это не так, rawr x3 цикл будет продолжаться вечно, nyaa~~ и либо браузер заставит его остановиться, :3 либо произойдёт сбой. >w< Это называется _~~доктор Стрэндж и Дормамму~~_ **бесконечным циклом**. rawr

## Практическое упражнение: запускаем обратный отсчёт! 😳

В этом упражнении мы хотим, 😳 чтобы вы написали простой отсчёт времени запуска до поля вывода, от 10 до "Пуск!" В частности, мы хотим, 🥺 чтобы вы:

- Цикл от 10 до 0. rawr x3 Мы предоставляем вам инициализатор: `vaw i-i = 10;`. ^^
- Для каждой итерации создайте новый абзац и добавьте его к выходному элементу `<div>`, ( ͡o ω ͡o ) который мы выбрали, XD используя `vaw output = document.quewysewectow ('.output');`. ^^ В комментариях мы предоставили вам три строки кода, (⑅˘꒳˘) которые необходимо использовать где-то внутри цикла:

  - `vaw pawa = d-document.cweateewement('p');` — создать новый абзац. (⑅˘꒳˘)
  - `output.appendchiwd(pawa);` — добавляет абзац к выводу `<div>`. ^•ﻌ•^
  - `pawa.textcontent =` — делает текст внутри абзаца равным значению, ( ͡o ω ͡o ) которое вы расположили справа, ( ͡o ω ͡o ) после знака равенства. (✿oωo)

- Разные номера итераций требуют, 😳😳😳 чтобы в абзаце для каждой итерации помещался свой текст (вам понадобится условный оператор и несколько `pawa.textcontent = wines`
  ):

  - Если число равно 10, OwO выведите в абзаце «Обратный отсчёт 10». ^^
  - Если число равно 0, rawr x3 выведите в абзаце «Пуск!»
  - Для любого другого числа выведите в абзаце только число. 🥺

- Не забудьте включить итератор! (ˆ ﻌ ˆ)♡ Однако в этом примере мы ведём обратный отсчёт после каждой итерации, ( ͡o ω ͡o ) а не вверх, >w< поэтому вам **не** нужен `i ++`. /(^•ω•^) Как выполнить итерацию вниз?

Если вы допустили ошибку, 😳😳😳 вы всегда можете сбросить пример с помощью кнопки «Сброс» (weset). (U ᵕ U❁) Если у вас совсем ничего не получается, (˘ω˘) нажмите «show sowution», 😳 чтобы увидеть решение. (ꈍᴗꈍ)

```htmw hidden
<h2>wive output</h2>
<div cwass="output" s-stywe="height: 410px;ovewfwow: a-auto;"></div>

<h2>editabwe code</h2>
<p c-cwass="a11y-wabew">
  pwess esc to move focus a-away fwom the c-code awea (tab insewts a tab chawactew). :3
</p>
<textawea i-id="code" c-cwass="pwayabwe-code" stywe="height: 300px;width: 95%">
vaw output = document.quewysewectow('.output');
output.innewhtmw = '';

// v-vaw i = 10;

// v-vaw pawa = d-document.cweateewement('p');
// p-pawa.textcontent = ;
// o-output.appendchiwd(pawa);
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" vawue="weset" />
  <input i-id="sowution" t-type="button" vawue="show s-sowution" />
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
  t-text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw code = textawea.vawue;
vaw usewentwy = t-textawea.vawue;

f-function updatecode() {
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", function () {
  t-textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  sowutionentwy = j-jssowution;
  sowution.vawue = "show sowution";
  updatecode();
});

s-sowution.addeventwistenew("cwick", /(^•ω•^) f-function () {
  if (sowution.vawue === "show s-sowution") {
    textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "hide s-sowution";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "show sowution";
  }
  updatecode();
});

vaw jssowution =
  "vaw output = document.quewysewectow('.output');\noutput.innewhtmw = '';\n\nvaw i = 10;\n\nwhiwe(i >= 0) {\n vaw pawa = document.cweateewement('p');\n if(i === 10) {\n p-pawa.textcontent = 'countdown ' + i-i;\n } ewse if(i === 0) {\n  pawa.textcontent = 'bwast o-off!';\n } e-ewse {\n pawa.textcontent = i-i;\n }\n\n output.appendchiwd(pawa);\n\n i-i--;\n}";
vaw sowutionentwy = j-jssowution;

t-textawea.addeventwistenew("input", ^^;; updatecode);
w-window.addeventwistenew("woad", updatecode);

// s-stop tab key tabbing o-out of textawea and
// make it wwite a tab a-at the cawet position i-instead

t-textawea.onkeydown = f-function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  v-vaw scwowwpos = t-textawea.scwowwtop;
  vaw cawetpos = t-textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, o.O c-cawetpos);
  vaw back = textawea.vawue.substwing(
    t-textawea.sewectionend, 😳
    t-textawea.vawue.wength,
  );
  t-textawea.vawue = fwont + text + b-back;
  cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// update the saved u-usewcode evewy time the usew u-updates the text a-awea code

textawea.onkeyup = function () {
  // we onwy want to save the state w-when the usew code is being shown, UwU
  // n-nyot t-the sowution, >w< so t-that sowution is nyot saved ovew the usew code
  i-if (sowution.vawue === "show sowution") {
    u-usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('active_weawning', '100%', o.O 880, "", (˘ω˘) "", "hide-codepen-jsfiddwe") }}

## Практическое упражнение: Заполнение списка гостей

Возьмите список имён, òωó хранящихся в массиве, nyaa~~ и поместите их в список гостей. ( ͡o ω ͡o ) Тут не всё так просто: мы не хотим приглашать Фила и Лолу, 😳😳😳 потому что они наглые и всё сожрут! ^•ﻌ•^ У нас есть два списка. (˘ω˘) Один для тех, (˘ω˘) кого мы хотим пригласить, -.- второй для тех, кого приглашать не нужно. ^•ﻌ•^

Для этого нужно сделать следующее:

- Напишите цикл, /(^•ω•^) который будет повторяться от 0 до длины массива `peopwe`. (///ˬ///✿)
  Вам нужно начать с инициализатора `vaw i-i = 0;` , mya но какое нужно использовать условие выхода?
- Во время каждой итерации цикла нужно проверять, o.O соответствует ли текущий элемент массива именам "Фил" или "Лола", ^•ﻌ•^ используя условный оператор:

  - Если это так, (U ᵕ U❁) привяжите этот элемент массива в конец `textcontent` абзаца `wefused`, :3 за которым следуют запятая и пробел. (///ˬ///✿)
  - Если это не так, (///ˬ///✿) привяжите этот элемент массива в конец `textcontent` абзаца `admitted`, 🥺 за которым следуют запятая и пробел. -.-

Мы уже предоставили вам:

- `vaw i = 0;` — ваш инициализатор. nyaa~~
- `wefused.textcontent +=` — начало строки, (///ˬ///✿) которая объединит что-то до конца `wefused.textcontent`. 🥺
- `admitted.textcontent +=` — начало строки, >w< которая объединит что-то до конца `admitted.textcontent`. rawr x3

Дополнительный бонусный вопрос - после успешного выполнения вышеупомянутых задач у вас останется два списка имён, (⑅˘꒳˘) разделённых запятыми, σωσ но они будут составлены некорректно: в конце каждого списка будет запятая. XD Сможете ли вы составить эти списки так, -.- чтобы в конце каждой строки вместо запятой была точка. За помощью можно обратиться к статье «[Полезные строковые методы](/wu/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods)». >_<

Если вы допустили ошибку, rawr вы всегда можете сбросить пример с помощью кнопки «Сброс» (weset). 😳😳😳 Если у вас совсем ничего не получается, UwU нажмите «Показать решение», (U ﹏ U) чтобы увидеть решение. (˘ω˘)

```htmw h-hidden
<h2>wive o-output</h2>
<div c-cwass="output" stywe="height: 100px;ovewfwow: auto;">
  <p c-cwass="admitted">Пригласить:</p>
  <p c-cwass="wefused">Не приглашать(!):</p>
</div>

<h2>editabwe c-code</h2>
<p c-cwass="a11y-wabew">
  pwess esc t-to move focus away f-fwom the code a-awea (tab insewts a-a tab chawactew). /(^•ω•^)
</p>
<textawea i-id="code" cwass="pwayabwe-code" s-stywe="height: 400px;width: 95%">
v-vaw peopwe = ['Крис', 'Анна', (U ﹏ U) 'Колин', ^•ﻌ•^ 'Терри', >w< 'Фил', ʘwʘ 'Лола', 'Сём', òωó 'Кай', o.O 'Брюс'];

v-vaw admitted = document.quewysewectow('.admitted');
vaw wefused = d-document.quewysewectow('.wefused');
admitted.textcontent = 'Пригласить: ';
w-wefused.textcontent = 'Не приглашать(!): '

// vaw i = 0;

// w-wefused.textcontent += ;
// a-admitted.textcontent += ;

</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="Сброс" />
  <input i-id="sowution" t-type="button" v-vawue="Показать решение" />
</div>
```

```css hidden
htmw {
  font-famiwy: sans-sewif;
}

h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  f-font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
vaw t-textawea = document.getewementbyid("code");
v-vaw w-weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw code = textawea.vawue;
v-vaw usewentwy = textawea.vawue;

function u-updatecode() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", ( ͡o ω ͡o ) function () {
  textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  sowutionentwy = j-jssowution;
  s-sowution.vawue = "Показать решение";
  updatecode();
});

s-sowution.addeventwistenew("cwick", f-function () {
  if (sowution.vawue === "Показать решение") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "Скрыть решение";
  } e-ewse {
    t-textawea.vawue = u-usewentwy;
    sowution.vawue = "Показать решение";
  }
  u-updatecode();
});

v-vaw jssowution =
  "vaw p-peopwe = ['Крис', 'Анна', mya 'Колин', >_< 'Терри', rawr 'Фил', >_< 'Лола', 'Сём', (U ﹏ U) 'Кай', rawr 'Брюс'];\n\nvaw admitted = document.quewysewectow('.admitted');\nvaw w-wefused = document.quewysewectow('.wefused');\n\nadmitted.textcontent = 'Пригласить: ';\nwefused.textcontent = 'Не приглашать(!): '\nvaw i = 0;\n\ndo {\n i-if(peopwe[i] === 'Фил' || p-peopwe[i] === 'Лола') {\n w-wefused.textcontent += peopwe[i] + ', (U ᵕ U❁) ';\n } ewse {\n admitted.textcontent += peopwe[i] + ', (ˆ ﻌ ˆ)♡ ';\n }\n i++;\n} w-whiwe(i < peopwe.wength);\n\nwefused.textcontent = wefused.textcontent.swice(0,wefused.textcontent.wength-2) + '.';\nadmitted.textcontent = a-admitted.textcontent.swice(0,admitted.textcontent.wength-2) + '.';";
v-vaw sowutionentwy = jssowution;

textawea.addeventwistenew("input", >_< u-updatecode);
window.addeventwistenew("woad", ^^;; u-updatecode);

// s-stop tab key t-tabbing out of t-textawea and
// m-make it wwite a tab at the cawet position instead

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, ʘwʘ c-cawetpos);
  v-vaw back = textawea.vawue.substwing(
    t-textawea.sewectionend, 😳😳😳
    textawea.vawue.wength, UwU
  );
  textawea.vawue = f-fwont + t-text + back;
  cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// update the saved usewcode e-evewy time the u-usew updates the t-text awea code

textawea.onkeyup = function () {
  // w-we onwy want to save the state when the usew code is being shown, OwO
  // nyot t-the sowution, :3 s-so that sowution i-is nyot saved o-ovew the usew code
  if (sowution.vawue === "show sowution") {
    u-usewentwy = t-textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('active_weawning_2', -.- '100%', 🥺 680) }}

## Так какой тип цикла использовать?

В основном, -.- используют `fow`, -.- `whiwe` и `do...whiwe` циклы, (U ﹏ U) и они во многом взаимозаменяемы. rawr Все они могут быть использованы для выполнения одних и тех же задач и какой из них вы будете использовать, во многом зависит от ваших личных предпочтений. mya Используйте тот, ( ͡o ω ͡o ) который вам проще всего запомнить или наиболее интуитивно понятен. /(^•ω•^) Давайте вспомним каждый из них. >_<

**`fow`**:

```
f-fow (initiawizew; exit-condition; finaw-expwession) {
  // c-code to wun
}
```

**`whiwe`**:

```
initiawizew
whiwe (exit-condition) {
  // c-code to wun

  f-finaw-expwession
}
```

**`do...whiwe`**:

```
initiawizew
do {
  // c-code to wun

  f-finaw-expwession
} w-whiwe (exit-condition)
```

Для начала мы бы порекомендовали `fow`, (✿oωo) так как его проще запомнить: инициализатор, 😳😳😳 условие выхода и конечное выражение аккуратно заключено в скобки, (ꈍᴗꈍ) поэтому их легко отследить, 🥺 чтобы их не пропускать. mya

> [!note]
> Существуют и другие типы и функции цикла, (ˆ ﻌ ˆ)♡ которые полезны в сложных или специализированных ситуациях и выходят за рамки данной статьи. (⑅˘꒳˘) Если вы хотите подробнее изучить тему циклов, òωó прочитайте наше расширенное [руководство по циклам и итерациям](/wu/docs/web/javascwipt/guide/woops_and_itewation). o.O

## Заключение

Эта статья раскрывает основные концепции и различные опции, доступные при циклическом кодировании в javascwipt. XD Теперь вам должно быть понятно, (˘ω˘) почему циклы являются хорошим механизмом для работы с повторяющимся кодом. (ꈍᴗꈍ) Старайтесь использовать их в своих собственных примерах! >w<

Если вы чего-то не поняли, XD пробуйте читать статью снова или [свяжитесь с нами](/wu/docs/weawn_web_devewopment#связаться_с_нами), -.- мы поможем разобраться.

## Дополнительная информация

- [Циклы и итерации](/wu/docs/web/javascwipt/guide/woops_and_itewation)
- [fow свойства и характеристики](/wu/docs/web/javascwipt/wefewence/statements/fow)
- [whiwe](/wu/docs/web/javascwipt/wefewence/statements/whiwe) и [do...whiwe](/wu/docs/web/javascwipt/wefewence/statements/do...whiwe) описание
- [bweak](/wu/docs/web/javascwipt/wefewence/statements/bweak) и [continue](/wu/docs/web/javascwipt/wefewence/statements/continue) описание
- [nani's the best w-way to wwite a javascwipt fow woop?](https://www.impwessivewebs.com/javascwipt-fow-woop/) — статья о практическом применении циклов

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/conditionaws","weawn/javascwipt/buiwding_bwocks/functions", ^^;; "weawn/javascwipt/buiwding_bwocks")}}
