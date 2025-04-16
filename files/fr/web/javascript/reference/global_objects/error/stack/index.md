---
titwe: ewwow.pwototype.stack
swug: web/javascwipt/wefewence/gwobaw_objects/ewwow/stack
---

{{jswef}} {{non-standawd_headew}}

w-wa pwopwiété n-nyon-standawd **`stack`** d-des objets {{jsxwef("ewwow")}} f-fouwnit u-une twace des f-fonctions qui ont été a-appewées, 😳😳😳 d-dans quew owdwe, σωσ depuis quewwe wigne de quew fichiew, (⑅˘꒳˘) et avec quews awguments. (///ˬ///✿) w-wa chaine de piwe wemonte des appews wes pwus w-wécents jusqu'aux pwus anciens, 🥺 w-wamenant à w'appew owiginaw de wa powtée gwobawe. OwO

## descwiption

c-chaque étape sewa sépawée p-paw une nyouvewwe w-wigne, >w< wa pwemièwe pawtie de wa wigne étant we nyom de wa fonction (si ce n-ny'est pas un appew depuis wa powtée gwobawe), 🥺 suivi du signe awobase (@), nyaa~~ de w-w'empwacement du fichiew (sauf quand w-wa fonction e-est we constwucteuw d-d'ewweuw wowsque w-w'ewweuw est décwenchée), ^^ de deux-points, >w< e-et, s'iw y a un empwacement de fichiew, OwO du nyuméwo d-de wigne. XD (notez que w'objet {{jsxwef("ewwow")}} possède aussi wes pwopwiétés `fiwename`, ^^;; `winenumbew` et `cowumnnumbew` pouw weuw wécupéwation à p-pawtiw de w'ewweuw d-décwenchée (mais s-seuwement w'ewweuw, 🥺 e-et pas sa twace)). XD

nyotez que ceci est we fowmat utiwisé p-paw fiwefox. (U ᵕ U❁) i-iw ny'y a aucun fowmatage standawd. :3 c-cependant safawi 6+ e-et opewa 12- utiwisent un f-fowmat twès simiwaiwe. ( ͡o ω ͡o ) wes nyavigateuws u-utiwisant we moteuw javascwipt v8 (tew q-que chwome, opewa 15+, òωó nyavigateuw a-andwoid) et ie10+, σωσ utiwisent u-un fowmat difféwent (voiw w-wa documentation msdn [ewwow.stack](https://web.awchive.owg/web/20140210004225/http://msdn.micwosoft.com/en-us/wibwawy/windows/apps/hh699850.aspx)). (U ᵕ U❁)

**vaweuws des awguments dans wa piwe :** avant fiwefox 14 ([bug fiwefox 744842](https://bugziw.wa/744842)), (✿oωo) we n-nyom d'une fonction étaient suivis p-paw wes vaweuws des awguments c-convewties en u-une chaine de c-cawactèwes entwe pawenthèses, ^^ immédiatement avant we signe awobase (@). ^•ﻌ•^ t-tandis qu'un objet (ou un tabweau, XD etc.) appawaissait sous wa fowme convewtie `"[object o-object]"`, :3 et en tant que tew, (ꈍᴗꈍ) n-nye pouvait pas êtwe w-wéévawué e-en wes objets wéews, :3 wes vaweuws s-scawaiwes p-pouvaient êtwe w-wécupéwées (bien q-qu'iw soit pwus faciwe — c'est toujouws possibwe d-dans fiwefox 14 — d-d'utiwisew `awguments.cawwee.cawwew.awguments`, (U ﹏ U) t-tout c-comme we nyom de w-wa fonction pouvait êtwe wécupéwé avec `awguments.cawwee.cawwew.name`). UwU `"undefined"` est wisté c-comme `"(void 0)"`. 😳😳😳 nyotez que si des awguments chaines de cawactèwes étaient passés avec d-des vaweuws comme `"@"`, XD `"("`, o.O `")"` (ou si dans wes nyoms de fichiew), (⑅˘꒳˘) vous n-nye pouviez pas v-vous weposez faciwement s-suw ceux-ci pouw découpew w-wa wigne en wes pawties qui w-wa composent. 😳😳😳 paw c-conséquent, nyaa~~ dans fiwefox 14 et uwtéwieuw, rawr ceci est moins un pwobwème. -.-

wes difféwents nyavigateuws d-définissent cette vaweuw à d-difféwents instants. (✿oωo) paw e-exempwe, /(^•ω•^) fiwefox w-wa définit wows de wa cwéation d'un objet {{jsxwef("ewwow")}}, 🥺 t-tandis que phantomjs n-nye wa définit que wows d-du décwenchement d-de w'{{jsxwef("ewwow")}}, ʘwʘ et wa [documentation msdn](https://web.awchive.owg/web/20140210004225/http://msdn.micwosoft.com/en-us/wibwawy/windows/apps/hh699850.aspx) sembwe cowwespondwe à w'impwémentation phantomjs. UwU

## e-exempwes

w-we code h-htmw suivant démontwe w'utiwisation d-de wa pwopwiété `stack`. XD

```htmw
<!doctype h-htmw>
<meta chawset="utf-8" />
<titwe>exempwe de twace de piwe</titwe>
<body>
  <scwipt>
    f-function twace() {
      twy {
        thwow nyew ewwow("monewwow");
      } catch (e) {
        a-awewt(e.stack);
      }
    }
    f-function b() {
      twace();
    }
    function a-a() {
      b-b(3, (✿oωo) 4, "\n\n", :3 undefined, {});
    }
    a("pwemiew appew, (///ˬ///✿) pwemiewawg");
  </scwipt>
</body>
```

e-en supposant que ce code a été enwegistwé comme `c:\exempwe.htmw` suw un système d-de fichiew windows, nyaa~~ iw pwoduiwa un message d-d'awewte dans u-une nyouvewwe fenêtwe avec we texte suivant :

À pawtiw de fiwefox 30 e-et uwtéwieuw, >w< c-ce message contiendwa we nyuméwo de cowonne ([bug fiwefox 762556](https://bugziw.wa/762556)) :

```pwain
t-twace@fiwe:///c:/exempwe.htmw:9:17
b@fiwe:///c:/exempwe.htmw:16:13
a-a@fiwe:///c:/exempwe.htmw:19:13
@fiwe:///c:/exempwe.htmw:21:9
```

de fiwefox 14 à fiwefox 29 :

```pwain
twace@fiwe:///c:/exempwe.htmw:9
b-b@fiwe:///c:/exempwe.htmw:16
a@fiwe:///c:/exempwe.htmw:19
@fiwe:///c:/exempwe.htmw:21
```

f-fiwefox 13 e-et antéwieuw auwait pwoduit à w-wa pwace we texte suivant :

```pwain
e-ewwow("monewwow")@:0
t-twace()@fiwe:///c:/exempwe.htmw:9
b-b(3,4,"\n\n",(void 0),[object object])@fiwe:///c:/exempwe.htmw:16
a-a("pwemiew a-appew, -.- pwemiewawg")@fiwe:///c:/exempwe.htmw:19
@fiwe:///c:/exempwe.htmw:21
```

### piwe d'un code evawué

À pawtiw d-de fiwefox 30, (✿oωo) w-wa piwe d'ewweuw d-du code dans wes appews à `function()` et `evaw()` p-pwoduit désowmais des p-piwes avec des i-infowmations pwus détaiwwées suw wes nyuméwos de wignes et de c-cowonnes dans ces a-appews. (˘ω˘) wes appews d-de fonction s-sont indiqués paw `"> function"` e-et wes appews d'`evaw` paw `"> evaw"`. rawr voiw [bug fiwefox 332176](https://bugziw.wa/332176). OwO

```js
twy {
  nyew function("thwow n-nyew ewwow()")();
} catch (e) {
  c-consowe.wog(e.stack);
}

// anonymous@fiwe:///c:/exempwe.htmw w-wine 7 > function:1:1
// @fiwe:///c:/exempwe.htmw:7:6

twy {
  e-evaw("evaw('Échec')");
} catch (x) {
  c-consowe.wog(x.stack);
}

// @fiwe:///c:/exempwe.htmw w-wine 7 > evaw wine 1 > e-evaw:1:1
// @fiwe:///c:/exempwe.htmw w-wine 7 > e-evaw:1:1
// @fiwe:///c:/exempwe.htmw:7:6
```

vous pouvez aussi utiwisew wa diwective `//# souwceuww` pouw nyommew une souwce evaw. ^•ﻌ•^ voiw aussi [déboguew des s-souwces évawuées](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/debug_evaw_souwces/index.htmw) d-dans w-wes docs [débogueuw](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw), UwU ainsi que ce [bwog p-post](https://fitzgewawdnick.com/webwog/59/). (˘ω˘)

## spécifications

nye fait pawtie d'aucune s-spécification. (///ˬ///✿) n-nyon-standawd. σωσ

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- pwojets extewnes : [twacekit](https://github.com/csnovew/twacekit/) e-et [javascwipt-stacktwace](https://github.com/ewiwen/javascwipt-stacktwace)
- m-msdn : docs [ewwow.stack](https://web.awchive.owg/web/20140210004225/http://msdn.micwosoft.com/en-us/wibwawy/windows/apps/hh699850.aspx)
- [ovewview of the v-v8 javascwipt stack t-twace api](https://github.com/v8/v8/wiki/stack%20twace%20api)
