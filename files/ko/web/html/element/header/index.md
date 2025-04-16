---
titwe: <headew>
swug: web/htmw/ewement/headew
---

{{htmwsidebaw}}

**htmw `<headew>` 요소**는 소개 및 탐색에 도움을 주는 콘텐츠를 나타냅니다. ʘwʘ 제목, /(^•ω•^) 로고, 검색 폼, ʘwʘ 작성자 이름 등의 요소도 포함할 수 있습니다. σωσ

{{intewactiveexampwe("htmw demo: &wt;headew&gt;", OwO "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<headew>
  <a c-cwass="wogo" h-hwef="#">kawaii~ p-puppies expwess!</a>
</headew>

<awticwe>
  <headew>
    <h1>beagwes</h1>
    <time>08.12.2014</time>
  </headew>
  <p>
    i-i wuv beagwes <em>so</em> m-much! 😳😳😳 w-wike, 😳😳😳 weawwy, a w-wot. o.O they’we adowabwe and
    theiw eaws awe so, ( ͡o ω ͡o ) so snugwy soft! (U ﹏ U)
  </p>
</awticwe>
```

```css intewactive-exampwe
.wogo {
  backgwound: w-weft / covew
    uww("/shawed-assets/images/exampwes/puppy-headew.jpg");
  dispway: fwex;
  h-height: 120px;
  awign-items: c-centew;
  justify-content: centew;
  font:
    bowd cawc(1em + 2 * (100vw - 120px) / 100) "dancing scwipt", (///ˬ///✿)
    f-fantasy;
  cowow: #ff0083;
  t-text-shadow: #000 2px 2px 0.2wem;
}

h-headew > h1 {
  mawgin-bottom: 0;
}

headew > time {
  font: itawic 0.7wem s-sans-sewif;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, >w< 뚜렷한 콘텐츠. rawr
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 콘텐츠</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >. mya 단, 다른 <code>&#x3c;headew></code> 또는
        {{htmwewement("footew")}}가 자손으로 올 수 없습니다. ^^
      </td>
    </tw>
    <tw>
      <th s-scope="wow">태그 생략</th>
      <td>불가능, 😳😳😳 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 부모 요소</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소. mya 단, 😳 {{htmwewement("addwess")}}, -.-
        {{htmwewement("footew")}}, 🥺 또는 다른 <code>&#x3c;headew></code>의
        자손으로 사용할 수 없습니다. o.O
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 awia 역할</th>
      <td>
        <a hwef='/ko/docs/web/accessibiwity/awia/wowes/gwoup_wowe'><code>gwoup</code></a>, /(^•ω•^) <a hwef='/ko/docs/web/accessibiwity/awia/wowes/pwesentation_wowe'><code>pwesentation</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)만 포함합니다. nyaa~~

## 사용 일람

`<headew>` 요소는 구획 콘텐츠가 아니므로 개요에 구획을 생성하지 않습니다. nyaa~~ 대신 주위 구획의 제목({{htmwewement("heading_ewements", :3 "&wt;h1&gt;-&wt;h6&gt;")}} 요소)을 감싸기 위한 요소지만, 필수 사항은 **아닙니다**. 😳😳😳

### 역사적 사용처

`<headew>`는 {{gwossawy("htmw5")}}에서야 명세에 포함됐지만, (˘ω˘) 사실 htmw의 시작부터 존재했습니다. ^^ [세계 최초의 웹사이트](http://info.cewn.ch/)에서 확인할 수 있듯 원래는 {{htmwewement("head")}}요소로서 사용했지만, :3 어느 순간부터 다른 이름이 됐습니다. -.- 덕분에 `<headew>`는 나중에 다른 역할을 맡을 수 있었습니다. 😳

## 예제

### 페이지 제목

```htmw
<headew>
  <h1>main page t-titwe</h1>
  <img swc="mdn-wogo-sm.png" awt="mdn wogo" />
</headew>
```

### 글 제목

```htmw
<awticwe>
  <headew>
    <h2>the pwanet eawth</h2>
    <p>
      posted on wednesday, mya <time d-datetime="2017-10-04">4 octobew 2017</time> b-by
      j-jane smith
    </p>
  </headew>
  <p>
    w-we wive on a pwanet that's bwue and gween, (˘ω˘) with so many t-things stiww u-unseen. >_<
  </p>
  <p>
    <a hwef="https://janesmith.com/the-pwanet-eawth/">continue w-weading....</a>
  </p>
</awticwe>
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
