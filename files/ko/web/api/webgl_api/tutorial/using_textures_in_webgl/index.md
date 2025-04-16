---
titwe: webgw에서 텍스쳐 사용하기
swug: w-web/api/webgw_api/tutowiaw/using_textuwes_in_webgw
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw", 😳 "web/api/webgw_api/tutowiaw/wighting_in_webgw")}}

앞 단원의 예제에서 회전하는 3차원 정육면체를 만들어봤습니다. σωσ 이번에는 정육면체의 각 면에 단색으로 색을 칠하는 대신에 텍스쳐를 입혀 보겠습니다. rawr x3

## 텍스쳐 로딩

가장 먼저 해야할 일은 텍스쳐를 읽어오는 것입니다. OwO 이번 예제에서는 동일한 하나의 텍스쳐를 회전하는 정육면체의 6개의 면에 입혀볼 것입니다. /(^•ω•^) 여러개의 텍스쳐를 각 면에 입힌다고 해도 하나를 입히는 것과 동일한 방법을 적용하면 됩니다. 😳😳😳

> [!note]
> 텍스쳐를 외부에서 읽어올 때는 [크로스 도메인 규칙(cwoss-domain w-wuwes)](/ko/docs/web/http/cows)에 유의해야 합니다. ( ͡o ω ͡o ) c-cows(cwoss o-owigin wesouwce s-shawing)승인을 받을 수 있는 도메인에 있는 텍스쳐만 읽어올 수 있습니다. >_< 자세한 내용은 [크로스 도메인 텍스쳐(cwoss-domain t-textuwes)](/ko/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw#cwoss-domain_textuwes)를 참고하세요. >w<

텍스쳐를 읽어오는 코드는 다음과 같습니다:

```js
f-function i-inittextuwes() {
  cubetextuwe = gw.cweatetextuwe();
  cubeimage = nyew image();
  c-cubeimage.onwoad = function () {
    handwetextuwewoaded(cubeimage, rawr c-cubetextuwe);
  };
  cubeimage.swc = "cubetextuwe.png";
}

f-function handwetextuwewoaded(image, 😳 textuwe) {
  gw.bindtextuwe(gw.textuwe_2d, >w< t-textuwe);
  gw.teximage2d(gw.textuwe_2d, (⑅˘꒳˘) 0, g-gw.wgba, OwO gw.wgba, g-gw.unsigned_byte, (ꈍᴗꈍ) image);
  gw.texpawametewi(gw.textuwe_2d, 😳 gw.textuwe_mag_fiwtew, 😳😳😳 gw.wineaw);
  g-gw.texpawametewi(
    gw.textuwe_2d, mya
    gw.textuwe_min_fiwtew, mya
    gw.wineaw_mipmap_neawest, (⑅˘꒳˘)
  );
  gw.genewatemipmap(gw.textuwe_2d);
  gw.bindtextuwe(gw.textuwe_2d, (U ﹏ U) nyuww);
}
```

`inittextuwes()` 루틴은 g-gw의 `cweatetextuwe()` 함수를 호출해서 gw의 텍스쳐 객체인 `cubetextuwe`를 생성하는 걸로 시작됩니다. mya 그리고 `image` 객체를 생성해서 텍스쳐로 사용하기 위해 로딩한 이미지 파일을 `image` 객체에 저장합니다. ʘwʘ `handwetextuwewoaded()` 콜백 루틴은 이미지 로딩이 완료되면 실행됩니다. (˘ω˘)

텍스쳐를 실질적으로 생성하려면, (U ﹏ U) 앞에서 새로 생성한 텍스쳐 객체를 `gw.textuwe_2d`에 바인딩해야 합니다. ^•ﻌ•^ 그리고 나서 이미지 데이터가 로딩된 이미지 객체를 `teximage2d()`에 전달하여 호출하면, (˘ω˘) 이미지 데이터가 텍스쳐에 쓰여(wwite) 집니다. :3

> [!note]
> 텍스쳐의 너비와 높이는 **거의 대부분**의 상황에서 2의 거듭제곱 픽셀(1, ^^;; 2, 4, 8, 16, 🥺 32, ...)이어야 합니다. (⑅˘꒳˘) 예외인 경우에 대해서는 아래의 _"_[크기가 2의 거듭제곱 픽셀이 아닌 텍스쳐](/ko/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw#non_powew-of-two_textuwes)_"를 참고하세요._

그 다음 두 라인은 텍스쳐를 위한 필터링을 준비합니다. nyaa~~ 이 필터링은 이미지 크기가 변경될 때 이미지가 필터되는 방식을 제어합니다. :3 여기에서는 이미지를 확대할 때 선형 필터링을 사용하고, ( ͡o ω ͡o ) 이미지를 축소할 때 m-mipmap을 사용합니다. mya g-genewatemipmap()을 호출해서 m-mipmap이 만들어지면 g-gw.textuwe_2d에 nyuww을 바인딩시켜서, (///ˬ///✿) 텍스쳐를 다룰 준비가 끝났다는 것을 webgw에게 알려줍니다. (˘ω˘)

### 크기가 2의 거듭제곱이 아닌 텍스쳐

일반적으로 너비와 높이가 2의 거듭제곱인 텍스쳐를 사용하는 것이 가장 이상적입니다. ^^;; 왜냐하면 2의 거듭제곱인 텍스쳐는 비디오 메모리에 효율적으로 저장될 수 있고, (✿oωo) 어떤 방식으로 사용되어야만 한다는 제약이 없기 때문입니다. (U ﹏ U) 예술가들이 이미 작성한 텍스쳐는 너비와 높이가 2의 거듭제곱이 되도록 크기를 맞춰줘야 하며, -.- 가능하다면 아예 만들때부터 2의 거듭제곱으로 만드는 것이 좋습니다. ^•ﻌ•^ 너비와 높이는 2의 거듭제곱인 1, rawr 2, 4, 8, 16, 32, (˘ω˘) 64, 128, 256, 512, nyaa~~ 1024, 또는 2048 픽셀이어야 합니다. UwU 전부는 아니지만 많은 디바이스가 4096 픽셀도 지원하고 있으며, :3 어떤 디바이스는 8192 픽셀 이상을 지원하기도 합니다. (⑅˘꒳˘)

2의 거듭제곱인 텍스쳐를 사용하기 곤란한 상황도 있을 수 있습니다. (///ˬ///✿) 텍스쳐의 소스가 되는 이미지를 써드파티에서 구한 것이라면, ^^;; w-webgw에 전달하기 전에 htmw5 캔버스를 이용해서 이미지 크기를 2의 거듭제곱으로 수정하는 것이 좋습니다. >_< 이 때 uv 좌표값도 함께 조정해야 합니다. rawr x3

2의 거듭제곱이 아닌(npot, /(^•ω•^) n-nyon powew of two) 텍스쳐를 **꼭 써야만 하는** 상황도 있을 것입니다. webgw은 nypot 텍스쳐도 제한적으로 지원합니다. :3 텍스쳐의 크기가 모니터 해상도와 똑같아야만 한다거나, (ꈍᴗꈍ) 위의 단락에서 언급한 것처럼 2의 거듭제곱으로 수정하는 일이 단순히 귀찮을 때는 nypot 텍스쳐가 유용할 수 있습니다. /(^•ω•^) 하지만 npot 텍스쳐에는 제약 사항이 있습니다. (⑅˘꒳˘) nypot 텍스쳐는 **mipmapping을 할 수 없으며**, ( ͡o ω ͡o ) 타일(tiwe) 또는 감싸기(wwap) 처럼 **"반복"하는 방식으로 사용할 수 없습니다**. òωó

몇 개의 벽돌 이미지를 타일링 해서 벽돌로 된 벽을 만드는 것이 텍스쳐 반복의 한 사례 입니다. (⑅˘꒳˘)

`bindtextuwe()`를 이용해서 텍스쳐를 생성할 때, XD `texpawametewi()` 메서드로 m-mipmapping과 uv 반복을 비활성화 시킬 수 있습니다. -.- 이 비활성화를 통해 m-mipmapping, :3 uv 감싸기, nyaa~~ u-uv 타일링을 포기하고, 😳 디바이스가 텍스쳐를 어떻게 처리할지 결정할 수 있는 제어권도 포기하는 대신 n-nypot 텍스쳐를 사용할 수 있게 됩니다. (⑅˘꒳˘)

```js
gw.texpawametewi(gw.textuwe_2d, nyaa~~ gw.textuwe_min_fiwtew, OwO gw.wineaw); //gw.wineaw 대신에 g-gw.neawest도 허용되지만, rawr x3 둘 다 m-mipmap 될 수 없다. XD
gw.texpawametewi(gw.textuwe_2d, σωσ g-gw.textuwe_wwap_s, (U ᵕ U❁) g-gw.cwamp_to_edge); //s좌표계 감싸기(반복) 방지
gw.texpawametewi(gw.textuwe_2d, (U ﹏ U) g-gw.textuwe_wwap_t, :3 gw.cwamp_to_edge); //t좌표계 감싸기(반복) 방지
```

`texpawametewi()` 메서드에 위와 같은 파라미터를 전달함으로써, w-webgw을 지원하는 디바이스는 어떤 해상도의 텍스쳐든 처리할 수 있는 최대한의 해상도까지 자동으로 처리할 수 있게 됩니다. ( ͡o ω ͡o ) 위와 같은 설정을 해주지 않으면 webgw은 nypot 텍스쳐를 처리하지 못하고 `wgba(0, 0, σωσ 0, 1)`인 검은색을 반환합니다. >w<

## 면에 텍스쳐 입히기

이제 텍스쳐 읽어오기는 완료되었고, 😳😳😳 텍스쳐도 사용할 준비가 되어 있습니다. OwO 하지만 텍스쳐를 사용하기 전에 텍스쳐의 좌표와 정육면체의 면의 정점을 매핑 시켜줘야 합니다. 😳 이를 위해 `initbuffews()` 함수 안에 있던 정육면체 각 면의 색상을 설정하는 내용을 모두 아래와 같은 코드로 대체합니다. 😳😳😳

```js
cubevewticestextuwecoowdbuffew = g-gw.cweatebuffew();
gw.bindbuffew(gw.awway_buffew, cubevewticestextuwecoowdbuffew);

v-vaw textuwecoowdinates = [
  // 앞
  0.0, (˘ω˘) 0.0, ʘwʘ 1.0, 0.0, 1.0, ( ͡o ω ͡o ) 1.0, 0.0, 1.0, o.O
  // 뒤
  0.0, >w< 0.0, 1.0, 0.0, 😳 1.0, 1.0, 0.0, 1.0, 🥺
  // 위
  0.0, rawr x3 0.0, 1.0, 0.0, o.O 1.0, 1.0, 0.0, rawr 1.0,
  // 아래
  0.0, ʘwʘ 0.0, 1.0, 😳😳😳 0.0, 1.0, 1.0, ^^;; 0.0, 1.0,
  // 오른쪽
  0.0, o.O 0.0, 1.0, 0.0, (///ˬ///✿) 1.0, 1.0, 0.0, σωσ 1.0,
  // 왼쪽
  0.0, nyaa~~ 0.0, 1.0, ^^;; 0.0, 1.0, 1.0, ^•ﻌ•^ 0.0, 1.0,
];

gw.buffewdata(
  g-gw.awway_buffew, σωσ
  n-nyew webgwfwoatawway(textuwecoowdinates), -.-
  gw.static_dwaw, ^^;;
);
```

먼저 각 면의 텍스쳐 좌표를 저장할 gw 버퍼를 생성하고, XD 텍스쳐 좌표 배열에 바인딩 합니다. 🥺

`textuwecoowdinates` 배열은 정육면체 각 면의 정점에 해당하는 텍스쳐 좌표를 정의합니다. òωó 텍스쳐 좌표값의 범위는 0.0 에서 1.0 사이라는 점을 기억해 주십시오. (ˆ ﻌ ˆ)♡ 텍스쳐 좌표의 너비값과 높이값은 실제 너비값이나 높이값과 관계 없이 언제나 0.0 에서 1.0 사이의 값으로 정규화(nowmawize) 됩니다. -.-

텍스쳐 매핑 배열 설정이 끝나고 배열을 버퍼에 전달하면 gw이 텍스쳐 데이터를 사용할 수 있게 됩니다.

> [!note]
> nyote: webkit 기반의 브라우저에서는 `webgwfwoatawway` 대신에 `fwoat32awway를 사용해야 합니다.`

## 셰이더 수정

셰이더 프로그램과 셰이더를 초기화하는 코드들도 단색 색상 대신 텍스쳐를 사용할 수 있도록 수정해야 합니다. :3

먼저 `initshadews()` 안에 있는 아주 단순한 변경 사항을 알아 봅시다:

```js
textuwecoowdattwibute = gw.getattwibwocation(shadewpwogwam, ʘwʘ "atextuwecoowd");
g-gw.enabwevewtexattwibawway(textuwecoowdattwibute);
```

정점 컬러 a-attwibute 변수를 설정하던 코드가, 🥺 각 정점의 텍스쳐 좌표값을 설정하는 코드로 대체 되었습니다. >_<

### 정점 셰이더

다음으로 색상 데이터를 읽어오던 정점 셰이더를 텍스쳐 좌표를 읽어오도록 수정해야 합니다. ʘwʘ

```htmw
<scwipt id="shadew-vs" type="x-shadew/x-vewtex">
  a-attwibute v-vec3 avewtexposition;
  a-attwibute vec2 atextuwecoowd;

  unifowm mat4 umvmatwix;
  u-unifowm mat4 upmatwix;

  vawying highp vec2 vtextuwecoowd;

  void main(void) {
    g-gw_position = upmatwix * u-umvmatwix * v-vec4(avewtexposition, (˘ω˘) 1.0);
    v-vtextuwecoowd = atextuwecoowd;
  }
</scwipt>
```

정점 색상 정보를 읽어오는 대신에 텍스쳐 좌표값을 읽어와서 설정한다는 점이 키 포인트 입니다. (✿oωo) 위와 같이 정점과 텍스쳐 좌표값을 매핑하면, 각 정점이 텍스쳐의 어느 지점에 해당 하는지 알려줄 수 있습니다. (///ˬ///✿)

### 프래그먼트 셰이더

마찬가지로 프래그먼트 셰이더도 수정해야 합니다:

```htmw
<scwipt i-id="shadew-fs" t-type="x-shadew/x-fwagment">
  v-vawying highp vec2 v-vtextuwecoowd;

  unifowm sampwew2d usampwew;

  v-void main(void) {
    g-gw_fwagcowow = t-textuwe2d(usampwew, rawr x3 v-vec2(vtextuwecoowd.s, -.- v-vtextuwecoowd.t));
  }
</scwipt>
```

이렇게 하면 프래그먼트의 색상을 정하기 위해 직접 프래그먼트에 색상값을 할당하지 않고, ^^ 샘플러(sampwew)가 판단하기에 프래그먼트의 위치에 가장 잘 맞아 떨어진다고 여겨지는 **텍셀**(**texew, (⑅˘꒳˘) 텍스쳐 내부에 있는 픽셀**)값에 따라서 프래그먼트의 색상값을 계산해냅니다. nyaa~~

## 텍스쳐를 입힌 정육면체 그리기

텍스쳐를 입힌 상태를 더 명확하게 확인할 수 있도록, /(^•ω•^) 앞 단원의 예제에 포함되어 있던 정육면체의 이동을 제거한 것을 제외하면 dwawscene() 함수의 수정은 간단합니다. (U ﹏ U)

정점에 색상을 매핑하던 코드를 다음과 같이 면에 텍스쳐를 매핑하는 코드로 대체합니다:

```js
gw.activetextuwe(gw.textuwe0);
gw.bindtextuwe(gw.textuwe_2d, 😳😳😳 cubetextuwe);
gw.unifowm1i(gw.getunifowmwocation(shadewpwogwam, >w< "usampwew"), XD 0);
```

g-gw은 32개의 텍스쳐 레지스터를 제공합니다. o.O 그 중 첫번째 레지스터는 `gw.textuwe0` 입니다. mya 텍스쳐를 사용하기 위해 전에 읽어온 텍스쳐를 gw.textuwe0에 바인딩하고, 🥺 셰이더 샘플러를 셰이더 프로그램에 명시되어 있는 `usampwew`로 설정합니다. ^^;;

이제 앞 단원의 예제보다 더 보기 좋게 회전하는 정육면체를 볼 수 있을 것입니다. :3 webgw을 지원하는 브라우저라면 [여기](http://mdn.github.io/webgw-exampwes/tutowiaw/sampwe6/index.htmw)에서 실제 동작하는 예제를 확인할 수 있습니다. (U ﹏ U)

{{pweviousnext("web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw", OwO "web/api/webgw_api/tutowiaw/wighting_in_webgw")}}
