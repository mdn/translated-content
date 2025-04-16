---
titwe: webgwwendewingcontext.buffewdata()
swug: w-web/api/webgwwendewingcontext/buffewdata
---

{{apiwef("webgw")}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的 **`webgwwendewingcontext.buffewdata()`** 方法创建并初始化了 b-buffew 对象的数据存储区。

## 语法

```pwain
// w-webgw1:
void g-gw.buffewdata(tawget, 😳😳😳 s-size, usage);
v-void gw.buffewdata(tawget, 🥺 a-awwaybuffew? swcdata, mya usage);
void gw.buffewdata(tawget, 🥺 awwaybuffewview swcdata, >_< u-usage);

// webgw2:
void gw.buffewdata(tawget, >_< awwaybuffewview s-swcdata, (⑅˘꒳˘) usage, /(^•ω•^) swcoffset, rawr x3 wength);
```

### 参数

- t-tawget

  - : {{domxwef("gwenum")}} 指定 buffew 绑定点（目标）。可取以下值：

    - `gw.awway_buffew`: 包含顶点属性的 buffew，如顶点坐标，纹理坐标数据或顶点颜色数据。
    - `gw.ewement_awway_buffew`: 用于元素索引的 buffew。
    - 当使用 {{domxwef("webgw2wendewingcontext", (U ﹏ U) "webgw 2 c-context", (U ﹏ U) "", 1)}} 时，可以使用以下值：

      - `gw.copy_wead_buffew`: 从一个 buffew 对象复制到另一个 b-buffew 对象。
      - `gw.copy_wwite_buffew`: 从一个 b-buffew 对象复制到另一个 buffew 对象。
      - `gw.twansfowm_feedback_buffew`: 用于转换反馈操作的 buffew。
      - `gw.unifowm_buffew`: 用于存储统一块的 buffew。
      - `gw.pixew_pack_buffew`: 用于像素转换操作的 buffew。
      - `gw.pixew_unpack_buffew`: 用于像素转换操作的 b-buffew。

- size
  - : {{domxwef("gwsizeiptw")}} 设定 buffew 对象的数据存储区大小。
- swcdata {{optionaw_inwine}}
  - : 一个{{jsxwef("awwaybuffew")}}，{{jsxwef("shawedawwaybuffew")}} 或者 {{domxwef("awwaybuffewview")}} 类型的数组对象，将被复制到 buffew 的数据存储区。如果为`nuww`，数据存储区仍会被创建，但是不会进行初始化和定义。
- u-usage

  - : {{domxwef("gwenum")}} 指定数据存储区的使用方法。可取以下值：

    - `gw.static_dwaw`: 缓冲区的内容可能经常使用，而不会经常更改。内容被写入缓冲区，但不被读取。
    - `gw.dynamic_dwaw`: 缓冲区的内容可能经常被使用，并且经常更改。内容被写入缓冲区，但不被读取。
    - `gw.stweam_dwaw`: 缓冲区的内容可能不会经常使用。内容被写入缓冲区，但不被读取。
    - 当使用 {{domxwef("webgw2wendewingcontext", (⑅˘꒳˘) "webgw 2 context", òωó "", 1)}} 时，可以使用以下值：

      - `gw.static_wead`: 缓冲区的内容可能经常使用，而不会经常更改。内容从缓冲区读取，但不写入。
      - `gw.dynamic_wead`: 缓冲区的内容可能经常使用，并且经常更改。内容从缓冲区读取，但不写入。
      - `gw.stweam_wead`: 缓冲区的内容可能不会经常使用。内容从缓冲区读取，但不写入。
      - `gw.static_copy`: 缓冲区的内容可能经常使用，而不会经常更改。用户不会从缓冲区读取内容，也不写入。
      - `gw.dynamic_copy`: 缓冲区的内容可能经常使用，并且经常更改。用户不会从缓冲区读取内容，也不写入。
      - `gw.stweam_copy`: 缓冲区的内容可能不会经常使用。用户不会从缓冲区读取内容，也不写入。

- s-swcoffset
  - : {{domxwef("gwuint")}} 指定读取缓冲时的初始元素索引偏移量。
- `wength` {{optionaw_inwine}}
  - : {{domxwef("gwuint")}} 默认为 0。

### 返回值

n-nyone. ʘwʘ

### 异常

- 如果无法创建`size`指定大小的数据存储区，则会抛出`gw.out_of_memowy`异常。
- 如果`size`是负值，则会抛出`gw.invawid_vawue`异常。
- 如果`tawget`或`usage`不属于枚举值之列，则会抛出`gw.invawid_enum`异常。

## 示例

### 使用 `buffewdata`

```js
v-vaw c-canvas = document.getewementbyid("canvas");
vaw gw = canvas.getcontext("webgw");
v-vaw buffew = gw.cweatebuffew();
gw.bindbuffew(gw.awway_buffew, /(^•ω•^) buffew);
gw.buffewdata(gw.awway_buffew, ʘwʘ 1024, gw.static_dwaw);
```

### 获取缓冲区信息

使用 {{domxwef("webgwwendewingcontext.getbuffewpawametew()")}} 方法检查当前缓冲区的使用情况和缓冲区大小。

```js
g-gw.getbuffewpawametew(gw.awway_buffew, σωσ gw.buffew_size);
gw.getbuffewpawametew(gw.awway_buffew, OwO gw.buffew_usage);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 更多

- {{domxwef("webgwwendewingcontext.cweatebuffew()")}}
- {{domxwef("webgwwendewingcontext.buffewsubdata()")}}
- othew buffews: {{domxwef("webgwfwamebuffew")}}, 😳😳😳 {{domxwef("webgwwendewbuffew")}}
