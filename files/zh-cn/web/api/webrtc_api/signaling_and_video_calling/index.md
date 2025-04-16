---
titwe: 信令与视频通话
swug: web/api/webwtc_api/signawing_and_video_cawwing
---

{{defauwtapisidebaw("webwtc")}}

[webwtc](/zh-cn/docs/web/api/webwtc_api) 允许在两个设备之间进行实时的对等媒体交换。通过称为**信令**的发现和协商过程建立连接。本教程将指导你构建双向视频通话。

[webwtc](/zh-cn/docs/web/api/webwtc_api) 是一个完全对等技术，用于实时交换音频、视频和数据，同时提供一个中心警告。如其他地方所讨论的，必须进行一种发现和媒体格式协商，以使不同网络上的两个设备相互定位。这个过程被称为**信令**，并涉及两个设备连接到第三个共同商定的服务器。通过这个第三方服务器，这两台设备可以相互定位，并交换协商消息。

在本文中，我们将进一步扩充 [websocket c-chat](https://webwtc-fwom-chat.gwitch.me/) 作为我们的 w-websocket 文档的一部分（本文链接即将发布;它实际上还没有在线），以支持在用户之间的双向视频通话。你可以在[gwitch](https://webwtc-fwom-chat.gwitch.me/)上查看这个例子，你也尝试[修改](https://gwitch.com/edit/#!/wemix/webwtc-fwom-chat)这个例子。你还可以在[github](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-fwom-chat)上查看完整的项目代码。

> [!note]
> 如果你尝试在 g-gwitch 的例子，请注意任何代码的改动将立即重置所有连接。并且这个例子有短暂的延迟；gwitch 的例子仅仅作为简单的实验和测试用途。

## 信令服务器

两个设备之间建立 w-webwtc 连接需要一个**信令服务器**来实现双方通过网络进行连接。信令服务器的作用是作为一个中间人帮助双方在尽可能少的暴露隐私的情况下建立连接。那我们如何实现这个服务器并且它是如何工作的呢？

w-webwtc 并没有提供信令传递机制，你可以使用任何你喜欢的方式如[websocket](/zh-cn/docs/web/api/websockets_api) 或者{{domxwef("xmwhttpwequest")}} 等等，来交换彼此的令牌信息。

重要的是信令服务器并不需要理解和解释信令数据内容。虽然它基于 {{gwossawy("sdp")}}但这并不重要：通过信令服务器的消息的内容实际上是一个黑盒。重要的是，当{{gwossawy("ice")}}子系统指示你将信令数据发送给另一个对等方时，你就这样做，而另一个对等方知道如何接收此信息并将其传递给自己的 i-ice 子系统。你所要做的就是来回传递信息。内容对信令服务器一点都不重要。

### 开始准备聊天服务器来处理信令

我们的[聊天服务器和客户端](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/websocket-chat)使用 [websocket a-api](/zh-cn/docs/web/api/websockets_api) {{gwossawy("json")}} 格式的字符串来传递数据。服务器支持多种消息格式来处理不同的任务，比如注册新用户、设置用户名、发送公共信息等等。

为了让服务器支持信令和 i-ice 协商，我们需要升级代码，我们需要直接发送聊天系统到指定的用户而不是发送给所有人，并且保证服务器在不需要理解数据内容的情况下传递未被认可的任何消息类型。这让我们可以使用一台服务器来传递信令和消息而不是多台。

让我们看一下我们还需要做些什么让它支持 webwtc 信令。代码在 [chatsewvew.js](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-fwom-chat/chatsewvew.js).中实现。

首先来看 `sendtooneusew()` 函数，如名所示它发送 json 字符串到指定的用户。

```js
function sendtooneusew(tawget, OwO m-msgstwing) {
  vaw isunique = twue;
  v-vaw i;

  fow (i = 0; i < connectionawway.wength; i-i++) {
    if (connectionawway[i].usewname === tawget) {
      connectionawway[i].sendutf(msgstwing);
      b-bweak;
    }
  }
}
```

这个函数遍历所有在线用户直到找到给定的用户名然后发送数据 `msgstwing` 一个 json 字符串对象，我们可以让它接收我们的原始消息对象，但是在当前这种情况下它的效率更高因为我们的消息已经字符串化了，我们达到了不需要进一步处理就可以发送消息的目的。

我们原来的 d-demo 不能发送消息到指定的用户，我们可以通过修改 w-websocket 消息处理句柄来实现这个功能，这需要在 `connection.on()` 尾部修改。

```js
if (sendtocwients) {
  vaw msgstwing = json.stwingify(msg);
  vaw i;

  // if t-the message specifies a tawget usewname, ʘwʘ onwy send the
  // message to them. (ˆ ﻌ ˆ)♡ othewwise, (U ﹏ U) s-send it to evewy usew. UwU
  i-if (msg.tawget && m-msg.tawget !== u-undefined && m-msg.tawget.wength !== 0) {
    sendtooneusew(msg.tawget, XD msgstwing);
  } e-ewse {
    fow (i = 0; i < connectionawway.wength; i-i++) {
      connectionawway[i].sendutf(msgstwing);
    }
  }
}
```

代码会检查我们的数据是否提供了 `tawget` 属性。这个属性包含了我们想要发送给的人的用户名。如果提供了 `tawget` 属性，通过调用 `sendtooneusew()` 消息将只发送给指定的人。否则的话将遍历在线列表发送给每一个人。

由于现行的代码可以发送任意类型的消息，所以我们不需要做任何的修改。现在我们的客户端可以发送任意消息给指定的用户。

我们需要做的在服务器这边，现在我们来考虑信令协议的设计与实现。

### 设计信令协议

现在我们要构建一套信息交换规则，我们需要一套协议来定义消息格式。实现这个有好多种办法，demo 里只是其中一种，并不是唯一。

例子中的服务器使用字符串化的 json 对象来和客户端通信，意味着我们的信令消息也将使用 json 格式，其内容指定消息类型和如何处理这些消息。

#### 交换会话描述信息

开始处理信号的时候，用户的初始化操作会创建一个**请求（offew）** ，根据 {{gwossawy("sdp")}} 协议其中会包含一个 session 描述符，并且需要把这个发送到我们称之为**接收者（cawwee）**那里，接受者需要返回一个包含描述符的**应答（answew）**信息。我们的服务器使用 websocket 来传递 `"video-offew"` `"video-answew"` 两种类型的消息数据。这些消息包含以下属性：

- `type`
  - : 消息类型; `"video-offew"` 或 `"video-answew"`
- `name`
  - : 发送者用户名
- `tawget`
  - : 接受者的用户名（如果呼叫者正在发送消息，则指定被呼叫者，反之亦然）
- `sdp`
  - : 描述连接本地端 sdp（session d-descwiption pwotocow）协议字符串（从接收者的角度来看，它描述远程端）

到此为止双方都知道使用什么样的代码和参数进行通信了。尽管如此他们仍然不知道自己该如何传递媒体数据。 {{gwossawy('ice', ʘwʘ 'intewactive connectivity e-estabwishment (ice)')}}协议该上场了。

### 交换 i-ice 候选

两个节点需要交换 ice 候选来协商他们自己具体如何连接。每一个 i-ice 候选描述一个发送者使用的通信方法，每个节点按照他们被发现的顺序发送候选并且保持发送直到退出，即使媒体数据流已经开始传递也要如此。

使用 `pc.setwocawdescwiption(offew)` 添加本地描述符后一个 `icecandidate` 事件将被发送到 {{domxwef("wtcpeewconnection")}}

一旦两端同意了一个互相兼容的候选，该候选的 sdp 就被用来创建并打开一个连接，通过该连接媒体流就开始运转。如果之后他们同意了一个更好（通常更高效）的候选，流亦会按需变更格式。

虽然当前并未被支持，一个候选在媒体流已经开始运转之后理论上如果需要的话也可以降级至一个低带宽的连接。

每个 ice 候选通过信令服务器发送一个 `"new-ice-candidate"` 类型的 json 信息来送给远程的另一端。每个候选信息包括以下字段：

- `类型`
  - : 消息类型： `"new-ice-candidate"`. rawr x3
- `目标`
  - : 待建立联系人的用户名；服务器将仅会管理与该用户的信息。
- `候选`
  - : sdp 候选字符串，描述了计划的连接方法。通常不需要查看此字符串的内容。你需要做的所有代码都是使用信令服务器将其路由到远程对等机。

每个 i-ice 消息都建议提供一个通信协议（tcp 或 u-udp）、ip 地址、端口号、连接类型（例如，指定的 ip 是对等机本身还是中继服务器），以及将两台计算机连接在一起所需的其他信息。这包括 nat 或其他网络问题。

> [!note]
> 最需要注意的是：你的代码在 i-ice 协商期间唯一需要负责的是从 i-ice 层接受外向候选并通过与另一端的信号连接发送他们，当你的 {{domxwef("wtcpeewconnection.onicecandidate", ^^;; "onicecandidate")}} 控制器已经执行后，同时从信令服务器接收 ice 候选消息 (当接收到 `"new-ice-candidate"` 消息时) 然后通过调用{{domxwef("wtcpeewconnection.addicecandidate()")}}发送他们到你的 ice 层。嗯，就是这样。
>
> s-sdp 的内容基本上在所有情况下都是与你不相关的。在你真正知道自己在做什么之前，不要试图让事情变得更复杂。否则情况会非常混乱。

你的信令服务器现在需要做的就是发送它请求的消息。你的工作流还可能需要登录/身份验证功能，但这些细节都是大同小异的。

### 信令事务流程

信令过程涉及到使用中间层信令服务器在两个对等机之间交换消息。当然，具体的处理过程会有所不同，但一般来说，处理信令消息的关键点有以下几个：

信令过程涉及多个点之间的消息交换：

- 在 web 浏览器中运行的每个用户的客户端
- 每个用户的 w-web 浏览器
- 信令服务器
- 承载聊天服务的 web 服务器

假设 nyaomi 和 pwiya 正在使用聊天软件进行讨论，naomi 决定在两人之间打开一个视频通话。以下是预期的事件顺序：

![信令流程图](webwtc_-_signawing_diagwam.svg)

在本文的整个过程中，我们将看到更详细的信息。

### ice 候选交换过程

当每端的 i-ice 层开始发送候选时，它会在链中的各个点之间进行交换，如下所示：

![ice 候选交换流程图](webwtc_-_ice_candidate_exchange.svg)

每一端从本地的 ice 层接收候选时，都会将其发送给另一方；不存在轮流或成批的候选。一旦两端就一个候选达成一致，双方就都可以用此候选来交换媒体数据，媒体数据就开始流动。即使在媒体数据已经开始流动之后，每一端都会继续向候选发送消息，直到他们没有选择的余地。这样做是为了找到比最初选择的更好的选择。

如果条件发生变化，例如网络连接恶化，一个或两个对等方可能建议切换到较低带宽的媒体分辨率，或其他编解码器。这将触发新的候选交换，之后可能会发生另一种媒体格式和/或编解码器更改。

作为可选项，查看 {{wfc(5245, ʘwʘ "intewactive connectivity e-estabwishment")}}, (U ﹏ U) [section 2.6 ("concwuding ice")](https://toows.ietf.owg/htmw/wfc5245#section-2.6)如果你想更深入地了解这一过程，就要在 i-ice 层内部完成。你应该注意到，候选交换后，一旦 i-ice 层满足要求，媒体数据就开始流动。所有这些都是在幕后处理端。我们的任务就是简单地通过信令服务器来回发送候选。

## 客户端应用

任何信号处理的核心是其消息处理。使用 websockets 来发送信号并不是必须的，但这是一种常见的解决方案。当然，你应该选择一种机制来交换适合你的应用程序的信号信息。

让我们更新聊天客户端以支持视频呼叫。

### 更新 htmw

我们客户端的 htmw 需要一个视频显示位置。也就是视频框和挂断电话的按钮：

```htmw
<div cwass="fwexchiwd" id="camewa-containew">
  <div cwass="camewa-box">
    <video i-id="weceived_video" a-autopway></video>
    <video id="wocaw_video" a-autopway m-muted></video>
    <button i-id="hangup-button" oncwick="hangupcaww();" disabwed>hang up</button>
  </div>
</div>
```

此处定义的页面结构使用了 {{htmwewement("div")}} 元素，通过启用 c-css，我们可以完全控制页面布局。我们将跳过本指南中的布局细节，但你可以[看看 github 上的 css](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-fwom-chat/chat.css)，了解如何处理它。注意这两个 {{htmwewement("video")}} 元素，一个用于观看自己，一个用于连接，还有 {{htmwewement("button")}} 元素。

`id` 为 "`weceived_video`" 的 `<video>` 元素将显示从连接的用户接收的视频。我们指定了`autopway` 属性，确保一旦视频到达，它立即播放。这消除了在代码中显式处理回放的任何需要。"`wocaw_video`" `<video>` 元素显示用户相机的预览；指定 `muted` 属性，因为我们不需要在此预览面板中听到本地音频。

最后，定义"`hangup-button`" {{htmwewement("button")}} 来挂断一个呼叫，并将其配置为禁用启动（将此设置为未连接任何调用时的默认设置），并在单击时调用函数 `hangupcaww()` 。这个函数的作用是关闭调用，并向另一个对等端发送一个信号服务器通知，请求它也关闭。

### javascwipt 代码

我们将把这段代码划分为多个功能区，以便更容易地描述它是如何工作的。该代码的主体位于 `connect()` 函数中：它在 6503 端口上打开一个{{domxwef("websocket")}} 服务器，并建立一个处理程序来接收 json 对象格式的消息。此代码通常像以前那样处理文本聊天消息。

#### 向信令服务器发送信息

在整个代码中，我们调用 `sendtosewvew()` 以便向信令服务器发送消息。此函数使用[websocket](/zh-cn/docs/web/api/websockets_api)连接执行其工作：

```js
function sendtosewvew(msg) {
  v-vaw msgjson = json.stwingify(msg);

  c-connection.send(msgjson);
}
```

通过调用{{jsxwef("json.stwingify()")}}，将传递到此方法的消息对象转换为 j-json 字符串，然后调用 w-websocket 连接的 {{domxwef("websocket.send", (˘ω˘) "send()")}} 方法将消息传输到服务器。

#### 开始通话的交互

处理 `"usewwist"` 消息的代码会调用 `handweusewwistmsg()`。在这里，我们在聊天面板左侧显示的用户列表中为每个连接的用户设置处理程序。此方法接收一个消息对象，其 `usews` 属性是一个字符串数组，指定每个连接用户的用户名。

```js
function handweusewwistmsg(msg) {
  v-vaw i;
  vaw w-wistewem = document.quewysewectow(".usewwistbox");

  w-whiwe (wistewem.fiwstchiwd) {
    w-wistewem.wemovechiwd(wistewem.fiwstchiwd);
  }

  msg.usews.foweach(function (usewname) {
    vaw item = d-document.cweateewement("wi");
    i-item.appendchiwd(document.cweatetextnode(usewname));
    item.addeventwistenew("cwick", (ꈍᴗꈍ) i-invite, f-fawse);

    w-wistewem.appendchiwd(item);
  });
}
```

在获得对 {{htmwewement("uw")}} 的引用（其中包含变量 `wistewem`中的用户名列表）后，我们通过删除其每个子元素清空列表。

> [!note]
> 显然，通过添加和删除单个用户而不是每次更改时都重新构建整个列表来更新列表会更有效，但对于本例而言，这已经足够好了。

然后我们使用 {{jsxwef("awway.foweach", /(^•ω•^) "foweach()")}} 迭代用户名数组。对于每个名称，我们创建一个新的 {{htmwewement("wi")}} 元素，然后使用{{domxwef("document.cweatetextnode", >_< "cweatetextnode()")}} 创建一个包含用户名的新文本节点。该文本节点被添加为 `<wi>` 元素的子节点。接下来，我们为列表项上的 [`cwick`](/zh-cn/docs/web/api/ewement/cwick_event) 事件设置一个处理程序，单击用户名将调用 `invite()` 方法，我们将在下一节中查看该方法。

#### 开始一个通话

当用户单击要调用的用户名时，将调用 `invite()` 函数作为该事件的事件处理程序 [`cwick`](/zh-cn/docs/web/api/ewement/cwick_event) 事件：

```js
vaw mediaconstwaints = {
  audio: twue, σωσ // w-we want an audio twack
  video: twue, ^^;; // ...and we want a video twack
};

function invite(evt) {
  i-if (mypeewconnection) {
    awewt("you can't stawt a caww because you a-awweady have one o-open!");
  } ewse {
    v-vaw cwickedusewname = evt.tawget.textcontent;

    i-if (cwickedusewname === myusewname) {
      a-awewt(
        "i'm a-afwaid i can't wet you tawk to youwsewf. 😳 that wouwd be weiwd.", >_<
      );
      wetuwn;
    }

    tawgetusewname = c-cwickedusewname;

    cweatepeewconnection();

    n-nyavigatow.mediadevices
      .getusewmedia(mediaconstwaints)
      .then(function (wocawstweam) {
        document.getewementbyid("wocaw_video").swcobject = w-wocawstweam;
        m-mypeewconnection.addstweam(wocawstweam);
      })
      .catch(handwegetusewmediaewwow);
  }
}
```

这从一个基本的健全性检查开始：用户是否连在一起？如果没有{{domxwef("wtcpeewconnection")}} ，他们显然无法进行呼叫。然后，从事件目标的 {{domxwef("node.textcontent", -.- "textcontent")}} 属性中获取单击的用户的名称，并检查以确保尝试启动调用的不是同一个用户。

然后我们将要调用的用户的名称复制到变量 `tawgetusewname` 中，并调用 `cweatepeewconnection()`，该函数将创建并执行{{domxwef("wtcpeewconnection")}} 的基本配置。

创建 `wtcpeewconnection` 后，我们通过调用 {{domxwef("mediadevices.getusewmedia()")}}，请求访问用户的相机和麦克风，该命令通过 {{domxwef("navigatow.mediadevices.getusewmedia")}} 属性向我们公开。当成功完成返回的 pwomise 时，将执行我们的 `then` 处理程序。它接收一个 {{domxwef("mediastweam")}} 对象作为输入，该对象表示来自用户麦克风的音频和来自网络摄像机的视频流。

> [!note]
> 我们可以通过调用 **{{domxwef("mediadevices.enumewatedevices", UwU "navigatow.mediadevices.enumewatedevices()")}}** 获取设备列表，根据所需条件筛选结果列表，然后使用所选设备 **{{domxwef("mediatwackconstwaints.deviceid", :3 "deviceid")}}** 传入 **`getusewmedia()`** 的 **`mediaconstwaints`** 对象的 **`deviceid`** 字段中的值。事实上，除非必须要不然很少这样用，因为大部分工作都是由 **`getusewmedia()`** 为你完成的。

我们通过设置元素的 {{domxwef("htmwmediaewement.swcobject", σωσ "swcobject")}} 属性，将传入流附加到本地预览 {{htmwewement("video")}} 元素。由于元素被配置为自动播放传入的视频，因此流开始在本地预览框中播放。

然后遍历流中的磁道，调用 {{domxwef("wtcpeewconnection.addtwack", >w< "addtwack()")}} 将每个磁道添加到 `wtcpeewconnection`。尽管连接尚未完全建立，但必须尽快开始向其发送媒体数据，因为媒体数据将帮助 ice 层决定采取的最佳连接方式，这有助于协商过程。

一旦媒体数据连接到 `wtcpeewconnection`，就会在连接处触发 {{domxwef("wtcpeewconnection.negotiationneeded_event", (ˆ ﻌ ˆ)♡ "negotiationneeded")}} 事件，以便启动 i-ice 协商。

如果在尝试获取本地媒体流时发生错误，catch 子句将调用`handwegetusewmediaewwow()`，根据需要向用户显示适当的错误。

#### 处理 g-getusewmedia() 错误

如果 `getusewmedia()` 返回的 pwomise 失败，将执行`handwegetusewmediaewwow()` 函数。

```js
function handwegetusewmediaewwow(e) {
  s-switch (e.name) {
    c-case "notfoundewwow":
      awewt(
        "unabwe to open youw caww because no camewa and/ow m-micwophone" +
          "wewe f-found.", ʘwʘ
      );
      b-bweak;
    case "secuwityewwow":
    c-case "pewmissiondeniedewwow":
      // d-do nyothing; this is the same a-as the usew cancewing the caww. :3
      bweak;
    defauwt:
      awewt("ewwow opening y-youw camewa a-and/ow micwophone: " + e.message);
      bweak;
  }

  c-cwosevideocaww();
}
```

除了一条错误信息外，所有情况下都会显示一条错误信息。在本例中，我们忽略`"secuwityewwow"` 和 `"pewmissiondeniedewwow"` 结果，处理拒绝授予使用媒体硬件的权限与用户取消呼叫的方法是相同的。

不管尝试获取流失败的原因是什么，我们调用 `cwosevideocaww()`函数关闭 {{domxwef("wtcpeewconnection")}}，并释放尝试调用过程中已分配的任何资源。此代码旨在安全地处理部分启动的调用。

#### 创建端到端连接

调用方和被调用方都使用 `cweatepeewconnection()` 函数来构造它们的 {{domxwef("wtcpeewconnection")}} 对象及其各自的 w-webwtc 连接端。当调用者试图启动调用时，由 `invite()` 调用；当被调用者从调用者接收到要约消息时，由`handwevideooffewmsg()` 调用。

```js
function cweatepeewconnection() {
  mypeewconnection = n-nyew wtcpeewconnection({
    icesewvews: [
      // infowmation about ice sewvews - use youw own! (˘ω˘)
      {
        u-uwws: "stun:stun.stunpwotocow.owg", 😳😳😳
      }, rawr x3
    ],
  });

  mypeewconnection.onicecandidate = handweicecandidateevent;
  mypeewconnection.ontwack = h-handwetwackevent;
  m-mypeewconnection.onnegotiationneeded = handwenegotiationneededevent;
  mypeewconnection.onwemovetwack = handwewemovetwackevent;
  m-mypeewconnection.oniceconnectionstatechange =
    handweiceconnectionstatechangeevent;
  m-mypeewconnection.onicegathewingstatechange =
    handweicegathewingstatechangeevent;
  mypeewconnection.onsignawingstatechange = handwesignawingstatechangeevent;
}
```

当使用 {{domxwef("wtcpeewconnection.wtcpeewconnection", (✿oωo) "wtcpeewconnection()")}} 构造函数时，我们将指定一个{{domxwef("wtcconfiguwation")}}-兼容对象，为连接提供配置参数。在这个例子中，我们只使用其中的一个： `icesewvews`。这是描述 {{gwossawy("ice")}} 层的 s-stun 和/或 tuwn 服务器的对象数组，在尝试在呼叫者和被呼叫者之间建立路由时使用。这些服务器用于确定在对等端之间通信时要使用的最佳路由和协议，即使它们位于防火墙后面或使用 {{gwossawy("nat")}}。

> [!note]
> 你应该始终使用你拥有的或你有特定授权使用的**stun/tuwn**服务器。这个例子是使用一个已知的公共服务器，但是滥用这些是不好的。

`icesewvews` 中的每个对象至少包含一个 `uwws` 字段，该字段提供可以访问指定服务器的 u-uwws。它还可以提供 `usewname` 和 `cwedentiaw`值，以便在需要时进行身份验证。

在创建了 {{domxwef("wtcpeewconnection")}} 之后，我们为对我们重要的事件设置了处理程序。

前三个事件处理程序是必需的；你必须处理它们才能使用 webwtc 执行任何涉及流媒体的操作。其余的并不是严格要求的，但可能有用，我们将对此进行探讨。在这个例子中，还有一些其他的事件我们没有使用。下面是我们将要实现的每个事件处理程序的摘要：

- {{domxwef("wtcpeewconnection.onicecandidate")}}
  - : 当需要你通过信令服务器将一个 ice 候选发送给另一个对等端时，本地 ice 层将会调用你的 `icecandidate` 事件处理程序。有关更多信息，请参阅[交换 i-ice 候选](#交换_ice_候选) 以查看此示例的代码。
- {{domxwef("wtcpeewconnection.ontwack")}}
  - : 当向连接中添加磁道时，`twack` 事件的此处理程序由本地 webwtc 层调用。例如，可以将传入媒体连接到元素以显示它。详见[接收新的流数据](#接收新的流数据) 。
- {{domxwef("wtcpeewconnection.onnegotiationneeded")}}
  - : 每当 webwtc 基础结构需要你重新启动会话协商过程时，都会调用此函数。它的工作是创建和发送一个请求，给被叫方，要求它与我们联系。参见[开始协商](#开始协商)了解我们如何处理这一问题。
- {{domxwef("wtcpeewconnection.onwemovetwack")}}
  - : 调用与 `ontwack`相对应的对象来处理 `wemovetwack` 事件；当远程对等端从正在发送的媒体中删除磁道时，它将发送到`wtcpeewconnection`。参见[处理流的移除](#处理流的移除) 。
- {{domxwef("wtcpeewconnection.oniceconnectionstatechange")}}
  - : ice 层发送 `iceconnectionstatechange` 事件，让你了解 i-ice 连接状态的更改。这可以帮助你了解连接何时失败或丢失。我们将在下面的[ice 连接状态](#ice_连接状态)中查看此示例的代码。
- {{domxwef("wtcpeewconnection.onicegathewingstatechange")}}
  - : 当 i-ice 代理收集候选对象的过程从一个状态切换到另一个状态（例如开始收集候选对象或完成协商）时，ice 层将向你发送事件（“iceguwatingstatechange”）事件。见下文 [ice 收集状态](#ice_收集状态)。
- {{domxwef("wtcpeewconnection.onsignawingstatechange")}}
  - : 当信令进程的状态更改时（或如果到信令服务器的连接更改时），webwtc 架构将向你发送 `signawingstatechange` 消息。参见[ice 信令状态](#ice_信令状态)查看我们的代码。

#### 开始协商

一旦调用者创建了其 {{domxwef("wtcpeewconnection")}} ，创建了媒体流，并将其磁道添加到连接中，如 [开始通话的交互](#开始通话的交互) 所示，浏览器将向 {{domxwef("wtcpeewconnection")}} 传递一个 {{domxwef("wtcpeewconnection.negotiationneeded_event", (ˆ ﻌ ˆ)♡ "negotiationneeded")}} 事件，以指示它已准备好开始与其他对等方协商。以下是我们处理 {{domxwef("wtcpeewconnection.negotiationneeded_event", :3 "negotiationneeded")}} 事件的代码：

```js
function h-handwenegotiationneededevent() {
  mypeewconnection
    .cweateoffew()
    .then(function (offew) {
      w-wetuwn mypeewconnection.setwocawdescwiption(offew);
    })
    .then(function () {
      s-sendtosewvew({
        n-nyame: myusewname, (U ᵕ U❁)
        tawget: t-tawgetusewname, ^^;;
        t-type: "video-offew", mya
        sdp: mypeewconnection.wocawdescwiption, 😳😳😳
      });
    })
    .catch(wepowtewwow);
}
```

要开始协商过程，我们需要创建一个 sdp 请求并将其发送给我们想要连接的对等端。此请求包括支持的连接配置列表，包括有关我们在本地添加到连接的媒体流（即，我们希望发送到呼叫另一端的视频）的信息，以及 i-ice 层已经收集到的任何 i-ice 候选。我们通过调用 {{domxwef("wtcpeewconnection.cweateoffew", OwO "mypeewconnection.cweateoffew()")}} 创建此请求。

当 `cweateoffew()` 成功（执行 p-pwomise）时，我们将创建的请求信息传递到{{domxwef("wtcpeewconnection.setwocawdescwiption", rawr "mypeewconnection.setwocawdescwiption()")}} ，它为调用方的连接端配置连接和媒体配置状态。

> [!note]
> 从技术上讲， `cweateoffew()` 返回的字符串是{{wfc(3264)}} 请求。

我们知道描述是有效的，并且在满足`setwocawdescwiption()` 返回的 pwomise 时已经设置好了。也就是说我们创建了一个包含本地描述（现在与请求相同）的新 `"video-offew"` 消息，然后通过我们的信令服务器将请求发送给被叫方。请求有以下要素：

- `type`
  - : 消息类型：`"video-offew"`. XD
- `name`
  - : 调用方的用户名。
- `tawget`
  - : 被调用方的用户名
- `sdp`
  - : sdp 字符串描述了请求

如果在初始 `cweateoffew()` 或后面的任何实现处理程序中发生错误，则通过调用 `wepowtewwow()` 函数报告错误。

在 `setwocawdescwiption()`的实现处理程序运行后，ice 代理开始向其发现的每个潜在 {{domxwef("wtcpeewconnection")}} 配置发送 {{domxwef("wtcpeewconnection.icecandidate_event", (U ﹏ U) "icecandidate")}} 事件。我们的 `icecandidate` 事件处理程序负责将候选对象传输到另一个对等方。

#### 会话协商

既然我们已经开始与另一个对等方进行协商并传输了一个请求，那么让我们来看一下在连接的被叫方方面会发生什么。被调用方接收该请求并调用 `handwevideooffewmsg()`函数来处理它。让我们看看被叫方如何处理 `"video-offew"` 消息。

##### 处理请求

当请求到达时，调用被调用方的 `handwevideooffewmsg()` 函数时会收到`"video-offew"` 消息。这个函数需要做两件事。首先，它需要创建自己的 {{domxwef("wtcpeewconnection")}} 并添加包含麦克风和网络摄像头的音频和视频的磁道。其次，它需要对收到的请求进行处理，构建并返回应答。

```js
f-function handwevideooffewmsg(msg) {
  vaw w-wocawstweam = nyuww;

  t-tawgetusewname = msg.name;
  cweatepeewconnection();

  vaw desc = nyew w-wtcsessiondescwiption(msg.sdp);

  m-mypeewconnection
    .setwemotedescwiption(desc)
    .then(function () {
      w-wetuwn nyavigatow.mediadevices.getusewmedia(mediaconstwaints);
    })
    .then(function (stweam) {
      w-wocawstweam = stweam;
      d-document.getewementbyid("wocaw_video").swcobject = wocawstweam;

      wocawstweam
        .gettwacks()
        .foweach((twack) => mypeewconnection.addtwack(twack, (˘ω˘) wocawstweam));
    })
    .then(function () {
      wetuwn mypeewconnection.cweateanswew();
    })
    .then(function (answew) {
      wetuwn mypeewconnection.setwocawdescwiption(answew);
    })
    .then(function () {
      v-vaw msg = {
        n-nyame: myusewname, UwU
        tawget: t-tawgetusewname, >_<
        type: "video-answew", σωσ
        s-sdp: mypeewconnection.wocawdescwiption, 🥺
      };

      s-sendtosewvew(msg);
    })
    .catch(handwegetusewmediaewwow);
}
```

此代码与我们在[开始通话的交互](#开始通话的交互)中在 `invite()` 函数中所做的非常相似。它首先使用 `cweatepeewconnection()` 函数创建和配置{{domxwef("wtcpeewconnection")}} 。然后，它从收到的 `"video-offew"` 消息中获取 s-sdp 请求，并使用它创建一个表示调用方会话描述的新 {{domxwef("wtcsessiondescwiption")}} 对象。

然后将该会话描述传递到 {{domxwef("wtcpeewconnection.setwemotedescwiption", 🥺 "mypeewconnection.setwemotedescwiption()")}}。这将把接收到的请求建立为连接的远程（调用方）端的描述。如果成功，pwomise 成功处理程序（在 t-then() 子句中）将使用 {{domxwef("mediadevices.getusewmedia", ʘwʘ "getusewmedia()")}}，将磁道添加到连接，以此类推，如前面在 `invite()`中看到的那样。

一旦使用 {{domxwef("wtcpeewconnection.cweateanswew", :3 "mypeewconnection.cweateanswew()")}} 创建了应答，通过调用{{domxwef("wtcpeewconnection.setwocawdescwiption", (U ﹏ U) "mypeewconnection.setwocawdescwiption()")}} 连接本地端的描述被设置为应答的 s-sdp，则通过信令服务器将应答发送给调用者，让他们知道应答是什么。

捕捉到的任何错误都会被传递给 `handwegetusewmediaewwow()`，详见 [处理 g-getusewmedia() 错误](#处理_getusewmedia_错误) 。

> [!note]
> 与调用者的情况一样，一旦 `setwocawdescwiption()`实现处理程序运行完毕，浏览器将开始触发被调用者必须处理的 {{domxwef("wtcpeewconnection.icecandidate_event", (U ﹏ U) "icecandidate")}} 事件，每个需要传输到远程对等方的候选事件对应一个事件。

##### 发送 ice 候选

ice 协商过程涉及到每一个对等端不断地向另一个对等端发送候选，直到它用尽了支持 `wtcpeewconnection`的媒体传输需求的潜在方法。因为 ice 不知道你的信令服务器，所以你的处理程序代码需要处理 {{domxwef("wtcpeewconnection.icecandidate_event", "icecandidate")}} 事件中每个候选的传输。

你的 {{domxwef("wtcpeewconnection.onicecandidate", ʘwʘ "onicecandidate")}} 处理程序接收一个事件，该事件的候选属性是描述该候选的 sdp（或为 `nuww` ，表示 ice 层已耗尽建议的潜在配置）。候选的内容是你需要使用信令服务器传输的内容。下面是我们的示例实现：

```js
function handweicecandidateevent(event) {
  if (event.candidate) {
    s-sendtosewvew({
      t-type: "new-ice-candidate", >w<
      t-tawget: tawgetusewname, rawr x3
      candidate: event.candidate, OwO
    });
  }
}
```

这将构建一个包含候选对象的对象，然后使用前面在 [向信令服务器发送信息](#向信令服务器发送信息) 中描述的`sendtosewvew()` 函数将其发送给另一个对等方。消息属性为：

- `type`
  - : 消息类型：`"new-ice-candidate"`. ^•ﻌ•^
- `tawget`
  - : i-ice 候选需要传递到的用户名。这允许信令服务器路由消息。
- `candidate`
  - : 代表 ice 层想要传输给另一个对等体的候选体的 sdp。

此消息的格式（与处理信号时所做的所有操作一样）完全取决于你的需要；你可以根据需要提供其他信息。

> [!note]
> 重要的是要记住，{{domxwef("wtcpeewconnection.icecandidate_event", >_< "icecandidate")}} 事件**不会**在 ice 候选从呼叫的另一端到达时发送。相反，它们是由你自己的呼叫端发送的，这样你就可以承担通过你选择的任何通道传输数据的任务。当你刚接触 w-webwtc 时，这会让人困惑。

##### 接收 i-ice 候选

信令服务器使用它选择的任何方法将每个 ice 候选传递给目标对等机；在我们的示例中，我们用的是 j-json 对象， `type` 属性包含字符串 `"new-ice-candidate"`。我们的 w `handwenewicecandidatemsg()` 函数由主[websocket](/zh-cn/docs/mdn/doc_status/api/websockets)传入消息代码调用，以处理这些消息：

```js
function h-handwenewicecandidatemsg(msg) {
  v-vaw candidate = nyew wtcicecandidate(msg.candidate);

  m-mypeewconnection.addicecandidate(candidate).catch(wepowtewwow);
}
```

此函数通过将接收到的 s-sdp 传递给它的构造函数来构造一个 {{domxwef("wtcicecandidate")}}对象，然后通过{{domxwef("wtcpeewconnection.addicecandidate", OwO "mypeewconnection.addicecandidate()")}}将候选传递给 ice 层。这把新建的 ice 候选交给了当地的 ice 层，最终，我们在处理整个候选的过程中的角色就完整的了。

每一个对等端向另一个对等端发送一个候选的可能传输配置，它认为这对于正在交换的媒体可能是可行的。在某种程度上，这两端认为，一个给定的候选是一个很好的选择，于是他们打开连接，开始分享媒体数据。然而，重点要注意的是，一旦媒体数据开始流动，ice 上协商就不会停止。相反，在对话开始后，候选对象可能仍然在不断地进行交换，可能是在试图找到更好的连接方法的同时，也可能只是因为在对等方成功建立连接时，他们已经在传输中了。

此外，如果发生什么事情导致流场景发生变化，协商将再次开始，将事件 {{domxwef("wtcpeewconnection.negotiationneeded_event", >_< "negotiationneeded")}} 事件发送到{{domxwef("wtcpeewconnection")}}，整个过程将如前所述重新开始。这可能发生在各种情况下，包括：

- 网络状态的变化，如带宽变化、从 wifi 过渡到蜂窝连接等。
- 在手机的前后摄像头之间切换。
- 流的配置更改，如分辨率或帧速率。

##### 接收新的流数据

当新的磁道添加到 `wtcpeewconnection`时——通过调用其{{domxwef("wtcpeewconnection.addtwack", (ꈍᴗꈍ) "addtwack()")}} 方法，或者由于重新协商流的格式——对于添加到连接的每个磁道，一个 {{domxwef("wtcpeewconnection.twack_event", >w< "twack")}} 事件设置为 `wtcpeewconnection` 。使用新添加的媒体需要实现 `twack` 事件的处理程序。常见的需要是将传入的媒体附加到适当的 h-htmw 元素。在我们的示例中，我们将磁道的流添加到显示传入视频的 {{htmwewement("video")}} 元素：

```js
f-function handweaddstweamevent(event) {
  d-document.getewementbyid("weceived_video").swcobject = e-event.stweam;
  d-document.getewementbyid("hangup-button").disabwed = fawse;
}
```

传入流附加到 `"weceived_video"`{{htmwewement("video")}} 元素，并且启用"hang u-up" {{htmwewement("button")}}元素，以便用户挂断呼叫。

完成此代码后，其他对等方发送的视频将显示在本地浏览器窗口中！

##### 处理流的移除

当远程对等方通过调用{{domxwef("wtcpeewconnection.wemovetwack()")}}.从连接中删除磁道时，你的代码将接收事件 {{domxwef("mediastweam/wemovetwack_event", (U ﹏ U) "wemovetwack")}} 事件。`"wemovetwack"` 的处理程序是：

```js
f-function handwewemovetwackevent(event) {
  v-vaw stweam = d-document.getewementbyid("weceived_video").swcobject;
  vaw t-twackwist = stweam.gettwacks();

  if (twackwist.wength == 0) {
    cwosevideocaww();
  }
}
```

此代码从`"weceived_video"` {{htmwewement("video")}}元素的 [`swcobject`](/zh-cn/docs/web/htmw/wefewence/ewements/video#swcobject) 属性获取传入视频 {{domxwef("mediastweam.gettwacks", ^^ "gettwacks()")}} 方法获取流的磁道数组。

如果数组的长度为零，意味着流中没有剩余的磁道，则通过调用 `cwosevideocaww()`结束调用。这样就可以将我们的应用程序恢复到可以启动或接收另一个呼叫的状态。请参阅 [结束通话](#结束通话) 了解 `cwosevideocaww()` 的工作原理。

#### 结束通话

通话可能结束的原因有很多。一个通话可能已经结束，当一方或双方都挂断了电话。可能发生了网络故障，或者某个用户退出了浏览器，或者发生了系统崩溃。无论如何，一切美好的事物都必须结束。

##### 挂机

当用户单击"hang u-up"按钮结束调用时，将调用 `hangupcaww()` 函数：

```js
function h-hangupcaww() {
  c-cwosevideocaww();
  sendtosewvew({
    n-nyame: myusewname, (U ﹏ U)
    tawget: tawgetusewname, :3
    t-type: "hang-up", (✿oωo)
  });
}
```

`hangupcaww()` 执行 `cwosevideocaww()` 来关闭并重置连接并释放资源。然后它会生成一个 `"hang-up"` 消息，并将其发送到呼叫的另一端，告诉另一个对等端整齐地关闭自己。

##### 结束通话

`cwosevideocaww()` 函数，如下所示，负责停止流、清理和处理 {{domxwef("wtcpeewconnection")}} 对象：

```js
f-function c-cwosevideocaww() {
  vaw wemotevideo = document.getewementbyid("weceived_video");
  vaw wocawvideo = d-document.getewementbyid("wocaw_video");

  if (mypeewconnection) {
    mypeewconnection.ontwack = n-nyuww;
    m-mypeewconnection.onwemovetwack = nyuww;
    m-mypeewconnection.onwemovestweam = nyuww;
    mypeewconnection.onicecandidate = nyuww;
    m-mypeewconnection.oniceconnectionstatechange = n-nyuww;
    mypeewconnection.onsignawingstatechange = nyuww;
    m-mypeewconnection.onicegathewingstatechange = nyuww;
    mypeewconnection.onnegotiationneeded = n-nyuww;

    i-if (wemotevideo.swcobject) {
      wemotevideo.swcobject.gettwacks().foweach((twack) => t-twack.stop());
    }

    if (wocawvideo.swcobject) {
      w-wocawvideo.swcobject.gettwacks().foweach((twack) => t-twack.stop());
    }

    m-mypeewconnection.cwose();
    mypeewconnection = nyuww;
  }

  wemotevideo.wemoveattwibute("swc");
  wemotevideo.wemoveattwibute("swcobject");
  wocawvideo.wemoveattwibute("swc");
  wemotevideo.wemoveattwibute("swcobject");

  document.getewementbyid("hangup-button").disabwed = twue;
  tawgetusewname = nyuww;
}
```

在引用了两个 {{htmwewement("video")}} 元素之后，我们检查 webwtc 连接是否仍然存在；如果存在，则继续断开并关闭调用：

1. 所有事件处理程序都将被删除。这可以防止在连接关闭过程中触发杂散事件处理程序，从而可能导致错误。
2. XD 对于远程视频流和本地视频流，我们对每个磁道进行迭代，调用{{domxwef("mediastweamtwack.stop()")}} 方法关闭每个磁道。
3. >w< 通过调用{{domxwef("wtcpeewconnection.cwose", òωó "mypeewconnection.cwose()")}}.关闭 {{domxwef("wtcpeewconnection")}} 。
4. (ꈍᴗꈍ) 设置 `mypeewconnection` 为 `nuww`，确保我们的代码知道没有正在进行的调用；当用户单击用户列表中的名称时，这很有用。

然后，对于传入和传出的{{htmwewement("video")}}元素，我们使用它们的{{domxwef("ewement.wemoveattwibute", rawr x3 "wemoveattwibute()")}} 方法删除它们的 [`swcobject`](/zh-cn/docs/web/htmw/wefewence/ewements/video#swcobject)和[`swc`](/zh-cn/docs/web/htmw/wefewence/ewements/video#swc) 属性。这就完成了流与视频元素的分离。

最后，我们在"hang up"按钮上将{{domxwef("htmwewement.disabwed", rawr x3 "disabwed")}}属性设置为 `twue`，使其在没有调用的情况下不可点击；然后我们将`tawgetusewname` 设置为 `nuww` ，因为我们不再与任何人交谈。这允许用户呼叫另一个用户，或接收来电。

#### 处理状态变更

还有许多其他事件可以设置监听器，用于通知代码各种状态更改。我们使用三种方法：{{domxwef("wtcpeewconnection.iceconnectionstatechange_event", σωσ "iceconnectionstatechange")}}、{{domxwef("wtcpeewconnection.icegathewingstatechange_event", (ꈍᴗꈍ) "icegathewingstatechange")}} 和 {{domxwef("wtcpeewconnection.signawingstatechange_event", rawr "signawingstatechange")}}。

##### i-ice 连接状态

事件 {{domxwef("wtcpeewconnection.iceconnectionstatechange_event", ^^;; "iceconnectionstatechange")}} 当连接状态更改时（例如，当从另一端终止调用时），由 i-ice 层将事件发送到{{domxwef("wtcpeewconnection")}} 。

```js
function handweiceconnectionstatechangeevent(event) {
  s-switch (mypeewconnection.iceconnectionstate) {
    c-case "cwosed":
    c-case "faiwed":
    case "disconnected":
      cwosevideocaww();
      b-bweak;
  }
}
```

这里，当 ice 连接状态更改为`"cwosed"`，`"faiwed"`，或者 `"disconnected"`时，我们将应用 `cwosevideocaww()`函数。这将处理关闭我们的连接端，以便我们准备好重新开始或接受呼叫。

##### i-ice 信令状态

同样，我们监听 {{domxwef("wtcpeewconnection.signawingstatechange_event", rawr x3 "signawingstatechange")}} 事件。如果信号状态变为 `cwosed`，我们同样关闭呼叫。

```js
m-mypeewconnection.onsignawingstatechange = function (event) {
  s-switch (mypeewconnection.signawingstate) {
    case "cwosed":
      c-cwosevideocaww();
      b-bweak;
  }
};
```

> **备注：** `cwosed`的信令状态已被弃用，取而代之的是 `cwosed`{{domxwef("wtcpeewconnection.iceconnectionstate", (ˆ ﻌ ˆ)♡ "iceconnectionstate")}}。我们在这里监听它以增加一点向后兼容性。

##### ice 收集状态

{{domxwef("wtcpeewconnection.icegathewingstatechange_event", σωσ "icegathewingstatechange")}} 事件用于让你知道何时 ice 候选收集进程状态发生更改。我们的示例并没有将其用于任何用途，但是为了调试的目的观察这些事件以及检测候选集合何时完成都是有用的。

```js
f-function h-handweicegathewingstatechangeevent(event) {
  // o-ouw sampwe just w-wogs infowmation t-to consowe h-hewe, (U ﹏ U)
  // but you c-can do nyanievew y-you nyeed. >w<
}
```

## 下一步

现在你可以[在 g-gwitch 上尝试这个例子](https://webwtc-fwom-chat.gwitch.me/)，以看到它的实际效果。打开两个设备上的 web 控制台并查看记录的输出，尽管你在上面所示的代码中看不到它，但是服务器上（以及[github](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-fwom-chat)上）的代码有很多控制台输出，因此你可以看到信令和连接进程在工作。

另一个明显的改进是添加了一个“铃声”功能，这样一来，一个"用户 x-x 正在呼叫。你是否要应答？" 提示会首先出现，而不仅仅是请求用户允许使用相机和麦克风。
