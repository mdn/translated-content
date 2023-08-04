---
title: XPath
slug: Web/XPath
---

XPath는 XML Path Language를 나타내고 [XML](/ko/XML) 문서의 다른 부분을 주소 지정하는(가리키는) 유연한 방법을 제공하는 비XML 문법을 씁니다. 이와 동시에, 또한 패턴과 일치하는지 알아보기 위해 문서 안에 주소 지정된 노드를 검사하는데도 쓰일 수 있습니다.

XPath는 주로 [XSLT](/ko/XSLT)에서 쓰입니다. 하지만 또한 [getElementById](/ko/DOM/document.getElementById) 메소드, [childNodes](/ko/DOM/element.childNodes) 특성들에 의존하는 대신 HTML과 [XUL](/ko/XUL) 같은 다른 XML에 기반을 둔 언어 문서를 [DOM](/ko/DOM)을 통해 항해하는 더 나은 강력한 방법으로도 쓰입니다. 다음은 모호합니다: 이는 확장기능 안에서 특히 쓸모 있습니다, 특히 [overlays](/ko/XUL_Overlays)를 고려하면.

XPath는 XML 문서의 계층 구조를 항해하기 위해 경로 표기법(URL의 경우와 같이)을 씁니다. [URI](/ko/URI)와 XML 속성값에 쓰일 수 있도록 비XML 문법을 씁니다.

## 문서

- [Introduction to using XPath in JavaScript](/ko/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript)
  - : XPath의 비XSLT 사용을 기술합니다.
- [XPath:Axes](/ko/docs/Web/XPath/Axes)
  - : XPath 명세에 정의된 축의 정의와 목록. 축은 노드 사이의 관계를 기술하는데 씁니다.
- [XPath:Functions](/ko/docs/Web/XPath/Functions)
  - : 기본 XPath 함수와 XPath에 더해진 XSLT 고유의 추가분 설명과 나열.
- [Transforming XML with XSLT](/ko/docs/Web/XSLT/Transforming_XML_with_XSLT)
  - : XSLT는 변환하고 싶은 XML 문서 내의 코드 조각(segment)을 주소지정하기 위해 XPath를 씁니다.
- [XPath snippets](/ko/docs/Web/XPath/Snippets)
  - : These are JavaScript utility functions, that can be used in your own code, based on [DOM Level 3 XPath](https://www.w3.org/TR/DOM-Level-3-XPath/) APIs.
- [What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/)
  - : XSLT와 XPath에 관한 이 광범위한 소개는 두 기술 사이에 우선순위가 없다 보고 읽는 이를 배경, 문맥, 구조, 개념, 입문 용어로 안내합니다.

## Tools

- [XPath tester](https://extendsclass.com/xpath-tester.html)
  - : 온라인 XPath 작성기/디버거

## Related Topics

- [XSLT](/ko/docs/Web/XSLT), [XML](/ko/docs/Web/XML), [DOM](/ko/docs/Web/API/Document_Object_Model)
- [Comparison of CSS Selectors and XPath](/ko/docs/Web/XPath/Comparison_with_CSS_selectors)

<section id="Quick_links">
  <ol>
    <li><strong><a href="/ko/docs/Web/XSLT">XSLT</a></strong></li><li><strong><a href="/ko/docs/Web/EXSLT">EXSLT</a></strong></li>
    <li><strong><a href="/ko/docs/Web/XPath">XPath</a></strong></li>
    <li class="toggle"><details open><summary>Guides</summary>
      <ol>
        <li><a href="/ko/docs/Web/XPath/Comparison_with_CSS_selectors">Comparison of CSS Selectors and XPath</a></li>
        <li><a href="/ko/docs/Web/XPath/Snippets">XPath snippets</a></li>
      </ol></details>
    </li>
    <li class="toggle"><details open><summary><a href="/ko/docs/Web/XPath/Axes">XPath Axes</a></summary>{{ListSubpagesForSidebar("/ko/docs/Web/XPath/Axes")}}</details></li>
    <li class="toggle"><details open><summary><a href="/ko/docs/Web/XPath/Functions">XPath Functions</a></summary>{{ListSubpagesForSidebar("/ko/docs/Web/XPath/Functions")}}</details></li>
  </ol>
</section>
