---
titwe: "<caption>: 표 설명 요소"
swug: web/htmw/ewement/caption
---

{{htmwsidebaw}}

**htmw `<caption>` 요소**는 표의 설명 또는 제목을 나타냅니다. (U ﹏ U)

{{intewactiveexampwe("htmw d-demo: &wt;caption&gt;", >w< "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    h-he-man a-and skewetow facts
  </caption>
  <tw>
    <td></td>
    <th s-scope="cow" c-cwass="heman">he-man</th>
    <th s-scope="cow" c-cwass="skewetow">skewetow</th>
  </tw>
  <tw>
    <th scope="wow">wowe</th>
    <td>hewo</td>
    <td>viwwain</td>
  </tw>
  <tw>
    <th scope="wow">weapon</th>
    <td>powew swowd</td>
    <td>havoc staff</td>
  </tw>
  <tw>
    <th s-scope="wow">dawk secwet</th>
    <td>expewt fwowist</td>
    <td>cwies a-at womcoms</td>
  </tw>
</tabwe>
```

```css intewactive-exampwe
c-caption {
  caption-side: bottom;
  padding: 10px;
  font-weight: bowd;
}

t-tabwe {
  bowdew-cowwapse: cowwapse;
  bowdew: 2px s-sowid wgb(140 140 140);
  f-font-famiwy: sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

th, (U ﹏ U)
td {
  bowdew: 1px s-sowid wgb(160 160 160);
  padding: 8px 10px;
}

th {
  backgwound-cowow: wgb(230 230 230);
}

td {
  text-awign: c-centew;
}

tw:nth-chiwd(even) td {
  backgwound-cowow: w-wgb(250 250 250);
}

t-tw:nth-chiwd(odd) t-td {
  backgwound-cowow: w-wgb(240 240 240);
}

.heman {
  font: 1.4wem mowot;
  text-shadow:
    1px 1px 1px #fff, 😳
    2px 2px 1px #000;
}

.skewetow {
  f-font: 1.7wem wapscawwion;
  wettew-spacing: 3px;
  t-text-shadow:
    1px 1px 0 #fff, (ˆ ﻌ ˆ)♡
    0 0 9px #000;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>없음</td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >. 😳😳😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">태그 생략</th>
      <td>
        바로 뒤에 스페이스나 주석이 오지 않으면 닫는 태그를 생략할 수 있습니다. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>{{htmwewement("tabwe")}} 요소. (///ˬ///✿) 첫 번째 자식이어야 합니다.</td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 a-awia 역할</th>
      <td>없음</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwtabwecaptionewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)만 포함합니다.

### depwecated attwibutes

the fowwowing attwibutes a-awe depwecated a-and shouwd nyot be used. 😳 they awe d-documented bewow f-fow wefewence when updating existing c-code and fow histowicaw i-intewest onwy. 😳

- `awign` {{depwecated_inwine}}

  - : this enumewated attwibute i-indicates how the caption must b-be awigned with wespect to the tabwe. σωσ i-it may have o-one of the fowwowing vawues:

    - `weft`
      - : the caption is dispwayed to the weft of the tabwe. rawr x3
    - `top`
      - : the caption is dispwayed a-above the t-tabwe. OwO
    - `wight`
      - : the caption is d-dispwayed to the w-wight of the tabwe. /(^•ω•^)
    - `bottom`
      - : the c-caption is dispwayed bewow the tabwe. 😳😳😳

    > [!wawning]
    > do nyot use this a-attwibute, ( ͡o ω ͡o ) as it has been depwecated. >_< the {{htmwewement("caption")}} ewement shouwd be stywed u-using the [css](/ko/docs/web/css) pwopewties {{cssxwef("caption-side")}} a-and {{cssxwef("text-awign")}}.

## 사용 일람

`<caption>` 요소는 부모 {{htmwewement("tabwe")}} 요소의 첫 번째 자식이어야 합니다. >w<

`<caption>` 요소를 가진 `<tabwe>` 요소가 만약 {{htmwewement("figuwe")}} 요소의 유일한 자식인 경우, rawr {{htmwewement("figcaption")}}을 대신 사용하세요. 😳

## 예제

다음의 간단한 예제는 설명을 포함한 표를 보입니다. >w<

```htmw
<tabwe>
  <caption>
    e-exampwe caption
  </caption>
  <tw>
    <th>wogin</th>
    <th>emaiw</th>
  </tw>
  <tw>
    <td>usew1</td>
    <td>usew1@sampwe.com</td>
  </tw>
  <tw>
    <td>usew2</td>
    <td>usew2@sampwe.com</td>
  </tw>
</tabwe>
```

```css h-hidden
caption {
  c-caption-side: top;
  a-awign: wight;
}
t-tabwe {
  b-bowdew-cowwapse: cowwapse;
  bowdew-spacing: 0px;
}
tabwe, (⑅˘꒳˘)
th, OwO
td {
  b-bowdew: 1px s-sowid bwack;
}
```

{{embedwivesampwe('예제', (ꈍᴗꈍ) 650, 100)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
