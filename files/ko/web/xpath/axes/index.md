---
title: Axes
slug: Web/XPath/Axes
---

{{ XsltRef() }} [XPath](/ko/XPath) 명세에는 축이 13가지가 있습니다. 축은 문맥 노드와의 관계를 나타내고 트리 위에 문맥 노드에 대응하여 노드를 위치시킬 때 씁니다. 다음은 이용가능한 축 13가지와 [Gecko](/ko/Gecko)에서 가능한 지원 정도에 대한 매우 짧은 설명입니다.

XPath 식 사용에 관한 추가 정보는, [Transforming XML with XSLT](/ko/Transforming_XML_with_XSLT) 문서 끝 [For Further Reading](/ko/Transforming_XML_with_XSLT/For_Further_Reading) 절을 보세요.

- [ancestor](/ko/XPath/Axes/ancestor)
  - : 부모 노드부터 시작하여 루트 노드까지 항해하는 문맥 노드의 모든 조상을 나타냅니다.
- [ancestor-or-self](/ko/XPath/Axes/ancestor-or-self)
  - : 문맥 노드와 루트 노드를 포함하는 문맥 노드의 조상 모두를 나타냅니다.
- [attribute](/ko/XPath/Axes/attribute)
  - : 문맥 노드의 속성을 나타냅니다. 오직 요소만 속성이 있습니다. 이 축은 at sign(`@`)으로 줄여 쓸 수 있습니다.
- [child](/ko/XPath/Axes/child)
  - : 문맥 노드의 자식을 나타냅니다. XPath 식이 축을 지정하지 않으면 기본값으로 이해합니다. 오직 루트 노드나 요소 노드만 자식이 있기 때문에, 다른 경우에는 아무것도 선택하지 않습니다.
- [descendant](/ko/XPath/Axes/descendant)
  - : 문맥 노드의 모든 자식과 자식의 자식 따위를 나타냅니다. 속성과 이름공간 노드는 포함하지 **않습니다**. `속성` 노드의 `parent` 축이 요소 노드이지만 `속성` 노드는 그 부모의 자식이 아닙니다.
- [descendant-or-self](/ko/XPath/Axes/descendant-or-self)
  - : 문맥 노드와 문맥 노드의 모든 자손을 나타냅니다. 속성과 이름공간 노드는 포함하지 **않습니다**. `속성` 노드의 `parent` 축이 요소 노드이지만 `속성` 노드는 그 부모의 자식이 아닙니다.
- [following](/ko/XPath/Axes/following)
  - : `자손`, `속성`, `이름공간` 노드를 제외한 문맥 노드 다음에 나오는 모든 노드를 나타냅니다.
- [following-sibling](/ko/XPath/Axes/following-sibling)
  - : 문맥 노드와 부모가 같고 소스 문서에서 문맥 노드 다음에 보이는 모든 노드를 나타냅니다.
- [namespace](/ko/XPath/Axes/namespace)
  _(지원 안 함)_
  - : 문맥 노드 범위(scope) 안에 있는 모든 노드를 나타냅니다. 이 경우에, 문맥 노드는 요소 노드이어야 합니다.
- [parent](/ko/XPath/Axes/parent)
  - : 문맥 노드의 부모 노드만을 나타냅니다. 마침표 둘(`..`)로 줄여 쓸 수 있습니다.
- [preceding](/ko/XPath/Axes/preceding)
  - : `조상`, `속성`, `이름공간` 노드를 제외한 문서 안에서 문맥 노드를 앞선 모든 노드를 나타냅니다.
- [preceding-sibling](/ko/XPath/Axes/preceding-sibling)
  - : 문맥 노드와 부모가 같고 소스 문서에서 문맥 노드 앞에 나오는 모든 노드를 나타냅니다.
- [self](/ko/XPath/Axes/self)
  - : 문맥 노드 자신를 나타냅니다. 마침표 하나(`.`)로 줄여 쓸 수 있습니다.
