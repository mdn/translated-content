---
title: XHTML
slug: Glossary/XHTML
---

[HTML](/ko/docs/HTML)은 HTML 또는 XHTML이라는 XML문법으로 브라우저를 통해 네트워크에 접속할 수 있습니다.

## HTML5 와 HTML/XHTML

[HTML5](/ko/docs/HTML/HTML5) 표준은 두가지 문법을 정의합니다. MIME 타입(HTTP `Content-Type` 헤더로 전송되는)을 참조하여 어떤 문법을 사용할지 선택합니다. : XHTML의 MIME 타입은 `application/xhtml+xml`이며 이외는 `text/html`.

아래 예제는 HTML 문서와 XHTML문서의 사용된 헤더내용을 보여줍니다.

### HTML 문서

```
HTTP/1.1 200 OK
Content-Type: text/html

<!DOCTYPE html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>HTML</title>
  </head>
  <body>
    <p>I am a HTML document</p>
  </body>
</html>
```

### XHTML 문서

```
HTTP/1.1 200 OK Content-Type: application/xhtml+xml <html xml:lang="en" xmlns="http://www.w3.org/1999/xhtml"> <head> <title>XHTML</title> </head> <body> <p>I am a XHTML document</p> </body> </html>
```

## MIME type vs DOCTYPE

HTML5 이전에는 [HTML 4.01](http://www.w3.org/TR/html4/) 과 [XHTML 1.0](http://www.w3.org/TR/xhtml1/) 두개의 표준이 두개의 문법으로 분리되어 정의되었습니다. XHTML1 표준에는, XHTML을 사용하기 위해서는 특별한 DOCTYPE을 정의해야 한다고 명시되어있습니다. 하지만 브라우저들은 이 표준을 구현하지 않았고 반대로 HTML5 표준에서 다음과 같이 결정되었습니다. "**content-type을 text/html로 전송한다면 XHTML을 사용하지 않는 것이다."**

대신, 적절한 MIME 타입은 `Content-Type` HTTP 헤더에 정의 되어 있어야 합니다. 만약 \<meta http-equiv=…> 같은 메타테그에 MIME 타입을 넣었다면 그것은 무시되고 `text/html로 간주됩니다.`.

페이지를 `text/html로` 서비스 하지만 XHTML로 문서를 작성했다면 아래 글에서 설명하는 많은 문제점들이 발생할 것 입니다.:

- [No to XHTML](http://www.spartanicus.utvinternet.ie/no-xhtml.htm) an excellent article from Spartanicus
- [Beware of XHTML](http://www.webdevout.net/articles/beware-of-xhtml) by David Hammond
- [Sending XHTML as text/html Considered Harmful](http://www.hixie.ch/advocacy/xhtml) by Ian Hickson
- [XHTML's Dirty Little Secret](http://www.xml.com/pub/a/2003/03/19/dive-into-xml.html) by Mark Pilgrim
- [XHTML - What's the Point?](http://hsivonen.iki.fi/xhtml-the-point/) by Henri Sivonen
- [XHTML is not for Beginners](http://lachy.id.au/log/2005/12/xhtml-beginners) by Lachlan Hunt

## 지원

대부분의 브라우저들은 현재 XHTML를 지원합니다, Firefox, Chrome, Safari, Opera, 그리고 Internet Explorer (IE 9 이후). (Internet Explorer 8 과 그 이전 버전은 표준의 XHTML MIME타입을 선언한 XHTML문서를 알려지지않은 파일타입으로 간주하여 다운로드 다이얼로그를 표시합니다.)

또 많이 사용하는 {{Glossary("JavaScript")}} 라이브러리와 개발자도구들은 XHTML을 제한적으로 지원하건나 지원하지 않으니 주의하십시오.

## HTML과의 차이점

[Properly Using CSS and JavaScript in XHTML Documents](/ko/docs/Properly_Using_CSS_and_JavaScript_in_XHTML_Documents) 글의 일부문에서 HTML과 XHTML의차이점을 설명하고 있습니다.

## 도구

- [Standards-Compliant Authoring Tools](/ko/docs/Standards-Compliant_Authoring_Tools)

## 바깥 고리

- [HTML](/ko/docs/HTML)
- [Namespaces](/ko/docs/Namespaces)
