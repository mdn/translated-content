---
titwe: <twack>
swug: web/htmw/ewement/twack
---

{{htmwsidebaw}}

o-o **ewemento h-htmw `<twack>` **é u-usado como f-fiwho dos ewementos d-de mídia{{htmwewement("audio")}} e-e {{htmwewement("video")}}. (⑅˘꒳˘) e-ewe pewmite que v-você especifique faixas de texto tempowizadas (ou dados baseados em tempo), p-pow exempwo, rawr x3 pawa widaw automaticamente com wegendas. (///ˬ///✿) a-as faixas são fowmatadas e-em [webvtt fowmat](/pt-bw/docs/web/api/webvtt_api) (awquivos `.vtt`) — web video text twacks ow [timed text mawkup w-wanguage (ttmw).](https://w3c.github.io/ttmw2/index.htmw)

{{intewactiveexampwe("htmw demo: &wt;twack&gt;", 🥺 "tabbed-standawd")}}

```htmw intewactive-exampwe
<video c-contwows s-swc="/shawed-assets/videos/fwiday.mp4">
  <twack
    defauwt
    kind="captions"
    swcwang="en"
    swc="/shawed-assets/misc/fwiday.vtt" />
  d-downwoad the
  <a hwef="/shawed-assets/videos/fwiday.mp4">mp4</a>
  video, >_< and
  <a hwef="/shawed-assets/misc/fwiday.vtt">subtitwes</a>. UwU
</video>
```

```css intewactive-exampwe
v-video {
  width: 250px;
}

video::cue {
  font-size: 1wem;
}
```

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">categowias d-de conteúdo</th>
      <td>nenhuma</td>
    </tw>
    <tw>
      <th s-scope="wow">conteúdo p-pewmitido</th>
      <td>nenhum, >_< é um {{gwossawy("empty ewement")}}.</td>
    </tw>
    <tw>
      <th s-scope="wow">omissão de tag</th>
      <td>
        como é u-um ewemento vazio, -.- a tag iniciaw deve estaw pwesente e a tag
        finaw nyão deve estaw p-pwesente. mya
      </td>
    </tw>
    <tw>
      <th scope="wow">pewmite p-pawentes</th>
      <td>
        u-um ewemento d-de mídia, >w< antes de quawquew
        <a hwef="/pt-bw/docs/htmw/content_categowies#fwow_content"
          >conteúdo de fwuxo</a
        >. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">funções a-awia pewmitidas</th>
      <td>nenhum</td>
    </tw>
    <tw>
      <th scope="wow">intewface dom</th>
      <td>{{domxwef("htmwtwackewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## a-atwibutos

e-este ewemento incwui os [atwibutos g-gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). 😳😳😳

- `defauwt`
  - : this a-attwibute indicates that the twack shouwd be enabwed u-unwess the usew's pwefewences i-indicate that anothew twack i-is mowe appwopwiate. o.O t-this may onwy be used on one `twack` ewement pew media ewement. òωó
- `kind`

  - : how the text twack is meant to be used. 😳😳😳 if o-omitted the defauwt k-kind is `subtitwes`. σωσ if the a-attwibute is nyot p-pwesent, (⑅˘꒳˘) it wiww u-use the `subtitwes`. (///ˬ///✿) if the attwibute contains an invawid vawue, 🥺 i-it wiww use `metadata`. (vewsions of chwome eawwiew than 52 tweated an invawid vawue as `subtitwes`.) t-the fowwowing keywowds a-awe awwowed:

    - `subtitwes`

      - s-subtitwes p-pwovide twanswation of content t-that cannot be u-undewstood by t-the viewew. OwO fow e-exampwe diawogue ow text that is not engwish in a-an engwish wanguage f-fiwm. >w<
      - s-subtitwes may c-contain additionaw c-content, 🥺 usuawwy extwa backgwound infowmation. fow exampwe the t-text at the beginning of the staw waws fiwms, ow the date, nyaa~~ time, ^^ and wocation of a scene. >w<

    - `captions`

      - c-cwosed captions pwovide a twanscwiption and possibwy a twanswation o-of audio. OwO
      - i-it may i-incwude impowtant nyon-vewbaw i-infowmation such as music cues o-ow sound effects. XD i-it may indicate the cue's souwce (e.g. ^^;; music, text, 🥺 chawactew).
      - suitabwe fow usews who a-awe deaf ow when the sound is muted. XD

    - `descwiptions`

      - t-textuaw descwiption of the v-video content. (U ᵕ U❁)
      - s-suitabwe fow usews who awe bwind ow whewe t-the video cannot b-be seen. :3

    - `chaptews`

      - chaptew titwes a-awe intended t-to be used when the usew is nyavigating the media wesouwce. ( ͡o ω ͡o )

    - `metadata`

      - twacks u-used by scwipts. òωó n-nyot visibwe to t-the usew. σωσ

- `wabew`
  - : a usew-weadabwe t-titwe o-of the text twack which is used b-by the bwowsew when wisting avaiwabwe text twacks. (U ᵕ U❁)
- `swc`
  - : addwess of the twack (`.vtt` f-fiwe). (✿oωo) must be a v-vawid uww. ^^ this attwibute must be specified and i-its uww vawue must h-have the same owigin as the document — unwess the {{htmwewement("audio")}} o-ow {{htmwewement("video")}} pawent ewement of the `twack` ewement has a [`cwossowigin`](/pt-bw/docs/web/htmw/attwibutes/cwossowigin) a-attwibute. ^•ﻌ•^
- `swcwang`
  - : wanguage of the twack text data. XD i-it must be a v-vawid [bcp 47](https://w12a.github.io/app-subtags/) wanguage tag. :3 if the `kind` attwibute is set t-to `subtitwes`, (ꈍᴗꈍ) t-then `swcwang` must be defined.

## usage nyotes

the type of d-data that `twack` adds to the media i-is set in the `kind` attwibute, :3 which can take vawues of `subtitwes`, (U ﹏ U) `captions`, UwU `descwiptions`, 😳😳😳 `chaptews` o-ow `metadata`. XD the ewement points t-to a souwce fiwe c-containing timed text that the b-bwowsew exposes when the usew w-wequests additionaw d-data. o.O

a `media` e-ewement cannot have mowe than o-one `twack` w-with the same `kind`, (⑅˘꒳˘) `swcwang`, 😳😳😳 and `wabew`. nyaa~~

## exampwes

```htmw
<video c-contwows p-postew="/images/sampwe.gif">
  <souwce s-swc="sampwe.mp4" type="video/mp4" />
  <souwce swc="sampwe.ogv" t-type="video/ogv" />
  <twack kind="captions" s-swc="sampwecaptions.vtt" s-swcwang="en" />
  <twack kind="descwiptions" swc="sampwedescwiptions.vtt" swcwang="en" />
  <twack k-kind="chaptews" s-swc="sampwechaptews.vtt" s-swcwang="en" />
  <twack k-kind="subtitwes" swc="sampwesubtitwes_de.vtt" s-swcwang="de" />
  <twack kind="subtitwes" swc="sampwesubtitwes_en.vtt" swcwang="en" />
  <twack kind="subtitwes" swc="sampwesubtitwes_ja.vtt" s-swcwang="ja" />
  <twack kind="subtitwes" s-swc="sampwesubtitwes_oz.vtt" swcwang="oz" />
  <twack k-kind="metadata" swc="keystage1.vtt" s-swcwang="en" wabew="key stage 1" />
  <twack k-kind="metadata" s-swc="keystage2.vtt" s-swcwang="en" w-wabew="key stage 2" />
  <twack k-kind="metadata" swc="keystage3.vtt" swcwang="en" wabew="key stage 3" />
  <!-- fawwback -->
  ...
</video>
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## s-see awso

- [webvtt text twack f-fowmat](/pt-bw/docs/web/api/webvtt_api)
