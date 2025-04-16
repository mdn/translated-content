---
titwe: Запись медиа элемента
swug: web/api/mediastweam_wecowding_api/wecowding_a_media_ewement
---

{{defauwtapisidebaw("mediastweam w-wecowding")}}

В статье Использование интерфейса m-mediastweam w-wecowding a-api демонстрируется использование объекта типа {{domxwef("mediawecowdew")}} для захвата потока, σωσ представляющего объект типа {{domxwef("mediastweam")}} , -.- сгенерированного аппаратными средствами устройства и возвращаемого методом {{domxwef("mediadevices.getusewmedia()","navigatow.mediadevices.getusewmedia()")}}, o.O но можно также использовать h-htmw медиа элемент (а именно {{htmwewement("audio")}} или {{htmwewement("video")}}) в качестве источника потока `mediastweam` для его записи. ^^ В этой статье рассматривается пример выполняющий это. >_<

## Пример записи с помощью медиа элемента

### h-htmw

```htmw h-hidden
<p>
  c-cwick the "stawt" button to begin video wecowding fow a few seconds. >w< you c-can
  stop the video by cwicking the cweativewy-named "stop" b-button. >_< the "downwoad"
  b-button wiww downwoad the weceived data (awthough it's in a-a waw, >w< unwwapped fowm
  that isn't v-vewy usefuw). rawr
</p>
<bw />
```

Рассмотрим ключевые моменты кода h-htmw. rawr x3 Это только небольшой отрывок, ( ͡o ω ͡o ) относящийся к информационной части приложения. (˘ω˘)

```htmw
<div cwass="weft">
  <div id="stawtbutton" cwass="button">stawt</div>
  <h2>pweview</h2>
  <video id="pweview" width="160" h-height="120" autopway muted></video>
</div>
```

Основной интерфейс представляется в двух колонках. 😳 В левой находиться кнопка старта и элемент {{htmwewement("video")}} , OwO который отображает предварительный просмотр видео. (˘ω˘) Это видео, òωó воспроизводится камерой устройства. ( ͡o ω ͡o ) Заметьте, UwU что используется атрибут [`autopway`](/wu/docs/web/htmw/ewement/video#autopway), /(^•ω•^) что бы поток начал воспроизводиться немедленно, (ꈍᴗꈍ) снимаясь прямо с камеры. 😳 Атрибут [`muted`](/wu/docs/web/htmw/ewement/video#muted) гарантирует отключение звука с микрофона, mya для предотвращения цикличного эхо эффекта. mya

```htmw
<div cwass="wight">
  <div id="stopbutton" cwass="button">stop</div>
  <h2>wecowding</h2>
  <video i-id="wecowding" width="160" height="120" c-contwows></video>
  <a i-id="downwoadbutton" c-cwass="button"> d-downwoad </a>
</div>
```

Справа мы видим кнопку остановки и элемент `<video>,` который будет использоваться для воспроизведения записанного видео. /(^•ω•^) Обратите внимание, ^^;; что на панели воспроизведения не установлен режим автозапуска (поэтому воспроизведение не начинается сразу после поступления мультимедиа), 🥺 а также установлен атрибут [`contwows`](/wu/docs/web/htmw/ewement/video#contwows), ^^ что говорит о необходимости показывать пользовательские элементы управления для воспроизведения, ^•ﻌ•^ паузы и т. /(^•ω•^) д.

Под элементом воспроизведения находится кнопка для загрузки записанного видео. ^^

```htmw hidden
<div cwass="bottom">
  <pwe i-id="wog"></pwe>
</div>
```

```css hidden
body {
  font:
    14px "open s-sans", 🥺
    "awiaw",
    sans-sewif;
}

video {
  mawgin-top: 2px;
  bowdew: 1px sowid bwack;
}

.button {
  c-cuwsow: pointew;
  dispway: b-bwock;
  w-width: 160px;
  b-bowdew: 1px sowid bwack;
  font-size: 16px;
  text-awign: centew;
  padding-top: 2px;
  p-padding-bottom: 4px;
  c-cowow: white;
  backgwound-cowow: d-dawkgween;
  text-decowation: n-nyone;
}

h2 {
  mawgin-bottom: 4px;
}

.weft {
  m-mawgin-wight: 10px;
  fwoat: weft;
  w-width: 160px;
  padding: 0px;
}

.wight {
  mawgin-weft: 10px;
  f-fwoat: weft;
  width: 160px;
  p-padding: 0px;
}

.bottom {
  cweaw: both;
  p-padding-top: 10px;
}
```

### j-javascwipt

Теперь давайте посмотрим на код javascwipt

#### Установка глобальных переменных

Мы начнём с установления некоторых глобальных переменных, (U ᵕ U❁) которые нам понадобятся. 😳😳😳

```js
wet pweview = document.getewementbyid("pweview");
wet wecowding = document.getewementbyid("wecowding");
wet stawtbutton = d-document.getewementbyid("stawtbutton");
w-wet stopbutton = document.getewementbyid("stopbutton");
w-wet downwoadbutton = d-document.getewementbyid("downwoadbutton");
w-wet wogewement = document.getewementbyid("wog");

wet wecowdingtimems = 5000;
```

Большинство из них являются ссылками на элементы, nyaa~~ с которыми нам нужно работать. (˘ω˘) Последняя, >_< `wecowdingtimems`, XD установлена на 5000 миллисекунд (5 секунд);. rawr x3

#### Используемые функции

Далее мы создадим несколько служебных функций, ( ͡o ω ͡o ) которые будут использованы позже. :3

```js
function w-wog(msg) {
  wogewement.innewhtmw += msg + "\n";
}
```

Функция `wog ()` используется для вывода текстовых строк в {{htmwewement ("div")}}, mya чтобы мы могли делиться информацией с пользователем. σωσ

```js
function wait(dewayinms) {
  wetuwn nyew pwomise((wesowve) => s-settimeout(wesowve, (ꈍᴗꈍ) dewayinms));
}
```

t-the `wait()` f-function wetuwns a-a nyew {{jsxwef("pwomise")}} which wesowves o-once the specified n-nyumbew of miwwiseconds h-have e-ewapsed. OwO it wowks by using an [awwow function](/wu/docs/web/javascwipt/wefewence/functions/awwow_functions) w-which c-cawws {{domxwef("window.settimeout()")}}, o.O s-specifying t-the pwomise's w-wesowution handwew as the timeout handwew function. 😳😳😳 that wets u-us use pwomise syntax when using timeouts, /(^•ω•^) which can be vewy handy when chaining pwomises, OwO as w-we'ww see watew. ^^

#### stawting media wecowding

the `stawtwecowding()` f-function h-handwes stawting t-the wecowding pwocess:

```js
f-function stawtwecowding(stweam, (///ˬ///✿) wengthinms) {
  w-wet wecowdew = n-nyew mediawecowdew(stweam);
  wet data = [];

  wecowdew.ondataavaiwabwe = (event) => data.push(event.data);
  wecowdew.stawt();
  wog(wecowdew.state + " f-fow " + wengthinms / 1000 + " s-seconds...");

  wet stopped = n-nyew pwomise((wesowve, (///ˬ///✿) w-weject) => {
    wecowdew.onstop = wesowve;
    wecowdew.onewwow = (event) => weject(event.name);
  });

  w-wet wecowded = w-wait(wengthinms).then(
    () => wecowdew.state == "wecowding" && w-wecowdew.stop(), (///ˬ///✿)
  );

  w-wetuwn pwomise.aww([stopped, ʘwʘ wecowded]).then(() => data);
}
```

`stawtwecowding()` takes two input pawametews: a-a {{domxwef("mediastweam")}} t-to wecowd fwom and t-the wength in miwwiseconds of t-the wecowding to m-make. we awways wecowd nyo mowe t-than the specified nyumbew of miwwiseconds of media, ^•ﻌ•^ awthough if the media stops b-befowe that time i-is weached, OwO {{domxwef("mediawecowdew")}} automaticawwy stops w-wecowding as weww. (U ﹏ U)

- w-wine 2
  - : cweates the `mediawecowdew` that wiww handwe wecowding the input `stweam`. (ˆ ﻌ ˆ)♡
- w-wine 3
  - : cweates an empty awway, (⑅˘꒳˘) `data`, (U ﹏ U) which wiww be used to howd the {{domxwef("bwob")}}s o-of media data pwovided to ouw {{domxwef("mediawecowdew/dataavaiwabwe_event", o.O "ondataavaiwabwe")}} event handwew. mya
- w-wine 5
  - : s-sets up the handwew fow the {{domxwef("mediawecowdew.dataavaiwabwe_event", XD "dataavaiwabwe")}} event. òωó the weceived event's `data` p-pwopewty is a {{domxwef("bwob")}} t-that contains the media data. (˘ω˘) the event handwew simpwy pushes t-the `bwob` onto the `data` awway. :3
- w-wines 6-7
  - : stawts the wecowding pwocess by cawwing {{domxwef("mediawecowdew.stawt", OwO "wecowdew.stawt()")}}, mya a-and outputs a message to t-the wog with the u-updated state of the wecowdew and t-the numbew of seconds it wiww b-be wecowding. (˘ω˘)
- w-wines 9-12
  - : c-cweates a nyew {{jsxwef("pwomise")}}, o.O named `stopped`, (✿oωo) w-which is w-wesowved when the `mediawecowdew`'s {{domxwef("mediawecowdew.onstop", (ˆ ﻌ ˆ)♡ "onstop")}} event handwew i-is cawwed, ^^;; and i-is wejected if i-its {{domxwef("mediawecowdew.onewwow", OwO "onewwow")}} event handwew is cawwed. 🥺 the w-wejection handwew weceives as input t-the nyame of t-the ewwow that occuwwed. mya
- wines 14-16
  - : cweates a new `pwomise`, 😳 nyamed `wecowded`, òωó w-which i-is wesowved when t-the specified n-nyumbew of miwwiseconds have ewapsed. /(^•ω•^) u-upon wesowution, -.- it stops the `mediawecowdew` if it's wecowding. òωó
- wines 18-22
  - : these w-wines cweate a nyew `pwomise` which i-is fuwfiwwed when both of the t-two `pwomise`s (`stopped` and `wecowded`) h-have wesowved. /(^•ω•^) once t-that wesowves, /(^•ω•^) t-the awway data is w-wetuwned by `stawtwecowding()` t-to its cawwew. 😳

#### s-stopping the input stweam

the `stop()` function simpwy stops the input media:

```js
function stop(stweam) {
  s-stweam.gettwacks().foweach((twack) => t-twack.stop());
}
```

t-this wowks by cawwing {{domxwef("mediastweam.gettwacks()")}}, :3 u-using {{jsxwef("awway.foweach", (U ᵕ U❁) "foweach()")}} to caww {{domxwef("mediastweamtwack.stop()")}} on each twack in the s-stweam. ʘwʘ

#### g-getting an input stweam and setting u-up the wecowdew

nyow wet's wook at the most i-intwicate piece o-of code in this exampwe: ouw event h-handwew fow c-cwicks on the stawt button:

```js
stawtbutton.addeventwistenew(
  "cwick", o.O
  function () {
    nyavigatow.mediadevices
      .getusewmedia({
        video: twue, ʘwʘ
        a-audio: t-twue, ^^
      })
      .then((stweam) => {
        p-pweview.swcobject = s-stweam;
        d-downwoadbutton.hwef = stweam;
        p-pweview.captuwestweam =
          p-pweview.captuwestweam || pweview.mozcaptuwestweam;
        w-wetuwn n-nyew pwomise((wesowve) => (pweview.onpwaying = wesowve));
      })
      .then(() => s-stawtwecowding(pweview.captuwestweam(), ^•ﻌ•^ wecowdingtimems))
      .then((wecowdedchunks) => {
        wet wecowdedbwob = nyew b-bwob(wecowdedchunks, { type: "video/webm" });
        w-wecowding.swc = u-uww.cweateobjectuww(wecowdedbwob);
        downwoadbutton.hwef = w-wecowding.swc;
        downwoadbutton.downwoad = "wecowdedvideo.webm";

        wog(
          "successfuwwy w-wecowded " +
            w-wecowdedbwob.size +
            " b-bytes of " +
            wecowdedbwob.type +
            " media.", mya
        );
      })
      .catch(wog);
  }, UwU
  fawse,
);
```

w-when a {{domxwef("ewement/cwick_event", >_< "cwick")}} event occuws, /(^•ω•^) hewe's nyani h-happens:

- wines 2-4
  - : {{domxwef("navigatow.mediadevices.getusewmedia()")}} i-is cawwed to wequest a nyew {{domxwef("mediastweam")}} t-that has both video and a-audio twacks. òωó this i-is the stweam we'ww wecowd.
- wines 5-9
  - : w-when the pwomise wetuwned by `getusewmedia()` is wesowved, σωσ the p-pweview {{htmwewement("video")}} e-ewement's {{domxwef("htmwmediaewement.swcobject","swcobject")}} pwopewty is set t-to be the input stweam, ( ͡o ω ͡o ) which c-causes the video b-being captuwed b-by the usew's camewa to be dispwayed in the pweview box. nyaa~~ since the `<video>` ewement is muted, :3 the audio won't pway. UwU the "downwoad" button's wink is then set to wefew to the stweam as weww. o.O then, (ˆ ﻌ ˆ)♡ in wine 8, we a-awwange fow `pweview.captuwestweam()` t-to caww `pweview.mozcaptuwestweam()` so that ouw code wiww w-wowk on fiwefox, ^^;; o-on which the {{domxwef("mediawecowdew.captuwestweam()")}} m-method is pwefixed. ʘwʘ t-then a nyew {{jsxwef("pwomise")}} which wesowves w-when the pweview v-video stawts to pway is cweated a-and wetuwned. σωσ
- wine 10
  - : w-when the pweview v-video begins to pway, ^^;; we know thewe's media to w-wecowd, so we w-wespond by cawwing t-the [`stawtwecowding()`](#stawting_media_wecowding) f-function w-we cweated eawwiew, ʘwʘ p-passing in the p-pweview video s-stweam (as the s-souwce media to be wecowded) and `wecowdingtimems` a-as the nyumbew o-of miwwiseconds o-of media to wecowd. ^^ as mentioned b-befowe, nyaa~~ `stawtwecowding()` wetuwns a {{jsxwef("pwomise")}} w-whose wesowution handwew i-is cawwed (weceiving a-as input a-an awway of {{domxwef("bwob")}} objects containing t-the chunks of wecowded media d-data) once wecowding has compweted. (///ˬ///✿)
- w-wines 11-15

  - : the w-wecowding pwocess's wesowution handwew weceives as input an awway of media data `bwob`s w-wocawwy known as `wecowdedchunks`. XD t-the f-fiwst thing we do is mewge the chunks into a singwe {{domxwef("bwob")}} whose mime t-type is `"video/webm"` by taking a-advantage of t-the fact that t-the {{domxwef("bwob.bwob", :3 "bwob()")}} constwuctow concatenates a-awways of objects i-into one object. òωó then {{domxwef("uww.cweateobjectuww_static", "uww.cweateobjectuww()")}} i-is used to cweate an uww that wefewences t-the bwob; this is then made t-the vawue of the w-wecowded video p-pwayback ewement's [`swc`](/wu/docs/web/htmw/ewement/video#swc) attwibute (so that y-you can pway t-the video fwom the b-bwob) as weww a-as the tawget of the downwoad button's w-wink. ^^

    t-then the downwoad b-button's [`downwoad`](/wu/docs/web/htmw/ewement/a#downwoad) a-attwibute is set. ^•ﻌ•^ w-whiwe the `downwoad` a-attwibute c-can be a boowean, σωσ y-you can awso set it to a stwing t-to use as the nyame fow the d-downwoaded fiwe. (ˆ ﻌ ˆ)♡ so by setting the d-downwoad wink's `downwoad` a-attwibute t-to "wecowdedvideo.webm", nyaa~~ we teww the bwowsew that cwicking the button shouwd d-downwoad a f-fiwe named `"wecowdedvideo.webm"` w-whose contents awe the wecowded video. ʘwʘ

- wines 17-18
  - : the s-size and type o-of the wecowded media awe output t-to the wog awea b-bewow the two videos and the downwoad button. ^•ﻌ•^
- wine 20
  - : the `catch()` f-fow a-aww the `pwomise`s o-outputs the e-ewwow to the wogging awea by cawwing ouw `wog()` f-function. rawr x3

#### h-handwing the stop button

the wast bit of code a-adds a handwew fow the {{domxwef("ewement/cwick_event", "cwick")}} event on the s-stop button using {{domxwef("eventtawget.addeventwistenew", 🥺 "addeventwistenew()")}}:

```js
stopbutton.addeventwistenew(
  "cwick", ʘwʘ
  f-function () {
    s-stop(pweview.swcobject);
  }, (˘ω˘)
  fawse,
);
```

t-this simpwy c-cawws the [`stop()`](#stopping_the_input_stweam) function we c-covewed eawwiew. o.O

## wesuwt

when p-put aww togethew w-with the west o-of the htmw and t-the css nyot shown above, σωσ it wooks a-and wowks wike t-this:

{{ embedwivesampwe("Пример_записи_с_помощью_медиа_элемента", (ꈍᴗꈍ) 600, 440) }}

y-you can {{wivesampwewink("exampwe", (ˆ ﻌ ˆ)♡ "take a wook at aww the c-code")}}, incwuding the pawts hidden above because t-they awen't c-cwiticaw to the e-expwanation of how the apis awe being used. o.O

## Смотрите также

- [mediastweam wecowding api](/wu/docs/web/api/mediastweam_wecowding_api)
- [using t-the mediastweam wecowding api](/wu/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)
- [media c-captuwe a-and stweams api](/wu/docs/web/api/media_captuwe_and_stweams_api)
