---
title: XML Introduction
slug: Web/XML/XML_introduction
---

### XML이란?

XML은 **Extensible Markup Language**을 뜻하며, [W3C 권고](http://www.w3.org/) 범용 마크업 언어다. XML은 SGML의 부분집합이다.

많은 언어가 XML을 기반으로 한다; 예로 [XHTML](/ko/XHTML), [MathML](/ko/MathML), [SVG](/ko/SVG), [XUL](/ko/XUL), [RSS](/ko/RSS), 그리고 [RDF](/ko/RDF) 는 모두 XML기반이다.

### 왜 HTML 이 제대로 동작하지 않는가

HTML 마크업은 오로지 표시 목적으로 설계된 고정된 언어이고, 반면 XML은 사용자 정의이고 데이터 내용을 정의할 때 사용된다.

HTML은 세 영역으로 제한된다: 지능, 유지보수, 그리고 적용. XML은 강력하다 지능, 적용, 유지보수, 그리고 간결성.

XML은 HTML과 다르지만, [XSLT](http://developer.mozilla.org/docs/XSLT)과 함께하면 함께 사용할 수 있다 .

### "바른" XML

XML 문서가 바르기 위해 well-formed 문서여야 하며, 모든 XML의 문법 규칙을 지켜야 한다. Mozilla를 포함한 대부분의 브라우저는 poorly-formed XML 문서를 식별할 수 있는 디버거를 제공한다 .

### XML 표시

XML이 presentation을 도울 수 있는 두 가지 방법이 있어, HTML을 변환하여 PDF 또는 image code를 만드는 것으로부터 다양한 표현방법에 적용한다.

스타일을 사용하는 한 방법은 XML 페이지가 `xml-stylesheet` 선언을 가진 CSS를 사용하는 것이다 .

```
<?xml-stylesheet type="text/css" href="stylesheet.css"?>
```

XML 마크업을 다른 형식으로 변환할 수 있는 강력한 XSLT와 결합하여, XML은 믿을 수 없을 정도로 다재다능하다.

```
<?xml-stylesheet type="text/xsl" href="transform.xsl"?>
```

### 권고

이 글은 XML이 무엇인가에 대한 짧은 소개일 뿐이다 ; XML에 대한 좀 더 자세한 것을 위해서는 좀더 깊이 있는 글을 웹에서 찾아보아야 할 것이다.

HTML 마크업 언어를 배우는 것은 XML을 잘 이해하는 데 도움이 될 것이다. 더 많은 정보를 위해 Mozilla Developer Center를 여행해야 할 것입니다.

### 문서 정보

- 저자: Justin G. Shreve
- 최종 변경일: 5월 19일
