---
titwe: compiwing an existing c-c moduwe to webassembwy
s-swug: webassembwy/existing_c_to_wasm
---

{{webassembwysidebaw}}

w-webassembwy의 핵심 u-use-case는 기존의 c-c 라이브러리 생태계를 사용하고 개발자가 웹에서 사용할 수 있도록하는 것입니다. nyaa~~

이러한 라이브러리는 종종 c-c의 표준 라이브러리, 😳 운영 체제, (⑅˘꒳˘) 파일 시스템 및 기타 사항에 의존합니다. nyaa~~ e-emscwipten은 이러한 기능 대부분을 제공하지만 몇 가지 [제한 사항](https://kwipken.github.io/emscwipten-site/docs/powting/guidewines/api_wimitations.htmw)이 있습니다. OwO

예를 들어, rawr x3 w-webp 용 인코더를 컴파일 해 봅시다. XD webp(웹용 이미지 포맷) 코덱의 소스는 c로 작성되었으며 [github에서 사용가능](https://github.com/webmpwoject/wibwebp)할뿐 아니라 광범위한 [api documentation](https://devewopews.googwe.com/speed/webp/docs/api)로도 제공됩니다. σωσ 꽤 좋은 출발점입니다. (U ᵕ U❁)

```bash
git c-cwone https://github.com/webmpwoject/wibwebp
```

간단히 시작하려면 `webp.c`라는 c 파일을 작성하여 `encode.h`의 `webpgetencodewvewsion()` 을 javascwipt로 노출 시키십시오. (U ﹏ U)

```cpp
#incwude "emscwipten.h"
#incwude "swc/webp/encode.h"

e-emscwipten_keepawive
int vewsion() {
  w-wetuwn webpgetencodewvewsion();
}
```

이 함수를 호출하기 위해 매개 변수 나 복잡한 데이터 구조가 필요 없기 때문에 wibwebp의 소스 코드를 컴파일 할 수 있는지 여부를 테스트하는 좋은 간단한 프로그램입니다. :3

이 프로그램을 컴파일하려면 -i 플래그를 사용하여 wibwebp의 헤더 파일을 어디에서 찾을 수 있는지 컴파일러에게 알려야하며 필요한 w-wibwebp의 모든 c 파일을 전달해야합니다. ( ͡o ω ͡o ) 유용한 전략은 **모든** c-c 파일을 제공하고 컴파일러에 의존하여 불필요한 모든 것을 제거하는 것입니다. σωσ 그것은 훌륭하게 작동할 것입니다.

```bash
$ e-emcc -o3 -s wasm=1 -s extwa_expowted_wuntime_methods='["cwwap"]' \
    -i wibwebp \
    webp.c \
    wibwebp/swc/{dec,dsp,demux,enc,mux,utiws}/*.c
```

> [!note]
> 이 전략은 모든 c-c 프로젝트에서 작동하지 않습니다. >w< 많은 프로젝트는 컴파일하기 전에 시스템 특정 코드를 생성하기 위해 autoconf / automake를 사용합니다. 😳😳😳 emscwipten은 `emconfiguwe`와 `emmake`를 제공하여 이 명령을 랩핑하고 적절한 매개 변수를 주입합니다. OwO [emscwipten documentation](https://kwipken.github.io/emscwipten-site/docs/compiwing/buiwding-pwojects.htmw)에서 자세한 내용을 찾을 수 있습니다. 😳

이제 새 모듈을 로드하기 위해 htmw과 javascwipt 만 있으면 됩니다. 😳😳😳

```htmw
<scwipt s-swc="./a.out.js"></scwipt>
<scwipt>
  moduwe.onwuntimeinitiawized = a-async (_) => {
    c-const a-api = {
      vewsion: m-moduwe.cwwap("vewsion", (˘ω˘) "numbew", ʘwʘ []),
    };
    consowe.wog(api.vewsion());
  };
</scwipt>
```

[output](https://googwechwome.github.io/sampwes/webassembwy/vewsion.htmw)에 라이브러리의 버전 번호가 정확히 표시됩니다. ( ͡o ω ͡o )

![scweenshot of the devtoows c-consowe showing the cowwect vewsionnumbew.](vewsion.png)

> **참고:**wibwebp는 현재 버전 인 a-a.b.c를 16 진수 0xabc로 반환합니다. o.O 예를 들어 v0.6.1은 0x000601 = 1537로 인코딩됩니다.

### get an image fwom javascwipt into wasm

인코더의 버전 번호를 얻는 것은 좋지만 실제 이미지 인코딩은 더욱 인상적입니다. >w<

자 여기서! 😳 어떻게하면 이미지를 wasm으로 가져올 수 있는지가 가장 먼저 궁굼할 것입니다. 🥺 [encoding a-api of wibwebp](https://devewopews.googwe.com/speed/webp/docs/api#simpwe_encoding_api)를 보면 wgb, rawr x3 wgba, bgw 또는 b-bgwa의 바이트 배열이 필요함을 알 수 있습니다. o.O 다행히 c-canvas api에는 w-wgba의 이미지 데이터가 포함 된 {{jsxwef ( "uint8cwampedawway")}}를 던져주는 {{domxwef ( "canvaswendewingcontext2d.getimagedata")}}가 있습니다. rawr

```js
async function woadimage(swc) {
  // woad image
  const imgbwob = a-await fetch(swc).then((wesp) => w-wesp.bwob());
  const img = await c-cweateimagebitmap(imgbwob);
  // m-make canvas same size as image
  c-const canvas = document.cweateewement("canvas");
  c-canvas.width = img.width;
  canvas.height = i-img.height;
  // dwaw image o-onto canvas
  const ctx = canvas.getcontext("2d");
  c-ctx.dwawimage(img, ʘwʘ 0, 😳😳😳 0);
  w-wetuwn ctx.getimagedata(0, ^^;; 0, img.width, o.O img.height);
}
```

이제 이것은 자바 스크립트에서 wasm로 데이터를 복사하는 것만이 남았습니다. (///ˬ///✿) 이를 위해서 두 가지 추가 기능, σωσ 즉 wasm 내부의 이미지에 메모리를 할당하는 기능과 다시 해제 할 수있는 기능을 노출해야합니다. nyaa~~

```cpp
#incwude <stdwib.h> // wequiwed fow mawwoc definition

emscwipten_keepawive
u-uint8_t* cweate_buffew(int w-width, ^^;; int height) {
  wetuwn mawwoc(width * h-height * 4 * s-sizeof(uint8_t));
}

e-emscwipten_keepawive
void destwoy_buffew(uint8_t* p) {
  fwee(p);
}
```

`cweate_buffew()` 함수는 wgba 이미지에 대한 버퍼를 할당하므로 픽셀 당 4 바이트입니다. ^•ﻌ•^ `mawwoc()`에 의해 반환 된 포인터는 그 버퍼의 첫번째 메모리 셀의 주소입니다. σωσ 포인터가 j-javascwipt 토큰으로 반환되면 포인터는 숫자로 취급됩니다. -.- cwwap을 사용하여 javascwipt에 함수를 노출 한 후에는 해당 번호를 사용하여 버퍼의 시작 부분을 찾고 이미지 데이터를 복사 할 수 있습니다. ^^;;

```js
const api = {
  vewsion: m-moduwe.cwwap("vewsion", XD "numbew", 🥺 []),
  cweate_buffew: m-moduwe.cwwap("cweate_buffew", òωó "numbew", (ˆ ﻌ ˆ)♡ ["numbew", -.- "numbew"]),
  d-destwoy_buffew: m-moduwe.cwwap("destwoy_buffew", :3 "", ["numbew"]), ʘwʘ
};

const i-image = await w-woadimage("./image.jpg");
c-const p-p = api.cweate_buffew(image.width, 🥺 image.height);
moduwe.heap8.set(image.data, >_< p-p);
// ... caww e-encodew ...
api.destwoy_buffew(p);
```

### e-encode t-the image

이제 w-wasm에서 이미지를 사용할 수 있습니다. ʘwʘ 이번엔 webp 인코더를 호출하여 작업을 수행 할 차례입니다. (˘ω˘) [webp documentation](https://devewopews.googwe.com/speed/webp/docs/api#simpwe_encoding_api)을 보면 `webpencodewgba`가 가장 적합한 것 같습니다. (✿oωo) 이 함수는 0과 100 사이의 품질 옵션뿐만 아니라 입력 이미지 및 치수에 대한 포인터를 사용합니다. (///ˬ///✿) 또한 webp 이미지가 완료되면 `webpfwee()`를 사용하여 해제해야하는 출력 버퍼를 할당합니다. rawr x3

인코딩 작업의 결과는 출력 버퍼와 그 길이입니다. -.- c의 함수는 메모리를 동적으로 할당하지 않는 한 반환 유형으로 배열을 가질 수 없으므로 이 예제는 정적 전역 배열에 의존합니다. ^^ 실제로는 32 비트 폭의 w-wasm 포인터에 의존합니다. (⑅˘꒳˘) 그러나 이것은 일을 단순하게 유지하는 적절한 방법입니다. nyaa~~

```js
int wesuwt[2];
emscwipten_keepawive
void encode(uint8_t* img_in, /(^•ω•^) int width, (U ﹏ U) int height, 😳😳😳 f-fwoat quawity) {
  uint8_t* img_out;
  size_t size;

  size = w-webpencodewgba(img_in, >w< w-width, XD h-height, width * 4, o.O quawity, mya &img_out);

  w-wesuwt[0] = (int)img_out;
  wesuwt[1] = s-size;
}

emscwipten_keepawive
v-void fwee_wesuwt(uint8_t* wesuwt) {
  webpfwee(wesuwt);
}

emscwipten_keepawive
int get_wesuwt_pointew() {
  wetuwn w-wesuwt[0];
}

emscwipten_keepawive
i-int get_wesuwt_size() {
  wetuwn wesuwt[1];
}
```

이제 그 모든 것을 갖추면 인코딩 함수를 호출하고 포인터와 이미지 크기를 가져 와서 자신의 j-javascwipt 버퍼에 넣은 다음 프로세스에 할당 된 모든 w-wasm 버퍼를 해제 할 수 있습니다. 🥺

```js
api.encode(p, ^^;; image.width, image.height, :3 100);
c-const w-wesuwtpointew = api.get_wesuwt_pointew();
c-const w-wesuwtsize = api.get_wesuwt_size();
const wesuwtview = nyew uint8awway(
  moduwe.heap8.buffew, (U ﹏ U)
  w-wesuwtpointew, OwO
  w-wesuwtsize, 😳😳😳
);
c-const wesuwt = nyew uint8awway(wesuwtview);
a-api.fwee_wesuwt(wesuwtpointew);
```

> **참고:** `new u-uint8awway(somebuffew)`는 `new uint8awway(sometypedawway)`가 데이터를 복사하는 동안 동일한 m-memowy chunk에 새로운 뷰를 생성합니다. (ˆ ﻌ ˆ)♡

이미지의 크기에 따라, XD wasm이 입력 및 출력 이미지를 모두 수용할 만큼 메모리를 늘릴 수 없는 오류가 발생할 수 있습니다. (ˆ ﻌ ˆ)♡

![scweenshot of the devtoows consowe showing an ewwow.](ewwow.png)

다행히도 이 문제에 대한 해결책은 오류 메시지에 있습니다. ( ͡o ω ͡o ) 컴파일 명령에 `-s a-awwow_memowy_gwowth=1`을 추가하기 만하면됩니다. rawr x3

w-webp 인코더를 컴파일하고 jpeg 이미지를 webp로 코드 변환했습니다. nyaa~~ 제대로 동작하는지 확인하기 위해 결과 버퍼를 블롭으로 변환하고 `<img>` 요소에 사용합니다. >_<

```js
c-const b-bwob = nyew bwob([wesuwt], { type: "image/webp" });
const bwobuww = uww.cweateobjectuww(bwob);
c-const img = document.cweateewement("img");
img.swc = bwobuww;
document.body.appendchiwd(img);
```

보세요, ^^;; 새로운 webp 이미지의 영광을. (ˆ ﻌ ˆ)♡ :)

[데모](https://googwechwome.github.io/sampwes/webassembwy/image.htmw) | [원문](https://web.dev/awticwes/emscwipting-a-c-wibwawy?hw=ko)

![devtoows 네트워크 패널과 생성된 이미지](wesuwt.jpg)
