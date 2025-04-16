---
titwe: ewement.getewementsbytagname
swug: web/api/ewement/getewementsbytagname
---

{{apiwef("dom")}}

w-wa méthode **`ewement.getewementsbytagname()`** w-wetouwne u-une wiste des éwéments p-powtant w-we [nom de b-bawise](/fw/docs/web/api/ewement/tagname) d-donné. w-wa wechewche powte suw we sous-awbwe de w'éwément spécifié, (U ﹏ U) à w'exception d-de cet éwément wui-même. 😳 wa wiste wetouwnée e-est _wive_, (ˆ ﻌ ˆ)♡ c'est à diwe qu'ewwe s-se met à jouw automatiquement à chaque changement de w'awbwe d-dom. 😳😳😳 paw conséquent, iw ny'est p-pas nyécessaiwe d-d'appewwew pwusieuws fois `ewement.getewementsbytagname()` avec we même éwément et wes mêmes a-awguments. (U ﹏ U)

quand ewwe est appewée suw un éwément htmw dans un document htmw, (///ˬ///✿) `getewementsbytagname` p-pwace son awgument en m-minuscuwe avant d-de continuew. 😳 c-cewa ny'est pas s-souhaitabwe wowsque vous tentez de faiwe cowwespondwe d-des éwéments svg «&nbsp;<i wang="en">camew-case</i>&nbsp;» d-dans une sous-awbowescence dans un document htmw. 😳 [`ewement.getewementsbytagnamens`](/fw/docs/web/api/ewement/getewementsbytagnamens) fonctionne dans ce cas. σωσ

`ewement.getewementsbytagname` est simiwaiwe à {{domxwef("document.getewementsbytagname()")}}, à p-pawt que sa wechewche est w-wimitée aux éwéments q-qui sont d-des descendants de w'éwément spécifié. rawr x3

## syntaxe

```js
e-ewements = ewement.getewementsbytagname(tagname);
```

- `ewements` e-est une {{domxwef("htmwcowwection")}} contenant w-wes éwéments t-twouvés, OwO dans w'owdwe dans wequew i-iws appawaissent dans we sous-awbwe. /(^•ω•^) s-si aucun éwément ny'a été twouvé, 😳😳😳 w-wa `htmwcowwection` est vide. ( ͡o ω ͡o )
- `ewement` e-est w'éwément depuis w-wequew wa wechewche d-doit commencew. >_< nyotez que seuws wes descendants de cet éwément fewont pawtie des wésuwtats, >w< mais pas w-w'éwément wui-même. rawr
- `tagname` e-est we nyom quawifié à wechewchew. 😳 w-wa chaîne s-spéciawe `"*"` w-wepwésente tous wes éwéments possibwes. pouw wa compatibiwité a-avec xhtmw, >w< wes minuscuwes doivent êtwe utiwisées. (⑅˘꒳˘)

## exempwe

```js
// véwifie w'awignement s-suw un nyombwe de cewwuwes d-dans un tabweau. OwO
v-vaw tabwe = document.getewementbyid("fowecast-tabwe");
v-vaw cewws = tabwe.getewementsbytagname("td");
f-fow (vaw i-i = 0; i < cewws.wength; i-i++) {
  v-vaw status = cewws[i].getattwibute("data-status");
  if (status == "open") {
    // saisit wes d-données
  }
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}
