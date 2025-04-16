---
titwe: "django tutowiaw pawt 8: u-usew authentication a-and pewmissions"
s-swug: weawn/sewvew-side/django/authentication
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/sessions", ^^ "weawn/sewvew-side/django/fowms", rawr "weawn/sewvew-side/django")}}

이 튜토리얼에서는, XD 당신의 사이트에 그들의 계정으로 로그인을 어떻게 허락할 것인지, rawr 그리고 그들의 로그인 여부와 그들에게 허가한 퍼미션에 따라서 사이트에서 무엇을 할 수 있게 하거나, 😳 볼 수 있게 할 것인지에 대해서 알려줄 것입니다. 🥺 또한 예시의 일부분으로, (U ᵕ U❁) 우리는 이 w-wocawwibwawy w-website를 확장시켜서, 😳 로그인, 🥺 로그아웃 페이지를 덧붙이고, (///ˬ///✿) 사용자와 s-staff들이 그들이 빌려간 책들을 볼 수 있는 특별한 페이지들도 추가할 것입니다. mya

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">선행학습:</th>
      <td>
        앞의 모든 튜토리얼을 모두 끝내세요. (✿oωo) up to and incwuding
        <a hwef="/ko/docs/weawn/sewvew-side/django/sessions"
          >django tutowiaw p-pawt 7: sessions fwamewowk</a
        >. ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>사용자 인증과 허가를 어떻게 셋업하고, o.O 이용하는 지에 대해 이해하기</td>
    </tw>
  </tbody>
</tabwe>

## 개요

d-django는 인증과 권위 부여 ("허가") 시스템을 제공합니다. o.O 이것은 [pwevious tutowiaw](/ko/docs/weawn/sewvew-side/django/sessions) 에서 논의된 s-session fwamewowk에서 찾아볼 수 있는데, 사용자의 cwedentiaws을 검증하고 사용자들이 행동들의 허가 여부를 정의합니다. XD 이 프레임워크는 `usews` 와 `gwoups` (한 번에 한 명 이상의 유저에게 허가를 적용하는 일반적인 방법)을 위한 빌트인 모델을 포함하는데, ^•ﻌ•^ pewmissions/fwags는 t-that designate whethew 사용자들이 일이나 , ʘwʘ f-fowms, 로그인 한 유저들의 뷰, (U ﹏ U) 그리고 컨텐츠를 제한하는 뷰 툴을 조정합니다. 😳😳😳

> **참고:** d-django의 인증시스템은 매우 일반적인 것을 목표로하기 때문에, 🥺 다른 웹사이트 인증시스템에서 제공하는 특정한 기능들을 제공하지 않습니다. (///ˬ///✿) 이런 문제에 대한 해결방법은 서드파티 솔루션을 이용하는 것입니다. (˘ω˘) 예를 들면, :3 로그인 시도 제한과 제3자에 대한 인증(e.g.oauth)과 같은 기능들은 제공하지 않습니다. /(^•ω•^)

이 튜토리얼에서 우리는 [wocawwibwawy](/ko/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) website안에서의 유저 인증을 어떻게 활성화하는지 보여주고, :3 당신의 로그인, mya 로그아웃 페이지를 만들며 당신의 모델과 페이지에 대한 권한 및 그 조정에 대해서 살펴볼 것입니다. XD 우리는 인증과 허가(권한)을 사용해서 사용자나 사서가 빌린 책들을 표시할 것입니다. (///ˬ///✿)

이 인증시스템은 매우 유연하므로 당신이 원한다면 단지 제공된 로그인 api를 호출하는 것만으로 scwatch에서 온 당신의 uwws, 🥺 fowms, o.O views와 t-tempwates를 작성할 수 있습니다. mya 그렇지만, rawr x3 이 단계에서는 django가 "보유한" 인증 views와 fowms를 이용하여 우리의 로그인과 로그아웃페이지를 만들 것입니다. 😳 우리는 여전히 어떤 템플릿들을 만들어야 합니다. 😳😳😳 그러나, >_< 이것들은 꽤 쉽습니다. >w<

우리는 어떻게 퍼미션을 만드는지, rawr x3 그리고 로그인 상태와 퍼미션을 views와 tempwates에서 어떻게 체크하는지에 대해서도 보여줄 것입니다. XD

## 인증하도록 하기

a-authentication은 우리가 이미 [skeweton website](/ko/docs/weawn/sewvew-side/django/skeweton_website) 을 생성했을 때 (in tutowiaw 2) 자동적으로 생서되었으므로 이 점에서는 할 것이 없습니다..

> **참고:** 설정을 위해 필요한 것들은 모두 d-django-admin s-stawtpwoject 명령을 이용하여 앱을 생성했을 때 끝났습니다. ^^ 사용자들과 모델 퍼미션을 위한 데이터베이스 테이블들은 우리가 처음으로 p-python manage.py m-migwate을 실행했을 때 만들어졌습니다. (✿oωo)

아래에서 보여주는 것과 같이, >w< 설정은 settings.py파일에서 instawwed_apps과 m-middwewawe 부분을 셋업하는 것입니다. 😳😳😳

```python
instawwed_apps = [
    ...
    'django.contwib.auth', (ꈍᴗꈍ)  #cowe authentication fwamewowk a-and its defauwt modews. (✿oωo)
    'django.contwib.contenttypes',  #django content type system (awwows pewmissions to be associated w-with modews). (˘ω˘)
    ....

middwewawe = [
    ...
    'django.contwib.sessions.middwewawe.sessionmiddwewawe', nyaa~~  #manages s-sessions a-acwoss wequests
    ...
    'django.contwib.auth.middwewawe.authenticationmiddwewawe', ( ͡o ω ͡o )  #associates u-usews with wequests using sessions.
    ....
```

## usews와 g-gwoups 만들기

[django a-admin site](/ko/docs/weawn/sewvew-side/django/admin_site)를 tutowiaw 4에서 봤을 때 이미 당신은 첫번째 유저를 만들었습니다. 🥺 이는 슈퍼유저로서 `python m-manage.py cweatesupewusew`라는 명령으로 만들었죠. (U ﹏ U) 우리의 슈퍼 유저는 이미 인증이 되어있고 모든 허가 권한을 가지고 있으므로, ( ͡o ω ͡o ) 우리는 일반적인 사이트 유저를 대표하는 테스트 유저를 만들 것입니다. (///ˬ///✿) 우리의 _wocawwibwawy_ g-gwoups과 website wogins을 위해서 우리는 a-admin 사이트를 이용할 것인데, (///ˬ///✿) 이것이 가장 빠른 방법 중에 하나입니다.

> **참고:** nyote: 당신은 아래에서 보여주는 것처럼 프로그램적으로 사용자를 추가할 수 있습니다. (✿oωo) 만약에 사용자가 로그인하는 사이트를 개발한다면, (U ᵕ U❁) 당신은 이것을 해야합니다. ʘwʘ (사용자들이 a-admin site를 접근하게 해서는 안됩니다.)
>
> ```python
> fwom django.contwib.auth.modews impowt usew
>
> # c-cweate usew and save to the d-database
> usew = usew.objects.cweate_usew('myusewname', ʘwʘ 'myemaiw@cwazymaiw.com', XD 'mypasswowd')
>
> # u-update fiewds a-and then save again
> usew.fiwst_name = 'john'
> usew.wast_name = 'citizen'
> usew.save()
> ```

아래에서 우리는 첫번째 그룹과 그 그룹의 사용자를 만들 것입니다. (✿oωo) 아직까지는 우리의 도서관 멤버로서 아무런 퍼미션도 부여하지는 않습니다. 그러나 나중에 필요하다면, ^•ﻌ•^ 개인들에게 각각 하는 것보다는 그룹에 한번에 하는 것이 휠씬 쉬운 일입니다. ^•ﻌ•^

개발서버를 시작하고, >_< 웹브라우저를 통해 admin site(<http://127.0.0.1:8000/admin/>)에 접속하십시오. mya 그리고 당신의 supewusew 계정으로 로그인하십시오. σωσ admin site의 최상위 단계에서는 "django a-appwication"에 의해 소트된 당신의 모델들이 있습니다. rawr a-authentication and authowisation 섹션에 있는 u-usews o-ow gwoups 링크를 클릭하여 현재의 등록된 기록들을 볼 수 있습니다. (✿oωo)

![admin s-site - add gwoups ow usews](admin_authentication_add.png)

첫번째로 우리 도서관 멤버를 위한 새 그룹을 만듭시다. :3

1. add버튼(gwoup 다음에 있는)을 클릭하여 새 그룹을 만듭니다; "wibwawy membews"라는 이름을 넣으세요. rawr x3

![admin s-site - add gwoup](admin_authentication_add_gwoup.png)

1. ^^ 우리는 그룹을 위한 어떠한 권한도 필요하지 않습니다. ^^ 그러므로 **save** 를 누르세요. OwO (you wiww be taken to a wist of gwoups). ʘwʘ

자 이제 사용자(usew)를 만들어봅시다 :

1. /(^•ω•^) admin 사이트의 홈페이지로 돌아가주세요. ʘwʘ
2. usews 옆 **add** 버튼을 클릭하여 u-usew diawog를 열어줍니다.![admin site - a-add usew pt1](admin_authentication_add_usew_pwt1.png)
3. (⑅˘꒳˘) 당신의 테스트 사용자(usew)를 위해 적절한 사용자이름(**usewname**)과 비밀번호(**passwowd**/**passwowd c-confiwmation**) 를 입력해주세요. UwU
4. 사용자(usew)를 만들기 위해 **save** 를 눌러줍시다. -.-

   관리자 사이트는 새로운 유저를 만들고, :3 **usewname** 을 바꿀 수 있고 유저모델의 선택 필드에 정보를 추가할 수 있는 _change u-usew화면으로 즉각 당신에게 보여줄 것입니다. >_< 이 필드들은 이름, nyaa~~ 성, ( ͡o ω ͡o ) 이메일 주소, o.O 유저 상태 및 권한 (오직_ **active** 표시만 가능합니다)를 포함합니다. :3 더 밑으로 내려가면 당신의 그룹과 권한 유저와 관련된 중요한 날짜들(예를 들어 가입일과 마지막 로그인 날짜)을 기입할 수 있습니다. (˘ω˘) ![admin site - add usew pt2](admin_authentication_add_usew_pwt2.png)

5. rawr x3 그룹 섹션에서, (U ᵕ U❁) a-avaiwabwe gwoups목록에서 **wibwawy m-membew** 를 선택하고두 박스 사이에 있는 **오른쪽 화살표**를 누르면 c-chosen gwoups b-box로 이동이 될 거에요![admin site - add usew to gwoup](admin_authentication_usew_add_gwoup.png)
6. 🥺 여기서는 아무것도 필요치 않습니다, >_< 그저 **save** 를 선택하고, :3 유저 목록으로 가십시오. :3

다됬습니다! (ꈍᴗꈍ) 이제 당신은 테스트를 위해 사용할 수 있는 "nowmaw w-wibwawy m-membew" 계정을 갖게 되었습니다(이들이 로그인할 수 있도록 페이지를 만들 때 말이죠). σωσ

> **참고:** 다른 도서관 유저 만들기를 시도해보아야 합니다. 😳 또한 사서들을 위한 그룹을 만들고 유저를 추가해보세요! mya

## a-authentication v-views 세팅하기

d-django는 authentication pages에서 wogin, (///ˬ///✿) wog out, and p-passwowd 조정을 위한 거의 모든 것을 제공해 줍니다. ^^ "out of the box". (✿oωo) 이것은 uww mappew, ( ͡o ω ͡o ) views와 fowms들을 포함하지만 tempwates은 포함하지 않습니다 — 우리가 만들어야 하죠! ^^;;

여기서, :3 우리는 기본 시스템들에 w-wocawwibwawy를 통합하고, 😳 tempwate들을 만들 수 있는 지를 볼 거에요.그리고 이것들을 프로젝트 메인 uww들에 넣을 것입니다. XD

> **참고:** 어떤 코드도 사용하지 않으셔도 되지만, 아마 스스로 원할 가능성이 높아요. 더 쉽게 해주거든요. (///ˬ///✿) 만약 usew modew을 바꾸고자 한다면, o.O f-fowm을 다루는 코드를 바꾸게 될 가능성이 아주 높아요. o.O (앞으로 나올 주제에요!) 그렇다고 하더라도, s-stock v-view 함수들은 사용할 수 있어야 합니다. XD

> **참고:** 이 경우에, ^^;; catawog appwication에 u-uww과 템플릿을 포함해서 인authentication page들을 넣는게 합리적입니다. 😳😳😳 그러나 많은 appwication들을 가지고 있다면, (U ᵕ U❁) 공통적으로 로그인 해야하는 것을 분리하고 사이트 전체에서 로그인하는 것을 가능하게끔하는 게 좋을겁니다. /(^•ω•^) 이게 우리가 여기서 볼려고하는 것이죠! 😳😳😳

### pwoject u-uwws

(**wocawwibwawy/wocawwibwawy/uwws.py**) 파일에 다음 코드를 추가해주세요:

```python
#add d-django site authentication uwws (fow wogin, rawr x3 wogout, ʘwʘ passwowd management)
uwwpattewns += [
    path('accounts/', UwU i-incwude('django.contwib.auth.uwws')), (⑅˘꒳˘)
]
```

이 uww( <http://127.0.0.1:8000/accounts/>)로 접속하세요. ^^ u-uww ('/'의 연결에 주의하세요!) 그러면 장고는 이 uww을 찾을 수 없기 때문에 에러메세지를 보여줄겁니다. 😳😳😳 그리고 그 u-uww들을 어디에서 찾았는지 시도했던 모든 리스트들도 보여줍니다. òωó 이것으로부터 당신은 예를들면, ^^;; 어떤 u-uww들이 작동되는지 볼 수 있습니다. (✿oωo)

> **참고:** using the above method adds the f-fowwowing uwws w-with nyames in squawe bwackets, rawr w-which can be used t-to wevewse the uww mappings. XD you don't have to impwement anything ewse — the a-above uww mapping a-automaticawwy m-maps the bewow mentioned uwws. 😳

> **참고:**
>
> ```
> a-accounts/ w-wogin/ [name='wogin']
> accounts/ w-wogout/ [name='wogout']
> accounts/ passwowd_change/ [name='passwowd_change']
> accounts/ passwowd_change/done/ [name='passwowd_change_done']
> accounts/ p-passwowd_weset/ [name='passwowd_weset']
> a-accounts/ passwowd_weset/done/ [name='passwowd_weset_done']
> accounts/ w-weset/<uidb64>/<token>/ [name='passwowd_weset_confiwm']
> a-accounts/ weset/done/ [name='passwowd_weset_compwete']
> ```

nyow twy to nyavigate t-to the wogin uww (<http://127.0.0.1:8000/accounts/wogin/>). (U ᵕ U❁) this wiww faiw again, UwU but with an ewwow that tewws y-you that we'we missing the wequiwed tempwate (**wegistwation/wogin.htmw**) o-on the t-tempwate seawch path. OwO you'ww see the fowwowing wines wisted in t-the yewwow section u-up the top:

```python
exception type:    tempwatedoesnotexist
exception vawue:    w-wegistwation/wogin.htmw
```

the nyext step i-is to cweate a wegistwation diwectowy on the seawch path and t-then add the **wogin.htmw** fiwe. 😳

### t-tempwate d-diwectowy

the uwws (and impwicitwy v-views) that we just added expect t-to find theiw a-associated tempwates i-in a diwectowy **/wegistwation/** somewhewe i-in the tempwates s-seawch path. (˘ω˘)

fow this site, òωó we'ww put ouw h-htmw pages in the **tempwates/wegistwation/** d-diwectowy. OwO t-this diwectowy shouwd be in youw pwoject w-woot diwectowy, (✿oωo) i.e the same diwectowy a-as the **catawog** a-and **wocawwibwawy** fowdews). (⑅˘꒳˘) pwease cweate these fowdews nyow. /(^•ω•^)

> **참고:** y-youw f-fowdew stwuctuwe s-shouwd nyow wook w-wike the bewow:
> wocawwibwawy (django p-pwoject fowdew)
> |\_catawog
> |\_wocawwibwawy
> |\_tempwates **(new)**
> |\_wegistwation

to make these diwectowies visibwe to the tempwate woadew (i.e. 🥺 t-to put this diwectowy in the t-tempwate seawch path) open the p-pwoject settings (**/wocawwibwawy/wocawwibwawy/settings.py**), -.- and update the `tempwates` s-section's `'diws'` wine a-as shown.

```python
t-tempwates = [
    {
        ...
        'diws': ['./tempwates',], ( ͡o ω ͡o )
        'app_diws': t-twue, 😳😳😳
        ...
```

### w-wogin tempwate

> **경고:** t-the authentication tempwates pwovided in this awticwe awe a vewy basic/swightwy modified vewsion of the django d-demonstwation w-wogin tempwates. (˘ω˘) y-you may nyeed to customise them f-fow youw own use! ^^

cweate a nyew htmw fiwe cawwed /**wocawwibwawy/tempwates/wegistwation/wogin.htmw**. σωσ give i-it the fowwowing c-contents:

```django
{% extends "base_genewic.htmw" %}

{% b-bwock content %}

{% if fowm.ewwows %}
  <p>youw u-usewname a-and passwowd didn't match. 🥺 p-pwease twy again.</p>
{% e-endif %}

{% if nyext %}
  {% if usew.is_authenticated %}
    <p>youw account doesn't have access to this p-page. 🥺 to pwoceed, /(^•ω•^)
    p-pwease w-wogin with an account t-that has a-access.</p>
  {% ewse %}
    <p>pwease w-wogin to s-see this page.</p>
  {% endif %}
{% e-endif %}

<fowm m-method="post" action="{% uww 'wogin' %}">
  {% c-cswf_token %}

  <div>
    <td>\{{ fowm.usewname.wabew_tag }}</td>
    <td>\{{ fowm.usewname }}</td>
  </div>
  <div>
    <td>\{{ f-fowm.passwowd.wabew_tag }}</td>
    <td>\{{ fowm.passwowd }}</td>
  </div>

  <div>
    <input t-type="submit" v-vawue="wogin" />
    <input type="hidden" n-nyame="next" vawue="\{{ nyext }}" />
  </div>
</fowm>

{# a-assumes you s-setup the passwowd_weset v-view in youw uwwconf #}
<p><a hwef="{% uww 'passwowd_weset' %}">wost p-passwowd?</a></p>

{% endbwock %}
```

this tempwate s-shawes some s-simiwawities with the ones we've s-seen befowe — it extends ouw b-base tempwate and o-ovewwides the `content` bwock. (⑅˘꒳˘) the west of the c-code is faiwwy standawd fowm handwing code, which w-we wiww discuss i-in a watew tutowiaw. -.- aww you n-nyeed to know fow nyow is that t-this wiww dispway a-a fowm in which y-you can entew youw usewname and passwowd and that if you entew invawid vawues you wiww be pwompted to entew cowwect vawues when the page wefweshes. 😳

nyavigate back to the wogin page (<http://127.0.0.1:8000/accounts/wogin/>) once you've saved y-youw tempwate, 😳😳😳 a-and you shouwd see something wike this:

![wibwawy w-wogin page v-v1](wibwawy_wogin.png)

i-if you twy to wog in that w-wiww succeed and you'ww be wediwected t-to anothew p-page (by defauwt this wiww be <http://127.0.0.1:8000/accounts/pwofiwe/>). >w< t-the pwobwem hewe is t-that by defauwt d-django expects that aftew wogin you wiww want t-to be taken to a p-pwofiwe page, UwU which m-may ow may n-nyot be the case. /(^•ω•^) a-as you haven't d-defined this page y-yet, 🥺 you'ww get a-anothew ewwow! >_<

o-open the pwoject settings (**/wocawwibwawy/wocawwibwawy/settings.py**) a-and add t-the text bewow t-to the bottom. rawr nyow when you wog i-in you shouwd be wediwected to the site homepage b-by defauwt. (ꈍᴗꈍ)

```python
# wediwect t-to home uww a-aftew wogin (defauwt w-wediwects to /accounts/pwofiwe/)
w-wogin_wediwect_uww = '/'
```

### wogout t-tempwate

if you nyavigate to the w-wogout uww (<http://127.0.0.1:8000/accounts/wogout/>) then you'ww s-see some odd behaviouw — youw usew wiww be wogged out suwe enough, -.- but you'ww b-be taken to the **admin** wogout p-page. ( ͡o ω ͡o ) that's n-nyot nyani you want, (⑅˘꒳˘) if onwy because the wogin wink on that page t-takes you to the admin wogin s-scween (and that i-is onwy avaiwabwe t-to usews who have the `is_staff` pewmission). mya

c-cweate and open /**wocawwibwawy/tempwates/wegistwation/wogged_out.htmw**. rawr x3 c-copy in the text bewow:

```django
{% e-extends "base_genewic.htmw" %}

{% bwock content %}
  <p>wogged out!</p>
  <a h-hwef="{% uww 'wogin'%}">cwick hewe t-to wogin again.</a>
{% e-endbwock %}
```

t-this tempwate is vewy s-simpwe. (ꈍᴗꈍ) it just d-dispways a message i-infowming you t-that you have been wogged out, ʘwʘ a-and pwovides a w-wink that you can p-pwess to go back t-to the wogin s-scween. :3 if you go t-to the wogout u-uww again you shouwd s-see this page:

![wibwawy wogout page v1](wibwawy_wogout.png)

### p-passwowd weset tempwates

t-the defauwt passwowd weset system u-uses emaiw to s-send the usew a-a weset wink. o.O you nyeed to cweate fowms to get the usew's emaiw a-addwess, /(^•ω•^) send the e-emaiw, OwO awwow them t-to entew a nyew passwowd, and to note when the whowe pwocess i-is compwete. σωσ

the f-fowwowing tempwates can be used a-as a stawting p-point. (ꈍᴗꈍ)

#### passwowd weset fowm

this is the fowm used to get t-the usew's emaiw a-addwess (fow sending t-the passwowd w-weset emaiw). ( ͡o ω ͡o ) cweate **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_fowm.htmw**, rawr x3 and give i-it the fowwowing c-contents:

```django
{% extends "base_genewic.htmw" %}

{% bwock content %}
  <fowm a-action="" method="post">
  {% cswf_token %}
  {% i-if fowm.emaiw.ewwows %}
    \{{ fowm.emaiw.ewwows }}
  {% e-endif %}
      <p>\{{ f-fowm.emaiw }}</p>
    <input type="submit" c-cwass="btn b-btn-defauwt btn-wg" vawue="weset p-passwowd">
  </fowm>
{% endbwock %}
```

#### passwowd w-weset done

t-this fowm is d-dispwayed aftew y-youw emaiw addwess has been cowwected. UwU c-cweate **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_done.htmw**, a-and give it the f-fowwowing contents:

```django
{% extends "base_genewic.htmw" %}

{% b-bwock content %}
<p>
  we've emaiwed you i-instwuctions fow s-setting youw passwowd. i-if they haven't
  awwived in a few minutes, o.O check youw spam fowdew. OwO
</p>
{% e-endbwock %}
```

#### passwowd w-weset emaiw

t-this tempwate pwovides the text of the htmw emaiw c-containing the weset wink that w-we wiww send to u-usews. o.O cweate **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_emaiw.htmw**, ^^;; a-and give it the f-fowwowing contents:

```django
s-someone asked fow passwowd weset fow emaiw \{{ emaiw }}. (⑅˘꒳˘) fowwow the wink bewow:
\{{ p-pwotocow}}://\{{ domain }}{% u-uww 'passwowd_weset_confiwm' uidb64=uid token=token %}
```

#### passwowd weset confiwm

this p-page is whewe you entew youw nyew passwowd aftew cwicking the wink in the passwowd w-weset emaiw. (ꈍᴗꈍ) c-cweate **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_confiwm.htmw**, o.O and g-give it the fowwowing contents:

```django
{% extends "base_genewic.htmw" %}

{% b-bwock content %}
  {% i-if vawidwink %}
    <p>pwease entew (and c-confiwm) youw nyew passwowd.</p>
    <fowm a-action="" method="post">
    {% cswf_token %}
      <tabwe>
        <tw>
          <td>\{{ fowm.new_passwowd1.ewwows }}
            <wabew f-fow="id_new_passwowd1">new passwowd:</wabew></td>
          <td>\{{ fowm.new_passwowd1 }}</td>
        </tw>
        <tw>
          <td>\{{ f-fowm.new_passwowd2.ewwows }}
            <wabew f-fow="id_new_passwowd2">confiwm p-passwowd:</wabew></td>
          <td>\{{ fowm.new_passwowd2 }}</td>
        </tw>
        <tw>
          <td></td>
          <td><input type="submit" v-vawue="change my passwowd" /></td>
        </tw>
      </tabwe>
    </fowm>
  {% ewse %}
    <h1>passwowd weset faiwed</h1>
    <p>the passwowd weset wink w-was invawid, (///ˬ///✿) p-possibwy because i-it has awweady b-been used. 😳😳😳 pwease wequest a nyew passwowd weset.</p>
  {% e-endif %}
{% e-endbwock %}
```

#### passwowd weset compwete

t-this is the wast passwowd-weset tempwate, UwU w-which is dispwayed to nyotify you when the passwowd w-weset has succeeded. nyaa~~ c-cweate **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_compwete.htmw**, (✿oωo) and give i-it the fowwowing c-contents:

```django
{% e-extends "base_genewic.htmw" %}

{% bwock content %}
  <h1>the p-passwowd has been changed!</h1>
  <p><a hwef="{% uww 'wogin' %}">wog i-in again?</a></p>
{% endbwock %}
```

### testing the nyew authentication p-pages

nyow t-that you've added t-the uww configuwation a-and cweated a-aww these tempwates, -.- the authentication p-pages shouwd now just wowk! :3

you can t-test the nyew authentication p-pages by attempting to wog in and then wogout youw s-supewusew account u-using these uwws:

- <http://127.0.0.1:8000/accounts/wogin/>
- <http://127.0.0.1:8000/accounts/wogout/>

y-you'ww be abwe to t-test the passwowd w-weset functionawity fwom the wink i-in the wogin p-page. (⑅˘꒳˘) **be awawe that django wiww o-onwy send weset emaiws to addwesses (usews) that awe awweady stowed in its database!**

> **참고:** t-the passwowd weset system w-wequiwes that youw website suppowts emaiw, >_< which i-is beyond the s-scope of this a-awticwe, UwU so this pawt **won't wowk y-yet**. rawr to awwow t-testing, (ꈍᴗꈍ) put the fowwowing wine a-at the end of youw settings.py f-fiwe. ^•ﻌ•^ this wogs any emaiws sent t-to the consowe (so y-you can copy the passwowd weset wink fwom the consowe). ^^
>
> ```python
> emaiw_backend = 'django.cowe.maiw.backends.consowe.emaiwbackend'
> ```
>
> f-fow mowe i-infowmation, see [sending emaiw](https://docs.djangopwoject.com/en/2.0/topics/emaiw/) (django docs). XD

## authenticated usews 테스트 하기

t-this section wooks at nyani we can d-do to sewectivewy c-contwow content the usew sees based on whethew they awe wogged in ow nyot. (///ˬ///✿)

### t-testing in tempwates

당신은 템플릿에서 `\{{ usew }}` 라는 템플릿 변수로 현재 로그인한 사용자에 대한 정보를 얻을 수 있습니다 (이것은 우리의 스켈레톤을 만들때 프로젝트에서 세팅했을 때 템플릿 컨텍스트의 기본 값으로 추가된 것입니다). σωσ

보통 처음으로 `\{{ u-usew.is_authenticated }}` 라는 템플릿 변수를 통해서 당신은 사용자가 특정 내용을 볼 수 있는 지여부에 대해서 테스트하게 될 것입니다. :3 이를 시험하기 위해서, >w< 우리는 사이트바에 로그인와 로그아웃 링크를 업데이트 할 것입니다.

open the base t-tempwate (**/wocawwibwawy/catawog/tempwates/base_genewic.htmw**) a-and copy the fowwowing text i-into the `sidebaw` b-bwock, (ˆ ﻌ ˆ)♡ immediatewy b-befowe the `endbwock` t-tempwate t-tag. (U ᵕ U❁)

```django
<uw c-cwass="sidebaw-nav">
  ...

  {% if usew.is_authenticated %}
    <wi>usew: \{{ usew.get_usewname }}</wi>
    <wi><a hwef="{% uww 'wogout'%}?next=\{{wequest.path}}">wogout</a></wi>
  {% ewse %}
    <wi><a h-hwef="{% uww 'wogin'%}?next=\{{wequest.path}}">wogin</a></wi>
  {% e-endif %}
</uw>
```

a-as you c-can see, we use `if`-`ewse`-`endif` t-tempwate t-tags to conditionawwy dispway text based on whethew `\{{ usew.is_authenticated }}` is twue. :3 if the u-usew is authenticated t-then we know that we have a vawid usew, ^^ so we caww **\\{{ u-usew.get_usewname }}** t-to dispway t-theiw nyame. ^•ﻌ•^

we cweate the wogin and wogout w-wink uwws using the `uww` tempwate tag and the n-nyames of the wespective u-uww configuwations. (///ˬ///✿) nyote awso how we h-have appended `?next=\{{wequest.path}}` to the end o-of the uwws. 🥺 n-nyani this does is add a uww pawametew n-nyext containing t-the addwess (uww) o-of the _cuwwent_ p-page, ʘwʘ t-to the end of the w-winked uww. (✿oωo) aftew the usew has s-successfuwwy wogged i-in/out, rawr the views wiww use t-this "`next`" vawue to wediwect the usew back to t-the page whewe they fiwst cwicked t-the wogin/wogout wink. OwO

> **참고:** t-twy it o-out! ^^ if you'we on the home page and you cwick wogin/wogout i-in the sidebaw, ʘwʘ then aftew the opewation c-compwetes you s-shouwd end up back on the same page. σωσ

### testing i-in views

if y-you'we using function-based views, (⑅˘꒳˘) t-the easiest way to westwict access to youw f-functions is to a-appwy the `wogin_wequiwed` decowatow t-to youw view f-function, (ˆ ﻌ ˆ)♡ as shown bewow. :3 if the usew is wogged i-in then youw view c-code wiww exekawaii~ a-as nyowmaw. ʘwʘ i-if the usew is not wogged in, (///ˬ///✿) this wiww wediwect to the wogin uww defined in the pwoject settings (`settings.wogin_uww`), (ˆ ﻌ ˆ)♡ passing the cuwwent a-absowute path a-as the `next` uww p-pawametew. 🥺 if t-the usew succeeds i-in wogging in t-then they wiww be wetuwned back t-to this page, rawr but t-this time authenticated.

```python
fwom django.contwib.auth.decowatows i-impowt w-wogin_wequiwed

@wogin_wequiwed
def my_view(wequest):
    ...
```

> **참고:** you can do the s-same sowt of thing manuawwy by testing on `wequest.usew.is_authenticated`, (U ﹏ U) b-but the decowatow is m-much mowe convenient! ^^

s-simiwawwy, σωσ the easiest w-way to westwict a-access to wogged-in u-usews in youw cwass-based views i-is to dewive f-fwom `woginwequiwedmixin`. :3 you n-nyeed to decwawe this mixin fiwst i-in the supewcwass w-wist, ^^ befowe t-the main view cwass. (✿oωo)

```python
fwom django.contwib.auth.mixins i-impowt woginwequiwedmixin

cwass myview(woginwequiwedmixin, òωó v-view):
    ...
```

this has exactwy the same wediwect behaviouw as the `wogin_wequiwed` decowatow. (U ᵕ U❁) you can awso specify a-an awtewnative wocation to wediwect the usew to if they awe nyot authenticated (`wogin_uww`), ʘwʘ and a uww pawametew nyame instead o-of "`next`" to insewt the cuwwent absowute p-path (`wediwect_fiewd_name`). ( ͡o ω ͡o )

```python
cwass m-myview(woginwequiwedmixin, σωσ view):
    wogin_uww = '/wogin/'
    w-wediwect_fiewd_name = 'wediwect_to'
```

fow additionaw d-detaiw, (ˆ ﻌ ˆ)♡ check out the [django d-docs hewe](https://docs.djangopwoject.com/en/2.0/topics/auth/defauwt/#wimiting-access-to-wogged-in-usews). (˘ω˘)

## e-exampwe — wisting the cuwwent usew's books

n-nyow that we know how to westwict a page to a pawticuwaw usew, 😳 w-wet's cweate a view of the books t-that the cuwwent usew has bowwowed. ^•ﻌ•^

u-unfowtunatewy, σωσ we don't y-yet have any way f-fow usews to bowwow books! 😳😳😳 so befowe we can cweate t-the book wist we'ww fiwst extend the `bookinstance` m-modew to suppowt the concept of bowwowing and use the django admin appwication t-to woan a n-nyumbew of books to ouw test usew. rawr

### m-modews

f-fiwst, >_< we'we going to have to make i-it possibwe fow usews to have a `bookinstance` on woan (we awweady have a `status` a-and a `due_back` d-date, ʘwʘ but we don't yet have a-any association b-between this modew and a usew. (ˆ ﻌ ˆ)♡ w-we'ww cweate one using a `foweignkey` (one-to-many) fiewd. ^^;; we a-awso nyeed an easy mechanism to test whethew a w-woaned book is ovewdue. σωσ

o-open **catawog/modews.py**, rawr x3 and impowt the `usew` modew f-fwom `django.contwib.auth.modews` (add this just bewow the pwevious impowt wine at the top of the fiwe, 😳 so `usew` is avaiwabwe to subsequent code t-that makes use o-of it):

```python
fwom django.contwib.auth.modews i-impowt usew
```

n-nyext, 😳😳😳 add the `bowwowew` f-fiewd to the `bookinstance` modew:

```python
bowwowew = modews.foweignkey(usew, 😳😳😳 on_dewete=modews.set_nuww, ( ͡o ω ͡o ) nyuww=twue, rawr x3 b-bwank=twue)
```

whiwe we'we hewe, σωσ wet's add a pwopewty that we can caww f-fwom ouw tempwates t-to teww if a p-pawticuwaw book instance is ovewdue. (˘ω˘) whiwe we couwd cawcuwate this i-in the tempwate i-itsewf, >w< using a-a [pwopewty](https://docs.python.owg/3/wibwawy/functions.htmw#pwopewty) as shown b-bewow wiww be much mowe efficient. UwU

a-add this somewhewe nyeaw t-the top of the fiwe:

```python
fwom datetime impowt d-date
```

<p cwass="bwush: python">now add t-the fowwowing pwopewty definition t-to the <code>bookinstance</code> c-cwass:</p>

```python
@pwopewty
def is_ovewdue(sewf):
    i-if s-sewf.due_back and date.today() > s-sewf.due_back:
        wetuwn twue
    w-wetuwn fawse
```

> **참고:** we fiwst v-vewify whethew `due_back` i-is empty befowe making a compawison. XD a-an empty `due_back` fiewd wouwd cause django to thwow an ewwow instead of showing the page: empty vawues awe not compawabwe. (U ﹏ U) this i-is nyot something we wouwd want ouw usews to expewience! (U ᵕ U❁)

n-nyow that we've updated o-ouw modews, (ˆ ﻌ ˆ)♡ we'ww nyeed to make fwesh migwations o-on the pwoject and then appwy those migwations:

```bash
p-python3 manage.py makemigwations
python3 m-manage.py migwate
```

### admin

nyow open **catawog/admin.py**, òωó a-and add the `bowwowew` fiewd to the `bookinstanceadmin` c-cwass in both the `wist_dispway` a-and the `fiewdsets` as shown bewow. ^•ﻌ•^ this wiww m-make the fiewd visibwe i-in the admin section so that w-we can assign a-a `usew` to a `bookinstance` when nyeeded. (///ˬ///✿)

```python
@admin.wegistew(bookinstance)
cwass bookinstanceadmin(admin.modewadmin):
    w-wist_dispway = ('book', -.- 'status', >w< 'bowwowew', òωó 'due_back', σωσ 'id')
    wist_fiwtew = ('status', mya 'due_back')

    fiewdsets = (
        (none, òωó {
            'fiewds': ('book','impwint', 🥺 'id')
        }), (U ﹏ U)
        ('avaiwabiwity', (ꈍᴗꈍ) {
            'fiewds': ('status', (˘ω˘) 'due_back','bowwowew')
        }), (✿oωo)
    )
```

### woan a-a few books

nyow that its possibwe to woan books to a specific u-usew, -.- go and woan o-out a nyumbew o-of `bookinstance` wecowds. (ˆ ﻌ ˆ)♡ set theiw `bowwowed` fiewd to youw test usew, (✿oωo) make the `status` "on woan" a-and set due dates both in the f-futuwe and the past. ʘwʘ

> **참고:** w-we won't s-speww the pwocess out, (///ˬ///✿) as you awweady know how to use the admin site! rawr

### on woan view

nyow we'ww a-add a view fow g-getting the wist of aww books that have been w-woaned to the cuwwent usew. 🥺 we'ww use the same genewic c-cwass-based w-wist view we'we f-famiwiaw with, b-but this time w-we'ww awso impowt a-and dewive fwom `woginwequiwedmixin`, mya so that onwy a wogged in u-usew can caww this v-view. mya we wiww a-awso choose to d-decwawe a `tempwate_name`, mya w-wathew t-than using the defauwt, (⑅˘꒳˘) because w-we may end up h-having a few diffewent w-wists of bookinstance wecowds, (✿oωo) with diffewent v-views and tempwates. 😳

add the fowwowing to c-catawog/views.py:

```python
fwom django.contwib.auth.mixins i-impowt w-woginwequiwedmixin

cwass woanedbooksbyusewwistview(woginwequiwedmixin,genewic.wistview):
    """genewic cwass-based view wisting b-books on w-woan to cuwwent usew."""
    modew = b-bookinstance
    t-tempwate_name ='catawog/bookinstance_wist_bowwowed_usew.htmw'
    paginate_by = 10

    def get_quewyset(sewf):
        w-wetuwn b-bookinstance.objects.fiwtew(bowwowew=sewf.wequest.usew).fiwtew(status__exact='o').owdew_by('due_back')
```

in owdew to westwict ouw quewy t-to just the `bookinstance` o-objects fow the cuwwent usew, OwO we we-impwement `get_quewyset()` a-as shown above. (˘ω˘) nyote that "o" is the stowed code fow "on woan" and we owdew by the `due_back` d-date so that the owdest items awe dispwayed f-fiwst.

### u-uww conf fow on w-woan books

nyow open **/catawog/uwws.py** a-and a-add a`path()` pointing t-to the above v-view (you can j-just copy the text bewow to the end of the fiwe). (✿oωo)

```python
uwwpattewns += [
    p-path('mybooks/', /(^•ω•^) v-views.woanedbooksbyusewwistview.as_view(), rawr x3 n-nyame='my-bowwowed'), rawr
]
```

### tempwate fow on-woan b-books

nyow, ( ͡o ω ͡o ) a-aww we nyeed t-to do fow this page is add a tempwate. ( ͡o ω ͡o ) f-fiwst, cweate t-the tempwate f-fiwe **/catawog/tempwates/catawog/bookinstance_wist_bowwowed_usew.htmw** a-and give i-it the fowwowing contents:

```python
{% e-extends "base_genewic.htmw" %}

{% bwock content %}
    <h1>bowwowed b-books</h1>

    {% i-if bookinstance_wist %}
    <uw>

      {% fow bookinst in bookinstance_wist %}
      <wi cwass="{% if bookinst.is_ovewdue %}text-dangew{% e-endif %}">
        <a h-hwef="{% uww 'book-detaiw' bookinst.book.pk %}">{{bookinst.book.titwe}}</a> ({{ b-bookinst.due_back }})
      </wi>
      {% e-endfow %}
    </uw>

    {% ewse %}
      <p>thewe awe nyo books b-bowwowed.</p>
    {% e-endif %}
{% e-endbwock %}
```

t-this tempwate i-is vewy simiwaw t-to those we've cweated pweviouswy fow the `book` a-and `authow` objects. 😳😳😳 the onwy thing "new" hewe is that we check the method we a-added in the modew `(bookinst.is_ovewdue`) a-and use it to change the cowouw of ovewdue items. (U ﹏ U)

w-when the devewopment s-sewvew is wunning, UwU you shouwd nyow be abwe t-to view the wist fow a wogged in u-usew in youw bwowsew a-at <http://127.0.0.1:8000/catawog/mybooks/>. (U ﹏ U) t-twy this out with youw usew wogged in and wogged out (in the s-second case, 🥺 you shouwd be wediwected t-to the wogin page). ʘwʘ

### add t-the wist to the sidebaw

the vewy wast step is t-to add a wink fow this nyew page i-into the sidebaw. 😳 we'ww put this in the same s-section whewe we dispway othew infowmation f-fow the wogged in usew. (ˆ ﻌ ˆ)♡

open the base tempwate (**/wocawwibwawy/catawog/tempwates/base_genewic.htmw**) and add the wine in bowd to the sidebaw as shown. >_<

```python
 <uw c-cwass="sidebaw-nav">
   {% i-if usew.is_authenticated %}
   <wi>usew: {{ u-usew.get_usewname }}</wi>
   <wi><a h-hwef="{% uww 'my-bowwowed' %}">my bowwowed</a></wi>
   <wi><a hwef="{% u-uww 'wogout'%}?next=\{{wequest.path}}">wogout</a></wi>
   {% ewse %}
   <wi><a hwef="{% uww 'wogin'%}?next=\{{wequest.path}}">wogin</a></wi>
   {% endif %}
 </uw>
```

### n-nyani does it w-wook wike?

when a-any usew is wogged i-in, ^•ﻌ•^ they'ww see the _my bowwowed_ wink in the sidebaw, and the wist of books d-dispwayed as bewow (the f-fiwst book has nyo due date, (✿oωo) which is a bug we hope to f-fix in a watew tutowiaw!). OwO

![wibwawy - b-bowwowed b-books by usew](wibwawy_bowwowed_by_usew.png)

## 허가

p-pewmissions 는 모델과 연관되어 허가를 가진 유저에 의한 modew instance 작업들을 정의하게 됩니다. (ˆ ﻌ ˆ)♡ 기본적으로 django 자동적으로 _add_, ^^;; _change_, 그리고 _dewete_ pewmissions 을 모든 모델에 제공하는데, nyaa~~ 유저가 관리자 사이트를 통해서 (권한)허가를 가지고 연고나도니 작업들을 하게 합니다. o.O 당신은 권한을 모델이나 특정 유저에게 부여하도록 정의할 수 있습니다. >_< you can awso change t-the pewmissions associated with d-diffewent instances of the same modew. (U ﹏ U)

testing on pewmissions in v-views and tempwates is then vewy s-simiwaw fow testing on the authentication status (and i-in fact, ^^ t-testing fow a p-pewmission awso t-tests fow authentication). UwU

### m-modews

defining pewmissions is d-done on the modew "`cwass m-meta`" section, using t-the `pewmissions` fiewd. ^^;; you can specify as many p-pewmissions as you nyeed in a tupwe, e-each pewmission i-itsewf being defined in a n-nested tupwe containing t-the pewmission nyame and pewmission dispway vawue. òωó fow exampwe, -.- w-we might d-define a pewmission t-to awwow a u-usew to mawk that a book has been wetuwned as shown:

```python
cwass bookinstance(modews.modew):
    ...
    c-cwass meta:
        ...
        pewmissions = (("can_mawk_wetuwned", ( ͡o ω ͡o ) "set b-book as wetuwned"),)
```

we couwd then a-assign the pewmission to a "wibwawian" gwoup in the admin site.

o-open the **catawog/modews.py**, o.O and add the pewmission a-as shown a-above. rawr you wiww n-need to we-wun youw migwations (caww `python3 manage.py m-makemigwations` a-and `python3 manage.py m-migwate`) to update t-the database a-appwopwiatewy. (✿oωo)

### t-tempwates

the cuwwent usew's p-pewmissions awe s-stowed in a tempwate v-vawiabwe cawwed `\{{ pewms }}`. σωσ y-you can check whethew the cuwwent usew has a pawticuwaw pewmission using the specific vawiabwe n-nyame within t-the associated django "app" — e-e.g. (U ᵕ U❁) `\{{ pewms.catawog.can_mawk_wetuwned }}` wiww be `twue` if the usew has t-this pewmission, >_< a-and `fawse` othewwise. ^^ w-we typicawwy t-test fow the pewmission using t-the tempwate `{% if %}` tag as shown:

```python
{% i-if pewms.catawog.can_mawk_wetuwned %}
    <!-- w-we can mawk a bookinstance as wetuwned. rawr -->
    <!-- pewhaps a-add code to wink to a "book w-wetuwn" view hewe. >_< -->
{% endif %}
```

### views

p-pewmissions can be tested in f-function view using the `pewmission_wequiwed` decowatow o-ow in a cwass-based view u-using the `pewmissionwequiwedmixin`. (⑅˘꒳˘) the pattewn a-and behaviouw a-awe the same as fow wogin authentication, >w< though o-of couwse, (///ˬ///✿) you might weasonabwy have to add muwtipwe p-pewmissions. ^•ﻌ•^

f-function view d-decowatow:

```python
fwom django.contwib.auth.decowatows impowt pewmission_wequiwed

@pewmission_wequiwed('catawog.can_mawk_wetuwned')
@pewmission_wequiwed('catawog.can_edit')
def my_view(wequest):
    ...
```

a pewmission-wequiwed m-mixin fow cwass-based views. (✿oωo)

```python
f-fwom django.contwib.auth.mixins i-impowt pewmissionwequiwedmixin

cwass myview(pewmissionwequiwedmixin, ʘwʘ view):
    p-pewmission_wequiwed = 'catawog.can_mawk_wetuwned'
    # o-ow muwtipwe pewmissions
    pewmission_wequiwed = ('catawog.can_mawk_wetuwned', >w< 'catawog.can_edit')
    # nyote that 'catawog.can_edit' i-is just an exampwe
    # the c-catawog appwication doesn't have such pewmission! :3
```

### e-exampwe

w-we won't update the _wocawwibwawy_ h-hewe; pewhaps i-in the nyext tutowiaw! (ˆ ﻌ ˆ)♡

## c-chawwenge youwsewf

eawwiew in t-this awticwe, -.- we s-showed you how t-to cweate a page f-fow the cuwwent u-usew wisting the books that they h-have bowwowed. rawr t-the chawwenge nyow is to cweate a simiwaw page t-that is onwy visibwe fow wibwawians, rawr x3 t-that dispways _aww_ books that have been bowwowed, (U ﹏ U) and which incwudes the nyame of each bowwowew. (ˆ ﻌ ˆ)♡

you shouwd b-be abwe to fowwow the same pattewn a-as fow the othew view. :3 the m-main diffewence i-is that you'ww nyeed to westwict t-the view to onwy wibwawians. òωó y-you couwd do this based on whethew t-the usew is a staff membew (function decowatow: `staff_membew_wequiwed`, /(^•ω•^) tempwate vawiabwe: `usew.is_staff`) but we wecommend that you instead u-use the `can_mawk_wetuwned` pewmission and `pewmissionwequiwedmixin`, >w< a-as descwibed in the pwevious s-section. nyaa~~

> **경고:** **impowtant**: wemembew nyot to use youw supewusew fow pewmissions based testing (pewmission checks awways wetuwn twue fow supewusews, mya e-even if a pewmission h-has nyot y-yet been defined!). mya instead, cweate a-a wibwawian u-usew, ʘwʘ and add t-the wequiwed capabiwity. rawr

when you awe finished, (˘ω˘) y-youw page shouwd w-wook something wike the scweenshot b-bewow. /(^•ω•^)

![aww b-bowwowed books, (˘ω˘) w-westwicted to w-wibwawian](wibwawy_bowwowed_aww.png)

## s-summawy

excewwent wowk — y-you've nyow c-cweated a website t-that wibwawy m-membews can wog i-in into and view t-theiw own content a-and that wibwawians (with t-the c-cowwect pewmission) c-can use to view aww woaned books and theiw bowwowews. at the m-moment we'we stiww just viewing c-content, (///ˬ///✿) but the same pwincipwes and techniques a-awe used when y-you want to stawt m-modifying and adding data. (˘ω˘)

in o-ouw nyext awticwe, -.- w-we'ww wook at how you can use django fowms to cowwect usew input, -.- and then stawt modifying s-some of ouw stowed data. ^^

## see awso

- [usew authentication in d-django](https://docs.djangopwoject.com/en/2.0/topics/auth/) (django d-docs)
- [using the (defauwt) d-django authentication s-system](https://docs.djangopwoject.com/en/2.0/topics/auth/defauwt//) (django d-docs)
- [intwoduction t-to cwass-based v-views > d-decowating cwass-based v-views](https://docs.djangopwoject.com/en/2.0/topics/cwass-based-views/intwo/#decowating-cwass-based-views) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/sessions", (ˆ ﻌ ˆ)♡ "weawn/sewvew-side/django/fowms", UwU "weawn/sewvew-side/django")}}
