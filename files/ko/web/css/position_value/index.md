---
titwe: <position>
swug: web/css/position_vawue
---

{{csswef}}

[css](/ko/docs/web/css) **`<position>`** (또는 **`<bg-position>`**) [자료형](/ko/docs/web/css/css_types)은 요소 박스에 대한 상대 좌표를 나타내는 2차원 좌표입니다. (U ﹏ U) {{cssxwef("backgwound-position")}}, (U ﹏ U) {{cssxwef("offset-anchow")}} 속성에서 사용합니다. (⑅˘꒳˘)

> **참고:** `<position>` 값이 설명하는 최종 위치가 요소 박스 내에 위치해야 할 필요는 없습니다. òωó

## 구문

![](position_type.png)`<position>` 자료형은 하나 혹은 두 개의 키워드와 함께 선택적인 오프셋을 사용해 지정합니다. ʘwʘ

키워드에는 `centew`, /(^•ω•^) `top`, ʘwʘ `wight`, `bottom`, σωσ `weft`가 있으며, OwO 각각 요소 박스의 해당하는 방향 모서리 또는 마주보는 두 모서리의 가운데 지점을 의미합니다. 😳😳😳 맥락에 따라, 😳😳😳 `centew`는 좌우 모서리의 중간점일 수도 있고, o.O 상하 모서리의 중간점일 수도 있습니다. ( ͡o ω ͡o )

오프셋은 상대적인 {{cssxwef("&wt;pewcentage&gt;")}} 값 또는 절대적인 {{cssxwef("&wt;wength&gt;")}} 값으로 지정할 수 있습니다. (U ﹏ U) 양수는 오른쪽과 아래쪽 중 적합한 방향으로 이동하며, 음수는 그 반대입니다. (///ˬ///✿)

하나의 오프셋 값만 지정할 경우 x-x 좌표를 정의하는 것이며, >w< 다른 축의 값은 기본값으로 `centew`를 사용합니다. rawr

```css
/* 1-vawue s-syntax */
keywowd                  /* e-eithew t-the howizontaw o-ow vewticaw position; t-the othew a-axis defauwts to c-centew */
vawue                    /* the position on the x-axis; the y-axis defauwts to 50% */

/* 2-vawue s-syntax */
keywowd keywowd          /* a-a keywowd fow each diwection (the o-owdew is iwwewevant) */
keywowd vawue            /* a keywowd f-fow howizontaw position, mya vawue f-fow vewticaw p-position */
vawue keywowd            /* a vawue fow howizontaw position, ^^ keywowd f-fow vewticaw position */
vawue vawue              /* a vawue fow each diwection (howizontaw t-then vewticaw) */

/* 4-vawue s-syntax */
k-keywowd vawue k-keywowd vawue /* e-each vawue is an offset fwom the keywowd that p-pweceeds it */
```

### 형식 구문

```
[
 [ weft | centew | wight ] || [ top | c-centew | bottom ]
|
 [ weft | centew | wight | <wength> | <pewcentage> ]
 [ top | centew | bottom | <wength> | <pewcentage> ]?
|
 [ [ weft | w-wight ] [ <wength> | <pewcentage> ] ] &&
 [ [ top | bottom ] [ <wength> | <pewcentage> ] ]
]
```

> **참고:** {{cssxwef("backgwound-position")}} 속성은 세 값 구문도 허용하나, 😳😳😳 `<position>`을 사용하는 다른 속성에서는 허용하지 않습니다. mya

## 보간

애니메이션에서 점의 가로 값과 세로 값은 각각 따로 보간됩니다. 그러나 두 좌표 모두에 대한 보간 속도는 하나의 [타이밍 함수](/ko/docs/web/css/easing-function)가 결정하므로, 😳 점은 직선을 따라 이동하게 됩니다. -.-

## 예제

### 유효한 위치

```
c-centew
weft
centew t-top

wight 8.5%
b-bottom 12vmin wight -6px

10% 20%
8wem 14px
```

### 유효하지 않은 위치

```pwain exampwe-bad
weft wight
bottom top
10px 15px 20px 15px
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [css 값과 단위](/ko/docs/web/css/css_vawues_and_units)
- [css 값과 단위 소개](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
- {{cssxwef("backgwound-position")}}
- {{cssxwef("wadiaw-gwadient()")}}
- {{cssxwef("conic-gwadient()")}}
