---
title: margin-left
slug: Web/CSS/margin-left
---

{{CSSRef}}

**`margin-left`** [CSS](/ko/docs/Web/CSS) 속성은 요소의 왼쪽에 [바깥 여백 영역](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)margin area을 설정합니다. 양수 값은 인접 요소와 거리를 넓히고, 음수 값은 더 좁힙니다.

{{EmbedInteractiveExample("pages/css/margin-left.html")}}

## 구문

```css
/* <length> 값 */
margin-left: 20px; /* 절대 길이 */
margin-left: 1em; /* 글씨 크기에 상대적 */
margin-left: 5%; /* 가장 가까운 블록 컨테이너의 너비에 상대적 */

/* 키워드 값 */
margin-left: auto;

/* 전역 값 */
margin-left: inherit;
margin-left: initial;
margin-left: unset;
```

`margin-left` 속성은 키워드 `auto`, `<length>`, `<percentage>`를 사용해 설정할 수 있습니다. 값은 양수, 0, 음수가 가능합니다.

### 값

- {{cssxref("&lt;length&gt;")}}
  - : 바깥 여백 크기의 고정 값.
- {{cssxref("&lt;percentage&gt;")}}
  - : 바깥 여백 크기와 블록 컨테이너 너비의 비율.
- `auto`

  - : 사용한 레이아웃 모드에 따라 가로축 미사용 공간 너비의 일부를 바깥 여백에 할당. `margin-left`와 `margin-right`의 값이 모두 `auto`라면 너비를 양 여백에 동일하게 배정합니다. 아래 표가 가능한 여러 경우를 보입니다.

    | {{cssxref("display")}} 값                                                                         | {{cssxref("float")}} 값 | {{cssxref("position")}} 값 | `auto`의 계산 값                                                                                                                                                               | 설명                                                                                                  |
    | ------------------------------------------------------------------------------------------------- | ----------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
    | `inline`, `inline-block`, `inline-table`                                                          | _any_                   | `static` or `relative`     | `0`                                                                                                                                                                            | 인라인 레이아웃 모드                                                                                  |
    | `block`, `inline`, `inline-block`, `block`, `table`, `inline-table`, `list-item`, `table-caption` | _any_                   | `static` or `relative`     | `0`, except if both `margin-left` and `margin-right` are set to `auto`. In this case, it is set to the value centering the element inside its parent.                          | 블록 레이아웃 모드                                                                                    |
    | `block`, `inline`, `inline-block`, `block`, `table`, `inline-table`, `list-item`, `table-caption` | `left` or `right`       | `static` or `relative`     | `0`                                                                                                                                                                            | 블록 레이아웃 모드 (플로팅 요소)                                                                      |
    | _any_ `table-*`_, except_ `table-caption`                                                         | _any_                   | _any_                      | `0`                                                                                                                                                                            | 내부 `table-*` 요소는 바깥 여백을 가지지 않습니다. 대신 {{ cssxref("border-spacing") }}을 사용하세요. |
    | _any, except `flex`,_ `inline-flex`_, or_ `table-*`                                               | _any_                   | _`fixed`_ or `absolute`    | `0`, except if both `margin-left` and `margin-right` are set to `auto`. In this case, it is set to the value centering the border area inside the available `width`, if fixed. | 절대위치 레이아웃 모드                                                                                |
    | `flex`, `inline-flex`                                                                             | _any_                   | _any_                      | `0`, except if there is any positive horizontal free space. In this case, it is evenly distributed to all horizontal `auto` margins.                                           | 플렉스박스 레이아웃 모드                                                                              |

### 형식 구문

{{csssyntax}}

## 예제

```css
.content {
  margin-left: 5%;
}
.sidebox {
  margin-left: 10px;
}
.logo {
  margin-left: -5px;
}
```

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}
