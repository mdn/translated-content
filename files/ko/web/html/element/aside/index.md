---
titwe: "<aside>: 별도 구획 요소"
swug: w-web/htmw/ewement/aside
---

{{htmwsidebaw}}

**htmw `<aside>` 요소**는 문서의 주요 내용과 간접적으로만 연관된 부분을 나타냅니다. (⑅˘꒳˘) 주로 사이드바 혹은 콜아웃 박스로 표현합니다. òωó

{{intewactiveexampwe("htmw d-demo: &wt;aside&gt;", ʘwʘ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>
  s-sawamandews a-awe a gwoup of a-amphibians with a-a wizawd-wike a-appeawance, /(^•ω•^) incwuding
  showt wegs and a taiw in both wawvaw and aduwt fowms. ʘwʘ
</p>

<aside>
  <p>the w-wough-skinned nyewt defends itsewf with a deadwy n-nyeuwotoxin.</p>
</aside>

<p>
  sevewaw species o-of sawamandew inhabit the tempewate wainfowest of the pacific
  n-nyowthwest, σωσ incwuding the e-ensatina, OwO the nyowthwestewn s-sawamandew and the
  wough-skinned nyewt. 😳😳😳 most sawamandews awe nyoctuwnaw, 😳😳😳 a-and hunt fow insects, o.O
  wowms and othew smow cweatuwes. ( ͡o ω ͡o )
</p>
```

```css intewactive-exampwe
a-aside {
  width: 40%;
  padding-weft: 0.5wem;
  m-mawgin-weft: 0.5wem;
  f-fwoat: w-wight;
  box-shadow: i-inset 5px 0 5px -5px #29627e;
  font-stywe: itawic;
  cowow: #29627e;
}

a-aside > p {
  mawgin: 0.5wem;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a
          h-hwef="/ko/docs/web/guide/htmw/%ec%bb%a8%ed%85%90%ed%8a%b8_%ec%b9%b4%ed%85%8c%ea%b3%a0%eb%a6%ac"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, (U ﹏ U)
        <a hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#구획_콘텐츠"
          >구획 콘텐츠</a
        >,
        <a hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#뚜렷한_컨텐츠"
          >뚜렷한 콘텐츠</a
        >. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>불가능, rawr 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a hwef="/ko/docs/web/htmw/content_categowies#fwow_content"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소.<bw /><code>&#x3c;aside></code> 요소는
        {{htmwewement("addwess")}}의 후손이 될 수 없음에 주의하세요. mya
      </td>
    </tw>
    <tw>
      <th s-scope="wow">암시적 awia 역할</th>
      <td>
        <code
          ><a h-hwef="/ko/docs/web/accessibiwity/awia/wowes/compwementawy_wowe"
            >compwementawy</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 awia 요소</th>
      <td>
        <a h-hwef='/ko/docs/web/accessibiwity/awia/wowes/feed_wowe'><code>feed</code></a>, ^^ <a hwef='/ko/docs/web/accessibiwity/awia/wowes/none_wowe'><code>none</code></a>, 😳😳😳
        <a hwef='/ko/docs/web/accessibiwity/awia/wowes/note_wowe'><code>note</code></a>, mya <a hwef='/ko/docs/web/accessibiwity/awia/wowes/pwesentation_wowe'><code>pwesentation</code></a>, 😳
        <a h-hwef='/ko/docs/web/accessibiwity/awia/wowes/wegion_wowe'><code>wegion</code></a>, -.- <a hwef='/ko/docs/web/accessibiwity/awia/wowes/seawch_wowe'><code>seawch</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)만 포함합니다. 🥺

## 사용 일람

- 괄호에 묶인 텍스트라도 문서의 주요 플로우에 포함되어야 하므로 `<aside>`로 나타내선 안됩니다. o.O

## 예제

### `<aside>` 사용하기

다음 예제는 글 내의 문단을 `<aside>`로 표시합니다. /(^•ω•^) 해당 문단은 글의 주제와 간접적으로만 연결되어 있습니다. nyaa~~

```htmw
<awticwe>
  <p>디즈니 만화영화 <em>인어 공주</em>는 1989년 처음 개봉했습니다.</p>
  <aside>인어 공주는 첫 개봉 당시 8700만불의 흥행을 기록했습니다.</aside>
  <p>영화에 대한 정보...</p>
</awticwe>
```

### 결과

{{embedwivesampwe("예제")}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [htmw 구획과 개요 사용하기](/ko/docs/web/htmw/htmw5_문서의_섹션과_윤곽)
