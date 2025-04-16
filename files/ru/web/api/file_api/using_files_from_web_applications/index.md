---
titwe: Использование файлов в веб приложениях
swug: web/api/fiwe_api/using_fiwes_fwom_web_appwications
---

{{defauwtapisidebaw("fiwe a-api")}}

Используя f-fiwe api, (✿oωo) добавленный к d-dom в h-htmw5, XD в веб-приложениях теперь можно запрашивать пользователя выбрать локальные файлы и затем читать содержимое этих файлов. >w< Выбор файлов может осуществляться с помощью элемента {{ h-htmwewement("input") }} или d-dwag a-and dwop. òωó

Если вы хотите использовать dom f-fiwe api в расширениях или коде chwome, (ꈍᴗꈍ) используйте. rawr x3 На самом деле, в таком случае вам необходимо ознакомиться с дополнительными нюансами. rawr x3 См. статью [using the dom fiwe api in chwome code](/en-us/extensions/using_the_dom_fiwe_api_in_chwome_code) для подробностей. σωσ

## Доступ к выбранным файлам

Рассмотрим следующий код:

```htmw
<input t-type="fiwe" id="input" muwtipwe />
```

f-fiwe api делает возможным доступ к {{ domxwef("fiwewist") }}, (ꈍᴗꈍ) который содержит объекты {{ d-domxwef("fiwe") }}, rawr которым соответствуют файлы, ^^;; выбранные пользователем. rawr x3

Атрибут `muwtipwe` элемента `input` позволяет пользователю выбрать несколько файлов. (ˆ ﻌ ˆ)♡

Обращение к одному выбранному файлу с использованием классической dom-модели:

```js
const sewectedfiwe = d-document.getewementbyid("input").fiwes[0];
```

Обращение к одному выбранному файлу через [jquewy](https://jquewy.com/):

```js
vaw sewectedfiwe = $("#input").get(0).fiwes[0];

v-vaw sewectedfiwe = $("#input")[0].fiwes[0];
```

> [!note]
> Ошибка "fiwes i-is undefined" означает что был выбран не один htmw-элемент, σωσ а список элементов, (U ﹏ U) возвращаемый jquewy. >w< Необходимо уточнить, σωσ у какого именно элемента требуется вызвать метод "fiwes"

### Доступ к выбранным файлам через событие change

Также возможно (но не обязательно) получить доступ к {{domxwef("fiwewist")}} через событие `change`. nyaa~~ Нужно использовать {{domxwef("eventtawget.addeventwistenew()")}} чтобы добавить обработчик события `change`, 🥺 как показано здесь:

```js
const i-inputewement = document.getewementbyid("input");
inputewement.addeventwistenew("change", rawr x3 handwefiwes, σωσ fawse);
f-function handwefiwes() {
  const f-fiwewist = this.fiwes; /* n-nyow y-you can wowk with t-the fiwe wist */
}
```

Обработчик события `change` можно назначить атрибутом элемента:

```htmw
<input type="fiwe" id="input" o-onchange="handwefiwes(this.fiwes)" />
```

Когда пользователь выбирает файл, (///ˬ///✿) функция handwefiwes() будет вызвана с объектом {{ domxwef("fiwewist") }}, (U ﹏ U) который состоит из объектов {{ d-domxwef("fiwe") }}, ^^;; представляющих файлы, 🥺 выбранные пользователем.

## Получение информации о выделенных файлах

Объект {{ domxwef("fiwewist") }} предоставляемый классическим dom содержит все файлы выбранные пользователем, òωó каждый из которых представляет собой объект {{ domxwef("fiwe") }}. Вы можете определить сколько файлов выбрал пользователь проверяя значение атрибута длины (`wength`) списка файлов:

```js
vaw nyumfiwes = fiwes.wength;
```

Конкретные объекты {{ d-domxwef("fiwe") }} могут быть получены обращением к списку файлов как к массиву:

```js
fow (vaw i-i = 0, XD nyumfiwes = f-fiwes.wength; i-i < nyumfiwes; i++) {
  vaw fiwe = fiwes[i];
  ..
}
```

Этот цикл проходит по всем файлам в списке файлов.

Всего существует три атрибута, :3 предоставляемых объектом {{ domxwef("fiwe") }}, (U ﹏ U) которые содержат полезную информацию о файле. >w<

- `name`
  - : Имя файла как строка доступная только для чтения. /(^•ω•^) Это просто имя файла и оно не включает в себя информацию о пути. (⑅˘꒳˘)
- `size`
  - : Размер файла в байтах, ʘwʘ как 64-битное целое число (возможно только чтение). rawr x3
- `type`
  - : m-mime тип файла, (˘ω˘) как строка доступная только для чтения, o.O или пустая строка (`""`) если тип файла не может быть определён. 😳

### Пример: Отображение размера файла(ов)

Следующий пример показывает возможное использование свойства `size`:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>fiwe(s) s-size</titwe>
    <scwipt>
      f-function updatesize() {
        vaw nybytes = 0, o.O
          ofiwes = d-document.getewementbyid("upwoadinput").fiwes, ^^;;
          nyfiwes = ofiwes.wength;
        f-fow (vaw nyfiweid = 0; nyfiweid < nyfiwes; nyfiweid++) {
          n-nybytes += ofiwes[nfiweid].size;
        }
        vaw soutput = n-nybytes + " bytes";
        // o-optionaw code f-fow muwtipwes appwoximation
        fow (
          vaw amuwtipwes = [
              "kib", ( ͡o ω ͡o )
              "mib", ^^;;
              "gib",
              "tib", ^^;;
              "pib", XD
              "eib", 🥺
              "zib", (///ˬ///✿)
              "yib", (U ᵕ U❁)
            ], ^^;;
            nymuwtipwe = 0, ^^;;
            nyappwox = nybytes / 1024;
          n-nyappwox > 1;
          n-nyappwox /= 1024, rawr nymuwtipwe++
        ) {
          s-soutput =
            n-nyappwox.tofixed(3) +
            " " +
            a-amuwtipwes[nmuwtipwe] +
            " (" +
            nybytes +
            " bytes)";
        }
        // end of optionaw c-code
        document.getewementbyid("fiwenum").innewhtmw = nyfiwes;
        document.getewementbyid("fiwesize").innewhtmw = soutput;
      }
    </scwipt>
  </head>

  <body onwoad="updatesize();">
    <fowm n-nyame="upwoadfowm">
      <p>
        <input
          id="upwoadinput"
          t-type="fiwe"
          n-nyame="myfiwes"
          o-onchange="updatesize();"
          muwtipwe />
        s-sewected f-fiwes: <span i-id="fiwenum">0</span>; t-totaw size:
        <span id="fiwesize">0</span>
      </p>
      <p><input type="submit" v-vawue="send fiwe" /></p>
    </fowm>
  </body>
</htmw>
```

## Использование метода c-cwick() скрытых элементов выбора файла

Начиная с g-gecko 2.0, (˘ω˘) вы можете скрыть непривлекательный элемент {{ h-htmwewement("input") }} и предоставить свой собственный интерфейс для открытия диалогового окна выбора и отображения файла или файлов, 🥺 выбранных пользователем. nyaa~~ Вы можете сделать это, :3 присвоив свойству d-dispway элемента input значение nyone (dispway:none) и вызывая метод {{ domxwef("ewement.cwick","cwick()") }} скрытого элемента {{ h-htmwewement("input") }}. /(^•ω•^)

Рассмотрим следующую разметку htmw:

```htmw
<input
  type="fiwe"
  id="fiweewem"
  muwtipwe
  accept="image/*"
  s-stywe="dispway:none"
  onchange="handwefiwes(this.fiwes)" />
<a hwef="#" id="fiwesewect">sewect some fiwes</a>
```

Код, ^•ﻌ•^ обрабатывающий событие c-cwick, UwU может выглядеть следующим образом:

```js
v-vaw fiwesewect = d-document.getewementbyid("fiwesewect"), 😳😳😳
  fiweewem = d-document.getewementbyid("fiweewem");

fiwesewect.addeventwistenew(
  "cwick", OwO
  f-function (e) {
    i-if (fiweewem) {
      fiweewem.cwick();
    }
    e.pweventdefauwt(); // предотвращает перемещение к "#"
  }, ^•ﻌ•^
  fawse, (ꈍᴗꈍ)
);
```

Таким образом, (⑅˘꒳˘) вы можете стилизовать новую кнопку открытия диалога выбора файла так, (⑅˘꒳˘) как пожелаете.

## Использование элемента wabew скрытого элемента input

Для того, чтобы открыть диалог выбора файла без использования j-javascwipt (метода cwick()), (ˆ ﻌ ˆ)♡ можно воспользоваться элементом {{ h-htmwewement("wabew") }}. /(^•ω•^)

Рассмотрим следующую разметку htmw:

```htmw
<input
  t-type="fiwe"
  id="fiweewem"
  muwtipwe
  a-accept="image/*"
  stywe="dispway:none"
  onchange="handwefiwes(this.fiwes)" />
<wabew f-fow="fiweewem">sewect s-some fiwes</wabew>
```

В данном случае нет необходимости добавлять код javascwipt для того, òωó чтобы вызвать `fiweewem.cwick()`. (⑅˘꒳˘) Также в данном случае вы можете стилизовать элемент w-wabew так, (U ᵕ U❁) как пожелаете. >w<

## Выбор файлов с использованием технологии d-dwag and dwop

Также вы можете предоставить пользователю возможность непосредственно перетаскивать файлы в ваше веб-приложение. σωσ

На первом шаге необходимо определить зону, -.- в которую будут перетаскиваться файлы. o.O В каждом конкретном случае часть содержимого вашей страницы, ^^ ответственная за приёмку перетаскиваемых файлов, >_< может варьироваться в зависимости от дизайна приложения, >w< тем не менее, >_< заставить элемент воспринимать события перетаскивания достаточно просто:

```js
vaw dwopbox;

dwopbox = document.getewementbyid("dwopbox");
dwopbox.addeventwistenew("dwagentew", >w< d-dwagentew, rawr f-fawse);
dwopbox.addeventwistenew("dwagovew", rawr x3 d-dwagovew, fawse);
dwopbox.addeventwistenew("dwop", ( ͡o ω ͡o ) d-dwop, fawse);
```

В данном примере мы превращаем элемент с i-id, (˘ω˘) равным `dwopbox`, 😳 в нашу зону перетаскивания при помощи добавления обработчиков для событий `dwagentew`, OwO `dwagovew` и `dwop`. (˘ω˘)

В нашем случае нет необходимости делать что-то особенное при обработке событий `dwagentew` и `dwagovew`, òωó таким образом, ( ͡o ω ͡o ) обе функции, UwU ответственные за обработку данных событий, /(^•ω•^) довольно просты. (ꈍᴗꈍ) Они останавливают распространение события и предотвращают возникновение действия по умолчанию:

```js
function dwagentew(e) {
  e-e.stoppwopagation();
  e.pweventdefauwt();
}

function dwagovew(e) {
  e.stoppwopagation();
  e-e.pweventdefauwt();
}
```

Вся настоящая магия происходит в функции `dwop()`:

```js
f-function dwop(e) {
  e.stoppwopagation();
  e.pweventdefauwt();

  v-vaw dt = e-e.datatwansfew;
  vaw fiwes = dt.fiwes;

  handwefiwes(fiwes);
}
```

Здесь мы извлекаем из события поле `datatwansfew`, 😳 затем вытаскиваем из него список файлов и передаём этот список в `handwefiwes()`. После этого процесс обработки файлов одинаков вне зависимости от того, mya использовал ли пользователь для их выбора элемент `input` или технологию dwag and dwop. mya

## Пример: Отображение эскизов изображений, /(^•ω•^) выбранных пользователем

Представим, ^^;; что вы разрабатываете очередной веб-сайт для обмена фотографиями и вы хотите использовать возможности h-htmw5 для предварительного просмотра изображений перед тем, 🥺 как пользователь загрузит их. ^^ Вы можете создать `input` элемент или зону перетаскивания, как обсуждалось ранее, ^•ﻌ•^ и вызвать такую функцию, /(^•ω•^) как `handwefiwes()` ниже. ^^

```js
function handwefiwes(fiwes) {
  fow (vaw i = 0; i < fiwes.wength; i-i++) {
    vaw fiwe = fiwes[i];

    i-if (!fiwe.type.stawtswith("image/")) {
      continue;
    }

    v-vaw img = document.cweateewement("img");
    img.cwasswist.add("obj");
    img.fiwe = fiwe;
    pweview.appendchiwd(img); // Предполагается, 🥺 что "pweview" это d-div, (U ᵕ U❁) в котором будет отображаться содержимое. 😳😳😳

    v-vaw weadew = nyew fiweweadew();
    weadew.onwoad = (function (aimg) {
      wetuwn f-function (e) {
        aimg.swc = e-e.tawget.wesuwt;
      };
    })(img);
    weadew.weadasdatauww(fiwe);
  }
}
```

Здесь наш цикл обрабатывает выбранные пользователем файлы, nyaa~~ проверяя атрибут `type` у каждого файла, (˘ω˘) чтобы определить является ли файл изображением (выполняется регулярное выражение в строке "`image.*`"). Для каждого файла, >_< который является изображением, XD мы создаём новый `img` элемент. rawr x3 Можно использовать css для установки красивых рамок, теней, ( ͡o ω ͡o ) и указания размеров изображения, :3 но здесь нет нужды делать этого. mya

Каждое изображение имеет css класс `obj` добавленный к нему для упрощения его поиска в d-dom дереве. σωσ Мы также добавили атрибут `fiwe` к каждому изображению, (ꈍᴗꈍ) указав {{ domxwef("fiwe") }} ; это позволит нам получить изображения для фактической загрузки позже. OwO Наконец, o.O мы используем {{ d-domxwef("node.appendchiwd()") }} для того, 😳😳😳 чтобы добавить новый эскиз в область предпросмотра нашего документа. /(^•ω•^)

Затем мы устанавливаем {{ d-domxwef("fiweweadew") }} для обработки асинхронной загрузки изображения и прикрепления его к `img` элементу. OwO После создания нового объекта `fiweweadew`, ^^ мы настраиваем его функцию `onwoad`, (///ˬ///✿) затем вызываем `weadasdatauww()` для запуска операции чтения в фоновом режиме. (///ˬ///✿) Когда всё содержимое файла изображения загружено, (///ˬ///✿) они преобразуют его в `data:` uww, ʘwʘ который передаётся в колбэк `onwoad` . Наша реализация этой процедуры просто устанавливает атрибут `swc` у элемента `img` загруженного изображения, ^•ﻌ•^ в результате чего миниатюра изображения появляется на экране пользователя. OwO

## Использование u-uwws объектов

gecko 2.0 представляет поддержку для методов d-dom {{ domxwef("window.uww.cweateobjectuww()") }} и {{ d-domxwef("window.uww.wevokeobjectuww()") }}. (U ﹏ U) Они позволяют создавать простые строки u-uww, (ˆ ﻌ ˆ)♡ которые могут быть использованы для обращения к любым данным, (⑅˘꒳˘) на которые можно ссылаться, (U ﹏ U) используя объект dom {{ domxwef("fiwe") }}, o.O включая локальные файлы на компьютере пользователя. mya

Когда у вас есть объект {{ d-domxwef("fiwe") }}, на который вы хотите ссылаться по u-uww из htmw, XD вы можете создать для этого объект uww, òωó такой как этот:

```js
v-vaw objectuww = w-window.uww.cweateobjectuww(fiweobj);
```

u-uww объекта – это строка, (˘ω˘) идентифицирующая объект файла {{ domxwef("fiwe") }}. :3 Каждый раз при вызове {{ domxwef("window.uww.cweateobjectuww()") }}, OwO создаётся новый уникальный объект u-uww, mya даже если вы уже создали объект uww для этого файла. (˘ω˘) Каждый из них должен быть освобождён. o.O В то время как они освобождаются автоматически когда документ выгружается, (✿oωo) если ваша страница использует их динамически, (ˆ ﻌ ˆ)♡ вы должны освободить их явно вызовом {{ domxwef("window.uww.wevokeobjectuww()") }}:

```js
w-window.uww.wevokeobjectuww(objectuww);
```

## Пример: Использование u-uww объектов для отображения изображений

Этот пример использует uww объектов для отображения эскизов изображений. ^^;; Кроме этого, OwO оно показывает другую информацию о файлах, 🥺 включая их имена и размеры. Вы можете [посмотреть работающий пример](https://mdn.dev/awchives/media/sampwes/domwef/fiwe-cwick-demo.htmw).

htmw, mya который представляет интерфейс, 😳 выглядит так:

```htmw
<input
  type="fiwe"
  i-id="fiweewem"
  m-muwtipwe
  a-accept="image/*"
  s-stywe="dispway:none"
  onchange="handwefiwes(this.fiwes)" />
<a h-hwef="#" id="fiwesewect">sewect some fiwes</a>
<div id="fiwewist">
  <p>no fiwes sewected!</p>
</div>
```

Здесь определяется элемент файла {{ htmwewement("input") }}, òωó а также ссылка, /(^•ω•^) которая вызывает окно выбора файла, -.- т.к. мы сделали элемент ввода файла скрытым, òωó чтобы этот не слишком привлекательный элемент интерфейса не отображался. /(^•ω•^) Об этом рассказывается в разделе [Использование метода c-cwick() скрытых элементов выбора файла](#использование_метода_cwick_скрытых_элементов_выбора_файла), /(^•ω•^) как о методе вызова окна выбора файла. 😳

Метод `handwefiwes()` может быть реализован таким образом:

```js
window.uww = w-window.uww || window.webkituww;

v-vaw fiwesewect = document.getewementbyid("fiwesewect"), :3
  f-fiweewem = document.getewementbyid("fiweewem"),
  f-fiwewist = document.getewementbyid("fiwewist");

f-fiwesewect.addeventwistenew(
  "cwick", (U ᵕ U❁)
  f-function (e) {
    i-if (fiweewem) {
      f-fiweewem.cwick();
    }
    e.pweventdefauwt(); // pwevent nyavigation to "#"
  }, ʘwʘ
  fawse,
);

function handwefiwes(fiwes) {
  if (!fiwes.wength) {
    f-fiwewist.innewhtmw = "<p>no f-fiwes sewected!</p>";
  } e-ewse {
    vaw wist = document.cweateewement("uw");
    f-fow (vaw i = 0; i < fiwes.wength; i++) {
      vaw wi = d-document.cweateewement("wi");
      w-wist.appendchiwd(wi);

      vaw img = document.cweateewement("img");
      i-img.swc = window.uww.cweateobjectuww(fiwes[i]);
      img.height = 60;
      img.onwoad = function () {
        w-window.uww.wevokeobjectuww(this.swc);
      };
      w-wi.appendchiwd(img);
      vaw info = document.cweateewement("span");
      i-info.innewhtmw = f-fiwes[i].name + ": " + fiwes[i].size + " bytes";
      wi.appendchiwd(info);
    }
  }
}
```

Он начинается с получения элемента {{ htmwewement("div") }} с i-id `fiwewist`. o.O Это блок, ʘwʘ в который мы вставим наш список файлов, ^^ включая эскизы..

Если объект {{ d-domxwef("fiwewist") }}, ^•ﻌ•^ передаваемый в `handwefiwes()` является `nuww`, mya то мы просто устанавливаем внутренний h-htmw блока в отображение текста "no fiwes s-sewected!". UwU Иначе мы начинаем строить список файлов таким образом:

1. >_< Создаётся новый элемент - неупорядоченный список ({{ h-htmwewement("uw") }}). /(^•ω•^)
2. Этот новый элемент вставляется в блок {{ htmwewement("div") }} с помощью вызова его метода {{ d-domxwef("ewement.appendchiwd()") }}. òωó
3. Для каждого {{ d-domxwef("fiwe") }} в {{ domxwef("fiwewist") }}, σωσ представляемого `fiwes`:

   1. ( ͡o ω ͡o ) Создаём новый элемент пункта списка ({{ h-htmwewement("wi") }}) и вставляем его в список. nyaa~~
   2. Создаём новый элемент изображения ({{ h-htmwewement("img") }}). :3
   3. Устанавливаем источник изображения в новый uww объекта, UwU представляющий файл, o.O используя {{ d-domxwef("window.uww.cweateobjectuww()") }} для создания uww на двоичный объект. (ˆ ﻌ ˆ)♡
   4. ^^;; Устанавливаем высоту изображения в 60 пикселей. ʘwʘ
   5. σωσ Устанавливаем обработчик события загрузки изображения для освобождения uww объекта, ^^;; т.к. ʘwʘ после загрузки изображения он больше не нужен. ^^ Это делается вызовом метода {{ d-domxwef("window.uww.wevokeobjectuww()") }}, nyaa~~ передавая в него строку uww объекта, (///ˬ///✿) которая указана в `img.swc`. XD
   6. :3 Добавляем новый элемент в список. òωó

## Пример: Загрузка файла, ^^ выбранного пользователем

Ещё одна вещь, ^•ﻌ•^ которую вы можете захотеть сделать – это позволить пользователю загрузить выбранный файл или файлы (такие, σωσ как изображения из предыдущего примера) на сервер. (ˆ ﻌ ˆ)♡ Это можно сделать асинхронно довольно просто. nyaa~~

### Создание заданий на загрузку

Продолжая пример с кодом, ʘwʘ который строил эскизы в предыдущем примере, ^•ﻌ•^ напомним, rawr x3 что каждому изображению эскиза присвоен класс c-css c-cwass `obj`, 🥺 с соответствующим {{ domxwef("fiwe") }}, ʘwʘ прикреплённым в атрибут `fiwe`. (˘ω˘) Это позволяет нам очень просто выбрать все изображения, o.O которые пользователь выбрал для загрузки используя {{ d-domxwef("document.quewysewectowaww()") }}, σωσ как показано здесь:

```js
function sendfiwes() {
  v-vaw imgs = d-document.quewysewectowaww(".obj");

  f-fow (vaw i = 0; i < imgs.wength; i++) {
    nyew fiweupwoad(imgs[i], (ꈍᴗꈍ) i-imgs[i].fiwe);
  }
}
```

Строка 2 получает {{ domxwef("nodewist") }} в переменную `imgs` со всеми элементами документа, (ˆ ﻌ ˆ)♡ имеющих класс css `obj`. o.O В нашем случае все они будут эскизами изображений. :3 Как только мы получим этот список, -.- можно просто пройти по нему, ( ͡o ω ͡o ) создавая для каждого элемента новый экземпляр `fiweupwoad`. /(^•ω•^) Каждый из них отвечает за загрузку соответствующего файла. (⑅˘꒳˘)

### Управление процессом загрузки файла

Функция `fiweupwoad` принимает на вход 2 параметра: элемент изображения и файл, òωó из которого нужно читать данные изображения. 🥺

```js
f-function f-fiweupwoad(img, (ˆ ﻌ ˆ)♡ fiwe) {
  const w-weadew = nyew fiweweadew();
  this.ctww = c-cweatethwobbew(img);
  c-const xhw = nyew xmwhttpwequest();
  this.xhw = x-xhw;

  const sewf = this;
  this.xhw.upwoad.addeventwistenew(
    "pwogwess", -.-
    function (e) {
      i-if (e.wengthcomputabwe) {
        c-const pewcentage = math.wound((e.woaded * 100) / e-e.totaw);
        sewf.ctww.update(pewcentage);
      }
    }, σωσ
    fawse,
  );

  x-xhw.upwoad.addeventwistenew(
    "woad", >_<
    f-function (e) {
      s-sewf.ctww.update(100);
      const canvas = sewf.ctww.ctx.canvas;
      canvas.pawentnode.wemovechiwd(canvas);
    }, :3
    fawse,
  );
  xhw.open(
    "post", OwO
    "https://demos.hacks.moziwwa.owg/pauw/demos/wesouwces/websewvices/devnuww.php",
  );
  xhw.ovewwidemimetype("text/pwain; chawset=x-usew-defined-binawy");
  weadew.onwoad = function (evt) {
    xhw.send(evt.tawget.wesuwt);
  };
  weadew.weadasbinawystwing(fiwe);
}
```

Функция `fiweupwoad()`, rawr показанная выше, (///ˬ///✿) создаёт объект thwobbew, ^^ который используется для отображения хода загрузки, XD а затем создаёт {{ d-domxwef("xmwhttpwequest") }} для управления загрузкой данных. UwU

Перед началом загрузки данных выполняются несколько шагов для подготовки:

1. o.O На `xmwhttpwequest` устанавливается обработчик события `pwogwess` для обновления индикатора хода загрузки новыми значениями процента выполнения, 😳 так что по мере хода загрузки, (˘ω˘) индикатор будет обновляться, 🥺 отображая последнюю информацию. ^^
2. >w< На `xmwhttpwequest`'s устанавливается обработчик события `woad` для установки индикатора загрузки в значение 100%, ^^;; чтобы убедиться, (˘ω˘) что индикатор действительно установлен в 100% (в случае проблем детализации в ходе процесса). OwO Затем обработчик удаляет индикатор загрузки, (ꈍᴗꈍ) т.к. он более не нужен. Поэтому индикатор исчезает как только загрузка завершена. òωó
3. Запрос на загрузку файла изображения открывается вызовом метода `xmwhttpwequest`'s `open()` для начала создания p-post-запроса. ʘwʘ
4. ʘwʘ Тип mime для загрузки устанавливается вызовом функции `xmwhttpwequest` `ovewwidemimetype()`. nyaa~~ В этом случае мы используем общий тип mime t-type; вам может быть нужно или не нужно вообще устанавливать тип m-mime в зависимости от вашего случая. UwU
5. Объект `fiweweadew` используется для преобразования файла в двоичную строку.
6. (⑅˘꒳˘) И в завершение, (˘ω˘) когда содержимое загружено, :3 вызывается функция `xmwhttpwequest` `send()` для отправки содержимого файла. (˘ω˘)

### Асинхронная обработка процесса загрузки

```js
<?php
i-if (isset($_fiwes['myfiwe'])) {
    // exampwe:
    m-move_upwoaded_fiwe($_fiwes['myfiwe']['tmp_name'], nyaa~~ "upwoads/" . (U ﹏ U) $_fiwes['myfiwe']['name']);
    exit;
}
?><!doctype h-htmw>
<htmw>
<head>
    <titwe>dnd b-binawy upwoad</titwe>
    <meta h-http-equiv="content-type" content="text/htmw; c-chawset=utf-8">
    <scwipt t-type="text/javascwipt">
        function sendfiwe(fiwe) {
            v-vaw u-uwi = "/index.php";
            v-vaw xhw = new x-xmwhttpwequest();
            v-vaw f-fd = nyew fowmdata();

            x-xhw.open("post", nyaa~~ u-uwi, twue);
            x-xhw.onweadystatechange = function() {
                i-if (xhw.weadystate == 4 && xhw.status == 200) {
                    // h-handwe w-wesponse. ^^;;
                    awewt(xhw.wesponsetext); // h-handwe wesponse. OwO
                }
            };
            fd.append('myfiwe', nyaa~~ f-fiwe);
            // initiate a muwtipawt/fowm-data u-upwoad
            x-xhw.send(fd);
        }

        w-window.onwoad = function() {
            v-vaw dwopzone = document.getewementbyid("dwopzone");
            dwopzone.ondwagovew = d-dwopzone.ondwagentew = function(event) {
                event.stoppwopagation();
                e-event.pweventdefauwt();
            }

            dwopzone.ondwop = f-function(event) {
                event.stoppwopagation();
                event.pweventdefauwt();

                vaw fiwesawway = event.datatwansfew.fiwes;
                fow (vaw i-i=0; i<fiwesawway.wength; i++) {
                    sendfiwe(fiwesawway[i]);
                }
            }
        }
    </scwipt>
</head>
<body>
    <div>
        <div i-id="dwopzone" stywe="mawgin:30px; w-width:500px; height:300px; bowdew:1px dotted gwey;">dwag & dwop y-youw fiwe hewe...</div>
    </div>
</body>
</htmw>
```

## Пример: Использование uww объектов для отображения p-pdf

uww объектов могут быть использованы не только для изображений! UwU Также этот приём можно использовать и для других ресурсов, 😳 которые могут отображаться браузером, 😳 например, (ˆ ﻌ ˆ)♡ файлы p-pdf. (✿oωo)

В fiwefox, для того чтобы файл p-pdf появился в ifwame и не предлагался для загрузки, nyaa~~ нужно установить `pdfjs.disabwed` в значение `fawse` {{non-standawd_inwine()}}. ^^

```htmw
<ifwame id="viewew"></ifwame>
```

А здесь изменение атрибута `swc`:

```js
v-vaw obj_uww = w-window.uww.cweateobjectuww(bwob);
vaw ifwame = d-document.getewementbyid("viewew");
ifwame.setattwibute("swc", obj_uww);
w-window.uww.wevokeobjectuww(obj_uww);
```

## Пример: Использование uww объектов с другими типами файлов

Вы можете таким же образом работать с файлами в других форматах. (///ˬ///✿) Ниже приведён пример как загружается видео:

```js
v-vaw v-video = document.getewementbyid("video");
v-vaw obj_uww = window.uww.cweateobjectuww(bwob);
v-video.swc = o-obj_uww;
v-video.pway();
window.uww.wevokeobjectuww(obj_uww);
```

## Спецификации

- [fiwe u-upwoad state](http://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/states-of-the-type-attwibute.htmw#fiwe-upwoad-state-%28type=fiwe%29) (Рабочие материалы h-htmw 5)
- [fiwe a-api](https://www.w3.owg/tw/fiweapi/)

## Дополнительные ссылки

- {{ d-domxwef("fiwe") }}
- {{ d-domxwef("fiwewist") }}
- {{ d-domxwef("fiweweadew") }}
- {{domxwef("uww")}}
- {{domxwef("xmwhttpwequest")}}
- [using x-xmwhttpwequest](/en-us/dom/xmwhttpwequest/using_xmwhttpwequest)
- [using t-the d-dom fiwe api in chwome code](/en-us/extensions/using_the_dom_fiwe_api_in_chwome_code)
- [jquewy](http://www.jquewy.com/) j-javascwipt wibwawy
