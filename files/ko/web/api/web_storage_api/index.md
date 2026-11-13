---
title: Web Storage API
slug: Web/API/Web_Storage_API
---

{{DefaultAPISidebar("Web Storage API")}}

**Web Storage API**는 브라우저에서 키/값 쌍을 {{glossary("cookie", "쿠키")}}보다 훨씬 직관적으로 저장할 수 있는 방법을 제공합니다.

## Web Storage 개념과 사용법

Web Storage의 두 가지 방식은 다음과 같습니다.

- `sessionStorage`는 각각의 {{glossary("origin", "출처")}}에 대해 독립적인 저장 공간을 페이지 세션이 유지되는 동안(브라우저가 열려있는 동안) 제공합니다.
  - 세션에 한정해, 즉 브라우저 또는 탭이 닫힐 때까지만 데이터를 저장합니다.
  - 데이터를 절대 서버로 전송하지 않습니다.
  - 저장 공간이 쿠키보다 큽니다. (최대 5MB)

- `localStorage`도 위와 같지만, 브라우저를 닫았다 열어도 데이터가 남아있습니다.
  - 유효기간 없이 데이터를 저장하고, JavaScript를 사용하거나 브라우저 캐시 또는 로컬 저장 데이터를 지워야만 사라집니다.
  - 저장 공간이 셋 중 제일 큽니다.

위의 방식은 {{domxref("Window.sessionStorage")}}와 {{domxref("Window.localStorage")}} 속성을 통해 사용할 수 있습니다. (보다 정확히 말하자면, 지원하는 브라우저에서는 `Window` 객체는 `localStorage` 및 `sessionStorage` 속성을 포함한 `WindowLocalStorage`와 `WindowSessionStorage` 객체를 구현합니다) 두 속성 중 하나에 접근하면 {{domxref("Storage")}} 객체의 인스턴스를 생성하게 되고, 그걸 사용해 데이터 항목을 추가, 회수, 제거할 수 있습니다. `sessionStorage`와 `localStorage`의 `Storage` 객체는 각각의 출처별로 다른 것을 사용하며 서로 독립적으로 기능합니다.

> [!NOTE]
> Firefox 45 이후로는, 과도한 Web Storage 사용으로 인한 메모리 문제를 피하기 위해 브라우저가 충돌하거나 재시작할 때의 출처 당 저장 공간이 10MB로 제한됩니다.

> [!NOTE]
> 사용자가 [서드 파티 쿠키를 비활성화](https://support.mozilla.org/en-US/kb/disable-third-party-cookies)한 경우 서드 파티 IFrame에서 Web Storage에 접근할 수 없습니다. Firefox는 43부터 이 동작을 사용합니다.

## Web Storage 인터페이스

- {{domxref("Storage")}}
  - : 특정 도메인과 저장 유형(세션 또는 로컬)에 대해 데이터를 저장, 회수, 삭제할 수 있습니다.
- {{domxref("Window")}}
  - : Web Storage API는 {{domxref("Window")}} 객체를 확장합니다. {{domxref("Window.sessionStorage")}}와 {{domxref("Window.localStorage")}} 속성을 추가해 현재 도메인의 세션과 로컬 {{domxref("Storage")}} 객체의 접근을 가능케 하고, 새로운 항목을 추가하는 등 저장 공간이 변경될 때 발생하는 {{domxref("Window.onstorage")}} 이벤트 처리기도 추가합니다.
- {{domxref("StorageEvent")}}
  - : `storage` 이벤트는 저장 공간이 변경될 때 `Window` 객체에서 발생합니다.

## 예제

일반적인 Web Storage 사용법을 설명하기 위한 데모를 만들었습니다. 창의적이게도 [Web Storage Demo](https://github.com/mdn/dom-examples/tree/master/web-storage)라는 이름으로, [랜딩 페이지](https://mdn.github.io/dom-examples/web-storage/)에서 색, 글꼴, 이미지를 바꿀 수 있습니다. 선택지를 바꾸면 페이지가 실시간으로 변함과 동시에 `localStorage`에도 현재 상태를 저장하게 되므로, 페이지를 떠났다가 다시 방문해도 선택지가 그대로 보존됩니다.

추가로 이벤트 출력 페이지도 제공 중입니다. 이 페이지를 다른 탭에 열고 랜딩 페이지에서 선택지를 바꾸면 {{domxref("StorageEvent")}}를 통해 업데이트된 저장 정보를 출력하는 것을 볼 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 사생활 보호 / 시크릿 모드

대부분의 최신 브라우저는 탐색 기록과 쿠키를 남기지 않는 "사생활 보호 모드", "시크릿 모드", 또는 비슷한 이름의 기능을 가지고 있습니다. 그리고 정말 분명한 이유로 인해 Web Storage와 호환되지 않습니다. 브라우저 공급자들은 다양한 시나리오에서 이를 해결하기 위해 실험을 진행하고 있습니다.

대부분의 브라우저는 Web Storage API에 접근 가능하며 기능하는 것 처럼 보이지만, 큰 차이점으로서, 브라우저를 닫으면 저장한 데이터를 제거하는 전략을 택하고 있습니다. 이런 브라우저 사이에서도, 일반 브라우징 세션에서 저장한 기존 데이터의 처리법에 대해서는 이견이 존재합니다. 사생활 보호 모드에서도 저 데이터에 접근할 수 있어야 할까요? 그런 반면, 마찬가지로 Web Storage API는 존재하지만 최대 용량을 0바이트 할당하여 어떠한 데이터도 입력할 수 없도록 하는 일부 브라우저도 존재하며, 대표적으로 Safari가 있습니다.

Web Storage API에 의존하는 웹 사이트를 개발할 때, 개발자는 이러한 구현 차이에 대해 고려해야 합니다. 더 많은 정보는 이 주제를 다루는 [WHATWG 블로그 글](https://blog.whatwg.org/tag/localstorage)을 참고하세요.

## 같이 보기

- [Web Storage API 사용하기](/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [브라우저 저장 공간 제한과 정리 기준](/ko/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
