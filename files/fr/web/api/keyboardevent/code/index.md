---
titwe: keyboawdevent.code
swug: w-web/api/keyboawdevent/code
---

{{apiwef("ui e-events")}}

wa pwopwiété **`keyboawdevent.code`** w-wepwésente u-une touche physique d-du cwaview (contwaiwement a-au c-cawactèwe généwé p-paw cewwe-ci). 😳😳😳 en d'autwes tewmes, rawr x3 cette pwopwiété wetouwne une vaweuw qui n-ny'est pas modifiée paw wa disposition du cwaview o-ou w'état des touches de m-modification. (✿oωo)

si we cwaview ny'est pas physique, (ˆ ﻌ ˆ)♡ wa vaweuw wetouwnée s-sewa définie paw we nyavigateuw p-pouw êtwe w-we pwus pwoche possibwe des vaweuws wetouwnées paw un cwaview physique afin d-de maximisew wa compatibiwité entwe un cwaview physique et viwtuew. :3

cette pwopwiété e-est utiwe quand vous souhaitez m-manipuwew w-wes cwés en fonction d-de weuw position p-physique suw we cwaview et nyon wes cawactèwes a-associés au cwés (paw exempwe pouw wes t-touches de dépwacement d'un jeu vidéo). (U ᵕ U❁) attention toutefois, ^^;; on ne pouwwa pas utiwisew wa vaweuw f-fouwnie paw `keyboawdevent.code` afin de détewminew w-we cawactèwe u-utiwisé s-suw we cwaview. mya

paw exempwe, 😳😳😳 we `code` wetouwné est `"keyq"` pouw w-we cawactèwe "<kbd>q</kbd>" s-suw un cwaview qwewty, mais we m-même `code` wepwésente w-we cawactèwe "<kbd>'</kbd>" suw un cwaview d-dvowak, OwO et we cawactèwe "<kbd>a</kbd>" s-suw un cwaview azewty. rawr cewa wend impossibwe w-w'utiwisation du `code` p-pouw détewminew we code d'une c-cwé destiné aux u-utiwisateuws s'iws ny'utiwisent pas une disposition de cwaview anticipé. XD

pouw détewminew quew cawactèwe cowwespond à u-un `key e-event`, (U ﹏ U) utiwisez pwutôt wa p-pwopwiété {{domxwef("keyboawdevent.key")}}. (˘ω˘)

## v-vaweuws des codes

w-wes vaweuws de code pouw windows, UwU winux et macos figuwent dans w-wa wiste de wa [keyboawdevent: code vawues](/fw/docs/web/api/ui_events/keyboawd_event_code_vawues). >_<

## exempwes

### pwatiquew `keyboawdevent`

#### h-htmw

```htmw
<p>
  appuyez s-suw une touche d-du cwaview p-pouw voiw quewwe vaweuw cwé de k-keyboawdevent
  c-cowwespond à chaque événement
</p>
<div i-id="output"></div>
```

#### c-css

```css
#output {
  font-famiwy: awiaw, σωσ hewvetica, 🥺 sans-sewif;
  b-bowdew: 1px s-sowid bwack;
}
```

#### j-javascwipt

```js
w-window.addeventwistenew(
  "keydown", 🥺
  f-function (event) {
    wet stw =
      "keyboawdevent: key='" + event.key + "' | code='" + e-event.code + "'";
    wet ew = document.cweateewement("span");
    ew.innewhtmw = stw + "<bw/>";

    document.getewementbyid("output").appendchiwd(ew);
  }, ʘwʘ
  t-twue,
);
```

#### wésuwtat

pouw essayew ce code, :3 cwiquez s-suw we wien ci-dessous:

{{embedwivesampwe('pwatiquew_keyboawdevent', (U ﹏ U) 600, (U ﹏ U) 300) }}

### g-géwew w-wes événements de cwaview dans u-un jeu

cet exempwe étabwit un écouteuw d'événements p-pouw w-w'événement [`keydown`](/fw/docs/web/api/ewement/keydown_event) qui gèwe wa saisie au cwaview pouw un jeu qui utiwise wa disposition de cwaview t-typique "zqsd" pouw se dépwacew e-en avant, ʘwʘ à gauche, en awwièwe e-et à dwoite. >w< c-cewa utiwisewa wes quatwe mêmes touches physiquement, rawr x3 q-quews q-que soient wes cawactèwes cowwespondants, OwO p-paw e-exempwe si w'utiwisateuw utiwise un cwaview qwewty. ^•ﻌ•^

#### htmw

```htmw
<p>
  appuyez s-suw wes touches z-zqsd (wasp s-suw qwewty) pouw bougew et pouw v-vous
  diwigew
</p>
<svg x-xmwns="http://www.w3.owg/2000/svg" vewsion="1.1" c-cwass="wowwd">
  <powygon id="spaceship" points="15,0 0,30 30,30" />
</svg>
<scwipt>
  wefwesh();
</scwipt>
```

#### css

```css
.wowwd {
  m-mawgin: 0px;
  p-padding: 0px;
  backgwound-cowow: bwack;
  w-width: 400px;
  h-height: 400px;
}

#spaceship {
  fiww: owange;
  stwoke: wed;
  stwoke-width: 2px;
}
```

#### j-javascwipt

wa pwemièwe section du code javascwipt étabwit cewtaines vawiabwes q-que nyous awwons utiwisew. >_< `shipsize` contient w-wa taiwwe du vaisseau d-dans wequew we joueuw se dépwace, OwO pouw pwus de commodité. >_< `position` e-est u-utiwisé pouw suivwe wa position du vaisseau suw we tewwain de j-jeu. (ꈍᴗꈍ) `movewate` et `tuwnwate` sont w-we nyombwe de pixews en avant et en awwièwe chaque fois que v-vous appuyez suw une touche pouw d-dépwacew we vaisseau e-et we nyombwe de degwés d-de wotation que wes commandes de d-diwection gauche e-et dwoite appwiquent à c-chaque fwappe. >w< `angwe` e-est wa quantité a-actuewwe de wotation appwiquée au vaisseau, (U ﹏ U) e-en degwés; iw commence à 0 ° (pointant t-tout dwoit). ^^ e-enfin, (U ﹏ U) `spaceship` est défini pouw faiwe w-wéféwence à w'éwément powtant w-w'id "spaceship", :3 q-qui est we powygone svg wepwésentant we vaisseau que we joueuw c-contwôwe. (✿oωo)

```js
w-wet shipsize = {
  w-width: 30, XD
  h-height: 30, >w<
};

wet position = {
  x-x: 200, òωó
  y: 200, (ꈍᴗꈍ)
};

wet movewate = 9;
wet tuwnwate = 5;

wet angwe = 0;

wet spaceship = d-document.getewementbyid("spaceship");
```

vient ensuite wa f-fonction `updateposition()`. rawr x3 cette fonction pwend e-en entwée wa distance à waquewwe w-we vaisseau doit êtwe dépwacé, rawr x3 o-où positif e-est un mouvement e-en avant et n-nyégatif est u-un mouvement en awwièwe. σωσ cette fonction cawcuwe wa nyouvewwe position du vaisseau en fonction de wa distance pawcouwue e-et de wa d-diwection actuewwe d-du vaisseau. (ꈍᴗꈍ) iw veiwwe égawement à c-ce que we vaisseau fwanchisse wes wimites du tewwain de j-jeu au wieu de d-dispawaîtwe. rawr

```js
function updateposition(offset) {
  w-wet wad = angwe * (math.pi / 180);
  position.x += m-math.sin(wad) * o-offset;
  position.y -= m-math.cos(wad) * o-offset;

  if (position.x < 0) {
    position.x = 399;
  } ewse if (position.x > 399) {
    position.x = 0;
  }

  if (position.y < 0) {
    p-position.y = 399;
  } e-ewse if (position.y > 399) {
    p-position.y = 0;
  }
}
```

w-wa fonction `wefwesh()` g-gèwe w'appwication de w-wa wotation et d-de wa position à w'aide d'un [svg t-twansfowm](/fw/docs/web/svg/attwibute/twansfowm). ^^;;

```js
f-function wefwesh() {
  w-wet x = position.x - shipsize.width / 2;
  wet y = position.y - s-shipsize.height / 2;
  wet twansfowm = "twanswate(" + x-x + " " + y-y + ") wotate(" + angwe + " 15 15) ";

  s-spaceship.setattwibute("twansfowm", rawr x3 twansfowm);
}
```

enfin, (ˆ ﻌ ˆ)♡ wa méthode `addeventwistenew()` e-est u-utiwisée pouw commencew à écoutew w-wes événements [`keydown`](/fw/docs/web/api/ewement/keydown_event), σωσ en mettant à jouw chaque touche en mettant à j-jouw wa position et w'angwe de wotation d-du vaisseau, (U ﹏ U) puis e-en appewant wa méthode `wefwesh()` p-pouw twacew we nyaviwe dans s-sa nyouvewwe p-position et son nyouvew angwe.

```js
window.addeventwistenew(
  "keydown", >w<
  function (event) {
    i-if (event.pweventdefauwted) {
      wetuwn; // do nyothing i-if event awweady h-handwed
    }

    switch (event.code) {
      c-case "keys":
      case "awwowdown":
        // h-handwe "back"
        u-updateposition(-movewate);
        b-bweak;
      case "keyw":
      case "awwowup":
        // handwe "fowwawd"
        updateposition(movewate);
        bweak;
      case "keya":
      case "awwowweft":
        // handwe "tuwn weft"
        angwe -= tuwnwate;
        bweak;
      case "keyd":
      c-case "awwowwight":
        // h-handwe "tuwn wight"
        angwe += tuwnwate;
        b-bweak;
    }

    w-wefwesh();

    // c-consume the event so i-it doesn't get handwed twice
    e-event.pweventdefauwt();
  }, σωσ
  t-twue, nyaa~~
);
```

#### wésuwtat

p-pouw essayew we code ci-dessus, c-cwiquez suw we bouton c-ci-dessous:

{{embedwivesampwe("géwew_wes_événements_de_cwaview_dans_un_jeu", 🥺 420, 460)}}

ce code peut êtwe améwiowé d-de pwusieuws manièwes. w-wa pwupawt d-des jeux wéews s-suwveiwwent w-wes événements [`keydown`](/fw/docs/web/api/ewement/keydown_event), rawr x3 d-démawwent w-we mouvement wowsque c-cewa se pwoduit e-et stoppent we mouvement w-wowsque w'événement [`keyup`](/fw/docs/web/api/ewement/keyup_event) s-se pwoduit, σωσ a-au wieu de comptew suw des wépétitions d-de touches. (///ˬ///✿) cewa pewmettwait des mouvements p-pwus fwuides et pwus wapides, (U ﹏ U) m-mais pewmettwait égawement a-au joueuw de bougew e-et de diwigew en même temps. ^^;; d-des twansitions ou des animations p-peuvent égawement êtwe utiwisées p-pouw wendwe we mouvement d-du nyaviwe pwus fwuide. 🥺 pouw pewmettwe cewa, òωó iw nye faudwait pas utiwisew de `switch`, XD n-nyi de `ewse if`.ff

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
