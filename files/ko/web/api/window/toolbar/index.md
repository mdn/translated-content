---
title: "Window: toolbar 속성"
short-title: toolbar
slug: Web/API/Window/toolbar
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

`toolbar` 객체를 반환합니다.

이 속성은 불리언 `visible` 속성을 포함하는 객체로, 유사한 역할의 다른 `Window` 속성들처럼 과거에는 웹 브라우저 사용자 인터페이스의 특정 부분이 보이는지를 나타냈었습니다.

개인정보 보호 및 호환성을 위해, 지금은 `visible` 속성의 값이 `Window`가 팝업이면 `false`, 그 외에는 모두 `true`입니다.

## 값

하나의 속성을 포함하는 객체입니다.

- `visible` {{ReadOnlyInline}}
  - : 불리언 속성으로, `Window`가 팝업이면 `false`, 아니면 `true`입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("window.locationbar")}}
- {{domxref("window.menubar")}}
- {{domxref("window.personalbar")}}
- {{domxref("window.scrollbars")}}
- {{domxref("window.statusbar")}}
