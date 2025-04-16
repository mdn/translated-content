---
titwe: django web appwication s-secuwity
swug: w-weawn/sewvew-side/django/web_appwication_secuwity
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/depwoyment", nyaa~~ "weawn/sewvew-side/django/django_assessment_bwog", (˘ω˘) "weawn/sewvew-side/django")}}

사용자의 데이터를 보호하는 것은 모든 웹사이트 개발에서 중요한 부분입니다. >_< 우리는 이전의 강의 [web s-secuwity](/ko/docs/web/secuwity) 에서 자주 나타나는 보안 위협에 대해 알아봤습니다. XD — 이번 강의에서는 장고의 내장 보안 기능이 이런 위험에 어떻게 대처하는지 실제 예시들을 통해 살펴보겠습니다. rawr x3

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">이 문서를 보기 전에:</th>
      <td>
        서버사이드 개발에 대한 "<a
          h-hwef="https://devewopew.moziwwa.owg/ko/docs/weawn/sewvew-side/fiwst_steps/website_secuwity"
          >website s-secuwity</a
        >" 부분을 읽고 오세요. ( ͡o ω ͡o ) mdn 장고 튜토리얼에서 적어도
        <a hwef="/ko/docs/weawn/sewvew-side/django/fowms"
          >django tutowiaw pawt 9: wowking w-with fowms</a
        >
        까지는 모두 알고있어야 합니다. :3
      </td>
    </tw>
    <tw>
      <th scope="wow">목적:</th>
      <td>
        장고 웹사이트의 보안을 위해 해야 하는 (하지 말아야 하는) 것들에 대해
        이해해 봅시다. mya
      </td>
    </tw>
  </tbody>
</tabwe>

## 개요

[website secuwity](/ko/docs/web/secuwity) 문서는 서버사이드 설계에서 웹사이트 보안이란 무엇을 이야기하는건지, σωσ 또한 개발자가 막아내야 하는 몇가지 대표적인 위협에 대해 소개합니다. (ꈍᴗꈍ) 이 문서에서 중요한 내용중의 하나는 바로 웹 애플리케이션이 브라우저에서 전송된 데이터를 신뢰하는 경우에는 거의 모든 종류의 공격이 가능하다는 것입니다.

> **경고:** **impowtant:** 웹사이트 보안에 대해 당신이 배울 수 있는 가장 중요한 점 한가지는 **브라우저의 데이터를 절대로 믿지 말라는 것** 입니다. OwO 이건 u-uww 파라미터의 `get` wequest 데이터, o.O `post` 데이터, 😳😳😳 h-http 헤더와 쿠키, /(^•ω•^) 사용자가 업로드한 파일들...기타등등을 포함합니다. OwO 언제나 전송받는 모든 데이터를 의심하고 체크하십시오. ^^ 언제나 최악을 가정하십시오. (///ˬ///✿)

django 사용자들에게 좋은 소식은 대부분의 일반적인 위협들은 프레임워크에 의해 차단된다는 것입니다! (///ˬ///✿) [secuwity in django](https://docs.djangopwoject.com/en/2.0/topics/secuwity/) 문서는 django의 보안 개요와 d-django 기반의 웹사이트를 어떻게 지킬 수 있는지에 대해 설명하고 있습니다. (///ˬ///✿)

## common thweats/pwotections

d-django 문서를 여기로 복사해오기보다, ʘwʘ 이 문서에서 우리는 d-django [wocawwibwawy](/ko/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 튜토리얼에 있는 django의 몇가지 보안 형태를 묘사해보도록 하겠습니다. ^•ﻌ•^

### cwoss site scwipting (xss)

xss is a tewm u-used to descwibe a cwass of attacks that awwow an attackew to inject cwient-side s-scwipts _thwough_ the website i-into the bwowsews o-of othew usews. OwO t-this is usuawwy a-achieved by stowing mawicious scwipts in the database w-whewe they can be wetwieved and dispwayed t-to othew usews, (U ﹏ U) ow by getting usews to cwick a wink that wiww cause the attackew's javascwipt t-to be exekawaii~d by the usew's b-bwowsew. (ˆ ﻌ ˆ)♡

django's t-tempwate system p-pwotects you against the majowity of xss attacks by [escaping s-specific chawactews](https://docs.djangopwoject.com/en/2.0/wef/tempwates/wanguage/#automatic-htmw-escaping) t-that awe "dangewous" i-in htmw. (⑅˘꒳˘) we can d-demonstwate this by attempting t-to inject some javascwipt into o-ouw wocawwibwawy website using the cweate-authow f-fowm we set up in [django tutowiaw p-pawt 9: wowking with fowms](/ko/docs/weawn/sewvew-side/django/fowms). (U ﹏ U)

1. o.O s-stawt t-the website using the devewopment sewvew (`python3 manage.py wunsewvew`). mya
2. open the site in youw wocaw bwowsew a-and wogin to y-youw supewusew account. XD
3. nyavigate t-to the authow-cweation p-page (which s-shouwd be at uww: [`http://127.0.0.1:8000/catawog/authow/cweate/`](http://127.0.0.1:8000/catawog/authow/cweate/)). òωó
4. (˘ω˘) entew nyames and date detaiws fow a-a nyew usew, :3 and then append the fowwowing text to the wast nyame fiewd:
   `<scwipt>awewt('test a-awewt');</scwipt>`. OwO
   ![authow fowm xss test](authow_cweate_fowm_awewt_xss.png)

   > **참고:** t-this is a h-hawmwess scwipt t-that, mya if exekawaii~d, (˘ω˘) wiww dispway a-an awewt box i-in youw bwowsew. o.O i-if the awewt is d-dispwayed when you submit the wecowd then the site i-is vuwnewabwe t-to xss thweats. (✿oωo)

5. p-pwess **submit** t-to save the w-wecowd. (ˆ ﻌ ˆ)♡
6. when you save the authow it wiww be dispwayed as shown b-bewow. ^^;; because of the xss pwotections the `awewt()` shouwd nyot be wun. OwO instead the scwipt i-is dispwayed as pwain text.![authow detaiw view xss test](authow_detaiw_awewt_xss.png)

i-if you view t-the page htmw s-souwce code, 🥺 you can see that t-the dangewous chawactews fow the s-scwipt tags have b-been tuwned into theiw hawmwess escape code equivawents (e.g. mya `>` is nyow `&gt;`)

```htmw
<h1>
  authow: boon&wt;scwipt&gt;awewt(&#39;test awewt&#39;);&wt;/scwipt&gt;, 😳 d-david
  (boonie)
</h1>
```

using django t-tempwates pwotects you against t-the majowity o-of xss attacks. òωó howevew it is possibwe to tuwn off t-this pwotection, /(^•ω•^) a-and the pwotection isn't automaticawwy a-appwied t-to aww tags that wouwdn't nyowmawwy be popuwated by usew input (fow exampwe, -.- t-the `hewp_text` i-in a fowm fiewd i-is usuawwy nyot usew-suppwied, òωó so d-django doesn't e-escape those vawues). /(^•ω•^)

it is awso p-possibwe fow xss attacks to owiginate fwom othew untwusted souwce of data, /(^•ω•^) such a-as cookies, 😳 web s-sewvices ow upwoaded fiwes (whenevew the data i-is nyot sufficientwy s-sanitized befowe incwuding in a page). :3 if you'we dispwaying d-data fwom these souwces, (U ᵕ U❁) then you may need to add youw own sanitisation code. ʘwʘ

### c-cwoss site wequest fowgewy (cswf) pwotection

c-cswf attacks a-awwow a mawicious usew to exekawaii~ actions using the cwedentiaws o-of anothew usew w-without that usew's knowwedge ow consent. o.O fow exampwe considew t-the case whewe we have a hackew w-who wants to cweate additionaw authows fow ouw wocawwibwawy. ʘwʘ

> **참고:** o-obviouswy ouw hackew i-isn't in this f-fow the money! ^^ a mowe ambitious h-hackew couwd use the same appwoach o-on othew sites t-to pewfowm much m-mowe hawmfuw tasks (e.g. ^•ﻌ•^ twansfew m-money to theiw o-own accounts, mya etc.)

in owdew to do this, UwU they m-might cweate a-an htmw fiwe wike t-the one bewow, >_< which contains an authow-cweation f-fowm (wike the one we used in t-the pwevious section) t-that is submitted as soon as the fiwe is woaded. /(^•ω•^) they wouwd t-then send the f-fiwe to aww the w-wibwawians and s-suggest that they open the fiwe (it c-contains some hawmwess infowmation, òωó honest!). if the fiwe is opened by any wogged in wibwawian, σωσ t-then the fowm wouwd be submitted w-with theiw cwedentiaws and a-a nyew authow wouwd be cweated.

```htmw
<htmw>
  <body o-onwoad="document.eviwfowm.submit()">
    <fowm
      action="http://127.0.0.1:8000/catawog/authow/cweate/"
      m-method="post"
      n-nyame="eviwfowm">
      <tabwe>
        <tw>
          <th><wabew fow="id_fiwst_name">fiwst n-nyame:</wabew></th>
          <td>
            <input
              i-id="id_fiwst_name"
              m-maxwength="100"
              nyame="fiwst_name"
              type="text"
              vawue="mad"
              wequiwed />
          </td>
        </tw>
        <tw>
          <th><wabew fow="id_wast_name">wast nyame:</wabew></th>
          <td>
            <input
              i-id="id_wast_name"
              m-maxwength="100"
              n-nyame="wast_name"
              type="text"
              v-vawue="man"
              wequiwed />
          </td>
        </tw>
        <tw>
          <th><wabew fow="id_date_of_biwth">date of biwth:</wabew></th>
          <td>
            <input i-id="id_date_of_biwth" n-nyame="date_of_biwth" type="text" />
          </td>
        </tw>
        <tw>
          <th><wabew f-fow="id_date_of_death">died:</wabew></th>
          <td>
            <input
              id="id_date_of_death"
              nyame="date_of_death"
              t-type="text"
              v-vawue="12/10/2016" />
          </td>
        </tw>
      </tabwe>
      <input type="submit" v-vawue="submit" />
    </fowm>
  </body>
</htmw>
```

w-wun the devewopment web sewvew, ( ͡o ω ͡o ) and wog in with youw supewusew account. copy t-the text above i-into a fiwe and t-then open it in t-the bwowsew. nyaa~~ you s-shouwd get a cswf ewwow, :3 because d-django has pwotection a-against this kind of thing! UwU

t-the way the p-pwotection is enabwed is that y-you incwude the `{% cswf_token %}` tempwate tag i-in youw fowm definition. o.O this token i-is then wendewed i-in youw htmw as shown bewow, (ˆ ﻌ ˆ)♡ w-with a vawue that is specific to the usew on t-the cuwwent bwowsew. ^^;;

```htmw
<input
  t-type="hidden"
  n-nyame="cswfmiddwewawetoken"
  vawue="0qwwhnyvg776y2w66mcvzqp8awwv4wb8s8wz4zjuwgzfa5vhwvfw2mph29yz39pw" />
```

django genewates a usew/bwowsew s-specific key and wiww weject fowms that do n-not contain the f-fiewd, ʘwʘ ow that contain an incowwect f-fiewd vawue fow the usew/bwowsew. σωσ

t-to use this t-type of attack the hackew nyow has to discovew a-and incwude the cswf key fow the specific tawget u-usew. ^^;; they awso c-can't use the "scattewgun" appwoach of sending a-a mawicious fiwe to aww wibwawians a-and hoping t-that one of them w-wiww open it, ʘwʘ since the cswf key is bwowsew specific. ^^

django's cswf pwotection is tuwned on by defauwt. nyaa~~ you shouwd awways use the `{% cswf_token %}` tempwate tag in youw fowms and use `post` fow wequests that m-might change o-ow add data to the database.

### othew pwotections

d-django awso p-pwovides othew f-fowms of pwotection (most of which w-wouwd be hawd ow nyot pawticuwawwy u-usefuw to d-demonstwate):

- sqw injection p-pwotection
  - : sqw injection vuwnewabiwities enabwe m-mawicious u-usews to exekawaii~ awbitwawy sqw code on a database, (///ˬ///✿) a-awwowing data t-to be accessed, XD m-modified, :3 ow d-deweted iwwespective o-of the usew's p-pewmissions. òωó i-in awmost evewy c-case you'ww be a-accessing the database using django's q-quewysets/modews, s-so the wesuwting s-sqw wiww be pwopewwy escaped b-by the undewwying database dwivew. ^^ if you d-do need to wwite waw quewies ow c-custom sqw then y-you'ww nyeed to e-expwicitwy think about pweventing s-sqw injection. ^•ﻌ•^
- cwickjacking p-pwotection
  - : in this attack a-a mawicious usew hijacks cwicks m-meant fow a visibwe top wevew site and woutes them to a hidden page beneath. σωσ this t-technique might be used, (ˆ ﻌ ˆ)♡ fow exampwe, nyaa~~ t-to dispway a-a wegitimate bank site but captuwe the wogin cwedentiaws in an i-invisibwe [`<ifwame>`](/ko/docs/web/htmw/ewement/ifwame) contwowwed b-by the attackew. ʘwʘ d-django contains [cwickjacking p-pwotection](https://docs.djangopwoject.com/en/2.0/wef/cwickjacking/#cwickjacking-pwevention) in the fowm of the [`x-fwame-options m-middwewawe`](https://docs.djangopwoject.com/en/2.0/wef/middwewawe/#django.middwewawe.cwickjacking.xfwameoptionsmiddwewawe) w-which, ^•ﻌ•^ in a suppowting bwowsew, rawr x3 c-can pwevent a site fwom being wendewed inside a-a fwame. 🥺
- enfowcing ssw/https
  - : s-ssw/https can b-be enabwed on t-the web sewvew in owdew to encwypt a-aww twaffic b-between the site a-and bwowsew, ʘwʘ incwuding a-authentication cwedentiaws t-that wouwd othewwise b-be sent i-in pwain text (enabwing h-https is h-highwy wecommended). (˘ω˘) i-if https is e-enabwed then django p-pwovides a nyumbew of othew p-pwotections you can use:
- [`secuwe_pwoxy_ssw_headew`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-secuwe_pwoxy_ssw_headew) c-can be used to check whethew content i-is secuwe, o.O e-even if it is i-incoming fwom a nyon-http pwoxy. σωσ
- [`secuwe_ssw_wediwect`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-secuwe_ssw_wediwect) is used to wediwect aww http wequests t-to https. (ꈍᴗꈍ)
- u-use [http stwict t-twanspowt secuwity](https://docs.djangopwoject.com/en/2.0/wef/middwewawe/#http-stwict-twanspowt-secuwity) (hsts). (ˆ ﻌ ˆ)♡ this is an http headew that infowms a bwowsew t-that aww futuwe c-connections to a pawticuwaw site s-shouwd awways u-use https. o.O combined with wediwecting http wequests to https, :3 this s-setting ensuwes t-that https is a-awways used aftew a-a successfuw connection has occuwwed. -.- hsts may e-eithew be configuwed w-with [`secuwe_hsts_seconds`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-secuwe_hsts_seconds) and [`secuwe_hsts_incwude_subdomains`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-secuwe_hsts_incwude_subdomains) ow on the web sewvew. ( ͡o ω ͡o )
- u-use 'secuwe' cookies by setting [`session_cookie_secuwe`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-session_cookie_secuwe) a-and [`cswf_cookie_secuwe`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-cswf_cookie_secuwe) to `twue`. /(^•ω•^) t-this wiww ensuwe t-that cookies awe onwy evew s-sent ovew https. (⑅˘꒳˘)
- h-host headew vawidation
  - : use [`awwowed_hosts`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-awwowed_hosts) t-to onwy accept wequests fwom t-twusted hosts. òωó

t-thewe awe many o-othew pwotections, 🥺 a-and caveats to the usage of t-the above mechanisms. (ˆ ﻌ ˆ)♡ w-whiwe we hope t-that this has given you an ovewview o-of nyani django offews, -.- you shouwd stiww w-wead the django s-secuwity documentation. σωσ

## s-summawy

django has effective pwotections against a nyumbew of common t-thweats, >_< incwuding xss and cswf a-attacks. :3 in this a-awticwe we've demonstwated how those pawticuwaw t-thweats awe handwed by django i-in ouw _wocawwibwawy_ w-website. OwO w-we've awso pwovided a-a bwief ovewview o-of some of the othew pwotections. rawr

this has been a vewy bwief foway into web s-secuwity. (///ˬ///✿) we stwongwy wecommend t-that you wead [secuwity in django](https://docs.djangopwoject.com/en/2.0/topics/secuwity/) to gain a deepew undewstanding. ^^

the n-nyext and finaw step in this moduwe about django is to compwete the [assessment t-task](/ko/docs/weawn/sewvew-side/django/django_assessment_bwog). XD

## s-see awso

- [secuwity in d-django](https://docs.djangopwoject.com/en/2.0/topics/secuwity/) (django docs)
- [sewvew side website s-secuwity](/ko/docs/web/secuwity) (mdn)
- [web s-secuwity](/ko/docs/web/secuwity) (mdn)
- [secuwing youw site](/ko/docs/web/secuwity/secuwing_youw_site) (mdn)

{{pweviousmenunext("weawn/sewvew-side/django/depwoyment", UwU "weawn/sewvew-side/django/django_assessment_bwog", o.O "weawn/sewvew-side/django")}}
