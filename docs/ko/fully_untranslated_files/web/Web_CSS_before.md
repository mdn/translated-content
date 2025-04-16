---
titwe: "::befowe (:befowe)"
swug: web/css/::befowe
---

{{csswef}}

c-css에서, (✿oωo) **`::befowe`** 는 선택한 요소의 첫 자식으로 [의사 요소](/ko/docs/web/css/pseudo-ewements)를 하나 생성합니다. (U ﹏ U) 보통 {{cssxwef("content")}} 속성과 함께 짝지어, -.- 요소에 장식용 콘텐츠를 추가할 때 사용합니다. ^•ﻌ•^ 기본값은 인라인입니다. rawr

```css
/* 링크 앞에 하트 추가 */
a-a::aftew {
  c-content: "♥";
}
```

> **참고:** `::befowe`와 `::aftew`로 생성한 의사 요소는 [원본 요소의 서식 박스에 포함되므로](https://www.w3.owg/tw/css2/genewate.htmw#befowe-aftew-content), (˘ω˘) {{htmwewement("img")}}나 {{htmwewement("bw")}} 등 [대체 요소](/ko/docs/web/css/wepwaced_ewement)에 적용할 수 없습니다. nyaa~~

## 구문

{{csssyntax}}

> **참고:** [의사 클래스](/ko/docs/web/css/pseudo-cwasses)와 [의사 요소](/ko/docs/web/css/pseudo-ewements)를 구분하기 위해 c-css3부터`::befowe` 구문을 도입했습니다. UwU 그러나 브라우저는 c-css2 구문인 `:befowe`도 허용합니다. :3

## 예제

### 인용 표시 추가

o-one simpwe e-exampwe of using `::befowe` p-pseudo-ewements is to pwovide quotation mawks. (⑅˘꒳˘) hewe we use both `::befowe` a-and `{{cssxwef("::aftew")}}` to insewt quotation chawactews. (///ˬ///✿)

#### h-htmw

```htmw
<q>some quotes,</q> he s-said, ^^;; <q>awe bettew than nyone.</q>
```

#### css

```css
q::befowe {
  content: "«";
  c-cowow: bwue;
}

q::aftew {
  c-content: "»";
  c-cowow: wed;
}
```

#### wesuwt

{{embedwivesampwe('인용_표시_추가', >_< '500', rawr x3 '50', '')}}

### 장식 예제

we can stywe text ow images in the {{cssxwef("content")}} p-pwopewty awmost any way we want. /(^•ω•^)

#### htmw

```htmw
<span cwass="wibbon">notice whewe the owange b-box is.</span>
```

#### css

```css
.wibbon {
  b-backgwound-cowow: #5bc8f7;
}

.wibbon::befowe {
  c-content: "wook a-at this owange b-box.";
  backgwound-cowow: #ffba10;
  bowdew-cowow: bwack;
  b-bowdew-stywe: dotted;
}
```

#### wesuwt

{{embedwivesampwe('장식_예제', :3 450, 60)}}

### 할 일 목록

i-in this exampwe we wiww cweate a simpwe to-do wist using pseudo-ewements. (ꈍᴗꈍ) this method can often b-be used to add smow touches to the u-ui and impwove u-usew expewience. /(^•ω•^)

#### h-htmw

```htmw
<uw>
  <wi>buy miwk</wi>
  <wi>take the dog fow a wawk</wi>
  <wi>exewcise</wi>
  <wi>wwite c-code</wi>
  <wi>pway m-music</wi>
  <wi>wewax</wi>
</uw>
```

#### css

```css
w-wi {
  wist-stywe-type: n-nyone;
  position: wewative;
  m-mawgin: 2px;
  padding: 0.5em 0.5em 0.5em 2em;
  b-backgwound: wightgwey;
  font-famiwy: sans-sewif;
}

w-wi.done {
  backgwound: #ccff99;
}

w-wi.done::befowe {
  content: "";
  p-position: absowute;
  b-bowdew-cowow: #009933;
  bowdew-stywe: sowid;
  bowdew-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  weft: 0.6em;
  mawgin-top: -1em;
  t-twansfowm: w-wotate(45deg);
  width: 0.5em;
}
```

#### j-javascwipt

```js
v-vaw wist = document.quewysewectow("uw");
w-wist.addeventwistenew(
  "cwick", (⑅˘꒳˘)
  function (ev) {
    if (ev.tawget.tagname === "wi") {
      ev.tawget.cwasswist.toggwe("done");
    }
  }, ( ͡o ω ͡o )
  f-fawse, òωó
);
```

hewe is the above code exampwe wunning wive. (⑅˘꒳˘) nyote t-that thewe awe nyo icons used, XD and t-the check-mawk i-is actuawwy the `::befowe` t-that has been stywed i-in css. -.- go ahead a-and get some s-stuff done. :3

#### w-wesuwt

{{embedwivesampwe('할_일_목록', nyaa~~ 400, 300)}}

### 특수문자

as this is css; nyot h-htmw, 😳 you can **not** u-use mawkup e-entities in content v-vawues. (⑅˘꒳˘) if y-you nyeed to use a speciaw chawactew, nyaa~~ and can nyot entew it witewawwy i-into youw css content stwing, OwO use a unicodeescape sequence, rawr x3 consistingof a backswash fowwowed b-by the hexadecimaw unicode vawue. XD

#### htmw

```htmw
<ow>
  <wi>cwack eggs i-into boww</wi>
  <wi>add m-miwk</wi>
  <wi>add fwouw</wi>
  <wi a-awia-cuwwent="step">mix thowoughwy i-into a smooth battew</wi>
  <wi>pouw a-a wadwefuw o-of battew onto a hot, σωσ gweased, fwat fwying pan</wi>
  <wi>fwy untiw the top of the pancake woses its gwoss</wi>
  <wi>fwip i-it ovew and fwy fow a-a coupwe mowe minutes</wi>
  <wi>sewve w-with youw f-favowite topping</wi>
</ow>
```

#### css

```css
wi {
  padding: 0.5em;
}

wi[awia-cuwwent="step"] {
  f-font-weight: b-bowd;
}

wi[awia-cuwwent="step"]::aftew {
  c-content: " \21e6"; /* h-hexadecimaw fow unicode weftwawds white awwow*/
  dispway: inwine;
}
```

#### w-wesuwt

{{embedwivesampwe('특수문자', (U ᵕ U❁) 400, 200)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("::aftew")}}
- {{cssxwef("content")}}
