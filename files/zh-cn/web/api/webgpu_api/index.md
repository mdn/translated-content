---
title: WebGPU API
slug: Web/API/WebGPU_API
---

{{SeeCompatTable}}{{DefaultAPISidebar("WebGPU API")}}

**WebGPU API** 使 web 开发人员能够使用底层系统的 GPU（图形处理器）进行高性能计算并绘制可在浏览器中渲染的复杂图形。

WebGPU 是 {{domxref("WebGL_API", "WebGL", "", 1)}} 的继任者，为现代 GPU 提供更好的兼容、支持更通用的 GPU 计算、更快的操作以及能够访问到更高级的 GPU 特性。

## 概念和使用

很公平地说，{{domxref("WebGL_API", "WebGL", "", 1)}} 在 2011 年左右首次出现后，在图形功能方面彻底改变了 web。WebGL 是 [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/) 图形库的 JavaScript 端口，允许 web 页面直接将渲染计算传递给设备的 GPU，这会以非常高的速度处理，并在 {{htmlelement("canvas")}} 内渲染结果。

WebGL 和用于编写 WebGL 着色器代码的 [GLSL](<https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)>) 语言十分负责，因此创建了几个 WebGL 库，以便更轻松地编写 WebGL 应用程序：流行的示例包括 [Three.js](https://threejs.org/)、[Babylon.js](https://www.babylonjs.com/) 以及 [PlayCanvas](https://playcanvas.com/)。开发者可以使用这些工具去构建身临其境的基于 web 3D 的游戏、音乐视频、培训和建模工具、VR 和 AR 体验等。

然而，WebGL 有一些需要解决的基本问题：

- 自 WebGL 发布以来，出现了新一代的原生 GPU API——最受欢迎的是[微软的 Direct3D 12](https://docs.microsoft.com/zh-cn/windows/win32/direct3d12/direct3d-12-graphics)、[苹果的 Metal](https://developer.apple.com/metal/) 以及[科纳斯组织的 Vulkan](https://www.vulkan.org/)——它们提供了大量新特性。并没有任何计划对 OpenGL（以及 WebGL）进行更多更新，因此它将不会获得任意这些新的特性。然而，WebGPU 将在未来添加这些新特性。
- WebGL 完全基于绘制图形并将它们渲染到画布的用例。它并不能很好地处理通用 GPU（GPGPU）的计算。GPGPU 计算对于很多不同的用例显得越来越重要，例如那些基于机器学习的模型。
- 无论是在同时渲染的对象方面，还是新渲染特性的使用方面，3D 图形应用程序的需求都在逐渐变高。

WebGPU 解决了这些问题，其提供了与现代 GPU API 兼容的更新的通用架构，它会让你感到更加丝滑。它支持图形渲染，同时对 GPGPU 计算也有一流的支持。在 CPU 端渲染单个对象的成本要低得多，并且它支持现代化的 GPU 渲染特性，例如，基于计算的粒子和用于后期处理的滤镜，如颜色效果、锐化和景深模拟。此外，它也可以直接在 GPU 上处理诸如剔除和骨骼动画模型等耗费大量计算资源的任务。

## 通用模型

设备 GPU 和运行 WebGPU API 的 web 浏览器之间有多个抽象层。理解这些，对你开始学习 WebGPU 很有用：

![提供一个基本的堆栈图，展示 WebGPU 架构中不同元素在设备上的位置关系。](basic-webgpu-stack.png)

- 物理设备具有 GPU。大多数设备仅有一个 GPU，但有些设备不止一个。可以使用的不同 GPU 类型：

  - 集显（Integrated GPU），与 CPU 位于同一主板上，并共享其内存。
  - 独显（Discrete GPU），位于单独的显卡上，与 CPU 分开。
  - 核显（Software "GPU"），在 CPU 上实现。

  > **备注：** 上图假设仅有一个 CPU 设备。

- 本机 GPU API 是操作系统（例如 macOS 上的 Metal）的一部分，是一种允许本机应用程序使用 GPU 功能的编程接口。API 指令通过驱动程序发送到 GPU（并接收响应）。一个系统可以有多个本机操作系统 API 和驱动程序可用于与 GPU 通信，尽管上述图示仅假设一个设备仅有一个本机 API/驱动器程序。
- 浏览器的 WebGPU 实现了通过本机 GPU API 与 GPU 进行通信。WebGPU 设配器在你的代码中实际上表示地是一个物理 GPU 和可利用的驱动程序。
- 逻辑设备是一种抽象，通过它，单个 web 应用程序可以以分区的方式访问 GPU 功能。逻辑设备需要提供复用的功能。因为一个物理设备的 GPU 可能同时被多个应用程序和进程使用，包括许多 web 引用程序。为了安全和逻辑上的原因，每个 web 应用程序都需要能够隔离地访问 WebGPU。

## 获取设备的访问权限

逻辑设备（通过 {{domxref("GPUDevice")}} 对象实例表示）是 web 应用程序访问所有 WebGPU 功能的基础。访问设备的过程如下：

1. {{domxref("Navigator.gpu")}} 属性（或 {{domxref("WorkerNavigator.gpu")}}，如果你在 worker 内部使用 WebGPU 功能）为当前上下文返回 {{domxref("GPU")}} 对象。
2. 通过 {{domxref("GPU.requestAdapter", "GPU.requestAdapter()")}} 方法访问适配器。该方法接受一个可选的设置对象，其允许你请求一个高性能或者低功耗的适配器。如果没有可选的对象，设备将提供对默认适配器的访问，这对于大多数用途来说足够了。
3. 设备可以通过 {{domxref("GPUAdapter.requestDevice()")}} 请求。该方法接受一个可选的对象（称为描述符），该设备可以用于指定你想要逻辑设备具有的确切特性和限制。如果没有可选的对象，所提供的设备将使用合理的通用的规则，这对于大多数用途来说够了。

将其与一些特性检测检查结合起来，可以按如下方式实现上述过程：

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const device = await adapter.requestDevice();

  //...
}
```

## 管线和着色器：WebGPU 应用程序的构成

管线（pipeline）是一个逻辑结构，其包含在你完成程序工作的可编程阶段。WebGPU 目前能够处理两种类型的管线：

- 渲染管线用于渲染图形，通常渲染到 {{htmlelement("canvas")}} 元素中，但它也可以在画面之外的地方渲染图形。它有两个主要阶段：

  - 顶点着色阶段：在该阶段中，顶点着色器（vertex shader）接受 GPU 输入的位置数据并使用像旋转、平移或透视等特定的效果将顶点在 3D 空间中定位。然后，这些顶点会被组装成基本的渲染图元，例如三角形等，然后通过 GPU 进行光栅化，计算出每个顶点应该覆盖在 canvas 上的哪些像素。

  - 片元着色阶段：在该阶段中，片元着色器（fragment shader）计算由顶点着色器生成的基本图元所覆盖的每个像素的颜色。这些计算通常使用输入，如图像（以纹理的方式）提供表面细节以及虚拟化光源的位置和颜色。

- 计算管线用于通用计算。计算管线包含单独的计算阶段，在该阶段中，计算着色器（compute shader）接受通用的数据，在指定数量的工作组之间并行处理数据，然后将结果返回到一个或者多个缓冲区。这些缓冲区可以包含任意类型的数据。

上面提到的着色器是通过 GPU 处理的指令集。WebGPU 着色器语言是用称为 [WebGPU 着色器语言](https://gpuweb.github.io/gpuweb/wgsl/)（WGSL）的低级的类 Rust 语言编写的。

你可以通过几种不同的方式去构建 WebGPU 应用程序，但该过程应包含以下步骤：

1. [创建着色器模块](#创建着色器模块)：在 WGSL 写你的着色器代码并将其打包到一个或者多个着色器模块。
2. [获取和配置 canvas 上下文](#获取和配置_canvas_上下文)：获取 `<canvas>` 元素的 `webgpu` 上下文并将其配置为从你的 GPU 逻辑设备接收有关渲染的图形信息。如果你的应用程序没有图形输出（例如仅使用计算管线），则此步骤是不需要的。
3. [创建包含你数据的资源](#创建缓冲区并将我们的三角形数据写入)：你想要通过你的管线处理的数据存储在 GPU 缓冲区或者纹理中，以供应用程序访问。
4. [创建管线](#定义和创建渲染管线)：定义管线描述符，详细地描述管线，包含所需的数据结构、绑定、着色器和资源布局，然后从中创建管线。我们的基本演示仅包含单个管线，但复杂的应用程序通常会包含多个用于不同目的的管线。
5. [允许计算/渲染通道](#运行渲染通道)：这涉及许多子步骤：
   1. 创建一个指令编码器，它可以对一组传递给 GPU 的指令执行编码。
   2. 创建一个通道编码器对象，该对象用于发出计算/渲染指令。
   3. 运行指令，指定使用哪些管线、从哪个缓冲区获取数据、运行多少次绘制操作等。
   4. 完成指令列表后，将其封装到指令缓冲区中。
   5. 通过逻辑设备的指令队列提交指令到缓冲区。

在下面的部分，我们将研究一个基本的渲染管线演示，让你知道探索它需要什么。稍后，我们也将研究一个[基础的计算管线](#基础的计算管线)示例，看看它与渲染管线有什么不同。

## 基础的渲染管线

在我们的[基础的渲染管线示例中](https://mdn.github.io/dom-examples/webgpu-render-demo/)，我们给 `<canvas>` 元素一个纯蓝色背景并且在其上绘制三角形。

### 创建着色器模块

我们使用以下着色器代码。顶点着色阶段（`@vertex` 代码块）接受包含位置和颜色的数据分块，根据给定的位置定位顶点，插入颜色，然后将数据传入到片元着色器阶段。片元着色阶段（`@fragment` 代码块）接受来自顶点着色器阶段的数据，并根据给定的颜色为顶点着色。

```js
const shaders = `
struct VertexOut {
  @builtin(position) position : vec4f,
  @location(0) color : vec4f
}

@vertex
fn vertex_main(@location(0) position: vec4f,
               @location(1) color: vec4f) -> VertexOut
{
  var output : VertexOut;
  output.position = position;
  output.color = color;
  return output;
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4f
{
  return fragData.color;
}
`;
```

> **备注：** 在我们的演示中，我们将我们的代码存储在模板字面量中，但是你可以将其存储在任何地方，以便可以很容易地将其作为文本取回，并输入到你的 WebGPU 程序中。例如，另一种常见的作法是将着色器存储在 {{htmlelement("script")}} 元素中并且使用 {{domxref("Node.textContent")}} 取回内容。用于 WGSL 的正确 MIME 类型是 `text/wgsl`。

为了确保你的着色器代码可提供给 WebGPU，你必须通过 {{domxref("GPUDevice.createShaderModule()")}} 调用，将其放入 {{domxref("GPUShaderModule")}} 中，将你的着色器代码作为描述符对象中的属性传递。例如：

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### 获取和配置 canvas 上下文

在渲染管线中，我们需要指定在哪个位置渲染图形。在这种情况下，我们获得对屏幕上 `<canvas>` 元素的引用，然后使用 `webgpu` 参数调用 {{domxref("HTMLCanvasElement.getContext()")}}，以返回它的 GPU 上下文（一个 {{domxref("GPUCanvasContext")}} 实例）。

从这里继续，我们将通过调用 {{domxref("GPUCanvasContext.configure()")}} 去配置上下文，向它传递包含渲染信息的可选对象，包括 {{domxref("GPUDevice")}}、纹理的格式以及在半透明纹理时使用的 alpha 模式。

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});
```

> **备注：** 确定纹理格式的最佳做法是使用 {{domxref("GPU.getPreferredCanvasFormat()")}} 方法；这将为用户的设备选择最有效的格式（`bgra8unorm` 或 `rgba8unorm`）。

### 创建缓冲区并将我们的三角形数据写入

接下来，我们将以 WebGPU 可以使用的数据形式向它的程序提供我们的数据。我们的数据最初在 {{jsxref("Float32Array")}} 中提供，每个三角形包含 8 个数据点——X、Y、Z、W 代表位置，R、G、B、A 代表颜色。

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

但是，我们这里有一个问题。我们需要将我们的数据放入 {{domxref("GPUBuffer")}}。在幕后，这种类型的缓冲区与 GPU 的核心非常紧密的集成在一起，以实现所需的高性能处理。由于副作用，该内存不能通过主机系统上运行的进程（例如浏览器）访问。

{{domxref("GPUBuffer")}} 通过调用 {{domxref("GPUDevice.createBuffer()")}} 创建。我们给它与 `vertices` 数组长度等同的大小，这样它可以包含所有数据，以及 `VERTEX` 和 `COPY_DST` 使用标志去指示缓冲区将用于顶点缓冲区和复制操作的目的地。

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

我们将使用映射操作将我们的数据放入 `GPUBuffer`，就像我们在[计算管线实例](#基础的计算管线)中，将数据从 GPU 读回到 JavaScript。然而，在这种情况下，我们将使用便利的 {{domxref("GPUQueue.writeBuffer()")}} 方法，它将要写入缓冲区的、要写入数据源的、每个偏移值和要写入数据的的大小作为参数（我们已经指定了数据的整个长度）。然后浏览器会找出写入数据的最高效的方式。

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### 定义和创建渲染管线

现在我们已经将数据放入缓冲区，设置的下一部分是实际创建我们的管线，为渲染准备好。

首先，我们创建一个对象，该对象描述我们顶点数据所需的布局。这完美地描述了我们在 `vertices` 数组和顶点着色阶段看到的内容——每个顶点都有位置和颜色数据。两者都采用 `float32x4` 格式（映射到 WGSL 的 `vec4<f32>` 类型），颜色数据从每个顶点的 16 字节偏移量开始。`arrayStride` 指定了步幅，表示构成每个顶点的字节数，`stepMode` 指定了应该按顶点获取数据。

```js
const vertexBuffers = [
  {
    attributes: [
      {
        shaderLocation: 0, // 位置
        offset: 0,
        format: "float32x4",
      },
      {
        shaderLocation: 1, // 颜色
        offset: 16,
        format: "float32x4",
      },
    ],
    arrayStride: 32,
    stepMode: "vertex",
  },
];
```

下一步，我们创建一个描述符对象，该对象指定了我们渲染管线阶段的配置。对于两个着色阶段，我们指定了可以在 `shaderModule` 中找到相关代码的 {{domxref("GPUShaderModule")}}，以及找到每个阶段入口点的函数名称。

此外，在顶点着色阶段，我们提供我们的 `vertexBuffers` 对象，来提供顶点数据的预期状态。在我们的片元着色阶段，我们提供了一组颜色目标说明的数组，其指示渲染的格式（这与我们之前在 canvas 上下文配置中指定的格式相匹配）。

我们也指定了一个 `primitive` 说明，在这种情况下，它只是说明了我们将要绘制的原始类型，以及 `layout` 为 `auto`。`layout` 属性定义了在管线执行期间，所有 GPU 资源（缓冲区、纹理等）的布局（结构、用途和类型。在更复杂的应用程序中，这将采用 {{domxref("GPUPipelineLayout")}} 对象的形式，使用 {{domxref("GPUDevice.createPipelineLayout()")}} 创建（你可以在我们的[基础的计算管线](#基础的计算管线)看见这个示例），它允许 GPU 提前弄清楚如何更有效地运行管线。然而，在这里我们指定了 `auto` 值，这将导致管线基于着色器代码中定义的任何绑定生成隐式绑定组布局。

```js
const pipelineDescriptor = {
  vertex: {
    module: shaderModule,
    entryPoint: "vertex_main",
    buffers: vertexBuffers,
  },
  fragment: {
    module: shaderModule,
    entryPoint: "fragment_main",
    targets: [
      {
        format: navigator.gpu.getPreferredCanvasFormat(),
      },
    ],
  },
  primitive: {
    topology: "triangle-list",
  },
  layout: "auto",
};
```

最终，我们通过传递 `pipelineDescriptor` 参数给 {{domxref("GPUDevice.createRenderPipeline()")}} 方法调用，我们创建了一个 {{domxref("GPURenderPipeline")}}。

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### 运行渲染通道

现在所有设置都已完成，实际上，我们可以运行一个渲染通道并在我们的 `<canvas>` 上进行绘制。为了对稍后发送给 GPU 的任何指令进行编码，你需要创建一个 {{domxref("GPUCommandEncoder")}} 实例，这是调用 {{domxref("GPUDevice.createCommandEncoder()")}} 完成的。

```js
const commandEncoder = device.createCommandEncoder();
```

下一步，我们通过调用 {{domxref("GPUCommandEncoder.beginRenderPass()")}} 创建 {{domxref("GPURenderPassEncoder")}} 实例来开始运行渲染通道。该方法采用一个描述符对象作为参数，唯一的必须属性是 `colorAttachments` 数组。在该实例中，我们指定了：

1. 要渲染到的纹理视图；我们通过 {{domxref("GPUTexture.createView", "context.getCurrentTexture().createView()")}} 从 `<canvas>` 创建一个新视图。
2. 纹理视图一旦加载并且在任何绘制发生之前，将“清除”视图到一个指定的颜色。这就是导致三角形后面出现蓝色背景的原因。
3. 我们还要在当前的渲染通道中存储这个颜色附件的值。

```js
const clearColor = { r: 0.0, g: 0.5, b: 1.0, a: 1.0 };

const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: clearColor,
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
```

现在，我们可以调用渲染通道编码器的方法去绘制我们的三角形：

1. 将我们的 `renderPipeline` 对象作为 {{domxref("GPURenderPassEncoder.setPipeline()")}} 方法的参数调用，以指定用于渲染管线的通道。
2. 将我们的 `vertexBuffer` 对象作为 {{domxref("GPURenderPassEncoder.setVertexBuffer()")}} 方法的参数调用，作为数据源传递给管线进行渲染。第一个参数是设置顶点缓冲区的插槽，这是对 `vertexBuffers` 数组中描述该缓冲区布局的元素索引的引。
3. {{domxref("GPURenderPassEncoder.draw()")}} 设置动态绘制。在我们的 `vertexBuffer` 中有三个顶点的数据，所以我们将顶点数值设置为 `3` 去绘制它们。

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

要完成对指令序列的编码并将它们发送给 GPU，还需要三个步骤。

1. 我们调用 {{domxref("GPURenderPassEncoder.end()")}} 方法去给渲染指令列表发出结束的信号。
2. 我们调用 {{domxref("GPUCommandEncoder.finish()")}} 方法去完成对发出指令序列的记录，并将其封装到 {{domxref("GPUCommandBuffer")}} 对象中。
3. 我们提交 {{domxref("GPUCommandBuffer")}} 到设备的指令队列中（通过 {{domxref("GPUQueue")}} 实例表示）已发送给 GPU。这个设备的队列可以通过 {{domxref("GPUDevice.queue")}} 属性获取，并可以通过 {{domxref("GPUQueue.submit()")}} 调用将 {{domxref("GPUCommandBuffer")}} 实例数组增加到队列中。

这三个步骤可以通过以下两行来实现。

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## 基础的计算管线

在我们的[基础计算演示中](https://mdn.github.io/dom-examples/webgpu-compute-demo/)，我们让 GPU 计算一些值，将它们存储到输出缓存中，将数据复制到暂存缓冲区，然后映射该暂存缓冲区，以便数据可以读出到 JavaScript 并且记录到控制台。

该应用程序与基础的渲染演示有着相似的结构。我们以与之前相同的方式创建一个 {{domxref("GPUDevice")}} 引用，并通过调用 {{domxref("GPUDevice.createShaderModule()")}} 将我们的着色器代码封装到 {{domxref("GPUShaderModule")}}。这里的区别在于我们的着色器代码仅有一个着色阶段，`@compute` 阶段：

```js
// 定义全局的缓冲区大小
const BUFFER_SIZE = 1000;

const shader = `
@group(0) @binding(0)
var<storage, read_write> output: array<f32>;

@compute @workgroup_size(64)
fn main(
  @builtin(global_invocation_id)
  global_id : vec3u,

  @builtin(local_invocation_id)
  local_id : vec3u,
) {
  // Avoid accessing the buffer out of bounds
  if (global_id.x >= ${BUFFER_SIZE}) {
    return;
  }

  output[global_id.x] =
    f32(global_id.x) * 1000. + f32(local_id.x);
}
`;
```

### 创建缓冲区处理我们的数据

在该示例中，我们创建了两个 {{domxref("GPUBuffer")}} 实例去处理我们的数据，`output` 缓冲区高速地写入 GPU 计算结果，`stagingBuffer` 缓冲区用于将 `output` 的内容复制到自身，它可以被映射以允许 JavaScript 访问这些值。

- 指定 `output` 为一个存储缓冲区，它将成为复制操作的源。
- 指定 `stagingBuffer` 可以被映射为一个由 JavaScript 读取的缓冲区，并将成为复制操作的目标。

```js
const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

const stagingBuffer = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});
```

### 创建绑定组布局

当创建管线时，我们需要为管线指定一个绑定组。这将首先创建 {{domxref("GPUBindGroupLayout")}}（通过调用 {{domxref("GPUDevice.createBindGroupLayout()")}}），该布局定义了 GPU 资源（例如将在此管线中使用的缓冲区）的结构和用途。此布局将用作绑定组的模板。在这种情况下，我们将管线与一个单一的内存缓冲区绑定，绑定到绑定槽 0（这与我们的着色器代码中的相关绑定号匹配——`@binding(0)`），可在管线的计算阶段使用，并将缓冲区的用途定义为 `storage`。

```js
const bindGroupLayout = device.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.COMPUTE,
      buffer: {
        type: "storage",
      },
    },
  ],
});
```

下一步，我们通过调用 {{domxref("GPUDevice.createBindGroup()")}} 创建 {{domxref("GPUBindGroup")}}。我们通过此方法调用一个描述符对象，该对象指定了这个绑定组应该基于的绑定组布局，以及绑定到布局中定义的插槽变量的详细信息。在这种情况下，我们声明了绑定插槽 0，并指定了之前定义的 `output` 缓冲区应该绑定到它。

```js
const bindGroup = device.createBindGroup({
  layout: bindGroupLayout,
  entries: [
    {
      binding: 0,
      resource: {
        buffer: output,
      },
    },
  ],
});
```

> **备注：** 你可以通过调用 {{domxref("GPUComputePipeline.getBindGroupLayout()")}} 方法检索在创建绑定组时使用的隐式布局。还有一个可以用于渲染管线的版本：参见 {{domxref("GPURenderPipeline.getBindGroupLayout()")}}。

### 创建计算管线

上述一切就绪后，我们现在可以通过调用 {{domxref("GPUDevice.createComputePipeline()")}} 并向它传递一个管线描述符对象创建计算管线。这与创建渲染管线的方式类似。我们描述计算着色器，指定在哪个模块中查找代码以及入口点是什么。我们也为管线指定了 `layout`，在本例中，我们通过调用 {{domxref("GPUDevice.createPipelineLayout()")}} 创建一个基于之前定义的 `bindGroupLayout` 的布局。

```js
const computePipeline = device.createComputePipeline({
  layout: device.createPipelineLayout({
    bindGroupLayouts: [bindGroupLayout],
  }),
  compute: {
    module: shaderModule,
    entryPoint: "main",
  },
});
```

唯一的区别是，这里我们没有指定原始类型，因为我们不需要绘制任何东西。

### 运行计算通道

在结构上，运行计算通道与运行渲染通道类似。首先，我们使用 {{domxref("GPUCommandEncoder.beginComputePass()")}} 创建通道编码器。

在发出指令时，我们使用相同的方式指定管线，使用 {{domxref("GPUComputePassEncoder.setPipeline()")}}。然后，我们使用 {{domxref("GPUComputePassEncoder.setBindGroup()")}} 指定想要使用的 `bindGroup` 来指定在计算中使用的数据，并使用 {{domxref("GPUComputePassEncoder.dispatchWorkgroups()")}} 指定要运行并行计算的 GPU 工作组的数量。

最后，我们使用 {{domxref("GPURenderPassEncoder.end()")}} 发出渲染通道指令结束的信号。

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

passEncoder.end();
```

### 将结果读回 JavaScript

在使用 {{domxref("GPUQueue.submit()")}} 将编码指令提交给 GPU 执行之前，我们使用 {{domxref("GPUCommandEncoder.copyBufferToBuffer()")}} 将 `output` 缓冲区的内容复制到 `stagingBuffer` 缓冲区中。

```js
// 复制 output 缓冲去到 staging 缓冲区
commandEncoder.copyBufferToBuffer(
  output,
  0, // 来源缓冲区偏移量
  stagingBuffer,
  0, // 目的缓冲区偏移量
  BUFFER_SIZE,
);

// 通过将命令缓冲区数组传递给命令队列以执行来结束
device.queue.submit([commandEncoder.finish()]);
```

一旦输出数据可用于 `stagingBuffer`，我们使用 {{domxref("GPUBuffer.mapAsync()")}} 方法将数据映射到中间内存，并使用 {{domxref("GPUBuffer.getMappedRange()")}} 获取映射范围的引用，将数据复制到 JavaScrip，并将其记录到控制台。完成后，我们还会取消映射到 `stagingBuffer`。

```js
// 映射 staging 缓冲区，以便读回到 JS
await stagingBuffer.mapAsync(
  GPUMapMode.READ,
  0, // 偏移量
  BUFFER_SIZE, // 长度
);

const copyArrayBuffer = stagingBuffer.getMappedRange(0, BUFFER_SIZE);
const data = copyArrayBuffer.slice();
stagingBuffer.unmap();
console.log(new Float32Array(data));
```

## GPU 错误处理

WebGPU 调用在 GPU 进程中以异步的方式进行验证。如果发现错误，有问题的调用会在 GPU 端标记为无效。如果依赖于一个无效调用返回值的另一个调用被执行，那么该对象将也被标记为无效，以此类推。因此，WebGPU 的错误被称为“传染性错误”。

每个 {{domxref("GPUDevice")}} 实例都维护这自己的错误作用域栈。这个栈最初是空的，但是你可以通过调用 {{domxref("GPUDevice.pushErrorScope()")}} 来开始推入错误作用域到栈，以捕获特定类型的错误。

一旦完成错误捕获，你可以通过调用 {{domxref("GPUDevice.popErrorScope()")}} 来结束捕获。这会从栈中弹出作用域并返回一个 {{jsxref("Promise")}}，该 Promise 兑现为一个对象（{{domxref("GPUInternalError")}}、{{domxref("GPUOutOfMemoryError")}} 或 {{domxref("GPUValidationError")}}），描述在作用域内捕获的第一个错误，如果没有错误捕获，则是 `null`。

在适当的“验证”部分，我们试图去提供帮助你理解为什么你的 WebGPU 代码发生错误的有用信息，其中列出了避免错误的条件。例如，参见 [`GPUDevice.createBindGroup()` 检验部分](/zh-CN/docs/Web/API/GPUDevice/createBindGroup#检验)。其中一些信息很复杂，我们决定仅列出以下错误标准，而不是重复规范：

- 不明显的错误标准，例如导致验证错误的描述符属性的组合。没有必要告诉你确保使用正确的描述符对象结构。这既是显而易见的又是模糊的。
- 由开发者控制的错误标准。一些错误标准仅基于内部因素，对于 web 开发者并不真正相关。

你可以在关于 WebGPU 错误处理的解释中找到更多有关信息——参见[对象的有效性和销毁状态](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed)以及[错误](https://gpuweb.github.io/gpuweb/explainer/#errors)。[WebGPU 错误处理的最佳实践](https://toji.dev/webgpu-best-practices/error-handling)提供了很多有关真实世界的示例和建议的有用信息。

> **备注：** 在 WebGL 中处理错误的历史方式是提供一个 {{domxref("WebGLRenderingContext.getError", "getError()")}} 方法，该方法返回错误的信息。这种方式存在问题，因为它会同步返回错误，这对性能是不利的——每次调用都需要往返到 GPU 并且需要所有先前发出的操作都已经完成。它的状态模型也是扁平的，这意味着错误可以在不相关的代码之间泄露。WebGPU 的创建者决定改变这一点。

## 接口

### API 的入口点

- {{domxref("Navigator.gpu")}} / {{domxref("WorkerNavigator.gpu")}}
  - : API 的入口点——返回当前上下文的 {{domxref("GPU")}} 对象。
- {{domxref("GPU")}}
  - : 使用 WebGPU 的起点。它可用于返回 {{domxref("GPUAdapter")}}。
- {{domxref("GPUAdapter")}}
  - : 表示 GPU 适配器。你可以从这里请求 {{domxref("GPUDevice")}}、适配器信息、特性和限制。
- {{domxref("GPUAdapterInfo")}}
  - : 包含有关适配器的标识信息。

### 配置 GPUDevice

- {{domxref("GPUDevice")}}
  - : 表示逻辑 GPU 设备。这是访问大多数 WebGPU 功能的主要接口。
- {{domxref("GPUSupportedFeatures")}}
  - : 一个[类 Set](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set) 对象，该对象通过 {{domxref("GPUAdapter")}} 或 {{domxref("GPUDevice")}} 描述了额外的功能。
- {{domxref("GPUSupportedLimits")}}
  - : 描述 {{domxref("GPUAdapter")}} 或 {{domxref("GPUDevice")}} 支持的限制。

### 配置渲染 `<canvas>`

- {{domxref("HTMLCanvasElement.getContext()")}}——`contextType` 为 `"webgpu"`
  - : 使用 `contextType` 为 `"webgpu"` 调用 `getContext()` 方法，其会返回一个 {{domxref("GPUCanvasContext")}} 对象实例，然后可以使用 {{domxref("GPUCanvasContext.configure()")}} 对其进行配置。
- {{domxref("GPUCanvasContext")}}
  - : 表示 `<canvas>` 元素的 WebGPU 渲染上下文。

### 表示管线资源

- {{domxref("GPUBuffer")}}
  - : 表示内存块，其可以用于在 GPU 操作中存储原始数据。
- {{domxref("GPUExternalTexture")}}
  - : 包含 {{domxref("HTMLVideoElement")}} 快照的包装器对象，可用作 GPU 渲染操作中的纹理。
- {{domxref("GPUSampler")}}
  - : 控制着色器如何转换和过滤纹理资源数据。
- {{domxref("GPUShaderModule")}}
  - : 对内部着色器模块对象的引用，它是 WGSL 着色器代码的容器，通过管线提交给 GPU 执行。
- {{domxref("GPUTexture")}}
  - : 用于存储 1D、2D 或 3D 数据数组（例如图像）以在 GPU 渲染操作中使用的容器。
- {{domxref("GPUTextureView")}}
  - : 由特定 {{domxref("GPUTexture")}} 定义的纹理子资源的某个子集的视图。

### 表示管线

- {{domxref("GPUBindGroup")}}
  - : 基于 {{domxref("GPUBindGroupLayout")}}，`GPUBindGroup` 定义了一组要绑定在一起的资源以及如何在着色阶段使用这些资源。
- {{domxref("GPUBindGroupLayout")}}
  - : 定义相关 GPU 资源的结构和用途，例如将在管线中使用的缓冲区，并在创建 {{domxref("GPUBindGroup")}} 时用作模板。
- {{domxref("GPUComputePipeline")}}
  - : 控制计算着色阶段，可以在 {{domxref("GPUComputePassEncoder")}} 中使用。
- {{domxref("GPUPipelineLayout")}}
  - : 定义管线使用的 {{domxref("GPUBindGroupLayout")}}。在指令编码期间与管线一起使用的 {{domxref("GPUBindGroup")}} 必须具有兼容的 {{domxref("GPUBindGroupLayout")}}。
- {{domxref("GPURenderPipeline")}}
  - : 控制顶点和片元着色阶段，可以在 {{domxref("GPURenderPassEncoder")}} 或 {{domxref("GPURenderBundleEncoder")}} 使用。

### 编码并向 GPU 提交指令

- {{domxref("GPUCommandBuffer")}}
  - : 表示 GPU 指令的录制列表，其可以提交给 {{domxref("GPUQueue")}} 执行。
- {{domxref("GPUCommandEncoder")}}
  - : 表示指令编码器，用于编码指令发布给 GPU。
- {{domxref("GPUComputePassEncoder")}}
  - : 编码与控制计算着色阶段相关的指令，由 {{domxref("GPUComputePipeline")}} 发出。是 {{domxref("GPUCommandEncoder")}} 整体编码激活过后的一部分。
- {{domxref("GPUQueue")}}
  - : 控制 GPU 编码指令的执行。
- {{domxref("GPURenderBundle")}}
  - : 预先录制的指令 bundle 的容器（参见 {{domxref("GPURenderBundleEncoder")}}）。
- {{domxref("GPURenderBundleEncoder")}}
  - : 用于预先记录指令的 bundle。这些可以通过 {{domxref("GPURenderPassEncoder.executeBundles", "executeBundles()")}} 方法在 {{domxref("GPURenderPassEncoder")}} 中根据需要重复使用。
- {{domxref("GPURenderPassEncoder")}}
  - : 编码与控制顶点和片段着色阶段相关的指令，由 {{domxref("GPURenderPipeline")}} 发出。是 {{domxref("GPUCommandEncoder")}} 整体编码激活过后的一部分。

### 在渲染通道中执行查询

- {{domxref("GPUQuerySet")}}
  - : 用于记录通道中查询的结果，例如遮挡或时间戳查询。

### 调试错误

- {{domxref("GPUCompilationInfo")}}
  - : {{domxref("GPUCompilationMessage")}} 对象数组，由 GPU 着色器模块编译器生成，用于帮助诊断着色器代码问题。
- {{domxref("GPUCompilationMessage")}}
  - : 表示由 GPU 着色器模块编译器生成的单个信息、警告或错误消息。
- {{domxref("GPUDeviceLostInfo")}}
  - : 当 {{domxref("GPUDevice.lost")}} {{jsxref("Promise")}} 兑现时返回，提供有关设备丢失原因的信息。
- {{domxref("GPUError")}}
  - : {{domxref("GPUDevice.popErrorScope")}} 和 {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} 事件显示错误的基本接口。
- {{domxref("GPUInternalError")}}
  - : {{domxref("GPUDevice.popErrorScope")}} 和 {{domxref("GPUDevice")}} {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} 事件显示的错误类型之一。表示操作因系统或特定于实现的原因而失败，即使满足所有验证要求也会失败。
- {{domxref("GPUOutOfMemoryError")}}
  - : {{domxref("GPUDevice.popErrorScope")}} 和 {{domxref("GPUDevice")}} {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} 事件显示的错误类型之一。表示没有足够的可用内存来完成请求的操作。
- {{domxref("GPUPipelineError")}}
  - : 描述管线的失败。当 {{domxref("GPUDevice.createComputePipelineAsync()")}} 或 {{domxref("GPUDevice.createRenderPipelineAsync()")}} 调用返回的 {{jsxref("Promise")}} 被拒绝时，接收到的值。
- {{domxref("GPUUncapturedErrorEvent")}}
  - : {{domxref("GPUDevice")}} {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} 事件的事件对象类型。
- {{domxref("GPUValidationError")}}
  - : {{domxref("GPUDevice.popErrorScope")}} 和 {{domxref("GPUDevice")}} {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} 事件显示的错误类型之一。描述一个应用程序错误，指示操作未通过 WebGPU API 的验证约束。

## 示例

- [基础的计算示例](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [基础的渲染示例](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU 示例](https://webgpu.github.io/webgpu-samples/)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebGPU 最佳实践](https://toji.dev/webgpu-best-practices/)
- [WebGPU 讲解](https://gpuweb.github.io/gpuweb/explainer)
- [WebGPU——全部核心，没有 canvas](https://surma.dev/things/webgpu/)
