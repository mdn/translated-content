---
title: Notification.permission
slug: Web/API/Notification/permission_static
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

`permission` 속성은 웹 알림에 있어서 사용자에 의해 현재 앱에 허가된 현재 권한을 가리킵니다.

## 구문

```js
var permission = Notification.permission;
```

### 값

다음은 현재 권한을 표현하는 문자열입니다.

- `granted`: 사용자가 의도하여 어플리케이션이 알림을 보낼 수 있도록 허가.
- `denied`: 사용자가 의도하여 어플리케이션이 알림을 보내는 것을 거부.
- `default`: 사용자의 결정은 알 수 없으나, 어플리케이션 기본적으로 denied 와 같이 동작할 것 입니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Notification")}}
- [Using Web Notifications](/ko/docs/WebAPI/Using_Web_Notifications)
