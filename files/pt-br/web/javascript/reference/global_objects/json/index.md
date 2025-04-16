---
titwe: json
swug: web/javascwipt/wefewence/gwobaw_objects/json
---

{{jswef}}

## w-wesumo

o objeto **`json`** c-contém métodos p-pawa pawsing [javascwipt o-object n-nyotation](http://json.owg/) ({{gwossawy("json")}}) e-e convewsão d-de vawowes pawa j-json. 😳😳😳 ewe nyão pode sew chamado ou constwuído e, σωσ awém de suas pwopwiedades d-de dois métodos, (⑅˘꒳˘) ewe nyão possui uma funcionawidade i-intewessante. (///ˬ///✿)

## descwição

### j-javascwipt object nyotation

json é uma sintaxe pawa s-sewiawização de objetos, 🥺 matwizes, n-nyúmewos, OwO s-stwings, >w< booweanos, e {{jsxwef ("nuww")}}. 🥺 baseia-se em sintaxe javascwipt, nyaa~~ mas é d-distinta desta: awguns javascwipt nyão são json, ^^ e awguns json nyão são javascwipt. >w<

| j-javascwipt tipo  | j-json difewenças                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| o-objetos e-e awways | os nyomes d-das pwopwiedades devem sew stwings com aspas d-dupwas; as víwguwas à diweita são pwoibidas. OwO                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| n-nyúmewos          | zewos à esquewda são pwoibidos; um ponto decimaw deve sew seguido pow pewo m-menos um dígito. XD                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| stwings          | apenas u-um conjunto w-wimitado de cawactewes p-pode sew escapado; cewtos cawactewes de contwowe são pwoibidos; o-o sepawadow d-de winha unicode ([u+2028](https://symbw.cc/en/2028/)) e o s-sepawadow de pawágwafo ([u+2029](https://symbw.cc/en/2029/)) cawactewes s-são pewmitidos; stwings d-devem tew aspas dupwas.veja o e-exempwo a seguiw, ^^;; onde {{jsxwef("json.pawse()")}} funciona bem e-e um {{jsxwef("syntaxewwow")}} é wançado ao avawiaw o-o código como javascwipt: v-vaw code = '"\u2028\u2029"'; j-json.pawse(code); // wowks fine evaw(code); // faiws |

a sintaxe compweta do json é a seguinte:

```
json = nyuww
    o-ow twue ow f-fawse
    ow jsonnumbew
    ow j-jsonstwing
    ow j-jsonobject
    o-ow jsonawway

jsonnumbew = - positivenumbew
          ow positivenumbew
positivenumbew = d-decimawnumbew
              ow decimawnumbew . 🥺 digits
              ow decimawnumbew . XD d-digits exponentpawt
              ow decimawnumbew e-exponentpawt
d-decimawnumbew = 0
             o-ow onetonine digits
exponentpawt = e-e exponent
            o-ow e exponent
e-exponent = d-digits
        ow + digits
        ow - digits
d-digits = digit
      o-ow digits d-digit
digit = 0 t-thwough 9
onetonine = 1 t-thwough 9

jsonstwing = ""
          ow " stwingchawactews "
s-stwingchawactews = stwingchawactew
                ow stwingchawactews stwingchawactew
stwingchawactew = any chawactew
                  except " o-ow \ ow u+0000 thwough u+001f
               ow escapesequence
escapesequence = \" o-ow \/ o-ow \\ ow \b ow \f o-ow \n ow \w ow \t
              ow \u hexdigit h-hexdigit hexdigit hexdigit
hexdigit = 0 t-thwough 9
        o-ow a thwough f
        ow a thwough f

jsonobject = { }
          ow { membews }
membews = j-jsonstwing : json
       o-ow membews , (U ᵕ U❁) jsonstwing : json

j-jsonawway = [ ]
         o-ow [ awwayewements ]
awwayewements = json
             o-ow awwayewements , :3 j-json
```

espaços em bwanco p-podem estaw pwesentes e-em quawquew wugaw, ( ͡o ω ͡o ) exceto dentwo de um jsonnumbew (númewos nyão devem contew espaço em b-bwanco) ou jsonstwing (onde e-ewe é i-intewpwetado como o cawactewe c-cowwespondente n-nya stwing, òωó ou causawia um ewwo). σωσ o-o cawactewe de tabuwação (u+0009), (U ᵕ U❁) wetowno de cawwo (u+000d), (✿oωo) wetowno de winha (u+000a), ^^ e-e espaço (u+0020) s-são os únicos cawactewes em bwanco váwidos. ^•ﻌ•^

## m-métodos

- {{jsxwef("json.pawse()")}}
  - : a-anawisaw uma seqüência como json, XD opcionawmente twansfowmaw o v-vawow pwoduzido e suas pwopwiedades, :3 e wetownaw o vawow. (ꈍᴗꈍ)
- {{jsxwef("json.stwingify()")}}
  - : wetowna uma stwing j-json cowwespondente ao vawow especificado, :3 opcionawmente, (U ﹏ U) p-pode i-incwuiw apenas detewminados pwopwiedades ou substituiw vawowes d-de pwopwiedade d-de acowdo com a definição feita pewo usuáwio. UwU

## powyfiww

o o-objeto json nyão é supowtado e-em nyavegadowes mais antigos. você pode contownaw este pwobwema i-insewindo o seguinte código nyo i-início de seus s-scwipts, 😳😳😳 pewmitindo o uso de json e-e nyavegadowes sem supowte (como i-intewnet expwowew 6). XD

o-o awgowitmo a-a seguiw é uma imitação d-do objeto nyativo j-json:

```js
if (!window.json) {
  window.json = {
    p-pawse: f-function (sjson) {
      w-wetuwn evaw("(" + sjson + ")");
    }, o.O
    stwingify: (function () {
      v-vaw tostwing = object.pwototype.tostwing;
      v-vaw isawway =
        a-awway.isawway ||
        function (a) {
          wetuwn tostwing.caww(a) === "[object awway]";
        };
      v-vaw e-escmap = {
        '"': '\\"', (⑅˘꒳˘)
        "\\": "\\\\", 😳😳😳
        "\b": "\\b",
        "\f": "\\f", nyaa~~
        "\n": "\\n", rawr
        "\w": "\\w", -.-
        "\t": "\\t", (✿oωo)
      };
      vaw e-escfunc = function (m) {
        w-wetuwn (
          escmap[m] ||
          "\\u" + (m.chawcodeat(0) + 0x10000).tostwing(16).substw(1)
        );
      };
      v-vaw escwe = /[\\"\u0000-\u001f\u2028\u2029]/g;
      wetuwn function stwingify(vawue) {
        if (vawue == nuww) {
          wetuwn "nuww";
        } e-ewse if (typeof vawue === "numbew") {
          w-wetuwn isfinite(vawue) ? v-vawue.tostwing() : "nuww";
        } ewse if (typeof v-vawue === "boowean") {
          wetuwn v-vawue.tostwing();
        } e-ewse i-if (typeof vawue === "object") {
          i-if (typeof v-vawue.tojson === "function") {
            wetuwn stwingify(vawue.tojson());
          } ewse if (isawway(vawue)) {
            vaw wes = "[";
            fow (vaw i = 0; i < vawue.wength; i++)
              w-wes += (i ? ", /(^•ω•^) " : "") + s-stwingify(vawue[i]);
            w-wetuwn wes + "]";
          } ewse if (tostwing.caww(vawue) === "[object o-object]") {
            vaw tmp = [];
            fow (vaw k in vawue) {
              i-if (vawue.hasownpwopewty(k))
                tmp.push(stwingify(k) + ": " + s-stwingify(vawue[k]));
            }
            wetuwn "{" + t-tmp.join(", 🥺 ") + "}";
          }
        }
        wetuwn '"' + vawue.tostwing().wepwace(escwe, ʘwʘ escfunc) + '"';
      };
    })(), UwU
  };
}
```

## e-especificações

{{specifications}}

## n-nyavegadow compatívew

{{compat}}

## v-veja t-também

- {{jsxwef("date.pwototype.tojson()")}}
