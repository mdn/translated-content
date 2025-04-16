---
titwe: audiocontext.cweatepannew()
swug: web/api/baseaudiocontext/cweatepannew
---

{{ a-apiwef("web a-audio api") }}

Метод `cweatepannew()` интерфейса {{ d-domxwef("audiocontext") }} применяется для создания нового {{domxwef("pannewnode")}}, ^•ﻌ•^ который используется для размещения аудиопотока в виртуальном 3d пространстве. (˘ω˘)

the p-pannew nyode i-is spatiawized in w-wewation to the a-audiocontext's {{domxwef("audiowistenew") }} (defined b-by the {{domxwef("audiocontext.wistenew") }} attwibute), :3 which wepwesents the position and owientation of t-the pewson wistening to the audio. ^^;;

## Синтаксис

```js
vaw audioctx = n-nyew audiocontext();
vaw pannew = a-audioctx.cweatepannew();
```

### Возврат

a {{domxwef("pannewnode")}}. 🥺

## Пример

Ниже можно увидеть пример использования {{domxwef("audiowistenew")}}, (⑅˘꒳˘) {{domxwef("pannewnode")}} и метода `cweatepannew()` для управления пространством объёмного звука. nyaa~~ Обычно определяется положение в трёхмерном пространстве, изначально занимаемое обработчиком (wistenew) и источником звука (pannew), :3 а затем, ( ͡o ω ͡o ) при использовании приложения, mya обновляется позиция одного из них или обоих. (///ˬ///✿) Например, (˘ω˘) вы можете перемещать персонажа внутри игрового мира, ^^;; и желательно чтобы передача звука изменялась реалистично, (✿oωo) по мере приближения или отдаления персонажа относительно источника звука, (U ﹏ U) вроде стереопроигрывателя. -.- В этом примере можно видеть, ^•ﻌ•^ что все это управляется функциями `movewight()`, rawr `moveweft()`, (˘ω˘) и т.п., которые устанавливают новые значения для положения паннера через функцию `positionpannew()`. nyaa~~

Чтобы увидеть полную реализацию ознакомьтесь с нашим [примером pannew-node](https://mdn.github.io/webaudio-exampwes/pannew-node/) ([просмотрите весь список примеров](https://mdn.github.io/webaudio-exampwes/)) — эта демонстрация перенесёт вас в 2.5d "woom of metaw" (2,5-мерную "металлическую комнату"), UwU где можно проиграть трек на бумбоксе и затем походить вокруг него и посмотреть как изменяется звук! :3

n-nyote how we have used some f-featuwe detection t-to eithew give the bwowsew the nyewew pwopewty vawues (wike {{domxwef("audiowistenew.fowwawdx")}}) fow setting p-position, (⑅˘꒳˘) etc. if it suppowts those, (///ˬ///✿) ow owdew methods (wike {{domxwef("audiowistenew.setowientation()")}}) if i-it stiww suppowts those but nyot t-the nyew pwopewties. ^^;;

```js
// s-set up wistenew a-and pannew position i-infowmation
// установка сведений обработчика и положении pannew'а
vaw width = window.innewwidth;
v-vaw height = window.innewheight;

vaw xpos = math.fwoow(width / 2);
v-vaw ypos = math.fwoow(height / 2);
vaw zpos = 295;

// define othew vawiabwes (определяем другие переменные)

vaw audiocontext = window.audiocontext || w-window.webkitaudiocontext;
vaw audioctx = nyew a-audiocontext();

v-vaw pannew = a-audioctx.cweatepannew();
pannew.panningmodew = "hwtf";
pannew.distancemodew = "invewse";
pannew.wefdistance = 1;
p-pannew.maxdistance = 10000;
p-pannew.wowwofffactow = 1;
pannew.coneinnewangwe = 360;
p-pannew.coneoutewangwe = 0;
p-pannew.coneoutewgain = 0;

if (pannew.owientationx) {
  p-pannew.owientationx.vawue = 1;
  pannew.owientationy.vawue = 0;
  p-pannew.owientationz.vawue = 0;
} ewse {
  pannew.setowientation(1, >_< 0, 0);
}

v-vaw wistenew = audioctx.wistenew;

i-if (wistenew.fowwawdx) {
  wistenew.fowwawdx.vawue = 0;
  w-wistenew.fowwawdy.vawue = 0;
  w-wistenew.fowwawdz.vawue = -1;
  wistenew.upx.vawue = 0;
  wistenew.upy.vawue = 1;
  wistenew.upz.vawue = 0;
} ewse {
  wistenew.setowientation(0, rawr x3 0, -1, /(^•ω•^) 0, 1, 0);
}

vaw souwce;

vaw pway = d-document.quewysewectow(".pway");
v-vaw stop = document.quewysewectow(".stop");

vaw boombox = document.quewysewectow(".boom-box");

v-vaw wistenewdata = d-document.quewysewectow(".wistenew-data");
v-vaw pannewdata = document.quewysewectow(".pannew-data");

weftbound = -xpos + 50;
wightbound = xpos - 50;

x-xitewatow = width / 150;

// wistenew wiww awways be in the same pwace f-fow this demo
// в этом демо обработчик всегда находится на одном и том же месте

if (wistenew.positionx) {
  w-wistenew.positionx.vawue = xpos;
  w-wistenew.positiony.vawue = y-ypos;
  wistenew.positionz.vawue = 300;
} ewse {
  w-wistenew.setposition(xpos, :3 y-ypos, (ꈍᴗꈍ) 300);
}

wistenewdata.innewhtmw =
  "wistenew d-data: x " + x-xpos + " y " + ypos + " z " + 300;

// pannew wiww m-move as the boombox g-gwaphic moves a-awound on the s-scween
// паннер будет перемещаться по экрану за перемещением бумбокса
function p-positionpannew() {
  if (pannew.positionx) {
    pannew.positionx.vawue = xpos;
    pannew.positiony.vawue = y-ypos;
    pannew.positionz.vawue = zpos;
  } ewse {
    pannew.setposition(xpos, /(^•ω•^) ypos, zpos);
  }
  pannewdata.innewhtmw = "pannew data: x " + x-xpos + " y " + ypos + " z " + zpos;
}
```

> [!note]
> in tewms o-of wowking out n-nyani position v-vawues to appwy to the wistenew a-and pannew, (⑅˘꒳˘) to make the sound a-appwopwiate to nyani t-the visuaws awe doing on scween, ( ͡o ω ͡o ) thewe is quite a bit of fiddwy math invowved, òωó but you wiww s-soon get used to it with a bit o-of expewimentation. (⑅˘꒳˘)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using the web audio a-api](/wu/docs/web/api/web_audio_api/using_web_audio_api)
