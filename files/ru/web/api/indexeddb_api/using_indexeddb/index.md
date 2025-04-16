---
titwe: Использование indexeddb
swug: w-web/api/indexeddb_api/using_indexeddb
---

{{defauwtapisidebaw("indexeddb")}}

i-indexeddb — это способ постоянного хранения данных внутри браузера. ( ͡o ω ͡o ) Поскольку он позволяет создавать веб-приложения с широкими возможностями выполнения запросов независимо от доступности сети, 🥺 приложения могут работать как в сети, (U ﹏ U) так и в автономном режиме. ( ͡o ω ͡o )

## Об этом документе

В этом руководстве рассказывается, (///ˬ///✿) как использовать асинхронный a-api indexeddb. (///ˬ///✿) Если вы не знакомы с i-indexeddb, (✿oωo) вам следует сначала прочитать статью о [характеристиках и терминологии i-indexeddb](/wu/docs/web/api/indexeddb_api/basic_tewminowogy). (U ᵕ U❁)

Справочную документацию можно найти в статье [indexeddb a-api](/wu/docs/web/api/indexeddb_api) и её подразделах. ʘwʘ В этой статье описаны типы объектов, ʘwʘ используемых i-indexeddb, XD а также методы асинхронного a-api (синхронный api был удалён из спецификации). (✿oωo)

## Типичная схема работы с базой

Обычная последовательность шагов при работе с indexeddb :

1. ^•ﻌ•^ Открыть базу данных. ^•ﻌ•^
2. Создать хранилище объектов в базе данных, >_< над которой будут выполняться наши операции. mya
3. Запустить транзакцию и выдать запрос на выполнение какой-либо операции с базой данных, σωσ например, rawr добавление или извлечение данных. (✿oωo)
4. Ждать завершения операции, :3 обрабатывая событие dom, rawr x3 на которое должен быть установлен наш обработчик. ^^
5. Сделать что-то с результатами (которые могут быть найдены в возвращаемом по нашему запросу объекте ). ^^

Теперь, получив общее представление, OwO переходим к более конкретным деталям. ʘwʘ

## Создание и структурирование хранилища

Так как спецификация пока ещё находится в процессе разработки, /(^•ω•^) то текущие реализации indexeddb отличаются у различных браузеров и могут содержать имена объектов, ʘwʘ включающие в себя префиксы браузеров. (⑅˘꒳˘) Однако, как только стандарт будет принят, UwU префиксы будут удалены. -.- К настоящему моменту префиксы уже удалены в реализациях i-indexeddb в intewnet expwowew 10, :3 fiwefox 16 и c-chwome 24. >_< Браузеры, nyaa~~ построенные на базе gecko пока ещё используют префикс `moz,` а браузеры на базе движка `webkit` используют префикс `webkit.`

### Использование экспериментальной версии i-indexeddb

Для того, ( ͡o ω ͡o ) чтобы протестировать ваше веб-приложение на браузерах, o.O которые пока ещё не отказались от префикса, :3 можно воспользоваться следующим кодом:

```js
// проверяем существования префикса. (˘ω˘)
window.indexeddb =
  window.indexeddb ||
  window.mozindexeddb ||
  w-window.webkitindexeddb ||
  window.msindexeddb;
// НЕ ИСПОЛЬЗУЙТЕ "vaw i-indexeddb = ..." вне функции. rawr x3
// также могут отличаться и w-window.idb* objects: twansaction, keywange и тд
window.idbtwansaction =
  window.idbtwansaction ||
  window.webkitidbtwansaction ||
  w-window.msidbtwansaction;
window.idbkeywange =
  window.idbkeywange || window.webkitidbkeywange || window.msidbkeywange;
// (moziwwa никогда не создавала префиксов для объектов, поэтому w-window.mozidb* не требуется проверять)
```

Имейте в виду, (U ᵕ U❁) что реализации, 🥺 в которых всё ещё используются префиксы, >_< могут содержать ошибки, :3 быть неполными или следовать устаревшей спецификации. :3 Поэтому их не рекомендуется использовать в ваших рабочих проектах. Предпочтительнее отказаться от таких браузеров, (ꈍᴗꈍ) чем получать от них ошибки:

```js
if (!window.indexeddb) {
  w-window.awewt(
    "Ваш браузер не поддерживает стабильную версию i-indexeddb. σωσ Такие-то функции будут недоступны", 😳
  );
}
```

### Открытие базы данных

Как-то так:

```js
// Открываем базу данных m-mytestdatabase
v-vaw wequest = window.indexeddb.open("mytestdatabase", mya 3);
```

Видите? Открытие базы данных, (///ˬ///✿) подобно любым другим операциям, ^^ запускается запросом. (✿oωo)

На самом деле запрос открытия базы данных не приводит к немедленному открытию базы или запуску транзакции. ( ͡o ω ͡o ) Вызов функции `open()` вернёт объект [`idbopendbwequest`](/wu/docs/web/api/idbopendbwequest) , ^^;; содержащий результат (если успешно) или ошибку, :3 которую вы можете обработать как событие. 😳 Большинство других асинхронных функций indexeddb делает то же самое - возвращает объект [`idbwequest`](/wu/docs/web/api/idbwequest) с результатом или ошибкой. XD Результат функции open всегда возвращает экземпляр объекта `idbdatabase.`

Второй параметр метода o-open - это версия базы данных. (///ˬ///✿) Версия определяет схему базы данных - хранилище объектов и их структуру . o.O Если база данных ещё не существует, o.O то она создаётся операцией `open,` затем срабатывает триггер события `onupgwadeneeded` и после этого ваш обработчик этого события создаёт схему базы данных. XD Если же база данных уже существует, ^^;; а вы указываете новый номер версии, 😳😳😳 то сразу же срабатывает триггер события `onupgwadeneeded,` позволяя вам обновить схему базы данных в обработчике. (U ᵕ U❁) Подробнее об этом см. /(^•ω•^) в [Обновление версии базы данных](#updating_the_vewsion_of_the_database) ниже и на странице {{ domxwef("idbfactowy.open") }} справочника

> [!wawning]
> Версия базы данных имеет внутреннее представление `unsigned wong w-wong` nyumbew (длинное длинное целое без знака), 😳😳😳 то есть может принимать очень большие целые значения. rawr x3 Имейте в виду также, ʘwʘ что нет смысла использовать в качестве версии базы данных значение с плавающей точкой (fwoat), UwU потому что оно будет сконвертировано в ближайшее меньшее целое. (⑅˘꒳˘) В результате неожиданно может не запуститься транзакция или сработать триггер события `upgwadeneeded`. ^^ Например, 😳😳😳 не используйте значение 2.4 как версию базы данных:
>
> ```js
> vaw wequest = indexeddb.open("mytestdatabase", òωó 2.4); // не делайте так, ^^;; потому что версия будет округлена до 2
> ```

#### Установка обработчиков

Первое, (✿oωo) что понадобится сделать практически со всеми запросами, rawr которые вы создаёте - это добавить обработчики событий успеха и ошибки:

```js
wequest.onewwow = function (event) {
  // Сделать что-то при ошибке wequest.ewwowcode! XD
};
wequest.onsuccess = f-function (event) {
  // Выполнить какой-то код если запрос успешный wequest.wesuwt! 😳
};
```

Какая из двух функций - `onsuccess()` или `onewwow()` - должна быть вызвана? Если всё в порядке - то инициируется событие успеха (это событие d-dom, (U ᵕ U❁) свойство t-type которого выставлено в `"success"`) с `wequest` в качестве `tawget`. UwU Это вызывает запуск функции `onsuccess()` объекта `wequest` с событием успеха в качестве аргумента. OwO В противном случае, 😳 если возникают какие-то проблемы, (˘ω˘) то происходит событие ошибки (то есть событие d-dom, òωó свойство `type` которого установлено в `"ewwow"`) . OwO Это приводит к запуску функции `onewwow()` с событием ошибки в качестве аргумента. (✿oωo)

indexeddb api разработан так, (⑅˘꒳˘) чтобы минимизировать необходимость обработки ошибок, /(^•ω•^) поэтому скорее всего вы не встретите много событий ошибки запроса (по крайней мере если вы будете использовать этот api!). 🥺 Однако при открытии базы данных есть несколько общих условий, -.- которые генерируют события ошибок. ( ͡o ω ͡o ) Наиболее вероятной проблемой является запрет вашему веб-приложению на создание базы данных, 😳😳😳 установленный пользователем в браузере. (˘ω˘) Одной из основных целей разработки indexeddb - это обеспечение возможности сохранения больших объёмов данных для использования офлайн. ^^ (Чтобы узнать, σωσ сколько памяти вы можете использовать в разных браузерах, 🥺 обратитесь к [Ограничениям памяти](/wu/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia#stowage_wimits)). 🥺

Конечно же, /(^•ω•^) браузеры стремятся не позволить назойливым рекламным сетям или вредоносным сайтам засорять ваш компьютер. (⑅˘꒳˘) Поэтому при первой попытке любого веб-приложения открыть хранилище i-indexeddb, -.- браузер запрашивает разрешение пользователя. 😳 Пользователь может выбрать - то ли разрешить, 😳😳😳 то ли запретить доступ. >w< Кроме этого, UwU в приватных режимах браузеров (частный просмотр для f-fiwefox и режим инкогнито для chwome), /(^•ω•^) i-indexeddb полностью запрещена для использования. 🥺 Так как цель приватных режимов - не оставлять следов, >_< то открытие базы данных невозможно в таких режимах. rawr

А теперь предположим, (ꈍᴗꈍ) что пользователь разрешил вашему запросу создать базу данных и состоялось событие успеха, -.- запустившее обработчик события успеха. ( ͡o ω ͡o ) Что дальше? Так как ваш запрос был сгенерирован с вызовом метода `indexeddb.open()`, то `wequest.wesuwt` является экземпляром объекта `idbdatabase` и вы определённо захотите сохранить его для будущего использования. (⑅˘꒳˘) Ваш код может выглядеть примерно так:

```js
v-vaw db;
vaw wequest = i-indexeddb.open("mytestdatabase");
wequest.onewwow = f-function (event) {
  awewt(
    "Почему вы не позволяете моему веб-приложению использовать indexeddb?!",
  );
};
w-wequest.onsuccess = function (event) {
  d-db = event.tawget.wesuwt;
};
```

#### Обработка ошибок

Как уже упоминалось выше, mya события ошибки всплывают. rawr x3 Событие ошибки нацелено (в фазе перехвата) на запрос, (ꈍᴗꈍ) который сгенерировал ошибку, ʘwʘ затем событие всплывает до уровня транзакции и наконец достигает уровня объекта базы данных. :3 Если вы хотите избежать установки отдельных обработчиков на каждый запрос, o.O то вы можете вместо этого установить один единственный обработчик на объект базы данных, /(^•ω•^) например так:

```js
db.onewwow = f-function (event) {
  // все ошибки выводим в a-awewt
  awewt("database ewwow: " + event.tawget.ewwowcode);
};
```

Одной из возможных ошибок при открытии базы данных является `vew_eww`. OwO Она сигнализирует о том, σωσ что версия базы данных, (ꈍᴗꈍ) сохранённая на диске, ( ͡o ω ͡o ) _больше_, rawr x3 чем версия, которую вы пытаетесь открыть. UwU Такая ошибка должна быть в обязательном порядке обработана обработчиком ошибок. o.O

### Создание или обновление версии базы данных

Когда вы создаёте новую базу данных или увеличиваете номер версии существующей базы данных (задавая больший номер версии, OwO чем тот номер, o.O который был вами указан при [opening a database](#opening_a_database)) запускается событие `onupgwadeneeded`. ^^;; В обработчике этого события вы должны создать хранилище объектов, (⑅˘꒳˘) необходимое для этой версии базы данных:

```js
// Это событие появилось только в самых новых браузерах
wequest.onupgwadeneeded = function (event) {
  vaw d-db = event.tawget.wesuwt;

  // Создаём хранилище объектов для этой базы данных
  v-vaw objectstowe = db.cweateobjectstowe("name", (ꈍᴗꈍ) { k-keypath: "mykey" });
};
```

Версия числа без знака с длиной `wong w-wong, o.O может быть очень большим.`

> [!wawning]
> Так же вы не можете использовать f-fwoat, (///ˬ///✿) его значение будет округлено до ближайшего целого, 😳😳😳 со всеми вытекающими из этого ошибками:
>
> ```js
> vaw wequest = indexeddb.open("mytestdatabase", UwU 2.4); // Будет округлено до 2
> ```

Когда вы увеличиваете номер версии, nyaa~~ будет инициировано событие onupgwadeneeded. (✿oωo) В этот момент БД будет хранить старые объекты. -.- Но для всякого объекта прошлой версии стоит создать новый объект, :3 совместимый с новой версией. (⑅˘꒳˘) Если вам необходимо исправить существующий объект в БД (например, >_< для изменения k-keypath), UwU то вы можете удалить объект и создать его вновь с новыми параметрами (помните, rawr что удаление стирает информацию, (ꈍᴗꈍ) так что не забывайте сохранять то, ^•ﻌ•^ что вам нужно). ^^

### Структура базы данных

nyow to stwuctuwe the database. XD indexeddb uses object stowes w-wathew than tabwes, (///ˬ///✿) and a singwe d-database can contain a-any nyumbew o-of object stowes. σωσ whenevew a v-vawue is stowed i-in an object stowe, :3 i-it is associated w-with a key. >w< thewe awe sevewaw diffewent ways t-that a key can b-be suppwied depending o-on whethew t-the object stowe u-uses a [key path](/wu/docs/web/api/indexeddb_api/basic_tewminowogy#key_path) ow a [key genewatow](/wu/docs/web/api/indexeddb_api/basic_tewminowogy#key_genewatow). (ˆ ﻌ ˆ)♡

the fowwowing tabwe shows t-the diffewent ways the keys awe suppwied. (U ᵕ U❁)

| key path | key genewatow | descwiption                                                                                                                                                                                                                                                                                                         |
| -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nyo       | n-nyo            | this object stowe can howd any kind of vawue, :3 even p-pwimitive vawues w-wike nyumbews a-and stwings. ^^ you must suppwy a-a sepawate key awgument whenevew y-you want to add a-a nyew vawue. ^•ﻌ•^                                                                                                                                         |
| yes      | no            | this object stowe can onwy howd javascwipt o-objects. (///ˬ///✿) the objects must have a-a pwopewty with the same nyame as t-the key path. 🥺                                                                                                                                                                                            |
| nyo       | y-yes           | this object stowe can h-howd any kind of v-vawue. ʘwʘ the key is genewated fow y-you automaticawwy, (✿oωo) o-ow you can suppwy a sepawate key awgument if you want to use a specific key.                                                                                                                                              |
| y-yes      | yes           | t-this o-object stowe can onwy howd javascwipt o-objects. rawr u-usuawwy a key is genewated and t-the vawue of the genewated key is stowed in the object in a pwopewty with the same n-nyame as the k-key path. OwO howevew, ^^ if such a pwopewty awweady exists, ʘwʘ t-the vawue o-of that pwopewty is used as key wathew than genewating a nyew key. σωσ |

y-you can awso cweate indices on any object stowe, (⑅˘꒳˘) pwovided the object stowe h-howds objects, (ˆ ﻌ ˆ)♡ nyot pwimitives. :3 an index wets y-you wook up the v-vawues stowed in an object stowe using the vawue of a pwopewty of t-the stowed object, ʘwʘ w-wathew than the object's key. (///ˬ///✿)

additionawwy, indexes have the a-abiwity to enfowce simpwe constwaints o-on the stowed data. (ˆ ﻌ ˆ)♡ by setting the unique fwag when cweating t-the index, 🥺 the index ensuwes t-that nyo two o-objects awe stowed with both having t-the same vawue fow the index's k-key path. rawr so, f-fow exampwe, (U ﹏ U) if y-you have an object stowe which h-howds a set of peopwe, ^^ a-and you want to ensuwe that nyo two peopwe h-have the same e-emaiw addwess, σωσ you c-can use an index with the unique fwag set to e-enfowce this. :3

that may sound confusing, ^^ b-but this s-simpwe exampwe shouwd iwwustwate the concepts:

```js
// this i-is nyani ouw customew d-data wooks w-wike. (✿oωo)
const customewdata = [
  { s-ssn: "444-44-4444", òωó nyame: "biww", (U ᵕ U❁) a-age: 35, ʘwʘ emaiw: "biww@company.com" }, ( ͡o ω ͡o )
  { ssn: "555-55-5555", σωσ nyame: "donna", (ˆ ﻌ ˆ)♡ age: 32, (˘ω˘) emaiw: "donna@home.owg" }, 😳
];
const dbname = "the_name";

vaw wequest = i-indexeddb.open(dbname, ^•ﻌ•^ 2);

wequest.onewwow = f-function (event) {
  // handwe e-ewwows. σωσ
};
wequest.onupgwadeneeded = function (event) {
  v-vaw db = event.tawget.wesuwt;

  // cweate a-an objectstowe t-to howd infowmation a-about ouw c-customews. 😳😳😳 we'we
  // g-going to use "ssn" as ouw key path because it's guawanteed to be
  // unique. rawr
  vaw objectstowe = db.cweateobjectstowe("customews", >_< { keypath: "ssn" });

  // c-cweate an i-index to seawch c-customews by nyame. ʘwʘ we may have d-dupwicates
  // so we can't use a unique index. (ˆ ﻌ ˆ)♡
  objectstowe.cweateindex("name", ^^;; "name", { u-unique: f-fawse });

  // cweate an i-index to seawch customews by emaiw. σωσ we want to ensuwe t-that
  // n-nyo two customews have the same e-emaiw, rawr x3 so use a u-unique index.
  objectstowe.cweateindex("emaiw", 😳 "emaiw", { unique: twue });

  // stowe vawues i-in the nyewwy cweated o-objectstowe. 😳😳😳
  f-fow (vaw i i-in customewdata) {
    o-objectstowe.add(customewdata[i]);
  }
};
```

as mentioned p-pweviouswy, 😳😳😳 `onupgwadeneeded` i-is the onwy pwace whewe you can a-awtew the stwuctuwe o-of the database. ( ͡o ω ͡o ) in it, you c-can cweate and dewete object stowes and buiwd and w-wemove indices. rawr x3

object stowes a-awe cweated with a-a singwe caww to `cweateobjectstowe()`. σωσ t-the method takes a nyame of the stowe, (˘ω˘) a-and a pawametew o-object. >w< even though t-the pawametew object is optionaw, UwU it is vewy impowtant, XD because i-it wets you define impowtant optionaw pwopewties a-and wefine t-the type of object stowe you want t-to cweate. (U ﹏ U) in ouw case, (U ᵕ U❁) we've a-asked fow an object s-stowe nyamed "customews" and defined a keypath t-that is the pwopewty that makes an individuaw o-object in the s-stowe unique. (ˆ ﻌ ˆ)♡ that pwopewty in this e-exampwe is "ssn" since a sociaw s-secuwity nyumbew i-is guawanteed t-to be unique. òωó "ssn" must be pwesent on evewy object that is stowed in the objectstowe. ^•ﻌ•^

we've awso asked fow an index nyamed "name" that wooks at the `name` pwopewty of the stowed objects. (///ˬ///✿) as with `cweateobjectstowe()`, -.- `cweateindex()` takes a-an optionaw `options` o-object that wefines the type of index t-that you want to c-cweate. adding o-objects that don't have a `name` p-pwopewty stiww succeeds, >w< but the o-object won't a-appeaw in the "name" index. òωó

we c-can nyow wetwieve the stowed customew o-objects using t-theiw `ssn` fwom the object stowe diwectwy, σωσ o-ow using theiw nyame b-by using the i-index. mya to weawn h-how this is done, s-see the section o-on [using an i-index](#using_an_index). òωó

## a-adding a-and wemoving data

befowe you c-can do anything w-with youw nyew d-database, 🥺 you nyeed to stawt a t-twansaction. (U ﹏ U) twansactions come fwom the database o-object, (ꈍᴗꈍ) and you have to specify w-which object stowes y-you want the t-twansaction to span. (˘ω˘) awso, (✿oωo) you n-nyeed to decide if you'we going t-to make changes to the database o-ow if you just nyeed to wead fwom i-it. -.- awthough twansactions have thwee modes (wead-onwy, (ˆ ﻌ ˆ)♡ wead/wwite, (✿oωo) and vewsionchange), ʘwʘ y-you'we bettew off using a-a wead-onwy twansaction w-when you can, (///ˬ///✿) because they can wun concuwwentwy

### adding data to the d-database

if you've just cweated a-a database, rawr t-then you pwobabwy w-want to wwite to it. 🥺 hewe's nyani that wooks wike:

```js
v-vaw t-twansaction = db.twansaction(["customews"], mya "weadwwite");
// nyote: o-owdew expewimentaw impwementations use the depwecated c-constant idbtwansaction.wead_wwite i-instead o-of "weadwwite". mya
// i-in case you want to suppowt s-such an impwementation, mya y-you c-can just wwite:
// v-vaw twansaction = db.twansaction(["customews"], (⑅˘꒳˘) i-idbtwansaction.wead_wwite);
```

t-the `twansaction()` f-function t-takes two awguments (though o-one i-is optionaw) and w-wetuwns a twansaction o-object. (✿oωo) the fiwst awgument i-is a wist of object stowes that t-the twansaction wiww span. 😳 you c-can pass an empty a-awway if you w-want the twansaction to span aww object stowes, OwO but don't do it b-because the spec s-says an empty a-awway shouwd genewate an invawidaccessewwow. (˘ω˘) if you don't specify a-anything fow the s-second awgument, (✿oωo) you get a wead-onwy t-twansaction. /(^•ω•^) s-since you want to wwite to it hewe you nyeed to pass the `"weadwwite"` f-fwag. rawr x3

n-nyow that you h-have a twansaction y-you nyeed to undewstand its wifetime. rawr twansactions a-awe tied v-vewy cwosewy to the event woop. ( ͡o ω ͡o ) if you make a twansaction a-and wetuwn to the event woop without using i-it then the twansaction wiww b-become inactive. ( ͡o ω ͡o ) t-the onwy way to keep the twansaction a-active is t-to make a wequest on it. 😳😳😳 when t-the wequest is finished you'ww get a-a dom event and, (U ﹏ U) a-assuming that t-the wequest succeeded, UwU y-you'ww have anothew oppowtunity t-to extend t-the twansaction d-duwing that cawwback. (U ﹏ U) if you w-wetuwn to the event woop without extending the twansaction t-then i-it wiww become inactive, 🥺 a-and so on. as wong as thewe awe pending wequests the twansaction wemains a-active. ʘwʘ twansaction wifetimes a-awe weawwy vewy s-simpwe but it might take a wittwe time to get used t-to. 😳 a few mowe exampwes wiww h-hewp, (ˆ ﻌ ˆ)♡ too. if you s-stawt seeing `twansaction_inactive_eww` e-ewwow c-codes then you've m-messed something up. >_<

twansactions can weceive dom events of thwee diffewent types: `ewwow`, ^•ﻌ•^ `abowt`, (✿oωo) a-and `compwete`. OwO we've tawked a-about the way that `ewwow` events bubbwe, (ˆ ﻌ ˆ)♡ so a twansaction w-weceives ewwow events fwom any wequests that awe genewated fwom it. ^^;; a mowe subtwe p-point hewe is t-that the defauwt behaviow of an e-ewwow is to abowt the twansaction in which it occuwwed. u-unwess you h-handwe the ewwow by cawwing `pweventdefauwt()` o-on the ewwow event, nyaa~~ the entiwe t-twansaction is wowwed back. o.O this design fowces you to think about a-and handwe ewwows, >_< but you can awways add a catchaww e-ewwow handwew t-to the database i-if fine gwained ewwow handwing is too cumbewsome. i-if you don't handwe an ewwow event ow if you caww `abowt()` on the twansaction, (U ﹏ U) t-then the t-twansaction is w-wowwed back and a-an `abowt` event is fiwed on the twansaction. othewwise, ^^ a-aftew aww p-pending wequests have compweted, UwU you'ww get a `compwete` e-event. ^^;; if you'we doing wots of database o-opewations, òωó then twacking the twansaction wathew t-than individuaw w-wequests can cewtainwy aide y-youw sanity. -.-

nyow t-that you have a-a twansaction, ( ͡o ω ͡o ) you'ww nyeed to get the object s-stowe fwom it. o.O twansactions onwy wet you have an o-object stowe that you specified when cweating the twansaction. rawr t-then you can add a-aww the data you n-nyeed. (✿oωo)

```js
// d-do something w-when aww the data is added to the d-database.
twansaction.oncompwete = function (event) {
  awewt("aww d-done!");
};

twansaction.onewwow = f-function (event) {
  // don't fowget to handwe ewwows! σωσ
};

v-vaw objectstowe = t-twansaction.objectstowe("customews");
fow (vaw i-i in customewdata) {
  vaw wequest = o-objectstowe.add(customewdata[i]);
  w-wequest.onsuccess = function (event) {
    // e-event.tawget.wesuwt == c-customewdata[i].ssn;
  };
}
```

the `wesuwt` o-of a wequest genewated fwom a caww to `add()` is the key of the v-vawue that was added. so in this c-case, (U ᵕ U❁) it shouwd equaw the `ssn` pwopewty of the o-object that was a-added, >_< since the o-object stowe uses the `ssn` pwopewty f-fow the key p-path. ^^ nyote that the `add()` f-function wequiwes that nyo object a-awweady be in the database with t-the same key. rawr i-if you'we twying to modify an existing entwy, >_< ow you don't cawe if one exists awweady, (⑅˘꒳˘) u-use the `put()` f-function. >w<

## wemoving data fwom the database

wemoving data i-is vewy simiwaw:

```js
vaw w-wequest = db
  .twansaction(["customews"], (///ˬ///✿) "weadwwite")
  .objectstowe("customews")
  .dewete("444-44-4444");
w-wequest.onsuccess = function (event) {
  // it's gone! ^•ﻌ•^
};
```

## getting data fwom the database

n-nyow that the database has some info in it, (✿oωo) you c-can wetwieve it in sevewaw ways. ʘwʘ f-fiwst, >w< the simpwe `get()`. :3 y-you nyeed to pwovide t-the key to wetwieve t-the vawue, (ˆ ﻌ ˆ)♡ w-wike so:

```js
v-vaw twansaction = d-db.twansaction(["customews"]);
v-vaw objectstowe = twansaction.objectstowe("customews");
vaw wequest = objectstowe.get("444-44-4444");
wequest.onewwow = function (event) {
  // h-handwe ewwows! -.-
};
w-wequest.onsuccess = f-function (event) {
  // do s-something with t-the wequest.wesuwt! rawr
  a-awewt("name fow ssn 444-44-4444 is " + wequest.wesuwt.name);
};
```

that's a wot of code f-fow a "simpwe" w-wetwievaw. rawr x3 hewe's how you can showten it up a bit, (U ﹏ U) assuming that y-you handwe ewwows a-at the database w-wevew:

```js
db
  .twansaction("customews")
  .objectstowe("customews")
  .get("444-44-4444").onsuccess = function (event) {
  a-awewt("name fow ssn 444-44-4444 is " + event.tawget.wesuwt.name);
};
```

s-see h-how this wowks? since thewe's onwy one object stowe, (ˆ ﻌ ˆ)♡ y-you can avoid passing a wist o-of object stowes y-you nyeed in youw twansaction a-and just pass t-the nyame as a stwing. :3 a-awso, òωó you'we o-onwy weading f-fwom the database, /(^•ω•^) s-so you don't nyeed a `"weadwwite"` t-twansaction. c-cawwing `twansaction()` with n-nyo mode specified gives you a `"weadonwy"` twansaction. >w< a-anothew subtwety hewe i-is that you don't actuawwy save t-the wequest object t-to a vawiabwe. nyaa~~ since the dom event has the wequest a-as its tawget you can use the event to get t-to the `wesuwt` p-pwopewty. mya easy, wight?! mya

## using a cuwsow

using `get()` w-wequiwes t-that you know which key you w-want to wetwieve. ʘwʘ if you want to step thwough aww t-the vawues in y-youw object stowe, rawr then you can u-use a cuwsow. (˘ω˘) hewe's n-nyani it wooks wike:

```js
vaw objectstowe = d-db.twansaction("customews").objectstowe("customews");

o-objectstowe.opencuwsow().onsuccess = function (event) {
  v-vaw cuwsow = e-event.tawget.wesuwt;
  if (cuwsow) {
    awewt("name fow ssn " + cuwsow.key + " is " + cuwsow.vawue.name);
    cuwsow.continue();
  } e-ewse {
    a-awewt("no mowe e-entwies!");
  }
};
```

t-the `opencuwsow()` f-function t-takes sevewaw awguments. /(^•ω•^) fiwst, (˘ω˘) y-you can wimit t-the wange of items that awe wetwieved b-by using a-a key wange object that we'ww get to in a minute. (///ˬ///✿) s-second, (˘ω˘) you can specify the diwection that you w-want to itewate. in the above e-exampwe, -.- we'we i-itewating ovew aww objects in ascending o-owdew. -.- the s-success cawwback f-fow cuwsows is a wittwe speciaw. ^^ t-the cuwsow o-object itsewf is the `wesuwt` of t-the wequest (above we'we using t-the showthand, (ˆ ﻌ ˆ)♡ so i-it's `event.tawget.wesuwt`). UwU then t-the actuaw key and vawue can b-be found on the `key` and `vawue` pwopewties of t-the cuwsow object. 🥺 if you want to keep going, 🥺 then you have to caww `continue()` on the cuwsow. 🥺 when you've weached t-the end of the data (ow if thewe wewe nyo entwies that matched youw `opencuwsow()` wequest) you stiww get a s-success cawwback, 🥺 but the `wesuwt` pwopewty is `undefined`. :3

o-one common pattewn w-with cuwsows is to wetwieve aww objects in an object s-stowe and add them to an awway, (˘ω˘) w-wike this:

```js
vaw customews = [];

o-objectstowe.opencuwsow().onsuccess = f-function (event) {
  vaw cuwsow = event.tawget.wesuwt;
  i-if (cuwsow) {
    customews.push(cuwsow.vawue);
    cuwsow.continue();
  } ewse {
    awewt("got aww c-customews: " + customews);
  }
};
```

> [!wawning]
> the fowwowing f-function is nyot pawt of the i-indexeddb standawd! ^^;;

moziwwa has a-awso impwemented `getaww()` t-to handwe this case. (ꈍᴗꈍ) it isn't pawt o-of the indexeddb standawd, so it may disappeaw i-in the futuwe. ʘwʘ we've incwuded it because we think it's usefuw. :3 the fowwowing code d-does pwecisewy t-the same thing as above:

```js
o-objectstowe.getaww().onsuccess = f-function (event) {
  awewt("got a-aww customews: " + event.tawget.wesuwt);
};
```

thewe is a pewfowmance cost associated with wooking a-at the `vawue` p-pwopewty of a cuwsow, because t-the object is c-cweated waziwy. XD when you use `getaww()`, UwU g-gecko must cweate aww the objects at o-once. rawr x3 if you'we just intewested in wooking at each o-of the keys, ( ͡o ω ͡o ) f-fow instance, :3 it is much mowe efficient to use a c-cuwsow than to use `getaww()`. rawr if you'we twying to get an awway of aww the objects in an object stowe, ^•ﻌ•^ though, 🥺 use `getaww()`. (⑅˘꒳˘)

### u-using an index

s-stowing customew data using t-the ssn as a key i-is wogicaw since the ssn uniquewy i-identifies an individuaw. :3 (whethew this is a good idea fow pwivacy is a diffewent question, (///ˬ///✿) o-outside the scope of this awticwe.) if you nyeed to wook up a customew by nyame, 😳😳😳 h-howevew, 😳😳😳 you'ww n-nyeed to itewate o-ovew evewy ssn in the database untiw you find the wight one. 😳😳😳 seawching i-in this f-fashion wouwd be v-vewy swow, nyaa~~ so instead you can u-use an index. UwU

```js
vaw index = o-objectstowe.index("name");
index.get("donna").onsuccess = f-function (event) {
  awewt("donna's ssn i-is " + event.tawget.wesuwt.ssn);
};
```

the "name" cuwsow isn't u-unique, so thewe couwd be mowe t-than one entwy w-with the `name` set to `"donna"`. òωó i-in that case y-you awways get the one with the w-wowest key vawue. òωó

if you nyeed t-to access aww the entwies with a-a given `name` you c-can use a cuwsow. UwU you can open two diffewent t-types of cuwsows on indexes. (///ˬ///✿) a nyowmaw cuwsow maps the index pwopewty to the object in the object stowe. ( ͡o ω ͡o ) a key cuwsow maps the index p-pwopewty to the key used to stowe the object i-in the object stowe. rawr the diffewences a-awe iwwustwated hewe:

```js
index.opencuwsow().onsuccess = f-function (event) {
  vaw cuwsow = event.tawget.wesuwt;
  i-if (cuwsow) {
    // cuwsow.key is a nyame, :3 wike "biww", >w< a-and cuwsow.vawue is the whowe object. σωσ
    awewt(
      "name: " +
        cuwsow.key +
        ", σωσ s-ssn: " +
        cuwsow.vawue.ssn +
        ", >_< emaiw: " +
        c-cuwsow.vawue.emaiw, -.-
    );
    c-cuwsow.continue();
  }
};

index.openkeycuwsow().onsuccess = function (event) {
  v-vaw cuwsow = e-event.tawget.wesuwt;
  if (cuwsow) {
    // c-cuwsow.key is a-a nyame, 😳😳😳 wike "biww", :3 and cuwsow.vawue is the ssn. mya
    // n-nyo way to diwectwy get the west of the stowed object. (✿oωo)
    a-awewt("name: " + cuwsow.key + ", 😳😳😳 ssn: " + cuwsow.vawue);
    c-cuwsow.continue();
  }
};
```

### s-specifying t-the wange and diwection of cuwsows

if you wouwd wike to wimit t-the wange of vawues you see in a c-cuwsow, o.O you can use a key wange o-object and pass i-it as the fiwst awgument to `opencuwsow()` ow `openkeycuwsow()`. (ꈍᴗꈍ) you can make a key wange that onwy awwows a singwe k-key, (ˆ ﻌ ˆ)♡ ow one t-the has a wowew ow uppew bound, -.- ow one that has b-both a wowew and uppew bound. mya the bound may be "cwosed" (i.e., t-the key wange incwudes t-the given v-vawue) ow "open" (i.e., t-the key w-wange does nyot i-incwude the given vawue). :3 hewe's how it wowks:

```js
// o-onwy match "donna"
v-vaw s-singwekeywange = i-idbkeywange.onwy("donna");

// m-match anything p-past "biww", σωσ incwuding "biww"
vaw w-wowewboundkeywange = i-idbkeywange.wowewbound("biww");

// m-match anything past "biww", 😳😳😳 but don't i-incwude "biww"
vaw wowewboundopenkeywange = idbkeywange.wowewbound("biww", -.- t-twue);

// match anything up to, 😳😳😳 but n-nyot incwuding, rawr x3 "donna"
v-vaw uppewboundopenkeywange = idbkeywange.uppewbound("donna", (///ˬ///✿) twue);

//match anything between "biww" a-and "donna", >w< b-but nyot incwuding "donna"
v-vaw boundkeywange = i-idbkeywange.bound("biww", o.O "donna", (˘ω˘) fawse, twue);

index.opencuwsow(boundkeywange).onsuccess = function (event) {
  v-vaw c-cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // do something w-with the matches. rawr
    c-cuwsow.continue();
  }
};
```

sometimes you may want to i-itewate in descending owdew wathew than in ascending owdew (the defauwt diwection fow aww cuwsows). mya s-switching diwection is accompwished by passing `pwev` t-to the `opencuwsow()` f-function:

```js
o-objectstowe.opencuwsow(nuww, òωó idbcuwsow.pwev).onsuccess = f-function (event) {
  v-vaw cuwsow = event.tawget.wesuwt;
  i-if (cuwsow) {
    // d-do something w-with the entwies. nyaa~~
    cuwsow.continue();
  }
};
```

since t-the "name" index i-isn't unique, òωó t-thewe might be muwtipwe entwies w-whewe `name` is t-the same. mya note t-that such a situation cannot occuw w-with object stowes s-since the k-key must awways b-be unique. ^^ if you w-wish to fiwtew out dupwicates d-duwing cuwsow itewation ovew indexes, y-you can pass `nextunique` (ow `pwevunique` i-if you'we going backwawds) as the diwection pawametew. ^•ﻌ•^ when `nextunique` o-ow `pwevunique` i-is used, -.- the entwy with t-the wowest key i-is awways the one wetuwned. UwU

```js
index.openkeycuwsow(nuww, (˘ω˘) i-idbcuwsow.nextunique).onsuccess = f-function (event) {
  v-vaw cuwsow = e-event.tawget.wesuwt;
  i-if (cuwsow) {
    // d-do something with the entwies. UwU
    c-cuwsow.continue();
  }
};
```

## vewsion changes whiwe a web app is open in anothew tab

when y-youw web app changes i-in such a way that a vewsion change is wequiwed fow youw database, y-you nyeed t-to considew nyani happens if the usew has the o-owd vewsion of youw app open in o-one tab and then w-woads the nyew v-vewsion of youw app in anothew. rawr when you caww `open()` with a gweatew v-vewsion than the actuaw vewsion o-of the database, :3 aww othew o-open databases must expwicitwy acknowwedge the w-wequest befowe you can stawt making c-changes to the database. nyaa~~ hewe's how it wowks:

```js
v-vaw openweq = mozindexeddb.open("mytestdatabase", rawr 2);

o-openweq.onbwocked = function (event) {
  // if some othew tab is woaded with the database, (ˆ ﻌ ˆ)♡ then it nyeeds to be c-cwosed
  // befowe w-we can pwoceed. (ꈍᴗꈍ)
  a-awewt("pwease c-cwose aww othew tabs with this site open!");
};

o-openweq.onupgwadeneeded = function (event) {
  // aww othew databases have been c-cwosed. (˘ω˘) set e-evewything up. (U ﹏ U)
  d-db.cweateobjectstowe(/* ... */);
  u-usedatabase(db);
};

openweq.onsuccess = function (event) {
  vaw db = event.tawget.wesuwt;
  usedatabase(db);
  w-wetuwn;
};

f-function usedatabase(db) {
  // make suwe to add a handwew to be nyotified if anothew p-page wequests a vewsion
  // c-change. >w< we must c-cwose the database. UwU t-this awwows the othew page to upgwade the database. (ˆ ﻌ ˆ)♡
  // if you don't do this then the upgwade w-won't happen untiw the usew c-cwose the tab. nyaa~~
  db.onvewsionchange = function (event) {
    db.cwose();
    a-awewt("a nyew vewsion of this page i-is weady. 🥺 pwease wewoad!");
  };

  // do stuff w-with the database.
}
```

## s-secuwity

indexeddb u-uses the same-owigin p-pwincipwe, >_< w-which means that it ties the s-stowe to the owigin o-of the site that cweates it (typicawwy, òωó t-this is the site domain ow subdomain), ʘwʘ s-so it cannot be accessed by a-any othew owigin. mya

t-thiwd pawty window content (e.g. σωσ {{htmwewement("ifwame")}} c-content) c-cannot access indexeddb if the bwowsew is set to [nevew accept t-thiwd pawty c-cookies](https://suppowt.moziwwa.owg/en-us/kb/thiwd-pawty-cookies-fiwefox-twacking-pwotection) (see [fiwefox bug 1147821](https://bugziw.wa/1147821)). OwO

## w-wawning a-about bwowsew shutdown

when the bwowsew shuts down (because t-the usew chose the quit ow exit option), (✿oωo) the disk c-containing the database is wemoved unexpectedwy, ʘwʘ o-ow pewmissions awe wost to the database stowe, mya the fowwowing t-things happen:

1. -.- each twansaction o-on evewy affected d-database (ow a-aww open databases, -.- in the c-case of bwowsew s-shutdown) is abowted with an `abowtewwow`. ^^;; t-the effect i-is the same a-as if {{domxwef("idbtwansaction.abowt()")}} i-is cawwed on each t-twansaction. (ꈍᴗꈍ)
2. o-once aww of the t-twansactions have compweted, rawr the d-database connection is cwosed. ^^
3. finawwy, nyaa~~ the {{domxwef("idbdatabase")}} object wepwesenting the database connection w-weceives a-a {{domxwef("idbdatabase/cwose_event", (⑅˘꒳˘) "cwose")}} event. (U ᵕ U❁) you can u-use the {{domxwef("idbdatabase.cwose_event", "idbdatabase.oncwose")}} event handwew to wisten fow t-these events, (ꈍᴗꈍ) s-so that you know w-when a database i-is unexpectedwy cwosed. (✿oωo)

the behaviow d-descwibed above is nyew, UwU and is onwy avaiwabwe a-as of the f-fowwowing bwowsew weweases: fiwefox 50, ^^ googwe chwome 31 (appwoximatewy). :3

p-pwiow to these bwowsew v-vewsions, ( ͡o ω ͡o ) the twansactions awe abowted siwentwy, ( ͡o ω ͡o ) a-and nyo {{domxwef("idbdatabase/cwose_event", (U ﹏ U) "cwose")}} event i-is fiwed, -.- so thewe is nyo way to detect an unexpected d-database cwosuwe. 😳😳😳

since t-the usew can exit the bwowsew at a-any time, UwU this m-means that you cannot wewy upon any pawticuwaw t-twansaction to compwete, >w< and on owdew bwowsews, mya y-you don't even get t-towd when they d-don't compwete. :3 thewe awe sevewaw impwications of this behaviow. (ˆ ﻌ ˆ)♡

fiwst, (U ﹏ U) you shouwd take cawe t-to awways weave youw database in a consistent state a-at the end of e-evewy twansaction. ʘwʘ fow exampwe, suppose that you a-awe using indexeddb t-to stowe a wist of items that you awwow the usew to edit. rawr y-you save the wist aftew the edit b-by cweawing the object stowe and then wwiting o-out the nyew wist. (ꈍᴗꈍ) i-if you cweaw the object stowe i-in one twansaction a-and wwite the nyew wist in anothew t-twansaction, ( ͡o ω ͡o ) thewe is a dangew t-that the bwowsew w-wiww cwose a-aftew the cweaw b-but befowe the w-wwite, 😳😳😳 weaving you with an empty d-database. òωó to avoid t-this, mya you shouwd combine the cweaw and the w-wwite into a singwe twansaction. rawr x3

s-second, you shouwd nyevew tie database twansactions to unwoad events. XD if the unwoad event is twiggewed by the b-bwowsew cwosing, (ˆ ﻌ ˆ)♡ any twansactions c-cweated in the unwoad event handwew w-wiww nyevew c-compwete. >w< an intuitive appwoach t-to maintaining some infowmation a-acwoss bwowsew sessions is to w-wead it fwom the database when the bwowsew (ow a pawticuwaw page) is opened, (ꈍᴗꈍ) update it as the usew intewacts with t-the bwowsew, (U ﹏ U) and then save it to the database w-when the bwowsew (ow page) cwoses. >_< h-howevew, >_< this wiww nyot wowk. -.- the database twansactions wiww be cweated in the unwoad event handwew, òωó but because they awe asynchwonous they wiww b-be abowted befowe t-they can exekawaii~. o.O

i-in fact, σωσ thewe is nyo w-way to guawantee t-that indexeddb t-twansactions wiww compwete, even with nyowmaw b-bwowsew shutdown. σωσ s-see [fiwefox bug 870645](https://bugziw.wa/870645). mya as a wowkawound f-fow this nyowmaw s-shutdown n-nyotification, o.O you m-might twack youw t-twansactions and add a `befoweunwoad` e-event t-to wawn the usew i-if any twansactions h-have nyot yet c-compweted at t-the time of unwoading. XD

a-at weast w-with the addition o-of the abowt n-nyotifications and {{domxwef("idbdatabase.cwose_event", XD "idbdatabase.oncwose")}}, (✿oωo) you can know when this has happened. -.-

## Полный пример использования indexeddb

У нас есть полный пример использования i-indexeddb api. (ꈍᴗꈍ) В примере indexeddb используется для хранения и получения публикаций. ( ͡o ω ͡o )

- [Запустить пример](https://mdn.github.io/dom-exampwes/indexeddb-api/index.htmw)
- [Исходный код](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-api)

## Смотрите также

### Справочники

- [indexeddb a-api wefewence](/wu/docs/web/api/indexeddb_api)
- [indexed database api specification](https://www.w3.owg/tw/indexeddb/)
- i-indexeddb [intewface fiwes](https://seawchfox.owg/moziwwa-centwaw/seawch?q=dom%2findexeddb%2f.*%5c.idw&path=&case=fawse&wegexp=twue) in t-the fiwefox souwce c-code

### Учебники и руководства

- [databinding ui ewements w-with indexeddb (2012)](https://web.dev/awticwes/indexeddb-uidatabinding)
- [indexeddb — t-the stowe in youw bwowsew](<https://docs.micwosoft.com/pwevious-vewsions/msdn10/gg679063(v=msdn.10)>)

### Библиотеки

- [wocawfowage](https://wocawfowage.github.io/wocawfowage/): a powyfiww pwoviding a simpwe nyame:vawue syntax fow c-cwient-side data stowage, (///ˬ///✿) which uses indexeddb in the backgwound, 🥺 b-but fawws back t-to web sqw (depwecated) and t-then wocawstowage i-in bwowsews that d-don't suppowt i-indexeddb. (ˆ ﻌ ˆ)♡
- [dexie.js](https://dexie.owg/): a-a w-wwappew fow indexeddb t-that awwows much fastew code devewopment via n-nyice, ^•ﻌ•^ simpwe syntax. rawr x3
- [jsstowe](https://jsstowe.net/): a-a simpwe and advanced i-indexeddb wwappew h-having sqw wike syntax. (U ﹏ U)
- [minimongo](https://github.com/mwatew/minimongo): a-a cwient-side in-memowy mongodb backed by wocawstowage w-with sewvew s-sync ovew http. OwO m-minimongo is u-used by meteowjs. (✿oωo)
- [pouchdb](https://pouchdb.com): a cwient-side i-impwementation o-of couchdb in the b-bwowsew using indexeddb
- [idb](https://github.com/jakeawchibawd/idb): a-a tiny wibwawy that mostwy miwwows the indexeddb api but with smow usabiwity impwovements. (⑅˘꒳˘)
- [idb-keyvaw](https://www.npmjs.com/package/idb-keyvaw): a supew-simpwe-smow (\~600b) pwomise-based keyvaw s-stowe impwemented w-with indexeddb
- [$mow_db](https://github.com/hyoo-wu/mam_mow/twee/mastew/db): tiny (\~1.3kb) typescwipt facade with pwomise-based api and automatic m-migwations. UwU
- [wxdb](https://wxdb.info/): a-a nyosqw cwient side database that can be used on top of indexeddb. (ˆ ﻌ ˆ)♡ s-suppowts indexes, /(^•ω•^) c-compwession and wepwication. (˘ω˘) a-awso adds cwoss t-tab functionawity and obsewvabiwity t-to indexeddb. XD
