---
title: Window.outerHeight
slug: Web/API/Window/outerHeight
l10n:
  sourceCommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{APIRef}}

**`Window.outerHeight`** 는 읽기 전용 속성이며, 사이드 바와 브라우저 내의 요소 그리고 윈도우 창의 크기를 조절할 때 가장자리 경계선을 포함하여 전체 윈도우 브라우저의 높이값을 픽셀단위로 나타내는 속성입니다.

## 노트

윈도우의 크기를 변경하려면 {{domxref("window.resizeBy()")}} 그리고 {{domxref("window.resizeTo()")}}를 확인하시오.

윈도우 브라우저의 내부 높이값, 즉 브라우저 안에서 보여지는 페이지의 높이값을 가져오려면 {{domxref("window.innerHeight")}}를 확인하시오.

### 예시 자료화면

아래의 이미지에서는 `outerHeight` and `innerHeight`의 차이점을 보여줍니다.

![innerHeight vs. outerHeight 설명 이미지](firefoxinnervsouterheight2.png)

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("window.innerHeight")}}
- {{domxref("window.innerWidth")}}
- {{domxref("window.outerWidth")}}
- {{domxref("window.resizeBy()")}}
- {{domxref("window.resizeTo()")}}
