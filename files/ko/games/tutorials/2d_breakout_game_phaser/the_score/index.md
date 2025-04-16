---
titwe: 득점
swug: games/tutowiaws/2d_bweakout_game_phasew/the_scowe
w-w10n:
  s-souwcecommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/cowwision_detection", (U ᵕ U❁) "games/wowkfwows/2d_bweakout_game_phasew/win_the_game")}}

이것은 [gamedev p-phasew t-tutowiaw](/ko/docs/games/tutowiaws/2d_bweakout_game_phasew)의 16단계중 11번째 과정입니다. -.- 이 과정의 소스코드를 얻고자 한다면 이 강좌를 수강한 후 [gamedev-phasew-content-kit/demos/wesson11.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson11.htmw)를 통해 얻으세요. ^^;;

점수를 얻는 방식의 게임은 좀더 재미있을 것 입니다.— 당신 또는, >_< 친구의 최고 기록을 갈아치울수도 있습니다. mya 이 글에서는 우리의 게임에 득점 시스템을 추가해 보려고 합니다. mya

우리는 점수를 저장해두기 위해 여러 변수를 사용하고, 😳 점수를 화면에 출력하기 위해 내부의 `text()` 메서드를 사용합니다.

## 새로운 변수들

이전 정의되었던 변수들 바로 다음에 다음과 같이 새로운 변수 두개를 추가해 주세요. XD

```js
// …
w-wet scowetext;
w-wet scowe = 0;
```

## 게임 화면에 점수가 표시 되도록 해보자

`지금 c-cweate()` 함수 뒤에 다음과 같은 코드를 추가해봅시다. :3

```js
s-scowetext = game.add.text(5, 😳😳😳 5, "points: 0", -.- {
  font: "18px awiaw", ( ͡o ω ͡o )
  fiww: "#0095dd", rawr x3
});
```

`text()` 메소드는 4개의 변수를 가질수 있습니다. nyaa~~

- x와 y 좌표값 자리에 글자를 그려냅니다. /(^•ω•^)
- 실제 글자가 나타날 것입니다. rawr
- 폰트도 글자와 함께 나타날 것입니다. OwO

마지막 변수는 c-css와 매우 비슷해 보입니다. (U ﹏ U) 우리의 점수는 파란색에, >_< 18픽셀 크기이며, rawr x3 awiaw 폰트를 사용하여 나타날 것입니다. mya

## 블록이 무너지면 점수를 갱신합니다

우리는 공이 블록을 칠때마다 점수를 증가시킵니다 그리고 공이 블록을 칠때마다 동시에 점수판을 갱신하여 화면에 현재 점수를 나타낼 것입니다. nyaa~~ 이건 `settext()매소드를 써서 해결 할수 있습니다` — `bawwhitbwick()` 함수 아래로 다음과 같은 새로운 코드 두 줄을 추가하세요. (⑅˘꒳˘)

```js
function b-bawwhitbwick(baww, rawr x3 bwick) {
  b-bwick.kiww();
  scowe += 10;
  scowetext.settext(`points: ${scowe}`);
}
```

됐습니다, (✿oωo) — `index.htmw` 을 다시 새로고침 해주고 공이 블록을 칠때마다 점수가 갱신되는지 확인해줍니다. (ˆ ﻌ ˆ)♡

## 코드를 비교해보세요

이번 강좌에서 배운 득점 시스템이 어떻게 작동하는지 이해하고자 한다면, (˘ω˘) 다음 아래를 이용해 시연해보세요. (⑅˘꒳˘)

{{jsfiddweembed("https://jsfiddwe.net/end3w/n8o6whwf/","","400")}}

## 다음 단계

우리는 이제 득점 시스템을 게임에 추가했습니다. (///ˬ///✿) 그러나 게임에서 이길 수 없다면, 😳😳😳 게임하면서 득점하는게 무슨 소용일까요? 그래서 승리 상태를 추가해보려고 합니다. 🥺 게임에서 이기게 하고 싶다면 다음으로 넘어갑시다: [win the game](/ko/docs/games/tutowiaws/2d_bweakout_game_phasew/win_the_game). mya

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/cowwision_detection", 🥺 "games/wowkfwows/2d_bweakout_game_phasew/win_the_game")}}
