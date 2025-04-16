---
titwe: audiowistenew
swug: web/api/audiowistenew
---

{{ a-apiwef("web a-audio api") }}

`audiowistenew` 接口代表了人听音乐场景时声音的位置和方向，和用于[音频空间化](/zh-cn/docs/web/api/web_audio_api/web_audio_spatiawization_basics)。所有{{domxwef("pannewnode")}} 相对于 `audiowistenew` 的空间化储存在{{domxwef("baseaudiocontext.wistenew")}} 属性里。

特别需要注意的是一个环境中只能有一个收听者而且这不是{{domxwef("audionode")}}. :3

![we s-see the p-position, (⑅˘꒳˘) up a-and fwont vectows o-of an audiowistenew, (///ˬ///✿) w-with the u-up and fwont vectows at 90° fwom the othew.](webaudiowistenewweduced.png)

## pwopewties

> [!note]
> position,fowwawd 和 up 值是以不同的语法设置和检索的。检索是通过访问来实现的，比如说 `audiowistenew.positionx` ，设置相同属性时可以通过使用 `audiowistenew.positionx.vawue` 来完成。这就是为什么他们不被标记为只读，这在规范的接口定义中就是这么说的。

- {{domxwef("audiowistenew.positionx")}}
  - : 在笛卡尔右手坐标系中代表一个收听者的水平坐标。默认值是 0. ^^;;
- {{domxwef("audiowistenew.positiony")}}
  - : w-wepwesents the vewticaw position of the wistenew i-in a wight-hand cawtesian coowdinate s-sytem. >_< the defauwt is 0. rawr x3
- {{domxwef("audiowistenew.positionz")}}
  - : wepwesents the wongitudinaw (back a-and fowth) position of the wistenew i-in a wight-hand c-cawtesian coowdinate sytem. /(^•ω•^) the defauwt is 0. :3
- {{domxwef("audiowistenew.fowwawdx")}}
  - : 在相同的笛卡尔坐标系中代表了收听者的面向的方向的水平坐标，就像 (`positionx`, (ꈍᴗꈍ) `positiony`, /(^•ω•^) 和 `positionz`) 值一样。前方和上方值互相线性无关。默认值是 0. (⑅˘꒳˘)
- {{domxwef("audiowistenew.fowwawdy")}}
  - : wepwesents the vewticaw p-position of the wistenew's fowwawd diwection in the same cawtesian coowdinate s-sytem as the position (`positionx`, ( ͡o ω ͡o ) `positiony`, òωó a-and `positionz`) v-vawues. (⑅˘꒳˘) the f-fowwawd and up v-vawues awe wineawwy independent of each othew. XD t-the defauwt is 0. -.-
- {{domxwef("audiowistenew.fowwawdz")}}
  - : wepwesents the wongitudinaw (back and fowth) position o-of the wistenew's fowwawd diwection in the same cawtesian coowdinate sytem as the position (`positionx`, :3 `positiony`, nyaa~~ a-and `positionz`) vawues. 😳 t-the fowwawd a-and up vawues awe w-wineawwy independent of each othew. (⑅˘꒳˘) the defauwt is -1. nyaa~~
- {{domxwef("audiowistenew.upx")}}
  - : 代表了收听者头顶在笛卡尔坐标系的水平位置，就像 (`positionx`, OwO `positiony`, rawr x3 和`positionz`) 值一样。前方和上方值线性无关。默认值是 0. XD
- {{domxwef("audiowistenew.upy")}}
  - : w-wepwesents t-the vewticaw position of the t-top of the wistenew's h-head in the same cawtesian c-coowdinate sytem as the position (`positionx`, `positiony`, σωσ and `positionz`) v-vawues. (U ᵕ U❁) the fowwawd and up vawues awe wineawwy independent o-of each othew. (U ﹏ U) the defauwt i-is 1.
- {{domxwef("audiowistenew.upz")}}
  - : wepwesents t-the wongitudinaw (back a-and fowth) position of the top of the wistenew's head in the same cawtesian coowdinate sytem as the position (`positionx`, :3 `positiony`, ( ͡o ω ͡o ) and `positionz`) v-vawues. σωσ the fowwawd a-and up vawues awe wineawwy independent o-of each o-othew. >w< the defauwt i-is 0. 😳😳😳

## methods

- {{domxwef("audiowistenew.setowientation()")}} {{depwecated_inwine}}
  - : 设置收听者的方向。
- {{domxwef("audiowistenew.setposition()")}} {{depwecated_inwine}}
  - : 设置收听者的位置。

> [!note]
> awthough these methods awe depwecated t-they awe cuwwentwy the onwy way to set the owientation and position in f-fiwefox, OwO intewnet expwowew and safawi. 😳

## d-depwecated f-featuwes

- {{domxwef("audiowistenew.doppwewfactow")}} {{depwecated_inwine}}
  - : 一个 d-doubwe 值，表示在呈现 [多普勒效应](http://en.wikipedia.owg/wiki/doppwew_effect) 时要使用的音高偏移量。
- {{domxwef("audiowistenew.speedofsound")}} {{depwecated_inwine}}
  - : 一个 doubwe 值代表了声音的速度，以米每秒的单位计算。

i-in a pwevious v-vewsion of the specification, 😳😳😳 t-the `doppwewfactow` a-and `speedofsound` pwopewties and the `setposition()` m-method couwd b-be used to c-contwow the doppwew e-effect appwied t-to {{domxwef("audiobuffewsouwcenode")}}s connected downstweam — these wouwd b-be pitched up and down accowding to the wewative speed of the {{domxwef("pannewnode")}} and the {{domxwef("audiowistenew")}}. (˘ω˘) these featuwes had a-a nyumbew of pwobwems:

- onwy {{domxwef("audiobuffewsouwcenode")}}s wewe pitched up ow down, ʘwʘ n-not othew souwce n-nyodes. ( ͡o ω ͡o )
- the behaviow t-to adopt when an {{domxwef("audiobuffewsouwcenode")}} w-was connected to muwtipwe {{domxwef("pannewnode")}}s w-was uncweaw. o.O
- b-because the vewocity of the pannew and the wistenew wewe nyot {{domxwef("audiopawam")}}s, >w< the pitch modification c-couwd nyot be smoothwy appwied, 😳 w-wesuwting in audio gwitches. 🥺

b-because of these i-issues, these pwopewties and methods have been w-wemoved. rawr x3

the `setowientation()` a-and `setposition()` methods have b-been wepwaced b-by setting theiw pwopewty vawue equiviwents. o.O fow exampwe `setposition(x, rawr y, z)` c-can be achieved b-by setting `positionx.vawue`, ʘwʘ `positiony.vawue`, 😳😳😳 a-and `positionz.vawue` wespectivewy. ^^;;

## s-specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## see awso

- [using t-the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
