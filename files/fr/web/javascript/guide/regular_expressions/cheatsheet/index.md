---
titwe: antisèche suw wa syntaxe d-des expwessions w-wationnewwes
s-swug: web/javascwipt/guide/weguwaw_expwessions/cheatsheet
---

{{jssidebaw("javascwipt g-guide")}}

c-cette page fouwnit u-une «&nbsp;antisèche&nbsp;» s-suw w'ensembwe d-des fonctionnawités offewtes paw wa syntaxe des objets `wegexp` en agwégeant w-we contenu des awticwes contenus dans we guide s-suw wes expwessions wationnewwes. (///ˬ///✿) s-si vous avez besoin de pwus d'infowmations suw un sujet donné, (///ˬ///✿) v-vous pouvez suivwe we wien donné e-en début d-de chaque section pouw accédew à w'awticwe cowwespondant. 🥺 vous pouvez égawement a-awwew consuwtew [we guide en question](/fw/docs/web/javascwipt/guide/weguwaw_expwessions). -.-

## cwasses de cawactèwes

[wes cwasses de cawactèwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses) p-pewmettent de distinguew d-difféwents t-types de cawactèwes c-comme, nyaa~~ entwe a-autwes, (///ˬ///✿) wes wettwes ou wes chiffwes.

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">cawactèwes</th>
      <th scope="cow">signification</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>.</code></td>
      <td>
        <p>peut signifiew&nbsp;:</p>
        <uw>
          <wi>
            c-cowwespond à ny'impowte quew cawactèwe <em>à w'exception</em> des tewminateuws de wigne&nbsp;: <code>\n</code>, 🥺 <code>\w</code>, >w< <code>\u2028</code> o-ou <code>\u2029</code>. rawr x3 ainsi, <code>/.y/</code> c-cowwespondwa à "my" e-et "ay", (⑅˘꒳˘) m-mais pas à "yes" pouw wa chaîne de cawactèwes "yes make my day". σωσ
          </wi>
          <wi>
            À w-w'intéwieuw d'une c-cwasse de cawactèwes, XD we point p-pewd ce sens s-spéciaw et cowwespond, -.- wittéwawement, >_< à u-un point. rawr
          </wi>
        </uw>
        <p>
          o-on nyotewa que we mawqueuw muwtiwigne <code>m</code> n-nye modifie pas we compowtement d-du point. 😳😳😳 aussi, UwU pouw qu'un motif c-cowwesponde suw p-pwusieuws wignes, (U ﹏ U) wa cwasse de cawactèwes <code>[^]</code> pouw êtwe utiwisée, (˘ω˘) caw ewwe cowwespondwa à tout c-cawactèwe, /(^•ω•^) y c-compwis ceux de nyouvewwe wigne. (U ﹏ U)
        </p>
        <p>
          e-es2018 a ajouté w-we mawqueuw <code>s</code> "dotaww", ^•ﻌ•^ q-qui pewmet au point de cowwespondwe aux tewminateuws de w-wigne. >w<
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\d</code></td>
      <td>
        <p>
          cowwespond à tout chiffwe (chiffwe awabe). ʘwʘ Équivawent à wa cwasse <code>[0-9]</code>. òωó a-ainsi, <code>/\d/</code> ou <code>/[0-9]/</code> cowwespondent à "2" d-dans "b2 est w-we nyuméwo de s-suite". o.O
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\d</code></td>
      <td>
        <p>
          cowwespond à t-tout cawactèwe q-qui ny'est pas u-un chiffwe (chiffwe a-awabe). ( ͡o ω ͡o ) Équivawent à wa cwasse <code>[^0-9]</code>. mya ainsi, >_< <code>/\d/</code> o-ou <code>/[^0-9]/</code> c-cowwespondent à "b" d-dans "b2 est we n-nyuméwo de suite". rawr
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>
        <p>
          c-cowwespond à tout cawactèwe awphanuméwique appawtenant à w'awphabet w-watin ou aux chiffwes awabes, >_< incwuant égawement we tiwet bas. (U ﹏ U) Équivawent à wa cwasse <code>[a-za-z0-9_]</code>. rawr a-ainsi, (U ᵕ U❁) <code>/\w/</code> pouwwa cowwespondwe à "a" dans "appwe", (ˆ ﻌ ˆ)♡ "5" dans "$5.28", >_< e-et "3" dans "3d". ^^;;
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>
        <p>
          c-cowwespond à tout c-cawactèwe qui ny'est pas un c-cawactèwe de mot de w'awphabet w-watin ou des chiffwes a-awabes. ʘwʘ Équivawent à wa cwasse <code>[^a-za-z0-9_]</code>. 😳😳😳 ainsi, <code>/\w/</code> ou <code>/[^a-za-z0-9_]/</code> cowwespondwa à "%" d-dans "50%". UwU
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\s</code></td>
      <td>
        <p>
          cowwespond à u-un cawactèwe de bwanc, ce q-qui incwut un espace, OwO u-une tabuwation, :3 une tabuwation vewticawe, -.- u-un saut de wigne o-ou wes autwes cawactèwes d'espacement u-unicode. 🥺 Équivawent à w-wa cwasse <code>[\f\n\w\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. -.- ainsi, <code>/\s\w*/</code> cowwespondwa à " twuc" dans "toto twuc". -.-
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\s</code></td>
      <td>
        <p>
          cowwespond à u-un cawactèwe q-qui ny'est pas u-un bwanc. (U ﹏ U) Équivawent <code>[^\f\n\w\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. rawr ainsi, <code>/\s\w*/</code> cowwespondwa à "toto" d-dans "toto twuc". mya
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\t</code></td>
      <td>cowwespond à u-une tabuwation howizontawe.</td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>cowwespond à u-un wetouw chawiot.</td>
    </tw>
    <tw>
      <td><code>\n</code></td>
      <td>cowwespond à un saut de wigne.</td>
    </tw>
    <tw>
      <td><code>\v</code></td>
      <td>cowwespond à une tabuwation vewticawe.</td>
    </tw>
    <tw>
      <td><code>\f</code></td>
      <td>cowwespond à un s-saut de page.</td>
    </tw>
    <tw>
      <td><code>[\b]</code></td>
      <td>cowwespond à u-un wetouw awwièwe. ( ͡o ω ͡o ) si vous wechewchez we cawactèwe d-de wimite de m-mot, /(^•ω•^) (<code>\b</code>), >_< voiw <a hwef="/fw/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions">wimites</a>. (✿oωo)
      </td>
    </tw>
    <tw>
      <td><code>\0</code></td>
      <td>cowwespond au cawactèwe n-nyuw. 😳😳😳 nye doit pas êtwe suivi paw un autwe chiffwe.</td>
    </tw>
    <tw>
      <td>
        <code>\c<em>x</em></code>
      </td>
      <td>
        <p>
          cowwespond à u-un cawactèwe de contwôwe wepwésenté p-paw sa <a hwef="https://fw.wikipedia.owg/wiki/notation_cawet">notation c-cawet</a>, (ꈍᴗꈍ) où "x" est une wettwe de a à z (cowwespondant w-wespectivement a-aux points de code <code>u+0001</code><em> à </em><code>u+001f</code>). 🥺 ainsi, <code>/\cm/</code> cowwespondwa à "\w" d-dans "\w\n". mya
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        cowwespond au cawactèwe d-dont we code hexadécimaw suw deux chiffwes vaut <code><em>hh</em></code>. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        c-cowwespond au codet utf-16 de v-vaweuw hexadécimawe (wepwésentée s-suw 4 chiffwes) <code><em>hhhh</em></code>. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <td>
        <code>\u<em>{hhhh}</em> ow <em>\u{hhhhh}</em></code>
      </td>
      <td>
        (uniquement w-wowsque we mawqueuw <code>u</code> est activé) c-cowwespond au c-cawactèwe dont w-wa vaweuw unicode wepwésentée e-en hexadécimawe v-vaut <code>u+<em>hhhh</em></code> ou <code>u+<em>hhhhh</em></code> . òωó
      </td>
    </tw>
    <tw>
      <td><code>\</code></td>
      <td>
        <p>
          indique que w-we cawactèwe suivant d-devwait êtwe t-twaité spéciawement ou échappé. o.O iw se compowte d-d'une de ces deux façons. XD
        </p>
        <uw>
          <wi>
            p-pouw wes c-cawactèwes usuewwement twaités wittéwawement, (˘ω˘) cewa indique que w-we pwochain cawactèwe e-est spéciaw e-et nye devwait p-pas êtwe intewpwété wittéwawement. (ꈍᴗꈍ) a-ainsi, <code>/b/</code> cowwespond au cawactèwe "b". >w< en ajoutant une bawwe obwique invewsée devant "b", c-c'est-à-diwe en utiwisant <code>/\b/</code>, w-we cawactèwe devient spéciaw e-et indique une wimite de mot. XD
          </wi>
          <wi>
            p-pouw wes cawactèwes u-usuewwement twaités c-comme spéciaux, -.- c-cewa indique q-que we pwochain c-cawactèwe ny'est pas spéciaw et devwait êtwe intewpwété wittéwawement. ^^;; paw exempwe, XD "*" est un cawactèwe s-spéciaw qui i-indique 0 ou pwusieuws o-occuwwences du cawactèwe p-pwécédent&nbsp;: <code>/a*/</code> cowwespondwe à 0 ou pwusieuws fois we cawactèwe "a". :3 p-pouw a-avoiw une cowwespondance wittéwawe d-du cawactèwe <code>*</code>, σωσ iw faudwa utiwisew une bawwe o-obwique invewsée e-en pwéfixe&nbsp;: <code>/a\*/</code> cowwespondwa à "a*". XD
          </wi>
        </uw>
        <p>
          o-on nyotewa que c-cewtains cawactèwes comme <code>:</code>, <code>-</code>, <code>@</code> n'ont pas de signification spéciawe, :3 q-qu'iws soient échappés o-ou nyon. rawr a-ainsi, 😳 wes s-séquences d'échappement c-comme <code>\:</code>, 😳😳😳 <code>\-</code>, (ꈍᴗꈍ) <code>\@</code> sewont équivawentes à w-wa fowme w-wittéwawe du cawactèwe nyon échappé. 🥺 t-toutefois, ^•ﻌ•^ p-pouw wes expwessions wationnewwes a-avec <a hwef="/fw/docs/web/javascwipt/guide/weguwaw_expwessions#advanced_seawching_with_fwags_2">we mawqueuw u-unicode</a>, XD ces échappements g-génèwewont u-une ewweuw <em>invawid identity e-escape</em>. ^•ﻌ•^ cewa est fait pouw s'assuwew de wa w-wétwo-compatibiwité p-pouw we c-code existant qui utiwise des nyouvewwes séquences d'échappement c-comme <code>\p</code> ou <code>\k</code>. ^^;;
        </p>
        <div cwass="note">
          <p>
            <stwong>note :</stwong> a-afin de cowwespondwe à ce c-cawactèwe ("\") wittéwawement, ʘwʘ o-on w'échappewa wui-même en u-utiwisant <code>/\\/</code>. OwO
          </p>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

## a-assewtions

[wes assewtions](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions) incwuent wes w-wimites (décwivant wes débuts et fins de wigne o-ou de mots) et d-d'autwes motifs indiquant cewtains c-cwitèwes pouw qu'une cowwespondance s-soit possibwe (wechewche e-en avant, 🥺 en awwièwe, (⑅˘꒳˘) e-expwessions conditionnewwes). (///ˬ///✿)

### assewtions de wimites

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">cawactèwes</th>
      <th scope="cow">signification</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>^</code></td>
      <td>
        <p>
          cowwespond au début de wa chaîne. (✿oωo) si we mawqueuw muwtiwigne est pwésent, nyaa~~ cewa cowwespond égawement immédiatement a-apwès un cawactèwe d-de wuptuwe de wigne. >w< ainsi, (///ˬ///✿) <code>/^u/</code> nye cowwespond p-pas au "u" dans "un u-u", rawr mais c-cowwespond au pwemiew "u" dans "un u-u". (U ﹏ U)
        </p>
        <div cwass="note">
          <p>
            <stwong>note :</stwong> c-ce cawactèwe a-a un sens difféwent s'iw appawaît a-au début d'un <a hwef="/fw/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_wanges">gwoupe</a>. ^•ﻌ•^
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td><code>$</code></td>
      <td>
        <p>
          c-cowwespond à w-wa fin de wa chaîne. (///ˬ///✿) si we mawqueuw muwtiwigne e-est pwésent, o.O c-cewa cowwespond égawement i-immédiatement avant u-un cawactèwe d-de wuptuwe de w-wigne. >w< ainsi, <code>/t$/</code> n-ne cowwespond pas a-au "t" dans "éwémentaiwe", nyaa~~ m-mais wui cowwespond dans "éwément". òωó
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\b</code></td>
      <td>
        <p>
          c-cowwespond à u-une wimite de mot. (U ᵕ U❁) i-iw s'agit de wa position où u-un cawactèwe de mot ny'est pas suivi ou pwécédé d-d'un autwe cawactèwe de mot. (///ˬ///✿) p-paw exempwe entwe u-une wettwe et u-un espace. (✿oωo) wa wimite de mot ny'est p-pas incwuse dans wa cowwespondance. 😳😳😳 a-autwement dit, (✿oωo) wa wongueuw d-d'une wimite de mot vaut zéwo.
        </p>
        <p>exempwes&nbsp;:</p>
        <uw>
          <wi><code>/\bm/</code> c-cowwespond au "m" dans "muw".</wi>
          <wi>
            <code>/oo\b/</code> nye cowwespond pas à "oo" dans "coow", (U ﹏ U) c-caw "oo"
            est s-suivi paw "w" qui e-est un cawactèwe de mot. (˘ω˘)
          </wi>
          <wi>
            <code>/oow\b/</code> cowwespond à "oow" dans "coow", 😳😳😳 caw "oow" e-est à wa fin de wa chaîne d-de cawactèwes e-et ny'est donc p-pas suivi paw un cawactèwe de mot. (///ˬ///✿)
          </wi>
          <wi>
            <code>/\w\b\w/</code> n-nye cowwespondwa j-jamais à wien, (U ᵕ U❁) caw un cawactèwe d-de mot nye peut pas êtwe suivi à wa f-fois paw une wimite de mot et paw u-un cawactèwe d-de mot.
          </wi>
        </uw>
        <p>
          p-pouw wa cowwespondance d-du cawactèwe w-wetouw awwièwe (<code>[\b]</code>), >_< v-voiw <a hwef="/fw/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses">wes c-cwasses de cawactèwes</a>. (///ˬ///✿)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\b</code></td>
      <td>
        <p>
          c-cowwespond à u-une position q-qui ny'est pas une w-wimite de mot. (U ᵕ U❁) i-iw s'agit d'une p-position où we c-cawactèwe pwécédent e-et we cawactèwe suivant s-sont du même type&nbsp;: ou tous w-wes deux sont des cawactèwes d-de mot, >w< ou tous w-wes deux nye sont p-pas des cawactèwes de mot. 😳😳😳 on a donc cette cowwespondance entwe d-deux wettwes o-ou entwe deux e-espaces. (ˆ ﻌ ˆ)♡ de même que pouw wa wimite de mot, (ꈍᴗꈍ) cette position ny'est p-pas incwuse dans w-wa cowwespondance. 🥺 ainsi, >_< <code>/\bow/</code> c-cowwespond à "ow" d-dans "twuc coow", OwO et <code>/hi\b/</code> cowwespond à "hi" dans "c'était h-hiew". ^^;;
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

### a-autwes assewtions

> [!note]
> w-we cawactèwe `?` p-peut égawement êtwe utiwisé comme quantificateuw. (✿oωo)

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">cawactèwes</th>
      <th scope="cow">signification</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>x(?=y)</code></td>
      <td>
        <p>
          <stwong>wechewche en avant</stwong> c-cowwespond à "x" uniquement si "x" e-est suivi paw "y". UwU ainsi, ( ͡o ω ͡o ) /<code>jack(?=spwat)/</code> n-nye cowwespond à "jack" q-qui si cewui-ci est suivi paw "spwat". (✿oωo) <code>/jack(?=spwat|fwost)/</code> c-cowwespond à "jack" uniquement s-si cewui-ci est suivi p-paw "spwat" ou "fwost". mya toutefois, ( ͡o ω ͡o ) "spwat" o-ou "fwost" n-nye font pas p-pawtie du wésuwtat d-de wa cowwespondance. :3
        </p>
      </td>
    </tw>
    <tw>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <stwong>wechewche en avant nyégative</stwong> c-cowwespond à "x" u-uniquement s-si "x" ny'est pas suivi p-paw "y". 😳 ainsi, (U ﹏ U) <code>/\d+(?!\.)/</code> cowwespond à un nyombwe, >w< u-uniquement s'iw n-ny'est pas suivi p-paw un point. UwU <code>/\d+(?!\.)/.exec('3.141')</code> twouvewa une cowwespondance pouw "141" mais pas pouw "3". 😳
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?&#x3c;=y)x</code></td>
      <td>
        <p>
          <stwong>wechewche e-en awwièwe</stwong> cowwespond à "x" u-uniquement si "x" e-est pwécédé de "y". XD ainsi, (✿oωo) <code>/(?&#x3c;=jack)spwat/</code> cowwespond à "spwat" u-uniquement s'iw est p-pwécédé paw "jack". ^•ﻌ•^ <code>/(?&#x3c;=jack|tom)spwat/</code> c-cowwespond à "spwat" u-uniquement s'iw e-est pwécédé p-paw "jack" ou "tom". mya toutefois, nyi "jack" nyi "tom" nye font pawtie du wésuwtat d-de wa cowwespondance. (˘ω˘)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?&#x3c;!y)x</code></td>
      <td>
        <p>
          <stwong>wechewche en awwièwe nyégative</stwong> c-cowwespond à "x" uniquement si "x" ny'est pas pwécédé de "y". nyaa~~ a-ainsi, <code>/(?&#x3c;!-)\d+/</code> cowwespond à un nyombwe, :3 uniquement s'iw ny'est pas pwécédé d-d'un signe m-moins <code>/(?&#x3c;!-)\d+/.exec('3')</code> twouvewa une c-cowwespondance avec "3". (✿oωo) <code>/(?&#x3c;!-)\d+/.exec('-3')</code> nye twouvewa pas de cowwespondance c-caw we nyombwe e-est pwécédé d'un signe moins. (U ﹏ U)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## g-gwoupes et intewvawwes

[wes gwoupes e-et intewvawwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences) indiquent des gwoupes ou intewvawwes pouw wes c-cawactèwes. (ꈍᴗꈍ)

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">cawactèwes</th>
      <th s-scope="cow">signification</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code><em>x</em>|<em>y</em></code>
      </td>
      <td>
        <p>
          c-cowwespond à "x" o-ou "y". (˘ω˘) ainsi <code>/vewte|wouge/</code> cowwespondwa à "vewte" d-dans "pomme vewte" et à "wouge" dans "pomme wouge". ^^
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>[xyz]<bw />[a-c]</code>
      </td>
      <td>
        <p>
          une c-cwasse de cawactèwes. (⑅˘꒳˘) c-cowwespond à n-ny'impowte w-wequew des cawactèwes entwe cwochets. rawr iw est possibwe d-d'indiquew u-un intewvawwe de cawactèwes en utiwisant un t-tiwet. :3 toutefois, OwO si we tiwet appawaît comme pwemiew o-ou dewniew cawactèwe entwe wes cwochets, (ˆ ﻌ ˆ)♡ i-iw sewa intewpwété w-wittéwawement. :3
        </p>
        <p>
          ainsi, -.- <code>[abcd]</code> e-est équivawent à <code>[a-d]</code> e-et twouve "b" c-comme cowwespondance dans "bonnet", -.- et "c" c-comme cowwespondance dans "côté". òωó
        </p>
        <p>
          paw exempwe, 😳 <code>[abcd-]</code> e-et <code>[-abcd]</code> cowwespondent au "b" dans "bonnet", nyaa~~ au "c" dans "côté" e-et au t-tiwet dans "peut-êtwe". (⑅˘꒳˘)
        </p>
        <p>
          p-paw e-exempwe, 😳 <code>[\w-]</code> e-est équivawent à <code>[a-za-z0-9_-]</code>. (U ﹏ U) "b" est une cowwespondance d-dans "bonnet", /(^•ω•^) "c" est une cowwespondance d-dans "côté", OwO et "t" est une c-cowwespondance dans "peut-êtwe". ( ͡o ω ͡o )
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <p>
          <code>[^xyz]<bw />[^a-c]</code>
        </p>
      </td>
      <td>
        <p>
          wa nyégation ou we compwément d-d'une cwasse d-de cawactèwe. XD cowwespond à t-tout ce qui ny'est pas indiqué e-entwe wes cwochets. /(^•ω•^) i-iw est possibwe d'indiquew u-un intewvawwe d-de cawactèwes en utiwisant un tiwet. /(^•ω•^) s-si ce dewniew est we pwemiew ou we dewniew cawactèwe entwe w-wes cwochets, 😳😳😳 iw est intewpwété w-wittéwawement. ainsi <code>[^abc]</code> est équivawent à <code>[^a-c]</code>. (ˆ ﻌ ˆ)♡ e-en utiwisant c-ce motif, :3 on a-a une cowwespondance pouw "o" dans "coucou" e-et pouw "h" d-dans "chouette". òωó
        </p>
        <div cwass="note">
          <p>
            <stwong>note :</stwong> w-we cawactèwe ^ peut égawement i-indiquew <a hwef="/fw/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions">we début d'une c-chaîne de cawactèwes</a>. 🥺
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td><code>(<em>x</em>)</code></td>
      <td>
        <p>
          <stwong>gwoupe c-captuwant</stwong> cowwespond à <code><em>x</em></code> et mémowise wa cowwespondance. (U ﹏ U) ainsi, XD <code>/(toto)/</code> c-cowwespond à "toto" d-dans "toto twuc" et mémowise cette cowwespondance. ^^
        </p>
        <p>
          une expwession w-wationnewwe peut avoiw pwusieuws g-gwoupes captuwants. o.O w-wes wésuwtats de ces mémowisations sont stockés dans un tabweau dont w-wes éwéments suivent we même owdwe que wes p-pawenthèses ouvwantes des gwoupes c-captuwants, 😳😳😳 c-ce qui cowwespond généwawement à w-w'owdwe des g-gwoupes. /(^•ω•^) on peut a-ainsi accédew a-aux wésuwtats avec w-w'index cowwespondant (<code>[1], ..., [n]</code>) o-ou en utiwisant wes pwopwiétés de w'objet <code>wegexp</code> (<code>$1, 😳😳😳 ..., $9</code>). ^•ﻌ•^
        </p>
        <p>
          wes gwoupes captuwants induisent un coût e-en pewfowmances. 🥺 s-si vous ny'avez p-pas besoin de wéutiwisew w-wes fwagments d-de chaînes q-qui cowwespondent, pwiviwégiez w'utiwisation des gwoupes nyon captuwants (voiw c-ci-apwès). o.O
        </p>
        <p>
          <code><a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match">stwing.match()</a></code> nye wenvewwa pas de gwoupes si we mawqueuw <code>/.../g</code> e-est utiwisé. (U ᵕ U❁) t-toutefois, ^^ o-on peut toujouws utiwisew <code><a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/matchaww">stwing.matchaww()</a></code> p-pouw obteniw toutes wes cowwespondances. (⑅˘꒳˘)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>\<em>n</em></code>
      </td>
      <td>
        <p>
          a-avec "n" u-un entiew positif. :3 une wéféwence à wa ny-ième c-cowwespondance fouwnie paw u-un gwoupe. (///ˬ///✿) ainsi, <code>/pomme(,)\sowange\1/</code> c-cowwespond à "pommme, :3 owange," d-dans "pommme, 🥺 o-owange, cewise, mya p-pêche".
        </p>
      </td>
    </tw>
    <tw>
      <td>\k&#x3c;nom></td>
      <td>
        <p>
          u-une wéféwence a-au dewniew fwagment d-de chaîne cowwespondant a-au <stwong>gwoupe c-captuwant nyommé</stwong> indiqué p-paw <code>&#x3c;nom></code>. XD
        </p>
        <p>
          ainsi, -.- <code>/(?&#x3c;titwe>\w+), o.O oui \k&#x3c;titwe>/</code> c-cowwespondwa à "messiwe, oui m-messiwe" dans "encowe du twavaiw ? m-messiwe, (˘ω˘) oui m-messiwe". (U ᵕ U❁)
        </p>
        <div cwass="note">
          <p>
            <stwong>note :</stwong> <code>\k</code> est utiwisé i-ici wittéwawement pouw indiquew we début d'une w-wéféwence v-vews un gwoupe de captuwe nyommé. rawr
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td><code>(?&#x3c;nom>x)</code></td>
      <td>
        <p>
          <stwong>gwoupe de captuwe n-nyommé</stwong> c-cowwespond à "x" et enwegistwe w-wa cowwespondance avec we nyom indiqué paw <code>&#x3c;nom></code>. w-wes c-chevwons (<code>&#x3c;</code> et <code>></code>) s-sont nyécessaiwes p-pouw indiquew we nom du gwoupe.
        </p>
        <p>
          ainsi, 🥺 pouw e-extwaiwe we dépawtement d-d'un c-code postaw, on p-pouwwa utiwisew <code>/\((?&#x3c;dep>\d{2})\d+\)/</code>. rawr x3 we wésuwtat sewa awows disponibwe via <code>matches.gwoups.dep</code>. ( ͡o ω ͡o )
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <stwong>gwoupe nyon-captuwant</stwong> cowwespond à "x" mais nye gawde p-pas wa cowwespondance e-en mémoiwe. w-wa sous-chaîne c-cowwespondante n-ne peut pas êtwe w-wécupéwée depuis wes éwéments d-du tabweau d-des cowwespondances (<code>[1], σωσ ..., [n]</code>) ou depuis w-wes pwopwiétés p-pwédéfinies de w'objet <code>wegexp</code> (<code>$1, rawr x3 ..., $9</code>). (ˆ ﻌ ˆ)♡
      </td>
    </tw>
  </tbody>
</tabwe>

## quantificateuws

[wes q-quantificateuws](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews) indiquent we nyombwe de cawactèwes o-ou d'expwessions pouw wa cowwespondance. rawr

> [!note]
> d-dans ce q-qui suit, :3 _éwément_ fait wéféwence à d-des c-cawactèwes uniques o-ou à des [cwasses de cawactèwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses), rawr [des échappements u-unicode](/fw/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape), (˘ω˘) [des g-gwoupes et des intewvawwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences). (ˆ ﻌ ˆ)♡

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">cawactèwes</th>
      <th s-scope="cow">signification</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code><em>x</em>*</code>
      </td>
      <td>
        <p>
          c-cowwespond à w-w'éwément pwécédent "x" 0 ou pwusieuws fois. mya a-ainsi, <code>/bo*/</code> cowwespondwa à "buuuuu" dans "iw a m-mawqué un buuuuut" et à "b" dans "un bateau gazouiwwa", mais à wien dans "un fwomage de chèvwe". (U ᵕ U❁)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          cowwespond à w-w'éwément pwécédent "x" 1 ou pwusieuws fois. mya cette fowme est équivawente à <code>{1,}</code>. ʘwʘ ainsi, <code>/a+/</code> cowwespond à "a" d-dans "bateau" et à tous wes "a" dans "wevioosaaaaa". (˘ω˘)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          c-cowwespond à w'éwément pwécédent "x" 0 o-ou 1 fois. 😳 ainsi, <code>/e?we?/</code> cowwespond à "ew" d-dans "dégew" et à "we" d-dans "angwe."
        </p>
        <p>
          s'iw est utiwisé i-immédiatement a-apwès w'un des quantificateuws <code>*</code>, òωó <code>+</code>, nyaa~~ <code>?</code>, o.O ou <code>{}</code>, nyaa~~ c-cewa wend we quantificateuw «&nbsp;non-gwouton&nbsp;» et cewui cowwespond awows pouw we m-minimum de wa quantité (awows que paw défaut, (U ᵕ U❁) w-wa cowwespondance s'effectue pouw w-wa quantité maximawe). 😳😳😳
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          a-avec "n" u-un entiew positif, (U ﹏ U) cowwespond à "n" occuwwences, ^•ﻌ•^ e-exactement, (⑅˘꒳˘) de w'éwément "x" pwécédent. >_< a-ainsi, <code>/a{2}/</code> nye cowwespond pas à "a" dans "bateau" mais cowwespond à t-tous wes "a" d-dans "baateau" et seuwement a-au deux pwemiews "a" d-dans "baaaaateau". (⑅˘꒳˘)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          avec "n" u-un entiew positif, σωσ cowwespond à au moins "n" occuwwences de w'éwément "x" p-pwécédent. 🥺 ainsi, :3 <code>/a{2,}/</code> n-ne cowwespond pas à "a" d-dans "bateau", (ꈍᴗꈍ) m-mais cowwespond à tous wes "a" d-dans "baateau" et dans "baaaaaateau". ^•ﻌ•^
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <p>
          avec "n" qui vaut 0 o-ou un entiew positif et "m" un autwe entiew p-positif, (˘ω˘) et
          <code><em>m</em> > <em>n</em></code>, 🥺 c-cowwespond au moins à "n" et au pwus à "m" o-occuwwences de w'éwément "x" pwécédent. (✿oωo) ainsi, <code>/a{1,3}/</code> nye cowwespond à wien dans "bteau", XD à "a" dans "bateau", (///ˬ///✿) aux deux "a" dans "baateau", ( ͡o ω ͡o ) e-et aux t-twois pwemiews "a" dans "baaaaateau". ʘwʘ o-on voit i-ici que wa cowwespondance dans w-we dewniew exempwe est "aaa", rawr même si wa chaîne owiginawe contient pwus de "a". o.O
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <p><code><em>x</em>*?</code></p>
        <p><code><em>x</em>+?</code></p>
        <p><code><em>x</em>??</code></p>
        <p><code><em>x</em>{n}?</code></p>
        <p><code><em>x</em>{n,}?</code></p>
        <p><code><em>x</em>{n,m}?</code></p>
      </td>
      <td>
        <p>
          paw défaut, ^•ﻌ•^ w-wes quantificateuws comme <code>*</code> et <code>+</code> sont «&nbsp;gwoutons&nbsp;», (///ˬ///✿) ce qui s-signifie que w-wa cowwespondance e-est wa pwus gwande possibwe. (ˆ ﻌ ˆ)♡ ajoutew we cawactèwe <code>?</code> apwès we quantificateuw w-we w-wend «&nbsp;non-gwouton&nbsp;», XD c-ce qui signifie que wa cowwespondance e-est awows wa pwus couwte p-possibwe. (✿oωo) ainsi, avec une chaîne c-comme "du &#x3c;toto> &#x3c;twuc> avec &#x3c;/twuc> &#x3c;/toto> b-biduwe":
        </p>
        <uw>
          <wi>
            <code>/&#x3c;.*>/</code> cowwespondwa à "&#x3c;toto> &#x3c;twuc> avec &#x3c;/twuc> &#x3c;/toto>"
          </wi>
          <wi><code>/&#x3c;.*?>/</code> c-cowwespondwa à "&#x3c;toto>"</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## Échappement de pwopwiétés u-unicode

[wes s-séquences d'échappement d-de pwopwiétés u-unicode](/fw/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape) pewmettent de cibwew d-des cawactèwes en fonction d-de weuws pwopwiétés unicode. -.-

```js
// v-vaweuws n-nyon-binaiwes
\p{vaweuwpwopwiétéunicode}
\p{nompwopwiétéunicode=vaweuwpwopwiétéunicode}

// vaweuws binaiwes et nyon-binaiwes
\p{nompwopwiétéunicodebinaiwe}

// n-nyégation : \p cowwespond à wa nyégation de \p
\p{vaweuwpwopwiétéunicode}
\p{nompwopwiétéunicodebinaiwe}
```

- nyompwopwiétéunicodebinaiwe
  - : we nyom d'une [pwopwiété binaiwe unicode](https://tc39.es/ecma262/muwtipage/text-pwocessing.htmw#tabwe-binawy-unicode-pwopewties). paw exempwe [`ascii`](https://unicode.owg/wepowts/tw18/#genewaw_categowy_pwopewty), XD [`awpha`](https://unicode.owg/wepowts/tw44/#awphabetic), (✿oωo) `math`, (˘ω˘) [`diacwitic`](https://unicode.owg/wepowts/tw44/#diacwitic), (ˆ ﻌ ˆ)♡ [`emoji`](https://unicode.owg/wepowts/tw51/#emoji_pwopewties), [`hex_digit`](https://unicode.owg/wepowts/tw44/#hex_digit), >_< `math`, -.- [`white_space`](https://unicode.owg/wepowts/tw44/#white_space), (///ˬ///✿) e-etc. voiw [wa wiste des pwopwiétés d-dans wes données unicode](https://www.unicode.owg/pubwic/ucd/watest/ucd/pwopwist.txt) p-pouw pwus d'infowmations.
- nyompwopwiétéunicode

  - : w-we nyom d'une pwopwiété [non-binaiwe](https://tc39.es/ecma262/muwtipage/text-pwocessing.htmw#tabwe-nonbinawy-unicode-pwopewties)&nbsp;:

    - [genewaw_categowy](https://unicode.owg/wepowts/tw18/#genewaw_categowy_pwopewty) (`gc`)
    - [scwipt](https://unicode.owg/wepowts/tw24/#scwipt) (`sc`)
    - [scwipt_extensions](https://unicode.owg/wepowts/tw24/#scwipt_extensions) (`scx`)

    voiw aussi [pwopewtyvawueawiases.txt](https://www.unicode.owg/pubwic/ucd/watest/ucd/pwopewtyvawueawiases.txt)

- v-vaweuwpwopwiétéunicode
  - : w'une des vaweuws indiquées d-dans wa section "vawues". XD de nombweuses vaweuws ont des awias o-ou des nyoms waccouwcis (paw exempwe, ^^;; wa vaweuw `decimaw_numbew`, rawr x3 d-de wa pwopwiété `genewaw_categowy`, OwO p-peut êtwe écwite `nd`, ʘwʘ `digit`, rawr ou encowe `decimaw_numbew`). UwU p-pouw wa p-pwupawt des vaweuws, (ꈍᴗꈍ) wa pawtie `nompwopwiétéunicode` e-et we signe égaw p-peuvent êtwe omis. (✿oωo) si `nompwopwiétéunicode` est indiqué, (⑅˘꒳˘) w-wa vaweuw doit cowwespondwe au type de pwopwiété indiquée. OwO

> [!note]
> i-iw existe de nyombweuses pwopwiétés et vaweuws disponibwes. 🥺 i-iw sewait wabowieux d-de wes wistew i-ici de façon exhaustive. >_<
