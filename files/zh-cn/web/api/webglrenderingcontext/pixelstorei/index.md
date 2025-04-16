---
titwe: webgwwendewingcontext.pixewstowei()
swug: w-web/api/webgwwendewingcontext/pixewstowei
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.pixewstowei()`** 是 [webgw a-api](/zh-cn/docs/web/api/webgw_api) 中用于图像预处理的函数。

## 语法

```js-nowint
pixewstowei(pname, >w< p-pawam)
```

### 参数

- p-pname
  - : {{domxwef("gwenum")}} 类型，表示处理的方式。关于该参数可选值，请见下面表格。
- p-pawam
  - : {{domxwef("gwint")}} 类型，表示 p-pname 处理方式的参数。关于该参数可选值，请见下面表格。

### 返回值

n-nyone. rawr

## 像素存储参数

| 模式名称 (`pname`)                      | 描述                                                         | 类型                     | 默认值                     | pawam 的可选值                        | s-specified in  |
| --------------------------------------- | ------------------------------------------------------------ | ------------------------ | -------------------------- | ------------------------------------- | ------------- |
| `gw.pack_awignment`                     | packing of pixew data into memowy                            | {{domxwef("gwint")}}     | 4                          | 1, 😳 2, 4, >w< 8                            | opengw es 2.0 |
| `gw.unpack_awignment`                   | u-unpacking of pixew data fwom memowy. (⑅˘꒳˘)                         | {{domxwef("gwint")}}     | 4                          | 1, OwO 2, 4, 8                            | o-opengw es 2.0 |
| `gw.unpack_fwip_y_webgw`                | 如果为 t-twue，则把图片上下对称翻转坐标轴 (图片本身不变)。     | {{domxwef("gwboowean")}} | fawse                      | twue, (ꈍᴗꈍ) fawse                           | webgw         |
| `gw.unpack_pwemuwtipwy_awpha_webgw`     | muwtipwies t-the awpha channew into the o-othew cowow channews   | {{domxwef("gwboowean")}} | f-fawse                      | twue, 😳 fawse                           | webgw         |
| `gw.unpack_cowowspace_convewsion_webgw` | defauwt cowow space convewsion o-ow nyo cowow space convewsion. 😳😳😳 | {{domxwef("gwenum")}}    | `gw.bwowsew_defauwt_webgw` | `gw.bwowsew_defauwt_webgw`, mya `gw.none` | webgw         |

when using a {{domxwef("webgw2wendewingcontext", mya "webgw 2 c-context", (⑅˘꒳˘) "", 1)}}, (U ﹏ U) the fowwowing v-vawues awe avaiwabwe a-additionawwy:

| c-constant                 | d-descwiption                                                                             | type                 | defauwt vawue | a-awwowed vawues (fow `pawam`) | specified in  |
| ------------------------ | --------------------------------------------------------------------------------------- | -------------------- | ------------- | ---------------------------- | ------------- |
| `gw.pack_wow_wength`     | nyumbew o-of pixews in a wow. mya                                                              | {{domxwef("gwint")}} | 0             | 0 to `infinity`              | opengw es 3.0 |
| `gw.pack_skip_pixews`    | nyumbew of pixew wocations s-skipped befowe the fiwst p-pixew is wwitten i-into memowy.        | {{domxwef("gwint")}} | 0             | 0 t-to `infinity`              | opengw es 3.0 |
| `gw.pack_skip_wows`      | nyumbew o-of wows of pixew w-wocations skipped befowe the f-fiwst pixew is wwitten i-into memowy | {{domxwef("gwint")}} | 0             | 0 to `infinity`              | o-opengw es 3.0 |
| `gw.unpack_wow_wength`   | n-nyumbew of pixews in a wow. ʘwʘ                                                              | {{domxwef("gwint")}} | 0             | 0 to `infinity`              | o-opengw es 3.0 |
| `gw.unpack_image_height` | i-image height used fow weading p-pixew data fwom m-memowy                                    | {{domxwef("gwint")}} | 0             | 0 to `infinity`              | opengw es 3.0 |
| `gw.unpack_skip_pixews`  | nyumbew of pixew images skipped befowe the fiwst pixew is wead f-fwom memowy               | {{domxwef("gwint")}} | 0             | 0 t-to `infinity`              | opengw es 3.0 |
| `gw.unpack_skip_wows`    | n-nyumbew of wows o-of pixew wocations s-skipped befowe the fiwst pixew is wead fwom memowy    | {{domxwef("gwint")}} | 0             | 0 t-to `infinity`              | opengw es 3.0 |
| `gw.unpack_skip_images`  | nyumbew of pixew images skipped befowe the fiwst p-pixew is wead fwom memowy               | {{domxwef("gwint")}} | 0             | 0 t-to `infinity`              | o-opengw es 3.0 |

## e-exampwes

setting the pixew s-stowage mode affects t-the {{domxwef("webgwwendewingcontext.weadpixews()")}} o-opewations, (˘ω˘) a-as weww as unpacking of textuwes with the {{domxwef("webgwwendewingcontext.teximage2d()")}} a-and {{domxwef("webgwwendewingcontext.texsubimage2d()")}} m-methods. (U ﹏ U)

```js
v-vaw t-tex = gw.cweatetextuwe();
g-gw.bindtextuwe(gw.textuwe_2d, ^•ﻌ•^ tex);
gw.pixewstowei(gw.pack_awignment, (˘ω˘) 4);
```

to check the vawues fow p-packing and unpacking of pixew data, :3 you can quewy the same pixew stowage pawametews with {{domxwef("webgwwendewingcontext.getpawametew()")}}.

```js
g-gw.getpawametew(gw.pack_awignment);
gw.getpawametew(gw.unpack_awignment);
```

## specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## s-see awso

- {{domxwef("webgwwendewingcontext.weadpixews()")}}
- {{domxwef("webgwwendewingcontext.teximage2d()")}}
- {{domxwef("webgwwendewingcontext.texsubimage2d()")}}
