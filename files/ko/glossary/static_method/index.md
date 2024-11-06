---
title: 정적 메서드 (Static method)
slug: Glossary/Static_method
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{GlossarySidebar}}

정적 메서드 (또는 정적 함수)는 {{Glossary("object", "객체")}}의 멤버로 정의된 {{Glossary("method", '메서드')}}이지만 생성자를 통해 생성된 객체 인스턴스가 아닌 API 객체의 생성자에서 직접 접근할 수 있습니다.

[Web API](/ko/docs/Web/API)에서, 정적 메서드는 인터페이스에 의해 정의되지만 해당 유형의 객체를 먼저 인스턴스화하지 않고도 호출할 수 있는 메서드입니다.

객체 인스턴스에서 호출되는 메서드를 '인스턴스 메서드'라고 합니다.

## 예제

[Notifications API](/ko/docs/Web/API/Notifications_API)에서, {{domxref("Notification/requestPermission_static", "Notification.requestPermission()")}} 메서드는 {{domxref("Notification")}} 생성자 자체에서 호출됩니다. {{domxref("Notification/requestPermission_static", "Notification.requestPermission()")}} 메서드는 정적 메서드입니다.

```js
let promise = Notification.requestPermission();
```

반면에 {{domxref("Notification.close()")}} 메서드는 인스턴스 메서드입니다. 이는 특정 알림 객체 인스턴스에서 호출되어 해당 시스템 알림을 닫습니다.

```js
let myNotification = new Notification("This is my notification");

myNotification.close();
```

## 같이 보기

- Techopedia의 [정적 메서드](https://www.techopedia.com/definition/24034/static-method-java)
- [static](/ko/docs/Web/JavaScript/Reference/Classes/static)
- [MDN 웹 문서 용어 사전](/ko/docs/Glossary)

  - {{Glossary("Object")}}
  - {{Glossary("Method")}}
