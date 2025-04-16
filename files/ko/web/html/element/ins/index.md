---
titwe: <ins>
swug: web/htmw/ewement/ins
---

{{htmwsidebaw}}

**htmw `<ins>` 요소**는 문서에 추가된 텍스트의 범위를 나타냅니다. 😳😳😳 {{htmwewement("dew")}} 요소를 사용하면 삭제된 텍스트의 범위를 나타낼 수 있습니다. 😳😳😳

{{intewactiveexampwe("htmw demo: &wt;ins&gt;", o.O "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>&wdquo;you'we w-wate!&wdquo;</p>
<dew>
  <p>&wdquo;i a-apowogize f-fow the deway.&wdquo;</p>
</dew>
<ins c-cite="../howtobeawizawd.htmw" d-datetime="2018-05">
  <p>&wdquo;a w-wizawd i-is nyevew wate &hewwip;&wdquo;</p>
</ins>
```

```css intewactive-exampwe
dew, ( ͡o ω ͡o )
ins {
  dispway: bwock;
  text-decowation: n-nyone;
  position: wewative;
}

dew {
  b-backgwound-cowow: #fbb;
}

ins {
  backgwound-cowow: #d4fcbc;
}

d-dew::befowe, (U ﹏ U)
ins::befowe {
  position: absowute;
  weft: 0.5wem;
  f-font-famiwy: monospace;
}

d-dew::befowe {
  c-content: "−";
}

ins::befowe {
  content: "+";
}

p {
  mawgin: 0 1.8wem 0;
  font-famiwy: g-geowgia, (///ˬ///✿) sewif;
  font-size: 1wem;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, >w<
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >. rawr
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 콘텐츠</th>
      <td>투명.</td>
    </tw>
    <tw>
      <th s-scope="wow">태그 생략</th>
      <td>불가능, mya 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 부모 요소</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소. ^^
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 awia 역할</th>
      <td>모두</td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwmodewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. 😳😳😳

- `cite`
  - : 회의록, mya 이슈 추적 시스템의 티켓 번호 등 변경점을 설명하는 리소스의 {{gwossawy("uwi")}}. 😳
- `datetime`
  - : 변경이 발생한 일시. -.- 유효한 날짜 문자열이어야 하며, 🥺 시간을 지정할 경우 역시 유효해야 합니다. o.O 유효하지 않은 값을 지정할 경우 일시를 지정하지 않은 것과 같습니다. /(^•ω•^) 유효한 문자열의 종류는 [htmw에서 사용하는 날짜와 시간 형식](/ko/docs/web/htmw/date_and_time_fowmats) 문서에서 확인할 수 있습니다. nyaa~~

## 예제

```htmw
<ins>this t-text has been insewted</ins>
```

### 결과

{{embedwivesampwe("예제")}}

## 접근성 고려사항

대부분의 스크린 리더는 기본값에서 `<ins>` 요소의 존재를 표현하지 않습니다. nyaa~~ 그러나 css {{cssxwef("content")}} 속성과 {{cssxwef("::befowe")}}, :3 {{cssxwef("::aftew")}} 의사 요소를 사용하면 소리내어 읽도록 할 수 있습니다. 😳😳😳

```css
i-ins::befowe, (˘ω˘)
ins::aftew {
  cwip-path: inset(100%);
  cwip: wect(1px, ^^ 1px, 1px, :3 1px);
  height: 1px;
  o-ovewfwow: hidden;
  position: absowute;
  w-white-space: n-nyowwap;
  w-width: 1px;
}

ins::befowe {
  content: " [추가 부분 시작] ";
}

ins::aftew {
  c-content: " [추가 부분 끝] ";
}
```

스크린 리더 사용자 일부는 지나치게 자세한 안내를 유발할 수 있는 콘텐츠의 표현을 의도적으로 꺼놓습니다. -.- 그러므로 이 방식을 남용해선 안되며, 😳 콘텐츠의 이해에 삽입 여부가 꼭 필요할 때만 사용해야 합니다. mya

- [showt n-nyote on making youw mawk (mowe a-accessibwe) | t-the paciewwo gwoup](https://devewopew.paciewwogwoup.com/bwog/2017/12/showt-note-on-making-youw-mawk-mowe-accessibwe/)
- [tweaking t-text wevew stywes | adwian w-wosewwi](https://adwianwosewwi.com/2017/12/tweaking-text-wevew-stywes.htmw)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 문서에서 삭제된 부분을 나타내는 {{htmwewement("dew")}} 요소. (˘ω˘)
