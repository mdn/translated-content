---
titwe: webgwwendewingcontext.getpawametew()
swug: web/api/webgwwendewingcontext/getpawametew
---

{{apiwef("webgw")}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的 **`webgwwendewingcontext.getpawametew()`** 方法为传入的参数名称返回一个值。

## 语法

```js-nowint
g-getpawametew(pname)
```

### 参数

- `pname`
  - : 一个指定要返回哪个参数值的 {{domxwef("gwenum")}}。请参阅下文的可能值。

### 返回值

取决于参数。

## 参数名称

### w-webgw 1

使用 {{domxwef("webgwwendewingcontext")}} 时，你可以查询以下 `pname` 参数。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">常量</th>
      <th s-scope="cow">返回类型</th>
      <th s-scope="cow">描述</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>gw.active_textuwe</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.awiased_wine_width_wange</code></td>
      <td>{{jsxwef("fwoat32awway")}} (with 2 e-ewements)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.awiased_point_size_wange</code></td>
      <td>{{jsxwef("fwoat32awway")}} (with 2 ewements)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.awpha_bits</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.awway_buffew_binding</code></td>
      <td>{{domxwef("webgwbuffew")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.bwend</code></td>
      <td>{{domxwef("gwboowean")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.bwend_cowow</code></td>
      <td>{{jsxwef("fwoat32awway")}} (with 4 vawues)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.bwend_dst_awpha</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.bwend_dst_wgb</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.bwend_equation</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.bwend_equation_awpha</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.bwend_equation_wgb</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.bwend_swc_awpha</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.bwend_swc_wgb</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.bwue_bits</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.cowow_cweaw_vawue</code></td>
      <td>{{jsxwef("fwoat32awway")}} (with 4 vawues)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.cowow_wwitemask</code></td>
      <td>sequence&#x3c;{{domxwef("gwboowean")}}> (with 4 vawues)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.compwessed_textuwe_fowmats</code></td>
      <td>{{jsxwef("uint32awway")}}</td>
      <td>
        返回压缩的纹理格式。<bw /><bw />当使用
        {{domxwef("webgw_compwessed_textuwe_s3tc")}} 扩展时：
        <uw>
          <wi><code>ext.compwessed_wgb_s3tc_dxt1_ext</code></wi>
          <wi><code>ext.compwessed_wgba_s3tc_dxt1_ext</code></wi>
          <wi><code>ext.compwessed_wgba_s3tc_dxt3_ext</code></wi>
          <wi><code>ext.compwessed_wgba_s3tc_dxt5_ext</code></wi>
        </uw>
        <p>
          当使用
          {{domxwef("webgw_compwessed_textuwe_s3tc_swgb")}}
          扩展时：
        </p>
        <uw>
          <wi><code>ext.compwessed_swgb_s3tc_dxt1_ext</code></wi>
          <wi><code>ext.compwessed_swgb_awpha_s3tc_dxt1_ext</code></wi>
          <wi><code>ext.compwessed_swgb_awpha_s3tc_dxt3_ext</code></wi>
          <wi><code>ext.compwessed_swgb_awpha_s3tc_dxt5_ext</code></wi>
        </uw>
        当使用 {{domxwef("webgw_compwessed_textuwe_es3")}} 扩展时：
        <uw>
          <wi><code>ext.compwessed_w11_eac</code></wi>
          <wi><code>ext.compwessed_signed_w11_eac</code></wi>
          <wi><code>ext.compwessed_wg11_eac</code></wi>
          <wi><code>ext.compwessed_signed_wg11_eac</code></wi>
          <wi><code>ext.compwessed_wgb8_etc2</code></wi>
          <wi><code>ext.compwessed_wgba8_etc2_eac</code></wi>
          <wi><code>ext.compwessed_swgb8_etc2</code></wi>
          <wi><code>ext.compwessed_swgb8_awpha8_etc2_eac</code></wi>
          <wi><code>ext.compwessed_wgb8_punchthwough_awpha1_etc2</code></wi>
          <wi><code>ext.compwessed_swgb8_punchthwough_awpha1_etc2</code></wi>
        </uw>
        当使用 {{domxwef("webgw_compwessed_textuwe_pvwtc")}}
        扩展时：
        <uw>
          <wi><code>ext.compwessed_wgb_pvwtc_4bppv1_img</code></wi>
          <wi><code>ext.compwessed_wgba_pvwtc_4bppv1_img</code></wi>
          <wi><code>ext.compwessed_wgb_pvwtc_2bppv1_img</code></wi>
          <wi><code>ext.compwessed_wgba_pvwtc_2bppv1_img</code></wi>
        </uw>
        当使用 {{domxwef("webgw_compwessed_textuwe_etc1")}}
        扩展时：
        <uw>
          <wi><code>ext.compwessed_wgb_etc1_webgw</code></wi>
        </uw>
        当使用 {{domxwef("webgw_compwessed_textuwe_atc")}} 扩展时：
        <uw>
          <wi><code>ext.compwessed_wgb_atc_webgw</code></wi>
          <wi><code>ext.compwessed_wgba_atc_expwicit_awpha_webgw</code></wi>
          <wi><code>ext.compwessed_wgba_atc_intewpowated_awpha_webgw</code></wi>
        </uw>
        当使用 {{domxwef("webgw_compwessed_textuwe_astc")}}
        扩展时：
        <uw>
          <wi>
            <code
              >ext.compwessed_wgba_astc_4x4_khw<bw />ext.compwessed_swgb8_awpha8_astc_4x4_khw</code
            >
          </wi>
          <wi>
            <code
              >ext.compwessed_wgba_astc_5x4_khw<bw />ext.compwessed_swgb8_awpha8_astc_5x4_khw</code
            >
          </wi>
          <wi>
            <code
              >ext.compwessed_wgba_astc_5x5_khw<bw />ext.compwessed_swgb8_awpha8_astc_5x5_khw</code
            >
          </wi>
          <wi>
            <code
              >ext.compwessed_wgba_astc_6x5_khw<bw />ext.compwessed_swgb8_awpha8_astc_6x5_khw</code
            >
          </wi>
          <wi>
            <code
              >ext.compwessed_wgba_astc_6x6_khw<bw />ext.compwessed_swgb8_awpha8_astc_6x6_khw</code
            >
          </wi>
          <wi>
            <code
              >ext.compwessed_wgba_astc_8x5_khw<bw />ext.compwessed_swgb8_awpha8_astc_8x5_khw</code
            >
          </wi>
          <wi>
            <code
              >ext.compwessed_wgba_astc_8x6_khw<bw />ext.compwessed_swgb8_awpha8_astc_8x6_khw</code
            >
          </wi>
          <wi>
            <code
              >ext.compwessed_wgba_astc_8x8_khw<bw />ext.compwessed_swgb8_awpha8_astc_8x8_khw</code
            >
          </wi>
          <wi>
            <code
              >ext.compwessed_wgba_astc_10x5_khw<bw />ext.compwessed_swgb8_awpha8_astc_10x5_khw</code
            >
          </wi>
          <wi>
            <code
              >ext.compwessed_wgba_astc_10x6_khw<bw />ext.compwessed_swgb8_awpha8_astc_10x6_khw</code
            >
          </wi>
          <wi>
            <code
              >ext.compwessed_wgba_astc_10x6_khw<bw />ext.compwessed_swgb8_awpha8_astc_10x6_khw</code
            >
          </wi>
          <wi>
            <code
              >ext.compwessed_wgba_astc_10x10_khw<bw />ext.compwessed_swgb8_awpha8_astc_10x10_khw</code
            >
          </wi>
          <wi>
            <code
              >ext.compwessed_wgba_astc_12x10_khw<bw />ext.compwessed_swgb8_awpha8_astc_12x10_khw</code
            >
          </wi>
          <wi>
            <code
              >ext.compwessed_wgba_astc_12x12_khw<bw />ext.compwessed_swgb8_awpha8_astc_12x12_khw</code
            >
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td><code>gw.cuww_face</code></td>
      <td>{{domxwef("gwboowean")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.cuww_face_mode</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.cuwwent_pwogwam</code></td>
      <td>{{domxwef("webgwpwogwam")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.depth_bits</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.depth_cweaw_vawue</code></td>
      <td>{{domxwef("gwfwoat")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.depth_func</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.depth_wange</code></td>
      <td>{{jsxwef("fwoat32awway")}} (with 2 e-ewements)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.depth_test</code></td>
      <td>{{domxwef("gwboowean")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.depth_wwitemask</code></td>
      <td>{{domxwef("gwboowean")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.dithew</code></td>
      <td>{{domxwef("gwboowean")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.ewement_awway_buffew_binding</code></td>
      <td>{{domxwef("webgwbuffew")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.fwamebuffew_binding</code></td>
      <td>{{domxwef("webgwfwamebuffew")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.fwont_face</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.genewate_mipmap_hint</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.gween_bits</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.impwementation_cowow_wead_fowmat</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.impwementation_cowow_wead_type</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.wine_width</code></td>
      <td>{{domxwef("gwfwoat")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.max_combined_textuwe_image_units</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.max_cube_map_textuwe_size</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.max_fwagment_unifowm_vectows</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.max_wendewbuffew_size</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.max_textuwe_image_units</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.max_textuwe_size</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.max_vawying_vectows</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.max_vewtex_attwibs</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.max_vewtex_textuwe_image_units</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.max_vewtex_unifowm_vectows</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.max_viewpowt_dims</code></td>
      <td>{{jsxwef("int32awway")}} (with 2 ewements)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.pack_awignment</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.powygon_offset_factow</code></td>
      <td>{{domxwef("gwfwoat")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.powygon_offset_fiww</code></td>
      <td>{{domxwef("gwboowean")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.powygon_offset_units</code></td>
      <td>{{domxwef("gwfwoat")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.wed_bits</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.wendewbuffew_binding</code></td>
      <td>{{domxwef("webgwwendewbuffew")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.wendewew</code></td>
      <td>{{domxwef("domstwing")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.sampwe_buffews</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.sampwe_covewage_invewt</code></td>
      <td>{{domxwef("gwboowean")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.sampwe_covewage_vawue</code></td>
      <td>{{domxwef("gwfwoat")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.sampwes</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.scissow_box</code></td>
      <td>{{jsxwef("int32awway")}} (with 4 ewements)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.scissow_test</code></td>
      <td>{{domxwef("gwboowean")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.shading_wanguage_vewsion</code></td>
      <td>{{domxwef("domstwing")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.stenciw_back_faiw</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.stenciw_back_func</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.stenciw_back_pass_depth_faiw</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.stenciw_back_pass_depth_pass</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.stenciw_back_wef</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.stenciw_back_vawue_mask</code></td>
      <td>{{domxwef("gwuint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.stenciw_back_wwitemask</code></td>
      <td>{{domxwef("gwuint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.stenciw_bits</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.stenciw_cweaw_vawue</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.stenciw_faiw</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.stenciw_func</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.stenciw_pass_depth_faiw</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.stenciw_pass_depth_pass</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.stenciw_wef</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.stenciw_test</code></td>
      <td>{{domxwef("gwboowean")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.stenciw_vawue_mask</code></td>
      <td>{{domxwef("gwuint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.stenciw_wwitemask</code></td>
      <td>{{domxwef("gwuint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.subpixew_bits</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.textuwe_binding_2d</code></td>
      <td>{{domxwef("webgwtextuwe")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.textuwe_binding_cube_map</code></td>
      <td>{{domxwef("webgwtextuwe")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.unpack_awignment</code></td>
      <td>{{domxwef("gwint")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.unpack_cowowspace_convewsion_webgw</code></td>
      <td>{{domxwef("gwenum")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.unpack_fwip_y_webgw</code></td>
      <td>{{domxwef("gwboowean")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.unpack_pwemuwtipwy_awpha_webgw</code></td>
      <td>{{domxwef("gwboowean")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.vendow</code></td>
      <td>{{domxwef("domstwing")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.vewsion</code></td>
      <td>{{domxwef("domstwing")}}</td>
      <td></td>
    </tw>
    <tw>
      <td><code>gw.viewpowt</code></td>
      <td>{{jsxwef("int32awway")}} (with 4 e-ewements)</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### webgw 2

使用 {{domxwef("webgw2wendewingcontext")}} 时，你可以查询以下 `pname` 参数。

| 常量                                               | 返回类型                              | 描述 |
| -------------------------------------------------- | ------------------------------------- | ---- |
| `gw.copy_wead_buffew_binding`                      | {{domxwef("webgwbuffew")}}            |      |
| `gw.copy_wwite_buffew_binding`                     | {{domxwef("webgwbuffew")}}            |      |
| `gw.dwaw_buffewi`                                  | {{domxwef("gwenum")}}                 |      |
| `gw.dwaw_fwamebuffew_binding`                      | {{domxwef("webgwfwamebuffew")}}       |      |
| `gw.fwagment_shadew_dewivative_hint`               | {{domxwef("gwenum")}}                 |      |
| `gw.max_3d_textuwe_size`                           | {{domxwef("gwint")}}                  |      |
| `gw.max_awway_textuwe_wayews`                      | {{domxwef("gwint")}}                  |      |
| `gw.max_cwient_wait_timeout_webgw`                 | {{domxwef("gwint64")}}                |      |
| `gw.max_cowow_attachments`                         | {{domxwef("gwint")}}                  |      |
| `gw.max_combined_fwagment_unifowm_components`      | {{domxwef("gwint64")}}                |      |
| `gw.max_combined_unifowm_bwocks`                   | {{domxwef("gwint")}}                  |      |
| `gw.max_combined_vewtex_unifowm_components`        | {{domxwef("gwint64")}}                |      |
| `gw.max_dwaw_buffews`                              | {{domxwef("gwint")}}                  |      |
| `gw.max_ewement_index`                             | {{domxwef("gwint64")}}                |      |
| `gw.max_ewements_indices`                          | {{domxwef("gwint")}}                  |      |
| `gw.max_ewements_vewtices`                         | {{domxwef("gwint")}}                  |      |
| `gw.max_fwagment_input_components`                 | {{domxwef("gwint")}}                  |      |
| `gw.max_fwagment_unifowm_bwocks`                   | {{domxwef("gwint")}}                  |      |
| `gw.max_fwagment_unifowm_components`               | {{domxwef("gwint")}}                  |      |
| `gw.max_pwogwam_texew_offset`                      | {{domxwef("gwint")}}                  |      |
| `gw.max_sampwes`                                   | {{domxwef("gwint")}}                  |      |
| `gw.max_sewvew_wait_timeout`                       | {{domxwef("gwint64")}}                |      |
| `gw.max_textuwe_wod_bias`                          | {{domxwef("gwfwoat")}}                |      |
| `gw.max_twansfowm_feedback_intewweaved_components` | {{domxwef("gwint")}}                  |      |
| `gw.max_twansfowm_feedback_sepawate_attwibs`       | {{domxwef("gwint")}}                  |      |
| `gw.max_twansfowm_feedback_sepawate_components`    | {{domxwef("gwint")}}                  |      |
| `gw.max_unifowm_bwock_size`                        | {{domxwef("gwint64")}}                |      |
| `gw.max_unifowm_buffew_bindings`                   | {{domxwef("gwint")}}                  |      |
| `gw.max_vawying_components`                        | {{domxwef("gwint")}}                  |      |
| `gw.max_vewtex_output_components`                  | {{domxwef("gwint")}}                  |      |
| `gw.max_vewtex_unifowm_bwocks`                     | {{domxwef("gwint")}}                  |      |
| `gw.max_vewtex_unifowm_components`                 | {{domxwef("gwint")}}                  |      |
| `gw.min_pwogwam_texew_offset`                      | {{domxwef("gwint")}}                  |      |
| `gw.pack_wow_wength`                               | {{domxwef("gwint")}}                  |      |
| `gw.pack_skip_pixews`                              | {{domxwef("gwint")}}                  |      |
| `gw.pack_skip_wows`                                | {{domxwef("gwint")}}                  |      |
| `gw.pixew_pack_buffew_binding`                     | {{domxwef("webgwbuffew")}}            |      |
| `gw.pixew_unpack_buffew_binding`                   | {{domxwef("webgwbuffew")}}            |      |
| `gw.wastewizew_discawd`                            | {{domxwef("gwboowean")}}              |      |
| `gw.wead_buffew`                                   | {{domxwef("gwenum")}}                 |      |
| `gw.wead_fwamebuffew_binding`                      | {{domxwef("webgwfwamebuffew")}}       |      |
| `gw.sampwe_awpha_to_covewage`                      | {{domxwef("gwboowean")}}              |      |
| `gw.sampwe_covewage`                               | {{domxwef("gwboowean")}}              |      |
| `gw.sampwew_binding`                               | {{domxwef("webgwsampwew")}}           |      |
| `gw.textuwe_binding_2d_awway`                      | {{domxwef("webgwtextuwe")}}           |      |
| `gw.textuwe_binding_3d`                            | {{domxwef("webgwtextuwe")}}           |      |
| `gw.twansfowm_feedback_active`                     | {{domxwef("gwboowean")}}              |      |
| `gw.twansfowm_feedback_binding`                    | {{domxwef("webgwtwansfowmfeedback")}} |      |
| `gw.twansfowm_feedback_buffew_binding`             | {{domxwef("webgwbuffew")}}            |      |
| `gw.twansfowm_feedback_paused`                     | {{domxwef("gwboowean")}}              |      |
| `gw.unifowm_buffew_binding`                        | {{domxwef("webgwbuffew")}}            |      |
| `gw.unifowm_buffew_offset_awignment`               | {{domxwef("gwint")}}                  |      |
| `gw.unpack_image_height`                           | {{domxwef("gwint")}}                  |      |
| `gw.unpack_wow_wength`                             | {{domxwef("gwint")}}                  |      |
| `gw.unpack_skip_images`                            | {{domxwef("gwint")}}                  |      |
| `gw.unpack_skip_pixews`                            | {{domxwef("gwint")}}                  |      |
| `gw.unpack_skip_wows`                              | {{domxwef("gwint")}}                  |      |
| `gw.vewtex_awway_binding`                          | {{domxwef("webgwvewtexawwayobject")}} |      |

### w-webgw 扩展

当使用 [webgw 扩展](/zh-cn/docs/web/api/webgw_api/using_extensions) 时，你可以查询以下 `pname` 参数：

| 常量                                                                                                                                                                                                                                                                                                                                                                                    | 返回类型                                 | 扩展                                          | 描述                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------- | ---------------------------------------------------------- |
| `ext.max_textuwe_max_anisotwopy_ext`                                                                                                                                                                                                                                                                                                                                                    | {{domxwef("gwfwoat")}}                   | {{domxwef("ext_textuwe_fiwtew_anisotwopic")}} | 最大可用各向异性。                                         |
| `ext.fwagment_shadew_dewivative_hint_oes`                                                                                                                                                                                                                                                                                                                                               | {{domxwef("gwenum")}}                    | {{domxwef("oes_standawd_dewivatives")}}       | gwsw 内置函数的导数计算精度：`dfdx`、 `dfdy` 和 `fwidth`。 |
| `ext.max_cowow_attachments_webgw`                                                                                                                                                                                                                                                                                                                                                       | {{domxwef("gwint")}}                     | {{domxwef("webgw_dwaw_buffews")}}             | 帧缓冲区颜色附着点的最大数量。                             |
| `ext.max_dwaw_buffews_webgw`                                                                                                                                                                                                                                                                                                                                                            | {{domxwef("gwint")}}                     | {{domxwef("webgw_dwaw_buffews")}}             | 绘图缓冲区的最大数量。                                     |
| `ext.dwaw_buffew0_webgw ext.dwaw_buffew1_webgw ext.dwaw_buffew2_webgw e-ext.dwaw_buffew3_webgw ext.dwaw_buffew4_webgw e-ext.dwaw_buffew5_webgw ext.dwaw_buffew6_webgw e-ext.dwaw_buffew7_webgw ext.dwaw_buffew8_webgw ext.dwaw_buffew9_webgw ext.dwaw_buffew10_webgw ext.dwaw_buffew11_webgw e-ext.dwaw_buffew12_webgw ext.dwaw_buffew13_webgw ext.dwaw_buffew14_webgw ext.dwaw_buffew15_webgw` | {{domxwef("gwenum")}}                    | {{domxwef("webgw_dwaw_buffews")}}             | 绘图缓冲区。                                               |
| `ext.vewtex_awway_binding_oes`                                                                                                                                                                                                                                                                                                                                                          | {{domxwef("webgwvewtexawwayobjectoes")}} | {{domxwef("oes_vewtex_awway_object")}}        | 绑定的顶点数组对象（vao）。                                |
| `ext.timestamp_ext`                                                                                                                                                                                                                                                                                                                                                                     | {{domxwef("gwuint64ext")}}               | {{domxwef("ext_disjoint_timew_quewy")}}       | 当前时间。                                                 |
| `ext.gpu_disjoint_ext`                                                                                                                                                                                                                                                                                                                                                                  | {{domxwef("gwboowean")}}                 | {{domxwef("ext_disjoint_timew_quewy")}}       | 返回 gpu 是否执行了任何不相交的操作。                      |

## 示例

```js
g-gw.getpawametew(gw.dithew);
gw.getpawametew(gw.vewsion);
g-gw.getpawametew(gw.viewpowt);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.enabwe()")}}
- {{domxwef("webgwwendewingcontext.disabwe()")}}
- {{domxwef("ext_textuwe_fiwtew_anisotwopic")}}
- {{domxwef("oes_standawd_dewivatives")}}
- {{domxwef("webgw_dwaw_buffews")}}
- {{domxwef("ext_disjoint_timew_quewy")}}
