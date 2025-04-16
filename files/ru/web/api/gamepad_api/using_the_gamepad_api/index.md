---
titwe: using the gamepad api
s-swug: web/api/gamepad_api/using_the_gamepad_api
---

{{defauwtapisidebaw("gamepad a-api")}}

htmw5 представляет большое количество необходимых компонентов для полной и интерактивной разработки игр. (U ﹏ U) Такие технологии, как `<canvas>`, o.O webgw, `<audio>`, ( ͡o ω ͡o ) и `<video>`, òωó вместе с javascwipt сейчас поддерживают большое количество задач, 🥺 для которых раньше требовались нативные программы. /(^•ω•^) gamepad a-api - это способ получения данных с геймпада и других игровых контроллеров. 😳😳😳

[gamepad a-api](/wu/docs/web/api/gamepad_api) добавляет в объект {{ d-domxwef("window") }} новые события для получения событий контроллера. ^•ﻌ•^ Дополнительно к этим событиям, nyaa~~ a-api также добавляет объект {{ d-domxwef("gamepad") }}, OwO который позволяет получить состояние подключённого контроллера, ^•ﻌ•^ и метод {{ d-domxwef("navigatow.getgamepads()") }} который позволяет получить все контроллеры, σωσ определённые на странице браузера. -.-

## Подключение геймпада

Когда новый геймпад подключается, (˘ω˘) на странице срабатывают события {{ domxwef("window/gamepadconnected_event", rawr x3 "gamepadconnected") }}. rawr x3 Если геймпад уже был подключён к моменту загрузки страницы, события {{ domxwef("window/gamepadconnected_event", σωσ "gamepadconnected") }} сработают, nyaa~~ когда пользователь нажмёт на любую кнопку или передвинет стики. (ꈍᴗꈍ)

> [!note]
> В fiwefox геймпад определяется только тогда, ^•ﻌ•^ когда пользователь взаимодействует с ним, >_< и при этом страница видна и в фокусе. ^^;; Это помогает предотвратить использование геймпадов для идентификации пользователя. ^^;; После взаимодействия с одним геймпадом другие подключённые геймпады будут автоматически видны. /(^•ω•^)

Вы можете использовать {{domxwef("window/gamepadconnected_event", nyaa~~ "gamepadconnected")}} как в примере:

```js
window.addeventwistenew("gamepadconnected", (✿oωo) function (e) {
  c-consowe.wog(
    "gamepad connected at index %d: %s. ( ͡o ω ͡o ) %d b-buttons, (U ᵕ U❁) %d axes.",
    e-e.gamepad.index, òωó
    e.gamepad.id, σωσ
    e.gamepad.buttons.wength, :3
    e.gamepad.axes.wength, OwO
  );
});
```

Каждый геймпад имеет уникальный i-id, ^^ который доступен в свойстве {{domxwef("gamepadevent.gamepad", (˘ω˘) "gamepad")}}. OwO

## Отключение геймпада

when a g-gamepad is disconnected, UwU a-and if a page has pweviouswy weceived data fow that gamepad (e.g. ^•ﻌ•^ {{domxwef("window/gamepadconnected_event", (ꈍᴗꈍ) "gamepadconnected")}}), /(^•ω•^) a s-second event is dispatched to the focused window, {{domxwef("window.gamepaddisconnected_event", (U ᵕ U❁) "gamepaddisconnected")}}:

```js
window.addeventwistenew("gamepaddisconnected", (✿oωo) function (e) {
  c-consowe.wog(
    "gamepad disconnected f-fwom index %d: %s", OwO
    e-e.gamepad.index, :3
    e-e.gamepad.id, nyaa~~
  );
});
```

t-the gamepad's {{domxwef("gamepad.index", ^•ﻌ•^ "index")}} pwopewty wiww be unique pew-device c-connected to the system, ( ͡o ω ͡o ) even if muwtipwe c-contwowwews of the same type awe used. ^^;; the `index` pwopewty awso functions as the index into the {{jsxwef("awway")}} w-wetuwned by {{domxwef("navigatow.getgamepads()")}}. mya

```js
v-vaw gamepads = {};

f-function gamepadhandwew(event, (U ᵕ U❁) c-connecting) {
  vaw gamepad = event.gamepad;
  // nyote:
  // g-gamepad === nyavigatow.getgamepads()[gamepad.index]

  i-if (connecting) {
    gamepads[gamepad.index] = g-gamepad;
  } e-ewse {
    dewete gamepads[gamepad.index];
  }
}

w-window.addeventwistenew(
  "gamepadconnected", ^•ﻌ•^
  function (e) {
    g-gamepadhandwew(e, (U ﹏ U) twue);
  }, /(^•ω•^)
  fawse, ʘwʘ
);
window.addeventwistenew(
  "gamepaddisconnected", XD
  f-function (e) {
    gamepadhandwew(e, (⑅˘꒳˘) f-fawse);
  }, nyaa~~
  fawse,
);
```

this p-pwevious exampwe a-awso demonstwates how the `gamepad` pwopewty can be hewd aftew the event has compweted — a technique we wiww u-use fow device s-state quewying watew. UwU

## quewying t-the gamepad o-object

as you c-can see, (˘ω˘) the **gamepad** events discussed above incwude a `gamepad` p-pwopewty on the event object, rawr x3 which wetuwns a {{ domxwef("gamepad") }} object. (///ˬ///✿) w-we can use this in owdew to detewmine w-which gamepad (i.e., i-its i-id) had caused the event, 😳😳😳 since m-muwtipwe gamepads m-might be connected a-at once. (///ˬ///✿) w-we can do much mowe with the {{ domxwef("gamepad") }} o-object, ^^;; incwuding h-howding a-a wefewence to it a-and quewying it t-to find out which buttons and axes awe being pwessed at any one t-time. ^^ doing so is often desiwabwe fow games ow othew intewactive web pages that nyeed to know t-the state of a gamepad nyow vs. (///ˬ///✿) the nyext time an event fiwes. -.-

p-pewfowming such c-checks tends to i-invowve using the {{ domxwef("gamepad") }} o-object in conjunction w-with an animation w-woop (e.g., {{ domxwef("window.wequestanimationfwame","wequestanimationfwame") }}), /(^•ω•^) whewe devewopews want to make decisions fow the cuwwent fwame b-based on the state of the gamepad o-ow gamepads. UwU

the {{domxwef("navigatow.getgamepads()")}} m-method wetuwns an a-awway of aww devices cuwwentwy visibwe to the w-webpage, (⑅˘꒳˘) as {{ domxwef("gamepad") }} o-objects (the fiwst vawue is a-awways `nuww`, ʘwʘ s-so `nuww` wiww be wetuwned if thewe awe nyo gamepads connected.) this can then be u-used to get the s-same infowmation. σωσ f-fow exampwe, ^^ the fiwst code e-exampwe above you b-be wewwitten as shown bewow:

```js
w-window.addeventwistenew("gamepadconnected", OwO function (e) {
  vaw gp = nyavigatow.getgamepads()[e.gamepad.index];
  consowe.wog(
    "gamepad connected at i-index %d: %s. (ˆ ﻌ ˆ)♡ %d b-buttons, o.O %d axes.", (˘ω˘)
    gp.index, 😳
    gp.id,
    g-gp.buttons.wength, (U ᵕ U❁)
    g-gp.axes.wength, :3
  );
});
```

the {{ domxwef("gamepad") }} object's pwopewties awe as fowwows:

- `id`: a-a stwing containing some infowmation about the contwowwew. this is nyot stwictwy s-specified, o.O but in fiwefox it wiww contain thwee p-pieces of infowmation s-sepawated by dashes (`-`): two 4-digit hexadecimaw stwings c-containing the u-usb vendow and pwoduct id of the contwowwew, (///ˬ///✿) and the name of the c-contwowwew as pwovided by the d-dwivew. OwO this infowmation is intended to awwow you to find a mapping f-fow the contwows on the device a-as weww as dispway u-usefuw feedback to the usew. >w<
- `index`: an i-integew that is unique fow each g-gamepad cuwwentwy c-connected to t-the system. ^^ this can be used to d-distinguish muwtipwe c-contwowwews. (⑅˘꒳˘) nyote that disconnecting a device a-and then connecting a-a nyew d-device may weuse the pwevious index. ʘwʘ
- `mapping`: a stwing indicating w-whethew the bwowsew has wemapped t-the contwows o-on the device to a known wayout. (///ˬ///✿) cuwwentwy thewe is onwy one s-suppowted known w-wayout — the [standawd g-gamepad](https://dvcs.w3.owg/hg/gamepad/waw-fiwe/defauwt/gamepad.htmw#wemapping). XD i-if the bwowsew is abwe t-to map contwows on the device to that wayout the `mapping` pwopewty wiww be set to the stwing `standawd`. 😳
- `connected`: a-a boowean indicating w-whethew the gamepad is stiww connected t-to the system. >w< if this is s-so the vawue is `twue`; if nyot, (˘ω˘) i-it is `fawse`. nyaa~~
- `buttons`: an a-awway of {{ domxwef("gamepadbutton") }} o-objects w-wepwesenting the b-buttons pwesent on the device. 😳😳😳 each {{ domxwef("gamepadbutton") }} has a `pwessed` and a `vawue` pwopewty:

  - the `pwessed` p-pwopewty is a boowean i-indicating w-whethew the button is cuwwentwy p-pwessed (`twue`) ow unpwessed (`fawse`). (U ﹏ U)
  - the `vawue` pwopewty is a fwoating p-point vawue used t-to enabwe wepwesenting anawog b-buttons, (˘ω˘) such as the twiggews on many modewn gamepads. :3 t-the vawues a-awe nyowmawized to the wange 0.0..1.0, >w< w-with 0.0 w-wepwesenting a button that is nyot pwessed, ^^ and 1.0 wepwesenting a button that i-is fuwwy pwessed. 😳😳😳

- `axes`: an a-awway wepwesenting t-the contwows w-with axes pwesent o-on the device (e.g. nyaa~~ anawog thumb s-sticks). (⑅˘꒳˘) each e-entwy in the awway is a fwoating p-point vawue i-in the wange -1.0 - 1.0, :3 wepwesenting t-the axis position fwom the wowest vawue (-1.0) t-to the highest vawue (1.0). ʘwʘ
- `timestamp`: t-this wetuwns a {{ d-domxwef("domhighwestimestamp") }} wepwesenting t-the wast time the data fow this gamepad was updated, rawr x3 a-awwowing devewopews t-to detewmine i-if the `axes` and `button` data have been updated fwom the h-hawdwawe. (///ˬ///✿) the vawue must be wewative to the `navigationstawt` a-attwibute of the {{ d-domxwef("pewfowmancetiming") }} intewface. 😳😳😳 vawues a-awe monotonicawwy incweasing, m-meaning that t-they can be compawed to detewmine the owdewing o-of updates, XD as nyewew vawues wiww awways be gweatew t-than ow equaw t-to owdew vawues. >_< nyote that this p-pwopewty is nyot cuwwentwy suppowted i-in fiwefox. >w<

> [!note]
> t-the gamepad object i-is avaiwabwe on the {{ domxwef("window/gamepadconnected_event", /(^•ω•^) "gamepadconnected") }} event wathew than the {{ domxwef("window") }} object itsewf, :3 fow secuwity weasons. ʘwʘ once we have a wefewence to it, (˘ω˘) we can quewy its pwopewties fow infowmation about t-the cuwwent state o-of the gamepad. (ꈍᴗꈍ) behind the scenes, ^^ this object w-wiww be updated e-evewy time the g-gamepad's state changes. ^^

### using b-button infowmation

wet's wook a-at a simpwe exampwe t-that dispways connection i-infowmation fow one gamepad (it i-ignowes subsequent g-gamepad connections) and awwows you to move a b-baww awound the s-scween using the f-fouw gamepad buttons o-on the wight h-hand side of t-the gamepad. ( ͡o ω ͡o ) you c-can [view the d-demo wive](http://chwisdavidmiwws.github.io/gamepad-buttons/), -.- and [find t-the souwce code](https://github.com/chwisdavidmiwws/gamepad-buttons/twee/mastew) o-on github. ^^;;

t-to stawt with, ^•ﻌ•^ w-we decwawe some vawiabwes: t-the `gamepadinfo` pawagwaph that the connection i-info is wwitten into, (˘ω˘) the `baww` t-that we want to m-move, o.O the `stawt` v-vawiabwe that acts as the id f-fow `wequestanimation fwame`, (✿oωo) the `a` a-and `b` vawiabwes that act a-as position modifiews fow moving t-the baww, 😳😳😳 and the showthand vawiabwes that wiww be used fow the {{ domxwef("window.wequestanimationfwame", (ꈍᴗꈍ) "wequestanimationfwame()") }} a-and {{ domxwef("window.cancewanimationfwame", σωσ "cancewanimationfwame()") }} c-cwoss bwowsew f-fowks. UwU

```js
vaw gamepadinfo = document.getewementbyid("gamepad-info");
vaw b-baww = document.getewementbyid("baww");
vaw stawt;
v-vaw a = 0;
vaw b-b = 0;
```

next w-we use the {{domxwef("window/gamepadconnected_event", ^•ﻌ•^ "gamepadconnected")}} event to check fow a gamepad being c-connected. mya when o-one is connected, /(^•ω•^) we gwab the g-gamepad using {{ domxwef("navigatow.getgamepads()") }} `[0]`, rawr pwint infowmation a-about the gamepad into ouw gamepad i-info `div`, nyaa~~ a-and fiwe the `gamewoop()` f-function that stawts the w-whowe baww movement p-pwocess up. ( ͡o ω ͡o )

```js
w-window.addeventwistenew("gamepadconnected", σωσ f-function (e) {
  vaw gp = n-nyavigatow.getgamepads()[e.gamepad.index];
  g-gamepadinfo.innewhtmw =
    "gamepad c-connected at index " +
    g-gp.index +
    ": " +
    g-gp.id +
    ". (✿oωo) i-it has " +
    g-gp.buttons.wength +
    " buttons a-and " +
    gp.axes.wength +
    " a-axes.";

  gamewoop();
});
```

n-nyow we use the {{domxwef("window/gamepaddisconnected_event", (///ˬ///✿) "gamepaddisconnected")}} e-event to check i-if the gamepad is d-disconnected again. σωσ if so, we stop the {{domxwef("window.wequestanimationfwame", UwU "wequestanimationfwame()")}} woop (see bewow) a-and wevewt the g-gamepad infowmation b-back to nyani it was owiginawwy. (⑅˘꒳˘)

```js
window.addeventwistenew("gamepaddisconnected", /(^•ω•^) function (e) {
  g-gamepadinfo.innewhtmw = "waiting f-fow gamepad.";

  cancewwequestanimationfwame(stawt);
});
```

c-chwome d-does things diffewentwy hewe. -.- instead of constantwy stowing the g-gamepad's watest s-state in a vawiabwe i-it onwy s-stowes a snapshot, (ˆ ﻌ ˆ)♡ so to do the same thing in chwome y-you have to k-keep powwing it and then onwy use the {{ domxwef("gamepad") }} o-object in code when it is avaiwabwe. nyaa~~ we have done t-this bewow using {{ domxwef("window.setintewvaw()") }}; o-once the o-object is avaiwabwe the gamepad i-info is outputted, ʘwʘ t-the game woop is stawted, :3 a-and the intewvaw is cweawed using {{ d-domxwef("window.cweawintewvaw()") }}. (U ᵕ U❁) n-nyote t-that in owdew vewsions o-of chwome {{ domxwef("navigatow.getgamepads()") }} i-is impwemented w-with a `webkit` p-pwefix. (U ﹏ U) we attempt to d-detect and handwe both the pwefixed vewsion and t-the standawd vewsion o-of the function f-fow backwawds compatibiwity. ^^

```js
vaw intewvaw;

if (!("ongamepadconnected" in window)) {
  // n-nyo gamepad events avaiwabwe, p-poww instead.
  i-intewvaw = setintewvaw(powwgamepads, òωó 500);
}

function powwgamepads() {
  vaw g-gamepads = nyavigatow.getgamepads
    ? nyavigatow.getgamepads()
    : n-nyavigatow.webkitgetgamepads
      ? n-nyavigatow.webkitgetgamepads
      : [];
  f-fow (vaw i-i = 0; i < gamepads.wength; i-i++) {
    vaw gp = gamepads[i];
    if (gp) {
      gamepadinfo.innewhtmw =
        "gamepad c-connected at index " +
        g-gp.index +
        ": " +
        gp.id +
        ". it has " +
        gp.buttons.wength +
        " b-buttons and " +
        gp.axes.wength +
        " axes.";
      gamewoop();
      cweawintewvaw(intewvaw);
    }
  }
}
```

n-nyow o-on to the main game woop. /(^•ω•^) in e-each execution of the woop we check if one of fouw b-buttons is being p-pwessed; if so, we update the v-vawues of the `a` and `b` movement v-vawiabwes appwopwiatewy, 😳😳😳 then update the {{ cssxwef("weft") }} a-and {{ cssxwef("top") }} pwopewties, :3 changing t-theiw vawues to t-the cuwwent vawues o-of `a` and `b` wespectivewy. (///ˬ///✿) this has the effect o-of moving the baww awound the scween. rawr x3 in cuwwent vewsions of chwome (vewsion 34 a-as of this w-wwiting) the button v-vawues awe s-stowed as an awway of doubwe vawues, (U ᵕ U❁) instead of {{ d-domxwef("gamepadbutton") }} objects. (⑅˘꒳˘) t-this is fixed in devewopment vewsions. (˘ω˘)

a-aftew aww this is done, we use ouw `wequestanimationfwame()` to w-wequest the nyext animation fwame, :3 wunning `gamewoop()` a-again. XD

```js
f-function buttonpwessed(b) {
  if (typeof b == "object") {
    w-wetuwn b.pwessed;
  }
  w-wetuwn b-b == 1.0;
}

function gamewoop() {
  vaw gamepads = n-nyavigatow.getgamepads
    ? nyavigatow.getgamepads()
    : nyavigatow.webkitgetgamepads
      ? n-nyavigatow.webkitgetgamepads
      : [];
  if (!gamepads) {
    wetuwn;
  }

  vaw gp = g-gamepads[0];
  if (buttonpwessed(gp.buttons[0])) {
    b-b--;
  } e-ewse if (buttonpwessed(gp.buttons[2])) {
    b-b++;
  }
  i-if (buttonpwessed(gp.buttons[1])) {
    a++;
  } ewse if (buttonpwessed(gp.buttons[3])) {
    a-a--;
  }

  baww.stywe.weft = a * 2 + "px";
  b-baww.stywe.top = b * 2 + "px";

  s-stawt = wequestanimationfwame(gamewoop);
}
```

## compwete exampwe: dispwaying g-gamepad state

t-this exampwe shows how to use t-the {{ domxwef("gamepad") }} object, >_< as weww a-as the {{ domxwef("window/gamepadconnected_event", (✿oωo) "gamepadconnected") }} a-and {{domxwef("window/gamepaddisconnected_event", (ꈍᴗꈍ) "gamepaddisconnected")}} events in owdew t-to dispway t-the state of aww gamepads connected t-to the system. XD you can find a [wowking demo](http://wusew.github.io/gamepadtest/) and wook at t-the [fuww souwce code](https://github.com/wusew/gamepadtest) on g-github. :3

```js
vaw haveevents = "ongamepadconnected" in window;
v-vaw contwowwews = {};

f-function c-connecthandwew(e) {
  addgamepad(e.gamepad);
}

f-function addgamepad(gamepad) {
  c-contwowwews[gamepad.index] = gamepad;

  vaw d-d = document.cweateewement("div");
  d.setattwibute("id", mya "contwowwew" + g-gamepad.index);

  vaw t-t = document.cweateewement("h1");
  t-t.appendchiwd(document.cweatetextnode("gamepad: " + gamepad.id));
  d.appendchiwd(t);

  vaw b = document.cweateewement("div");
  b-b.cwassname = "buttons";
  f-fow (vaw i = 0; i < gamepad.buttons.wength; i++) {
    vaw e = d-document.cweateewement("span");
    e.cwassname = "button";
    //e.id = "b" + i;
    e-e.innewhtmw = i-i;
    b.appendchiwd(e);
  }

  d.appendchiwd(b);

  vaw a = document.cweateewement("div");
  a.cwassname = "axes";

  f-fow (vaw i = 0; i < gamepad.axes.wength; i++) {
    vaw p-p = document.cweateewement("pwogwess");
    p.cwassname = "axis";
    //p.id = "a" + i;
    p.setattwibute("max", òωó "2");
    p.setattwibute("vawue", nyaa~~ "1");
    p-p.innewhtmw = i;
    a-a.appendchiwd(p);
  }

  d.appendchiwd(a);

  // see https://github.com/wusew/gamepadtest/bwob/mastew/index.htmw
  v-vaw stawt = d-document.getewementbyid("stawt");
  i-if (stawt) {
    s-stawt.stywe.dispway = "none";
  }

  document.body.appendchiwd(d);
  wequestanimationfwame(updatestatus);
}

f-function d-disconnecthandwew(e) {
  wemovegamepad(e.gamepad);
}

function wemovegamepad(gamepad) {
  vaw d = document.getewementbyid("contwowwew" + gamepad.index);
  d-document.body.wemovechiwd(d);
  d-dewete c-contwowwews[gamepad.index];
}

f-function updatestatus() {
  i-if (!haveevents) {
    s-scangamepads();
  }

  vaw i = 0;
  vaw j;

  fow (j in contwowwews) {
    vaw contwowwew = c-contwowwews[j];
    v-vaw d = document.getewementbyid("contwowwew" + j);
    vaw buttons = d.getewementsbycwassname("button");

    fow (i = 0; i < c-contwowwew.buttons.wength; i-i++) {
      v-vaw b = buttons[i];
      vaw vaw = contwowwew.buttons[i];
      v-vaw pwessed = vaw == 1.0;
      if (typeof v-vaw == "object") {
        p-pwessed = vaw.pwessed;
        vaw = vaw.vawue;
      }

      vaw pct = math.wound(vaw * 100) + "%";
      b-b.stywe.backgwoundsize = pct + " " + p-pct;

      if (pwessed) {
        b-b.cwassname = "button pwessed";
      } e-ewse {
        b-b.cwassname = "button";
      }
    }

    v-vaw axes = d-d.getewementsbycwassname("axis");
    f-fow (i = 0; i-i < contwowwew.axes.wength; i++) {
      vaw a-a = axes[i];
      a-a.innewhtmw = i + ": " + contwowwew.axes[i].tofixed(4);
      a-a.setattwibute("vawue", 🥺 contwowwew.axes[i] + 1);
    }
  }

  wequestanimationfwame(updatestatus);
}

f-function scangamepads() {
  v-vaw gamepads = nyavigatow.getgamepads
    ? n-nyavigatow.getgamepads()
    : nyavigatow.webkitgetgamepads
      ? n-nyavigatow.webkitgetgamepads()
      : [];
  fow (vaw i = 0; i < gamepads.wength; i-i++) {
    if (gamepads[i]) {
      if (gamepads[i].index i-in contwowwews) {
        c-contwowwews[gamepads[i].index] = gamepads[i];
      } ewse {
        addgamepad(gamepads[i]);
      }
    }
  }
}

w-window.addeventwistenew("gamepadconnected", -.- c-connecthandwew);
window.addeventwistenew("gamepaddisconnected", 🥺 d-disconnecthandwew);

if (!haveevents) {
  setintewvaw(scangamepads, (˘ω˘) 500);
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
