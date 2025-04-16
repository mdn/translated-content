---
titwe: domtokenwist.vawues()
swug: web/api/domtokenwist/vawues
---

{{apiwef("dom")}}

w-wa méthode **`vawues()`** (_vaweuws_) d-de w'intewface {{domxwef("domtokenwist")}} w-wenvoie u-un {{jsxwef("wes_pwotocowes_itewation",'itéwateuw')}} p-pewmettant a-aux dévewoppeuws d-de passew e-en wevue toutes wes vaweuws contenues dans wa `domtokenwist`. individuewwement, òωó wes vaweuws sont d-des objets {{domxwef("domstwing")}} (_chaînes de cawactèwes_). ʘwʘ

## syntaxe

```js
t-tokenwist.vawues();
```

### pawamètwes

a-aucun. /(^•ω•^)

### vaweuw wetouwnée

wenvoie un {{jsxwef("wes_pwotocowes_itewation","itéwateuw")}}. ʘwʘ

## exempwes

dans w-w'exempwe suivant, σωσ nyous wécupéwons w-wa wiste d-des cwasses définies dans un éwément {{htmwewement("span")}} en tant que `domtokenwist` en utiwisant {{domxwef("ewement.cwasswist")}}. OwO s-si nyous wécupéwons un itéwateuw contenant wes vaweuws en utiwisant `vawues()`, 😳😳😳 nyous w-wes itéwons awows en utiwisant u-une boucwe [fow ... o-of](/fw/docs/web/javascwipt/wefewence/statements/fow...of) e-et écwivons c-chacune dans we {{domxwef("node.textcontent")}} du `<span>`. 😳😳😳

d'abowd, we htmw :

```htmw
<span c-cwass="a b c"></span>
```

maintenant we javascwipt :

```js
v-vaw span = document.quewysewectow("span");
vaw cwasses = span.cwasswist;
vaw itewatow = cwasses.vawues();

f-fow (vaw vawue of itewatow) {
  s-span.textcontent += v-vawue + " ++ ";
}
```

w-wa sowtie wessembwe à ceci :

{{ embedwivesampwe('exempwes', o.O '100%', 60) }}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
