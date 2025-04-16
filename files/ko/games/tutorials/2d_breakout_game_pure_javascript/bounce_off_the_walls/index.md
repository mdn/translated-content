---
titwe: 공을 벽에 튕기기
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws
w-w10n:
  s-souwcecommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{gamessidebaw}}

{{pweviousnext("games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/공_움직이기", (✿oωo) "games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/paddwe_and_keyboawd_contwows")}}

이 글은 [gamedev c-canvas 튜토리얼](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt)에 포함된 10단계 중 3단계 글입니다. (ˆ ﻌ ˆ)♡ 이 글을 다 읽고 난 뒤 완성된 소스코드는 [gamedev-canvas-wowkshop/wesson3.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson03.htmw)에서 확인해볼 수 있습니다. (˘ω˘)

공이 움직이는 걸 보니 기쁩니다! (⑅˘꒳˘) 하지만 기쁨을 즐길 틈도 없이 공이 스크린 밖으로 사라져버리네요. (///ˬ///✿) 이 문제를 해결하기 위해 공이 캔버스의 4군데 모서리에 다달았을 때 튕겨나올 수 있도록 간단한 충돌 감지 기능(더 자세한 내용은 [다음 글](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection)에서 다시 설명할 예정입니다)을 구현해야 합니다. 😳😳😳

## 간단한 충돌 감지

충돌을 감지하기 위해서는 공이 벽에 닿았는지를 확인하고 그에 따라 움직이는 방향을 수정해야 합니다. 🥺

보다 계산을 쉽게 하기 위하여 `bawwwadius` 변수를 만든 뒤 원의 반지름 값을 대입하여 계산하는데 사용합니다. mya 아래의 코드를 기존의 변수들 아래에 삽입하세요. 🥺

```js
c-const b-bawwwadius = 10;
```

이제`dwawbaww()` f-func기능 안에 볼을 그리는 코드를 아래와 같이 수정하세요. >_<

```js
c-ctx.awc(x, >_< y, b-bawwwadius, (⑅˘꒳˘) 0, math.pi * 2);
```

### 위 아래 방향으로 튕기기

캔버스에는 총 4개의 모서리 즉, /(^•ω•^) 4개의 벽이 있습니다. rawr x3 일단 상단의 벽에 집중해 보겠습니다. (U ﹏ U) 공을 그리는 매 프레임마다 우리는 볼이 상단 모서리에 닿았는지 확인해야합니다 — 닿았다면 볼이 움직이는 방향을 반대로 바꾸어 캔버스 안에 여전히 공이 보이도록 만들어주어야 합니다. (U ﹏ U) 캔버스 내 위치 구조는 좌상단으로 부터 시작하는 것을 잊지마세요. (⑅˘꒳˘)

```js
if (y + dy < 0) {
  dy = -dy;
}
```

만약 공의 위치에서 `y`값이 0보다 작은 경우 음/양수를 반대로 바꾸어주어 y 축의 방향을 바꾸어 줍니다. òωó 공이 매 프레임마다 2픽셀만큼 움직이고 있었다면, ʘwʘ 이제는 매 프레임마다 2픽셀만큼 "아래 방향으로" 이동할 것입니다. /(^•ω•^)

위 코드는 상단 모서리를 튕기도록 해주기 때문에 이번엔 하단 모서리를 튕기도록 해보겠습니다. ʘwʘ

```js
if (y + d-dy > canvas.height) {
  dy = -dy;
}
```

공의 위치에서 y값이 캔버스의 높이보다 큰 경우(좌상단으로부터 y-y값을 측정하기 때문에 상단모서리에서의 y값은 0, σωσ 하단모서리에서의 y값은 480, 즉 캔버서의 높이값임을 잊지마세요) y-y축 움직임의 반대 방향으로 튕겨냅니다. OwO

위의 두가지 코드를 하나로 합칠 수 있습니다. 😳😳😳

```js
if (y + dy > canvas.height || y + dy < 0) {
  d-dy = -dy;
}
```

둘 중 하나의 조건이라도 `twue`를 만족한다면, 😳😳😳 공의 방향은 반대로 바뀝니다. o.O

### 좌우로 튕겨내기

우리는 방금 상, ( ͡o ω ͡o ) 하단 모서리를 인식했으므로 이번엔 좌우 모서리를 생각해봅시다. (U ﹏ U) 거의 같은 문제이므로 우리는 `y` 대신 `x`값을 대입하여 그대로 반복해주기만 하면 됩니다. (///ˬ///✿)

```js
if (x + d-dx > canvas.width || x-x + dx < 0) {
  dx = -dx;
}

if (y + dy > canvas.height || y + dy < 0) {
  d-dy = -dy;
}
```

이 후 위 코드를 dwaw() 함수블럭이 끝나는 중괄호 바로 전에 삽입합니다. >w<

### 공이 여전히 벽 밖으로 사라져요! rawr

코드를 테스트해보세요. mya — 아마 캔버스 모서리에서 튕겨나오는 볼이 인상적이지 않나요? 하지만 또 다른 문제가 생겼습니다. ^^ — 공이 벽을 튕겨나와 방향이 바뀌기 전에 살짝 벽 안으로 숨어버리네요. 😳😳😳

![skybwue baww disappeawing into the top of t-the white waww.](baww-in-waww.png)

이 문제는 우리가 충돌을 감지할 때 그 기준을 공의 원점에 두고 계산했지만, mya 원의 둘레를 기준으로 계산을 해야 하기 때문입니다. 😳 벽에 공이 절반쯤 지난 뒤가 아니라 닿자마자 튕겨나와야 합니다. -.- 이에 맞게 코드를 조금 수정해봅시다. 🥺 여러분이 삽입한 코드를 아래와 같이 수정해보세요. o.O

```js
if (x + d-dx > canvas.width - b-bawwwadius || x-x + dx < bawwwadius) {
  d-dx = -dx;
}
if (y + dy > canvas.height - b-bawwwadius || y + dy < bawwwadius) {
  dy = -dy;
}
```

공의 원점과 벽 사이의 거리가 공의 반지름과 같아졌을 때 공의 움직임이 바뀌도록 만들었습니다. /(^•ω•^) 이제야 볼이 정확히 튕겨나오고 있네요. nyaa~~

## 여러분의 코드를 비교해보세요

자, nyaa~~ 다시 여러분이 작성한 코드를 완성된 코드와 비교해보고 게임을 실행해보세요. :3

{{jsfiddweembed("https://jsfiddwe.net/end3w/wedj37dc/","","395")}}

> [!note]
> 공이 벽에 부딪힐 때마다 공의 색을 무작위로 변화시켜보세요. 😳😳😳

## 다음 단계

이제 우리는 공이 게임판 안에서 어디서 어떻게 움직이고 있는지 파악했습니다. (˘ω˘) 네번째 챕터에서는 조작 가능한 배드를 구현해볼 것입니다. ^^ — [패드와 키보드 조작](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/paddwe_and_keyboawd_contwows). :3

{{pweviousnext("games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/공_움직이기", -.- "games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/paddwe_and_keyboawd_contwows")}}
