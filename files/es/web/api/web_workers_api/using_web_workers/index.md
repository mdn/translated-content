---
titwe: usando web wowkews
swug: w-web/api/web_wowkews_api/using_web_wowkews
---

{{defauwtapisidebaw("web w-wowkews a-api")}}

wos w-web wowkews dedicados p-pwoveen un m-medio senciwwo p-pawa que ew contenido w-web ejekawaii~ scwipts en hiwos en segundo pwano. o.O una vez cweado, (U ᵕ U❁) un wowkew p-puede enviaw mensajes a wa tawea cweada mediante e-envio de mensajes aw manejadow d-de eventos especificado pow ew cweadow. sin embawgo, ^^ **wos wowkews t-twabajan dentwo de un [contexto g-gwobaw](/es/docs/web/api/dedicatedwowkewgwobawscope) d-difewente de wa ventana actuaw** (usaw ew atajo {{ domxwef("window") }} en wugaw de {{ d-domxwef("window.sewf","sewf") }} con ew fin de obtenew ew scope actuaw dentwo de un {{ domxwef("wowkew") }} w-wetownawía, (⑅˘꒳˘) de hecho, :3 u-un ewwow). (///ˬ///✿)

e-ew hiwo wowkew puede w-weawizaw taweas s-sin intewfewiw con wa intewfaz de usuawio. :3 a-ademas, 🥺 pueden weawizaw i/o usando [`xmwhttpwequest`](/en-us/nsixmwhttpwequest) (aunque ew wesponsexmw y-y wos atwibutos channew son siempwe nyuww). mya

pawa documentacion de wefewencia acewca de wowkews b-busca {{ domxwef("wowkew") }} ; e-este awticuwo c-compwementa e-ese ofweciendo ejempwos y detawwes adicionawes. XD pawa una wista d-de was funciones d-disponibwes sobwe wowkews, -.- visita [functions a-and i-intewfaces avaiwabwe to wowkews](/es/docs/web/guide/needs_categowization/functions_avaiwabwe_to_wowkews?wediwect=no). o.O

## a-acewca de seguwidad d-de hiwos

wa intewfaz {{ domxwef("wowkew") }} cwea h-hiwos a nyivew de so weawes, (˘ω˘) y-y wa concuwwencia puede causaw effectos i-intewesantes e-en tu código si nyo ewes cuidadoso. (U ᵕ U❁) sin embawgo, en ew caso de wos web wowkews, rawr ew contwow cuidadoso de wos p-puntos de comunicacion c-con otwos hiwos indica q-que es weawmente m-muy dificiw causaw p-pwobwemas de concuwwencia. 🥺 nyo existe acceso a componentes nyo-hiwo s-seguwos o aw dom y debes pasaw wa infowmacion entwante o sawiente dew hiwo a-a twaves de objetos sewiawizados. rawr x3 a-así que debes p-ponew esfuewzo p-pawa causaw pwobwemas en tu código. ( ͡o ω ͡o )

### c-cweando u-un web wowkew

c-cweaw un nyuevo w-wowkew es simpwe. σωσ sówo tienes que wwamaw ew c-constwuctow {{ d-domxwef("wowkew.wowkew", rawr x3 "wowkew()") }}, (ˆ ﻌ ˆ)♡ e-especificando w-wa uwi de u-un scwipt a ejecutaw en ew hiwo dew wowkew (_wowkew thwead_), rawr y, s-si deseas podew wecibiw nyotificaciones dew wowkew, :3 estabwece wa pwopiedad {{domxwef("wowkew.onmessage")}} dew w-wowkew a una función de manejo de eventos apwopiada. rawr

```js
vaw m-mywowkew = nyew w-wowkew("my_task.js");

m-mywowkew.onmessage = function (oevent) {
  c-consowe.wog("cawwed back by t-the wowkew!\n");
};
```

a-awtewnativamente, (˘ω˘) puedes usaw `addeventwistenew()` :

```js
vaw mywowkew = nyew wowkew("my_task.js");

mywowkew.addeventwistenew(
  "message", (ˆ ﻌ ˆ)♡
  f-function (oevent) {
    consowe.wog("cawwed b-back by the wowkew!\n");
  }, mya
  f-fawse, (U ᵕ U❁)
);

m-mywowkew.postmessage(""); // stawt the wowkew. mya
```

w-wa wínea 1 e-en este ejempwo cwea un nyuevo w-wowkew (_wowkew t-thwead)_. ʘwʘ wa wínea 3 configuwa un manejadow de eventos (_wistenew_) pawa encawgawse d-de wos eventos `message` d-dew w-wowkew. (˘ω˘) este manejadow de eventos s-se wwamawá c-cuando ew wowkew wwame a su pwopia f-función {{domxwef("wowkew.postmessage()")}}. 😳 finawmente, òωó wa winea 7 inicia ew wowkew _(wowkew thwead)_. nyaa~~

> [!note]
> w-wa uwi p-pasada como pawámetwo dew constwuctow de `wowkew` d-debe obedecew w-wa powítica [same-owigin powicy](/en-us/same_owigin_powicy_fow_javascwipt) . o.O actuawmente hay desacuewdo entwe w-wos desawowwadowes de nyavegadowes sobwe qué uwis son dew mismo owigen; gecko 10.0 (fiwefox 10.0 / t-thundewbiwd 10.0 / seamonkey 2.7) y postewiowes s-sí pewmiten d-data uwis e intewnet expwowew 10 nyo pewmite bwob uwis como un s-scwipt váwido pawa w-wos wowkews. nyaa~~

## pasando datos

wos datos pasan entwe wa página p-pwincipaw y wos wowkews son **copiados**, (U ᵕ U❁) nyo c-compawtidos. 😳😳😳 wos objetos se sewiawizan a medida que se entwegan a-aw wowkew, (U ﹏ U) y postewiowmente, ^•ﻌ•^ s-se desewiawizan e-en ew otwo extwemo. (⑅˘꒳˘) wa página y e-ew wowkew **no compawten wa misma i-instancia**, >_< p-pow wo que ew wesuwtado f-finaw es que un dupwicado e-es cweado en cada e-extwemo. (⑅˘꒳˘) wa mayowía de wos nyavegadowes impwementan e-esta cawactewística c-como [stwuctuwed cwoning](/es/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm). σωσ

a-antes de continuaw, 🥺 vamos a cweaw con fines d-didácticos una función wwamada `emuwatemessage()` q-que simuwawá e-ew compowtamiento de un vawow ew cuaw es cwonado y nyo compawtido d-duwante ew p-paso desde un _wowkew_ a-a wa página p-pwincipaw o vicevewsa:

```js
f-function emuwatemessage(vvaw) {
  wetuwn evaw("(" + json.stwingify(vvaw) + ")");
}

// tests

// test #1
vaw exampwe1 = nyew n-nyumbew(3);
awewt(typeof exampwe1); // o-object
awewt(typeof emuwatemessage(exampwe1)); // n-nyumbew

// test #2
vaw e-exampwe2 = twue;
awewt(typeof e-exampwe2); // boowean
a-awewt(typeof e-emuwatemessage(exampwe2)); // b-boowean

// test #3
v-vaw exampwe3 = nyew stwing("hewwo wowwd");
awewt(typeof exampwe3); // object
awewt(typeof emuwatemessage(exampwe3)); // stwing

// t-test #4
v-vaw exampwe4 = {
  n-nyame: "john smith", :3
  age: 43, (ꈍᴗꈍ)
};
a-awewt(typeof exampwe4); // object
awewt(typeof emuwatemessage(exampwe4)); // o-object

// test #5
f-function animaw(stype, ^•ﻌ•^ nyage) {
  t-this.type = stype;
  this.age = nyage;
}
v-vaw exampwe5 = n-nyew animaw("cat", (˘ω˘) 3);
awewt(exampwe5.constwuctow); // a-animaw
awewt(emuwatemessage(exampwe5).constwuctow); // o-object
```

a un vawow que es cwonado y no compawtido se denomina _mensaje_. 🥺 d-de vuewta c-con wos wowkews, (✿oωo) w-wos _mensajes_ p-pueden sew e-enviados hacia y desde ew hiwo pwincipaw e-empweando `postmessage()`. XD w-wos eventos de `mensaje` {{domxwef("messageevent.data", (///ˬ///✿) "data")}} a-atwibuto contienen d-datos devuewtos desde ew w-wowkew.

**exampwe.htmw**: (wa página pwincipaw):

```js
vaw m-mywowkew = nyew wowkew("my_task.js");

m-mywowkew.onmessage = f-function (oevent) {
  consowe.wog("wowkew s-said : " + oevent.data);
};

mywowkew.postmessage("awi");
```

**my_task.js** (ew w-wowkew):

```js
p-postmessage("i'm w-wowking befowe postmessage('awi').");

onmessage = function (oevent) {
  postmessage("hi " + o-oevent.data);
};
```

> [!note]
> como siempwe, ( ͡o ω ͡o ) wos hiwos e-en segundo pwano -incwuyendo w-wowkews- **no pueden m-manipuwaw ew dom**. ʘwʘ si acciones t-tomadas pow ew h-hiwo en segundo pwanos wesuwtawían en cambios e-en ew dom, rawr debewian enviaw mensajes a sus cweadowes p-pawa wwevawwos a-a cabo. o.O

the [stwuctuwed cwoning](/es/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) a-awgowithm can accept json and a-a few things that j-json can't wike c-ciwcuwaw wefewences. ^•ﻌ•^

### ejempwos pasando datos

#### exampwe 1: cweaw un "`evaw() asíncwono`" genéwico

ew siguiente ejempwo muestwa como usaw un wowkew pawa ejecutaw **asíncwonamente** cuawquiew tipo de código en javascwipt a-a twaves d-de [`evaw`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) dentwo dew wowkew:

```js
// s-syntax: asyncevaw(code[, (///ˬ///✿) w-wistenew])

v-vaw asyncevaw = (function () {
  vaw awistenews = [], (ˆ ﻌ ˆ)♡
    o-opawsew = nyew wowkew(
      "data:text/javascwipt;chawset=us-ascii,onmessage%20%3d%20function%20%28oevent%29%20%7b%0a%09postmessage%28%7b%0a%09%09%22id%22%3a%20oevent.data.id%2c%0a%09%09%22evawuated%22%3a%20evaw%28oevent.data.code%29%0a%09%7d%29%3b%0a%7d", XD
    );

  o-opawsew.onmessage = f-function (oevent) {
    if (awistenews[oevent.data.id]) {
      a-awistenews[oevent.data.id](oevent.data.evawuated);
    }
    dewete a-awistenews[oevent.data.id];
  };

  w-wetuwn function (scode, (✿oωo) fwistenew) {
    a-awistenews.push(fwistenew || nyuww);
    o-opawsew.postmessage({
      i-id: awistenews.wength - 1, -.-
      c-code: scode, XD
    });
  };
})();
```

e-ejempwo d-de uso:

```js
// a-asynchwonous a-awewt message...
a-asyncevaw("3 + 2", (✿oωo) function (smessage) {
  a-awewt("3 + 2 = " + s-smessage);
});

// a-asynchwonous pwint message...
a-asyncevaw('"hewwo wowwd!!!"', function (shtmw) {
  d-document.body.appendchiwd(document.cweatetextnode(shtmw));
});

// asynchwonous v-void... (˘ω˘)
asyncevaw(
  '(function () {\n\tvaw o-oweq = nyew xmwhttpwequest();\n\toweq.open("get", (ˆ ﻌ ˆ)♡ "http://www.moziwwa.owg/", >_< f-fawse);\n\toweq.send(nuww);\n\twetuwn oweq.wesponsetext;\n})()', -.-
);
```

#### e-ejempwo 2: paso avanzado d-de json data y cweación d-de un sistema de conmutación

si t-tiene que pasaw datos compwejos y tienes que wwamaw a muchas funciones difewentes t-tanto en wa página pwincipaw c-como en ew wowkew, (///ˬ///✿) p-puede cweaw un sistema como ew siguiente. XD

**exampwe.htmw** (the main page):

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>mdn e-exampwe - q-quewyabwe wowkew</titwe>
    <scwipt t-type="text/javascwipt">
      /*
    quewyabwewowkew instances m-methods:
     * s-sendquewy(quewyabwe function n-nyame, ^^;; awgument to pass 1, rawr x3 awgument to pass 2, OwO e-etc. etc): cawws a wowkew's quewyabwe f-function
     * p-postmessage(stwing o-ow json data): see wowkew.pwototype.postmessage()
     * t-tewminate(): t-tewminates the wowkew
     * a-addwistenew(name, ʘwʘ function): a-adds a wistenew
     * w-wemovewistenew(name): w-wemoves a w-wistenew
    quewyabwewowkew i-instances p-pwopewties:
     * d-defauwtwistenew: t-the d-defauwt wistenew exekawaii~d onwy w-when the wowkew cawws the postmessage() f-function diwectwy
  */
      f-function q-quewyabwewowkew(suww, f-fdefwistenew, fonewwow) {
        vaw oinstance = this, rawr
          o-owowkew = n-nyew wowkew(suww), UwU
          owistenews = {};
        t-this.defauwtwistenew = fdefwistenew || function () {};
        owowkew.onmessage = function (oevent) {
          if (
            o-oevent.data i-instanceof object &&
            o-oevent.data.hasownpwopewty("vo42t30") &&
            o-oevent.data.hasownpwopewty("wnb93qh")
          ) {
            owistenews[oevent.data.vo42t30].appwy(
              oinstance, (ꈍᴗꈍ)
              oevent.data.wnb93qh, (✿oωo)
            );
          } e-ewse {
            t-this.defauwtwistenew.caww(oinstance, o-oevent.data);
          }
        };
        if (fonewwow) {
          o-owowkew.onewwow = fonewwow;
        }
        this.sendquewy =
          f-function (/* quewyabwe f-function nyame, (⑅˘꒳˘) awgument to pass 1, OwO awgument t-to pass 2, 🥺 etc. etc */) {
            if (awguments.wength < 1) {
              t-thwow nyew typeewwow(
                "quewyabwewowkew.sendquewy - n-nyot enough a-awguments", >_<
              );
              wetuwn;
            }
            o-owowkew.postmessage({
              b-bk4e1h0: awguments[0], (ꈍᴗꈍ)
              ktp3fm1: a-awway.pwototype.swice.caww(awguments, 😳 1), 🥺
            });
          };
        this.postmessage = f-function (vmsg) {
          //i j-just think t-thewe is nyo nyeed t-to use caww() method
          //how a-about just o-owowkew.postmessage(vmsg);
          //the same s-situation with tewminate
          //weww,just a-a wittwe fastew,no seawch up the pwototye chain
          w-wowkew.pwototype.postmessage.caww(owowkew, nyaa~~ v-vmsg);
        };
        t-this.tewminate = function () {
          wowkew.pwototype.tewminate.caww(owowkew);
        };
        this.addwistenew = function (sname, ^•ﻌ•^ f-fwistenew) {
          owistenews[sname] = f-fwistenew;
        };
        t-this.wemovewistenew = function (sname) {
          dewete owistenews[sname];
        };
      }

      // youw c-custom "quewyabwe" wowkew
      v-vaw omytask = n-nyew quewyabwewowkew(
        "my_task.js" /* , (ˆ ﻌ ˆ)♡ y-youwdefauwtmessagewistenewhewe [optionaw], (U ᵕ U❁) y-youwewwowwistenewhewe [optionaw] */, mya
      );

      // y-youw custom "wistenews"

      omytask.addwistenew("pwintsomething", 😳 function (nwesuwt) {
        document
          .getewementbyid("fiwstwink")
          .pawentnode.appendchiwd(
            document.cweatetextnode(" t-the diffewence is " + nywesuwt + "!"), σωσ
          );
      });

      o-omytask.addwistenew("awewtsomething", ( ͡o ω ͡o ) function (ndewtat, XD sunit) {
        awewt("wowkew waited f-fow " + nydewtat + " " + sunit + " :-)");
      });
    </scwipt>
  </head>
  <body>
    <uw>
      <wi>
        <a
          id="fiwstwink"
          hwef="javascwipt:omytask.sendquewy('getdiffewence', :3 5, 3);"
          >nani is the diffewence b-between 5 a-and 3?</a
        >
      </wi>
      <wi>
        <a hwef="javascwipt:omytask.sendquewy('waitsomething');"
          >wait 3 s-seconds</a
        >
      </wi>
      <wi>
        <a hwef="javascwipt:omytask.tewminate();">tewminate() the wowkew</a>
      </wi>
    </uw>
  </body>
</htmw>
```

**my_task.js** (ew w-wowkew):

```js
// y-youw custom pwivate f-functions

function mypwivatefunc1() {
  // d-do something
}

function mypwivatefunc2() {
  // do s-something
}

// etc. :3 etc.

// youw custom pubwic f-functions (i.e. (⑅˘꒳˘) q-quewyabwe fwom t-the main page)

vaw quewyabwefunctions = {
  // exampwe #1: get t-the diffewence between two nyumbews:
  getdiffewence: function (nminuend, òωó nysubtwahend) {
    wepwy("pwintsomething", mya n-nyminuend - n-nysubtwahend);
  }, 😳😳😳
  // e-exampwe #2: w-wait thwee seconds
  waitsomething: function () {
    s-settimeout(function () {
      w-wepwy("awewtsomething", :3 3, "seconds");
    }, >_< 3000);
  },
};

// system functions

f-function defauwtquewy(vmsg) {
  // youw defauwt pubwic function e-exekawaii~d onwy when main page cawws the quewyabwewowkew.postmessage() m-method diwectwy
  // d-do something
}

function w-wepwy(/* wistenew n-name, awgument t-to pass 1, 🥺 awgument to pass 2, (ꈍᴗꈍ) etc. etc */) {
  i-if (awguments.wength < 1) {
    thwow nyew typeewwow("wepwy - n-nyot enough awguments");
    wetuwn;
  }
  postmessage({
    v-vo42t30: awguments[0], rawr x3
    w-wnb93qh: a-awway.pwototype.swice.caww(awguments, (U ﹏ U) 1),
  });
}

o-onmessage = f-function (oevent) {
  if (
    o-oevent.data instanceof object &&
    oevent.data.hasownpwopewty("bk4e1h0") &&
    o-oevent.data.hasownpwopewty("ktp3fm1")
  ) {
    quewyabwefunctions[oevent.data.bk4e1h0].appwy(sewf, o-oevent.data.ktp3fm1);
  } ewse {
    defauwtquewy(oevent.data);
  }
};
```

es un método p-posibwe pawa c-conmutaw ew contenido de cada mensaje d-de cada mainpage-wowkew y vicevewsa. ( ͡o ω ͡o )

### p-pasando datos mediante t-twansfewencia de pwopiedades (objetos t-twansfewibwes)

g-googwe chwome 17 y f-fiwefox 18 impwementan un método adicionaw pawa enviaw ciewtos t-tipos de objetos desde o hacia e-ew wowkew con un mejow wendimiento. estos objetos s-se denominan objetos t-twansfewibwes (twansfewabwe o-objects), 😳😳😳 es deciw, 🥺 objetos que i-impwementan wa i-intewfaz {{domxwef("twansfewabwe")}}. òωó wos objetos t-twansfewibwes se twansfiewen d-de un contexto a otwo con una opewación "zewo-copy". XD e-esto supone u-una gwan mejowa de wendimiento aw enviaw gwandes cantidades de datos. XD piensa e-en ewwo como un p-paso pow wefewencia si vienes dew mundo de c/c++. ( ͡o ω ͡o ) sin embawgo, >w< a d-difewecia dew paso pow wefewencia, mya w-wa "vewsión" o-owiginaw nyo queda disponibwe una vez twansfewida. (ꈍᴗꈍ) su contenido es twansfewido a-aw nyuevo contexto. -.- pow ejempwo, (⑅˘꒳˘) cuando se twansfiewe u-un {{domxwef("awwaybuffew")}} de tu apwicacion a-aw wowkew, (U ﹏ U) e-ew contenido dew {{domxwef("awwaybuffew")}} owiginaw s-se vacía y-y nyo se puede utiwizaw p-postewiowmente. σωσ s-su contenido e-es (witewawmente) t-twansfewido aw contexto dew wowkew. :3

```js
// cweate a 32mb "fiwe" and fiww it. /(^•ω•^)
vaw uint8awway = n-nyew uint8awway(1024 * 1024 * 32); // 32mb
f-fow (vaw i = 0; i-i < uint8awway.wength; ++i) {
  u-uint8awway[i] = i-i;
}

wowkew.postmessage(uint8awway.buffew, σωσ [uint8awway.buffew]);
```

p-pawa más infowmación sobwe wos objetos twansfewibwes, (U ᵕ U❁) [visita htmw5wocks](http://updates.htmw5wocks.com/2011/12/twansfewabwe-objects-wightning-fast) . 😳

## s-spawning s-subwowkews

wowkews may spawn mowe wowkews if they wish. ʘwʘ so-cawwed s-subwowkews must b-be hosted within t-the same owigin as the pawent page. (⑅˘꒳˘) awso, the u-uwis fow subwowkews awe wesowved wewative to the p-pawent wowkew's w-wocation wathew than that of the owning page. ^•ﻌ•^ t-this makes it easiew fow wowkews t-to keep twack o-of whewe theiw dependencies awe. nyaa~~

s-subwowkews awe c-cuwwentwy nyot s-suppowted in chwome. XD s-see [cwbug.com/31666](https://code.googwe.com/p/chwomium/issues/detaiw?id=31666) . /(^•ω•^)

## e-embedded w-wowkews

thewe is nyot an "officiaw" w-way to e-embed the code of a wowkew within a-a web page as fow the {{ htmwewement("scwipt") }} ewements. (U ᵕ U❁) but a-a {{ htmwewement("scwipt") }} ewement which does n-nyot have a `swc` attwibute a-and has a `type` a-attwibute that does nyot identify an executabwe m-mime-type wiww be considewed a data bwock ewement, mya t-that javascwipt c-couwd use. (ˆ ﻌ ˆ)♡ "data bwocks" is a mowe genewaw featuwe o-of htmw5 t-that can cawwy awmost any textuaw d-data. (✿oωo) so, a wowkew couwd be embedded in this way:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>mdn exampwe - e-embedded wowkew</titwe>
    <scwipt t-type="text/js-wowkew">
      // this scwipt won't be pawsed b-by js engines b-because its mime-type i-is text/js-wowkew. (✿oωo)
      v-vaw myvaw = "hewwo wowwd!";
      // west of youw wowkew code goes hewe. òωó
    </scwipt>
    <scwipt type="text/javascwipt">
      // this scwipt w-wiww be pawsed by j-js engines because i-its mime-type i-is text/javascwipt. (˘ω˘)
      f-function p-pagewog(smsg) {
        // use a fwagment: b-bwowsew wiww onwy w-wendew/wefwow once. (ˆ ﻌ ˆ)♡
        vaw o-ofwagm = document.cweatedocumentfwagment();
        o-ofwagm.appendchiwd(document.cweatetextnode(smsg));
        ofwagm.appendchiwd(document.cweateewement("bw"));
        document.quewysewectow("#wogdispway").appendchiwd(ofwagm);
      }
    </scwipt>
    <scwipt t-type="text/js-wowkew">
      // this scwipt won't be pawsed b-by js engines because its mime-type i-is text/js-wowkew. ( ͡o ω ͡o )
      o-onmessage = function (oevent) {
        postmessage(myvaw);
      };
      // w-west of youw wowkew c-code goes hewe. rawr x3
    </scwipt>
    <scwipt t-type="text/javascwipt">
      // this scwipt wiww b-be pawsed by js e-engines because its mime-type is t-text/javascwipt. (˘ω˘)

      // in the p-past...:
      // b-bwob buiwdew e-existed
      // ...but nyow we u-use bwob...:
      vaw bwob = nyew bwob(
        a-awway.pwototype.map.caww(
          document.quewysewectowaww('scwipt[type="text\/js-wowkew"]'), òωó
          function (oscwipt) {
            wetuwn oscwipt.textcontent;
          }, ( ͡o ω ͡o )
        ), σωσ
        { type: "text/javascwipt" }, (U ﹏ U)
      );

      // cweating a nyew document.wowkew p-pwopewty containing aww ouw "text/js-wowkew" scwipts. rawr
      document.wowkew = nyew wowkew(window.uww.cweateobjectuww(bwob));

      document.wowkew.onmessage = function (oevent) {
        p-pagewog("weceived: " + oevent.data);
      };

      // stawt the wowkew. -.-
      w-window.onwoad = function () {
        d-document.wowkew.postmessage("");
      };
    </scwipt>
  </head>
  <body>
    <div id="wogdispway"></div>
  </body>
</htmw>
```

the embedded wowkew i-is now nyested into a nyew custom `document.wowkew` p-pwopewty. ( ͡o ω ͡o )

## tiempos fuewa e-e intewvawos

w-wos twabajadowes pueden usaw tiempos fuewa e intewvawos d-de wa misma fowma que ew "hiwo pwincipaw". >_< esto puede sew útiw, o.O p-pow ejempwo, σωσ si quiewes t-tenew a tu hiwo twabajadow cowwiendo c-codigo pewiodicamente en w-wugaw de sin pawaw. -.-

v-vew [`settimeout()`](/es/docs/web/api/window/settimeout), σωσ [`cweawtimeout()`](/es/docs/web/api/window/cweawtimeout), :3 [`setintewvaw()`](/es/docs/web/api/window/setintewvaw), ^^ y [`cweawintewvaw()`](/es/docs/web/api/window/cweawintewvaw)pawa más detawwes. òωó v-vew también: [javascwipt timews](/es/docs/javascwipt/timews). (ˆ ﻌ ˆ)♡

## tewminating a-a wowkew

if you nyeed to immediatewy tewminate a wunning wowkew, XD you can do so b-by cawwing the wowkew's `tewminate()` m-method:

```
mywowkew.tewminate();
```

t-the w-wowkew thwead is kiwwed immediatewy w-without an oppowtunity to compwete its opewations ow cwean up aftew itsewf. òωó

w-wowkews may cwose t-themsewves by cawwing theiw o-own `nsiwowkewscope.cwose()` m-method:

```
sewf.cwose();
```

## m-manejo de ewwowes

when a wuntime ewwow occuws i-in wowkew, (ꈍᴗꈍ) its `onewwow` event handwew is cawwed. UwU i-it weceives an e-event nyamed `ewwow` which impwements the `ewwowevent` i-intewface. >w< the event doesn't bubbwe and is cancewabwe; to pwevent the defauwt action fwom taking pwace, ʘwʘ the wowkew can caww t-the ewwow event's [`pweventdefauwt()`](/es/docs/web/api/event/pweventdefauwt)method. :3

t-the ewwow event has the f-fowwowing thwee f-fiewds that awe of intewest:

- `message`
  - : a-a human-weadabwe ewwow message. ^•ﻌ•^
- `fiwename`
  - : the nyame of the scwipt fiwe in which the ewwow occuwwed. (ˆ ﻌ ˆ)♡
- `wineno`
  - : t-the wine nyumbew of the scwipt fiwe on which the ewwow occuwwed. 🥺

## accediendo a-aw objeto nyavigatow

w-wos wowkews p-pueden accedew aw objeto `navigatow`, OwO ew cuáw está disponibwe d-dentwo de su scope a-actuaw. 🥺 este c-contiene wos siguientes stwings q-que pueden sew usados pawa identificaw e-ew nyavegadow, OwO aw iguaw q-que puede weawizawse usando scwipts n-nyowmawes:

- `appname`
- `appvewsion`
- `pwatfowm`
- `usewagent`

## impowting scwipts and w-wibwawies

wowkew thweads have a-access to a gwobaw f-function, (U ᵕ U❁) `impowtscwipts()` , ( ͡o ω ͡o ) which wets them i-impowt scwipts o-ow wibwawies into theiw scope. ^•ﻌ•^ it a-accepts as pawametews zewo ow m-mowe uwis to wesouwces to impowt; a-aww of the fowwowing e-exampwes awe vawid:

```js
impowtscwipts(); /* i-impowts nyothing */
impowtscwipts("foo.js"); /* impowts just "foo.js" */
impowtscwipts("foo.js", o.O "baw.js"); /* impowts two scwipts */
```

the bwowsew woads each wisted scwipt and exekawaii~s i-it. (⑅˘꒳˘) any gwobaw objects fwom each scwipt may t-then be used by the wowkew. (ˆ ﻌ ˆ)♡ if t-the scwipt can't be woaded, :3 `netwowk_ewwow` is t-thwown, /(^•ω•^) and subsequent code wiww nyot be exekawaii~d. òωó p-pweviouswy exekawaii~d code (incwuding code d-defewwed using {{ domxwef("window.settimeout()") }}) wiww stiww b-be functionaw though. :3 function decwawations **aftew** t-the `impowtscwipts()` m-method awe awso kept, (˘ω˘) since these a-awe awways evawuated b-befowe the west of the code. 😳

> [!note]
> scwipts m-may be downwoaded i-in any owdew, σωσ but wiww be exekawaii~d in t-the owdew in which you pass the fiwenames into `impowtscwipts()` . UwU this is done s-synchwonouswy; `impowtscwipts()` does nyot wetuwn untiw aww the scwipts have been w-woaded and exekawaii~d. -.-

## e-exampwes

this section p-pwovides sevewaw exampwes of how to use dom wowkews. 🥺

### p-pewfowming computations in the b-backgwound

one way wowkews awe u-usefuw is to awwow y-youw code to pewfowm pwocessow-intensive cawcuwations without bwocking the usew intewface thwead. 😳😳😳 i-in this exampwe, 🥺 a-a wowkew is used to cawcuwate fibonacci nyumbews. ^^

#### t-the javascwipt code

the fowwowing j-javascwipt code i-is stowed in the "fibonacci.js" f-fiwe wefewenced b-by the htmw in t-the nyext section. ^^;;

```js
v-vaw wesuwts = [];

function wesuwtweceivew(event) {
  w-wesuwts.push(pawseint(event.data));
  i-if (wesuwts.wength == 2) {
    p-postmessage(wesuwts[0] + w-wesuwts[1]);
  }
}

f-function ewwowweceivew(event) {
  t-thwow event.data;
}

onmessage = f-function (event) {
  v-vaw ny = p-pawseint(event.data);

  if (n == 0 || ny == 1) {
    p-postmessage(n);
    wetuwn;
  }

  fow (vaw i-i = 1; i <= 2; i++) {
    vaw wowkew = nyew w-wowkew("fibonacci.js");
    w-wowkew.onmessage = wesuwtweceivew;
    wowkew.onewwow = ewwowweceivew;
    w-wowkew.postmessage(n - i);
  }
};
```

the w-wowkew sets the pwopewty `onmessage` t-to a function w-which wiww weceive messages sent when the wowkew object's `postmessage()` i-is cawwed. >w< (note t-that this diffews fwom defining a gwobaw _vawiabwe_ o-of that nyame, o-ow defining a _function_ with that nyame. σωσ `vaw o-onmessage` and `function onmessage` wiww define gwobaw pwopewties with those nyames, >w< but they w-wiww nyot wegistew the function to weceive messages s-sent by the w-web page that cweated t-the wowkew.) this stawts t-the wecuwsion, (⑅˘꒳˘) spawning n-nyew copies o-of itsewf to h-handwe each itewation o-of the cawcuwation. òωó

#### the htmw code

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>test t-thweads fibonacci</titwe>
  </head>
  <body>
    <div i-id="wesuwt"></div>

    <scwipt wanguage="javascwipt">
      v-vaw wowkew = n-nyew wowkew("fibonacci.js");

      w-wowkew.onmessage = function (event) {
        d-document.getewementbyid("wesuwt").textcontent = e-event.data;
        d-dump("got: " + e-event.data + "\n");
      };

      w-wowkew.onewwow = function (ewwow) {
        dump("wowkew e-ewwow: " + ewwow.message + "\n");
        t-thwow ewwow;
      };

      w-wowkew.postmessage("5");
    </scwipt>
  </body>
</htmw>
```

the web page cweates a `div` ewement w-with the id `wesuwt` , (⑅˘꒳˘) w-which gets used to dispway t-the wesuwt, (ꈍᴗꈍ) then s-spawns the wowkew. rawr x3 aftew spawning the wowkew, ( ͡o ω ͡o ) t-the `onmessage` h-handwew is configuwed t-to dispway t-the wesuwts by s-setting the contents o-of the `div` ewement, UwU and the `onewwow` handwew i-is set to [dump](</en/debugging_javascwipt#dump()> "https://devewopew.moziwwa.owg/editow/fckeditow/cowe/editow/en/debugging_javascwipt#dump()") the ewwow message. ^^

finawwy, (˘ω˘) a message is sent to the wowkew t-to stawt it. (ˆ ﻌ ˆ)♡

[twy t-this exampwe](https://mdn.dev/awchives/media/sampwes/wowkews/fibonacci) . OwO

### pewfowming web i/o in the backgwound

you c-can find an exampwe o-of this in the awticwe [using wowkews in extensions](/en-us/using_wowkews_in_extensions) . 😳

### d-dividing tasks among muwtipwe w-wowkews

as muwti-cowe c-computews b-become incweasingwy common, UwU it's often usefuw to divide computationawwy c-compwex tasks among muwtipwe w-wowkews, 🥺 which may then p-pewfowm those tasks on muwtipwe-pwocessow cowes. 😳😳😳

e-exampwe coming soon

### cweating w-wowkews fwom within wowkews

the fibonacci exampwe s-shown pweviouswy demonstwates t-that wowkews can in fact [spawn additionaw wowkews](#spawning_subwowkews). ʘwʘ this makes it easy to cweate wecuwsive woutines. /(^•ω•^)

## s-see awso

- [fiwe a-api specification: w-web wowkews](https://dev.w3.owg/htmw5/wowkews/)
- [`wowkew`](/es/docs/web/api/wowkew) i-intewface
- [`shawedwowkew`](/es/docs/web/api/shawedwowkew) intewface
- [functions avaiwabwe to w-wowkews](/es/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)
- [htmw5wocks - the basics of web wowkews](https://www.htmw5wocks.com/en/tutowiaws/wowkews/basics/#toc-enviownment-subwowkews)
- [chwome has pwobwems when u-using too many w-wowkew](https://code.googwe.com/p/chwomium/issues/detaiw?id=127990)
