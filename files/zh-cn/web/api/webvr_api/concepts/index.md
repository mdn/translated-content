---
title: WebVR 的概念
slug: Web/API/WebVR_API/Concepts
---

{{APIRef("WebVR API")}}{{deprecated_header}}

这篇文章探讨了一些关于虚拟现实（VR）的概念及其背后的理论基础。如果你是一个进入这个领域的新手，在你深入学习相关代码知识前，非常有必要对于以下的话题做一定的了解。

## 关于 VR 的历史

虚拟现实并不是一件新生的事物：这个概念甚至能追溯到，比 2012 年 Oculus Rift 在 Kickstarter campaig 上发起众筹，还要更早的时候。人们已经持续研发这种技术长达数十年。

1939 年 [View-Master device](https://en.wikipedia.org/wiki/View-Master) 问世，它允许人们通过它观看 3D 成像的照片。这款设备播放的是，存储在圆盘硬纸板上的，成对的立体 3D 的彩色小照片。经过了许多年的研发，军方开始对使用这项技术产生了浓厚的兴趣，终于在 1961 年，名为 HEADSIGHT 的项目诞生了：它包含了一个连接头部追踪系统的显示屏的头盔。

在接下来的数十年中，出现了许多具有指导性作用的实验，但是它不再像从前那样只对科学实验室和战场开放。最终大众文化通过电影导演展现他们的视角，从而接过了虚拟现实的大旗。像《电子世界争霸战（1982）》和《黑客帝国（1999）》那样的电影被拍摄出来，在那里人们能够轻易的将自己置身于一个完全由信息构成的世界，又或者，接受让自己进入一个从未认识过的新世界，并且将它当做一个真实的存在。

世界上第一次 VR 游戏的尝试是既大又昂贵的：1991 年 Virtuality Group 制造了一款名为 VR-ready 的商业街机，其中装有护目镜，并且美其名曰 Pac-Man to virtual reality。随后，世嘉株式会社（SEGA）在 1993 的 Consumer Electronics Show 上引进了他们的 VR 眼睛设备。当时的公司都在努力尝试，但是市场和消费者并不关注和买账：之后，我们再见到真正成功的 VR 项目，就要等到最近的 2012 年了。

### 最近的 VR 发展

那么有什么值得我们期待的呢？VR 硬件需要传输高精度的信息，在保证低延迟的情况下传递可接受的用户的体感信息；运行 VR 设备和程序的电脑，必需强大到足以维持这些庞大的信息。直到最近的这几年，如此高精度并且能量强大的设备，才能通过大众可以接受的价格被购买到。早期的 VR 原型设备，需要花费数万美元，然而最近出现的 [Oculus Rift](https://www.oculus.com/rift/) developer kit 却仅售 $350，并且还有更加便宜的解决方案，比如基于手机的 VR 设备像是 [Google Cardboard](https://www.google.com/get/cardboard/)。

在软件方面，Valve 开发了 [SteamVR](http://store.steampowered.com/universe/vr) 软件系统，能够与 VIVE 和其他解决方案兼容，并提供软件访问权限，例如可用的 VR 用户界面。

三星公司同 Oculus 合作，也推出了它的头戴设备 [GearVR](http://www.samsung.com/global/microsite/gearvr/gearvr_features.html)，这款设备可以连接旗下的 NOTE4 以及 6S 等手机。然而这款设备仅仅能够运行几款纯粹的 APP 应用，因而相对于 WEBVR 的特效领域而言，显得不是那么的有意思。

科技已经发展到了今天，随着时间的推移，只会有更多的昂贵的头显设备变得越来越便宜，从而令更多的人在将来能够亲自体验虚拟现实的乐趣。

### 传入设备

针对虚拟显示应用的手持传入设备，是一个非常有意思的话题：这是一种全新的体验，从而必须要设计出沉浸式的用户界面来适应它。目前为止，在这方面，从传统的键盘鼠标，一直到 LEAP MOTION 这样的新兴设备，有多种多样的途径来实现它。只有通过【试错法】最终才能窥见，哪种方式最有利于创造情景以及哪种输入设备最适合于你所玩的游戏的类型。

## 创建 VR 设备的硬件环境

主要有两种创建 VR 环境的类型，手机或者是 PC。以下是实现这两种环境所需要的最少的硬件支持：

- 手机：通过使用一部智能手机可以营造一部头显设备（HMD）——扮演 VR 显示器的角色——安装在一个像谷歌 CARDBOARD 那样的 VR 框架中，其中包含了必需要有的透镜，用以提供投射在手机屏幕上的立体视觉效果。![Mobile based VR setup](mobilebasedvrsetup.png)
- 电脑：将一部 VR 设备连接到你的电脑上——它是由一部包含了能分别为左眼和右眼显示图像的高分辨率全景镜头所组成的头显设备所组成，同时它还包含了两块分别为双眼配备的，可以提升左右眼图像分离（立体视觉）的透镜。这套设备还包含了一套分离式的感应设备，它能够测算出你的头部的位置/方向/速度/加速度等信息，并实时的把这些信息传输给计算机。![Computer based VR Setup](computerbasedvrsetup.png)

> **备注：** 通过电脑连接的系统有时候不会包含定位传感装置，但是通常情况下都会有。

其余的帮助补充完整的 VR 体验的硬件包括：

- 手持传感识别器：一个可以追踪你的手部位置和运动的传感器，这使得它变成了一个非常有趣的控制器，以及一件存在于 VR 游戏世界种的物体。迄今为止，最先进的这类设备首属 [Leap Motion](https://www.leapmotion.com/)，它可以同电脑配合使用（同 Oculus Rift 设备连接）并且同时还可以和手机兼容（暂时处于实验阶段）。
- （手机）游戏手柄：我们可以配置一套 XBOX 控制器或者类似的设备作为浏览器的键盘——这种方法提供了另一种同 VR 网页互动的形式。有一些游戏手柄更可以和手机协同使用——就像 [MergeVR headset](http://www.mergevr.com/)——但是这些方法都是通过蓝牙连接设备的方法，并不能完全等同于和 WEBVR 结合。
- 眼动追踪传感器（实验产品）：FOVE 项目是第一个研究用于追踪和读取人眼运动设备的项目。
- 面部表情追踪设备（实验产品）：位于南加州大学和 Facebook 的 Oculus 部门的研究人员，已经开始测试更多新的追踪人类面部表情并且能把他们转换成虚拟现实角色的方法。
- 更加复杂的位置传感系统：SteamVR 控制器，结合了 [Lighthouse](http://www.roadtovr.com/steamvr-beta-update-brings-lighthouse-support-and-vr-tracking-app/) 追踪系统，旨在实现帮助我们能在一个 10x10 平方英尺的 VR 空间范围内自由活动的目的。

## 位置和方向、速度和加速度

正如上文所提到的，那个位置传感器通过检测与 HMD 相关的信息并且实时的输出这些数据，从而允许你持续的通过改变你的头部移动，更新你身处的虚拟场景，包括旋转等动作。但是我们所说的这些信息包括些什么呢？

![Position and Orientation VR setup](positionorientationvr.png)

通过 HMD 输出的信息包含一下四种类别：

1. 位置——HMD 设备的位置基于一个 3D 坐标空间中的三个轴——X 代表左右移动，Y 代表上下移动，Z 代表朝向和远离位置传感设备。在 WEBVR 中：

   - x position is represented by {{domxref("VRPositionState.position")}}.x.
   - y position is represented by {{domxref("VRPositionState.position")}}.y.
   - z position is represented by {{domxref("VRPositionState.position")}}.z.

2. 方位——HMD 在三维坐标空间中绕三条轴线的旋转。Pitch 为绕 x 轴旋转，yaw 为绕 y 轴旋转，而 roll 则为绕 z 轴旋转。在 WEBVR 中：

   - Pitch is represented by {{domxref("VRPositionState.orientation")}}.x.
   - Yaw is represented by {{domxref("VRPositionState.orientation")}}.y.
   - Roll is represented by {{domxref("VRPositionState.orientation")}}.z.

3. 速度——在 VR 中有两种需要被考虑的速度：

   - 线速度——HMD 追踪的沿着三种轴向之一的速度。这类的信息可以通过 {{domxref("VRPositionState.linearVelocity")}} 接收（x、y 和 z）
   - 角速度——就是 HMD 设备绕着三种轴向之一旋转的速度。这类的信息可以通过 {{domxref("VRPositionState.angularVelocity")}} 接收（x、y 和 z）

4. 加速度——在 VR 中有两种需要被考虑的加速度：

   - 线性加速度——HMD 设备沿着轴向追踪的加速度。这类的信息可以通过 {{domxref("VRPositionState.linearAcceleration")}} 接收（x、y 和 z）
   - 角度加速度——HMD 设备绕着轴旋转的加速度。这类的信息可以通过 {{domxref("VRPositionState.angularAcceleration")}} 接收（x、y 和 z）

## 视野

VR 的视野（FOV）就是我们的双眼理论上预期能看到的区域。这个区域大致上呈现一个倒置的金字塔形状，金字塔的中轴线穿过使用者的头部，金字塔剩余的部分从使用者的双眼部位发散出去。每只眼睛都有自己的 FOV，同时其中的一个稍微同另一个重叠。

![FOV related properties](fovrelatedproperties.png)

FOV 是通过下列的值来定义的：

- {{domxref("VRFieldOfViewReadOnly.upDegrees")}}: The number of degrees upwards that the field of view extends in.
- {{domxref("VRFieldOfViewReadOnly.rightDegrees")}}: The number of degrees to the right that the field of view extends in.
- {{domxref("VRFieldOfViewReadOnly.downDegrees")}}: The number of degrees downwards that the field of view extends in.
- {{domxref("VRFieldOfViewReadOnly.leftDegrees")}}: The number of degrees to the left that the field of view extends in.
- zNear: The distance from the middle of the user's head to the start of the visible FOV.
- zFar: The distance from the middle of the user's head to the end of the visible FOV.

根据 VR 硬件的不同，这些属性的值会略有不同，然而它们基本上分别都趋向于上下 53°，左右 47°，zNear 和 zFar 两个值可以在 0.1m 到 10000m 之间变换。

不同的使用者将会为了达成尽量完美的视觉体验，而要求略有不同的特性数值。因此，我们有理由在使用者开始使用一个 APP 之前，对这些特性进行测算。你可以使用{{domxref("VREyeParameters")}} 接口，并使用 {{domxref("HMDVRDevice.setFieldOfView()")}} 方法设置新的值，以侦测当前的特性值。

> **备注：** 使用者可以看到所有他们身边的事物，这是一个 APP 和游戏中出现的全新的概念。那就是，试着传达给人们一个发现他们身后事物的理由——引导他们去发现那些在一开始并没有出现在他们视野中的事物。描述他们身后的世界。

## VR APP 的概念

这个部分讨论的是，从前在我们开发普通的 APP 和手机或者 PC 应用时，不必考虑的，但是在我们开发 VR APP 的时候必须被意识到的概念。

### 立体视觉

立体视觉是大多数的动物以及人类拥有的正常的视觉效果——也就是将来自每只眼睛的略有差别的图像，通过大脑的处理，感知为一张立体的图片。这种对深度的感知结果，帮助我们通过一种神奇的 3D 的视角看世界。为了在 APP 中重现这种视觉效果，你需要渲染两幅略有不同的场景，当使用者在通过使用 HMD 观看时能分别被左右眼所调用。

![How to create stereoscopic 3D images](createstereoscopicimages.png)

### 头部追踪

首要的使我们能够感到置身于 360° 场景中的科技，要感谢包括在 HMD 设备中的陀螺仪、加速度计、磁力计等装置。

这种技术对于 VR 有非常重要的关联性，因为它让我们的眼睛相信我们置身于一个球形的屏幕前，它提供给使用者一种在 APP 画布中沉浸式的体验。

### 眼部拉伤

这是一个通常使用在 VR 中的术语，因为这也是使用 HMD 设备的一个副作用——我们的视线历来会追踪我们在 APP 画布中被展示的内容，然而这将导致我们的眼睛超负荷的工作，因此假如我们使用 VR APP 时，有任何超时的行为，都有可能导致眼部的拉伤。

为了将这些可能的影响最小化，我们可以：

- 避免聚焦不同的深度（也就是要避免使用大量的具有不同深度特性的颗粒）
- 避免长期的视线集中（如果有一个物体朝着摄像机移动过来，你的眼睛将会跟随和聚焦在它之上）
- 尽量使用带有舒缓颜色的深色背景；假如屏幕太亮会增加眼睛的负担。
- 避免迅速的视线的改变。
- 避免给使用者展现大量的文本内容。你应该非常注意眼睛/摄像机同文本之间的距离。0.5m 太近了，然而假如超过 2m 的话，那么立体的效果将会崩溃，所以在 0.5-2 之间的距离是合适的。
- 注意设定物体到摄像机之间的一般距离。OCULUS 建议的最小距离是 0.75m。
- 如果使用者需要和场景中的物体进行互动，那么尽量使用一个指针——这将帮助他们精准和更加容易的指向那个物体。一般情况下，最少的视觉上的动作能提供给使用者最轻松的体验。

一般来说，视觉效果最好的路径会给用户带来较少的疲劳感。

### 晕动病

如果开发者没有非常注意的话，VR APP 将会很有可能引起它的使用者的反感。这种反应的产生是因为我们的眼睛受到了，我们的身体并不准备接收的刺激。

为了避免带来晕动效果给我们的使用者（或者说最大限度的减小这种反应），我们可以：

- 总是保证头部的追踪（这是最重要的，特别是在体验过程中头部移动的时候）
- 使用稳定的速率；避免摄像机的加速和减速运动（使用线性加速度，同时尽量避免缓动）
- 尽量提高帧速率（低于 30FPS 是不舒适的体验）
- 避免尖锐的或者突然的摄像机的转动。
- 为固定位置的物体添加固定的参照物（否者使用者会误认为他们在移动）
- 不要使用景深视角和动态模糊的后期处理，因为你不知道使用者的视线会聚焦在哪里。
- 避免光线突然的改变（使用低频率的质感或者迷雾效果来制造光线的平滑的转变效果）。总之，就是要使你的眼睛尽量不要传输那种会引起你身体其他部位强烈反应的信号。

### 延迟

延迟指的是，头部的物理转动动作，显示设备在接收了 HMD 的信息更新后，这两者之间的时间间隔。这是一个在提供虚拟现实体验的过程中非常关键的因素。人体能感知到非常细微的延迟——如果我们要让人体感知不到这种延迟，我们需要将延迟保持在 20 微秒以下（例如，一个 60HZ 的显示器拥有 16ms 的响应时间）。

Oculus Rift headset 的延迟在 20ms 甚至比这更低，但是目前这都非常依赖于智能手机的 CPU 性能和其他性能。

### 帧率

根据维基百科的定义，帧率（FPS）指的是一个设备产生单一连贯的图像（帧）的速率。60FPS 的帧率足够提供给使用者一个平稳的体验，但是更加要取决于 APP 运行的设备的表现，或者是你想要体验的 VR 内容，也有可能大大的降低。假如帧率小于了 30FPS，通常会发生严重的颤抖，并且令使用者产生厌恶感。

最困难的任务之一就是保持一个稳定的和高帧率的值，所以我们必须优化代码从而使它发挥最大的功效。假如能够有一个合适的帧率并且不会规律的或者突然的改变，那将会是非常好的体验；因此你需要在一个场景中设置尽量少的物体（例如在 WEBGL 中）并且减小 DRAW CALLS 的值。

### 瞳孔间距

根据维基百科的定义，瞳孔间距（IPD）是指两眼瞳孔之间的距离。IPD 对于双目视觉系统是非常重要的，因为双眼的瞳孔都必须对准这套视觉系统的瞳孔出口。

瞳孔间距（IPD）可用 {{domxref("VREyeParameters.eyeTranslation")}} 来表示。

这个值是通过 HMD 来返回的并且它的值一般在 60-70mm 之间；在像是 Oculus Rift 这样的 HMD 设备中，你可以设置你自己的 IPD。一般我们不会去改变这个值，但是你可以通过有意的改变它从而改变你所身处的整个场景。例如，如果你将 IPD 调整到 6000mm，使用者将会看到一个好像巨人身处小人国中一样的世界。

### 自由度

自由度（DOF）指向的是空间中固态物体移动的自由度。并没有一个统一的对这个专业术语的缩写——我们可以找到，在关于侦测头部转动的传感器的那篇文章中的 3DOF 的参考，还有当一个传入设备允许我们同时控制位置和方位信息时的 6DOF。我们有时候甚至会看到 9DOF 的案例，那就是当硬件中包含了三个感应装置时，如陀螺仪、加速计和磁力计，但是 3 x 3DoF 的值的接过实际上返回的，还是一个 6 纬的自由度跟踪结果。

DOF 直接和使用者的头部运动追踪相关联。

### 锥形焦点

虽然我们的视野非常的旷阔（最大可以达到 180°），但是我们必须要意识到只有在一个小范围内，你才可以察觉到一些标识的存在（中心向外 60°）或者读取文本（中心向外 10°）。如果你没有一个眼部追踪器，那么我们建议你将使用者的视角尽量控制在屏幕中心点附近。

这样的限制对于在考虑如何在 APP 画布上设置视角的时候，是非常重要的——假如太过于远离锥形焦点的边缘，就可能更快更容易的导致眼部的拉伤。想要阅读 MozVR.com 上的关于这个问题的有意思的文章（还包含其他内容）——请点击 [Quick VR Mockups with Illustrator](http://mozvr.com/posts/quick-vr-prototypes/)。

### 3D 定位音效

3D 定位音效，指的是一组控制声音去实现怎样模拟它在一个三维空间中播放的效果。

这项技术直接关系到 [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)，该 API 允许我们在画布中的对象上放置声音，或者根据用户正在移动或观看的场景部分启动音频。
