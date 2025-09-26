---
title: 建立连接：WebRTC 完美协商模式
slug: Web/API/WebRTC_API/Perfect_negotiation
l10n:
  sourceCommit: 0b2db5ae5d76003622a3fb7dab024a1e31e72561
---

{{DefaultAPISidebar("WebRTC")}}

本文介绍了 WebRTC **完美协商**，说明了它的工作原理以及为什么它是对等方之间协商 WebRTC 连接的推荐方式，并提供了示例代码来演示该技术。

由于 [WebRTC](/zh-CN/docs/Web/API/WebRTC_API) 并没有强制要求在协商新对等连接期间使用特定的传输机制来发送信令，因此它具有很高的灵活性。不过，尽管信令消息的传输和通信具有这种灵活性，在可能的情况下，你应遵循一种推荐的设计模式，即完美协商。

在首次部署支持 WebRTC 的浏览器后，人们意识到协商过程的某些部分比典型用例所需的更为复杂。这是由于应用程序接口的一些小问题和一些需要预防的潜在竞争条件造成的。这些问题后来都得到了解决，进而让我们大大简化了 WebRTC 协商过程。完美协商模式是 WebRTC 早期改进协商方式的一个例子。

## 完美协商的概念

完美协商可以使协商过程与应用程序其他逻辑无缝且完全的分离。协商本质上是一种不对称操作：一方需要充当“调用者”，而另一方则是“被调用者”。完美的协商模式通过将这种差异分离到独立的协商逻辑中来消除这种差异，因此你的应用程序无需关心它是连接的哪一端。就应用程序而言，是发出呼叫还是接收呼叫并无区别。

完美协商的最大优点是，调用方和被调用方使用相同的代码，因此无需编写重复或其他额外的协商代码。

完美协商的工作原理是，在协商过程中为两个对等网络中的每一个分配一个角色，该角色与 WebRTC 连接状态完全分离：

- 一个**礼貌的**对等点，它会使用 ICE 回滚来防止与传入的邀约发生碰撞。从本质上讲，礼貌的对等点可以发出邀约，但如果其他对等点发出邀约，它就会回应：“好吧，没关系，放弃我的邀约，我会考虑你的邀约。”
- 一个**无礼的**对等点，总是忽略与自己的邀约相冲突的邀约。它从不向有礼貌的对等点道歉或放弃任何东西。只要发生碰撞，无礼的对等点就会获胜。

这样，如果已发送的邀约之间发生碰撞，双方都能清楚地知道应该如何处理。对错误条件的响应也变得更可预测。

如何确定哪个对等点是礼貌的，哪个是不礼貌的，一般由你自己决定。可以简单地将礼貌角色分配给第一个连接到信令服务器的对等点，也可以做一些更复杂的事情，比如让对等点交换随机数字，然后将礼貌角色分配给获胜者。无论如何确定，一旦将这些角色分配给两个对等点，它们就可以共同管理信令，这样就不会出现死锁，也不需要很多额外的代码来管理。

需要牢记的重要一点是：在完美协商过程中，呼叫方和被呼叫方的角色可以互换。如果有礼貌的对等点是主叫方，它发送了一个邀约，但与无礼的对等点发生了碰撞，那么有礼貌的对等点就会放弃它的邀约，转而回复它从无礼的对等点收到的邀约。这样，有礼貌的对等点就从呼叫方变成了被呼叫方！

## 实现完美协商

让我们来看一个实现完美协商模式的示例。代码假定了一个用于与信令服务器通信的 `SignalingChannel` 类。当然，你自己的代码可以使用任何你喜欢的信令技术。

请注意，该代码对参与连接的两个对等点都是相同的。

### 创建信令和对等连接

首先，需要打开信令通道并创建 {{domxref("RTCPeerConnection")}} 。这里列出的 {{Glossary("STUN")}} 服务器显然不是真正的服务器；你需要将 `stun.myserver.tld` 替换为真正的 STUN 服务器地址。

```js
const config = {
  iceServers: [{ urls: "stun:stun.mystunserver.tld" }],
};

const signaler = new SignalingChannel();
const pc = new RTCPeerConnection(config);
```

这段代码还使用“selfview”和“remoteview”类获取 {{HTMLElement("video")}} 元素；这些元素将分别包含本地用户的自我视图和来自远程对等点的输入流视图。

### 连接到远程对等点

```js
const constraints = { audio: true, video: true };
const selfVideo = document.querySelector("video.selfview");
const remoteVideo = document.querySelector("video.remoteview");

async function start() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);

    for (const track of stream.getTracks()) {
      pc.addTrack(track, stream);
    }
    selfVideo.srcObject = stream;
  } catch (err) {
    console.error(err);
  }
}
```

想要互相对话的两个端点中的任何一个都可以调用上面显示的 `start()` 函数。谁先调用并不重要，只需进行协商即可。

这与旧的 WebRTC 连接建立代码没有显著区别。通过调用 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} 获取用户的摄像头和麦克风。然后，将得到的媒体轨道通过传入 {{domxref("RTCPeerConnection.addTrack", "addTrack()")}} 添加到 {{domxref("RTCPeerConnection")}} 中。最后，将由 `selfVideo` 常量指示的自视图 {{HTMLElement("video")}} 元素的媒体源设置为摄像头和麦克风流，这样本地用户就能看到对方看到的内容。

### 处理传入的轨道

接下来，我们需要为 {{domxref("RTCPeerConnection.track_event", "track")}} 事件设置一个处理器，以处理该对等连接协商接收的入站视频和音频轨迹。为此，我们实现了 {{domxref("RTCPeerConnection")}} 的 {{domxref("RTCPeerConnection.track_event", "ontrack")}} 事件处理器。

```js
pc.ontrack = ({ track, streams }) => {
  track.onunmute = () => {
    if (remoteVideo.srcObject) {
      return;
    }
    remoteVideo.srcObject = streams[0];
  };
};
```

当发生 `track` 事件时，将执行该处理器。使用[解构](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring)可以提取 {{domxref("RTCTrackEvent")}} 的 {{domxref("RTCTrackEvent.track", "track")}} 和 {{domxref("RTCTrackEvent.streams", "streams")}} 属性。前者是接收到的视频轨或音频轨。后者是一个 {{domxref("MediaStream")}} 对象数组，每个对象代表一个包含该音轨的流（在极少数情况下，一个音轨可能同时属于多个流）。在我们的例子中，这将始终包含一个流，位于 0 号索引，因为我们之前在 `addTrack()` 中传递了一个流。

我们为轨道添加一个取消静音事件处理器，因为轨道一旦开始接收数据包，就会取消静音。我们将接收代码的其余部分放在这里。

如果我们已经从远程对等方接收到视频（我们可以通过远程视图的 `<video>` 元素的 {{domxref("HTMLMediaElement.srcObject", "srcObject")}} 属性已经有值来判断），我们不做任何操作。否则，我们将 `srcObject` 设置为 `streams` 数组中索引 0 处的流。

### 完美协商的逻辑

现在我们进入真正完美协商的逻辑，它的功能完全独立于应用程序的其他部分。

#### 处理需要谈判的事件

首先，我们实现了 {{domxref("RTCPeerConnection")}} 事件处理器 {{domxref("RTCPeerConnection.negotiationneeded_event", "onnegotiationneeded")}} 来获取本地描述，并使用信令通道将其发送给远程对等点。

```js
let makingOffer = false;

pc.onnegotiationneeded = async () => {
  try {
    makingOffer = true;
    await pc.setLocalDescription();
    signaler.send({ description: pc.localDescription });
  } catch (err) {
    console.error(err);
  } finally {
    makingOffer = false;
  }
};
```

请注意，不带参数的 `setLocalDescription()` 会根据当前的 {{domxref("RTCPeerConnection.signalingState", "signalingState")}} 自动创建和设置适当的描述。所设置的描述是对远程对等方最新邀约的回应，*或*是一个新创建的邀约（如果没有正在进行的协商）。在这里，它将始终是一个 `offer`，因为需要协商的事件只在 `stable` 状态下触发。

我们将布尔变量 `makingOffer` 设为 `true`，表示我们正在准备邀约。为了避免竞态条件，我们稍后将使用该值而不是信令状态来确定是否正在处理邀约，因为 {{domxref("RTCPeerConnection.signalingState", "signalingState")}} 的值是异步变化的，这引入了产生干扰（glare）的机会。

一旦邀约创建、设置和发送完成（或发生错误），`makingOffer` 就会被设回 `false`。

#### 处理传入的 ICE 候选者

接下来，我们需要处理 `RTCPeerConnection` 事件 {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}，这是本地 ICE 层如何将候选者传递给我们，以便通过信令通道传递给远程对等方的方式。

```js
pc.onicecandidate = ({ candidate }) => signaler.send({ candidate });
```

它会获取 ICE 事件的 `candidate` 成员，并将其传递给信令通道的 `send()` 方法，以便通过信令服务器发送给远程对等设备。

#### 在信令通道上处理收到的信息

最后一块拼图是处理来自信令服务器的传入信息的代码。在这里，它是作为信令通道对象上的 `onmessage` 事件处理器来实现的。每次信令服务器发送消息时，都会调用该方法。

```js
let ignoreOffer = false;

signaler.onmessage = async ({ data: { description, candidate } }) => {
  try {
    if (description) {
      const offerCollision =
        description.type === "offer" &&
        (makingOffer || pc.signalingState !== "stable");

      ignoreOffer = !polite && offerCollision;
      if (ignoreOffer) {
        return;
      }

      await pc.setRemoteDescription(description);
      if (description.type === "offer") {
        await pc.setLocalDescription();
        signaler.send({ description: pc.localDescription });
      }
    } else if (candidate) {
      try {
        await pc.addIceCandidate(candidate);
      } catch (err) {
        if (!ignoreOffer) {
          throw err;
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
};
```

在通过 `onmessage` 事件处理器接收到来自 `SignalingChannel` 的传入消息时，会对接收到的 JSON 对象进行解构，以获得其中的 `description` 或 `candidate`。如果传入的消息有 `description`，那么它要么是对方发出的邀约，要么是对方发出的答复。

另一方面，如果消息中包含一个 `candidate` 字段，那么它就是作为[渐进式 ICE](/zh-CN/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) 的一部分，从远程对等方接收到的 ICE 候选信息。这个候选项将通过调用 {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} 方法传递给本地的 ICE 处理层。

##### 在收到描述时

如果我们收到了 `description`，我们就会准备对收到的邀约或答复做出回应。首先，我们要检查是否处于可以接受邀约的状态。如果连接的信令状态不是 `stable`，或者连接的我们这一端已经开始发出自己的邀约，那么我们就需要注意邀约冲突。

如果我方是无礼的对等方，并且正在接收一个碰撞邀约，我们将不设置描述而返回，并将 `ignoreOffer` 设置为 `true`，以确保我们也忽略对方可能在属于该邀约的信令信道上发送给我们的所有候选信息。这样做可以避免错误噪声，因为我们从未将此邀约通知我方。

如果我们是有礼貌的对等点，而我们收到的是一个碰撞邀约，我们不需要做任何特别的事情，因为我们现有的邀约会在下一步自动回滚。

在确定要接受邀约后，我们将通过调用 {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} 为传入的邀约设置远程描述。这会让 WebRTC 知道对方的建议配置是什么。如果我们是礼貌的对等点，就会放弃我们的邀约，接受新的邀约。

如果新设置的远程描述是一个邀约，我们就会要求 WebRTC 通过调用 {{domxref("RTCPeerConnection")}} 方法 {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} 来选择合适的本地配置，而无需参数。这样，`setLocalDescription()` 就会自动生成适当的应答，以回应收到的邀约。然后，我们通过信令信道将应答发送回第一个对等点。

## 使协商完美

如果你好奇什么让完美的协商如此完美，那么这一部分就是为你准备的。在这里，我们将会查看每一个对 WebRTC API 所做的更改以及最佳实践建议，以使完美的协商成为可能。

### 无冲突的 setLocalDescription()

过去，{{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} 事件经常以一种容易导致冲突的方式处理——即容易产生干扰，也就是说，容易发生冲突，导致双方对等点同时尝试进行邀约，从而导致其中一方或另一方出现错误并中止连接尝试。

#### 传统方式

考虑这个 {{domxref("RTCPeerConnection.negotiationneeded_event", "onnegotiationneeded")}} 事件处理器：

```js example-bad
pc.onnegotiationneeded = async () => {
  try {
    await pc.setLocalDescription(await pc.createOffer());
    signaler.send({ description: pc.localDescription });
  } catch (err) {
    console.error(err);
  }
};
```

由于 {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} 方法是异步的，并且需要一些时间来完成，因此在此期间远程对等点可能会尝试发送自己的邀约，导致我们离开 `stable` 状态并进入 `have-remote-offer` 状态，这意味着我们现在正在等待对邀约的响应。但是一旦它接收到我们刚刚发送的邀约，远程对等点也是如此。这将使得双方都处于连接尝试无法完成的状态。

#### 使用更新后的 API 实现完美的协商

正如在[实现完美协商](#实现完美协商)部分所示，我们可以通过引入一个变量（这里称为 `makingOffer`），用于指示我们正在发送一个邀约的过程，并利用更新后的 `setLocalDescription()` 方法来消除这个问题。

```js example-good
let makingOffer = false;

pc.onnegotiationneeded = async () => {
  try {
    makingOffer = true;
    await pc.setLocalDescription();
    signaler.send({ description: pc.localDescription });
  } catch (err) {
    console.error(err);
  } finally {
    makingOffer = false;
  }
};
```

我们在调用 `setLocalDescription()` 之前立即设置 `makingOffer`，以防止干扰发送此邀约，并且在将邀约发送到信令服务器后（或者发生错误，导致无法发出邀约）才将其清除为 `false`。通过这种方式，我们避免了邀约发生冲突的风险。

### 在 setRemoteDescription() 中自动回滚

实现完美协商的关键组件是有礼貌的对等点的概念，如果它在等待对一个邀约的答复时收到一个邀约，它总是会自动回滚。以前，触发回滚涉及手动检查回滚条件并手动触发回滚，方法是将本地描述设置为类型为 `rollback` 的描述，如下所示：

```js
await pc.setLocalDescription({ type: "rollback" });
```

这样做会将本地对等点从先前的任何状态返回到 `stable` {{domxref("RTCPeerConnection.signalingState", "signalingState")}}。由于对等点只能在 `stable` 状态下接受邀约，因此对等点已经撤回了自己的邀约，并准备接收来自远程（不礼貌的）对等点的邀约。然而，正如我们将在接下来看到的，这种方法存在问题。

#### 使用旧的 API 实现完美协商

在完美协商过程中，使用先前的 API 来实现传入的协商消息可能如下所示：

```js example-bad
signaler.onmessage = async ({ data: { description, candidate } }) => {
  try {
    if (description) {
      if (description.type === "offer" && pc.signalingState !== "stable") {
        if (!polite) {
          return;
        }

        await Promise.all([
          pc.setLocalDescription({ type: "rollback" }),
          pc.setRemoteDescription(description),
        ]);
      } else {
        await pc.setRemoteDescription(description);
      }

      if (description.type === "offer") {
        await pc.setLocalDescription(await pc.createAnswer());
        signaler.send({ description: pc.localDescription });
      }
    } else if (candidate) {
      try {
        await pc.addIceCandidate(candidate);
      } catch (err) {
        if (!ignoreOffer) {
          throw err;
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
};
```

由于回滚通过推迟更改直到下一次协商（在当前协商完成后立即开始）来实现，所以有礼貌的对等点需要知道何时需要丢弃收到的邀约，如果它当前正在等待对已发送的邀约的回复。

代码检查消息是否是一个邀约，并且如果是，则检查本地信令状态是否不是 `stable`。如果不是稳定的，并且本地对等点是有礼貌的，那么我们需要触发回滚，以便我们可以用新收到的邀约替换正在传出的邀约。这两步都必须在我们继续处理收到的邀约之前完成。

由于没有一个单独的“回滚并使用此邀约”，在有礼貌的对等方上执行此更改需要两个步骤，在 [`Promise.all()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) 的上下文中执行，该方法用于确保两个语句在继续处理接收到的邀约之前完全执行。第一个语句触发回滚，第二个语句将远程描述设置为接收到的描述，从而完成用新收到的邀约替换先前*发送的*邀约的过程。有礼貌的对等方现在成为被叫方而不是主叫方。

来自不礼貌对等方的所有其他描述都像平常一样被处理，通过将它们传递给 {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}}。

最后，我们通过调用 `setLocalDescription()` 处理收到的邀约，将我们的本地描述设置为由 {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} 返回的描述。然后，通过信令通道将其发送到有礼貌的对等方。

如果传入消息是 ICE 候选而不是 SDP 描述，则通过将其传递给 {{domxref("RTCPeerConnection")}} 方法 {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} 将其传递到 ICE 层。如果这里发生错误，并且我们没有因为在碰撞期间是不礼貌的对等方而刚刚丢弃了一个邀约，我们将 [`throw`](/zh-CN/docs/Web/JavaScript/Reference/Statements/throw) 出错误，以便调用者可以处理它。否则，我们将放弃错误，忽略它，因为在这种情况下它并不重要。

#### 使用更新后的 API 实现完美协商

更新后的代码利用了这样一个事实，即现在你可以调用 {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} 而不带参数，因此它会为你完成正确的操作，以及 `setRemoteDescription()` 自动回滚（如果需要的话）。这使得我们摆脱了使用 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 来保持时间顺序的需要，因为回滚变成了 `setRemoteDescription()` 调用的基本原子部分。

```js example-good
let ignoreOffer = false;

signaler.onmessage = async ({ data: { description, candidate } }) => {
  try {
    if (description) {
      const offerCollision =
        description.type === "offer" &&
        (makingOffer || pc.signalingState !== "stable");

      ignoreOffer = !polite && offerCollision;
      if (ignoreOffer) {
        return;
      }

      await pc.setRemoteDescription(description);
      if (description.type === "offer") {
        await pc.setLocalDescription();
        signaler.send({ description: pc.localDescription });
      }
    } else if (candidate) {
      try {
        await pc.addIceCandidate(candidate);
      } catch (err) {
        if (!ignoreOffer) {
          throw err;
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
};
```

尽管代码大小的差异很小，而且复杂性也没有减少多少，但代码的可靠性大大提高了。让我们深入代码，看看现在它是如何工作的。

##### 在接收到描述时

在修改后的代码中，如果接收到的消息是一个 SDP `description`，我们会检查它是否在我们试图传输一个提议时到达。如果接收到的消息是一个 `offer`，并且本地对等方是不礼貌的对等方，并且发生了碰撞，那么我们会忽略该提议，因为我们希望继续尝试使用已经在发送过程中的提议。这就是不礼貌的对等方的作用。

在任何其他情况下，我们将尝试处理传入的消息。这从将远程描述设置为接收到的 `description` 开始，通过将其传递给 {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} 来实现。这将在需要时自动执行回滚，因此无论我们是在处理提议还是回复，都可以正常工作。

在这一点上，如果接收到的消息是一个 `offer`，我们将使用 `setLocalDescription()` 创建并设置适当的本地描述，然后通过信令服务器将其发送到远程对等方。

##### 接收 ICE 候选者

另一方面，如果接收到的消息是一个 ICE 候选者，即 JSON 对象包含一个 `candidate` 成员，我们通过调用 {{domxref("RTCPeerConnection")}} 方法 {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} 将其传递给本地 ICE 层。如果我们刚刚丢弃了一个提议，那么错误会像以前一样被忽略。

### 添加了显式的 restartIce() 方法

先前用于在处理 {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} 事件时触发 ICE 重新启动的技术存在显著缺陷。这些缺陷使得在协商过程中安全可靠地触发重新启动变得困难。完美的协商改进通过向 `RTCPeerConnection` 添加了一个新的 {{domxref("RTCPeerConnection.restartIce", "restartIce()")}} 方法来修复了这个问题。

#### 传统方法

在过去，如果遇到 ICE 错误并需要重新启动协商，你可能会像这样做：

```js example-bad
pc.onnegotiationneeded = async (options) => {
  await pc.setLocalDescription(await pc.createOffer(options));
  signaler.send({ description: pc.localDescription });
};
pc.oniceconnectionstatechange = () => {
  if (pc.iceConnectionState === "failed") {
    pc.onnegotiationneeded({ iceRestart: true });
  }
};
```

这种方法存在许多可靠性问题和明显的错误（比如当信令状态不是 `stable` 时，{{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}} 事件触发时会失败），但你实际上没有其他方法可以请求 ICE 重新启动，除了创建并发送一个带有 `iceRestart` 选项设置为 `true` 的提议。因此，发送重新启动请求需要直接调用 `negotiationneeded` 事件的处理器。要做到正确是相当困难的，而且很容易出错，因此错误很常见。

#### 使用 restartIce()

现在，你可以使用 `restartIce()` 来更清晰地执行此操作：

```js example-good
let makingOffer = false;

pc.onnegotiationneeded = async () => {
  try {
    makingOffer = true;
    await pc.setLocalDescription();
    signaler.send({ description: pc.localDescription });
  } catch (err) {
    console.error(err);
  } finally {
    makingOffer = false;
  }
};
pc.oniceconnectionstatechange = () => {
  if (pc.iceConnectionState === "failed") {
    pc.restartIce();
  }
};
```

通过这种改进的技术，不再直接调用带有选项的 `onnegotiationneeded` 来触发 ICE 重新启动，而是在 [ICE 连接状态](/zh-CN/docs/Web/API/RTCPeerConnection/iceConnectionState)为 `failed` 时调用 {{domxref("RTCPeerConnection.restartIce", "restartIce()")}}。`restartIce()` 告诉 ICE 层在下一个发送的 ICE 消息中自动添加 `iceRestart` 标志。问题解决了！

### 在 pranswer 状态下不再支持回滚

最引人注目的 API 变化之一是，当处于 `have-remote-pranswer` 或 `have-local-pranswer` 状态时，现在不能再执行回滚操作。幸运的是，当使用完美的协商时，通常情况下根本不需要这样做，因为在必要时会在执行回滚之前捕获并防止出现这些情况。

因此，尝试在这两种 `pranswer` 状态之一中触发回滚操作将会抛出一个 `InvalidStateError`。

## 参见

- [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API)
- [WebRTC 会话的生命周期](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime)
