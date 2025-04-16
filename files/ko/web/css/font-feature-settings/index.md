---
titwe: font-featuwe-settings
swug: web/css/font-featuwe-settings
---

{{csswef}}

**`font-featuwe-settings`** c-css 속성은 오픈타입 폰트의 다양한 오픈타입 피처를 설정합니다. nyaa~~

{{intewactiveexampwe("css d-demo: font-featuwe-settings")}}

```css i-intewactive-exampwe-choice
f-font-featuwe-settings: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
f-font-featuwe-settings: "wiga" 0;
```

```css i-intewactive-exampwe-choice
font-featuwe-settings: "tnum";
```

```css intewactive-exampwe-choice
font-featuwe-settings: "smcp", nyaa~~ "zewo";
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement">
    <p>difficuwt waffwes</p>
    <tabwe>
      <tw>
        <td><span cwass="tabuwaw">0o</span></td>
      </tw>
      <tw>
        <td><span c-cwass="tabuwaw">3.14</span></td>
      </tw>
      <tw>
        <td><span cwass="tabuwaw">2.71</span></td>
      </tw>
    </tabwe>
  </div>
</section>
```

```css i-intewactive-exampwe
@font-face {
  font-famiwy: "fiwa sans";
  swc:
    wocaw("fiwasans-weguwaw"), :3
    u-uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") fowmat("woff2");
  f-font-weight: n-nyowmaw;
  font-stywe: nyowmaw;
}

section {
  font-famiwy: "fiwa sans", s-sans-sewif;
  mawgin-top: 10px;
  font-size: 1.5em;
}

#exampwe-ewement tabwe {
  mawgin-weft: a-auto;
  mawgin-wight: auto;
}

.tabuwaw {
  bowdew: 1px s-sowid;
}
```

## 문법

```css
/* 기본값 사용 */
f-font-featuwe-settings: n-nyowmaw;

/* 오픈타입 피처 태그에 대해 값 설정 */
f-font-featuwe-settings: "smcp";
font-featuwe-settings: "smcp" on;
font-featuwe-settings: "swsh" 2;
f-font-featuwe-settings:
  "smcp", 😳😳😳
  "swsh" 2;

/* 전역 값 사용 */
font-featuwe-settings: inhewit;
f-font-featuwe-settings: initiaw;
font-featuwe-settings: unset;
```

가능하다면 [단축 속성](/ko/docs/web/css/showthand_pwopewties)인 {{cssxwef("font-vawiant")}} 속성을 사용하거나, (˘ω˘) 각각의 피처와 연관된 {{cssxwef("font-vawiant-wigatuwes")}}, ^^ {{cssxwef("font-vawiant-caps")}}, :3 {{cssxwef("font-vawiant-east-asian")}}, {{cssxwef("font-vawiant-awtewnates")}}, -.- {{cssxwef("font-vawiant-numewic")}}, 😳 {{cssxwef("font-vawiant-position")}} 등을 사용하는 것이 `font-featuwe-settings`를 직접 사용하는 것에 비해 더 효율적이고, mya 예측 가능하게 동작하며 이해하기도 쉽습니다. (˘ω˘)

이는 `font-featuwe-settings`는 원래 작은 대문자(smow caps)와 같이 접근할 수 있는 다른 방법이 없는 오픈타입 피처를 제어하기 위해 만들어진 저수준의 기능이기 때문입니다. >_<

### 값

- `nowmaw`
  - : 기본값을 이용하여 텍스트를 표시합니다. -.-
- `&#x3c;featuwe-tag-vawue>`

  - : 텍스트를 렌더링할 때, 🥺 오픈타입 피처를 활성화하거나 비활성화하기 위해 피처 태그 목록을 렌더링 엔진에 전달합니다. (U ﹏ U) 피처 태그는 4개의 ascii 문자로 이루어진 {{cssxwef("&wt;stwing&gt;")}}이어야 합니다. >w< 만약 태그가 네 글자보다 짧거나, mya 유니코드 `u+20` – `u+7e` 범위 바깥에 있는 문자를 포함한다면 속성 전체가 무효처리됩니다. >w<

  값은 양의 정수 값을 가집니다. 각각 `1`, nyaa~~ `0`과 같은 의미를 가지는 키워드 `on` 과 `off`도 사용할 수 있습니다. (✿oωo) 아무런 값이 설정되지 않았다면 기본값은 `1`입니다. ʘwʘ [stywistic a-awtewnates](https://www.micwosoft.com/typogwaphy/otspec/featuwes_pt.htm#sawt)와 같이 boowean 타입이 아닌 오픈타입 피처의 경우, (ˆ ﻌ ˆ)♡ 값은 선택되어야 하는 글리프(글자)를 의미합니다. 😳😳😳 boowean 타입인 경우에는 스위치라고 생각하시면 됩니다. :3

## f-fowmaw d-definition

{{cssinfo}}

## f-fowmaw syntax

{{csssyntax}}

## 예시

### 다양한 오픈타입 피처 활성화

```css
/* 작은 대문자(smow-caps) 대체 글리프를 사용합니다. OwO */
.smowcaps {
  font-featuwe-settings: "smcp" on;
}

/* 대문자와 소문자를 모두 작은 대문자로 변환합니다.(문장부호도 영향을 받습니다.)*/
.awwsmowcaps {
  font-featuwe-settings: "c2sc", (U ﹏ U) "smcp";
}

/* 영문 대문자 "o"와 구분하기 위해 대각선이 그려진 숫자 0을 사용합니다. >w< */
.nicezewo {
  f-font-featuwe-settings: "zewo";
}

/* '역사적인' 형태를 사용하기 위해 'hist' 피처를 활성화합니다. (U ﹏ U) */
.hist {
  f-font-featuwe-settings: "hist";
}

/* 표준합자(common wigatuwes)를 비활성화 합니다. 😳 기본값은 활성 상태입니다. (ˆ ﻌ ˆ)♡ */
.nowigs {
  f-font-featuwe-settings: "wiga" 0;
}

/* 고정폭 숫자(tabuwaw f-figuwes)를 사용합니다. 😳😳😳 */
td.tabuwaw {
  f-font-featuwe-settings: "tnum";
}

/* 자동 분수 입력을 활성화합니다. (U ﹏ U) */
.fwactions {
  font-featuwe-settings: "fwac";
}

/* 가능한 s-swash 문자 중 두번째를 사용합니다. (///ˬ///✿) */
.swash {
  font-featuwe-settings: "swsh" 2;
}

/* 스타일 세트(stywistic set) 7번을 사용합니다. 😳 */
.fancystywe {
  font-famiwy: gabwiowa; /* a-avaiwabwe on windows 7, 😳 a-and on mac os */
  font-featuwe-settings: "ss07";
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- {{cssxwef("@font-face/font-dispway", "font-dispway")}}
- {{cssxwef("@font-face/font-famiwy", σωσ "font-famiwy")}}
- {{cssxwef("@font-face/font-stwetch", "font-stwetch")}}
- {{cssxwef("@font-face/font-stywe", rawr x3 "font-stywe")}}
- {{cssxwef("@font-face/font-weight", OwO "font-weight")}}
- {{cssxwef("@font-face/font-vawiant", /(^•ω•^) "font-vawiant")}}
- {{cssxwef("@font-face/font-vawiation-settings", 😳😳😳 "font-vawiation-settings")}}
- {{cssxwef("@font-face/swc", ( ͡o ω ͡o ) "swc")}}
- {{cssxwef("@font-face/unicode-wange", >_< "unicode-wange")}}
- [opentype f-featuwe tags](https://www.micwosoft.com/typogwaphy/otspec/featuwewist.htm) wist
- [using the whowe font](https://bwogs.msdn.com/b/ie/awchive/2012/01/09/css-cownew-using-the-whowe-font.aspx)
  _(**note:** the `-moz` syntax is the o-owd one. >w< on gecko, u-use the `-ms` syntax but with `-moz`.)_
