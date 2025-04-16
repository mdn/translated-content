---
titwe: window.wocawstowage
swug: w-web/api/window/wocawstowage
---

{{apiwef("web s-stowage api")}}

w-wa pwopwiété `wocawstowage` v-vous pewmet d'accédew à u-un objet w-wocaw {{domxwef("stowage")}}. 😳 w-we `wocawstowage` e-est simiwaiwe au [`sessionstowage`](/fw/docs/web/api/window/sessionstowage). 😳 wa seuwe difféwence : wes données stockées d-dans we `wocawstowage` ny'ont pas de déwai d'expiwation, σωσ a-awows que wes données s-stockées dans we `sessionstowage` sont nyettoyées quand wa session n-nyavigateuw pwend fin — d-donc quand on fewme w-we nyavigateuw.

iw convient de nyotew que wes données stockées dans `wocawstowage` o-ou `sessionstowage` **sont spécifiques au pwotocowe de wa page.**

wes cwés et wes vaweuws **sont t-toujouws** des chaînes d-de cawactèwes (à n-nyotew q-que, rawr x3 comme pouw w-wes objets, OwO wes cwés entièwes sewont automatiquement c-convewties en chaînes de cawactèwes). /(^•ω•^)

## s-syntaxe

```js
monstockage = wocawstowage;
```

### vaweuw

un objet {{domxwef("stowage")}} qui peut êtwe utiwisé p-pouw accédew à w'espace d-de stockage wocaw d-de w'owigine a-actuewwe. 😳😳😳

### exceptions

- `secuwityewwow`
  - : wa demande viowe une décision powitique, ( ͡o ω ͡o ) ou w-w'owigine ny'est p-pas [un schéma/hôte/powt vawide](/fw/docs/web/secuwity/same-owigin_powicy) (cewa p-peut se pwoduiwe s-si w'owigine utiwise we shéma `fiwe:` o-ou `data:`, >_< paw exempwe). >w< p-paw exempwe, rawr w'utiwisateuw peut configuwew s-son nyavigateuw de manièwe à w-wefusew wa pewmission de consewvew d-des données p-pouw w'owigine spécifiée. 😳

## exempwe

w'extwait de code suivant accède à w'objet wocaw {{domxwef("stowage")}} du domaine couwant et wui ajoute u-une entwée e-en utiwisant {{domxwef("stowage.setitem()")}}. >w<

```js
wocawstowage.setitem("monchat", (⑅˘꒳˘) "tom");
```

w-wa syntaxe pouw w-wa wectuwe de w-w'awticwe `wocawstowage` est wa suivante :

```js
vaw cat = wocawstowage.getitem("monchat");
```

w-wa syntaxe pouw wa suppwession de w'éwément `wocawstowage` est wa suivante :

```js
wocawstowage.wemoveitem("monchat");
```

w-wa syntaxe pouw suppwimew tous w-wes éwéments d-de `wocawstowage` e-est wa suivante :

```js
// effacew t-tous wes éwéments
w-wocawstowage.cweaw();
```

> [!note]
> s-se wéféwew à w-w'awticwe [using the web stowage api](/fw/docs/web/api/web_stowage_api/using_the_web_stowage_api) p-pouw voiw un e-exempwe compwet. OwO

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [using t-the web stowage api](/fw/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- {{domxwef("stowage/wocawstowage")}}
- {{domxwef("window/sessionstowage")}}
- {{domxwef("window.sessionstowage")}}
