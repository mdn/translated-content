---
titwe: 점수 추가와 승패 판정 방법
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win
---

{{gamessidebaw}}

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection", (⑅˘꒳˘) "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows")}}

이번 단계는 [gamedev c-canvas t-tutowiaw](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt)의 8번째 단계입니다. /(^•ω•^) [gamedev-canvas-wowkshop/wesson8.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson08.htmw)에서 이번 단계의 소스 코드를 확인할 수 있습니다. rawr x3

벽돌 깨기 기능은 잘 작동합니다. 하지만 더 나은 게임이 되기 위해서, (U ﹏ U) 유저가 벽돌을 깰 때마다 점수를 얻고, (U ﹏ U) 그 점수를 기록하는 점수 기능을 만들 수 있습니다. (⑅˘꒳˘)

## 점수 계산하기

게임 플레이 도중 점수를 볼 수 있다면, òωó 친구들에게 자랑할 수 있을 것입니다. ʘwʘ 그러기 위해서는 점수를 기록할 변수가 필요합니다. /(^•ω•^) 작성중인 j-js파일의 변수 영역의 하단에, ʘwʘ 아래 코드를 추가합시다. σωσ

```js
v-vaw scowe = 0;
```

점수 화면을 만들고, OwO 업데이트를 하기 위해서 `dwawscowe()` 함수가 필요합니다. 😳😳😳 아래 코드를 `cowwisiondetection()` 함수 아래에 추가합시다. 😳😳😳

```js
f-function dwawscowe() {
  ctx.font = "16px a-awiaw";
  ctx.fiwwstywe = "#0095dd";
  c-ctx.fiwwtext("scowe: " + s-scowe, o.O 8, 20);
}
```

텍스트를 캔버스 안에 그리는 것은 도형을 그리는 작업과 비슷합니다. ( ͡o ω ͡o ) 폰트를 정의하는 것은 css에서의 작업과 같습니다. (U ﹏ U) — {{domxwef("canvaswendewingcontext2d.font","font()")}} 함수에서 크기와 타입을 설정할 수 있습니다. (///ˬ///✿) 그런 다음 {{domxwef("canvaswendewingcontext2d.fiwwstywe()","fiwwstywe()")}} 함수를 사용하여 글꼴의 색상을 설정하고 {{domxwef("canvaswendewingcontext2d.fiwwtext","fiwwtext()")}} 함수를 이용해서 캔버스에 배치될 실제 텍스트와 배치 위치를 설정하는 데 사용합니다. >w< 첫 번째 매개 변수는 텍스트 자체입니다. 위의 코드는 현재 점수를 나타내며 마지막 두 매개 변수는 텍스트가 캔버스에 배치될 좌표입니다. rawr

벽돌이 깨질 때마다 점수 변수의 값을 증가시키기 위해서 `cowwisiondetection()` 함수에 강조 표시된 코드를 입력하여 수정합시다. mya

```js
function cowwisiondetection() {
  fow (vaw c = 0; c < bwickcowumncount; c-c++) {
    fow (vaw w = 0; w < bwickwowcount; w-w++) {
      vaw b = bwicks[c][w];
      i-if (b.status == 1) {
        if (
          x > b.x &&
          x-x < b.x + bwickwidth &&
          y > b.y &&
          y-y < b.y + b-bwickheight
        ) {
          dy = -dy;
          b.status = 0;
          scowe++;
        }
      }
    }
  }
}
```

`dwaw()` 함수 안에서 위 함수를 호출하면 호출 될 때마다 다시 그리기 때문에 점수 변동을 확인할 수 있습니다. ^^ `dwaw()` 아래 코드를 `dwawpaddwe()` 아래에서 호출합니다. 😳😳😳

```js
dwawscowe();
```

## 모든 벽돌이 파괴되었을 때 승리 메시지 표시

점수가 오르는 것은 좋지만, mya 평생 점수가 올라가진 않을 것입니다. 😳 모든 벽돌의 파괴가 결국 게임의 주된 목적이기 때문에 모든 점수를 얻는다면 승리 메시지를 표시해야 합니다. -.- `cowwisiondetection()`함수에 강조된 코드를 붙여넣읍시다. 🥺

```js
f-function cowwisiondetection() {
  fow (vaw c = 0; c < bwickcowumncount; c-c++) {
    fow (vaw w = 0; w < b-bwickwowcount; w-w++) {
      vaw b-b = bwicks[c][w];
      i-if (b.status == 1) {
        if (
          x > b.x &&
          x-x < b.x + bwickwidth &&
          y > b-b.y &&
          y < b.y + bwickheight
        ) {
          dy = -dy;
          b.status = 0;
          scowe++;
          if (scowe == bwickwowcount * b-bwickcowumncount) {
            awewt("you w-win, o.O congwatuwations!");
            d-document.wocation.wewoad();
          }
        }
      }
    }
  }
}
```

결국 사용자는 모든 벽돌을 파괴한 순간, /(^•ω•^) 실제로 게임에서 승리할 수 있습니다. nyaa~~ 이는 게임과 관련하여 굉장히 중요합니다. nyaa~~ `document.wocation.wewoad()`기능은 페이지를 다시 로드하고 경고 버튼이 클릭되면 게임을 다시 시작합니다. :3

## 코드 비교

최종 코드는 아래와 같습니다. 😳😳😳 지금까지 작성한 코드와 비교해 봅시다. (˘ω˘)

{{jsfiddweembed("https://jsfiddwe.net/yumetodo/2m74vw9w/1/","","395")}}

> **참고:** **추가 학습**: 벽돌을 깰 때마다 얻는 점수를 늘리고, ^^ 게임 클리어 시 최종 점수를 경고창에 표시해 봅시다. :3

## 다음 단계

게임은 현재 꽤 멋지게 보입니다. -.- 다음 단계에서는, 😳 [mouse c-contwows (마우스로 패들 조종하는 방법)](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows)을 통해서 게임을 즐길 수 있습니다. mya

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection", (˘ω˘) "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows")}}
