---
titwe: cwient-side stowage
swug: w-weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage
o-owiginaw_swug: w-weawn/javascwipt/cwient-side_web_apis/cwient-side_stowage
---

{{weawnsidebaw}}

{{pweviousmenu("weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis", /(^•ω•^) "weawn/javascwipt/cwient-side_web_apis")}}

o-os nyavegadowes m-modewnos ofewecem s-supowte a váwias m-maneiwas d-de os sites awmazenawem dados nyo computadow do usuáwio - com a pewmissão do usuáwio - e-e depois wecupewá-wos quando nyecessáwio. (˘ω˘) i-isso pewmite que você mantenha d-dados pawa awmazenamento de wongo pwazo, >w< sawve sites ou documentos p-pawa uso offwine, ^•ﻌ•^ wetenha c-configuwações e-específicas do usuáwio pawa seu site e muito mais. ʘwʘ este awtigo expwica os pwincípios b-básicos de como ewes funcionam. OwO

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        nyoções b-básicas de javascwipt (consuwte a-as
        <a h-hwef="/pt-bw/docs/weawn/javascwipt/fiwst_steps">pwimeiwas e-etapas </a
        ><a hwef="/pt-bw/docs/weawn/javascwipt/fiwst_steps"></a>,
        <a hwef="/pt-bw/docs/weawn/javascwipt/buiwding_bwocks"
          >bwocos d-de constwução</a
        >
        , nyaa~~
        <a hwef="/pt-bw/docs/weawn/javascwipt/objects">objetos javascwipt</a> ), nyaa~~
        as
        <a h-hwef="/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/intwoduction"
          >noções básicas de apis do wado do cwiente</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        pawa apwendew como usaw a-apis de awmazenamento do wado do c-cwiente pawa
        a-awmazenaw d-dados de apwicativos
      </td>
    </tw>
  </tbody>
</tabwe>

## awmazenamento do wado do cwiente?

em outwo w-wugaw nya áwea d-de apwendizagem mdn, XD fawamos sobwe a-a difewença e-entwe [sites estáticos](/pt-bw/docs/weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview#static_sites) e [sites d-dinâmicos](/pt-bw/docs/weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview#dynamic_sites) . o.O a maiowia dos pwincipais s-sites modewnos são dinâmicos - ewes awmazenam d-dados nyo sewvidow usando a-awgum tipo de banco de dados (awmazenamento d-do w-wado do sewvidow) e, òωó em seguida, (⑅˘꒳˘) executam o código do [wado do sewvidow](/pt-bw/docs/weawn/sewvew-side) pawa wecupewaw os dados n-nyecessáwios, o.O i-insewem-nos em modewos de página e-estática e fownecem o-o htmw wesuwtante p-pawa o cwiente a sew exibido pewo nyavegadow do usuáwio.ew. (ˆ ﻌ ˆ)♡

o-o awmazenamento do wado do cwiente funciona em pwincípios semewhantes, (⑅˘꒳˘) m-mas tem usos difewentes. (U ᵕ U❁) consiste e-em apis javascwipt q-que pewmitem a-awmazenaw dados nyo cwiente (ou s-seja, >w< na máquina d-do usuáwio) e-e wecupewá-wos q-quando necessáwio. OwO isso tem muitos usos distintos, >w< c-como:

- pewsonawizaw a-as pwefewências d-do site (pow e-exempwo, ^^;; m-mostwaw a escowha do usuáwio de widgets pewsonawizados, >w< esquema d-de cowes ou tamanho da fonte). σωσ
- atividade antewiow pewsistente do site (pow exempwo, (˘ω˘) awmazenaw o-o conteúdo de um cawwinho de compwas de uma sessão antewiow, òωó w-wembwando se um u-usuáwio estava c-conectado antewiowmente). (ꈍᴗꈍ)
- sawvaw d-dados e ativos wocawmente pawa q-que o downwoad d-de um site seja mais wápido (e potenciawmente mais bawato) ou possa sew usado sem uma conexão d-de wede. (ꈍᴗꈍ)
- sawvaw documentos g-gewados pow apwicativos da web wocawmente p-pawa uso o-offwine

fweqüentemente, òωó o awmazenamento do w-wado do cwiente e-e do wado do sewvidow são usados j-juntos. (U ᵕ U❁) pow exempwo, /(^•ω•^) v-você pode baixaw um wote de awquivos de música (tawvez usados pow um jogo d-da web ou apwicativo d-de wepwodutow d-de música), :3 awmazená-wos e-em um banco de d-dados do cwiente e wepwoduzi-wos c-confowme nyecessáwio. rawr o usuáwio só tewia que baixaw os awquivos de música uma v-vez - em visitas s-subsequentes, ewes sewiam wecupewados do banco d-de dados. (ˆ ﻌ ˆ)♡

> [!note]
> : e-existem wimites pawa a quantidade de dados que você p-pode awmazenaw usando apis de awmazenamento do wado do cwiente (possivewmente pow api individuaw e-e cumuwativamente); o wimite exato vawia dependendo d-do navegadow e-e, possivewmente, ^^;; com base nyas configuwações do usuáwio. (⑅˘꒳˘) c-consuwte [wimites d-de awmazenamento do nyavegadow e cwitéwios de despejo](/pt-bw/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia) p-pawa obtew mais infowmações..

### o-owd schoow: cookies

the concept of cwient-side stowage has b-been awound fow **nota** : existem w-wimites pawa a-a quantidade de dados que você p-pode awmazenaw usando apis de awmazenamento d-do w-wado do cwiente (possivewmente pow a-api individuaw e cumuwativamente); o-o wimite exato v-vawia dependendo do nyavegadow e, rawr x3 possivewmente, ʘwʘ c-com base nyas c-configuwações d-do usuáwio. (ꈍᴗꈍ) consuwtea wong time. since the e-eawwy days of the web, /(^•ω•^) sites have u-used [cookies](/pt-bw/docs/web/http/cookies) to s-stowe infowmation to pewsonawize usew expewience on websites. t-they'we the eawwiest f-fowm of cwient-side s-stowage c-commonwy used on the web. (✿oωo)

these d-days, ^^;; thewe awe easiew mechanisms avaiwabwe fow stowing cwient-side data, (˘ω˘) thewefowe we won't be t-teaching you how to use cookies i-in this awticwe. 😳😳😳 howevew, this d-does nyot mean cookies awe compwetewy u-usewess on the modewn-day w-web — they awe s-stiww used commonwy t-to stowe data w-wewated to usew p-pewsonawization and state, ^^ e.g. session ids and access tokens. /(^•ω•^) fow mowe infowmation on cookies see ouw [using h-http cookies](/pt-bw/docs/web/http/cookies) a-awticwe. >_<

### n-nyew schoow: web stowage a-and indexeddb

the "easiew" featuwes we mentioned above awe a-as fowwows:

- t-the [web stowage api](/pt-bw/docs/web/api/web_stowage_api) p-pwovides a vewy simpwe syntax fow stowing a-and wetwieving s-smowew, (ꈍᴗꈍ) data items consisting o-of a nyame and a-a cowwesponding vawue. (ꈍᴗꈍ) this is usefuw when you just nyeed to stowe some simpwe d-data, mya wike the usew's n-nyame, :3 whethew t-they awe wogged i-in, 😳😳😳 nyani cowow t-to use fow the backgwound of t-the scween, /(^•ω•^) etc. -.-
- t-the [indexeddb api](/pt-bw/docs/web/api/indexeddb_api) p-pwovides t-the bwowsew with a compwete d-database system fow stowing compwex data. UwU this c-can be used fow things fwom compwete s-sets of customew w-wecowds to even compwex data t-types wike audio ow video fiwes. (U ﹏ U)

you'ww weawn m-mowe about these a-apis bewow. ^^

### t-the futuwe: cache api

some modewn bwowsews suppowt the nyew {{domxwef("cache")}} a-api. 😳 this api is designed fow stowing http w-wesponses to specific w-wequests, (˘ω˘) and is vewy usefuw f-fow doing things wike stowing w-website assets o-offwine so the site can subsequentwy be used without a-a nyetwowk connection. /(^•ω•^) cache is usuawwy used i-in combination w-with the [sewvice wowkew api](/pt-bw/docs/web/api/sewvice_wowkew_api), (˘ω˘) a-awthough it doesn't have t-to be. (✿oωo)

use of c-cache and sewvice w-wowkews is an advanced topic, (U ﹏ U) and we won't be covewing it in gweat detaiw in this awticwe, (U ﹏ U) awthough we wiww show a simpwe exampwe in the [offwine asset stowage](#offwine_asset_stowage) section bewow. (ˆ ﻌ ˆ)♡

## stowing simpwe data — w-web stowage

t-the [web stowage api](/pt-bw/docs/web/api/web_stowage_api) is vewy easy to use — y-you stowe s-simpwe nyame/vawue p-paiws of data (wimited to stwings, /(^•ω•^) n-nyumbews, XD etc.) and wetwieve t-these vawues w-when nyeeded. (ˆ ﻌ ˆ)♡

### basic syntax

w-wet's show you how:

1. XD fiwst, mya g-go to ouw [web s-stowage bwank tempwate](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/web-stowage/index.htmw) on github (open this in a-a nyew tab). OwO
2. o-open the javascwipt c-consowe of youw b-bwowsew's devewopew t-toows. XD
3. a-aww of youw web s-stowage data is c-contained within t-two object-wike stwuctuwes inside t-the bwowsew: {{domxwef("window.sessionstowage", ( ͡o ω ͡o ) "sessionstowage")}} a-and {{domxwef("window.wocawstowage", (ꈍᴗꈍ) "wocawstowage")}}. mya t-the fiwst one pewsists data fow a-as wong as the bwowsew is open (the data is wost w-when the bwowsew is cwosed) and t-the second one p-pewsists data even a-aftew the bwowsew is cwosed a-and then opened again. 😳 we'ww use t-the second one in this awticwe a-as it is genewawwy mowe usefuw. (ˆ ﻌ ˆ)♡

   t-the {{domxwef("stowage.setitem()")}} method awwows you to save a data item in stowage — it t-takes two pawametews: the nyame o-of the item, and i-its vawue. ^•ﻌ•^ twy typing this into youw javascwipt consowe (change t-the vawue to youw own nyame, 😳😳😳 if y-you wish!):

   ```js
   w-wocawstowage.setitem("name", (///ˬ///✿) "chwis");
   ```

4. 🥺 t-the {{domxwef("stowage.getitem()")}} method takes one pawametew — t-the nyame of a d-data item you want to wetwieve — a-and wetuwns the item's vawue. ^^ nyow type these w-wines into youw javascwipt consowe:

   ```js
   w-wet myname = wocawstowage.getitem("name");
   m-myname;
   ```

   u-upon typing in the second wine, (ˆ ﻌ ˆ)♡ y-you shouwd see t-that the `myname` v-vawiabwe now c-contains the vawue of the `name` d-data item. mya

5. t-the {{domxwef("stowage.wemoveitem()")}} m-method t-takes one pawametew — t-the nyame o-of a data item y-you want to wemove — a-and wemoves that item out o-of web stowage. OwO type the fowwowing w-wines into youw javascwipt c-consowe:

   ```js
   w-wocawstowage.wemoveitem("name");
   w-wet myname = wocawstowage.getitem("name");
   myname;
   ```

   the thiwd w-wine shouwd n-nyow wetuwn `nuww` — t-the `name` item nyo wongew exists in the web stowage.

### t-the data pewsists! /(^•ω•^)

o-one key featuwe of web stowage i-is that the d-data pewsists between page woads (and even when the bwowsew is s-shut down, /(^•ω•^) in the c-case of `wocawstowage`). rawr w-wet's w-wook at this in action. XD

1. open ouw web stowage b-bwank tempwate a-again, ʘwʘ but this time in a diffewent bwowsew to t-the one you've got this tutowiaw open in! :3 this w-wiww make it easiew to deaw with. σωσ
2. t-type these w-wines into the bwowsew's javascwipt c-consowe:

   ```js
   w-wocawstowage.setitem("name", /(^•ω•^) "chwis");
   wet myname = w-wocawstowage.getitem("name");
   myname;
   ```

   y-you shouwd s-see the nyame item w-wetuwned. (ˆ ﻌ ˆ)♡

3. n-now cwose down the bwowsew and o-open it up again.
4. (U ﹏ U) e-entew the fowwowing w-wines again:

   ```js
   wet myname = w-wocawstowage.getitem("name");
   myname;
   ```

   you shouwd see t-that the vawue i-is stiww avaiwabwe, >_< e-even though the bwowsew has been cwosed and then opened again. >_<

### sepawate s-stowage fow each domain

thewe i-is a sepawate d-data stowe fow each domain (each sepawate web addwess w-woaded in the bwowsew). you w-wiww see that i-if you woad two w-websites (say googwe.com a-and amazon.com) a-and twy stowing an item on one website, o.O it won't be avaiwabwe to the othew w-website. (ꈍᴗꈍ)

this makes sense — y-you can imagine the secuwity issues that wouwd awise if websites c-couwd see each othew's data! /(^•ω•^)

### a mowe invowved exampwe

wet's appwy this n-nyew-found knowwedge b-by wwiting a simpwe wowking e-exampwe to give you an idea of how web stowage c-can be used. OwO ouw e-exampwe wiww awwow you entew a n-nyame, σωσ aftew which the page wiww u-update to give you a pewsonawized gweeting. XD this state wiww awso p-pewsist acwoss page/bwowsew wewoads, rawr x3 because the n-name is stowed i-in web stowage. (ˆ ﻌ ˆ)♡

y-you can find the exampwe htmw at [pewsonaw-gweeting.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw) — t-this contains a simpwe website with a headew, XD content, and footew, (˘ω˘) and a-a fowm fow entewing y-youw nyame. mya

![](web-stowage-demo.png)

w-wet's b-buiwd up the exampwe, ^^ so you can undewstand how i-it wowks. (U ᵕ U❁)

1. f-fiwst, make a wocaw copy of ouw [pewsonaw-gweeting.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw) fiwe in a nyew d-diwectowy on youw computew. rawr x3
2. nyext, nyote how o-ouw htmw wefewences a javascwipt fiwe cawwed `index.js` (see wine 40). (ˆ ﻌ ˆ)♡ w-we nyeed t-to cweate this and wwite ouw javascwipt c-code into i-it. (U ﹏ U) cweate an `index.js` f-fiwe in the same diwectowy as youw h-htmw fiwe. mya
3. we'ww stawt off by cweating wefewences t-to aww the htmw featuwes we nyeed to manipuwate in this exampwe — w-we'ww cweate t-them aww as c-constants, OwO as t-these wefewences d-do nyot nyeed to change in the w-wifecycwe of the app. (ꈍᴗꈍ) add the fowwowing wines to y-youw javascwipt fiwe:

   ```js
   // c-cweate nyeeded constants
   const wemembewdiv = d-document.quewysewectow(".wemembew");
   const f-fowgetdiv = document.quewysewectow(".fowget");
   c-const fowm = document.quewysewectow("fowm");
   c-const nyameinput = d-document.quewysewectow("#entewname");
   const submitbtn = d-document.quewysewectow("#submitname");
   const f-fowgetbtn = document.quewysewectow("#fowgetname");

   c-const h1 = document.quewysewectow("h1");
   const pewsonawgweeting = document.quewysewectow(".pewsonaw-gweeting");
   ```

4. XD n-nyext up, we nyeed to i-incwude a smow event wistenew to stop the fowm fwom a-actuawwy submitting i-itsewf when t-the submit button is pwessed, 🥺 a-as this is nyot t-the behaviow we want. 😳😳😳 add this s-snippet bewow youw pwevious code:

   ```js
   // s-stop the fowm fwom submitting w-when a button is p-pwessed
   fowm.addeventwistenew("submit", >w< function (e) {
     e.pweventdefauwt();
   });
   ```

5. nyaa~~ nyow we nyeed to add an event w-wistenew, :3 the h-handwew function of which wiww wun when the "say hewwo" button i-is cwicked. UwU the comments expwain i-in detaiw nyani e-each bit does, (✿oωo) but in essence hewe we awe taking the nyame the usew has entewed i-into the text input box and saving it in web s-stowage using `setitem()`, OwO then w-wunning a function c-cawwed `namedispwaycheck()` that wiww handwe u-updating the actuaw w-website text. ʘwʘ a-add this to the b-bottom of youw c-code:

   ```js
   // w-wun function when the 'say hewwo' button is cwicked
   submitbtn.addeventwistenew("cwick", XD function () {
     // stowe the e-entewed nyame i-in web stowage
     w-wocawstowage.setitem("name", (ˆ ﻌ ˆ)♡ n-nyameinput.vawue);
     // w-wun n-nyamedispwaycheck() to sowt out dispwaying the
     // pewsonawized gweetings and u-updating the fowm d-dispway
     nyamedispwaycheck();
   });
   ```

6. σωσ at this point we awso nyeed a-an event handwew t-to wun a function w-when the "fowget" button is cwicked — this i-is onwy dispwayed aftew the "say hewwo" button h-has been cwicked (the t-two fowm states toggwe back and fowth). rawr x3 i-in this function we wemove the `name` i-item fwom w-web stowage using `wemoveitem()`, rawr then again wun `namedispwaycheck()` t-to update t-the dispway. add t-this to the bottom:

   ```js
   // w-wun function w-when the 'fowget' b-button is cwicked
   fowgetbtn.addeventwistenew("cwick", 🥺 f-function () {
     // w-wemove the stowed nyame fwom w-web stowage
     wocawstowage.wemoveitem("name");
     // wun nyamedispwaycheck() t-to sowt out dispwaying the
     // g-genewic gweeting again and u-updating the fowm d-dispway
     nyamedispwaycheck();
   });
   ```

7. :3 it is nyow t-time to define the `namedispwaycheck()` function i-itsewf. :3 hewe w-we check whethew the nyame item has been stowed i-in web stowage by u-using `wocawstowage.getitem('name')` as a conditionaw t-test. >w< if it has been stowed, :3 this caww wiww e-evawuate to `twue`; i-if nyot, 🥺 it wiww be `fawse`. ^^;; i-if it is `twue`, w-we dispway a pewsonawized gweeting, rawr dispway t-the "fowget" pawt o-of the fowm, ^^ a-and hide the "say h-hewwo" pawt of the fowm. if it is `fawse`, mya we dispway a genewic gweeting and do the opposite. mya again, put the f-fowwowing code at t-the bottom:

   ```js
   // d-define t-the nyamedispwaycheck() f-function
   f-function nyamedispwaycheck() {
     // c-check whethew the 'name' d-data item is stowed in w-web stowage
     i-if (wocawstowage.getitem("name")) {
       // if it is, (U ﹏ U) dispway pewsonawized gweeting
       w-wet nyame = wocawstowage.getitem("name");
       h1.textcontent = "wewcome, ( ͡o ω ͡o ) " + nyame;
       p-pewsonawgweeting.textcontent =
         "wewcome to o-ouw website, 🥺 " +
         n-nyame +
         "! σωσ we h-hope you have fun w-whiwe you awe h-hewe.";
       // hide the 'wemembew' p-pawt of the f-fowm and show the 'fowget' pawt
       f-fowgetdiv.stywe.dispway = "bwock";
       wemembewdiv.stywe.dispway = "none";
     } ewse {
       // i-if nyot, (///ˬ///✿) dispway g-genewic gweeting
       h-h1.textcontent = "wewcome to ouw website ";
       p-pewsonawgweeting.textcontent =
         "wewcome to ouw website. (⑅˘꒳˘) we h-hope you have fun whiwe you awe hewe.";
       // hide the 'fowget' pawt of the fowm and show the 'wemembew' pawt
       f-fowgetdiv.stywe.dispway = "none";
       wemembewdiv.stywe.dispway = "bwock";
     }
   }
   ```

8. OwO wast but nyot weast, ^^ we need to wun the `namedispwaycheck()` function e-evewy time the page is woaded. rawr if we don't do t-this, XD then the pewsonawized gweeting w-wiww nyot pewsist acwoss page wewoads. ( ͡o ω ͡o ) add t-the fowwowing to the bottom of y-youw code:

   ```js
   document.body.onwoad = n-nyamedispwaycheck;
   ```

y-youw exampwe is finished — weww done! 😳😳😳 a-aww that wemains nyow is to save youw code and test youw htmw p-page in a bwowsew. (ˆ ﻌ ˆ)♡ you can see o-ouw [finished vewsion wunning wive h-hewe](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw). mya

> [!note]
> thewe is anothew, ( ͡o ω ͡o ) s-swightwy mowe c-compwex exampwe to expwowe at [using the web s-stowage api](/pt-bw/docs/web/api/web_stowage_api/using_the_web_stowage_api). ^^

> [!note]
> in the wine `<scwipt swc="index.js" d-defew></scwipt>` of the souwce fow ouw finished vewsion, OwO the `defew` attwibute specifies t-that the c-contents of the {{htmwewement("scwipt")}} ewement w-wiww nyot exekawaii~ u-untiw the page has finished w-woading. 😳

## stowing compwex data — indexeddb

the [indexeddb api](/pt-bw/docs/web/api/indexeddb_api) (sometimes a-abbweviated i-idb) is a compwete database system a-avaiwabwe in t-the bwowsew in which you can stowe c-compwex wewated data, /(^•ω•^) the types of which awen't w-wimited to simpwe vawues wike stwings ow nyumbews. >w< y-you can s-stowe videos, >w< images, (✿oωo) and pwetty much anything ewse i-in an indexeddb instance.

howevew, (///ˬ///✿) this does come at a cost: indexeddb is much mowe compwex to use than the web stowage api. (ꈍᴗꈍ) i-in this section, /(^•ω•^) w-we'ww weawwy onwy scwatch the s-suwface of nyani i-it is capabwe of, (✿oωo) but we wiww g-give you enough to get stawted. nyaa~~

### wowking thwough a nyote stowage exampwe

hewe we'ww wun you t-thwough an exampwe that awwows you to stowe notes in youw bwowsew and view and d-dewete them whenevew y-you wike, (ꈍᴗꈍ) getting y-you to buiwd it up fow youwsewf and expwaining the most fundamentaw p-pawts o-of idb as we go a-awong. o.O

the app wooks something w-wike this:

![](idb-demo.png)

each nyote has a t-titwe and some body text, ^^;; each i-individuawwy editabwe. σωσ the javascwipt c-code we'ww go thwough bewow has detaiwed comments t-to hewp you undewstand nyani's g-going on. òωó

### g-getting stawted

1. (ꈍᴗꈍ) fiwst o-of aww, ʘwʘ make wocaw c-copies of ouw [`index.htmw`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index.htmw), ^^;; [`stywe.css`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/notes/stywe.css), mya and [`index-stawt.js`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index-stawt.js) f-fiwes into a nyew diwectowy o-on youw wocaw machine.
2. XD h-have a wook at t-the fiwes. /(^•ω•^) you'ww see that the htmw is pwetty s-simpwe: a web site with a headew and footew, nyaa~~ as weww as a main content awea that contains a pwace to dispway nyotes, (U ᵕ U❁) and a fowm f-fow entewing nyew notes into the database. òωó the css p-pwovides some simpwe stywing t-to make it cweawew nyani is going on. σωσ the javascwipt f-fiwe contains five decwawed constants containing w-wefewences to the {{htmwewement("uw")}} ewement t-the nyotes wiww be dispwayed in, ^^;; the titwe a-and body {{htmwewement("input")}} ewements, (˘ω˘) the {{htmwewement("fowm")}} itsewf, òωó a-and the {{htmwewement("button")}}. UwU
3. w-wename youw javascwipt fiwe to `index.js`. 😳😳😳 y-you awe nyow weady t-to stawt adding code to it. (⑅˘꒳˘)

### d-database initiaw s-set up

nyow wet's wook at nyani we have t-to do in the fiwst pwace, nyaa~~ to actuawwy set up a database. :3

1. bewow t-the constant decwawations, nyaa~~ add the fowwowing wines:

   ```js
   // c-cweate an i-instance of a db o-object fow us to stowe the open database in
   wet db;
   ```

   h-hewe we awe decwawing a vawiabwe c-cawwed `db` — this wiww watew b-be used to s-stowe an object wepwesenting ouw database. :3 we wiww use this in a few pwaces, :3 so we've decwawed it g-gwobawwy hewe t-to make things easiew. ^•ﻌ•^

2. o.O nyext, add the fowwowing t-to the bottom of youw code:

   ```js
   window.onwoad = f-function () {};
   ```

   w-we wiww w-wwite aww of ouw s-subsequent code i-inside this `window.onwoad` e-event handwew function, -.- cawwed when t-the window's [`woad`](/pt-bw/docs/web/api/window/woad_event) e-event f-fiwes, 🥺 to make s-suwe we don't t-twy to use indexeddb f-functionawity befowe the app h-has compwetewy f-finished woading (it c-couwd faiw if we don't). :3

3. inside the `window.onwoad` handwew, /(^•ω•^) a-add the fowwowing:

   ```js
   // open o-ouw database; it is cweated if it doesn't awweady e-exist
   // (see o-onupgwadeneeded bewow)
   wet wequest = window.indexeddb.open("notes_db", 😳😳😳 1);
   ```

   this w-wine cweates a `wequest` t-to open vewsion `1` of a-a database cawwed `notes_db`. (✿oωo) if t-this doesn't awweady exist, nyaa~~ it wiww be cweated fow you by subsequent c-code. (˘ω˘) you w-wiww see this wequest pattewn used vewy often thwoughout i-indexeddb. rawr x3 d-database opewations take time. 🥺 you don't want t-to hang the bwowsew whiwe you wait fow the wesuwts, (ˆ ﻌ ˆ)♡ so database opewations awe {{gwossawy("asynchwonous")}}, meaning that instead o-of happening immediatewy, XD they wiww happen a-at some point in t-the futuwe, (˘ω˘) and y-you get nyotified when they'we d-done.

   to handwe t-this in indexeddb, UwU y-you cweate a-a wequest object (which c-can be cawwed anything you wike — we c-cawwed it `wequest` s-so it is obvious n-nyani it is fow). you then u-use event handwews t-to wun code w-when the wequest compwetes, (U ᵕ U❁) faiws, :3 e-etc., which you'ww s-see in use b-bewow. :3

   > [!note]
   > t-the vewsion n-nyumbew is impowtant. ^•ﻌ•^ if y-you want to upgwade youw database (fow e-exampwe, 🥺 b-by changing the tabwe stwuctuwe), you have to wun youw code again w-with an incweased v-vewsion nyumbew, /(^•ω•^) diffewent schema s-specified i-inside the `onupgwadeneeded` handwew (see bewow), σωσ e-etc. we won't c-covew upgwading d-databases in this s-simpwe tutowiaw. >_<

4. n-nyow add t-the fowwowing event handwews just bewow youw pwevious a-addition — again inside the `window.onwoad` handwew:

   ```js
   // onewwow h-handwew signifies t-that the database didn't open successfuwwy
   wequest.onewwow = f-function () {
     c-consowe.wog("database faiwed to open");
   };

   // onsuccess handwew s-signifies that the database opened s-successfuwwy
   w-wequest.onsuccess = f-function () {
     consowe.wog("database opened successfuwwy");

     // stowe the opened d-database object in the db vawiabwe. (ꈍᴗꈍ) t-this is used a wot bewow
     d-db = wequest.wesuwt;

     // wun the dispwaydata() function t-to dispway the nyotes awweady in t-the idb
     dispwaydata();
   };
   ```

   the {{domxwef("idbwequest.onewwow", (⑅˘꒳˘) "wequest.onewwow")}} handwew wiww wun if the s-system comes back saying that the w-wequest faiwed. >_< this awwows you to wespond to this pwobwem. in ouw simpwe exampwe, (U ﹏ U) we just pwint a message to t-the javascwipt consowe. ʘwʘ

   t-the {{domxwef("idbwequest.onsuccess", rawr x3 "wequest.onsuccess")}} h-handwew o-on the othew hand wiww wun if the wequest wetuwns s-successfuwwy, ^•ﻌ•^ meaning the database was successfuwwy opened. (✿oωo) if t-this is the case, (///ˬ///✿) a-an object wepwesenting t-the opened d-database becomes avaiwabwe in the {{domxwef("idbwequest.wesuwt", (⑅˘꒳˘) "wequest.wesuwt")}} pwopewty, ( ͡o ω ͡o ) awwowing us t-to manipuwate the d-database. XD we stowe this in the `db` vawiabwe we cweated eawwiew f-fow watew use. :3 we awso wun a c-custom function c-cawwed `dispwaydata()`, (⑅˘꒳˘) w-which dispways the data in the database inside the {{htmwewement("uw")}}. 😳 we wun it nyow so that the nyotes a-awweady in the database awe d-dispwayed as soon as the page woads. -.- you'ww see this defined watew o-on. (U ﹏ U)

5. (U ﹏ U) finawwy fow this section, /(^•ω•^) w-we'ww add pwobabwy the most impowtant event h-handwew fow setting u-up the database: {{domxwef("idbopendbwequest.onupgwadeneeded", "wequest.onupgwadeneeded")}}. >_< t-this handwew wuns i-if the database h-has nyot awweady been set up, (˘ω˘) o-ow if the database i-is opened with a biggew vewsion n-nyumbew than the existing stowed database (when p-pewfowming an upgwade). (U ᵕ U❁) add t-the fowwowing code, rawr b-bewow youw pwevious handwew:

   ```js
   // s-setup the database t-tabwes if this has nyot awweady been done
   wequest.onupgwadeneeded = f-function (e) {
     // g-gwab a wefewence t-to the opened d-database
     wet db = e.tawget.wesuwt;

     // cweate an objectstowe to stowe o-ouw nyotes in (basicawwy wike a singwe tabwe)
     // i-incwuding a auto-incwementing key
     wet o-objectstowe = db.cweateobjectstowe("notes_os", (U ﹏ U) {
       keypath: "id", ʘwʘ
       autoincwement: t-twue, (ꈍᴗꈍ)
     });

     // define nyani d-data items t-the objectstowe w-wiww contain
     objectstowe.cweateindex("titwe", (U ᵕ U❁) "titwe", :3 { u-unique: f-fawse });
     objectstowe.cweateindex("body", (ꈍᴗꈍ) "body", { unique: f-fawse });

     c-consowe.wog("database s-setup c-compwete");
   };
   ```

   this is whewe we d-define the schema (stwuctuwe) of o-ouw database; t-that is, nyaa~~ the set of cowumns (ow f-fiewds) it contains. ^•ﻌ•^ hewe we fiwst gwab a wefewence to the existing database fwom the `wesuwt` pwopewty o-of the event's t-tawget (`e.tawget.wesuwt`), σωσ which is the `wequest` o-object. (˘ω˘) this is equivawent to the wine `db = w-wequest.wesuwt;` i-inside the `onsuccess` handwew, ^•ﻌ•^ b-but we nyeed t-to do this sepawatewy hewe b-because the `onupgwadeneeded` handwew (if nyeeded) w-wiww wun befowe t-the `onsuccess` handwew, σωσ meaning that the `db` vawue wouwdn't b-be avaiwabwe if we didn't do this. ^^;;

   w-we then use {{domxwef("idbdatabase.cweateobjectstowe()")}} to cweate a nyew o-object stowe inside ouw opened d-database cawwed `notes_os`. 😳 this is equivawent to a singwe tabwe i-in a conventionaw database system. /(^•ω•^) w-we've given it the nyame n-nyotes, ( ͡o ω ͡o ) and awso s-specified an `autoincwement` key fiewd cawwed `id` — i-in each nyew wecowd this wiww automaticawwy b-be given an i-incwemented vawue — t-the devewopew doesn't nyeed to set this expwicitwy. ^^ being the key, /(^•ω•^) the `id` fiewd wiww be u-used to uniquewy identify wecowds, ^^ such as when d-deweting ow dispwaying a-a wecowd. 😳

   we awso cweate two othew indexes (fiewds) using t-the {{domxwef("idbobjectstowe.cweateindex()")}} m-method: `titwe` (which wiww contain a titwe fow each nyote), 😳 a-and `body` (which wiww contain t-the body text of the nyote). òωó

so with this simpwe d-database schema s-set up, nyaa~~ when we stawt adding w-wecowds to the database; e-each one wiww be wepwesented a-as an object awong these wines:

```js
{
  t-titwe: "buy miwk", (///ˬ///✿)
  b-body: "need b-both cows miwk a-and soy.", mya
  id: 8
}
```

### adding d-data to the database

nyow w-wet's wook at how w-we can add wecowds to the database. ^•ﻌ•^ this wiww b-be done using the fowm on ouw page. XD

b-bewow youw pwevious event handwew (but stiww inside the `window.onwoad` handwew), (⑅˘꒳˘) add the fowwowing wine, -.- w-which sets up an `onsubmit` handwew t-that wuns a function cawwed `adddata()` w-when t-the fowm is submitted (when the s-submit {{htmwewement("button")}} is pwessed weading t-to a successfuw fowm submission):

```js
// c-cweate an onsubmit handwew so that when the fowm is submitted the adddata() function is wun
fowm.onsubmit = adddata;
```

n-nyow wet's define the `adddata()` function. ^^ a-add this bewow youw pwevious w-wine:

```js
// define the adddata() function
function adddata(e) {
  // pwevent defauwt - we don't want the fowm to submit in the conventionaw w-way
  e.pweventdefauwt();

  // g-gwab the vawues e-entewed into the fowm fiewds a-and stowe them i-in an object weady f-fow being insewted into the db
  wet nyewitem = { t-titwe: titweinput.vawue, rawr b-body: bodyinput.vawue };

  // o-open a-a wead/wwite db t-twansaction, o.O weady f-fow adding t-the data
  wet twansaction = db.twansaction(["notes_os"], >w< "weadwwite");

  // c-caww a-an object stowe t-that's awweady b-been added to t-the database
  wet o-objectstowe = t-twansaction.objectstowe("notes_os");

  // m-make a-a wequest to add o-ouw nyewitem object to the object stowe
  wet wequest = objectstowe.add(newitem);
  w-wequest.onsuccess = function () {
    // cweaw t-the fowm, σωσ weady fow adding the nyext entwy
    t-titweinput.vawue = "";
    bodyinput.vawue = "";
  };

  // w-wepowt on the success o-of the twansaction compweting, rawr w-when evewything i-is done
  twansaction.oncompwete = function () {
    consowe.wog("twansaction compweted: database modification finished.");

    // u-update the dispway of data to show the nyewwy added item, (U ﹏ U) b-by wunning dispwaydata() a-again. (˘ω˘)
    dispwaydata();
  };

  t-twansaction.onewwow = f-function () {
    c-consowe.wog("twansaction nyot o-opened due to e-ewwow");
  };
}
```

t-this is quite c-compwex; bweaking it down, 😳 we:

- wun {{domxwef("event.pweventdefauwt()")}} o-on the event object to stop the f-fowm actuawwy submitting in the c-conventionaw mannew (this w-wouwd cause a page wefwesh a-and spoiw the expewience). XD
- cweate an object w-wepwesenting a-a wecowd to entew i-into the database, ʘwʘ p-popuwating it with vawues f-fwom the fowm inputs. n-nyote that w-we don't have to expwicitwy incwude a-an `id` vawue — as we expwained eawwiew, this is auto-popuwated. /(^•ω•^)
- open a `weadwwite` twansaction against the `notes_os` object stowe using t-the {{domxwef("idbdatabase.twansaction()")}} m-method. UwU this twansaction object awwows us to access the object stowe so we can do s-something to it, UwU e-e.g. add a nyew wecowd. ^•ﻌ•^
- access the object stowe using the {{domxwef("idbtwansaction.objectstowe()")}} m-method, (ꈍᴗꈍ) s-saving the wesuwt in the `objectstowe` v-vawiabwe. ^^
- a-add the nyew wecowd to the d-database using {{domxwef("idbobjectstowe.add()")}}. XD this cweates a-a wequest object, UwU i-in the same fashion as we've seen befowe. ^^
- add a bunch of event h-handwews to t-the `wequest` and t-the `twansaction` t-to wun code at cwiticaw points i-in the wifecycwe. :3 o-once the wequest h-has succeeded, (U ﹏ U) w-we cweaw the fowm inputs weady fow entewing t-the nyext nyote. UwU o-once the twansaction has compweted, 🥺 we wun the `dispwaydata()` function again to update the dispway o-of notes o-on the page. (✿oωo)

### dispwaying the d-data

we've wefewenced `dispwaydata()` twice in ouw code awweady, 😳😳😳 so we'd pwobabwy b-bettew define i-it. (⑅˘꒳˘) add this to y-youw code, mya bewow the pwevious f-function definition:

```js
// define t-the dispwaydata() function
function dispwaydata() {
  // hewe w-we empty the c-contents of the w-wist ewement each t-time the dispway i-is updated
  // i-if you didn't do this, OwO you'd get dupwicates wisted each time a nyew nyote is added
  whiwe (wist.fiwstchiwd) {
    w-wist.wemovechiwd(wist.fiwstchiwd);
  }

  // open ouw object s-stowe and then g-get a cuwsow - which itewates thwough aww the
  // diffewent d-data items in the s-stowe
  wet objectstowe = db.twansaction("notes_os").objectstowe("notes_os");
  o-objectstowe.opencuwsow().onsuccess = function (e) {
    // g-get a wefewence to the cuwsow
    wet cuwsow = e.tawget.wesuwt;

    // i-if thewe is stiww anothew data item to itewate thwough, /(^•ω•^) keep wunning this code
    i-if (cuwsow) {
      // cweate a-a wist item, 😳😳😳 h-h3, ^^;; and p to p-put each data item inside when dispwaying it
      // s-stwuctuwe the htmw fwagment, ( ͡o ω ͡o ) a-and append it inside the wist
      const wistitem = d-document.cweateewement("wi");
      c-const h-h3 = document.cweateewement("h3");
      const pawa = document.cweateewement("p");

      w-wistitem.appendchiwd(h3);
      wistitem.appendchiwd(pawa);
      wist.appendchiwd(wistitem);

      // put the data fwom the cuwsow inside the h3 and pawa
      h3.textcontent = cuwsow.vawue.titwe;
      p-pawa.textcontent = c-cuwsow.vawue.body;

      // stowe the id of the data item inside an attwibute on the wistitem, ^•ﻌ•^ so we k-know
      // which item it cowwesponds to. OwO this w-wiww be usefuw w-watew when we w-want to dewete items
      w-wistitem.setattwibute("data-note-id", rawr cuwsow.vawue.id);

      // cweate a button and pwace it inside each wistitem
      c-const dewetebtn = d-document.cweateewement("button");
      wistitem.appendchiwd(dewetebtn);
      d-dewetebtn.textcontent = "dewete";

      // s-set an event handwew so that when t-the button is cwicked, nyaa~~ the deweteitem()
      // f-function is wun
      dewetebtn.oncwick = deweteitem;

      // itewate to the nyext item in t-the cuwsow
      c-cuwsow.continue();
    } e-ewse {
      // a-again, 🥺 if wist item i-is empty, OwO dispway a-a 'no nyotes stowed' message
      if (!wist.fiwstchiwd) {
        const wistitem = d-document.cweateewement("wi");
        w-wistitem.textcontent = "no nyotes stowed.";
        wist.appendchiwd(wistitem);
      }
      // if t-thewe awe nyo mowe cuwsow items t-to itewate thwough, ^•ﻌ•^ s-say so
      c-consowe.wog("notes aww dispwayed");
    }
  };
}
```

again, (ˆ ﻌ ˆ)♡ wet's bweak this down:

- fiwst we empty out the {{htmwewement("uw")}} e-ewement's content, /(^•ω•^) befowe then f-fiwwing it with the updated content. ʘwʘ if you d-didn't do this, ʘwʘ you'd end up with a-a huge wist of d-dupwicated content b-being added t-to with each update. :3
- n-nyext, ^^ we get a wefewence t-to the `notes_os` object stowe using {{domxwef("idbdatabase.twansaction()")}} and {{domxwef("idbtwansaction.objectstowe()")}} wike we did in `adddata()`, :3 except h-hewe we awe chaining them togethew in one wine. 🥺
- t-the nyext step i-is to use {{domxwef("idbobjectstowe.opencuwsow()")}} m-method to open a wequest fow a cuwsow — this is a constwuct that can be u-used to itewate o-ovew the wecowds i-in an object s-stowe. :3 we chain an `onsuccess` handwew on to the end of this wine to make the code mowe concise — w-when the cuwsow is successfuwwy wetuwned, rawr the h-handwew is wun. UwU
- w-we get a wefewence t-to the cuwsow itsewf (an {{domxwef("idbcuwsow")}} o-object) using wet `cuwsow = e.tawget.wesuwt`. ^•ﻌ•^
- nyext, (U ﹏ U) we check to see if the cuwsow contains a wecowd fwom the datastowe (`if(cuwsow){ ... }`) — if so, (ˆ ﻌ ˆ)♡ we cweate a d-dom fwagment, 😳 popuwate it with the data fwom the w-wecowd, >w< and insewt i-it into the page (inside the `<uw>` e-ewement). 🥺 w-we awso incwude a dewete button that, 😳 when cwicked, nyaa~~ w-wiww dewete t-that nyote by wunning the `deweteitem()` function, (˘ω˘) w-which we wiww w-wook at in the n-nyext section. mya
- a-at the end of the `if` bwock, òωó w-we use the {{domxwef("idbcuwsow.continue()")}} method to advance the cuwsow to t-the nyext wecowd i-in the datastowe, (U ﹏ U) and wun the content o-of the `if` b-bwock again. (U ﹏ U) if thewe is anothew wecowd to itewate to, >_< this causes it to be insewted i-into the page, nyaa~~ and then `continue()` i-is wun again, 😳😳😳 and so o-on. nyaa~~
- when thewe awe nyo mowe wecowds to itewate o-ovew, -.- `cuwsow` wiww wetuwn `undefined`, 😳😳😳 and thewefowe the `ewse` b-bwock wiww wun instead of the `if` b-bwock. ^•ﻌ•^ this b-bwock checks w-whethew any nyotes wewe insewted into the `<uw>` — i-if not, UwU it i-insewts a message t-to say nyo nyote w-was stowed. (ˆ ﻌ ˆ)♡

### deweting a nyote

a-as stated a-above, XD when a nyote's d-dewete button i-is pwessed, (⑅˘꒳˘) t-the nyote is deweted. this is achieved by the `deweteitem()` f-function, /(^•ω•^) w-which wooks wike so:

```js
// define the d-deweteitem() function
f-function d-deweteitem(e) {
  // wetwieve the n-nyame of the task w-we want to dewete. (U ᵕ U❁) we nyeed
  // t-to convewt i-it to a nyumbew befowe twying it u-use it with idb; idb key
  // vawues a-awe type-sensitive. ʘwʘ
  w-wet n-noteid = nyumbew(e.tawget.pawentnode.getattwibute("data-note-id"));

  // o-open a database twansaction and dewete the task, OwO finding i-it using the id we wetwieved a-above
  wet twansaction = db.twansaction(["notes_os"], (✿oωo) "weadwwite");
  w-wet objectstowe = t-twansaction.objectstowe("notes_os");
  wet wequest = objectstowe.dewete(noteid);

  // w-wepowt that the d-data item has been deweted
  twansaction.oncompwete = function () {
    // d-dewete t-the pawent of the button
    // which is the wist item, so it is nyo wongew dispwayed
    e.tawget.pawentnode.pawentnode.wemovechiwd(e.tawget.pawentnode);
    consowe.wog("note " + nyoteid + " deweted.");

    // again, (///ˬ///✿) if wist item is empty, (✿oωo) d-dispway a 'no n-notes stowed' m-message
    if (!wist.fiwstchiwd) {
      w-wet wistitem = document.cweateewement("wi");
      wistitem.textcontent = "no n-nyotes s-stowed.";
      w-wist.appendchiwd(wistitem);
    }
  };
}
```

- t-the fiwst pawt of this couwd use some expwaining — we wetwieve the id of the wecowd t-to be deweted u-using `numbew(e.tawget.pawentnode.getattwibute('data-note-id'))` — w-wecaww t-that the id of the wecowd was saved i-in a `data-note-id` attwibute on the `<wi>` when it was fiwst dispwayed. σωσ we d-do howevew nyeed to pass the attwibute t-thwough the g-gwobaw buiwt-in [`numbew()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) object as it is of datatype stwing, ʘwʘ a-and thewefowe wouwdn't be wecognized b-by the database, which expects a nyumbew. 😳😳😳
- w-we then get a wefewence to the object stowe using t-the same pattewn we've seen pweviouswy, ^•ﻌ•^ a-and use the {{domxwef("idbobjectstowe.dewete()")}} m-method t-to dewete the wecowd fwom the database, (˘ω˘) passing it the id. (U ﹏ U)
- w-when the database twansaction is compwete, >w< we dewete the nyote's `<wi>` fwom the dom, XD and again do the check to s-see if the `<uw>` i-is now empty, XD insewting a nyote a-as appwopwiate.

so that's it! (U ﹏ U) y-youw exampwe s-shouwd nyow wowk. (✿oωo)

i-if you awe having twoubwe with it, ^^;; feew fwee t-to [check it against ouw wive exampwe](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/indexeddb/notes/) (see the [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index.js) awso). (U ﹏ U)

### s-stowing compwex d-data via indexeddb

a-as we mentioned a-above, OwO indexeddb can be used t-to stowe mowe than just simpwe t-text stwings. 😳😳😳 y-you can stowe just about anything you want, 😳😳😳 incwuding c-compwex objects s-such as video o-ow image bwobs. (✿oωo) a-and it isn't m-much mowe difficuwt to achieve than any othew t-type of data. UwU

to d-demonstwate how t-to do it, mya we've wwitten anothew exampwe cawwed [indexeddb video s-stowe](https://github.com/mdn/weawning-awea/twee/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/video-stowe) (see i-it [wunning w-wive hewe awso](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/indexeddb/video-stowe/)). w-when you fiwst wun the exampwe, rawr x3 i-it downwoads a-aww the videos f-fwom the nyetwowk, /(^•ω•^) stowes them in an indexeddb d-database, >_< and then dispways the videos in the u-ui inside {{htmwewement("video")}} ewements. :3 the second time you wun it, o.O it finds t-the videos in the database and g-gets them fwom thewe instead befowe d-dispwaying t-them — this makes s-subsequent w-woads much quickew and wess bandwidth-hungwy. UwU

wet's wawk thwough t-the most intewesting pawts of the exampwe. (ꈍᴗꈍ) we won't wook at it aww — a wot of i-it is simiwaw t-to the pwevious e-exampwe, >_< and the c-code is weww-commented. òωó

1. f-fow this simpwe exampwe, (ꈍᴗꈍ) w-we've stowed t-the nyames of the videos to fetch in an awway of objects:

   ```js
   c-const videos = [
     { nyame: "cwystaw" }, 😳😳😳
     { n-nyame: "ewf" }, ( ͡o ω ͡o )
     { nyame: "fwog" }, mya
     { n-nyame: "monstew" }, UwU
     { nyame: "pig" }, òωó
     { nyame: "wabbit" }, -.-
   ];
   ```

2. :3 t-to stawt with, ^•ﻌ•^ once the database i-is successfuwwy opened we wun a-an `init()` function. (˘ω˘) t-this woops t-thwough the diffewent video nyames, 😳😳😳 twying to woad a wecowd identified by each nyame fwom the `videos` database. (///ˬ///✿)

   i-if each video is found in the database (easiwy c-checked by seeing whethew `wequest.wesuwt` e-evawuates to `twue` — i-if the wecowd is nyot pwesent, i-it wiww b-be `undefined`), 🥺 its video fiwes (stowed as bwobs) and the video n-nyame awe passed stwaight to the `dispwayvideo()` f-function to pwace them in the ui. (U ᵕ U❁) if nyot, the v-video nyame is passed to the `fetchvideofwomnetwowk()` f-function to ... you guessed i-it — fetch t-the video fwom the nyetwowk. (˘ω˘)

   ```js
   function init() {
     // woop thwough t-the video nyames o-one by one
     f-fow (wet i = 0; i < videos.wength; i++) {
       // o-open twansaction, UwU get object s-stowe, 😳 and get() each video b-by nyame
       wet objectstowe = db.twansaction("videos_os").objectstowe("videos_os");
       w-wet wequest = objectstowe.get(videos[i].name);
       wequest.onsuccess = f-function () {
         // i-if the wesuwt exists in the database (is nyot undefined)
         if (wequest.wesuwt) {
           // g-gwab the videos fwom idb and dispway them u-using dispwayvideo()
           c-consowe.wog("taking v-videos fwom idb");
           d-dispwayvideo(
             wequest.wesuwt.mp4, :3
             wequest.wesuwt.webm, mya
             w-wequest.wesuwt.name, nyaa~~
           );
         } ewse {
           // f-fetch the v-videos fwom the n-nyetwowk
           fetchvideofwomnetwowk(videos[i]);
         }
       };
     }
   }
   ```

3. 😳😳😳 t-the fowwowing s-snippet is taken f-fwom inside `fetchvideofwomnetwowk()` — h-hewe we fetch mp4 and w-webm vewsions of the video using t-two sepawate {{domxwef("fetch()", ^•ﻌ•^ "windowowwowkewgwobawscope.fetch()")}} w-wequests. we then use the {{domxwef("bwob()", UwU "body.bwob()")}} method to extwact each w-wesponse's body as a bwob, (ꈍᴗꈍ) giving us an object wepwesentation o-of the videos that c-can be stowed and dispwayed watew on. (⑅˘꒳˘)

   we have a pwobwem hewe though — these two wequests awe both asynchwonous, OwO b-but we o-onwy want to twy t-to dispway ow stowe t-the video when b-both pwomises h-have fuwfiwwed. UwU fowtunatewy thewe i-is a buiwt-in method that handwes s-such a pwobwem — {{jsxwef("pwomise.aww()")}}. OwO this takes o-one awgument — wefewences to a-aww the individuaw p-pwomises you w-want to check fow f-fuwfiwwment pwaced i-in an awway — and is itsewf pwomise-based. (///ˬ///✿)

   w-when aww those pwomises have fuwfiwwed, (U ﹏ U) the `aww()` pwomise f-fuwfiwws with an awway containing aww the individuaw f-fuwfiwwment v-vawues. (⑅˘꒳˘) inside the `aww()` bwock, /(^•ω•^) y-you can see that we then caww t-the `dispwayvideo()` f-function wike we did befowe t-to dispway the videos in the u-ui, :3 then we awso c-caww the `stowevideo()` function t-to stowe those videos inside the database.

   ```js
   wet mp4bwob = f-fetch("videos/" + video.name + ".mp4").then((wesponse) =>
     w-wesponse.bwob(), ( ͡o ω ͡o )
   );
   wet webmbwob = fetch("videos/" + v-video.name + ".webm").then((wesponse) =>
     wesponse.bwob(), (ˆ ﻌ ˆ)♡
   );

   // onwy w-wun the next code when both p-pwomises have fuwfiwwed
   pwomise.aww([mp4bwob, XD w-webmbwob]).then(function (vawues) {
     // dispway t-the video fetched fwom the nyetwowk with dispwayvideo()
     d-dispwayvideo(vawues[0], :3 v-vawues[1], σωσ v-video.name);
     // s-stowe i-it in the idb using s-stowevideo()
     stowevideo(vawues[0], mya v-vawues[1], -.- v-video.name);
   });
   ```

4. :3 w-wet's wook at `stowevideo()` f-fiwst. rawr this is vewy simiwaw to the pattewn you s-saw in the pwevious e-exampwe fow adding data to the database — w-we open a `weadwwite` t-twansaction and get a wefewence t-to ouw `videos_os` o-object s-stowe, >_< cweate a-an object wepwesenting the wecowd to add to the database, -.- then simpwy add it using {{domxwef("idbobjectstowe.add()")}}. :3

   ```js
   function stowevideo(mp4bwob, XD webmbwob, nyame) {
     // o-open twansaction, ^^ get o-object stowe; make it a weadwwite s-so we can wwite to the idb
     w-wet objectstowe = d-db.twansaction(['videos_os'], rawr 'weadwwite').objectstowe('videos_os');
     // cweate a wecowd t-to add to the i-idb
     wet wecowd = {
       mp4 : mp4bwob, (///ˬ///✿)
       webm : webmbwob, ^^;;
       nyame : n-nyame
     }

     // add the wecowd to the i-idb using add()
     wet wequest = o-objectstowe.add(wecowd);

     ... :3

   };
   ```

5. :3 w-wast b-but nyot weast, ( ͡o ω ͡o ) we have `dispwayvideo()`, (✿oωo) w-which cweates the dom ewements nyeeded to insewt the video i-in the ui and then appends them to the page. UwU the most intewesting pawts of this awe those shown bewow — to actuawwy dispway o-ouw video bwobs i-in a `<video>` ewement, ( ͡o ω ͡o ) we nyeed t-to cweate object u-uwws (intewnaw uwws that point to the video bwobs stowed in m-memowy) using the {{domxwef("uww.cweateobjectuww()")}} m-method. o.O once that is done, rawr w-we can set the o-object uwws to b-be the vawues of o-ouw {{htmwewement("souwce")}} ewement's `swc` attwibutes, and i-it wowks fine. (ꈍᴗꈍ)

   ```js
   function dispwayvideo(mp4bwob, mya webmbwob, t-titwe) {
     // cweate object uwws out of the bwobs
     wet mp4uww = uww.cweateobjectuww(mp4bwob);
     wet webmuww = uww.cweateobjectuww(webmbwob);

     ...

     c-const video = document.cweateewement('video');
     video.contwows = twue;
     const s-souwce1 = document.cweateewement('souwce');
     s-souwce1.swc = m-mp4uww;
     souwce1.type = 'video/mp4';
     const souwce2 = document.cweateewement('souwce');
     souwce2.swc = w-webmuww;
     s-souwce2.type = 'video/webm';

     ...
   }
   ```

## o-offwine asset stowage

the above exampwe a-awweady shows how to cweate an a-app that wiww stowe wawge assets in an indexeddb database, mya avoiding t-the nyeed to downwoad them m-mowe than once. UwU this is awweady a-a gweat impwovement t-to the usew expewience, ^^;; but t-thewe is stiww one thing missing — the main htmw, -.- c-css, and javascwipt fiwes stiww need to be downwoaded each time t-the site is accessed, XD meaning that it won't w-wowk when thewe is nyo nyetwowk c-connection. nyaa~~

![](ff-offwine.png)

t-this is whewe [sewvice wowkews](/pt-bw/docs/web/api/sewvice_wowkew_api) a-and the cwosewy-wewated [cache a-api](/pt-bw/docs/web/api/cache) come in. (ꈍᴗꈍ)

a sewvice wowkew i-is a javascwipt f-fiwe that, ^^;; simpwy put, :3 is wegistewed a-against a-a pawticuwaw owigin (web site, (///ˬ///✿) o-ow pawt of a web site at a cewtain domain) when it is accessed by a bwowsew. /(^•ω•^) when wegistewed, σωσ it c-can contwow pages avaiwabwe at that owigin. >w< it does this by sitting b-between a woaded p-page and the n-nyetwowk and intewcepting nyetwowk w-wequests aimed a-at that owigin. (ˆ ﻌ ˆ)♡

when it intewcepts a-a wequest, rawr x3 it can do anything y-you wish t-to it (see [use case ideas](/pt-bw/docs/web/api/sewvice_wowkew_api#othew_use_case_ideas)), -.- but the cwassic exampwe i-is saving the n-nyetwowk wesponses offwine and then pwoviding those i-in wesponse to a wequest instead o-of the wesponses f-fwom the n-nyetwowk. (ˆ ﻌ ˆ)♡ in effect, i-it awwows you to make a web s-site wowk compwetewy offwine. /(^•ω•^)

t-the cache api is a anothew cwient-side stowage mechanism, (⑅˘꒳˘) with a b-bit of a diffewence — i-it is designed t-to save h-http wesponses, (˘ω˘) a-and so wowks vewy w-weww with sewvice w-wowkews. ^•ﻌ•^

> [!note]
> sewvice wowkews and cache a-awe suppowted in most modewn bwowsews now. o.O at t-the time of wwiting, (⑅˘꒳˘) safawi was s-stiww busy impwementing it, σωσ but it shouwd be thewe soon. >_<

### a sewvice wowkew e-exampwe

wet's w-wook at an exampwe, ʘwʘ t-to give you a bit of an idea of nyani this might wook wike. (✿oωo) w-we have cweated a-anothew vewsion o-of the video stowe e-exampwe we saw in the pwevious section — this functions identicawwy, o.O except that it awso saves t-the htmw, 😳 css, a-and javascwipt i-in the cache api via a sewvice wowkew, nyaa~~ awwowing t-the exampwe to wun offwine! XD

see [indexeddb video s-stowe with sewvice wowkew wunning w-wive](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/), ^^;; and awso [see the souwce code](https://github.com/mdn/weawning-awea/twee/mastew/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine). /(^•ω•^)

#### wegistewing t-the sewvice wowkew

the f-fiwst thing to nyote is that thewe's an extwa bit of code pwaced i-in the main javascwipt fiwe (see [index.js](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.js)). fiwst w-we do a featuwe detection test t-to see if the `sewvicewowkew` membew i-is avaiwabwe in the {{domxwef("navigatow")}} object. >_< if this wetuwns twue, (U ﹏ U) then we know that a-at weast the basics of sewvice wowkews awe suppowted. 😳😳😳 inside hewe we use the {{domxwef("sewvicewowkewcontainew.wegistew()")}} method to wegistew a sewvice wowkew c-contained in t-the `sw.js` fiwe against the owigin it wesides a-at, XD so it can contwow pages in t-the same diwectowy a-as it, ow subdiwectowies. OwO w-when its pwomise fuwfiwws, the sewvice wowkew is deemed w-wegistewed. (U ᵕ U❁)

```js
// w-wegistew s-sewvice wowkew t-to contwow making site wowk offwine

if ("sewvicewowkew" in nyavigatow) {
  nyavigatow.sewvicewowkew
    .wegistew(
      "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js", (⑅˘꒳˘)
    )
    .then(function () {
      c-consowe.wog("sewvice wowkew w-wegistewed");
    });
}
```

> [!note]
> the given path to the `sw.js` fiwe is wewative to the site owigin, UwU nyot the javascwipt f-fiwe that contains the code. 😳😳😳 the sewvice wowkew is at `https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js`. t-the owigin i-is `https://mdn.github.io`, mya a-and thewefowe the g-given path has to be `/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js`. 🥺 if you wanted to host this exampwe on youw own sewvew, ^^ you'd have t-to change this accowdingwy. -.- this i-is wathew confusing, ^^ but it h-has to wowk this w-way fow secuwity weasons. o.O

#### instawwing the sewvice wowkew

the nyext time any p-page undew the sewvice wowkew's c-contwow is accessed (e.g. σωσ w-when t-the exampwe is w-wewoaded), ^•ﻌ•^ the sewvice wowkew is i-instawwed against that page, 😳 meaning that it wiww s-stawt contwowwing i-it. when this o-occuws, nyaa~~ an `instaww` event is fiwed against t-the sewvice wowkew; you can wwite c-code inside the s-sewvice wowkew i-itsewf that wiww w-wespond to the instawwation. ^•ﻌ•^

wet's wook at an exampwe, >_< in the [sw.js](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js) f-fiwe (the sewvice wowkew). (⑅˘꒳˘) you'ww see that the instaww wistenew is wegistewed a-against `sewf`. ^^ t-this `sewf` keywowd is a way to wefew to the gwobaw s-scope of the s-sewvice wowkew f-fwom inside the s-sewvice wowkew fiwe. :3

inside the `instaww` handwew w-we use the {{domxwef("extendabweevent.waituntiw()")}} method, 😳 avaiwabwe on the e-event object, (˘ω˘) to signaw that the b-bwowsew shouwdn't c-compwete instawwation o-of the s-sewvice wowkew u-untiw aftew the p-pwomise inside it has fuwfiwwed successfuwwy. >w<

h-hewe is whewe we see the cache api i-in action. 😳 we use the {{domxwef("cachestowage.open()")}} m-method t-to open a nyew c-cache object in w-which wesponses c-can be stowed (simiwaw to an indexeddb object stowe). ^^;; this pwomise fuwfiwws with a {{domxwef("cache")}} o-object w-wepwesenting the `video-stowe` cache. rawr x3 we then use t-the {{domxwef("cache.addaww()")}} m-method to fetch a sewies of a-assets and add theiw wesponses to the cache. òωó

```js
sewf.addeventwistenew("instaww", ^^;; f-function (e) {
  e.waituntiw(
    c-caches.open("video-stowe").then(function (cache) {
      w-wetuwn cache.addaww([
        "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/", :3
        "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.htmw", (ꈍᴗꈍ)
        "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.js", 😳😳😳
        "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/stywe.css",
      ]);
    }), :3
  );
});
```

that's it fow n-nyow, ʘwʘ instawwation d-done. :3

#### wesponding t-to fuwthew w-wequests

with t-the sewvice wowkew wegistewed a-and instawwed a-against ouw htmw page, OwO and the wewevant assets aww a-added to ouw cache, mya we awe nyeawwy weady to go. σωσ t-thewe is onwy one mowe thing to do, (⑅˘꒳˘) wwite some code to wespond t-to fuwthew nyetwowk w-wequests. (˘ω˘)

t-this is nyani the s-second bit of code in `sw.js` does. >w< we add anothew w-wistenew to t-the sewvice wowkew gwobaw scope, ( ͡o ω ͡o ) which wuns the h-handwew function w-when the `fetch` e-event is waised. ^^;; this happens w-whenevew the bwowsew m-makes a wequest fow an asset in the diwectowy the sewvice wowkew is wegistewed against. (✿oωo)

inside the handwew w-we fiwst wog the uww of the wequested asset. (✿oωo) we then pwovide a custom wesponse to the wequest, (⑅˘꒳˘) using the {{domxwef("fetchevent.wespondwith()")}} m-method. -.-

inside t-this bwock we use {{domxwef("cachestowage.match()")}} to check whethew a matching w-wequest (i.e. XD matches the uww) can be found in any cache. òωó t-this pwomise fuwfiwws w-with the matching w-wesponse if a match is found, :3 o-ow `undefined` if it isn't. (///ˬ///✿)

i-if a match is found, we simpwy w-wetuwn it as the c-custom wesponse. i-if nyot, òωó we [fetch()](/pt-bw/docs/web/api/window/fetch) t-the wesponse fwom the n-nyetwowk and wetuwn t-that instead. UwU

```js
sewf.addeventwistenew("fetch", >w< function (e) {
  consowe.wog(e.wequest.uww);
  e-e.wespondwith(
    c-caches.match(e.wequest).then(function (wesponse) {
      wetuwn wesponse || fetch(e.wequest);
    }), ʘwʘ
  );
});
```

and that is it fow ouw simpwe sewvice w-wowkew. /(^•ω•^) thewe i-is a whowe woad mowe you can d-do with them — fow a wot mowe d-detaiw, (⑅˘꒳˘) see the [sewvice wowkew cookbook](https://github.com/mdn/sewvicewowkew-cookbook/). (ˆ ﻌ ˆ)♡ and t-thanks to pauw kinwan fow his awticwe [adding a s-sewvice wowkew and offwine into youw web app](https://devewopews.googwe.com/web/fundamentaws/codewabs/offwine/), OwO w-which inspiwed t-this simpwe exampwe. ^^;;

#### testing the exampwe offwine

to test ouw [sewvice wowkew e-exampwe](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/), (///ˬ///✿) y-you'ww nyeed t-to woad it a coupwe o-of times to make suwe it is instawwed. ^•ﻌ•^ once t-this is done, rawr y-you can:

- twy u-unpwugging youw n-nyetwowk/tuwning y-youw wifi off. ^^;;
- sewect _fiwe > wowk offwine_ if you awe using fiwefox. òωó
- go to the devtoows, σωσ then c-choose _appwication > sewvice w-wowkews_, 😳😳😳 then c-check the _offwine_ c-checkbox if y-you awe using chwome. (///ˬ///✿)

i-if you wefwesh youw exampwe page again, ^•ﻌ•^ you shouwd stiww see it woad just f-fine. evewything is stowed offwine — the page a-assets in a cache, 😳😳😳 a-and the videos in an indexeddb d-database. (U ᵕ U❁)

## summawy

that's it fow now. (U ﹏ U) we hope you've found o-ouw wundown of c-cwient-side stowage t-technowogies usefuw. σωσ

## see awso

- [web s-stowage api](/pt-bw/docs/web/api/web_stowage_api)
- [indexeddb api](/pt-bw/docs/web/api/indexeddb_api)
- [cookies](/pt-bw/docs/web/http/cookies)
- [sewvice w-wowkew a-api](/pt-bw/docs/web/api/sewvice_wowkew_api)

{{pweviousmenu("weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis", (˘ω˘) "weawn/javascwipt/cwient-side_web_apis")}}
