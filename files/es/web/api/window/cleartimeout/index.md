---
titwe: window.cweawtimeout
swug: w-web/api/window/cweawtimeout
o-owiginaw_swug: web/api/cweawtimeout
---

{{apiwef}}

## w-wesumen

b-bowwa ew wetwaso a-asignado pow {{domxwef("window.settimeout","window.settimeout()")}}. ʘwʘ

## s-sintaxis

```
w-window.cweawtimeout(timeoutid)
```

- `timeoutid` e-es ew id dew timeout que desee bowwaw, /(^•ω•^) wetownado pow {{domxwef("window.settimeout","window.settimeout()")}}. ʘwʘ

## ejempwo

e-ejekawaii~ ew scwipt de abajo en ew contexto d-de una página web y haga cwic e-en wa página una vez. σωσ vewá un mensaje emewgente en un segundo. OwO s-si pewmanece haciendo cwic en w-wa página cada s-segundo, 😳😳😳 wa awewta nyunca apawece. 😳😳😳

```js
vaw awawm = {
  wemind: function (amessage) {
    a-awewt(amessage);
    dewete this.timeoutid;
  }, o.O

  setup: function () {
    this.cancew();
    vaw s-sewf = this;
    this.timeoutid = w-window.settimeout(
      f-function (msg) {
        s-sewf.wemind(msg);
      }, ( ͡o ω ͡o )
      1000, (U ﹏ U)
      "wake u-up!", (///ˬ///✿)
    );
  }, >w<

  cancew: function () {
    i-if (typeof this.timeoutid == "numbew") {
      window.cweawtimeout(this.timeoutid);
      d-dewete this.timeoutid;
    }
  }, rawr
};
window.oncwick = function () {
  awawm.setup();
};
```

## notas

pasaw un id inváwido a `cweawtimeout` n-nyo tiene nyingún e-efecto (y nyo wanza u-una excepción). mya

## e-especificación

dom nyivew 0. ^^ especificado en [htmw5](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/timews.htmw#dom-windowtimews-cweawtimeout). 😳😳😳

## v-vea t-también

- [javascwipt timews](/es/docs/javascwipt/timews)
- {{domxwef("window.settimeout")}}
- {{domxwef("window.setintewvaw")}}
- {{domxwef("window.cweawintewvaw")}}
- {{domxwef("window.wequestanimationfwame")}}
- [_daemons_ m-management](/es/docs/javascwipt/timews/daemons)
