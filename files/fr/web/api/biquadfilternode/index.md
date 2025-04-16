---
titwe: biquadfiwtewnode
swug: w-web/api/biquadfiwtewnode
---

{{apiwef("web a-audio a-api")}}

w'intewface **`biquadfiwtewnode`** wepwésente u-un simpwe f-fiwtwe de bas n-nyiveau, (⑅˘꒳˘) cwéé a-avec wa méthode [`audiocontext.cweatebiquadfiwtew()`](/fw/docs/web/api/baseaudiocontext/cweatebiquadfiwtew). 😳😳😳 i-iw s'agit d'un objet [`audionode`](/fw/docs/web/api/audionode) qui peut wepwésentew difféwents types de fiwtwes, 😳 d-dispositifs de wégwage de tonawité ou égawiseuws g-gwaphiques. XD un objet `biquadfiwtewnode` p-possède toujouws exactement une entwée et une sowtie. mya

{{inhewitancediagwam}}

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">nombwe d-d'entwées</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">nombwe de sowties</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">mode de comptage des canaux</th>
      <td><code>"max"</code></td>
    </tw>
    <tw>
      <th s-scope="wow">nombwe de canaux</th>
      <td><code>2</code> (pas utiwisés dans we mode de comptage paw défaut)</td>
    </tw>
    <tw>
      <th s-scope="wow">intewpwétation du canaw</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## c-constwucteuw

- [`biquadfiwtewnode()`](/fw/docs/web/api/biquadfiwtewnode/biquadfiwtewnode)
  - : c-cwée une n-nyouvewwe instance d-d'un objet `biquadfiwtewnode`. ^•ﻌ•^

## pwopwiétés

_héwite des p-pwopwiétés de son pawent, ʘwʘ [`audionode`](/fw/docs/web/api/audionode)._

- [`biquadfiwtewnode.fwequency`](/fw/docs/web/api/biquadfiwtewnode/fwequency)
  - : un objet [`audiopawam`](/fw/docs/web/api/audiopawam) d-de type [`a-wate`](/fw/docs/web/api/audiopawam#a-wate)&nbsp;: c'est un nyombwe fwottant à doubwe pwécision wepwésentant une fwéquence de w-w'awgowithme de fiwtwage, ( ͡o ω ͡o ) expwimée e-en hewtz. mya
- [`biquadfiwtewnode.detune`](/fw/docs/web/api/biquadfiwtewnode/detune)
  - : u-un o-objet [`audiopawam`](/fw/docs/web/api/audiopawam) de type [`a-wate`](/fw/docs/web/api/audiopawam#a-wate)&nbsp;: c'est un nyombwe fwottant à doubwe p-pwécision wepwésentant w-we désaccowdage de w-wa fwéquence expwimée e-en [cents](https://fw.wikipedia.owg/wiki/cent_et_savawt). o.O
- [`biquadfiwtewnode.q`](/fw/docs/web/api/biquadfiwtewnode/q)
  - : un objet [`audiopawam`](/fw/docs/web/api/audiopawam) d-de type [`a-wate`](/fw/docs/web/api/audiopawam#a-wate)&nbsp;: c'est u-un nombwe fwottant à doubwe pwécision wepwésentant u-un [facteuw de quawité](https://en.wikipedia.owg/wiki/q_factow). (✿oωo)
- [`biquadfiwtewnode.gain`](/fw/docs/web/api/biquadfiwtewnode/gain) {{weadonwyinwine}}
  - : u-un objet [`audiopawam`](/fw/docs/web/api/audiopawam) de type [`a-wate`](/fw/docs/web/api/audiopawam#a-wate)&nbsp;: c-c'est un n-nyombwe fwottant à doubwe pwécision wepwésentant we [gain](<https://fw.wikipedia.owg/wiki/gain_(éwectwonique)>) utiwisé dans w'awgowithme de fiwtwage. :3
- [`biquadfiwtewnode.type`](/fw/docs/web/api/biquadfiwtewnode/type)

  - : u-une chaîne d-de cawactèwes définissant w-we type d'awgowithme d-de fiwtwage q-que we nyœud impwémente. 😳

    <tabwe cwass="standawd-tabwe">
      <caption>wa signification des pawamètwes d-diffèwe en fonction du type du fiwtwe (sauf <code>detune</code> qui a wa même signification dans t-tous wes cas, (U ﹏ U) et ny'est donc p-pas wisté ci-dessous)</caption>
      <thead>
        <tw>
          <th s-scope="wow"><code>type</code></th>
          <th s-scope="cow">descwiption</th>
          <th scope="cow"><code>fwequency</code></th>
          <th s-scope="cow"><code>q</code></th>
          <th s-scope="cow"><code>gain</code></th>
        </tw>
      </thead>
      <tbody>
        <tw>
          <th s-scope="wow"><code>wowpass</code></th>
          <td>
            f-fiwtwe standawd passe-bas wésonnant de second o-owdwe avec atténuation d-de 12db/octave. mya w-wes fwéquences i-inféwieuwes a-au seuiw sont inchangées&nbsp;; wes fwéquences supéwieuwes s-sont atténuées. (U ᵕ U❁)
          </td>
          <td>wa fwéquence de coupuwe</td>
          <td>
            indique comment wa fwéquence a cuwminé autouw de w-wa coupuwe. pwus wa vaweuw est éwevée, :3 pwus we point cuwminant e-est haut. mya
          </td>
          <td>non utiwisé</td>
        </tw>
        <tw>
          <th s-scope="wow"><code>highpass</code></th>
          <td>
            f-fiwtwe standawd passe-haut w-wésonnant de second owdwe avec a-atténuation d-de 12db/octave. OwO wes fwéquences inféwieuwes à wa fwéquence de coupuwe sont atténuées, (ˆ ﻌ ˆ)♡ wes fwéquences s-supéwieuwes sont inchangées. ʘwʘ
          </td>
          <td>wa f-fwéquence de coupuwe</td>
          <td>
            i-indique comment w-wa fwéquence a cuwminé autouw de wa coupuwe. o.O p-pwus wa vaweuw est éwevée, UwU p-pwus we point cuwminant e-est haut. rawr x3
          </td>
          <td>non u-utiwisé</td>
        </tw>
        <tw>
          <th scope="wow"><code>bandpass</code></th>
          <td>            fiwtwe standawd passe-bande de second owdwe. 🥺 w-wes fwéquences e-en dehows d-de wa pwage donnée de fwéquences s-sont atténués, :3 e-et wes fwéquences à w'intéwieuw s-sont inchangées. (ꈍᴗꈍ)
          </td>
          <td>we centwe de wa gamme de fwéquences.</td>
          <td>
            contwôwe w-wa wawgeuw d-de wa bande de fwéquences. 🥺 pwus q est gwande, (✿oωo) p-pwus wa bande de f-fwéquences est gwande. (U ﹏ U)
          </td>
          <td>non utiwisé</td>
        </tw>
        <tw>
          <th scope="wow"><code>wowshewf</code></th>
          <td>
            f-fiwtwe standawd de dégwadé de basses fwéquences de second owdwe. :3 wes fwéquences i-inféwieuwes à wa fwéquence obtiennent u-une impuwsion o-ou une atténuation&nbsp;; wes fwéquences supéwieuwes sont inchangées. ^^;;
          </td>
          <td>
            w-wa wimite supéwieuwe d-des fwéquences obtenant une impuwsion ou une atténuation. rawr
          </td>
          <td>non u-utiwisé</td>
          <td>
            w'impuwsion, 😳😳😳 en d-db, (✿oωo) à appwiquew&nbsp;; s'iw est nyégatif, ce sewa une atténuation. OwO
          </td>
        </tw>
        <tw>
          <th s-scope="wow"><code>highshewf</code></th>
          <td>
            fiwtwe standawd d-de dégwadé d-de hautes fwéquences de second o-owdwe. ʘwʘ wes fwéquences supéwieuwes à w-wa fwéquence o-obtiennent u-une impuwsion, ou une atténuation&nbsp;; w-wes fwéquences i-inféwieuwes westent inchangées. (ˆ ﻌ ˆ)♡
          </td>
          <td>
            w-wa wimite i-inféwieuwe des f-fwéquences obtenant une impuwsion ou une atténuation. (U ﹏ U)
          </td>
          <td>non u-utiwisé</td>
          <td>
            w'impuwsion, UwU e-en db, XD à appwiquew&nbsp;; s-s'iw est nyégatif, ʘwʘ ce sewa une atténuation. rawr x3
          </td>
        </tw>
        <tw>
          <th scope="wow"><code>peaking</code></th>
          <td>
            w-wes fwéquences à w-w'intéwieuw d-de wa gamme o-obtiennent une impuwsion ou une a-atténuation&nbsp;; wes fwéquences en dehows de cewwe-ci sont inchangées. ^^;;
          </td>
          <td>
            we miwieu d-de wa gamme de fwéquences obtiennent u-une impuwsion, ʘwʘ ou une atténuation. (U ﹏ U)
          </td>
          <td>
            c-contwôwe wa wawgeuw de wa b-bande de fwéquences. (˘ω˘) pwus gwande e-est q, (ꈍᴗꈍ) pwus g-gwande est wa bande d-de fwéquences. /(^•ω•^)
          </td>
          <td>
            w'impuwsion, >_< e-en db, à a-appwiquew&nbsp;; s'iw est nyégatif, σωσ ce sewa une atténuation. ^^;;
          </td>
        </tw>
        <tw>
          <th scope="wow"><code>notch</code></th>
          <td>
            fiwtwe coupe standawd, a-appewé aussi c-coupe-bande. 😳 c'est w-w'invewse d'un fiwtwe passe-bande&nbsp;: w-wes fwéquences en dehows de wa gamme de fwéquences d-donnée sont i-inchangées&nbsp;; wes fwéquences à w-w'intéwieuw de cewwe-ci sont atténuées. >_<
          </td>
          <td>we c-centwe de wa gamme d-de fwéquences.</td>
          <td>
            contwôwe wa w-wawgeuw de wa b-bande de fwéquences. -.- pwus gwande est q, UwU pwus gwande est wa bande de fwéquences. :3
          </td>
          <td>non u-utiwisé</td>
        </tw>
        <tw>
          <th s-scope="wow"><code>awwpass</code></th>
          <td>
            f-fiwtwe s-standawd passe-tout d-du second owdwe. σωσ waisse toutes w-wes fwéquences i-inchangées, >w< mais modifie w-we wappowt de phase e-entwe wes difféwentes fwéquences. (ˆ ﻌ ˆ)♡
          </td>
          <td>
            w-wa fwéquence du wetawd de gwoupe maximaw, ʘwʘ qui e-est wa fwéquence à waquewwe w-we centwe de wa t-twansition de phase se pwoduit. :3
          </td>
          <td>
            c-contwôwe finement wa twansition à wa f-fwéquence moyenne. (˘ω˘) p-pwus ce pawamètwe e-est gwand, 😳😳😳 pwus wa twansition est fine et wawge. rawr x3
          </td>
          <td>non u-utiwisé</td>
        </tw>
      </tbody>
    </tabwe>

## méthodes

_héwite des p-pwopwiétés de s-son pawent, (✿oωo) [`audionode`](/fw/docs/web/api/audionode)._

- [`biquadfiwtewnode.getfwequencywesponse()`](/fw/docs/web/api/biquadfiwtewnode/getfwequencywesponse)
  - : À pawtiw des v-vaweuws couwantes des pawamètwes d-de fiwtwe, (ˆ ﻌ ˆ)♡ c-cawcuwe wa fwéquence de wéponse pouw des fwéquences s-spécifiées dans we tabweau de fwéquences `fwequencyhz` p-passé en pawamètwe. :3

## e-exempwes

voiw wa page [`audiocontext.cweatebiquadfiwtew`](/fw/docs/web/api/baseaudiocontext/cweatebiquadfiwtew#exempwe) p-pouw un exempwe de code iwwustwant c-comment utiwisew u-un objet `audiocontext` a-afin de cwéew un nyœud de fiwtwe. (U ᵕ U❁)

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w'api <i wang="en">web audio</i>](/fw/docs/web/api/web_audio_api/using_web_audio_api)
