---
title: URL.revokeObjectURL()
slug: Web/API/URL/revokeObjectURL_static
---

{{ApiRef("URL API")}}

**`URL.revokeObjectURL()`** 정적 메서드는 이전에 {{domxref("URL.createObjectURL()") }}을 통해 생성한 객체 URL을 해제합니다. 객체 URL을 더는 쓸 일이 없을 때 사용해서, 브라우저가 이제 해당 객체를 메모리에 들고 있지 않아도 된다고 알려주세요.

{{AvailableInWorkers}}

> **참고:** 이 기능은 {{domxref("Blob")}} 인터페이스의 생명 주기 문제와 잠재적인 메모리 누수 가능성으로 인해 [Service Worker](/ko/docs/Web/API/Service_Worker_API)에서 사용할 수 없습니다.

## 구문

```js
URL.revokeObjectURL(objectURL);
```

### 매개변수

- `objectURL`
  - : {{domxref("URL.createObjectURL", "createObjectURL()") }}을 통해 생성한 객체 URL을 나타내는 {{domxref("DOMString")}}.

## 예제

[객체 URL을 사용하여 이미지 표시하기](/ko/docs/Web/API/File/Using_files_from_web_applications#예시_객체_URL을_사용하여_이미지_표시하기)를 보세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [웹 애플리케이션에서 파일 사용하기](/ko/docs/Web/API/File/Using_files_from_web_applications)
- {{domxref("URL.createObjectURL()")}}
