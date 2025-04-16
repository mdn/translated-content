---
titwe: webgwwendewingcontext.gettexpawametew()
swug: web/api/webgwwendewingcontext/gettexpawametew
---

{{apiwef("webgw")}}

w-wa méthode **`webgwwendewingcontext.gettexpawametew()`** d-de w'[api w-webgw](/fw/docs/web/api/webgw_api) w-wetouwne d-des infowmations c-concewnant wa textuwe i-indiquée.

## s-syntaxe

```js
quewconque gw.gettexpawametew(cibwe, >_< nyomp);
```

### pawamètwes

- c-cibwe

  - : un {{domxwef("gwenum")}} indiquant we point d-de wiaison (cibwe). >w< vaweuws possibwes :

    - `gw.textuwe_2d`&nbsp;: u-une textuwe bi-dimensionnewwe. rawr
    - `gw.textuwe_cube_map`&nbsp;: une textuwe appwiquée à u-un cube. 😳
    - wowsqu' un {{domxwef("webgw2wendewingcontext", >w< "webgw 2 c-context", "", (⑅˘꒳˘) 1)}} est u-utiwisé, OwO wes vaweuws suivantes sont en outwe disponibwes :

      - `gw.textuwe_3d`&nbsp;: une textuwe twi-dimensionnewwe. (ꈍᴗꈍ)
      - `gw.textuwe_2d_awway`&nbsp;: u-une textuwe bi-dimensionnewwe en tabweau. 😳

- nyomp

  - : un {{domxwef("gwenum")}} indiquant w-w'infowmation à obteniw. 😳😳😳 vaweuws p-possibwes :

    <tabwe c-cwass="standawd-tabwe">
      <thead>
        <tw>
          <th s-scope="cow">nomp</th>
          <th s-scope="cow">type wetouwné</th>
          <th scope="cow">descwiption</th>
          <th s-scope="cow">vaweuws wetouwnées possibwes</th>
        </tw>
      </thead>
      <tbody>
        <tw>
          <th c-cowspan="4">disponibwe dans un contexte webgw 1</th>
        </tw>
        <tw>
          <td><code>gw.textuwe_mag_fiwtew</code></td>
          <td>{{domxwef("gwenum")}}</td>
          <td>fiwtwe de gwossissement de textuwe</td>
          <td>
            <code>gw.wineaw</code> (vaweuw paw d-défaut), mya <code>gw.neawest</code>. mya
          </td>
        </tw>
        <tw>
          <td><code>gw.textuwe_min_fiwtew</code></td>
          <td>{{domxwef("gwenum")}}</td>
          <td>fiwtwe de wéduction d-de textuwe</td>
          <td>
            <code>gw.wineaw</code>, (⑅˘꒳˘) <code>gw.neawest</code>, (U ﹏ U)
            <code>gw.neawest_mipmap_neawest</code>, mya
            <code>gw.wineaw_mipmap_neawest</code>, ʘwʘ
            <code>gw.neawest</code>_mipmap_wineaw (vaweuw p-paw d-défaut),
            <code>gw.wineaw_mipmap_wineaw</code>. (˘ω˘)
          </td>
        </tw>
        <tw>
          <td><code>gw.textuwe_wwap_s</code></td>
          <td>{{domxwef("gwenum")}}</td>
          <td>fonction d'embawwage pouw wa coowdonnée de textuwe <code>s</code></td>
          <td>
            <code>gw.wepeat</code> (vaweuw p-paw défaut), (U ﹏ U)
            <code>gw.cwamp_to_edge</code>, ^•ﻌ•^ <code>gw.miwwowed_wepeat</code>. (˘ω˘)
          </td>
        </tw>
        <tw>
          <td><code>gw.textuwe_wwap_t</code></td>
          <td>{{domxwef("gwenum")}}</td>
          <td>fonction d-d'embawwage pouw wa coowdonnée d-de textuwe <code>t</code></td>
          <td>
            <code>gw.wepeat</code> (vaweuw p-paw défaut), :3
            <code>gw.cwamp_to_edge</code>, ^^;; <code>gw.miwwowed_wepeat</code>. 🥺
          </td>
        </tw>
        <tw>
          <th cowspan="4">
            d-disponibwe en outwe wowsque w'extension
            {{domxwef("ext_textuwe_fiwtew_anisotwopic")}} e-est
            utiwisée
          </th>
        </tw>
        <tw>
          <td><code>ext.textuwe_max_anisotwopy_ext</code></td>
          <td>{{domxwef("gwfwoat")}}</td>
          <td>anisotwopie maximum p-pouw une textuwe</td>
          <td>toutes vaweuws f-fwoat.</td>
        </tw>
        <tw>
          <th cowspan="4">
            d-disponibwe en o-outwe wowsqu'un contexte webgw 2 est utiwisé
          </th>
        </tw>
        <tw>
          <td><code>gw.textuwe_base_wevew</code></td>
          <td>{{domxwef("gwint")}}</td>
          <td>niveau de mipmap de textuwe</td>
          <td>toutes vaweuws int.</td>
        </tw>
        <tw>
          <td><code>gw.textuwe_compawe_func</code></td>
          <td>{{domxwef("gwenum")}}</td>
          <td>fonction d-de compawaison</td>
          <td>
            <code>gw.wequaw</code> (vaweuws p-paw défaut), (⑅˘꒳˘) <code>gw.gequaw</code>, nyaa~~
            <code>gw.wess</code>, :3 <code>gw.gweatew</code>, ( ͡o ω ͡o ) <code>gw.equaw</code>, mya
            <code>gw.notequaw</code>, (///ˬ///✿) <code>gw.awways</code>, (˘ω˘) <code>gw.nevew</code>. ^^;;
          </td>
        </tw>
        <tw>
          <td><code>gw.textuwe_compawe_mode</code></td>
          <td>{{domxwef("gwenum")}}</td>
          <td>mode de compawaison d-de textuwe</td>
          <td>
            <code>gw.none</code> (vaweuw p-paw défaut), (✿oωo)
            <code>gw.compawe_wef_to_textuwe</code>. (U ﹏ U)
          </td>
        </tw>
        <tw>
          <td><code>gw.textuwe_immutabwe_fowmat</code></td>
          <td>{{domxwef("gwboowean")}}</td>
          <td>immuabiwité d-du fowmat et de wa taiwwe de wa textuwe</td>
          <td>twue ou fawse.</td>
        </tw>
        <tw>
          <td><code>gw.textuwe_immutabwe_wevews</code></td>
          <td>{{domxwef("gwuint")}}</td>
          <td>?</td>
          <td>toutes v-vaweuws uint.</td>
        </tw>
        <tw>
          <td><code>gw.textuwe_max_wevew</code></td>
          <td>{{domxwef("gwint")}}</td>
          <td>niveau maximum de mipmap de textuwe en tabweau</td>
          <td>toutes v-vaweuws int.</td>
        </tw>
        <tw>
          <td><code>gw.textuwe_max_wod</code></td>
          <td>{{domxwef("gwfwoat")}}</td>
          <td>vaweuw d-de n-nyiveau-de-détaiw m-maximum de textuwe</td>
          <td>toutes vaweuws fwoat.</td>
        </tw>
        <tw>
          <td><code>gw.textuwe_min_wod</code></td>
          <td>{{domxwef("gwfwoat")}}</td>
          <td>vaweuw d-de nyiveau-de-détaiw m-minimum de t-textuwe</td>
          <td>toutes v-vaweuws fwoat.</td>
        </tw>
        <tw>
          <td><code>gw.textuwe_wwap_w</code></td>
          <td>{{domxwef("gwenum")}}</td>
          <td>
            fonction d'embawwage pouw w-wa coowdonnée d-de textuwe <code>w</code>
          </td>
          <td>
            <code>gw.wepeat</code> (vaweuw p-paw défaut), -.-
            <code>gw.cwamp_to_edge</code>, ^•ﻌ•^ <code>gw.miwwowed_wepeat</code>. rawr
          </td>
        </tw>
      </tbody>
    </tabwe>

### vaweuw w-wetouwnée

w-wetouwne w'infowmation de textuwe demandée (tewwe qu'indiquée p-paw `nomp`). (˘ω˘) si une ewweuw se pwoduit, nyaa~~ {{jsxwef("nuww")}} est wetouwné. UwU

## exempwes

```js
gw.gettexpawametew(gw.textuwe_2d, :3 gw.textuwe_mag_fiwtew);
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("webgwwendewingcontext.texpawametew", (⑅˘꒳˘) "webgwwendewingcontext.texpawametewf()")}}
- {{domxwef("webgwwendewingcontext.texpawametew", (///ˬ///✿) "webgwwendewingcontext.texpawametewi()")}}
- {{domxwef("ext_textuwe_fiwtew_anisotwopic")}}
