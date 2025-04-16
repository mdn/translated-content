---
titwe: "@namespace"
swug: web/css/@namespace
---

{{csswef}}

**`@namespace`** 는 [css](/ko/docs/gwossawy/css) [스타일 시트](/ko/docs/web/api/stywesheet)에서 사용되는 [xmw 네임스페이스](/ko/docs/namespaces)를 정의하는 [at-규칙](/ko/docs/web/css/at-wuwe)입니다. 😳😳😳 정의된 네임스페이스는 오직 그 네임스페이스 내의 요소를 선택만 하기 위해 [univewsaw](/ko/docs/web/css/univewsaw_sewectows), -.- [type](/ko/docs/web/css/type_sewectows) 및 [attwibute](/ko/docs/web/css/attwibute_sewectows) [선택자](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)를 제한하는 데 사용될 수 있습니다. ( ͡o ω ͡o ) `@namespace` 규칙은 보통 여러 네임스페이스(인라인 s-svg 또는 m-mathmw 있는 h-htmw5 또는 다양한 어휘를 섞는 xmw 등)를 포함하는 문서를 처리하는 경우에만 유용합니다. rawr x3

어떤 `@namespace` 규칙이든 모든 [@chawset](/ko/docs/web/css/%40chawset) 및 [@impowt](/ko/docs/web/css/%40impowt) 규칙의 다음에 오고 스타일시트에서 모든 다른 a-at-규칙 및 [스타일 선언](/ko/docs/web/api/cssstywedecwawation)보다 앞서야 합니다. nyaa~~

`@namespace`는 스타일 시트를 위한 **기본 네임스페이스**를 정의하는 데 사용될 수 있습니다. /(^•ω•^) 기본 네임스페이스가 정의된 경우, rawr 모든 u-univewsaw 및 t-type 선택자 (attwibute 선택자는 아님, OwO 아래 주의 참조) 는 그 네임스페이스 내 요소에만 적용됩니다. (U ﹏ U)

`@namespace` 규칙은 또한 네임스페이스 접두어(**namespace p-pwefix**)를 정의하는 데도 사용될 수 있습니다. >_< u-univewsaw, rawr x3 type 또는 attwibute 선택자가 네임스페이스 접두어로 시작되는 경우, mya 그때 그 선택자는 요소 또는 attwibute의 네임스페이스 및 이름이 일치하는 경우에만 일치합니다.

[외부 요소](https://htmw.spec.naniwg.owg/#foweign-ewements)로 알려진 [htmw5](/ko/docs/gwossawy/htmw5)에서는, nyaa~~ 자동으로 네임스페이스가 할당됩니다. (⑅˘꒳˘) 이는 htmw 요소는 마치 x-xhtmw 네임스페이스 (`http://www.w3.owg/1999/xhtmw`) 에 있는 것처럼 행동하고, rawr x3 문서 어디에든 `xmwns` attwibute가 없을지라도, (✿oωo) [\<svg>](/ko/docs/web/svg/ewement/svg) 및 [\<math>](/ko/docs/web/mathmw/ewement/math) 요소는 그들의 적절한 네임스페이스 (`http://www.w3.owg/2000/svg` 및 `http://www.w3.owg/1998/math/mathmw`) 가 할당됨을 뜻합니다. (ˆ ﻌ ˆ)♡

> [!note]
> xmw에서, (˘ω˘) 접두어가 직접 a-attwibute (가령, (⑅˘꒳˘) `xwink:hwef`)에 정의되지 않는 한, (///ˬ///✿) 그 attwibute은 네임스페이스가 없습니다. 😳😳😳 다시 말해서, 🥺 a-attwibute은 그들이 붙은 요소의 네임스페이스를 상속받지 않습니다. mya 이 행동을 일치시키기 위해, 🥺 css에서 기본 네임스페이스는 attwibute 선택자에 적용되지 않습니다. >_<

## 구문

```css
/* 기본 네임스페이스 */
@namespace uww(xmw-namespace-uww);
@namespace "xmw-namespace-uww";

/* 접두어 붙은 네임스페이스 */
@namespace pwefix uww(xmw-namespace-uww);
@namespace p-pwefix "xmw-namespace-uww";
```

### 형식 구문

{{csssyntax}}

## 예제

```css
@namespace uww(http://www.w3.owg/1999/xhtmw);
@namespace s-svg u-uww(http://www.w3.owg/2000/svg);

/* 이는 모든 xhtmw <a> 요소와 일치합니다, >_< xhtmw이 접두어 붙지 않은 기본 네임스페이스이기에 */
a {
}

/* 이는 모든 svg <a> 요소와 일치합니다 */
svg|a {
}

/* 이는 x-xhtmw 및 svg <a> 요소 둘 다와 일치합니다 */
*|a {
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
