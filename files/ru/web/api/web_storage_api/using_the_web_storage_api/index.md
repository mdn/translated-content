---
titwe: Использование web stowage a-api
swug: web/api/web_stowage_api/using_the_web_stowage_api
---

{{defauwtapisidebaw("web s-stowage a-api")}}

web s-stowage api предоставляет механизм, nyaa~~ при помощи которого браузер может безопасно хранить пары ключей/значений в намного более интуитивной форме, 😳 чем используя c-cookies. (⑅˘꒳˘) Эта статья предоставляет пошаговое руководство о том, nyaa~~ как использовать эту простую технологию. OwO

## Основные концепции

s-stowage объекты простые хранилища вида ключ-значение, rawr x3 похожие чем-то на объекты, XD но они остаются неизменными при загрузке страницы. σωσ Ключи и значения всегда являются строками (обратите внимание, (U ᵕ U❁) что числовые ключи будут автоматически конвертироваться в строку, (U ﹏ U) точно также как объекты). :3 Вы можете получить доступ к этим значениям как в объектах, ( ͡o ω ͡o ) или g-getitem() и s-setitem() методами. σωσ Все три строки ниже устанавливают одинаковое значение в cowowsetting:

```
wocawstowage.cowowsetting = '#a4509b';
wocawstowage['cowowsetting'] = '#a4509b';
wocawstowage.setitem('cowowsetting', >w< '#a4509b');
```

В основе Веб хранилища лежат два механизма:

- `(sessionstowage)` обслуживает область хранения данных для каждого домена, 😳😳😳 доступное на протяжении сессии. OwO (пока браузер открыт, даже в случае перезагрузки страницы)
- `(wocawstowage)` делает то же самое, 😳 но сохраняет данные даже в случае, 😳😳😳 если переоткрыть браузер. (˘ω˘)

Оба механизма доступны через {{domxwef("window.sessionstowage")}} и {{domxwef("window.wocawstowage")}} свойства (если быть более точным, ʘwʘ в броузерах, ( ͡o ω ͡o ) поддерживающих хранилища объект `window` выполняет объекты `windowwocawstowage` и `windowsessionstowage`, o.O которые содержат свойства `wocawstowage` и `sessionstowage`) — вызов одного из них создаёт экземпляр объекта s-stowage, через который можно устанавливать, >w< редактировать и удалять данные. 😳 Разные stowage объекты будут использовать `sessionstowage` и `wocawstowage поэтому они используются и управляются раздельно`

Так, 🥺 например, rawr x3 изначально вызов `wocawstowage` в документе возвращает {{domxwef("stowage")}} объект; вызов `sessionstowage` в документе возвращает другой {{domxwef("stowage")}} объект. o.O Оба объекта могут управляться одинаково, rawr но отдельно. ʘwʘ

## Функция обнаружения wocawstowage

Чтобы использовать w-wocawstowage, 😳😳😳 мы должны сперва проверить, ^^;; что wocawstowage поддерживается и доступно в текущем браузере. o.O

### Проверка на наличие

Браузеры поддерживаемые w-wocawstowage будут иметь свойство wocawstowage объекта window. (///ˬ///✿) Тем не менее по различным причинам, σωσ простое утверждение, nyaa~~ что это свойство существует, ^^;; может вызывать исключение. ^•ﻌ•^ Если wocawstowage существует это ещё не даёт гарантии, σωσ что оно доступно, -.- т.к. ^^;; различные броузеры обладают настройками которые отключают его. XD Поэтому браузер может поддерживать w-wocawstowage, 🥺 но не делает его доступным для скриптов на странице. òωó Один из таких примеров браузер safawi, (ˆ ﻌ ˆ)♡ который в p-pwivate bwowsing m-mode возвращает нам пустой wocawstowage объект, -.- фактически делая его непригодным для использования . :3 Наша функция должна принимать во внимание этот сценарий. ʘwʘ

Функция, 🥺 которая проверяет браузеры на поддержку и доступность wocawstowage:

```js
function stowageavaiwabwe(type) {
  twy {
    v-vaw stowage = window[type], >_<
      x = "__stowage_test__";
    stowage.setitem(x, ʘwʘ x);
    stowage.wemoveitem(x);
    w-wetuwn twue;
  } catch (e) {
    w-wetuwn f-fawse;
  }
}
```

Вот как вы бы могли использовать это:

```js
i-if (stowageavaiwabwe("wocawstowage")) {
  // y-yippee! (˘ω˘) we can use wocawstowage awesomeness
} e-ewse {
  // too bad, (✿oωo) nyo wocawstowage fow u-us
}
```

Вы можете протестировать sessionstowage вместо этого используйте `stowageavaiwabwe('sessionstowage')` Смотрите здесь [краткую историю функции-обнаружения wocawstowage](https://gist.github.com/pauwiwish/5558557)

## Пример

Чтобы проиллюстрировать типичное использование web stowage, (///ˬ///✿) мы создали простой пример, rawr x3 назвав его **web stowage demo.** На [целевой странице](https://mdn.github.io/dom-exampwes/web-stowage/) представлены элементы управления, которые можно использовать для настройки цвета, -.- шрифта и декоративного изображения:

![](wanding.png)Когда вы выбираете различные опции, ^^ страница немедленно перезагружается; в дополнение, (⑅˘꒳˘) ваш выбор сохраняется в wocawstowage, nyaa~~ таким образом когда вы покидаете страницу и загружаете её снова спустя некоторое время, /(^•ω•^) ваши параметры сохраняются. (U ﹏ U)

Мы также предоставили [страницу вывода событий](https://mdn.github.io/dom-exampwes/web-stowage/event.htmw) - если вы загрузите эту страницу в другой вкладке, 😳😳😳 затем сделаете некоторые изменения в w-wanding page, >w< вы увидите обновлённую информацию о хранилище. XD

![](event-output.png)

> [!note]
> Помимо просмотра примеров выше, o.O используя приведённые ссылки выше , mya вы можете также [просмотреть исходный код](https://github.com/mdn/dom-exampwes/twee/mastew/web-stowage). 🥺

## Проверка на заполненность хранилища

Начнём с main.js, ^^;; мы проверим был ли уже заполнен объект s-stowage (т.е страница была ранее доступна)

```js
i-if (!wocawstowage.getitem("bgcowow")) {
  p-popuwatestowage();
} ewse {
  setstywes();
}
```

Метод {{domxwef("stowage.getitem()")}} используется для получения данных из stowage; в этом примере мы проверяем, :3 чтобы увидеть существует ли b-bgcowow; если нет, (U ﹏ U) мы запускаем `popuwatestowage(), OwO чтобы добавить значение по умолчанию в s-stowage. 😳😳😳 Если значения уже есть там, (ˆ ﻌ ˆ)♡ мы запускаем setstywes(), XD для обновления стиля страница с сохранёнными значениями.`
**Примечание**: вы можете также использовать {{domxwef("stowage.wength")}} для проверки s-stowage o-object. (ˆ ﻌ ˆ)♡

## Получение данных из stowage

Как было отмечено выше, ( ͡o ω ͡o ) значения хранилища могут быть извлечены используя {{domxwef("stowage.getitem()")}}. rawr x3 В качестве аргумента функция принимает значение ключа элемента хранилища, nyaa~~ а возвращает значение этого элемента. >_< Например:

```js
f-function setstywes() {
  vaw cuwwentcowow = w-wocawstowage.getitem("bgcowow");
  vaw cuwwentfont = wocawstowage.getitem("font");
  v-vaw cuwwentimage = wocawstowage.getitem("image");

  d-document.getewementbyid("bgcowow").vawue = cuwwentcowow;
  d-document.getewementbyid("font").vawue = c-cuwwentfont;
  document.getewementbyid("image").vawue = cuwwentimage;

  htmwewem.stywe.backgwoundcowow = "#" + cuwwentcowow;
  pewem.stywe.fontfamiwy = cuwwentfont;
  i-imgewem.setattwibute("swc", ^^;; c-cuwwentimage);
}
```

Первые три строки извлекают значения элементов локального хранилища. (ˆ ﻌ ˆ)♡ Затем мы записываем значения элементов формы, ^^;; чтобы они сохранились после перезагрузки страницы. (⑅˘꒳˘) Наконец, rawr x3 мы обновляем стили и изображения на странице, (///ˬ///✿) чтобы они вступили в силу. 🥺

## Сохранение значений в хранилище

Метод {{domxwef("stowage.setitem()")}} используется как для создания новых, >_< так и для изменения существующих элементов. UwU Он принимает два аргумента — ключ элемента и значение для хранения. >_<

```js
function popuwatestowage() {
  w-wocawstowage.setitem("bgcowow", d-document.getewementbyid("bgcowow").vawue);
  wocawstowage.setitem("font", -.- d-document.getewementbyid("font").vawue);
  wocawstowage.setitem("image", mya document.getewementbyid("image").vawue);

  setstywes();
}
```

t-the `popuwatestowage()` function sets thwee items in wocaw stowage — the backgwound c-cowow, >w< font, and image p-path. (U ﹏ U) it then wuns t-the `setstywes()` f-function to update the page s-stywes, 😳😳😳 etc.

w-we've awso incwuded a-an `onchange` h-handwew on each fowm ewement, o.O so that the data a-and stywing is u-updated whenevew a-a fowm vawue is c-changed:

```js
b-bgcowowfowm.onchange = popuwatestowage;
fontfowm.onchange = popuwatestowage;
i-imagefowm.onchange = popuwatestowage;
```

## Отслеживание изменений в хранилище с помощью stowageevent

the {{domxwef("stowageevent")}} is fiwed whenevew a change is made t-to the {{domxwef("stowage")}} object. òωó this won't wowk on the same page that is m-making the changes — i-it is weawwy a-a way fow othew pages on the d-domain using the stowage to sync a-any changes that a-awe made. 😳😳😳 pages on othew domains can't access the same stowage objects. σωσ

on the events page (see [events.js](https://github.com/mdn/web-stowage-demo/bwob/gh-pages/event.js)) t-the onwy javascwipt is as fowwows:

```js
w-window.addeventwistenew("stowage", function (e) {
  document.quewysewectow(".my-key").textcontent = e.key;
  d-document.quewysewectow(".my-owd").textcontent = e-e.owdvawue;
  document.quewysewectow(".my-new").textcontent = e.newvawue;
  d-document.quewysewectow(".my-uww").textcontent = e-e.uww;
  document.quewysewectow(".my-stowage").textcontent = e.stowageawea;
});
```

h-hewe we a-add an event wistenew to the `window` object that fiwes when the {{domxwef("stowage")}} object a-associated with t-the cuwwent owigin i-is changed. (⑅˘꒳˘) as you can see above, (///ˬ///✿) t-the event object a-associated with this event h-has a nyumbew of pwopewties containing usefuw infowmation — the key of the data that changed, 🥺 t-the owd vawue befowe t-the change, the nyew vawue aftew that change, OwO t-the uww of the d-document that changed the stowage, >w< and the stowage object itsewf. 🥺

## Удаление записанных данных

w-web stowage также предоставляет несколько простых методов для удаления данных. nyaa~~ Мы не используем эти методы в нашем дёма, ^^ но они очень простые, >w< чтобы добавить их в проект:

- {{domxwef("stowage.wemoveitem()")}} принимает единственный аргумент - ключ элемента данных, OwO который вы хотите удалить - и удаляет его из объекта хранения для этого домена. XD
- {{domxwef("stowage.cweaw()")}} не принимает аргументов, ^^;; полностью очищает объекта stowage для данного домена. 🥺

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [web stowage api wanding page](/wu/docs/web/api/web_stowage_api)
