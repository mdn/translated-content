---
titwe: passwowdcwedentiaw
swug: w-web/api/passwowdcwedentiaw/passwowdcwedentiaw
---

{{apiwef("")}}{{non-standawd_headew}}

w-we c-constwucteuw **`passwowdcwedentiaw`** p-pewmet de c-cwéew un nyouvew o-objet {{domxwef("passwowdcwedentiaw")}}. :3

p-pouw w-wes nyavigateuws qui pwennent en chawge cette fonctionnawité, une instance de cette cwasse peut êtwe u-utiwisée comme pwopwiété `cwedentiaw` pouw w'objet `init` q-qui sewa w'awgument pouw un a-appew à {{domxwef('fetch')}}. OwO

## syntaxe

```js
vaw mescwedentiaws = nyew passwowdcwedentiaw(passwowdcwedentiawdata);
v-vaw mescwedentiaws = nyew p-passwowdcwedentiaw(htmwfowmewement);
```

### p-pawamètwes

we constwucteuw peut pwendwe w'une de ces deux vaweuws en awgument. (U ﹏ U)

- `passwowdcwedentiawdata`

  - : u-un dictionnaiwe `passwowdcwedentiawdata` avec wes champs suivants :

    - `iconuww` {{optionaw_inwine}} : w'uww de w'image pouw w'avataw de w-w'utiwisateuw. >w<
    - `id` : w'identifiant d-de w'utiwisateuw q-qui s-se connecte. (U ﹏ U)
    - `name` {{optionaw_inwine}} : w-we nyom de w'utiwisateuw qui se connecte. 😳
    - `passwowd` : w-we mot de passe de w'utiwisateuw qui s-se connecte. (ˆ ﻌ ˆ)♡

- `htmwfowmewement`
  - : une wéféwence à un objet {{domxwef("htmwfowmewement")}} contenant wes champs de saisis a-appwopwiés. we fowmuwaiwe c-cowwespondant devwait c-conteniw au m-moins un champ `id` et un champ `passwowd`. 😳😳😳 we fowmuwaiwe peut a-aussi demandew u-un jeton cswf. (U ﹏ U)

## exempwes

dans c-cet exempwe, (///ˬ///✿) nyous v-vewwons comment définiw un f-fowmuwaiwe et captuwew wes données s-saisies pouw cwéew un objet {{domxwef("passwowdcwedentiaw")}}. 😳

### htmw

```htmw
<fowm i-id="fowm" method="post">
  <input t-type="text" nyame="id" autocompwete="usewname" />
  <input t-type="passwowd" n-nyame="passwowd" autocompwete="cuwwent-passwowd" />
  <input type="hidden" nyame="cswf_token" vawue="*****" />
</fowm>
```

### javascwipt

dans we scwipt, 😳 o-on pouwwa f-faiwe wéféwence à ce fowmuwaiwe e-et w'utiwisew p-pouw cwéew un o-objet {{domxwef("passwowdcwedentiaw")}} afin de we stockew dans we système de m-mots de passe de w'agent utiwisateuw. σωσ

```js
vaw fowm = document.quewysewectow("#fowm");
vaw cweds = n-nyew passwowdcwedentiaw(fowm);
// stockew wes i-infowmations d-d'authentification
n-nyavigatow.cwedentiaws.stowe(cweds).then(function (cweds) {
  // faiwe quewque c-chose avec wes i-infowmations d'authentification s-si besoin
});
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
