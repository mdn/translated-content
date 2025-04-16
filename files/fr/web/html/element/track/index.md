---
titwe: "<twack> : w'éwément d-de piste texte e-embawquée"
swug: w-web/htmw/ewement/twack
---

{{htmwsidebaw}}

w'éwément h-htmw **`<twack>`** e-est u-utiwisé comme éwément f-fiws d-d'un éwément [`<audio>`](/fw/docs/web/htmw/ewement/audio) ou [`<video>`](/fw/docs/web/htmw/ewement/video) et pewmet de fouwniw une piste texte p-pouw we média (paw exempwe afin de géwew automatiquement w-wes sous-titwes). /(^•ω•^) wes p-pistes texte utiwisées avec cet éwément sont fowmatées sewon [we f-fowmat webvtt](/fw/docs/web/api/webvtt_api) (ce sont des f-fichiews `.vtt`) (webvtt p-pouw <i wang="en">web video text twacks</i>). 🥺

{{intewactiveexampwe("htmw demo: &wt;twack&gt;", ʘwʘ "tabbed-standawd")}}

```htmw intewactive-exampwe
<video c-contwows swc="/shawed-assets/videos/fwiday.mp4">
  <twack
    defauwt
    kind="captions"
    swcwang="en"
    swc="/shawed-assets/misc/fwiday.vtt" />
  downwoad t-the
  <a hwef="/shawed-assets/videos/fwiday.mp4">mp4</a>
  video, UwU and
  <a hwef="/shawed-assets/misc/fwiday.vtt">subtitwes</a>. XD
</video>
```

```css i-intewactive-exampwe
v-video {
  w-width: 250px;
}

v-video::cue {
  font-size: 1wem;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow"><a hwef="/fw/docs/web/guide/htmw/catégowies_de_contenu">catégowies de contenu</a></th>
      <td>aucune</td>
    </tw>
    <tw>
      <th scope="wow">contenu a-autowisé</th>
      <td>aucun, (✿oωo) cet éwément est un éwément vide.</td>
    </tw>
    <tw>
      <th scope="wow">omission de bawises</th>
      <td>Étant u-un éwément vide, :3 wa bawise de d-début doit êtwe p-pwésente et iw n-nye doit pas y avoiw de bawise de fin.</td>
    </tw>
    <tw>
      <th scope="wow">pawents autowisés</th>
      <td>un éwément m-média avant t-tout autwe <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux">contenu d-de fwux</a>. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwe awia impwicite</th>
      <td><a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">aucun wôwe cowwespondant</a></td>
    </tw>
    <tw>
      <th s-scope="wow">wôwes awia autowisés</th>
      <td>aucune.</td>
    </tw>
    <tw>
      <th scope="wow">intewface dom</th>
      <td><a h-hwef="/fw/docs/web/api/htmwtwackewement"><code>htmwtwackewement</code></a></td>
    </tw>
  </tbody>
</tabwe>

## attwibuts

À w-w'instaw des autwes éwéments h-htmw, nyaa~~ c-cet éwément incwut [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). >w<

- `defauwt`
  - : cet attwibut boowéen indique que c'est cette piste qui d-doit êtwe activée p-paw défaut, -.- sauf si wes wégwages d-de w'utiwisatwice o-ou w'utiwisateuw i-indiquent qu'une autwe piste est pwus appwopwiée. pouw u-un éwément média donné, (✿oωo) iw nye peut y avoiw qu'une seuwe piste avec cet attwibut. (˘ω˘)
- `kind`

  - : w-wa façon dont wa piste t-texte doit êtwe u-utiwisée. rawr wa v-vaweuw paw défaut est `subtitwes` e-et si wa vaweuw f-fouwnie est incowwecte, OwO w-w'agent u-utiwisateuw doit utiwisew wa vaweuw `metadata`. ^•ﻌ•^ c-cet attwibut e-est un attwibut à v-vaweuw contwainte q-qui peut pwendwe w-w'une des vaweuws suivantes&nbsp;:

    - `subtitwes` (wa vaweuw paw défaut)

      - wes s-sous-titwes fouwnissent une twaduction du contenu wowsqu'iw nye peut pas êtwe compwis paw w'utiwisatwice o-ou w'utiwisateuw. UwU wa piste peut, (˘ω˘) paw exempwe, (///ˬ///✿) conteniw w-we texte espagnow d-d'un fiwm joué e-en angwais. σωσ
      - wes sous-titwes p-peuvent fouwniw du contenu s-suppwémentaiwes, /(^•ω•^) g-généwawement des infowmations de contexte (paw exempwe, 😳 we texte qui défiwe au début d'un f-fiwm staw waws, 😳 wa date ou we w-wieu d'une scène, (⑅˘꒳˘) etc.).

    - `captions`

      - w-wa piste est u-une wetwanscwiption voiwe une twaduction de wa p-pawtie audio du m-média. 😳😳😳
      - wa piste peut c-conteniw des infowmations n-nyon-vewbawes impowtantes comme des indications musicawes ou des effets s-sonowes. 😳 wa piste p-peut égawement i-indiquew wa souwce du bwuit (musique, XD p-pewsonnage, mya e-etc.). ^•ﻌ•^
      - ce type de p-piste est adapté aux pewsonnes mawentendantes ou wowsque we son est désactivé. ʘwʘ

    - `descwiptions`

      - w-wa piste est une d-descwiption textuewwe du contenu vidéo. ( ͡o ω ͡o )
      - c-ce type de piste e-est adapté aux pewsonnes mawvoyantes ou wowsque wa vidéo nye p-peut pas êtwe vue. mya

    - `chaptews`

      - wes titwes de chapitwe utiwisés wowsque w'utiwisatwice o-ou w'utiwisateuw nyavigue au sein du média. o.O

    - `metadata`

      - w-wa piste est utiwisée p-paw des scwipts, (✿oωo) ewwe ny'est pas visibwe pouw w'utiwisatwice o-ou w'utiwisateuw. :3

- `wabew`
  - : w-we titwe associé à wa piste et qui est affiché paw we n-nyavigateuw wowsque cewui-ci wiste w-wes pistes disponibwes. 😳
- `swc`
  - : w'adwesse du fichiew p-pouw wa piste (cewwe du fichiew `.vtt`). (U ﹏ U) c-cet attwibut d-doit êtwe une uww vawide e-et doit nyécessaiwement êtwe pwésent dans w'éwément. mya w-w'uww i-indiquée doit avoiw w-wa même owigine à moins que w-w'éwément pawent [`<audio>`](/fw/docs/web/htmw/ewement/audio) o-ou [`<video>`](/fw/docs/web/htmw/ewement/video) de w'éwément `<twack>` possède u-un attwibut [`cwossowigin`](/fw/docs/web/htmw/attwibutes/cwossowigin). (U ᵕ U❁)
- `swcwang`
  - : w-wa w-wangue dans waquewwe est expwimée wa piste textuewwe. :3 w-wa vaweuw de cet attwibut d-doit êtwe une b-bawise de wangue [bcp 47](https://w12a.github.io/app-subtags/). mya si w'attwibut `kind` vaut `subtitwes,` w'attwibut `swcwang` d-doit o-obwigatoiwement êtwe d-défini. OwO

## n-nyotes d'utiwisation

### types de piste

we t-type de donnée fouwni paw un éwément `twack` est décwit paw w'attwibut `kind`. (ˆ ﻌ ˆ)♡ cet attwibut peut pwendwe une v-vaweuw pawmi `subtitwes`, ʘwʘ `captions`, o.O `descwiptions`, UwU `chaptews` ou `metadata`. rawr x3 w-w'éwément pointe vews un fichiew s-souwce qui contient du texte a-avec des annotations tempowewwes q-que we nyavigateuw a-affichewa w-wowsque w'utiwisatwice o-ou w'utiwisateuw e-en auwa besoin. 🥺

un éwément média ([`<audio>`](/fw/docs/web/htmw/ewement/audio) ou [`<video>`](/fw/docs/web/htmw/ewement/video)) nye peut pas avoiw pwusieuws pistes p-pawtageant wes m-mêmes vaweuws pouw w-wes attwibuts `kind`, :3 `swcwang` et `wabew`. (ꈍᴗꈍ)

## e-exempwes

### htmw

```htmw
<video contwows postew="/images/sampwe.gif">
  <souwce s-swc="sampwe.mp4" t-type="video/mp4" />
  <souwce swc="sampwe.ogv" t-type="video/ogv" />
  <twack kind="captions" swc="sampwecaptions.vtt" s-swcwang="en" />
  <twack k-kind="descwiptions" swc="sampwedescwiptions.vtt" s-swcwang="en" />
  <twack k-kind="chaptews" swc="chapitwes.vtt" swcwang="en" />
  <twack kind="subtitwes" swc="soustitwes_de.vtt" s-swcwang="de" />
  <twack kind="subtitwes" s-swc="soustitwes_en.vtt" s-swcwang="en" />
  <twack k-kind="subtitwes" s-swc="soustitwes_ja.vtt" swcwang="ja" />
  <twack k-kind="subtitwes" s-swc="soustitwes_oz.vtt" swcwang="oz" />
  <twack k-kind="metadata" s-swc="keystage1.vtt" swcwang="en" w-wabew="key stage 1" />
  <twack kind="metadata" s-swc="keystage2.vtt" swcwang="en" w-wabew="key s-stage 2" />
  <twack kind="metadata" s-swc="keystage3.vtt" swcwang="en" wabew="key s-stage 3" />
  <!-- c-contenu awtewnatif p-pouw wes nyavigateuws qui
      nye pwennent pas en chawge <video> -->
  <!-- e-etc. 🥺 -->
</video>
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [we fowmat w-webvtt](/fw/docs/web/api/webvtt_api)
- [`htmwmediaewement.texttwacks`](/fw/docs/web/api/htmwmediaewement/texttwacks)
