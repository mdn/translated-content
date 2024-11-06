---
title: Bitwise flags
slug: Glossary/Bitwise_flags
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**비트 플래그**는 일반적으로 간단한 숫자 값으로 이루어진 변수 집합으로, 메서드 또는 다른 코드 구조의 특정 사용 또는 기능을 활성화하거나 비활성화하는 데 사용될 수 있습니다. 비트 수준에서 작동하기 때문에 이 작업을 빠르고 효율적으로 수행할 수 있습니다. 동일한 그룹의 관련 플래그에는 일반적으로 단일 값(예. 16진수)에서 서로 다른 비트 위치를 나타내는 보색 값이 부여되므로 여러 플래그 설정을 단일 값으로 나타낼 수 있습니다.

{{domxref("GPUBuffer.usage")}} 속성을 조회하면, 단일 10진수가 반환됩니다. 이 단일 10진수는 다양한 사용 플래그에 대한 다양한 10진수 값의 합계입니다. 위의 예제로 돌아가서, 이전에 지정한 사용법으로 생성된 `GPUBuffer`에 대해 `GPUBuffer.usage`를 조회하면 다음과 같은 결과가 반환됩니다.

```js
usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE;
```

이러한 값은 동일한 네임스페이스 내에 정의되며, 각 값은 16진수 값을 갖습니다.

| 사용 플래그                    | 16진수 표현 | 10진수 변환 값 |
| ------------------------------ | ----------- | -------------- |
| `GPUBufferUsage.MAP_READ`      | 0x0001      | 1              |
| `GPUBufferUsage.MAP_WRITE`     | 0x0002      | 2              |
| `GPUBufferUsage.COPY_SRC`      | 0x0004      | 4              |
| `GPUBufferUsage.COPY_DST`      | 0x0008      | 8              |
| `GPUBufferUsage.INDEX`         | 0x0010      | 16             |
| `GPUBufferUsage.VERTEX`        | 0x0020      | 32             |
| `GPUBufferUsage.UNIFORM`       | 0x0040      | 64             |
| `GPUBufferUsage.STORAGE`       | 0x0080      | 128            |
| `GPUBufferUsage.INDIRECT`      | 0x0100      | 256            |
| `GPUBufferUsage.QUERY_RESOLVE` | 0x0200      | 512            |

{{domxref("GPUBuffer.usage")}} 속성을 쿼리하면, 단일 10진수가 반환됩니다. 이 단일 10진수는 다양한 사용 플래그에 대한 다양한 10진수 값의 합계입니다. 위의 예제로 돌아가서, 이전에 지정한 사용법으로 생성된 `GPUBuffer`에 대해 `GPUBuffer.usage`를 조회하면 다음과 같은 결과가 반환됩니다.

- `GPUBufferUsage.COPY_SRC`의 십진수에 해당하는 4
- `GPUBufferUsage.MAP_WRITE`의 10진수에 해당하는 2를 추가합니다.
- 6과 같습니다.

다양한 플래그에 대해 선택된 값으로 인해, 각 값 조합은 고유하므로, 프로그램은 단일 값에서 어떤 플래그가 설정되었는지 한눈에 알 수 있습니다. 또는, 비트 및 연산자를 사용하여 결합된 값에 어떤 플래그가 설정되어 있는지 쉽게 테스트할 수 있습니다.

```js
if (buffer.usage & GPUBufferUsage.MAP_WRITE) {
  // 버퍼에 MAP_WRITE 사용이 있습니다.
}
```

## 같이 보기

- [비트별 플래그가 아름다운 이유](https://www.hendrik-erz.de/post/bitwise-flags-are-beautiful-and-heres-why)
- 위키백과의 [비트별 연산](https://en.wikipedia.org/wiki/Bitwise_operation)
