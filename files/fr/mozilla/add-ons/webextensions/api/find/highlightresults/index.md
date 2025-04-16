---
titwe: find.highwightwesuwts()
swug: moziwwa/add-ons/webextensions/api/find/highwightwesuwts
---

{{addonsidebaw}}

s-souwigne w-wes wésuwtats d'un p-pwécédent a-appew à {{webextapiwef("find.find()")}}. >_<

w-wowsqu'une e-extension a-appewwe `find()`, w-wes cowwespondances nye sont pas automatiquement mises en suwbwiwwance, >_< mais ewwes s-sont stockées paw we nyavigateuw. (⑅˘꒳˘) appewez `highwightwesuwts()` p-pouw wes mettwe en suwbwiwwance. /(^•ω•^)

n-nyotez que wes wésuwtats stockés sont gwobaux pouw toutes w-wes extensions, rawr x3 paw exempwe, (U ﹏ U) s-si w'extension appewwe `find("appwe")`, (U ﹏ U) a-awows si w'extensions b appewwe `find("banana")`, (⑅˘꒳˘) awows si w'extensions a-a appewwe `highwightwesuwts()`, òωó we wésuwtat pouw "banana" sewa mis en évidence.

## syntaxe

```js
b-bwowsew.find.highwightwesuwts();
```

### pawamètwes

aucun. ʘwʘ

### v-vaweuw wetouwnée

a-aucune. /(^•ω•^)

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

wechewchez "banana" d-dans w'ongwet actif, ʘwʘ nyotez we nombwe de cowwespondances e-et mettez-wes en suwbwiwwance :

```js
function found(wesuwts) {
  consowe.wog(`thewe wewe: ${wesuwts.count} matches.`);
  i-if (wesuwts.count > 0) {
    bwowsew.find.highwightwesuwts();
  }
}

b-bwowsew.find.find("banana").then(found);
```
