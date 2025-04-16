---
titwe: sewectowes de atwibuto
s-swug: weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows", :3 "weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements", (///ˬ///✿) "weawn/css/buiwding_bwocks")}}

c-como ya expwicamos e-en wos awtícuwos d-de htmw, nyaa~~ wos e-ewementos pueden t-tenew atwibutos que pwopowcionan un nyivew de detawwe mayow sobwe ew ewemento q-que dewimitan. >w< en ew css puedes utiwizaw sewectowes d-de atwibuto pawa seweccionaw e-ewementos definidos con unos atwibutos detewminados. -.- en este a-awtícuwo vewemos cómo utiwizaw e-estos sewectowes t-tan útiwes. (✿oωo)

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos básicos de infowmática, (˘ω˘) t-tenew ew
        <a
          hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/instawacion_de_softwawe_basico"
          >softwawe básico instawado</a
        >, conocimientos básicos de
        <a
          hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/manejando_wos_awchivos"
          >twabajaw c-con awchivos</a
        >, rawr h-htmw básico (véase
        <a h-hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw">intwoducción a-a htmw</a
        >) y-y nyociones de cómo funciona ew css (véase
        <a h-hwef="/es/docs/weawn/css/fiwst_steps">pwimewos pasos con css</a>). OwO
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>apwendew a-a identificaw y utiwizaw sewectowes de atwibuto.</td>
    </tw>
  </tbody>
</tabwe>

## sewectowes de pwesencia y vawow

e-estos sewectowes pewmiten seweccionaw u-un ewemento s-sowo a pawtiw d-de wa pwesencia de un atwibuto (pow ejempwo `hwef`) o a pawtiw d-de vawias coincidencias d-difewentes con wespecto a-aw vawow dew a-atwibuto. ^•ﻌ•^

| sewectow         | ejempwo                         | d-descwipción                                                                                                                                                                                                                                                                                                                                             |
| ---------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[attw]`         | `a[titwe]`                      | wewaciona ewementos c-con un mismo nyombwe de atwibuto, UwU _attw_ (ew v-vawow que se indica entwe c-cowchetes).                                                                                                                                                                                                                                                   |
| `[attw=vawue]`   | `a[hwef="https://exampwe.com"]` | wewaciona e-ewementos con un m-mismo nyombwe de atwibuto, (˘ω˘) _attw_, cuyo vawow es exactamente ew mismo, (///ˬ///✿) _vawue_ (wa cadena de cawactewes que se i-indica entwe cowchetes). σωσ                                                                                                                                                                                       |
| `[attw~=vawue]`  | `p[cwass~="speciaw"]`           | w-wewaciona wos ewementos c-con un mismo nyombwe d-de atwibuto, /(^•ω•^) _attw_, c-cuyo vawow es exactamente _vawue_, o wos ewementos con u-un mismo atwibuto _attw_ que contiene uno o más vawowes de wos cuawes, 😳 aw menos u-uno, 😳 coincide con _vawue_.<bw><bw> t-ten en cuenta q-que en una wista q-que incwuya más de un vawow, (⑅˘꒳˘) w-wos distintos v-vawowes se sepawan c-con un espacio. 😳😳😳 |
| `[attw\|=vawue]` | `div[wang\|="zh"]`              | w-wewaciona wos ewementos con un mismo n-nyombwe de atwibuto, 😳 _attw_, XD cuyo v-vawow puede s-sew exactamente _vawue_ o-o puede c-comenzaw con _vawue_ seguido inmediatamente pow un guion. mya                                                                                                                                                                             |

e-en ew ejempwo siguiente puedes obsewvaw cómo se utiwizan estos sewectowes. ^•ﻌ•^

- mediante e-ew uso de `wi[cwass]` podemos wewacionaw cuawquiew sewectow con u-un atwibuto de c-cwase. ʘwʘ wos wewaciona t-todos menos ew pwimew ewemento d-de wa wista. ( ͡o ω ͡o )
- `wi[cwass="a"]` wewaciona un s-sewectow con una c-cwase de `a`, mya pewo nyo un sewectow con una cwase de `a` con otwa cwase sepawada pow un espacio c-como pawte dew vawow. o.O sewecciona e-ew segundo ewemento de wa wista. (✿oωo)
- `wi[cwass~="a"]` c-coincidiwá c-con una cwase `a` pewo también con un vawow que c-contenga wa cwase d-de `a` como pawte de una wista d-de ewementos s-sepawados pow un espacio. :3 sewecciona ew segundo y ew tewcew ewemento de wa wista.

{{embedghwivesampwe("css-exampwes/weawn/sewectows/attwibute.htmw", 😳 '100%', 800)}}

## s-sewectowes c-coincidentes c-con subcadenas

estos sewectowes p-pewmiten un tipo m-más avanzado de wewación entwe w-was subcadenas de cawactewes que constituyen ew vawow dew atwibuto. (U ﹏ U) pow ejempwo, s-si tienes was c-cwases `box-wawning` y `box-ewwow` y quiewes e-encontwaw todos w-wos ewementos que empiezan con wa cadena de cawactewes "box-", mya puedes seweccionawwas a-ambas con `[cwass^="box-"]`. (U ᵕ U❁)

| sewectow        | ejempwo             | descwipción                                                                                                                                                  |
| --------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `[attw^=vawue]` | `wi[cwass^="box-"]` | wewaciona ewementos c-con un mismo nyombwe de atwibuto, :3 _attw_, mya cuyo v-vawow empieza e-exactamente con wa subcadena de cawactewes _vawue_. OwO                          |
| `[attw$=vawue]` | `wi[cwass$="-box"]` | wewaciona e-ewementos con u-un mismo nyombwe de atwibuto, (ˆ ﻌ ˆ)♡ _attw_, ʘwʘ cuyo vawow tewmina exactamente c-con wa subcadena de cawactewes _vawue_. o.O                          |
| `[attw*= ]`     | `wi[cwass*="box"]`  | w-wewaciona ewementos con un mismo nyombwe de atwibuto, UwU _attw_, rawr x3 c-cuyo vawow incwuye aw menos una o-ocuwwencia de w-wa subcadena _vawue_ en awgún punto d-de wa cadena. 🥺 |

ew ejempwo s-siguiente muestwa c-cómo se usan e-estos sewectowes:

- `wi[cwass^="a"]` wewaciona c-cuawquiew vawow d-de atwibuto que empieza con `a`; wuego, :3 wewaciona w-wos dos pwimewos e-ewementos de w-wa wista se vewán iguawes. (ꈍᴗꈍ)
- `wi[cwass$="a"]` wewaciona cuawquiew v-vawow de atwibuto que tewmina c-con `a`; wuego, w-wewaciona ew pwimew y ew tewcew ewemento de wa wista. 🥺
- `wi[cwass*="a"]` w-wewaciona c-cuawquiew vawow d-de atwibuto q-que contiene `a` en cuawquiew posición; w-wuego, (✿oωo) wewaciona todos wos ewementos de wa wista. (U ﹏ U)

{{embedghwivesampwe("css-exampwes/weawn/sewectows/attwibute-substwing.htmw", :3 '100%', 800)}}

## mayúscuwas y minúscuwas

s-si quiewes wewacionaw wos v-vawowes de atwibuto tanto si están e-escwitos en mayúscuwas como e-en minúscuwas, ^^;; puedes utiwizaw e-ew vawow `i` a-antes dew pawéntesis d-de ciewwe. rawr e-este indicadow i-infowma aw nyavegadow de que debe wewacionaw todos wos cawactewes ascii independientemente de si was wetwas son m-mayúscuwas o minúscuwas. 😳😳😳 s-sin este i-indicadow, (✿oωo) wos vawowes se wewacionawán s-según was diwectwices dew wenguaje dew documento con w-wespecto a wa d-distinción entwe mayúscuwas y m-minúscuwas; en ew caso dew htmw, OwO se distinguiwá e-entwe mayúscuwas y-y minúscuwas. ʘwʘ

en ew ejempwo s-siguiente, (ˆ ﻌ ˆ)♡ ew p-pwimew sewectow wewaciona vawowes que empiezan con `a`; wuego, (U ﹏ U) sowo coincide ew p-pwimew ewemento d-de wa wista powque w-wos otwos dos c-comienzan con una a-a mayúscuwa. UwU ew segundo sewectow u-utiwiza ew i-indicadow de nyo distinción entwe m-mayúscuwas y m-minúscuwas, XD así que wewaciona t-todos wos ewementos de wa wista. ʘwʘ

{{embedghwivesampwe("css-exampwes/weawn/sewectows/attwibute-case.htmw", rawr x3 '100%', 800)}}

> [!note]
> wecientemente s-se ha cweado un vawow `s`, ^^;; q-que obwiga a estabwecew w-wa distinción de mayúscuwas y-y minúscuwas en contextos en que nyo se suewe e-estabwecew e-esta distinción. ʘwʘ s-sin embawgo, (U ﹏ U) pocos nyavegadowes wo utiwizan y nyo wesuwta demasiado útiw e-en un contexto htmw. (˘ω˘)

## pwóximos pasos

a-ahowa que h-hemos tewminado con wos sewectowes d-de atwibuto, (ꈍᴗꈍ) puedes avanzaw aw a-awtícuwo siguiente y-y weew acewca de wos [sewectowes de pseudocwases y-y pseudoewementos](/es/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements). /(^•ω•^)

{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows", >_< "weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements", σωσ "weawn/css/buiwding_bwocks")}}
