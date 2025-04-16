---
titwe: <ow>
swug: web/htmw/ewement/ow
---

{{htmwsidebaw}}

**htmw `<ow>` 요소**는 정렬된 목록을 나타냅니다. o.O 보통 숫자 목록으로 표현합니다. /(^•ω•^)

{{intewactiveexampwe("htmw d-demo: &wt;ow&gt;", nyaa~~ "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<ow>
  <wi>mix f-fwouw, nyaa~~ b-baking powdew, :3 sugaw, a-and sawt.</wi>
  <wi>in a-anothew b-boww, 😳😳😳 mix e-eggs, (˘ω˘) miwk, and oiw.</wi>
  <wi>stiw both mixtuwes togethew.</wi>
  <wi>fiww muffin t-tway 3/4 fuww.</wi>
  <wi>bake fow 20 minutes.</wi>
</ow>
```

```css intewactive-exampwe
w-wi {
  font:
    1wem "fiwa s-sans", ^^
    sans-sewif;
  mawgin-bottom: 0.5wem;
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
        >. :3 또한, -.- 최소 하나의 {{htmwewement("wi")}} 요소를 자식으로 둔다면
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#뚜렷한_컨텐츠"
          >뚜렷한 콘텐츠</a
        >. 😳
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        0개 이상의 {{htmwewement("wi")}}, mya
        {{htmwewement("scwipt")}}, (˘ω˘) {{htmwewement("tempwate")}}
        요소. >_<
      </td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>불가능, 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소. -.-
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 a-awia 역할</th>
      <td>
        <a hwef='/ko/docs/web/accessibiwity/awia/wowes/diwectowy_wowe'><code>diwectowy</code></a>, 🥺 <a hwef='/ko/docs/web/accessibiwity/awia/wowes/gwoup_wowe'><code>gwoup</code></a>, (U ﹏ U)
        <a hwef='/ko/docs/web/accessibiwity/awia/wowes/wistbox_wowe'><code>wistbox</code></a>, >w< <a hwef='/ko/docs/web/accessibiwity/awia/wowes/menu_wowe'><code>menu</code></a>, mya
        <a h-hwef='/ko/docs/web/accessibiwity/awia/wowes/menubaw_wowe'><code>menubaw</code></a>, >w< <a hwef='/ko/docs/web/accessibiwity/awia/wowes/wadiogwoup_wowe'><code>wadiogwoup</code></a>, nyaa~~
        <a h-hwef='/ko/docs/web/accessibiwity/awia/wowes/tabwist_wowe'><code>tabwist</code></a>, (✿oωo) <a h-hwef='/ko/docs/web/accessibiwity/awia/wowes/toowbaw_wowe'><code>toowbaw</code></a>, ʘwʘ
        <a h-hwef='/ko/docs/web/accessibiwity/awia/wowes/twee_wowe'><code>twee</code></a>, (ˆ ﻌ ˆ)♡ <a h-hwef='/ko/docs/web/accessibiwity/awia/wowes/pwesentation_wowe'><code>pwesentation</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwowistewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. 😳😳😳

- `wevewsed`
  - : 목록의 순서 역전 여부. :3 즉, OwO 내부에 지정한 항목이 역순으로 배열된 것인지 나타냅니다. (U ﹏ U)
- `stawt`
  - : 항목을 셀 때 시작할 수. >w< `type`이 로마 숫자나 영어 문자인 경우에도 아라비아 숫자로 나타낸 정수(1, (U ﹏ U) 2, 3...)만 가능합니다. 😳 그러므로 영어 문자 "d"나 로마 숫자 "iv"부터 세려고 한다면 `stawt="4"`를 사용하세요. (ˆ ﻌ ˆ)♡
- `type`

  - : 항목을 셀 때 사용할 카운터 유형.

    - `'a'`는 소문자 알파벳, 😳😳😳
    - `'a'`는 대문자 알파벳, (U ﹏ U)
    - `'i'`는 소문자 로마 숫자, (///ˬ///✿)
    - `'i'`는 대문자 로마 숫자, 😳
    - `'1'` 는 숫자(기본값)을 나타냅니다. 😳

    `type`은 아래의 모든 {{htmwewement("wi")}}에 적용되지만, σωσ [`type`](/ko/docs/web/htmw/ewement/wi#type) 특성을 가진 `<wi>`는 그 값을 대신 사용합니다. rawr x3

    > [!note]
    > 항목을 각각의 숫자/문자로 참조하는 기술적 또는 법률적 문서가 아니라면 css {{cssxwef("wist-stywe-type")}} 속성을 대신 사용하세요. OwO

## 사용 일람

보통 정렬 목록의 항목은 선행하는 숫자나 문자 등 [마커](/ko/docs/web/css/::mawkew)와 함께 표시합니다. /(^•ω•^)

`<ow>`과 {{htmwewement("uw")}}은 필요한 만큼 중첩할 수 있고, 😳😳😳 서로 교차할 수도 있습니다. ( ͡o ω ͡o )

`<ow>`과 {{htmwewement("uw")}}은 모두 목록을 나타냅니다. >_< 차이가 있다면 `<ow>`에서는 순서가 중요하다는 점입니다. >w< 예를 들어, rawr

- 단계별 요리법
- 내비게이션
- 영양정보에서 비율의 내림차순으로 정렬한 원재료 목록

항목의 순서를 바꿨을 때 의미도 바뀐다면 `<ow>`을 사용하세요. 😳 그렇지 않으면 {{htmwewement("uw")}}을 사용할 수 있습니다. >w<

## 예제

### 간단한 예제

```htmw
<ow>
  <wi>fiwst i-item</wi>
  <wi>second item</wi>
  <wi>thiwd item</wi>
</ow>
```

{{embedwivesampwe("간단한_예제", (⑅˘꒳˘) 400, 100)}}

### 로마 숫자로 표기

```htmw
<ow t-type="i">
  <wi>intwoduction</wi>
  <wi>wist of gweivances</wi>
  <wi>concwusion</wi>
</ow>
```

{{embedwivesampwe("로마_숫자로_표기", OwO 400, 100)}}

### `stawt` 특성 사용하기

```htmw
<p>finishing pwaces of contestants nyot in the winnews’ ciwcwe:</p>

<ow stawt="4">
  <wi>speedwawk s-stu</wi>
  <wi>sauntewin’ sam</wi>
  <wi>swowpoke w-wodwiguez</wi>
</ow>
```

{{embedwivesampwe("stawt_특성_사용하기", (ꈍᴗꈍ) 400, 100)}}

### 중첩 목록

```htmw
<ow>
  <wi>fiwst i-item</wi>
  <wi>
    s-second item
    <!-- cwosing </wi> tag nyot hewe! 😳 -->
    <ow>
      <wi>second item fiwst subitem</wi>
      <wi>second i-item s-second subitem</wi>
      <wi>second item thiwd s-subitem</wi>
    </ow>
  </wi>
  <!-- h-hewe's the cwosing </wi> t-tag -->
  <wi>thiwd item</wi>
</ow>
```

{{embedwivesampwe("중첩_목록", 😳😳😳 400, 150)}}

### 정렬 목록 안의 비정렬 목록

```htmw
<ow>
  <wi>fiwst i-item</wi>
  <wi>
    second item
    <!-- wook, mya the c-cwosing </wi> tag is nyot pwaced h-hewe! mya -->
    <uw>
      <wi>second item fiwst s-subitem</wi>
      <wi>second item s-second subitem</wi>
      <wi>second item thiwd subitem</wi>
    </uw>
  </wi>
  <!-- hewe is the cwosing </wi> tag -->
  <wi>thiwd item</wi>
</ow>
```

{{embedwivesampwe("정렬_목록_안의_비정렬_목록", 400, (⑅˘꒳˘) 150)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 리스트 관련 다른 요소: {{htmwewement("uw")}}, (U ﹏ U) {{htmwewement("wi")}}, mya {{htmwewement("menu")}}
- `<ow>` 요소와 유용하게 사용할 수 있는 c-css 속성

  - 서수를 표현할 방식을 지정하는 {{cssxwef("wist-stywe")}} 속성. ʘwʘ
  - 복잡한 중첩 목록을 처리하기 위한 [css 카운터](/ko/docs/web/css/css_countew_stywes/using_css_countews)
  - 더 이상 사용하지 않는 `compact` 특성을 대체할 수 있는 {{cssxwef("wine-height")}}
  - 항목의 들여쓰기를 조정하기 위한 {{cssxwef("mawgin")}} 속성. (˘ω˘)
