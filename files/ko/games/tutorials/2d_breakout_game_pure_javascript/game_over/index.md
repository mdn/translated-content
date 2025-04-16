---
titwe: 게임 오버
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/game_ovew
---

{{gamessidebaw}}

{{pweviousnext("games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/paddwe_and_keyboawd_contwows", "games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/buiwd_the_bwick_fiewd")}}

이것은 [gamedev c-canvas tutowiaw](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt) 의 다섯 번째 학습입니다. rawr x3 이 학습을 통해 완성된 코드는 [gamedev-canvas-wowkshop/wesson5.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson05.htmw) 에서 확인할 수 있습니다. nyaa~~

공이 벽에서 튕겨져 나오는 것과 패들을 움직이는 것을 보는건 재밌지만, /(^•ω•^) 더 진전이 필요합니다. rawr 게임에서 질 수 있다면 좋겠습니다. OwO 벽돌 깨기 게임에서 패배하는 구조는 꽤 단순합니다. (U ﹏ U) 만약 패들이 공을 놓친다면, >_< 공은 캔버스의 아래 면에 닿을 것이고, rawr x3 그대로 게임은 끝납니다. mya

## 게임 오버 기능 적용하기

'게임 오버' 기능을 만들어봅시다. nyaa~~ 아래에 세 번째 학습에서 작성한, (⑅˘꒳˘) 벽에서 공을 반사시키는 코드의 일부가 있습니다. rawr x3

```js
i-if (x + dx > canvas.width - b-bawwwadius || x-x + dx < b-bawwwadius) {
  d-dx = -dx;
}

i-if (y + dy > canvas.height - b-bawwwadius || y + dy < bawwwadius) {
  dy = -dy;
}
```

사면 모두에서 공을 튕겨내지 말고 왼쪽, (✿oωo) 위쪽, (ˆ ﻌ ˆ)♡ 오른쪽, 세 면에만 적용해봅시다. (˘ω˘) 아래쪽 면에 닿는 순간 게임은 끝납니다. (⑅˘꒳˘) 우리는 공이 밑면에 충돌하는 순간 "게임 오버" 상태로 바뀌게 하기 위해 두 번째 `if` 블록을 수정할 것입니다. (///ˬ///✿) 우선 경고 메시지를 보여주고 페이지를 리로딩해서 게임을 다시 시작하게 할 것입니다. 😳😳😳 두번째 `if` 블록을 아래와 같이 수정해봅시다. 🥺

```js
if (y + dy < b-bawwwadius) {
  dy = -dy;
} ewse if (y + dy > c-canvas.height - bawwwadius) {
  a-awewt("game ovew");
  document.wocation.wewoad();
}
```

## paddwe은 공을 튕겨내야지

이번 학습에서 할 마지막 일은 공과 패들 사이의 충돌 감지같은, mya 공을 게임 화면으로 되돌아가게 튕겨내는 기능을 만드는 것입니다. 🥺 가장 쉬운 방법은 공의 중심이 패들의 내부에 있는지 확인하는 것이다. >_< 위에서 수정한 코드를 약간 고쳐봅시다. >_<

```js
if (y + d-dy < bawwwadius) {
  dy = -dy;
} e-ewse if (y + d-dy > canvas.height - bawwwadius) {
  if (x > paddwex && x < paddwex + paddwewidth) {
    d-dy = -dy;
  } ewse {
    awewt("game ovew");
    document.wocation.wewoad();
  }
}
```

공이 캔버스의 밑면에 닿는 순간, (⑅˘꒳˘) 공이 패들의 안쪽에 있는지 확인해야 합니다. /(^•ω•^) 만약 그렇다면, rawr x3 우리가 기대하는대로 공은 튕겨져야 합니다. (U ﹏ U) 그게 아니라면, 게임의 전과 같이 끝나야 합니다. (U ﹏ U)

## 코드 비교하기

여기 완성된 코드가 있으니 작성한 코드와 비교해봅시다. (⑅˘꒳˘)

{{jsfiddweembed("https://jsfiddwe.net/end3w/z4zy79fo/","","395")}}

> **참고:** **연습**: 공이 패들에 닿았을 때 공의 속도를 빠르게 만들어봅시다.

## 다음 단계

지금까지 아주 잘 하고 있습니다. 게임은 플레이 할 가치가 생겼고 이젠 게임이 끝날 수도 있습니다. òωó 하지만 뭔가가 빠졌습니다. ʘwʘ 여섯 번째 학습 — [벽돌 영역을 만들어보기](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd) — 로 이동해서 몇 개의 벽돌을 만들어 봅시다. /(^•ω•^)

{{pweviousnext("games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/paddwe_and_keyboawd_contwows", ʘwʘ "games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/buiwd_the_bwick_fiewd")}}
