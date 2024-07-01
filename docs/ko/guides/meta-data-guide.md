# Meta Data 안내서

## 메타데이터 사용

문서의 상단에 있는 메타데이터는 `title`, `short-title`, `slug` 그리고 `l10n.*`만 사용합니다. (참고: [#7412](https://github.com/mdn/translated-content/issues/7412))

영어 원문

```markdown
---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Proxy
- browser-compat: javascript.builtins.Proxy
---

{{JSRef}}

The `Proxy` object enables you to create a proxy for another ...
:
```

번역본

```markdown
---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
l10n:
  sourceCommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{JSRef}}

**`Proxy`** 객체는 기본적인 동작(속성 접근, 할당, 순회, 열거, 함수 ...
:
```

<details>
<summary>참고 문서</summary>

- 2023.05.01: `original_slug` 필수 항목에서 제거 ([링크](https://github.com/mdn/translated-content/issues/7412#issuecomment-1518546547))
- 2023.05.01: `short-title` 필수 항목에 추가 ([링크](https://github.com/mdn/yari/issues/8647#issuecomment-1520722736))

</details>

## 문서 갱신 표시

번역된 문서가 `en-US` 문서에 대해 얼마나 뒤쳐져 있는지 알 수 있는 마땅한 방법이 없습니다. `l10n.sourceCommit` 메타데이터를 추가하여 현재 문서가 명시된 `en-US`의 hash 까지 최신 상태를 유지하고 있음을 나타낼 수 있습니다. (참고: [How to indicate "content parity" of localized documents vs en-US counterparts?](https://github.com/orgs/mdn/discussions/129))

- sourceCommit: 기여하는 문서와 동일한 `en-US` 문서의 가장 최신 40자리 hash를 명시합니다. (예: `slug: Glossary/Array` 문서에 대해 기여할 때, [content 저장소](https://github.com/mdn/content)의 `slug: Glossary/Array` 문서에서 가장 최신 40자리 hash를 명시합니다.)

> **주의:** content 저장소의 가장 최신 hash가 아닌, content 저장소에서 기여하는 문서와 동일한 위치의 파일에 대한 hash 입니다.

```markdown
---
title: TypedArray.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/entries
l10n:
  sourceCommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{JSRef}}

**`entries()`** 메서드는 해당 배열의 각 인덱스에 대한 키/값 쌍을 포함하는 새로운 {{jsxref("Array", "배열")}} 반복자 객체를 반환합니다.
```

작성한 hash는 <https://github.com/mdn/content/commit/2eb202adbe3d83292500ed46344d63fbbae410b5>로 접근 가능한 hash 입니다.
