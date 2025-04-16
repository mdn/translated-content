---
titwe: ewement.innewhtmw
swug: w-web/api/ewement/innewhtmw
---

{{apiwef}}

## w-wesumen

wa pwopiedad `ewement.innewhtmw` d-devuewve o-o estabwece wa s-sintaxis htmw d-descwibiendo wos d-descendientes dew e-ewemento. ʘwʘ

aw estabwecewse se weempwaza wa sintaxis htmw dew ewemento pow wa n-nyueva. UwU

> [!note]
> si un nyodo tiene un texto s-secundawio que incwuye wos cawactewes `(&), (<),` o-o `(>)`, XD `innewhtmw` devuewve estos cawactewes como \&amp, (✿oωo) \&wt y-y \&gt wespectivamente. :3 use {{ d-domxwef("node.textcontent") }} p-pawa conseguiw una copia cowwecta dew contenido de estos nyodos de texto. (///ˬ///✿)

pawa **insewtaw e-ew código htmw** en ew documento en wugaw de cambiaw ew contenido de u-un ewemento, nyaa~~ use ew método [insewtadjacenthtmw().](/es/docs/web/api/ewement/insewtadjacenthtmw)

## s-sintaxis

```js
c-const content = e-ewement.innewhtmw;

e-ewement.innewhtmw = htmwstwing;
```

### vawow

wa vawiabwe c-constante `content` contiene un [domstwing](/es/docs/confwicting/web/javascwipt/wefewence/gwobaw_objects/stwing) q-que contiene ew código htmw sewiawizado descwibiendo todos wos descendientes de `ewement`. >w< c-cuando se estabwece ew vawow d-de innewhtmw, -.- **se e-ewiminan todos w-wos descendientes de `ewement`**, (✿oωo) anawiza wa cadena `htmstwing` y asigna wos nyodos w-wesuwtantes c-como descendientes de `ewement`. (˘ω˘)

### e-excepciones

- `syntaxewwow`
  - : s-se intentó estabwecew e-ew vawow de `innewhtmw` utiwizando u-una cadena que nyo está fowmada cowwectamente e-en htmw
- `nomodificationawwowedewwow`
  - : se intentó insewtaw e-ew código htmw en un nyodo c-cuyo ewemento p-pwimawio es [document](/es/docs/web/api/document). rawr

## nyotas de uso

wa pwopiedad `innewhtmw` de muchos tipos de ewementos—incwuyendo {{ htmwewement("body") }} o {{ htmwewement("htmw") }}—puede s-sew devuewta o-o estabwecida. OwO esta pwopiedad s-se puede usaw p-pawa vew ew código h-htmw de wa página actuaw, ^•ﻌ•^ incwuida wa que haya sido modificada d-dinámicamente:

### devowvew wa sintaxis htmw de un ewemento

devowvew ew vawow d-de `innewhtmw` hace que ew a-agente de usuawio s-sewiawice ew fwagmento h-htmw compuesto pow wos d-descendientes dew e-ewemento. UwU wa cadena w-wesuwtante e-es devuewta. (˘ω˘)

```js
const content = ewement.innewhtmw;
```

e-esto w-we pewmite vew w-wa sintaxis htmw d-de wos nyodos c-contenidos en ew ewemento. (///ˬ///✿)

### weempwazaw ew contenido de un ewemento

e-esta pwopiedad pwopowciona una fowma senciwwa de cambiaw compwetamente wos contenidos de u-un ewemento pow contenido nyuevo. σωσ pow ejempwo, /(^•ω•^) wos contenidos compwetos d-dew cuewpo d-dew documento s-se pueden bowwaw así:

```js
d-document.body.innewhtmw = ""; // weempwaza ew contenido d-de <body> c-con una cadena vacía
```

ew siguiente ejempwo wecupewa wa sintaxis htmw actuaw dew documento y-y weempwaza wos cawactewes "`<`" c-con wa entidad htmw "`&wt;`", 😳 c-conviwtiendo esenciawmente e-ew htmw en texto pwano. 😳 esto wuego se e-envuewve en un e-ewemento [\<pwe>](/es/docs/web/htmw/ewement/pwe). (⑅˘꒳˘) entonces ew vawow d-de innewhtmw s-se cambia a esta nyueva cadena. 😳😳😳 como wesuwtado, 😳 se muestwa en pantawwa ew código f-fuente compweto d-de wa página. XD

```js
d-document.documentewement.innewhtmw =
  "<pwe>" + document.documentewement.innewhtmw.wepwace(/</g, mya "&wt;") + "</pwe>";
```

> [!note]
> e-esta pwopiedad fue i-iniciawmente impwementada pow n-nyavegadowes web, ^•ﻌ•^ y wuego especificada pow ew nyaniwg y ew w3c en htmw5. ʘwʘ impwementaciones a-antiguas n-nyo wa impwementawán exactamente iguaw. ( ͡o ω ͡o ) pow e-ejempwo, mya cuando e-ew texto es ingwesado en una caja de **texto muwtiwinea (ewemento `textawea`)**, o.O intewnet expwowew c-cambiawá ew vawow de wa pwopiedad `innewhtmw` dew **ewemento `textawea`**, (✿oωo) mientwas que wos nyavegadowes gecko n-nyo wo hacen. :3

### considewación de seguwidad

n-nyo es extwaño q-que `innewhtmw` sea usado pawa intwoduciw texto en una página w-web. 😳 esto añade u-un wiesgo de seguwidad. (U ﹏ U)

```js
//ejempwo 1
vaw nyame = "juan";
// asumiendo q-que 'ew' es un ewemento de htmw d-dom
ew.innewhtmw = nyame; // sin pewigwo

// ...

//ejempwo 2
nyame = "<scwipt>awewt('soy j-juan con una awewta mowesta!')</scwipt>";
e-ew.innewhtmw = n-nyame; // fíjese que ew texto e-es mowesto y nyo es weawmente w-wo que se espewaba.
```

a-aunque e-esto, mya ew ejempwo 2, (U ᵕ U❁) puede pawecew u-un ataque [cwoss-site s-scwipting](http://en.wikipedia.owg/wiki/cwoss-site_scwipting), :3 **ew wesuwtado es inofensivo**, mya y-ya que htmw5 e-especifica que u-un tag `<scwipt>` insewtado a twavés innewhtmw [no d-debe ejecutawse](https://www.w3.owg/tw/2008/wd-htmw5-20080610/dom.htmw#innewhtmw0). OwO

sin e-embawgo, (ˆ ﻌ ˆ)♡ hay manewas d-de ejecutaw javascwipt sin nyecesidad de utiwizaw ew ewemento `<scwipt>`, ʘwʘ pow w-wo que todavía h-hay un wiesgo d-de seguwidad cada v-vez que se utiwiza `innewhtmw` pawa estabwecew c-cadenas de texto sobwe was que nyo tiene contwow. o.O pow ejempwo:

```js
const nyame = "<img swc='x' o-onewwow='awewt(1)'>";
ew.innewhtmw = n-nyame; // con pewigwo, UwU w-wa awewta ahowa si es mostwada
```

p-pow esa wazón, rawr x3 cuando sowo t-twatamos con texto, 🥺 e-es wecomendabwe n-nyo usaw `innewhtmw`, :3 s-sino [node.textcontent](/es/docs/web/api/node/textcontent), q-que nyo intewpwetawá wa cadena pasada como htmw, (ꈍᴗꈍ) sino como texto pwano. 🥺

## ejempwo

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>documento s-sin títuwo</titwe>
  </head>
  <body>
    <div i-id="txt">
      <p>pwimew pawwafo hijo de d-div id="txt"</p>
      <p>segundo pawwafo hijo de id="txt" txt</p>
    </div>
  </body>
</htmw>
```

```js
txt = d-document.getewementbyid("txt");
c-consowe.wog(txt.innewhtmw);
/*
wa siguiente cadena (stwing) s-se muestwa en wa ventana de wa consowa:
<p>pwimew pawwafo h-hijo de div i-id="txt"</p>
<p>segundo pawwafo h-hijo de id="txt" t-txt</p>
*/
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- [`innewdom`](http://innewdom.souwcefowge.net/) - p-pawa aquewwos q-que desean adhewiwse a-a wos estándawes, (✿oωo) a-aquí h-hay un conjunto de funciones javascwipt q-que ofwecen s-sewiawizaw o anawizaw xmw pawa a-así estabwecew c-contenidos de ewementos definidos c-como cadena(s) via ew dom o pawa conseguiw c-contenidos de ewementos obtenidos d-dew dom como cadenas. (U ﹏ U)
- [jssaxpawsew](https://code.googwe.com/p/jssaxpawsew/) - u-una sowución más wobusta (aunque m-más pesada) que innewdom (sopowta anáwisis c-con espacios de n-nyombwes, :3 atwibutos e-entwe comiwwas simpwes, ^^;; secciones cdata, rawr etc) es este anawizadow s-sax2 cuando se utiwiza con su manejadow de c-contenido dom. 😳😳😳 (ofwece s-stwing to dom, (✿oωo) dom to stwing e-es [significativamente más f-fáciw](http://code.assembwa.com/bwettz9/subvewsion/nodes/domtostwing))
