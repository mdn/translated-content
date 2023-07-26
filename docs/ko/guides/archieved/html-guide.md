# HTML 번역 안내서

## heading ID 번역

기사 제목에는 거의 항상 ID가 주어지는데, 기사 내에서 네비게이션을 자동으로 생성하고 실시간 샘플을 생성하기 위한 코드 블록을 식별하는 등의 이유가 있습니다. 제목을 번역 할 때 ID도 같이 번역 할 필요가 없습니다. 나머지 슬러그는 번역되지 않으므로 모든 것이 일관되게 유지됩니다.

예를 들면:

```html
<h2 id="tutorials">Tutorials</h2>
```

`ko` 지역 에서

```html
<h2 id="tutorials">튜토리얼</h2>
```

일반적으로 모든 ID를 소문자로 작성하는 것이 좋습니다. 플랫폼은 어쨌든 렌더링시 자동으로 변환하지만 소문자로 유지하면 변환으로 인해 수동으로 만든 앵커 링크가 작동하지 않을 가능성이 적습니다.

## HTML 소스의 줄 바꿈

일부 기사 소스 코드에서, 반드시 필요하지 않은 블록 수준 요소에서 줄 바꿈을 찾을 수 있습니다. 예를 들면 다음과 같습니다.

```html
<p>
  The <code><strong>HTMLCanvasElement</strong></code
  ><strong><code>.transferControlToOffscreen()</code></strong> method transfers
  control to an {{domxref("OffscreenCanvas")}} object, either on the main thread
  or on a worker.
</p>

<pre class="brush: js">
OffscreenCanvas HTMLCanvasElement.transferControlToOffscreen()</pre
>
```

일반적으로 소스 코드에서 이와 같은 줄 바꿈을 사용하지 않으므로 원하는 경우 자유롭게 제거 할 수 있으며 새 번역을 만들 때 추가하지 마십시오. 그러나 최종 렌더링 결과에 영향을 미치지 않으므로 이를 제거하는 데 너무 많은 시간을 소비하지 마십시오.
