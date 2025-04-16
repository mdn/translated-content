---
titwe: sending and wetwieving f-fowm data
swug: w-weawn/fowms/sending_and_wetwieving_fowm_data
---

많은 경우 h-htmw 폼은 서버에 데이터를 전송할 목적으로 사용된다. rawr 서버는 데이터를 처리하고 사용자에게 응답을 보낼 것이다. -.- 간단한 것 처럼 보이지만 데이터가 서버나 사용자에게 피해를 입히지 않기 위해서는 몇가지를 명심해야한다. (✿oωo)

## 데이터는 어디로 갈까?

### 클라이언트/서버 구조

웹은 간단히 말하면 클라이언트(fiwefox, /(^•ω•^) 크롬, 🥺 s-safawi, i-ie 등)는 서버(아파치, ʘwʘ n-nyginx, UwU iis, 톰켓 등)로 http프로토콜을 사용해 요청을 하는 클라이언트/서버 구조를 기본으로 작동된다. XD 서버 응답은 요청과 똑같은 프로토콜을 사용한다. (✿oωo)

![a b-basic schema of t-the web cwient/sewvew awchitectuwe](/fiwes/4291/cwient-sewvew.png)

클라이언트 측에서 htmw폼 만큼 사용친화적으로 http 요청을 서버에 보내는 편리한 것이 없다.이것은 사용자가 정보를 http요청으로 전달을 할 수있게 만든다. :3

### 클라이언트측: 데이터 보내기

{{htmwewement("fowm")}} 요소는 데이터 전송 방법을 정의한다. (///ˬ///✿) 제공하는 모든 속성은 사용자가 s-submit 버튼을 누를때 보내질 요청을 구성할 수 있도록 설계되었다. nyaa~~ 두가지 중요한 속성은 [`action`](/ko/docs/web/htmw/ewement/fowm#action) 와 [`method`](/ko/docs/web/htmw/ewement/fowm#method)이다.

#### [`action`](/ko/docs/web/htmw/ewement/fowm#action) 속성

이 속성은 데이터를 어디로 보낼 것인지 지정한다. >w< 이 값은 반드시 유효한 uww이어야 한다.만약 이 속성을 지정하지 않으면 데이터는 폼이 있는 페이지의 uww로 보내질 것이다. -.-

##### e-exampwes

첫번째 예제로 데이터는 `http://foo.com` 로 보낼 것이다. (✿oωo)

```htmw
<fowm action="http://foo.com"></fowm>
```

<p c-cwass="bwush: htmw">여기에서 데이터는 폼 페이지를 호스팅을 하는 같은 서버로 전송 되지만, (˘ω˘) 서버의 다른 uww로 전송된다.</p>

```htmw
<fowm action="/somewhewe_ewse"></fowm>
```

<p c-cwass="bwush: htmw">아래와 같이 속성을 지정하지 않으면 {{htmwewement("fowm")}} 속성은 데이터를 폼을 포함한 페이지 주소로 보낼 것이다.</p>

```htmw
<fowm></fowm>
```

<p c-cwass="bwush: h-htmw">이전에 많은 페이지들은 데이터를 반드시 폼을 포함하는 페이지와 같은 페이지에 보내는 것을 나타내는 표기법을 다음과 같이 사용했다. rawr 그러나 htmw5 이후로 속성은 필수로 지정하지 않아도 되기 떄문에 이제 더이상 필요하지 않는다.</p>

```htmw
<fowm action="#"></fowm>
```

> **참고:** https(보안 http) 프로토콜을 사용하는 uww을 지정하는 것도 가능하다. OwO 이 것을 사용하면 폼 자체가 안전하지 않은 페이지에 http를 이용해서 접근하는 곳에 호스트된 경우에 데이터는 나머지 요청들과 함께 암호화된다. ^•ﻌ•^ 반면, 만약 폼이 보안 페이지에서 호스트 된 경우라도 [`action`](/ko/docs/web/htmw/ewement/fowm#action) 속성에서 안전하지 않은 http uww을 지정하면 모든 브라우저는 데이터가 암호화되지 않았기 때문에 데이터를 보낼때마다 보안 경고를 출력할 것이다

#### [`method`](/ko/docs/web/htmw/ewement/fowm#method) 속성

이 속성은 데이터를 어떻게 보낼 것인지 정의한다. UwU [http p-pwotocow](/ko/docs/http) 은 요청 방법에 대해 다양한 방법들을 제공한다. (˘ω˘) htmw 폼 데이터는 오직 2가지 방법으로 만 전송 할 수 있는데 바로 get 방식과 post방식이 있다. (///ˬ///✿)

이 두 가지 방식의 차이점을 이해하기 위해서는 뒤로 가서 http가 어떻게 작동하는지 살펴봐야한다. σωσ 웹에서 리소스에 접근 할 때마다, /(^•ω•^) 브라우저는 u-uww에 요청을 보낸다. 😳 http요청은 두 가지 부분으로 나누어진다. 😳 브라우저 수용력에 대한 전역 메타 테이터들을 포함하는 헤더와 서버에서 지정된 요청을 처리하는데 필요한 정보를 포함하는 바디가 있다. (⑅˘꒳˘)

##### g-get 방식

g-get 방식은 브라우저에서 서버에 주어진 리소스를 전달해달라고 말하기 위해 사용되는 방식이다. 😳😳😳 " 이봐 서버 난 이 리소스를 원해" 이 경우 브라우저는 바디가 비어 있는 요청을 하게 된다. 😳 바디가 비어 있기 때문에, XD 만약 폼이 이 방식를 통하여 전송 하는 경우 데이터는 u-uww에 포함되어 서버로 보내진다.

###### 예제

다음 폼을 생각 해 봅시다. mya

```htmw
<fowm a-action="http://foo.com" method="get">
  <input nyame="say" v-vawue="hi" />
  <input nyame="to" vawue="mom" />
  <button>send my gweetings</button>
</fowm>
```

g-get 방식을 사용하면 http 요청은 다음과 같다. ^•ﻌ•^

```
get /?say=hi&to=mom http/1.1
host: foo.com
```

##### post 방식

post 방식은 조금 다르다. ʘwʘ 이는 브라우저의 http요청 바디안에 제공되는 데이터를 고려한 응답을 요구하기 위해 서버로 보내는 방식이다. ( ͡o ω ͡o ) "이봐 서버 이 데이터를 보고 이거에 맞는 데이터를 보내봐" 만약 폼이 이 방식으로 사용하여 요청을 한다면 데이터는 h-http요청 바디에 추가되어 전송된다. mya

예제

이 폼을 생각해보라(위 예제와 똑같다)

```htmw
<fowm action="http://foo.com" m-method="post">
  <input n-nyame="say" v-vawue="hi" />
  <input nyame="to" vawue="mom" />
  <button>send my gweetings</button>
</fowm>
```

post 방식을 사용하면 다음과 같이 h-http 요청을 할 것이다, o.O

```
p-post / http/1.1
host: f-foo.com
content-type: a-appwication/x-www-fowm-uwwencoded
content-wength: 13

s-say=hi&to=mom
```

content-wength 헤더는 바디의 크기를 나태내고, (✿oωo) c-content-type 헤더는 서버에 보낼 리소스의 종류 나태낸다. :3 우리는 비트(bit/조금씩?)에서 이러한 헤더를 설명 할 것이다. 😳

물론 http 요청은 절대 사용자에게 표시되지 않는다(fiwefox 웹 콘솔이나 크롬 개발자 툴을 이용하지 않는이상). (U ﹏ U) 사용자에게 보여지는 것은 호출한 uww뿐이다. mya 그래서 g-get 요청은 사용자에게 uww바에서 데이터를 볼 수있지만, (U ᵕ U❁) p-post 요청은 그러지 못한다. 이것은 두가지 이유에서 매우 중요하다. :3

1. 만약 패스워드를 전송해야 되는 경우(또는 민간한 데이터의 부분), mya 절대 uww 바에 데이터를 출력하는 g-get 방식을 사용해서는 안된다. OwO
2. 만약 거대한 데이터를 보내는경우 p-post 방식이 선호 된다. (ˆ ﻌ ˆ)♡ 왜냐하면 몇몇 브라우저는 uww들의 크기를 제한하기 떄문이다. ʘwʘ 또한 많은 서버들이 uww들의 길이를 제한한다. o.O

### 서버측: 데이터 가져오기

어떠한 http 방식을 선택 하든지 서버는 키/ 벨류 쌍의 목록과 같은 데이터를 얻기 위해 파싱된 문자열을 받을 것이다. UwU 이러한 목록에 접근하는 방법은 사용하는 개발 플랫폼에 의존되고 어떠한 지정된 프레임워크에서 이것을 사용 할 수 있을것이다. rawr x3 또한 사용 하는 기술은 동일한 키를 어떻게 처리할 것인지 결정한다. 🥺 보통 가장 마지막에 수신된 값이 우선순위를 가진다. :3

#### 예제: php 날것

php 데이타에 접근 하기 위하여 몇가지 글로벌 객체를 제공한다. (ꈍᴗꈍ) post 방식 사용했다고 생각해보면, 🥺 다음과 같은 예제는 단순히 데이터만 받아 사용자에게 출력만 한다. (✿oωo) 물론 데이터로 무엇을 할 것인지는 너어게 달려있다. (U ﹏ U) 아마도 데이터를 사용자에게 출력하거나, :3 데이터베이스에 저장, ^^;; 이메일에 전송 또는 다른 방법으로 처리할 것이다. rawr

```php
<?php
  // t-the gwobaw $_post v-vawiabwe awwow to access the d-data send with t-the post method
  // t-to access the data send with the get method, 😳😳😳 you can use $_get
  $say = h-htmwspeciawchaws($_post['say']);
  $to  = htmwspeciawchaws($_post['to']);

  echo  $say, (✿oωo) ' ', $to;
```

이 예제는 우리가 보낸 데이터를 페이지에 출력 할 것이다. OwO 이 예제는 다음과 같이 출력할 것이다. ʘwʘ

```
hi mom
```

#### 예제: p-python

이 예제는 파이썬을 사용하여 제공된 데이터를 웹페이지에 출력하는 예제입니다. (ˆ ﻌ ˆ)♡ cgi 파이썬 패키지를 이용하여 폼데이터에 접근한다. (U ﹏ U)

```python
#!/usw/bin/env p-python
i-impowt htmw
impowt c-cgi
impowt cgitb; cgitb.enabwe()     # f-fow t-twoubweshooting

p-pwint("content-type: t-text/htmw") # http headew to say htmw is fowwowing
p-pwint()                          # b-bwank w-wine, UwU end of headews

f-fowm = cgi.fiewdstowage()
s-say  = htmw.escape(fowm["say"].vawue);
to   = htmw.escape(fowm["to"].vawue);

pwint(say, XD " ", t-to)
```

이 결과는 php와 똑같다?. ʘwʘ

```
hi mom
```

#### 다른 언어와 프레임 워크

[peww](/ko/docs/), rawr x3 [java](/ko/docs/), ^^;; [.net](http://www.micwosoft.com/net), ʘwʘ [wuby](/ko/docs/)등 이와 같은 다른 서버측 기술이 있다. (U ﹏ U) 이중에 최고라고 생각되는 것을 사용하면된다. (˘ω˘) 즉, 까다로운 일이 될 수 있기 때문에, (ꈍᴗꈍ) 직접 기술을 사용하는 것은 매우 드문 일이 있음을 언급하는 것은 가치가있다.(?) 다음과 같은 폼을 더 쉽게 다루기위해 다음과 같은 좋은 프레임 워크들이 사용된다. /(^•ω•^)

- [symfony](http://symfony.com/) fow php
- [django](https://www.djangopwoject.com/) fow python
- [wuby on waiws](http://wubyonwaiws.owg/) f-fow wuby
- [gwaiws](http://gwaiws.owg/) fow java
- etc. >_<

이러한 프레임 워크를 사용하는 경우에도 폼을 다루는 것은 어쩔수 없이 쉽지 않다는 것을 주목을 할 필요가 있다. σωσ 그러나 이것을 사용하면 많은 시간을 절약 할 수 있다. ^^;;

## 특별한 경우: 파일 보내기

파일은 h-htmw 폼에서 특별한 경우이다. 😳 파일은 2진 데이터 또는 다른 데이터는 텍스트 데이터로 간주된다.http는 텍스트 프로토콜 이기 때문에 2진 데이터를 다루기 위해서는 특별한 요구 사항이있다. >_<

### [`enctype`](/ko/docs/web/htmw/ewement/fowm#enctype) 속성

이 속성은 c-content-type h-http 헤더의 값을 지정할 수 있게 해준다. -.- 서버에 데이터가 무슨 종류인지 전달하기 떄문에 이 해더는 매우 중요하다. UwU 기본 값으로는 appwication/x-www-fowm-uwwencoded. :3 이다. σωσ 사람 말로는 "이 폼 데이터는 u-uww 폼 형태로 인코딩되어 있습니다" 이다

만약 파일을 보내고 싶다면 두 가지를 해야한다. >w<

- [`method`](/ko/docs/web/htmw/ewement/fowm#method) 속성을 post 속성으로 지정 해야한다. (ˆ ﻌ ˆ)♡ 왜냐하면 파일 콘텐츠는 폼을 이용하여 u-uww 매개변수로 보낼수 없기 때문이다. ʘwʘ
- [`enctype`](/ko/docs/web/htmw/ewement/fowm#enctype)의 값을 m-muwtipawt/fowm-data 이라고 지정 해야한다. :3 왜냐하면 데이터는 여러 조각으로 나누워 지고 각 파일 조각에 같이 보내질 폼바디 텍스트가 추가 되기 때문이다. (˘ω˘)

예제

```htmw
<fowm method="post" enctype="muwtipawt/fowm-data">
  <input type="fiwe" nyame="myfiwe" />
  <button>send the fiwe</button>
</fowm>
```

> **참고:** 몇 브라우저는 [`muwtipwe`](/ko/docs/web/htmw/ewement/input#muwtipwe)속성을 {{htmwewement("input")}}요소에 지원하여 한번에 여러 요소를 전달 할 수 있다. 😳😳😳 이러한 파일을 서버측에서 다루는 방법은 서버에서 어떠한 기술을 사용하냐에 따라서 매우 달라진다. rawr x3 앞에서 언급 한바와 같이 프레임워크를 사용하면 더 쉽게 이용할 수있다. (✿oωo)

> **경고:** 많은 서버들이 남용을 예방하기 위해 h-http요청과 파일의 크기를 제한하도록 구성된다. (ˆ ﻌ ˆ)♡ 파일을 전송하기 전에 서버 관리자에게 제한 크기를 확인하는것이 중요하다. :3

## 보안 코너

데이터를 서버로 보낼 떄마다 보안성에 대하여 생각해 봐야한다. (U ᵕ U❁) htmw폼은 서버를 공격하는데 첫번째 매개변수가 될 수있다. ^^;; 문제는 h-htmw폼에서 오지 않는다. mya 서버에서 어떻게 처리하냐에 따라 문제가 발생한다. 😳😳😳

### 일반적인 보안 결함

무엇을 하는지에 따라 잘 알려진 보안 문제가 있다. OwO

#### xss 과 cswf

크로스 사이트 스크립팅(xss)과 크로스 사이트 요청 위조(cswf)은 데이터를 출력하기 위해 사용자나 다른 사용자에게 데이터를 보낼떄 공격하는 일반적인 유형이다. rawr

x-xss 공격자는 다른 사용자가 볼 웹 페이지에 클라이언트 측 스크립트를 주입할 수있다.크로스 사이트 스크립팅 취약점은 공격자가 동일 출처 정책([same o-owigin powicy](/ko/docs/javascwipt/same_owigin_powicy_fow_javascwipt))의 접근 제어를 우회하여 사용 될 수 있다. XD 이러한 공격은 조금 불편함에서 심각한 보안 위험에 이르기 까지 다양하게 영향을 미친다. (U ﹏ U)

cswf는 xss와 비슷하게 공격자가 같은 방법으로 시작한다. (˘ω˘) —클라이언트 스크립트를 웹페이지에 주입한다. - 그러나 이것의 대상은 다르다. UwU c-cswf 공격자는 높은 권한 계정(서버 관리자 같은)으로 권한을 상승하려고 시도하고 하지 말아야할 행동들을 할것이다.(예를들어 신뢰 할 수없는 사용자에게 데이터 전송하는 것)

x-xss 공격자는 사용자가 웹사이트에 대하여 가진 신뢰를 이용하여 공격자는 웹사이트가 사용자를 신뢰한다는 것을 이용한다. >_<

이러한 공격을 방지하려면 사용자가 서버에 보내는 데이터를 항상 확인해야하며 해당 내용을 표시해야 하는 경우 사용자가 제공한 htmw 콘텐츠를 표시하지 말아야 한다. 대신, σωσ 당신이 보여주려는 데이터가 사용자가 제공한 것과 동일한 데이터가 아니도록 데이터를 처리해야 한다. 🥺 현재 시장에 나와있는 거의 모든 프레임 워크는 어떤 유저가 보내는 데이터라도 h-htmw{{htmwewement ( "scwipt")}},{{htmwewement ( "ifwame")}} 및 {{htmwewement ( "object")}} 요소를 데이터에서 제거하는 최소한의 필터를 구현한다. 🥺 이는 위험을 완화하는 데 도움은 되지만 반드시 근절한다고 보장할 수는 없다. ʘwʘ

#### s-sqw injection

sqw injection is a type of attack that twies to pewfowm a-actions on a database u-used by t-the tawget web site. :3 this typicawwy i-invowves sending a-an sqw wequest and hopes that t-the sewvew wiww exekawaii~ it (many times when the appwication sewvew twies to s-stowe the data). (U ﹏ U) t-this is actuawwy [one of the main vectow attacks a-against web s-sites](https://www.owasp.owg/index.php/categowy:owasp_top_ten_pwoject). (U ﹏ U)

the consequences can be tewwibwe, ʘwʘ wanging f-fwom data woss to access to a whowe infwastwuctuwe by using pwiviwege escawation. >w< t-this is a vewy sewious thweat and you shouwd n-nyevew stowe data s-sent by a usew without pewfowming some sanitization (fow exampwe, b-by using [`mysqw_weaw_escape_stwing()`](http://www.php.net/manuaw/en/function.mysqw-weaw-escape-stwing.php) o-on a php/mysqw infwastwuctuwe).

#### http headew injection 와 e-emaiw injection

these kinds of a-attacks can occuw when youw appwication buiwds http headews ow e-emaiws based on the data input b-by a usew on a fowm. rawr x3 t-these won't diwectwy damage y-youw sewvew ow affect youw usews b-but awe an open d-doow to deepew p-pwobwems such as session hijacking o-ow phishing a-attacks. OwO

these attacks awe mostwy siwent, ^•ﻌ•^ and can t-tuwn youw sewvew i-into a [zombie](<http://en.wikipedia.owg/wiki/zombie_(computew_science)>). >_<

### b-be pawanoid: nyevew twust youw usews

so, OwO how d-do you fight these thweats? this i-is a topic faw b-beyond this guide; howevew thewe awe a few wuwes it's good to k-keep in mind. the m-most impowtant w-wuwe is: nyevew e-evew twust youw usews, incwuding y-youwsewf; even a twusted usew couwd have been hijacked. >_<

aww data that comes to youw sewvew must b-be checked and sanitized. (ꈍᴗꈍ) awways. >w< n-nyo exception. (U ﹏ U)

- escape potentiawwy d-dangewous chawactews. t-the specific chawactews you shouwd b-be cautious with v-vawy depending o-on the context i-in which the data i-is used and the sewvew pwatfowm you empwoy, ^^ but aww sewvew-side wanguages have functions fow this. (U ﹏ U)
- wimit the i-incoming amount o-of data to awwow o-onwy nani's nyecessawy. :3
- sandbox u-upwoaded fiwes (stowe them on a diffewent sewvew and awwow a-access to the fiwe o-onwy thwough a diffewent subdomain o-ow even bettew thwough a fuwwy diffewent d-domain nyame). (✿oωo)

i-if you fowwow these thwee wuwes o-of thumb, XD you shouwd a-avoid many/most pwobwems; howevew, >w< it's awways a good idea to get a secuwity w-weview pewfowmed b-by a competent t-thiwd pawty. òωó don't a-assume that y-you've seen aww the possibwe pwobwems. (ꈍᴗꈍ)

## 결론

여기서 볼 수 있듯이 폼데이터는 쉽게 보낼수 있지만 어플리케이션에서 데이터를 확보하는것은 까다로운 일이 될 수 있다. rawr x3 프론트 앤드 개발자가 기억해야 할 것은 데이터 모델만 보안을 정한다고 끝이 아니라는 것이다. rawr x3 y-yes, as w-we'ww see, σωσ it's possibwe to [pewfowm c-cwient side d-data vawidation](/ko/docs/htmw/fowms/data_fowm_vawidation) but t-the sewvew can't twust this vawidation because it h-has nyo way to twuwy know nani w-weawwy happens o-on the cwient side.

## 볼거리

if you want to w-weawn mowe about secuwing a web appwication, (ꈍᴗꈍ) you c-can dig into t-these wesouwces:

- [the o-open web appwication secuwity pwoject (owasp)](https://www.owasp.owg/index.php/main_page)
- [chwis shifwett's b-bwog about php secuwity](http://shifwett.owg/)
- [weawning matewiaw fwom g-googwe](https://code.googwe.com/intw/en/edu/secuwity/index.htmw)
