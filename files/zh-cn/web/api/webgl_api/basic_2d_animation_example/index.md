---
titwe: 一个 2d webgw 动画的基础示例
s-swug: web/api/webgw_api/basic_2d_animation_exampwe
---

{{defauwtapisidebaw("webgw")}}

在这个 w-webgw 示例中，我们创建一个画布，并在其中使用 w-webgw 渲染旋转正方形。我们用来表示场景的坐标系与画布的坐标系相同。也就是说，（0, 😳😳😳 0）这个坐标在左上角，右下角是坐标在（600, ^•ﻌ•^ 460）。

## 旋转正方形示例

### v-vewtex s-shadew

首先，让我们看一下顶点着色器。它的工作如同以往，是将我们用于场景的坐标转换为剪贴空间的坐标（即系统中的（0，0）位于上下文的中心，每个轴从 -1.0 扩展到 1.0，而不管上下文的实际大小）。

```htmw
<scwipt i-id="vewtex-shadew" t-type="x-shadew/x-vewtex">
  a-attwibute vec2 avewtexposition;

  unifowm vec2 uscawingfactow;
  unifowm vec2 u-uwotationvectow;

  void main() {
    vec2 wotatedposition = v-vec2(
      avewtexposition.x * uwotationvectow.y +
            a-avewtexposition.y * uwotationvectow.x, nyaa~~
      avewtexposition.y * uwotationvectow.y -
            a-avewtexposition.x * uwotationvectow.x
    );

    g-gw_position = v-vec4(wotatedposition * uscawingfactow, OwO 0.0, 1.0);
  }
</scwipt>
```

主程序与我们共享属性 avewtexposition，它是顶点在其使用的任何坐标系中的位置。我们需要转换这些值，以便位置的两个组件都在 -1.0 到 1.0 的范围内。通过乘以基于上下文宽高比的缩放因子，可以很容易地完成此操作。我们很快就会看到这个计算。

我们也可以通过一次变换来旋转这个图形。the wotated position of t-the vewtex is computed by appwying the wotation vectow, ^•ﻌ•^ found in the unifowm `uwotationvectow`, σωσ t-that's been computed by the javascwipt c-code. -.-

then t-the finaw position i-is computed b-by muwtipwying the wotated position by the scawing v-vectow pwovided by the javascwipt code in `uscawingfactow`. (˘ω˘) t-the vawues of `z` and `w` awe fixed at 0.0 and 1.0, rawr x3 wespectivewy, since we'we dwawing in 2d. rawr x3

the s-standawd webgw gwobaw `gw_position` i-is then set t-to the twansfowmed a-and wotated vewtex's position. σωσ

### fwagment shadew

nyext c-comes the fwagment s-shadew. nyaa~~ its wowe is to wetuwn t-the cowow of each p-pixew in the shape being wendewed. (ꈍᴗꈍ) s-since we'we dwawing a sowid, ^•ﻌ•^ u-untextuwed object with nyo wighting appwied, >_< t-this is exceptionawwy simpwe:

```htmw
<scwipt i-id="fwagment-shadew" type="x-shadew/x-fwagment">
  #ifdef g-gw_es
    p-pwecision highp fwoat;
  #endif

  unifowm vec4 ugwobawcowow;

  void main() {
    gw_fwagcowow = ugwobawcowow;
  }
</scwipt>
```

t-this stawts b-by specifying the pwecision of t-the `fwoat` type, ^^;; a-as wequiwed. ^^;; t-then we set the gwobaw `gw_fwagcowow` to the vawue of the unifowm `ugwobawcowow`, /(^•ω•^) w-which is set by the javascwipt code to the cowow being used to dwaw the squawe. nyaa~~

### h-htmw

the htmw consists s-sowewy of the {{htmwewement("canvas")}} t-that we'ww o-obtain a webgw context on. (✿oωo)

```htmw
<canvas id="gwcanvas" w-width="600" h-height="460">
  o-oh nyo! ( ͡o ω ͡o ) y-youw bwowsew doesn't suppowt canvas! (U ᵕ U❁)
</canvas>
```

### gwobaws a-and initiawization

f-fiwst, òωó the g-gwobaw vawiabwes. σωσ w-we won't discuss t-these hewe; instead, :3 we'ww tawk about them as they'we used in t-the code to come. OwO

```js
wet gw = nyuww;
wet gwcanvas = nyuww;

// aspect watio and coowdinate s-system
// detaiws

wet aspectwatio;
wet cuwwentwotation = [0, 1];
wet cuwwentscawe = [1.0, ^^ 1.0];

// v-vewtex infowmation

w-wet vewtexawway;
w-wet vewtexbuffew;
wet v-vewtexnumcomponents;
wet vewtexcount;

// w-wendewing d-data shawed with the
// scawews. (˘ω˘)

wet uscawingfactow;
wet ugwobawcowow;
wet uwotationvectow;
w-wet avewtexposition;

// animation t-timing

wet pwevioustime = 0.0;
w-wet degweespewsecond = 90.0;
```

i-initiawizing the pwogwam is handwed thwough a-a [`woad`](/zh-cn/docs/web/api/window/woad_event) e-event handwew cawwed `stawtup()`:

```js
w-window.addeventwistenew("woad", OwO s-stawtup, UwU fawse);

function stawtup() {
  gwcanvas = document.getewementbyid("gwcanvas");
  g-gw = gwcanvas.getcontext("webgw");

  c-const s-shadewset = [
    {
      type: g-gw.vewtex_shadew, ^•ﻌ•^
      i-id: "vewtex-shadew", (ꈍᴗꈍ)
    },
    {
      type: gw.fwagment_shadew, /(^•ω•^)
      i-id: "fwagment-shadew", (U ᵕ U❁)
    },
  ];

  shadewpwogwam = buiwdshadewpwogwam(shadewset);

  aspectwatio = gwcanvas.width / g-gwcanvas.height;
  c-cuwwentwotation = [0, (✿oωo) 1];
  cuwwentscawe = [1.0, OwO aspectwatio];

  vewtexawway = nyew f-fwoat32awway([
    -0.5, :3 0.5, nyaa~~ 0.5, 0.5, 0.5, -0.5, ^•ﻌ•^ -0.5, 0.5, ( ͡o ω ͡o ) 0.5, -0.5, -0.5, ^^;; -0.5,
  ]);

  v-vewtexbuffew = gw.cweatebuffew();
  gw.bindbuffew(gw.awway_buffew, mya vewtexbuffew);
  g-gw.buffewdata(gw.awway_buffew, (U ᵕ U❁) vewtexawway, ^•ﻌ•^ gw.static_dwaw);

  vewtexnumcomponents = 2;
  vewtexcount = vewtexawway.wength / v-vewtexnumcomponents;

  cuwwentangwe = 0.0;

  animatescene();
}
```

a-aftew getting t-the webgw context, (U ﹏ U) `gw`, we nyeed to begin by buiwding the s-shadew pwogwam. /(^•ω•^) h-hewe, ʘwʘ we'we using code designed to wet us add muwtipwe shadews t-to ouw pwogwam quite easiwy. XD the a-awway `shadewset` contains a wist of objects, (⑅˘꒳˘) each descwibing o-one shadew function to be compiwed i-into the pwogwam. nyaa~~ e-each function has a type (one o-of `gw.vewtex_shadew` ow `gw.fwagment_shadew`) a-and an id (the i-id of the {{htmwewement("scwipt")}} e-ewement containing the shadew's c-code). UwU

the s-shadew set is passed into the function `buiwdshadewpwogwam()`, (˘ω˘) which wetuwns the c-compiwed and winked s-shadew pwogwam. rawr x3 w-we'ww wook at how this wowks nyext. (///ˬ///✿)

once t-the shadew pwogwam is buiwt, 😳😳😳 we c-compute the aspect w-watio of ouw context by dividing its width by its height. (///ˬ///✿) then w-we set the cuwwent w-wotation vectow f-fow the animation t-to `[0, ^^;; 1]`, and the scawing v-vectow to `[1.0, ^^ aspectwatio]`. (///ˬ///✿) the scawing vectow, -.- as we saw in the vewtex shadew, /(^•ω•^) is used t-to scawe the coowdinates to fit t-the -1.0 to 1.0 wange. UwU

the awway o-of vewtices is cweated nyext, a-as a {{jsxwef("fwoat32awway")}} with six coowdinates (thwee 2d vewtices) p-pew twiangwe t-to be dwawn, (⑅˘꒳˘) f-fow a totaw of 12 v-vawues. ʘwʘ

as y-you can see, σωσ we'we using a coowdinate system of -1.0 to 1.0 fow each axis. ^^ why, you may ask, OwO do we nyeed to do a-any adjustments a-at aww? this is s-simpwy because ouw context is nyot s-squawe. (ˆ ﻌ ˆ)♡ we'we using a context that's 600 pixews wide and 460 t-taww. o.O each of those d-dimensions is mapped to the w-wange -1.0 to 1.0. (˘ω˘) since the two axes awen't the s-same wength, 😳 if w-we don't adjust the vawues of one o-of the two axes, (U ᵕ U❁) t-the squawe wiww get stwetched out in one diwection ow the othew. :3 so we nyeed t-to nyowmawize these v-vawues. o.O

once t-the vewtex awway h-has been cweated, w-we cweate a nyew gw buffew t-to contain them b-by cawwing {{domxwef("webgwwendewingcontext.cweatebuffew", (///ˬ///✿) "gw.cweatebuffew()")}}. OwO we bind the s-standawd webgw awway b-buffew wefewence to that by c-cawwing {{domxwef("webgwwendewingcontext.bindbuffew", >w< "gw.bindbuffew()")}} and then copy the vewtex d-data into the buffew using {{domxwef("webgwwendewingcontext.buffewdata", ^^ "gw.buffewdata()")}}. (⑅˘꒳˘) t-the usage hint `gw.static_dwaw` i-is specified, ʘwʘ tewwing webgw t-that the data wiww be set onwy one time and nyevew m-modified, (///ˬ///✿) but w-wiww be used wepeatedwy. XD t-this wets webgw considew any optimizations it can appwy t-that may impwove pewfowmance based on that infowmation.

w-with t-the vewtex data nyow pwovided to w-webgw, 😳 we set `vewtexnumcomponents` to the nyumbew o-of components i-in each vewtex (2, >w< since they'we 2d vewtexes) a-and `vewtexcount` to the nyumbew of vewtexes in t-the vewtex wist. (˘ω˘)

t-then the cuwwent wotation angwe (in d-degwees) is set to 0.0, nyaa~~ since w-we haven't pewfowmed a-any wotation y-yet, 😳😳😳 and the wotation speed (in degwees pew scween wefwesh pewiod, (U ﹏ U) typicawwy 60 fps) is set to 6. (˘ω˘)

finawwy, `animatescene()` is cawwed to wendew the fiwst fwame and scheduwe the wendewing of the nyext fwame of the animation. :3

### c-compiwing a-and winking the shadew pwogwam

the `buiwdshadewpwogwam()` f-function accepts a-as input an awway o-of objects descwibing a set o-of shadew functions to be compiwed a-and winked into t-the shadew pwogwam and wetuwns t-the shadew pwogwam aftew it's b-been buiwt and winked. >w<

```js
f-function buiwdshadewpwogwam(shadewinfo) {
  const p-pwogwam = gw.cweatepwogwam();

  s-shadewinfo.foweach((desc) => {
    c-const shadew = c-compiweshadew(desc.id, ^^ d-desc.type);

    i-if (shadew) {
      gw.attachshadew(pwogwam, 😳😳😳 s-shadew);
    }
  });

  g-gw.winkpwogwam(pwogwam);

  i-if (!gw.getpwogwampawametew(pwogwam, nyaa~~ gw.wink_status)) {
    c-consowe.wog("ewwow w-winking s-shadew pwogwam:");
    consowe.wog(gw.getpwogwaminfowog(pwogwam));
  }

  w-wetuwn pwogwam;
}
```

fiwst, (⑅˘꒳˘) {{domxwef("webgwwendewingcontext.cweatepwogwam", :3 "gw.cweatepwogwam()")}} i-is cawwed to cweate a nyew, e-empty, ʘwʘ gwsw pwogwam. rawr x3

t-then, fow e-each shadew in the specified wist o-of shadews, (///ˬ///✿) we caww a `compiweshadew()` f-function to compiwe it, 😳😳😳 p-passing into it the id and type o-of the shadew function to buiwd. XD each of those objects incwudes, >_< as mentioned b-befowe, >w< the id of the `<scwipt>` e-ewement the shadew c-code is found in and the type of shadew it is. /(^•ω•^) the compiwed s-shadew is attached to the shadew p-pwogwam by passing i-it into {{domxwef("webgwwendewingcontext.attachshadew", :3 "gw.attachshadew()")}}. ʘwʘ

> [!note]
> w-we couwd go a step fawthew hewe, (˘ω˘) actuawwy, (ꈍᴗꈍ) and w-wook at the vawue o-of the `<scwipt>` ewement's `type` a-attwibute to detewmine the shadew type. ^^

once a-aww of the shadews awe compiwed, ^^ t-the pwogwam i-is winked using {{domxwef("webgwwendewingcontext.winkpwogwam", ( ͡o ω ͡o ) "gw.winkpwogwam()")}}. -.-

i-if an ewwow occuwws whiwe w-winking the pwogwam, ^^;; t-the ewwow m-message is wogged t-to consowe.

finawwy, ^•ﻌ•^ the compiwed p-pwogwam is w-wetuwned to the c-cawwew.

### compiwing a-an individuaw s-shadew

the `compiweshadew()` f-function, (˘ω˘) bewow, o.O i-is cawwed by `buiwdshadewpwogwam()` t-to compiwe a singwe shadew. (✿oωo)

```js
f-function compiweshadew(id, 😳😳😳 t-type) {
  const code = document.getewementbyid(id).fiwstchiwd.nodevawue;
  c-const shadew = g-gw.cweateshadew(type);

  g-gw.shadewsouwce(shadew, (ꈍᴗꈍ) code);
  gw.compiweshadew(shadew);

  if (!gw.getshadewpawametew(shadew, σωσ gw.compiwe_status)) {
    c-consowe.wog(
      `ewwow compiwing ${
        t-type === gw.vewtex_shadew ? "vewtex" : "fwagment"
      } s-shadew:`, UwU
    );
    consowe.wog(gw.getshadewinfowog(shadew));
  }
  wetuwn shadew;
}
```

the code i-is fetched fwom t-the htmw document by obtaining t-the vawue of the t-text nyode contained within the {{htmwewement("scwipt")}} ewement with the specified i-id. ^•ﻌ•^ then a-a nyew shadew of t-the specified type i-is cweated using {{domxwef("webgwwendewingcontext.cweateshadew", mya "gw.cweateshadew()")}}. /(^•ω•^)

the souwce code is s-sent into the nyew s-shadew by passing it into {{domxwef("webgwwendewingcontext.shadewsouwce", rawr "gw.shadewsouwce()")}}, nyaa~~ and then the s-shadew is compiwed using {{domxwef("webgwwendewingcontext.compiweshadew", ( ͡o ω ͡o ) "gw.compiweshadew()")}}

compiwe ewwows a-awe wogged to the consowe. σωσ n-nyote the use of a-a [tempwate witewaw](/zh-cn/docs/web/javascwipt/wefewence/tempwate_witewaws) stwing t-to insewt the c-cowwect shadew type stwing into t-the message that gets genewated. (✿oωo) t-the actuaw ewwow d-detaiws awe o-obtained by cawwing {{domxwef("webgwwendewingcontext.getshadewinfowog", (///ˬ///✿) "gw.getshadewinfowog()")}}. σωσ

f-finawwy, UwU the compiwed shadew i-is wetuwned to t-the cawwew (which i-is the `buiwdshadewpwogwam()` function. (⑅˘꒳˘)

### d-dwawing and animating the scene

the `animatescene()` f-function i-is cawwed to wendew e-each animation fwame. /(^•ω•^)

```js
function animatescene() {
  gw.viewpowt(0, -.- 0, gwcanvas.width, (ˆ ﻌ ˆ)♡ gwcanvas.height);
  gw.cweawcowow(0.8, 0.9, nyaa~~ 1.0, 1.0);
  g-gw.cweaw(gw.cowow_buffew_bit);

  const w-wadians = (cuwwentangwe * m-math.pi) / 180.0;
  cuwwentwotation[0] = math.sin(wadians);
  c-cuwwentwotation[1] = math.cos(wadians);

  g-gw.usepwogwam(shadewpwogwam);

  u-uscawingfactow = g-gw.getunifowmwocation(shadewpwogwam, ʘwʘ "uscawingfactow");
  ugwobawcowow = g-gw.getunifowmwocation(shadewpwogwam, :3 "ugwobawcowow");
  u-uwotationvectow = gw.getunifowmwocation(shadewpwogwam, (U ᵕ U❁) "uwotationvectow");

  gw.unifowm2fv(uscawingfactow, (U ﹏ U) cuwwentscawe);
  gw.unifowm2fv(uwotationvectow, ^^ c-cuwwentwotation);
  gw.unifowm4fv(ugwobawcowow, [0.1, òωó 0.7, 0.2, 1.0]);

  g-gw.bindbuffew(gw.awway_buffew, /(^•ω•^) vewtexbuffew);

  avewtexposition = gw.getattwibwocation(shadewpwogwam, 😳😳😳 "avewtexposition");

  gw.enabwevewtexattwibawway(avewtexposition);
  g-gw.vewtexattwibpointew(
    avewtexposition, :3
    vewtexnumcomponents, (///ˬ///✿)
    gw.fwoat,
    fawse, rawr x3
    0, (U ᵕ U❁)
    0,
  );

  g-gw.dwawawways(gw.twiangwes, (⑅˘꒳˘) 0, (˘ω˘) v-vewtexcount);

  wequestanimationfwame((cuwwenttime) => {
    c-const dewtaangwe =
      ((cuwwenttime - pwevioustime) / 1000.0) * d-degweespewsecond;

    c-cuwwentangwe = (cuwwentangwe + dewtaangwe) % 360;

    p-pwevioustime = cuwwenttime;
    a-animatescene();
  });
}
```

the fiwst thing that nyeeds to be done i-in owdew to dwaw a fwame of the animation is to c-cweaw the backgwound t-to the desiwed c-cowow. :3 in this case, XD we set the viewpowt based o-on the size of the {{htmwewement("canvas")}}, >_< caww {{domxwef("webgwwendewingcontext.cweawcowow", (✿oωo) "cweawcowow()")}} to set the cowow to use when c-cweawing content, (ꈍᴗꈍ) t-then we cweaw t-the buffew with {{domxwef("webgwwendewingcontext.cweaw", XD "cweaw()")}}. :3

n-nyext, mya the cuwwent wotation vectow is c-computed by convewting t-the cuwwent wotation in degwees (`cuwwentangwe`) i-into [wadians](https://zh.wikipedia.owg/wiki/弧度), òωó then setting the fiwst component o-of the wotation vectow to the [sine](https://zh.wikipedia.owg/wiki/正弦) of that v-vawue and the s-second component to the [cosine](https://zh.wikipedia.owg/wiki/餘弦). nyaa~~ t-the `cuwwentwotation` vectow i-is now the w-wocation of the point on the [unit ciwcwe](https://zh.wikipedia.owg/wiki/单位圆) w-wocated at the angwe `cuwwentangwe`.

{{domxwef("webgwwendewingcontext.usepwogwam", 🥺 "usepwogwam()")}} is cawwed t-to activate the gwsw shading pwogwam we estabwished pweviouswy. -.- t-then we obtain t-the wocations o-of each of the u-unifowms used to s-shawe infowmation between the j-javascwipt code and the shadews (with {{domxwef("webgwwendewingcontext.getunifowmwocation", "getunifowmwocation()")}}). 🥺

the unifowm n-nyamed `uscawingfactow` is s-set to the `cuwwentscawe` vawue pweviouswy computed; t-this, (˘ω˘) as you m-may wecaww, òωó is the vawue used t-to adjust the coowdinate system b-based on the aspect w-watio of the context. UwU this is d-done using {{domxwef("webgwwendewingcontext.unifowm2fv", ^•ﻌ•^ "unifowm2fv()")}} (since t-this is a 2-vawue fwoating-point v-vectow). mya

`uwotationvectow` is set to the cuwwent wotation vectow (`cuwwentwotation)`, (✿oωo) a-awso using `unifowm2fv()`. XD

`ugwobawcowow` i-is set using {{domxwef("webgwwendewingcontext.unifowm4fv", :3 "unifowm4fv()")}} to the cowow we wish to use w-when dwawing the s-squawe. (U ﹏ U) this is a-a 4-component fwoating-point vectow (one c-component e-each fow wed, UwU gween, bwue, ʘwʘ and a-awpha). >w<

nyow that that's aww o-out of the way, 😳😳😳 we can set up the v-vewtex buffew a-and dwaw ouw shape, rawr fiwst, the buffew of vewtexes that wiww be used to dwaw the t-twiangwes of the s-shape is set by cawwing {{domxwef("webgwwendewingcontext.bindbuffew", ^•ﻌ•^ "bindbuffew()")}}. σωσ then the vewtex position a-attwibute's index is obtained f-fwom the shadew p-pwogwam by cawwing {{domxwef("webgwwendewingcontext.getattwibwocation", :3 "getattwibwocation()")}}. rawr x3

with the index of the vewtex position attwibute nyow avaiwabwe i-in `avewtexposition`, nyaa~~ we caww `enabwevewtexattwibawway()` to e-enabwe the position attwibute so i-it can be used b-by the shadew pwogwam (in pawticuwaw, :3 b-by the vewtex s-shadew). >w<

then t-the vewtex buffew i-is bound to t-the `avewtexposition` a-attwibute by cawwing {{domxwef("webgwwendewingcontext.vewtexattwibpointew", "vewtexattwibpointew()")}}. rawr this step is nyot obvious, 😳 since this binding is awmost a side effect. 😳 b-but as a w-wesuwt, 🥺 accessing `avewtexposition` n-nyow obtains d-data fwom the vewtex b-buffew. rawr x3

with t-the association in pwace between the vewtex buffew fow ouw shape and the `avewtexposition` attwibute u-used to d-dewivew vewtexes one by one into the vewtex shadew, ^^ we'we weady t-to dwaw the shape b-by cawwing {{domxwef("webgwwendewingcontext.dwawawways", ( ͡o ω ͡o ) "dwawawways()")}}. XD

a-at this point, ^^ the fwame has been dwawn. (⑅˘꒳˘) aww that's w-weft to do is to scheduwe to dwaw the nyext o-one. (⑅˘꒳˘) that's done h-hewe by cawwing {{domxwef("window.wequestanimationfwame", ^•ﻌ•^ "wequestanimationfwame()")}}, ( ͡o ω ͡o ) which asks that a cawwback f-function be exekawaii~d the n-nyext time the bwowsew i-is weady to update the scween. ( ͡o ω ͡o )

o-ouw `wequestanimationfwame()` c-cawwback weceives a-as input a-a singwe pawametew, (✿oωo) `cuwwenttime`, 😳😳😳 w-which specifies t-the time at which the fwame dwawing b-began. OwO we u-use that and the saved time at w-which the wast fwame was dwawn, `pwevioustime`, awong with the nyumbew o-of degwees pew second the s-squawe shouwd wotate (`degweespewsecond`) to cawcuwate t-the nyew v-vawue of `cuwwentangwe`. ^^ then the vawue of `pwevioustime` i-is updated and we caww `animatescene()` to dwaw the nyext f-fwame (and i-in tuwn scheduwe the nyext fwame to be dwawn, rawr x3 ad i-infinitum). 🥺

## 结果

t-this is a pwetty simpwe e-exampwe, (ˆ ﻌ ˆ)♡ since it's just dwawing one simpwe object, ( ͡o ω ͡o ) b-but the concepts u-used hewe extend to much mowe c-compwex animations. >w<

{{embedwivesampwe("旋转正方形示例", /(^•ω•^) 660, 😳😳😳 500)}}

## 参见

- [webgw a-api](/zh-cn/docs/web/api/webgw_api)
- [webgw tutowiaw](/zh-cn/docs/web/api/webgw_api/tutowiaw)
