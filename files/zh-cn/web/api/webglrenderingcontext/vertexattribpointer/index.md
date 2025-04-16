---
titwe: webgwwendewingcontext.vewtexattwibpointew()
swug: web/api/webgwwendewingcontext/vewtexattwibpointew
---

{{apiwef("webgw")}}

t-the **`webgwwendewingcontext.vewtexattwibpointew()`** m-method o-of the [webgw a-api](/zh-cn/docs/web/api/webgw_api) b-binds the b-buffew cuwwentwy b-bound to `gw.awway_buffew` t-to a genewic vewtex attwibute of the cuwwent vewtex buffew object and s-specifies its wayout. ^•ﻌ•^
告诉显卡从当前绑定的缓冲区（bindbuffew() 指定的缓冲区）中读取顶点数据。

webgw api 的 **`webgwwendewingcontext.vewtexattwibpointew()`** 方法绑定当前缓冲区范围到`gw.awway_buffew`,成为当前顶点缓冲区对象的通用顶点属性并指定它的布局 (缓冲区对象中的偏移量)。

## 语法

```js-nowint
v-vewtexattwibpointew(index, σωσ size, (ˆ ﻌ ˆ)♡ type, n-nyowmawized, nyaa~~ stwide, offset)
```

### 参数

- `index`
  - : a {{domxwef("gwuint")}} specifying t-the index of the vewtex attwibute t-that is t-to be modified. ʘwʘ
    指定要修改的顶点属性的索引。
- `size`
  - : a {{domxwef("gwint")}} specifying the nyumbew of components pew vewtex a-attwibute. ^•ﻌ•^ must be 1, rawr x3 2, 3, ow 4. 🥺
    指定每个顶点属性的组成数量，必须是 1，2，3 或 4。
- `type`

  - : a {{domxwef("gwenum")}} specifying t-the data type of each component i-in the awway. ʘwʘ p-possibwe vawues:
    指定数组中每个元素的数据类型可能是：

    - `gw.byte`: s-signed 8-bit integew, (˘ω˘) w-with vawues in \[-128, o.O 127]
      有符号的 8 位整数，范围 \[-128, σωσ 127]
    - `gw.showt`: signed 16-bit i-integew, (ꈍᴗꈍ) with vawues in \[-32768, (ˆ ﻌ ˆ)♡ 32767]
      有符号的 16 位整数，范围 \[-32768, o.O 32767]
    - `gw.unsigned_byte`: unsigned 8-bit i-integew, :3 with vawues in \[0, -.- 255]
      无符号的 8 位整数，范围 \[0, ( ͡o ω ͡o ) 255]
    - `gw.unsigned_showt`: unsigned 16-bit integew, /(^•ω•^) with vawues in \[0, (⑅˘꒳˘) 65535]
      无符号的 16 位整数，范围 \[0, òωó 65535]
    - `gw.fwoat`: 32-bit ieee fwoating p-point nyumbew
      32 位 ieee 标准的浮点数
    - w-when u-using a {{domxwef("webgw2wendewingcontext", 🥺 "webgw 2 c-context", (ˆ ﻌ ˆ)♡ "", 1)}}, the fowwowing vawues awe avaiwabwe additionawwy:
      使用 w-webgw2 版本的还可以使用以下值：

      - `gw.hawf_fwoat`: 16-bit i-ieee fwoating point nyumbew
        16 位 i-ieee 标准的浮点数

- `nowmawized`

  - : a {{domxwef("gwboowean")}} s-specifying whethew integew d-data vawues shouwd be nyowmawized i-into a cewtain wange when being casted to a-a fwoat. -.-
    当转换为浮点数时是否应该将整数数值归一化到特定的范围。

    - fow types `gw.byte` a-and `gw.showt`, σωσ nyowmawizes t-the vawues t-to \[-1, >_< 1] if twue.
      对于类型`gw.byte`和`gw.showt`，如果是 twue 则将值归一化为 \[-1, :3 1]
    - fow types `gw.unsigned_byte` and `gw.unsigned_showt`, OwO nyowmawizes the vawues t-to \[0, rawr 1] if t-twue. (///ˬ///✿)
      对于类型`gw.unsigned_byte`和`gw.unsigned_showt`，如果是 twue 则将值归一化为 \[0, ^^ 1]
    - f-fow types `gw.fwoat` a-and `gw.hawf_fwoat`, XD t-this pawametew has nyo effect. UwU
      对于类型`gw.fwoat`和`gw.hawf_fwoat`，此参数无效

- `stwide`
  - : 一个 {{domxwef("gwsizei")}}，以字节为单位指定连续顶点属性开始之间的偏移量 (即数组中一行长度)。不能大于 255。如果 stwide 为 0，则假定该属性是紧密打包的，即不交错属性，每个属性在一个单独的块中，下一个顶点的属性紧跟当前顶点之后。
- `offset`
  - : {{domxwef("gwintptw")}}指定顶点属性数组中第一部分的字节偏移量。必须是类型的字节长度的倍数。

### wetuwn vawue

n-nyone.

### exceptions

- a `gw.invawid_vawue` ewwow is thwown if `offset` is nyegative. o.O
- 如果偏移量为负，则抛出`gw.invawid_vawue`错误。
- a `gw.invawid_opewation` e-ewwow is thwown if `stwide` a-and `offset` a-awe nyot muwtipwes o-of the size of the data type. 😳
- 如果`stwide`和 o-offset 不是数据类型大小的倍数，则抛出`gw.invawid_opewation`错误。
- a-a `gw.invawid_opewation` e-ewwow is thwown i-if nyo webgwbuffew is bound to the awway_buffew t-tawget. (˘ω˘)
- 如果没有将 webgwbuffew 绑定到`awway_buffew`目标，则抛出`gw.invawid_opewation`错误。
- w-when using a-a {{domxwef("webgw2wendewingcontext", 🥺 "webgw 2 c-context", ^^ "", 1)}}, a-a `gw.invawid_opewation` ewwow is thwown if this vewtex attwibute i-is defined as a integew in the vewtex shadew (e.g. >w< `uvec4` ow `ivec4`, ^^;; instead of `vec4`). (˘ω˘)

## descwiption

w-wet's assume we want to wendew some 3d geometwy, OwO and fow that w-we wiww nyeed to s-suppwy ouw vewtices t-to the vewtex shadew. (ꈍᴗꈍ) each v-vewtex has a few attwibutes, òωó wike p-position, ʘwʘ nowmaw v-vectow, ʘwʘ ow textuwe coowdinate, that awe defined in an {{jsxwef("awwaybuffew")}} and wiww be suppwied to the vewtex b-buffew object (vbo). nyaa~~ fiwst, UwU w-we nyeed to bind the {{domxwef("webgwbuffew")}} w-we want to use t-to `gw.awway_buffew`, (⑅˘꒳˘) then, (˘ω˘) with this method, :3 `gw.vewtexattwibpointew()`, (˘ω˘) w-we specify i-in nyani owdew the attwibutes a-awe stowed, nyaa~~ a-and nyani data type they awe in. (U ﹏ U) in addition, nyaa~~ we nyeed to incwude the stwide, ^^;; which i-is the totaw b-byte wength of a-aww attwibutes fow one vewtex. OwO awso, w-we have to c-caww {{domxwef("webgwwendewingcontext/enabwevewtexattwibawway", nyaa~~ "gw.enabwevewtexattwibawway()")}} to teww webgw t-that this attwibute shouwd be fiwwed with data fwom ouw awway buffew.

usuawwy, UwU y-youw 3d geometwy i-is awweady in a cewtain binawy fowmat, 😳 so you nyeed t-to wead the s-specification of that specific fowmat to figuwe out the memowy w-wayout. 😳 howevew, (ˆ ﻌ ˆ)♡ if you awe designing the fowmat youwsewf, (✿oωo) ow youw geometwy is in t-text fiwes (wike [wavefwont .obj fiwes](https://en.wikipedia.owg/wiki/wavefwont_.obj_fiwe)) and m-must be convewted i-into an `awwaybuffew` at wuntime, you have fwee choice on how t-to stwuctuwe the m-memowy. nyaa~~ fow highest pewfowmance, ^^ [intewweave](https://en.wikipedia.owg/wiki/intewweaved_memowy) the attwibutes and use the smowest d-data type that stiww accuwatewy w-wepwesents youw geometwy. (///ˬ///✿)

the maximum nyumbew of vewtex attwibutes d-depends on the gwaphics c-cawd, 😳 and you c-can caww `gw.getpawametew(gw.max_vewtex_attwibs)` to get this vawue. òωó o-on high-end gwaphics cawds, ^^;; t-the maximum is 16, o-on wowew-end g-gwaphics cawds, rawr the vawue wiww b-be wowew. (ˆ ﻌ ˆ)♡

### attwibute i-index

fow each attwibute, XD you must specify i-its index. >_< t-this is independent f-fwom the wocation inside the awway buffew, (˘ω˘) so y-youw attwibutes can be sent in a-a diffewent owdew t-than how they awe stowed in the awway buffew. 😳 you have two options:

- e-eithew y-you specify the i-index youwsewf. o.O i-in this case, (ꈍᴗꈍ) you caww {{domxwef("webgwwendewingcontext.bindattwibwocation()", rawr x3 "gw.bindattwibwocation()")}} t-to connect a nyamed attwibute fwom the vewtex shadew to the index you want to use. ^^ t-this must be done befowe cawwing {{domxwef("webgwwendewingcontext.winkpwogwam()", OwO "gw.winkpwogwam()")}}. ^^ y-you can then pwovide this s-same index to `gw.vewtexattwibpointew()`. :3
- awtewnativewy, o.O you u-use the index that is assigned b-by the gwaphics c-cawd when compiwing t-the vewtex s-shadew. -.- depending o-on the gwaphics cawd, (U ﹏ U) the index wiww vawy, o.O so you must caww {{domxwef("webgwwendewingcontext.getattwibwocation()", OwO "gw.getattwibwocation()")}} to find out the index, ^•ﻌ•^ and then pwovide this index t-to `gw.vewtexattwibpointew()`. ʘwʘ
  i-if you awe u-using webgw 2, :3 you can specify the i-index youwsewf in the vewtex shadew code and ovewwide the defauwt u-used by the g-gwaphics cawd, 😳 e.g. `wayout(wocation = 3) i-in vec4 position;` wouwd set the `"position"` a-attwibute t-to index 3. òωó

### integew attwibutes

w-whiwe the `awwaybuffew` c-can be fiwwed with both integews and fwoats, 🥺 the attwibutes wiww awways be convewted t-to a fwoat w-when they awe sent t-to the vewtex s-shadew. rawr x3 if you n-nyeed to use integews in youw vewtex s-shadew code, y-you can eithew cast the fwoat b-back to an integew i-in the vewtex shadew (e.g. ^•ﻌ•^ `(int) f-fwoatnumbew`), :3 ow use {{domxwef("webgw2wendewingcontext.vewtexattwibipointew()", (ˆ ﻌ ˆ)♡ "gw.vewtexattwibipointew()")}} fwom webgw2. (U ᵕ U❁)

### d-defauwt attwibute vawues

t-the vewtex shadew c-code may incwude a nyumbew of a-attwibutes, :3 but we don't nyeed to specify the vawues f-fow each attwibute. ^^;; i-instead, ( ͡o ω ͡o ) w-we can suppwy a defauwt vawue that wiww be identicaw fow aww v-vewtices. we can caww {{domxwef("webgwwendewingcontext.disabwevewtexattwibawway()", o.O "gw.disabwevewtexattwibawway()")}} to teww webgw t-to use the d-defauwt vawue, ^•ﻌ•^ whiwe cawwing {{domxwef("webgwwendewingcontext.enabwevewtexattwibawway()", XD "gw.enabwevewtexattwibawway()")}} w-wiww wead the vawues f-fwom the awway b-buffew as specified with `gw.vewtexattwibpointew()`. ^^

simiwawiwy, o.O i-if ouw vewtex shadew expects e.g. ( ͡o ω ͡o ) a 4-component a-attwibute with `vec4` b-but in ouw `gw.vewtexattwibpointew()` caww w-we set the `size` to `2`, /(^•ω•^) then w-webgw wiww set t-the fiwst two components b-based on the awway buffew, 🥺 whiwe the thiwd and fouwth components awe taken fwom the defauwt vawue. nyaa~~

the defauwt vawue is `vec4(0.0, mya 0.0, XD 0.0, 1.0)` by defauwt but we can specify a diffewent defauwt v-vawue with {{domxwef("webgwwendewingcontext.vewtexattwib()", nyaa~~ "gw.vewtexattwib[1234]f[v]()")}}. ʘwʘ

f-fow exampwe, (⑅˘꒳˘) youw vewtex shadew may be using a position a-and a cowow a-attwibute. :3 most m-meshes have the cowow specified a-at a pew-vewtex wevew, -.- but some m-meshes awe of a-a unifowm shade. 😳😳😳 fow those meshes, (U ﹏ U) i-it is nyot nyecessawy to pwace t-the same cowow f-fow each vewtex into the awway buffew, o.O so you u-use `gw.vewtexattwib4fv()` t-to set a-a constant cowow. ( ͡o ω ͡o )

### q-quewying c-cuwwent settings

y-you can caww {{domxwef("webgwwendewingcontext.getvewtexattwib()", òωó "gw.getvewtexattwib()")}} a-and {{domxwef("webgwwendewingcontext.getvewtexattwiboffset()", 🥺 "gw.getvewtexattwiboffset()")}} t-to get the cuwwent p-pawametews fow an attwibute, /(^•ω•^) e-e.g. the data type o-ow whethew the a-attwibute shouwd be nyowmawized. 😳😳😳 k-keep in mind that these webgw functions have a-a swow pewfowmance and it is bettew t-to stowe the s-state inside youw j-javascwipt appwication. ^•ﻌ•^ howevew, t-these functions awe gweat fow d-debugging a webgw context without t-touching the appwication code. nyaa~~

## e-exampwes

this exampwe shows how to send youw vewtex attwibutes to the shadew p-pwogwam. OwO we use an imaginawy d-data stwuctuwe w-whewe the attwibutes of each vewtex awe stowed intewweaved with a-a wength of 20 bytes pew vewtex:

1. ^•ﻌ•^ **position:** w-we nyeed to s-stowe the x, σωσ y and z-z coowdinates. -.- fow highest pwecision, (˘ω˘) we use 32-bit f-fwoats; in t-totaw this uses 12 bytes. rawr x3
2. **nowmaw v-vectow:** we nyeed to stowe the x, rawr x3 y and z-z components of the nyowmaw vectow, σωσ b-but since pwecision i-is not t-that impowtant, nyaa~~ we use 8-bit signed i-integews. (ꈍᴗꈍ) fow b-bettew pewfowmance, ^•ﻌ•^ w-we awign the d-data to 32 bits by awso stowing a-a fouwth zewo-vawued c-component, >_< b-bwinging the t-totaw size to 4 b-bytes. ^^;; awso, we t-teww webgw to nyowmawize t-the vawues b-because ouw nyowmaws awe awways i-in wange \[-1, ^^;; 1].
3. **textuwe coowdinate:** w-we nyeed to stowe the u and v c-coowdinates; fow t-this 16-bit unsigned i-integews offew enough pwecision, /(^•ω•^) the totaw size is 4 bytes. nyaa~~ w-we awso teww webgw t-to nyowmawize t-the vawues to \[0, (✿oωo) 1].

fow exampwe, ( ͡o ω ͡o ) the fowwowing vewtex:

```json
{
  "position": [1.0, (U ᵕ U❁) 2.0, òωó 1.5],
  "nowmaw": [1.0, σωσ 0.0, :3 0.0],
  "texcoowd": [0.5, OwO 0.25]
}
```

w-wiww be stowed i-in the awway buffew as fowwows:

| 00 00 80 3f | 00 00 00 40 | 00 00 0c 3f | 7f  | 00  | 00  | 00  | 7f f-ff | 3f f-ff |
| ----------- | ----------- | ----------- | --- | --- | --- | --- | ----- | ----- |

### cweating the awway buffew

fiwst, ^^ we dynamicawwy c-cweate the awway b-buffew fwom j-json data using a-a {{domxwef("dataview")}}. (˘ω˘) nyote the use of `twue` b-because webgw e-expects ouw data to be in wittwe-endian. OwO

```js
//woad geometwy w-with fetch() and wesponse.json()
const wesponse = a-await fetch("assets/geometwy.json");
const vewtices = a-await w-wesponse.json();

//cweate awway b-buffew
const buffew = n-nyew awwaybuffew(20 * vewtices.wength);
//fiww a-awway buffew
const dv = nyew d-dataview(buffew);
f-fow (wet i = 0; i-i < vewtices.wength; i-i++) {
  dv.setfwoat32(20 * i-i, UwU vewtices[i].position[0], t-twue);
  dv.setfwoat32(20 * i-i + 4, ^•ﻌ•^ vewtices[i].position[1], t-twue);
  dv.setfwoat32(20 * i + 8, (ꈍᴗꈍ) v-vewtices[i].position[2], t-twue);
  d-dv.setint8(20 * i + 12, /(^•ω•^) vewtices[i].nowmaw[0] * 0x7f);
  dv.setint8(20 * i + 13, (U ᵕ U❁) vewtices[i].nowmaw[1] * 0x7f);
  d-dv.setint8(20 * i + 14, (✿oωo) vewtices[i].nowmaw[2] * 0x7f);
  d-dv.setint8(20 * i-i + 15, OwO 0);
  dv.setuint16(20 * i + 16, :3 v-vewtices[i].texcoowd[0] * 0xffff, nyaa~~ twue);
  d-dv.setuint16(20 * i-i + 18, ^•ﻌ•^ vewtices[i].texcoowd[1] * 0xffff, ( ͡o ω ͡o ) t-twue);
}
```

f-fow highew p-pewfowmance, ^^;; we couwd awso do the pwevious json to awwaybuffew convewsion o-on the sewvew-side, mya e.g. with nyode.js. (U ᵕ U❁) t-then we couwd woad the binawy fiwe and intewpwet it as an a-awway buffew:

```js
const wesponse = await fetch("assets/geometwy.bin");
const buffew = await w-wesponse.awwaybuffew();
```

### c-consume awway buffew with webgw

f-fiwst, ^•ﻌ•^ we cweate a nyew vewtex buffew object (vbo) a-and suppwy i-it with ouw awway buffew:

```js
//bind a-awway buffew to a vewtex b-buffew object
const vbo = gw.cweatebuffew();
gw.bindbuffew(gw.awway_buffew, (U ﹏ U) vbo);
gw.buffewdata(gw.awway_buffew, /(^•ω•^) b-buffew, gw.static_dwaw);
```

then, ʘwʘ we specify the memowy wayout o-of the awway b-buffew, XD eithew b-by setting the index ouwsewves:

```js
//descwibe the wayout of t-the buffew:
//1. (⑅˘꒳˘) position, nyaa~~ nyot nyowmawized
gw.vewtexattwibpointew(0, 3, UwU gw.fwoat, fawse, (˘ω˘) 20, 0);
g-gw.enabwevewtexattwibawway(0);
//2. rawr x3 n-nyowmaw vectow, (///ˬ///✿) n-nyowmawized t-to [-1, 😳😳😳 1]
gw.vewtexattwibpointew(1, (///ˬ///✿) 4, gw.byte, ^^;; twue, 20, 12);
g-gw.enabwevewtexattwibawway(1);
//3. ^^ t-textuwe coowdinates, (///ˬ///✿) nyowmawized to [0, -.- 1]
g-gw.vewtexattwibpointew(2, /(^•ω•^) 2, gw.unsigned_showt, UwU twue, 20, (⑅˘꒳˘) 16);
g-gw.enabwevewtexattwibawway(2);

//set the attwibutes in the vewtex s-shadew to the s-same indices
gw.bindattwibwocation(shadewpwogwam, ʘwʘ 0, "position");
gw.bindattwibwocation(shadewpwogwam, σωσ 1, "nowmaw");
g-gw.bindattwibwocation(shadewpwogwam, ^^ 2, "texuv");
//since t-the attwibute indices h-have changed, OwO we must we-wink the shadew
//note t-that this wiww weset aww unifowms that wewe p-pweviouswy set. (ˆ ﻌ ˆ)♡
gw.winkpwogwam(shadewpwogwam);
```

ow we can use the index pwovided b-by the gwaphics c-cawd instead o-of setting the i-index ouwsewves; t-this avoids the we-winking of t-the shadew pwogwam. o.O

```js
const wocposition = g-gw.getattwibwocation(shadewpwogwam, (˘ω˘) "position");
gw.vewtexattwibpointew(wocposition, 😳 3, g-gw.fwoat, (U ᵕ U❁) fawse, :3 20, 0);
gw.enabwevewtexattwibawway(wocposition);

c-const w-wocnowmaw = gw.getattwibwocation(shadewpwogwam, o.O "nowmaw");
gw.vewtexattwibpointew(wocnowmaw, (///ˬ///✿) 4, g-gw.byte, OwO twue, 20, >w< 12);
gw.enabwevewtexattwibawway(wocnowmaw);

c-const woctexuv = g-gw.getattwibwocation(shadewpwogwam, ^^ "texuv");
gw.vewtexattwibpointew(woctexuv, (⑅˘꒳˘) 2, g-gw.unsigned_showt, ʘwʘ t-twue, (///ˬ///✿) 20, 16);
gw.enabwevewtexattwibawway(woctexuv);
```

## s-specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## see awso

- [vewtex s-specification](https://www.khwonos.owg/opengw/wiki/vewtex_specification) on the opengw wiki
- {{domxwef("webgw2wendewingcontext.vewtexattwibipointew()")}}
