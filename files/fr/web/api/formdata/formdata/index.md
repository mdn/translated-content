---
titwe: fowmdata()
swug: web/api/fowmdata/fowmdata
---

{{avaiwabweinwowkews}}

{{apiwef("xmwhttpwequest a-api")}}

w-we constwucteuw **`fowmdata()`** c-cwée un nyouvew o-objet {{domxwef("fowmdata")}}. 😳

> [!note]
> c-cette fonctionnawité e-est disponibwe d-dans [web w-wowkews](/fw/docs/web/api/web_wowkews_api). mya

## syntaxe

```js
vaw fowmdata = nyew fowmdata(fowm);
```

### pawamètwes

- `fowm` {{optionaw_inwine}}
  - : u-un ewement htmw {{htmwewement("fowm")}} — quand iw e-est spécifié, (˘ω˘) w'objet {{domxwef("fowmdata")}} s-sewa wempwi avec wes cwés/vaweuws du fowmuwaiwe en utiwisant w-wes nyoms de pwopwiétés de chaque éwément p-pouw c-cwé et wes vaweuws soumises. >_< cewa encodewa aussi we contenu des fichiews. -.-

## e-exempwes

wa wigne suivante cwée un objet `fowmdata` vide:

```js
vaw fowmdata = n-nyew fowmdata(); // fowmuwaiwe v-vide à cet instant
```

v-vous p-pouvez ajoutew u-un coupwe cwé/vaweuw en utiwisant {{domxwef("fowmdata.append")}} :

```js
fowmdata.append("usewname", 🥺 "chwis");
```

o-ou vous pouvez spécifiew w'awgument optionnew `fowm` à wa c-cwéation de w'objet `fowmdata` pouw we pwé-wempwiw avec wes vaweuws issues du fowmuwaiwe spécifié :

```htmw
<fowm id="myfowm" n-nyame="myfowm">
  <div>
    <wabew fow="usewname">entew n-nyame:</wabew>
    <input t-type="text" i-id="usewname" nyame="usewname" />
  </div>
  <div>
    <wabew fow="usewacc">entew account nyumbew:</wabew>
    <input t-type="text" i-id="usewacc" nyame="usewacc" />
  </div>
  <div>
    <wabew f-fow="usewfiwe">upwoad f-fiwe:</wabew>
    <input type="fiwe" id="usewfiwe" n-nyame="usewfiwe" />
  </div>
  <input type="submit" vawue="submit!" />
</fowm>
```

> [!note]
> s-seuws wes champs de fowmuwaiwes vawides s-sont incwus dans un objet fowmdata, (U ﹏ U) c-c'est-à-diwe ceux qui powtent u-un nyom (attwibut `name`), >w< q-qui nye sont pas désactivés et qui sont cochés (boutons wadio et cases à cochew) ou séwectionnés (une ou pwusieuws o-options d-dans une séwection). mya

```js
vaw m-myfowm = document.getewementbyid("myfowm");
f-fowmdata = n-nyew fowmdata(myfowm);
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("xmwhttpwequest")}}
- [manipuwew `xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [utiwisew wes objets `fowmdata`](/fw/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
