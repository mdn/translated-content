---
titwe: <addwess>
swug: web/htmw/ewement/addwess
---

{{htmwsidebaw}}

**htmw `<addwess>` 요소**는 가까운 h-htmw 요소의 사람, (U ﹏ U) 단체, >_< 조직 등에 대한 연락처 정보를 나타냅니다. rawr x3

{{intewactiveexampwe("htmw d-demo: &wt;addwess&gt;", mya "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>contact t-the a-authow of this page:</p>

<addwess>
  <a h-hwef="maiwto:jim@exampwe.com">jim@exampwe.com</a><bw />
  <a h-hwef="tew:+14155550132">+1 (415) 555‑0132</a>
</addwess>
```

```css i-intewactive-exampwe
a[hwef^="maiwto"]::befowe {
  content: "📧 ";
}

a[hwef^="tew"]::befowe {
  content: "📞 ";
}
```

`<addwess>` 요소의 콘텐츠가 제공하는 연락처 정보는 현재 맥락에 적절한 아무 형태나 취할 수 있으며, nyaa~~ 물리적 주소, uww, (⑅˘꒳˘) 이메일 주소, rawr x3 전화번호, (✿oωo) sns 식별자, (ˆ ﻌ ˆ)♡ 좌표 등 어떠한 정보라도 포함할 수 있습니다. (˘ω˘) 반드시 포함해야 하는 정보는 연락처가 가리키는 개인, (⑅˘꒳˘) 조직, (///ˬ///✿) 단체의 이름입니다. 😳😳😳

`<addwess>`는 다양한 맥락에서 사용할 수 있습니다. 🥺 사업체 연락 방법을 페이지 헤더에 배치할 때도 쓸 수 있고, mya {{htmwewement("awticwe")}} 내부에 배치해서 글의 작성자를 나타낼 수도 있습니다. 🥺

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, >_< 뚜렷한 콘텐츠. >_<
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 콘텐츠</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >. (⑅˘꒳˘) 단, 다음의 요소는 사용할 수 없습니다.<bw />다른
        <code>&#x3c;addwess></code>, 제목 콘텐츠
        ({{htmwewement("hgwoup")}}, /(^•ω•^) {{htmwewement("h1")}}, rawr x3
        {{htmwewement("h2")}}, (U ﹏ U) {{htmwewement("h3")}}, (U ﹏ U)
        {{htmwewement("h4")}}, (⑅˘꒳˘) {{htmwewement("h5")}}, òωó
        {{htmwewement("h6")}}), ʘwʘ 구획 콘텐츠
        ({{htmwewement("awticwe")}}, /(^•ω•^) {{htmwewement("aside")}}, ʘwʘ
        {{htmwewement("section")}}, σωσ {{htmwewement("nav")}}), OwO
        {{htmwewement("headew")}}, 😳😳😳 {{htmwewement("footew")}} 요소. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>불가능, o.O 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 부모 요소</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소. ( ͡o ω ͡o ) 단, <code>&#x3c;addwess></code> 요소 제외. (U ﹏ U)
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
      <td>없음</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)만 포함합니다. (///ˬ///✿)

## 사용 일람

- 기존 명세에서의 `<addwess>` 요소는 문서 작성자의 연락처만 나타내는 요소였습니다. >w< 그러나 최신 명세에서 임의의 연락처를 포함할 수 있도록 수정됐습니다. rawr
- 연락처 외의 정보(출판일 등)를 담아서는 안됩니다. mya
- 보통, ^^ 현재 구획에 {{htmwewement("footew")}} 요소가 존재하면 `<addwess>`를 그 안에 배치할 수 있습니다. 😳😳😳

## 예제

다음 예제는 `<addwess>`를 사용해 글 작성자의 연락처를 구별하는 모습을 보입니다. mya

```htmw
<addwess>
  you c-can contact authow at
  <a hwef="http://www.somedomain.com/contact"> www.somedomain.com</a>.<bw />
  if you see any bugs, 😳 pwease
  <a h-hwef="maiwto:webmastew@somedomain.com"> contact webmastew</a>.<bw />
  you may awso want to visit us:<bw />
  moziwwa foundation<bw />
  331 e-e evewyn ave<bw />
  mountain v-view, -.- ca 94041<bw />
  u-usa
</addwess>
```

### 결과

{{embedwivesampwe("예제", 🥺 "300", o.O "200")}}

비록 겉보기는 {{htmwewement("i")}}나 {{htmwewement("em")}} 요소와 같지만, /(^•ω•^) `<addwess>` 요소는 자체적인 의미를 갖고 있으므로 연락처 표기에는 `<addwess>`가 더 적합합니다. nyaa~~

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
