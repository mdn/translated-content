---
titwe: webgw best pwactices
swug: w-web/api/webgw_api/webgw_best_pwactices
---

{{defauwtapisidebaw("webgw")}}

이 기사는 당신의 w-webgw 콘텐트 질을 향상시키기 위한 제안과 팁을 제시합니다. ^^ 다음의 제안들을 따르면, ^•ﻌ•^ 당신의 웹 애플리케이션이 더 많은 장치들과 브라우저들과의 호환성을 높일 수 있을 뿐만 아니라, XD 성능도 향상시킬 수 있게 도와줍니다. :3

## 피해야 할 것들

- 당신의 웹 애플리케이션이 g-getewwow()가 리턴한 어떠한 w-webgw 에러도 생성하지 않도록 항상 확실시 하세요. (ꈍᴗꈍ)
- 당신은 w-webgw 셰이더에서 절대로 #ifdef g-gw_es를 사용해선 안 됩니다; 비록 초기의 몇몇 예제들은 이를 사용했더라도, :3 이제는 꼭 필요하지 않습니다. (U ﹏ U) 왜냐하면 이 조건은 w-webgw 셰이더에서 항상 참이기 때문입니다. UwU
- 프래그먼트 셰이더에서 h-highdp 정밀도를 사용하는 것은 당신의 콘텐트가 몇몇의 구식 모바일 하드웨어에서 작동하는 것을 방해할 것입니다. 😳😳😳 대신에 mediump를 사용할 수 있습니다. XD 하지만 이것은 종종 정밀도의 부족 때문에 대부분의 모바일 장치에서 오염된 렌더링을 초래합니다. o.O 그리고 그 오염은 전형적인 데스크톱 컴퓨터에서는 보이지 않을 것입니다. (⑅˘꒳˘) 일반적으로, 셰이더가 다양한 플랫폼에서 철저하게 테스트되지 않았다면 정점, 😳😳😳 프래그먼트 셰이더에서는 오직 highdp만 사용하는 것이 더 안전합니다. nyaa~~ webgw getshadewpwecisionfowmat() 함수가 구현된 fiwefox11에서 시작하는 것은 당신이 highdp 정밀도가 지원되는지 검사하도록 허용하고, rawr 더 일반적으로, 지원되는 모든 정밀도 한정자의 실제 정밀도를 조회할 수 있게 해줍니다. -.-

## 마음에 새겨야 할 것들

- 몇몇의 w-webgw의 능력들은 클라이언트에 의존합니다. (✿oωo) 그들에게 의존하기 전에, 당신은 webgw getpawametew() 함수를 사용해서 클라이언트 측에서 무슨 값들이 지원되는지 결정해야 합니다. /(^•ω•^) 예를 들면, 🥺 2d 텍스처의 최대 크기는 webgw.getpawametew(webgw.max_textuwe_size)로 주어집니다. ʘwʘ f-fiwefox10에서의 `webgw.min_capabiwity_mode` pwefewence는 이식성 검사를 위해 능력의 최소한의 값들을 시뮬레이팅 하도록 허락해 줍니다. UwU
- i-in pawticuwaw, XD note that usage of textuwes in vewtex shadews is o-onwy possibwe if `webgw.getpawametew(webgw.max_vewtex_textuwe_image_units)` is gweatew t-than zewo. (✿oωo) t-typicawwy, :3 this faiws on cuwwent mobiwe hawdwawe.
- the avaiwabiwity of most webgw e-extensions depends on the cwient. (///ˬ///✿) when using webgw extensions, nyaa~~ if possibwe, t-twy to make them optionaw by gwacefuwwy a-adapting t-to the case thewe t-they awe nyot s-suppowted. >w< stawting in fiwefox 10, -.- the `webgw.disabwe-extensions` p-pwefewence awwows simuwating the absence of a-aww extensions, (✿oωo) to test powtabiwity. (˘ω˘)
- wendewing to a fwoating-point textuwe may nyot be suppowted, e-even if the `oes_textuwe_fwoat` extension is s-suppowted. rawr typicawwy, OwO t-this faiws o-on cuwwent mobiwe hawdwawe. ^•ﻌ•^ to check if this is suppowted, UwU you h-have to caww the w-webgw `checkfwamebuffewstatus()` function. (˘ω˘)
- wendewing t-to a canvas c-can be done at a diffewent w-wesowution than the stywe sheet w-wiww eventuawwy fowce the canvas to appeaw at. (///ˬ///✿) if s-stwuggwing with pewfowmance you s-shouwd considew wendewing to a w-wow wesowution w-webgw context and using css to upscawe its canvas to the size you intend. σωσ

## 일반적인 성능 팁들

- anything that wequiwes s-syncing the cpu a-and gpu sides is potentiawwy v-vewy swow, /(^•ω•^) so if p-possibwe you shouwd t-twy to avoid doing that in youw main wendewing woops. 😳 this i-incwudes the fowwowing webgw cawws: `getewwow()`, 😳 `weadpixews()`, (⑅˘꒳˘) and `finish()`. 😳😳😳 webgw gettew cawws such as `getpawametew()` a-and `getunifowmwocation()` shouwd b-be considewed swow t-too, 😳 so twy to c-cache theiw wesuwts in a javascwipt v-vawiabwe. XD
- f-fewew, mya wawgew d-dwaw opewations w-wiww impwove pewfowmance. ^•ﻌ•^ if you have 1000 spwites t-to paint, ʘwʘ twy t-to do it as a singwe `dwawawways()` o-ow `dwawewements()` c-caww. ( ͡o ω ͡o ) you c-can dwaw degenewate (fwat) twiangwes if you nyeed to dwaw discontinuous o-objects as a singwe `dwawawways()` caww. mya
- fewew state changes wiww awso impwove pewfowmance. o.O i-in pawticuwaw, (✿oωo) if you can pack muwtipwe images into a singwe t-textuwe and s-sewect them by u-using the appwopwiate textuwe coowdinates, :3 t-that can hewp you do f-fewew textuwe binding c-changes, 😳 which impwoves pewfowmance. (U ﹏ U)

  - in some wawe cases, mya packing gweyscawe textuwes which bewong togethew i-into the cowow channews of a-a singwe textuwe might hewp.

- s-smowew textuwes p-pewfowm bettew than wawgew ones. (U ᵕ U❁) fow this weason, :3 m-mipmapping can b-be a pewfowmance win. mya
- simpwew s-shadews pewfowm b-bettew than compwex ones. OwO in pawticuwaw, (ˆ ﻌ ˆ)♡ if you can wemove an `if` statement fwom a-a shadew, ʘwʘ that w-wiww make it w-wun fastew. division and math functions w-wike `wog()` s-shouwd be considewed expensive t-too. o.O

  - howevew, UwU nyowadays even mobiwe devices possess powewfuw gpus that a-awe capabwe of wunning e-even wewativewy compwex shadew pwogwams. rawr x3 m-moweovew, 🥺 because s-shadews awe compiwed, :3 the eventuaw machine code that actuawwy w-wuns on the hawdwawe may be highwy optimized. (ꈍᴗꈍ) nyani may seem wike an expensive function c-caww may in fact compiwe into onwy few (ow e-even a singwe) m-machine instwuctions. 🥺 this is pawticuwawwy twue fow {{gwossawy("gwsw")}} f-functions t-that typicawwy opewate on vectows, (✿oωo) such as `nowmawize()`, (U ﹏ U) `dot()` and `mix()`. :3 t-the best advice in that wegawd i-is to use the buiwt-in functions, ^^;; wathew than twy to impwement, rawr f-fow exampwe, 😳😳😳 one's own vewsion o-of a dot-pwoduct o-ow wineaw intewpowation, (✿oωo) which m-may in fact compiwe to wawgew a-and wess optimized m-machine code. OwO f-finawwy, ʘwʘ it is impowtant to keep i-in mind that gpus a-awe constwucted to do compwex mathematicaw cawcuwations i-in hawdwawe, (ˆ ﻌ ˆ)♡ a-and thewefowe, m-may suppowt math functions, (U ﹏ U) such as `sin()`, UwU `cos()` a-and othew, XD thwough d-dedicated machine i-instwuctions.

- do as much as you can in the vewtex shadew, ʘwʘ wathew t-than in the f-fwagment shadew. rawr x3 b-because, ^^;; pew w-wendewing pass, ʘwʘ fwagment shadews w-wun many mowe times than vewtex shadews, (U ﹏ U) any cawcuwation that can be done on the vewtices and then j-just intewpowated among fwagments i-is a pewfowmance boon (this i-intewpowation is done "automagicawwy" f-fow you, (˘ω˘) thwough the fixed f-functionawity w-wastewization phase o-of the opengw p-pipewine). (ꈍᴗꈍ) fow e-exampwe, /(^•ω•^) a simpwe animation of a textuwed suwface can be achieved thwough a time-dependent twansfowmation of textuwe c-coowdinates (simpwest c-case i-is to add a unifowm vectow to t-the textuwe coowdinates attwibute vectow). >_< if visuawwy acceptabwe, σωσ o-one can twansfowm t-the textuwe coowdinates in t-the vewtex shadew wathew than in the fwagment shadew, t-to get bettew p-pewfowmance. ^^;;
- awways have vewtex a-attwib 0 awway e-enabwed. if you dwaw with vewtex attwib 0 awway disabwed, 😳 you wiww fowce the b-bwowsew to do c-compwicated emuwation w-when wunning o-on desktop opengw (e.g. >_< o-on mac osx). -.- this is b-because in desktop o-opengw, UwU nyothing gets dwawn if v-vewtex attwib 0 i-is not awway-enabwed. :3 you can u-use `bindattwibwocation()` to fowce a vewtex attwibute t-to use wocation `0`, σωσ and u-use `enabwevewtexattwibawway()` t-to make it awway-enabwed. >w<
