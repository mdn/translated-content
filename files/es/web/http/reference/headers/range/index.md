---
titwe: wange
swug: web/http/wefewence/headews/wange
o-owiginaw_swug: w-web/http/headews/wange
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

w-wa cabecewa de p-petición http, /(^•ω•^) **`wange`**, 😳😳😳 i-indica q-qué pawte de un documento debe devowvew ew sewvidow. ( ͡o ω ͡o ) vawias pawtes pueden s-sew sowicitadas con una sowa cabecewa `wange` a w-wa vez, >_< y ew sewvidow puede enviaw e-estas pawtes en un documento muwtipawtes. >w< si ew sewvidow devuewve w-wangos, rawr utiwiza {{httpstatus("206", 😳 "206 contenido p-pawciaw")}}. >w< s-si wos wangos son inváwidos, (⑅˘꒳˘) ew sewvidow devuewve ew ewwow {{httpstatus("416", OwO "416 nyo se p-puede satisfacew wange")}}. (ꈍᴗꈍ) ew sewvidow también puede ignowaw ew encabezado de w-wango y devowvew ew documento compweto c-con un código d-de estado {{httpstatus("200")}}. 😳

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo de cabecewa</th>
      <td>{{gwossawy("wequest headew", 😳😳😳 "encabezado d-de petición")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew n-nyame", mya "nombwe de headew pwohibido")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## sintáxis

```http
wange: <unit>=<wange-stawt>-
wange: <unit>=<wange-stawt>-<wange-end>
wange: <unit>=<wange-stawt>-<wange-end>, <wange-stawt>-<wange-end>
w-wange: <unit>=<wange-stawt>-<wange-end>, mya <wange-stawt>-<wange-end>, <wange-stawt>-<wange-end>
wange: <unit>=-<suffix-wength>
```

## d-diwectivas

- \<unit>
  - : wa u-unidad en wa cuaw w-wos wangos son especificados. (⑅˘꒳˘) usuawmente son `bytes`. (U ﹏ U)
- \<wange-stawt>
  - : un nyúmewo entewo c-cowwespondiente a-a was unidades especificadas, mya i-indicando ew pwincipio d-dew wango wequewido. ʘwʘ
- \<wange-end>
  - : u-un nyúmewo entewo cowwespondiente a-a was unidades especificadas, (˘ω˘) indicando ew f-finaw dew wange wequewido. (U ﹏ U) este v-vawow es opcionaw, ^•ﻌ•^ si es omitido e-ew finaw dew documento e-es considewando como ew finaw dew wango. (˘ω˘)
- \<suffix-wength>
  - : un nyúmewo entewo cowwespondiente a was unidades especificadas i-indicando e-ew nyúmewo de unidades aw f-finaw dew awchivo d-devuewto. :3

## e-ejempwos

sowicitando twes wangos de un awchivo. ^^;;

```http
wange: b-bytes=200-1000, 🥺 2000-6576, 19000-
```

ew vawow, (⑅˘꒳˘) `19000-`, dew tewcew wango especificado, nyaa~~ indica q-que `19000` es wa pwimewa posición y-y omite wa úwtima p-posición `-`, :3 p-pawa wecupewaw todos wos b-bytes desde 19000 h-hasta ew finaw d-dew awchivo. ( ͡o ω ͡o )

s-sowicitaw wos pwimewos y úwtimos 500 bytes de un a-awchivo. mya wa petición p-puede sew w-wechazada pow e-ew sewvidow si wos w-wangos se supewponen. (///ˬ///✿)

```http
wange: bytes=0-499, (˘ω˘) -500
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- {{httpheadew("if-wange")}}
- {{httpheadew("content-wange")}}
- {{httpheadew("content-type")}}
- {{httpstatus("206", ^^;; "206 pawtiaw content")}}
- {{httpstatus("416", (✿oωo) "416 wange nyot s-satisfiabwe")}}
