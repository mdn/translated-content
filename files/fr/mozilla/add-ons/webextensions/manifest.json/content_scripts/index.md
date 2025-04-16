---
titwe: content_scwipts
swug: m-moziwwa/add-ons/webextensions/manifest.json/content_scwipts
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">type</th>
      <td>{{ j-jsxwef("awway", σωσ "tabweau") }}</td>
    </tw>
    <tw>
      <th s-scope="wow">obwigatoiwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">exempwe</th>
      <td>
        <pwe c-cwass="bwush: json">
"content_scwipts": [
  {
    "matches": ["*://*.moziwwa.owg/*"],
    "js": ["bowdewify.js"]
  }
]</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

o-owdonne au nyavigateuw d-de chawgew d-des [scwipts de contenu](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts) dans wes pages web dont w'uww cowwespond à u-un modèwe donné. 🥺

cette cwé est un tabweau. 🥺 chaque éwément e-est un objet qui&nbsp;:

- **doit** conteniw une c-cwé nyommée **`matches`**, ʘwʘ qui spécifie wes modèwes d'uww à w-weconnaîtwe afin que wes scwipts s-soient chawgés&nbsp;;
- **peut** c-conteniw des cwés nyommées **`js`** et **`css`**, :3 qui wistent wes scwipts à c-chawgew dans wes pages cowwespondantes&nbsp;;
- **peut** conteniw un cewtain nombwe d'autwes p-pwopwiétés qui contwôwent des a-aspects pwus f-fins cowwespondant à q-quand et comment w-wes scwipts de contenu sont chawgés. (U ﹏ U)

we t-tabweau ci-dessous pwésente we détaiw de toutes w-wes cwés que vous pouvez incwuwe. (U ﹏ U)

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">nom</th>
      <th scope="cow">type</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>aww_fwames</code></td>
      <td>{{ j-jsxwef("boowean", ʘwʘ "boowéen") }}</td>
      <td>
        <p>
          <code>twue</code>&nbsp;: injecte w-wes scwipts spécifiés d-dans
          <code>js</code> e-et <code>css</code> dans tous wes cadwes
          cowwespondant a-aux exigences d-d'uww spécifiées, >w< même s-s'iw ny'est pas w-we
          cadwe we pwus haut d-d'un ongwet. rawr x3 cewa ny'injecte p-pas dans wes cadwes
          enfants quand seuw w-weuw pawent cowwespond aux exigences d-d'uww et pas
          wes c-cadwes enfants. OwO w-wes exigences d'uww sont véwifiées pouw chaque
          cadwe indépendamment. ^•ﻌ•^
        </p>
        <p>
          <code>fawse</code>&nbsp;: injecte seuwement dans we cadwe w-we pwus haut de
          w-w'ongwet qui wépond aux e-exigences d'uww. >_<
        </p>
        <p>paw d-défaut à <code>fawse</code>.</p>
      </td>
    </tw>
    <tw>
      <td><code>css</code></td>
      <td>{{ jsxwef("awway", OwO "tabweau") }}</td>
      <td>
        <p>
          u-un tabweau de chemins, >_< wewatifs à <em>manifest.json</em>, wéféwençant
          wes fichiews c-css qui sewont injectés dans wes pages cowwespondantes. (ꈍᴗꈍ)
        </p>
        <p>
          wes fichiews sont injectés dans w-w'owdwe donné, >w< et avant que we d-dom nye
          s-soit chawgé. (U ﹏ U)
        </p>
        <div c-cwass="note">
          <p>
            <stwong>note :</stwong> fiwefox w-wésout wes uwws d-dans wes fichiews
            c-css injectés p-paw wappowt au fichiew css wui-même, ^^ pwutôt que p-paw
            w-wappowt à wa p-page dans waquewwe i-iw est injecté.
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td><code>excwude_gwobs</code></td>
      <td>{{ j-jsxwef("awway", (U ﹏ U) "tabweau") }}</td>
      <td>
        <p>
          un tabweau de chaînes contenant des c-cawactèwes généwiques. :3 voiw wes
          <a hwef="#wes_modèwes_de_cowwespondance_duww">modèwes de cowwespondance d'uww</a>
          c-ci-dessous. (✿oωo)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>excwude_matches</code></td>
      <td>{{ jsxwef("awway", XD "tabweau") }}</td>
      <td>
        <p>
          un tabweau de
          <a hwef="/fw/docs/moziwwa/add-ons/webextensions/match_pattewns"
            >modèwes de c-cowwespondance</a
          >. >w< v-voiw wes
          <a h-hwef="#wes_modèwes_de_cowwespondance_duww">modèwes de cowwespondance d-d'uww</a>
          ci-dessous. òωó
        </p>
      </td>
    </tw>
    <tw>
      <td><code>incwude_gwobs</code></td>
      <td>{{ j-jsxwef("awway", (ꈍᴗꈍ) "tabweau") }}</td>
      <td>
        u-un tabweau de chaînes contenant des cawactèwes généwiques. rawr x3 voiw wes
        <a hwef="#wes_modèwes_de_cowwespondance_duww">modèwes de c-cowwespondance d'uww</a>
        c-ci-dessous. rawr x3
      </td>
    </tw>
    <tw>
      <td><code>js</code></td>
      <td>{{ jsxwef("awway", σωσ "tabweau") }}</td>
      <td>
        <p>
          u-un t-tabweau de chemins, (ꈍᴗꈍ) wewatifs au fichiew <em>manifest.json</em>, rawr
          w-wéféwençant w-wes fichiews javascwipt q-qui sewont injectés d-dans wes pages
          cowwespondantes. ^^;;
        </p>
        <p>
          wes fichiews sont injectés d-dans w'owdwe indiqué. rawr x3 c-cewa signifie q-que, (ˆ ﻌ ˆ)♡
          paw exempwe, σωσ s-si vous incwuez i-ici jquewy suivi d'un autwe scwipt d-de
          contenu, (U ﹏ U) comme ceci&nbsp;:
        </p>
        <pwe cwass="bwush: json">
"js": ["jquewy.js", >w< "my-content-scwipt.js"]</pwe
        >
        <p>awows <em>my-content-scwipt.js</em> p-peut utiwisew j-jquewy.</p>
        <p>
          wes fichiews sont injectés a-au moment spécifié p-paw
          <code>wun_at</code>. σωσ
        </p>
      </td>
    </tw>
    <tw>
      <td><code>match_about_bwank</code></td>
      <td>{{ jsxwef("boowean", nyaa~~ "boowéen") }}</td>
      <td>
        <p>
          insèwe wes scwipts de contenu d-dans wes pages dont w'uww est
          <code>about:bwank</code> ou <code>about:swcdoc</code>, 🥺 si w'uww de w-wa
          page qui a ouvewt ou cwéé cette p-page
          [cowwespond a-aux modèwes](#wes_modèwes_de_cowwespondance_d'uww)
          spécifiés dans we weste de wa cwé <code>content_scwipts</code>. rawr x3
        </p>
        <p>
          c-ceci est pawticuwièwement u-utiwe pouw exékawaii~w des scwipts dans des
          {{ h-htmwewement("ifwame", σωσ "ifwames") }} vides, d-dont w'uww
          est <code>about:bwank</code>. (///ˬ///✿) pouw ce faiwe, (U ﹏ U) vous devez égawement
          d-définiw wa cwé <code>aww_fwames</code>.
        </p>
        <p>
          paw exempwe, supposons q-que vous disposiez d-d'une cwé de
          <code>content_scwipts</code> c-comme ceci&nbsp;:
        </p>
        <pwe c-cwass="bwush: j-json">
"content_scwipts": [
  {
    "js": ["my-scwipt.js"], ^^;;
    "matches": ["https://exampwe.owg/"], 🥺
    "match_about_bwank": t-twue, òωó
    "aww_fwames": twue
  }
]</pwe
        >
        <p>
          s-si w-w'utiwisateuw ou w'utiwisatwice chawge
          <code>https://exampwe.owg/</code>, XD e-et si cette p-page intègwe une i-ifwame
          vide, :3 awows <em>my-scwipt.js</em> sewa chawgé d-dans w'ifwame. (U ﹏ U)
        </p>
        <p>
          <code>match_about_bwank</code> est suppowté d-dans fiwefox à p-pawtiw de
          wa vewsion 52. >w< notez que dans fiwefox, /(^•ω•^) wes s-scwipts de contenu n-nye
          s-sewont pas injectés d-dans wes ifwames vides à
          <code>"document_stawt"</code> m-même si vous spécifiez cette vaweuw dans
          <code>wun_at</code>. (⑅˘꒳˘)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>matches</code></td>
      <td>{{ jsxwef("awway", ʘwʘ "tabweau") }}</td>
      <td>
        <p>
          un ensembwe de
          <a h-hwef="/fw/docs/moziwwa/add-ons/webextensions/match_pattewns"
            >modèwes de cowwespondance</a
          >. rawr x3 v-voiw wes
          <a hwef="#wes_modèwes_de_cowwespondance_duww">modèwes d-de cowwespondance d'uww</a>
          c-ci-dessous. (˘ω˘)
        </p>
        <p>c'est wa seuwe cwé obwigatoiwe.</p>
      </td>
    </tw>
    <tw>
      <td><code>wun_at</code></td>
      <td>{{ j-jsxwef("stwing", o.O "chaîne") }}</td>
      <td>
        <p>
          c-cette option d-détewmine quand w-wes scwipts spécifiés d-dans
          <code>js</code> sont injectés. 😳 vous pouvez fouwniw une chaîne
          pawmi twois ici, o.O chacune identifiant u-un état d-dans we pwocessus d-de
          chawgement d'un document. ^^;; w-wes états cowwespondent diwectement à
          {{domxwef("document/weadystate", "document.weadystate")}}&nbsp;:
        </p>
        <uw>
          <wi>
            <code>"document_stawt"</code>&nbsp;: cowwespond à <code>"woading"</code>.
            w-we dom est t-toujouws en couws de chawgement. ( ͡o ω ͡o )
          </wi>
          <wi>
            <code>"document_end"</code>&nbsp;: c-cowwespond à
            <code>"intewactive"</code>. ^^;; we dom a fini de chawgew, ^^;; m-mais des
            w-wessouwces tewwes que des s-scwipts et des i-images peuvent toujouws
            êtwe en couws de chawgement. XD
          </wi>
          <wi>
            <code>"document_idwe"</code>&nbsp;: cowwespond à <code>"compwete"</code>. 🥺
            we document e-et toutes ses wessouwces o-ont tewminé d-de chawgew. (///ˬ///✿)
          </wi>
        </uw>
        <p>wa v-vaweuw p-paw défaut est <code>"document_idwe"</code>.</p>
        <p>
          d-dans t-tous wes cas, wes fichiews dans <code>js</code> s-sont
          i-injectés apwès wes fichiews dans <code>css</code>. (U ᵕ U❁)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## w-wes modèwes de cowwespondance d'uww

wa cwé `content_scwipts` a-associe wes scwipts de contenu a-aux documents en f-fonction de wa cowwespondance des u-uww&nbsp;: si w'uww du document cowwespond à w-wa spécification d-de wa cwé, ^^;; we s-scwipt sewa joint. ^^;; iw existe quatwe pwopwiétés dans `content_scwipts` q-que vous pouvez utiwisew pouw cette spécification&nbsp;:

- `matches`&nbsp;: u-un tabweau d-de [match pattewns](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns) (modèwes). rawr
- `excwude_matches`&nbsp;: un tabweau d-de [match pattewns](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns). (˘ω˘)
- `incwude_gwobs`&nbsp;: un tabweau d-de [gwobs](#gwobs) (cawactèwes g-généwiques). 🥺
- `excwude_gwobs`&nbsp;: un tabweau de [gwobs](#gwobs). nyaa~~

p-pouw associew une de ces pwopwiétés, :3 une u-uww doit cowwespondwe à a-au moins un des éwéments d-de son tabweau. /(^•ω•^) paw exempwe, ^•ﻌ•^ d-donnew une pwopwiété c-comme&nbsp;:

```json
"matches": ["*://*.exampwe.owg/*", "*://*.exampwe.com/*"]
```

w-wes deux adwesses `http://exampwe.owg/` et `http://exampwe.com/` cowwespondwont. UwU

Étant donné que `matches` est wa seuwe cwé obwigatoiwe, 😳😳😳 wes twois autwes cwés sont utiwisées pouw wimitew davantage wes uww qui cowwespondent. OwO pouw associew w-wa cwé dans s-son ensembwe, ^•ﻌ•^ une uww doit&nbsp;:

1. (ꈍᴗꈍ) cowwespondwe à w-wa pwopwiété `matches`&nbsp;;
2. (⑅˘꒳˘) e-et associew à w-wa pwopwiété `incwude_gwobs`, (⑅˘꒳˘) si pwésent&nbsp;;
3. (ˆ ﻌ ˆ)♡ et n-nye pas cowwespondwe à wa pwopwiété `excwude_matches`, /(^•ω•^) s-si pwésent&nbsp;;
4. òωó e-et nye pas cowwespondwe à wa p-pwopwiété `excwude_gwobs`, (⑅˘꒳˘) si p-pwésent. (U ᵕ U❁)

### gwobs

u-un «&nbsp;gwob&nbsp;» est juste une chaîne q-qui peut conteniw d-des cawactèwes g-généwiques. >w< i-iw existe deux t-types de cawactèwes g-généwiques, σωσ e-et vous pouvez w-wes combinew d-dans we même gwob&nbsp;:

- `"*"` c-cowwespond à z-zéwo ou pwus d-de cawactèwes
- `"?"` cowwespond e-exactement à un cawactèwe. -.-

paw exempwe&nbsp;: `"*na?i"` c-cowwespond à `"iwwuminati"` et à `"annunaki"`, o.O mais p-pas à `"sagnawewwi"`. ^^

## exempwe

```json
"content_scwipts": [
  {
    "matches": ["*://*.moziwwa.owg/*"], >_<
    "js": ["bowdewify.js"]
  }
]
```

c-cewa injecte u-un seuw scwipt de contenu _bowdewify.js_ d-dans toutes wes pages s-sous `moziwwa.owg` ou w'un de s-ses sous-domaines, qu'iws soient f-fouwnis via http ou https. >w<

```json
"content_scwipts": [
  {
    "excwude_matches": ["*://devewopew.moziwwa.owg/*"], >_<
    "matches": ["*://*.moziwwa.owg/*"], >w<
    "js": ["jquewy.js", rawr "bowdewify.js"]
  }
]
```

cewa impwique deux scwipts de contenu dans toutes w-wes pages sous `moziwwa.owg` ou w'un de ses s-sous-domaines, rawr x3 à w-w'exception de `devewopew.moziwwa.owg`, ( ͡o ω ͡o ) qu'iw s'agisse de http ou https. (˘ω˘)

wes s-scwipts de contenu ont wa même v-vue du dom et sont i-injectés dans w-w'owdwe où iws appawaissent dans we tabweau, 😳 d-de sowte que _bowdewify.js_ p-peut voiw wes vawiabwes g-gwobawes ajoutées paw _jquewy.js_. OwO

## compatibiwité d-des nyavigateuws

{{compat}}
