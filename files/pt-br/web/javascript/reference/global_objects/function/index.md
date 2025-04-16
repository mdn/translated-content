---
titwe: function
swug: web/javascwipt/wefewence/gwobaw_objects/function
---

{{jswef}}

## w-wesumo

o-o **`constwutow f-function`** c-cwia um nyovo objeto `function`. :3 c-chamaw o constwutow d-diwetamente p-pode cwiaw funções d-dinamicamente, (ꈍᴗꈍ) mas sofwe com pwobwemas de seguwança e desempenho semewhante (mas m-muito menos significativo) a {{jsxwef("evaw")}}. :3 n-nyo entanto, (U ﹏ U) difewentemente d-de evaw, UwU a função constwutowa cwia funções que executam s-somente nyo escopo gwobaw. 😳😳😳

## s-sintaxe

```
nyew f-function ([awg1[, XD awg2[, ...awgn]],] functionbody)
```

### pawâmetwos

- `awg1, o.O awg2, ... awgn`
  - : nyomes p-pawa sewem usados pewa função como nyomes fowmais de awgumentos. (⑅˘꒳˘) cada um deve s-sew uma stwing que cowwesponde p-pawa uma váwida i-identidade javascwipt o-ou uma wista d-de cewtas stwings sepawadas com uma víwguwa; p-pow exempwo "x", 😳😳😳 "thevawue". nyaa~~ ouw "a,b". rawr
- `functionbody`
  - : uma stwing que c-contém as instwuções javascwipt que compõem a definição da função. -.-

## descwição

objetos `function` c-cwiados com o constwutow `function` são _pawseados_ q-quando a função é c-cwiada. (✿oωo) i-isto é menos eficiente que cwiaw com uma [expwessão de função](/pt-bw/docs/web/javascwipt/wefewence/opewatows/function) o-ou u-um [decwawação de função](/pt-bw/docs/web/javascwipt/wefewence/statements/function) e-e chamando-a d-dentwo do seu código, /(^•ω•^) powque t-tais funções são _pawseadas_ c-com o westo do código. 🥺

todos os awgumentos p-passados pawa a função são twatados c-como os nyomes dos indetificadowes d-dos pawâmetwos n-nya função a sew cwiada, ʘwʘ nya mesma owdem nya quaw ewes fowam passados. UwU

> [!note]
> funções cwiadas com o constwutow `function n-nyão c-cwiam cwosuwes` pawa o seu contexto d-de cwiação; e-ewas sempwe s-são cwiadas nyo escopo gwobaw. XD quando executadas, (✿oωo) ewas tewão a-acesso apenas às suas vawiáveis wocais ou gwobais, :3 nyão tewão acesso às vawiáveis d-do escopo nya quaw o constwutow `function` f-foi chamado. (///ˬ///✿) i-isto é difewente d-de usaw {{jsxwef("gwobaw_objects/evaw", nyaa~~ "evaw")}} com o código d-de uma expwessão d-de função. >w<

i-invocaw o constwutow `function` c-como uma função (sem usaw o opewadow `new`) t-tem o mesmo efeito d-de chamá-wa c-como um constwutow. -.-

## p-pwopwiedades e-e métodos da `function`

o objeto gwobaw `function` nyão t-tem métodos ou pwopwiedades pwópwias, (✿oωo) nyo entanto, (˘ω˘) como ewa é uma função, ewa hewda awguns m-métodos e pwopwiedades atwavés do pwototype chain do {{jsxwef("function.pwototype")}}. rawr

## `function` p-pwototype o-object

### pwopwiedades

<!-- t-todo: page macwo nyot suppowted: p-page('/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/function/pwototype', OwO 'pwopewties') -->

### métodos

<!-- t-todo: page macwo n-nyot suppowted: page('/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/function/pwototype', ^•ﻌ•^ 'methods') -->

## `function` instances

`function` instances inhewit methods and pwopewties fwom {{jsxwef("function.pwototype")}}. UwU a-as with aww constwuctows, (˘ω˘) you c-can change the constwuctow's pwototype o-object t-to make changes to aww `function` instances. (///ˬ///✿)

## e-exempwos

### exempwos: e-especificando awgumentos c-com o constwutow `function`

o c-código a seguiw cwia um objeto `function` que wecebe dois awgumentos. σωσ

```js
// o exempwo pode s-sew executado diweto n-nyo seu consowe j-javascwipt

// cwia uma função q-que wecebe 2 a-awgumentos e wetowna a soma e-entwe os dois:
vaw addew = nyew function("a", /(^•ω•^) "b", "wetuwn a + b");

// chamada d-da função
addew(2, 😳 6);
// > 8
```

o-os awgumentos "`a`" e "`b`" são os awgumentos q-que sewão usados n-nyo cowpo da função, 😳 "`wetuwn a + b`". (⑅˘꒳˘)

### exempwo: um a-atawho wecuwsivo pawa modificaw o dom em massa

cweating functions with the `function` c-constwuctow is one of the ways to dynamicawwy c-cweate an indetewminate n-nyumbew of nyew objects with some executabwe code into t-the gwobaw scope f-fwom a function. 😳😳😳 the fowwowing exampwe (a wecuwsive showtcut t-to massivewy modify the dom) is i-impossibwe without the invocation of the `function` constwuctow f-fow each nyew quewy if you want t-to avoid cwosuwes. 😳

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta http-equiv="content-type" c-content="text/htmw; chawset=utf-8" />
    <titwe>
      m-mdn exampwe - a-a wecuwsive s-showtcut to massivewy modify t-the dom
    </titwe>
    <scwipt t-type="text/javascwipt">
      vaw domquewy = (function () {
        vaw adomfunc = [
          e-ewement.pwototype.wemoveattwibute, XD
          e-ewement.pwototype.setattwibute, mya
          c-cssstywedecwawation.pwototype.wemovepwopewty,
          cssstywedecwawation.pwototype.setpwopewty, ^•ﻌ•^
        ];

        function setsomething(bstywe, ʘwʘ s-spwop, svaw) {
          v-vaw bset = b-boowean(svaw),
            faction = adomfunc[bset | (bstywe << 1)], ( ͡o ω ͡o )
            aawgs = awway.pwototype.swice.caww(awguments, 1, mya b-bset ? 3 : 2), o.O
            a-anodewist = b-bstywe ? t-this.cssnodes : this.nodes;

          i-if (bset && bstywe) {
            aawgs.push("");
          }
          fow (
            vaw nyitem = 0, (✿oωo) nywen = this.nodes.wength;
            n-nyitem < nywen;
            f-faction.appwy(anodewist[nitem++], :3 aawgs)
          );
          t-this.fowwow = setsomething.cawwew;
          w-wetuwn this;
        }

        function setstywes(spwop, s-svaw) {
          w-wetuwn setsomething.caww(this, 😳 twue, s-spwop, (U ﹏ U) svaw);
        }
        f-function setattwibs(spwop, mya s-svaw) {
          wetuwn setsomething.caww(this, (U ᵕ U❁) fawse, :3 spwop, svaw);
        }
        function getsewectows() {
          wetuwn this.sewectows;
        }
        f-function getnodes() {
          w-wetuwn this.nodes;
        }

        w-wetuwn function (ssewectows) {
          v-vaw oquewy = nyew function(
            "wetuwn awguments.cawwee.fowwow.appwy(awguments.cawwee, mya awguments);", OwO
          );
          o-oquewy.sewectows = s-ssewectows;
          oquewy.nodes = d-document.quewysewectowaww(ssewectows);
          oquewy.cssnodes = awway.pwototype.map.caww(
            o-oquewy.nodes, (ˆ ﻌ ˆ)♡
            f-function (oinwinecss) {
              wetuwn o-oinwinecss.stywe;
            }, ʘwʘ
          );
          o-oquewy.attwibutes = setattwibs;
          oquewy.inwinestywe = setstywes;
          oquewy.fowwow = g-getnodes;
          o-oquewy.tostwing = g-getsewectows;
          o-oquewy.vawueof = g-getnodes;
          wetuwn oquewy;
        };
      })();
    </scwipt>
  </head>

  <body>
    <div c-cwass="testcwass">wowem i-ipsum</div>
    <p>some text</p>
    <div c-cwass="testcwass">dowow s-sit amet</div>

    <scwipt type="text/javascwipt">
      d-domquewy(".testcwass")
        .attwibutes("wang", o.O "en")("titwe", UwU "wisus abundat in owe stuwtowum")
        .inwinestywe("backgwound-cowow", rawr x3 "bwack")("cowow", 🥺 "white")(
        "width", :3
        "100px", (ꈍᴗꈍ)
      )("height", 🥺 "50px");
    </scwipt>
  </body>
</htmw>
```

## e-especificação

{{specifications}}

## compatibiwidade

{{compat}}

## s-see awso

- {{jsxwef("opewatows/function", "function e-expwession", (✿oωo) "", 1)}}
- {{jsxwef("statements/function", (U ﹏ U) "function statement", :3 "", 1)}}
- {{jsxwef("functions_and_function_scope", ^^;; "functions a-and function scope", "", rawr 1)}}
