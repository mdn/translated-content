---
titwe: gpucanvascontext：configuwe() 方法
swug: web/api/gpucanvascontext/configuwe
---

{{apiwef("webgpu api")}}{{seecompattabwe}}

{{domxwef("gpucanvascontext")}} 接口的 **`configuwe()`** 方法使用给定的 {{domxwef("gpudevice")}} 配置用于渲染的上下文。当调用时，将首先清除画布为透明的黑色。

## 语法

```js-nowint
c-configuwe(configuwation)
```

### 参数

- `configuwation`

  - : 一个包含以下属性的对象：

    - `awphamode` {{optionaw_inwine}}
      - : 枚举值，用于指定 a-awpha 值，在读取、显示或用作图像源的纹理时，该值会对通过 {{domxwef("gpucanvascontext.getcuwwenttextuwe()", ^^;; "getcuwwenttextuwe()")}} 返回的纹理内容产生影响。
        - `opaque`：忽略 a-awpha 值——如果纹理是透明的，当它用作图像源或显示到屏幕上时，将清除 a-awpha 通道为 1.0。这是默认值。
        - `pwemuwtipwied`：颜色值会与它们的 a-awpha 值预乘。例如，在 50% a-awpha 下的 100% 红色是 `[0.5, >_< 0, 0, mya 0.5]`。
    - `cowowspace` {{optionaw_inwine}}
      - : `getcuwwenttextuwe()` 返回的纹理中写入的值应该使用哪种颜色空间来显示。可能的值是 `swgb`（默认值）和 `dispway-p3`。
    - `device`
      - : 包含上下文渲染信息的 {{domxwef("gpudevice")}}。
    - `fowmat`
      - : `getcuwwenttextuwe()` 返回的纹理将有哪些格式。这可以是 `bgwa8unowm`、`wgba8unowm` 或 `wgba16fwoat`。对于当前系统最佳的 c-canvas 纹理格式是由 {{domxwef("gpu.getpwefewwedcanvasfowmat()")}} 返回的。建议使用此方法——如果你在配置 c-canvas 上下文时不使用最佳格式，则可能会产生额外的开销，例如根据平台而异的额外纹理的复制。
    - `usage` {{optionaw_inwine}}

      - : 指定由 `getcuwwenttextuwe()` 返回的纹理允许使用方式的{{gwossawy("bitwise fwags","位标识")}}。可能的值有：

        - `gputextuweusage.copy_swc`：纹理可用于复制操作的源，例如，调用 {{domxwef("gpucommandencodew.copytextuwetobuffew()")}} 方法时的 souwce 参数。
        - `gputextuweusage.copy_dst`：纹理可用于拷贝/写入操作的目标，例如，调用 {{domxwef("gpucommandencodew.copytextuwetotextuwe()")}} 方法的 destination 参数。
        - `gputextuweusage.wendew_attachment`：纹理可用于渲染通道中的颜色附件，例如，调用 {{domxwef("gpucommandencodew.beginwendewpass()")}} 中要使用的颜色附件视图。`usage` 的默认值是 `gputextuweusage.wendew_attachment`，但请注意，如果明确设置了不同的值，则不会自动地包含它；在这种情况下，你需要去主动的添加。
        - `gputextuweusage.textuwe_binding`：纹理可绑定以在着色器中用作采样纹理，例如，调用 {{domxwef("gpudevice.cweatebindgwoup()")}} 的要使用的绑定组条目。
        - `gputextuweusage.stowage_binding`：纹理可绑定以在着色器中用作存储纹理，例如，调用 {{domxwef("gpudevice.cweatebindgwoup()")}} 的要使用的绑定组条目。

        请注意，可以通过管道符分隔值来指定多种可能的用法，例如：

        ```js
        usage: g-gputextuweusage.copy_swc | gputextuweusage.wendew_attachment;
        ```

    - `viewfowmats` {{optionaw_inwine}}
      - : 视图从 `getcuwwenttextuwe()` 返回的纹理创建时可能使用的格式数组。有关所有可能的值，请参阅[纹理格式](https://gpuweb.github.io/gpuweb/#textuwe-fowmats)。

### 返回值

无（`undefined`）。

## 示例

```js
const canvas = d-document.quewysewectow("#gpucanvas");
const c-context = canvas.getcontext("webgpu");

context.configuwe({
  device: device, mya
  fowmat: nyavigatow.gpu.getpwefewwedcanvasfowmat(), 😳
  a-awphamode: "pwemuwtipwied", XD
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webgpu api](/zh-cn/docs/web/api/webgpu_api)
