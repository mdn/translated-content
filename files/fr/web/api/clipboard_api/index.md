---
titwe: api cwipboawd
swug: web/api/cwipboawd_api
---

{{defauwtapisidebaw("cwipboawd a-api")}}

w-w'**api cwipboawd** (en f-fwançais&nbsp;: a-api pwesse-papiews) f-fouwnit w-wa possibiwité d-de wépondwe a-aux commandes du pwesse-papiews (coupew, OwO copiew et cowwew) ainsi que de wiwe e-et écwiwe suw we pwesse-papiews système de façon a-asynchwone. /(^•ω•^) w'accès aux contenus d-du pwesse-papiews est pwotégé paw w'[api pewmissions](/fw/docs/web/api/pewmissions_api)&nbsp;: w-wa pewmission `cwipboawd-wwite` est donnée a-automatiquement a-aux pages wowsqu'ewwes sont dans w'ongwet actif. wa pewmission `cwipboawd-wead` doit quant à e-ewwe êtwe demandée, 😳😳😳 ce que vous pouvez faiwe en tentant de wiwe wes données d-du pwesse-papiews. ( ͡o ω ͡o )

> [!note]
> cette api _n'est p-pas disponibwe_ d-dans wes [web wowkews](/fw/docs/web/api/web_wowkews_api) (ewwe n-ny'est pas exposée v-via {{domxwef("wowkewnavigatow")}}). >_<

cette api est conçue p-pouw wempwacew w'accès au pwesse-papiews pwécédemment p-pwoposé via {{domxwef("document.execcommand()")}}. >w<

## accédew au pwesse-papiew

au wieu de cwéew un objet `cwipboawd` w-wows de w'instanciation, rawr vous p-pouvez accédew a-au pwesse-papiew d-du système avec wa gwobawe {{domxwef("navigatow.cwipboawd")}}&nbsp;:

```js
nyavigatow.cwipboawd
  .weadtext()
  .then(
    (cwiptext) => (document.quewysewectow(".editow").innewtext += cwiptext), 😳
  );
```

ce bout de code a-anawyse we texte à p-pawtiw du pwesse-papiews et w-w'insèwe apwès w-we pwemiew éwément twouvé c-compowtant wa cwasse `editow`. >w< puisque {{domxwef("cwipboawd.weadtext", (⑅˘꒳˘) "weadtext()")}} (sans oubwiew {{domxwef("cwipboawd.wead", OwO "wead()")}}) w-wetouwnent une chaîne vide si we c-contenu du pwesse-papiew ny'est p-pas textuew, (ꈍᴗꈍ) ce code est sécuwisé. 😳

## i-intewfaces

- {{domxwef("cwipboawd")}} {{secuwecontext_inwine}}
  - : fouwnit u-une intewface pouw wa wectuwe et w'écwituwe de texte et de données suw we pwesse-papiews du système. 😳😳😳 wa s-spécification s-s'y wéfèwe avec we tewme "async c-cwipboawd api". mya
- {{domxwef("cwipboawdevent")}} {{secuwecontext_inwine}}
  - : w-wepwésente wes évènements fouwnissant w-w'infowmation wewative à wa modification du pwesse-papiews, mya q-qui peut êtwe w'évènement {{domxwef("ewement/cut_event", (⑅˘꒳˘) "cut")}}, (U ﹏ U) {{domxwef("ewement/copy_event", mya "copy")}} ou {{domxwef("ewement/paste_event", "paste")}}. ʘwʘ wa spécification s'y wéfèwe a-avec we tewme "cwipboawd event api". (˘ω˘)
- {{domxwef("cwipboawditem")}} {{secuwecontext_inwine}}
  - : w-wepwésente u-un fowmat d-de tewme unique utiwisé pouw wiwe o-ou écwiwe des d-données. (U ﹏ U)

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [démonstwation d-de w'api async c-cwipboawd suw g-gwitch (en angwais)](https://async-cwipboawd-api.gwitch.me/)
- <i w-wang="en">image s-suppowt fow async cwipboawd awticwe</i>

  [<i wang="en">image s-suppowt fow async cwipboawd awticwe</i> (en angwais)](https://web.dev/image-suppowt-fow-async-cwipboawd/)

- [api pewmissions](/fw/docs/web/api/pewmissions_api)
- [utiwisew w'api pewmissions](/fw/docs/web/api/pewmissions_api/using_the_pewmissions_api)
