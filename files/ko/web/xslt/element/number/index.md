---
title: number
slug: Web/XSLT/Element/number
---

{{ XsltRef() }}

`<xsl:number>` 요소는 숫자를 연속으로 셉니다. 또한 숫자를 빠르게 구성하는(format) 데도 쓸 수 있습니다.

### 구문

```xml
<xsl:number
  count=EXPRESSION
  level="single" | "multiple" | "any"
  from=EXPRESSION
  value=EXPRESSION
  format=FORMAT-STRING
  lang=XML:LANG-CODE
  letter-value="alphabetic" | "traditional"
  grouping-separator=CHARACTER
  grouping-size=NUMBER  />
```

### 필수 속성

없음.

### 선택 속성

- `count`
  - : 소스 트리에서 연속으로 셀 대상을 지정합니다. XPath 식을 씁니다.
- `level`

  - : 일련번호를 만드는데 소스 트리의 수준을 어떻게 고려해야 하는 지를 정의합니다. 유효한 값은 `single`, `multiple`, `any` 세 가지. 기본값은 `single`입니다.

    - `single` 목록의 항목대로 연속으로 형제 노드를 번호 매깁니다. 처리기는 `count` 속성과 일치하는 [`ancestor-or-self`](/ko/Transforming_XML_with_XSLT/Mozilla_XSLT%2f%2fXPath_Reference/Axes/ancestor-or-self) 축의 첫 번째 노드로 갑니다. 그리고 나서 역시 `count` 속성과 일치하는 앞선 형제(preceding siblings) 노드(있다면, 한 짝인 `from` 속성에 이르러 멈춤)를 모두 더하여 셉니다. 일치하지 않으면, sequence는 빈 목록입니다.

    - `multiple` 노드의 계층 위치를 반영하는 복합 sequence로 노드를 셉니다. 예를 들어, 1.2.2.5 (포개진 형식은 `format` 속성(예, A.1.1)으로 지정할 수 있습니다). 처리기는 만약 있다면 `from` 속성에 이르러 멈추며 현재 노드와 현재 노드의 모든 [`ancestors`](/ko/Transforming_XML_with_XSLT/Mozilla_XSLT%2f%2fXPath_Reference/Axes/ancestor)를 조사합니다. 일치하지 않으면, sequence는 빈 목록입니다.

    - `any` (이번에 지원 안 함.) 수준을 무시하고 연속으로 일치하는 모든 노드를 셉니다. [`ancestor`](/ko/docs/Web/XPath/Axes/ancestor), [`self`](/ko/docs/Web/XPath/Axes/self), [`preceding`](/ko/docs/Web/XPath/Axes/preceding) 축을 모두 고려합니다. 처리기는 현재 노드에서 시작하여 `from` 속성과 일치할 때 멈추며 문서 역순으로 진행합니다. 발견한 `count` 속성과 일치하지 않으면, sequence는 빈 목록입니다. 이 수준은 이번에 지원하지 않습니다.

- from
  - : 번호 매기기를 시작하거나 다시 시작하면 좋을 곳을 지정합니다. 순서는 `from` 특성과 일치하는 노드의 첫 번째 자손(descendant)에서 시작합니다.
- value
  - : 숫자에 주어진 형식을 적용합니다. 이것이 사용자 제공 숫자(노드 sequence 숫자와는 반대로)를 표준 `<xsl:number>` 형식으로 구성하는 빠른 방법입니다.
- format

  - : 만드는 숫자의 형식을 정의합니다.

    - format="1"
      - : 1 2 3 . . . (This is the only format supported at this time)
    - format="01"
      - : 01 02 03 . . . 09 10 11 . . .
    - format="a"
      - : a b c . . .y z aa ab . . .
    - format="A"
      - : A B C . . . Y Z AA AB . . .
    - format="i"
      - : i ii iii iv v . . .
    - format="I"
      - : I II III IV V . . .

- lang (이번에는 지원 안 함)
  - : 문자에 기반을 둔 번호 매기기 형식에 쓰면 좋을 언어의 알파벳을 지정합니다.
- letter-value
  - : 문자(letter)를 쓰는 번호 매김 열(sequence) 사이를 명확하게 합니다. 어떤 언어는 문자(letter)를 쓰는 하나 이상의 번호 매기기 시스템이 있습니다. 두 시스템이 같은 토큰으로 시작하면, 모호함이 생길 수 있습니다. 이 속성은 "`alphabetic`"나 "`traditional`" 값일 수 있습니다. 기본값은 "`alphabetic`"입니다.
- grouping-separator
  - : 어떤 문자를 그룹(예로 천 단위) 구분자로 쓰면 좋을지를 지정합니다. 기본값은 쉼표(`,`)입니다.
- grouping-size
  - : 숫자 그룹을 만드는 자릿수를 나타냅니다. 기본값은 "`3`"입니다.

### 타입

명령, 템플릿 안에 나타남.

### 정의

[XSLT section 7.7, Numbering](http://www.w3.org/TR/xslt#number)

### Gecko 지원

부분 지원. 위 해설을 보세요.
