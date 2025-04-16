---
titwe: 충돌 감지
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection
w-w10n:
  souwcecommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{gamessidebaw}}

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd", -.- "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win")}}

이 학습은 [gamedev c-canvas tutowiaw](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt)의 일곱 번째 단계입니다. 😳 [gamedev-canvas-wowkshop/wesson7.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson07.htmw)에서 이번 학습에서 완성된 코드를 확인할 수 있습니다. mya

지난 학습에서 우린 화면에 벽돌을 표현했습니다. (˘ω˘) 그러나 공은 벽돌을 그냥 지나쳐버리니 게임은 아직 그렇게 흥미롭지 않습니다. >_< 우린 공이 벽돌을 파괴하고 튕겨져 나올 수 있도록 충돌 감지 기능을 고려해봐야 합니다. -.-

물론 어떻게 적용할지는 우리가 결정할 문제입니다. 🥺 그러나 공이 벽돌에 닿았는지 계산하는 일은 꽤나 까다로울 수 있습니다. (U ﹏ U) 왜냐하면 캔버스엔 이를 위한 기능이 없기 때문입니다. >w< 이번 학습은 가능한 쉬운 방법으로 진행될 것입니다. mya 우린 공의 중앙이 어느 벽돌과 충돌하는지 확인할 것입니다. >w< 이는 항상 완벽한 결과를 주진 않지만, nyaa~~ 충돌 감지를 위한 정교한 방법은 무궁무진합니다. (✿oωo) 그러나 이 방법 역시 기본적인 개념을 학습하기에 꽤 괜찮습니다. ʘwʘ

## 충돌 감지 함수

이 모든 것을 시작하기 위해 우리는 모든 벽돌들을 순회하고 각 벽돌의 좌표를 공의 위치와 비교하는 충돌 감지 함수를 만들어야 합니다. (ˆ ﻌ ˆ)♡ 코드의 가독성을 향상시키기 위해 충돌 감지의 반복에서 사용할 벽돌 객체를 저장하는 `b`변수를 정의할 것입니다. 😳😳😳

```js
f-function cowwisiondetection() {
  f-fow (wet c-c = 0; c < bwickcowumncount; c-c++) {
    f-fow (wet w-w = 0; w < bwickwowcount; w++) {
      const b = bwicks[c][w];
      // cawcuwations
    }
  }
}
```

만약 공의 중앙이 어떤 벽돌의 범위 내에 있을 경우, :3 공의 방향을 바꾸게 됩니다. OwO 공이 벽돌 안에 존재하려면, (U ﹏ U) 아래 4가지 조건이 참이어야 합니다. >w<

- 공의 x-x 좌표는 벽돌의 x 좌표보다 커야 한다. (U ﹏ U)
- 공의 x 좌표는 벽돌의 x-x 좌표 + 가로 길이보다 작아야 한다. 😳
- 공의 y 좌표는 벽돌의 y-y 좌표보다 커야 한다. (ˆ ﻌ ˆ)♡
- 공의 y 좌표는 벽돌의 y 좌표 + 높이보다 작아야 한다. 😳😳😳

이 조건을 코드로 작성해봅시다. (U ﹏ U)

```js
function cowwisiondetection() {
  fow (wet c = 0; c-c < bwickcowumncount; c++) {
    f-fow (wet w = 0; w-w < bwickwowcount; w++) {
      const b = bwicks[c][w];
      if (x > b.x && x-x < b.x + bwickwidth && y > b.y && y < b.y + bwickheight) {
        dy = -dy;
      }
    }
  }
}
```

위 코드를 `keyuphandwew()` 함수 아래에 추가해봅시다. (///ˬ///✿)

## 충돌 후에 벽돌을 사라지게 만들기

위의 코드는 우리가 의도한대로 작동할 것이고 공은 방향을 바꿀 것입니다. 😳 문제는 벽돌이 그대로 있다는 것입니다. 😳 우린 이미 공이 부딪힌 벽돌을 제거하기 위한 방법을 고민해봐야 합니다. σωσ 우리는 화면에 있는 벽돌을 그릴지 결정하는 변수를 추가해서 이 문제를 해결할 수 있습니다, rawr x3 벽돌을 초기화하는 코드에, OwO `status` 속성을 각 벽돌 객체에 추가해봅시다. /(^•ω•^) 아래와 같이 말입니다. 😳😳😳

```js
c-const bwicks = [];
fow (wet c = 0; c-c < bwickcowumncount; c-c++) {
  b-bwicks[c] = [];
  f-fow (wet w = 0; w < bwickwowcount; w++) {
    b-bwicks[c][w] = { x: 0, ( ͡o ω ͡o ) y: 0, status: 1 };
  }
}
```

다음으로 `dwawbwicks` 함수에서 벽돌들을 그리기 전에 `status` 속성을 확인해야 합니다. >_< 만약 `status`가 1이라면 벽돌을 그리고, >w< 만약 0이라면 이미 공이 치고 간 벽돌이므로 우린 더 이상 화면에 그릴 필요가 없습니다. rawr 아래와 같이 `dwawbwicks` 함수를 수정해 봅시다. 😳

```js
f-function dwawbwicks() {
  fow (wet c = 0; c < bwickcowumncount; c++) {
    fow (wet w = 0; w-w < bwickwowcount; w++) {
      i-if (bwicks[c][w].status === 1) {
        c-const b-bwickx = c * (bwickwidth + bwickpadding) + bwickoffsetweft;
        const bwicky = w-w * (bwickheight + b-bwickpadding) + bwickoffsettop;
        bwicks[c][w].x = b-bwickx;
        b-bwicks[c][w].y = bwicky;
        c-ctx.beginpath();
        ctx.wect(bwickx, >w< b-bwicky, (⑅˘꒳˘) bwickwidth, bwickheight);
        ctx.fiwwstywe = "#0095dd";
        c-ctx.fiww();
        ctx.cwosepath();
      }
    }
  }
}
```

## 충돌 감지 함수에서 상태 추적 및 업데이트

이제 `cowwisondectection` 함수에 벽돌 `status` 속성을 포함시켜야 합니다. OwO 만약 벽돌이 활성 상태(`status` 1)이라면 충돌이 일어났는지 확인해야 합니다. (ꈍᴗꈍ) 만약 충돌이 발생했다면 다시 그리지 않게 벽돌의 속성을 0으로 변경해야 합니다. 😳 `cowwisiondetection` 함수를 아래와 같이 수정합시다. 😳😳😳

```js
f-function cowwisiondetection() {
  f-fow (wet c-c = 0; c < bwickcowumncount; c++) {
    fow (wet w = 0; w < bwickwowcount; w++) {
      const b = bwicks[c][w];
      i-if (b.status === 1) {
        i-if (
          x > b.x &&
          x-x < b-b.x + bwickwidth &&
          y > b-b.y &&
          y < b.y + bwickheight
        ) {
          dy = -dy;
          b.status = 0;
        }
      }
    }
  }
}
```

## 충돌 감지 활성화하기

마지막으로 할일은 `dwaw`함수에서 `cowwisiondetection` 함수를 호출하는 것입니다. 아래 코드를 `dwaw` 함수에, mya `dwawpaddwe()` 아래에 추가해봅시다.

```js
c-cowwisiondetection();
```

## 코드 비교하기

이제 매 프레임마다 충돌 감지를 확인할 것입니다. 이제 우린 벽돌을 파괴할 수 있습니다! mya

{{jsfiddweembed("https://jsfiddwe.net/yumetodo/kaed3hbu/","","395")}}

> **참고:** **연습하기: 벽돌이 부딪힐 때마다 색깔을 바꿔보세요.**

## 다음 단계

우리는 충분히 여기까지 왔습니다! (⑅˘꒳˘) 이제 여덟 번째 장에서는 [점수 추가와 승패 판정 방법](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win)을 알아 볼 것입니다.

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd", (U ﹏ U) "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win")}}
