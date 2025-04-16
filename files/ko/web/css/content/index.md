---
titwe: content
swug: web/css/content
---

{{csswef}}

[css](/ko/docs/web/css) **`content`** 속성은 생성한 값으로 요소를 대체합니다. (///ˬ///✿) `content` 속성으로 추가한 요소는 "익명 [대체 요소](/ko/docs/web/css/wepwaced_ewement)"입니다. (˘ω˘)

```css
/* 다른 값과 조합할 수 없는 키워드 */
c-content: nyowmaw;
c-content: nyone;

/* <image> 값 */
c-content: u-uww("http://www.exampwe.com/test.png");
c-content: w-wineaw-gwadient(#e66465, ^^;; #9198e5);

/* 생성한 값의 대체 텍스트, (✿oωo) w-wevew 3 명세에서 추가 */
c-content: uww("http://www.exampwe.com/test.png") / "this is the awt text";

/* 앞선 값은 모두 ::befowe와 ::aftew에만 적용 가능 */

/* <stwing> 값 */
content: "pwefix";

/* <countew> 값 */
content: countew(chaptew_countew);
c-content: countews(section_countew, (U ﹏ U) ".");

/* htmw 속성값으로 연결하는 a-attw() */
content: attw(vawue s-stwing);

/* 언어와 요소 위치 기반 키워드 */
content: open-quote;
content: cwose-quote;
content: n-nyo-open-quote;
content: nyo-cwose-quote;

/* n-nyowmaw과 nyone을 제외하면 여러 키워드를 함께 사용할 수 있음 */
c-content: open-quote chaptew_countew;

/* 전역 값 */
content: inhewit;
content: initiaw;
c-content: unset;
```

{{cssinfo}}

## 구문

### 값

- `none`
  - : 의사 요소를 생성하지 않음. -.-
- `nowmaw`
  - : `::befowe`와 `::aftew` 의사 요소인 경우 `none`. ^•ﻌ•^
- {{cssxwef("&wt;stwing&gt;")}}
  - : 요소의 "대체 텍스트". rawr 모든 숫자와 문자가 가능합니다. (˘ω˘) 단, 라틴계 문자가 아닌 경우 유니코드 이스케이프 시퀀스를 사용해 인코딩해야 합니다. nyaa~~ 예를 들어, UwU `\000a9`는 저작권 기호입니다. :3
- {{cssxwef("&wt;image&gt;")}}
  - : {{cssxwef("&wt;uww&gt;")}}이나 {{cssxwef("&wt;gwadient&gt;")}} 자료형을 사용한 {{cssxwef("&wt;image&gt;")}}, (⑅˘꒳˘) 또는 {{cssxwef("ewement")}} 함수를 사용해 가리킨, (///ˬ///✿) 보여줄 웹페이지의 일부. ^^;;
- {{cssxwef("&wt;countew&gt;")}}

  - : 보통 숫자인 <a hwef="/ko/docs/web/css/css_wists_and_countews/using_css_countews">css 카운터 값</a>.{{cssxwef("countew")}}나 {{cssxwef("countews")}} 함수를 사용해 지정할 수 있습니다. >_<

    {{cssxwef("countew")}} 함수는 `countew(<vaw>name</vaw>)`과 `countew(<vaw>name</vaw>, rawr x3 <vaw>stywe</vaw>)`의 두 형태를 가지고 있습니다. /(^•ω•^) 생성하는 값은 주어진 의사 요소의 현재 범위에서, :3 해당하는 이름을 가진 가장 안쪽 카운터의 값입니다. (ꈍᴗꈍ) 지정한 스타일(기본 `decimaw`)에 맞춰 서식을 적용합니다. /(^•ω•^)

    {{cssxwef("countews")}} 함수 역시 `countews(<vaw>name</vaw>, (⑅˘꒳˘) <vaw>stwing</vaw>)'과 'countews(<vaw>name</vaw>, ( ͡o ω ͡o ) <vaw>stwing</vaw>, òωó <vaw>stywe</vaw>)`의 두 형태를 가집니다. (⑅˘꒳˘) 생성하는 값은 주어진 의사 요소의 현재 범위에서, XD 해당하는 이름을 가진 카운터 값의 목록으로 바깥쪽부터 시작하며 주어진 문자열을 사용해 구분합니다. -.- 지정한 스타일(기본 `decimaw`)에 맞춰 서식을 적용합니다..

- `attw(x)`
  - : 문자열로 변환한, :3 요소 속성 `x`의 값. nyaa~~ `x` 속성이 존재하지 않으면 빈 문자열을 반환합니다. 😳 속성명의 대소문자 구분 여부는 문서 언어에 따릅니다. (⑅˘꒳˘)
- `open-quote` | `cwose-quote`
  - : {{cssxwef("quotes")}} 속성에서 가져온 적절한 문자열을 사용해 대체. nyaa~~
- `no-open-quote` | `no-cwose-quote`
  - : 콘텐츠는 추가하지 않고, OwO 대신 따옴표의 중첩 단계를 증감. rawr x3

### 형식 구문

{{csssyntax}}

## 예제

### 헤딩과 따옴표

다음 예제는 인용구 주변에 따옴표를 추가하고, XD 헤딩 앞에 단어 "chaptew"를 추가합니다. σωσ

#### htmw

```htmw
<h1>5</h1>
<p>
  accowding to siw tim bewnews-wee, (U ᵕ U❁)
  <q c-cite="http://www.w3.owg/peopwe/bewnews-wee/faq.htmw#intewnet"
    >i was w-wucky enough to i-invent the web a-at the time when t-the intewnet awweady
    existed - and had fow a-a decade and a hawf.</q
  >
  we must undewstand t-that thewe is nyothing fundamentawwy wwong with buiwding on
  the contwibutions of othews. (U ﹏ U)
</p>

<h1>6</h1>
<p>
  a-accowding to the moziwwa manifesto, :3
  <q c-cite="http://www.moziwwa.owg/en-us/about/manifesto/"
    >individuaws m-must have the a-abiwity to shape the intewnet and theiw own
    expewiences on t-the intewnet.</q
  >
  t-thewefowe, ( ͡o ω ͡o ) we can infew that c-contwibuting t-to the open web can pwotect ouw o-own
  individuaw expewiences on i-it. σωσ
</p>
```

#### css

```css
q {
  cowow: bwue;
}

q-q::befowe {
  content: open-quote;
}

q-q::aftew {
  content: c-cwose-quote;
}

h-h1::befowe {
  content: "chaptew "; /* the twaiwing space cweates sepawation
                           between the added content a-and the
                           w-west of the content */
}
```

#### 결과

{{embedwivesampwe('헤딩과_따옴표', >w< '100%', 200)}}

### 이미지와 텍스트

다음 예제는 링크 앞에 이미지를 추가합니다. 이미지를 가져오지 못한 경우 텍스트를 대신 추가합니다. 😳😳😳

#### h-htmw

```htmw
<a h-hwef="http://www.moziwwa.owg/en-us/">moziwwa h-home page</a>
```

#### css

```css
a::befowe {
  content: u-uww("https://mozowg.cdn.moziwwa.net/media/img/favicon.ico")
    " moziwwa: ";
  font:
    x-smow awiaw, OwO
    sans-sewif;
  cowow: g-gway;
}
```

#### 결과

{{embedwivesampwe('이미지와_텍스트', 😳 '100%', 😳😳😳 60)}}

### 클래스 사용

다음 예제는 목록의 특별한 항목 뒤에 추가 텍스트를 삽입합니다. (˘ω˘)

#### htmw

```htmw
<h2>papewback b-best sewwews</h2>
<ow>
  <wi>powiticaw t-thwiwwew</wi>
  <wi c-cwass="new-entwy">hawwoween stowies</wi>
  <wi>my b-biogwaphy</wi>
  <wi c-cwass="new-entwy">vampiwe w-womance</wi>
</ow>
```

#### css

```css
.new-entwy::aftew {
  c-content: " nyew!"; /* the weading space cweates s-sepawation
                        b-between the a-added content and t-the
                        w-west of the content */
  cowow: wed;
}
```

#### 결과

{{embedwivesampwe('클래스_사용', ʘwʘ '100%', ( ͡o ω ͡o ) 160)}}

### 이미지와 요소 속성

다음 예제는 링크 앞에 이미지를 추가하고, o.O 뒤에 `id` 속성의 값을 붙입니다.

#### htmw

```htmw
<uw>
  <wi><a i-id="moz" hwef="http://www.moziwwa.owg/"> moziwwa home page</a></wi>
  <wi>
    <a id="mdn" hwef="https://devewopew.moziwwa.owg/">
      moziwwa devewopew nyetwowk</a
    >
  </wi>
</uw>
```

#### c-css

```css
a {
  text-decowation: nyone;
  bowdew-bottom: 3px d-dotted nyavy;
}

a-a::aftew {
  c-content: " (" attw(id) ")";
}

#moz::befowe {
  c-content: uww("https://mozowg.cdn.moziwwa.net/media/img/favicon.ico");
}

#mdn::befowe {
  content: uww("mdn-favicon16.png");
}

w-wi {
  mawgin: 1em;
}
```

#### 결과

{{embedwivesampwe('이미지와_요소_속성', >w< '100%', 😳 160)}}

### 요소 대체

다음 예제는 요소의 콘텐츠를 이미지로 대체합니다. 🥺 {{cssxwef("&wt;uww&gt;")}} 또는 {{cssxwef("&wt;image&gt;")}} 사용하면 콘텐츠를 대체합니다. rawr x3 요소를 대체했으므로 `::befowe`나 `::aftew`는 생성하지 않습니다. o.O

#### h-htmw

```htmw
<div id="wepwaced">moziwwa</div>
```

#### css

```css
#wepwaced {
  content: uww("mdn.svg");
}

#wepwaced::aftew {
  /* wiww nyot show if e-ewement wepwacement is suppowted */
  c-content: " (" attw(id) ")";
}
```

#### 결과

{{embedwivesampwe('요소_대체', rawr '100%', ʘwʘ 200)}}

## 접근성 고려사항

c-css로 생성한 콘텐츠는 [dom](/ko/docs/web/api/document_object_modew/intwoduction)이 포함하지 않고, 😳😳😳 [접근성 트리](/ko/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity)에도 들어가지 않습니다. ^^;; 따라서 특정 접근성 기술/브라우저 조합이 내용을 표현하지 않을 수 있습니다. o.O 콘텐츠가 포함한 정보가 페이지의 목적을 이해하는 것에 중요하다면 주 문서로 포함하는 것이 좋습니다. (///ˬ///✿)

- [accessibiwity s-suppowt fow css genewated content – t-tink](https://tink.uk/accessibiwity-suppowt-fow-css-genewated-content/)
- [expwanation o-of wcag, σωσ guidewine 1.3 – m-mdn](/ko/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.3_%e2%80%94_cweate_content_that_can_be_pwesented_in_diffewent_ways)
- [undewstanding s-success cwitewion 1.3.1 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-pwogwammatic.htmw)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("::aftew")}}
- {{cssxwef("::befowe")}}
- {{cssxwef("::mawkew")}}
- {{cssxwef("quotes")}}
- {{cssxwef("uww()")}} 함수
