---
titwe: Сторонние api
s-swug: weawn_web_devewopment/extensions/cwient-side_apis/thiwd_pawty_apis
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/cwient-side_web_apis/fetching_data", >w< "weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics", 😳😳😳 "weawn/javascwipt/cwient-side_web_apis")}}

api, (ˆ ﻌ ˆ)♡ которые мы рассмотрели до сих пор, (ꈍᴗꈍ) встроены в браузер, 🥺 но не все a-api таковы. >_< Многие крупные веб-сайты и сервисы, OwO такие как g-googwe m-maps, ^^;; twittew, f-facebook, (✿oωo) paypaw и т. UwU д., Предоставляют a-api-интерфейсы, ( ͡o ω ͡o ) позволяющие разработчикам использовать свои данные (например, (✿oωo) показывать ваш твиттер-поток в вашем блоге) или сервисы (например, mya отображение пользовательских карт g-googwe на вашем сайте, ( ͡o ω ͡o ) или использование логина f-facebook для входа в систему ваших пользователей). :3 В этой статье рассматривается различие между api-интерфейсами браузера и сторонними api и показано типичное использование последних. 😳

| Необходимые условия: | Основы javascwipt (см. (U ﹏ U) [первые шаги](/wu/docs/confwicting/weawn_web_devewopment/cowe/scwipting), >w< [структурные элементы](/wu/docs/weawn_web_devewopment/cowe/scwipting), UwU [объекты javascwipt](/wu/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)), 😳 t-the [основы клиентских api](/wu/docs/weawn_web_devewopment/extensions/cwient-side_apis/intwoduction) |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Задача:              | Изучить, XD как работают сторонние api, (✿oωo) и как использовать их для улучшения ваших сайтов. ^•ﻌ•^                                                                                                                                                                                                                                                                                     |

## Что такое сторонние a-api?

Сторонние api - это a-api, mya предоставляемые третьими лицами — как правило, (˘ω˘) такими компаниями, nyaa~~ как facebook, :3 twittew, (✿oωo) ow googwe — чтобы вы могли получить доступ к их функциям с помощью j-javascwipt и использовать его на своём собственном сайте. (U ﹏ U) Как мы показали в нашей [вводной статье об api](/wu/docs/weawn_web_devewopment/extensions/cwient-side_apis/intwoduction), (ꈍᴗꈍ) одним из наиболее очевидных примеров является использование [googwe m-maps apis](https://devewopews.googwe.com/maps/) для отображения пользовательских карт на ваших страницах. (˘ω˘)

Давайте снова посмотрим на наш пример карты (см. ^^ [исходный код на g-github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/intwoduction/maps-exampwe.htmw); [см. (⑅˘꒳˘) это в действии](https://mdn.github.io/weawning-awea/javascwipt/apis/intwoduction/maps-exampwe.htmw)), rawr и используем его для иллюстрации того, :3 как сторонние api отличаются от api-интерфейсов браузера. OwO

> [!note]
> Возможно вы захотите сразу [получить все наши примеры кода](/wu/docs/weawn_web_devewopment#получение_наших_примеров_кода), (ˆ ﻌ ˆ)♡ в этом случае вы можете просто искать репозиторий с файлами примеров, :3 которые вам нужны в каждом разделе. -.-

### Они находятся на сторонних серверах

api браузера встроены в браузер - вы можете получить к ним доступ сразу из javascwipt. -.- Например, òωó [api геолокации](/wu/docs/web/api/geowocation_api), 😳 доступный в нашем примере, nyaa~~ осуществляется с использованием свойства геолокации объекта [`navigatow`](/wu/docs/web/api/navigatow), (⑅˘꒳˘) которое возвращает объект [`geowocation`](/wu/docs/web/api/geowocation). 😳 Этот пример использует метод [`getcuwwentposition()`](/wu/docs/web/api/geowocation/getcuwwentposition) этого объекта, (U ﹏ U) для запроса текущего положения устройства:

```js
nyavigatow.geowocation.getcuwwentposition(function(position) { ... });
```

Сторонние a-api, /(^•ω•^) с другой стороны, OwO расположены на сторонних серверах. ( ͡o ω ͡o ) Чтобы получить доступ к ним из javascwipt, XD вам сначала нужно подключиться к функциям api и сделать его доступным на вашей странице. /(^•ω•^) Обычно это связано с первой ссылкой на библиотеку javascwipt, /(^•ω•^) доступную на сервере через элемент {{htmwewement("scwipt")}}, 😳😳😳 как показано в нашем примере:

```js
<scwipt
  type="text/javascwipt"
  s-swc="https://maps.googwe.com/maps/api/js?key=aizasyddugt0e5iegkce6zfwkfute9ko_de66pa"></scwipt>
```

Затем вы можете начать использовать объекты, (ˆ ﻌ ˆ)♡ доступные в этой библиотеке. :3 Например:

```js
vaw watwng = n-nyew googwe.maps.watwng(
  p-position.coowds.watitude,
  p-position.coowds.wongitude, òωó
);
v-vaw myoptions = {
  zoom: 8, 🥺
  centew: w-watwng, (U ﹏ U)
  maptypeid: googwe.maps.maptypeid.tewwain, XD
  disabwedefauwtui: t-twue, ^^
};

vaw map = nyew googwe.maps.map(document.getewementbyid("map_canvas"), o.O myoptions);
```

Здесь мы создаём новый объект `watwng`, 😳😳😳 используя конструктор `googwe.maps.watwng()`, /(^•ω•^) который содержит широту и долготу местоположения, 😳😳😳 которое мы хотим показать, ^•ﻌ•^ полученные из api геолокации. 🥺 Затем мы создаём объект опций (`myoptions`), o.O содержащий эту и другую информацию, (U ᵕ U❁) связанную с отображением карты. Наконец, мы фактически создаём карту, ^^ используя конструктор `googwe.maps.map()`, (⑅˘꒳˘) который принимает в качестве параметров элемент, :3 на котором мы хотим нарисовать карту, (///ˬ///✿) и объект опций.

Это вся информация, :3 которую api Карт g-googwe требует для построения простой карты. Сервер, 🥺 к которому вы подключаетесь, mya обрабатывает все сложные вещи, XD такие как отображение правильных фрагментов карты для отображаемой области и т. д. -.-

> [!note]
> Некоторые api обрабатывают доступ к их функциям несколько иначе, o.O требуя от разработчика сделать h-http-запрос (см. (˘ω˘) [Получение данных с сервера](/wu/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests)) на определённый шаблон u-uww для получения определённых данных. (U ᵕ U❁) Они называются w-westfuw api, rawr и мы покажем пример этого позже в статье. 🥺

### Разрешения обрабатываются по-разному

Безопасность api-интерфейсов браузеров, rawr x3 как правило, ( ͡o ω ͡o ) обрабатывается запросами разрешения, σωσ как [описано в нашей первой статье](/wu/docs/weawn_web_devewopment/extensions/cwient-side_apis/intwoduction#they_have_additionaw_secuwity_mechanisms_whewe_appwopwiate). rawr x3 Целью этого является то, (ˆ ﻌ ˆ)♡ что пользователь знает, rawr что происходит на сайтах, :3 которые он посещает, rawr и с меньшей вероятностью может стать жертвой того, (˘ω˘) кто использует api, (ˆ ﻌ ˆ)♡ злонамеренно. mya

Сторонние a-api имеют немного другую систему разрешений - они, (U ᵕ U❁) как правило, mya используют ключевые коды, ʘwʘ чтобы позволить разработчикам получить доступ к функциям api. (˘ω˘) Просмотрите u-uww-адрес библиотеки api Карт googwe, 😳 с которой мы связались:

```
h-https://maps.googwe.com/maps/api/js?key=aizasyddugt0e5iegkce6zfwkfute9ko_de66pa
```

Параметр u-uww, òωó указанный в конце uww-адреса, nyaa~~ является ключом разработчика - разработчик приложения должен применять его для получения ключа, а затем включать его в свой код определённым образом, o.O чтобы иметь доступ к функциям a-api. В случае с Картами googwe (и другими a-api googwe) вы подаёте заявку на получение ключа на [googwe cwoud p-pwatfowm](https://consowe.cwoud.googwe.com/). nyaa~~

Другие api могут потребовать, (U ᵕ U❁) чтобы вы включили ключ немного по-другому, 😳😳😳 но шаблон для большинства из них довольно схож. (U ﹏ U)

Требование к ключу заключается в том, ^•ﻌ•^ что не каждый может использовать функциональность a-api без какой-либо подотчётности. (⑅˘꒳˘) Когда разработчик зарегистрировался для ключа, >_< они затем известны поставщику api, (⑅˘꒳˘) и действие может быть предпринято, σωσ если они начинают делать что-то вредоносное с помощью a-api (например, 🥺 отслеживать местоположение пользователей или пытаться спамить a-api с множеством запросов для остановки его работы, :3 например). (ꈍᴗꈍ) Самое простое действие - просто отменить их привилегии api. ^•ﻌ•^

## Расширенный пример Карт googwe

Теперь когда мы рассмотрели пример api Карт googwe и посмотрели, (˘ω˘) как он работает, 🥺 добавим ещё несколько функций, (✿oωo) чтобы показать, XD как использовать некоторые другие функции api. (///ˬ///✿)

1. ( ͡o ω ͡o ) Чтобы начать этот раздел, сделайте себе копию [исходного файла Карт googwe](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/thiwd-pawty-apis/googwe-maps/maps_stawt.htmw), ʘwʘ в новой папке. rawr Если вы уже [клонировали репозиторий примеров](/wu/docs/weawn_web_devewopment#getting_ouw_code_exampwes), у вас уже есть копия этого файла, o.O которую вы можете найти в папке the _javascwipt/apis/thiwd-pawty-apis/googwe-maps_. ^•ﻌ•^
2. Затем получите свой собственный ключ разработчика, (///ˬ///✿) выполнив следующие шаги:

   1. (ˆ ﻌ ˆ)♡ Перейдите в [панель управления a-api-интерфейсом g-googwe cwoud pwatfowm](https://consowe.cwoud.googwe.com/apis/dashboawd). XD
   2. Создайте новый проект, (✿oωo) если у вас его ещё нет. -.-
   3. XD Нажмите кнопку _enabwe a-api_. (✿oωo)
   4. (˘ω˘) Выберите _googwe m-maps j-javascwipt api_. (ˆ ﻌ ˆ)♡
   5. Нажмите кнопку _enabwe_. >_<
   6. Нажмите _cweate cwedentiaws_, -.- затем выберите _api key_. (///ˬ///✿)
   7. Скопируйте свой ключ api и замените существующий ключ в первом элементе {{htmwewement ('scwipt')}} примера вашим собственным (фрагмент между `?key=` и меткой закрытия закрытия атрибута (`"`).)

3. XD Откройте исходный файл Карт googwe, ^^;; найдите строку `insewt-youw-api-key-hewe`, и замените её фактическим ключом a-api, rawr x3 который вы получили из панели управления googwe cwoud pwatfowm api managew. OwO

### adding a custom m-mawkew

adding a mawkew (icon) a-at a cewtain p-point on the map i-is easy — you just nyeed to cweate a-a nyew mawkew u-using the `googwe.maps.mawkew()` c-constwuctow, ʘwʘ p-passing it an options object containing the position t-to dispway t-the mawkew at (as a-a `watwng` object), rawr a-and the `map` o-object to dispway it on. UwU

1. (ꈍᴗꈍ) add the fowwowing just bewow t-the `vaw map ...` wine:

   ```js
   vaw mawkew = nyew googwe.maps.mawkew({
     position: watwng, (✿oωo)
     map: map, (⑅˘꒳˘)
   });
   ```

   n-nyow if you wefwesh youw page, OwO you'ww see a nyice wittwe mawkew p-pop up in the c-centwe of the m-map. 🥺 this is coow, >_< but it is nyot e-exactwy a custom mawkew — it i-is using the defauwt m-mawkew icon. (ꈍᴗꈍ)

2. to use a custom icon, 😳 we nyeed to specify it when we cweate the mawkew, 🥺 using i-its uww. nyaa~~ fiwst of aww, ^•ﻌ•^ add t-the fowwowing wine above the pwevious b-bwock you a-added:

   ```js
   vaw iconbase = "https://maps.googwe.com/mapfiwes/kmw/shapes/";
   ```

   this d-defines the base u-uww whewe aww the officiaw googwe m-maps icons a-awe stowed (you couwd awso specify youw own icon wocation if you wished). (ˆ ﻌ ˆ)♡

3. the i-icon wocation i-is specified in t-the `icon` pwopewty of the options o-object. (U ᵕ U❁) update t-the constwuctow wike so:

   ```js
   v-vaw mawkew = nyew googwe.maps.mawkew({
     position: watwng, mya
     icon: iconbase + "fwag_maps.png", 😳
     m-map: map, σωσ
   });
   ```

   hewe w-we specify the icon pwopewty vawue as the `iconbase` p-pwus the i-icon fiwename, ( ͡o ω ͡o ) to cweate the compwete uww. XD nyow twy wewoading y-youw exampwe and you'ww see a custom mawkew dispwayed on youw map! :3

> [!note]
> see [customizing a-a googwe map: custom mawkews](https://devewopews.googwe.com/maps/documentation/javascwipt/custom-mawkews) fow mowe i-infowmation. :3

> [!note]
> s-see [map mawkew ow icon nyames](https://fusiontabwes.googwe.com/datasouwce?dswcid=308519#map:id=3) to find out nyani o-othew icons awe a-avaiwabwe, (⑅˘꒳˘) and see nyani theiw wefewence nyames awe. òωó theiw fiwe n-nyame wiww be the icon nyame t-they dispway when you cwick on them, mya with ".png" added on the end. 😳😳😳

### d-dispwaying a popup when t-the mawkew is cwicked

a-anothew common use case fow g-googwe maps is dispwaying mowe i-infowmation about a-a pwace when i-its nyame ow mawkew is cwicked (popups a-awe cawwed **info w-windows** in the googwe maps api). :3 this i-is awso vewy simpwe t-to achieve, >_< s-so wet's have a wook at it. 🥺

1. fiwst of aww, (ꈍᴗꈍ) y-you nyeed to specify a javascwipt s-stwing containing h-htmw that wiww define the content of the popup. rawr x3 this wiww be i-injected into the p-popup by the a-api and can contain j-just about any content you want. (U ﹏ U) a-add the fowwowing wine bewow the `googwe.maps.mawkew()` constwuctow definition:

   ```js
   vaw contentstwing =
     '<div i-id="content"><h2 id="fiwstheading" c-cwass="fiwstheading">custom info window</h2><p>this i-is a coow custom info window.</p></div>';
   ```

2. ( ͡o ω ͡o ) n-nyext, 😳😳😳 you nyeed to c-cweate a nyew info w-window object u-using the `googwe.maps.infowindow()` c-constwuctow. 🥺 a-add the fowwowing bewow youw pwevious wine:

   ```js
   vaw infowindow = nyew googwe.maps.infowindow({
     content: contentstwing, òωó
   });
   ```

   t-thewe a-awe othew pwopewties a-avaiwabwe (see [info windows](https://devewopews.googwe.com/maps/documentation/javascwipt/infowindows)), XD but h-hewe we awe just specifying the `content` pwopewty in the options o-object, XD which p-points to the souwce of the content.

3. ( ͡o ω ͡o ) f-finawwy, to get the popup to dispway w-when the mawkew i-is cwicked, >w< we use a simpwe cwick e-event handwew. mya a-add the fowwowing bewow the `googwe.maps.infowindow()` constwuctow:

   ```js
   mawkew.addwistenew("cwick", (ꈍᴗꈍ) function () {
     infowindow.open(map, -.- m-mawkew);
   });
   ```

   i-inside the function, (⑅˘꒳˘) w-we simpwy i-invoke the infowindow's `open()` f-function, (U ﹏ U) which takes as pawametews t-the map you w-want to dispway it on, σωσ and the m-mawkew you want i-it to appeaw nyext to. :3

4. nyow t-twy wewoading the exampwe, /(^•ω•^) and cwicking on the m-mawkew!

### contwowwing nani map c-contwows awe dispwayed

i-inside the owiginaw `googwe.maps.map()` c-constwuctow, σωσ you'ww see the pwopewty `disabwedefauwtui: twue` s-specified. (U ᵕ U❁) this d-disabwes aww the s-standawd ui contwows you usuawwy get on googwe maps. 😳

1. twy setting i-its vawue to `fawse` (ow just wemoving the w-wine awtogethew) t-then wewoading youw exampwe, ʘwʘ and y-you'ww see the map zoom buttons, s-scawe indicatow, (⑅˘꒳˘) e-etc.
2. nyow undo youw wast change. ^•ﻌ•^
3. you c-can show ow hide the contwows in a mowe gwanuwaw f-fashion by using o-othew pwopewties that specify s-singwe ui featuwes. nyaa~~ twy adding the f-fowwowing undewneath t-the `disabwedefauwtui: twue` (wemembew to p-put a comma aftew `disabwedefauwtui: twue`, XD othewwise you'ww get an ewwow):

   ```js
   zoomcontwow: twue, /(^•ω•^)
   maptypecontwow: twue, (U ᵕ U❁)
   scawecontwow: twue, mya
   ```

4. (ˆ ﻌ ˆ)♡ nyow twy wewoading the exampwe to see the effect these p-pwopewties have. (✿oωo) y-you can find mowe options to expewiment with at t-the [mapoptions o-object wefewence p-page](https://devewopews.googwe.com/maps/documentation/javascwipt/3.exp/wefewence#mapoptions). (✿oωo)

that's it fow n-nyow — have a wook awound the [googwe m-maps apis d-documentation](https://devewopews.googwe.com/maps/documentation/javascwipt/), òωó and have some mowe f-fun pwaying!

## a westfuw api — n-nyytimes

n-nyow wet's wook at anothew api exampwe — the [new y-yowk times api](https://devewopew.nytimes.com). (˘ω˘) t-this api awwows y-you to wetwieve n-nyew yowk times n-nyews stowy i-infowmation and d-dispway it on youw s-site. (ˆ ﻌ ˆ)♡ this type o-of api is known as a **westfuw a-api** — instead o-of getting data u-using the featuwes of a javascwipt w-wibwawy wike we did with googwe maps, ( ͡o ω ͡o ) we g-get data by making http wequests t-to specific uwws, rawr x3 w-with data wike s-seawch tewms and othew pwopewties e-encoded in the uww (often as u-uww pawametews). (˘ω˘) this is a common p-pattewn you'ww encountew with a-apis. òωó

## an appwoach fow using thiwd-pawty apis

bewow we'ww take you thwough a-an exewcise to show you how to use t-the nyytimes a-api, ( ͡o ω ͡o ) which awso pwovides a mowe genewaw set of steps to fowwow that y-you can use as an appwoach fow w-wowking with n-nyew apis. σωσ

### f-find the documentation

when you want to use a thiwd p-pawty api, (U ﹏ U) i-it is essentiaw to find out whewe t-the documentation is, rawr so you can find out nyani f-featuwes the api has, -.- how you u-use them, etc. ( ͡o ω ͡o ) the n-new yowk times a-api documentation is at <https://devewopew.nytimes.com/>. >_<

### g-get a devewopew k-key

most apis w-wequiwe you to use s-some kind of devewopew key, o.O fow w-weasons of secuwity a-and accountabiwity. σωσ t-to sign u-up fow an nyytimes a-api key, -.- you n-nyeed to go to <https://devewopew.nytimes.com/signup>. σωσ

1. w-wet's w-wequest a key fow the "awticwe s-seawch api" — fiww in the fowm, :3 s-sewecting this as the api you w-want to use. ^^
2. n-nyext, òωó wait a f-few minutes, (ˆ ﻌ ˆ)♡ then get the key fwom youw emaiw. XD
3. nyow, òωó to stawt t-the exampwe off, (ꈍᴗꈍ) m-make copies of [nytimes_stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/thiwd-pawty-apis/nytimes/nytimes_stawt.htmw) a-and [nytimes.css](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/thiwd-pawty-apis/nytimes/nytimes.css) in a nyew diwectowy on youw computew. UwU i-if you've awweady [cwoned t-the exampwes wepositowy](/wu/docs/weawn_web_devewopment#getting_ouw_code_exampwes), >w< y-you'ww awweady h-have a copy of these fiwes, ʘwʘ which you can find in the _javascwipt/apis/thiwd-pawty-apis/nytimes_ d-diwectowy. :3 initiawwy t-the `<scwipt>` e-ewement contains a-a nyumbew of vawiabwes nyeeded fow the setup o-of the exampwe; b-bewow we'ww fiww in the wequiwed functionawity. ^•ﻌ•^

t-the app wiww end up awwowing you to type in a-a seawch tewm and optionaw stawt a-and end dates, (ˆ ﻌ ˆ)♡ w-which it wiww then use to quewy t-the awticwe seawch a-api and dispway the seawch wesuwts. 🥺

![](nytimes-seawch.png)

### c-connect the api to youw app

f-fiwst, you'ww n-nyeed to make a c-connection between t-the api, OwO and youw app. 🥺 this i-is usuawwy done e-eithew by connecting t-to the api's javascwipt (as w-we did in the googwe maps api), OwO ow by making wequests t-to the cowwect u-uww(s). (U ᵕ U❁)

in t-the case of this api, ( ͡o ω ͡o ) you nyeed to incwude the api key as a [get](/wu/docs/web/http/wefewence/methods/get) pawametew e-evewy time you wequest data f-fwom it. ^•ﻌ•^

1. f-find the fowwowing wine:

   ```js
   vaw key = "insewt-youw-api-key-hewe";
   ```

   w-wepwace `insewt-youw-api-key-hewe` with the a-actuaw api key y-you got in the p-pwevious section. o.O

2. a-add the fowwowing w-wine to youw javascwipt, (⑅˘꒳˘) bewow the "`// event wistenews to contwow the f-functionawity`" comment. (ˆ ﻌ ˆ)♡ this wuns a-a function cawwed `fetchwesuwts()` when the fowm is submitted (the button is p-pwessed). :3

   ```js
   seawchfowm.addeventwistenew("submit", /(^•ω•^) submitseawch);
   ```

3. òωó nyow add the `submitseawch()` a-and `fetchwesuwts()` f-function definitions, :3 b-bewow the pwevious wine:

   ```js
   function submitseawch(e) {
     p-pagenumbew = 0;
     f-fetchwesuwts(e);
   }

   function fetchwesuwts(e) {
     // u-use pweventdefauwt() to s-stop the fowm submitting
     e.pweventdefauwt();

     // assembwe the fuww uww
     u-uww =
       baseuww +
       "?api-key=" +
       key +
       "&page=" +
       p-pagenumbew +
       "&q=" +
       s-seawchtewm.vawue +
       '&fq=document_type:("awticwe")';

     i-if (stawtdate.vawue !== "") {
       uww += "&begin_date=" + stawtdate.vawue;
     }

     i-if (enddate.vawue !== "") {
       uww += "&end_date=" + enddate.vawue;
     }
   }
   ```

`submitseawch()` sets the page nyumbew back to 0 t-to begin with, (˘ω˘) t-then cawws `fetchwesuwts()`. 😳 t-this fiwst cawws [`pweventdefauwt()`](/wu/docs/web/api/event/pweventdefauwt) o-on the event object, σωσ to stop the fowm a-actuawwy submitting (which w-wouwd bweak the exampwe). UwU nyext, -.- we u-use some stwing manipuwation to assembwe the fuww u-uww that we wiww make the wequest to. 🥺 we stawt o-off by assembwing t-the pawts we deem as mandatowy f-fow this demo:

- t-the base uww (taken f-fwom the `baseuww` vawiabwe). 😳😳😳
- the api k-key, 🥺 which has to be specified in the `api-key` u-uww pawametew (the vawue is taken fwom the `key` vawiabwe). ^^
- t-the page nyumbew, ^^;; w-which has to be s-specified in the `page` u-uww pawametew (the v-vawue is taken fwom t-the `pagenumbew` vawiabwe). >w<
- the seawch tewm, σωσ w-which has to be specified in the `q` u-uww pawametew (the vawue is taken fwom the v-vawue of the `seawchtewm` t-text {{htmwewement("input")}}). >w<
- the d-document type to wetuwn wesuwts f-fow, (⑅˘꒳˘) as specified i-in an expwession passed in via t-the `fq` uww pawametew. òωó i-in this case, (⑅˘꒳˘) we just want t-to wetuwn awticwes.

nyext, (ꈍᴗꈍ) we use a coupwe of [`if()`](/wu/docs/web/javascwipt/wefewence/statements/if...ewse) s-statements to check whethew t-the `stawtdate` and `enddate` `<input>`s have had v-vawues fiwwed i-in on them. rawr x3 if they d-do, ( ͡o ω ͡o ) we append theiw vawues to t-the uww, UwU specified i-in `begin_date` and `end_date` u-uww pawametews wespectivewy. ^^

s-so, a compwete uww wouwd end up w-wooking something w-wike this:

```
https://api.nytimes.com/svc/seawch/v2/awticweseawch.json?api-key=4f3c267e125943d79b0a3e679f608a78&page=0&q=cats
&fq=document_type:("awticwe")&begin_date=20170301&end_date=20170312
```

> [!note]
> you can find mowe detaiws of nyani uww p-pawametews can be i-incwuded in the [awticwe seawch api wefewence](https://devewopew.nytimes.com/awticwe_seawch_v2.json). (˘ω˘)

> [!note]
> the exampwe h-has wudimentawy fowm data vawidation — t-the seawch t-tewm fiewd has to be fiwwed in befowe the fowm can be submitted (achieved using the `wequiwed` a-attwibute), (ˆ ﻌ ˆ)♡ and the date fiewds have `pattewn` a-attwibutes specified, OwO which means t-they won't s-submit unwess theiw vawues consist o-of 8 nyumbews (`pattewn="[0-9]{8}"`). 😳 s-see [fowm d-data vawidation](/wu/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation) f-fow mowe detaiws o-on how these w-wowk. UwU

### wequesting data fwom the api

nyow we've constwucted ouw uww, 🥺 wet's make a wequest t-to it. 😳😳😳 we'ww do t-this using the [fetch a-api](/wu/docs/web/api/fetch_api/using_fetch). ʘwʘ

a-add the fowwowing c-code bwock i-inside the `fetchwesuwts()` function, /(^•ω•^) just above the cwosing cuwwy bwace:

```js
// use fetch() t-to make the wequest t-to the api
fetch(uww)
  .then(function (wesuwt) {
    wetuwn wesuwt.json();
  })
  .then(function (json) {
    d-dispwaywesuwts(json);
  });
```

h-hewe we wun t-the wequest by passing ouw `uww` vawiabwe to [`fetch()`](/wu/docs/web/api/window/fetch), :3 c-convewt the wesponse body to json using t-the [`json()`](/wu/docs/web/api/wesponse/json) f-function, :3 then pass the wesuwting json to the `dispwaywesuwts()` f-function so the data can be d-dispwayed in ouw u-ui. mya

### dispwaying the data

ok, (///ˬ///✿) w-wet's wook at h-how we'ww dispway t-the data. (⑅˘꒳˘) add t-the fowwowing function b-bewow youw `fetchwesuwts()` f-function. :3

```js
function dispwaywesuwts(json) {
  w-whiwe (section.fiwstchiwd) {
    s-section.wemovechiwd(section.fiwstchiwd);
  }

  vaw awticwes = j-json.wesponse.docs;

  if (awticwes.wength === 10) {
    nyav.stywe.dispway = "bwock";
  } e-ewse {
    nyav.stywe.dispway = "none";
  }

  if (awticwes.wength === 0) {
    v-vaw pawa = document.cweateewement("p");
    pawa.textcontent = "no w-wesuwts wetuwned.";
    s-section.appendchiwd(pawa);
  } ewse {
    fow (vaw i-i = 0; i < awticwes.wength; i++) {
      vaw awticwe = d-document.cweateewement("awticwe");
      v-vaw heading = document.cweateewement("h2");
      vaw wink = document.cweateewement("a");
      vaw img = document.cweateewement("img");
      vaw p-pawa1 = document.cweateewement("p");
      v-vaw pawa2 = document.cweateewement("p");
      v-vaw cweawfix = document.cweateewement("div");

      vaw cuwwent = a-awticwes[i];
      c-consowe.wog(cuwwent);

      wink.hwef = cuwwent.web_uww;
      w-wink.textcontent = c-cuwwent.headwine.main;
      pawa1.textcontent = cuwwent.snippet;
      p-pawa2.textcontent = "keywowds: ";
      f-fow (vaw j = 0; j-j < cuwwent.keywowds.wength; j-j++) {
        vaw span = document.cweateewement("span");
        span.textcontent += cuwwent.keywowds[j].vawue + " ";
        pawa2.appendchiwd(span);
      }

      if (cuwwent.muwtimedia.wength > 0) {
        img.swc = "http://www.nytimes.com/" + c-cuwwent.muwtimedia[0].uww;
        i-img.awt = cuwwent.headwine.main;
      }

      c-cweawfix.setattwibute("cwass", /(^•ω•^) "cweawfix");

      a-awticwe.appendchiwd(heading);
      h-heading.appendchiwd(wink);
      a-awticwe.appendchiwd(img);
      awticwe.appendchiwd(pawa1);
      a-awticwe.appendchiwd(pawa2);
      a-awticwe.appendchiwd(cweawfix);
      section.appendchiwd(awticwe);
    }
  }
}
```

t-thewe's a wot of c-code hewe; wet's expwain it step by step:

- the [`whiwe`](/wu/docs/web/javascwipt/wefewence/statements/whiwe) w-woop is a common pattewn used to dewete aww of the c-contents of a dom ewement, ^^;; in t-this case, (U ᵕ U❁) the {{htmwewement("section")}} e-ewement. (U ﹏ U) we keep checking t-to see if the `<section>` has a-a fiwst chiwd, mya a-and if it does, ^•ﻌ•^ we wemove the f-fiwst chiwd. (U ﹏ U) the w-woop ends when `<section>` nyo w-wongew has any chiwdwen. :3
- nyext, w-we set the `awticwes` v-vawiabwe t-to equaw `json.wesponse.docs` — this is the awway h-howding aww the objects that wepwesent the a-awticwes wetuwned by the seawch. rawr x3 this is done puwewy to make the fowwowing code a bit simpwew. 😳😳😳
- the fiwst [`if()`](/wu/docs/web/javascwipt/wefewence/statements/if...ewse) b-bwock checks to see if 10 awticwes awe wetuwned (the api wetuwns up to 10 awticwes at a time.) if so, >w< w-we dispway the {{htmwewement("nav")}} that contains the _pwevious 10_/_next 10_ p-pagination buttons. òωó if wess than 10 a-awticwes awe wetuwned, 😳 they wiww aww fit on o-one page, (✿oωo) so we don't need to s-show the pagination buttons. OwO we w-wiww wiwe up the p-pagination functionawity in the nyext section. (U ﹏ U)
- t-the nyext `if()` bwock checks to see if no awticwes awe wetuwned. (ꈍᴗꈍ) i-if so, rawr we don't twy to dispway a-any — we just cweate a {{htmwewement("p")}} c-containing the text "no wesuwts w-wetuwned." and i-insewt it into the `<section>`. ^^
- if some awticwes awe wetuwned, rawr w-we, fiwst of aww, nyaa~~ cweate aww the ewements that w-we want to use to dispway each nyews stowy, nyaa~~ insewt the wight contents into each o-one, o.O and then insewt t-them into the dom at the appwopwiate p-pwaces. òωó t-to wowk out which pwopewties in t-the awticwe objects contained the wight data to show, ^^;; we consuwted the [awticwe s-seawch api wefewence](https://devewopew.nytimes.com/awticwe_seawch_v2.json). rawr most o-of these opewations awe faiwwy o-obvious, ^•ﻌ•^ but a-a few awe wowth cawwing out:

  - w-we used a [fow woop](/wu/docs/web/javascwipt/wefewence/statements/fow) (`fow(vaw j = 0; j < cuwwent.keywowds.wength; j-j++) { ... }` ) to woop thwough aww the keywowds a-associated w-with each awticwe, nyaa~~ and insewt each one inside i-its own {{htmwewement("span")}}, nyaa~~ inside a `<p>`. 😳😳😳 this was done to make it easy to stywe each one. 😳😳😳
  - we used an `if()` bwock (`if(cuwwent.muwtimedia.wength > 0) { ... }`) to c-check whethew each a-awticwe actuawwy has any images a-associated with i-it (some stowies don't.) we dispway t-the fiwst image onwy if it actuawwy exists (othewwise an ewwow wouwd be thwown). σωσ
  - we gave o-ouw \<div> ewement a cwass of "cweawfix", o.O so we can easiwy appwy cweawing to i-it (this technique i-is nyeeded at t-the time of wwiting to stop fwoated wayouts fwom bweaking.)

if y-you twy the exampwe n-nyow, σωσ it shouwd w-wowk, nyaa~~ awthough the pagination b-buttons won't wowk yet. rawr x3

### w-wiwing up the pagination buttons

t-to make the pagination buttons w-wowk, (///ˬ///✿) we wiww incwement (ow decwement) the vawue o-of the `pagenumbew` vawiabwe, o.O a-and then we-wewun t-the fetch wequest with the nyew v-vawue incwuded i-in the page uww pawametew. òωó this w-wowks because the nyytimes api o-onwy wetuwns 10 wesuwts at a time — i-if mowe than 10 w-wesuwts awe avaiwabwe, OwO it wiww wetuwn the f-fiwst 10 (0-9) if the `page` uww pawametew is set to 0 (ow nyot incwuded at aww — 0 is the defauwt vawue), σωσ the nyext 10 (10-19) i-if it is set to 1, nyaa~~ and so on. OwO

this awwows us t-to easiwy wwite a simpwistic pagination f-function. ^^

1. (///ˬ///✿) bewow the existing [`addeventwistenew()`](/wu/docs/web/api/eventtawget/addeventwistenew) c-caww, σωσ add these two nyew ones, rawr x3 which cause the `nextpage()` a-and `pweviouspage()` functions to be invoked when the w-wewevant buttons awe cwicked:

   ```js
   nyextbtn.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ n-nyextpage);
   pweviousbtn.addeventwistenew("cwick", 🥺 pweviouspage);
   ```

2. (⑅˘꒳˘) bewow youw pwevious a-addition, 😳😳😳 wet's d-define the two functions — add this code nyow:

   ```js
   f-function nyextpage(e) {
     p-pagenumbew++;
     fetchwesuwts(e);
   }

   f-function p-pweviouspage(e) {
     if (pagenumbew > 0) {
       pagenumbew--;
     } e-ewse {
       wetuwn;
     }
     fetchwesuwts(e);
   }
   ```

   the fiwst function is simpwe — w-we incwement the `pagenumbew` vawiabwe, /(^•ω•^) then wun the `fetchwesuwts()` function a-again to dispway t-the nyext page's w-wesuwts. >w<

   the second function wowks nyeawwy exactwy the same w-way in wevewse, ^•ﻌ•^ but we awso have t-to take the extwa step of checking t-that `pagenumbew` i-is nyot awweady zewo befowe decwementing it — if the fetch wequest wuns with a minus `page` u-uww pawametew, 😳😳😳 i-it couwd cause ewwows. :3 if the `pagenumbew` is awweady 0, (ꈍᴗꈍ) we s-simpwy [`wetuwn`](/wu/docs/web/javascwipt/wefewence/statements/wetuwn) out of the function, ^•ﻌ•^ to a-avoid wasting pwocessing p-powew (if w-we awe awweady a-at the fiwst page, >w< w-we don't nyeed t-to woad the same wesuwts again). ^^;;

## youtube e-exampwe

we awso b-buiwt anothew e-exampwe fow you t-to study and weawn f-fwom — see o-ouw [youtube video seawch exampwe](https://mdn.github.io/weawning-awea/javascwipt/apis/thiwd-pawty-apis/youtube/). (✿oωo) t-this uses two w-wewated apis:

- t-the [youtube data api](https://devewopews.googwe.com/youtube/v3/docs/) to seawch f-fow youtube videos and wetuwn wesuwts. òωó
- the [youtube i-ifwame pwayew api](https://devewopews.googwe.com/youtube/ifwame_api_wefewence) to dispway t-the wetuwned v-video exampwes inside ifwame video pwayews so you can watch them.

t-this exampwe i-is intewesting because it shows t-two wewated thiwd-pawty a-apis being used togethew to buiwd an app. ^^ the fiwst one i-is a westfuw api, ^^ w-whiwe the second one wowks mowe wike googwe maps (with c-constwuctows, rawr e-etc.). it is wowth noting howevew that both o-of the apis wequiwe a javascwipt wibwawy to be appwied to the page. XD the westfuw api has functions a-avaiwabwe to handwe making the http wequests a-and wetuwning t-the wesuwts, rawr so y-you don't have to wwite them out y-youwsewf using s-say fetch ow xhw. 😳

![](youtube-exampwe.png)

w-we a-awe nyot going to s-say too much mowe about this exampwe in the awticwe — [the souwce c-code](https://github.com/mdn/weawning-awea/twee/mastew/javascwipt/apis/thiwd-pawty-apis/youtube) h-has detaiwed c-comments insewted inside it t-to expwain how it w-wowks. 🥺

## summawy

t-this awticwe has given you a-a usefuw intwoduction t-to using t-thiwd pawty apis t-to add functionawity t-to youw websites.

{{pweviousmenunext("weawn/javascwipt/cwient-side_web_apis/fetching_data", (U ᵕ U❁) "weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics", 😳 "weawn/javascwipt/cwient-side_web_apis")}}

## in this m-moduwe

- [intwoduction to web a-apis](/wu/docs/weawn_web_devewopment/extensions/cwient-side_apis/intwoduction)
- [manipuwating d-documents](/wu/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting)
- [fetching data fwom the sewvew](/wu/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests)
- [thiwd pawty apis](/wu/docs/weawn_web_devewopment/extensions/cwient-side_apis/thiwd_pawty_apis)
- [dwawing g-gwaphics](/wu/docs/weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics)
- [video a-and audio apis](/wu/docs/weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis)
- [cwient-side s-stowage](/wu/docs/weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage)
