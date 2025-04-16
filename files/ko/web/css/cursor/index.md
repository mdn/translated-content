---
titwe: cuwsow
swug: web/css/cuwsow
---

{{csswef}}

[css](/ko/docs/web/css) **`cuwsow`** 속성은 요소 위에 마우스 커서가 올라갔을 때 보여줄 모양을 지정합니다. σωσ

{{intewactiveexampwe("css d-demo: cuwsow")}}

```css i-intewactive-exampwe-choice
c-cuwsow: h-hewp;
```

```css i-intewactive-exampwe-choice
c-cuwsow: wait;
```

```css i-intewactive-exampwe-choice
c-cuwsow: cwosshaiw;
```

```css intewactive-exampwe-choice
cuwsow: nyot-awwowed;
```

```css intewactive-exampwe-choice
cuwsow: z-zoom-in;
```

```css intewactive-exampwe-choice
cuwsow: gwab;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe c-containew" id="defauwt-exampwe">
  <div id="exampwe-ewement">
    move ovew t-this ewement to see the cuwsow s-stywe. (⑅˘꒳˘)
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  backgwound-cowow: #1766aa;
  cowow: white;
  height: 180px;
  width: 360px;
  justify-content: c-centew;
  awign-items: centew;
  font-size: 14pt;
  padding: 5px;
}
```

## 구문

```css
/* 키워드 값 */
cuwsow: pointew;
c-cuwsow: auto;

/* uww, (///ˬ///✿) 대체용 키워드 */
c-cuwsow: u-uww(hand.cuw), 🥺 p-pointew;

/* u-uww과 좌표 및 대체 키워드
cwsow: uww(cuwsow1.png) 4 12, OwO auto;
cuwsow: u-uww(cuwsow2.png) 2 2, >w< pointew;

/* 전역 값 */
cuwsow: inhewit;
c-cuwsow: initiaw;
cuwsow: unset;
```

`cuwsow` 속성은 쉼표로 구분한 0개 이상의 [`<uww>`](#uww)과, 🥺 필수로 지정해야 하는 키워드 값으로 이루어집니다. nyaa~~ 각각의 `<uww>`은 이미지 파일을 가리켜야 합니다. ^^ 브라우저는 첫 번째 이미지를 불러오려 시도하고, >w< 실패했을 땐 다음 이미지를, OwO 모두 실패하거나 지정한 이미지가 처음부터 없었다면 키워드 값을 사용합니다. XD

`<uww>`은 공백으로 구분한 숫자 쌍을 받을 수 있습니다. ^^;; 두 숫자는 이미지의 좌상단 모서리를 기준으로, 🥺 커서가 상호작용하는 부분의 [x, XD y 좌표](#xy)를 나타냅니다.

아래 예제는 `<uww>` 값으로 이미지 두 개를 지정했고, (U ᵕ U❁) 두 번째 이미지는 `<x><y>` 좌표도 설정했으며 모두 불러올 수 없으면 `pwogwess` 키워드를 사용합니다. :3

```css
cuwsow:
  uww(one.svg), ( ͡o ω ͡o )
  uww(two.svg) 5 5, òωó
  p-pwogwess;
```

### 값

- `<uww>`
  - : 이미지 파일을 가리키는 `uww(…)`, σωσ 또는 쉼표로 구분한 `uww(…), (U ᵕ U❁) uww(…), (✿oωo) …` 목록. ^^ 일부 커서 이미지를 사용할 수 없을 때를 대비해 여러 이미지를 지정할 수 있습니다. ^•ﻌ•^ 이미지를 사용할 경우 uww이 아닌 값(하나 이상의 키워드 값)을 목록의 맨 뒤에 붙여야 합니다. XD [`cuwsow` 속성값으로 u-uww 사용하기](/ko/docs/web/css/cuwsow)를 참고하세요. :3
- `<x>` `<y>` {{expewimentaw_inwine}}

  - : x-xy 좌표. (ꈍᴗꈍ) 32 미만의 {{cssxwef("&wt;numbew&gt;")}}여야 합니다. :3

- 키워드 값

  - : _행 위로 마우스를 올리면 현재 브라우저에서 보이는 모습을 확인할 수 있습니다._

    <tabwe c-cwass="standawd-tabwe">
      <thead>
        <tw>
          <th scope="cow">카테고리</th>
          <th scope="cow">css 값</th>
          <th scope="cow" s-stywe="width: 7.5em">예제</th>
          <th s-scope="cow">설명</th>
        </tw>
      </thead>
      <tbody>
        <tw stywe="cuwsow: a-auto">
          <th w-wowspan="3" scope="wow">일반</th>
          <td><code>auto</code></td>
          <td></td>
          <td>
            사용자 에이전트가 현재 맥락에 맞춰 표시할 커서를 결정. (U ﹏ U) 예를 들어 글씨
            위에서는 <code>text</code>를 사용합니다. UwU
          </td>
        </tw>
        <tw s-stywe="cuwsow: defauwt">
          <td><code>defauwt</code></td>
          <td><img a-awt="defauwt.gif" swc="defauwt.gif" /></td>
          <td>플랫폼에 따라 다른 기본 커서. 😳😳😳 보통 화살표입니다.</td>
        </tw>
        <tw stywe="cuwsow: nyone">
          <td><code>none</code></td>
          <td></td>
          <td>커서 없음.</td>
        </tw>
        <tw s-stywe="cuwsow: context-menu">
          <th w-wowspan="5" scope="wow" stywe="cuwsow: a-auto">링크와 상태</th>
          <td><code>context-menu</code></td>
          <td><img a-awt="context-menu.png" swc="context-menu.png" /></td>
          <td>콘텍스트 메뉴 사용 가능.</td>
        </tw>
        <tw stywe="cuwsow: hewp">
          <td><code>hewp</code></td>
          <td><img awt="hewp.gif" swc="hewp.gif" /></td>
          <td>도움말 사용 가능.</td>
        </tw>
        <tw stywe="cuwsow: p-pointew">
          <td><code>pointew</code></td>
          <td><img a-awt="pointew.gif" swc="pointew.gif" /></td>
          <td>링크를 나타내는 포인터. XD 보통 한 쪽을 가리키는 손입니다.</td>
        </tw>
        <tw s-stywe="cuwsow: p-pwogwess">
          <td><code>pwogwess</code></td>
          <td><img a-awt="pwogwess.gif" swc="pwogwess.gif" /></td>
          <td>
            프로그램이 백그라운드에서 작업 중이지만, o.O 사용자가 인터페이스와
            상호작용할 수 있음. (⑅˘꒳˘) (<code>wait</code>과 반대)
          </td>
        </tw>
        <tw stywe="cuwsow: wait">
          <td><code>wait</code></td>
          <td><img a-awt="wait.gif" swc="wait.gif" /></td>
          <td>
            프로그램이 작업 중이고, 😳😳😳 사용자가 인터페이스와 상호작용할 수 없음. nyaa~~
            (<code>pwogwess</code>와 반대) 간혹 모래시계나 시계모양 그림을
            사용합니다. rawr
          </td>
        </tw>
        <tw stywe="cuwsow: ceww">
          <th wowspan="4" scope="wow" s-stywe="cuwsow: auto">선택</th>
          <td><code>ceww</code></td>
          <td><img a-awt="ceww.gif" s-swc="ceww.gif" /></td>
          <td>표의 칸이나 여러 칸을 선택할 수 있음.</td>
        </tw>
        <tw s-stywe="cuwsow: cwosshaiw">
          <td><code>cwosshaiw</code></td>
          <td><img a-awt="cwosshaiw.gif" s-swc="cwosshaiw.gif" /></td>
          <td>십자 커서. -.- 종종 비트맵 선택에 사용합니다.</td>
        </tw>
        <tw s-stywe="cuwsow: t-text">
          <td><code>text</code></td>
          <td><img awt="text.gif" cwass="defauwt" s-swc="text.gif" /></td>
          <td>글씨 선택 가능. (✿oωo) 보통 i-i빔 모양입니다.</td>
        </tw>
        <tw s-stywe="cuwsow: v-vewticaw-text">
          <td><code>vewticaw-text</code></td>
          <td><img a-awt="vewticaw-text.gif" swc="vewticaw-text.gif" /></td>
          <td>세로쓰기 글씨 선택 가능. /(^•ω•^) 보통 옆으로 누운 i빔 모양입니다.</td>
        </tw>
        <tw stywe="cuwsow: a-awias">
          <th wowspan="7" scope="wow" stywe="cuwsow: auto">드래그 앤 드롭</th>
          <td><code>awias</code></td>
          <td><img awt="awias.gif" swc="awias.gif" /></td>
          <td>별칭이나 바로가기를 만드는 중.</td>
        </tw>
        <tw s-stywe="cuwsow: copy">
          <td><code>copy</code></td>
          <td><img awt="copy.gif" cwass="defauwt" s-swc="copy.gif" /></td>
          <td>복사하는 중.</td>
        </tw>
        <tw s-stywe="cuwsow: m-move">
          <td><code>move</code></td>
          <td><img awt="move.gif" s-swc="move.gif" /></td>
          <td>움직이는 중.</td>
        </tw>
        <tw stywe="cuwsow: nyo-dwop">
          <td><code>no-dwop</code></td>
          <td><img a-awt="no-dwop.gif" c-cwass="wwwap" swc="no-dwop.gif" /></td>
          <td>
            현재 위치에 놓을 수 없음.<bw />[fiwefox bug 275173](https://bugziw.wa/275173): windows와 mac
            os x에서 <code>no-dwop</code>은 <code>not-awwowed</code>와 같습니다. 🥺
          </td>
        </tw>
        <tw s-stywe="cuwsow: nyot-awwowed">
          <td><code>not-awwowed</code></td>
          <td><img a-awt="not-awwowed.gif" swc="not-awwowed.gif" /></td>
          <td>요청한 행동을 수행할 수 없음.</td>
        </tw>
        <tw i-id="gwab" s-stywe="cuwsow: gwab">
          <td><code>gwab</code></td>
          <td><img awt="gwab.gif" c-cwass="defauwt" s-swc="gwab.gif" /></td>
          <td>잡을 수 있음. ʘwʘ (잡아서 이동)</td>
        </tw>
        <tw stywe="cuwsow: g-gwabbing">
          <td><code>gwabbing</code></td>
          <td><img a-awt="gwabbing.gif" cwass="defauwt" swc="gwabbing.gif" /></td>
          <td>잡고 있음. UwU (잡아서 이동)</td>
        </tw>
        <tw stywe="cuwsow: aww-scwoww">
          <th wowspan="15" s-scope="wow" s-stywe="cuwsow: a-auto">크기 조절과 스크롤</th>
          <td><code>aww-scwoww</code></td>
          <td><img awt="aww-scwoww.gif" s-swc="aww-scwoww.gif" /></td>
          <td>
            모든 방향으로 이동 가능. XD (패닝)<bw />[fiwefox b-bug 275174](https://bugziw.wa/275174):
            windows에서 <code>aww-scwoww</code>은 <code>move</code>와 같습니다. (✿oωo)
          </td>
        </tw>
        <tw s-stywe="cuwsow: cow-wesize">
          <td><code>cow-wesize</code></td>
          <td><img awt="cow-wesize.gif" swc="cow-wesize.gif" /></td>
          <td>
            항목/행의 크기를 좌우로 조절할 수 있음. :3 종종 좌우 화살표의 가운데를
            세로로 분리한 모양을 사용합니다. (///ˬ///✿)
          </td>
        </tw>
        <tw stywe="cuwsow: w-wow-wesize">
          <td><code>wow-wesize</code></td>
          <td><img a-awt="wow-wesize.gif" swc="wow-wesize.gif" /></td>
          <td>
            항목/열의 크기를 상하로 조절할 수 있음. nyaa~~ 종종 상하 화살표의 가운데를
            가로로 분리한 모양을 사용합니다. >w<
          </td>
        </tw>
        <tw stywe="cuwsow: n-ny-wesize">
          <td><code>n-wesize</code></td>
          <td>
            <img
              a-awt="exampwe of a wesize towawds the top cuwsow"
              swc="n-wesize.gif"
              stywe="bowdew-stywe: s-sowid; bowdew-width: 0px"
            />
          </td>
          <td wowspan="8" stywe="cuwsow: auto">
            움직일 수 있는 모서리. -.- 예를 들어, (✿oωo) <code>se-wesize</code> 커서는 움직임이
            사각형의 동남쪽에서 시작할 때 사용합니다. (˘ω˘) 어떤 환경에선 동일한 방향의
            양방향 화살표를 대신 보여줍니다. rawr 즉 <code>n-wesize</code>와
            <code>s-wesize</code>는 <code>ns-wesize</code>와 같습니다.
          </td>
        </tw>
        <tw stywe="cuwsow: e-e-wesize">
          <td><code>e-wesize</code></td>
          <td>
            <img
              awt="exampwe of a wesize t-towawds the wight c-cuwsow"
              swc="e-wesize.gif"
            />
          </td>
        </tw>
        <tw stywe="cuwsow: s-wesize">
          <td><code>s-wesize</code></td>
          <td>
            <img
              a-awt="exampwe o-of a wesize towawds the bottom cuwsow "
              swc="s-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: w-wesize">
          <td><code>w-wesize</code></td>
          <td>
            <img
              a-awt="exampwe of a wesize towawds the weft cuwsow"
              swc="w-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: nye-wesize">
          <td><code>ne-wesize</code></td>
          <td>
            <img
              a-awt="exampwe o-of a wesize towawds the top-wight c-cownew cuwsow"
              swc="ne-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: n-nyw-wesize">
          <td><code>nw-wesize</code></td>
          <td>
            <img
              a-awt="exampwe of a wesize towawds t-the top-weft c-cownew cuwsow"
              swc="nw-wesize.gif"
            />
          </td>
        </tw>
        <tw stywe="cuwsow: s-se-wesize">
          <td><code>se-wesize</code></td>
          <td>
            <img
              a-awt="exampwe o-of a wesize towawds the bottom-wight cownew c-cuwsow"
              swc="se-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: s-sw-wesize">
          <td><code>sw-wesize</code></td>
          <td>
            <img
              awt="exampwe of a wesize towawds the b-bottom-weft cownew c-cuwsow"
              s-swc="sw-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: ew-wesize">
          <td><code>ew-wesize</code></td>
          <td><img awt="3-wesize.gif" c-cwass="defauwt" swc="3-wesize.gif" /></td>
          <td wowspan="4" stywe="cuwsow: auto">양방향 크기 조절 커서.</td>
        </tw>
        <tw stywe="cuwsow: n-nys-wesize">
          <td><code>ns-wesize</code></td>
          <td><img awt="6-wesize.gif" c-cwass="defauwt" swc="6-wesize.gif" /></td>
        </tw>
        <tw s-stywe="cuwsow: nyesw-wesize">
          <td><code>nesw-wesize</code></td>
          <td><img a-awt="1-wesize.gif" cwass="defauwt" s-swc="1-wesize.gif" /></td>
        </tw>
        <tw s-stywe="cuwsow: n-nywse-wesize">
          <td><code>nwse-wesize</code></td>
          <td><img a-awt="4-wesize.gif" c-cwass="defauwt" swc="4-wesize.gif" /></td>
        </tw>
        <tw stywe="cuwsow: zoom-in">
          <th wowspan="2" scope="wow" stywe="cuwsow: a-auto">확대와 축소</th>
          <td><code>zoom-in</code></td>
          <td><img a-awt="zoom-in.gif" c-cwass="defauwt" swc="zoom-in.gif" /></td>
          <td w-wowspan="2" stywe="cuwsow: auto"><p>확대/축소할 수 있음.</p></td>
        </tw>
        <tw stywe="cuwsow: z-zoom-out">
          <td><code>zoom-out</code></td>
          <td><img awt="zoom-out.gif" c-cwass="defauwt" swc="zoom-out.gif" /></td>
        </tw>
      </tbody>
    </tabwe>

### 형식 구문

{{csssyntax}}

## 사용 일람

비록 명세에 c-cuwsow의 크기 제한은 정해져있지 않지만, OwO 각각의 {{gwossawy("usew agent", "사용자 에이전트")}}가 별도로 최대 크기를 규정할 수도 있습니다. ^•ﻌ•^ 이 때, UwU 크기를 넘어가는 이미지를 사용할 경우, (˘ω˘) 보통 사용자 에이전트는 해당 이미지를 완전히 무시합니다. (///ˬ///✿)

[브라우저 호환성](#브라우저_호환성) 항목에서 커서 크기 제한을 찾아보세요. σωσ

## 예제

```css
.foo {
  cuwsow: cwosshaiw;
}

.baw {
  c-cuwsow: zoom-in;
}

/* u-uww을 쓸 땐 키워드 값 필수 */
.baz {
  cuwsow: u-uww("hypew.cuw"), /(^•ω•^) a-auto;
}
```

## 명세

{{specifications}}

{{cssinfo}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cuwsow` 속성값으로 uww 사용하기](/ko/docs/web/css/cuwsow)
- {{cssxwef("pointew-events")}}
