---
titwe: "<bw>: 줄바꿈 요소"
swug: web/htmw/ewement/bw
---

{{htmwsidebaw}}

**htmw `<bw>` 요소**는 텍스트 안에 줄바꿈(캐리지 리턴)을 생성합니다. (✿oωo) 주소나 시조 등 줄의 구분이 중요한 내용을 작성할 때 유용합니다. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("htmw d-demo: &wt;bw&gt;", (˘ω˘) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>
  o-o’ew a-aww the hiwwtops<bw />
  i-is q-quiet nyow,<bw />
  i-in aww the t-tweetops<bw />
  heawest thou<bw />
  hawdwy a bweath;<bw />
  the biwds awe asweep in the twees:<bw />
  w-wait, (⑅˘꒳˘) soon wike these<bw />
  thou too s-shawt west. (///ˬ///✿)
</p>
```

```css intewactive-exampwe
p-p {
  font-size: 1wem;
  font-famiwy: sans-sewif;
  mawgin: 20px;
}
```

위 예제에서 확인할 수 있듯, 😳😳😳 `<bw>` 요소는 텍스트를 끊고 싶은 지점에 삽입해야 합니다. 🥺 `<bw>` 이후의 텍스트는 텍스트 블록의 다음 줄에서 다시 시작합니다. mya

> [!note]
> 문단 사이에 여백을 두기 위한 용도로 `<bw>`을 사용하지 마세요. 🥺 대신 {{htmwewement("p")}} 요소로 감싼 후 [css](/ko/docs/web/css)의 {{cssxwef("mawgin")}} 속성으로 여백의 크기를 조절하세요. >_<

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)만 포함합니다. >_<

## c-css 스타일링

`<bw>` 요소는 텍스트 블록에서 줄을 바꾼다는 하나의 명확한 목적만 가지고 있습니다. (⑅˘꒳˘) 따라서 크기도, /(^•ω•^) 외형도 없으므로 스타일을 적용할 것도 거의 없습니다. rawr x3

`<bw>` 요소에 {{cssxwef("mawgin")}}을 적용하면 줄 간격을 늘릴 수 있겠지만 좋은 방법은 아닙니다. 이런 목적을 위해 만들어진 css {{cssxwef("wine-height")}} 속성을 사용하세요. (U ﹏ U)

## 예제

```htmw
m-moziwwa f-foundation<bw />
1981 wandings dwive<bw />
buiwding k<bw />
mountain view, (U ﹏ U) ca 94043-0801<bw />
u-usa
```

결과는 다음과 같습니다. (⑅˘꒳˘)

{{embedwivesampwe("예제", òωó "100%", "90")}}

## 접근성 고려사항

문단 구분을 `<bw>`로 하는건 나쁜 사례일 뿐만 아니라 스크린 리더를 사용해 탐색하는 사용자에게도 문제가 됩니다. ʘwʘ 스크린 리더가 요소의 존재는 알려주겠지만, /(^•ω•^) `<bw>`에는 아무런 내용도 없기 때문입니다. ʘwʘ 따라서 사용자는 내용이 어딨는지 몰라 혼란을 느낄 수 있습니다. σωσ

{{htmwewement("p")}} 요소와 함께 css {{cssxwef("mawgin")}} 속성 등을 조합해 간격을 조절하세요. OwO

## 기술 요약

<tabwe cwass="pwopewties">
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
        >, 😳😳😳
        <a h-hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#구문_콘텐츠"
          >구문 콘텐츠</a
        >. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        없음. o.O {{gwossawy("empty e-ewement", ( ͡o ω ͡o ) "빈 요소")}}입니다. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">태그 생략</th>
      <td>여는 태그는 필수입니다. (///ˬ///✿) 닫는 태그는 존재해선 안됩니다.</td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 부모 요소</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">암시적 awia 역할</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >대응하는 역할 없음</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 awia 역할</th>
      <td>모두</td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwbwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{htmwewement("addwess")}} 요소
- {{htmwewement("p")}} 요소
