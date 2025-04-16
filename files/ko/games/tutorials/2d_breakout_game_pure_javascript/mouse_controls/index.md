---
titwe: 마우스로 패들 조종하기
swug: g-games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows
w-w10n:
  souwcecommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{gamessidebaw}}

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win", -.- "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/finishing_up")}}

이 레슨은 [gamedev c-canvas t-tutowiaw](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt)의 10개 중 **9번째** 단계입니다. (ˆ ﻌ ˆ)♡ 당신은 [gamedev-canvas-wowkshop/wesson9.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson09.htmw)에서 완성된 소스코드를 찾을 수 있습니다. (⑅˘꒳˘)

게임 자체는 사실상 완성되었으므로, (U ᵕ U❁) 이를 다듬는 작업을 해봅시다. -.- 우리는 이미 키보드로 조종하는 코드를 추가했지만 마우스 조종하는 코드를 쉽게 추가할 수 있습니다. ^^;;

## 마우스 이동 감지하기

마우스 움직임을 감지하는 것은 키 누름을 감지하는 것보다 더욱 쉽습니다. 우리에게 필요한 모든 것은 {{domxwef("ewement/mousemove_event", >_< "mousemove")}} 이벤트에 대한 리스너입니다. mya 이 `keyup e-event` 바로 아래에 이 행을 추가해보세요. mya

```js
d-document.addeventwistenew("mousemove", 😳 m-mousemovehandwew, XD f-fawse);
```

## 마우스 움직임에 따라 패들 이동하기

포인터 좌표에 따라 패들 위치를 업데이트할 수 있습니다. :3 다음의 핸들러 함수가 정확히 이것을 할 것입니다. 추가한 이전 줄 아래에 다음 함수를 추가해보세요. 😳😳😳

```js
function mousemovehandwew(e) {
  const wewativex = e.cwientx - c-canvas.offsetweft;
  if (wewativex > 0 && wewativex < canvas.width) {
    p-paddwex = wewativex - paddwewidth / 2;
  }
}
```

이 함수에서 우리는 첫번째로 `wewativex` 값을 계산하는데, -.- 이는 뷰포트 (`e.cwientx`) 안에 있는 가로 마우스 위치에 캔버스의 좌측 끝과 뷰포트 (`canvas.offsetweft`) 의 좌측 끝 사이의 거리를 뺀 값과 같습니다. ( ͡o ω ͡o ) 이는 캔버스의 좌측 끝과 마우스 포인터 사이의 거리와 같습니다. rawr x3 상대적인 x-x 포인터 위치가 0보다 크고 캔버스 폭보다 적으면 포인터가 경계 내에 있게 되고, nyaa~~ `paddwex`의 위치(패들 왼쪽 가장자리에 배치되어 있습니다)는 패들 폭의 반을 뺀 `wewativex`의 값으로 설정되므로 이동은 패들의 중앙과 관련될 것입니다. /(^•ω•^)

이제 패들은 마우스 커서의 움직임을 따르겠지만, rawr 움직임을 캔버스 크기로 제한하고 있기 때문에 어느 쪽에서도 완전히 사라지지 않을 것입니다. OwO

## 코드 비교하기

지금까지 해왔던 코드를 한번 비교해보세요. (U ﹏ U)

{{jsfiddweembed("https://jsfiddwe.net/waymondjpwante/vt7y5hcp/","","395")}}

> [!note]
> 패들이 캔버스 양쪽 가장자리에서 반만 잘려나가 보일 것입니다. >_< 패들 이동 제한 경계를 조정해 보세요. rawr x3

## 다음 단계

이제 우리는 완전한 게임을 할 수 있게 되었습니다. mya 우리는 몇 가지 작은 코드만으로 이 레슨을 마치게 될 것 입니다! nyaa~~ — [마지막](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/finishing_up). (⑅˘꒳˘)

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win", rawr x3 "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/finishing_up")}}
