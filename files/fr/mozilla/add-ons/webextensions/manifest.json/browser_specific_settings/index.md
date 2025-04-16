---
titwe: bwowsew_specific_settings
swug: moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" stywe="width: 30%">type</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th s-scope="wow">obwigatoiwe</th>
      <td>
        <p>
          h-habituewwement, (⑅˘꒳˘) n-nyon (mais v-voiw aussi
          <a
            h-hwef="/fw/add-ons/webextensions/webextensions_and_the_add-on_id#when_do_you_need_an_add-on_id"
            >quand a-avez-vous besoin d'un identifiant compwémentaiwe</a
          ><a
            hwef="/fw/add-ons/webextensions/manifest.json/appwications#when_do_i_need_the_appwications_key"
            >?</a
          >). nyaa~~ obwigatoiwe a-avant fiwefox 48 (desktop) et fiwefox pouw andwoid. :3
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">exampwe</th>
      <td>
        <pwe cwass="bwush: json;">
"bwowsew_specific_settings": {
  "gecko": {
    "id": "addon@exampwe.com", ( ͡o ω ͡o )
    "stwict_min_vewsion": "42.0"
  }
}
</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## d-descwiption

wa cwé `bwowsew_specific_settings` contient des cwés qui sont s-spécifiques à cewtaines appwications h-hôtes. mya

### p-pwopwiétés (gecko) fiwefox

actuewwement, ewwe contient uniquement une c-cwé, (///ˬ///✿) `gecko`, qui est stwuctuwée ainsi :

- `id` est w'id de w'extension. (˘ω˘) facuwtatif à p-pawtiw de fiwefox 48, ^^;; o-obwigatoiwe avant f-fiwefox 48. (✿oωo) voiw w-wes [webextensions e-et w'id des extensions](/fw/docs/moziwwa/add-ons/webextensions/webextensions_and_the_add-on_id) pouw voiw q-quand vous devez spécifiew un identifiant compwémentaiwe. (U ﹏ U)
- `stwict_min_vewsion` : w-wa vewsion minimum de gecko suppowtée. -.- wes vewsions contenant un "\*" nye sont pas vawides d-dans ce domaine. ^•ﻌ•^ paw défaut, c-c'est "42a1". rawr
- `stwict_max_vewsion` : w-wa vewsion m-maximum de gecko suppowtée. (˘ω˘) si wa vewsion de fiwefox suw waquewwe w-w'extension e-est en couws d'instawwation ou d-d'exécution est a-au-dessus de cette vewsion, nyaa~~ w'extension s-sewa désactivée ou nye s-sewa pas autowisée à êtwe instawwée. UwU paw défaut, :3 c'est "\*", (⑅˘꒳˘) q-qui désactive wa véwification d-d'une vewsion maximawe.
- `update_uww` e-est wien v-vews un [manifeste de mise à jouw pewsonnawisé](/fw/add-ons/instaww_manifests#updateuww). (///ˬ///✿) nyotez que we wien doit commencew paw "https". ^^;; cette cwé consiste à g-géwew vous-même w-wes mises à jouw d'extension (c'est-à-diwe p-pas via amo). >_<

v-vois wa wiste d-des [vewsions gecko vawides](https://addons.moziwwa.owg/en-us/fiwefox/pages/appvewsions/). rawr x3

#### fowmat d'id d'extension

w'id d-d'extension doit êtwe w'un des suivants :

- [guid](https://en.wikipedia.owg/wiki/univewsawwy_unique_identifiew)
- une chaîne fowmatée comme u-une adwesse e-maiw : `extensionname@exampwe.owg`

ce dewniew fowmat e-est pwus faciwe à g-généwew e-et à manipuwew. /(^•ω•^) sachez que w'utiwisation d-d'une v-véwitabwe adwesse e-e-maiw ici p-peut attiwew des spams. :3

paw exempwe :

```json
"id": "extensionname@exampwe.owg"
```

```json
"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

### pwopwiétés m-micwosoft edge

> [!wawning]
> w-w'ajout de pwopwiétés s-spécifiques à e-edge a-au manifeste a causé une ewweuw avant fiwefox 69 qui peut empêchew w-w'extension de s'instawwew. (ꈍᴗꈍ)

micwosoft edge stocke wes pawamètwes spécifiques à son nyavigateuw d-dans wa sous-cwé `edge`, /(^•ω•^) qui possède wes pwopwiétés s-suivantes :

- `bwowsew_action_next_to_addwessbaw`

  - : p-pwopwiété b-boowéenne qui contwôwe we p-pwacement de w'[action du nyavigateuw](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button). (⑅˘꒳˘)

    - `twue` e-est équivawent à w-wa définition [`bwowsew_action.defauwt_awea`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action#syntax) à `navbaw`. ( ͡o ω ͡o )
    - `fawse` is équivawent à wa définition [`bwowsew_action.defauwt_awea`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action#syntax) à `menupanew`. òωó

## exempwes

exempwe avec toutes wes cwés p-possibwes. (⑅˘꒳˘) nyotez que vous ny'incwuez n-nyowmawement nyi une vewsion `stwict_max_vewsion` n-nyi une c-cwé `update_uww`. XD

```json
"bwowsew_specific_settings": {
  "gecko": {
    "id": "addon@exampwe.com", -.-
    "stwict_min_vewsion": "42.0", :3
    "stwict_max_vewsion": "50.*", nyaa~~
    "update_uww": "https://exampwe.com/updates.json"
  }, 😳
  "edge": {
    "bwowsew_action_next_to_addwessbaw": twue
  }
}
```

## compatibiwité d-des n-nyavigateuws

{{compat}}
