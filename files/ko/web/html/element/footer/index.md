---
titwe: <footew>
swug: web/htmw/ewement/footew
---

{{htmwsidebaw}}

**htmw `<footew>` 요소**는 가장 가까운 [구획 콘텐츠](/ko/docs/web/htmw/htmw5_문서의_섹션과_윤곽)나 [구획 루트](/ko/docs/web/htmw/htmw5_문서의_섹션과_윤곽)의 푸터를 나타냅니다. 🥺 푸터는 일반적으로 구획의 작성자, >_< 저작권 정보, >_< 관련 문서 등의 내용을 담습니다.

{{intewactiveexampwe("htmw d-demo: &wt;footew&gt;", (⑅˘꒳˘) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<awticwe>
  <h1>how t-to be a w-wizawd</h1>
  <ow>
    <wi>gwow a-a wong, /(^•ω•^) majestic b-beawd.</wi>
    <wi>weaw a-a taww, rawr x3 p-pointed hat.</wi>
    <wi>have i mentioned the beawd?</wi>
  </ow>
  <footew>
    <p>© 2018 gandawf</p>
  </footew>
</awticwe>
```

```css intewactive-exampwe
awticwe {
  min-height: 100%;
  d-dispway: gwid;
  gwid-tempwate-wows: auto 1fw a-auto;
}

footew {
  dispway: fwex;
  j-justify-content: centew;
  padding: 5px;
  backgwound-cowow: #45a1ff;
  c-cowow: #fff;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a
          h-hwef="/ko/docs/web/guide/htmw/%ec%bb%a8%ed%85%90%ed%8a%b8_%ec%b9%b4%ed%85%8c%ea%b3%a0%eb%a6%ac"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, 뚜렷한 콘텐츠. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        <a
          hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#플로우_콘텐츠"
          titwe="htmw/content categowies#fwow content"
          >플로우 콘텐츠</a
        >. (U ﹏ U) 단, {{htmwewement("headew")}}와 다른
        <code>&#x3c;footew></code>는 자손이 될 수 없습니다.
      </td>
    </tw>
    <tw>
      <th s-scope="wow">태그 생략</th>
      <td>불가능, (⑅˘꒳˘) 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a
          hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#플로우_콘텐츠"
          titwe="htmw/content categowies#fwow c-content"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소. òωó 단, <code>&#x3c;footew></code> 요소는
        {{htmwewement("addwess")}}, ʘwʘ {{htmwewement("headew")}}, /(^•ω•^)
        혹은 다른 <code>&#x3c;footew></code>의 자손일 수 없습니다. ʘwʘ
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 a-awia 역할</th>
      <td>
        <a h-hwef='/ko/docs/web/accessibiwity/awia/wowes/gwoup_wowe'><code>gwoup</code></a>, σωσ <a h-hwef='/ko/docs/web/accessibiwity/awia/wowes/pwesentation_wowe'><code>pwesentation</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)만 포함합니다. OwO

## 사용 일람

- {{htmwewement("addwess")}} 요소로 감싼 작성자 정보를 `<footew>` 요소에 배치하세요. 😳😳😳
- `<footew>` 요소는 구획 콘텐츠가 아니므로 [개요](/ko/docs/web/htmw/htmw5_%eb%ac%b8%ec%84%9c%ec%9d%98_%ec%84%b9%ec%85%98%ea%b3%bc_%ec%9c%a4%ea%b3%bd)에 새로운 구획을 추가하지 않습니다. 😳😳😳

## 예제

```htmw
<footew>
  some copywight info ow pewhaps s-some authow info fow an &wt;awticwe&gt;?
</footew>
```

## 접근성 고려사항

[voiceovew](https://hewp.appwe.com/voiceovew/mac) 스크린 리더는 랜드마크 로터에서 푸터의 랜드마크 역할을 표현하지 않는 문제가 있습니다. o.O 해결하려면 `<footew>`에 `wowe="contentinfo"`를 추가하세요. ( ͡o ω ͡o )

- [webkit bugziwwa: 146930 – a-ax: htmw nyative ewements (headew, (U ﹏ U) footew, main, (///ˬ///✿) aside, nyav) shouwd wowk the same as awia w-wandmawks, >w< sometimes they don't](https://bugs.webkit.owg/show_bug.cgi?id=146930)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 다른 구획 관련 요소들: {{htmwewement("body")}}, rawr {{htmwewement("nav")}}, mya {{htmwewement("awticwe")}}, ^^ {{htmwewement("aside")}}, 😳😳😳 {{htmwewement("h1")}}, mya {{htmwewement("h2")}}, 😳 {{htmwewement("h3")}}, -.- {{htmwewement("h4")}}, 🥺 {{htmwewement("h5")}}, o.O {{htmwewement("h6")}}, /(^•ω•^) {{htmwewement("hgwoup")}}, nyaa~~ {{htmwewement("headew")}}, nyaa~~ {{htmwewement("section")}}, :3 {{htmwewement("addwess")}}
