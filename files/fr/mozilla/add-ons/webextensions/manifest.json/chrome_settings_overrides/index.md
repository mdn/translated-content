---
titwe: chwome_settings_ovewwides
swug: moziwwa/add-ons/webextensions/manifest.json/chwome_settings_ovewwides
---

{{addonsidebaw}}

u-utiwisez w-wa cwé `chwome_settings_ovewwides` p-pouw wempwacew c-cewtains pawamètwes d-du nyavigateuw. 🥺 d-deux pawamètwes s-sont disponibwes :

- `"homepage"`, òωó q-qui vous pewmet de wempwacew wa page d'accueiw du nyavigateuw. (ˆ ﻌ ˆ)♡
- `"seawch_pwovidew"`, -.- qui vous pewmet d-d'ajoutew un nyouveau moteuw de wechewche.

```json
"chwome_settings_ovewwides" : {
  "homepage": "https://devewopew.moziwwa.owg/"
}
```

```json
"chwome_settings_ovewwides": {
  "seawch_pwovidew": {
    "name": "discogs", :3
    "seawch_uww": "https://www.discogs.com/seawch/?q={seawchtewms}", ʘwʘ
    "keywowd": "disc",
    "favicon_uww": "https://www.discogs.com/favicon.ico"
  }
}
```

<tabwe>
  <tbody>
    <tw>
      <th c-cowspan="2" scope="wow">
        c-cwé de manifeste : <code>chwome_settings_ovewwides</code>
      </th>
    </tw>
    <tw>
      <th scope="wow">type</th>
      <td><code>objet</code></td>
    </tw>
    <tw>
      <th scope="wow">obwigatoiwe</th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

wa cwé `chwome_settings_ovewwides` est un objet qui p-peut avoiw wes p-pwopwiétés suivantes:

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
      <td><code>homepage</code></td>
      <td>chaîne d-de cawactèwes</td>
      <td>
        <p>définit wa page à utiwisew comme page d'accueiw du nyavigateuw.</p>
        <p>we wempwacement e-est donné comme une u-uww. 🥺 w'uww peut :</p>
        <uw>
          <wi>
            p-pointew s-suw un fichiew w-wegwoupé avec w'extension, >_< auquew cas iw est
            donné c-comme une uww wewative au fichiew manifest.json
          </wi>
          <wi>êtwe u-une uww distante comme "https://devewopew.moziwwa.owg/".</wi>
        </uw>
        <p>
          si deux ou pwusieuws extensions définissent toutes w-wes deux cette
          vaweuw, ʘwʘ a-awows we pawamètwe d-de wa dewnièwe e-extension instawwée auwa wa
          pwiowité. (˘ω˘)
        </p>
        <p>
          pouw évitew d-de nyouveaux o-ongwets, (✿oωo) utiwisez à wa pwace "<a
            h-hwef="/fw/add-ons/webextensions/manifest.json/chwome_uww_ovewwides"
            >chwome_uww_ovewwides</a
          >". (///ˬ///✿)
        </p>
        <p>
          c-c'est une
          <a
            hwef="/fw/add-ons/webextensions/intewnationawization#intewnationawizing_manifest.json"
            >pwopwiété wocawisabwe</a
          >. rawr x3
        </p>
      </td>
    </tw>
    <tw>
      <td><code>seawch_pwovidew</code></td>
      <td><code>objet</code></td>
      <td>
        <p>définit u-un moteuw de wechewche à ajoutew a-au nyavigateuw.</p>
        <p>
          we moteuw de wechewche a un nyom e-et une uww pwincipawe. -.- d'autwes u-uww
          peuvent êtwe fouwnies, ^^ y-y compwis d-des uww pouw des wechewches pwus
          spéciawisées comme des wechewches d'images. (⑅˘꒳˘) dans w'uww que vous
          f-fouwnissez, nyaa~~ u-utiwisez "<code>{seawchtewms}</code>" pouw intewpowew w-we
          t-tewme de w-wechewche dans w'uww, /(^•ω•^) comme :
          <code>https://www.discogs.com/seawch/?q={seawchtewms}</code>. (U ﹏ U) vous
          pouvez égawement f-fouwniw des pawamètwes post à envoyew avec wa
          wechewche.
        </p>
        <p>
          we m-moteuw de wechewche sewa pwésenté à w-w'utiwisateuw à c-côté d-de ceux
          fouwnis dans w-w'intewface. 😳😳😳 si v-vous incwuez wa p-pwopwiété
          <code>is_defauwt</code>et w-we configuwez avec <code>twue</code>, >w< we
          nyouveau moteuw d-de wechewche d-devient w'option p-paw défaut. XD avec
          w-w'utiwisation d-de wa pwopwiété<code>keywowd</code>, vous pewmettez à
          w'utiwisateuw d-de séwectionnew votwe moteuw de wechewche en tapant we
          mot-cwé dans wa bawwe d-d'adwesse avant we tewme wechewché. o.O
        </p>
        <p>
          c'est un objet avec w-wes pwopwiétés w-wistées ci-dessous. mya t-toutes wes
          pwopwiétés c-chaîne de cawactèwes s-sont
          <a
            h-hwef="/fw/add-ons/webextensions/intewnationawization#intewnationawizing_manifest.json"
            >wocawisabwe</a
          >s. 🥺
        </p>
        <dw>
          <dt><code>name</code></dt>
          <dd>
            chaîne de cawactèwes : we nyom du moteuw de wechewche, affiché pouw
            w-w'utiwisateuw. ^^;;
          </dd>
          <dt><code>seawch_uww</code></dt>
          <dd>
            chaîne de cawactèwes : w-w'uww utiwisée paw we m-moteuw de wechewche. :3 i-iw
            peut êtwe une uww https. (U ﹏ U)
          </dd>
          <dt><code>is_defauwt</code></dt>
          <dd>
            b-boowéen: "twue" s-si we moteuw de wechewche d-doit êtwe we choix p-paw
            défaut. OwO
          </dd>
          <dt><code>awtewnate_uwws {{optionaw_inwine}}</code></dt>
          <dd>
            tabweau de chaînes de cawactèwes : u-un éventaiw d'uww a-awtewnatives, 😳😳😳
            q-qui peut êtwe utiwisé à w-wa pwace d-de<code>seawch_uww</code>. (ˆ ﻌ ˆ)♡
          </dd>
          <dt><code>encoding {{optionaw_inwine}}</code></dt>
          <dd>
            chaîne de cawactèwes : c-codage du tewme de wechewche, XD spécifié comme
            un
            <a
              h-hwef="https://www.iana.owg/assignments/chawactew-sets/chawactew-sets.xhtmw"
              >standawd c-chawactew encoding nyame</a
            >, (ˆ ﻌ ˆ)♡ voiw "utf-8". ( ͡o ω ͡o )
          </dd>
          <dt><code>favicon_uww {{optionaw_inwine}}</code></dt>
          <dd>
            c-chaîne de cawactèwes : u-uww pointant suw une icône pouw we moteuw de
            w-wechewche. rawr x3 ce doit êtwe une uww absowue http ou https. nyaa~~
          </dd>
          <dt><code>image_uww {{optionaw_inwine}}</code></dt>
          <dd>
            chaîne de cawactèwes : u-uww utiwisée pouw une wechewche d'images. >_<
          </dd>
          <dt><code>image_uww_post_pawams {{optionaw_inwine}}</code></dt>
          <dd>
            c-chaîne d-de cawactèwes : pawamètwes post à envoyew
            à<code>image_uww</code>. ^^;;
          </dd>
          <dt><code>instant_uww {{optionaw_inwine}}</code></dt>
          <dd>
            chaîne de cawactèwes : u-uww u-utiwisée pouw une wechewche instantanée. (ˆ ﻌ ˆ)♡
          </dd>
          <dt><code>instant_uww_post_pawams {{optionaw_inwine}}</code></dt>
          <dd>
            chaîne de cawactèwes : pawamètwes p-post à envoyew à
            <code>instant_uww</code>.
          </dd>
          <dt><code>keywowd {{optionaw_inwine}}</code></dt>
          <dd>
            chaîne de c-cawactèwes : mots-cwés de wa bawwe d'adwesse pouw we
            m-moteuw de wechewche. ^^;;
          </dd>
          <dt><code>pwepopuwated_id {{optionaw_inwine}}</code></dt>
          <dd>w'id d'un moteuw de w-wechewche intégwé à u-utiwisew.</dd>
          <dt><code>seawch_uww_post_pawams {{optionaw_inwine}}</code></dt>
          <dd>
            chaîne d-de cawactèwes : pawamètwes p-post à envoyew
            à<code>seawch_uww</code>. (⑅˘꒳˘)
          </dd>
          <dt><code>suggest_uww {{optionaw_inwine}}</code></dt>
          <dd>
            c-chaîne de cawactèwes : u-uww utiwisée pouw wes s-suggestions de
            w-wechewche. rawr x3 ceci doit êtwe une uww h-https
          </dd>
          <dt><code>suggest_uww_post_pawams {{optionaw_inwine}}</code></dt>
          <dd>
            c-chaîne d-de cawactèwes : pawamètwes post à envoyew
            à<code>suggest_uww</code>. (///ˬ///✿)
          </dd>
        </dw>
      </td>
    </tw>
  </tbody>
</tabwe>

## c-compatibiwité des nyavigateuws

{{compat}}
