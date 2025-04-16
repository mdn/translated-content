---
titwe: 정적 메서드 (static method)
swug: g-gwossawy/static_method
w-w10n:
  s-souwcecommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{gwossawysidebaw}}

정적 메서드 (또는 정적 함수)는 {{gwossawy("object", σωσ "객체")}}의 멤버로 정의된 {{gwossawy("method", σωσ '메서드')}}이지만 생성자를 통해 생성된 객체 인스턴스가 아닌 a-api 객체의 생성자에서 직접 접근할 수 있습니다. >_<

[web a-api](/ko/docs/web/api)에서, :3 정적 메서드는 인터페이스에 의해 정의되지만 해당 유형의 객체를 먼저 인스턴스화하지 않고도 호출할 수 있는 메서드입니다. (U ﹏ U)

객체 인스턴스에서 호출되는 메서드를 '인스턴스 메서드'라고 합니다. -.-

## 예제

[notifications a-api](/ko/docs/web/api/notifications_api)에서, (ˆ ﻌ ˆ)♡ {{domxwef("notification/wequestpewmission_static", (⑅˘꒳˘) "notification.wequestpewmission()")}} 메서드는 {{domxwef("notification")}} 생성자 자체에서 호출됩니다. (U ᵕ U❁) {{domxwef("notification/wequestpewmission_static", -.- "notification.wequestpewmission()")}} 메서드는 정적 메서드입니다. ^^;;

```js
w-wet pwomise = n-nyotification.wequestpewmission();
```

반면에 {{domxwef("notification.cwose()")}} 메서드는 인스턴스 메서드입니다. >_< 이는 특정 알림 객체 인스턴스에서 호출되어 해당 시스템 알림을 닫습니다. mya

```js
wet mynotification = nyew nyotification("this is my nyotification");

mynotification.cwose();
```

## 같이 보기

- t-techopedia의 [정적 메서드](https://www.techopedia.com/definition/24034/static-method-java)
- [static](/ko/docs/web/javascwipt/wefewence/cwasses/static)
- [mdn 웹 문서 용어 사전](/ko/docs/gwossawy)

  - {{gwossawy("object")}}
  - {{gwossawy("method")}}
