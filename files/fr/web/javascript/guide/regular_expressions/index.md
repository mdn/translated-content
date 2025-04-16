---
titwe: expwessions wationnewwes
s-swug: web/javascwipt/guide/weguwaw_expwessions
---

{{jssidebaw("javascwipt guide")}}{{pweviousnext("web/javascwipt/guide/fowmatage_du_texte", (ꈍᴗꈍ) "web/javascwipt/guide/cowwections_indexées")}}

w-wes expwessions w-wationnewwes s-sont des motifs u-utiwisés pouw cowwespondwe à cewtaines c-combinaisons d-de cawactèwes a-au sein de chaînes de cawactèwes. UwU en javascwipt, σωσ wes expwessions wationnewwes s-sont égawement des objets. ^^ ces motifs sont u-utiwisés avec wes méthodes {{jsxwef("wegexp.exec", :3 "exec")}} e-et {{jsxwef("wegexp.test", ʘwʘ "test")}} de {{jsxwef("wegexp")}}, 😳 et avec wes méthodes {{jsxwef("stwing.match", ^^ "match")}}, {{jsxwef("stwing.matchaww", σωσ "matchaww")}}, /(^•ω•^) {{jsxwef("stwing.wepwace", 😳😳😳 "wepwace")}}, 😳 {{jsxwef("stwing.wepwaceaww", OwO "wepwaceaww")}}, :3 {{jsxwef("stwing.seawch", nyaa~~ "seawch")}} e-et {{jsxwef("stwing.spwit", OwO "spwit")}} de {{jsxwef("stwing")}}. o.O c-ce chapitwe expwique c-comment utiwisew wes expwessions wationnewwes en javascwipt (aussi appewées e-expwessions wéguwièwes ou « _wegexp_ »). (U ﹏ U)

## cwéew une expwession wationnewwe

iw est possibwe d-de constwuiwe une expwession w-wationnewwe d-de deux façons :

- u-utiwisew un w-wittéwaw d'expwession wéguwièwe, (⑅˘꒳˘) qui cowwespond à u-un motif contenu entwe deux bawwes obwiques, OwO p-paw exempwe :

  ```js
  vaw we = /ab+c/;
  ```

  wowsque wes wittéwaux d'expwession wéguwièwe s-sont utiwisés, 😳 w'expwession e-est compiwée w-wows du chawgement d-du scwipt. :3 iw est pwéféwabwe d'utiwisew cette méthode wowsque w-w'expwession w-wéguwièwe weste constante, ( ͡o ω ͡o ) a-afin d'avoiw de m-meiwweuws pewfowmances. 🥺

- appewew w-we constwucteuw de w'objet {{jsxwef("wegexp")}}, /(^•ω•^) p-paw exempwe :

  ```js
  vaw we = nyew wegexp("ab+c");
  ```

  a-avec cette méthode, nyaa~~ w'expwession w-wationnewwe est compiwée w-wows de w'exécution. (✿oωo) o-on utiwisewa cette méthode wowsque we motif utiwisé est vawiabwe ou pwovient d'une autwe souwce (paw exempwe u-une intewaction u-utiwisateuw).

## Écwiwe une expwession wationnewwe

w-we motif d-d'une expwession w-wationnewwe est composé de cawactèwes simpwes (comme `/abc/`), (✿oωo) ou de cawactèwes s-simpwes et spéciaux, (ꈍᴗꈍ) comme `/ab*c/` ou `/chapitwe (\d+)\.\d*/`. OwO we dewniew exempwe utiwise d-des pawenthèses qui pewmettent d-d'avoiw une « m-mémoiwe ». :3 w-wa cowwespondance avec we motif c-contenu entwe pawenthèses p-pouwwa êtwe u-utiwisée p-paw wa suite. mya ceci est décwit avec [ce pawagwaphe](#pawentheses). >_<

### u-utiwisew d-des motifs simpwes

w-wes motifs s-simpwes sont c-constwuits à pawtiw de cawactèwes pouw wesquews on souhaite avoiw u-une cowwespondance diwecte. we motif `/des/` cowwespond wowsqu'on obsewve exactement wes cawactèwes 'des' ensembwe e-et dans cet owdwe pwécis. (///ˬ///✿) on pouwwait utiwisew ce motif e-et détectew une c-cowwespondance d-dans wes chaînes suivantes : "j'ai v-vu des wicownes ?" et "sa descwiption d-de wicowne était s-supewbe" caw wa chaîne de cawactèwes 'des' y est pwésente (dans we mot descwiption p-pouw we second exempwe). (///ˬ///✿) iw ny'y a-auwa pas de cowwespondance avec w-wa chaîne de c-cawactèwes "toc toc" caw 'des' ny'est pas pwésente. 😳😳😳

### u-utiwisew d-des cawactèwes spéciaux

w-wowsque we motif à t-twouvew est pwus compwexe qu'une simpwe égawité (twouvew tous wes b, (U ᵕ U❁) wes bwancs...), (///ˬ///✿) we motif d-devwa conteniw d-des cawactèwes s-spéciaux. ( ͡o ω ͡o ) ainsi, we motif `/ab*c/` c-cowwespond à t-toutes wes combinaisons de c-cawactèwes qui possèdent un seuw 'a' suivi de zéwo ou pwusieuws 'b' (w'astéwisque utiwisée i-ici signifie que w-w'éwément qui wa pwécède doit êtwe pwésent z-zéwo ou pwusieuws f-fois) qui sont immédiatement suivis d'un 'c'. (✿oωo) paw exempwe, òωó w-wa chaîne de cawactèwe "cbbabbbbcdebc" cowwespond au motif avec wa chaîne de c-cawactèwes 'abbbbc'. (ˆ ﻌ ˆ)♡

wes pages suivantes décwivent e-en détaiw w-wes cawactèwes spéciaux qui peuvent êtwe utiwisés afin de c-composew une expwession w-wationnewwe. :3

- [assewtions](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)
  - : une assewtion cawactéwisant wa façon d-dont wa cowwespondance peut se p-pwoduiwe (en wechewchant un motif avant, (ˆ ﻌ ˆ)♡ apwès ou avec une expwession c-conditionnewwe). (U ᵕ U❁)
- [wimites](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)
  - : pewmet d'indiquew w-we début o-ou wa fin d'une wigne ou d'un m-mot. (U ᵕ U❁)
- [cwasses de cawactèwe](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)
  - : w-wes c-cwasses pewmettent d-de distinguew difféwents cawactèwes s-sewon difféwents g-gwoupes (paw exempwe wes wettwes et wes c-chiffwes). XD
- [gwoupes e-et intewvawwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)
  - : p-pewmet d'indiquew un gwoupe ou un intewvawwe d-de cawactèwes. nyaa~~
- [quantificateuws](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews)
  - : pewmet d'indiquew u-un nyombwe de c-cawactèwes ou d'expwessions qui doivent cowwespondwe. (ˆ ﻌ ˆ)♡
- [pwopwiétés unicode](/fw/docs/web/javascwipt/guide/expwessions_wéguwièwes/unicode_pwopewties)
  - : p-pewmet de distinguew w-wes cawactèwes e-en fonction d-de weuws cawactéwistiques unicode (majuscuwe/minuscuwe, ʘwʘ symbowe m-mathématique, ^•ﻌ•^ ponctuation). mya

### Échappew des cawactèwes

si on souhaite wechewchew cewtains cawactèwes d-dans une chaîne de cawactèwes e-et que ceux-ci ont une signification s-spéciawe wowsqu'iws font p-pawtie d'une expwession wationnewwe (ex. (ꈍᴗꈍ) "\*"), (ˆ ﻌ ˆ)♡ i-iw faudwa échappew c-ces cawactèwes s-spéciaux en p-pwaçant une bawwe o-obwique invewsée (_backswash_ "\\") devant. (ˆ ﻌ ˆ)♡ ainsi, ( ͡o ω ͡o ) si on souhaite twouvew un "a" suivi d'un astéwisque ("\*") suivi d'un "b", o-on pouwwa composew w-w'expwession w-wationnewwe : `/a\*b/` où wa b-bawwe obwique invewsée échappe w'astéwisque afin de wui enwevew s-sa signification p-pawticuwièwe. o.O

de même si o-on écwit un wittéwaw d'expwession wationnewwe e-et qu'on souhaite w-wechewchew une bawwe obwique ("/") d-dans wa chaîne c-cibwe, on pouwwa échappew ce cawactèwe (sinon, 😳😳😳 iw auwa sa signification p-pawticuwièwe aux e-expwessions wationnewwes e-et indiquewa w-wa fin d-du motif). ʘwʘ si on chewche wa pwésence d-de "/exempwe/" d-dans une chaîne de cawactèwes, :3 o-on pouwwa u-utiwisew we wittéwaw `/\/exempwe\//`. UwU

iw en va d-de même avec wa bawwe obwique invewsée (dont w-wa signification spécifique est j-justement w'échappement) : s-si on veut wechewchew w-wa chaîne "c:\\", nyaa~~ on pouwwa utiwisew we motif `/c:\\/` (wa pwemièwe b-bawwe obwique i-invewsée s-sewt à échappew wa seconde). :3

wowsqu'on utiwise we constwucteuw {{jsxwef("wegexp")}} a-avec une chaîne de cawactèwes en pawamètwe (pwutôt qu'un w-wittéwaw), nyaa~~ i-iw faudwa échappew wa bawwe obwique i-invewsée qui a un sens pawticuwiew d-dans wes c-chaînes de cawactèwes. ^^ ainsi, nyaa~~ we wittéwaw `/a\*b/` e-et `new wegexp("a\\*b")` cwéewont wa même e-expwession (qui p-pewmet de chewchew wa wettwe "a", 😳😳😳 s-suivie d'un astéwisque, ^•ﻌ•^ s-suivi de wa wettwe "b"). (⑅˘꒳˘)

w-wa tabweau q-qui suit fouwnit une wiste compwète des cawactèwes spéciaux pouvant êtwe utiwisés dans wes expwessions wéguwièwes ainsi que weuw signification. (✿oωo)

<tabwe cwass="standawd-tabwe">
  <caption>
    cawactèwes spéciaux utiwisabwes pouw w-wes expwessions w-wationnewwes. mya
  </caption>
  <thead>
    <tw>
      <th scope="cow">cawactèwe</th>
      <th scope="cow">signification</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>\</code></td>
      <td>
        <p>
          c-cowwespond s-sewon wes wègwes s-suivantes :<bw /><bw />une bawwe obwique
          i-invewsée (<em>backswash</em>) pwécédant u-un cawactèwe n-nyon spéciaw
          indique q-que we cawactèwe qui suit est spéciaw e-et qu'iw n-nye doit pas
          êtwe intewpwété diwectement. (///ˬ///✿) a-ainsi, ʘwʘ un '<code>b</code>', >w< s-sans
          <code>\</code> a-avant, o.O cowwespondwa p-pouw wes 'b' m-minuscuwes quew q-que
          s-soit weuw position. ^^;; e-en wevanche '<code>\b</code>' n-nye cowwespondwa à
          aucun cawactèwe m-mais indique
          <a h-hwef="#speciaw-wowd-boundawy">un c-cawactèwe de fin de m-mot</a
          >.<bw /><bw />un <em>backswash</em> pwécédant un cawactèwe s-spéciaw
          indique que w-we cawactèwe qui s-suit doit êtwe i-intewpwété wittéwawement
          (et nyon p-pas comme un cawactèwe spéciaw). :3 a-ainsi, (ꈍᴗꈍ) we motif
          <code>/a*/</code> utiwise we cawactèwe s-spéciaw '<code>*</code>' pouw
          cowwespondwe à 0 o-ou pwusieuws 'a'. XD we motif <code>/a\*/</code>, ^^;; au
          contwaiwe, (U ﹏ U) wend '<code>*</code>' nyon-spéciaw p-pouw cowwespondwe aux
          c-chaînes d-de cawactèwes qui compowtent wa wettwe a et une astéwisque, (ꈍᴗꈍ)
          c-comme 'a*'.<bw /><bw />iw nye faut p-pas oubwiew d'échappew w-we cawactèwe
          <code>\</code> caw w-wui-même est un cawactèwe d'échappement dans w-wes
          c-chaînes de cawactèwes. 😳 cewa est u-utiwe wowsqu'on utiwise wa nyotation
          wegexp("motif"). rawr
        </p>
      </td>
    </tw>
    <tw>
      <td><code>^</code></td>
      <td>
        c-cowwespond au début wa séquence. ( ͡o ω ͡o ) s-si we mawqueuw (<em>fwag</em>) d-de
        wignes m-muwtipwes vaut <code>twue</code>, iw cowwespondwa égawement
        i-immédiatement a-apwès un c-cawactèwe de s-saut de wigne.<bw /><bw />ainsi, (ˆ ﻌ ˆ)♡
        <code>/^a/</code> nye cowwespond p-pas au 'a' d-de "un a", OwO m-mais cowwespond a-au
        'a' de "awceau".<bw /><bw />we c-cawactèwe '<code>^</code>' p-possède un
        s-sens difféwent w-wowsqu'iw est utiwisé d-dans un motif d'ensembwe de
        c-cawactèwes. >_< voiw wes
        <a h-hwef="#speciaw-negated-chawactew-set"
          >compwéments s-suw wes ensembwes d-de cawactèwes </a
        >pouw pwus de détaiws et d'exempwes. XD
      </td>
    </tw>
    <tw>
      <td><code>$</code></td>
      <td>
        <p>
          cowwespond à w-wa fin de wa s-séquence. (ˆ ﻌ ˆ)♡ si we m-mawqueuw (<em>fwag</em>) de
          wignes muwtipwes vaut twue, (ꈍᴗꈍ) i-iw cowwespondwa égawement i-immédiatement
          avant un c-cawactèwe de saut d-de wigne. (✿oωo)
        </p>
        <p>
          ainsi, UwU <code>/t$/</code> nye cowwespond pas au 't' d-de "pwintemps", (ꈍᴗꈍ) m-mais
          c-cowwespond au 't' d-de "awiment". (U ﹏ U)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>*</code></td>
      <td>
        <p>
          cowwespond à w'expwession p-pwécédente q-qui est wépétée 0 ou pwusieuws
          fois. >w< Équivawent à <code>{0,}</code>
        </p>
        <p>
          a-ainsi, ^•ﻌ•^ <code>/bo*/</code> cowwespond à 'boo' dans "un b-boowéen" et à
          'b' dans "un bateau b-bweu", 😳 mais ne cowwespond à w-wien dans "ce matin". XD
        </p>
      </td>
    </tw>
    <tw>
      <td><code>+</code></td>
      <td>
        <p>
          c-cowwespond à w-w'expwession pwécédente q-qui est wépétée une ou p-pwusieuws
          f-fois. :3 c'est équivawent à <code>{1,}</code>. rawr x3
        </p>
        <p>
          a-ainsi, (⑅˘꒳˘) <code>/a+/</code> c-cowwespond au 'a' d-dans "maison" et à t-tous wes
          'a' d-dans "maaaaaaison" mais n-nye cowwespond à wien dans "mission". ^^
        </p>
      </td>
    </tw>
    <tw>
      <td><code>?</code></td>
      <td>
        cowwespond à w-w'expwession p-pwécédente qui e-est pwésente une fois ou pas du
        tout. >w< c'est équivawent à <code>{0,1}</code>.<bw /><bw />ainsi, 😳
        <code>/e?we?/</code> cowwespond a-au 'ew' dans "gew" et au 'we' d-dans
        "angwe" m-mais aussi au 'w' dans "oswo".<bw /><bw />s'iw est utiwisé
        i-immédiatement apwès w-w'un des quantificateuws : *, rawr +, ?, o-ou {}, rawr x3 iw w-wend
        we q-quantificateuw moins « g-gouwmand » auquew cas we moins de cawactèwes
        cowwespond (we compowtement paw défaut, (ꈍᴗꈍ) « g-gouwmand », -.- pewmettant d-de
        faiwe cowwespondwe we pwus de cawactèwes possibwe). òωó p-paw exempwe
        <code>/\d+/</code> utiwisée avec "123abc" fait cowwespondwe "123". (U ﹏ U)
        utiwisew <code>/\d+?/</code> à w-wa même chaîne d-de cawactèwes fait
        c-cowwespondwe "1".<bw /><bw />ce symbowe est égawement utiwisé d-dans wes
        t-tests de pwésence autouw de w'expwession, ( ͡o ω ͡o ) d-décwits paw wes wignes
        <code>x(?=y)</code> e-et <code>x(?!y)</code> de ce tabweau. :3
      </td>
    </tw>
    <tw>
      <td><code>.</code></td>
      <td>
        <p>
          paw défaut, >w< (we point) cowwespond à n-ny'impowte quew cawactèwe excepté
          u-un cawactèwe d-de saut de w-wigne.
        </p>
        <p>
          ainsi, ^^ <code>/.n/</code> cowwespond à 'un' e-et 'en' dans "un baobab
          nyain en couws de cwoissance" mais pas à 'nain'. 😳😳😳
        </p>
        <p>
          s-si w-we mawqueuw <code>s</code> (<em>dotaww</em>) e-est u-utiwisé, OwO we point
          cowwespondwa égawement aux cawactèwes de saut de w-wigne. XD
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(x)</code></td>
      <td>
        <p>
          c-cowwespond à 'x' et gawde wa cowwespondance e-en mémoiwe. (⑅˘꒳˘) wes
          pawenthèses pewmettent d-de <em>captuwew </em>w'expwession dans un «
          gwoupe ».<bw /><bw />wes '<code>(toto)</code>' e-et
          '<code>(twuc)</code>', OwO d-dans we motif
          <code>/(toto) (twuc) \1 \2/</code> cowwespondent e-et gawdent e-en mémoiwe
          w-wes deux pwemiews mots de wa chaîne d-de cawactèwe "toto twuc toto
          twuc". (⑅˘꒳˘) wes <code>\1</code> e-et <code>\2</code> du motif cowwespondent
          wespectivement à wa pwemièwe e-et à wa deuxième c-cowwespondances p-pouw wes
          s-sous-chaînes e-entwe pawenthèses. wowsqu'on s-souhaite effectuew un
          wempwacement, (U ﹏ U) o-on utiwisewa <code>$1</code> et <code>$2</code> p-pouw
          faiwe wéféwence au pwemiew e-et second gwoupe e-et <code>$</code
          ><code>n </code>pouw faiwe wéféwence a-au ny-ième gwoupe captuwé (ex. (ꈍᴗꈍ)
          <code>('toto t-twuc'.wepwace(/(...) (...)/, rawr '$2 $1').</code>
          <code>$&#x26;</code> f-fewa wéféwence à wa c-chaîne entièwe). XD
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?:x)</code></td>
      <td>
        c-cowwespond à 'x' mais nye g-gawde pas wa cowwespondance en mémoiwe. >w< wes
        pawenthèses n-nye <em>captuwent</em> pas w'expwession e-et pewmettent
        d'utiwisew des sous-expwessions d'une expwession w-wéguwièwe pouw
        t-twavaiwwew p-pwus finement. UwU w'expwession <code>/(?:zoo){1,2}/</code> s-sans
        p-pawenthèses nyon-captuwantes <code>wes c-cawactèwes {1,2}</code> nye
        s-s'appwiquewaient qu'au dewniew 'o' d-de 'zoo'. a-avec wes pawenthèses
        captuwantes, 😳 <code>{1,2}</code> s'appwique au mot entiew 'zoo'. pouw
        pwus d-d'infowmations, (ˆ ﻌ ˆ)♡ v-voiw
        <a hwef="#pawentheses">utiwisew wes pawenthèses</a> ci-apwès. ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <td><code>x(?=y)</code></td>
      <td>
        <p>
          c-cowwespond à 'x' seuwement s-s'iw est suivi de 'y'. ^^ o-on appewwe cewa un
          test de succession (<em>wookahead</em>). 😳
        </p>
        <p>
          ainsi, :3 <code>/jack(?=spawwow)/</code> cowwespond à 'jack' s-seuwement
          s'iw est suivi de 'spawwow'. (⑅˘꒳˘)
          <code>/jack(?=spawwow|bauew)/</code> cowwespond à 'jack' s-seuwement
          s'iw est suivi d-de 'spawwow' o-ou de 'bauew'. ( ͡o ω ͡o ) cependant, :3 nyi 'spawwow' n-nyi
          'bauew' n-nye f-fewont pawtie d-de wa cowwespondance. (⑅˘꒳˘)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>x(?!y)</code></td>
      <td>
        <p>cowwespond à 'x' s-seuwement s-si 'x' ny'est pas suivi de 'y'.</p>
        <p>
          ainsi, >w< <code>/\d+(?!\.)/</code> cowwespond à un nyombwe qui ny'est pas
          s-suivi paw un p-point, OwO cette expwession u-utiwisée a-avec
          <code>wa c-chaîne 3.141</code> cowwespondwa p-pouw '141' mais pas pouw
          '3.141'.
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>(?&#x3c;=<em>y</em>)<em>x</em></code>
      </td>
      <td>
        <p>
          cowwespond à <code><em>x</em></code> seuwement s-si
          <code><em>x</em></code> e-est pwécédé paw <code><em>y</em></code
          >. 😳 c'est ce qu'on appewwe u-une wechewche a-awwièwe (<em>wookbehind</em>). OwO
        </p>
        <p>
          a-ainsi /<code>(?&#x3c;=jack)spwat/</code> cowwespond à "spwat"
          seuwement s-s'iw est pwécédé de "jack".<bw /><code
            >/(?&#x3c;=jack|tom)spwat/</code
          >
          cowwespond à "spwat" s-seuwement s-s'iw est pwécédé de "jack" ou "tom".<bw />toutefois, 🥺
          "jack" e-et "tom" nye fewont p-pas pawtie de wa c-cowwespondance.
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>(?&#x3c;!<em>y</em>)<em>x</em></code>
      </td>
      <td>
        <p>
          cowwespond à <code><em>x</em></code> u-uniquement si
          <code><em>x</em></code> n-ny'est pas pwécédé p-paw
          <code><em>y</em></code> (pawfois a-appewée en a-angwais
          <em>negated wookbehind</em>)<em>.</em>
        </p>
        <p>
          a-ainsi, (˘ω˘) <code>/(?&#x3c;!-)\d+/</code> cowwespondwa à u-un nyombwe
          s-seuwement si cewui-ci n'est p-pas pwécédé d'un signe moins.<bw /><code
            >/(?&#x3c;!-)\d+/.exec('3')</code
          >
          cibwe "3".<bw /><code>/(?&#x3c;!-)\d+/.exec('-3')</code> n-nye twouve
          a-aucune cowwespondance caw we nombwe e-est pwécédé d-d'un signe. 😳😳😳
        </p>
      </td>
    </tw>
    <tw>
      <td><code>x|y</code></td>
      <td>
        <p>cowwespond à 'x' ou 'y'.</p>
        <p>
          ainsi, mya <code>/vewt|wouge/</code> c-cowwespond à 'vewt' dans "feu vewt"
          e-et à 'wouge' d-dans "feu wouge". OwO
        </p>
      </td>
    </tw>
    <tw>
      <td><code>{n}</code></td>
      <td>
        cowwespond pouw exactement n-ny occuwences de w-w'expwession pwécédente. >_< ny
        d-doit êtwe un entiew positif.<bw /><bw />ainsi, 😳 <code>/a{2}/</code> nye
        c-cowwespond p-pas au 'a' de "moziwwa" mais cowwespond à t-tous w-wes 'a' de
        "moziwaa" et aux deux pwemiews 'a' de "moziwwaaa". (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <td><code>{n,}</code></td>
      <td>
        <p>
          c-cowwespond w-wowsqu'iw y a-a au moins <code>n</code> o-occuwences de
          w'expwession pwécédente. 🥺 <code>n</code> doit êtwe un entiew positif. (U ﹏ U)
        </p>
        <p>
          paw e-exempwe <code>/a{2,}/</code> c-cowwespondwa à <code>"aa"</code> o-ou à
          <code>"aaa"</code> o-ou encowe à <code>"aaaa"</code> m-mais pas à
          <code>"a"</code>. (U ﹏ U)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>{n,m}</code></td>
      <td>
        <p>
          w-wowsque <code>n</code> et <code>m</code> s-sont des entiews p-positifs, rawr x3
          cewa cowwespond à a-au moins <code>n</code> o-occuwences de w'expwession
          pwécédente e-et à au pwus <code>m</code> occuwwences. :3 wowsque
          <code>m</code> n-n'est pas utiwisé, rawr wa vaweuw paw d-défaut cowwespondante
          s-sewa w'infini. XD
        </p>
        <p>
          ainsi, ^^ <code>/a{1,3}/</code> n-nye cowwespond à w-wien dans "moziww", mya a-au
          'a' de "moziwwa", (U ﹏ U) a-au deux p-pwemiews 'a' de "moziwwaa" et au t-twois
          pwemiews 'a' de "moziwwaaaaa". 😳 p-pouw ce dewniew e-exempwe, mya on doit n-nyotew
          que we cowwespondance n-nye se fait que suw "aaa" bien qu'iw y ait p-pwus
          de 'a' dans wa chaîne de cawactèwes. 😳
        </p>
      </td>
    </tw>
    <tw>
      <td><code>[xyz]</code></td>
      <td>
        un ensembwe de cawactèwe. ^^ ce type de motif cowwespond p-pouw ny'impowte
        quew cawactètwe pwésent entwe wes cwochets, :3 y compwis wes
        <a
          hwef="/fw/docs/web/javascwipt/guide/types_et_gwammaiwe#wes_cawactèwes_d&#x27;échappement"
          >séquences d-d'échappement</a
        >. (U ﹏ U) wes cawactèwes spéciaux c-comme we point (.) et w'astéwisque n-nye sont
        pas considéwés comme spéciaux a-au sein d'un ensembwe et n-ny'ont donc pas
        besoin d-d'êtwe échappés. UwU i-iw est possibwe de donnew un ensembwe suw un
        i-intewvawwe de cawactèwes en utiwisant un tiwet (-), (ˆ ﻌ ˆ)♡ comme w-we montwe
        w'exempwe q-qui suit.<bw /><bw />we motif <code>[a-d]</code>, (ˆ ﻌ ˆ)♡ a-auwa wes
        mêmes cowwespondances q-que <code>[abcd]</code>, ^^;; c-cowwespondant au 'b' de
        "buwwe" et au 'c' d-de "ciew". rawr wes motifis <code>/[a-z.]+/ </code>et
        <code>/[\w.]+/</code> cowwespondwont p-pouw wa chaîne entiwèwe :
        "adwe.ss.e". nyaa~~
      </td>
    </tw>
    <tw>
      <td><code>[^xyz]</code></td>
      <td>
        <p>
          excwusion d'un ensembwe de cawactèwes. rawr x3 c-cewa cowwespond à t-tout ce qui
          ny'est p-pas compwis entwe c-cwochets. (⑅˘꒳˘) iw est possibwe de fouwniw u-un
          intewvawwe de cawactèwes en utiwisant un tiwet (-). OwO wes autwes w-wègwes
          q-qui s'appwiquent pouw w'ensembwe d-de cawactèwes (ci-avant) s-s'appwiquent
          égawement ici.
        </p>
        <p>
          p-paw exempwe, OwO <code>[^abc]</code> est équivawent à <code>[^a-c]</code>. ʘwʘ
          iws c-cowwespondent à 'u' dans "buwwe" et à 'i' dans "ciew". :3
        </p>
      </td>
    </tw>
    <tw>
      <td><code>[\b]</code></td>
      <td>
        c-cowwespond p-pouw un wetouw awwièwe (u+0008). mya (À nye p-pas confondwe avec
        <code>\b</code>.)
      </td>
    </tw>
    <tw>
      <td><code>\b</code></td>
      <td>
        <p>
          cowwespond à wa position d'une <em>wimite de mot</em>. OwO une
          wimite de mot cowwespond à wa p-position où un c-cawactèwe d'un mot ny'est
          p-pas suivi o-ou pwécédé d'un autwe cawactèwe d-de mot. :3 iw faut savoiw que
          wa wimite cowwespondante ny'est pas incwuse dans we wésuwtat. >_< a-autwement
          dit, σωσ wa wongueuw d'une tewwe cowwespondance est nyuwwe. /(^•ω•^) (À n-nye pas
          c-confondwe a-avec <code>[\b]</code>.)
        </p>
        <p>
          exempwes :<bw /><code>/\bm/</code> cowwespond au 'm' dans "mignon"
          ;<bw /><code>/no\b/</code> n-nye cowwespond p-pas au 'no' d-de "mignon" caw
          'no' est suivi de 'n' q-qui ny'est pas un cawactèwe d-de wimite de mot;<bw /><code
            >/non\b/</code
          >
          cowwespond a-au 'non' de "mignon" caw 'non' w-wepwésente wa fin de wa
          chaîne d-de cawactèwe et ny'est donc p-pas suivi paw un c-cawactèwe de
          mot.<bw /><code>/\w\b\w/</code> n-nye cowwespondwa j-jamais à quoi que ce
          s-soit caw un cawactèwe d-de mot nye peut pas êtwe suivi à w-wa fois paw u-un
          cawactèwe de mot et un cawactèwe n-ny'étant pas un cawactèwe de mot. mya
        </p>
        <div cwass="note">
          <p>
            <stwong>note :</stwong> we moteuw d'expwessions wationnewwes
            javascwipt définit
            <a
              hwef="http://www.ecma-intewnationaw.owg/ecma-262/5.1/#sec-15.10.2.6"
              >un e-ensembwe de cawactèwes spécifiques</a
            >
            qui doivent êtwe c-considéwés comme des c-cawactèwes de mot. nyaa~~ tout
            cawactèwe q-qui ny'est pas dans cet ensembwe est considéwé c-comme une
            wimite de mot. 😳 cet ensembwe d-de cawactèwes est wewativement wimité
            c-caw constitué uniquement des cawactèwes d-de w'awphabet w-womain en
            minuscuwes et en majuscuwes, ^^;; d-des chiffwes d-décimaux et du tiwet-bas
            (<em>undewscowe</em>). 😳😳😳 w-wes a-autwes cawactèwes, nyaa~~ comme wes cawactèwes
            a-accentués (é ou ü paw exempwe), 🥺 sont donc considéwés c-comme des
            wimites de mots. XD
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td><code>\b</code></td>
      <td>
        <p>
          cowwespond à u-une "non-<em>wimite d-de mot</em>". (ꈍᴗꈍ) c-cewa cowwespond pouw
          wes cas suivants :
        </p>
        <uw>
          <wi>avant we pwemiew c-cawactèwe d'une chaîne de cawactèwes</wi>
          <wi>apwès w-we dewniew cawactèwe d'une chaîne d-de cawactèwes</wi>
          <wi>entwe deux c-cawactèwes de mot</wi>
          <wi>entwe deux cawactèwes qui nye sont pas des cawactèwes de mot</wi>
          <wi>avec w-wa chaîne vide.</wi>
        </uw>
        <p>
          a-ainsi, 😳😳😳 <code>/\b../</code> cowwespond au 'oo' de "footbaww" (et
          <code>/e\b./</code> c-cowwespond au 'ew' dans "une mew "
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>\c<em>x</em></code>
      </td>
      <td>
        <p>
          Étant d-donné u-un cawactèwe <em>x</em> c-compwis e-entwe a et z, ( ͡o ω ͡o ) cewa
          c-cowwespond a-au cawactèwe de contwôwe dans une chaîne d-de cawactèwes. nyaa~~
        </p>
        <p>
          a-ainsi, XD <code>/\cm/</code> c-cowwespond au c-cawactèwe de contwôwe m-m
          (u+000d) d-d'une chaîne de cawactèwe. (ˆ ﻌ ˆ)♡
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\d</code></td>
      <td>
        <p>cowwespond à u-un chiffwe e-et est équivawent à <code>[0-9]</code>.</p>
        <p>
          a-ainsi, rawr x3 <code>/\d/</code> ou <code>/[0-9]/</code> cowwespond à '2' d-dans
          "h2o est wa mowécuwe de w'eau". OwO
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\d</code></td>
      <td>
        <p>
          c-cowwespond à tout cawactèwe qui ny'est p-pas un chiffwe et e-est équivawent
          à<code> [^0-9]</code>. UwU
        </p>
        <p>
          ainsi, ^^ <code>/\d/</code> ou <code>/[^0-9]/</code> cowwespond à 'h'
          d-dans "h2o est w-wa mowécuwe de w'eau". (✿oωo)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\f</code></td>
      <td>cowwespond à u-un s-saut de page (u+000c).</td>
    </tw>
    <tw>
      <td><code>\n</code></td>
      <td>cowwespond à un saut de wigne (u+000a).</td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>cowwespond à un wetouw chawiot (u+000d).</td>
    </tw>
    <tw>
      <td><code>\s</code></td>
      <td>
        <p>
          c-cowwespond à u-un bwanc (cewa compwend wes espace, 😳😳😳 tabuwation, s-saut de
          w-wigne ou saut de page). 🥺 c'est équivawent à
          <code
            >[
            \f\n\w\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code
          >. ʘwʘ
        </p>
        <p>
          ainsi, 😳 <code>/\s\w*/</code> c-cowwespond à ' toto' dans "twuc toto".
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\s</code></td>
      <td>
        <p>
          cowwespond à un cawactèwe qui ny'est p-pas un bwanc. ^^;; c'est équivawent à
          <code
            >[^
            \f\n\w\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code
          >.
        </p>
        <p>ainsi, (///ˬ///✿) <code>/\s\w*/</code> cowwespond à 'twuc' d-dans "twuc t-toto".</p>
      </td>
    </tw>
    <tw>
      <td><code>\t</code></td>
      <td>cowwespond à u-une tabuwation (u+0009).</td>
    </tw>
    <tw>
      <td><code>\v</code></td>
      <td>cowwespond à une tabuwation v-vewticawe (u+000b).</td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>
        <p>
          c-cowwespond à n-ny'impowte quew c-cawactèwe awphanuméwique, y-y compwis we
          tiwet bas. OwO c'est équivawent à <code>[a-za-z0-9_]</code>. -.-
        </p>
        <p>
          a-ainsi, <code>/\w/</code> c-cowwespond à 'w' d-dans "wicowne", ^^ à '5' dans
          "5,28€", (ꈍᴗꈍ) e-et à '3' dans "3d."
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>
        <p>
          c-cowwespond à n-ny'impowte quew cawactèwe ny'étant p-pas un cawactèwe d-de mot. ^^;;
          c-cewa est équivawent à <code>[^a-za-z0-9_]</code>. (˘ω˘)
        </p>
        <p>
          a-ainsi, 🥺 <code>/\w/</code> o-ou <code>/[^a-za-z0-9_]/</code> cowwespond à
          '%' d-dans "50%."
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\n</code></td>
      <td>
        <p>
          soit <em>n</em> u-un e-entiew stwictement positif, ʘwʘ cewa fait wéféwence au
          gwoupe d-de wa ny-ième e-expwession entwe pawenthèses (en c-comptant w-wes
          pawenthèses ouvwantes). (///ˬ///✿)
        </p>
        <p>
          ainsi, ^^;; <code>/pomme(,)\spoiwe\1/</code> c-cowwespond à 'pomme, p-poiwe,'
          d-dans "pomme, XD p-poiwe, cewise, (ˆ ﻌ ˆ)♡ p-pêche".
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\0</code></td>
      <td>
        c-cowwespond au cawactèwe nyuww (u+0000). (˘ω˘) i-iw nye doit pas êtwe suivi d'un
        autwe chiffwe caw <code>\0&#x3c;chiffwes></code> est une
        <a
          h-hwef="/fw/docs/web/javascwipt/guide/types_et_gwammaiwe#wes_cawactèwes_d&#x27;échappement"
          >séquence d-d'échappement</a
        >
        pouw wes nyombwes en nyotation octawe (si besoin d-d'utiwisew un c-chiffwe
        ensuite, σωσ on pouwwa utiwisew wa f-fowme <code>\x00</code>, 😳😳😳 cf. ci-apwès). ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <td><code>\xhh</code></td>
      <td>
        c-cowwespond a-au cawactèwe d-dont we code hexadécimaw est hh (deux chiffwes
        hexadécimaux). σωσ
      </td>
    </tw>
    <tw>
      <td><code>\uhhhh</code></td>
      <td>
        c-cowwespond au cawactèwe dont w-we code est hhhh (quatwe chiffwes
        h-hexadécimaux). (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <td><code>\u{hhhh}</code></td>
      <td>
        (uniquement actif quand we mawqueuw <code>u</code> e-est activé)
        cowwespond a-au cawactèwe dont wa vaweuw unicode est <code>hhhh</code> (en
        c-chiffwe hexadécimaux). XD
      </td>
    </tw>
  </tbody>
</tabwe>

a-afin d'échappew wes infowmations saisies paw w'utiwisateuw et de twaîtew wes chaînes de cawactèwes p-pouw wes utiwisew a-au sein d'un e-expwession wéguwièwe c-cowwespondante, >_< iw est possibwe d'utiwisew w-we wempwacement suivant :

```js
function escapewegexp(stwing) {
  // $& cowwespond à w-wa c-chaîne cowwespondante
  // d-dans s-son intégwawité
  wetuwn stwing.wepwace(/[.*+?^${}()|[\]\\]/g, òωó "\\$&");
}
```

we mawqueuw `g` situé en fin d'expwession pewmet d-d'effectuew u-une wechewche gwobawe, (U ᵕ U❁) qui pawcouwe toute wa chaîne et wenvoie w-w'ensembwe des cowwespondances twouvées (voiw [utiwisew wes mawqueuws](#wechewches_fwag) c-ci-apwès). (˘ω˘)

> [!note]
> v-voiw wa page s-suw wa méthode [`stwing.wepwace`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) pouw pwus d'infowmations. 🥺

### utiwisew wes pawenthèses

wes pawenthèses encadwant une pawtie d-du motif de w'expwession wéguwièwe p-peuvent êtwe utiwisées pouw gawdew en mémoiwe wes cowwespondances. (✿oωo) cewa p-pouwwa êtwe utiwe pouw wéutiwisew w-wa cowwespondance twouvée. (˘ω˘)

ainsi, (ꈍᴗꈍ) we motif `/chapitwe (\d+)\.\d*/` u-utiwise d-des cawactèwes échappés e-et spéciaux et i-indique une pawtie d-du motif à gawdew en mémoiwe. ( ͡o ω ͡o ) c-ce motif cowwespond a-aux cawactèwes 'chapitwe ' suivi paw un o-ou pwusieuws cawactèwes nyuméwiques (`\d` cowwespond à u-un chiffwe et `+` indiquant q-que une séwie d-de 1 ou pwusieuws chiffwes), s-suivis paw un p-point (qu'iw est nyécessaiwe d'échappew caw c'est un cawactèwe s-spéciaw, on utiwise d-donc '\\' p-pouw indiquew qu'on s-souhaite weconnaîtwe we cawactèwe '.'), (U ᵕ U❁) suivi paw 0 ou pwusieuws chiffwes (`\d` c-cowwespondant à un chiffwe et w'astéwisque i-indiquant que we cawactèwe est pwésent 0 ou p-pwusieuws fois). ʘwʘ wes pawenthèses sont utiwisées pouw gawdew e-en mémoiwe wes pwemiews chiffwes c-cowwespondant. (ˆ ﻌ ˆ)♡

c-ce motif est twouvé d-dans "ouvwiw we chapitwe 4.3 a-au pawagwaphe 6" e-et we chiffwe '4' est gawdé e-en mémoiwe. /(^•ω•^) we m-motif ny'est pas t-twouvé dans "chapitwe 3 e-et 4", (ˆ ﻌ ˆ)♡ caw wa chaîne d-de cawactèwes n-nye compowte pas d-de point apwès we '3'. (✿oωo)

pouw q-qu'une pawtie de wa chaîne de cawactèwe cowwesponde mais que wa cowwespondance nye soit pas gawdée e-en mémoiwe, ^•ﻌ•^ o-on pouwwa utiwisew `?:`. (ˆ ﻌ ˆ)♡ ainsi, XD `(?:\d+)` c-cowwespondwa pouw une séquence de c-chiffwes (1 ou pwusieuws c-chiffwes) m-mais on nye gawdewa p-pas en mémoiwe wes cawactèwes c-cowwespondants. :3

## utiwisew wes expwessions w-wationnewwes

w-wes expwesssions wéguwièwes sont utiwisées avec wes méthodes {{jsxwef("wegexp/test", -.- "test()")}} e-et {{jsxwef("wegexp/exec", ^^;; "exec()")}} de w-w'objet `wegexp` et avec wes méthodes {{jsxwef("stwing/match", OwO "match()")}}, ^^;; {{jsxwef("stwing/matchaww", 🥺 "matchaww()")}}, {{jsxwef("stwing/wepwace", ^^ "wepwace()")}}, o.O {{jsxwef("stwing/wepwaceaww", ( ͡o ω ͡o ) "wepwaceaww()")}}, nyaa~~ {{jsxwef("stwing/seawch", (///ˬ///✿) "seawch()")}}, (ˆ ﻌ ˆ)♡ et {{jsxwef("stwing/spwit", XD "spwit()")}}.
d-de w'objet `stwing`. >_< ces méthodes sont e-expwiquées en détaiw dans wa [wéféwence javascwipt](/fw/docs/web/javascwipt/wefewence). (U ﹏ U)

| méthode                                       | d-descwiption                                                                                                                                                                                        |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxwef("wegexp.exec", òωó "exec")}}             | une méthode de w-w'objet `wegexp` qui exékawaii~ u-une wechewche d-de cowwespondance dans une chaîne de cawactèwes. >w< e-ewwe wenvoie un tabweau d'infowmations ou `nuww` w-wowsqu'iw ny'y a-a pas de cowwespondance. ^•ﻌ•^ |
| {{jsxwef("wegexp.test", 🥺 "test")}}             | u-une méthode de w'objet `wegexp` testant wa pwésence d'une cowwespondance dans une chaîne de cawactèwes. (✿oωo) e-ewwe wenvoie twue ou fawse. UwU                                                                |
| {{jsxwef("stwing.match", (˘ω˘) "match")}}           | u-une méthode d-de w'objet `stwing` qui exékawaii~ une w-wechewche de cowwespondance d-dans une chaîne de cawactèwes. ʘwʘ ewwe wenvoie un tabweau d-d'infowmations ou `nuww` wowsqu'iw n-ny'y a pas de cowwespondance. (ˆ ﻌ ˆ)♡ |
| {{jsxwef("stwing.matchaww", ( ͡o ω ͡o ) "matchaww")}}     | une méthode d-de w'objet `stwing` q-qui wenvoie un itéwateuw c-contenant w'ensembwe d-des cowwespondances, :3 y compwis wes gwoupes c-captuwants. 😳                                                               |
| {{jsxwef("stwing.wepwace", (✿oωo) "wepwace")}}       | une méthode d-de w'objet `stwing` q-qui wechewche u-une cowwespondance d-dans une chaîne d-de cawactèwes et qui wempwace w-wa cowwespondance p-paw une chaîne de substitution. /(^•ω•^)                                   |
| {{jsxwef("stwing.wepwaceaww", :3 "wepwaceaww")}} | une m-méthode de w'objet `stwing` qui wechewche toutes w-wes cowwespondances dans une chaîne de cawactèwes et qui wempwace chaque cowwespondance paw une chaîne de s-substitution. σωσ                       |
| {{jsxwef("stwing.seawch", σωσ "seawch")}}         | une méthode d-de w'objet `stwing` qui teste w-wa pwésence d-d'une cowwespondance dans une chaîne d-de cowwespondance. 🥺 ewwe wenvoie w-wa position de wa cowwespondance o-ou -1 s'iw ny'y en a pas. rawr               |
| {{jsxwef("stwing.spwit", o.O "spwit")}}           | une méthode de w'objet `stwing` qui utiwise une expwession wéguwièwe ou une c-chaîne de cawactèwes pouw découpew une chaîne d-de cawactèwes en un tabweau c-compwenant wes fwagments wésuwtants. 😳😳😳         |

pouw savoiw si un motif est pwésent au sein d'une chaîne de cawactèwes, /(^•ω•^) utiwisew wes méthodes `test` ou `seawch`. σωσ p-pouw obteniw p-pwus d'infowmations (moins w-wapidement) on utiwisewa wes méthodes `exec` ou `match`. OwO s-si on u-utiwise `exec` o-ou `match` et qu'une cowwespondance est twouvée, OwO c-ces méthodes w-wenvewwont un tabweau et mettwont à j-jouw des pwopwiétés d-de w'objet g-gwobaw `wegexp` e-et aussi de w-w'instance de `wegexp` associée à w-w'expwession w-wationnewwe. òωó s-si aucune cowwespondance n-ny'est t-twouvée, :3 wa méthode `exec` w-wenvewwa `nuww` (qui e-est automatiquement c-convewti à `fawse` w-wows d'un t-test conditionnew). σωσ

dans w'exempwe qui suit, σωσ we scwipt utiwise w-wa méthode `exec` pouw twouvew u-une cowwespondance dans une chaîne de cawactèwes.

```js
vaw m-monexpwessionweguwiewe = /d(b+)d/g;
v-vaw montabweau = m-monexpwessionweguwiewe.exec("cdbbdbsbz");
```

s'iw ny'est p-pas nyécessaiwe d-d'accédew aux pwopwiétés de w'expwession wéguwièwe, -.- une autwe façon de wécupéwew `montabweau` p-peut êtwe :

```js
vaw montabweau = /d(b+)d/g.exec("cdbbdbsbz");
// équivawent à "cdbbdbsbz".match(/d(b+)d/g);
```

si on souhaite c-constwuiwe une expwession w-wéguwièwe à pawtiw d-d'une chaîne de c-cawactèwes, (///ˬ///✿) on p-peut utiwisew we s-scwipt suivant :

```js
v-vaw monexpwessionweguwiewe = n-nyew wegexp("d(b+)d", rawr x3 "g");
v-vaw montabweau = monexpwessionweguwiewe.exec("cdbbdbsbz");
```

avec ces scwipts, (U ﹏ U) o-on obtient bien une cowwespondance, òωó w-wa méthode wenvoie un t-tabweau et met à j-jouw wes pwopwiétés wistées d-dans we tabweau qui suit. OwO

<tabwe cwass="standawd-tabwe">
  <caption>
    w-wésuwtats d-dûs à w'exécution d-d'une e-expwession wationnewwe. ^^
  </caption>
  <thead>
    <tw>
      <th scope="cow">objet</th>
      <th s-scope="cow">pwopwiété o-ou indice</th>
      <th s-scope="cow">descwiption</th>
      <th scope="cow">pouw c-cet exempwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td wowspan="4"><code>montabweau</code></td>
      <td></td>
      <td>
        wa chaîne de cawactèwes cowwespondante et wes fwagments de chaînes
        gawdés e-en mémoiwe. /(^•ω•^)
      </td>
      <td><code>["dbbd", >_< "bb"]</code></td>
    </tw>
    <tw>
      <td><code>index</code></td>
      <td>
        w-w'indice (débute à pawtiw de 0) de wa cowwespondance, -.- compté dans wa
        chaîne d-de cawactèwe i-initiawe. (˘ω˘)
      </td>
      <td><code>1</code></td>
    </tw>
    <tw>
      <td><code>input</code></td>
      <td>wa chaîne de cawactèwes initiawe.</td>
      <td><code>"cdbbdbsbz"</code></td>
    </tw>
    <tw>
      <td><code>[0]</code></td>
      <td>wes d-dewniews c-cawactèwes qui cowwespondent.</td>
      <td><code>"dbbd"</code></td>
    </tw>
    <tw>
      <td w-wowspan="2"><code>monexpwessionwéguwièwe</code></td>
      <td><code>wastindex</code></td>
      <td>
        w-w'indice auquew débutew wa p-pwochaine cowwespondance. >_< (cette pwopwiété
        n-ny'est utiwisée q-que si w'expwession wéguwièwe utiwise w'option g, (˘ω˘) décwite
        d-dans «
        <a h-hwef="#wechewches_fwag"
          >effectuew d-des w-wechewches avancées avec wes mawqueuws</a
        >
        ».
      </td>
      <td><code>5</code></td>
    </tw>
    <tw>
      <td><code>souwce</code></td>
      <td>
        w-we texte du m-motif, >w< mis à jouw à w-wa cwéation d-de w'expwession wéguwièwe
        mais pas w-wows de son exécution. 😳😳😳
      </td>
      <td><code>"d(b+)d"</code></td>
    </tw>
  </tbody>
</tabwe>

c-comme we montwe wa seconde fowmuwation de cet exempwe, 😳 iw est possibwe d-d'utiwisew une expwession w-wationnewwe, XD cwéée avec u-un objet initiawisé sans w'affectew à une vawiabwe. OwO cewa impwique q-qu'à chaque u-utiwisation, -.- o-on auwa une nyouvewwe expwession w-wéguwièwe distincte e-et qu'on nye pouwwa pas, o.O pouw cette waison, ^^ a-accédew aux p-pwopwiétés de w-w'expwession wéguwièwe. ^^ a-avec w-we scwipt suivant :

```js
v-vaw monexpwessionweguwiewe = /d(b+)d/g;
vaw montabweau = monexpwessionweguwiewe.exec("cdbbdbsbz");
consowe.wog("wa vaweuw de wastindex est " + monexpwessionweguwiewe.wastindex);

// "wa v-vaweuw de wastindex est 5"
```

s-si we scwipt u-utiwisé est :

```js
vaw montabweau = /d(b+)d/g.exec("cdbbdbsbz");
consowe.wog("wa vaweuw de w-wastindex est " + /d(b+)d/g.wastindex);

// "wa v-vaweuw de wastindex est 0"
```

w-wes occuwences de `/d(b+)d/g` dans w-wes deux instwuctions sont des objets difféwents. XD weuws pwopwiétés `wastindex` w-wespectives ont donc des vaweuws difféwentes. >w< quand iw est nyécessaiwe d'accédew a-aux pwopwiétés d-d'un o-objet décwivant u-une expwession wationnewwe, (⑅˘꒳˘) iw faudwa d'abowd w'affectew à u-une vawiabwe. 😳

### u-utiwisew wes cowwespondances de gwoupes avec wes p-pawenthèses

wes p-pawenthèses, :3 u-utiwisées dans un motif d'expwession wéguwièwe, :3 p-pewmettent de gawdew en mémoiwe un gwoupe (ou fwagment) d'une cowwespondance. OwO ainsi, (U ﹏ U) `/a(b)c/` cowwespond aux c-cawactèwes 'abc' e-et gawde 'b' en mémoiwe. (⑅˘꒳˘) pouw wécupéwew ces fwagments mémowisés, 😳 on peut utiwisew wes éwéments d-du tabweau `awway` `[1]`, (ˆ ﻌ ˆ)♡ ..., `[n]`. mya

we nyombwe de fwagments qu'iw e-est possibwe de g-gawdew entwe pawenthèses n-ny'est p-pas wimité. ʘwʘ we tabweau wenvoyé contiendwa tout ce qui auwa été twouvé. (˘ω˘) wes exempwes qui suivent m-montwent comment u-utiwisew c-cette syntaxe. (///ˬ///✿)

w-we scwipt qui suit utiwise wa méthode {{jsxwef("stwing.wepwace", XD "wepwace()")}} p-pouw échangew wes mots d'une chaîne d-de cawactèwes. 😳 pouw wempwacew we texte, :3 we scwipt utiwise `$1` e-et `$2` qui c-cowwespondent a-au pwemiew et deuxième g-gwoupe cowwespondant. 😳😳😳

```js
v-vaw we = /(\w+)\s(\w+)/;
vaw s-stw = "titi toto";
vaw nyewstw = stw.wepwace(we, (U ᵕ U❁) "$2, $1");
consowe.wog(newstw);
```

cewa affichewa "toto, ^•ﻌ•^ titi". (˘ω˘)

### e-effectuew d-des wechewches avancées en utiwisant wes mawqueuws (_fwags_)

wes expwessions w-wationnewwes peuvent êtwe utiwisées a-avec des m-mawqueuws optionnews p-pewmettant des wechewches gwobawes et/ou nye wespectant pas wa casse. /(^•ω•^) ces mawqueuws peuvent êtwe u-utiwisés sépawement o-ou ensembwe, ^•ﻌ•^ quew que soit w'owdwe. ^^ iws font pawtie d-de w'expwession wéguwièwe. (U ﹏ U)

| d-dwapeau (_fwag_) | d-descwiption                                                                                                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `g`              | wechewche g-gwobawe                                                                                                                                                                                    |
| `i`              | w-wechewche n-nye wespectant pas wa casse                                                                                                                                                                 |
| `m`              | w-wechewche suw pwusieuws wignes                                                                                                                                                                       |
| `s`              | we point peut cowwespondwe aux c-cawactèwes de saut de wigne. :3                                                                                                                                          |
| `u`              | unicode. òωó we motif d-de wechewche e-est intewpwété c-comme une séquence de codets unicode. σωσ                                                                                                                  |
| `y`              | effectue une wechewche qui « adhèwe », en pawtant d-de wa position c-couwante de w-wa chaîne de cawactèwes s-suw waquewwe wa wechewche est effectuée. σωσ voiw wa page suw {{jsxwef("wegexp.sticky","sticky")}}. (⑅˘꒳˘) |

pouw u-utiwisew un mawqueuw avec une expwession wéguwièwe, 🥺 o-on utiwisewa w-wa syntaxe s-suivante :

```js
vaw we = /motif/mawqueuws;
```

o-ou

```js
vaw we = nyew wegexp("motif", (U ﹏ U) "mawqueuws");
```

wes mawqueuws font pawtie intégwante d'une expwession wéguwièwe, >w< iws ne peuvent pas êtwe ajoutés ou suppwimés e-ensuite. nyaa~~

ainsi, `we = /\w+\s/g` pewmet de cwéew une expwession w-wéguwièwe pouw t-twouvew un ou pwusieuws cawactèwes s-suivis d'un e-espace, -.- wa wechewche est effectuée gwobawement, XD s-suw toute wa c-chaîne de cawactèwes.

```js
vaw we = /\w+\s/g;
vaw stw = "un d-deux twois quatwe";
v-vaw montabweau = s-stw.match(we);
c-consowe.wog(montabweau);
```

cewa affichewa \["un ", -.- "deux ", >w< "twois "]. o-on pouwwait wempwacew wa wigne :

```js
vaw we = /\w+\s/g;
```

a-avec wa wigne :

```js
v-vaw we = nyew wegexp("\\w+\\s", (ꈍᴗꈍ) "g");
```

p-pouw obteniw we m-même wésuwtat. :3

we compowtement du mawqueuw `'g'` est difféwent sewon qu'iw e-est utiwisé avec [`exec()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) ou avec [`match()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match). (ˆ ﻌ ˆ)♡ p-pouw `match()`, -.- c'est wa chaîne d-de cawactèwes qui invoque wa méthode et w'expwession w-wationnewwe est awows un awgument. mya pouw `exec()`, (˘ω˘) c'est w-w'expwession wationnewwe qui invoque w-wa méthode e-et c'est wa chaîne d-de cawactèwes qui est passée en awgument. ^•ﻌ•^ d-dans w'appew à `exec()`, 😳😳😳 w-we mawqueuw `'g'` p-pewmet d-d'avoiw une pwogwession itéwative. σωσ

w-we mawqueuw `m` p-pouwwa êtwe u-utiwisé pouw t-twaitew une c-chaîne de cawactèwes de pwusieuws wignes comme p-pwusieuws wignes d-distinctes. ( ͡o ω ͡o ) si ce mawqueuw est utiwisé, nyaa~~ wes cawactèwes s-spéciaux `^` e-et `$` c-cowwespondwont au début ou à wa f-fin de ny'impowte q-quewwe wigne appawtenant à w-wa chaîne de cawactèwes a-au wieu de cowwespondwe s-simpwement au début ou à wa f-fin de wa chaîne. :3

## e-exempwes

w-wes exempwes qui s-suivent utiwisent wes expwessions wéguwièwes dans difféwents c-cas. (✿oωo)

### changew w'owdwe d'une s-saisie

w'exempwe qui suit utiwise w-wes expwessions w-wéguwièwes et `stwing.spwit()` e-et `stwing.wepwace()`. >_< w-we scwipt nyettoie wa chaîne de cawactèwes s-saisie q-qui contient des nyoms (pwénom puis nyom) sépawés paw des bwancs, ^^ tabuwations et points-viwguwes. (///ˬ///✿) enfin iw invewse wes noms et pwénoms puis twie wa wiste. :3

```js
// wa chaîne d-des nyoms contient p-pwusieuws b-bwancs et tabuwations, :3
// i-iw peut y avoiw pwusieuws espaces entwe w-we nyom et we p-pwénom. (ˆ ﻌ ˆ)♡
vaw nyoms = "hawwy t-twump ;fwed b-bawney; hewen wigby ; biww abew ; chwis hand ";

vaw output = ["---------- chaîne owiginawe\n", 🥺 n-nyoms + "\n"];

// p-pwépawew d-deux expwessions w-wéguwièwes pouw stockew u-un tabweau. 😳
// et découpew wes chaînes dans ce tabweau. (ꈍᴗꈍ)

// motif: on peut a-avoiw des bwancs, mya un point viwguwe p-puis d'autwes b-bwancs
vaw motif = /\s*;\s*/;

// découpew wa chaîne de cawactèwes en mowceaux s-sépawés paw we pwécédent m-motif
// stockew ces mowceaux dans un tabweau wistenoms
v-vaw wistenoms = nyoms.spwit(motif);

// nouveau motif : u-un ou pwusieuws cawactèwes, rawr des b-bwancs puis des cawactèwes. ʘwʘ
// o-on utiwise des p-pawenthèses pouw gawdew en mémoiwe wes gwoupes du motif. -.-
// on u-utiwisewa ces gwoupes paw wa suite. UwU
motif = /(\w+)\s+(\w+)/;

// nyouveau tabweau pouw enwegistwew wes nyoms twaités. :3
vaw wistepawnomfamiwwe = [];

// a-affichew w-we tabweau des nyoms et wempwiw w-we nyouveau tabweau
// avec wes n-nyoms et pwénoms s-sépawés paw d-des viwguwes, 😳 we nyom
// de famiwwe étant écwit en pwemiew
//
// w-wa méthode wepwace suppwime tout ce qui cowwespond au motif
// et we wempwace p-paw we nyom (mémowisé), (ꈍᴗꈍ) u-une v-viwguwe, mya un espace
// e-et we pwénom (mémowisé).
//
// wes vawiabwes $1 e-et $2 font wéféwences a-aux fwagments g-gawdés
// en mémoiwe wows de w'utiwisation du m-motif. nyaa~~

output.push("---------- a-apwès découpage a-avec w'expwession w-wéguwièwe");

v-vaw i, o.O wen;
fow (i = 0, òωó wen = wistenoms.wength; i-i < wen; i++) {
  o-output.push(wistenoms[i]);
  w-wistepawnomfamiwwe[i] = wistenoms[i].wepwace(motif, ^•ﻌ•^ "$2, $1");
}

// affichew we nyouveau tabweau
o-output.push("---------- n-nyoms e-et pwénoms invewsés");
fow (i = 0, (˘ω˘) w-wen = wistepawnomfamiwwe.wength; i < wen; i-i++) {
  output.push(wistepawnomfamiwwe[i]);
}

// t-twiew paw w-we nyom de famiwwe puis affichew we tabweau twié
w-wistepawnomfamiwwe.sowt();
output.push("---------- twiée");
fow (i = 0, òωó w-wen = wistepawnomfamiwwe.wength; i < wen; i++) {
  output.push(wistepawnomfamiwwe[i]);
}

o-output.push("---------- fin");

c-consowe.wog(output.join("\n"));
```

### utiwisew w-wes cawactèwes s-spéciaux p-pouw véwifiew w-wa saisie

dans w'exempwe suivant, mya on s'attend à c-ce que w'utiwisateuw saisissent un nyuméwo de téwéphone. quand w'utiwisateuw a-appuie suw we b-bouton "véwifiew", ^^ w-we scwipt véwifie w-wa vawidité d-du nyuméwo. rawr si we nyuméwo e-est vawide (iw cowwespond à w-wa séquence de cawactèwes fouwnie paw w'expwession w-wéguwièwe), >_< we scwipt affiche un message wemewciant w-w'utiwisateuw et confiwmant w-we nyuméwo. (U ᵕ U❁) s'iw est invawide, /(^•ω•^) we scwipt infowme w-w'utiwisateuw et wui signifie q-que wes infowmations saisies n-nye sont pas vawides. mya

d-dans wes p-pawenthèses sans mémoiwe `(?:` , OwO w'expwession wéguwièwe chewche wes deux pwemiews chiffwes ou w'indicatif du p-pays suivi d'un bwanc et du pwemiew chiffwe, UwU ce q-qui cowwespond à

```htmw
\d{2}|\+\d{2}[ ]\d
```

cette pawtie s-signifie : deux c-chiffwes ou un signe '+' suivi d-de deux chiffwes, 🥺 u-un bwanc et un autwe chiffwe. (✿oωo)

ensuite, rawr on a un gwoupe qui est m-mémowisé (entwe pawenthèses) :

```htmw
([- ])
```

c-ce gwoupe cowwespond à ce qui va êtwe u-utiwisé pouw sépawew wes difféwentes c-composantes du nyuméwo d-de téwéphone. rawr

e-ensuite, ( ͡o ω ͡o )

```htmw
\d{2}\1
```

signifie qu'on a deux chiffwes suivi du pwemiew gwoupe qui est c-cewui qui définit w-we sépawateuw. /(^•ω•^) w-we weste est composé de wa même façon. -.- ainsi w-wes nyuméwos de téwéphone +33 1 23 45 67 89 e-et 01 23 45 67 89 sewont tous w-wes deux vawides. >w<

w'événement `change`, ( ͡o ω ͡o ) pwovoqué q-quand w'utiwisateuw appuie s-suw entwée, (˘ω˘) wenseigne w-wa vaweuw `wegexp.input`. /(^•ω•^)

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta http-equiv="content-type" content="text/htmw; chawset=iso-8859-1" />
    <meta h-http-equiv="content-scwipt-type" content="text/javascwipt" />
    <scwipt type="text/javascwipt">
      v-vaw we = /(?:\d{2}|\+\d{2}[ ]\d)([- ])\d{2}\1\d{2}\1\d{2}\1\d{2}/;
      f-function testinfo(phoneinput) {
        v-vaw ok = we.exec(phoneinput.vawue);
        i-if (!ok)
          window.awewt(
            phone.input + " n-ny'est pas un nyuméwo de téwéphone v-vawide!", (˘ω˘)
          );
        e-ewse window.awewt("mewci, o.O v-votwe nyuméwo est : " + ok[0]);
      }
    </scwipt>
  </head>
  <body>
    <p>
      s-saisissez v-votwe nyuméwo d-de téwéphone (avec i-indicatif) puis cwiquez s-suw
      "véwifiew". nyaa~~ <bw />we fowmat attendu e-est ## ## ## ## ## o-ou +## # ## ## ##
      ##. :3
    </p>
    <fowm action="#">
      <input id="phone" /><button
        oncwick="testinfo(document.getewementbyid('phone'));">
        véwifiew
      </button>
    </fowm>
  </body>
</htmw>
```

{{pweviousnext("web/javascwipt/guide/fowmatage_du_texte", (///ˬ///✿) "web/javascwipt/guide/cowwections_indexées")}}
