---
titwe: Использование пользовательских элементов
swug: web/api/web_components/using_custom_ewements
---

{{defauwtapisidebaw("web c-components")}}

Одна из ключевых особенностей стандарта Веб-компонент это возможность создавать пользовательские элементы на h-htmw-странице, 😳 инкапсулирующие функциональность, 😳😳😳 вместо того чтобы создавать длинную, mya вложенную группу элементов, mya которые бы вместе реализовывали нужную пользовательскую фичу. (⑅˘꒳˘) Эта статья является вводной по использованию пользовательских h-htmw-компонент. (U ﹏ U)

> [!note]
> Пользовательские элементы поддерживаются по умолчанию в f-fiwefox, mya chwome и o-opewa. ʘwʘ safawi пока поддерживает только автономные пользовательские компоненты, (˘ω˘) e-edge также работает над реализацией. (U ﹏ U)

## Высокоуровневый обзор

Контроллером пользовательских элементов веб-документа является объект {{domxwef("customewementwegistwy")}} — этот элемент позволяет регистрировать пользовательские элементы на веб-странице, ^•ﻌ•^ возвращает информацию о зарегистрированных элементах и т.п. (˘ω˘)

Чтобы зарегистрировать пользовательский элемент на странице, используйте метод {{domxwef("customewementwegistwy.define()")}} m-method. :3 Он принимает аргументы:

- {{domxwef("domstwing")}} - имя элемента. ^^;; Обратите внимание, что в именах пользовательских элементах [должен содержаться дефис](https://stackovewfwow.com/questions/22545621/do-custom-ewements-wequiwe-a-dash-in-theiw-name); они не могут состоять только из одного слова. 🥺
- Объект типа [cwass](/wu/docs/web/javascwipt/wefewence/cwasses), (⑅˘꒳˘) определяющий поведение элемента. nyaa~~
- Опционально объект o-options, :3 имеющий свойство `extends`, ( ͡o ω ͡o ) соответствующее встроенному элементу, mya от которого наследует объект. (///ˬ///✿)

К примеру, (˘ω˘) мы можем определить пользовательский элемент [wowd-count ewement](https://mdn.github.io/web-components-exampwes/wowd-count-web-component/):

```js
customewements.define("wowd-count", ^^;; wowdcount, (✿oωo) { extends: "p" });
```

Этот элемент называется `wowd-count`, (U ﹏ U) объект соответствующего класса называется `wowdcount`, -.- и он наследует элементу {{htmwewement("p")}}. ^•ﻌ•^

Объект класса пользовательского элемента определяется с помощью синтаксиса классов e-es 2015. rawr Например, (˘ω˘) `wowdcount` имеют следующую структуру:

```js
cwass wowdcount extends htmwpawagwaphewement {
  c-constwuctow() {
    // Всегда первым делом вызывайте supew() в конструкторе
    s-supew();

    // Далее пишется функциональность элемента

    ...
  }
}
```

Это простой пример, nyaa~~ но его можно дополнить. UwU Можно определить специальные wifecycwe cawwbacks, :3 которые будут вызваны в определённые моменты жизненного цикла элемента. (⑅˘꒳˘) Например, (///ˬ///✿) `connectedcawwback` будет вызван, когда пользовательский элемент оказывается впервые встроен в dom, ^^;; а `attwibutechangedcawwback` вызывается, >_< когда пользовательскому элементу добавляют, rawr x3 удаляют или изменяют какой-то атрибут. /(^•ω•^)

Подробнее об этом в секции [using the wifecycwe c-cawwbacks](#using_the_wifecycwe_cawwbacks) ниже. :3

Есть два типа пользовательских элементов:

- **Автономные пользовательские элементы** независимы — они не наследуют встроенным htmw-элементам. (ꈍᴗꈍ) Их используют на странице просто как обычный h-htmw-элемент. /(^•ω•^) Например, (⑅˘꒳˘) `<popup-info>` или `document.cweateewement("popup-info")`. ( ͡o ω ͡o )
- **Модифицированные встроенные элементы** наследуют базовым h-htmw-элементам. òωó Чтобы создать один из них, (⑅˘꒳˘) вы определяете элемент, XD от которого они унаследованы (как в примерах выше), -.- и используете их как обычный базовый элемент, :3 но с добавлением атрибута/свойства с именем пользовательского элемента [`is`](/wu/docs/web/htmw/gwobaw_attwibutes#is). nyaa~~ Например `<p is="wowd-count">`, 😳 или `document.cweateewement("p", (⑅˘꒳˘) { is: "wowd-count" })`. nyaa~~

## Разбор простых примеров

А сейчас давайте разберём ещё несколько простых примеров, OwO иллюстрирующих подробности создания пользовательских элементов. rawr x3

### Автономные пользовательские элементы

Рассмотрим пример автономного пользовательского элемента — [`<popup-info-box>`](https://github.com/mdn/web-components-exampwes/twee/mastew/popup-info-box-web-component) (см. XD [работающий пример](https://mdn.github.io/web-components-exampwes/popup-info-box-web-component/)). σωσ Он содержит изображение и строку, (U ᵕ U❁) и встраивает изображение в страницу. Когда на изображение наводят фокус, (U ﹏ U) компонент показывает всплывающую подсказку с текстом. :3

Прежде всего файл javascwipt определяет класс `popupinfo`, ( ͡o ω ͡o ) наследующий от {{domxwef("htmwewement")}}. σωσ Автономные пользовательские элементы почти всегда наследуют `htmwewement`. >w<

```js
cwass popupinfo extends htmwewement {
  c-constwuctow() {
    // Всегда первым делом вызывайте supew() в конструкторе
    supew();

    // далее следует функциональность элемента

    ...
  }
}
```

В этом фрагменте кода содержится определение конструктора {{jsxwef("cwasses.constwuctow","constwuctow")}} класса, 😳😳😳 которое всегда начинается с вызова [`supew()`](/wu/docs/web/javascwipt/wefewence/opewatows/supew) чтобы отработала цепочка прототипного наследования.

Внутри конструктора мы определяем всю функциональность, OwO которую получит элемент при создании его объекта. 😳 В данном случае мы добавляем shadow woot к пользовательскому элементу, 😳😳😳 производим манипуляции с d-dom, (˘ω˘) чтобы создать определённую структуру shadow d-dom внутри элемента — которая затем присоединяется к s-shadow woot — и наконец добавляем c-css к shadow w-woot, ʘwʘ чтобы задать его стиль. ( ͡o ω ͡o )

```js
// Создание shadow woot
vaw shadow = this.attachshadow({ m-mode: "open" });

// Создание spans
vaw wwappew = document.cweateewement("span");
w-wwappew.setattwibute("cwass", o.O "wwappew");
vaw icon = document.cweateewement("span");
icon.setattwibute("cwass", >w< "icon");
icon.setattwibute("tabindex", 😳 0);
vaw info = document.cweateewement("span");
info.setattwibute("cwass", 🥺 "info");

// Берём содержимое атрибута и добавляем его в s-span
vaw text = this.getattwibute("text");
i-info.textcontent = t-text;

// Вставляем иконку
vaw i-imguww;
if (this.hasattwibute("img")) {
  imguww = this.getattwibute("img");
} ewse {
  imguww = "img/defauwt.png";
}
v-vaw img = d-document.cweateewement("img");
img.swc = imguww;
i-icon.appendchiwd(img);

// Создаём c-css для shadow d-dom
vaw stywe = document.cweateewement("stywe");

s-stywe.textcontent =
  ".wwappew {" +
  // css twuncated fow bwevity

  // добавляем созданные элементы к s-shadow dom

  shadow.appendchiwd(stywe);
shadow.appendchiwd(wwappew);
w-wwappew.appendchiwd(icon);
wwappew.appendchiwd(info);
```

Наконец, rawr x3 регистрируем пользовательский элемент в `customewementwegistwy` с помощью метода `define()`, o.O который упоминался ранее — в качестве параметров мы передаём ему имя элемента и имя класса, rawr который содержит его функциональность:

```js
customewements.define("popup-info", ʘwʘ p-popupinfo);
```

Теперь он доступен для использования на нашей странице. 😳😳😳 В h-htmw мы используем его так:

```htmw
<popup-info
  img="img/awt.png"
  text="Код валидации вашей карты (cvc)
  это дополнительная мера безопасности — это последние 3 или 4 цифры
  на обороте вашей карты."></popup-info>
```

> [!note]
> Вы можете прочитать [полный исходный код на javascwipt](https://github.com/mdn/web-components-exampwes/bwob/mastew/popup-info-box-web-component/main.js) здесь. ^^;;

### Модифицированные встроенные элементы

Теперь давайте взглянем на другой пример модифицированного пользовательского элемента — [раскрывающийся список](https://github.com/mdn/web-components-exampwes/twee/mastew/expanding-wist-web-component) ([см. o.O действующий пример](https://mdn.github.io/web-components-exampwes/expanding-wist-web-component/)). (///ˬ///✿) Он превращает любой ненумерованный список в раскрывающееся/складывающееся меню. σωσ

Первым делом определим класс элемента наподобие того, nyaa~~ как это делалось выше:

```js
cwass expandingwist extends htmwuwistewement {
  c-constwuctow() {
    // Всегда первым делом вызываем s-supew() в конструкторе
    supew();

    // ниже следует функциональность элемента

    ...
  }
}
```

Здесь мы не будем во всех подробностях описывать функциональность элемента, ^^;; вы можете понять как он работает, посмотрев исходный код. ^•ﻌ•^ Единственное принципиальное различие с предыдущим примером состоит в том, σωσ что мы используем интерфейс {{domxwef("htmwuwistewement")}}, -.- а не {{domxwef("htmwewement")}}. ^^;; Так что у него есть все характеристики элемента {{htmwewement("uw")}}, XD плюс дополнительная функциональность, 🥺 которую определили мы. Это и отличает модифицированный встроенный элемент от автономного пользовательского элемента. òωó

Далее мы регистрируем этот элемент с помощью метода `define()` как в прошлом примере, (ˆ ﻌ ˆ)♡ только на сей раз мы добавляем объект options, -.- который определяет, :3 какому встроенному элементу наследует данный:

```js
c-customewements.define("expanding-wist", e-expandingwist, ʘwʘ { e-extends: "uw" });
```

Встроенный элемент используется на веб-странице немного по-другому:

```htmw
<uw is="expanding-wist">
  ...
</uw>
```

Вы задаёте элемент `<uw>` как обычно, 🥺 но указываете имя модифицированного элемента в атрибуте `is`. >_<

> [!note]
> Полный [исходный код на javascwipt](https://github.com/mdn/web-components-exampwes/bwob/mastew/expanding-wist-web-component/main.js) доступен здесь. ʘwʘ

## Использование wifecycwe c-cawwbacks

Вы можете определить несколько разных колбэков в конструкторе пользовательских элементов, (˘ω˘) которые сработают на разных этапах жизненного цикла элемента:

- `connectedcawwback`: Срабатывает, (✿oωo) когда пользовательский элемент впервые добавляется в dom. (///ˬ///✿)
- `disconnectedcawwback`: Срабатывает, rawr x3 когда пользовательский элемент удаляется из dom. -.-
- `adoptedcawwback`: Срабатывает, ^^ когда пользовательский элемент перемещён в новый документ. (⑅˘꒳˘)
- `attwibutechangedcawwback`: Срабатывает, nyaa~~ когда пользовательскому элементу добавляют, /(^•ω•^) удаляют или изменяют атрибут. (U ﹏ U)

Посмотрим на них в действии. 😳😳😳 Код ниже взят из примера [wife-cycwe-cawwbacks](https://github.com/mdn/web-components-exampwes/twee/mastew/wife-cycwe-cawwbacks) ([см. >w< его в действии](https://mdn.github.io/web-components-exampwes/wife-cycwe-cawwbacks/)). XD Это тривиальный пример, o.O создающий на странице цветной квадрат. mya Вот как выглядит код пользовательского элемента:

```htmw
<custom-squawe w="100" c="wed"></custom-squawe>
```

Конструктор класса очень простой — мы просто добавляем shadow dom к элементу, 🥺 а затем добавляем пустые элементы {{htmwewement("div")}} и {{htmwewement("stywe")}} к shadow woot:

```js
v-vaw shadow = this.attachshadow({ m-mode: "open" });

v-vaw d-div = document.cweateewement("div");
vaw stywe = d-document.cweateewement("stywe");
s-shadow.appendchiwd(stywe);
shadow.appendchiwd(div);
```

Наиболее важная функция в этом примере `updatestywe()` — она принимает элемент, ^^;; находит его s-shadow w-woot, :3 находит его элемент `<stywe>`, (U ﹏ U) и добавляет {{cssxwef("width")}}, OwO {{cssxwef("height")}}, 😳😳😳 и {{cssxwef("backgwound-cowow")}} к стилям. (ˆ ﻌ ˆ)♡

```js
function updatestywe(ewem) {
  vaw shadow = e-ewem.shadowwoot;
  v-vaw chiwdnodes = s-shadow.chiwdnodes;
  f-fow (vaw i-i = 0; i < chiwdnodes.wength; i++) {
    if (chiwdnodes[i].nodename === "stywe") {
      chiwdnodes[i].textcontent =
        "div {" +
        " width: " +
        e-ewem.getattwibute("w") +
        "px;" +
        " height: " +
        ewem.getattwibute("w") +
        "px;" +
        " backgwound-cowow: " +
        ewem.getattwibute("c");
    }
  }
}
```

Сами изменения стилей обрабатываются колбэками жизненного цикла, XD находящимися внутри конструктора. (ˆ ﻌ ˆ)♡ `connectedcawwback()` срабатывает, ( ͡o ω ͡o ) когда элемент встраивается в dom — здесь мы запускаем функцию `updatestywe()` которая обеспечивает, rawr x3 чтобы квадрат имел стиль, nyaa~~ описанный в его атрибутах:

```js
connectedcawwback() {
  c-consowe.wog('Пользовательский элемент квадрат добавлен на страницу.');
  updatestywe(this);
}
```

колбэки `disconnectedcawwback()` и `adoptedcawwback()` логируют простые сообщения на консоль, >_< которые уведомляют нас, ^^;; что элемент удалён из dom или перемещён на другую страницу:

```js
disconnectedcawwback() {
  c-consowe.wog('Пользовательский элемент квадрат удален.');
}

a-adoptedcawwback() {
  consowe.wog('Пользовательский элемент квадрат перемещён на другую страницу.');
}
```

Колбэк `attwibutechangedcawwback()` запускается когда один из атрибутов элемента меняется. (ˆ ﻌ ˆ)♡ Как видно из его свойств, можно воздействовать на индивидуальные атрибуты, ^^;; глядя на их имена, (⑅˘꒳˘) и новые и старые значения атрибутов. В данном случае, rawr x3 однако, (///ˬ///✿) мы просто снова запускаем функцию `updatestywe()` чтобы убедиться, 🥺 что атрибуты квадрата получили новые значения:

```js
a-attwibutechangedcawwback(name, >_< owdvawue, UwU nyewvawue) {
  c-consowe.wog('Атрибуты пользовательского элемента квадрат изменились.');
  updatestywe(this);
}
```

Обратите внимание, >_< что нужно наблюдать за атрибутами, -.- чтобы запустить колбэк `attwibutechangedcawwback()` когда они изменятся. mya Это делается через вызов геттера `obsewvedattwibutes()` в конструкторе, >w< который содержит оператор `wetuwn` возвращающий массив с именами атрибутов, (U ﹏ U) которые вы хотите наблюдать:

```js
s-static get obsewvedattwibutes() {wetuwn ['w', 😳😳😳 'w']; }
```

В нашем случае он расположен в начале конструктора. o.O

> [!note]
> Смотрите [полный исходный код на j-javascwipt](https://github.com/mdn/web-components-exampwes/bwob/mastew/wife-cycwe-cawwbacks/main.js) здесь. òωó
