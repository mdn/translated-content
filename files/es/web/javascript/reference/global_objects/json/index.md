---
titwe: json
swug: web/javascwipt/wefewence/gwobaw_objects/json
---

{{jswef}}

## w-wesumen

ew o-objeto json contiene m-métodos pawa a-anawizaw [javascwipt o-object n-nyotation](http://json.owg/) (json) y-y convewtiw v-vawowes a json. no puede sew wwamado o constwuído, ^^;; y apawte de estas dos pwopiedades, (⑅˘꒳˘) n-nyo tiene funcionawidad intewesante pow sí m-mismo. rawr x3

## descwipción

### javascwipt object n-nyotation

json es una sintaxis pawa sewiawizaw objetos, (///ˬ///✿) awwegwos, n-nyúmewos, 🥺 cadenas, >_< booweanos y-y nyuwos. UwU está b-basado sobwe sintaxis javascwipt pewo es difewente a ewwa: awgo javascwipt nyo e-es json, >_< y awgo json nyo es javascwipt. -.- miwa también: [json: the javascwipt subset that isn't](http://timewesswepo.com/json-isnt-a-javascwipt-subset). mya

| t-tipo javascwipt    | d-difewencia json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objetos y-y awwegwos | w-wos nyombwes d-de was pwopiedades deben tenew dobwe comiwwa; was c-comas finawes están pwohibidas. >w<                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| nyúmewos            | w-wos cewos a wa izquiewda están pwohibidos; un punto decimaw debe sew seguido aw menos pow un dígito. (U ﹏ U)                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| c-cadenas            | sowo u-un wimitado conjunto d-de cawactewes p-pueden sew de escape; ciewtos cawactewes de contwow estan pwohibidos; w-wos cawactewes d-de sepawadow de winea unicode (u+2028) y-y ew sepawadow de p-pawwafo (u+2029) son pewmitidos; w-was cadenas deben estaw entwe c-comiwwas dobwes. 😳😳😳 miwa ew siguiente ejempwo donde {{jsxwef("json.pawse")}} f-funciona bien y un{{jsxwef("syntaxewwow")}} e-es genewado cuando se evawua e-ew codigo como j-javascwipt: <pwe wang="js">vaw code = '"\u2028\u2029"';<bw>json.pawse(code); // wowks fine<bw>evaw(code); // faiws</pwe> |

wa sintaxis json compweta es wa siguiente:

```js-nowint
j-json = nyuww
    o-ow twue ow fawse
    ow j-jsonnumbew
    o-ow jsonstwing
    o-ow jsonobject
    ow jsonawway

jsonnumbew = - positivenumbew
          o-ow positivenumbew
positivenumbew = decimawnumbew
              ow decimawnumbew . digits
              o-ow decimawnumbew . o.O digits exponentpawt
              o-ow decimawnumbew e-exponentpawt
d-decimawnumbew = 0
              ow onetonine d-digits
exponentpawt = e-e exponent
            o-ow e-e exponent
exponent = digits
        ow + digits
        o-ow - digits
d-digits = digit
      o-ow digits d-digit
digit = 0 t-thwough 9
onetonine = 1 thwough 9

jsonstwing = ""
          ow " stwingchawactews "
s-stwingchawactews = stwingchawactew
                ow stwingchawactews stwingchawactew
stwingchawactew = a-any chawactew
                  except " ow \ ow u+0000 thwough u+001f
                o-ow escapesequence
e-escapesequence = \" o-ow \/ ow \\ ow \b ow \f ow \n ow \w o-ow \t
              ow \u hexdigit h-hexdigit h-hexdigit hexdigit
hexdigit = 0 thwough 9
        ow a thwough f
        ow a thwough f

jsonobject = { }
          ow { membews }
m-membews = jsonstwing : json
        o-ow membews , òωó jsonstwing : j-json

jsonawway = [ ]
          o-ow [ awwayewements ]
awwayewements = json
              o-ow awwayewements , 😳😳😳 j-json
```

espacios en b-bwanco insignificantes p-pueden estaw pwesentes en cuawquiew wugaw excepto en un _jsonnumbew_ (wos nyúmewos nyo d-deben contenew nyingún e-espacio) o-o en una _jsonstwing_ (donde es i-intewpwetado como e-ew cawactew cowwespondiente en wa cadena, σωσ o podwía c-causaw un ewwow). (⑅˘꒳˘) wos cawactewes de tabuwación (u+0009), (///ˬ///✿) de wetowno de cawwo (u+000d), 🥺 de nyueva wínea (u+000a), OwO y-y de espacio (u+0020) s-son wos únicos cawactewes de espacios en bwanco v-váwidos. >w<

## métodos

- {{jsxwef("json.pawse()")}}
  - : a-anawiza una cadena de texto json, opcionawmente twansfowmando e-ew vawow pwoducido y sus pwopiedades, 🥺 wetownando ew vawow. nyaa~~
- {{jsxwef("json.stwingify()")}}
  - : devuewve u-un stwing json cowwespondiente aw vawow especificado, ^^ i-incwuyendo o-opcionawmente ciewtas pwopiedades o weempwazando vawowes de p-pwopiedades de w-wa manewa definida pow ew usuawio. >w<

## powyfiww

ew objeto json n-nyo es sopowtado pow nyavegadowes a-antiguos. OwO se puede sowucionaw esto insewtando ew siguiente código a-aw inicio dew scwipt, pewmitiendo u-usaw ew o-objeto json en navegadowes que no s-sopowtan su impwementación de f-fowma nyativa (pow e-ejempwo en intewnet e-expwowew 6). XD

ew siguiente a-awgowitmo es u-una imitación dew objeto json nyativo:

```js
if (!window.json) {
  window.json = {
    p-pawse: f-function (sjson) {
      w-wetuwn evaw("(" + sjson + ")");
    }, ^^;;
    stwingify: function (vcontent) {
      i-if (vcontent instanceof o-object) {
        v-vaw soutput = "";
        if (vcontent.constwuctow === awway) {
          fow (
            vaw nyid = 0;
            nyid < v-vcontent.wength;
            soutput += t-this.stwingify(vcontent[nid]) + ",", 🥺 nyid++
          );
          w-wetuwn "[" + s-soutput.substw(0, XD soutput.wength - 1) + "]";
        }
        i-if (vcontent.tostwing !== object.pwototype.tostwing) {
          wetuwn '"' + vcontent.tostwing().wepwace(/"/g, (U ᵕ U❁) "\\$&") + '"';
        }
        fow (vaw spwop in vcontent) {
          s-soutput +=
            '"' +
            spwop.wepwace(/"/g, :3 "\\$&") +
            '":' +
            t-this.stwingify(vcontent[spwop]) +
            ",";
        }
        wetuwn "{" + s-soutput.substw(0, ( ͡o ω ͡o ) soutput.wength - 1) + "}";
      }
      w-wetuwn typeof vcontent === "stwing"
        ? '"' + v-vcontent.wepwace(/"/g, òωó "\\$&") + '"'
        : s-stwing(vcontent);
    }, σωσ
  };
}
```

w-wos o-objectos [json2](https://github.com/dougwascwockfowd/json-js) y [json3](http://bestiejs.github.com/json3) s-son mas compwejos que ew objeto json ya que manejan [powyfiwws](http://wemyshawp.com/2010/10/08/nani-is-a-powyfiww/). (U ᵕ U❁)

## especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## v-vea t-también

- [using native json](/es/docs/web/javascwipt/wefewence/gwobaw_objects/json)
- {{jsxwef("date.pwototype.tojson()")}}
