---
title: 직렬화 가능 객체 (Serializable object)
slug: Glossary/Serializable_object
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**직렬화 가능 객체 (Serializable object)** 는 모든 JavaScript 환경('영역')에서 직렬화되고 나중에 역직렬화될 수 있는 객체입니다.

예를 들어, 직렬화 가능 객체를 통해, 디스크에 저장하고 나중에 복원하거나 {{domxref("structuredClone()")}}를 사용하여 복제하거나, {{domxref("DedicatedWorkerGlobalScope.postMessage()")}}를 사용하여 워커 간에 공유할 수 있습니다.

직렬화에는 원래 객체의 모든 속성과 기타 부분이 포함되지 않을 수 있습니다.
예를 들어, {{domxref("DOMException")}}의 직렬화에는 `name` 및 `message` 속성이 포함되어야 하지만, 다른 속성이 포함되어 있는지 여부는 구현에 따라 다릅니다.
결과적으로, 역직렬화된 객체는 원래 객체의 동일한 복제본/복사본이 아닐 수 있습니다.
그러나 역직렬화된 새 객체는 {{glossary("deep copy", "깊은 복사")}}이므로, 원래 객체에서 직렬화된 다음 새 객체로 역직렬화된 속성은 원래 객체와 참조를 공유하지 않습니다.

어떤 경우에는 객체를 직렬화 및 역직렬화할 때, 복사본을 만드는 것보다 일부 리소스를 전송하는 것이 합리적입니다.
전송할 수 있는 객체를 [전송 가능한 객체](/ko/docs/Web/API/Web_Workers_API/Transferable_objects)라고 합니다.

## 지원되는 객체

모든 원시 값은 직렬화 가능합니다.
모든 객체가 직렬화 가능한 객체는 아닙니다.
직렬화할 수 있는 객체는 [The structured clone algorithm > Supported types](/ko/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types)에 나열되어 있습니다.

> [!NOTE]
> 직렬화 가능 객체는 [웹 IDL 파일](https://github.com/w3c/webref/tree/main/ed/idl)에 `[Serializable]` 속성으로 마크업되어 있습니다.
