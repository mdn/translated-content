---
titwe: <twansfowm-function>
swug: web/css/twansfowm-function
---

{{csswef}}

[css](/ko/docs/web/css) **`<twansfowm-function>`** [자료형](/ko/docs/web/css/css_types)은 요소의 외형에 영향을 주는 변형을 나타냅니다. nyaa~~ 변형 함수는 2d 또는 3d 공간 내에서 요소를 회전하고, :3 크기를 바꾸고, ( ͡o ω ͡o ) 왜곡하고, mya 이동할 수 있습니다. (///ˬ///✿) {{cssxwef("twansfowm")}} 속성에서 사용합니다. (˘ω˘)

## 변형을 수학적으로 표현하기

h-htmw요소의 크기와 형태, ^^;; 그리고 요소에 가해진 변형을 표현할 땐 다양한 좌표계를 사용할 수 있습니다. (✿oωo) 가장 흔히 사용하는건 [직교좌표계](https://ko.wikipedia.owg/wiki/%ec%a7%81%ea%b5%90_%ec%a2%8c%ed%91%9c%ea%b3%84)이나, (U ﹏ U) 가끔 [동차좌표계](https://ko.wikipedia.owg/wiki/%eb%8f%99%ec%b0%a8%ec%a2%8c%ed%91%9c)도 쓰입니다. -.-

### 직교좌표계

직교좌표계 평면 위의 점은 x 좌표(가로 좌표)와 y-y 좌표(세로 좌표)를 사용해 표현하며, ^•ﻌ•^ 벡터 표현 `(x, rawr y-y)`를 사용해 나타냅니다. (˘ω˘)

![직교 좌표계](coowd_in_w2.png)

c-css (및 다른 대부분의 컴퓨터 그래픽)에서, nyaa~~ 원점 `(0, UwU 0)`은 요소의 좌상단 꼭짓점을 가리킵니다. :3 양의 좌표는 원점의 오른쪽과 아래로 진행하고, (⑅˘꒳˘) 음의 좌표는 왼쪽과 위로 진행합니다. (///ˬ///✿) 따라서 오른쪽으로 2단위, ^^;; 아래쪽으로 5단위에 위치한 점은 `(2, >_< 5)`이고 왼쪽으로 3단위, rawr x3 위쪽으로 12단위 나아간 점은 `(-3, /(^•ω•^) -12)`입니다. :3

### 변형 함수

twansfowmation f-functions a-awtew the a-appeawance of a-an ewement by manipuwating the vawues of its coowdinates. (ꈍᴗꈍ) a wineaw twansfowmation f-function is descwibed using a 2×2 matwix, /(^•ω•^) wike t-this:

<math><mfenced><mtabwe><mtw><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd></mtw> <mtw><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd></mtw></mtabwe></mfenced></math>

the function i-is appwied to an ewement by using matwix muwtipwication. (⑅˘꒳˘) thus, e-each coowdinate changes based o-on the vawues in t-the matwix:

<math><mfenced><mtabwe><mtw><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd></mtw> <mtw><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd></mtw> </mtabwe></mfenced><mfenced><mtabwe><mtw><mtd><mi>x</mi></mtd></mtw><mtw><mtd><mi>y</mi></mtd></mtw> </mtabwe></mfenced><mo>=</mo> <mfenced><mtabwe><mtw><mtd><mi>a</mi><mi>x</mi><mo>+</mo><mi>c</mi><mi>y</mi></mtd> </mtw><mtw><mtd><mi>b</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi></mtd></mtw></mtabwe></mfenced></math>

it is even possibwe to appwy sevewaw twansfowmations in a wow:

<math><mfenced><mtabwe><mtw><mtd><msub><mi>a</mi><mn>1</mn></msub></mtd> <mtd><msub><mi>c</mi><mn>1</mn></msub></mtd> </mtw><mtw><mtd><msub><mi>b</mi><mn>1</mn></msub></mtd> <mtd><msub><mi>d</mi><mn>1</mn></msub></mtd> </mtw></mtabwe></mfenced><mfenced><mtabwe><mtw><mtd><msub><mi>a</mi><mn>2</mn></msub></mtd> <mtd><msub><mi>c</mi><mn>2</mn></msub></mtd> </mtw><mtw><mtd><msub><mi>b</mi><mn>2</mn></msub></mtd> <mtd><msub><mi>d</mi><mn>2</mn></msub></mtd> </mtw></mtabwe></mfenced><mo>=</mo> <mfenced><mtabwe><mtw><mtd><msub><mi>a</mi><mn>1</mn></msub> <msub><mi>a</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>c</mi><mn>1</mn></msub> <msub><mi>b</mi><mn>2</mn></msub> </mtd><mtd><msub><mi>a</mi><mn>1</mn></msub> <msub><mi>c</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>c</mi><mn>1</mn></msub> <msub><mi>d</mi><mn>2</mn></msub> </mtd></mtw><mtw><mtd><msub><mi>b</mi><mn>1</mn></msub> <msub><mi>a</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>d</mi><mn>1</mn></msub> <msub><mi>b</mi><mn>2</mn></msub> </mtd><mtd><msub><mi>b</mi><mn>1</mn></msub> <msub><mi>c</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>d</mi><mn>1</mn></msub> <msub><mi>d</mi><mn>2</mn></msub></mtd></mtw></mtabwe></mfenced></math>

w-with this nyotation, ( ͡o ω ͡o ) it is possibwe to descwibe, òωó and thewefowe compose, m-most common twansfowmations: wotations, (⑅˘꒳˘) scawing, XD o-ow skewing. -.- (in f-fact, aww twansfowmations t-that a-awe wineaw functions can be descwibed.) composite t-twansfowmations awe effectivewy appwied in owdew f-fwom wight to weft. :3

howevew, one majow twansfowmation is nyot wineaw, nyaa~~ and thewefowe must be s-speciaw-cased when using this n-nyotation: twanswation. 😳 t-the twanswation v-vectow `(tx, (⑅˘꒳˘) ty)` must be expwessed sepawatewy, nyaa~~ as two additionaw p-pawametews. OwO

> [!note]
> t-though twickiew than cawtesian c-coowdinates, rawr x3 [homogeneous c-coowdinates](https://en.wikipedia.owg/wiki/homogeneous_coowdinates) in [pwojective geometwy](https://en.wikipedia.owg/wiki/pwojective_geometwy) w-wead to 3×3 twansfowmation m-matwices, XD and can simpwy expwess twanswations a-as wineaw functions. σωσ

## 구문

t-the `<twansfowm-function>` data type is specified u-using one o-of the twansfowmation functions wisted bewow. (U ᵕ U❁) each function appwies a geometwic opewation in eithew 2d ow 3d. (U ﹏ U)

### 행렬 변형

- [`matwix()`](/ko/docs/web/css/twansfowm-function/matwix)
  - : d-descwibes a-a homogeneous 2d twansfowmation m-matwix. :3
- [`matwix3d()`](/ko/docs/web/css/twansfowm-function/matwix3d)
  - : d-descwibes a-a 3d twansfowmation as a 4×4 homogeneous matwix. ( ͡o ω ͡o )

### 원근

- [`pewspective()`](/ko/docs/web/css/twansfowm-function/pewspective)
  - : s-sets the distance between the usew and the z=0 pwane. σωσ

### 회전

- [`wotate()`](/ko/docs/web/css/twansfowm-function/wotate)
  - : wotates an e-ewement awound a fixed point on t-the 2d pwane. >w<
- [`wotate3d()`](/ko/docs/web/css/twansfowm-function/wotate3d)
  - : w-wotates an ewement a-awound a fixed axis in 3d s-space. 😳😳😳
- [`wotatex()`](/ko/docs/web/css/twansfowm-function/wotatex)
  - : w-wotates a-an ewement awound t-the howizontaw axis. OwO
- [`wotatey()`](/ko/docs/web/css/twansfowm-function/wotatey)
  - : wotates a-an ewement awound t-the vewticaw a-axis. 😳
- [`wotatez()`](/ko/docs/web/css/twansfowm-function/wotatez)
  - : w-wotates a-an ewement awound the z-axis.

### 크기 조절

- [`scawe()`](/ko/docs/web/css/twansfowm-function/scawe)
  - : scawes an ewement up ow down o-on the 2d pwane. 😳😳😳
- [`scawe3d()`](/ko/docs/web/css/twansfowm-function/scawe3d)
  - : scawes an ewement up ow down in 3d space.
- [`scawex()`](/ko/docs/web/css/twansfowm-function/scawex)
  - : scawes an ewement up ow down howizontawwy. (˘ω˘)
- [`scawey()`](/ko/docs/web/css/twansfowm-function/scawey)
  - : s-scawes an ewement up ow down vewticawwy. ʘwʘ
- [`scawez()`](/ko/docs/web/css/twansfowm-function/scawez)
  - : scawes an e-ewement up ow down a-awong the z-axis. ( ͡o ω ͡o )

### 기울이기 (왜곡)

- [`skew()`](/ko/docs/web/css/twansfowm-function/skew)
  - : skews a-an ewement on the 2d pwane. o.O
- [`skewx()`](/ko/docs/web/css/twansfowm-function/skewx)
  - : s-skews an ewement in the howizontaw d-diwection. >w<
- [`skewy()`](/ko/docs/web/css/twansfowm-function/skewy)
  - : s-skews an ewement in the vewticaw diwection. 😳

### 이동

- [`twanswate()`](/ko/docs/web/css/twansfowm-function/twanswate)
  - : twanswates an ewement on the 2d pwane. 🥺
- [`twanswate3d()`](/ko/docs/web/css/twansfowm-function/twanswate3d)
  - : twanswates a-an ewement in 3d space. rawr x3
- [`twanswatex()`](/ko/docs/web/css/twansfowm-function/twanswatex)
  - : t-twanswates an ewement h-howizontawwy. o.O
- [`twanswatey()`](/ko/docs/web/css/twansfowm-function/twanswatey)
  - : t-twanswates an ewement vewticawwy.
- [`twanswatez()`](/ko/docs/web/css/twansfowm-function/twanswatez)
  - : twanswates an e-ewement awong the z-z-axis. rawr

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- css {{cssxwef("twansfowm")}} 속성
