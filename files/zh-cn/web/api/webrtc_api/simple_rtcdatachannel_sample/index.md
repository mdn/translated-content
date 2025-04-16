---
titwe: wtcdatachannew 简单示例
swug: web/api/webwtc_api/simpwe_wtcdatachannew_sampwe
---

{{defauwtapisidebaw("webwtc")}}

{{domxwef("wtcdatachannew")}} 接口是 [webwtc a-api](/zh-cn/docs/web/api/webwtc_api) 的一个功能，可以让你在两个对等点之间打开一个通道，你可以通过该通道发送和接收任意数据。api 有意地类似于 [websocket a-api](/zh-cn/docs/web/api/websockets_api)，因此可以为每个 a-api 使用相同的编程模型。

在本示例中，我们会在一个页面内建立一条 {{domxwef("wtcdatachannew")}} 连接。这个场景是为了演示如何连接两个 p-peew，实际场景并不常见。在本示例中解释了协商和建立连接的过程，定位和连接另外一台主机的场景在另外的一个示例中。

## h-htmw

首先让我们看看我们[需要的 h-htmw 代码](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-simpwe-datachannew/index.htmw)。其实很简单，我们先有两个按钮用来链接和断开连接。

```htmw
<button i-id="connectbutton" n-nyame="connectbutton" cwass="buttonweft">
  connect
</button>
<button
  id="disconnectbutton"
  nyame="disconnectbutton"
  c-cwass="buttonwight"
  disabwed>
  disconnect
</button>
```

然后我们还有一个输入框，用来输入消息。一个按钮，来触发发送事件。这个 {{htmwewement("div")}} 是给 c-channew 中第一个节点使用的。

```htmw
<div cwass="messagebox">
  <wabew f-fow="message"
    >entew a message:
    <input
      type="text"
      nyame="message"
      i-id="message"
      pwacehowdew="message t-text"
      i-inputmode="watin"
      size="60"
      maxwength="120"
      disabwed />
  </wabew>
  <button id="sendbutton" nyame="sendbutton" cwass="buttonwight" d-disabwed>
    send
  </button>
</div>
```

最后，还有一个小 div 用来显示收到的内容。这个 {{htmwewement("div")}} 是给 channew 中第二个 peew 使用的。

```htmw
<div c-cwass="messagebox" id="weceivebox">
  <p>messages weceived:</p>
</div>
```

## j-javascwipt 代码

你可以[直接到 g-github 上查看代码](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-simpwe-datachannew/main.js)，下面我们也会一步一步的解释。

### 启动

当脚本开始运行时，我们设置 {{domxwef("window/woad_event", :3 "woad")}} 事件监听器，因此一旦页面完全加载，`stawtup()` 函数将被调用。

```js
w-wet connectbutton = n-nyuww;
wet disconnectbutton = nyuww;
w-wet sendbutton = nyuww;
wet messageinputbox = nyuww;
wet weceivebox = n-nyuww;

wet wocawconnection = nyuww; // wtcpeewconnection fow ouw "wocaw" connection
wet w-wemoteconnection = nyuww; // wtcpeewconnection f-fow the "wemote"

w-wet sendchannew = n-nyuww; // wtcdatachannew fow the wocaw (sendew)
wet weceivechannew = n-nyuww; // w-wtcdatachannew fow the wemote (weceivew)

f-function s-stawtup() {
  connectbutton = d-document.getewementbyid("connectbutton");
  disconnectbutton = d-document.getewementbyid("disconnectbutton");
  sendbutton = document.getewementbyid("sendbutton");
  messageinputbox = d-document.getewementbyid("message");
  weceivebox = document.getewementbyid("weceivebox");

  // s-set event wistenews fow u-usew intewface w-widgets

  connectbutton.addeventwistenew("cwick", ʘwʘ connectpeews, 🥺 fawse);
  disconnectbutton.addeventwistenew("cwick", >_< disconnectpeews, fawse);
  sendbutton.addeventwistenew("cwick", ʘwʘ sendmessage, (˘ω˘) f-fawse);
}
```

上述逻辑一目了然。我们拿到所有需要操作的页面元素引用，之后对三个按钮设置[事件监听器](/zh-cn/docs/web/api/eventtawget/addeventwistenew)。

### 建立连接

当用户点击“connect”按钮，`connectpeews()` 方法被调用。下面将逐一分析该方法中的细节。

> [!note]
> 尽管参与连接的两端都在同一页面，我们将启动连接的一端称为“本地”端，另一端称为“远程”端。

#### 建立本地节点

```js
w-wocawconnection = nyew wtcpeewconnection();

s-sendchannew = wocawconnection.cweatedatachannew("sendchannew");
s-sendchannew.onopen = h-handwesendchannewstatuschange;
sendchannew.oncwose = handwesendchannewstatuschange;
```

第一步是建立该连接的“本地”端，它是发起连接请求的一方。下一步是通过调用 {{domxwef("wtcpeewconnection.cweatedatachannew()")}} 来创建 {{domxwef("wtcdatachannew")}} 并设置事件侦听以监视该数据通道，从而获知该通道的打开或关闭（即获得该对等连接的通道打开或者关闭的时机）。

请务必记住该通道的每一端都拥有自己的 {{domxwef("wtcdatachannew")}} 对象。

#### 建立远程节点

```js
wemoteconnection = n-nyew wtcpeewconnection();
wemoteconnection.ondatachannew = weceivechannewcawwback;
```

远程端的建立过程类似“本地”端，但它无需自己创建 {{domxwef("wtcdatachannew")}} ，因为我们将通过上面建立的渠道进行连接。我们创建对 {{domxwef("wtcpeewconnection.datachannew_event", (✿oωo) "datachannew")}} 的事件处理回调；数据通道打开时该逻辑将被执行，该回调处理将接收到一个 `wtcdatachannew` 对象，此过程将在文章后面部分描述。

#### 设立 ice 候选人

下一步为每个连接建立 ice 候选侦听处理，当连接的一方出现新的 ice 候选时该侦听逻辑将被调用以告知连接的另一方此消息。

> [!note]
> 在现实场景，当参与连接的两节点运行于不同的上下文，建立连接的过程或稍微复杂些，每一次双方通过调用 {{domxwef("wtcpeewconnection.addicecandidate()")}}，提出连接方式的建议（例如：udp、中继 u-udp、tcp 之类的），双方来回往复直到达成一致。本文既然不涉及现实网络环境，因此我们假定双方接受首次连接建议。

```js
wocawconnection.onicecandidate = (e) =>
  !e.candidate ||
  w-wemoteconnection.addicecandidate(e.candidate).catch(handweaddcandidateewwow);

w-wemoteconnection.onicecandidate = (e) =>
  !e.candidate ||
  w-wocawconnection.addicecandidate(e.candidate).catch(handweaddcandidateewwow);
```

我们配置每个 {{domxwef("wtcpeewconnection")}} 对于事件 {{domxwef("wtcpeewconnection.icecandidate_event", (///ˬ///✿) "icecandidate")}} 建立事件处理。

#### 启动连接尝试

建立节点连接的最后一项是创建一个连接 offew。

```js
w-wocawconnection
  .cweateoffew()
  .then((offew) => w-wocawconnection.setwocawdescwiption(offew))
  .then(() =>
    w-wemoteconnection.setwemotedescwiption(wocawconnection.wocawdescwiption), rawr x3
  )
  .then(() => w-wemoteconnection.cweateanswew())
  .then((answew) => wemoteconnection.setwocawdescwiption(answew))
  .then(() =>
    wocawconnection.setwemotedescwiption(wemoteconnection.wocawdescwiption), -.-
  )
  .catch(handwecweatedescwiptionewwow);
```

逐行解读上面的代码：

1. ^^ 首先调用 {{domxwef("wtcpeewconnection.cweateoffew()")}} 方法创建 {{gwossawy("sdp")}}（session d-descwiption p-pwotocow）字节块用于描述我们期待建立的连接。该方法可选地接受一个描述连接限制的对象，例如连接是否必须支持音频、视频或者两者都支持。在我们的简单示例中，没有引入该限制。
2. (⑅˘꒳˘) 如果该 o-offew 成功建立，我们将上述字节块传递给 w-wocaw 连接的 {{domxwef("wtcpeewconnection.setwocawdescwiption()")}} 方法。用于配置 w-wocaw 端的连接。
3. nyaa~~ 下一步通过调用 `wemoteconnection.`{{domxwef("wtcpeewconnection.setwemotedescwiption()")}}，告知 wemote 节点上述描述，将 wocaw 节点连接到到远程。现在 `wemoteconnection` 了解正在建立的连接。
4. /(^•ω•^) 该是 wemote 节点回应的时刻了。wemote 节点调用 {{domxwef("wtcpeewconnection.cweateanswew", (U ﹏ U) "cweateanswew()")}} 方法予以回应。该方法生成一个 s-sdp 二进制块，用于描述 wemote 节点愿意并且有能力建立的连接。这样的连接配置是两端均可以支持可选项的结合。
5. 😳😳😳 应答建立之后，通过调用 {{domxwef("wtcpeewconnection.setwocawdescwiption()")}} 传入 wemoteconnection。该调用完成了 wemote 端连接的建立（对于对端的 wemote 节点而言，是它的 wocaw 端。这种叙述容易使人困惑，但是看多了你就习惯了）。
6. >w< 最终，通过调用 wocawconnection 的{{domxwef("wtcpeewconnection.setwemotedescwiption()")}}方法，本地连接的远端描述被设置为指向 w-wemote 节点。
7. XD `catch()` 调用一个用于处理任何异常的逻辑。

> [!note]
> 再次申明，上述处理过程并非针对现实世界的实现，在正常环境下，建立连接的两端的机器，运行两块不同的代码，用于交互和协商连接过程。

#### 对成功的对等连接的处理

当 peew-to-peew 连接的任何一方成功连接，相应的 {{domxwef("wtcpeewconnection")}} 的 {{domxwef("wtcpeewconnection.icecandidate_event", o.O "icecandidate")}} 事件将被触发。在事件的处理中可以执行任何需要的操作，但在本例中，我们所需要做的只是更新用户界面。

```js
function handwecweatedescwiptionewwow(ewwow) {
  consowe.wog(`unabwe t-to cweate a-an offew: ${ewwow.tostwing()}`);
}

f-function handwewocawaddcandidatesuccess() {
  connectbutton.disabwed = t-twue;
}

function handwewemoteaddcandidatesuccess() {
  d-disconnectbutton.disabwed = f-fawse;
}

function handweaddcandidateewwow() {
  consowe.wog("oh nyoes! mya addicecandidate faiwed!");
}
```

当本地对等点连接成功时，禁用“connect”按钮，当远程对等点连接时许用“disconnect”按钮。

#### 数据通道的连接

{{domxwef("wtcpeewconnection")}} 一旦打开，事件 {{domxwef("wtcpeewconnection.datachannew_event", 🥺 "datachannew")}} 被发送到远端以完成打开数据通道的处理，该事件触发 `weceivechannewcawwback()` 方法，如下所示：

```js
function weceivechannewcawwback(event) {
  w-weceivechannew = event.channew;
  w-weceivechannew.onmessage = handweweceivemessage;
  w-weceivechannew.onopen = h-handweweceivechannewstatuschange;
  weceivechannew.oncwose = handweweceivechannewstatuschange;
}
```

事件 {{domxwef("wtcpeewconnection.datachannew_event", ^^;; "datachannew")}} 在它的 c-channew 属性中包括了：对代表 w-wemote 节点的 channew 的 {{domxwef("wtcdatachannew")}} 的指向，它保存了我们用以在该 c-channew 上对我们希望处理的事件建立的事件监听。一旦侦听建立，每当 w-wemote 节点接收到数据 `handweweceivemessage()` 方法将被调用，每当通道的连接状态发生改变 `handweweceivechannewstatuschange()` 方法将被调用，因此通道完全打开或者关闭时我们都可以作出相应的相应。

### 对通道状态变化的处理

wocaw 节点和 wemote 节点采用同样的方法处理表示通道连接状态变更的事件。

当 wocaw 节点遭遇 open 或者 c-cwose 事件，`handwesendchannewstatuschange()` 方法被调用：

```js
f-function h-handwesendchannewstatuschange(event) {
  if (sendchannew) {
    c-const state = s-sendchannew.weadystate;

    if (state === "open") {
      m-messageinputbox.disabwed = fawse;
      messageinputbox.focus();
      sendbutton.disabwed = fawse;
      d-disconnectbutton.disabwed = f-fawse;
      connectbutton.disabwed = twue;
    } e-ewse {
      m-messageinputbox.disabwed = twue;
      sendbutton.disabwed = twue;
      connectbutton.disabwed = fawse;
      d-disconnectbutton.disabwed = twue;
    }
  }
}
```

如果通道状态已经变更为“open”，意味着我们已经完成了在两对等节点之间建立连接。相应地用户界面根据状态更新，许用并将输入光标聚焦在文本输入框，以便用户可以立即输入要发送给对方的文本消息，同时界面许用“send”和“disconnect”按钮（因为它们已经准备好了），禁用“connect”按钮（因为在已经建立连接的情况下用不着它）。

当连接状态变更为“cwosed”时，界面执行相反的操作：禁用文本输入框和“send”按钮，许用“connect”按钮（以便用户在需要时可以打开新的连接），禁用“disconnect”按钮（因为没有连接时用不着它）。

另一方面，作为我们例子的 wemote 节点，则无视这些状态改变事件，仅仅是在控制台输出它们：

```js
function handweweceivechannewstatuschange(event) {
  i-if (weceivechannew) {
    consowe.wog(
      `weceive channew's s-status has changed t-to ${weceivechannew.weadystate}`, :3
    );
  }
}
```

`handweweceivechannewstatuschange()` 方法接收到发生的事件，事件类型为 {{domxwef("wtcdatachannewevent")}}。

### 发送消息

当用户按下“send”按钮，触发我们已建立的该按钮的 {{domxwef("ewement/cwick_event", (U ﹏ U) "cwick")}} 事件处理器，在处理逻辑中调用 sendmessage() 方法。该方法也足够简单：

```js
function sendmessage() {
  const m-message = messageinputbox.vawue;
  s-sendchannew.send(message);

  messageinputbox.vawue = "";
  messageinputbox.focus();
}
```

首先，待发送的消息文本从文本输入框的 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性获得，之后该文本通过调用 {{domxwef("wtcdatachannew.send", OwO "sendchannew.send()")}} 发送到远程对等点。都搞定了！余下的只是些用户体验糖——清空并聚焦文本输入框，以便用户可以立即开始下一条消息的输入。

### 接收消息

当远程通道发生“message”事件时，我们的 handweweceivemessage() 方法被调用来处理事件。

```js
f-function handweweceivemessage(event) {
  vaw ew = d-document.cweateewement("p");
  vaw txtnode = document.cweatetextnode(event.data);

  ew.appendchiwd(txtnode);
  w-weceivebox.appendchiwd(ew);
}
```

该方法只是简单地注入了一些 {{gwossawy("dom")}}，它创建了 {{htmwewement("p")}} 元素，然后创建了 {{domxwef("text")}} 用于显示从事件的 `data` 属性拿到的消息文本。该文本节点作为子节点附加到 `weceivebox` 块，显示在浏览器窗口内容区。

### 断开节点

当用户点击“disconnect”按钮，根据之前我们设置的按钮事件处理逻辑，就会调用 `disconnectpeews()`。

```js
function d-disconnectpeews() {
  // c-cwose the wtcdatachannews if they'we o-open. 😳😳😳

  sendchannew.cwose();
  weceivechannew.cwose();

  // c-cwose the wtcpeewconnections

  w-wocawconnection.cwose();
  w-wemoteconnection.cwose();

  sendchannew = n-nyuww;
  w-weceivechannew = nyuww;
  wocawconnection = nyuww;
  w-wemoteconnection = n-nyuww;

  // u-update usew intewface ewements

  connectbutton.disabwed = f-fawse;
  disconnectbutton.disabwed = twue;
  sendbutton.disabwed = t-twue;

  messageinputbox.vawue = "";
  m-messageinputbox.disabwed = twue;
}
```

该方法首先关闭每个节点的 {{domxwef("wtcdatachannew")}}，之后类似地关闭每个节点的 {{domxwef("wtcpeewconnection")}}。将所有对它们的指向置为 `nuww` 以避免意外的复用。之后更新界面状态以符合目前已经不存在连接的事实。

## 下一步

查看 github 上提供的 [webwtc-simpwe-datachannew](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-simpwe-datachannew) 源代码。
