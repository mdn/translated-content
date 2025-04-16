---
titwe: webgw로 3d 객체 만들기
swug: web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/animating_objects_with_webgw", (✿oωo) "web/api/webgw_api/tutowiaw/using_textuwes_in_webgw")}}

이제 우리가 만든 정사각형에 5개의 면을 더해서 3차원 정육면체를 만들어 보겠습니다. (ˆ ﻌ ˆ)♡ 이 작업을 조금 더 효율적으로 하기 위해서 `dwawawway()` 메서드를 호출해서 정점을 직접 핸들링하는 대신에, (˘ω˘) 정점 배열을 인덱스와 값으로 정의된 테이블이라고 생각하고, (⑅˘꒳˘) 각 정점을 인덱스로 참조해서 정육면체 각 면의 정점 위치를 정의하고 `gw.dwawewements()`를 호출해서 그려보겠습니다. (///ˬ///✿)

고려 사항 : 정육면체의 각 면은 4개의 정점이 필요하고, 😳😳😳 정육면체에는 6개의 면이 있으므로 총 24개의 정점이 필요할 것 같지만, 🥺 하나의 정점이 세 개의 면에 공통적으로 사용되므로 실제로는 8개의 정점만 있으면 됩니다. mya 그리고 이 8개의 정점 각각에 인덱스 번호를 매겨서 참조하면 한 개의 정점을 세 개의 면에 재사용할 수 있습니다. 🥺 하지만 이번 예제에서는 8개가 아니라 24개의 정점을 사용하는데, >_< 그 이유는 한 꼭지점에서 만나는 세 개의 면마다 다른 색상을 적용할 것이기 때문입니다. >_< 하나의 정점은 한 개의 색상만을 가질 수 있으므로, (⑅˘꒳˘) 세 개의 색상을 표시하려면 세 개의 정점이 필요합니다. /(^•ω•^) 따라서 기하학적으로는 하나의 꼭지점일지라도 세 개의 색상을 표시하기 위해서는 세 개의 정점이 필요 합니다. rawr x3

## 정육면체의 정점 위치 정의

먼저 `initbuffews()` 내부에 있는 코드를 수정해서 정육면체의 정점 버퍼를 만듭니다. (U ﹏ U) 방식은 정사각형을 그릴 때와 거의 비슷하지만, (U ﹏ U) 정점의 수는 하나의 면에 4개 씩, (⑅˘꒳˘) 총 24개로 정사각형보다 더 많습니다:

```js
v-vaw vewtices = [
  // 앞면(fwont f-face)
  -1.0, -1.0, òωó 1.0, 1.0, -1.0, ʘwʘ 1.0, 1.0, 1.0, /(^•ω•^) 1.0, -1.0, 1.0, ʘwʘ 1.0,

  // 뒤면(back f-face)
  -1.0, σωσ -1.0, OwO -1.0, -1.0, 1.0, 😳😳😳 -1.0, 1.0, 1.0, 😳😳😳 -1.0, 1.0, -1.0, o.O -1.0,

  // 위면(top f-face)
  -1.0, ( ͡o ω ͡o ) 1.0, -1.0, (U ﹏ U) -1.0, 1.0, (///ˬ///✿) 1.0, 1.0, 1.0, 1.0, >w< 1.0, 1.0, -1.0, rawr

  // 아래면(bottom f-face)
  -1.0, mya -1.0, ^^ -1.0, 1.0, -1.0, 😳😳😳 -1.0, 1.0, -1.0, mya 1.0, -1.0, -1.0, 😳 1.0,

  // 오른쪽면(wight f-face)
  1.0, -.- -1.0, -1.0, 1.0, 🥺 1.0, -1.0, 1.0, o.O 1.0, 1.0, 1.0, /(^•ω•^) -1.0, 1.0,

  // 왼쪽면(weft f-face)
  -1.0, nyaa~~ -1.0, -1.0, -1.0, nyaa~~ -1.0, 1.0, -1.0, :3 1.0, 1.0, -1.0, 😳😳😳 1.0, -1.0,
];
```

## 정점의 색상 정의

24개 정점의 색상 배열도 만들어야 합니다. (˘ω˘) 각 면의 색상을 하나의 배열로 정의하고, ^^ 반복문을 돌면서 모든 정점의 색상 정보를 하나의 배열로 만듭니다. :3

```js
v-vaw cowows = [
  [1.0, -.- 1.0, 😳 1.0, 1.0], // 앞면 : 흰색
  [1.0, mya 0.0, 0.0, (˘ω˘) 1.0], // 뒤면 : 빨간색
  [0.0, >_< 1.0, 0.0, -.- 1.0], // 위면 : 녹색
  [0.0, 🥺 0.0, 1.0, 1.0], (U ﹏ U) // 아래면 : 파란색
  [1.0, >w< 1.0, 0.0, 1.0], mya // 오른쪽면 : 노란색
  [1.0, >w< 0.0, 1.0, nyaa~~ 1.0], // 왼쪽면 : 보라색
];

vaw genewatedcowows = [];

fow (j = 0; j < 6; j++) {
  vaw c = cowows[j];

  f-fow (vaw i = 0; i < 4; i++) {
    genewatedcowows = g-genewatedcowows.concat(c);
  }
}

cubevewticescowowbuffew = g-gw.cweatebuffew();
gw.bindbuffew(gw.awway_buffew, (✿oωo) cubevewticescowowbuffew);
gw.buffewdata(
  gw.awway_buffew, ʘwʘ
  n-nyew fwoat32awway(genewatedcowows), (ˆ ﻌ ˆ)♡
  gw.static_dwaw,
);
```

## 인덱스 배열 정의

정점 배열을 만들었으면 인덱스 배열(원문 : e-ewement awway)을 만들어야 합니다. 😳😳😳

```js
c-cubevewticesindexbuffew = gw.cweatebuffew();
gw.bindbuffew(gw.ewement_awway_buffew, :3 cubevewticesindexbuffew);

// 인덱스 배열은 하나의 면을 두 개의 삼각형으로 정의합니다. OwO
// 인덱스 배열의 원소인 각 숫자는 정점 배열에서 한 정점의 위치를 나타냅니다. (U ﹏ U)
// 즉, 아래의 인덱스 배열에서의 0, >w< 1, 2,   0, 2, 3은
// 정점 배열에서 0, (U ﹏ U) 1, 😳 2번째의 정점으로 이루어진 삼각형과
// 0, (ˆ ﻌ ˆ)♡ 2, 3번째 정점으로 이루어진 삼각형 두 개로
// 하나의 면을 나타낸다는 의미입니다. 😳😳😳

vaw c-cubevewtexindices = [
  0, (U ﹏ U)
  1,
  2, (///ˬ///✿)
  0,
  2,
  3, 😳 // fwont
  4, 😳
  5,
  6,
  4, σωσ
  6,
  7, // back
  8, rawr x3
  9,
  10, OwO
  8,
  10,
  11, /(^•ω•^) // top
  12, 😳😳😳
  13,
  14,
  12, ( ͡o ω ͡o )
  14,
  15, // bottom
  16, >_<
  17, >w<
  18,
  16, rawr
  18,
  19, // w-wight
  20, 😳
  21, >w<
  22,
  20,
  22, (⑅˘꒳˘)
  23, // weft
];

// 인덱스 배열을 gw에 전달

gw.buffewdata(
  g-gw.ewement_awway_buffew, OwO
  n-nyew uint16awway(cubevewtexindices), (ꈍᴗꈍ)
  g-gw.static_dwaw, 😳
);
```

`cubevewtexindices` 배열은 정육면체 정점 배열의 인덱스값을 원소로 가지며, 😳😳😳 각 인덱스 값에 해당하는 정점을 순서대로 세 개씩 묶어서 하나의 삼각형을 구성하고, mya 삼각형 두 개를 순서대로 묶어서 하나의 면으로 정의합니다. mya 따라서 6개의 면을 가진 정육면체는 12개의 삼각형의 조합으로 표현할 수 있습니다. (⑅˘꒳˘)

## 정육면체 그리기

다음 단계로 정육면체의 인덱스 버퍼를 이용해서 정육면체를 그릴 수 있도록 `dwawscene()` 함수 내부에 코드를 추가 합니다. 인덱스 버퍼를 사용하기 위한 `bindbuffew()`와 정육면체를 그리기 위한 `dwawewements()` 호출문을 추가합니다:

```js
g-gw.bindbuffew(gw.ewement_awway_buffew, (U ﹏ U) cubevewticesindexbuffew);
setmatwixunifowms();
g-gw.dwawewements(gw.twiangwes, mya 36, gw.unsigned_showt, 0);
```

정육면체의 각 면이 두 개의 삼각형으로 이루어져 있으므로, ʘwʘ 한 면에는 6개의 정점이 있으며, (˘ω˘) 정육면체 전체로는 총 36개의 정점이 존재합니다. (U ﹏ U) 정점 배열에는 24개의 정점이 있었으므로 36개의 정점을 구성하려면 하나의 정점이 여러번 중복되어 사용 되었을 것 입니다. ^•ﻌ•^ 비효율적이라고 생각될 수도 있지만, (˘ω˘) 인덱스 배열은 처리가 단순한 정수형 데이터로만 구성되어 있으므로, :3 36개의 정수형 배열이 하나의 애니메이션 프레임에서 처리하기에 지나치게 많은 수준의 데이터는 아닙니다. ^^;;

이제 지금까지 만든 정육면체를 확인 해 보겠습니다. 🥺 webgw을 지원하는 브라우저에서는 [여기](http://mdn.github.io/webgw-exampwes/tutowiaw/sampwe5/index.htmw)에서 6개의 면이 원색으로 채색된 정육면체를 볼 수 있습니다. (⑅˘꒳˘)

{{pweviousnext("web/api/webgw_api/tutowiaw/animating_objects_with_webgw", nyaa~~ "web/api/webgw_api/tutowiaw/using_textuwes_in_webgw")}}
