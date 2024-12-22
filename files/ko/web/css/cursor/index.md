---
title: cursor
slug: Web/CSS/cursor
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`cursor`** 속성은 요소 위에 마우스 커서가 올라갔을 때 보여줄 모양을 지정합니다.

{{EmbedInteractiveExample("pages/css/cursor.html")}}

## 구문

```css
/* 키워드 값 */
cursor: pointer;
cursor: auto;

/* URL, 대체용 키워드 */
cursor: url(hand.cur), pointer;

/* URL과 좌표 및 대체 키워드
crsor: url(cursor1.png) 4 12, auto;
cursor: url(cursor2.png) 2 2, pointer;

/* 전역 값 */
cursor: inherit;
cursor: initial;
cursor: unset;
```

`cursor` 속성은 쉼표로 구분한 0개 이상의 [`<url>`](#url)과, 필수로 지정해야 하는 키워드 값으로 이루어집니다. 각각의 `<url>`은 이미지 파일을 가리켜야 합니다. 브라우저는 첫 번째 이미지를 불러오려 시도하고, 실패했을 땐 다음 이미지를, 모두 실패하거나 지정한 이미지가 처음부터 없었다면 키워드 값을 사용합니다.

`<url>`은 공백으로 구분한 숫자 쌍을 받을 수 있습니다. 두 숫자는 이미지의 좌상단 모서리를 기준으로, 커서가 상호작용하는 부분의 [x, y 좌표](#xy)를 나타냅니다.

아래 예제는 `<url>` 값으로 이미지 두 개를 지정했고, 두 번째 이미지는 `<x><y>` 좌표도 설정했으며 모두 불러올 수 없으면 `progress` 키워드를 사용합니다.

```css
cursor:
  url(one.svg),
  url(two.svg) 5 5,
  progress;
```

### 값

- `<url>`
  - : 이미지 파일을 가리키는 `url(…)`, 또는 쉼표로 구분한 `url(…), url(…), …` 목록. 일부 커서 이미지를 사용할 수 없을 때를 대비해 여러 이미지를 지정할 수 있습니다. 이미지를 사용할 경우 URL이 아닌 값(하나 이상의 키워드 값)을 목록의 맨 뒤에 붙여야 합니다. [`cursor` 속성값으로 URL 사용하기](/ko/docs/Web/CSS/cursor)를 참고하세요.
- `<x>` `<y>` {{experimental_inline}}

  - : xy 좌표. 32 미만의 {{cssxref("&lt;number&gt;")}}여야 합니다.

- 키워드 값

  - : _행 위로 마우스를 올리면 현재 브라우저에서 보이는 모습을 확인할 수 있습니다._

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">카테고리</th>
          <th scope="col">CSS 값</th>
          <th scope="col" style="width: 7.5em">예제</th>
          <th scope="col">설명</th>
        </tr>
      </thead>
      <tbody>
        <tr style="cursor: auto">
          <th rowspan="3" scope="row">일반</th>
          <td><code>auto</code></td>
          <td></td>
          <td>
            사용자 에이전트가 현재 맥락에 맞춰 표시할 커서를 결정. 예를 들어 글씨
            위에서는 <code>text</code>를 사용합니다.
          </td>
        </tr>
        <tr style="cursor: default">
          <td><code>default</code></td>
          <td><img alt="default.gif" src="default.gif" /></td>
          <td>플랫폼에 따라 다른 기본 커서. 보통 화살표입니다.</td>
        </tr>
        <tr style="cursor: none">
          <td><code>none</code></td>
          <td></td>
          <td>커서 없음.</td>
        </tr>
        <tr style="cursor: context-menu">
          <th rowspan="5" scope="row" style="cursor: auto">링크와 상태</th>
          <td><code>context-menu</code></td>
          <td><img alt="context-menu.png" src="context-menu.png" /></td>
          <td>콘텍스트 메뉴 사용 가능.</td>
        </tr>
        <tr style="cursor: help">
          <td><code>help</code></td>
          <td><img alt="help.gif" src="help.gif" /></td>
          <td>도움말 사용 가능.</td>
        </tr>
        <tr style="cursor: pointer">
          <td><code>pointer</code></td>
          <td><img alt="pointer.gif" src="pointer.gif" /></td>
          <td>링크를 나타내는 포인터. 보통 한 쪽을 가리키는 손입니다.</td>
        </tr>
        <tr style="cursor: progress">
          <td><code>progress</code></td>
          <td><img alt="progress.gif" src="progress.gif" /></td>
          <td>
            프로그램이 백그라운드에서 작업 중이지만, 사용자가 인터페이스와
            상호작용할 수 있음. (<code>wait</code>과 반대)
          </td>
        </tr>
        <tr style="cursor: wait">
          <td><code>wait</code></td>
          <td><img alt="wait.gif" src="wait.gif" /></td>
          <td>
            프로그램이 작업 중이고, 사용자가 인터페이스와 상호작용할 수 없음.
            (<code>progress</code>와 반대) 간혹 모래시계나 시계모양 그림을
            사용합니다.
          </td>
        </tr>
        <tr style="cursor: cell">
          <th rowspan="4" scope="row" style="cursor: auto">선택</th>
          <td><code>cell</code></td>
          <td><img alt="cell.gif" src="cell.gif" /></td>
          <td>표의 칸이나 여러 칸을 선택할 수 있음.</td>
        </tr>
        <tr style="cursor: crosshair">
          <td><code>crosshair</code></td>
          <td><img alt="crosshair.gif" src="crosshair.gif" /></td>
          <td>십자 커서. 종종 비트맵 선택에 사용합니다.</td>
        </tr>
        <tr style="cursor: text">
          <td><code>text</code></td>
          <td><img alt="text.gif" class="default" src="text.gif" /></td>
          <td>글씨 선택 가능. 보통 I빔 모양입니다.</td>
        </tr>
        <tr style="cursor: vertical-text">
          <td><code>vertical-text</code></td>
          <td><img alt="vertical-text.gif" src="vertical-text.gif" /></td>
          <td>세로쓰기 글씨 선택 가능. 보통 옆으로 누운 I빔 모양입니다.</td>
        </tr>
        <tr style="cursor: alias">
          <th rowspan="7" scope="row" style="cursor: auto">드래그 앤 드롭</th>
          <td><code>alias</code></td>
          <td><img alt="alias.gif" src="alias.gif" /></td>
          <td>별칭이나 바로가기를 만드는 중.</td>
        </tr>
        <tr style="cursor: copy">
          <td><code>copy</code></td>
          <td><img alt="copy.gif" class="default" src="copy.gif" /></td>
          <td>복사하는 중.</td>
        </tr>
        <tr style="cursor: move">
          <td><code>move</code></td>
          <td><img alt="move.gif" src="move.gif" /></td>
          <td>움직이는 중.</td>
        </tr>
        <tr style="cursor: no-drop">
          <td><code>no-drop</code></td>
          <td><img alt="no-drop.gif" class="lwrap" src="no-drop.gif" /></td>
          <td>
            현재 위치에 놓을 수 없음.<br />[Firefox bug 275173](https://bugzil.la/275173): Windows와 Mac
            OS X에서 <code>no-drop</code>은 <code>not-allowed</code>와 같습니다.
          </td>
        </tr>
        <tr style="cursor: not-allowed">
          <td><code>not-allowed</code></td>
          <td><img alt="not-allowed.gif" src="not-allowed.gif" /></td>
          <td>요청한 행동을 수행할 수 없음.</td>
        </tr>
        <tr id="grab" style="cursor: grab">
          <td><code>grab</code></td>
          <td><img alt="grab.gif" class="default" src="grab.gif" /></td>
          <td>잡을 수 있음. (잡아서 이동)</td>
        </tr>
        <tr style="cursor: grabbing">
          <td><code>grabbing</code></td>
          <td><img alt="grabbing.gif" class="default" src="grabbing.gif" /></td>
          <td>잡고 있음. (잡아서 이동)</td>
        </tr>
        <tr style="cursor: all-scroll">
          <th rowspan="15" scope="row" style="cursor: auto">크기 조절과 스크롤</th>
          <td><code>all-scroll</code></td>
          <td><img alt="all-scroll.gif" src="all-scroll.gif" /></td>
          <td>
            모든 방향으로 이동 가능. (패닝)<br />[Firefox bug 275174](https://bugzil.la/275174):
            Windows에서 <code>all-scroll</code>은 <code>move</code>와 같습니다.
          </td>
        </tr>
        <tr style="cursor: col-resize">
          <td><code>col-resize</code></td>
          <td><img alt="col-resize.gif" src="col-resize.gif" /></td>
          <td>
            항목/행의 크기를 좌우로 조절할 수 있음. 종종 좌우 화살표의 가운데를
            세로로 분리한 모양을 사용합니다.
          </td>
        </tr>
        <tr style="cursor: row-resize">
          <td><code>row-resize</code></td>
          <td><img alt="row-resize.gif" src="row-resize.gif" /></td>
          <td>
            항목/열의 크기를 상하로 조절할 수 있음. 종종 상하 화살표의 가운데를
            가로로 분리한 모양을 사용합니다.
          </td>
        </tr>
        <tr style="cursor: n-resize">
          <td><code>n-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the top cursor"
              src="n-resize.gif"
              style="border-style: solid; border-width: 0px"
            />
          </td>
          <td rowspan="8" style="cursor: auto">
            움직일 수 있는 모서리. 예를 들어, <code>se-resize</code> 커서는 움직임이
            사각형의 동남쪽에서 시작할 때 사용합니다. 어떤 환경에선 동일한 방향의
            양방향 화살표를 대신 보여줍니다. 즉 <code>n-resize</code>와
            <code>s-resize</code>는 <code>ns-resize</code>와 같습니다.
          </td>
        </tr>
        <tr style="cursor: e-resize">
          <td><code>e-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the right cursor"
              src="e-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: s-resize">
          <td><code>s-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the bottom cursor "
              src="s-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: w-resize">
          <td><code>w-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the left cursor"
              src="w-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ne-resize">
          <td><code>ne-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the top-right corner cursor"
              src="ne-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: nw-resize">
          <td><code>nw-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the top-left corner cursor"
              src="nw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: se-resize">
          <td><code>se-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the bottom-right corner cursor"
              src="se-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: sw-resize">
          <td><code>sw-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the bottom-left corner cursor"
              src="sw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ew-resize">
          <td><code>ew-resize</code></td>
          <td><img alt="3-resize.gif" class="default" src="3-resize.gif" /></td>
          <td rowspan="4" style="cursor: auto">양방향 크기 조절 커서.</td>
        </tr>
        <tr style="cursor: ns-resize">
          <td><code>ns-resize</code></td>
          <td><img alt="6-resize.gif" class="default" src="6-resize.gif" /></td>
        </tr>
        <tr style="cursor: nesw-resize">
          <td><code>nesw-resize</code></td>
          <td><img alt="1-resize.gif" class="default" src="1-resize.gif" /></td>
        </tr>
        <tr style="cursor: nwse-resize">
          <td><code>nwse-resize</code></td>
          <td><img alt="4-resize.gif" class="default" src="4-resize.gif" /></td>
        </tr>
        <tr style="cursor: zoom-in">
          <th rowspan="2" scope="row" style="cursor: auto">확대와 축소</th>
          <td><code>zoom-in</code></td>
          <td><img alt="zoom-in.gif" class="default" src="zoom-in.gif" /></td>
          <td rowspan="2" style="cursor: auto"><p>확대/축소할 수 있음.</p></td>
        </tr>
        <tr style="cursor: zoom-out">
          <td><code>zoom-out</code></td>
          <td><img alt="zoom-out.gif" class="default" src="zoom-out.gif" /></td>
        </tr>
      </tbody>
    </table>

### 형식 구문

{{csssyntax}}

## 사용 일람

비록 명세에 cursor의 크기 제한은 정해져있지 않지만, 각각의 {{Glossary("user agent", "사용자 에이전트")}}가 별도로 최대 크기를 규정할 수도 있습니다. 이 때, 크기를 넘어가는 이미지를 사용할 경우, 보통 사용자 에이전트는 해당 이미지를 완전히 무시합니다.

[브라우저 호환성](#브라우저_호환성) 항목에서 커서 크기 제한을 찾아보세요.

## 예제

```css
.foo {
  cursor: crosshair;
}

.bar {
  cursor: zoom-in;
}

/* URL을 쓸 땐 키워드 값 필수 */
.baz {
  cursor: url("hyper.cur"), auto;
}
```

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`cursor` 속성값으로 URL 사용하기](/ko/docs/Web/CSS/cursor)
- {{cssxref("pointer-events")}}
