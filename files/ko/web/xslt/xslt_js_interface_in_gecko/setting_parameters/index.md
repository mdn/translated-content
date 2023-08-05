---
title: Setting Parameters
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Setting_Parameters
---

## Parameter 설정

이미 코딩된 .xsl과 .xml 파일을 이용하여 변환을 실행하는 것은 꽤 쓸모있는데, .xml파일을 JavaScript로부터 설정하는 것은 좀 더 쓸모있다.예로, JavaScript와 XSLT는 XML데이터를 정렬하여 표시하는 데 쓸 수 있다. 정렬은 오름차순과 내림차순을 바꿀 수 있어야 할 것이다. XSLT는 `xsl:param` 요소를 제공하는데, 그것은 `xsl:stylesheet` 요소의 자식이다. `XSLTProcessor()`는 이 파라메터와 상호작용하기 위해 3가지 JavaScript 메소드를 제공한다: `setParameter`, `getParameter`, `removeParameter.`

그들 모두 첫번째 아규먼트로 `xsl:param` 의 namespace URI를 얻는다. (보통 그 param은 기본 namespace로 떨어져, null에 전달되어 충분하다) `xsl:param`의 local name이 두번째 아규먼트다. setParameter는 세번쩨 아규먼트를 필요로 한다 - 즉 파라미터가 맞추어질 값.

**그림 7 : Parameters**

```
XSLT:
<xsl:param name="myOrder" />

JavaScript:

var sortVal = xsltProcessor.getParameter(null, "myOrder");

if (sortVal == "" || sortVal == "descending")
  xsltProcessor.setParameter(null, "myOrder", "ascending");
else
  xsltProcessor.setParameter(null, "myOrder", "descending");
```
