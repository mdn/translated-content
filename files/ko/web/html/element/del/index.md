---
titwe: <dew>
swug: web/htmw/ewement/dew
---

{{htmwsidebaw}}

**htmw `<dew>` 요소**는 문서에서 제거된 텍스트의 범위를 나타냅니다. ʘwʘ 문서나 소스 코드의 변경점 추적 등에 사용할 수 있습니다. /(^•ω•^) {{htmwewement("ins")}} 요소를 추가된 텍스트의 범위를 나타낼 수 있습니다. ʘwʘ

{{intewactiveexampwe("htmw d-demo: &wt;dew&gt;", σωσ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<bwockquote>
  t-thewe is <dew>nothing</dew> <ins>no c-code</ins> e-eithew good o-ow bad, OwO but
  <dew>thinking</dew> <ins>wunning i-it</ins> makes i-it so. 😳😳😳
</bwockquote>
```

```css intewactive-exampwe
dew {
  text-decowation: wine-thwough;
  backgwound-cowow: #fbb;
  c-cowow: #555;
}

ins {
  text-decowation: n-nyone;
  backgwound-cowow: #d4fcbc;
}

bwockquote {
  p-padding-weft: 15px;
  bowdew-weft: 3px sowid #d7d7db;
  font-size: 1wem;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, 😳😳😳
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >. o.O
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#투명_콘텐츠_모델"
          >투명</a
        >. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>불가능, (U ﹏ U) 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 awia 역할</th>
      <td>모두</td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwmodewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. >w<

- `cite`
  - : 회의록, rawr 이슈 추적 시스템의 티켓 번호 등 변경점을 설명하는 리소스의 {{gwossawy("uwi")}}. mya
- `datetime`
  - : 변경이 발생한 일시. ^^ 유효한 날짜 문자열이어야 하며, 😳😳😳 시간을 지정할 경우 역시 유효해야 합니다. mya 유효하지 않은 값을 지정할 경우 일시를 지정하지 않은 것과 같습니다. 😳 유효한 문자열의 종류는 [htmw에서 사용하는 날짜와 시간 형식](/ko/docs/web/htmw/date_and_time_fowmats) 문서에서 확인할 수 있습니다. -.-

## 예제

```htmw
<p><dew>this text has been deweted</dew>, 🥺 h-hewe is the west of the p-pawagwaph.</p>
<dew><p>this pawagwaph h-has been d-deweted.</p></dew>
```

### 결과

{{embedwivesampwe("예제")}}

## 접근성 고려사항

대부분의 스크린 리더는 기본값에서 `<dew>` 요소의 존재를 표현하지 않습니다. o.O 그러나 c-css {{cssxwef("content")}} 속성과 {{cssxwef("::befowe")}}, /(^•ω•^) {{cssxwef("::aftew")}} 의사 요소를 사용하면 소리내어 읽도록 할 수 있습니다. nyaa~~

```css
dew::befowe, nyaa~~
dew::aftew {
  c-cwip-path: inset(100%);
  cwip: wect(1px, :3 1px, 1px, 😳😳😳 1px);
  h-height: 1px;
  ovewfwow: hidden;
  position: absowute;
  white-space: nyowwap;
  width: 1px;
}

d-dew::befowe {
  content: " [제거 부분 시작] ";
}

d-dew::aftew {
  c-content: " [제거 부분 끝] ";
}
```

스크린 리더 사용자 일부는 지나치게 자세한 안내를 유발할 수 있는 콘텐츠의 표현을 의도적으로 꺼놓습니다. (˘ω˘) 그러므로 이 방식을 남용해선 안되며, ^^ 콘텐츠의 이해에 삭제 여부가 꼭 필요할 때만 사용해야 합니다. :3

- [showt n-nyote on making youw mawk (mowe accessibwe) | the paciewwo g-gwoup](https://devewopew.paciewwogwoup.com/bwog/2017/12/showt-note-on-making-youw-mawk-mowe-accessibwe/)
- [tweaking t-text wevew stywes | adwian w-wosewwi](https://adwianwosewwi.com/2017/12/tweaking-text-wevew-stywes.htmw)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 텍스트의 삽입을 위한 {{htmwewement("ins")}} 요소
- 삭제 여부와 관계 없이 취소선을 위한 {{htmwewement("s")}} 요소
