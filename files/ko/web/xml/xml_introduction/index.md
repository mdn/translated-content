---
title: XML 소개
slug: Web/XML/XML_introduction
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

{{QuickLinksWithSubpages("/ko/docs/Web/XML")}}

XML(확장 가능한 마크업 언어)은 {{Glossary("HTML")}}과 유사하지만, 미리 정의된 태그가 없는 마크업 언어입니다. 대신 필요에 맞게 특별히 설계된 태그를 직접 정의합니다. 이는 데이터를 저장, 검색, 공유할 수 있는 형식으로 저장할 수 있는 강력한 방법입니다. 가장 중요한 것은 XML의 기본 형식이 표준화되어 있기 때문에, 로컬 또는 인터넷을 통해 시스템이나 플랫폼 간 XML을 공유하거나 전송하는 경우에도, 표준화된 XML 구문으로 덕분에 수신자가 데이터를 파싱 할 수 있다는 점입니다.

XML을 기반으로 하는 언어에는 [XHTML](/ko/docs/Glossary/XHTML), [MathML](/ko/docs/Web/MathML), [SVG](/ko/docs/Web/SVG), [RSS](/ko/docs/Glossary/RSS), [RDF](/ko/docs/Glossary/RDF) 등 여러 가지가 있습니다. 여러분만의 언어를 직접 정의할 수도 있습니다.

## XML 문서 구조

XML과 XML 기반 언어의 전체 구조는 태그를 기반으로 합니다.

### XML 선언

XML 선언은 태그가 아닙니다. 문서의 메타데이터를 전달하는 데 사용됩니다.

```html
<?xml version="1.0" encoding="UTF-8"?>
```

#### 속성

- `version`
  - : 문서에 사용된 XML의 버전.
- `encoding`
  - : 문서에 사용된 인코딩.

### 주석

```html
<!-- 주석 -->
```

## "올바른" XML(유효하고 올바른 형식)

### 올바른 설계 규칙

XML 문서를 올바르게 작성하려면 다음 조건을 충족해야 합니다.

- 문서가 올바른 형식이어야 합니다.
- 문서가 모든 XML 구문 규칙을 준수해야 합니다.
- 문서가 시맨틱 규칙을 준수해야 하며, 이는 일반적으로 XML 스키마나 DTD(**[문서 유형 정의](/ko/docs/Glossary/Doctype)**)에 설정되어 있습니다.

### 예제

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
        Hello World
    <!-- </warning>이 빠짐 -->
</message>
```

이제 동일한 문서의 올바른 버전을 살펴보겠습니다.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
         Hello World
    </warning>
</message>
```

정의되지 않은 태그가 포함된 문서는 유효하지 않습니다. 예를 들어, `<warning>` 태그를 정의하지 않았다면, 위의 문서는 유효하지 않습니다.

대부분의 브라우저는 잘못된 형식의 XML 문서를 식별할 수 있는 디버거를 제공합니다.

## 엔티티

HTML과 마찬가지로, XML은 몇 가지 특수 예약 문자를 참조하기 위한 메서드(엔티티라고 함)를 제공합니다(태그에서 사용되는 초과 기호 등). 이 중 아래 다섯 가지 문자를 알아두어야 합니다.

| 엔티티     | 문자 | 설명       |
| ---------- | ---- | ---------- |
| &amp;lt;   | <    | 미만 기호  |
| &amp;gt;   | >    | 초과 기호  |
| &amp;amp;  | &    | 앰퍼샌드   |
| &amp;quot; | "    | 큰따옴표   |
| &amp;apos; | '    | 작은따옴표 |

선언된 엔티티는 5개뿐이지만, 문서의 [문서 유형 정의](/ko/docs/Glossary/Doctype)를 사용하여 더 추가할 수 있습니다. 예를 들어 새 `&warning;` 엔티티를 만들려면 이렇게 하면 됩니다.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE body [
  <!ENTITY warning "경고: 엄청 안 좋은 일이 발생했습니다... 새로 고침하여 다시 시도해 주세요.">
]>
<body>
  <message> &warning; </message>
</body>
```

숫자 문자 참조를 사용하여 특수 문자를 지정할 수도 있습니다. 예를 들어 \&#xA9; 는 "©" 기호입니다.

## XML 표시하기

XML은 일반적으로 설명 목적으로 사용되지만, XML 데이터를 표시하는 방법도 있습니다. XML을 렌더링 하는 특정 방법을 정의하지 않으면, 브라우저에는 원시 XML이 표시됩니다.

XML 출력 스타일을 지정하는 한 가지 방법은 `xml-stylesheet` 처리 명령을 사용하여 문서에 적용할 [CSS](/ko/docs/Web/CSS)를 지정하는 것입니다.

```xml
<?xml-stylesheet type="text/css" href="stylesheet.css"?>
```

XML을 HTML과 같은 다른 언어로 변환하는 데 사용할 수 있는 **확장 가능한 스타일 시트 언어 변환**([XSLT](/ko/docs/Web/XSLT))이라는 더 강력한 XML 표시 방법도 있습니다. 따라서 XML은 매우 다양하게 활용될 수 있습니다.

```xml
<?xml-stylesheet type="text/xsl" href="transform.xsl"?>
```

## 권장 사항

이 문서는 XML이 무엇인지에 대한 아주 간략한 소개일 뿐이며, XML을 시작하기 위한 몇 가지 간단한 예제와 참고 자료만 포함되어 있습니다. XML에 대한 자세한 내용은 웹에서 보다 심층적인 문서를 찾아보시기 바랍니다.

하이퍼텍스트 마크업 언어([HTML](/ko/docs/Web/HTML))를 배우면 XML을 더 잘 이해하는 데 도움이 됩니다.

## 같이 보기

- [XML.com](https://www.xml.com/)
- [W3.org의 확장 가능한 마크업 언어(XML)](https://www.w3.org/XML/)
- [Using XML: A List Apart](https://alistapart.com/article/usingxml/)
