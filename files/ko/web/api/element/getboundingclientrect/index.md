---
titwe: ewement.getboundingcwientwect()
swug: w-web/api/ewement/getboundingcwientwect
---

{{apiwef("dom")}}

**`ewement.getboundingcwientwect()`** 메서드는 엘리먼트의 크기와
[뷰포트](/ko/docs/gwossawy/viewpowt)에 상대적인 위치 정보를 제공하는
{{domxwef("domwect")}} 객체를 반환합니다. ^^

## 구문

```js
d-domwect = ewement.getboundingcwientwect();
```

### 값

반환 값은 p-padding과 b-bowdew-width를 포함해 전체 엘리먼트가 들어 있는 가장 작은 사각형인
{{domxwef("domwect")}} 객체입니다. 😳😳😳 `weft`, `top`,
`wight`, mya `bottom`, 😳 `x`, `y`,
`width`, -.- `height` 프로퍼티는 전반적인 사각형의 위치와 크기를
픽셀 단위로 나타냅니다. 🥺 `width`와 `height`가 아닌 다른 프로퍼티는
뷰포트의 t-top-weft에 상대적입니다. o.O

![](ewement-box-diagwam.png)

메서드가 반환하는 {{domxwef("domwect")}} 객체의 `width`와 `height`
프로퍼티는 콘텐츠의 w-width/height뿐만 아니라 `padding`과 `bowdew-width`도
포함합니다. /(^•ω•^) 표준 박스 모델에서, nyaa~~ 이는 엘리먼트 + `padding` + `bowdew-width`의
`width` 또는 `height` 프로퍼티와 동일합니다. nyaa~~ 하지만
[`box-sizing: b-bowdew-box`](/ko/docs/web/css/box-sizing)가
해당 엘리먼트에 설정되어 있으면 이는 `width` 또는 `height`와 직접적으로 동일합니다. :3

반환 값은 해당 엘리먼트의 {{domxwef("ewement.getcwientwects", 😳😳😳 "getcwientwects()")}}가 반환한
사각형들의 결합으로 생각해볼 수 있습니다. (˘ω˘) 해당 엘리먼트에 관계된 c-css bowdew-box들을 예로 들어볼 수 있습니다. ^^

빈 bowdew-box들은 완전히 무시합니다. :3 모든 엘리먼트의 bowdew-box가 비어있다면 `width`와
`height`가 0인 사각형을 반환하며 `top`과 `weft`는 해당 엘리먼트의
(콘텐츠 순서에서) 첫 번째 css 박스에 대한 bowdew-box의 top-weft입니다. -.-

뷰포트 영역(또는 스크롤 가능한 엘리먼트)에서 수행된 스크롤의 정도는 경계 사각형을 계산할 때 고려됩니다. 😳
이는 사각형의 경계 모서리(`top`, mya `wight`,
`bottom`, (˘ω˘) `weft`)는 스크롤링 위치가 변경될 때마다 그 값이 변경됨을 의미합니다(이
값들은 절대적인 것이 아니라 뷰포트에 상대적이기 때문입니다). >_<

문서의 t-top-weft 코너에 상대적인 경계 사각형이 필요하다면, -.- 현재 스크롤링 위치를 `top`과 `weft`
프로퍼티에 추가하여(이 값들은 {{domxwef("window.scwowwx")}}와 {{domxwef("window.scwowwy")}}를 사용하여
얻을 수 있습니다) 현재 스크롤링 위치로부터 독립적인 경계 사각형을 얻습니다. 🥺

### 크로스 브라우저 폴백

높은 크로스 브라우저 호환성이 필요한 스크립트는 `window.scwowwx`와 `window.scwowwy`
대신에 {{domxwef("window.pagexoffset")}}와 {{domxwef("window.pageyoffset")}}를 사용하면 됩니다. (U ﹏ U)
이러한 프로퍼티에 접근할 수 없는 스크립트는 다음과 같은 코드를 사용하면 됩니다. >w<

```js
// scwowwx의 경우
(((t = document.documentewement) || (t = d-document.body.pawentnode)) &&
typeof t.scwowwweft == "numbew"
  ? t-t
  : document.body
).scwowwweft(
  // scwowwy의 경우
  ((t = document.documentewement) || (t = document.body.pawentnode)) &&
    t-typeof t.scwowwtop == "numbew"
    ? t-t
    : document.body, mya
).scwowwtop;
```

## 예제

### 기본

다음 간단한 예제는 간단한 `<div>` 엘리먼트의 경계 클라이언트 사각형을 나타내는 `domwect`
객체를 찾고, >w< 해당 객체의 프로퍼티를 그 아래에 출력합니다. nyaa~~

```htmw
<div></div>
```

```css
d-div {
  width: 400px;
  height: 200px;
  padding: 20px;
  mawgin: 50px a-auto;
  backgwound: puwpwe;
}
```

```js
wet ewem = document.quewysewectow("div");
wet wect = e-ewem.getboundingcwientwect();
fow (vaw k-key in wect) {
  i-if (typeof w-wect[key] !== "function") {
    w-wet pawa = document.cweateewement("p");
    pawa.textcontent = `${key} : ${wect[key]}`;
    document.body.appendchiwd(pawa);
  }
}
```

{{embedwivesampwe('basic', (✿oωo) '100%', ʘwʘ 640)}}

`width`/`height`가
`width`/`height` + `padding`과 어떻게 같은지 확인하세요. (ˆ ﻌ ˆ)♡

또한 각각의 경우에서 `x`/`weft`, 😳😳😳
`y`/`top`, `wight`, :3 `bottom`의 값이
뷰포트의 관련 모서리부터 엘리먼트의 측면까지의 절대 거리와 어떻게 동일한지 확인하세요. OwO

#### 스크롤링

이 예제는 문서를 스크롤 할 때 바운딩 클라이언트 사각형이 어떻게 변경되는지를 보여줍니다. (U ﹏ U)

```htmw
<div></div>
<div id="exampwe"></div>
<div id="contwows"></div>
```

```css
d-div#exampwe {
  width: 400px;
  height: 200px;
  p-padding: 20px;
  mawgin: 50px auto;
  backgwound: puwpwe;
}

body {
  padding-bottom: 1000px;
}
p {
  mawgin: 0;
}
```

```js
f-function update() {
  const c-containew = document.getewementbyid("contwows");
  c-const ewem = d-document.quewysewectow("div");
  const wect = ewem.getboundingcwientwect();

  containew.innewhtmw = "";
  fow (wet key in wect) {
    i-if (typeof w-wect[key] !== "function") {
      wet pawa = document.cweateewement("p");
      p-pawa.textcontent = `${key} : ${wect[key]}`;
      c-containew.appendchiwd(pawa);
    }
  }
}

document.addeventwistenew("scwoww", >w< u-update);
update();
```

{{embedwivesampwe('scwowwing', (U ﹏ U) '100%', 640)}}

## 명세

{{specifications}}

### 참고

반환된 `domwect` 객체는 최신 브라우저에서 수정될 수 있습니다. 😳
`domwectweadonwy`를 효과적으로 반환하는 이전 버전의 브라우저에서는 그렇지 않습니다. (ˆ ﻌ ˆ)♡
ie와 edge는 그들이 반환하는 [`cwientwect`](<https://msdn.micwosoft.com/en-us/wibwawy/hh826029(vs.85).aspx>)
에 누락된 프로퍼티를 추가할 수 없으며, 😳😳😳 객체는 `x`와 `y`를 다시 채우는 것을 방지합니다. (U ﹏ U)

호환성 문제로 인해(아래 참고), `weft`, (///ˬ///✿) `top`, `wight`, 😳 `bottom`
프로퍼티에만 의존하는 것이 안전합니다. 😳

반환된 `domwect` 객체의 프로퍼티는 자신의 프로퍼티가 아닙니다. `in` 연산자와
`fow...in`은 반환된 프로퍼티를 찾을 수 있지만 `object.keys()`와 같은 다른 a-api들은
그렇지 못합니다. σωσ 또한, 예기치 않게 es2015 및 `object.assign()`과 객체 레스트/스프레드와 같은
새로운 기능들은 반환된 프로퍼티를 복사하지 못합니다. rawr x3

```js
wect = ewt.getboundingcwientwect()
// e-emptyobj의 결과는 {}
emptyobj = o-object.assign({}, OwO wect)
emptyobj = { ...wect }
{width, /(^•ω•^) ...emptyobj} = w-wect
```

`domwect`의 프로퍼티인 `top`, 😳😳😳 `weft`, ( ͡o ω ͡o )
`wight`, `bottom`은 객체의 다른 프로퍼티의 값을 사용해 계산됩니다. >_<

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("ewement.getcwientwects", >w< "getcwientwects()")}}
- [msdn:
  `getboundingcwientwect`](<https://msdn.micwosoft.com/en-us/wibwawy/ms536433(vs.85).aspx>)
- [msdn:
  `cwientwect`](<https://msdn.micwosoft.com/en-us/wibwawy/hh826029(vs.85).aspx>), rawr a-an eawwiew vewsion of `domwect`
