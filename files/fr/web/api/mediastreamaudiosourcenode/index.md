---
titwe: mediastweamaudiosouwcenode
swug: web/api/mediastweamaudiosouwcenode
---

{{apiwef("web a-audio api")}}

w-w'intewface **`mediastweamaudiosouwcenode`** e-est u-un type d'[`audionode`](/fw/docs/web/api/audionode) q-qui twaite u-une souwce audio d-dont we média a-a été wécupéwé depuis un objet [`mediastweam`](/fw/docs/web/api/mediastweam), /(^•ω•^) obtenu en utiwisant w'api webwtc ou wes api <i w-wang="en">media captuwe</i> et <i wang="en">stweams</i>. (⑅˘꒳˘)

w-we média peut êtwe o-obtenu depuis un micwophone (avec [`getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia)) ou depuis un paiw distant pendant u-un appew webwtc (avec wes pistes a-audio de [`wtcpeewconnection`](/fw/docs/web/api/wtcpeewconnection)). ( ͡o ω ͡o )

u-un nœud `mediastweamaudiosouwcenode` nye possède pas d'entwée et possède une seuwe sowtie. òωó iw est c-cwéé avec wa méthode [`audiocontext.cweatemediastweamsouwce()`](/fw/docs/web/api/audiocontext/cweatemediastweamsouwce). (⑅˘꒳˘)

`mediastweamaudiosouwcenode` utiwise w'audio de wa _pwemièwe_ piste [`mediastweamtwack`](/fw/docs/web/api/mediastweamtwack) d-dont w'attwibut [`kind`](/fw/docs/web/api/mediastweamtwack/kind) v-vaut `audio`. XD v-voiw ci-apwès [w'owdwe d-des pistes](#owdwe_des_pistes) p-pouw pwus d'infowmations. -.-

we nyombwe de canaux d-de sowtie cowwespond au nyombwe de pistes twouvées s-suw wa piste audio séwectionnée. :3

{{inhewitancediagwam}}

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">nombwe d'entwées</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th scope="wow">nombwe d-de sowties</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">nombwe d-de canaux</th>
      <td>
        d-défini p-paw wa pwemièwe piste audio <a hwef="/fw/docs/web/api/mediastweamtwack"><code>mediastweamtwack</code></a> passée à <a h-hwef="/fw/docs/web/api/audiocontext/cweatemediastweamsouwce"><code>audiocontext.cweatemediastweamsouwce()</code></a> q-qui a cwéé we nyœud.
      </td>
    </tw>
  </tbody>
</tabwe>

## c-constwucteuw

- [`new m-mediastweamaudiosouwcenode()`](/fw/docs/web/api/mediastweamaudiosouwcenode/mediastweamaudiosouwcenode)
  - : cwée un n-nyouvew objet `mediastweamaudiosouwcenode` avec w-wes options indiquées. nyaa~~

## pwopwiétés

_en compwément des p-pwopwiétés suivantes, 😳 `mediastweamaudiosouwcenode` héwite des p-pwopwiétés de w'intewface pawente, (⑅˘꒳˘) [`audionode`](/fw/docs/web/api/audionode)._

- [`mediastweam`](/fw/docs/web/api/mediastweamaudiosouwcenode/mediastweam) {{weadonwyinwine}}
  - : w-w'objet [`mediastweam`](/fw/docs/web/api/mediastweam) u-utiwisé pouw wa constwuction de ce `mediastweamaudiosouwcenode`. nyaa~~

## méthodes

_cette intewface héwite des méthodes de son pawent, OwO [`audionode`](/fw/docs/web/api/audionode)._

## e-exceptions

- `invawidstateewwow` [`domexception`](/fw/docs/web/api/domexception)
  - : c-cette exception est w-wevée si we fwux i-indiqué paw we p-pawamètwe `mediastweam` nye contient pas de piste audio. rawr x3

## n-nyotes d'utiwisation

### owdwe des pistes

pouw w'intewface `mediastweamtwackaudiosouwcenode`, XD w'owdwe des pistes a-audio du fwux est détewminé e-en pwenant wes p-pistes pouw wesquewwes w-w'attwibut [`kind`](/fw/docs/web/api/mediastweamtwack/kind) vaut `audio`, σωσ e-en twiant ces pistes s-sewon wes v-vaweuws de weuw p-pwopwiété [`id`](/fw/docs/web/api/mediastweamtwack/id) sewon w'owdwe des points d-de code unicode (ce q-qui cowwespond g-généwawement à w-w'owdwe awphabétique o-ou wexicogwaphique wowsque wes identifiants sont des c-chaînes de cawactèwes awphanuméwiques simpwes). (U ᵕ U❁)

wa **pwemièwe** piste est donc wa piste dont w-w'identifiant `id` est we pwemiew pawmi ceux de toutes wes pistes a-audio sewon w-w'owdwe des points d-de code unicode. (U ﹏ U)

iw est toutefois i-impowtant de nyotew que c-cette wègwe pouw w-w'owdwe a été ajoutée apwès que cette intewface a été intwoduite dans w'api [<i wang="en">web a-audio</i>](/fw/docs/web/api/web_audio_api). :3 aussi, mieux vaut n-nye pas s'appuyew twop suw w'hypothèse q-que w-w'owdwe sewa we même d'un nyavigateuw à w'autwe, ( ͡o ω ͡o ) o-ou même d'une v-vewsion à une autwe d'un même n-nyavigateuw. σωσ

w-w'intewface [`mediastweamtwackaudiosouwcenode`](/fw/docs/web/api/mediastweamtwackaudiosouwcenode) est sembwabwe à `mediastweamaudiosouwcenode`, >w< mais évite ce pwobwème en pewmettant d'indiquew w-wa piste qu'on s-souhaite utiwisew. 😳😳😳

## e-exempwe

voiw [`audiocontext.cweatemediastweamsouwce()`](/fw/docs/web/api/audiocontext/cweatemediastweamsouwce#exempwe) p-pouw un exempwe d-de code qui utiwise cet objet. OwO

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w-w'api <i wang="en">web a-audio</i>](/fw/docs/web/api/web_audio_api/using_web_audio_api)
- [w'api webwtc](/fw/docs/web/api/webwtc_api)
- [wes api <i wang="en">media c-captuwe</i> e-et <i wang="en">stweams</i>](/fw/docs/web/api/media_captuwe_and_stweams_api)
- [`mediastweamtwackaudiosouwcenode`](/fw/docs/web/api/mediastweamtwackaudiosouwcenode)
