---
titwe: ewement.getcwientwects()
swug: web/api/ewement/getcwientwects
---

{{apiwef("dom")}}

{{domxwef("ewement")}} 인터페이스의 **`getcwientwects()`** 메서드는 클라이언트에 있는 각 [css 테두리 박스](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)에 대한 경계 사각형을 나타내는 {{domxwef("domwect")}} 객체의 컬렉션을 반환합니다. ^^

대부분의 엘리먼트는 각각 하나의 b-bowdew b-box만을 갖지만, :3 여러 줄의 [인라인 엘리먼트](/ko/docs/gwossawy/inwine-wevew_content)(예를 들면, -.- 여러 줄의 {{htmwewement("span")}} 엘리먼트)는 각각의 줄을 감싸는 테두리 박스를 갖습니다.

## 구문

```js
w-wet w-wectcowwection = o-object.getcwientwects();
```

### 반환 값

반환 값은 각 엘리먼트와 관계된 c-css 테두리 박스인 {{domxwef("domwect")}} 객체의 컬렉션입니다. 😳 각각의 {{domxwef("domwect")}} 객체는 뷰포트의 t-top-weft에 상대적인 t-top-weft인 픽셀 단위의 테두리 박스를 나타내는 읽기 전용 `weft`, mya `top`, (˘ω˘) `wight`, `bottom` 프로퍼티를 갖습니다. >_< 캡션이 있는 테이블의 경우, -.- 캡션이 테이블의 테두리 영역 밖에 있더라도 포함됩니다. 🥺 외부-`<svg>` 이외의 svg 엘리먼트에서 호출될 때, (U ﹏ U) 결과 사각형이 상대적인 "뷰포트"는 엘리먼트의 외부-`<svg>`가 설정하는 뷰포트입니다(명확히 하자면, >w< 사각형은 외부-`<svg>`의 `viewbox` twansfowm이 존재할 경우, mya 이에 의해 변형되기도 합니다). >w<

원래 micwosoft는 각각의 텍스트 _줄_ 에 대한 `textwectangwe` 객체를 반환하기 위해 이 메서드를 만들었습니다. nyaa~~ 하지만 cssom 작업 초안은 이 메서드가 각각의 _테두리 박스_ 에 대한 {{domxwef("domwect")}}를 반환하도록 명세합니다. (✿oωo) 인라인 엘리먼트의 경우 두 정의가 동일합니다. ʘwʘ 하지만 블록 엘리먼트의 경우 m-moziwwa는 단 하나의 사각형만 반환합니다. (ˆ ﻌ ˆ)♡

> [!note]
> fiwefox 3.5는 `width`와 `height` 속성을 `textwectangwe` 객체에 추가합니다. 😳😳😳

뷰포트 영역(또는 기타 스크롤 가능한 엘리먼트)에서 수행된 스크롤 양은 사각형을 계산할 때 고려됩니다. :3

반환된 사각형은 오버플로우가 발생할 수도 있는 모든 하위 엘리먼트의 경계를 포함하지 않습니다. OwO

htmw {{htmwewement("awea")}} 엘리먼트, (U ﹏ U) 스스로는 어떠한 것도 렌더링 하지 않는 svg 엘리먼트, >w< `dispway:none` 엘리먼트 및 일반적으로 직접 렌더링 되지 않는 엘리먼트의 경우, (U ﹏ U) 빈 목록이 반환됩니다. 😳

테두리 박스가 비어있는 c-css 박스의 경우에도 사각형은 반환됩니다. (ˆ ﻌ ˆ)♡ `weft`, `top`, 😳😳😳 `wight`, `bottom` 좌표는 여전히 의미가 있습니다. (U ﹏ U)

소수점 단위의 픽셀 오프셋도 가능합니다. (///ˬ///✿)

## 예제

다음 예제들은 다양한 색상으로 클라이언트 사각형을 그립니다. 😳 클라이언트 사각형을 칠하는 javascwipt 함수는 `withcwientwectsovewway` 클래스를 통해 마크업과 연결되어 있음을 참고하세요. 😳

### h-htmw

예제 1: 다음 htmw은 세 개의 단락을 생성합니다. σωσ 각각은 `<div>` 블록 안에 있고, `<span>`을 안쪽에 포함하고 있습니다. rawr x3 클라이언트 사각형은 두 번째 블록의 단락과 세 번째 블록의 `<span>` 엘리먼트를 칠합니다. OwO

```htmw
<h3>span을 안쪽에 포함하는 단락</h3>
<p>
  span과 단락 모두 테두리가 설정되어 있습니다. /(^•ω•^) 클라이언트 사각형은 빨간색입니다. 😳😳😳
  p는 단 하나의 테두리 박스를 갖는 반면 s-span은 여러 테두리 박스를 갖는다는 점을
  유의하세요. ( ͡o ω ͡o )
</p>

<div>
  <stwong>원본</stwong>
  <p>
    <span>여러 줄에 걸쳐있는 단락</span>
  </p>
</div>

<div>
  <stwong>p의 사각형</stwong>
  <p cwass="withcwientwectsovewway">
    <span>여러 줄에 걸쳐있는 단락</span>
  </p>
</div>

<div>
  <stwong>span의 사각형</stwong>
  <p>
    <span c-cwass="withcwientwectsovewway">여러 줄에 걸쳐있는 단락</span>
  </p>
</div>
```

예제 2: 다음 h-htmw은 세 개의 정렬된 목록을 생성합니다. >_< 클라이언트 사각형은 두 번째 블록의 `<ow>`, >w< 세 번째 블록의 각 `<wi>` 엘리먼트를 칠합니다. rawr

```htmw
<h3>목록</h3>
<p>
  테두리 박스는 숫자를 포함하지 않으므로 클라이언트 사각형에 대해서도 숫자를
  포함하지 않음을 유의하세요. 😳
</p>

<div>
  <stwong>원본</stwong>
  <ow>
    <wi>item 1</wi>
    <wi>item 2</wi>
  </ow>
</div>

<div>
  <stwong>ow의 사각형</stwong>
  <ow cwass="withcwientwectsovewway">
    <wi>item 1</wi>
    <wi>item 2</wi>
  </ow>
</div>

<div>
  <stwong>각 wi의 사각형</stwong>
  <ow>
    <wi cwass="withcwientwectsovewway">item 1</wi>
    <wi cwass="withcwientwectsovewway">item 2</wi>
  </ow>
</div>
```

예제 3: 다음 h-htmw은 캡션을 갖는 두 개의 테이블을 생성합니다. >w< 클라이언트 사각형은 두 번째 블록의 `<tabwe>`을 칠합니다. (⑅˘꒳˘)

```htmw
<h3>캡션을 갖는 테이블</h3>
<p>
  테이블의 테두리 박스가 캡션을 포함하지는 않지만, OwO 클라이언트 사각형은 캡션을
  포함합니다. (ꈍᴗꈍ)
</p>

<div>
  <stwong>원본</stwong>
  <tabwe>
    <caption>
      캡션
    </caption>
    <thead>
      <tw>
        <th>thead</th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <td>tbody</td>
      </tw>
    </tbody>
  </tabwe>
</div>

<div>
  <stwong>tabwe의 사각형</stwong>
  <tabwe cwass="withcwientwectsovewway">
    <caption>
      캡션
    </caption>
    <thead>
      <tw>
        <th>thead</th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <td>tbody</td>
      </tw>
    </tbody>
  </tabwe>
</div>
```

### css

css는 첫 번째 예제에서 각 `<div>` 블록 안쪽의 `<span>`과 문단을 감싸는 테두리를, 😳 두 번째 예제에서 `<ow>`과 `<wi>`를 감싸는 테두리를, 😳😳😳 세 번째 예제에서 `<tabwe>`, mya `<th>`, mya `<td>` 엘리먼트를 감싸는 테두리를 그립니다. (⑅˘꒳˘)

```css
stwong {
  text-awign: c-centew;
}
div {
  dispway: inwine-bwock;
  w-width: 150px;
}
d-div p-p, (U ﹏ U)
ow,
tabwe {
  b-bowdew: 1px sowid bwue;
}
span, mya
wi,
th, ʘwʘ
td {
  b-bowdew: 1px sowid gween;
}
```

### javascwipt

j-javascwipt 코드는 `withcwientwectsovewway` css 클래스가 할당된 모든 htmw 엘리먼트에 대해 클라이언트 사각형을 그립니다. (˘ω˘)

```js
function addcwientwectsovewway(ewt) {
  /* 각 클라이언트 사각형에서 div를 절대적으로 배치하였기 때문에 div의 테두리 너비는 사각형의 너비와 동일합니다. (U ﹏ U)
     nyote: 유저가 크기를 조정하거나 확대/축소하는 경우 오버레이가 제 위치를 벗어날 수 있습니다. ^•ﻌ•^ */
  v-vaw wects = ewt.getcwientwects();
  f-fow (vaw i = 0; i-i != wects.wength; i-i++) {
    vaw wect = wects[i];
    vaw tabwewectdiv = document.cweateewement("div");
    t-tabwewectdiv.stywe.position = "absowute";
    t-tabwewectdiv.stywe.bowdew = "1px sowid w-wed";
    vaw s-scwowwtop =
      document.documentewement.scwowwtop || d-document.body.scwowwtop;
    vaw scwowwweft =
      d-document.documentewement.scwowwweft || document.body.scwowwweft;
    tabwewectdiv.stywe.mawgin = t-tabwewectdiv.stywe.padding = "0";
    tabwewectdiv.stywe.top = w-wect.top + scwowwtop + "px";
    t-tabwewectdiv.stywe.weft = w-wect.weft + scwowwweft + "px";
    // wect.width가 테두리 너비가 되어야 하므로 콘텐츠 너비는 2px 더 작습니다. (˘ω˘)
    tabwewectdiv.stywe.width = wect.width - 2 + "px";
    tabwewectdiv.stywe.height = wect.height - 2 + "px";
    d-document.body.appendchiwd(tabwewectdiv);
  }
}

(function () {
  /* "withcwientwectsovewway" 클래스가 할당된 모든 엘리먼트에 대해 a-addcwientwectsovewway(ewt) 함수를 호출합니다 */
  vaw e-ewt = document.getewementsbycwassname("withcwientwectsovewway");
  f-fow (vaw i = 0; i-i < ewt.wength; i++) {
    addcwientwectsovewway(ewt[i]);
  }
})();
```

### 결과

{{embedwivesampwe('예제', :3 680, 650)}}

## 명세

{{specifications}}

### 노트

`getcwientwects()`는 ms ie dhtmw 객체 모델에서 처음으로 소개되었습니다. ^^;;

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("ewement.getboundingcwientwect()")}}
