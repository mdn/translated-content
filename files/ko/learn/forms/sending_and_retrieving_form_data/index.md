---
title: Sending and retrieving form data
slug: Learn/Forms/Sending_and_retrieving_form_data
---

많은 경우 HTML 폼은 서버에 데이터를 전송할 목적으로 사용된다. 서버는 데이터를 처리하고 사용자에게 응답을 보낼 것이다. 간단한 것 처럼 보이지만 데이터가 서버나 사용자에게 피해를 입히지 않기 위해서는 몇가지를 명심해야한다.

## 데이터는 어디로 갈까?

### 클라이언트/서버 구조

웹은 간단히 말하면 클라이언트(파이어폭스, 크롬, 사파리, IE 등)는 서버(아파치, Nginx, IIS, 톰켓 등)로 HTTP프로토콜을 사용해 요청을 하는 클라이언트/서버 구조를 기본으로 작동된다. 서버 응답은 요청과 똑같은 프로토콜을 사용한다.

![A basic schema of the Web client/server architecture](/files/4291/client-server.png)

클라이언트 측에서 HTML폼 만큼 사용친화적으로 HTTP 요청을 서버에 보내는 편리한 것이 없다.이것은 사용자가 정보를 HTTP요청으로 전달을 할 수있게 만든다.

### 클라이언트측: 데이터 보내기

{{HTMLElement("form")}} 요소는 데이터 전송 방법을 정의한다. 제공하는 모든 속성은 사용자가 submit 버튼을 누를때 보내질 요청을 구성할 수 있도록 설계되었다. 두가지 중요한 속성은 [`action`](/ko/docs/Web/HTML/Element/form#action) 와 [`method`](/ko/docs/Web/HTML/Element/form#method)이다.

#### [`action`](/ko/docs/Web/HTML/Element/form#action) 속성

이 속성은 데이터를 어디로 보낼 것인지 지정한다. 이 값은 반드시 유효한 URL이어야 한다.만약 이 속성을 지정하지 않으면 데이터는 폼이 있는 페이지의 URL로 보내질 것이다.

##### Examples

첫번째 예제로 데이터는 `http://foo.com` 로 보낼 것이다.

```html
<form action="http://foo.com"></form>
```

<p class="brush: html">여기에서 데이터는 폼 페이지를 호스팅을 하는 같은 서버로 전송 되지만, 서버의 다른 URL로 전송된다.</p>

```html
<form action="/somewhere_else"></form>
```

<p class="brush: html">아래와 같이 속성을 지정하지 않으면 {{HTMLElement("form")}} 속성은 데이터를 폼을 포함한 페이지 주소로 보낼 것이다.</p>

```html
<form></form>
```

<p class="brush: html">이전에 많은 페이지들은 데이터를 반드시 폼을 포함하는 페이지와 같은 페이지에 보내는 것을 나타내는 표기법을 다음과 같이 사용했다. 그러나 HTML5 이후로 속성은 필수로 지정하지 않아도 되기 떄문에 이제 더이상 필요하지 않는다.</p>

```html
<form action="#"></form>
```

> **참고:**HTTPS(보안 HTTP) 프로토콜을 사용하는 URL을 지정하는 것도 가능하다. 이 것을 사용하면 폼 자체가 안전하지 않은 페이지에 HTTP를 이용해서 접근하는 곳에 호스트된 경우에 데이터는 나머지 요청들과 함께 암호화된다. 반면, 만약 폼이 보안 페이지에서 호스트 된 경우라도 [`action`](/ko/docs/Web/HTML/Element/form#action) 속성에서 안전하지 않은 HTTP URL을 지정하면 모든 브라우저는 데이터가 암호화되지 않았기 때문에 데이터를 보낼때마다 보안 경고를 출력할 것이다

#### [`method`](/ko/docs/Web/HTML/Element/form#method) 속성

이 속성은 데이터를 어떻게 보낼 것인지 정의한다. [HTTP protocol](/ko/docs/HTTP) 은 요청 방법에 대해 다양한 방법들을 제공한다. HTML 폼 데이터는 오직 2가지 방법으로 만 전송 할 수 있는데 바로 GET 방식과 POST방식이 있다.

이 두 가지 방식의 차이점을 이해하기 위해서는 뒤로 가서 HTTP가 어떻게 작동하는지 살펴봐야한다. 웹에서 리소스에 접근 할 때마다, 브라우저는 URL에 요청을 보낸다. HTTP요청은 두 가지 부분으로 나누어진다. 브라우저 수용력에 대한 전역 메타 테이터들을 포함하는 헤더와 서버에서 지정된 요청을 처리하는데 필요한 정보를 포함하는 바디가 있다.

##### GET 방식

GET 방식은 브라우저에서 서버에 주어진 리소스를 전달해달라고 말하기 위해 사용되는 방식이다. " 이봐 서버 난 이 리소스를 원해" 이 경우 브라우저는 바디가 비어 있는 요청을 하게 된다. 바디가 비어 있기 때문에, 만약 폼이 이 방식를 통하여 전송 하는 경우 데이터는 URL에 포함되어 서버로 보내진다.

###### 예제

다음 폼을 생각 해 봅시다.

```html
<form action="http://foo.com" method="get">
  <input name="say" value="Hi" />
  <input name="to" value="Mom" />
  <button>Send my greetings</button>
</form>
```

GET 방식을 사용하면 HTTP 요청은 다음과 같다.

```
GET /?say=Hi&to=Mom HTTP/1.1
Host: foo.com
```

##### POST 방식

POST 방식은 조금 다르다. 이는 브라우저의 HTTP요청 바디안에 제공되는 데이터를 고려한 응답을 요구하기 위해 서버로 보내는 방식이다. "이봐 서버 이 데이터를 보고 이거에 맞는 데이터를 보내봐" 만약 폼이 이 방식으로 사용하여 요청을 한다면 데이터는 HTTP요청 바디에 추가되어 전송된다.

예제

이 폼을 생각해보라(위 예제와 똑같다)

```html
<form action="http://foo.com" method="post">
  <input name="say" value="Hi" />
  <input name="to" value="Mom" />
  <button>Send my greetings</button>
</form>
```

POST 방식을 사용하면 다음과 같이 HTTP 요청을 할 것이다,

```
POST / HTTP/1.1
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

Content-Length 헤더는 바디의 크기를 나태내고, Content-Type 헤더는 서버에 보낼 리소스의 종류 나태낸다. 우리는 비트(bit/조금씩?)에서 이러한 헤더를 설명 할 것이다.

물론 http 요청은 절대 사용자에게 표시되지 않는다(파이어폭스 웹 콘솔이나 크롬 개발자 툴을 이용하지 않는이상). 사용자에게 보여지는 것은 호출한 URL뿐이다. 그래서 GET 요청은 사용자에게 URL바에서 데이터를 볼 수있지만, POST 요청은 그러지 못한다. 이것은 두가지 이유에서 매우 중요하다.

1. 만약 패스워드를 전송해야 되는 경우(또는 민간한 데이터의 부분), 절대 URL 바에 데이터를 출력하는 GET 방식을 사용해서는 안된다.
2. 만약 거대한 데이터를 보내는경우 POST 방식이 선호 된다. 왜냐하면 몇몇 브라우저는 URL들의 크기를 제한하기 떄문이다. 또한 많은 서버들이 URL들의 길이를 제한한다.

### 서버측: 데이터 가져오기

어떠한 HTTP 방식을 선택 하든지 서버는 키/ 벨류 쌍의 목록과 같은 데이터를 얻기 위해 파싱된 문자열을 받을 것이다. 이러한 목록에 접근하는 방법은 사용하는 개발 플랫폼에 의존되고 어떠한 지정된 프레임워크에서 이것을 사용 할 수 있을것이다. 또한 사용 하는 기술은 동일한 키를 어떻게 처리할 것인지 결정한다. 보통 가장 마지막에 수신된 값이 우선순위를 가진다.

#### 예제: PHP 날것

PHP 데이타에 접근 하기 위하여 몇가지 글로벌 객체를 제공한다. POST 방식 사용했다고 생각해보면, 다음과 같은 예제는 단순히 데이터만 받아 사용자에게 출력만 한다. 물론 데이터로 무엇을 할 것인지는 너어게 달려있다. 아마도 데이터를 사용자에게 출력하거나, 데이터베이스에 저장, 이메일에 전송 또는 다른 방법으로 처리할 것이다.

```php
<?php
  // The global $_POST variable allow to access the data send with the POST method
  // To access the data send with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
```

이 예제는 우리가 보낸 데이터를 페이지에 출력 할 것이다. 이 예제는 다음과 같이 출력할 것이다.

```
Hi Mom
```

#### 예제: Python

이 예제는 파이썬을 사용하여 제공된 데이터를 웹페이지에 출력하는 예제입니다. CGI 파이썬 패키지를 이용하여 폼데이터에 접근한다.

```python
#!/usr/bin/env python
import html
import cgi
import cgitb; cgitb.enable()     # for troubleshooting

print("Content-Type: text/html") # HTTP header to say HTML is following
print()                          # blank line, end of headers

form = cgi.FieldStorage()
say  = html.escape(form["say"].value);
to   = html.escape(form["to"].value);

print(say, " ", to)
```

이 결과는 PHP와 똑같다?.

```
Hi Mom
```

#### 다른 언어와 프레임 워크

[Perl](/ko/docs/), [Java](/ko/docs/), [.Net](http://www.microsoft.com/net), [Ruby](/ko/docs/)등 이와 같은 다른 서버측 기술이 있다. 이중에 최고라고 생각되는 것을 사용하면된다. 즉, 까다로운 일이 될 수 있기 때문에, 직접 기술을 사용하는 것은 매우 드문 일이 있음을 언급하는 것은 가치가있다.(?) 다음과 같은 폼을 더 쉽게 다루기위해 다음과 같은 좋은 프레임 워크들이 사용된다.

- [Symfony](http://symfony.com/) for PHP
- [Django](https://www.djangoproject.com/) for Python
- [Ruby On Rails](http://rubyonrails.org/) for Ruby
- [Grails](http://grails.org/) for Java
- etc.

이러한 프레임 워크를 사용하는 경우에도 폼을 다루는 것은 어쩔수 없이 쉽지 않다는 것을 주목을 할 필요가 있다. 그러나 이것을 사용하면 많은 시간을 절약 할 수 있다.

## 특별한 경우: 파일 보내기

파일은 HTML 폼에서 특별한 경우이다. 파일은 2진 데이터 또는 다른 데이터는 텍스트 데이터로 간주된다.HTTP는 텍스트 프로토콜 이기 때문에 2진 데이터를 다루기 위해서는 특별한 요구 사항이있다.

### [`enctype`](/ko/docs/Web/HTML/Element/form#enctype) 속성

이 속성은 Content-Type HTTP 헤더의 값을 지정할 수 있게 해준다. 서버에 데이터가 무슨 종류인지 전달하기 떄문에 이 해더는 매우 중요하다. 기본 값으로는 application/x-www-form-urlencoded. 이다. 사람 말로는 "이 폼 데이터는 URL 폼 형태로 인코딩되어 있습니다" 이다

만약 파일을 보내고 싶다면 두 가지를 해야한다.

- [`method`](/ko/docs/Web/HTML/Element/form#method) 속성을 POST 속성으로 지정 해야한다. 왜냐하면 파일 콘텐츠는 폼을 이용하여 URL 매개변수로 보낼수 없기 때문이다.
- [`enctype`](/ko/docs/Web/HTML/Element/form#enctype)의 값을 multipart/form-data 이라고 지정 해야한다. 왜냐하면 데이터는 여러 조각으로 나누워 지고 각 파일 조각에 같이 보내질 폼바디 텍스트가 추가 되기 때문이다.

예제

```html
<form method="post" enctype="multipart/form-data">
  <input type="file" name="myFile" />
  <button>Send the file</button>
</form>
```

> **참고:** 몇 브라우저는 [`multiple`](/ko/docs/Web/HTML/Element/input#multiple)속성을 {{HTMLElement("input")}}요소에 지원하여 한번에 여러 요소를 전달 할 수 있다. 이러한 파일을 서버측에서 다루는 방법은 서버에서 어떠한 기술을 사용하냐에 따라서 매우 달라진다. 앞에서 언급 한바와 같이 프레임워크를 사용하면 더 쉽게 이용할 수있다.

> **경고:** 많은 서버들이 남용을 예방하기 위해 HTTP요청과 파일의 크기를 제한하도록 구성된다. 파일을 전송하기 전에 서버 관리자에게 제한 크기를 확인하는것이 중요하다.

## 보안 코너

데이터를 서버로 보낼 떄마다 보안성에 대하여 생각해 봐야한다. HTML폼은 서버를 공격하는데 첫번째 매개변수가 될 수있다. 문제는 HTML폼에서 오지 않는다. 서버에서 어떻게 처리하냐에 따라 문제가 발생한다.

### 일반적인 보안 결함

무엇을 하는지에 따라 잘 알려진 보안 문제가 있다.

#### XSS 과 CSRF

크로스 사이트 스크립팅(XSS)과 크로스 사이트 요청 위조(CSRF)은 데이터를 출력하기 위해 사용자나 다른 사용자에게 데이터를 보낼떄 공격하는 일반적인 유형이다.

XSS 공격자는 다른 사용자가 볼 웹 페이지에 클라이언트 측 스크립트를 주입할 수있다.크로스 사이트 스크립팅 취약점은 공격자가 동일 출처 정책([same origin policy](/ko/docs/JavaScript/Same_origin_policy_for_JavaScript))의 접근 제어를 우회하여 사용 될 수 있다. 이러한 공격은 조금 불편함에서 심각한 보안 위험에 이르기 까지 다양하게 영향을 미친다.

CSRF는 XSS와 비슷하게 공격자가 같은 방법으로 시작한다. —클라이언트 스크립트를 웹페이지에 주입한다. - 그러나 이것의 대상은 다르다. CSRF 공격자는 높은 권한 계정(서버 관리자 같은)으로 권한을 상승하려고 시도하고 하지 말아야할 행동들을 할것이다.(예를들어 신뢰 할 수없는 사용자에게 데이터 전송하는 것)

XSS 공격자는 사용자가 웹사이트에 대하여 가진 신뢰를 이용하여 공격자는 웹사이트가 사용자를 신뢰한다는 것을 이용한다.

이러한 공격을 방지하려면 사용자가 서버에 보내는 데이터를 항상 확인해야하며 해당 내용을 표시해야 하는 경우 사용자가 제공한 HTML 콘텐츠를 표시하지 말아야 한다. 대신, 당신이 보여주려는 데이터가 사용자가 제공한 것과 동일한 데이터가 아니도록 데이터를 처리해야 한다. 현재 시장에 나와있는 거의 모든 프레임 워크는 어떤 유저가 보내는 데이터라도 HTML{{HTMLElement ( "script")}},{{HTMLElement ( "iframe")}} 및 {{HTMLElement ( "object")}} 요소를 데이터에서 제거하는 최소한의 필터를 구현한다. 이는 위험을 완화하는 데 도움은 되지만 반드시 근절한다고 보장할 수는 없다.

#### SQL injection

SQL injection is a type of attack that tries to perform actions on a database used by the target web site. This typically involves sending an SQL request and hopes that the server will execute it (many times when the application server tries to store the data). This is actually [one of the main vector attacks against web sites](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project).

The consequences can be terrible, ranging from data loss to access to a whole infrastructure by using privilege escalation. This is a very serious threat and you should never store data sent by a user without performing some sanitization (for example, by using [`mysql_real_escape_string()`](http://www.php.net/manual/en/function.mysql-real-escape-string.php) on a PHP/MySQL infrastructure).

#### HTTP header injection 와 email injection

These kinds of attacks can occur when your application builds HTTP headers or emails based on the data input by a user on a form. These won't directly damage your server or affect your users but are an open door to deeper problems such as session hijacking or phishing attacks.

These attacks are mostly silent, and can turn your server into a [zombie](<http://en.wikipedia.org/wiki/Zombie_(computer_science)>).

### Be paranoid: Never trust your users

So, how do you fight these threats? This is a topic far beyond this guide; however there are a few rules it's good to keep in mind. The most important rule is: never ever trust your users, including yourself; even a trusted user could have been hijacked.

All data that comes to your server must be checked and sanitized. Always. No exception.

- Escape potentially dangerous characters. The specific characters you should be cautious with vary depending on the context in which the data is used and the server platform you employ, but all server-side languages have functions for this.
- Limit the incoming amount of data to allow only what's necessary.
- Sandbox uploaded files (store them on a different server and allow access to the file only through a different subdomain or even better through a fully different domain name).

If you follow these three rules of thumb, you should avoid many/most problems; however, it's always a good idea to get a security review performed by a competent third party. Don't assume that you've seen all the possible problems.

## 결론

여기서 볼 수 있듯이 폼데이터는 쉽게 보낼수 있지만 어플리케이션에서 데이터를 확보하는것은 까다로운 일이 될 수 있다. 프론트 앤드 개발자가 기억해야 할 것은 데이터 모델만 보안을 정한다고 끝이 아니라는 것이다. Yes, as we'll see, it's possible to [perform client side data validation](/ko/docs/HTML/Forms/Data_form_validation) but the server can't trust this validation because it has no way to truly know what really happens on the client side.

## 볼거리

If you want to learn more about securing a web application, you can dig into these resources:

- [The Open Web Application Security Project (OWASP)](https://www.owasp.org/index.php/Main_Page)
- [Chris Shiflett's blog about PHP Security](http://shiflett.org/)
- [Learning material from Google](https://code.google.com/intl/en/edu/security/index.html)
