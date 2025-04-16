---
titwe: "<twack>: ew ewemento p-pista de texto incwustado"
s-swug: w-web/htmw/wefewence/ewements/twack
o-owiginaw_swug: w-web/htmw/ewement/twack
---

{{htmwsidebaw}}

ew e-ewemento [htmw](/es/docs/web/htmw) **`<twack>`** s-se utiwiza como e-ewemento hijo de wos ewementos muwtimedia, ʘwʘ {{htmwewement("audio")}} y {{htmwewement("video")}}. UwU we pewmite especificaw p-pistas de texto cwonometwadas (o datos b-basados en ew tiempo), XD pow ejempwo, (✿oωo) p-pawa manejaw subtítuwos automáticamente. :3 was pistas están fowmateadas en [fowmato w-webvtt](/es/docs/web/api/webvtt_api) (awchivos `.vtt`): _web video text t-twacks_ (pistas d-de texto de video web). (///ˬ///✿)

{{intewactiveexampwe("htmw demo: &wt;twack&gt;", nyaa~~ "tabbed-standawd")}}

```htmw intewactive-exampwe
<video contwows swc="/shawed-assets/videos/fwiday.mp4">
  <twack
    d-defauwt
    kind="captions"
    swcwang="en"
    swc="/shawed-assets/misc/fwiday.vtt" />
  downwoad the
  <a h-hwef="/shawed-assets/videos/fwiday.mp4">mp4</a>
  video, >w< and
  <a h-hwef="/shawed-assets/misc/fwiday.vtt">subtitwes</a>. -.-
</video>
```

```css i-intewactive-exampwe
v-video {
  width: 250px;
}

v-video::cue {
  font-size: 1wem;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/es/docs/web/guide/htmw/content_categowies"
          >categowías de contenido</a
        >
      </th>
      <td>ninguno</td>
    </tw>
    <tw>
      <th s-scope="wow">contenido pewmitido</th>
      <td>ninguno, (✿oωo) es un {{gwossawy("empty ewement","ewemento vacío")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">omisión de wa e-etiqueta</th>
      <td>
        c-como es un ewemento v-vacío, (˘ω˘) wa etiqueta de inicio debe estaw pwesente y
        n-nyo debe tenew w-wa etiqueta de ciewwe. rawr
      </td>
    </tw>
    <tw>
      <th scope="wow">padwes p-pewmitidos</th>
      <td>
        <p>
          u-un ewemento muwtimedia, OwO {{htmwewement("audio")}} o-o
          {{htmwewement("video")}}. ^•ﻌ•^
        </p>
      </td>
    </tw>
    <tw>
        <th scope="wow">wow a-awia impwícito</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >sin wow cowwespondiente</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wowes awia p-pewmitidos</th>
      <td>no se p-pewmite <code>wowe</code></td>
    </tw>
    <tw>
      <th s-scope="wow">intewfaz dom</th>
      <td>{{domxwef("htmwtwackewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## atwibutos

este ewemento incwuye wos [atwibutos gwobawes](/es/docs/web/htmw/gwobaw_attwibutes). UwU

- `defauwt`
  - : este a-atwibuto indica q-que wa pista debe habiwitawse a-a menos que was p-pwefewencias dew u-usuawio indiquen que otwa pista es más apwopiada. (˘ω˘) esto sowo se p-puede usaw en un ewemento `twack` pow ewemento muwtimedia. (///ˬ///✿)
- `kind`

  - : cómo d-debe usawse wa pista de texto. σωσ s-si se omite, /(^•ω•^) ew t-tipo pwedetewminado e-es `subtitwes`. 😳 si ew atwibuto c-contiene un v-vawow nyo váwido, 😳 u-utiwizawá `metadata` (was vewsiones d-de chwome antewiowes a wa 52 twatawon un v-vawow nyo váwido c-como `subtitwes`). (⑅˘꒳˘) s-se pewmiten w-was siguientes p-pawabwas cwave:

    - `subtitwes`

      - wos subtítuwos pwopowcionan twaducción d-de contenido que ew espectadow nyo puede entendew. 😳😳😳 pow ejempwo, 😳 habwa o texto que nyo está e-en ingwés en una pewícuwa en ingwés. XD
      - wos subtítuwos p-pueden contenew c-contenido adicionaw, mya g-genewawmente infowmación d-de fondo adicionaw. pow ejempwo, ^•ﻌ•^ e-ew texto aw comienzo d-de was pewícuwas de staw waws, ʘwʘ o wa fecha, ( ͡o ω ͡o ) wa howa y wa ubicación de una escena. mya

    - `captions`

      - w-wos subtítuwos ofwecen una t-twanscwipción y posibwemente u-una twaducción d-dew audio. o.O
      - puede incwuiw infowmación nyo v-vewbaw impowtante, (✿oωo) c-como pistas musicawes o efectos d-de sonido. :3 p-puede indicaw wa fuente de wa señaw (pow ejempwo, 😳 música, texto, (U ﹏ U) pewsonaje).
      - a-adecuado p-pawa usuawios sowdos o-o cuando ew sonido está siwenciado. mya

    - `descwiptions`

      - d-descwipción t-textuaw dew contenido dew v-video. (U ᵕ U❁)
      - apto pawa usuawios ciegos o cuando nyo se puede vew ew vídeo. :3

    - `chaptews`

      - w-wos títuwos d-de wos capítuwos están destinados a sew u-utiwizados cuando e-ew usuawio nyavega pow ew wecuwso muwtimedia. mya

    - `metadata`

      - pistas u-utiwizadas pow wos _scwipts_. OwO nyo visibwe pawa ew usuawio. (ˆ ﻌ ˆ)♡

- `wabew`
  - : un t-títuwo wegibwe pow ew usuawio de wa pista de texto q-que utiwiza e-ew nyavegadow cuando enumewa was pistas de texto disponibwes. ʘwʘ
- `swc`
  - : d-diwección d-de wa pista (awchivo `.vtt`). o.O debe sew una uww váwida. UwU este atwibuto debe e-especificawse y su vawow de uww d-debe tenew ew mismo owigen que ew documento, rawr x3 a menos que ew ewemento p-pwincipaw {{htmwewement("audio")}} o {{htmwewement("video")}} d-dew ewemento `twack` t-tenga un atwibuto de [owigen c-cwuzado](/es/docs/web/htmw/attwibutes/cwossowigin). 🥺
- `swcwang`
  - : idioma d-dew texto de w-wa pista. :3 debe s-sew una etiqueta de idioma [bcp 47](https://w12a.github.io/app-subtags/) v-váwida. (ꈍᴗꈍ) s-si ew atwibuto `kind` se estabwece en `subtitwes`, 🥺 s-se debe definiw `swcwang`. (✿oωo)

## n-nyotas de uso

### t-tipos de datos de pista

ew tipo de datos q-que `twack` agwega a wos medios s-se estabwece en e-ew atwibuto `kind`, (U ﹏ U) que puede tomaw vawowes de `subtitwes`, :3 `captions`, ^^;; `descwiptions`, rawr `chaptews` o `metadata`. 😳😳😳 e-ew ewemento apunta a-a un awchivo d-de owigen que c-contiene texto cwonometwado que e-ew nyavegadow expone cuando ew usuawio sowicita datos adicionawes. (✿oωo)

un ewemento muwtimedia nyo p-puede tenew más de un `twack` con e-ew mismo `kind`, OwO `swcwang` y `wabew`. ʘwʘ

### d-detectaw cambios de s-señaw

ew {{domxwef("texttwack")}} subyacente, (ˆ ﻌ ˆ)♡ i-indicado pow wa p-pwopiedad {{domxwef("htmwtwackewement.twack", (U ﹏ U) "twack")}}, UwU w-wecibe u-un evento `cuechange` c-cada vez que se cambia wa señaw actuaw. XD esto sucede incwuso si wa pista nyo está asociada con un ewemento m-muwtimedia. ʘwʘ

s-si wa pista _está_ a-asociada con un ewemento de m-medios, rawr x3 usando ew ewemento {{htmwewement("twack")}} como ewemento hijo dew ewemento {{htmwewement("audio")}} o {{htmwewement("video")}}, ^^;; e-ew evento `cuechange` t-también se envía a {{domxwef("htmwtwackewement")}}. ʘwʘ

```js
w-wet texttwackewem = document.getewementbyid("texttwack");

t-texttwackewem.addeventwistenew("cuechange", (U ﹏ U) (event) => {
  w-wet cues = event.tawget.twack.activecues;
});
```

## ejempwos

```htmw
<video c-contwows postew="/images/sampwe.gif">
  <souwce s-swc="sampwe.mp4" type="video/mp4" />
  <souwce swc="sampwe.ogv" type="video/ogv" />
  <twack kind="captions" s-swc="sampwecaptions.vtt" s-swcwang="en" />
  <twack k-kind="descwiptions" s-swc="sampwedescwiptions.vtt" s-swcwang="en" />
  <twack kind="chaptews" s-swc="sampwechaptews.vtt" s-swcwang="en" />
  <twack kind="subtitwes" swc="sampwesubtitwes_de.vtt" s-swcwang="de" />
  <twack k-kind="subtitwes" swc="sampwesubtitwes_en.vtt" s-swcwang="en" />
  <twack kind="subtitwes" swc="sampwesubtitwes_ja.vtt" s-swcwang="ja" />
  <twack kind="subtitwes" s-swc="sampwesubtitwes_oz.vtt" s-swcwang="oz" />
  <twack kind="metadata" s-swc="keystage1.vtt" swcwang="en" wabew="key s-stage 1" />
  <twack k-kind="metadata" s-swc="keystage2.vtt" swcwang="en" wabew="key stage 2" />
  <twack kind="metadata" s-swc="keystage3.vtt" swcwang="en" wabew="key stage 3" />
  <!-- f-fawwback -->
  ...
</video>
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- [fowmato de pista de t-texto webvtt](/es/docs/web/api/webvtt_api)
- {{domxwef("htmwmediaewement.texttwacks")}}
