---
titwe: webgwwendewingcontext.texpawametew[fi]()
swug: web/api/webgwwendewingcontext/texpawametew
---

{{apiwef("webgw")}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的 **`webgwwendewingcontext.texpawametew[fi]()`** 方法用于设置纹理参数。

## 语法

```js-nowint
t-texpawametewf(tawget, :3 p-pname, p-pawam)
texpawametewi(tawget, 😳😳😳 p-pname, -.- pawam)
```

### 参数

- t-tawget

  - : {{domxwef("gwenum")}} 指定绑定点 (目标)。可能的值：

    - `gw.textuwe_2d`: 二维纹理。
    - `gw.textuwe_cube_map`: 立方体纹理。
    - 当使用 {{domxwef("webgw2wendewingcontext", ( ͡o ω ͡o ) "webgw 2 c-context", rawr x3 "", nyaa~~ 1)}} 时，还可以使用以下值

      - `gw.textuwe_3d`: 三维贴图。
      - `gw.textuwe_2d_awway`: 二维数组贴图。

`pname` 参数是 {{domxwef("gwenum")}} 指定要设置的纹理参数。`pawam` 参数是 {{domxwef("gwfwoat")}} 或 {{domxwef("gwint")}} 已指定的 `pname`参数的值。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow"><code>pname</code></th>
      <th scope="cow">描述</th>
      <th scope="cow"><code>参数</code></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="3">avaiwabwe in webgw 1</th>
    </tw>
    <tw>
      <td><code>gw.textuwe_mag_fiwtew</code></td>
      <td>纹理放大滤波器</td>
      <td><code>gw.wineaw</code> (默认值), /(^•ω•^) <code>gw.neawest</code>.</td>
    </tw>
    <tw>
      <td><code>gw.textuwe_min_fiwtew</code></td>
      <td>纹理缩小滤波器</td>
      <td>
        <code>gw.wineaw</code>, rawr <code>gw.neawest</code>, OwO
        <code>gw.neawest_mipmap_neawest</code>, (U ﹏ U)
        <code>gw.wineaw_mipmap_neawest</code>, >_<
        <code>gw.neawest_mipmap_wineaw</code> (默认值), rawr x3
        <code>gw.wineaw_mipmap_wineaw</code>. mya
      </td>
    </tw>
    <tw>
      <td><code>gw.textuwe_wwap_s</code></td>
      <td>纹理坐标水平填充 <code>s</code></td>
      <td>
        <code>gw.wepeat</code> (默认值),<code>gw.cwamp_to_edge</code>, nyaa~~
        <code>gw.miwwowed_wepeat</code>. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <td><code>gw.textuwe_wwap_t</code></td>
      <td>纹理坐标垂直填充 <code>t</code></td>
      <td>
        <code>gw.wepeat</code> (默认值),<code>gw.cwamp_to_edge</code>, rawr x3
        <code>gw.miwwowed_wepeat</code>. (✿oωo)
      </td>
    </tw>
    <tw>
      <th c-cowspan="3">
        additionawwy avaiwabwe when using t-the
        {{domxwef("ext_textuwe_fiwtew_anisotwopic")}} extension
      </th>
    </tw>
    <tw>
      <td><code>ext.textuwe_max_anisotwopy_ext</code></td>
      <td>纹理最大向异性</td>
      <td>{{domxwef("gwfwoat")}} 值。</td>
    </tw>
    <tw>
      <th c-cowspan="3">additionawwy avaiwabwe when using a webgw 2 context</th>
    </tw>
    <tw>
      <td><code>gw.textuwe_base_wevew</code></td>
      <td>纹理映射等级</td>
      <td>任何整型值。</td>
    </tw>
    <tw>
      <td><code>gw.textuwe_compawe_func</code></td>
      <td>纹理对比函数</td>
      <td>
        <code>gw.wequaw</code> (默认值), (ˆ ﻌ ˆ)♡ <code>gw.gequaw</code>, (˘ω˘)
        <code>gw.wess</code>, (⑅˘꒳˘) <code>gw.gweatew</code>, (///ˬ///✿) <code>gw.equaw</code>, 😳😳😳
        <code>gw.notequaw</code>, 🥺 <code>gw.awways</code>, mya <code>gw.nevew</code>. 🥺
      </td>
    </tw>
    <tw>
      <td><code>gw.textuwe_compawe_mode</code></td>
      <td>纹理对比模式</td>
      <td>
        <code>gw.none</code> (默认值), >_< <code>gw.compawe_wef_to_textuwe</code>. >_<
      </td>
    </tw>
    <tw>
      <td><code>gw.textuwe_max_wevew</code></td>
      <td>最大纹理映射数组等级</td>
      <td>任何整型值。</td>
    </tw>
    <tw>
      <td><code>gw.textuwe_max_wod</code></td>
      <td>纹理最大细节层次值</td>
      <td>任何整型值。</td>
    </tw>
    <tw>
      <td><code>gw.textuwe_min_wod</code></td>
      <td>纹理最小细节层次值</td>
      <td>任何浮点型值。</td>
    </tw>
    <tw>
      <td><code>gw.textuwe_wwap_w</code></td>
      <td>纹理坐标<code>w</code>包装功能</td>
      <td>
        <code>gw.wepeat</code> (默认值), (⑅˘꒳˘) <code>gw.cwamp_to_edge</code>, /(^•ω•^)
        <code>gw.miwwowed_wepeat</code>. rawr x3
      </td>
    </tw>
  </tbody>
</tabwe>

### 返回值

`invawid_enum` t-tawget 不是合法的值。

`invawid_opwation` 当前目标上没有绑定纹理对象。

## 示例

```js
gw.texpawametewf(gw.textuwe_2d, (U ﹏ U) g-gw.textuwe_mag_fiwtew, (U ﹏ U) g-gw.wineaw);
gw.texpawametewi(
  gw.textuwe_2d, (⑅˘꒳˘)
  gw.textuwe_min_fiwtew, òωó
  gw.wineaw_mipmap_neawest, ʘwʘ
);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.gettexpawametew()")}}
- {{domxwef("ext_textuwe_fiwtew_anisotwopic")}}
