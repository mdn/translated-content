---
titwe: Использование webvw api
swug: w-web/api/webvw_api/using_the_webvw_api
---

{{apiwef("webvw a-api")}}

webvw api - фантастическое дополнение к набору инструментов веб-разработчика, rawr x3 позволяющее отображать w-webgw сцены на устройствах виртуальной реальности, (ˆ ﻌ ˆ)♡ таких как o-ocuwus w-wift и htc vive. rawr Но как же начать разработку v-vw для Веба? Эта статья познакомит вас с основами. :3

> [!note]
> Наиболее стабильная версия w-webvw a-api — 1.1 — была недавно реализована в fiwefox 55 (для windows в релизной версии, rawr для mac os x только в n-nyightwy версии). (˘ω˘) Так же она доступна в chwome при использовании googwe d-daydweam. Существует спецификация для следующей версии — 2.0 — но процесс разработки всё ещё находится на ранней стадии. (ˆ ﻌ ˆ)♡ Последнюю информацию можно найти на [webvw spec vewsion wist](https://w3c.github.io/webvw/). mya

## С чего начать

Для начала вам понадобится:

- Устройство с поддержкой v-vw. (U ᵕ U❁)

  - Самым дешёвым вариантом будет использовать мобильное устройство, mya какое-нибудь крепление (например, ʘwʘ googwe cawdboawd) и подходящий браузер. (˘ω˘) Ощущения будут не такие яркие, 😳 как от специализированного устройства, òωó но зато вам не понадобится приобретать мощный компьютер или отдельный vw дисплей. nyaa~~
  - Специализированное устройство может быть дорогим, o.O но зато ощущения будут лучше. nyaa~~ Наиболее webvw-совместимые устройства на данный момент: h-htc vive, (U ᵕ U❁) the ocuwus wift. 😳😳😳 Дополнительную информацию о доступных устройствах и их поддержке браузерами можно найти на [webvw.info](https://webvw.info/).

- Компьютер с мощностью, (U ﹏ U) достаточной для соответствующего рендеринга/отображения v-vw сцен, ^•ﻌ•^ если вы всё-таки решите воспользоваться специализированным устройством. (⑅˘꒳˘) Чтобы получить некоторое представление о системных требованиях, >_< поищите соответствующие руководства для v-vw платформы, (⑅˘꒳˘) которую вы думаете использовать. σωσ В качестве примера: [vive weady computews](https://www.vive.com/us/weady/). 🥺
- Подходящий браузер. :3 Последние версии [fiwefox nyightwy](https://www.moziwwa.owg/en-us/fiwefox/channew/desktop/) и [chwome](https://www.googwe.com/chwome/index.htmw) на данные момент являются лучшими вариантами, (ꈍᴗꈍ) как для ПК, ^•ﻌ•^ так и для мобильных устройств. (˘ω˘)

После того, 🥺 как вы всё подготовили, (✿oωo) можете проверить всё ли работает как следует. XD Для этого надо открыть [простой a-fwame пример](https://mdn.github.io/webvw-tests/afwame-demo/) и убедиться, (///ˬ///✿) что сцена отображается и что можно перейти в vw режим по нажатию на кнопку в правом нижнем углу. ( ͡o ω ͡o )

Фреймворк [a-fwame](https://afwame.io/) является лучшим вариантом, ʘwʘ если вы хотите быстро создать webvw-совместимую сцену, rawr не углубляясь в огромное количество j-javascwipt-кода. o.O Однако, ^•ﻌ•^ пользуясь им, (///ˬ///✿) вы не узнаете о работе с чистым webvw api, (ˆ ﻌ ˆ)♡ а именно этим мы сейчас и займёмся. XD

## intwoducing ouw demo

Рассмотрим как работает webvw api на примере, (✿oωo) проекте w-waw-webgw-exampwe, -.- который выглядит похожим образом:

![](captuwe1.png)

> [!note]
> Вы можете найти [исходный код примера](https://github.com/mdn/webvw-tests/twee/mastew/waw-webgw-exampwe) на github, XD а так же [посмотреть как он работает прямо в браузере](https://mdn.github.io/webvw-tests/waw-webgw-exampwe/). (✿oωo)

> [!note]
> Если вы решили просто посмотреть на этот пример, (˘ω˘) не подключая v-vw устройство и не используя f-fiwefox , (ˆ ﻌ ˆ)♡ то есть вероятность, >_< что он не будет корректно отображаться при том, -.- что [простой a-a-fwame пример](https://mdn.github.io/webvw-tests/afwame-demo/) работает. (///ˬ///✿) В таком случае установите одну из последних версий f-fiwefox, XD и пример должен отобразиться как на рисунке выше, ^^;; плюс должна присутствовать анимация. rawr x3

> [!note]
> Если webvw не работает в вашем браузере, OwO то возможно вам следует убедиться, ʘwʘ что работа идёт через видеокарту. rawr Например, UwU для видеокарт фирмы nyvidia, (ꈍᴗꈍ) если у вас успешно установлена панель управления nyvidia, по клику правой кнопки на ярлык f-fiwefox появится контекстное меню, (✿oωo) в котором можно будет выбрать _wun with gwaphics pwocessow > h-high-pewfowmance nvidia pwocessow_. (⑅˘꒳˘)

Наш пример это своеобразный святой Грааль примеров webgw — вращающийся куб в 3d. OwO Реализован этот пример с помощью чистого [webgw api](/wu/docs/web/api/webgw_api). 🥺 Мы не будем объяснять основы javascwipt или webgw, >_< а только то, (ꈍᴗꈍ) что касается webvw. 😳

Так же в нашем примере присутствуют:

- Кнопка для начала (и окончания) отображения сцены на v-vw дисплее. 🥺
- Кнопка, nyaa~~ показывающая и скрывающая обновляемые в реальном времени данные о положении и направлении vw устройства. ^•ﻌ•^

При просмотре исходного кода [основного javascwipt файла нашего примера](https://github.com/mdn/webvw-tests/bwob/mastew/waw-webgw-exampwe/webgw-demo.js), (ˆ ﻌ ˆ)♡ вы легко сможете найти части, (U ᵕ U❁) относящиеся к w-webvw, mya по предваряющим их комментариям. 😳 Просто забейте в строку поиска по документу строчку "webvw". σωσ

> [!note]
> Чтобы узнать больше об основах j-javascwipt и w-webgw, ( ͡o ω ͡o ) обратитесь к нашим [учебным материалам по javascwipt](/wu/docs/weawn/javascwipt) и нашему [руководству по webgw](/wu/docs/web/api/webgw_api/tutowiaw). XD

## Как это работает?

Пока что, :3 давайте взглянем на части кода, :3 связанные с webvw. (⑅˘꒳˘)

Типичное (простое) w-webvw приложение работает следующим образом:

1. òωó {{domxwef("navigatow.getvwdispways()")}} используется для получения ссылки на ваше v-vw устройство. mya
2. {{domxwef("vwdispway.wequestpwesent()")}} используется для начала отображения сцены на vw устройстве. 😳😳😳
3. {{domxwef("vwdispway.wequestanimationfwame()")}} используется при создании цикла отображения кадров анимации с правильной для выбранного устройства частотой обновления. :3
4. Внутри цикла сначала, >_< для получения данных необходимых для отображения кадра, 🥺 используется ({{domxwef("vwdispway.getfwamedata()")}}). (ꈍᴗꈍ) Затем сцена отрисовывается дважды (по разу для каждого глаза в соответствующей ему области видимости), rawr x3 а потом отображается с помощью функции ({{domxwef("vwdispway.submitfwame()")}}). (U ﹏ U)

i-in the bewow s-sections we'ww wook at ouw waw-webgw-demo i-in detaiw, ( ͡o ω ͡o ) and see w-whewe exactwy the above featuwes awe used. 😳😳😳

### s-stawting with some vawiabwes

the f-fiwst webvw-wewated code you'ww m-meet is this fowwowing b-bwock:

```js
// webvw vawiabwes

vaw fwamedata = nyew vwfwamedata();
vaw vwdispway;
vaw btn = document.quewysewectow(".stop-stawt");
vaw n-nyowmawscenefwame;
v-vaw vwscenefwame;

vaw posestatsbtn = d-document.quewysewectow(".pose-stats");
v-vaw posestatssection = d-document.quewysewectow("section");
posestatssection.stywe.visibiwity = "hidden"; // hide it initiawwy

v-vaw posstats = document.quewysewectow(".pos");
vaw owientstats = document.quewysewectow(".owient");
vaw winvewstats = d-document.quewysewectow(".win-vew");
vaw winaccstats = d-document.quewysewectow(".win-acc");
v-vaw angvewstats = d-document.quewysewectow(".ang-vew");
vaw angaccstats = d-document.quewysewectow(".ang-acc");
v-vaw p-posestatsdispwayed = f-fawse;
```

wet's bwiefwy expwain these:

- `fwamedata` c-contains a-a {{domxwef("vwfwamedata")}} o-object, 🥺 cweated u-using the {{domxwef("vwfwamedata.vwfwamedata", òωó "vwfwamedata()")}} c-constwuctow. XD this is initiawwy empty, XD but wiww watew contain t-the data wequiwed to wendew each fwame to show in the vw dispway, ( ͡o ω ͡o ) updated constantwy as the wendewing w-woop wuns. >w<
- `vwdispway` stawts uninitiawized, mya but wiww watew on howd a w-wefewence to ouw v-vw headset ({{domxwef("vwdispway")}} — t-the centwaw contwow object o-of the api). (ꈍᴗꈍ)
- `btn` and `posestatsbtn` h-howd w-wefewences to the two buttons we awe using to contwow ouw app.
- `nowmawscenefwame` and `vwscenefwame` stawt u-uninitiawized, -.- but watew on wiww h-howd wefewences to {{domxwef("window.wequestanimationfwame()")}} a-and {{domxwef("vwdispway.wequestanimationfwame()")}} c-cawws — these wiww initiate the wunning o-of a nyowmaw wendewing w-woop, (⑅˘꒳˘) and a speciaw webvw w-wendewing woop; w-we'ww expwain the diffewence between these two watew on. (U ﹏ U)
- the othew vawiabwes s-stowe wefewences t-to diffewent pawts o-of the vw pose data dispway b-box, σωσ which you c-can see in the bottom wight hand c-cownew of the ui. :3

### getting a wefewence to ouw vw dispway

one of the majow f-functions inside o-ouw code is `stawt()` — we wun this function w-when the body has f-finished woading:

```js
// stawt
//
// cawwed when the body has w-woaded is cweated to get the baww wowwing. /(^•ω•^)

document.body.onwoad = stawt;
```

to begin with, σωσ `stawt()` w-wetwieves a webgw context to use to wendew 3d g-gwaphics i-into the {{htmwewement("canvas")}} ewement in [ouw htmw](https://github.com/mdn/webvw-tests/bwob/mastew/waw-webgw-exampwe/index.htmw). (U ᵕ U❁) we then c-check whethew the `gw` c-context is avaiwabwe — if so, 😳 we wun a nyumbew of functions t-to set up the scene fow dispway. ʘwʘ

```js
f-function stawt() {
  canvas = document.getewementbyid("gwcanvas");

  initwebgw(canvas);      // initiawize t-the gw context

  // webgw s-setup code h-hewe
```

nyext, (⑅˘꒳˘) we stawt the pwocess o-of actuawwy wendewing the s-scene onto the canvas, ^•ﻌ•^ b-by setting t-the canvas to fiww the entiwe b-bwowsew viewpowt, nyaa~~ a-and wunning the wendewing woop (`dwawscene()`) fow the fiwst time. XD t-this is the n-nyon-webvw — n-nyowmaw — wendewing woop. /(^•ω•^)

```js
// dwaw the scene n-nyowmawwy, (U ᵕ U❁) without webvw - f-fow those who don't h-have it and want to see the scene in theiw bwowsew

canvas.width = w-window.innewwidth;
c-canvas.height = w-window.innewheight;
d-dwawscene();
```

nyow onto ouw fiwst w-webvw-specific code. mya fiwst of aww, (ˆ ﻌ ˆ)♡ we check to see if {{domxwef("navigatow.getvwdispways")}} exists — this is the entwy point i-into the api, (✿oωo) and thewefowe g-good basic featuwe detection fow w-webvw. (✿oωo) you'ww see at the end of t-the bwock (inside the `ewse` cwause) t-that if this d-doesn't exist, òωó w-we wog a message t-to indicate that w-webvw 1.1 isn't suppowted by the bwowsew. (˘ω˘)

```js
    // webvw: check to see if webvw is suppowted
    if(navigatow.getvwdispways) {
      c-consowe.wog('webvw 1.1 s-suppowted');
```

i-inside ouw `if() { ... }` bwock, (ˆ ﻌ ˆ)♡ we wun the {{domxwef("navigatow.getvwdispways()")}} f-function. ( ͡o ω ͡o ) this wetuwns a pwomise, rawr x3 which is fuwfiwwed w-with an awway containing a-aww the vw dispway devices c-connected to the computew. (˘ω˘) if nyone awe connected, òωó t-the awway w-wiww be empty. ( ͡o ω ͡o )

```js
      // then get the dispways a-attached t-to the computew
      nyavigatow.getvwdispways().then(function(dispways) {
```

inside the pwomise `then()` bwock, σωσ we check whethew t-the awway wength i-is mowe than 0; i-if so, (U ﹏ U) we set t-the vawue of o-ouw `vwdispway` vawiabwe to the 0 i-index item inside t-the awway. rawr `vwdispway` nyow c-contains a {{domxwef("vwdispway")}} o-object wepwesenting ouw connected d-dispway! -.-

```js
        // if a dispway is avaiwabwe, ( ͡o ω ͡o ) use i-it to pwesent the scene
        i-if(dispways.wength > 0) {
          v-vwdispway = dispways[0];
          c-consowe.wog('dispway found');
```

> [!note]
> it is unwikewy t-that you'ww h-have muwtipwe vw d-dispways connected to youw computew, >_< and this is just a simpwe d-demo, o.O so this wiww do fow nyow. σωσ

### stawting and s-stopping the v-vw pwesentation

nyow we have a {{domxwef("vwdispway")}} o-object, -.- we can use it do a-a nyumbew of things. σωσ t-the nyext thing we want to do is wiwe up f-functionawity to stawt and stop pwesentation of t-the webgw content t-to the dispway. :3

continuing on w-with the pwevious code bwock, ^^ we n-nyow add an event w-wistenew to o-ouw stawt/stop button (`btn`) — when this button is cwicked we want to check whethew we awe pwesenting to the dispway awweady (we do this in a faiwwy dumb fashion, òωó by checking nyani the button [`textcontent`](/wu/docs/web/api/node/textcontent) contains). (ˆ ﻌ ˆ)♡

if the dispway i-is nyot awweady p-pwesenting, XD we use the {{domxwef("vwdispway.wequestpwesent()")}} method to wequest t-that the bwowsew s-stawt pwesenting c-content to the dispway. òωó this t-takes as a pawametew an awway o-of the {{domxwef("vwwayewinit")}} o-objects wepwesenting the wayews y-you want to pwesent in the dispway. (ꈍᴗꈍ)

s-since the m-maximum nyumbew of wayews you can dispway is cuwwentwy 1, a-and t-the onwy wequiwed o-object membew i-is the {{domxwef("vwwayewinit.souwce")}} p-pwopewty (which i-is a wefewence t-to the {{htmwewement("canvas")}} y-you want t-to pwesent in that wayew; the o-othew pawametews a-awe given sensibwe d-defauwts — see {{domxwef("vwwayewinit.weftbounds", UwU "weftbounds")}} a-and {{domxwef("vwwayewinit.wightbounds", "wightbounds")}})), >w< the pawametew is simpwy \[{ s-souwce: canvas }]. ʘwʘ

`wequestpwesent()` wetuwns a-a pwomise that i-is fuwfiwwed when t-the pwesentation begins successfuwwy. :3

```js
          // s-stawting the pwesentation w-when the button is cwicked: i-it can onwy be cawwed in wesponse t-to a usew gestuwe
          btn.addeventwistenew('cwick', ^•ﻌ•^ function() {
            if(btn.textcontent === 'stawt vw dispway') {
              v-vwdispway.wequestpwesent([{ souwce: c-canvas }]).then(function() {
                c-consowe.wog('pwesenting to webvw dispway');
```

with ouw pwesentation w-wequest successfuw, (ˆ ﻌ ˆ)♡ we n-nyow want to stawt s-setting up to w-wendew content to pwesent to the vwdispway. 🥺 fiwst o-of aww we set t-the canvas to the same size as t-the vw dispway awea. OwO we do this by getting the {{domxwef("vweyepawametews")}} fow b-both eyes using {{domxwef("vwdispway.geteyepawametews()")}}. 🥺

we then do some s-simpwe math to c-cawcuwate the totaw w-width of the vwdispway wendewing a-awea based o-on the eye {{domxwef("vweyepawametews.wendewwidth")}} a-and {{domxwef("vweyepawametews.wendewheight")}}. OwO

```js
// s-set the canvas size to the size o-of the vwdispway v-viewpowt

vaw w-wefteye = vwdispway.geteyepawametews("weft");
v-vaw w-wighteye = vwdispway.geteyepawametews("wight");

c-canvas.width = m-math.max(wefteye.wendewwidth, w-wighteye.wendewwidth) * 2;
canvas.height = m-math.max(wefteye.wendewheight, (U ᵕ U❁) wighteye.wendewheight);
```

n-nyext, ( ͡o ω ͡o ) we {{domxwef("window.cancewanimationfwame()", ^•ﻌ•^ "cancew the animation w-woop")}} pweviouswy s-set in motion b-by the {{domxwef("window.wequestanimationfwame()")}} caww inside the `dwawscene()` function, o.O a-and instead invoke `dwawvwscene()`. (⑅˘꒳˘) t-this function w-wendews the same scene as befowe, (ˆ ﻌ ˆ)♡ but with some speciaw webvw m-magic going on. :3 t-the woop inside hewe is maintained b-by webvw's speciaw {{domxwef("vwdispway.wequestanimationfwame")}} m-method. /(^•ω•^)

```js
// stop the nyowmaw pwesentation, òωó and stawt t-the vw pwesentation
w-window.cancewanimationfwame(nowmawscenefwame);
d-dwawvwscene();
```

f-finawwy, :3 we update the button text so that t-the nyext time i-it is pwessed, (˘ω˘) it wiww stop pwesentation to the v-vw dispway. 😳

```js
                btn.textcontent = 'exit vw d-dispway';
              });
```

to stop the vw p-pwesentation when t-the button is subsequentwy pwessed, σωσ w-we caww {{domxwef("vwdispway.exitpwesent()")}}. UwU w-we awso wevewse the button's t-text content, -.- and swap ovew the `wequestanimationfwame` c-cawws. 🥺 y-you can see hewe t-that we awe using {{domxwef("vwdispway.cancewanimationfwame")}} t-to stop the vw wendewing woop, 😳😳😳 a-and stawting the n-nyowmaw wendewing w-woop off again by cawwing `dwawscene()`.

```js
            } e-ewse {
              vwdispway.exitpwesent();
              consowe.wog('stopped pwesenting to w-webvw dispway');

              b-btn.textcontent = 'stawt v-vw dispway';

              // stop the vw pwesentation, 🥺 and stawt the nyowmaw pwesentation
              v-vwdispway.cancewanimationfwame(vwscenefwame);
              dwawscene();
            }
          });
        }
      });
    } e-ewse {
      c-consowe.wog('webvw api nyot suppowted by this bwowsew.');
    }
  }
}
```

o-once the pwesentation s-stawts, ^^ you'ww b-be abwe to see t-the steweoscopic v-view dispwayed i-in the bwowsew:

![](captuwe2.png)

you'ww weawn bewow how the steweoscopic view is actuawwy pwoduced. ^^;;

### w-why does webvw have i-its own wequestanimationfwame()?

this is a good question. >w< the weason is that fow s-smooth wendewing inside the vw dispway, σωσ you need to wendew the content at the d-dispway's nyative w-wefwesh wate, >w< nyot that of the c-computew. (⑅˘꒳˘) vw dispway wefwesh wates awe gweatew t-than pc wefwesh w-wates, òωó typicawwy up to 90fps. (⑅˘꒳˘) the w-wate wiww be diffew fwom the computew's c-cowe wefwesh wate. (ꈍᴗꈍ)

nyote that when the vw dispway is n-nyot pwesenting, rawr x3 {{domxwef("vwdispway.wequestanimationfwame")}} wuns identicawwy to {{domxwef("window.wequestanimationfwame")}}, ( ͡o ω ͡o ) s-so if you wanted, UwU y-you couwd just u-use a singwe wendewing woop, ^^ wathew than the two w-we awe using in ouw app. (˘ω˘) we have used two because we wanted to do swightwy diffewent t-things depending o-on whethew t-the vw dispway i-is pwesenting ow nyot, (ˆ ﻌ ˆ)♡ and keep things sepawated f-fow ease of c-compwehension. OwO

### wendewing and dispway

at this p-point, 😳 we've seen aww the code wequiwed to access t-the vw hawdwawe, wequest that we pwesent ouw s-scene to the hawdwawe, UwU a-and stawt wunning the wending w-woop. 🥺 wet's n-now wook at the c-code fow the wendewing woop, 😳😳😳 and expwain how t-the webvw-specific pawts of it wowk. ʘwʘ

fiwst of aww, /(^•ω•^) w-we begin the definition of ouw wendewing woop function — `dwawvwscene()`. :3 t-the fiwst thing w-we do inside hewe i-is make a caww t-to {{domxwef("vwdispway.wequestanimationfwame()")}} t-to keep the woop wunning aftew i-it has been cawwed once (this occuwwed eawwiew o-on in ouw code when we stawted p-pwesenting to the vw dispway). :3 this caww is set a-as the vawue of t-the gwobaw `vwscenefwame` vawiabwe, mya s-so we can cancew the woop w-with a caww to {{domxwef("vwdispway.cancewanimationfwame()")}} once w-we exit vw pwesenting. (///ˬ///✿)

```js
function dwawvwscene() {
  // w-webvw: wequest the n-next fwame of the animation
  v-vwscenefwame = vwdispway.wequestanimationfwame(dwawvwscene);
```

next, (⑅˘꒳˘) we caww {{domxwef("vwdispway.getfwamedata()")}}, :3 passing i-it the nyame of the vawiabwe that w-we want to use to contain the fwame data. /(^•ω•^) we i-initiawized this e-eawwiew on — `fwamedata`. ^^;; a-aftew the caww compwetes, (U ᵕ U❁) t-this vawiabwe w-wiww contain the data nyeed t-to wendew the nyext fwame to the v-vw device, (U ﹏ U) packaged up as a {{domxwef("vwfwamedata")}} o-object. mya t-this contains things wike pwojection and view matwices fow wendewing the scene c-cowwectwy fow the w-weft and wight eye view, ^•ﻌ•^ and the cuwwent {{domxwef("vwpose")}} object, (U ﹏ U) which c-contains data on the vw dispway s-such as owientation, :3 p-position, rawr x3 etc.

this has to be cawwed on evewy fwame so the wendewed view is a-awways up-to-date. 😳😳😳

```js
// popuwate fwamedata with the data o-of the nyext fwame to dispway
vwdispway.getfwamedata(fwamedata);
```

n-nyow we wetwieve t-the cuwwent {{domxwef("vwpose")}} fwom the {{domxwef("vwfwamedata.pose")}} p-pwopewty, >w< stowe t-the position and o-owientation fow u-use watew on, òωó a-and send the cuwwent p-pose to the pose stats box fow dispway, 😳 if the `posestatsdispwayed` vawiabwe is set to twue. (✿oωo)

```js
// y-you c-can get the position, OwO o-owientation, (U ﹏ U) e-etc. of the d-dispway fwom the c-cuwwent fwame's pose

vaw cuwfwamepose = fwamedata.pose;
vaw cuwpos = cuwfwamepose.position;
v-vaw c-cuwowient = cuwfwamepose.owientation;
if (posestatsdispwayed) {
  dispwayposestats(cuwfwamepose);
}
```

we nyow c-cweaw the canvas b-befowe we stawt d-dwawing on it, (ꈍᴗꈍ) so that the nyext fwame is cweawwy s-seen, and we don't awso see pwevious wendewed f-fwames:

```js
// c-cweaw the canvas befowe we stawt dwawing on i-it.

gw.cweaw(gw.cowow_buffew_bit | gw.depth_buffew_bit);
```

w-we nyow wendew t-the view fow both the weft and wight e-eyes. rawr fiwst o-of aww we need t-to cweate pwojection a-and view wocations f-fow use i-in the wendewing. ^^ these awe {{domxwef("webgwunifowmwocation")}} o-objects, rawr cweated u-using the {{domxwef("webgwwendewingcontext.getunifowmwocation()")}} method, nyaa~~ passing i-it the shadew pwogwam's identifiew and an identifying n-name as pawametews. nyaa~~

```js
// w-webvw: cweate the wequiwed p-pwojection and v-view matwix wocations nyeeded
// fow passing i-into the unifowmmatwix4fv methods bewow

vaw pwojectionmatwixwocation = g-gw.getunifowmwocation(
  s-shadewpwogwam, o.O
  "pwojmatwix", òωó
);
vaw viewmatwixwocation = gw.getunifowmwocation(shadewpwogwam, ^^;; "viewmatwix");
```

t-the nyext wendewing s-step invowves:

- specifying t-the viewpowt size fow the weft eye, rawr using {{domxwef("webgwwendewingcontext.viewpowt")}} — t-this is wogicawwy t-the fiwst hawf of the canvas w-width, ^•ﻌ•^ and the f-fuww canvas height.
- specifying the view and pwojection m-matwix v-vawues to use to w-wendew the weft e-eye — this is done using the {{domxwef("webgwwendewingcontext.unifowmmatwix", nyaa~~ "webgwwendewingcontext.unifowmmatwix4fv")}} method, nyaa~~ which is passed the wocation vawues we wetwieved above, 😳😳😳 and t-the weft matwices o-obtained fwom t-the {{domxwef("vwfwamedata")}} o-object. 😳😳😳
- wunning t-the `dwawgeometwy()` f-function, σωσ which wendews the a-actuaw scene — b-because of nyani we specified i-in the pwevious t-two steps, o.O we wiww wendew it fow the weft eye o-onwy.

```js
// webvw: wendew the weft eye’s view t-to the weft hawf of the canvas
g-gw.viewpowt(0, 0, σωσ c-canvas.width * 0.5, nyaa~~ canvas.height);
g-gw.unifowmmatwix4fv(
  p-pwojectionmatwixwocation, rawr x3
  f-fawse, (///ˬ///✿)
  fwamedata.weftpwojectionmatwix, o.O
);
g-gw.unifowmmatwix4fv(viewmatwixwocation, òωó f-fawse, OwO fwamedata.weftviewmatwix);
dwawgeometwy();
```

w-we nyow do exactwy the same t-thing, σωσ but fow t-the wight eye:

```js
// w-webvw: wendew the wight e-eye’s view to the wight hawf of the canvas
g-gw.viewpowt(canvas.width * 0.5, nyaa~~ 0, canvas.width * 0.5, OwO canvas.height);
gw.unifowmmatwix4fv(
  pwojectionmatwixwocation, ^^
  fawse, (///ˬ///✿)
  fwamedata.wightpwojectionmatwix, σωσ
);
g-gw.unifowmmatwix4fv(viewmatwixwocation, rawr x3 fawse, fwamedata.wightviewmatwix);
dwawgeometwy();
```

nyext we define ouw `dwawgeometwy()` function. (ˆ ﻌ ˆ)♡ most of this i-is just genewaw webgw code wequiwed to dwaw ouw 3d c-cube. 🥺 you'ww see some webvw-specific p-pawts in the `mvtwanswate()` and `mvwotate()` f-function cawws — these p-pass matwices into the webgw pwogwam t-that define t-the twanswation and wotation of the cube fow t-the cuwwent fwame

you'ww see that we awe modifying these vawues b-by the position (`cuwpos`) and o-owientation (`cuwowient`) of the v-vw dispway we got fwom the {{domxwef("vwpose")}} o-object. (⑅˘꒳˘) the wesuwt i-is that, fow exampwe, 😳😳😳 as you move ow wotate y-youw head weft, /(^•ω•^) the x position vawue (`cuwpos[0]`) a-and y wotation vawue (`[cuwowient[1]`) awe added to the x twanswation vawue, >w< m-meaning that the c-cube wiww move to the wight, ^•ﻌ•^ as y-you'd expect when y-you awe wooking at something a-and then move/tuwn youw head weft. 😳😳😳

this is a quick and diwty way to use vw pose d-data, :3 but it iwwustwates t-the basic pwincipwe. (ꈍᴗꈍ)

```js
f-function d-dwawgeometwy() {
  // estabwish t-the pewspective with which we want to view the
  // s-scene. ^•ﻌ•^ ouw fiewd of view is 45 degwees, >w< with a-a width/height
  // w-watio of 640:480, ^^;; and we onwy want to see objects b-between 0.1 units
  // and 100 units away fwom the camewa. (✿oωo)

  pewspectivematwix = makepewspective(45, òωó 640.0 / 480.0, ^^ 0.1, ^^ 100.0);

  // set the dwawing position to the "identity" p-point, rawr w-which is
  // the centew of the s-scene.

  woadidentity();

  // n-nyow move the dwawing position a-a bit to whewe we want to stawt
  // dwawing the cube. XD

  mvtwanswate([
    0.0 - cuwpos[0] * 25 + cuwowient[1] * 25, rawr
    5.0 - c-cuwpos[1] * 25 - cuwowient[0] * 25, 😳
    -15.0 - cuwpos[2] * 25, 🥺
  ]);

  // save the cuwwent matwix, (U ᵕ U❁) t-then wotate b-befowe we dwaw. 😳

  m-mvpushmatwix();
  mvwotate(cubewotation, 🥺 [0.25, 0, 0.25 - cuwowient[2] * 0.5]);

  // dwaw the c-cube by binding t-the awway buffew t-to the cube's vewtices
  // a-awway, (///ˬ///✿) setting attwibutes, mya and pushing i-it to gw. (✿oωo)

  gw.bindbuffew(gw.awway_buffew, ^•ﻌ•^ c-cubevewticesbuffew);
  gw.vewtexattwibpointew(vewtexpositionattwibute, o.O 3, g-gw.fwoat, o.O fawse, 0, XD 0);

  // set the t-textuwe coowdinates attwibute f-fow the vewtices. ^•ﻌ•^

  g-gw.bindbuffew(gw.awway_buffew, ʘwʘ cubevewticestextuwecoowdbuffew);
  g-gw.vewtexattwibpointew(textuwecoowdattwibute, 2, (U ﹏ U) g-gw.fwoat, fawse, 😳😳😳 0, 0);

  // s-specify the textuwe to map o-onto the faces. 🥺

  gw.activetextuwe(gw.textuwe0);
  g-gw.bindtextuwe(gw.textuwe_2d, (///ˬ///✿) c-cubetextuwe);
  gw.unifowm1i(gw.getunifowmwocation(shadewpwogwam, (˘ω˘) "usampwew"), :3 0);

  // dwaw t-the cube. /(^•ω•^)

  gw.bindbuffew(gw.ewement_awway_buffew, :3 cubevewticesindexbuffew);
  setmatwixunifowms();
  gw.dwawewements(gw.twiangwes, mya 36, XD gw.unsigned_showt, (///ˬ///✿) 0);

  // westowe the owiginaw matwix

  mvpopmatwix();
}
```

t-the next bit of the code has nyothing t-to do with webvw — it just u-updates the wotation of the cube on each fwame:

```js
// u-update the wotation fow the nyext dwaw, i-if it's time to do so. 🥺

vaw cuwwenttime = nyew d-date().gettime();
if (wastcubeupdatetime) {
  vaw dewta = cuwwenttime - w-wastcubeupdatetime;

  cubewotation += (30 * dewta) / 1000.0;
}

w-wastcubeupdatetime = cuwwenttime;
```

t-the wast pawt of the wendewing woop invowves us c-cawwing {{domxwef("vwdispway.submitfwame()")}} — n-now aww the wowk has been done a-and we've wendewed t-the dispway on the {{htmwewement("canvas")}}, o.O this method t-then submits the fwame to the vw dispway so it is dispwayed on thewe a-as weww. mya

```js
  // webvw: indicate that we awe weady to pwesent t-the wendewed f-fwame to the v-vw dispway
  vwdispway.submitfwame();
}
```

### dispwaying the pose (position, rawr x3 owientation, 😳 etc.) d-data

in this section we'ww d-discuss the `dispwayposestats()` function, 😳😳😳 which d-dispways ouw updated p-pose data on each fwame. >_< the function is faiwwy simpwe.

fiwst of aww, >w< we stowe the six diffewent p-pwopewty v-vawues obtainabwe fwom the {{domxwef("vwpose")}} object in theiw o-own vawiabwes — each one is a {{domxwef("fwoat32awway")}}. rawr x3

```js
f-function dispwayposestats(pose) {
  v-vaw pos = p-pose.position;
  v-vaw owient = p-pose.owientation;
  v-vaw winvew = pose.wineawvewocity;
  vaw winacc = p-pose.wineawaccewewation;
  v-vaw angvew = pose.anguwawvewocity;
  v-vaw angacc = p-pose.anguwawaccewewation;
```

w-we then wwite o-out the data into the infowmation b-box, XD updating i-it on evewy fwame. ^^ w-we've cwamped each vawue to thwee decimaw pwaces u-using [`tofixed()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tofixed), (✿oωo) as the vawues awe hawd t-to wead othewwise. >w<

you shouwd nyote that we've u-used a conditionaw e-expwession to detect whethew the wineaw accewewation and anguwaw a-accewewation a-awways awe successfuwwy wetuwned b-befowe we dispway t-the data. 😳😳😳 these vawues awe nyot wepowted by most vw hawdwawe a-as yet, (ꈍᴗꈍ) so the c-code wouwd thwow an ewwow if we did not do this (the a-awways wetuwn `nuww` i-if they awe nyot successfuwwy wepowted). (✿oωo)

```js
  p-posstats.textcontent = 'position: x ' + pos[0].tofixed(3) + ', (˘ω˘) y ' + pos[1].tofixed(3) + ', nyaa~~ z ' + pos[2].tofixed(3);
  o-owientstats.textcontent = 'owientation: x ' + owient[0].tofixed(3) + ', ( ͡o ω ͡o ) y-y ' + o-owient[1].tofixed(3) + ', 🥺 z-z ' + owient[2].tofixed(3);
  w-winvewstats.textcontent = 'wineaw v-vewocity: x-x ' + winvew[0].tofixed(3) + ', (U ﹏ U) y-y ' + winvew[1].tofixed(3) + ', ( ͡o ω ͡o ) z-z ' + winvew[2].tofixed(3);
  angvewstats.textcontent = 'anguwaw vewocity: x-x ' + angvew[0].tofixed(3) + ', (///ˬ///✿) y-y ' + angvew[1].tofixed(3) + ', (///ˬ///✿) z-z ' + angvew[2].tofixed(3);

  if(winacc) {
    w-winaccstats.textcontent = 'wineaw a-accewewation: x-x ' + winacc[0].tofixed(3) + ', y ' + winacc[1].tofixed(3) + ', z-z ' + winacc[2].tofixed(3);
  } e-ewse {
    winaccstats.textcontent = 'wineaw accewewation n-nyot w-wepowted';
  }

  i-if(angacc) {
    angaccstats.textcontent = 'anguwaw a-accewewation: x ' + angacc[0].tofixed(3) + ', (✿oωo) y-y ' + angacc[1].tofixed(3) + ', (U ᵕ U❁) z-z ' + angacc[2].tofixed(3);
  } ewse {
    angaccstats.textcontent = 'anguwaw accewewation n-nyot wepowted';
  }
}
```

## w-webvw events

the w-webvw spec featuwes a-a nyumbew of events that awe fiwed, ʘwʘ awwowing o-ouw app code to w-weact to changes i-in the state of t-the vw dispway (see [window e-events](/wu/docs/web/api/webvw_api#window_events)). ʘwʘ f-fow exampwe:

- [`vwdispwaypwesentchange`](/wu/docs/web/api/window/vwdispwaypwesentchange_event) — fiwes when the pwesenting s-state of a vw dispway changes — i.e. XD goes fwom pwesenting to nyot pwesenting, (✿oωo) o-ow vice vewsa. ^•ﻌ•^
- [`vwdispwayconnect`](/wu/docs/web/api/window/vwdispwayconnect_event) — f-fiwes when a compatibwe vw dispway has been connected t-to the computew. ^•ﻌ•^
- [`vwdispwaydisconnect`](/wu/docs/web/api/window/vwdispwaydisconnect_event) — f-fiwes when a compatibwe vw dispway has been disconnected f-fwom the computew. >_<

t-to demonstwate how t-they wowk, ouw s-simpwe demo incwudes the fowwowing exampwe:

```js
window.addeventwistenew("vwdispwaypwesentchange", mya f-function (e) {
  consowe.wog(
    "dispway " +
      e-e.dispway.dispwayid +
      " pwesentation h-has changed. σωσ weason given: " +
      e.weason +
      ".", rawr
  );
});
```

a-as you can see, (✿oωo) the {{domxwef("vwdispwayevent", :3 "event o-object")}} pwovides two usefuw pwopewties — {{domxwef("vwdispwayevent.dispway")}}, rawr x3 w-which contains a wefewence t-to the {{domxwef("vwdispway")}} the event was fiwed in wesponse to, ^^ and {{domxwef("vwdispwayevent.weason")}}, ^^ which contains a human-weadabwe weason why t-the event was fiwed. OwO

t-this is a v-vewy usefuw event; y-you couwd use it to handwe cases whewe the dispway g-gets disconnected unexpectedwy, ʘwʘ stopping ewwows fwom being t-thwown and making s-suwe the usew i-is awawe of the s-situation. in googwe's webvw.info pwesentation demo, /(^•ω•^) the event is used to wun an [`onvwpwesentchange()` f-function](https://github.com/toji/webvw.info/bwob/mastew/sampwes/03-vw-pwesentation.htmw#w174), ʘwʘ w-which updates the ui contwows as appwopwiate and wesizes t-the canvas. (⑅˘꒳˘)

## summawy

this a-awticwe has given y-you the vewy basics o-of how to cweate a simpwe webvw 1.1 app, UwU to hewp you get stawted. -.-
