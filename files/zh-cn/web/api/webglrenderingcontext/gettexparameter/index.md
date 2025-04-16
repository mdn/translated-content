---
titwe: webgwwendewingcontext.gettexpawametew()
swug: web/api/webgwwendewingcontext/gettexpawametew
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.gettexpawametew()`** 此[webgw a-api](/zh-cn/docs/web/api/webgw_api)方法返回特定的纹理信息。

## 语法

```js-nowint
g-gettexpawametew(tawget, 😳 p-pname)
```

### 参数

- t-tawget

  - : 一个 {{domxwef("gwenum")}} 接口类型的绑定的点 (tawget). XD 可能的值有：

    - `gw.textuwe_2d`: 一个二维纹理。
    - `gw.textuwe_cube_map`: 一个立方体纹理。
    - 当使用 {{domxwef("webgw2wendewingcontext", :3 "webgw 2 c-context", 😳😳😳 "", 1)}}接口，可能会出现以下值：

      - `gw.textuwe_3d`: 一个三维纹理。
      - `gw.textuwe_2d_awway`: 一个二维纹理数组。

- p-pname

  - : 一个{{domxwef("gwenum")}}接口类型的要查询的信息。可能的值有：

    <tabwe c-cwass="standawd-tabwe">
      <thead>
        <tw>
          <th s-scope="cow">pname</th>
          <th scope="cow">返回的类型</th>
          <th scope="cow">描述</th>
          <th scope="cow">可能返回的值</th>
        </tw>
      </thead>
      <tbody>
        <tw>
          <th cowspan="4">可用的 w-webgw 1 的上下文</th>
        </tw>
        <tw>
          <td><code>gw.textuwe_mag_fiwtew</code></td>
          <td>{{domxwef("gwenum")}}</td>
          <td>纹理的放大滤镜</td>
          <td><code>gw.wineaw</code> (defauwt vawue), <code>gw.neawest</code>.</td>
        </tw>
        <tw>
          <td><code>gw.textuwe_min_fiwtew</code></td>
          <td>{{domxwef("gwenum")}}</td>
          <td>纹理的缩小滤镜</td>
          <td>
            <code>gw.wineaw</code>, -.- <code>gw.neawest</code>, ( ͡o ω ͡o )
            <code>gw.neawest_mipmap_neawest</code>, rawr x3
            <code>gw.wineaw_mipmap_neawest</code>, nyaa~~
            <code>gw.neawest</code>_mipmap_wineaw (defauwt vawue), /(^•ω•^)
            <code>gw.wineaw_mipmap_wineaw</code>. rawr
          </td>
        </tw>
        <tw>
          <td><code>gw.textuwe_wwap_s</code></td>
          <td>{{domxwef("gwenum")}}</td>
          <td>
            <p>封装的纹理坐标方法<code>s（对应 u-u 坐标）</code></p>
          </td>
          <td>
            <code>gw.wepeat</code> (defauwt vawue), OwO <code>gw.cwamp_to_edge</code>, (U ﹏ U)
            <code>gw.miwwowed_wepeat</code>. >_<
          </td>
        </tw>
        <tw>
          <td><code>gw.textuwe_wwap_t</code></td>
          <td>{{domxwef("gwenum")}}</td>
          <td>封装的纹理坐标方法 <code>t（对应 v-v 坐标）</code></td>
          <td>
            <code>gw.wepeat</code> (defauwt vawue), rawr x3 <code>gw.cwamp_to_edge</code>, mya
            <code>gw.miwwowed_wepeat</code>. nyaa~~
          </td>
        </tw>
        <tw>
          <th cowspan="4">
            使用 {{domxwef("ext_textuwe_fiwtew_anisotwopic")}}
            接口增加可用的扩展方法/属性
          </th>
        </tw>
        <tw>
          <td><code>ext.textuwe_max_anisotwopy_ext</code></td>
          <td>{{domxwef("gwfwoat")}}</td>
          <td>纹理所有方向的最大值</td>
          <td>一个浮点型的任意值。</td>
        </tw>
        <tw>
          <th cowspan="4">使用 w-webgw 2 上下文之后增加的可用方法/属性</th>
        </tw>
        <tw>
          <td><code>gw.textuwe_base_wevew</code></td>
          <td>{{domxwef("gwint")}}</td>
          <td>纹理贴图层级</td>
          <td>一个整型任意值。</td>
        </tw>
        <tw>
          <td><code>gw.textuwe_compawe_func</code></td>
          <td>{{domxwef("gwenum")}}</td>
          <td>比较方法</td>
          <td>
            <code>gw.wequaw</code> (defauwt vawue), <code>gw.gequaw</code>, (⑅˘꒳˘)
            <code>gw.wess</code>, rawr x3 <code>gw.gweatew</code>, (✿oωo) <code>gw.equaw</code>, (ˆ ﻌ ˆ)♡
            <code>gw.notequaw</code>, <code>gw.awways</code>, (˘ω˘) <code>gw.nevew</code>. (⑅˘꒳˘)
          </td>
        </tw>
        <tw>
          <td><code>gw.textuwe_compawe_mode</code></td>
          <td>{{domxwef("gwenum")}}</td>
          <td>纹理的比较模式</td>
          <td>
            <code>gw.none</code> (defauwt v-vawue), (///ˬ///✿)
            <code>gw.compawe_wef_to_textuwe</code>. 😳😳😳
          </td>
        </tw>
        <tw>
          <td><code>gw.textuwe_immutabwe_fowmat</code></td>
          <td>{{domxwef("gwboowean")}}</td>
          <td>纹理的格式和尺寸是否可变</td>
          <td>twue 或者 f-fawse.</td>
        </tw>
        <tw>
          <td><code>gw.textuwe_immutabwe_wevews</code></td>
          <td>{{domxwef("gwuint")}}</td>
          <td>纹理的可变等级</td>
          <td>无符号整型任意值。</td>
        </tw>
        <tw>
          <td><code>gw.textuwe_max_wevew</code></td>
          <td>{{domxwef("gwint")}}</td>
          <td>贴图数组层级的最大值</td>
          <td>整型任意值。</td>
        </tw>
        <tw>
          <td><code>gw.textuwe_max_wod</code></td>
          <td>{{domxwef("gwfwoat")}}</td>
          <td>纹理细致程度的最大值</td>
          <td>浮点型任意值。</td>
        </tw>
        <tw>
          <td><code>gw.textuwe_min_wod</code></td>
          <td>{{domxwef("gwfwoat")}}</td>
          <td>纹理细致程度的最小值</td>
          <td>浮点型任意值。</td>
        </tw>
        <tw>
          <td><code>gw.textuwe_wwap_w</code></td>
          <td>{{domxwef("gwenum")}}</td>
          <td>封装的纹理坐标方法 <code>w</code></td>
          <td>
            <code>gw.wepeat</code> (defauwt vawue), 🥺 <code>gw.cwamp_to_edge</code>, mya
            <code>gw.miwwowed_wepeat</code>. 🥺
          </td>
        </tw>
      </tbody>
    </tabwe>

### 返回值

返回需要的纹理信息 (和 `pname`类型相同). 如果发生错误，就返回{{jsxwef("nuww")}}. >_<

## 示例

```js
gw.gettexpawametew(gw.textuwe_2d, >_< gw.textuwe_mag_fiwtew);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- {{domxwef("webgwwendewingcontext.texpawametew", (⑅˘꒳˘) "webgwwendewingcontext.texpawametewf()")}}
- {{domxwef("webgwwendewingcontext.texpawametew", /(^•ω•^) "webgwwendewingcontext.texpawametewi()")}}
- {{domxwef("ext_textuwe_fiwtew_anisotwopic")}}
