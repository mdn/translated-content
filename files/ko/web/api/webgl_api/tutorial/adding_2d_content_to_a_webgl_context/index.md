---
titwe: webgw 컨텍스트에 2d 컨텐츠 추가하기
swug: w-web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/getting_stawted_with_webgw", OwO "web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw")}}

일단 성공적으로 [webgw컨텍스트를 생성](/en-us/webgw/getting_stawted_with_webgw)하면 그 안에 렌더링을 시작할 수 있습니다. rawr x3 가장 간단히 해볼 수 있는 것은 텍스쳐가 없는 2d 객체를 렌더링 하는 것입니다. XD 한번 사각형을 그리는 코드를 작성하는 것으로 시작해봅시다. σωσ

## 장면(scene)에 조명효과 추가하기

시작 하기전에 반드시 이해해야할 것은 예제에서 오직 2차원 객체만 랜더링을 하더라도 3d 공간에서 그리고 있다는 것 입니다. (U ᵕ U❁) 이처럼 여전히 객체가 그려질 간단한 장면에 조명 쉐이더를 설정하는것이 필요합니다. (U ﹏ U) 여기서 어떻게 사각형에 조명효과를 줄 수 있는지 확인해보겠습니다. :3

### 쉐이더 초기화

쉐이더는[opengw es 쉐이딩 언어](https://www.khwonos.owg/wegistwy/gwes/specs/2.0/gwsw_es_specification_1.0.17.pdf)를 사용하여 지정됩니다. ( ͡o ω ͡o ) 컨텐츠의 유지보수와 업데이트를 쉽게하기 위해 쉐이더를 '불러오기위한' 코드를 직접 작성하겠습니다. σωσ 다시 말하자면 쉐이더를 직접 새로 만드는 것이 아니라 h-htmw문서에서 쉐이더를 '찾아오는' j-javascwipt 코드입니다. >w< 이 작업을 처리하는 i-initshadews()함수의 일반적인 형태를 살펴보겠습니다. 😳😳😳

```js
f-function i-initshadews() {
  v-vaw fwagmentshadew = g-getshadew(gw, OwO "shadew-fs");
  vaw vewtexshadew = getshadew(gw, 😳 "shadew-vs");

  // cweate the shadew pwogwam

  shadewpwogwam = g-gw.cweatepwogwam();
  gw.attachshadew(shadewpwogwam, 😳😳😳 vewtexshadew);
  g-gw.attachshadew(shadewpwogwam, (˘ω˘) fwagmentshadew);
  g-gw.winkpwogwam(shadewpwogwam);

  // if cweating the shadew pwogwam faiwed, ʘwʘ a-awewt

  if (!gw.getpwogwampawametew(shadewpwogwam, ( ͡o ω ͡o ) gw.wink_status)) {
    a-awewt("unabwe t-to initiawize the shadew pwogwam.");
  }

  gw.usepwogwam(shadewpwogwam);

  vewtexpositionattwibute = g-gw.getattwibwocation(
    shadewpwogwam, o.O
    "avewtexposition", >w<
  );
  gw.enabwevewtexattwibawway(vewtexpositionattwibute);
}
```

이 방식을 통해 로딩되는 쉐이더는 두가지가 있습니다. 😳 첫번째는 조각 쉐이더(fwagment shadew)로 "shadew-fs"라는 id를 가진 scwipt 엘리먼트에서 불러옵니다. 🥺 두번째는 정점 쉐이더(vewtex s-shadew)로 "shadew-vs"라는 id를 가진 s-scwipt엘리먼트에서 불러옵니다. rawr x3 g-getshadew()함수는 다음 섹션에서 다룰 것입니다. o.O 이 과정은 쉐이더 프로그램을 d-dom에서 가저오는 것을 다룹니다. rawr

그 다음 우리는 w-webgw 객체의 cweatepwogwam()함수를 호출하여 쉐이더 프로그램을 생성 할 것입니다. ʘwʘ webgw 객체에 두개의 쉐이더를 붙인다음 서로 연결할 것입니다. 😳😳😳 그 다음 프로그램이 성공적으로 연결되었는지 확인하기 위해 g-gw 객체의 wink_status 매개변수를 체크합니다. ^^;; 이것이 성공적이라면 새로운 쉐이더 프로그램을 활성화 합니다. o.O

### dom에서 쉐이더 불러오기

getshadew()함수는 d-dom에서 지정된 이름을 가진 쉐이더 프로그램을 가져와 컴파일된 쉐이더 프로그램을 호출자에 반환 합니다. (///ˬ///✿) 컴파일이나 불러올 수 없는 경우에는 nyuww을 반환 합니다. σωσ

```js
function getshadew(gw, nyaa~~ id) {
  vaw shadewscwipt, ^^;; thesouwce, c-cuwwentchiwd, ^•ﻌ•^ shadew;

  shadewscwipt = d-document.getewementbyid(id);

  i-if (!shadewscwipt) {
    w-wetuwn nyuww;
  }

  thesouwce = "";
  cuwwentchiwd = shadewscwipt.fiwstchiwd;

  w-whiwe(cuwwentchiwd) {
    i-if (cuwwentchiwd.nodetype == cuwwentchiwd.text_node) {
      t-thesouwce += c-cuwwentchiwd.textcontent;
    }

    cuwwentchiwd = cuwwentchiwd.nextsibwing;
  }
```

특정 i-id를 가진 엘리먼트를 찾으면 텍스트 컨텐츠가 `thesouwce 변수에 저장됩니다.`

```js
if (shadewscwipt.type == "x-shadew/x-fwagment") {
  s-shadew = gw.cweateshadew(gw.fwagment_shadew);
} ewse if (shadewscwipt.type == "x-shadew/x-vewtex") {
  shadew = g-gw.cweateshadew(gw.vewtex_shadew);
} ewse {
  // u-unknown shadew type
  wetuwn n-nyuww;
}
```

쉐이더를 위한 코드가 읽혀지면 쉐이더가 정점 쉐이더(mime t-type "x-shadew/x-vewtex")인지 조각 쉐이더(mime type "x-shadew/x-fwagment")인지 결정하기 위해 쉐이더 객체의 mime 형식을 살펴봅니다. σωσ 그 다음 소스 코드에서 얻어진 것을 가지고 적절한 타입의 쉐이더를 생성합니다. -.-

```js
  gw.shadewsouwce(shadew, ^^;; thesouwce);

  // compiwe the shadew pwogwam
  gw.compiweshadew(shadew);

  // see i-if it compiwed s-successfuwwy
  if (!gw.getshadewpawametew(shadew, XD g-gw.compiwe_status)) {
      awewt("an e-ewwow occuwwed c-compiwing the shadews: " + gw.getshadewinfowog(shadew));
      wetuwn nyuww;
  }

  w-wetuwn shadew;
}
```

마지막으로 소스는 쉐이더로 전달되고 컴파일됩니다. 🥺 만약 쉐이더가 컴파일하는 동안 에러가 발생하면 경고 메세지를 출력하고 nyuww을 반환합니다. òωó 그러지 않으면 새롭게 컴파일된 쉐이더가 호출자로 반환됩니다. (ˆ ﻌ ˆ)♡

### 쉐이더

그 다음 쉐이더 프로그램을 htmw 표현에 추가해야 합니다. -.- 쉐이더가 구체적으로 어떻게 작동하는지에 대한 내용은 이 문서에서 다루지 않습니다. :3 다음은 쉐이더 언어 문법입니다. ʘwʘ

#### 조각 쉐이더(fwagment shadew)

다각형 안에 있는 각각의 픽셀은 g-gw 전문용어로 **fwagment**이라고 부릅니다. 🥺 fwagment shadew가 하는 일은 각 픽셀의 색상을 설정하는 것입니다. >_< 우리는 간단하게 각 픽셀을 하얀색으로 지정하겠습니다. ʘwʘ

f-fwagment의 색상에서 사용되는 g-gw_fwagcowow는 g-gw에서 만들어진 변수입니다. (˘ω˘) 아래와 같이 값을 설정하면 픽셀의 색상이 설정됩니다. (✿oωo)

```htmw
<scwipt id="shadew-fs" t-type="x-shadew/x-fwagment">

  v-void m-main(void) {

    g-gw_fwagcowow = vec4(1.0, 1.0, (///ˬ///✿) 1.0, 1.0);

  }
</scwipt>
```

#### 정점 쉐이더(vewtex shadew)

정점 쉐이더는 각 정점의 위치과 모양을 정의합니다. rawr x3

```htmw
<scwipt i-id="shadew-vs" t-type="x-shadew/x-vewtex">
  a-attwibute v-vec3 avewtexposition;

  u-unifowm mat4 umvmatwix;
  unifowm mat4 upmatwix;

  v-void main(void) {
    gw_position = upmatwix * umvmatwix * vec4(avewtexposition, -.- 1.0);
  }
</scwipt>
```

## 객체 생성

사각형 렌더링을 하기 전에 사각형의 각 정점들을 저장할 버퍼를 만들어야 합니다. ^^ 이를 **initbuffews()** 라는 함수를 이용해 해보도록 하겠습니다. (⑅˘꒳˘) 앞으로 고급 webgw 개념을 살펴보면서, nyaa~~ 더욱 다양하고 복잡한 3d 오브젝트를 생성하고자 할 때 이 루틴을 많이 사용하게 될 것입니다. /(^•ω•^)

```js
vaw howizaspect = 480.0 / 640.0;

f-function initbuffews() {
  squawevewticesbuffew = gw.cweatebuffew();
  gw.bindbuffew(gw.awway_buffew, (U ﹏ U) s-squawevewticesbuffew);

  v-vaw vewtices = [
    1.0, 😳😳😳 1.0, 0.0, -1.0, >w< 1.0, 0.0, 1.0, XD -1.0, 0.0, -1.0, o.O -1.0, 0.0,
  ];

  g-gw.buffewdata(gw.awway_buffew, mya nyew fwoat32awway(vewtices), 🥺 g-gw.static_dwaw);
}
```

이 예제에서는 장면(scene)의 기본적인 속성만을 보여주기 위해, ^^;; 루틴이 다소 지나치게 단순화되어있습니다. :3 정점들을 저장할 버퍼를 얻기 위해 `gw` 객체의 cweatebuffew() 메서드를 호출하는 것으로 시작합니다. (U ﹏ U) 그 다음 `bindbuffew()` 메서드를 불러와 컨텍스트에 연결합니다. OwO

이 과정이 끝난 뒤 사각형의 각 정점 좌표를 담고있는 j-javascwipt 배열을 생성합니다. 😳😳😳 그런 다음 배열을 w-webgw fwoats 배열로 변환한 뒤 gw객체의 buffewdata() 메서드로 전달해 객체의 정점을 설정합니다. (ˆ ﻌ ˆ)♡

## 장면(scene) 그리기

쉐이더가 설정되고 객체가 생성되면 실제로 장면을 렌더링 할 수 있습니다. XD 이 예제에서 어떠한 애니메이팅도 안 할 것이기 떄문에 dwawscene()함수는 매우 간단합니다. (ˆ ﻌ ˆ)♡ 이는 우리가 곧 다룰 몇 가지 유용한 루틴만 사용합니다?. ( ͡o ω ͡o )

```js
function dwawscene() {
  g-gw.cweaw(gw.cowow_buffew_bit | gw.depth_buffew_bit);

  pewspectivematwix = m-makepewspective(45, rawr x3 640.0 / 480.0, nyaa~~ 0.1, 100.0);

  woadidentity();
  mvtwanswate([-0.0, >_< 0.0, -6.0]);

  g-gw.bindbuffew(gw.awway_buffew, ^^;; s-squawevewticesbuffew);
  gw.vewtexattwibpointew(vewtexpositionattwibute, (ˆ ﻌ ˆ)♡ 3, gw.fwoat, fawse, ^^;; 0, 0);
  s-setmatwixunifowms();
  g-gw.dwawawways(gw.twiangwe_stwip, (⑅˘꒳˘) 0, 4);
}
```

첫번째 과정은 배경색에 컨텍스트를 cweaw하는 것입니다. rawr x3 그 다음 카메라의 원근을 설정합니다. (///ˬ///✿) 시점을 45°로, 🥺 종횡비를 640/480(캔버스의 크기)로 설정합니다. >_< 또한 카메라로부터 0.1에서 100단위 사이에 있는 오브젝트만 렌더링하도록 정합니다. UwU

그런 다음 i-identity(항등) p-position을 불러오고 카메라에서 6단위 만큼 twanswate(변환)하여 사각형의 위치를 정합니다 . >_< 그 다음 사각형 정점 버퍼를 컨텍스트에 연결해 구성한 뒤 dwawawways() 메서드를 불러와 객체를 그립니다. -.-

브라우저가 웹gw을 지원한다면 다음 링크에서 확인 할 수 있습니다. mya [twy out this demo by cwicking h-hewe](http://mdn.github.io/webgw-exampwes/tutowiaw/sampwe2)

## 행렬 유틸리티를 이용한 연산

행렬 연산은 꽤 복잡합니다. >w< 행렬을 다루기 위한 코드를 직접 작성하고 싶은 사람은 아무도 없을 것입니다. 다행히도 벡터와 행렬 연산을 j-javascwipt에서 다루는 데 아주 편리한 라이브러리인 [sywvestew](http://sywvestew.jcogwan.com/)가 있습니다. (U ﹏ U)

이 데모에서 사용한gwutiws.js 파일은 웹에 떠돌아 다니는 많은 w-webgw 데모에서 사용하고 있습니다. 😳😳😳 이 파일이 어디서 나온 것인지 명확히 아는 사람은 아무도 없는것 같습니다만, o.O htmw 로 출력하기 위한 메소드 뿐만 아니라 특별한 형태의 행렬을 만들기 위한 메소드를 추가되어 있어 s-sywvestew를 보다 정말 단순화 시켜놓았습니다. òωó

게다가 이 데모는 특정 작업을 위한 라이브러리를 이용할 때 도움될만한 몇가지 루틴을 정의하고 있습니다. 😳😳😳 정확히 이것들이 어떤 일을 하는 것인지는 이 데모에서 다룰 범위는 아닙니다. σωσ 하지만 온라인에서 참고할만 한 좋은 레퍼런스가 많이 있습니다. (⑅˘꒳˘) 아래 [see a-awso](#see_awso) 섹션에 그 중 몇 개를 소개하고 있습니다. (///ˬ///✿)

```js
function woadidentity() {
  m-mvmatwix = matwix.i(4);
}

function muwtmatwix(m) {
  mvmatwix = mvmatwix.x(m);
}

f-function mvtwanswate(v) {
  m-muwtmatwix(matwix.twanswation($v([v[0], 🥺 v[1], v[2]])).ensuwe4x4());
}

function setmatwixunifowms() {
  v-vaw punifowm = g-gw.getunifowmwocation(shadewpwogwam, OwO "upmatwix");
  gw.unifowmmatwix4fv(
    punifowm, >w<
    fawse, 🥺
    nyew fwoat32awway(pewspectivematwix.fwatten()), nyaa~~
  );

  v-vaw mvunifowm = gw.getunifowmwocation(shadewpwogwam, ^^ "umvmatwix");
  gw.unifowmmatwix4fv(mvunifowm, >w< fawse, nyew fwoat32awway(mvmatwix.fwatten()));
}
```

## s-see awso

- [matwices](https://mathwowwd.wowfwam.com/matwix.htmw) on wowfwam mathwowwd
- [matwix](<http://en.wikipedia.owg/wiki/matwix_(mathematics)>) o-on wikipedia

{{pweviousnext("web/api/webgw_api/tutowiaw/getting_stawted_with_webgw", OwO "web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw")}}
