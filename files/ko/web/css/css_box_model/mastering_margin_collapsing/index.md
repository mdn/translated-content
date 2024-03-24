---
title: 여백 상쇄 정복
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
---

{{CSSRef}}

여러 블록의 [위쪽](/ko/docs/Web/CSS/margin-top) 및 [아래쪽](/ko/docs/Web/CSS/margin-bottom) 바깥 여백(마진)은 경우에 따라 제일 큰 여백의 크기를 가진 단일 여백으로 결합(상쇄)되곤 합니다. 이런 동작을 **여백 상쇄**라고 부릅니다. 단, [플로팅](/ko/docs/Web/CSS/float) 요소와 [절대 위치를 지정](/ko/docs/Web/CSS/position#absolute)한 요소의 여백은 절대 상쇄되지 않습니다.

여백 상쇄는 다음과 같은 세 가지 기본 상황에 발생합니다.

- 인접 형제
  - : 인접 형제 요소간의 바깥 여백은 서로 상쇄됩니다. (단, 뒤쪽 형제가 플로팅을 [해제](/ko/docs/Web/CSS/clear)해야 하는 경우는 예외)
- 부모와 자손을 분리하는 콘텐츠 없음
  - : 부모 블록에 테두리, 안쪽 여백, 인라인 부분이 없고 블록 서식 맥락이 생성되지 않았으며 부모의 {{cssxref("margin-top")}}을 자손의 `margin-top`과 분리할 [권한](/ko/docs/Web/CSS/clear)이 없는 경우, 또는, 부모 블록에 테두리, 안쪽 여백, 인라인 콘텐츠가 없으며 부모의 {{cssxref("margin-bottom")}}과 자손의 `margin-bottom`을 분리할 {{cssxref("height")}}, {{cssxref("min-height")}}, {{cssxref("max-height")}}가 존재하지 않는 경우 부모와 자손의 여백이 상쇄됩니다. 상쇄된 여백은 부모 블록 바깥에 위치합니다.
- 빈 블록
  - : 테두리, 안쪽 여백, 인라인 콘텐츠, {{cssxref("height")}}, {{cssxref("min-height")}}, {{cssxref("max-height")}}가 없으면 블록의 {{cssxref("margin-top")}}과 {{cssxref("margin-bottom")}}이 서로 상쇄됩니다.

다음은 참고할만한 사항입니다.

- (세 개 이상의 여백 사이의) 더 복잡한 여백 상쇄는 위의 기본 상황이 서로 결합되어 발생합니다.
- 위의 규칙은 바깥 여백이 0이어도 적용되므로, 두 번째 규칙을 만족하는 경우 부모의 바깥 여백이 0이건 아니건 자손의 바깥 여백은 부모 밖으로 나오게 됩니다.
- 음수 값을 가진 바깥 여백을 포함할 경우, 상쇄된 여백의 크기는 제일 큰 양수 여백과 제일 작은(음의 방향으로, 절댓값이 제일 큰) 여백의 합이 됩니다.
- 모든 바깥 여백이 음수 값을 가질 경우, 상쇄된 여백의 크기는 제일 작은(음의 방향으로, 절댓값이 제일 큰) 여백의 크기가 됩니다. 인접 요소와 중첩 요소 모두에 적용됩니다.

## 예제

### HTML

```html
<p>The bottom margin of this paragraph is collapsed …</p>
<p>
  … with the top margin of this paragraph, yielding a margin of
  <code>1.2rem</code> in between.
</p>

<div>
  This parent element contains two paragraphs!
  <p>
    This paragraph has a <code>.4rem</code> margin between it and the text
    above.
  </p>
  <p>
    My bottom margin collapses with my parent, yielding a bottom margin of
    <code>2rem</code>.
  </p>
</div>

<p>I am <code>2rem</code> below the element above.</p>
```

### CSS

```css
div {
  margin: 2rem 0;
  background: lavender;
}

p {
  margin: 0.4rem 0 1.2rem 0;
  background: yellow;
}
```

### 결과

{{EmbedLiveSample('예제', 'auto', 350)}}
