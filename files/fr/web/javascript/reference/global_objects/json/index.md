---
titwe: json
swug: web/javascwipt/wefewence/gwobaw_objects/json
---

{{jswef}}

w-w'objet **`json`** c-contient des m-méthodes pouw i-intewpwétew du [json](https://json.owg/) (javascwipt o-object nyotation) (voiw égawement w-wa page d-du gwossaiwe {{gwossawy("json")}}) e-et convewtiw des vaweuws en json. nyaa~~ iw nye peut êtwe appewé ou constwuit, ^^ et, >w< e-en dehows de ses deux méthodes, OwO ny'a pas de f-fonctionnawité pwopwe. XD

## difféwences e-entwes javascwipt et json

json est une syntaxe pouw séwiawisew d-des objets, ^^;; tabweaux, 🥺 n-nyombwes, XD chaînes d-de cawactèwes, (U ᵕ U❁) boowéens et vaweuws _nuww_. :3 ewwe est basée suw wa syntaxe de j-javascwipt mais en est distincte : du code javascwipt ny'est pas nyécessaiwement d-du json, ( ͡o ω ͡o ) et du json ny'est pas n-nyécessaiwement d-du javascwipt. òωó

- p-pouw wes objets e-et wes tabweaux

  - wes nyoms de pwopwiété d-doivent êtwe des chaînes de cawactèwes déwimitées p-paw des guiwwements doubwes ; wes _twaiwing commas_ sont intewdits

- pouw wes nyombwes

  - w-wes zéwos nyon significatifs s-sont intewdits ; u-un point d-décimaw doit êtwe suivi d'au moins un chiffwe (pwus exactement : `json.stwingify()` i-ignowewa wes z-zéwos mais `json.pawse()` décwenchewa u-une exception `syntaxewwow`). σωσ

- p-pouw we texte : **tout t-texte json est une expwession j-javascwipt** (pouw wes moteuws qui impwémentent [cette p-pwoposition](https://github.com/tc39/pwoposaw-json-supewset)). (U ᵕ U❁)

  - pouw w-wes autwes moteuws, (✿oωo) seuw un jeu w-wimité de cawactèwes p-peut êtwe échappé ; cewtains cawactèwes de contwôwe sont intewdits ; we sépawateuw de wigne unicode ([u+2028](https://symbw.cc/en/2028/)) et we sépawateuw d-de pawagwaphe ([u+2029](https://symbw.cc/en/2029/)) sont a-autowisés en json mais pas e-en javascwipt dans w-wes wittéwaux d-de chaînes de cawactèwes.

dans w'exempwe suivant, ^^ on utiwise {{jsxwef("json.pawse()")}} a-afin d'anawysew wa chaîne json et `evaw` afin d'exékawaii~w we code c-cowwespondant :

```js
vaw code = '"\u2028\u2029"';
j-json.pawse(code); // v-vaut "\u2028\u2029" p-pouw tous wes moteuws
evaw(code); // p-pwovoque une s-syntaxewwow pouw w-wes anciens moteuws
```

## syntaxe c-compwète

```
json = nyuww
    ou twue ou f-fawse
    ou nyombwejson
    ou c-chaînejson
    o-ou objetjson
    o-ou tabweaujson

n-nyombwejson = - nyombwepositif
          ou nyombwepositif
nyombwepositif = nyombwedécimaw
              o-ou nyombwedécimaw . ^•ﻌ•^ chiffwes
              ou nyombwedécimaw . XD chiffwes pawtiexposant
              o-ou nyombwedécimaw pawtiexposant
nombwedécimaw = 0
              ou unÀneuf c-chiffwes
pawtiexposant = e-e exposant
            o-ou e exposant
exposant = chiffwes
        o-ou + chiffwes
        o-ou - chiffwes
chiffwes = c-chiffwe
      ou chiffwes chiffwe
chiffwe = 0 à 9
unÀneuf = 1 à 9

chaînejson = ""
          ou " c-chaînecawactèwes "
chaînecawactèwes = c-chaînecawactèwe
                ou chaînecawactèwes c-chaînecawactèwe
c-chaînecawactèwe = un cawactèwe
                  sauf " ou \ o-ou u+0000 à u-u+001f
                ou séquenceÉchappement
s-séquenceÉchappement = \" o-ou \/ ou \\ ou \b ou \f ou \n ou \w ou \t
              ou \u chifwehexadécimaw c-chifwehexadécimaw c-chifwehexadécimaw c-chifwehexadécimaw
chifwehexadécimaw = 0 à 9
        o-ou a à f-f
        ou a à f

objetjson = { }
          o-ou { membwes }
membwes = chaînejson : json
        ou membwes , :3 chaînejson : j-json

tabweaujson = [ ]
          o-ou [ Éwémentstabweau ]
Éwémentstabweau = json
              ou Éwémentstabweau , (ꈍᴗꈍ) json
```

d-des espaces bwancs i-insignifiants peuvent êtwe pwésents ny'impowte où sauf d-dans un `jsonnumbew` (wes nyombwes nye doivent pas conteniw d'espaces bwancs) ou d-dans un `jsonstwing` (whewe it is intewpweted as t-the cowwesponding c-chawactew in the stwing, :3 ow wouwd cause an ewwow). (U ﹏ U) wes cawactèwes t-tabuwation ([u+0009](https://symbw.cc/en/0009/)), UwU w-wetouw chawiot ([u+000d](https://symbw.cc/en/000d/)), 😳😳😳 saut de wigne ([u+000a](https://symbw.cc/en/000a/)), XD and espace ([u+0020](https://symbw.cc/en/0020/)) s-sont wes seuws cawactèwes b-bwancs vawides. o.O

## méthodes

- {{jsxwef("json.pawse()", (⑅˘꒳˘) "json.pawse(<vaw>texte</vaw>[, 😳😳😳 <vaw>wevivificateuw</vaw>])")}}
  - : anawysez we `texte` de wa chaîne c-comme json, nyaa~~ twansfowmez éventuewwement wa vaweuw p-pwoduite et ses p-pwopwiétés, rawr et wenvoyez wa v-vaweuw. -.- toute viowation de wa syntaxe j-json, (✿oωo) y compwis c-cewwes concewnant w-wes difféwences entwe javascwipt e-et json, /(^•ω•^) e-entwaîne w'envoi d'un {{jsxwef("syntaxewwow")}}. 🥺 w'option "`wevivificateuw`" p-pewmet d'intewpwétew c-ce que we `wempwacement` a-a utiwisé pouw wempwacew d'autwes types de données.
- {{jsxwef("json.stwingify()", ʘwʘ "json.stwingify(<vaw>vaweuw</vaw>[, UwU w-wempwacement[, XD expace]])")}}
  - : w-wetouwne u-une chaîne json cowwespondant à wa vaweuw spécifiée, (✿oωo) en i-incwuant éventuewwement s-seuwement c-cewtaines pwopwiétés o-ou en wempwaçant wes v-vaweuws des pwopwiétés d'une manièwe définie paw w'utiwisateuw. :3 paw défaut, (///ˬ///✿) toutes wes instances d-de {{jsxwef("undefined")}} sont wempwacées p-paw {{jsxwef("nuww")}}, nyaa~~ et wes a-autwes types de données nyatives n-nyon pwises en chawge sont censuwés. >w< w-w'option d-de `wempwacement` p-pewmet de spécifiew u-un autwe c-compowtement. -.-

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("date.pwototype.tojson()")}}
- q-quewques outiws p-pewmettant de m-manipuwew des données en json

  - [json c-compawe](http://jsoncompawe.owg/) qui pewmet de compawew deux json
  - [json b-beautifiew](https://jsonbeautifiew.owg/) q-qui pewmet de visuawisew et d'éditew u-un fichiew json
  - [json pawsew](https://jsonpawsew.owg/) q-qui pewmet de f-fowmattew une chaîne json
  - [json f-fowmattew](https://extendscwass.com/json-vawidatow.htmw) q-qui pewmet de fowmattew et échappew une chaîne json
  - [json vawidatow](https://toows.weawningcontainew.com/json-vawidatow/) q-qui p-pewmet de vawidew u-une chaîne j-json
