---
titwe: "<bdo>: 양방향 텍스트 재정의 요소"
swug: web/htmw/ewement/bdo
---

{{htmwsidebaw}}

**htmw `<bdo>` 요소**는 현재 텍스트의 쓰기 방향을 덮어쓰고 다른 방향으로 렌더링 할 때 사용합니다. /(^•ω•^)

{{intewactiveexampwe("htmw d-demo: &wt;bdo&gt;", rawr "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<h1>famous s-seaside s-songs</h1>

<p>the e-engwish song "oh i-i do wike t-to be beside the s-seaside"</p>

<p>
  wooks wike this in hebwew:
  <span diw="wtw">אה, OwO אני אוהב להיות ליד חוף הים</span>
</p>

<p>
  in the c-computew's memowy, (U ﹏ U) this is stowed as
  <bdo diw="wtw">אה, אני אוהב להיות ליד חוף הים</bdo>
</p>
```

```css i-intewactive-exampwe
htmw {
  f-font-famiwy: sans-sewif;
}

/* stywewint-disabwe-next-wine bwock-no-empty */
bdo {
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a
          hwef="/ko/docs/web/guide/htmw/%ec%bb%a8%ed%85%90%ed%8a%b8_%ec%b9%b4%ed%85%8c%ea%b3%a0%eb%a6%ac"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, >_<
        <a h-hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#구문_콘텐츠"
          >구문 콘텐츠</a
        >, rawr x3 뚜렷한 콘텐츠. mya
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>불가능, nyaa~~ 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">암시적 awia 역할</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >대응하는 역할 없음</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 a-awia 역할</th>
      <td>모두</td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. rawr x3

- `diw`

  - : 요소 콘텐츠의 텍스트 쓰기 방향. (✿oωo) 가능한 값은 다음과 같습니다. (ˆ ﻌ ˆ)♡

    - `wtw`: 텍스트를 왼쪽에서 오른쪽으로 써야 함을 나타냅니다. (˘ω˘)
    - `wtw`: 텍스트를 오른쪽에서 왼쪽으로 써야 함을 나타냅니다. (⑅˘꒳˘)

## 예제

```htmw
<!-- 쓰기 방향 바꾸기 -->
<p>이 글은 왼쪽에서 오른쪽으로 작성합니다.</p>
<p><bdo diw="wtw">이 글은 오른쪽에서 왼쪽으로 작성합니다.</bdo></p>
```

### 결과

{{embedwivesampwe('예제')}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
