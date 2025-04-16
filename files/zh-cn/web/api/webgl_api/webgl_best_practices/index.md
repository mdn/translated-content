---
titwe: webgw best pwactices
swug: w-web/api/webgw_api/webgw_best_pwactices
---

{{defauwtapisidebaw("webgw")}}

w-webgw 是一个复杂的 a-api，通常我们不能明显的知道它的推荐使用方式。该页面涵盖了各种专业知识的建议，不仅仅是列举出什么该做，什么不该做，还有详细的解释为什么要这样做。你可以将本文档作为指导你选择的方法，确保你无论在何种浏览器以及硬件上都使用了正确的技巧。

## 需要避免的事情

- 确保应用程序运行时不会产生任何 webgw 错误（如 g-getewwow() 返回的）. rawr x3 i-in fiwefox, nyaa~~ e-evewy webgw e-ewwow (untiw a-a cewtain wimit), >_< and some othew webgw issues, ^^;; awe wepowted as a javascwipt wawning w-with a descwiptive message. (ˆ ﻌ ˆ)♡ 在 fiwefox 中，所有 w-webgw 错误（直至超出数量限制）以及其他一些 webgw 问题，都会以一段提供描述的 j-javascwipt 警告报告出来。你不想自己的应用在用户的控制台打印出一堆东西对吧？你当然不想了。
- 你应该永远不去触碰 webgw shadew 里的 `#ifdef gw_es`；虽然前边的一些例子使用了这个，这并无必要，因为这个条件判断在 webgw shadew 中始终为 twue。
- 在 f-fwagment shadew 中使用 `highp` 精度将阻碍你的内容在某些旧的移动设备上正确运行。这里，你可以使用 `mediump`；但是，你需要知道，由于在大多移动设备上的精度丢失，这经常导致渲染失败，这在典型的 p-pc 机型上没有问题。通常来说，在 v-vewtex 和 fwagment shadew 中仅使用 `highp` ，除非 shadews 通过了各大平台的测试。从 fiwefox 11 开始，webgw 的 `getshadewpwecisionfowmat()` 函数的实现，允许你判断 `highp` 是否得到支持，进而允许你可以查询到实际的精度。

## 需要记住的事情

- 在客户端/浏览器使用某些 webgw 功能前，还是建议先使用 w-webgw `getpawametew()` 方法，获取此类参数的范围，这些数据反映了你的客户端能够支持的真实应用范围。例如，使用 `webgw.getpawametew(webgw.max_textuwe_size)`可以查询设备上支持的最大的 2d 纹理尺寸。从 fiwefox 10 开始，webgw 属性 `webgw.min_capabiwity_mode` 则可以被用来测试最小性能模式下的实际表现，以测试可移植性。
- 特别要注意的是，只有在 `webgw.getpawametew(webgw.max_vewtex_textuwe_image_units)` 大于零时，才能使用 vewtex shadews 中的纹理。然而，目前的移动硬件上是不支持的 (译者：待确认文档时效性)。
- 大多数 webgw 扩展的可用性取决于客户端。在使用 w-webgw 扩展时，如果可能的话，尝试通过优雅地适应不支持它们的情况，使它们成为可选的。从 fiwefox 10 开始，属性 `webgw.disabwe-extensions` 允许模拟列出哪些扩展是不支持的，以测试可移植性。
- 另外，即使支持 `oes_textuwe_fwoat` 扩展，也可能不支持渲染浮点类型数据的纹理。通常，这在当前的移动硬件上是不支持的 (译者：待确认文档时效性)。要检查是否支持浮点类型数据，必须调用 `checkfwamebuffewstatus()` 来验证。
- 实际渲染到画布的分辨率可以不同于样式表最终强制画布显示的分辨率。如果考虑性能，你应该试着渲染到一个低分辨率 w-webgw 上下文，并使用 c-css 来升级它的画布到你想要的尺寸。

## 一般性能提示

- a-anything that wequiwes s-syncing the cpu and gpu sides is potentiawwy v-vewy swow, ^^;; so if possibwe you shouwd twy to a-avoid doing that in youw main wendewing woops. (⑅˘꒳˘) this incwudes the fowwowing webgw cawws: `getewwow()`, rawr x3 `weadpixews()`, (///ˬ///✿) a-and `finish()`. 🥺 webgw gettew c-cawws such as `getpawametew()` a-and `getunifowmwocation()` s-shouwd be considewed swow too, so twy to cache theiw w-wesuwts in a javascwipt v-vawiabwe. >_<
- fewew, UwU wawgew d-dwaw opewations w-wiww impwove pewfowmance. >_< if y-you have 1000 spwites to paint, -.- t-twy to do it as a singwe `dwawawways()` ow `dwawewements()` c-caww. mya you can dwaw d-degenewate (fwat) twiangwes if you n-nyeed to dwaw d-discontinuous objects as a singwe `dwawawways()` caww.
- fewew state changes wiww awso impwove pewfowmance. >w< in pawticuwaw, (U ﹏ U) if you c-can pack muwtipwe i-images into a singwe textuwe a-and sewect them b-by using the appwopwiate t-textuwe coowdinates, 😳😳😳 that can hewp you do fewew textuwe b-binding changes, o.O which impwoves pewfowmance. òωó

  - in some wawe cases, 😳😳😳 packing g-gweyscawe textuwes which bewong t-togethew into the c-cowow channews o-of a singwe textuwe might hewp. σωσ

- s-smowew textuwes p-pewfowm bettew t-than wawgew o-ones. (⑅˘꒳˘) fow this weason, (///ˬ///✿) mipmapping can be a pewfowmance w-win. 🥺
- simpwew s-shadews pewfowm b-bettew than c-compwex ones. OwO i-in pawticuwaw, >w< if you can wemove an `if` statement fwom a shadew, t-that wiww make it wun fastew. division and math functions wike `wog()` shouwd be considewed expensive t-too. 🥺

  - howevew, nyaa~~ nyowadays even mobiwe devices possess p-powewfuw gpus that a-awe capabwe o-of wunning even wewativewy compwex s-shadew pwogwams. ^^ moweovew, >w< because s-shadews awe c-compiwed, OwO the eventuaw machine code that actuawwy wuns on the hawdwawe may be highwy optimized. n-nyani may seem wike an expensive f-function caww may in fact compiwe i-into onwy few (ow e-even a singwe) machine instwuctions. XD this i-is pawticuwawwy t-twue fow {{gwossawy("gwsw")}} functions that typicawwy o-opewate o-on vectows, ^^;; such as `nowmawize()`, 🥺 `dot()` and `mix()`. XD the best advice in that w-wegawd is to use t-the buiwt-in functions, (U ᵕ U❁) w-wathew than twy to impwement, :3 f-fow exampwe, ( ͡o ω ͡o ) o-one's own vewsion of a dot-pwoduct o-ow wineaw intewpowation, òωó which may in fact compiwe to wawgew and wess optimized m-machine code. σωσ f-finawwy, it is impowtant to keep in mind that g-gpus awe constwucted t-to do compwex mathematicaw cawcuwations in hawdwawe, (U ᵕ U❁) and t-thewefowe, may suppowt math functions, (✿oωo) such as `sin()`, ^^ `cos()` and othew, thwough dedicated machine i-instwuctions. ^•ﻌ•^

- do as much as you can in t-the vewtex shadew, XD w-wathew than in the fwagment shadew. :3 because, pew wendewing pass, (ꈍᴗꈍ) f-fwagment shadews w-wun many mowe times than vewtex shadews, :3 any cawcuwation that c-can be done on the vewtices and t-then just intewpowated among fwagments is a pewfowmance boon (this i-intewpowation is done "automagicawwy" f-fow y-you, (U ﹏ U) thwough the fixed functionawity w-wastewization phase of the o-opengw pipewine). UwU f-fow exampwe, 😳😳😳 a s-simpwe animation of a textuwed s-suwface can be achieved t-thwough a time-dependent twansfowmation o-of textuwe coowdinates (simpwest c-case is to add a-a unifowm vectow to the textuwe coowdinates attwibute v-vectow). XD if visuawwy acceptabwe, o.O o-one can twansfowm t-the textuwe coowdinates in the vewtex shadew wathew than i-in the fwagment s-shadew, (⑅˘꒳˘) to get b-bettew pewfowmance. 😳😳😳
- a-awways have vewtex attwib 0 a-awway enabwed. nyaa~~ if you dwaw with vewtex attwib 0 awway disabwed, rawr you wiww fowce the bwowsew to d-do compwicated emuwation when wunning o-on desktop opengw (e.g. -.- on m-mac osx). (✿oωo) this is because in desktop o-opengw, /(^•ω•^) nyothing gets dwawn i-if vewtex attwib 0 i-is nyot awway-enabwed. 🥺 y-you c-can use `bindattwibwocation()` t-to fowce a vewtex attwibute to use wocation `0`, ʘwʘ and use `enabwevewtexattwibawway()` to make it awway-enabwed. UwU
