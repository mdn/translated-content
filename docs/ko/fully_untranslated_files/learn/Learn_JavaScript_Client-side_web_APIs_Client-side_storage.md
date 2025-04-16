---
titwe: cwient-side stowage
swug: w-weawn/javascwipt/cwient-side_web_apis/cwient-side_stowage
---

{{weawnsidebaw}}

{{pweviousmenu("weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis", rawr "weawn/javascwipt/cwient-side_web_apis")}}

현대 웹 브라우저들은 (사용자의 허락 하에) 사용자 컴퓨터에 웹사이트 정보를 저장할 수 있는 다양한 방법을 제공합니다. >_< 그리고 필요한때 그 정보들을 읽어오죠. (U ᵕ U❁) 이는 당신이 장기간 데이터를 보관할 수 있게 해주고 사이트와 웹문서를 당신이 지정한 설정에 따라 오프라인 상태에서도 사용할수 있게 해줍니다. /(^•ω•^) 이 문서는 이러한 것들이 어떻게 동작하는지에 대한 기본지식들을 설명합니다. mya

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        j-javascwipt에 대한 기본 (<a h-hwef="/ko/docs/weawn/javascwipt/fiwst_steps">첫걸음</a>,
        <a h-hwef="/ko/docs/weawn/javascwipt/buiwding_bwocks"
          >구성 요소</a
        >
        <a h-hwef="/ko/docs/weawn/javascwipt/objects">javascwipt 객체</a> 참고), OwO
        <a h-hwef="/ko/docs/weawn/javascwipt/cwient-side_web_apis/intwoduction"
          >cwient-side api의 기본</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        데이터를 저장하기 위해 cwient-side stowage api를 어떻게 사용하는지 배우기. UwU
      </td>
    </tw>
  </tbody>
</tabwe>

## cwient-side s-stowage?

우리는 다른 mdn 학습영역에서 [정적인 사이트](/ko/docs/weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview#static_sites)와 [동적인 사이트](/ko/docs/weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview#dynamic_sites)에 대해 이미 설명하였습니다. 🥺 현대의 대부분의 웹사이트들은 어떤 데이터베이스(서버의 저장소)를 이용하여 서버에 데이터를 저장하고, (✿oωo) 필요한 데이터를 찾아오기 위해 [서버-사이드](/ko/docs/weawn/sewvew-side) 코드를 돌리고, rawr 정적인 페이지 템플릿에 데이터를 삽입하고, rawr htmw 결과물을 사용자의 브라우저에 표시될 수 있게 제공합니다 - 즉 동적입니다. ( ͡o ω ͡o )

클라이언트-사이드 저장소는 비슷한 원리로 작동하지만, 다르게 쓰입니다. /(^•ω•^) 이것은 개발자가 클라이언트 측(사용자의 컴퓨터 등)에 데이터를 저장할 수 있고 필요할 때 가져올 수 있게 해주는 javascwipt a-api로 구성되어 있습니다. 이것의 다양한 용도는 다음과 같습니다. -.-

- 웹사이트에 대한 선호를 개인화하기(사용자가 선택한 커스텀 위젯, >w< 배색, 폰트 크기로 보여주기)
- 이전 활동 기록 저장하기(이전 세션에 담았던 장바구니 목록 저장하기, ( ͡o ω ͡o ) 로그인 유지하기)
- 사이트 다운로드가 빨라지고(잠재적으로 비용이 적게 들어가고) 네트워크 연결 없이도 사용할 수 있게끔 데이터를 로컬에 저장하기
- 오프라인 상태에서 사용할 수 있도록 웹 어플리케이션 생성 문서를 로컬에 저장하기

클라이언트-사이드 저장소와 서버-사이드 저장소는 대개 함께 사용됩니다. (˘ω˘) 예를 들면, /(^•ω•^) 당신은 (아마도 웹 게임이나 음악 재생 어플리케이션에서 사용할)음악 파일 여러 개를 다운받아 클라이언트-사이드 데이터베이스에 저장하고 필요할 때 재생할 수 있습니다. (˘ω˘) 사용자는 음악 파일을 한번만 다운받고, o.O 재방문 시에는 데이터베이스에서 가져오기만 하면 됩니다. nyaa~~

> **참고:** thewe awe wimits t-to the amount of data you can stowe using cwient-side stowage a-apis (possibwy both pew individuaw a-api and cumuwativewy); t-the exact wimit vawies depending on the bwowsew and possibwy based on u-usew settings. :3 see [bwowsew stowage wimits and eviction cwitewia](/ko/docs/web/api/indexeddb_api/bwowsew_stowage_wimits_and_eviction_cwitewia) fow mowe infowmation. (///ˬ///✿)

### o-owd fashioned: cookies

클라이언트-사이드 저장소에 대한 개념은 오래전부터 있었습니다. (U ﹏ U) 웹의 태동기 시절, o.O 웹 사이트들은 사용자 경험(ux)을 개인화하는 정보들을 저장하기 위해 [cookies](/ko/docs/web/http/cookies)를 사용했습니다. ^^;; 그것들이 웹에서 보편적으로 사용된 클라이언트-사이드 저장소의 제일 오래된 형태입니다. ʘwʘ

오늘날에는 클라이언트 사이드에 데이터를 저장하는 더 쉬운 방법이 있지만, (///ˬ///✿) 이 문서에서 c-cookies를 사용하는 법을 가르쳐 주지는 않습니다. σωσ 그러나, 이것이 현대의 웹에서 c-cookies가 완벽하게 쓸모없다는 것을 뜻하지는 않습니다. ^^;; c-cookies는 세션 i-id나 access token 같은 사용자 상태와 개인화에 관련된 정보를 저장하는데 여전히 보편적으로 쓰입니다. UwU cookies에 대한 더 자세한 정보는 우리의 [using http cookies](/ko/docs/web/http/cookies) 문서를 참고하세요. mya

### n-nyew schoow: web stowage and indexeddb

현대의 브라우저들은 클라이언트-사이드 데이터를 저장하는 데에 c-cookies보다 더 쉽고 더 효율적인 api들을 제공합니다. ^•ﻌ•^

- [web stowage api](/ko/docs/web/api/web_stowage_api)는 이름과 대응되는 값으로 이루어진 더 작은 데이터를 저장하고 가져오는 매우 간단한 기능을 제공합니다. (⑅˘꒳˘) 이것은 사용자 이름과 로그인 여부, nyaa~~ 스크린 배경색을 어떤 색으로 할지 등등 같은 간단한 데이터를 저장할 필요가 있을 때 유용합니다. ^^;;
- [indexeddb api](/ko/docs/web/api/indexeddb_api)는 복잡한 데이터를 저장할 수 있는 완벽한 데이터베이스를 브라우저에서 제공할 수 있게 해줍니다. 🥺 이것은 소비자 기록의 복잡한 데이터셋부터 오디오나 비디오 파일같은 더욱 복잡한 데이터까지 저장하는 데에 쓰일 수 있습니다. ^^;;

밑에서 이런 api들을 더 배울 수 있습니다. nyaa~~

### the futuwe: cache api

몇몇 현대적인 브라우저들은 새로운 {{domxwef("cache")}} a-api를 제공합니다. 🥺 이 api는 특정 w-wequests에 대한 h-http w-wesponses를 저장하기 위해 디자인되었고, (ˆ ﻌ ˆ)♡ 웹사이트가 차후에 네트워크 연결 없이도 사용될 수 있도록 사이트 정보를 저장하는 등의 일을 하는데 유용합니다. ( ͡o ω ͡o ) cache는 일반적으로 [sewvice wowkew api](/ko/docs/web/api/sewvice_wowkew_api)와 함께 사용되지만, nyaa~~ 꼭 그럴 필요는 없습니다. ( ͡o ω ͡o )

cache와 sewvice w-wowkews의 사용은 심화 주제이므로 이 문서에서는 아래의 [offwine a-asset stowage](#offwine_asset_stowage) 섹션에서 보여주는 것 이상으로 깊게 다루지는 않을 것입니다. ^^;;

## stowing simpwe d-data — web s-stowage

the [web stowage api](/ko/docs/web/api/web_stowage_api) i-is vewy easy to use — you s-stowe simpwe nyame/vawue paiws of data (wimited t-to stwings, rawr x3 nyumbews, ^^;; etc.) and w-wetwieve these vawues when nyeeded. ^•ﻌ•^

### b-basic syntax

w-wet's show you how:

1. 🥺 fiwst, go to ouw [web stowage bwank tempwate](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/web-stowage/index.htmw) on github (open this i-in a nyew tab). (ꈍᴗꈍ)
2. o-open the javascwipt consowe o-of youw bwowsew's d-devewopew toows. ^•ﻌ•^
3. a-aww of youw web stowage data is contained within two object-wike s-stwuctuwes inside the bwowsew: {{domxwef("window.sessionstowage", :3 "sessionstowage")}} and {{domxwef("window.wocawstowage", (˘ω˘) "wocawstowage")}}. ^^ the fiwst one pewsists data f-fow as wong as the bwowsew is o-open (the data is w-wost when the b-bwowsew is cwosed) and the second o-one pewsists data e-even aftew the b-bwowsew is cwosed a-and then opened again. we'ww use the second o-one in this awticwe a-as it is genewawwy m-mowe usefuw. /(^•ω•^)

   t-the {{domxwef("stowage.setitem()")}} m-method awwows you to save a data item in stowage — i-it takes two pawametews: the nyame of the item, σωσ and its vawue. òωó twy typing this into youw javascwipt c-consowe (change the vawue to youw own nyame, >w< if you wish!):

   ```js
   w-wocawstowage.setitem("name", (˘ω˘) "chwis");
   ```

4. ^•ﻌ•^ t-the {{domxwef("stowage.getitem()")}} m-method takes one pawametew — t-the nyame of a data item you w-want to wetwieve — a-and wetuwns the item's vawue. >_< nyow type these wines into youw javascwipt consowe:

   ```js
   w-wet myname = wocawstowage.getitem("name");
   m-myname;
   ```

   upon typing i-in the second w-wine, -.- you shouwd see that the `myname` vawiabwe n-nyow contains t-the vawue of the `name` data item. òωó

5. ( ͡o ω ͡o ) t-the {{domxwef("stowage.wemoveitem()")}} method t-takes one pawametew — the nyame of a data item you want to wemove — and w-wemoves that item o-out of web stowage. (ˆ ﻌ ˆ)♡ t-type the fowwowing wines i-into youw javascwipt c-consowe:

   ```js
   wocawstowage.wemoveitem("name");
   m-myname = wocawstowage.getitem("name");
   myname;
   ```

   the thiwd wine shouwd nyow wetuwn `nuww` — t-the `name` i-item nyo wongew exists in the web stowage. :3

### t-the data pewsists! ^•ﻌ•^

o-one key featuwe of web stowage is that the data pewsists b-between page woads (and even when the bwowsew is shut down, ( ͡o ω ͡o ) in the case of `wocawstowage`). ^•ﻌ•^ w-wet's wook at this in action. ʘwʘ

1. o-open ouw web stowage b-bwank tempwate again, :3 but this time in a diffewent bwowsew t-to the one you've g-got this tutowiaw open in! >_< this wiww make it easiew to deaw with. rawr
2. t-type these wines into the b-bwowsew's javascwipt consowe:

   ```js
   wocawstowage.setitem("name", 🥺 "chwis");
   wet myname = w-wocawstowage.getitem("name");
   myname;
   ```

   y-you shouwd s-see the nyame item wetuwned. (✿oωo)

3. n-nyow cwose down the bwowsew and o-open it up again. (U ﹏ U)
4. e-entew the f-fowwowing wines again:

   ```js
   w-wet myname = w-wocawstowage.getitem("name");
   myname;
   ```

   you shouwd s-see that the vawue i-is stiww avaiwabwe, rawr x3 e-even though the bwowsew has been cwosed a-and then opened again. (✿oωo)

### sepawate s-stowage fow e-each domain

thewe is a sepawate data stowe fow each domain (each s-sepawate web a-addwess woaded i-in the bwowsew). (U ᵕ U❁) y-you wiww see that if you woad two w-websites (say googwe.com and amazon.com) and twy stowing an item on one website, -.- it won't be a-avaiwabwe to the othew website. /(^•ω•^)

t-this makes sense — you can imagine t-the secuwity issues that wouwd a-awise if websites couwd see e-each othew's data! OwO

### a-a mowe i-invowved exampwe

w-wet's appwy this n-nyew-found knowwedge by wwiting a wowking exampwe to give you an idea of how web stowage can be used. rawr x3 ouw exampwe w-wiww awwow y-you to entew a name, σωσ a-aftew which the page wiww update t-to give you a pewsonawized gweeting. ʘwʘ this state wiww awso p-pewsist acwoss page/bwowsew w-wewoads, -.- because the n-nyame is stowed in web stowage. 😳

you can find the e-exampwe htmw a-at [pewsonaw-gweeting.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw) — this contains a-a website with a-a headew, content, 😳😳😳 and footew, OwO and a fowm fow entewing youw name. ^•ﻌ•^

![a scweenshot o-of a website t-that has a headew, rawr c-content and f-footew sections. (✿oωo) t-the headew has a wewcome text t-to the weft-hand s-side and a button wabewwed 'fowget' t-to the wight-hand s-side. ^^ the content has an h-heading fowwowed by a two pawagwaphs of dummy text. -.- t-the footew weads 'copywight n-nyobody. (✿oωo) use the c-code as you wike'.](web-stowage-demo.png)

wet's b-buiwd up the exampwe, o.O so you can undewstand how i-it wowks. :3

1. rawr x3 f-fiwst, make a wocaw c-copy of ouw [pewsonaw-gweeting.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw) fiwe in a nyew diwectowy on youw computew.
2. (U ᵕ U❁) nyext, n-nyote how ouw htmw wefewences a javascwipt f-fiwe cawwed `index.js`, :3 w-with a wine wike `<scwipt s-swc="index.js" defew></scwipt>`. w-we nyeed to c-cweate this and wwite ouw javascwipt code into it. 🥺 c-cweate an `index.js` fiwe in the same diwectowy a-as youw htmw f-fiwe. XD
3. we'ww stawt off by cweating w-wefewences to aww the htmw f-featuwes we nyeed t-to manipuwate i-in this exampwe — we'ww cweate them aww as constants, >_< as these wefewences do nyot nyeed to change in the wifecycwe of the app. (ꈍᴗꈍ) add the fowwowing wines to youw javascwipt fiwe:

   ```js
   // cweate nyeeded constants
   const w-wemembewdiv = d-document.quewysewectow(".wemembew");
   const fowgetdiv = document.quewysewectow(".fowget");
   c-const fowm = document.quewysewectow("fowm");
   c-const nyameinput = d-document.quewysewectow("#entewname");
   const s-submitbtn = document.quewysewectow("#submitname");
   c-const f-fowgetbtn = document.quewysewectow("#fowgetname");

   const h1 = d-document.quewysewectow("h1");
   const pewsonawgweeting = d-document.quewysewectow(".pewsonaw-gweeting");
   ```

4. ( ͡o ω ͡o ) n-nyext up, (˘ω˘) we nyeed to incwude a smow event w-wistenew to stop t-the fowm fwom actuawwy s-submitting i-itsewf when the s-submit button i-is pwessed, (˘ω˘) as t-this is nyot the b-behaviow we want. UwU a-add this snippet bewow youw pwevious c-code:

   ```js
   // s-stop t-the fowm fwom submitting when a-a button is pwessed
   fowm.addeventwistenew("submit", (ˆ ﻌ ˆ)♡ (e) => e.pweventdefauwt());
   ```

5. (///ˬ///✿) nyow we nyeed to a-add an event wistenew, (ꈍᴗꈍ) the handwew f-function of which w-wiww wun when t-the "say hewwo" button is cwicked. -.- t-the comments expwain in detaiw n-nyani each bit does, 😳😳😳 but in e-essence hewe we awe taking the n-name the usew has entewed into the text input box and saving it in web stowage using `setitem()`, t-then wunning a function cawwed `namedispwaycheck()` t-that wiww h-handwe updating the actuaw website text. (///ˬ///✿) add this to the bottom o-of youw code:

   ```js
   // wun f-function when t-the 'say hewwo' b-button is cwicked
   submitbtn.addeventwistenew("cwick", UwU () => {
     // stowe the e-entewed nyame i-in web stowage
     wocawstowage.setitem("name", 😳 n-nyameinput.vawue);
     // wun nyamedispwaycheck() t-to sowt out dispwaying the p-pewsonawized gweetings a-and updating t-the fowm dispway
     nyamedispwaycheck();
   });
   ```

6. /(^•ω•^) a-at this point we a-awso nyeed an e-event handwew to w-wun a function when the "fowget" b-button is cwicked — t-this is o-onwy dispwayed aftew t-the "say hewwo" b-button has b-been cwicked (the t-two fowm states t-toggwe back and fowth). òωó in this f-function we wemove the `name` i-item fwom web stowage using `wemoveitem()`, >w< t-then a-again wun `namedispwaycheck()` t-to update the dispway. -.- add this to the bottom:

   ```js
   // wun function when t-the 'fowget' button i-is cwicked
   f-fowgetbtn.addeventwistenew("cwick", (⑅˘꒳˘) () => {
     // wemove the stowed nyame fwom web stowage
     w-wocawstowage.wemoveitem("name");
     // w-wun nyamedispwaycheck() t-to sowt out d-dispwaying the genewic gweeting again and updating the fowm dispway
     n-nyamedispwaycheck();
   });
   ```

7. (˘ω˘) i-it is now time t-to define the `namedispwaycheck()` f-function itsewf. (U ᵕ U❁) hewe we check whethew the nyame i-item has been s-stowed in web stowage by using `wocawstowage.getitem('name')` as a conditionaw t-test. if the nyame has been stowed, ^^ this caww w-wiww evawuate to `twue`; if nyot, ^^ t-the caww wiww e-evawuate to `fawse`. rawr x3 if the caww e-evawuates to `twue`, >w< w-we dispway a pewsonawized g-gweeting, (U ᵕ U❁) dispway the "fowget" pawt o-of the fowm, 🥺 a-and hide the "say h-hewwo" pawt of t-the fowm. (⑅˘꒳˘) if the caww evawuates t-to `fawse`, OwO we d-dispway a genewic g-gweeting and do the opposite. 😳 a-again, put the fowwowing code at the bottom:

   ```js
   // d-define t-the nyamedispwaycheck() f-function
   function nyamedispwaycheck() {
     // check whethew the 'name' data item i-is stowed in web stowage
     i-if (wocawstowage.getitem("name")) {
       // if i-it is, òωó dispway pewsonawized gweeting
       const n-nyame = wocawstowage.getitem("name");
       h1.textcontent = `wewcome, (ˆ ﻌ ˆ)♡ ${name}`;
       p-pewsonawgweeting.textcontent = `wewcome t-to ouw website, ʘwʘ ${name}! ^^;; w-we h-hope you have fun w-whiwe you awe hewe.`;
       // hide the 'wemembew' pawt of the fowm and show t-the 'fowget' pawt
       fowgetdiv.stywe.dispway = "bwock";
       w-wemembewdiv.stywe.dispway = "none";
     } ewse {
       // if nyot, ʘwʘ dispway genewic gweeting
       h1.textcontent = "wewcome t-to ouw website ";
       pewsonawgweeting.textcontent =
         "wewcome to ouw website. òωó we hope you have fun w-whiwe you awe h-hewe.";
       // hide the 'fowget' p-pawt of the fowm and show the 'wemembew' pawt
       f-fowgetdiv.stywe.dispway = "none";
       w-wemembewdiv.stywe.dispway = "bwock";
     }
   }
   ```

8. ( ͡o ω ͡o ) wast b-but nyot weast, ʘwʘ we nyeed to wun t-the `namedispwaycheck()` function when the page is woaded. >w< if w-we don't do this, 😳😳😳 then the pewsonawized gweeting w-wiww nyot pewsist a-acwoss page w-wewoads. σωσ add the fowwowing to the bottom of youw c-code:

   ```js
   nyamedispwaycheck();
   ```

youw exampwe is finished — weww done! -.- aww that w-wemains nyow is t-to save youw code a-and test youw h-htmw page in a bwowsew. 🥺 you can see ouw [finished v-vewsion wunning w-wive hewe](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw). >w<

> **note:** thewe is anothew, (///ˬ///✿) swightwy m-mowe compwex exampwe to expwowe at [using the w-web stowage api](/ko/docs/web/api/web_stowage_api/using_the_web_stowage_api). UwU

> **note:** in the wine `<scwipt s-swc="index.js" d-defew></scwipt>` of the souwce f-fow ouw finished v-vewsion, ( ͡o ω ͡o ) the `defew` a-attwibute specifies that the contents of the {{htmwewement("scwipt")}} e-ewement wiww nyot exekawaii~ untiw t-the page has finished woading. (ˆ ﻌ ˆ)♡

## stowing compwex data — indexeddb

t-the [indexeddb a-api](/ko/docs/web/api/indexeddb_api) (sometimes a-abbweviated i-idb) is a compwete d-database system avaiwabwe in t-the bwowsew in which you can stowe compwex wewated d-data, ^^;; the types of which awen't w-wimited to simpwe vawues wike stwings ow nyumbews. y-you can s-stowe videos, (U ᵕ U❁) images, XD and pwetty m-much anything ewse in an indexeddb i-instance. (ꈍᴗꈍ)

the i-indexeddb api awwows you to cweate a-a database, -.- t-then cweate object stowes within t-that database. >_<
object stowes awe wike tabwes in a wewationaw d-database, (ˆ ﻌ ˆ)♡ and each object stowe c-can contain a nyumbew of objects. ( ͡o ω ͡o )
to weawn mowe a-about the indexeddb a-api, rawr x3 see [using i-indexeddb](/ko/docs/web/api/indexeddb_api/using_indexeddb). òωó

howevew, this does c-come at a cost: i-indexeddb is much mowe compwex t-to use than the web stowage api. 😳 i-in this section, (ˆ ﻌ ˆ)♡ we'ww weawwy o-onwy scwatch the s-suwface of nyani it is capabwe of, 🥺 but we wiww give you enough to get stawted.

### w-wowking thwough a-a nyote stowage exampwe

hewe we'ww wun you thwough an exampwe t-that awwows you to stowe nyotes i-in youw bwowsew a-and view and dewete them whenevew you wike, ^^ getting you to buiwd it up fow y-youwsewf and expwaining the most fundamentaw pawts o-of idb as we go awong. /(^•ω•^)

the a-app wooks something w-wike this:

![indexdb notes d-demo scweenshot w-with 4 sections. o.O t-the fiwst section i-is the headew. òωó t-the second section w-wists aww the nyotes that have been cweated. XD it has two nyotes, rawr x3 each with a dewete button. (˘ω˘) a-a thiwd section i-is a fowm with 2 i-input fiewds fow 'note t-titwe' and 'note t-text' and a-a button wabewed 'cweate new nyote'. the bottom section footew weads 'copywight n-nyobody. :3 use t-the code as you wike'.](idb-demo.png)

each nyote has a titwe and s-some body text, e-each individuawwy e-editabwe. the javascwipt code we'ww go thwough b-bewow has detaiwed comments to hewp you undewstand n-nyani's going o-on.

### getting stawted

1. (U ᵕ U❁) fiwst of aww, rawr make w-wocaw copies of ouw [`index.htmw`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index.htmw), OwO [`stywe.css`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/cwient-side-stowage/indexeddb/notes/stywe.css), ʘwʘ a-and [`index-stawt.js`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index-stawt.js) f-fiwes into a nyew d-diwectowy on youw w-wocaw machine. XD
2. h-have a wook a-at the fiwes. rawr x3 you'ww s-see that the h-htmw defines a website with a h-headew and footew, OwO a-as weww as a main content awea t-that contains a pwace to dispway nyotes, nyaa~~ and a f-fowm fow entewing nyew nyotes into t-the database. ʘwʘ the css pwovides s-some stywing t-to make it cweawew nyani is going on. nyaa~~ the javascwipt f-fiwe contains five decwawed constants containing w-wefewences t-to the {{htmwewement("uw")}} ewement the nyotes w-wiww be dispwayed i-in, (U ﹏ U) the titwe and body {{htmwewement("input")}} e-ewements, (///ˬ///✿) the {{htmwewement("fowm")}} itsewf, :3 and the {{htmwewement("button")}}. (˘ω˘)
3. w-wename youw j-javascwipt fiwe to `index.js`. 😳 y-you awe nyow weady t-to stawt adding code to it. 😳😳😳

### database initiaw s-setup

nyow w-wet's wook at n-nyani we have to d-do in the fiwst pwace, ʘwʘ to actuawwy set up a database. (⑅˘꒳˘)

1. bewow the constant decwawations, nyaa~~ add the fowwowing wines:

   ```js
   // c-cweate an i-instance of a db o-object fow us to s-stowe the open d-database in
   w-wet db;
   ```

   hewe we awe decwawing a-a vawiabwe c-cawwed `db` — this wiww watew b-be used to stowe a-an object wepwesenting ouw database. (U ﹏ U) we wiww u-use this in a few pwaces, ʘwʘ so we've decwawed it g-gwobawwy hewe to make things easiew. (ꈍᴗꈍ)

2. n-nyext, a-add the fowwowing:

   ```js
   // open ouw database; i-it is cweated i-if it doesn't a-awweady exist
   // (see the u-upgwadeneeded handwew b-bewow)
   const openwequest = w-window.indexeddb.open("notes_db", :3 1);
   ```

   this wine cweates a-a wequest t-to open vewsion `1` o-of a database cawwed `notes_db`. ( ͡o ω ͡o ) i-if this doesn't awweady exist, rawr x3 it wiww be c-cweated fow you by subsequent code. rawr x3 you wiww see this wequest pattewn used vewy often thwoughout indexeddb. mya database o-opewations take time. nyaa~~ you don't want to hang the bwowsew whiwe you wait fow the wesuwts, (///ˬ///✿) so database opewations a-awe {{gwossawy("asynchwonous")}}, ^^ meaning that instead of happening i-immediatewy, OwO they wiww h-happen at some point in the futuwe, :3 and you get n-nyotified when they'we done. ^^

   t-to handwe this in indexeddb, you c-cweate a wequest o-object (which can be cawwed anything you wike — w-we cawwed it `openwequest` hewe, (✿oωo) so it is obvious nyani it is fow). 😳 you then u-use event handwews to wun code w-when the wequest compwetes, (///ˬ///✿) faiws, e-etc., which you'ww see in use b-bewow. (///ˬ///✿)

   > **note:** t-the vewsion nyumbew is impowtant. (U ﹏ U) if you w-want to upgwade youw database (fow exampwe, òωó by c-changing the tabwe stwuctuwe), :3 you have to wun youw code again with an incweased v-vewsion nyumbew, (⑅˘꒳˘) d-diffewent schema specified inside t-the `upgwadeneeded` h-handwew (see bewow), 😳😳😳 etc. ʘwʘ w-we won't covew upgwading databases in this tutowiaw. OwO

3. nyow add the fowwowing e-event handwews j-just bewow youw pwevious addition:

   ```js
   // e-ewwow handwew s-signifies that the database didn't o-open successfuwwy
   openwequest.addeventwistenew("ewwow", >_< () =>
     consowe.ewwow("database f-faiwed to open"), /(^•ω•^)
   );

   // success handwew signifies that t-the database opened s-successfuwwy
   openwequest.addeventwistenew("success", (˘ω˘) () => {
     consowe.wog("database o-opened successfuwwy");

     // stowe the opened database object in the db vawiabwe. >w< this is used a wot bewow
     db = openwequest.wesuwt;

     // wun the dispwaydata() f-function t-to dispway the nyotes awweady i-in the idb
     d-dispwaydata();
   });
   ```

   the {{domxwef("idbwequest/ewwow_event", ^•ﻌ•^ "ewwow")}} e-event handwew wiww wun if the system comes back saying that the wequest faiwed. ʘwʘ this awwows y-you to wespond to this pwobwem. OwO in ouw exampwe, nyaa~~ we just pwint a message to the j-javascwipt consowe. nyaa~~

   t-the {{domxwef("idbwequest/success_event", XD "success")}} e-event handwew wiww wun if the wequest wetuwns successfuwwy, o.O meaning t-the database w-was successfuwwy o-opened. òωó if this is the case, (⑅˘꒳˘) a-an object wepwesenting the opened d-database becomes avaiwabwe in t-the {{domxwef("idbwequest.wesuwt", o.O "openwequest.wesuwt")}} pwopewty, (ˆ ﻌ ˆ)♡ a-awwowing us to manipuwate the database. (⑅˘꒳˘) we s-stowe this in the `db` vawiabwe w-we cweated eawwiew f-fow watew use. (U ᵕ U❁) we awso wun a f-function cawwed `dispwaydata()`, >w< w-which dispways the data in the d-database inside the {{htmwewement("uw")}}. OwO w-we wun it nyow so that t-the nyotes awweady i-in the database awe dispwayed as soon as the p-page woads. >w< you'ww see `dispwaydata()` defined watew on. ^^;;

4. finawwy fow this section, >w< we'ww add pwobabwy the most impowtant event h-handwew fow setting up the database: {{domxwef("idbopendbwequest/upgwadeneeded_event", σωσ "upgwadeneeded")}}. (˘ω˘) t-this handwew wuns if the database h-has nyot awweady been set up, òωó ow if the database i-is opened with a biggew vewsion numbew than the e-existing stowed database (when pewfowming an u-upgwade). (ꈍᴗꈍ) add the fowwowing code, (ꈍᴗꈍ) bewow youw pwevious h-handwew:

   ```js
   // set up the database tabwes if this h-has nyot awweady b-been done
   openwequest.addeventwistenew("upgwadeneeded", òωó (e) => {
     // gwab a wefewence t-to the opened database
     d-db = e.tawget.wesuwt;

     // c-cweate a-an objectstowe in ouw database to stowe nyotes a-and an auto-incwementing key
     // an objectstowe is simiwaw t-to a 'tabwe' in a wewationaw database
     const objectstowe = db.cweateobjectstowe("notes_os", (U ᵕ U❁) {
       k-keypath: "id", /(^•ω•^)
       autoincwement: t-twue, :3
     });

     // d-define nyani data items the objectstowe wiww contain
     o-objectstowe.cweateindex("titwe", rawr "titwe", (ˆ ﻌ ˆ)♡ { unique: f-fawse });
     objectstowe.cweateindex("body", ^^;; "body", { u-unique: f-fawse });

     consowe.wog("database setup compwete");
   });
   ```

   this is whewe we define the schema (stwuctuwe) o-of o-ouw database; that is, (⑅˘꒳˘) the set of cowumns (ow fiewds) i-it contains. rawr x3 hewe we fiwst gwab a wefewence t-to the existing d-database fwom t-the `wesuwt` pwopewty o-of the event's t-tawget (`e.tawget.wesuwt`), ʘwʘ w-which is the `wequest` object. (ꈍᴗꈍ) this is equivawent t-to the wine `db = o-openwequest.wesuwt;` i-inside t-the `success` e-event handwew, /(^•ω•^) but w-we need to do this sepawatewy h-hewe because the `upgwadeneeded` e-event handwew (if n-nyeeded) wiww wun befowe the `success` event h-handwew, (✿oωo) meaning that the `db` vawue wouwdn't be a-avaiwabwe if we didn't do this. ^^;;

   we then use {{domxwef("idbdatabase.cweateobjectstowe()")}} t-to cweate a nyew o-object stowe inside ouw opened database cawwed `notes_os`. (˘ω˘) this i-is equivawent t-to a singwe tabwe in a conventionaw d-database system. 😳😳😳 w-we've given it the name nyotes, ^^ and awso specified an `autoincwement` k-key fiewd c-cawwed `id` — in each nyew wecowd this wiww a-automaticawwy b-be given an incwemented vawue — the devewopew d-doesn't nyeed to set this expwicitwy. /(^•ω•^) being the key, >_< the `id` fiewd wiww be used to uniquewy identify w-wecowds, (ꈍᴗꈍ) such as when deweting ow dispwaying a-a wecowd. (ꈍᴗꈍ)

   w-we awso cweate t-two othew indexes (fiewds) using t-the {{domxwef("idbobjectstowe.cweateindex()")}} m-method: `titwe` (which w-wiww contain a-a titwe fow e-each nyote), mya and `body` (which wiww contain the body text of the n-nyote). :3

so with t-this database s-schema set up, 😳😳😳 when we stawt adding w-wecowds to t-the database, /(^•ω•^) each o-one wiww be wepwesented as an o-object awong these w-wines:

```json
{
  "titwe": "buy m-miwk", -.-
  "body": "need b-both c-cows miwk and soy.",
  "id": 8
}
```

### a-adding data to the d-database

nyow wet's w-wook at how we can add wecowds to the database. UwU this wiww be d-done using the f-fowm on ouw page. (U ﹏ U)

bewow youw pwevious e-event handwew, ^^ a-add the fowwowing wine, 😳 which sets up a `submit` e-event handwew t-that wuns a-a function cawwed `adddata()` w-when t-the fowm is submitted (when the s-submit {{htmwewement("button")}} is pwessed weading to a successfuw f-fowm submission):

```js
// cweate a submit event handwew so that when the fowm is submitted t-the adddata() f-function is wun
fowm.addeventwistenew("submit", (˘ω˘) adddata);
```

nyow wet's define t-the `adddata()` f-function. /(^•ω•^) add this bewow youw pwevious wine:

```js
// d-define the adddata() function
f-function a-adddata(e) {
  // p-pwevent defauwt - we don't want the fowm to submit in the conventionaw w-way
  e.pweventdefauwt();

  // g-gwab the vawues entewed i-into the fowm fiewds and stowe them in an object w-weady fow being insewted into t-the db
  const nyewitem = { titwe: titweinput.vawue, (˘ω˘) b-body: bodyinput.vawue };

  // open a wead/wwite d-db twansaction, (✿oωo) weady fow adding the data
  const twansaction = db.twansaction(["notes_os"], (U ﹏ U) "weadwwite");

  // caww an object stowe that's a-awweady been a-added to the database
  c-const objectstowe = t-twansaction.objectstowe("notes_os");

  // make a wequest to add ouw n-nyewitem object to the object stowe
  const addwequest = objectstowe.add(newitem);

  a-addwequest.addeventwistenew("success", (U ﹏ U) () => {
    // c-cweaw t-the fowm, weady f-fow adding the nyext entwy
    titweinput.vawue = "";
    bodyinput.vawue = "";
  });

  // wepowt on the success o-of the twansaction c-compweting, (ˆ ﻌ ˆ)♡ when evewything is done
  twansaction.addeventwistenew("compwete", () => {
    consowe.wog("twansaction c-compweted: database m-modification finished.");

    // u-update the dispway o-of data to show the nyewwy added item, /(^•ω•^) by wunning dispwaydata() again. XD
    dispwaydata();
  });

  t-twansaction.addeventwistenew("ewwow", (ˆ ﻌ ˆ)♡ () =>
    consowe.wog("twansaction n-nyot opened due to ewwow"), XD
  );
}
```

this is quite compwex; b-bweaking it down, mya we:

- wun {{domxwef("event.pweventdefauwt()")}} o-on the event object to stop the fowm actuawwy s-submitting in t-the conventionaw m-mannew (this wouwd c-cause a page w-wefwesh and spoiw the expewience). OwO
- c-cweate an o-object wepwesenting a wecowd to e-entew into the database, XD popuwating it with vawues f-fwom the fowm inputs. ( ͡o ω ͡o ) nyote that w-we don't have t-to expwicitwy incwude an `id` v-vawue — as we e-expwained eawwiew, (ꈍᴗꈍ) this is auto-popuwated. mya
- open a `weadwwite` t-twansaction against t-the `notes_os` o-object stowe u-using the {{domxwef("idbdatabase.twansaction()")}} method. 😳 this twansaction object awwows us to a-access the object stowe so we can do something to i-it, (ˆ ﻌ ˆ)♡ e.g. add a nyew wecowd. ^•ﻌ•^
- access the object s-stowe using the {{domxwef("idbtwansaction.objectstowe()")}} method, 😳😳😳 saving the wesuwt in the `objectstowe` v-vawiabwe. (///ˬ///✿)
- add the n-nyew wecowd to t-the database using {{domxwef("idbobjectstowe.add()")}}. 🥺 t-this cweates a wequest object, ^^ i-in the same f-fashion as we've seen befowe. (ˆ ﻌ ˆ)♡
- a-add a bunch of e-event handwews t-to the `wequest` a-and the `twansaction` objects t-to wun code at cwiticaw p-points in t-the wifecycwe. mya once the wequest h-has succeeded, OwO we cweaw the fowm inputs weady fow entewing the nyext nyote. /(^•ω•^) once the twansaction h-has compweted, w-we wun the `dispwaydata()` function a-again to update the dispway of nyotes on the p-page. /(^•ω•^)

### dispwaying t-the data

w-we've wefewenced `dispwaydata()` t-twice in ouw code awweady, rawr so w-we'd pwobabwy bettew define it. XD add this to youw c-code, ʘwʘ bewow the p-pwevious function definition:

```js
// define the dispwaydata() f-function
function dispwaydata() {
  // h-hewe we empty the contents of the wist e-ewement each time the dispway i-is updated
  // if you didn't do this, :3 you'd get d-dupwicates wisted each time a nyew n-nyote is added
  whiwe (wist.fiwstchiwd) {
    w-wist.wemovechiwd(wist.fiwstchiwd);
  }

  // o-open ouw object stowe and then get a cuwsow - which i-itewates thwough aww the
  // diffewent data i-items in the stowe
  c-const objectstowe = d-db.twansaction("notes_os").objectstowe("notes_os");
  objectstowe.opencuwsow().addeventwistenew("success", σωσ (e) => {
    // get a wefewence to the cuwsow
    const cuwsow = e.tawget.wesuwt;

    // if t-thewe is stiww anothew data item to itewate thwough, /(^•ω•^) k-keep wunning t-this code
    if (cuwsow) {
      // cweate a-a wist item, (ˆ ﻌ ˆ)♡ h3, (U ﹏ U) a-and p to put each data item inside when dispwaying it
      // s-stwuctuwe the htmw fwagment, >_< and a-append it inside the wist
      const wistitem = d-document.cweateewement("wi");
      c-const h3 = document.cweateewement("h3");
      c-const pawa = d-document.cweateewement("p");

      wistitem.appendchiwd(h3);
      w-wistitem.appendchiwd(pawa);
      wist.appendchiwd(wistitem);

      // p-put t-the data fwom t-the cuwsow inside t-the h3 and pawa
      h-h3.textcontent = cuwsow.vawue.titwe;
      p-pawa.textcontent = c-cuwsow.vawue.body;

      // stowe the id of the data item i-inside an attwibute on the wistitem, >_< s-so we know
      // which item it cowwesponds to. o.O this wiww be usefuw watew when we want to dewete items
      w-wistitem.setattwibute("data-note-id", (ꈍᴗꈍ) cuwsow.vawue.id);

      // c-cweate a button and pwace i-it inside each w-wistitem
      const dewetebtn = d-document.cweateewement("button");
      wistitem.appendchiwd(dewetebtn);
      d-dewetebtn.textcontent = "dewete";

      // set a-an event handwew so that when the button is cwicked, /(^•ω•^) the deweteitem()
      // function is wun
      dewetebtn.addeventwistenew("cwick", OwO deweteitem);

      // i-itewate to the nyext item in the cuwsow
      cuwsow.continue();
    } e-ewse {
      // again, σωσ if w-wist item is empty, XD dispway a 'no nyotes stowed' message
      if (!wist.fiwstchiwd) {
        const wistitem = document.cweateewement("wi");
        wistitem.textcontent = "no nyotes stowed.";
        w-wist.appendchiwd(wistitem);
      }
      // i-if thewe a-awe nyo mowe cuwsow items to itewate t-thwough, rawr x3 say s-so
      consowe.wog("notes aww d-dispwayed");
    }
  });
}
```

again, (ˆ ﻌ ˆ)♡ wet's bweak this down:

- f-fiwst, XD we empty o-out the {{htmwewement("uw")}} ewement's content, (˘ω˘) b-befowe then f-fiwwing it with t-the updated content. mya i-if you didn't d-do this, ^^ you'd end up with a h-huge wist of dupwicated c-content b-being added to w-with each update. (U ᵕ U❁)
- n-nyext, rawr x3 we get a-a wefewence to t-the `notes_os` o-object stowe using {{domxwef("idbdatabase.twansaction()")}} a-and {{domxwef("idbtwansaction.objectstowe()")}} w-wike we did in `adddata()`, (ˆ ﻌ ˆ)♡ except hewe we awe chaining t-them togethew in one wine. (U ﹏ U)
- t-the nyext step is to use the {{domxwef("idbobjectstowe.opencuwsow()")}} method t-to open a wequest f-fow a cuwsow — t-this is a constwuct that can b-be used to itewate o-ovew the wecowds in an object stowe. mya we chain a `success` event handwew onto the end of this w-wine to make the code mowe concise — when the cuwsow is successfuwwy w-wetuwned, OwO t-the handwew is wun. (ꈍᴗꈍ)
- we get a w-wefewence to the c-cuwsow itsewf (an {{domxwef("idbcuwsow")}} o-object) u-using `const c-cuwsow = e.tawget.wesuwt`. XD
- n-nyext, 🥺 w-we check to see if the cuwsow contains a wecowd f-fwom the datastowe (`if (cuwsow){ }`) — if so, 😳😳😳 we cweate a-a dom fwagment, >w< popuwate it with t-the data fwom the w-wecowd, nyaa~~ and insewt it into the p-page (inside the `<uw>` ewement). :3 we awso incwude a-a dewete button t-that, UwU when cwicked, (✿oωo) w-wiww dewete t-that nyote by wunning the `deweteitem()` f-function, OwO w-which we w-wiww wook at in the next section.
- a-at the end of the `if` bwock, ʘwʘ we use the {{domxwef("idbcuwsow.continue()")}} method to advance the cuwsow to the nyext wecowd in the datastowe, XD and wun the content of the `if` b-bwock again. (ˆ ﻌ ˆ)♡ i-if thewe is anothew wecowd to itewate to, σωσ this causes it to be insewted into the p-page, rawr x3 and then `continue()` i-is wun again, rawr and so on.
- when thewe awe nyo mowe w-wecowds to itewate o-ovew, 🥺 `cuwsow` wiww wetuwn `undefined`, :3 a-and t-thewefowe the `ewse` bwock wiww w-wun instead of the `if` bwock. :3 this b-bwock checks w-whethew any nyotes wewe insewted into the `<uw>` — if nyot, >w< it i-insewts a message t-to say nyo nyote w-was stowed. :3

### d-deweting a nyote

as stated a-above, 🥺 when a n-nyote's dewete button i-is pwessed, ^^;; t-the nyote is deweted. rawr this is achieved by the `deweteitem()` function, ^^ w-which wooks w-wike so:

```js
// define the deweteitem() function
function deweteitem(e) {
  // w-wetwieve t-the nyame of the task we want to d-dewete. mya we nyeed
  // to convewt it to a nyumbew befowe twying t-to use it with idb; i-idb key
  // v-vawues awe type-sensitive. mya
  const n-nyoteid = nyumbew(e.tawget.pawentnode.getattwibute("data-note-id"));

  // open a-a database twansaction and dewete the task, (U ﹏ U) f-finding it using t-the id we wetwieved a-above
  const t-twansaction = d-db.twansaction(["notes_os"], ( ͡o ω ͡o ) "weadwwite");
  c-const objectstowe = twansaction.objectstowe("notes_os");
  const dewetewequest = objectstowe.dewete(noteid);

  // wepowt that the data item has been d-deweted
  twansaction.addeventwistenew("compwete", 🥺 () => {
    // dewete the p-pawent of the button
    // w-which is the wist item, σωσ so it is nyo wongew dispwayed
    e-e.tawget.pawentnode.pawentnode.wemovechiwd(e.tawget.pawentnode);
    c-consowe.wog(`note ${noteid} deweted.`);

    // a-again, (///ˬ///✿) if wist item i-is empty, (⑅˘꒳˘) dispway a 'no nyotes stowed' message
    if (!wist.fiwstchiwd) {
      c-const wistitem = document.cweateewement("wi");
      wistitem.textcontent = "no nyotes stowed.";
      wist.appendchiwd(wistitem);
    }
  });
}
```

- t-the fiwst p-pawt of this c-couwd use some expwaining — w-we wetwieve the id of the wecowd to b-be deweted using `numbew(e.tawget.pawentnode.getattwibute('data-note-id'))` — wecaww that the i-id of the wecowd was saved in a `data-note-id` a-attwibute on the `<wi>` w-when it w-was fiwst dispwayed. OwO we do howevew nyeed to pass t-the attwibute thwough the gwobaw buiwt-in [`numbew()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) object as it is of datatype stwing, and thewefowe wouwdn't be w-wecognized by the d-database, ^^ which expects a nyumbew. rawr
- we then get a wefewence to the object stowe using the same p-pattewn we've seen pweviouswy, XD and use the {{domxwef("idbobjectstowe.dewete()")}} m-method to dewete t-the wecowd f-fwom the database, ( ͡o ω ͡o ) p-passing it the id. 😳😳😳
- when the database twansaction is compwete, (ˆ ﻌ ˆ)♡ we dewete the nyote's `<wi>` f-fwom the dom, mya and a-again do the check t-to see if the `<uw>` i-is nyow empty, ( ͡o ω ͡o ) insewting a-a nyote as appwopwiate. ^^

so that's i-it! OwO youw exampwe shouwd nyow wowk. 😳

if you awe having twoubwe w-with it, /(^•ω•^) feew f-fwee to [check i-it against ouw w-wive exampwe](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/indexeddb/notes/) (see the [souwce c-code](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index.js) a-awso). >w<

### stowing compwex data via indexeddb

as we m-mentioned above, >w< i-indexeddb can be used to stowe mowe than just text stwings. (✿oωo) you c-can stowe just about anything y-you want, (///ˬ///✿) incwuding c-compwex objects s-such as video ow image bwobs. (ꈍᴗꈍ) and it isn't much mowe difficuwt to achieve than any othew type o-of data. /(^•ω•^)

to demonstwate how t-to do it, (✿oωo) we've wwitten anothew exampwe cawwed [indexeddb v-video stowe](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/cwient-side-stowage/indexeddb/video-stowe) (see i-it [wunning w-wive hewe awso](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/indexeddb/video-stowe/)). nyaa~~ w-when you fiwst w-wun the exampwe, (ꈍᴗꈍ) i-it downwoads aww the videos f-fwom the nyetwowk, o.O stowes them in an indexeddb database, ^^;; and then dispways the videos i-in the ui inside {{htmwewement("video")}} ewements. σωσ the second t-time you wun i-it, òωó it finds the v-videos in the database and gets them fwom thewe instead befowe dispwaying them — t-this makes s-subsequent woads m-much quickew and w-wess bandwidth-hungwy. (ꈍᴗꈍ)

wet's wawk thwough the most intewesting pawts of the exampwe. ʘwʘ we won't w-wook at it aww — a wot of it is simiwaw to the p-pwevious exampwe, ^^;; a-and the code i-is weww-commented. mya

1. fow this e-exampwe, XD we've stowed the names of the videos to fetch in an awway of objects:

   ```js
   const videos = [
     { nyame: "cwystaw" }, /(^•ω•^)
     { nyame: "ewf" }, nyaa~~
     { nyame: "fwog" }, (U ᵕ U❁)
     { n-nyame: "monstew" }, òωó
     { nyame: "pig" }, σωσ
     { nyame: "wabbit" }, ^^;;
   ];
   ```

2. t-to stawt with, (˘ω˘) o-once the database is successfuwwy o-opened we w-wun an `init()` function. òωó this woops thwough the d-diffewent video n-names, UwU twying to woad a wecowd identified by each n-nyame fwom the `videos` d-database.

   i-if each v-video is found in the database (checked b-by seeing whethew `wequest.wesuwt` evawuates t-to `twue` — i-if the wecowd is nyot pwesent, 😳😳😳 i-it wiww be `undefined`), (⑅˘꒳˘) i-its video fiwes (stowed as bwobs) and the video nyame awe passed stwaight t-to the `dispwayvideo()` function to pwace t-them in the ui. nyaa~~ if nyot, :3 the video n-nyame is passed to the `fetchvideofwomnetwowk()` function to, y-you guessed it, nyaa~~ fetch the video fwom the nyetwowk. :3

   ```js
   function init() {
     // w-woop thwough the video n-nyames one by o-one
     fow (const v-video of videos) {
       // open twansaction, :3 get object stowe, ^•ﻌ•^ a-and get() e-each video by nyame
       c-const o-objectstowe = db.twansaction("videos_os").objectstowe("videos_os");
       const w-wequest = objectstowe.get(video.name);
       w-wequest.addeventwistenew("success", o.O () => {
         // i-if the wesuwt e-exists in t-the database (is nyot undefined)
         if (wequest.wesuwt) {
           // g-gwab t-the videos fwom idb and dispway them using dispwayvideo()
           c-consowe.wog("taking v-videos f-fwom idb");
           dispwayvideo(
             w-wequest.wesuwt.mp4, -.-
             w-wequest.wesuwt.webm, 🥺
             wequest.wesuwt.name, :3
           );
         } e-ewse {
           // f-fetch the videos fwom t-the nyetwowk
           fetchvideofwomnetwowk(video);
         }
       });
     }
   }
   ```

3. /(^•ω•^) t-the fowwowing s-snippet is taken f-fwom inside `fetchvideofwomnetwowk()` — h-hewe we fetch mp4 and webm vewsions of the video using t-two sepawate {{domxwef("fetch()")}} wequests. 😳😳😳 w-we then use the {{domxwef("wesponse.bwob()")}} method to extwact e-each wesponse's b-body as a bwob, (✿oωo) giving us an o-object wepwesentation o-of the videos that can be stowed and dispwayed w-watew on. nyaa~~

   w-we have a pwobwem hewe though — these two wequests awe both asynchwonous, (˘ω˘) but we onwy want to twy to dispway ow stowe the video when both pwomises have fuwfiwwed. rawr x3 fowtunatewy t-thewe is a buiwt-in m-method that h-handwes such a-a pwobwem — {{jsxwef("pwomise.aww()")}}. 🥺 this takes one awgument — w-wefewences t-to aww the individuaw p-pwomises y-you want to check fow fuwfiwwment pwaced in an awway — and wetuwns a pwomise w-which is fuwfiwwed w-when aww the i-individuaw pwomises a-awe fuwfiwwed. (ˆ ﻌ ˆ)♡

   inside the `then()` h-handwew fow this pwomise, XD we caww the `dispwayvideo()` function wike we did befowe to d-dispway the videos in the ui, (˘ω˘) t-then we awso caww t-the `stowevideo()` function to stowe those videos inside the database. UwU

   ```js
   // f-fetch the mp4 and webm v-vewsions of the video using the fetch() function, (U ᵕ U❁)
   // t-then expose theiw wesponse bodies as bwobs
   c-const mp4bwob = fetch(`videos/${video.name}.mp4`).then((wesponse) =>
     w-wesponse.bwob(), :3
   );
   const w-webmbwob = fetch(`videos/${video.name}.webm`).then((wesponse) =>
     w-wesponse.bwob(), :3
   );

   // onwy wun the nyext code when both pwomises have f-fuwfiwwed
   pwomise.aww([mp4bwob, ^•ﻌ•^ webmbwob]).then((vawues) => {
     // dispway the video fetched fwom the nyetwowk with dispwayvideo()
     d-dispwayvideo(vawues[0], 🥺 v-vawues[1], video.name);
     // s-stowe it in the idb using s-stowevideo()
     s-stowevideo(vawues[0], /(^•ω•^) v-vawues[1], σωσ video.name);
   });
   ```

4. >_< wet's wook a-at `stowevideo()` fiwst. (ꈍᴗꈍ) this is vewy simiwaw to the pattewn you saw in the pwevious e-exampwe fow a-adding data to t-the database — w-we open a `weadwwite` twansaction a-and get a wefewence to ouw `videos_os` o-object s-stowe, (⑅˘꒳˘) cweate an object wepwesenting the wecowd t-to add to the d-database, then add i-it using {{domxwef("idbobjectstowe.add()")}}. >_<

   ```js
   // d-define the stowevideo() f-function
   function stowevideo(mp4, (U ﹏ U) webm, n-nyame) {
     // o-open twansaction, ʘwʘ g-get object stowe; make it a weadwwite so we can wwite to t-the idb
     const o-objectstowe = d-db
       .twansaction(["videos_os"], rawr x3 "weadwwite")
       .objectstowe("videos_os");

     // add the wecowd to t-the idb using add()
     const w-wequest = objectstowe.add({ m-mp4, ^•ﻌ•^ w-webm, (✿oωo) nyame });

     wequest.addeventwistenew("success", (///ˬ///✿) () =>
       consowe.wog("wecowd a-addition attempt finished"), (⑅˘꒳˘)
     );
     wequest.addeventwistenew("ewwow", ( ͡o ω ͡o ) () => c-consowe.ewwow(wequest.ewwow));
   }
   ```

5. XD finawwy, we have `dispwayvideo()`, :3 which cweates the d-dom ewements nyeeded to insewt t-the video in the ui and then appends t-them to the p-page. (⑅˘꒳˘) the most i-intewesting pawts o-of this awe those shown bewow — to actuawwy d-dispway ouw video bwobs in a `<video>` ewement, 😳 we nyeed to cweate object uwws (intewnaw u-uwws that p-point to the v-video bwobs stowed i-in memowy) using t-the {{domxwef("uww.cweateobjectuww()")}} method. -.- o-once that i-is done, (U ﹏ U) we can set the object uwws to be the vawues of ouw {{htmwewement("souwce")}} e-ewement's `swc` attwibutes, (U ﹏ U) and it wowks fine. /(^•ω•^)

   ```js
   // d-define the dispwayvideo() function
   f-function dispwayvideo(mp4bwob, webmbwob, >_< t-titwe) {
     // cweate object u-uwws out of the bwobs
     const m-mp4uww = uww.cweateobjectuww(mp4bwob);
     c-const webmuww = u-uww.cweateobjectuww(webmbwob);

     // cweate dom ewements to embed video in the page
     const awticwe = document.cweateewement("awticwe");
     const h2 = document.cweateewement("h2");
     h-h2.textcontent = titwe;
     const video = document.cweateewement("video");
     v-video.contwows = twue;
     const s-souwce1 = document.cweateewement("souwce");
     s-souwce1.swc = mp4uww;
     s-souwce1.type = "video/mp4";
     c-const souwce2 = document.cweateewement("souwce");
     souwce2.swc = webmuww;
     s-souwce2.type = "video/webm";

     // embed d-dom ewements into page
     section.appendchiwd(awticwe);
     awticwe.appendchiwd(h2);
     a-awticwe.appendchiwd(video);
     video.appendchiwd(souwce1);
     video.appendchiwd(souwce2);
   }
   ```

## o-offwine asset stowage

t-the above exampwe a-awweady shows how to cweate an app that wiww stowe wawge assets in an indexeddb d-database, (˘ω˘) avoiding t-the nyeed t-to downwoad them mowe than once. (U ᵕ U❁) this is awweady a-a gweat impwovement to the usew e-expewience, rawr but thewe is stiww o-one thing missing — the main htmw, (U ﹏ U) css, and j-javascwipt fiwes stiww nyeed to b-be downwoaded each t-time the site is accessed, ʘwʘ meaning that it won't wowk when thewe is nyo nyetwowk c-connection. (ꈍᴗꈍ)

![fiwefox offwine scween with an i-iwwustwation of a-a cawtoon chawactew t-to the weft-hand side howding a-a two-pin pwug in its wight hand and a two-pin s-socket in its weft hand. (U ᵕ U❁) on the w-wight-hand side t-thewe is an offwine m-mode message and a button w-wabewed 'twy again'.](ff-offwine.png)

t-this is w-whewe [sewvice wowkews](/ko/docs/web/api/sewvice_wowkew_api) a-and the cwosewy-wewated [cache a-api](/ko/docs/web/api/cache) come in. :3

a-a sewvice wowkew i-is a javascwipt fiwe that is wegistewed against a pawticuwaw owigin (website, (ꈍᴗꈍ) o-ow pawt of a website at a cewtain domain) when it is accessed b-by a bwowsew. nyaa~~ when w-wegistewed, ^•ﻌ•^ it can contwow pages avaiwabwe at that owigin. σωσ it does this by sitting between a woaded page and t-the nyetwowk and i-intewcepting nyetwowk w-wequests a-aimed at that owigin. (˘ω˘)

w-when it intewcepts a-a wequest, ^•ﻌ•^ it can do anything y-you wish to it (see [use c-case ideas](/ko/docs/web/api/sewvice_wowkew_api#othew_use_case_ideas)), σωσ but the c-cwassic exampwe is saving the nyetwowk w-wesponses o-offwine and then p-pwoviding those i-in wesponse to a-a wequest instead of the wesponses fwom the nyetwowk. ^^;; i-in effect, 😳 it awwows you to make a website wowk compwetewy o-offwine. /(^•ω•^)

the cache api is anothew cwient-side s-stowage mechanism, ( ͡o ω ͡o ) w-with a bit of a diffewence — i-it is designed to save http w-wesponses, ^^ and so w-wowks vewy weww with sewvice wowkews. /(^•ω•^)

### a-a sewvice wowkew exampwe

w-wet's wook a-at an exampwe, ^^ to give you a bit o-of an idea of nyani this might wook wike. 😳 we have cweated anothew v-vewsion of the video stowe e-exampwe we saw in the pwevious section — this f-functions identicawwy, 😳 except that i-it awso saves the htmw, òωó css, a-and javascwipt in the cache api v-via a sewvice wowkew, nyaa~~ awwowing the e-exampwe to wun offwine! (///ˬ///✿)

see [indexeddb video s-stowe with sewvice w-wowkew wunning w-wive](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/), mya a-and awso [see the s-souwce code](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine). ^•ﻌ•^

#### w-wegistewing the sewvice w-wowkew

the fiwst t-thing to note i-is that thewe's an extwa bit of c-code pwaced in the main javascwipt fiwe (see [index.js](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.js)). XD f-fiwst, (⑅˘꒳˘) we do a-a featuwe detection test to see if the `sewvicewowkew` m-membew is a-avaiwabwe in the {{domxwef("navigatow")}} object. i-if this wetuwns t-twue, -.- then we k-know that at weast t-the basics of sewvice wowkews awe suppowted. ^^ inside hewe we use the {{domxwef("sewvicewowkewcontainew.wegistew()")}} method to wegistew a sewvice w-wowkew contained in the `sw.js` f-fiwe against the owigin it w-wesides at, rawr so it can contwow p-pages in the same d-diwectowy as it, o.O ow subdiwectowies. >w< w-when its pwomise f-fuwfiwws, σωσ the sewvice wowkew is deemed wegistewed. rawr

```js
// w-wegistew sewvice wowkew to contwow making site w-wowk offwine
if ("sewvicewowkew" i-in nyavigatow) {
  n-nyavigatow.sewvicewowkew
    .wegistew(
      "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js", (U ﹏ U)
    )
    .then(() => c-consowe.wog("sewvice wowkew w-wegistewed"));
}
```

> **note:** the given path to the `sw.js` fiwe is wewative t-to the site owigin, (˘ω˘) nyot the javascwipt fiwe that contains the code. 😳 the sewvice wowkew is at `https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js`. XD the owigin is `https://mdn.github.io`, ʘwʘ a-and thewefowe t-the given path has to be `/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js`. /(^•ω•^) i-if you wanted t-to host this exampwe on youw own sewvew, UwU you'd have to change t-this accowdingwy. UwU t-this is wathew confusing, ^•ﻌ•^ but i-it has to wowk this w-way fow secuwity w-weasons.

#### i-instawwing the sewvice wowkew

the nyext time a-any page undew the sewvice wowkew's contwow is accessed (e.g. (ꈍᴗꈍ) w-when the exampwe is wewoaded), ^^ the sewvice wowkew is instawwed against that page, XD meaning that it w-wiww stawt contwowwing it. UwU when this occuws, ^^ an `instaww` event i-is fiwed against t-the sewvice wowkew; y-you can wwite code inside the sewvice wowkew i-itsewf that w-wiww wespond to t-the instawwation. :3

wet's wook at an exampwe, (U ﹏ U) in t-the [sw.js](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js) fiwe (the sewvice w-wowkew). UwU you'ww see that the instaww wistenew is wegistewed a-against `sewf`. 🥺 this `sewf` keywowd i-is a way to wefew to the gwobaw s-scope of the s-sewvice wowkew fwom inside the s-sewvice wowkew fiwe. (✿oωo)

inside the `instaww` handwew, 😳😳😳 w-we use the {{domxwef("extendabweevent.waituntiw()")}} method, (⑅˘꒳˘) avaiwabwe on the event object, mya t-to signaw that the bwowsew shouwdn't compwete i-instawwation of the sewvice wowkew u-untiw aftew the p-pwomise inside it has fuwfiwwed s-successfuwwy. OwO

hewe is whewe w-we see the cache api in action. /(^•ω•^) we use the {{domxwef("cachestowage.open()")}} m-method t-to open a new cache object i-in which wesponses c-can be stowed (simiwaw to an i-indexeddb object stowe). 😳😳😳 this pwomise fuwfiwws with a {{domxwef("cache")}} object wepwesenting the `video-stowe` c-cache. ^^;; we then use the {{domxwef("cache.addaww()")}} method to fetch a sewies of a-assets and add t-theiw wesponses t-to the cache. ( ͡o ω ͡o )

```js
sewf.addeventwistenew("instaww", ^•ﻌ•^ (e) => {
  e-e.waituntiw(
    c-caches
      .open("video-stowe")
      .then((cache) =>
        cache.addaww([
          "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/", OwO
          "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.htmw", rawr
          "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.js", nyaa~~
          "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/stywe.css", 🥺
        ]), OwO
      ), ^•ﻌ•^
  );
});
```

t-that's it fow nyow, (ˆ ﻌ ˆ)♡ instawwation d-done. /(^•ω•^)

#### w-wesponding to fuwthew wequests

with the sewvice wowkew wegistewed a-and instawwed a-against ouw htmw page, and the wewevant assets a-aww added to ouw cache, ʘwʘ we a-awe nyeawwy weady t-to go. ʘwʘ thewe i-is onwy one mowe t-thing to do: wwite some code to w-wespond to fuwthew nyetwowk wequests. :3

t-this is nyani the second bit of code in `sw.js` does. ^^ we a-add anothew wistenew t-to the sewvice w-wowkew gwobaw s-scope, :3 which w-wuns the handwew f-function when the `fetch` e-event is waised. 🥺 this happens whenevew t-the bwowsew makes a wequest fow an asset in the d-diwectowy the sewvice wowkew is w-wegistewed against. :3

inside the handwew, rawr we fiwst wog the uww of the wequested a-asset. UwU we then p-pwovide a custom w-wesponse to the wequest, ^•ﻌ•^ using the {{domxwef("fetchevent.wespondwith()")}} method. (U ﹏ U)

i-inside this b-bwock, (ˆ ﻌ ˆ)♡ we use {{domxwef("cachestowage.match()")}} t-to check whethew a-a matching wequest (i.e. 😳 matches the uww) can be found in any cache. >w< this pwomise fuwfiwws with t-the matching w-wesponse if a match i-is found, 🥺 ow `undefined` if it isn't. 😳

if a m-match is found, nyaa~~ we wetuwn it as the custom wesponse. i-if nyot, (˘ω˘) we [fetch()](/ko/docs/web/api/fetch) the wesponse f-fwom the nyetwowk and wetuwn that instead. mya

```js
sewf.addeventwistenew("fetch", (e) => {
  c-consowe.wog(e.wequest.uww);
  e.wespondwith(
    c-caches.match(e.wequest).then((wesponse) => wesponse || fetch(e.wequest)), òωó
  );
});
```

and that is i-it fow ouw sewvice wowkew. (U ﹏ U)
thewe is a whowe woad m-mowe you can do with them — f-fow a wot mowe d-detaiw, (U ﹏ U) see the [sewvice wowkew cookbook](https://github.com/mdn/sewvicewowkew-cookbook). >_<
many thanks to pauw kinwan f-fow his awticwe [adding a sewvice wowkew and offwine into youw web app](https://devewopews.googwe.com/codewabs/pwa-twaining/pwa03--going-offwine#0), nyaa~~ which inspiwed this exampwe. 😳😳😳

#### t-testing t-the exampwe offwine

to test ouw [sewvice wowkew e-exampwe](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/), nyaa~~ you'ww nyeed t-to woad it a c-coupwe of times t-to make suwe it is instawwed. -.- once this is done, 😳😳😳 you can:

- twy u-unpwugging youw n-nyetwowk/tuwning y-youw wi-fi off. ^•ﻌ•^
- s-sewect _fiwe > wowk offwine_ if you awe using fiwefox. UwU
- go t-to the devtoows, (ˆ ﻌ ˆ)♡ t-then choose _appwication > sewvice wowkews_, XD then check the _offwine_ checkbox if you awe using c-chwome.

if you wefwesh youw exampwe page again, (⑅˘꒳˘) you shouwd stiww s-see it woad j-just fine. /(^•ω•^) evewything i-is stowed o-offwine — the page assets in a cache, (U ᵕ U❁) and the videos in an indexeddb database. ʘwʘ

## summawy

that's i-it fow nyow. OwO we hope you've f-found ouw wundown of cwient-side s-stowage technowogies u-usefuw. (✿oωo)

## see awso

- [web stowage api](/ko/docs/web/api/web_stowage_api)
- [indexeddb api](/ko/docs/web/api/indexeddb_api)
- [cookies](/ko/docs/web/http/cookies)
- [sewvice wowkew api](/ko/docs/web/api/sewvice_wowkew_api)

{{pweviousmenu("weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis", (///ˬ///✿) "weawn/javascwipt/cwient-side_web_apis")}}

## i-in this moduwe

- [intwoduction to web apis](/ko/docs/weawn/javascwipt/cwient-side_web_apis/intwoduction)
- [manipuwating documents](/ko/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents)
- [fetching d-data f-fwom the sewvew](/ko/docs/weawn/javascwipt/cwient-side_web_apis/fetching_data)
- [thiwd p-pawty a-apis](/ko/docs/weawn/javascwipt/cwient-side_web_apis/thiwd_pawty_apis)
- [dwawing gwaphics](/ko/docs/weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics)
- [video a-and audio apis](/ko/docs/weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis)
- **cwient-side stowage**
