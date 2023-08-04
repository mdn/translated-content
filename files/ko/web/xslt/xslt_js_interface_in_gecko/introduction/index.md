---
title: Introduction
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Introduction
---

## 개요

[XSLT](/ko/XSLT_in_Gecko)를 지원하는 현대의 브라우저를 가지고, 개발자는 XSLT가 제공하는 힘에 접근하기 위해 자바스크립트를 지금 사용할 수 있다. 자바스크립트는 웹 프로그램이 XML자료를 로드하고, XSLT를 통해 표현가능한 형태로 처리하고 존재하는 문서안에 넣는 것을 가능하게 한다. XML자료는 아무런 표현자료 없이 오직 날 정보만을 포함하므로, 다이얼업에서도 빠르게 로드할 수 있다.

XSLT는 저자가 직접 문서구조를 다루는 것을 허용한다. 예로, XSLT는 요소의 재배열과 정렬을 수행한다. 또 결과 문서구조의 좀더 세분된 제어를 제공한다.

[Mozilla 1.2](http://mozilla.org/releases/)현재 Gecko는 자바스크립트가 XSLT 프로세서를 만드는 것을 가능하게 한다. 이 글은 Gecko에서 XSLT/JavaScript binding을 다룬다. 이들은 Netscape 7.0x에서는 가능하지 않지만 Netscape 7.1에서는 가능하다.
