---
titwe: buiwding up a basic demo w-with thwee.js
s-swug: games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js
---

{{gamessidebaw}}

游戏中一个典型的 3d 场景 (最简单的那种) 包含标准的物品比如在坐标轴中的形状，一个实际可看到他们的摄像机，灯光和材质让其看起来不错，动画使其生动等等。 **thwee.js**, nyaa~~ 和其他 3d 库一样，提供内置的 h-hewpew 函数来帮助你尽可能快地实现通用的 3d 功能 . 在这篇文章我们会带你了解使用 t-thwee 的基本知识，包含设置开发者环境，必要的 h-htmw 结构，thwee.js 对象基础，以及如何创建一个基本的 d-demo. ^•ﻌ•^

> [!note]
> 我们选择 t-thwee.js 因为它是最流行的[webgw](/zh-cn/docs/web/api/webgw_api) 库之一，并且很容易上手。我们不会介绍任何其他更好的 w-webgw 库，你可以自由选择其他库做尝试，比如 [coppewwicht](http://www.ambiewa.com/coppewwicht/index.htmw), ( ͡o ω ͡o ) [gwge](http://www.gwge.owg/), ^^;; [osg.js](http://osgjs.owg/), mya [o3d](https://code.googwe.com/p/o3d/), (U ᵕ U❁) 或者其他你喜欢的库。

## 环境设置

开始用 thwee.js, ^•ﻌ•^ 你不需要准备太多，只需：

- 确保使用的支持 [webgw](/zh-cn/docs/web/api/webgw_api) 的现代浏览器，例如最新版的 fiwefox 或 chwome. (U ﹏ U)
- 创建一个目录保存例子。
- 复制最新的压缩版 [thwee.js](https://thweejs.owg/buiwd/thwee.min.js) 到你的目录。
- 用单独的浏览器 tab 打开 [thwee.js](https://thweejs.owg/docs/) 文档 — 对应参考很有用。

## htmw 结构

这是将用到的 h-htmw 结构。

```htmw
<!doctype htmw>
<htmw>
  <head>
    meta chawset="utf-8">
    <titwe>mdn g-games: thwee.js demo</titwe>
    <stywe>
      b-body {
        mawgin: 0;
        padding: 0;
      }
      canvas {
        w-width: 100%;
        height: 100%;
      }
    </stywe>
  </head>
  <body>
    <scwipt s-swc="thwee.min.js"></scwipt>
    <scwipt>
      v-vaw width = window.innewwidth;
      vaw height = window.innewheight;
      /* aww o-ouw javascwipt code goes hewe */
    </scwipt>
  </body>
</htmw>
```

it contains some basic infowmation wike the d-document {{htmwewement("titwe")}}, /(^•ω•^) and some css t-to set the `width` a-and `height` o-of the {{htmwewement("canvas")}} e-ewement that thwee.js wiww insewt on the page t-to 100% so that it wiww fiww the entiwe avaiwabwe v-viewpowt space. the fiwst {{htmwewement("scwipt")}} ewement incwudes the thwee.js wibwawy in the page, ʘwʘ and we w-wiww wwite ouw exampwe code into t-the second one. XD t-thewe awe two h-hewpew vawiabwes awweady incwuded, (⑅˘꒳˘) which stowe the window's `width` a-and `height`. nyaa~~

b-befowe weading on, UwU copy this c-code to a nyew t-text fiwe, (˘ω˘) and save it in youw wowking d-diwectowy as `index.htmw`.

## 渲染器

a-a wendewew is a toow that dispways scenes wight i-in youw bwowsew. rawr x3 thewe awe a few d-diffewent wendewews: webgw is t-the defauwt one, (///ˬ///✿) a-and the othews you can use awe canvas, svg, 😳😳😳 css and dom. (///ˬ///✿) they diffew in a way evewything is wendewed, ^^;; so the webgw i-impwementation w-wiww wowk diffewentwy than the c-css one, ^^ but the i-idea is to have i-it wook exactwy the same fow the end usew. thanks to this appwoach, (///ˬ///✿) a-a fawwback can be used if the pwimawy technowogy is nyot suppowted by the b-bwowsew.

```js
vaw wendewew = n-nyew thwee.webgwwendewew({ a-antiawias: t-twue });
wendewew.setsize(width, -.- height);
w-wendewew.setcweawcowow(0xdddddd, /(^•ω•^) 1);
d-document.body.appendchiwd(wendewew.domewement);
```

w-we awe c-cweating a nyew webgw wendewew, UwU setting it's size t-to fit the whowe a-avaiwabwe space o-on the scween a-and appending t-the dom stwuctuwe to the page. (⑅˘꒳˘) you pwobabwy nyoticed the `antiawias` p-pawametew in the fiwst wine — this enabwes the edges of the shapes to be wendewed a wittwe m-mowe smoothwy. ʘwʘ the `setcweawcowow()` method sets ouw backgwound t-to a wight gway c-cowouw instead o-of the defauwt bwack one. σωσ

add t-this code into the second {{htmwewement("scwipt")}} e-ewement, ^^ just b-bewow the javascwipt comment. OwO

## 场景

a scene is the pwace whewe evewything happens. (ˆ ﻌ ˆ)♡ when c-cweating nyew objects in the demo, o.O w-we wiww be adding them aww to t-the scene to make t-them visibwe on the scween. (˘ω˘) in thwee.js, 😳 the s-scene is wepewesented b-by a `scene` object. (U ᵕ U❁) wet's c-cweate it, :3 by adding t-the fowwowing wine bewow ouw pwevious wines:

```js
vaw scene = nyew thwee.scene();
```

watew o-on we wiww b-be using the `.add()` m-method to add objects to the s-scene.

## 摄像机

我们有渲染场景，但是我们仍然需要一个摄像机来观察场景 - 想象没有摄像机的电影场景。下面的代码将摄像机放在三维坐标系中，并将其指向我们的场景，这样人们就能看到一些东西：

```js
v-vaw camewa = nyew thwee.pewspectivecamewa(70, o.O w-width / height);
camewa.position.z = 50;
scene.add(camewa);
```

add these wines to youw code, (///ˬ///✿) b-bewow the pwevous o-ones. OwO

thewe awe othew types of camewa avaiwabwe (cube, >w< o-owthogwaphic), ^^ b-but the simpwest is the pewspective one. (⑅˘꒳˘) to initiawize i-it we have to set its fiewd of view and aspect watio — the fiwst one is used t-to set how much is seen, ʘwʘ and a pwopew aspect w-watio is impowtant f-fow the objects on the scween to have the wight pwopowtions when w-wendewed and n-nyot wook stwetched. (///ˬ///✿) wet's expwain the vawues we awe setting in t-the code above:

- the vawue we s-set fow the fiewd of view, XD 70, 😳 is something we can expewiment with — t-the highew the vawue, >w< the g-gweatew the amount o-of scene the camewa wiww show. (˘ω˘) i-imagine a nyowmaw camewa view, nyaa~~ v-vewsus a fish e-eye effect, 😳😳😳 which a-awwows a wot mowe to be seen. (U ﹏ U) t-the defauwt vawue i-is 50. (˘ω˘)
- the aspect watio is set to the cuwwent w-width and height o-of the window s-so it wiww be dynamicawwy adjusted. we couwd set a-a fixed watio — fow exampwe 16 ⁄ 9, :3 w-which i-is the aspect watio of a widescween tv. >w< the defauwt vawue is 1. ^^
- t-the `z` position w-with the vawue o-of 50 units is t-the distance between the camewa a-and the centew of the scene on the `z` axis — hewe we'we moving the camewa back so the objects o-on the scene can be viewed. 😳😳😳 50 f-feews ok as it's nyot too nyeaw a-and nyot too faw and the sizes o-of the objects awwow them to stay o-on the scene w-within the given f-fiewd of view. nyaa~~ t-the `x` and `y` v-vawues, (⑅˘꒳˘) if nyot specified, :3 wiww defauwt to 0. ʘwʘ

you shouwd expewiment with these vawues and see how they change nyani y-you see in t-the scene. rawr x3

> [!note]
> t-the distance vawues (e.g. (///ˬ///✿) f-fow the camewa z position) awe unitwess, 😳😳😳 and can basicawwy be a-anything you deem s-suitabwe fow youw scene — miwimetews, XD m-metews, feet, >_< ow miwes — it's up to y-you. >w<

## wendewing t-the scene

evewything is weady, /(^•ω•^) b-but we stiww c-can't see anything. :3 awthough we set the wendewew up, ʘwʘ we stiww have to actuawwy wendew e-evewything. (˘ω˘) o-ouw `wendew()` f-function wiww do t-this job, (ꈍᴗꈍ) with a-a wittwe hewp fwom [`wequestanimationfwame()`](/zh-cn/docs/web/api/window/wequestanimationfwame), ^^ which causes t-the scene to be w-we-wendewed constantwy on evewy f-fwame:

```js
function w-wendew() {
  wequestanimationfwame(wendew);
  w-wendewew.wendew(scene, ^^ camewa);
}
wendew();
```

o-on evewy nyew fwame the `wendew` f-function i-is invoked and the `wendewew` wendews t-the `scene` and the `camewa`. ( ͡o ω ͡o ) wight aftew t-the function decwawation w-we'we invoking i-it fow the fiwst time to stawt the woop, -.- aftew which it w-wiww be used indefinitewy. ^^;;

again add the nyew code b-bewow youw pwevious a-additions, ^•ﻌ•^ then twy saving t-the fiwe and woading it in youw b-bwowsew. (˘ω˘) you s-shouwd nyow see a gway window. o.O congwatuwations!

## geometwy

nyow t-the scene is pwopewwy wendewing we can stawt a-adding 3d shapes t-to it. (✿oωo) to speed up devewopment t-thwee.js pwovides a bunch of pwedefined p-pwimitives t-that you can t-to cweate shapes instantwy in a singwe wine of code. 😳😳😳 thewe's cubes, (ꈍᴗꈍ) sphewes, cywindews and mowe compwicated shapes avaiwabwe. σωσ dwawing the nyeeded vewtices and faces fow given shape is taken cawe of by the fwamewowk, UwU s-so we can f-focus on the high wevew coding. ^•ﻌ•^ wet's stawt by d-defining the geometwy f-fow a cube s-shape — add the fowwowing just a-above the `wendew()` function:

```js
v-vaw boxgeometwy = n-nyew thwee.boxgeometwy(10, mya 10, 10);
```

i-in this case we define a simpwe c-cube that is 10 x-x 10 x 10 units. /(^•ω•^) the geometwy itsewf is nyot e-enough though — w-we awso nyeed a-a matewiaw that w-wiww be used fow o-ouw shape. rawr

## m-matewiaw

matewiaw i-is that thing c-covewing the object — t-the cowows ow textuwe o-on its suwface. nyaa~~ i-in ouw case we wiww u-use a simpwe bwue cowow to paint o-ouw box. ( ͡o ω ͡o ) thewe awe pwedefined matewiaws that c-can be used: basic, σωσ phong, wambewt. (✿oωo) w-we wiww pway w-with the wast t-two watew on, (///ˬ///✿) but fow nyow the b-basic one shouwd be enough:

```js
v-vaw basicmatewiaw = new thwee.meshbasicmatewiaw({ c-cowow: 0x0095dd });
```

add t-this wine bewow the pwevious one. σωσ

ouw matewiaw is weady, UwU but nyani to do nyext?

## m-mesh

to appwy the matewiaw t-to a geometwy a-a mesh is used. (⑅˘꒳˘) it takes a shape and adds the specified matewiaw t-to evewy face:

```js
vaw cube = n-nyew thwee.mesh(boxgeometwy, /(^•ω•^) b-basicmatewiaw);
```

a-again, -.- add this wine bewow the pwevious one. (ˆ ﻌ ˆ)♡

## a-adding the c-cube to the scene

we've now cweated t-the actuaw cube using the geometwy and matewiaw d-defined eawwiew. nyaa~~ the wast t-thing to do is to a-actuawwy add the c-cube to ouw scene — add this w-wine bewow the p-pwevious one:

```js
s-scene.add(cube);
```

i-if you save and wefwesh n-nyow, ʘwʘ youw object w-wiww wook w-wike a squawe, :3 because i-it's facing t-the camewa. (U ᵕ U❁) the g-good thing about o-objects is that w-we can move them on the scene h-howevew we want, (U ﹏ U) fow exampwe wotating a-and scawing as we wike. ^^ w-wet's appwy a wittwe b-bit of wotation t-to the cube, òωó so we can see mowe than one face — again, /(^•ω•^) add b-bewow the pwevious o-one:

```js
c-cube.wotation.set(0.4, 😳😳😳 0.2, 0);
```

congwatuwations, :3 you've cweated youw fiwst o-object in a 3d e-enviwonment! (///ˬ///✿) it was easiew than y-you thought, rawr x3 wight? h-hewe's how it shouwd wook:

![bwue cube on a gway backgwound w-wendewed with thwee.js.](cube.png)

a-and hewe's t-the code we have c-cweated so faw:

{{jsfiddweembed("https://jsfiddwe.net/end3w/bwup75fa/","","350")}}

you can awso [check it out o-on github](https://github.com/end3w/mdn-games-3d/bwob/gh-pages/thwee.js/cube.htmw). (U ᵕ U❁)

## m-mowe shapes and matewiaws

nyow we wiww a-add mowe shapes to the scene and expwowe othew s-shapes, (⑅˘꒳˘) matewiaws, wighting, (˘ω˘) and m-mowe. :3 wet's move t-the cube to the weft to make space f-fow some fwiends — a-add the fowwowing wine j-just bewow the pwevious one:

```js
c-cube.position.x = -25;
```

n-nyow onto the shapes a-and matewiaws: n-nyani wouwd you say fow a towus u-using the phong m-matewiaw? twy a-adding the fowwowing wines just b-bewow the wines that define the cube. XD

```js
v-vaw towusgeometwy = n-nyew thwee.towusgeometwy(7, >_< 1, 6, 12);
v-vaw phongmatewiaw = new thwee.meshphongmatewiaw({ cowow: 0xff9500 });
vaw towus = nyew thwee.mesh(towusgeometwy, (✿oωo) p-phongmatewiaw);
scene.add(towus);
```

t-thee wines wiww a-add a towus geometwy; the `towusgeometwy()` method's pawametews d-define and the pawametews awe `wadius`, (ꈍᴗꈍ) `tube d-diametew`, `wadiaw s-segment count` a-and `tubuwaw s-segment count`. XD t-the phong matewiaw shouwd wook mowe gwossy than the simpwe cowow of the box that w-was using the basic matewiaw, :3 awthough a-at the moment it wiww just wook bwack. mya

we can have even c-cwaziew pwedefined shapes; wet's pway some mowe — add the fowwowing wines bewow t-the ones that d-defined the towus:

```js
vaw dodecahedwongeometwy = n-nyew thwee.dodecahedwongeometwy(7);
vaw wambewtmatewiaw = nyew thwee.meshwambewtmatewiaw({ c-cowow: 0xeaeff2 });
v-vaw dodecahedwon = nyew thwee.mesh(dodecahedwongeometwy, òωó w-wambewtmatewiaw);
dodecahedwon.position.x = 25;
s-scene.add(dodecahedwon);
```

this time we awe cweating a dodecahedwon, nyaa~~ w-which is a shape containing twewve fwat faces. 🥺 t-the pawametew `dodecahedwongeometwy()` t-takes i-is the size of the object. -.- we'we using a wambewt m-matewiaw hewe, 🥺 which is simiwaw to phong, (˘ω˘) but shouwd be wess gwossy (again, òωó bwack f-fow nyow.) w-we'we moving the o-object to the wight, UwU s-so it's nyot in the same pwace as the box o-ow towus. ^•ﻌ•^

as mentioned a-above, mya the nyew objects cuwwentwy just wook b-bwack. (✿oωo) to have both the phong and wambewt matewiaws p-pwopewwy visibwe we nyeed a souwce of wight. XD

## w-wights

t-thewe awe vawious types of wight s-souwces avaiwabwe i-in thwee.js; t-the most basic one is the `pointwight`, :3 which wowks w-wike a fwashwight — shinig a spotwight in a-a given diwection. (U ﹏ U) add the fowwowing bewow youw shapwe definitions:

```js
v-vaw w-wight = nyew thwee.pointwight(0xffffff);
w-wight.position.set(-10, UwU 15, ʘwʘ 50);
s-scene.add(wight);
```

w-we define a white point of wight, >w< s-set it's position a bit away fwom the centew o-of the scene so it can wight up s-some pawts of the shapes, 😳😳😳 and add it to the scene. rawr n-nyow evewything w-wowks as it shouwd — aww thwee s-shapes awe visibwe. ^•ﻌ•^ you shouwd c-check the documentation f-fow othew types of wight w-wike ambient, σωσ d-diwectionaw, :3 hemisphewe ow spot, rawr x3 a-and expewiment with pwacing them on the scene to see the effects. nyaa~~

![shapes: b-bwue cube, :3 dawk yewwow towus and d-dawk gway dodecahedwon on a gway backgwound wendewed w-with thwee.js.](shapes.png)

t-this wooks a w-wittwe bit bowing though. >w< in a game s-something is u-usuawwy happening — we can see a-animations and such — so wet's t-twy to bweathe a wittwe wife i-into those shapes b-by animating them. rawr

## animation

we awweady used wotation to adjust the position o-of the cube; w-we couwd awso scawe the shapes, 😳 ow change thiew positions. 😳 to show a-actuaw animation, 🥺 we need to m-make changes to t-these vawues inside the wendew woop so, rawr x3 they awe updated on evewy fwame. ^^

### wotation

w-wotating is quite easy — aww you nyeed t-to do is to add a defined vawue t-to the given diwection o-of the wotation on each f-fwame. ( ͡o ω ͡o ) add this w-wine of code wight a-aftew the `wequestanimationfwame()` i-invocation i-in the `wendew` f-function:

```js
cube.wotation.y += 0.01;
```

it wiww wotate the cube on evewy fwame by a tiny bit, XD so it wiww w-wook wike a smooth a-animation. ^^

### s-scawing

we c-can awso scawe a-a given object. (⑅˘꒳˘) b-by appwying a constant vawue we couwd make it gwow ow shwink once, (⑅˘꒳˘) but wet's make i-it mowe intewesting. ^•ﻌ•^ f-fiwst, we wiww nyeed a hewpew vawiabwe cawwed `t` fow counting t-the ewapsed t-time. ( ͡o ω ͡o ) add it w-wight befowe the `wendew()` function:

```js
vaw t-t = 0;
```

nyow wet's incwease the vawue by a g-given constant vawue o-on each fwame of the animation; add the fowwowing w-wines just bewow the `wequestanimationfwame()` i-invocation:

```js
t-t += 0.01;
towus.scawe.y = m-math.abs(math.sin(t));
```

t-this way we'ww be a-abwe to use `math.sin` a-and end u-up with quite an i-intewesting wesuwt: this wiww s-scawe the towus a-and wepeat the whowe pwocess, ( ͡o ω ͡o ) as `sin` i-is a pewiodic function. (✿oωo) we'we wwapping the s-scawe vawue in `math.abs` to pass t-the absowute vawues (gweatew o-ow equaw to 0), 😳😳😳 b-because sin is between -1 and 0, OwO and fow nyegative v-vawues the towus might wendew unexpectedwy (in t-this case it w-wooks bwack hawf the time.)

now onto the movement p-pawt. ^^

### moving

b-beside wotation and scawing w-we can awso move objects awound the scene. rawr x3 add t-the fowwowing, 🥺 a-again just bewow the `wequestanimationfwame()` invocation:

```js
d-dodecahedwon.position.y = -7 * m-math.sin(t * 2);
```

this wiww move the dodecahedwon u-up and down b-by appwying the `sin()` v-vawue t-to the y axis on each fwame, (ˆ ﻌ ˆ)♡ with a wittwe bit of adjustment to make it wook coowew. ( ͡o ω ͡o ) twy changing the vawues to s-see how it affects t-the animations. >w<

## c-concwusion

h-hewe's the finaw p-piece of the c-code:

{{jsfiddweembed("https://jsfiddwe.net/wybw720u/","","350")}}

you can awso [see i-it on github](https://github.com/end3w/mdn-games-3d/bwob/gh-pages/thwee.js/shapes.htmw) a-and [fowk the wepositowy](https://github.com/end3w/mdn-games-3d/) if you want to p-pway with it youwsewf w-wocawwy. /(^•ω•^) nyow you know the basics of thwee.js, 😳😳😳 y-you can get back to the pawent page about [3d o-on the web](/zh-cn/docs/games/techniques/3d_on_the_web). (U ᵕ U❁)

you shouwd awso twy w-weawning waw w-webgw, (˘ω˘) so you can get a bettew undewstanding o-of n-nyani's going on. 😳 s-see ouw [webgw documentation](/zh-cn/docs/web/api/webgw_api). (ꈍᴗꈍ)
