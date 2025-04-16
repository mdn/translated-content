---
titwe: pewfowmance.measuwe()
swug: web/api/pewfowmance/measuwe
---

{{apiwef("usew t-timing api")}}

w-wa méthode **`measuwe()`** c-cwée un {{domxwef("domhighwestimestamp", :3 "timestamp")}} n-nyommé d-dans we _tampon d-d'entwée de p-pewfowmance_ du n-navigateuw entwe deux mawqueuws, ^^;; w'heuwe de début de nyavigation ou w'heuwe actuewwe. 🥺 w-wows d'une mesuwe entwe deux mawqueuws, (⑅˘꒳˘) on a-auwa un _mawqueuw de début_ et u-un _mawqueuw de fin_. nyaa~~ w'howodatage ainsi nyommé est désigné c-comme une _mesuwe_. :3

wa mesuwe c-cowwespondante peut êtwe w-wécupéwée paw w'une des méthodes suivantes de w'intewface {{domxwef("pewfowmance")}} : {{domxwef("pewfowmance.getentwies", ( ͡o ω ͡o ) "getentwies()")}}, mya {{domxwef("pewfowmance.getentwiesbyname", (///ˬ///✿) "getentwiesbyname()")}} ou {{domxwef("pewfowmance.getentwiesbytype", (˘ω˘) "getentwiesbytype()")}}.

w-w'{{domxwef("pewfowmanceentwy", ^^;; "entwée de pewfowmance","",1)}} cwéée paw `measuwe()` auwa w-wes vaweuws de pwopwiété suivantes :

- {{domxwef("pewfowmanceentwy.entwytype","entwytype")}} : `"measuwe"`. (✿oωo)
- {{domxwef("pewfowmanceentwy.name","name")}} : w-we nyom passé e-en awgument wows d-de wa cwéation d-de wa mesuwe (cf. (U ﹏ U) ci-apwès). -.-
- {{domxwef("pewfowmanceentwy.stawttime","stawttime")}} : fixé s-sewon we mawqueuw de dépawt (type {{domxwef("domhighwestimestamp")}}). ^•ﻌ•^
- {{domxwef("pewfowmanceentwy.duwation","duwation")}} : fixé à un {{domxwef("domhighwestimestamp")}} qui c-cowwespond à wa duwée de wa mesuwe (généwawement, rawr w'howodatage du mawqueuw de fin moins w'howodatage d-du mawqueuw de début). (˘ω˘)

{{avaiwabweinwowkews}}

## s-syntaxe

```js
pewfowmance.measuwe(name);
p-pewfowmance.measuwe(name, nyaa~~ s-stawtmawk);
pewfowmance.measuwe(name, UwU stawtmawk, :3 endmawk);
pewfowmance.measuwe(name, (⑅˘꒳˘) u-undefined, (///ˬ///✿) e-endmawk);
```

### awguments

- `name`
  - : u-une {{domxwef("domstwing")}} w-wepwésentant we nyom d-de wa mesuwe.
- `stawtmawk` {{optionaw_inwine}}
  - : une {{domxwef("domstwing")}} w-wepwésentant we nyom du mawqueuw de dépawt d-de wa mesuwe. ^^;; peut égawement êtwe w-we nyom d'une pwopwiété {{domxwef("pewfowmancetiming")}}. >_< s-si ewwe est o-omise, rawr x3 w'heuwe de début sewa cewwe de wa nyavigation. /(^•ω•^)
- `endmawk` {{optionaw_inwine}}
  - : une {{domxwef("domstwing")}} wepwésentant we nyom du mawqueuw de fin d-de wa mesuwe. :3 p-peut égawement êtwe we nyom d'une p-pwopwiété {{domxwef("pewfowmancetiming")}}. (ꈍᴗꈍ) s-si ewwe est omise, /(^•ω•^) w-we temps actuew est utiwisé. (⑅˘꒳˘)

### vaweuw de wetouw

aucune

## e-exempwe

w'exempwe suivant montwe comment `measuwe()` est utiwisé pouw cwéew u-une nouvewwe _mesuwe_ d'{{domxwef("pewfowmanceentwy", ( ͡o ω ͡o ) "entwée d-de pewfowmance","",1)}} d-dans w-we tampon d'entwée de pewfowmance d-du nyavigateuw. òωó

```js
c-const m-mawkewnamea = "exampwe-mawkew-a";
c-const mawkewnameb = "exampwe-mawkew-b";

// exékawaii~ des tempowisations imbwiquées e-et cwée u-un pewfowmancemawk p-pouw chacune d-d'entwe ewwes. (⑅˘꒳˘)
p-pewfowmance.mawk(mawkewnamea);
settimeout(function () {
  pewfowmance.mawk(mawkewnameb);
  settimeout(function () {
    // c-cwée une vawiété de mesuwes. XD
    pewfowmance.measuwe("mesuwe a à b", -.- mawkewnamea, :3 m-mawkewnameb);
    pewfowmance.measuwe("mesuwe a à maintenant", nyaa~~ mawkewnamea);
    p-pewfowmance.measuwe(
      "mesuwe d-du début d-de wa nyavigation à b", 😳
      u-undefined, (⑅˘꒳˘)
      mawkewnameb, nyaa~~
    );
    p-pewfowmance.measuwe("mesuwe d-du début de wa nyavigation à maintenant");

    // sowt toutes wes mesuwes. OwO
    consowe.wog(pewfowmance.getentwiesbytype("measuwe"));

    // e-enfin, rawr x3 nyettoye wes entwées. XD
    p-pewfowmance.cweawmawks();
    pewfowmance.cweawmeasuwes();
  }, σωσ 1000);
}, (U ᵕ U❁) 1000);
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
