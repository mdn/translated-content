---
title: HTTP 인증
slug: Web/HTTP/Authentication
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{HTTPSidebar}}

HTTP는 접근 제어와 인증을 위한 일반적인 프레임워크를 제공합니다. 이 페이지에서는 일반적인 HTTP 인증 프레임워크를 소개하고 서버에 HTTP의 Basic 스키마 인증 방식으로 접근을 제한하는 것을 보여줍니다.

## 일반적인 HTTP 인증 프레임워크

{{RFC("7235")}}는 서버에 의해 클라이언트 요청을 {{glossary("challenge", "시도")}}하고, 클라이언트에 의해 인증 정보를 제공하기 위해 사용될 수 있는 HTTP 인증 프레임워크를 정의합니다.

이러한 시도와 응답 과정은 다음과 같이 작동합니다.

1. 서버는 클라이언트에게 {{HTTPStatus("401")}} (Unauthorized) 응답 코드를 가지고 응답하며, 최소한 한 번의 시도에 포함된 {{HTTPHeader("WWW-Authenticate")}} 응답 헤더로 권한을 부여하는 방법에 대한 정보를 제공합니다.
2. 서버와 인증을 하기를 원하는 클라이언트는 {{HTTPHeader("Authorization")}} 요청 헤더 필드에 인증 정보를 포함함으로써 인증을 수행할 수 있습니다.
3. 클라이언트는 대개 사용자에게 비밀번호 프롬프트를 표시할 것이고 정확한 `Authorization` 헤더를 포함하는 요청을 만들 것입니다.

![클라이언트와 서버 라이프라인 간의 HTTP 메시지를 보여주는 시퀀스 다이어그램](http-auth-sequence-diagram.png)

위의 일반적인 메시지 흐름은 대부분(전부는 아니지만) [인증 체계](#authentication_schemes)에 대해 동일합니다. 헤더의 실제 정보와 인코딩 방식은 변경됩니다!

> **경고:** 위 다이어그램에 사용된 "Basic" 인증 체계는 암호화되었지만, 암호화되지 않은 자격 증명을 보냅니다.
> 교환이 보안 연결(HTTPS/TLS)을 통해 이루어지지 않는 한, 이는 완전히 안전하지 않습니다.

### 프록시 인증

동일한 시도 및 응답 메커니즘이 '프록시 인증'을 위해서도 사용될 수 있습니다. 리소스 인증 및 프록시 인증은 함께 존재할 수 있기 때문에, 헤더와 상태 코드의 다른 세트가 필요합니다. 프록시의 경우, 요청에 대한 상태 코드는 {{HTTPStatus("407")}} (Proxy Authentication Required)이고, {{HTTPHeader("Proxy-Authenticate")}} 응답 헤더는 프록시에 적용 가능한 최소한 하나의 요청을 포함하며, 그리고 {{HTTPHeader("Proxy-Authorization")}} 요청 헤더는 프록시 서버에 인증 정보를 제공하기 위해 사용됩니다.

### 접근 거부

(프록시) 서버가 유효하지 않은 인증 정보를 받는다면, 서버는 {{HTTPStatus("401")}} `Unauthorized` 또는 {{HTTPStatus("407")}} `Proxy Authentication Required`로 응답하여야 하고, 사용자는 새로운 요청을 보내거나 {{HTTPHeader("Authorization")}} 헤더 필드를 바꿀 수 있습니다.

(프록시) 서버가 주어진 리소스에 대한 접근 권한을 얻기 위해 '적절하지 않은' 유효한 인증 정보를 받는다면, 서버는 {{HTTPStatus("403")}} `Forbidden` 상태 코드로 응답하여야 합니다. {{HTTPStatus("401")}} `Unauthorized`나 {{HTTPStatus("407")}} `Proxy Authentication Required`와는 다르게, 해당 사용자에 대한 인증은 불가능하고, 브라우저는 새로운 시도를 제안하지 않습니다.

모든 경우에, 서버는 적절한 권한이 없거나 인증되지 않은 사용자에게 페이지의 존재를 숨기기 위해 {{HTTPStatus("404")}} `Not Found` 상태 코드를 반환하는 것을 선호할 수 있습니다.

### 교차 원본 이미지 인증

잠재적인 보안 문제(이후 브라우저에서 수정됩니다)는 크로스 사이트 이미지 인증이었습니다. [Firefox 59](/en-US/docs/Mozilla/Firefox/Releases/59)부터 다른 출처에서 현재 문서로 로드된 이미지 리소스는 더 이상 HTTP 인증 대화상자를 연결할 수 없습니다([Firefox bug 1423146](https://bugzil.la/1423146)). 공격자가 임의의 이미지를 제 3자 페이지에 삽입할 수 있는 경우 사용자가 자격 증명이 도난당하는 것을 방지합니다.

### HTTP 인증의 문자 인코딩

브라우저는 사용자 이름과 비밀번호에 `utf-8` 인코딩을 사용합니다.

Firefox는 한때 `ISO-8859-1`을 사용했지만 다른 브라우저와의 패리티를 위해 그리고 [Firefox bug 1419658](https://bugzil.la/1419658)에 설명된 잠재적인 문제를 피하기 위해 `utf-8`로 변경했습니다.

### WWW-Authenticate와 Proxy-Authenticate 헤더

{{HTTPHeader("WWW-Authenticate")}}와 {{HTTPHeader("Proxy-Authenticate")}} 응답 헤더는 자원에 대한 접근을 얻기 위해 사용되어야 할 인증 방법을 정의합니다. 이들은 인증을 하려는 클라이언트가 인증 정보를 제공할 방법을 알기 위해, 어떤 인증 스키마가 사용될 것인지를 구체적으로 정할 필요가 있습니다.

이러한 헤더의 문법은 다음과 같습니다.

```http
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

여기서, `<type>`은 인증 스키마입니다("Basic"은 가장 일반적인 스키마이며 [아래에 소개된 부분](#basic_authentication_scheme)). 'realm'은 보호되는 영역을 설명하거나 보호의 범위를 알리는데 사용됩니다. 이는 어떤 공간에 사용자가 접근하려고 시도하는지를 알리기 위하여, "중간 단계의 사이트에 대한 접근"과 같거나 또는 비슷한 메시지가 될 수 있습니다.

### Authorization와 Proxy-Authorization 헤더

{{HTTPHeader("Authorization")}}와 {{HTTPHeader("Proxy-Authorization")}} 요청 헤더는 사용자 에이전트가 (프록시) 서버에 인증을 하기 위한 인증 정보를 포함합니다. 여기에서, `<type>`은 다시 한 번 필요하며 자격 증명이 뒤에 따라옵니다. 어떤 인증 스키마가 사용되는지에 따라 인코딩이 되어 있거나 암호화가 될 수 있는 자격 증명이 필요합니다.

```http
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

### 인증 스키마

일반적인 HTTP 인증 프레임워크는 여러 인증 스키마에 의해 사용됩니다.

IANA는 [인증 체계 목록](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)을 유지 관리하지만 Amazon AWS와 같은 호스트 서비스에서 제공하는 다른 체계도 있습니다.

몇 가지 일반적인 인증 체계는 다음과 같습니다.

- **Basic**
  - : base64로 인코딩된 자격증명인 {{rfc(7617)}}와 자세한 내용은 아래를 참조하세요.
- **Bearer**
  - : OAuth 2.0으로 보호되는 리소스에 접근하기 위한 전달자 토큰인 {{rfc(6750)}}를 참조하세요.
- **Digest**
  - : {{rfc(7616)}}를 참조하세요. Firefox 93 이상에서는 SHA-256 알고리즘을 지원합니다. 이전 버전은 MD5 해싱만 지원합니다(권장되지 않음).
- **HOBA**
  - : {{rfc(7486)}}, Section 3, **H**TTP **O**rigin-**B**ound **A**uthentication, 디지털 서명 기반 인증을 참조하세요
- **Mutual**
  - : {{rfc(8120)}} 참조하세요.
- **Negotiate** / **NTLM**
  - : [RFC4599](https://www.ietf.org/rfc/rfc4559.txt) 참조하세요.
- **VAPID**
  - : {{rfc(8292)}} 참조하세요.
- **SCRAM**
  - : {{rfc(7804)}} 참조하세요.
- **AWS4-HMAC-SHA256**
  - : [AWS 문서](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html)를 참조하세요. 이 체계는 AWS3 서버 인증에 사용됩니다.

스키마는 보안 강도와 클라이언트 또는 서버 소프트웨어에서 사용 가능성에 따라 달라질 수 있습니다.

"Basic" 인증 스키마는 보안이 매우 좋지 않지만 광범위하게 지원되며 설정이 쉽고, 아래에 더 자세히 소개되어 있습니다.

## Basic 인증 스킴

"Basic" HTTP 인증 스킴은 {{rfc(7617)}}에 정의되어 있는데, 이는 base64를 이용하여 인코딩된 사용자 ID/비밀번호 쌍의 인증 정보를 전달합니다.

### Basic 인증의 보안

사용자 ID와 비밀번호가 평문으로 네트워크를 통해 전달되기 때문에 (이것은 base64로 인코딩 되어 있으나, base64는 복호화가 가능한 인코딩이므로), Basic 인증 스키마는 안전하지 않습니다. HTTPS / TLS는 basic 인증과 함께 사용되어야 합니다. 이러한 추가적인 보안 향상 없이는, basic 인증은 민감하거나 귀중한 정보를 보호하는 데 사용되어서는 안 됩니다.

### Apache와 Basic 인증으로 접근 제한하기

Apache 서버에서 디렉터리를 비밀번호로 보호하기 위해서는, `.htaccess`와 `.htpasswd` 파일이 필요할 것입니다.

`.htaccess` 파일은 일반적으로 이렇게 생겼습니다.

```apacheconf
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

`.htaccess` 각각의 줄이 콜론(`:`)으로 나뉘어져 있는 사용자 이름과 비밀번호를 포함하는 `.htpasswd` 파일을 참조합니다. 여러분은 그들이 [해쉬 암호화](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html)되어 있기 때문에 (이 경우에서는 md5) 실제 비밀번호를 보지 못할 수도 있습니다. 여러분이 원한다면 `.htpasswd` 파일의 이름을 바꿀 수 있지만, 이 파일은 누구에게도 접근 가능해서는 안 됨을 유의하세요(Apache는 일반적으로 `.ht*` 파일에 대한 접근을 제한하도록 설정되어 있습니다).

```apacheconf
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Nginx와 Basic 인증으로 접근 제한하기

Nginx에서, 여러분은 보호하려는 위치와 비밀번호로 보호될 영역의 이름을 나타내는 `auth_basic` 명령어를 적어줄 필요가 있습니다. 위의 Apache 예제에 있는 것과 같이, `auth_basic_user_file` 명령어는 암호화된 사용자 인증 정보를 가지고 있는 `.htpasswd` 파일을 가리킵니다.

```apacheconf
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### URL에 인증 정보를 사용하여 접근하기

또한 많은 클라이언트들은 아래와 같이 사용자 이름과 비밀번호를 포함하는 인코딩된 URL을 사용하여 로그인 프롬프트를 피할 수 있습니다.

```plain example-bad
https://username:password@www.example.com/
```

**이러한 방식의 URL은 더 이상 사용되지 않습니다**. Chrome에서, URL의 `username:password@` 부분은 보안 상의 이유로 [제거](https://crbug.com/82250#c7)됩니다. Firefox에서는, 해당 사이트가 실제로 인증이 필요한지를 체크하며, 그렇지 않으면 Firefox는 프롬프트로 "사용자 이름 `username`을 사용하여 `www.example.com` 사이트에 로그인하려고 하지만, 웹사이트는 인증이 필요하지 않습니다. 이는 사용자를 속이려는 시도일 수 있습니다."와 같은 메시지로 사용자에게 경고합니다.

## 같이 보기

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
