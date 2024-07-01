---
title: 믹스인 (Mixin)
slug: Glossary/Mixin
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

'믹스인(mixin)'은 {{Glossary("method", "메소드")}} 및/또는 {{Glossary("property", "속성")}}의 일부 또는 전체가 구현되지 않아 다른 {{Glossary("class", "클래스")}}나 {{Glossary("interface", "인터페이스")}}가 누락된 구현을 제공해야 하는 {{Glossary("class", "클래스")}} (WebAPI 명세 용어의 인터페이스)입니다.

믹스인을 사용하고 나면, 새 클래스 또는 인터페이스에는 믹스인의 속성과 메서드는 물론 자체 정의된 속성도 포함됩니다. 모든 메서드와 속성은 믹스인에서 구현되었는지, 믹스인을 구현하는 인터페이스나 클래스에서 구현되었는지에 관계없이 정확히 동일하게 사용됩니다.

믹스인의 장점은 여러 인터페이스가 동일한 메서드와 속성을 포함하는 API 디자인을 단순화하는 데 사용할 수 있다는 부분입니다.

예를 들어, `WindowOrWorkerGlobalScope` 믹스인은 {{domxref("Window")}} 및 {{domxref("WorkerGlobalScope")}} 인터페이스 모두에서 사용할 수 있어야 하는 메서드와 속성을 제공하는 데 사용됩니다. 믹스인은 {{domxref("Window")}} 및 {{domxref("WorkerGlobalScope")}} 두 인터페이스 모두에 의해 구현됩니다.

## 같이 보기

- 위키백과의 [Mixin](https://en.wikipedia.org/wiki/Mixin)
