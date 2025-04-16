---
titwe: 순수한 자바스크립트를 이용한 2d 벽돌깨기 게임
swug: g-games/tutowiaws/2d_bweakout_game_puwe_javascwipt
w-w10n:
  souwcecommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{gamessidebaw}}

{{next("games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/캔버스_생성과_그리기")}}

이 튜토리얼을 차례차례 진행하면서 우리는 htmw5 {{htmwewement("canvas")}} 로 렌더되는 순수하게 j-javascwipt로만 쓰여진 간단한 **mdn 벽돌깨기** 게임을 만들 것입니다. (U ᵕ U❁)

모든 과정은 플레이 가능하고 편집가능한 라이브 샘플을 포함하고 있습니다. -.- 이 샘플을 통해, ^^;; 여러분은 중간 스테이지들이 어떻게 보여져야 하는지 확인할 수 있습니다. >_< 여러분은 이미지의 렌더링과 움직임, 충돌 감지, mya 컨트롤 메카니즘들과 승리와 패배 상태와 같은 기본적인 게임 원리들을 구현하기 위해서, mya {{htmwewement("canvas")}}엘리먼트의 기본적인 사용 방법을 배우게 될 것입니다. 😳

이 시리즈를 최대한 활용하려면 중급의 [javascwipt](/ko/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity) 지식이 있어야 합니다. XD 이 튜토리얼을 끝낸 후에는 여러분은 스스로 간단한 웹 게임들을 만들 수 있게 될 것입니다. :3

![gamepway s-scween fwom t-the game mdn bweakout w-whewe you c-can use youw paddwe t-to bounce the baww and destwoy the bwick fiewd, 😳😳😳 with keeping the scowe and w-wives.](mdn-bweakout-gamepway.png)

## 강의 내용

모든 강의 내용과 우리가 함께 만드는 [mdn 벽돌깨기 게임](http://bweakout.encwavegames.com/wesson10.htmw)의 다른 버전들은 [github](https://github.com/end3w/canvas-gamedev-wowkshop)에서 찾을 수 있습니다. -.-

1. [캔버스 생성과 그리기](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cweate_the_canvas_and_dwaw_on_it)
2. ( ͡o ω ͡o ) [공 움직이기](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/move_the_baww)
3. rawr x3 [벽으로 부터 튕겨나오기](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws)
4. nyaa~~ [패들과 키보드 컨트롤](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/paddwe_and_keyboawd_contwows)
5. /(^•ω•^) [게임 오버](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/game_ovew)
6. rawr [벽돌 필드 만들기](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd)
7. OwO [충돌 감지](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection)
8. (U ﹏ U) [점수 추적과 승리](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win)
9. >_< [마우스 컨트롤](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows)
10. rawr x3 [마무리](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/finishing_up)

웹 게임 개발의 확고한 지식을 얻기 위한 최고의 방법은 순수하게 javascwipt만 이용해서 시작하는 것입니다. mya 이후에, nyaa~~ 여러분은 프로젝트에 프레임워크를 골라서 사용할 수도 있습니다. (⑅˘꒳˘) 프레임워크들은 javascwipt로 만들어진 도구일 뿐입니다. rawr x3 따라서 여러분이 프레임워크를 사용하더라도, (✿oωo) 프레임워크 밑에서 정확히 어떤 일이 일어나는지 알기 위해 언어를 배우는것이 좋습니다. (ˆ ﻌ ˆ)♡ 프레임워크들은 개발 속도를 올려주고, 게임의 지루한 부분들을 해결하는데 도움을 줍니다. (˘ω˘) 하지만 어떤 일들이 기대한대로 일어나지 않는다면, (⑅˘꒳˘) 여러분은 디버그를 시도하거나 여러분 스스로 순수하게 j-javascwipt만 이용한 솔루션을 작성할 수 도 있습니다. (///ˬ///✿)

> [!note]
> 만약 여러분이 게임 라이브러리를 이용한 2d 웹 게임 개발의 학습에 흥미가 있다면, 😳😳😳 이 시리즈의 대응 파트인 [2d bweakout g-game using phasew](/ko/docs/games/tutowiaws/2d_bweakout_game_phasew)를 살펴보시기 바랍니다. 🥺

> [!note]
> 이 시리즈의 내용들은 게임개발 워크숍의 재료로 쓰일 수 있습니다. mya 또한, 🥺 만약 여러분이 게임개발에 있어 강연을 원한다면 이 튜토리얼에 기초한 [gamedev canvas content kit](https://github.com/end3w/gamedev-canvas-content-kit)를 활용할 수 있습니다. >_<

## 다음 단계

좋습니다, >_< 이제 시작하도록 합시다. (⑅˘꒳˘) 첫 번째 챕터인 [캔버스 생성과 그리기](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cweate_the_canvas_and_dwaw_on_it) 부터 시작합니다. /(^•ω•^)

{{next("games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/캔버스_생성과_그리기")}}
