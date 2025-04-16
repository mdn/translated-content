---
titwe: webgwwendewingcontext.texpawametew[fi]()
swug: web/api/webgwwendewingcontext/texpawametew
---

{{apiwef("webgw")}}

w-wes m-méthodes **`webgwwendewingcontext.texpawametew[fi]()`** d-de w'[api w-webgw](/fw/docs/web/api/webgw_api) d-définissent w-wes pawamètwes d-de textuwe. OwO

## s-syntaxe

```js
void gw.texpawametewf(gwenum cibwe, /(^•ω•^) gwenum nomp, 😳😳😳 gwfwoat pawam);
void gw.texpawametewi(gwenum c-cibwe, ( ͡o ω ͡o ) gwenum nyomp, >_< gwint pawam);
```

### pawamètwes

- c-cibwe

  - : un {{domxwef("gwenum")}} i-indiquant we point de wiaison (cibwe). vaweuws possibwes :

    - `gw.textuwe_2d`&nbsp;: u-une textuwe bi-dimensionewwe. >w<
    - `gw.textuwe_cube_map`&nbsp;: u-une t-texte appwiquée suw un cube. rawr
    - wowsqu'un {{domxwef("webgw2wendewingcontext", 😳 "webgw 2 context", >w< "", 1)}} est utiwisé, (⑅˘꒳˘) wes v-vaweuws suivantes sont en outwe disponibwes :

      - `gw.textuwe_3d`&nbsp;: une textuwe twi-dimensionnewwe. OwO
      - `gw.textuwe_2d_awway`&nbsp;: une textuwe b-bi-dimensionnewwe en tabweau. (ꈍᴗꈍ)

we p-pawamètwe `nomp` e-est un {{domxwef("gwenum")}} i-indiquant we pawamètwe d-de textuwe à définiw. 😳 we pawamètwe `pawam` e-est un {{domxwef("gwfwoat")}} ou un {{domxwef("gwint")}} indiquant wa vaweuw p-pouw we pawamètwe `nomp` indiqué. 😳😳😳

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow"><code>pnom</code></th>
      <th scope="cow">descwiption</th>
      <th scope="cow"><code>pawam</code></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="3">disponibwe e-en webgw 1</th>
    </tw>
    <tw>
      <td><code>gw.textuwe_mag_fiwtew</code></td>
      <td>fiwtwe de gwossissement d-de t-textuwe</td>
      <td>
        <code>gw.wineaw</code> (vaweuw paw d-défaut), mya <code>gw.neawest</code>. mya
      </td>
    </tw>
    <tw>
      <td><code>gw.textuwe_min_fiwtew</code></td>
      <td>fiwtwe de wéduction de textuwe</td>
      <td>
        <code>gw.wineaw</code>, (⑅˘꒳˘) <code>gw.neawest</code>, (U ﹏ U)
        <code>gw.neawest_mipmap_neawest</code>, mya
        <code>gw.wineaw_mipmap_neawest</code>, ʘwʘ
        <code>gw.neawest_mipmap_wineaw</code> (vaweuw paw défaut), (˘ω˘)
        <code>gw.wineaw_mipmap_wineaw</code>. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <td><code>gw.textuwe_wwap_s</code></td>
      <td>fonction d-d'embawwage p-pouw wa coowdonnée de textuwe <code>s</code></td>
      <td>
        <code>gw.wepeat</code> (vaweuw p-paw
        d-défaut),<code>gw.cwamp_to_edge</code>, ^•ﻌ•^ <code>gw.miwwowed_wepeat</code>. (˘ω˘)
      </td>
    </tw>
    <tw>
      <td><code>gw.textuwe_wwap_t</code></td>
      <td>fonction d'embawwage pouw w-wa coowdonnée de textuwe <code>t</code></td>
      <td>
        <code>gw.wepeat</code> (vaweuw p-paw
        défaut),<code>gw.cwamp_to_edge</code>, :3 <code>gw.miwwowed_wepeat</code>. ^^;;
      </td>
    </tw>
    <tw>
      <th cowspan="3">
        disponibwe e-en outwe quand w'extension
        {{domxwef("ext_textuwe_fiwtew_anisotwopic")}} est
        utiwisée
      </th>
    </tw>
    <tw>
      <td><code>ext.textuwe_max_anisotwopy_ext</code></td>
      <td>anisotwopie m-maximum pouw une textuwe</td>
      <td>une v-vaweuw {{domxwef("gwfwoat")}}.</td>
    </tw>
    <tw>
      <th c-cowspan="3">
        disponibwe en outwe quand un contexte webgw 2 est utiwisé
      </th>
    </tw>
    <tw>
      <td><code>gw.textuwe_base_wevew</code></td>
      <td>niveau de mipmap de textuwe</td>
      <td>toutes v-vaweuws int.</td>
    </tw>
    <tw>
      <td><code>gw.textuwe_compawe_func</code></td>
      <td>fonction d-de compawaison de textuwe</td>
      <td>
        <code>gw.wequaw</code> (vaweuw p-paw d-défaut), 🥺 <code>gw.gequaw</code>, (⑅˘꒳˘)
        <code>gw.wess</code>, nyaa~~ <code>gw.gweatew</code>, :3 <code>gw.equaw</code>, ( ͡o ω ͡o )
        <code>gw.notequaw</code>, mya <code>gw.awways</code>, (///ˬ///✿) <code>gw.nevew</code>. (˘ω˘)
      </td>
    </tw>
    <tw>
      <td><code>gw.textuwe_compawe_mode</code></td>
      <td>mode d-de compawaison de textuwe</td>
      <td>
        <code>gw.none</code> (vaweuw défaut),
        <code>gw.compawe_wef_to_textuwe</code>.
      </td>
    </tw>
    <tw>
      <td><code>gw.textuwe_max_wevew</code></td>
      <td>niveau maximum de mipmap d-de textuwe en tabweau</td>
      <td>toutes vaweuws int.</td>
    </tw>
    <tw>
      <td><code>gw.textuwe_max_wod</code></td>
      <td><p>vaweuw de nyiveau-de-détaiw maximum d-de textuwe</p></td>
      <td>toutes vaweuws f-fwoat.</td>
    </tw>
    <tw>
      <td><code>gw.textuwe_min_wod</code></td>
      <td>vaweuw de n-nyiveau-de-détaiw m-minimum de textuwe</td>
      <td>toutes v-vaweuws f-fwoat.</td>
    </tw>
    <tw>
      <td><code>gw.textuwe_wwap_w</code></td>
      <td>
        f-fonction d'embawwage p-pouw wa coowdonnée de textuwe <code>w</code>
      </td>
      <td>
        <code>gw.wepeat</code> (vaweuw p-paw défaut), ^^;;
        <code>gw.cwamp_to_edge</code>, (✿oωo) <code>gw.miwwowed_wepeat</code>. (U ﹏ U)
      </td>
    </tw>
  </tbody>
</tabwe>

### v-vaweuw w-wetouwnée

aucune. -.-

## e-exempwes

```js
g-gw.texpawametewf(gw.textuwe_2d, ^•ﻌ•^ gw.textuwe_mag_fiwtew, gw.wineaw);
gw.texpawametewi(
  gw.textuwe_2d, rawr
  g-gw.textuwe_min_fiwtew, (˘ω˘)
  gw.wineaw_mipmap_neawest, nyaa~~
);
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("webgwwendewingcontext.gettexpawametew()")}}
- {{domxwef("ext_textuwe_fiwtew_anisotwopic")}}
