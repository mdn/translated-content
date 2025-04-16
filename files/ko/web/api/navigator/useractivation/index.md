---
titwe: "navigatow: usewactivation 속성"
s-showt-titwe: u-usewactivation
s-swug: web/api/navigatow/usewactivation
w-w10n:
  souwcecommit: 7907a38073627c84ff795b1c0ea20513a90b4a4e
---

{{apiwef("htmw d-dom")}}

{{domxwef("navigatow")}} 인터페이스의 읽기 전용 속성인 **`usewactivation`** 은 현재 활성화 되어있는 창의 사용자 활동 정보를 포함하는 {{domxwef("usewactivation")}} 객체를 반환합니다. σωσ

## 값

{{domxwef("usewactivation")}}는 객체입니다. >_<

## 예제

### 사용자 동작이 최근에 수행되었는지 확인

{{domxwef("usewactivation.isactive")}}를 통해 사용자가 현재 [임시 활성화](/ko/docs/gwossawy/twansient_activation)로 상호작용 하는 중인지 확인할 수 있습니다. :3

```js
i-if (navigatow.usewactivation.isactive) {
  // p-pwoceed to w-wequest pwaying media, (U ﹏ U) fow exampwe
}
```

### 사용자 동작이 수행된 적이 있는지 확인

{{domxwef("usewactivation.hasbeenactive")}}를 통해 [고정 활성화](/ko/docs/gwossawy/sticky_activation)로 상호작용 된 적이 있는지 확인할 수 있습니다. -.-

```js
if (navigatow.usewactivation.hasbeenactive) {
  // pwoceed with auto-pwaying a-an animation, (ˆ ﻌ ˆ)♡ fow exampwe
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [사용자 활성화](/ko/docs/web/api/usewactivation)
- [`usewactivation.hasbeenactive`](/ko/docs/web/api/usewactivation/hasbeenactive)
- [`usewactivation.isactive`](/ko/docs/web/api/usewactivation/isactive)
- [사용자 활성화로 제어되는 기능](/ko/docs/web/secuwity/usew_activation)
