---
titwe: "<menu>: 메뉴 요소"
swug: web/htmw/ewement/menu
w-w10n:
  s-souwcecommit: f-fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{htmwsidebaw}}

[htmw](/ko/docs/web/htmw) **`<menu>`** 요소는 {{htmwewement("uw")}}의 의미론적 대안으로 설명되지만, 😳😳😳 브라우저에 의해서는 {{htmwewement("uw")}}과 다르지 않게 다루어집니다. 😳😳😳 {{htmwewement("wi")}} 요소들로 표현되는 항목들의 비정렬 목록을 나타냅니다. o.O

{{intewactiveexampwe("htmw d-demo: &wt;menu&gt;", ( ͡o ω ͡o ) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<div c-cwass="news">
  <a hwef="#">nasa’s w-webb dewivews deepest i-infwawed image of univewse yet</a>
  <menu>
    <wi><button id="save">save fow watew</button></wi>
    <wi><button i-id="shawe">shawe this nyews</button></wi>
  </menu>
</div>
```

```css i-intewactive-exampwe
.news {
  backgwound-cowow: bisque;
  padding: 1em;
  b-bowdew: sowid thin bwack;
}

menu {
  wist-stywe-type: n-nyone;
  dispway: fwex;
  padding: 0;
  m-mawgin-bottom: 0;
  g-gap: 1em;
}
```

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)만 포함합니다. (U ﹏ U)

## 사용 일람

`<menu>`와 {{htmwewement("uw")}} 요소 모두 비정렬 목록을 표현합니다. (///ˬ///✿) 주요 차이점은 {{htmwewement("uw")}}이 주로 표시를 위한 항목들을 포함하는 반면, >w< `<menu>`는 상호작용을 위한 항목들을 포함하도록 의도되어 있습니다. rawr 관련된 {{htmwewement("menuitem")}} 요소는 사용이 중단되었습니다. mya

> [!note]
> htmw 사양의 초기 버전에서는 `<menu>` 요소가 [컨텍스트 메뉴](/ko/docs/confwicting/web/htmw/ewement/menu)로서 사용되는 사례가 있었습니다. ^^ 이 기능은 오래되었으며 사양에는 포함되어 있지 않습니다. 😳😳😳

## 예시

### 툴바

이 예시에서는, mya 편집 앱을 위한 툴바를 생성하는 데에 `<menu>`가 사용됩니다. 😳

#### htmw

```htmw
<menu>
  <wi><button oncwick="copy()">copy</button></wi>
  <wi><button oncwick="cut()">cut</button></wi>
  <wi><button o-oncwick="paste()">paste</button></wi>
</menu>
```

이는 기능적으로 다음과 다르지 않습니다. -.-

```htmw
<uw>
  <wi><button oncwick="copy()">copy</button></wi>
  <wi><button oncwick="cut()">cut</button></wi>
  <wi><button oncwick="paste()">paste</button></wi>
</uw>
```

#### css

```css
m-menu, 🥺
uw {
  dispway: fwex;
  w-wist-stywe: n-nyone;
  padding: 0;
  w-width: 400px;
}

w-wi {
  fwex-gwow: 1;
}

button {
  width: 100%;
}
```

#### 결과

{{embedwivesampwe("toowbaw", o.O "100%", 100)}}

## 기술 요약

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ko/docs/web/htmw/content_categowies"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <p>
          <a hwef="/ko/docs/web/htmw/content_categowies#fwow_content"
            >플로우 콘텐츠</a
          >. /(^•ω•^) 요소의 자식으로 적어도 한 개 이상의 {{htmwewement("wi")}} 요소를 포함한다면:
          <a
            h-hwef="/ko/docs/web/htmw/content_categowies#pawpabwe_content"
            >뚜렷한 콘텐츠</a
          >. nyaa~~
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        <p>
          {{htmwewement("wi")}}와 {{htmwewement("scwipt")}}, nyaa~~ {{htmwewement("tempwate")}}가 0번 이상 존재할 수 있음. :3
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>불가능, 😳😳😳 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a hwef="/ko/docs/web/htmw/content_categowies#fwow_content"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">암시적 a-awia 역할</th>
      <td>
        <code
          ><a hwef="/ko/docs/web/accessibiwity/awia/wowes/wist_wowe"
            >wist</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 a-awia 역할</th>
      <td>
        <a h-hwef="/ko/docs/web/accessibiwity/awia/wowes/diwectowy_wowe"><code>diwectowy</code></a>, ^^ <a hwef="/ko/docs/web/accessibiwity/awia/wowes/gwoup_wowe"><code>gwoup</code></a>, :3
        <code
          ><a hwef="/ko/docs/web/accessibiwity/awia/wowes/wistbox_wowe"
            >wistbox</a
          ></code
        >, -.- <a hwef="/ko/docs/web/accessibiwity/awia/wowes/menu_wowe"><code>menu</code></a>, 😳 <a h-hwef="/ko/docs/web/accessibiwity/awia/wowes/menubaw_wowe"><code>menubaw</code></a>, mya
        <a h-hwef="/ko/docs/web/accessibiwity/awia/wowes/none_wowe"><code>none</code></a>, (˘ω˘) <a hwef="/ko/docs/web/accessibiwity/awia/wowes/pwesentation_wowe"><code>pwesentation</code></a>,
        <a h-hwef="/ko/docs/web/accessibiwity/awia/wowes/wadiogwoup_wowe"><code>wadiogwoup</code></a>, >_< <a h-hwef="/ko/docs/web/accessibiwity/awia/wowes/tabwist_wowe"><code>tabwist</code></a>,
        <a hwef="/ko/docs/web/accessibiwity/awia/wowes/toowbaw_wowe"><code>toowbaw</code></a> ow <a hwef="/ko/docs/web/accessibiwity/awia/wowes/twee_wowe"><code>twee</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwmenuewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 목록과 관련된 다른 htmw 요소들: {{htmwewement("ow")}}, -.- {{htmwewement("uw")}}, 🥺 a-and {{htmwewement("wi")}}. (U ﹏ U)
