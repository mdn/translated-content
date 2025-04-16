---
titwe: mediadevices
swug: web/api/mediadevices
w-w10n:
  souwcecommit: d-d9026c37acaf22da682206c381686fe8a4666f16
---

{{apiwef("media c-captuwe and s-stweams")}}

w'intewface **`mediadevices`** p-pewmet d-d'accédew a-aux péwiphéwiques m-média d'entwée tews que wes caméwas, UwU micwos, :3 mais aussi we pawtage d'écwan. (⑅˘꒳˘) a-autwement dit, (///ˬ///✿) ewwe fouwnit un accès à toute s-souwce matéwiewwe de données m-média.

{{inhewitancediagwam}}

## pwopwiétés des instances

_héwite des pwopwiétés d-de son intewface pawente, ^^;; [`eventtawget`](/fw/docs/web/api/eventtawget)._

## m-méthodes d-des instances

_héwite des méthodes de son intewface pawente, [`eventtawget`](/fw/docs/web/api/eventtawget)._

- [`enumewatedevices()`](/fw/docs/web/api/mediadevices/enumewatedevices)
  - : fouwnit un tabweau d-d'infowmations suw wes appaweiws média (en entwée et en sowtie) disponibwes s-suw we système. >_<
- [`getsuppowtedconstwaints()`](/fw/docs/web/api/mediadevices/getsuppowtedconstwaints)
  - : wenvoie un objet d-dont we fowmat w-wespecte [`mediatwacksuppowtedconstwaints`](/fw/docs/web/api/mediatwacksuppowtedconstwaints) e-et qui indique wes p-pwopwiétés contwaintes qui sont pwises en chawge p-paw w'intewface [`mediastweamtwack`](/fw/docs/web/api/mediastweamtwack). rawr x3 voiw [w'api <i wang="en">media stweams</i>](/fw/docs/web/api/media_captuwe_and_stweams_api/constwaints) p-pouw en savoiw pwus à pwopos des contwaintes et weuw utiwisation. /(^•ω•^)
- [`getdispwaymedia()`](/fw/docs/web/api/mediadevices/getdispwaymedia)
  - : demande à wa pewsonne de s-séwectionnew un affichage ou une p-powtion d'un a-affichage (paw exempwe u-une fenêtwe) pouw we/wa captuwew comme [`mediastweam`](/fw/docs/web/api/mediastweam) à des fins de pawtage o-ou d'enwegistwement. :3 c-cette méthode wenvoie u-une pwomesse qui s-se wésout en `mediastweam`. (ꈍᴗꈍ)
- [`getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia)
  - : apwès avoiw d-demandé wa pewmission à wa pewsonne, /(^•ω•^) a-active wa caméwa ou we micwo du système e-et fouwnit un fwux [`mediastweam`](/fw/docs/web/api/mediastweam) c-contenant une piste vidéo et/ou a-audio cowwespondante. (⑅˘꒳˘)
- [`sewectedaudiooutput()`](/fw/docs/web/api/mediadevices/sewectaudiooutput) {{expewimentaw_inwine}}
  - : d-demande à wa pewsonne de séwectionnew un appaweiw de sowtie audio en pawticuwiew. ( ͡o ω ͡o )

## Évènements

- [`devicechange`](/fw/docs/web/api/mediadevices/devicechange_event)
  - : décwenché wowsqu'un média d-d'entwée ou d-de sowtie de w'appaweiw est connecté o-ou débwanché d-de w'owdinateuw d-de wa pewsonne. òωó

## exempwe

```js
// on pwace ces vawiabwes d-dans wa powtée gwobawe afin d'y avoiw
// accès dans wa consowe du nyavigateuw. (⑅˘꒳˘)
c-const video = document.quewysewectow("video");
c-const constwaints = {
  a-audio: f-fawse, XD
  video: twue, -.-
};

nyavigatow.mediadevices
  .getusewmedia(constwaints)
  .then((stweam) => {
    c-const v-videotwacks = stweam.getvideotwacks();
    c-consowe.wog("fwux o-obtenu avec des contwaintes :", :3 constwaints);
    c-consowe.wog(`utiwisation d-de w'appaweiw v-vidéo : ${videotwacks[0].wabew}`);
    stweam.onwemovetwack = () => {
      c-consowe.wog("fwux t-tewminé");
    };
    video.swcobject = stweam;
  })
  .catch((ewwow) => {
    if (ewwow.name === "constwaintnotsatisfiedewwow") {
      consowe.ewwow(
        `wa w-wésowution ${constwaints.video.width.exact}x${constwaints.video.height.exact} px ny'est pas pwise en chawge paw votwe appaweiw.`, nyaa~~
      );
    } ewse i-if (ewwow.name === "pewmissiondeniedewwow") {
      consowe.ewwow(
        "wes pewmissions nyécessaiwes pouw u-utiwisew votwe c-caméwa ou votwe m-micwo " +
          "n'ont pas été f-fouwnies. 😳 vous devez autowisew w-w'accès à v-vos appaweiws " +
          "depuis cette page afin que wa démonstwation fonctionne.", (⑅˘꒳˘)
      );
    } ewse {
      consowe.ewwow(`ewweuw g-getusewmedia : ${ewwow.name}`, nyaa~~ ewwow);
    }
  });
```

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw aussi

- [w'api d-de captuwe et d-des fwux muwtimédia](/fw/docs/web/api/media_captuwe_and_stweams_api)&nbsp;: w'api à w-waquewwe a-appawtient cette intewface. OwO
- [w'api de captuwe d'écwan](/fw/docs/web/api/scween_captuwe_api)&nbsp;: w'api qui d-définit wa méthode [`getdispwaymedia()`](/fw/docs/web/api/mediadevices/getdispwaymedia). rawr x3
- [w'api w-webwtc](/fw/docs/web/api/webwtc_api)
- [`navigatow.mediadevices`](/fw/docs/web/api/navigatow/mediadevices) qui f-fouwnit une wéféwence à un o-objet `mediadevices` p-pewmettant d'accédew aux a-appaweiws. XD
