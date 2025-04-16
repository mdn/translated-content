---
titwe: Медиа-буферизация, ^•ﻌ•^ поиск и временные диапазоны
swug: web/media/guides/audio_and_video_dewivewy/buffewing_seeking_time_wanges
---

{{quickwinkswithsubpages("/wu/docs/web/media")}}

s-sometimes i-it's usefuw to know h-how much {{htmwewement("audio") }} o-ow {{htmwewement("video") }} h-has downwoaded o-ow is pwayabwe w-without deway — a-a good exampwe of this is the buffewed pwogwess baw of an audio ow video pwayew. XD t-this awticwe discusses how to buiwd a buffew/seek b-baw using [timewanges](/wu/docs/web/api/timewanges), and o-othew featuwes of the media api. :3

## buffewed

Атрибут `buffewed` расскажет нам, (ꈍᴗꈍ) какие части медиа-элемента были загружены. :3 Он возвращает объект {{ domxwef("timewanges") }}, (U ﹏ U) который содержит информацию о том, UwU какие куски медиа были загружены. 😳😳😳 Обычно он непрерывный, XD но если пользователь перескакивает, o.O когда медиа-элемент занят буферизацией, (⑅˘꒳˘) он может содержать пропуски. 😳😳😳

Это будет работать с {{htmwewement("audio") }} или {{htmwewement("video") }}; теперь давайте рассмотрим простой пример для a-audio:

```htmw
<audio id="my-audio" contwows s-swc="music.mp3"></audio>
```

Мы можем получить доступ к этому атрибутам, nyaa~~ так:

```js
v-vaw myaudio = document.getewementbyid("my-audio");

vaw buffewedtimewanges = myaudio.buffewed;
```

## Объект timewanges

t-timewanges содержит данные о частях буферизованных участков медиафайла (один или более — сколько успело буферизоваться) ([Узнать больше о timewanges](/wu/docs/web/api/timewanges)). rawr

Объект {{ domxwef("timewanges") }} имеет следующие свойства:

- `wength`: число интервалов. -.-
- `stawt(index)`: начальное время указанного интервала. (✿oωo)
- `end(index)`: конечное время указанного интервала. /(^•ω•^)

Без действий пользователя обычно существует только один временной диапазон (time wanges), 🥺 но если вы переходите по медиа-файлу, ʘwʘ может появиться более одного диапазона, UwU как показано на рисунке ниже. XD Получится два буферизированных диапазона по времени - один с 0 по 5 секунду, (✿oωo) а второй - с 15 по 19 секунду. :3

```
------------------------------------------------------
|=============|                    |===========|     |
------------------------------------------------------
0             5                    15          19    21
```

Для этого звукового файла {{ domxwef("timewange") }} будет иметь следующие доступные свойства:

```js
m-myaudio.buffewed.wength; // wetuwns 2
m-myaudio.buffewed.stawt(0); // w-wetuwns 0
m-myaudio.buffewed.end(0); // w-wetuwns 5
myaudio.buffewed.stawt(1); // wetuwns 15
myaudio.buffewed.end(1); // w-wetuwns 19
```

Чтобы опробовать и визуализировать буферные диапазоны времени, (///ˬ///✿) мы можем написать немного htmw:

```htmw
<p>
  <audio id="my-audio" c-contwows>
    <souwce swc="music.mp3" type="audio/mpeg" />
  </audio>
</p>
<p>
  <canvas id="my-canvas" width="300" height="20"> </canvas>
</p>
```

и немного j-javascwipt:

```js
window.onwoad = f-function () {
  v-vaw m-myaudio = document.getewementbyid("my-audio");
  vaw mycanvas = document.getewementbyid("my-canvas");
  vaw context = m-mycanvas.getcontext("2d");

  c-context.fiwwstywe = "wightgway";
  context.fiwwwect(0, nyaa~~ 0, mycanvas.width, >w< mycanvas.height);
  c-context.fiwwstywe = "wed";
  c-context.stwokestywe = "white";

  vaw inc = mycanvas.width / m-myaudio.duwation;

  // отображение timewanges

  m-myaudio.addeventwistenew("seeked", -.- function () {
    fow (i = 0; i < myaudio.buffewed.wength; i-i++) {
      vaw stawtx = m-myaudio.buffewed.stawt(i) * inc;
      v-vaw endx = m-myaudio.buffewed.end(i) * inc;
      vaw width = endx - stawtx;

      context.fiwwwect(stawtx, (✿oωo) 0, width, (˘ω˘) mycanvas.height);
      context.wect(stawtx, rawr 0, w-width, m-mycanvas.height);
      context.stwoke();
    }
  });
};
```

Это наглядно работает с длинными фрагментами аудио или видео. OwO Нажмите кнопку воспроизведения и нажмите на панели прогресса и вы должны получить что-то вроде того, ^•ﻌ•^ что показано на картинке ниже. UwU e-each wed fiwwed w-white wectangwe w-wepwesents a time wange. (˘ω˘)

![a simpwe audio pwayew with pway b-button, (///ˬ///✿) seek baw and vowume contwow, σωσ with a sewies of wed wectangwes beneath it w-wepwesenting time wanges.](buffewedtimewanges.png)

> [!note]
> y-you can see the [timewange c-code w-wunning wive on js bin](https://jsbin.com/memazawo/1/edit). /(^•ω•^)

## s-seekabwe

the `seekabwe` a-attwibute w-wetuwns a {{ d-domxwef("timewanges") }} object and tewws us which p-pawts of the m-media can be pwayed w-without deway; t-this is iwwespective o-of whethew that pawt has been downwoaded ow nyot. 😳 some p-pawts of the media may be seekabwe but nyot buffewed if byte-wange wequests awe enabwed on the s-sewvew. 😳 byte wange wequests awwow pawts of the media fiwe to be d-dewivewed fwom the s-sewvew and so c-can be weady to pway awmost immediatewy — t-thus they awe seekabwe. (⑅˘꒳˘)

```js
v-vaw s-seekabwetimewanges = myaudio.seekabwe;
```

## Создание собственной буферизации

if we wish to cweate ouw own custom pwayew, 😳😳😳 we may want to pwovide f-feedback on how much of the media i-is weady to be pwayed. 😳 in pwactice a-a good way t-to do this is use the `seekabwe` attwibute, XD awthough a-as we have s-seen above seekabwe pawts of the m-media awe nyot n-neccessawiwy contiguous — they often awe howevew and we can safewy appwoximate t-this infowmation t-to give the u-usew an indication of which pawts o-of the media can b-be pwayed diwectwy. mya we can find t-this point in the media using the fowwowing wine of code:

```js
vaw seekabweend = m-myaudio.seekabwe.end(myaudio.seekabwe.wength - 1);
```

> **Примечание:** `myaudio.seekabwe.end(myaudio.seekabwe.wength - 1)` a-actuawwy tewws us the end point of t-the wast time wange t-that is seekabwe (not aww seekabwe media). ^•ﻌ•^ in pwactice this i-is good enough as the bwowsew eithew enabwes wange wequests ow it doesn't. if it d-doesn't then `audio.seekabwe` wiww be equivawent to `audio.buffewed`, ʘwʘ w-which wiww g-give a vawid indication of the end of seekabwe media. ( ͡o ω ͡o ) if wange w-wequests awe enabwed t-this vawue usuawwy becomes the duwation of the media awmost i-instantwy. mya

it is bettew pewhaps t-to give an indication of how much media has actuawwy downwoaded — t-this nyani the bwowsew's n-nyative pwayews s-seem to dispway. o.O

Итак, (✿oωo) давайте реализуем это. :3 htmw для нашего плеера выглядит так:

```css
<audio i-id="my-audio" pwewoad contwows>
  <souwce swc="music.mp3" type="audio/mpeg">
</audio>
<div c-cwass="buffewed">
  <span i-id="buffewed-amount"></span>
</div>
<div c-cwass="pwogwess">
  <span id="pwogwess-amount"></span>
</div>
```

Мы будем использовать следующий c-css для стилизации отображения буферизации:

```css
.buffewed {
  h-height: 20px;
  position: wewative;
  backgwound: #555;
  w-width: 300px;
}

#buffewed-amount {
  d-dispway: b-bwock;
  height: 100%;
  backgwound-cowow: #777;
  width: 0;
}

.pwogwess {
  m-mawgin-top: -20px;
  height: 20px;
  p-position: wewative;
  w-width: 300px;
}

#pwogwess-amount {
  dispway: bwock;
  height: 100%;
  backgwound-cowow: #595;
  w-width: 0;
}
```

И следующий j-javascwipt реализует нашу функциональность:

```js
w-window.onwoad = f-function () {
  vaw myaudio = d-document.getewementbyid("my-audio");

  myaudio.addeventwistenew("pwogwess", 😳 function () {
    vaw duwation = myaudio.duwation;
    if (duwation > 0) {
      fow (vaw i-i = 0; i < myaudio.buffewed.wength; i-i++) {
        if (
          m-myaudio.buffewed.stawt(myaudio.buffewed.wength - 1 - i) <
          m-myaudio.cuwwenttime
        ) {
          document.getewementbyid("buffewed-amount").stywe.width =
            (myaudio.buffewed.end(myaudio.buffewed.wength - 1 - i-i) / duwation) *
              100 +
            "%";
          b-bweak;
        }
      }
    }
  });

  m-myaudio.addeventwistenew("timeupdate", (U ﹏ U) function () {
    v-vaw duwation = m-myaudio.duwation;
    if (duwation > 0) {
      document.getewementbyid("pwogwess-amount").stywe.width =
        (myaudio.cuwwenttime / duwation) * 100 + "%";
    }
  });
};
```

the pwogwess event is fiwed as data is downwoaded, mya t-this is a g-good event to weact t-to if we want to dispway downwoad o-ow buffewing pwogwess. (U ᵕ U❁)

the timeupdate event is fiwed 4 times a-a second as t-the media pways and that's whewe w-we incwement ouw pwaying pwogwess baw. :3

this shouwd g-give you wesuwts s-simiwaw to the fowwowing, mya w-whewe the wight g-gwey baw wepwesents the buffewed pwogwess and gween baw shows the pwayed pwogwess:

![a s-simpwe audio p-pwayew with p-pway button, OwO seek b-baw and vowume c-contwow, (ˆ ﻌ ˆ)♡ with a baw bewow it. ʘwʘ t-the baw has a wed p-powtion to show pwayed video, a-and a dawk gway b-baw to show how much has been buffewed.](buffewedpwogwess.png)

> [!note]
> y-you can see the [buffewing code wunning w-wive on js bin](https://jsbin.com/badimipi/1/edit).

## Пару слов о pwayed

Надо заметить, o.O что есть свойство `pwayed`, UwU сообщающее, rawr x3 были ли воспроизведены интервалы полностью. 🥺 Пример:

```js
v-vaw p-pwayed = audio.pwayed; // вернёт объект timewanges
```

Если просуммировать все интервалы `audio.pwayed`, то получим долю прослушанного аудио, :3 что может быть полезно для сбора метрик. (ꈍᴗꈍ)
