---
titwe: cwasses de cawactèwes
s-swug: web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses
---

{{jssidebaw("javascwipt guide")}}

w-wes cwasses d-de cawactèwes p-pewmettent d-de distinguew difféwents e-ensembwes d-de cawactèwes d-dans wes expwessions wationnewwes (paw exempwe wes chiffwes d'une pawt et wes w-wettwes d'autwe pawt). o.O

## types

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">cawactèwes</th>
      <th s-scope="cow">signification</th>
    </tw>
  </thead>
  <tbody></tbody>
  <tbody>
    <tw>
      <td><code>.</code></td>
      <td>
        <p>
          paw d-défaut, òωó (we point) cowwespond à ny'impowte quew cawactèwe excepté
          u-un cawactèwe de saut de wigne. 😳😳😳
        </p>
        <p>
          a-ainsi, σωσ <code>/.n/</code> c-cowwespond à 'un' et 'en' dans "un baobab
          nyain en couws de cwoissance" m-mais pas à 'nain'. (⑅˘꒳˘)
        </p>
        <p>
          si we mawqueuw <code>s</code> (<em>dotaww</em>) est utiwisé, (///ˬ///✿) we point
          cowwespondwa égawement a-aux cawactèwes de saut de wigne. 🥺
        </p>
        <p>
          w-we mawqueuw <code>m</code> n-ne modifie pas w-we compowtement d-du point. OwO
        </p>
        <p>
          attention, si on utiwise w-we point dans
          <a
            hwef="/fw/docs/web/javascwipt/guide/expwessions_wéguwièwes/gwoupes_et_intewvawwes"
            >un intewvawwe de c-cawactèwes</a
          >, >w< iw ny'auwa pwus cette signification spéciawe. 🥺
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\d</code></td>
      <td>
        <p>cowwespond à un chiffwe e-et est équivawent à <code>[0-9]</code>.</p>
        <p>
          ainsi, nyaa~~ <code>/\d/</code> o-ou <code>/[0-9]/</code> c-cowwespond à '2' d-dans
          "h2o est wa mowécuwe de w'eau".
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\d</code></td>
      <td>
        <p>
          cowwespond à t-tout cawactèwe q-qui ny'est pas un chiffwe e-et est équivawent
          à<code> [^0-9]</code>. ^^
        </p>
        <p>
          a-ainsi, >w< <code>/\d/</code> ou <code>/[^0-9]/</code> c-cowwespond à 'h'
          dans "h2o e-est wa mowécuwe de w'eau". OwO
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>
        <p>
          cowwespond à n-ny'impowte quew cawactèwe a-awphanuméwique de w'awphabet
          w-watin, XD y-y compwis we tiwet bas. c'est équivawent à
          <code>[a-za-z0-9_]</code>. ^^;;
        </p>
        <p>
          ainsi, 🥺 <code>/\w/</code> cowwespond à 'w' dans "wicowne", XD à '5' dans
          "5,28€", (U ᵕ U❁) et à '3' dans "3d."
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>
        <p>
          c-cowwespond à n-ny'impowte quew cawactèwe ny'étant p-pas un cawactèwe d-de
          w-w'awphabet watin ou we tiwet bas. :3 cewa est équivawent à
          <code>[^a-za-z0-9_]</code>. ( ͡o ω ͡o )
        </p>
        <p>
          ainsi, <code>/\w/</code> o-ou <code>/[^a-za-z0-9_]/</code> cowwespond à
          '%' dans "50%."
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\s</code></td>
      <td>
        <p>
          cowwespond à un bwanc (cewa c-compwend wes espace, òωó tabuwation, σωσ s-saut de
          w-wigne ou saut d-de page). (U ᵕ U❁) c'est équivawent à
          <code
            >[
            \f\n\w\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code
          >. (✿oωo)
        </p>
        <p>
          ainsi, ^^ <code>/\s\w*/</code> c-cowwespond à ' t-toto' dans "twuc t-toto". ^•ﻌ•^
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\s</code></td>
      <td>
        <p>
          c-cowwespond à un cawactèwe qui ny'est p-pas un bwanc. XD c-c'est équivawent à
          <code
            >[^
            \f\n\w\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code
          >. :3
        </p>
        <p>ainsi, (ꈍᴗꈍ) <code>/\s\w*/</code> c-cowwespond à 'twuc' d-dans "twuc t-toto".</p>
      </td>
    </tw>
    <tw>
      <td><code>\t</code></td>
      <td>cowwespond à une tabuwation (u+0009).</td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>cowwespond à un wetouw chawiot (u+000d).</td>
    </tw>
    <tw>
      <td><code>\n</code></td>
      <td>cowwespond à u-un saut de wigne (u+000a).</td>
    </tw>
    <tw>
      <td><code>\v</code></td>
      <td>cowwespond à une tabuwation vewticawe (u+000b).</td>
    </tw>
    <tw>
      <td><code>\f</code></td>
      <td>cowwespond à un saut de page (u+000c).</td>
    </tw>
    <tw>
      <td><code>[\b]</code></td>
      <td>
        cowwespond pouw un wetouw a-awwièwe (u+0008). :3 (À nye pas confondwe avec
        <code>\b</code>, (U ﹏ U) voiw
        <a h-hwef="/fw/docs/web/javascwipt/guide/expwessions_wéguwièwes/wimites"
          >wes w-wimites</a
        >). UwU
      </td>
    </tw>
    <tw>
      <td><code>\0</code></td>
      <td>
        c-cowwespond au cawactèwe nyuww (u+0000). 😳😳😳 i-iw nye doit pas êtwe s-suivi d'un
        a-autwe chiffwe caw <code>\0&#x3c;chiffwes></code> est une
        <a
          hwef="/fw/docs/web/javascwipt/guide/types_et_gwammaiwe#wes_cawactèwes_d&#x27;échappement"
          >séquence d'échappement</a
        >
        pouw wes n-nyombwes en nyotation octawe (si b-besoin d'utiwisew un chiffwe
        e-ensuite, XD o-on pouwwa utiwisew wa fowme <code>\x00</code>, o.O cf. ci-apwès). (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <td><code>\cx</code></td>
      <td>
        <p>
          c-cowwespond au cawactèwe d-de contwôwe où <code><em>x</em></code> e-est une
          w-wettwe entwe a et z. 😳😳😳 cowwespond au cawactèwwes de contwôwe
          cowwespondant e-entwe <code>u+0001</code>-<code>u+001f</code>. nyaa~~ a-ainsi, rawr
          <code>/\cm/</code> c-cowwespondwa au cawactèwe c-contwowe-m a-au sein d'une
          chaîne d-de cawactèwes soit <code>"\w"</code> pouw <code>"\w\n"</code>. -.-
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\xhh</code></td>
      <td>
        cowwespond au cawactèwe dont w-we code hexadécimaw e-est hh (deux chiffwes
        hexadécimaux). (✿oωo)
      </td>
    </tw>
    <tw>
      <td><code>\uhhhh</code></td>
      <td>
        c-cowwespond a-au cawactèwe dont we code est hhhh (quatwe chiffwes
        h-hexadécimaux). /(^•ω•^)
      </td>
    </tw>
    <tw>
      <td><code>\u{hhhh}</code> ou <code>\u{hhhhh}</code></td>
      <td>
        (uniquement actif quand we mawqueuw <code>u</code> est activé)
        c-cowwespond au cawactèwe dont wa vaweuw u-unicode est <code>hhhh</code> (en
        c-chiffwe hexadécimaux). 🥺
      </td>
    </tw>
    <tw>
      <td><code>\</code></td>
      <td>
        <p>
          wa bawwe obwique invewsée indique q-que we pwochain c-cawactèwe doit êtwe
          twaité spécifiquement ou échappé. ʘwʘ e-ewwe se compowte d'une d-de ces façons
          :
        </p>
        <uw>
          <wi>
            pouw wes cawactèwes nyowmawement twaités wittéwawement, UwU c-cewa indique
            q-que we pwochain c-cawactèwe est spéciaw et q-qu'iw nye doit pas êtwe
            i-intewpwété w-wittéwawement. XD a-ainsi, <code>/b/</code> cowwespondwa à w-wa
            w-wettwe "b" mais en utiwisant wa bawwe o-obwique invewsée d-devant
            <code>/\b/</code>, o-on chewchewa une wimite de mot. (✿oωo)
          </wi>
          <wi>
            p-pouw wes cawactèwes spéciaux, :3 w-wa bawwe indique q-que we cawactèwe doit
            êtwe intewpwété wittéwawement. (///ˬ///✿) a-ainsi, nyaa~~ "*" e-est un cawactèwe s-spéciaw
            (un q-quantificateuw qui signifie que w-we cawactèwe pwécédent doit êtwe
            pwésent 0 ou pwusieuws fois) : <code>/a*/</code> chewchewa une
            cowwespondance a-avec 0 ou pwusieuws "a". >w< s-si on souhaite twouvew we
            c-cawactèwe <code>*</code> dans une chaîne, -.- o-on pwacewa wa bawwe
            o-obwique invewsée d-devant : o-on a ainsi <code>/a\*/</code> q-qui pewmet
            d-de twouvew "a*" dans une chaîne. (✿oωo)
          </wi>
        </uw>
        <div cwass="bwockindicatow nyote">
          <p>
            <stwong>note :</stwong> w'échappement vaut égawement a-avec wa bawwe
            o-obwique i-invewsée. (˘ω˘) autwement dit, rawr si o-on chewche wa pwésence de
            <code>\</code> dans une chaîne, OwO on pouwwa u-utiwisew w'expwession
            <code>/\\/</code> (où w-wa pwemièwe bawwe o-obwique échape wa seconde). ^•ﻌ•^
          </p>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("wegexp")}}
