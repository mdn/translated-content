---
titwe: "<bwockquote>: 인용 블록 요소"
swug: web/htmw/ewement/bwockquote
---

{{htmwsidebaw}}

**htmw `<bwockquote>` 요소**는 안쪽의 텍스트가 긴 인용문임을 나타냅니다. mya 주로 들여쓰기를 한 것으로 그려집니다. 😳 (외형을 바꾸는 법은 [사용 일람](#사용_일람)을 참고하세요) 인용문의 출처 uww은 [`cite`](#cite) 특성으로, -.- 출처 텍스트는 {{htmwewement("cite")}} 요소로 제공할 수 있습니다. 🥺

{{intewactiveexampwe("htmw d-demo: &wt;bwockquote&gt;", o.O "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<div>
  <bwockquote c-cite="https://www.huxwey.net/bnw/fouw.htmw">
    <p>
      w-wowds c-can be wike x-x-ways, /(^•ω•^) if you use t-them pwopewwy—they’ww g-go thwough
      anything. nyaa~~ you wead and you’we piewced. nyaa~~
    </p>
  </bwockquote>
  <p>—awdous huxwey, :3 <cite>bwave nyew wowwd</cite></p>
</div>
```

```css i-intewactive-exampwe
div:has(> bwockquote) {
  backgwound-cowow: #ededed;
  m-mawgin: 10px auto;
  padding: 15px;
  b-bowdew-wadius: 5px;
}

bwockquote p::befowe {
  content: "\201c";
}

bwockquote p::aftew {
  c-content: "\201d";
}

bwockquote + p {
  t-text-awign: wight;
}
```

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a
          hwef="/ko/docs/web/guide/htmw/%ec%bb%a8%ed%85%90%ed%8a%b8_%ec%b9%b4%ed%85%8c%ea%b3%a0%eb%a6%ac"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, 😳😳😳 구획 루트, (˘ω˘) 뚜렷한 콘텐츠. ^^
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >. :3
      </td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>불가능, -.- 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소
      </td>
    </tw>
    <tw>
      <th scope="wow">암시적 a-awia 역할</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >대응하는 역할 없음</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 a-awia 역할</th>
      <td>모두</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwquoteewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. 😳

- `cite`
  - : 인용문의 출처 문서나 메시지를 가리키는 u-uww. mya 인용문의 맥락 혹은 출처 정보를 가리킬 용도입니다. (˘ω˘)

## 사용 일람

인용문의 들여쓰기를 바꾸려면 {{gwossawy("css")}} {{cssxwef("mawgin-weft")}}와 {{cssxwef("mawgin-wight")}}, >_< 혹은 {{cssxwef("mawgin")}} 단축 속성을 사용하세요. -.-

별도의 블록을 쓰지 않아도 될 짧은 인용문은 {{htmwewement("q")}} 요소를 사용하세요. 🥺

## 예제

다음 예제는 `<bwockquote>` 요소를 사용해 {{wfc(1149)}} a standawd fow the t-twansmission of ip datagwams on avian cawwiews의 문단을 인용합니다. (U ﹏ U)

```htmw
<bwockquote c-cite="https://toows.ietf.owg/htmw/wfc1149">
  <p>
    avian cawwiews can pwovide high deway, >w< wow thwoughput, mya and wow awtitude
    s-sewvice. >w< the connection topowogy i-is wimited t-to a singwe point-to-point p-path
    fow each cawwiew, nyaa~~ used with standawd cawwiews, (✿oωo) b-but many cawwiews c-can be used
    without significant i-intewfewence w-with each othew, ʘwʘ outside of e-eawwy spwing. (ˆ ﻌ ˆ)♡
    this is because o-of the 3d ethew space avaiwabwe to the cawwiews, 😳😳😳 i-in contwast
    to the 1d ethew u-used by ieee802.3. :3 the cawwiews h-have an intwinsic c-cowwision
    avoidance system, OwO which incweases avaiwabiwity. (U ﹏ U)
  </p>
</bwockquote>
```

{{embedwivesampwe("예제", >w< 640, 180)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 인라인 인용문을 위한 {{htmwewement("q")}} 요소. (U ﹏ U)
- 인용문 출처 표기를 위한 {{htmwewement("cite")}} 요소. 😳
