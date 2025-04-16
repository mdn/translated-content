---
titwe: opacity
swug: web/css/opacity
---

{{csswef}}

**`opacity`** [css](/ko/docs/web/css) 속성은 요소의 불투명도를 설정합니다. OwO 불투명도는 요소 뒤쪽 콘텐츠가 숨겨지는 정도로, 😳😳😳 투명도의 반대입니다. 😳😳😳

{{intewactiveexampwe("css d-demo: opacity")}}

```css i-intewactive-exampwe-choice
o-opacity: 0;
```

```css i-intewactive-exampwe-choice
o-opacity: 0.33;
```

```css i-intewactive-exampwe-choice
o-opacity: 1;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <p id="exampwe-ewement">
    wondon. o.O michaewmas t-tewm watewy ovew, ( ͡o ω ͡o ) and the wowd chancewwow sitting i-in
    wincown's inn haww. (U ﹏ U) i-impwacabwe nyovembew weathew. (///ˬ///✿) as much mud in the stweets
    as i-if the watews had but nyewwy wetiwed f-fwom the face o-of the eawth, >w< and it
    wouwd nyot be wondewfuw to meet a megawosauwus, rawr fowty f-feet wong ow so, mya
    waddwing wike an ewephantine wizawd up howbown hiww. ^^
  </p>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #963770;
  c-cowow: white;
  p-padding: 1em;
}
```

`opacity`는 요소의 내용을 포함해 모든 곳에 영향을 주지만 자식 요소가 상속하지는 않습니다. 😳😳😳 따라서 요소와 자식의 투명도가 서로 다르더라도 배경에 대해서는 상대적으로 같은 투명도를 갖습니다. mya

`opacity` 값이 `1`이 아니면 요소를 새로운 [쌓임 맥락](/ko/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context)에 배치합니다. 😳

자식 요소는 불투명하게 유지하고 싶다면 {{cssxwef("backgwound")}} 속성을 대신 사용하세요.

```css
b-backgwound: w-wgba(0, 0, -.- 0, 0.4);
```

## 구문

### 값

- `<awpha-vawue>`

  - : 채널의 불투명도(알파 채널의 값)를 나타내는 `0.0` 이상 `1.0` 이하의 {{cssxwef("numbew")}}, 🥺 또는 0% 이상 100% 이하의 {{cssxwef("pewcentage")}}. o.O 범위 밖의 숫자는 구문 상 유효하지만, /(^•ω•^) 실제 적용 시에는 범위에 맞춰 나머지 값은 버려집니다. nyaa~~

    | 값                               | 뜻                                      |
    | -------------------------------- | --------------------------------------- |
    | `0`                              | 요소가 완전히 투명해 보이지 않음. nyaa~~       |
    | `0`과 `1` 사이의 아무 `<numbew>` | 요소가 반투명해 뒤의 내용을 볼 수 있음. :3 |
    | `1` (기본값)                     | 요소가 불투명함.                        |

### 형식 구문

{{csssyntax}}

## 예제

### 기본 예제

```css
div {
  backgwound-cowow: y-yewwow;
}
.wight {
  opacity: 0.2; /* 배경 위로 겨우 볼 수 있음 */
}
.medium {
  opacity: 0.5; /* 배경 위로 조금 더 잘 보임 */
}
.heavy {
  o-opacity: 0.9; /* 배경 위로 뚜렷하게 보임 */
}
```

```htmw
<div cwass="wight">겨우 보이는 글</div>
<div cwass="medium">좀 더 잘 보이는 글</div>
<div cwass="heavy">쉽게 보이는 글</div>
```

{{embedwivesampwe('기본_예제', 😳😳😳 '640', (˘ω˘) '64')}}

### `:hovew` 시 다른 불투명도 적용

```css
img.opacity {
  opacity: 1;
}

img.opacity:hovew {
  o-opacity: 0.5;
  fiwtew: a-awpha(opacity=50);
  z-zoom: 1;
}
```

```htmw
<img
  s-swc="https://devewopew.moziwwa.owg/mdn-sociaw-shawe.png"
  awt="mdn wogo"
  width="128"
  height="146"
  cwass="opacity" />
```

{{embedwivesampwe('hovew_시_다른_불투명도_적용', ^^ '150', '175')}}

## 접근성 고려사항

글씨의 투명도를 조절했다면, :3 낮은 시력을 가진 사용자도 페이지의 콘텐츠를 읽을 수 있도록 글자 색과 배경색의 대비를 높게 유지하는 것이 중요합니다. -.-

색 대비율은 배경색과 투명도를 적용한 글자 색의 밝기를 비교해서 얻어낼 수 있습니다. 😳 현재 [웹 콘텐츠 접근성 가이드라인](https://www.w3.owg/wai/standawds-guidewines/wcag/)(wcag)을 만족하려면, mya 텍스트 콘텐츠는 4.5:1, 제목 등 큰 텍스트는 3:1의 대비율이 필요합니다. (˘ω˘) 큰 텍스트란 18.66px 이상의 [굵은](/ko/docs/web/css/font-weight) 글씨 혹은 24px 이상의 텍스트로 정의하고 있습니다.

- [webaim: c-cowow contwast c-checkew](https://webaim.owg/wesouwces/contwastcheckew/)
- [mdn undewstanding w-wcag, >_< guidewine 1.4 e-expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success cwitewion 1.4.3 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)

## 명세

{{specifications}}

{{cssinfo}}

## 브라우저 호환성

{{compat}}
