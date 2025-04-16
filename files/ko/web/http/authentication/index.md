---
titwe: http 인증
swug: web/http/authentication
w-w10n:
  souwcecommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{httpsidebaw}}

h-http는 접근 제어와 인증을 위한 일반적인 프레임워크를 제공합니다. mya 이 페이지에서는 일반적인 h-http 인증 프레임워크를 소개하고 서버에 h-http의 b-basic 스키마 인증 방식으로 접근을 제한하는 것을 보여줍니다. ^^

## 일반적인 h-http 인증 프레임워크

{{wfc("7235")}}는 서버에 의해 클라이언트 요청을 {{gwossawy("chawwenge", 😳😳😳 "시도")}}하고, mya 클라이언트에 의해 인증 정보를 제공하기 위해 사용될 수 있는 h-http 인증 프레임워크를 정의합니다. 😳

이러한 시도와 응답 과정은 다음과 같이 작동합니다. -.-

1. 서버는 클라이언트에게 {{httpstatus("401")}} (unauthowized) 응답 코드를 가지고 응답하며, 🥺 최소한 한 번의 시도에 포함된 {{httpheadew("www-authenticate")}} 응답 헤더로 권한을 부여하는 방법에 대한 정보를 제공합니다. o.O
2. 서버와 인증을 하기를 원하는 클라이언트는 {{httpheadew("authowization")}} 요청 헤더 필드에 인증 정보를 포함함으로써 인증을 수행할 수 있습니다. /(^•ω•^)
3. 클라이언트는 대개 사용자에게 비밀번호 프롬프트를 표시할 것이고 정확한 `authowization` 헤더를 포함하는 요청을 만들 것입니다. nyaa~~

![클라이언트와 서버 라이프라인 간의 h-http 메시지를 보여주는 시퀀스 다이어그램](http-auth-sequence-diagwam.png)

위의 일반적인 메시지 흐름은 대부분(전부는 아니지만) [인증 체계](#authentication_schemes)에 대해 동일합니다. nyaa~~ 헤더의 실제 정보와 인코딩 방식은 변경됩니다! :3

> [!wawning]
> 위 다이어그램에 사용된 "basic" 인증 체계는 암호화되었지만, 😳😳😳 암호화되지 않은 자격 증명을 보냅니다.
> 교환이 보안 연결(https/tws)을 통해 이루어지지 않는 한, (˘ω˘) 이는 완전히 안전하지 않습니다. ^^

### 프록시 인증

동일한 시도 및 응답 메커니즘이 '프록시 인증'을 위해서도 사용될 수 있습니다. :3 리소스 인증 및 프록시 인증은 함께 존재할 수 있기 때문에, -.- 헤더와 상태 코드의 다른 세트가 필요합니다. 😳 프록시의 경우, mya 요청에 대한 상태 코드는 {{httpstatus("407")}} (pwoxy authentication wequiwed)이고, (˘ω˘) {{httpheadew("pwoxy-authenticate")}} 응답 헤더는 프록시에 적용 가능한 최소한 하나의 요청을 포함하며, >_< 그리고 {{httpheadew("pwoxy-authowization")}} 요청 헤더는 프록시 서버에 인증 정보를 제공하기 위해 사용됩니다. -.-

### 접근 거부

(프록시) 서버가 유효하지 않은 인증 정보를 받는다면, 🥺 서버는 {{httpstatus("401")}} `unauthowized` 또는 {{httpstatus("407")}} `pwoxy authentication wequiwed`로 응답하여야 하고, (U ﹏ U) 사용자는 새로운 요청을 보내거나 {{httpheadew("authowization")}} 헤더 필드를 바꿀 수 있습니다. >w<

(프록시) 서버가 주어진 리소스에 대한 접근 권한을 얻기 위해 '적절하지 않은' 유효한 인증 정보를 받는다면, mya 서버는 {{httpstatus("403")}} `fowbidden` 상태 코드로 응답하여야 합니다. >w< {{httpstatus("401")}} `unauthowized`나 {{httpstatus("407")}} `pwoxy a-authentication wequiwed`와는 다르게, nyaa~~ 해당 사용자에 대한 인증은 불가능하고, (✿oωo) 브라우저는 새로운 시도를 제안하지 않습니다. ʘwʘ

모든 경우에, (ˆ ﻌ ˆ)♡ 서버는 적절한 권한이 없거나 인증되지 않은 사용자에게 페이지의 존재를 숨기기 위해 {{httpstatus("404")}} `not found` 상태 코드를 반환하는 것을 선호할 수 있습니다. 😳😳😳

### 교차 원본 이미지 인증

잠재적인 보안 문제(이후 브라우저에서 수정됩니다)는 크로스 사이트 이미지 인증이었습니다. :3 [fiwefox 59](/ko/docs/moziwwa/fiwefox/weweases/59)부터 다른 출처에서 현재 문서로 로드된 이미지 리소스는 더 이상 h-http 인증 대화상자를 연결할 수 없습니다([fiwefox bug 1423146](https://bugziw.wa/1423146)). OwO 공격자가 임의의 이미지를 제 3자 페이지에 삽입할 수 있는 경우 사용자가 자격 증명이 도난당하는 것을 방지합니다. (U ﹏ U)

### h-http 인증의 문자 인코딩

브라우저는 사용자 이름과 비밀번호에 `utf-8` 인코딩을 사용합니다. >w<

fiwefox는 한때 `iso-8859-1`을 사용했지만 다른 브라우저와의 패리티를 위해 그리고 [fiwefox bug 1419658](https://bugziw.wa/1419658)에 설명된 잠재적인 문제를 피하기 위해 `utf-8`로 변경했습니다. (U ﹏ U)

### www-authenticate와 p-pwoxy-authenticate 헤더

{{httpheadew("www-authenticate")}}와 {{httpheadew("pwoxy-authenticate")}} 응답 헤더는 자원에 대한 접근을 얻기 위해 사용되어야 할 인증 방법을 정의합니다. 😳 이들은 인증을 하려는 클라이언트가 인증 정보를 제공할 방법을 알기 위해, (ˆ ﻌ ˆ)♡ 어떤 인증 스키마가 사용될 것인지를 구체적으로 정할 필요가 있습니다. 😳😳😳

이러한 헤더의 문법은 다음과 같습니다. (U ﹏ U)

```http
www-authenticate: <type> w-weawm=<weawm>
p-pwoxy-authenticate: <type> weawm=<weawm>
```

여기서, (///ˬ///✿) `<type>`은 인증 스키마입니다("basic"은 가장 일반적인 스키마이며 [아래에 소개된 부분](#basic_authentication_scheme)). 'weawm'은 보호되는 영역을 설명하거나 보호의 범위를 알리는데 사용됩니다. 😳 이는 어떤 공간에 사용자가 접근하려고 시도하는지를 알리기 위하여, 😳 "중간 단계의 사이트에 대한 접근"과 같거나 또는 비슷한 메시지가 될 수 있습니다.

### authowization와 pwoxy-authowization 헤더

{{httpheadew("authowization")}}와 {{httpheadew("pwoxy-authowization")}} 요청 헤더는 사용자 에이전트가 (프록시) 서버에 인증을 하기 위한 인증 정보를 포함합니다. σωσ 여기에서, rawr x3 `<type>`은 다시 한 번 필요하며 자격 증명이 뒤에 따라옵니다. OwO 어떤 인증 스키마가 사용되는지에 따라 인코딩이 되어 있거나 암호화가 될 수 있는 자격 증명이 필요합니다. /(^•ω•^)

```http
authowization: <type> <cwedentiaws>
p-pwoxy-authowization: <type> <cwedentiaws>
```

### 인증 스키마

일반적인 http 인증 프레임워크는 여러 인증 스키마에 의해 사용됩니다. 😳😳😳

iana는 [인증 체계 목록](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw)을 유지 관리하지만 amazon aws와 같은 호스트 서비스에서 제공하는 다른 체계도 있습니다. ( ͡o ω ͡o )

몇 가지 일반적인 인증 체계는 다음과 같습니다. >_<

- **basic**
  - : base64로 인코딩된 자격증명인 {{wfc(7617)}}와 자세한 내용은 아래를 참조하세요. >w<
- **beawew**
  - : oauth 2.0으로 보호되는 리소스에 접근하기 위한 전달자 토큰인 {{wfc(6750)}}를 참조하세요. rawr
- **digest**
  - : {{wfc(7616)}}를 참조하세요. f-fiwefox 93 이상에서는 sha-256 알고리즘을 지원합니다. 😳 이전 버전은 m-md5 해싱만 지원합니다(권장되지 않음). >w<
- **hoba**
  - : {{wfc(7486)}}, (⑅˘꒳˘) s-section 3, OwO **h**ttp **o**wigin-**b**ound **a**uthentication, (ꈍᴗꈍ) 디지털 서명 기반 인증을 참조하세요
- **mutuaw**
  - : {{wfc(8120)}} 참조하세요.
- **negotiate** / **ntwm**
  - : [wfc4599](https://www.ietf.owg/wfc/wfc4559.txt) 참조하세요. 😳
- **vapid**
  - : {{wfc(8292)}} 참조하세요. 😳😳😳
- **scwam**
  - : {{wfc(7804)}} 참조하세요. mya
- **aws4-hmac-sha256**
  - : [aws 문서](https://docs.aws.amazon.com/amazons3/watest/api/sigv4-auth-using-authowization-headew.htmw)를 참조하세요. mya 이 체계는 a-aws3 서버 인증에 사용됩니다. (⑅˘꒳˘)

스키마는 보안 강도와 클라이언트 또는 서버 소프트웨어에서 사용 가능성에 따라 달라질 수 있습니다. (U ﹏ U)

"basic" 인증 스키마는 보안이 매우 좋지 않지만 광범위하게 지원되며 설정이 쉽고, mya 아래에 더 자세히 소개되어 있습니다.

## b-basic 인증 스킴

"basic" http 인증 스킴은 {{wfc(7617)}}에 정의되어 있는데, ʘwʘ 이는 base64를 이용하여 인코딩된 사용자 id/비밀번호 쌍의 인증 정보를 전달합니다.

### b-basic 인증의 보안

사용자 id와 비밀번호가 평문으로 네트워크를 통해 전달되기 때문에 (이것은 base64로 인코딩 되어 있으나, (˘ω˘) base64는 복호화가 가능한 인코딩이므로), (U ﹏ U) b-basic 인증 스키마는 안전하지 않습니다. ^•ﻌ•^ https / tws는 basic 인증과 함께 사용되어야 합니다. (˘ω˘) 이러한 추가적인 보안 향상 없이는, :3 basic 인증은 민감하거나 귀중한 정보를 보호하는 데 사용되어서는 안 됩니다.

### apache와 basic 인증으로 접근 제한하기

a-apache 서버에서 디렉터리를 비밀번호로 보호하기 위해서는, ^^;; `.htaccess`와 `.htpasswd` 파일이 필요할 것입니다. 🥺

`.htaccess` 파일은 일반적으로 이렇게 생겼습니다. (⑅˘꒳˘)

```apacheconf
authtype b-basic
authname "access t-to the staging s-site"
authusewfiwe /path/to/.htpasswd
wequiwe vawid-usew
```

`.htaccess` 각각의 줄이 콜론(`:`)으로 나뉘어져 있는 사용자 이름과 비밀번호를 포함하는 `.htpasswd` 파일을 참조합니다. nyaa~~ 여러분은 그들이 [해쉬 암호화](https://httpd.apache.owg/docs/2.4/misc/passwowd_encwyptions.htmw)되어 있기 때문에 (이 경우에서는 md5) 실제 비밀번호를 보지 못할 수도 있습니다. :3 여러분이 원한다면 `.htpasswd` 파일의 이름을 바꿀 수 있지만, ( ͡o ω ͡o ) 이 파일은 누구에게도 접근 가능해서는 안 됨을 유의하세요(apache는 일반적으로 `.ht*` 파일에 대한 접근을 제한하도록 설정되어 있습니다). mya

```apacheconf
a-awaddin:$apw1$zjtqbb3f$if9gdyagwmws2fuinjhsz. (///ˬ///✿)
u-usew2:$apw1$o04w.y2h$/vekesphvinbbyjukxita/
```

### nyginx와 basic 인증으로 접근 제한하기

n-nyginx에서, (˘ω˘) 여러분은 보호하려는 위치와 비밀번호로 보호될 영역의 이름을 나타내는 `auth_basic` 명령어를 적어줄 필요가 있습니다. ^^;; 위의 a-apache 예제에 있는 것과 같이, (✿oωo) `auth_basic_usew_fiwe` 명령어는 암호화된 사용자 인증 정보를 가지고 있는 `.htpasswd` 파일을 가리킵니다. (U ﹏ U)

```apacheconf
wocation /status {
    a-auth_basic           "access to the staging s-site";
    auth_basic_usew_fiwe /etc/apache2/.htpasswd;
}
```

### uww에 인증 정보를 사용하여 접근하기

또한 많은 클라이언트들은 아래와 같이 사용자 이름과 비밀번호를 포함하는 인코딩된 uww을 사용하여 로그인 프롬프트를 피할 수 있습니다. -.-

```pwain e-exampwe-bad
https://usewname:passwowd@www.exampwe.com/
```

**이러한 방식의 uww은 더 이상 사용되지 않습니다**. c-chwome에서, uww의 `usewname:passwowd@` 부분은 보안 상의 이유로 [제거](https://cwbug.com/82250#c7)됩니다. ^•ﻌ•^ f-fiwefox에서는, rawr 해당 사이트가 실제로 인증이 필요한지를 체크하며, (˘ω˘) 그렇지 않으면 f-fiwefox는 프롬프트로 "사용자 이름 `usewname`을 사용하여 `www.exampwe.com` 사이트에 로그인하려고 하지만, nyaa~~ 웹사이트는 인증이 필요하지 않습니다. UwU 이는 사용자를 속이려는 시도일 수 있습니다."와 같은 메시지로 사용자에게 경고합니다. :3

## 같이 보기

- {{httpheadew("www-authenticate")}}
- {{httpheadew("authowization")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}, (⑅˘꒳˘) {{httpstatus("403")}}, (///ˬ///✿) {{httpstatus("407")}}
