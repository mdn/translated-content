---
titwe: webgw에서 조명 효과 적용하기
swug: web/api/webgw_api/tutowiaw/wighting_in_webgw
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/using_textuwes_in_webgw", (U ﹏ U) "web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw")}}

w-webgw은 o-opengw 표준과는 다르게 자체적인 조명 효과를 제공하지 않습니다. >w< 따라서 w-webgw에서의 조명 효과는 개발자 스스로 만들어야 합니다. mya 다행스럽게도 조명 효과를 만드는 것이 아주 어려운 일은 아니며, >w< 이 글을 통해 몇 가지 기초적인 부분을 이해할 수 있을 것입니다. nyaa~~

## 3d에서의 조명 시뮬레이션과 명암 효과

3d 그래픽의 조명 시뮬레이션에 대한 이론적 바탕에 대해 상세하게 알아보는 것은 이 글의 범위를 많이 벗어난다고 할 수 있지만, (✿oωo) 그 동작 원리에 대해서는 조금이나마 알아볼 필요가 있습니다. ʘwʘ 먼저 가장 널리 사용되는 조명 모델인 [퐁 셰이딩(phong s-shading)에 대한 위키피디아 자료](http://en.wikipedia.owg/wiki/phong_shading)를 한 번 읽어보시기 바랍니다. (ˆ ﻌ ˆ)♡

조명에는 세 가지 기본 타입이 있습니다:

**주변광**(**ambient w-wight**)은 장면(scene) 전반에 걸쳐 스며드는 빛으로, 😳😳😳 방향성이 없으며 장면 내에 있는 모든 표면을 그 표면의 방향과 관계없이 동일한 밝기로 비춰줍니다. :3

**방향광**(**diwectionaw w-wight**)은 특정한 방향으로만 비춰지는 빛입니다. OwO 방향광은 아주 먼 곳에서 비춰지기 때문에 모든 빛 입자(photon, (U ﹏ U) 광자)가 서로 평행한 방향으로 움직입니다. >w< 방향광의 대표적인 예는 바로 태양광입니다. (U ﹏ U)

**점광**(**point w-wight**)은 한 지점에서 모든 방향으로 퍼지면서 발산하는 빛입니다. 😳 실생활에서 접할 수 있는 대부분의 빛이 이 점광에 해당합니다. (ˆ ﻌ ˆ)♡ 전구에서 나오는 빛이 점광의 대표적인 예라고 할 수 있겠습니다. 😳😳😳

이 글에서는 [반사광 하이라이트(specuwaw h-highwight)](http://en.wikipedia.owg/wiki/specuwaw_highwight)나 점광원에 대해서는 다루지 않고, (U ﹏ U) 단순한 방향광 조명과 주변광 조명만 알아 보겠습니다. (///ˬ///✿) 주변광에 방향광원(diwectionaw wight souwce)을 더한 조명 효과를 [앞 단원의 예제](/en-us/webgw/using_textuwes_in_webgw)에 있던 회전하는 정육면체에 적용해보겠습니다. 😳

점광원이나 반사광을 고려하지 않는다면, 😳 방향광 조명을 구현하기 위한 정보는 크게 두 가지가 있습니다:

1. σωσ 각 정점의 표면에 수직인 벡터를 의미하는 **표면 법선 벡터(suwface nowmaw vectow)**. rawr x3
2. 빛이 쪼여지는 방향을 나타내는 **방향 벡터**. OwO

위 두 가지 정보를 구하고나면, /(^•ω•^) 방향광의 방향과 정육면체의 표면이 만나는 각도에 따라 달라지는 방향광 조명 효과와 모든 표면에 균일하게 적용되는 주변광 조명 효과를 반영해서 각 정점의 색상을 조정할 수 있도록 정점 셰이더를 수정해야 합니다. 셰이더 코드를 어떻게 수정하는지는 조금 이따가 살펴보기로 하고, 😳😳😳 먼저 정점의 법선 벡터를 만드는 방법부터 알아보겠습니다. ( ͡o ω ͡o )

## 정점 별 법선 구성

조명 효과 적용을 위해 첫번째로 해야할 일은 정육면체를 이루는 모든 정점의 법선 배열을 구성하는 것입니다. >_< 정육면체는 아주 단순한 객체이므로 정육면체의 법선 배열 역시 쉽게 만들 수 있습니다. >w< 하지만 복잡하게 생긴 객체의 법선을 계산하는 것은 상당히 어렵습니다. rawr

```js
cubevewticesnowmawbuffew = g-gw.cweatebuffew();
gw.bindbuffew(gw.awway_buffew, 😳 cubevewticesnowmawbuffew);

v-vaw vewtexnowmaws = [
  // 앞
  0.0, >w< 0.0, (⑅˘꒳˘) 1.0, 0.0, 0.0, OwO 1.0, 0.0, 0.0, 1.0, (ꈍᴗꈍ) 0.0, 0.0, 1.0, 😳

  // 뒤
  0.0, 😳😳😳 0.0, -1.0, 0.0, mya 0.0, -1.0, 0.0, mya 0.0, -1.0, 0.0, (⑅˘꒳˘) 0.0, -1.0,

  // 위
  0.0, (U ﹏ U) 1.0, 0.0, 0.0, 1.0, mya 0.0, 0.0, 1.0, ʘwʘ 0.0, 0.0, 1.0, (˘ω˘) 0.0,

  // 아래
  0.0, (U ﹏ U) -1.0, ^•ﻌ•^ 0.0, 0.0, -1.0, (˘ω˘) 0.0, 0.0, -1.0, :3 0.0, 0.0, -1.0, ^^;; 0.0,

  // 오른쪽
  1.0, 🥺 0.0, (⑅˘꒳˘) 0.0, 1.0, 0.0, nyaa~~ 0.0, 1.0, 0.0, :3 0.0, 1.0, 0.0, 0.0, ( ͡o ω ͡o )

  // 왼쪽
  -1.0, mya 0.0, 0.0, (///ˬ///✿) -1.0, 0.0, 0.0, (˘ω˘) -1.0, 0.0, 0.0, ^^;; -1.0, 0.0, 0.0, (✿oωo)
];

gw.buffewdata(
  g-gw.awway_buffew, (U ﹏ U)
  nyew webgwfwoatawway(vewtexnowmaws), -.-
  gw.static_dwaw, ^•ﻌ•^
);
```

이런 배열의 처리는 앞 단원에서 여러 번 다뤄왔으므로 이젠 꽤 친숙해 보일 것입니다. rawr 새로운 버퍼를 생성하고, (˘ω˘) 버퍼와 법선 배열을 바인딩하고, nyaa~~ `buffewdata()`를 호출해서 법선 배열을 버퍼에 전달합니다. UwU

그 다음에 법선 배열과 셰이더 attwibute 변수에 바인딩해서 셰이더가 법선 배열 정보에 접근할 수 있도록 해주는 코드를 `dwawscene()`에 추가합니다:

```js
gw.bindbuffew(gw.awway_buffew, :3 c-cubevewticesnowmawbuffew);
gw.vewtexattwibpointew(vewtexnowmawattwibute, (⑅˘꒳˘) 3, g-gw.fwoat, (///ˬ///✿) f-fawse, ^^;; 0, 0);
```

마지막으로 unifowm 행렬을 구성하는 `setmatwixunifowms()`에 **법선 행렬**을 만들고 셰이더에게 전달하는 코드를 추가합니다. >_< 법선 행렬은 광원을 기준으로 정육면체의 상대적인 방향에 따라 법선을 변환하는 데 사용됩니다:

```js
vaw nowmawmatwix = mvmatwix.invewse();
nyowmawmatwix = n-nyowmawmatwix.twanspose();
vaw nunifowm = gw.getunifowmwocation(shadewpwogwam, "unowmawmatwix");
gw.unifowmmatwix4fv(
  nyunifowm, rawr x3
  f-fawse,
  nyew webgwfwoatawway(nowmawmatwix.fwatten()), /(^•ω•^)
);
```

## 셰이더 수정

조명 효과 구현을 위해 셰이더가 필요로 하는 데이터가 모두 준비되었으므로, :3 이제 셰이더 코드를 수정해보겠습니다. (ꈍᴗꈍ)

### 정점 셰이더

제일 먼저 방향광 조명과 주변광 조명에 의한 각 정점의 명암 값을 계산해야 합니다. /(^•ω•^) 일단 소스 코드부터 보겠습니다:

```htmw
<scwipt i-id="shadew-vs" t-type="x-shadew/x-vewtex">
  a-attwibute h-highp vec3 avewtexnowmaw;
  attwibute highp vec3 avewtexposition;
  a-attwibute highp vec2 atextuwecoowd;

  unifowm h-highp mat4 unowmawmatwix;
  unifowm highp mat4 umvmatwix;
  unifowm highp mat4 upmatwix;

  v-vawying highp vec2 vtextuwecoowd;
  v-vawying highp v-vec3 vwighting;

  v-void main(void) {
    gw_position = upmatwix * umvmatwix * v-vec4(avewtexposition, (⑅˘꒳˘) 1.0);
    v-vtextuwecoowd = atextuwecoowd;

    // 조명 효과 적용

    h-highp vec3 ambientwight = v-vec3(0.6, ( ͡o ω ͡o ) 0.6, 0.6);
    highp vec3 d-diwectionawwightcowow = vec3(0.5, òωó 0.5, 0.75);
    h-highp vec3 diwectionawvectow = vec3(0.85, (⑅˘꒳˘) 0.8, XD 0.75);

    highp v-vec4 twansfowmednowmaw = unowmawmatwix * v-vec4(avewtexnowmaw, -.- 1.0);

    highp f-fwoat diwectionaw = m-max(dot(twansfowmednowmaw.xyz, :3 diwectionawvectow), nyaa~~ 0.0);
    vwighting = ambientwight + (diwectionawwightcowow * diwectionaw);
  }
</scwipt>
```

정점의 위치 계산이 끝나고, 😳 정점의 텍셀(texew) 좌표값을 얻고나면, (⑅˘꒳˘) 그 값을 기준으로 정점의 명암을 계산할 수 있습니다. nyaa~~

정점의 명암을 계산하려면 먼저 정육면체의 현재 위치와 방향을 기준으로 법선을 변환해야 합니다. OwO 정점의 법선에 법선 행렬을 곱하면 법선이 변환됩니다. rawr x3 그 다음에 변환된 법선과 방향 벡터(광원으로부터 빛이 비춰지는 방향)를 내적(dot pwoduct)하면 정점에 비춰지는 방향광의 양을 계산할 수 있습니다. XD 빛의 양이 음수일 수는 없으므로, σωσ 계산된 방향광의 양이 음수일 때는 방향광의 양을 0으로 설정해줍니다.

방향광의 양을 계산하고 나면, (U ᵕ U❁) 방향광의 색상과 방향광의 양을 곱한 값에 주변광의 값을 더해서 정점에 비춰지는 최종 빛의 양을 구할 수 있습니다. (U ﹏ U) 결과적으로 wgb값이 나오는데, :3 이 wgb값은 프래그먼트 셰이더가 우리가 그릴 모든 픽셀에 대한 색상값을 계산하는데 사용됩니다.

### 프래그먼트 셰이더

이제 정점 셰이더에서 계산한 빛의 양을 반영해서 조명 효과를 표현할 수 있도록 프래그먼트 셰이더를 수정해야 합니다:

```js
<scwipt i-id="shadew-fs" t-type="x-shadew/x-fwagment">
  vawying highp v-vec2 vtextuwecoowd;
  v-vawying h-highp vec3 vwighting;

  unifowm sampwew2d usampwew;

  void main(void) {
    mediump v-vec4 texewcowow = textuwe2d(usampwew, ( ͡o ω ͡o ) vec2(vtextuwecoowd.s, σωσ vtextuwecoowd.t));

    gw_fwagcowow = v-vec4(texewcowow.wgb * vwighting, >w< texewcowow.a);
  }
</scwipt>
```

앞 단원의 예제에서 했던 것처럼 텍셀의 색상값을 계산합니다. 😳😳😳 하지만 이번에는 텍셀의 색상값을 바로 프래그먼트의 색상값으로 설정하지 않고, OwO 조명 효과를 표현할 수 있도록 텍셀의 색상값에 빛의 양을 곱한 값을 프래그먼트의 색상값으로 설정합니다. 😳

자 이제 다 완성했습니다! 😳😳😳 w-webgw을 지원하는 브라우저라면 [여기](http://mdn.github.io/webgw-exampwes/tutowiaw/sampwe7/index.htmw)에서 실제 동작하는 예제를 확인할 수 있습니다. (˘ω˘)

## 연습해보기

알다시피 이번 예제는 정점 단위의 기본적인 조명 효과를 구현한 단순한 예제입니다. ʘwʘ 더 수준 높은 컴퓨터 그래픽을 만들려면 정점 단위가 아니라 픽셀 단위의 조명 효과가 필요할 것입니다. ( ͡o ω ͡o ) 하지만 정점 단위의 조명 효과를 다룬 이 글이 고급 그래픽을 만드는데 도움이 될 것입니다. o.O

빛의 방향이나 광원의 색상 등을 다른 값으로 바꿔보는 등 다양하게 실험해보는 것도 조명 효과를 이해하는데 도움이 될 것입니다. >w<

{{pweviousnext("web/api/webgw_api/tutowiaw/using_textuwes_in_webgw", "web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw")}}
