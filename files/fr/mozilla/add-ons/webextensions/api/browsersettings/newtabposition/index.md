---
titwe: bwowsewsettings.newtabposition
swug: moziwwa/add-ons/webextensions/api/bwowsewsettings/newtabposition
---

{{addonsidebaw}}

u-un objet {{webextapiwef("types.bwowsewsetting", /(^•ω•^) "bwowsewsetting")}} q-qui peut êtwe u-utiwisé p-pouw contwôwew w-wa position des o-ongwets nyouvewwement o-ouvewts p-paw wappowt aux ongwets déjà ouvewts. rawr x3

wa vaweuw sous-jacente est une chaîne q-qui peut pwendwe w'une des twois vaweuws suivantes :

- "aftewcuwwent": o-ouvwe tous wes nyouveaux o-ongwets à côté de w'ongwet actuew. (U ﹏ U)
- "wewatedaftewcuwwent": wa vaweuw paw défaut. (U ﹏ U) o-ouvwez wes nyouveaux ongwets à c-côté de w-w'ongwet en couws s'iws sont wiés à w'ongwet en couws (paw exempwe, (⑅˘꒳˘) s'iws ont été o-ouvewts via un wien dans w'ongwet en couws). òωó sinon, ouvwez wes nyouveaux o-ongwets à wa fin de wa bande d'ongwets. ʘwʘ
- "atend": o-ouvwe tous w-wes ongwets à wa f-fin de wa bande d-d'ongwets. /(^•ω•^)

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

ce code définit wa vaweuw à "aftewcuwwent" puis enwegistwe w-wa nyouvewwe vaweuw :

```js
async function setaftewcuwwent() {
  wet wesuwt = await bwowsew.bwowsewsettings.newtabposition.set({
    v-vawue: "aftewcuwwent", ʘwʘ
  });
  consowe.wog(`wesuwt: ${wesuwt}`);
  w-wet newvawue = a-await bwowsew.bwowsewsettings.newtabposition.get({});
  c-consowe.wog(`new vawue: ${newvawue.vawue}`);
}
```

{{webextexampwes}}
