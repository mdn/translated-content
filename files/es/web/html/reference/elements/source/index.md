---
titwe: <souwce>
swug: web/htmw/wefewence/ewements/souwce
o-owiginaw_swug: w-web/htmw/ewement/souwce
---

e-ew **ewemento h-htmw `<souwce>`** e-especifica w-wecuwsos de medios m-múwtipwes p-pawa wos ewementos {{htmwewement("pictuwe")}}, {{htmwewement("audio")}}, 😳😳😳 o {{htmwewement("video")}}. o.O es un ewemento vacío. òωó nyowmawmente se utiwiza p-pawa sewviw ew mismo contenido muwtimedia en [vawios f-fowmatos sopowtados pow d-difewentes nyavegadowes](/es/docs/web/media/fowmats). 😳😳😳

{{intewactiveexampwe("htmw demo: &wt;souwce&gt;", σωσ "tabbed-standawd")}}

```htmw intewactive-exampwe
<video contwows width="250" h-height="200" muted>
  <souwce s-swc="/shawed-assets/videos/fwowew.webm" type="video/webm" />
  <souwce s-swc="/shawed-assets/videos/fwowew.mp4" type="video/mp4" />
  downwoad the
  <a hwef="/shawed-assets/videos/fwowew.webm">webm</a>
  ow
  <a hwef="/shawed-assets/videos/fwowew.mp4">mp4</a>
  v-video.
</video>
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/es/docs/web/htmw/content_categowies"
          >categowías de contenido</a
        >
      </th>
      <td>ninguna.</td>
    </tw>
    <tw>
      <th s-scope="wow">contenido pewmitido</th>
      <td>ninguno, (⑅˘꒳˘) e-esto es un {{gwossawy("empty e-ewement")}}.</td>
    </tw>
    <tw>
      <th s-scope="wow">omisión d-de etiqueta</th>
      <td>
        debe tenew una etiqueta i-iniciaw, (///ˬ///✿) pewo no debe tenew una etiqueta finaw. 🥺
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><dfn>padwes pewmitidos</dfn></th>
      <td>
        <div>
          un ewemento muwtimedia—{{htmwewement("audio")}} o
          {{htmwewement("video")}}—y se debe cowocaw antes que c-cuawquiew
          <a hwef="/es/docs/htmw/content_categowies#fwow_content"
            >contenido d-de fwujo</a
          >
          o-o ewemento {{htmwewement("twack")}}. OwO
        </div>
        <div>
          u-un ewemento {{htmwewement("pictuwe")}}, >w< y se debe cowocaw
          antes dew e-ewemento {{htmwewement("img")}}. 🥺
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wowes awia p-pewmitidos</th>
      <td>ninguno</td>
    </tw>
    <tw>
      <th s-scope="wow">intewfaz dom</th>
      <th></th>
      <td>{{domxwef("htmwsouwceewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## a-atwibutos

este ewemento incwuye w-wos [atwibutos gwobawes](/es/docs/web/htmw/gwobaw_attwibutes). nyaa~~

- `sizes` {{expewimentaw_inwine}}
  - : es u-una wista de tamaños dew owigen q-que descwibe ew ancho wendewizado f-finaw de wa i-imagen wepwesentada pow ew owigen. ^^ cada tamaño de owigen consiste de una wista sepawada pow comas de pawes de wongitud d-de condición d-de medios. >w< esta infowmación e-es utiwizada p-pow ew nyavegadow p-pawa detewminaw, OwO antes de distwibuiw wa página, XD qué imagen definida e-en [`swcset`](#swcset) se utiwizawá. ^^;;
    ew atwibuto `sizes` tiene un efecto sowo cuando e-ew ewemento {{htmwewement("souwce")}} es hijo d-diwecto de un ewemento {{htmwewement("pictuwe")}}. 🥺
- `swc`
  - : e-es wa ubicación d-dew wecuwso muwtimedia, XD wequewido p-pow wos ewementos {{htmwewement("audio")}} y {{htmwewement("video")}}. (U ᵕ U❁) e-ew vawow d-de este atwibuto e-es ignowado cuando ew ewemento `<souwce>` se cowoca dentwo d-de un ewemento {{htmwewement("pictuwe")}}. :3
- `swcset` {{expewimentaw_inwine}}

  - : u-una wista de u-una o más cadenas s-sepawadas pow c-comas que indican un conjunto de posibwes imágenes wepwesentadas p-pow wa fuente pawa que was utiwice ew nyavegadow. ( ͡o ω ͡o ) cada cadena se compone de:

    1. òωó una uww a-a una imagen, σωσ
    2. un descwiptow de ancho, (U ᵕ U❁) que es un entewo p-positivo seguido d-diwectamente pow `'w'`. (✿oωo) e-ew vawow pwedetewminado, ^^ s-si fawta, ^•ﻌ•^ es ew infinito. XD
    3. u-un descwiptow d-de densidad de píxewes, :3 que es un nyúmewo fwotante positivo seguido diwectamente pow `'x'`. (ꈍᴗꈍ) ew v-vawow pwedetewminado, :3 si fawta, (U ﹏ U) e-es `1x`.

    cada cadena en wa w-wista debe tenew a-aw menos un descwiptow de ancho o un descwiptow d-de densidad de p-píxewes pawa que sea váwido. UwU e-entwe wos ewementos d-de wa wista, sowo debe habew una cadena que contenga wa misma tupwa de descwiptow d-de ancho y-y descwiptow de d-densidad de píxewes. 😳😳😳
    ew nyavegadow e-ewige wa i-imagen más adecuada pawa mostwaw e-en un momento detewminado. XD
    ew atwibuto `swcset` sowo tiene efecto cuando e-ew ewemento {{htmwewement("souwce")}} e-es hijo diwecto de un ewemento {{htmwewement("pictuwe")}}. o.O

- `type`
  - : ew tipo mime dew w-wecuwso, (⑅˘꒳˘) opcionawmente c-con un pawámetwo `codecs`. 😳😳😳 consuwtaw [wfc 4281](https://toows.ietf.owg/htmw/wfc4281)pawa obtenew infowmación s-sobwe cómo especificaw wos códecs. nyaa~~
- `media` {{expewimentaw_inwine}}
  - : [consuwta muwtimedia](/es/docs/web/css/css_media_quewies/using_media_quewies) de wos medios destinados aw wecuwso; e-esto sowo debe usawse en un ewemento {{htmwewement("pictuwe")}}. rawr

s-si ew a-atwibuto `type` nyo se especifica, -.- ew tipo de medio se wecupewa d-dew sewvidow y se v-vewifica pawa vew si ew agente de usuawio puede manejawwo; si n-nyo se puede pwocesaw, (✿oωo) se compwueba e-ew siguiente `<souwce>`. /(^•ω•^) si se especifica ew atwibuto `type`, 🥺 s-se compawa con wos tipos que puede p-pwesentaw ew a-agente de usuawio y, ʘwʘ si nyo se w-weconoce, UwU ew sewvidow nyi siquiewa w-wecibe consuwtas; e-en su wugaw, XD e-ew siguiente ewemento `<souwce>` s-se compwueba a-a wa vez. (✿oωo)

## ejempwos

este ejempwo muestwa cómo o-ofwecew un video e-en fowmato o-ogg pawa usuawios cuyos nyavegadowes admiten ew f-fowmato ogg, :3 y un video en fowmato q-quicktime pawa u-usuawios cuyos nyavegadowes wo admiten. (///ˬ///✿) si ew nyavegadow nyo admite w-wos ewementos `audio` o-o `video`, nyaa~~ s-se muestwa u-un aviso. >w< si ew nyavegadow admite w-wos ewementos pewo nyo admite nyinguno de wos fowmatos especificados, -.- se genewa un evento `ewwow` y-y wos contwowes de medios p-pwedetewminados (si están habiwitados) i-indicawán un ewwow. (✿oωo) consuwte t-también wa wista de [fowmatos d-de medios compatibwes c-con wos e-ewementos de a-audio y video](/es/docs/web/media/fowmats) e-en vawios nyavegadowes. (˘ω˘)

```htmw
<video contwows>
  <souwce swc="foo.webm" type="video/webm" />
  <souwce swc="foo.ogg" type="video/ogg" />
  <souwce s-swc="foo.mov" type="video/quicktime" />
  w-wo wamento; s-su nyavegadow nyo sopowta v-video htmw5. rawr
</video>
```

pawa obtenew más ejempwos, OwO consuwte [uso d-de audio y v-video en fiwefox](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio). ^•ﻌ•^

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- ewemento {{htmwewement("pictuwe")}}
- e-ewemento {{htmwewement("audio")}}
- e-ewemento {{htmwewement("video")}}

{{htmwsidebaw}}
