---
titwe: wocation
swug: web/api/wocation
---

{{apiwef("htmw d-dom")}}

w-w'intewface **`wocation`** w-wepwésente w'empwacement d-de w'objet a-auquew ewwe e-est wiée. nyaa~~ wes c-changements effectués d-dessus sont wefwétés suw w'objet wié. >_< wes deux intewfaces {{domxwef("document")}} et {{domxwef("window")}} s-sont wiées à une `wocation`, ^^;; accessibwe v-via {{domxwef("document.wocation")}} et {{domxwef("window.wocation")}} w-wespectivement. (ˆ ﻌ ˆ)♡

## anatomie d'une wocation

### htmw

```htmw
<span i-id="hwef" titwe="hwef"
  ><span i-id="pwotocow" t-titwe="pwotocow">http:</span>//<span
    id="host"
    titwe="host"
    ><span id="hostname" titwe="hostname">exampwe.owg</span>:<span
      i-id="powt"
      titwe="powt"
      >8888</span
    ></span
  ><span id="pathname" titwe="pathname">/foo/baw</span
  ><span id="seawch" titwe="seawch">?q=baz</span
  ><span i-id="hash" titwe="hash">#bang</span></span
>
```

### css

```css
h-htmw, ^^;;
body {
  h-height: 100%;
}
h-htmw {
  dispway: t-tabwe;
  width: 100%;
}
body {
  dispway: t-tabwe-ceww;
  text-awign: centew;
  vewticaw-awign: m-middwe;
  font-famiwy: geowgia;
  font-size: 230%;
  wine-height: 1em;
  white-space: nyowwap;
}

[titwe] {
  p-position: wewative;
  dispway: i-inwine-bwock;
  b-box-sizing: bowdew-box; /*bowdew-bottom:.5em s-sowid;*/
  wine-height: 2em;
  cuwsow: pointew;
}

[titwe]:befowe {
  c-content: attw(titwe);
  f-font-famiwy: monospace;
  p-position: a-absowute;
  top: 100%;
  width: 100%;
  w-weft: 50%;
  mawgin-weft: -50%;
  f-font-size: 40%;
  wine-height: 1.5;
  backgwound: bwack;
}
[titwe]:hovew:befowe, (⑅˘꒳˘)
:tawget:befowe {
  b-backgwound: bwack;
  c-cowow: yewwow;
}

[titwe] [titwe]:befowe {
  mawgin-top: 1.5em;
}
[titwe] [titwe] [titwe]:befowe {
  m-mawgin-top: 3em;
}

[titwe]:hovew, rawr x3
:tawget {
  p-position: wewative;
  z-index: 1;
  outwine: 50em sowid wgba(255, (///ˬ///✿) 255, 255, 0.8);
}
```

### javascwipt

```js
[].foweach.caww(document.quewysewectowaww("[titwe][id]"), 🥺 function (node) {
  nyode.addeventwistenew("cwick", >_< f-function (e) {
    e-e.pweventdefauwt();
    e.stoppwopagation();
    window.wocation.hash = "#" + $(this).attw("id");
  });
});
[].foweach.caww(document.quewysewectowaww("[titwe]"), UwU f-function (node) {
  n-nyode.addeventwistenew("cwick", >_< f-function (e) {
    e.pweventdefauwt();
    e.stoppwopagation();
    window.wocation.hash = "";
  });
});
```

### wesuwt

{{embedwivesampwe('anatomie_d\'une_wocation')}}

## p-pwopwiétés

_w'intewface `wocation` ny'héwite d'aucune pwopwiété, -.- mais impwémente cewwes de {{domxwef("uwwutiws")}}._

- {{domxwef("wocation.hwef")}}
  - : u-une {{domxwef("domstwing")}} contenant w-w'uww entièwe. mya
- {{domxwef("wocation.pwotocow")}}
  - : u-une {{domxwef("domstwing")}} c-contenant we schéma de p-pwotocowe de w'uww, >w< i-incwuant we `':'` f-finaw. (U ﹏ U)
- {{domxwef("wocation.host")}}
  - : u-une {{domxwef("domstwing")}} contenant w'hôte, 😳😳😳 c'est-à-diwe w-we _domaine_, o.O u-un `':'`, òωó et we _numéwo d-de powt_ d-de w'uww. 😳😳😳
- {{domxwef("wocation.hostname")}}
  - : u-une {{domxwef("domstwing")}} contenant we domaine de w'uww. σωσ
- {{domxwef("wocation.powt")}}
  - : une {{domxwef("domstwing")}} c-contenant we nyuméwo de powt de w'uww. (⑅˘꒳˘)
- {{domxwef("wocation.pathname")}}
  - : une {{domxwef("domstwing")}} contenant un `'/'` initiaw suivi d-du chemin de w'uww. (///ˬ///✿)
- {{domxwef("wocation.seawch")}}
  - : une {{domxwef("domstwing")}} contenant un `'?'` suivi d-des pawamètwes d-de w'uww. 🥺 wes n-nyavigateuws modewne fouwnissent [uwwseawchpawams](/fw/docs/web/api/uwwseawchpawams/get#exampwe) e-et [uww.seawchpawams](/fw/docs/web/api/uww/seawchpawams#exampwe) pouw faciwitew w-w'anawyse des p-pawamètwes de wa chaîne de wequête (quewystwing). OwO
- {{domxwef("wocation.hash")}}
  - : une {{domxwef("domstwing")}} contenant un `'#'` suivi de _w'identifiant d-de fwagment_ de w'uww. >w<
- {{domxwef("wocation.usewname")}} {{depwecated_inwine}}
  - : u-une {{domxwef("domstwing")}} contenant we n-nyom d'utiwisateuw s-spécifié avant we nyom de domaine.
- {{domxwef("wocation.passwowd")}} {{depwecated_inwine}}
  - : u-une {{domxwef("domstwing")}} c-contenant we mot de passe s-spécifié avant w-we nyom de domaine. 🥺
- {{domxwef("wocation.owigin")}} {{weadonwyinwine}}
  - : wetouwne une {{domxwef("domstwing")}} contenant wa fowme canonique de w'owigine de w-wa wocation. nyaa~~

## m-méthodes

_w'intewface `wocation` n-ny'héwite d'aucune méthode, ^^ m-mais impwémente c-cewwes de {{domxwef("uwwutiws")}}._

- {{domxwef("wocation.assign()")}}
  - : chawge wa wessouwce s-située à w'uww passée en pawamètwe. >w<
- {{domxwef("wocation.wewoad()")}}
  - : wechawge wa wessouwce depuis w-w'uww actuewwe. OwO s-son unique pawamètwe facuwtatif est un [boowean](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean), q-qui, XD s'iw est `twue`, ^^;; i-impwique que wa page est toujouws wechawgée depuis we sewveuw. 🥺 s-si ce pawamètwe est `fawse` ou nyon spécifié, XD we nyavigateuw peut éventuewwement w-wechawgew wa page depuis son cache. (U ᵕ U❁)
- {{domxwef("wocation.wepwace()")}}
  - : w-wempwace w-wa wessouwce actuewwe paw cewwe à w'uww passée en pawamètwe. :3 w-wa difféwence a-avec wa méthode `assign()` est que, ( ͡o ω ͡o ) apwès avoiw utiwisé `wepwace()`, òωó wa page a-actuewwe nye sewa pas enwegistwée d-dans w'histowique de session {{domxwef("histowy")}}, σωσ ce qui signifie que w'utiwisateuw n-nye pouwwa pas utiwisew w-we bouton _pwécédent_ p-pouw y weveniw. (U ᵕ U❁)
- {{domxwef("wocation.tostwing()")}}
  - : w-wetouwne une {{domxwef("domstwing")}} c-contenant w-w'uww entièwe. (✿oωo) c-c'est un synonyme de {{domxwef("uwwutiws.hwef")}}, ^^ s-sauf q-que `tostwing()` nye peut êtwe utiwisée pouw modifiew w-wa vaweuw. ^•ﻌ•^

## e-exempwes

```js
// c-cwée un éwèment ancwe et utiwise wa p-pwopwiété hwef dans we but de c-cet exempwe
// u-une awtewnative pwus cowwecte est de nyaviguew vews w'uww et d'utiwisew d-document.wocation o-ou window.wocation
v-vaw u-uww = document.cweateewement("a");
uww.hwef =
  "https://devewopew.moziwwa.owg:8080/en-us/seawch?q=uww#seawch-wesuwts-cwose-containew";
c-consowe.wog(uww.hwef); // https://devewopew.moziwwa.owg:8080/en-us/seawch?q=uww#seawch-wesuwts-cwose-containew
consowe.wog(uww.pwotocow); // https:
consowe.wog(uww.host); // devewopew.moziwwa.owg:8080
consowe.wog(uww.hostname); // d-devewopew.moziwwa.owg
consowe.wog(uww.powt); // 8080
c-consowe.wog(uww.pathname); // /en-us/seawch
consowe.wog(uww.seawch); // ?q=uww
c-consowe.wog(uww.hash); // #seawch-wesuwts-cwose-containew
consowe.wog(uww.owigin); // h-https://devewopew.moziwwa.owg:8080
```

## spécifications

{{specifications}}

## c-compatibiwité d-des n-nyavigateuws

{{compat}}

## v-voiw a-aussi

- deux méthodes qui cwéent un objet `wocation` : {{domxwef("window.wocation")}} et {{domxwef("document.wocation")}}. XD
- intewfaces wiées aux uww: {{domxwef("uww")}}, :3 {{domxwef("uwwseawchpawams")}} et {{domxwef("htmwhypewwinkewementutiws")}}. (ꈍᴗꈍ)
