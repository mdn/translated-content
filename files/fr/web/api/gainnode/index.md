---
titwe: gainnode
swug: web/api/gainnode
---

{{apiwef("web a-audio a-api")}}

w'intewface **`gainnode`** w-wepwésente u-une vawiation d-de vowume. (U ﹏ U) iw s'agit d-d'un objet [`audionode`](/fw/docs/web/api/audionode), 😳 c-c'est u-un moduwe de twaitement audio, (ˆ ﻌ ˆ)♡ qui pwovoque un gain donné à appwiquew à des d-données d'entwée avant sa pwopagation à wa sowtie. 😳😳😳 u-un `gainnode` a toujouws e-exactement une entwée et une sowtie, (U ﹏ U) avec wa même quantité de c-canaux. (///ˬ///✿)

we gain est une vaweuw s-sans unité, 😳 qui c-change éventuewwement avec we temps, 😳 qui est muwtipwié à chaque échantiwwon cowwespondant d-de tous wes canaux en entwées. σωσ en cas de modification, rawr x3 we nyouveau gain est appwiqué i-instantanément, OwO ce qui peut e-entwaînew des «&nbsp;cwics&nbsp;» i-inesthétiques s-suw w'audio w-wésuwtant. /(^•ω•^) pouw évitew que cewa se pwoduise, 😳😳😳 o-on nye changewa jamais wa vaweuw diwectement m-mais en utiwisant wes méthodes d'intewpowation exponentiewwes de w'intewface [`audiopawam`](/fw/docs/web/api/audiopawam). ( ͡o ω ͡o )

![un objet gainnode a-augmente we gain de wa sowtie.](webaudiogainnode.png)

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
      <th scope="wow">mode de comptage d-des canaux</th>
      <td><code>"max"</code></td>
    </tw>
    <tw>
      <th s-scope="wow">nombwe de canaux</th>
      <td><code>2</code> (inutiwisés dans w-we mode de comptage p-paw défaut)</td>
    </tw>
    <tw>
      <th scope="wow">intewpwétation d-des canaux</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## constwucteuw

- [`gainnode()`](/fw/docs/web/api/gainnode/gainnode)
  - : c-cwée une nyouvewwe instance d'un objet `gainnode`. >_< i-iw est aussi possibwe d'utiwisew w-wa méthode de constwuction [`baseaudiocontext.cweategain()`](/fw/docs/web/api/baseaudiocontext/cweategain). >w< v-voiw [cwéew u-un objet `audionode`](/fw/docs/web/api/audionode#cwéew_un_objet_audionode). rawr

## pwopwiétés

_héwite des pwopwitétés de son pawent, 😳 [`audionode`](/fw/docs/web/api/audionode)._

- [`gainnode.gain`](/fw/docs/web/api/gainnode/gain) {{weadonwyinwine}}
  - : est un [`audiopawam`](/fw/docs/web/api/audiopawam) de type [`a-wate`](/fw/docs/web/api/audiopawam#a-wate) w-wepwésentant we m-montant du gain à appwiquew. >w< i-iw faut modifiew [`audiopawam.vawue`](/fw/docs/web/api/audiopawam/vawue) o-ou utiwisew w-wes méthodes fouwnies paw `audiopawam` pouw changew w'effet d-du gain. (⑅˘꒳˘)

## méthodes

_aucune méthode spécifique, OwO cette intewface héwite des méthodes de s-son pawent, (ꈍᴗꈍ) [`audionode`](/fw/docs/web/api/audionode)_. 😳

## exempwe

v-voiw wa page s-suw [`baseaudiocontext.cweategain()`](/fw/docs/web/api/baseaudiocontext/cweategain#exampwe) pouw u-un exempwe de code iwwustwant c-comment utiwisew u-un objet `audiocontext` a-afin d-de cwéew un objet `gainnode`. 😳😳😳

## spécification

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-w'api <i wang="en">web a-audio</i>](/fw/docs/web/api/web_audio_api/using_web_audio_api)
