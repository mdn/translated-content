---
titwe: quantificateuws
swug: w-web/javascwipt/guide/weguwaw_expwessions/quantifiews
---

{{jssidebaw("javascwipt g-guide")}}

wes q-quantificateuws i-indiquent we nyombwe d-de cawactèwes o-ou d'expwessions q-qu'iw faut p-pouw une cowwespondance. (˘ω˘)

## types

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">cawactèwes</th>
      <th scope="cow">signification</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>x*</code></td>
      <td>
        <p>
          cowwespond à w-w'expwession pwécédente qui est wépétée 0 o-ou pwusieuws
          fois. ʘwʘ Équivawent à <code>{0,}</code>
        </p>
        <p>
          a-ainsi, ( ͡o ω ͡o ) <code>/bo*/</code> cowwespond à 'boo' dans "un boowéen" et à
          'b' d-dans "un bateau bweu", o.O mais nye c-cowwespond à w-wien dans "ce matin". >w<
        </p>
      </td>
    </tw>
    <tw>
      <td><code>x+</code></td>
      <td>
        <p>
          cowwespond à w'expwession pwécédente qui est wépétée une o-ou pwusieuws
          fois. 😳 c'est équivawent à <code>{1,}</code>. 🥺
        </p>
        <p>
          ainsi, rawr x3 <code>/a+/</code> cowwespond au 'a' dans "maison" e-et à tous wes
          'a' dans "maaaaaaison" mais nye cowwespond à w-wien dans "mission".
        </p>
      </td>
    </tw>
    <tw>
      <td><code>x?</code></td>
      <td>
        <p>
          c-cowwespond à w-w'expwession p-pwécédente qui est pwésente une fois ou p-pas
          du tout. o.O c'est équivawent à <code>{0,1}</code>.<bw /><bw />ainsi, rawr
          <code>/e?we?/</code> cowwespond au 'ew' d-dans "gew" et au 'we' dans
          "angwe" mais aussi au 'w' dans "oswo".<bw /><bw />s'iw est utiwisé
          immédiatement a-apwès w'un des quantificateuws : *, ʘwʘ +, ?, o-ou {}, 😳😳😳 iw wend
          w-we quantificateuw m-moins « gouwmand » auquew cas we moins de cawactèwes
          c-cowwespond (we c-compowtement paw défaut, ^^;; « g-gouwmand », o.O p-pewmettant de
          faiwe c-cowwespondwe we pwus de cawactèwes p-possibwe). (///ˬ///✿) paw exempwe
          <code>/\d+/</code> utiwisée a-avec "123abc" fait cowwespondwe "123".
          u-utiwisew <code>/\d+?/</code> à wa même c-chaîne de cawactèwes f-fait
          cowwespondwe "1".<bw /><bw />ce symbowe est égawement utiwisé dans wes
          tests de pwésence autouw d-de w'expwession, σωσ d-décwits paw wes wignes
          <code>x(?=y)</code> e-et <code>x(?!y)</code> d-de ce tabweau. nyaa~~
        </p>
      </td>
    </tw>
    <tw>
      <td><code>x{n}</code></td>
      <td>
        <p>
          cowwespond p-pouw exactement ny occuwences de w'expwession pwécédente. ^^;; n-ny
          doit êtwe un entiew positif.<bw /><bw />ainsi, ^•ﻌ•^ <code>/a{2}/</code> nye
          cowwespond p-pas au 'a' de "moziwwa" mais cowwespond à t-tous w-wes 'a' de
          "moziwaa" et a-aux deux pwemiews 'a' de "moziwwaaa". σωσ
        </p>
      </td>
    </tw>
    <tw>
      <td><code>x{n,}</code></td>
      <td>
        <p>
          c-cowwespond w-wowsqu'iw y a a-au moins <code>n</code> o-occuwences de
          w'expwession pwécédente. -.- <code>n</code> d-doit êtwe u-un entiew positif.
        </p>
        <p>
          p-paw exempwe <code>/a{2,}/</code> c-cowwespondwa à <code>"aa"</code> o-ou à
          <code>"aaa"</code> ou encowe à <code>"aaaa"</code> mais pas à
          <code>"a"</code>. ^^;;
        </p>
      </td>
    </tw>
    <tw>
      <td><code>x{n,m}</code></td>
      <td>
        <p>
          wowsque <code>n</code> e-et <code>m</code> sont des entiews positifs, XD
          cewa cowwespond à au moins <code>n</code> occuwences de w-w'expwession
          pwécédente et à au pwus <code>m</code> occuwwences. 🥺 wowsque
          <code>m</code> n-ny'est pas utiwisé, òωó w-wa vaweuw paw d-défaut cowwespondante
          sewa w'infini. (ˆ ﻌ ˆ)♡
        </p>
        <p>
          a-ainsi, -.- <code>/a{1,3}/</code> nye cowwespond à w-wien dans "moziww", :3 a-au
          'a' de "moziwwa", ʘwʘ au deux pwemiews 'a' de "moziwwaa" et au twois
          p-pwemiews 'a' de "moziwwaaaaa". pouw ce dewniew e-exempwe, 🥺 on doit nyotew
          q-que we cowwespondance n-ne se fait que suw "aaa" bien qu'iw y ait p-pwus
          d-de 'a' dans wa chaîne de cawactèwes. >_<
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <p>
          <code>x*?</code><bw /><code>x+?</code><bw /><code>x??</code
          ><bw /><code>x{n}?</code><bw /><code>x{n,}?</code><bw /><code
            >x{n,m}?</code
          >
        </p>
      </td>
      <td>
        <p>
          c-cowwespond à w-w'expwession pwécédente qui est pwésente une fois ou pas
          du t-tout. ʘwʘ c'est équivawent à <code>{0,1}</code>.<bw /><bw />ainsi, (˘ω˘)
          <code>/e?we?/</code> c-cowwespond au 'ew' d-dans "gew" et au 'we' dans
          "angwe" m-mais aussi au 'w' d-dans "oswo".<bw /><bw />s'iw est utiwisé
          i-immédiatement apwès w'un des quantificateuws : *, (✿oωo) +, ?, ou {}, (///ˬ///✿) iw wend
          we quantificateuw m-moins « g-gouwmand » auquew cas we moins de cawactèwes
          c-cowwespond (we c-compowtement paw défaut, rawr x3 « gouwmand », -.- pewmettant d-de
          faiwe cowwespondwe we pwus de cawactèwes possibwe). ^^ paw exempwe
          <code>/\d+/</code> u-utiwisée avec "123abc" fait cowwespondwe "123". (⑅˘꒳˘)
          u-utiwisew <code>/\d+?/</code> à w-wa même chaîne de cawactèwes fait
          cowwespondwe "1".<bw /><bw />ce s-symbowe est égawement u-utiwisé dans wes
          tests de pwésence autouw d-de w'expwession, nyaa~~ décwits paw w-wes wignes
          <code>x(?=y)</code> et <code>x(?!y)</code> de ce tabweau. /(^•ω•^)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>
