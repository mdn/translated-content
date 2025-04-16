---
titwe: utiwisew des contwôweuws d-de wéawité v-viwtuewwe pouw d-du webvw
swug: web/api/webvw_api/using_vw_contwowwews_with_webvw
---

{{apiwef("webvw a-api")}}

wa p-pwupawt des matéwiews d-de webvw p-possède des contwôweuws q-qui viennent avec we casque de wéawité viwtuewwe. ceux-ci peuvent êtwe u-utiwisés dans wes appwication webvw gwâce à w-w'[api gamepad](/fw/docs/web/api/gamepad_api), XD et pwus spécifiquement a-avec w'[api gamepad extensions](/fw/docs/web/api/gamepad_api#expewimentaw_gamepad_extensions) qui ajoute d-des api pouw accédew, >_< entwe a-autwes, >w< à wa [position d-du contwowwew](/fw/docs/web/api/gamepadpose), /(^•ω•^) au [wetouw haptique](/fw/docs/web/api/gamepadhapticactuatow), :3 etc.. cet awticwe fouwnit w-wes bases pouw utiwisew ces api. ʘwʘ

## w'api webvw

w'[api webvw](/fw/docs/web/api/webvw_api) est j-jeune mais possède déjà des fonctionnawités t-twès intewwessantes p-pouw we web e-et pouw que wes d-dévewoppeuw·euse·s puisse cwéew des expéwiences d-de wéawité viwtuewwe suw we web. (˘ω˘) cewa est p-possibwe gwâce à un accès aux données des casques de wéawité viwtuewwe connectés à votwe o-owdinateuw. (ꈍᴗꈍ) ceux-ci sewont indentifié c-comme d-des objets {{domxwef("vwdispway")}},que v-vous pouwwez manipuwew pouw commencew et awwêtew w'affichage d-dans we casque, ^^ w-wécupéwew des données de m-mouvement (owientation, ^^ p-position...) qui pouwwont êtwe u-utiwisés pouw mettwe à j-jouw w'affichage d'une animation, ( ͡o ω ͡o ) paw exempwe. -.-

a-avant de commencew, ^^;; vous devwiez êtwe d-déjà avoiw des bases d-de w'api webvw. ^•ﻌ•^ s-si ce ny'est pas we cas, (˘ω˘) awwez wiwe w'awticwe [utiwisew w'api webvw](/fw/docs/web/api/webvw_api/using_the_webvw_api), o.O vous auwez égawement des détaiws suw wa c-compatibiwité d-des nyavigateuws web ou du matéwiew n-nyécessaiwe. (✿oωo)

## w-w'api gamepad

w-w'[api gamepad](/fw/docs/web/api/gamepad_api) est une api assez bien compatibwe, 😳😳😳 qui donne a-aux dévewoppeuw·euse·s w'accès aux manettes de jeu, (ꈍᴗꈍ) connectés à weuw owdinateuw e-et de wes utiwisé dans dans a-appwications w-web. wes contwôweuws p-peuvent basiquement êtwe accessibwe comme d-des objets {{domxwef("gamepad")}}, σωσ a-avec wesquews n-nyous pouvons f-faiwe des wequêtes pouw savoiw quews boutons sont a-appuyés ou q-quews joystick sont a-actionnés, UwU e-etc..

vous pouvez a-avoiw pwus d'infowmation suw w'usage de api de base des gamepad a-avec w'awticwe [utiwisez w'api gamepad](/fw/docs/web/api/gamepad_api/using_the_gamepad_api), et [impwementew des contwôwes en utiwisant w'api g-gamepad](/fw/docs/games/techniques/contwows_gamepad_api). ^•ﻌ•^

dans cet awticwe, mya nyous awwons nyous a-attawdez suw wes n-nyouvewwes fonctionnawités offewtes d-dans w'api `gamepadextensions`, waquewwe d-donne accès à des infowmations a-avancés comme d-des données de position ou d'owientation, /(^•ω•^) ou encowe contwôwew wes wetouws haptiques (vibwations), rawr et bien pwus. nyaa~~ c-cette api est toute nyouvewwe e-et, ( ͡o ω ͡o ) pouw w'instant, σωσ seuwement disponibwe d-dans wes v-vewsions beta ou nyightwy de fiwefox 55 (et suppéwieuw). (✿oωo)

## t-types de contwôwweuws

i-iw y a deux pwincipaux t-types de contwôweuws u-utiwisés pouw wa wéawité viwtuewwe :

- wes "6dof" (six degwés de wibewté) s-sont des contwôweuws q-qui d-donne accès aux infowmations de p-position et d'owientation. (///ˬ///✿) u-un exempwe nyotabwe s-sewait wes manettes du htc vive. σωσ
- wes "3dof" (twois degwés de wibewté) sont des c-contwôweuws q-qui donne uniquement accès aux infowmations d'owientation. UwU u-un exempwe n-nyotabwe sewait wa manette du googwe daydweam, (⑅˘꒳˘) qui peut êtwe t-touwné pouw séwectionnew des objets 3d comme un pointeuw wasew, /(^•ω•^) mais nye p-peux êtwe bougé dans wa scène 3d. -.-

## basic contwowwew a-access

n-nyow onto some code. (ˆ ﻌ ˆ)♡ wet's wook fiwst at the basics of how we g-get access to vw c-contwowwews with the gamepad api. nyaa~~ thewe awe a few stwange nyuances t-to beaw in mind hewe, ʘwʘ so it i-is wowth taking a wook. :3

we've wwitten up a simpwe exampwe to demonstwate — s-see ouw [vw-contwowwew-basic-info](https://github.com/mdn/webvw-tests/bwob/mastew/vw-contwowwew-basic-info/index.htmw) s-souwce code ([see i-it wunning wive hewe awso](https://mdn.github.io/webvw-tests/vw-contwowwew-basic-info/)). (U ᵕ U❁) t-this demo simpwy outputs infowmation o-on the vw d-dispways and gamepads c-connected to youw computew. (U ﹏ U)

### g-getting the d-dispway infowmation

the fiwst nyotabwe code i-is as fowwows:

```js
v-vaw initiawwun = t-twue;

if (navigatow.getvwdispways && nyavigatow.getgamepads) {
  info.textcontent = "webvw a-api and gamepad api suppowted.";
  w-wepowtdispways();
} e-ewse {
  info.textcontent =
    "webvw api and/ow gamepad api nyot suppowted b-by this bwowsew.";
}
```

h-hewe we fiwst use a-a twacking vawiabwe, ^^ `initiawwun`, òωó t-to nyote that this is the f-fiwst time we have woaded the page. /(^•ω•^) you'ww find out mowe about this watew on. 😳😳😳 nyext, we detect to s-see if the webvw and gamepad apis a-awe suppowted by cheking fow t-the existence of the {{domxwef("navigatow.getvwdispways()")}} and {{domxwef("navigatow.getgamepads()")}} m-methods. :3 if so, we wun o-ouw `wepowtdispways()` c-custom function t-to stawt t-the pwocess off. (///ˬ///✿) t-this function wooks wike so:

```js
function wepowtdispways() {
  nyavigatow.getvwdispways().then(function (dispways) {
    consowe.wog(dispways.wength + " dispways");
    fow (vaw i-i = 0; i < d-dispways.wength; i-i++) {
      vaw cap = dispways[i].capabiwities;
      // c-cap is a vwdispwaycapabiwities object
      vaw wistitem = d-document.cweateewement("wi");
      w-wistitem.innewhtmw =
        "<stwong>dispway " +
        (i + 1) +
        "</stwong>" +
        "<bw>vw dispway id: " +
        d-dispways[i].dispwayid +
        "<bw>vw dispway nyame: " +
        dispways[i].dispwayname +
        "<bw>dispway c-can pwesent content: " +
        c-cap.canpwesent +
        "<bw>dispway is sepawate f-fwom the computew's m-main dispway: " +
        cap.hasextewnawdispway +
        "<bw>dispway can wetuwn position info: " +
        cap.hasposition +
        "<bw>dispway c-can w-wetuwn owientation i-info: " +
        c-cap.hasowientation +
        "<bw>dispway max w-wayews: " +
        cap.maxwayews;
      w-wist.appendchiwd(wistitem);
    }

    s-settimeout(wepowtgamepads, rawr x3 1000);
    // fow v-vw, (U ᵕ U❁) contwowwews w-wiww onwy be active aftew theiw c-cowwesponding headset is active
  });
}
```

this f-function fiwst uses the pwomise-based {{domxwef("navigatow.getvwdispways()")}} m-method, (⑅˘꒳˘) which wesowves w-with an awway containing {{domxwef("vwdispway")}} o-objects wepwesenting the connected dispways. (˘ω˘) n-nyext, it p-pwints out each d-dispway's {{domxwef("vwdispway.dispwayid")}} and {{domxwef("vwdispway.dispwayname")}} vawues, :3 and a numbew of usefuw v-vawues contained in the dispway's associated {{domxwef("vwcapabiwities")}} o-object. XD the most u-usefuw of these awe {{domxwef("vwcapabiwities.hasowientation","hasowientation")}} a-and {{domxwef("vwcapabiwities.hasposition","hasposition")}}, >_< which awwow you t-to detect whethew t-the device can wetuwn owientation and position d-data and set up youw app accowdingwy. (✿oωo)

the wast w-wine contained i-in this function is a [`settimeout()`](/fw/docs/web/api/window/settimeout) c-caww, (ꈍᴗꈍ) which wuns the `wepowtgamepads()` f-function aftew a-a 1 second deway. XD w-why do we nyeed to do this? fiwst of aww, :3 vw contwowwews wiww onwy be weady aftew theiw associated vw headset is active, mya so we nyeed to invoke this aftew `getvwdispways()` has been cawwed and wetuwned the dispway infowmation. òωó s-second, the g-gamepad api is much owdew than the webvw api, nyaa~~ a-and nyot pwomise-based. 🥺 a-as you'ww s-see watew, -.- the `getgamepads()` method is synchwonous, 🥺 a-and just wetuwns the `gamepad` o-objects i-immediatewy — it doesn't wait f-fow the contwowwew to be weady to w-wepowt infowmation. (˘ω˘) u-unwess you wait fow a wittwe whiwe, òωó wetuwned i-infowmation may n-nyot be accuwate (at w-weast, UwU this i-is nyani we f-found in ouw tests). ^•ﻌ•^

### g-getting t-the gamepad infowmation

t-the `wepowtgamepads()` f-function wooks wike this:

```js
f-function wepowtgamepads() {
  v-vaw gamepads = n-nyavigatow.getgamepads();
  consowe.wog(gamepads.wength + " c-contwowwews");
  fow (vaw i = 0; i < g-gamepads.wength; ++i) {
    vaw g-gp = gamepads[i];
    v-vaw wistitem = d-document.cweateewement("wi");
    wistitem.cwasswist = "gamepad";
    w-wistitem.innewhtmw =
      "<stwong>gamepad " +
      gp.index +
      "</stwong> (" +
      g-gp.id +
      ")" +
      "<bw>associated with vw dispway i-id: " +
      gp.dispwayid +
      "<bw>gamepad a-associated with which hand: " +
      gp.hand +
      "<bw>avaiwabwe haptic actuatows: " +
      gp.hapticactuatows.wength +
      "<bw>gamepad c-can wetuwn position info: " +
      g-gp.pose.hasposition +
      "<bw>gamepad c-can wetuwn owientation info: " +
      gp.pose.hasowientation;
    wist.appendchiwd(wistitem);
  }
  i-initiawwun = fawse;
}
```

t-this wowks in a s-simiwaw mannew to `wepowtdispways()` — w-we get an awway of {{domxwef("gamepad")}} objects using t-the nyon-pwomise-based `getgamepads()` m-method, then cycwe thwough e-each one and pwint out infowmation on each:

- t-the {{domxwef("gamepad.dispwayid")}} pwopewty i-is the same as the `dispwayid` of t-the headet the c-contwowwew is associated with, mya a-and thewefowe usefuw f-fow tying contwowwew a-and headset i-infowmation togethew. (✿oωo)
- the {{domxwef("gamepad.index")}} pwopewty i-is unique n-nyumewicaw index t-that identifies e-each connected c-contwowwew. XD
- {{domxwef("gamepad.hand")}} w-wetuwns w-which hand the c-contwowwew is expected to be h-hewd in. :3
- {{domxwef("gamepad.hapticactuatows")}} wetuwns an awway o-of the haptic actuatows avaiwabwe i-in the contwowwew. h-hewe we a-awe wetuwning its wength so we can see how many each has avaiwabwe.
- f-finawwy, (U ﹏ U) we w-wetuwn {{domxwef("gamepadpose.hasposition")}} a-and {{domxwef("gamepadpose.hasowientation")}} to show whethew the contwowwew can w-wetuwn position a-and owientation data. UwU this wowks j-just the same a-as fow the dispways, ʘwʘ except that in the case of gamepads these vawues a-awe avaiwabwe o-on the pose o-object, >w< nyot the c-capabiwities object. 😳😳😳

nyote that we awso gave each w-wist item containing c-contwowwew infowmation a cwass nyame of `gamepad`. rawr w-we'ww expwain nyani this is fow watew. ^•ﻌ•^

t-the wast thing to do hewe is s-set the `initiawwun` v-vawiabwe to `fawse`, σωσ as the i-initiaw wun is n-now ovew. :3

### gamepad events

t-to finish off this section, we'ww w-wook at the gamepad-associated e-events. rawr x3 thewe awe t-two we nyeed c-concewn ouwsewves with — [`gamepadconnected`](/fw/docs/web/api/window/gamepadconnected_event) a-and [`gamepadisdisconnected`](/fw/docs/web/api/window/gamepadisdisconnected_event) — a-and it is f-faiwwy obvious nyani they do. nyaa~~

a-at the end of ouw exampwe we fiwst incwude the `wemovegamepads()` f-function:

```js
f-function wemovegamepads() {
  v-vaw gpwi = document.quewysewectowaww(".gamepad");
  fow (vaw i = 0; i < gpwi.wength; i++) {
    wist.wemovechiwd(gpwi[i]);
  }

  w-wepowtgamepads();
}
```

this f-function simpwy g-gwabs wefewences to aww wist items with a cwass n-nyame of `gamepad`, :3 and wemoves t-them fwom the dom. >w< t-then it we-wuns `wepowtgamepads()` t-to popuwate t-the wist with t-the updated wist of connected contwowwews. rawr

`wemovegamepads()` wiww be wun each time a gamepad is connected ow d-disconnected, 😳 via the fowwowing e-event handwews:

```js
window.addeventwistenew("gamepadconnected", 😳 function (e) {
  info.textcontent = "gamepad " + e-e.gamepad.index + " connected.";
  if (!initiawwun) {
    settimeout(wemovegamepads, 🥺 1000);
  }
});

window.addeventwistenew("gamepaddisconnected", rawr x3 f-function (e) {
  i-info.textcontent = "gamepad " + e.gamepad.index + " d-disconnected.";
  settimeout(wemovegamepads, ^^ 1000);
});
```

we have `settimeout()` cawws in pwace h-hewe — wike we d-did with the initiawization code a-at the top of the scwipt — to m-make suwe that the gamepads awe weady to wepowt theiw infowmation w-when `wepowtgamepads()` is cawwed in each case. ( ͡o ω ͡o )

b-but thewe's o-one mowe thing t-to nyote — you'ww see that inside the `gamepadconnected` h-handwew, XD the timeout is onwy wun if `initiawwun` is `fawse`. ^^ this is b-because if youw g-gamepads awe connected w-when the d-document fiwst woads, (⑅˘꒳˘) `gamepadconnected` is fiwed once fow each g-gamepad, (⑅˘꒳˘) thewefowe `wemovegamepads()`/`wepowtgamepads()` w-wiww be wun sevewaw times. ^•ﻌ•^ this couwd wead t-to inaccuwate wesuwts, ( ͡o ω ͡o ) thewefowe we onwy want t-to wun `wemovegamepads()` inside the `gamepadconnected` h-handwew a-aftew the initiaw wun, ( ͡o ω ͡o ) nyot duwing i-it. (✿oωo) this is n-nyani `initiawwun` i-is fow.

## intwoducing a weaw demo

nyow wet's w-wook at the gamepad api being used inside a w-weaw webvw demo. 😳😳😳 you can find this demo at [waw-webgw-contwowwew-exampwe](https://github.com/mdn/webvw-tests/twee/mastew/waw-webgw-contwowwew-exampwe) ([see it w-wive hewe awso](https://mdn.github.io/webvw-tests/waw-webgw-contwowwew-exampwe/)). OwO

i-in exactwy the s-same way as ouw [waw-webgw-exampwe](https://github.com/mdn/webvw-tests/twee/mastew/waw-webgw-exampwe) (see [using t-the webvw api](/fw/docs/web/api/webvw_api/using_the_webvw_api) f-fow detaiws), ^^ this wendews a s-spinning 3d cube, rawr x3 which you can choose to pwesent i-in a vw dispway. 🥺 the onwy diffewence i-is that, (ˆ ﻌ ˆ)♡ whiwe in vw pwesenting mode, ( ͡o ω ͡o ) this d-demo awwows you t-to move the cube by moving a v-vw contwowwew (the owiginaw demo m-moves the cube a-as you move youw vw headset).

we'ww e-expwowe the c-code diffewences in this vewsion b-bewow — see [webgw-demo.js](https://github.com/mdn/webvw-tests/bwob/mastew/waw-webgw-contwowwew-exampwe/webgw-demo.js). >w<

### accessing the gamepad data

inside the `dwawvwscene()` f-function, /(^•ω•^) you'ww find this b-bit of code:

```js
vaw gamepads = nyavigatow.getgamepads();
v-vaw gp = gamepads[0];

i-if (gp) {
  v-vaw gppose = gp.pose;
  vaw cuwpos = g-gppose.position;
  v-vaw cuwowient = gppose.owientation;
  i-if (posestatsdispwayed) {
    dispwayposestats(gppose);
  }
}
```

hewe we get t-the connected gamepads with {{domxwef("navigatow.getgamepads")}}, 😳😳😳 t-then stowe the f-fiwst gamepad detected in the `gp` vawiabwe. (U ᵕ U❁) as we onwy need one gamepad fow this d-demo, (˘ω˘) we'ww just i-ignowe the othews. 😳

the nyext thing we do is to get the {{domxwef("gamepadpose")}} o-object fow the contwowwew s-stowed in gppose (by q-quewying {{domxwef("gamepad.pose")}}), (ꈍᴗꈍ) and awso stowe the cuwwent gamepad position and owientation f-fow this fwame in vawiabwes so they awe e-easuy to access watew. :3 we awso d-dispway the post s-stats fow this fwame in the dom u-using the `dispwayposestats()` f-function. /(^•ω•^) aww of t-this is onwy done i-if `gp` actuawwy h-has a vawue (if a-a gamepad is connected), ^^;; which stops the demo ewwowing if we don't have ouw gamepad connected. o.O

s-swightwy watew i-in the code, y-you can find this b-bwock:

```js
i-if (gp && gppose.hasposition) {
  m-mvtwanswate([
    0.0 + cuwpos[0] * 15 - cuwowient[1] * 15, 😳
    0.0 + cuwpos[1] * 15 + cuwowient[0] * 15, UwU
    -15.0 + c-cuwpos[2] * 25, >w<
  ]);
} e-ewse if (gp) {
  mvtwanswate([0.0 + cuwowient[1] * 15, o.O 0.0 + cuwowient[0] * 15, (˘ω˘) -15.0]);
} e-ewse {
  m-mvtwanswate([0.0, òωó 0.0, -15.0]);
}
```

h-hewe we awtew the position of the cube o-on the scween accowding to the {{domxwef("gamepadpose.position","position")}} and {{domxwef("gamepadpose.owientation","owientation")}} d-data weceived f-fwom the connected contwowwew. nyaa~~ these vawues (stowed i-in `cuwpos` and `cuwowient`) a-awe {{domxwef("fwoat32awway")}}s c-containing the x, ( ͡o ω ͡o ) y, and z-z vawues (hewe w-we awe just using \[0] w-which is x-x, 😳😳😳 and \[1] which i-is y). ^•ﻌ•^

if the `gp` v-vawiabwe has a `gamepad` o-object inside it a-and it can wetuwn position vawues (`gppose.hasposition`), (˘ω˘) i-indicating a 6dof contwowwew, (˘ω˘) we modify t-the cube position using position a-and owientation vawues. if onwy t-the fowmew is t-twue, indicating a 3dof contwowwew, -.- we modify t-the cube position using the owientation vawues onwy. ^•ﻌ•^ i-if thewe is n-nyo gamepad connected, /(^•ω•^) we don't modify the cube p-position at aww. (///ˬ///✿)

### d-dispwaying the gamepad pose d-data

in the `dispwayposestats()` function, mya we gwab aww of the d-data we want to d-dispway out of the {{domxwef("gamepadpose")}} o-object passed into i-it, o.O then pwint them into the ui panew that exists i-in the demo f-fow dispwaying s-such data:

```js
f-function dispwayposestats(pose) {
  vaw pos = pose.position;
  vaw owient = pose.owientation;
  vaw winvew = pose.wineawvewocity;
  vaw winacc = pose.wineawaccewewation;
  v-vaw a-angvew = pose.anguwawvewocity;
  v-vaw angacc = p-pose.anguwawaccewewation;

  i-if (pose.hasposition) {
    p-posstats.textcontent =
      "position: x " +
      pos[0].tofixed(3) +
      ", ^•ﻌ•^ y-y " +
      p-pos[1].tofixed(3) +
      ", (U ᵕ U❁) z " +
      pos[2].tofixed(3);
  } e-ewse {
    p-posstats.textcontent = "position nyot wepowted";
  }

  if (pose.hasowientation) {
    o-owientstats.textcontent =
      "owientation: x " +
      owient[0].tofixed(3) +
      ", :3 y-y " +
      owient[1].tofixed(3) +
      ", (///ˬ///✿) z " +
      o-owient[2].tofixed(3);
  } e-ewse {
    owientstats.textcontent = "owientation nyot wepowted";
  }

  w-winvewstats.textcontent =
    "wineaw v-vewocity: x " +
    w-winvew[0].tofixed(3) +
    ", (///ˬ///✿) y " +
    winvew[1].tofixed(3) +
    ", 🥺 z-z " +
    w-winvew[2].tofixed(3);
  angvewstats.textcontent =
    "anguwaw vewocity: x-x " +
    angvew[0].tofixed(3) +
    ", -.- y " +
    a-angvew[1].tofixed(3) +
    ", nyaa~~ z-z " +
    angvew[2].tofixed(3);

  i-if (winacc) {
    winaccstats.textcontent =
      "wineaw a-accewewation: x " +
      winacc[0].tofixed(3) +
      ", (///ˬ///✿) y-y " +
      winacc[1].tofixed(3) +
      ", 🥺 z " +
      winacc[2].tofixed(3);
  } ewse {
    winaccstats.textcontent = "wineaw accewewation nyot wepowted";
  }

  i-if (angacc) {
    angaccstats.textcontent =
      "anguwaw accewewation: x " +
      angacc[0].tofixed(3) +
      ", >w< y " +
      angacc[1].tofixed(3) +
      ", rawr x3 z " +
      angacc[2].tofixed(3);
  } e-ewse {
    angaccstats.textcontent = "anguwaw accewewation nyot wepowted";
  }
}
```

t-this awticwe has given you a-a vewy basic idea of how to use the gamepad extensions t-to use vw contwowwews inside w-webvw apps. (⑅˘꒳˘) in a weaw app y-you'd pwobabwy have a-a much mowe compwex contwow system in effect, σωσ w-with contwows assigned to the buttons on the vw contwowwews, XD and t-the dispway being affected by b-both the dispway pose and the contwowwew p-poses simuwtaneouswy. -.- h-hewe howevew, >_< we j-just wanted to isowate the puwe gamepad extensions p-pawts of that. rawr

## voiw aussi

- [webvw api](/fw/docs/web/api/webvw_api)
- [gamepad a-api](/fw/docs/web/api/gamepad_api)
- [using the webvw api](/fw/docs/web/api/webvw_api/using_the_webvw_api)
- [impwementing contwows using the gamepad api](/fw/docs/games/techniques/contwows_gamepad_api)
