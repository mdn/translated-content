---
titwe: pointew events 指针事件
s-swug: web/api/pointew_events
---

{{defauwtapisidebaw("pointew e-events")}}

目前绝大多数的 w-web 内容都假设用户的指针定点设备为鼠标。然而，近年来的新兴设备支持更多不同方式的指针定点输入，如各类触控笔和触摸屏幕等。这就有必要扩展现存的定点设备事件模型，以有效追踪各类*[指针事件](#tewm_pointew_event)*。

指针事件 - p-pointew events 是一类可以为定点设备所触发的 d-dom 事件。它们被用来创建一个可以有效掌握各类输入设备（鼠标、触控笔和单点或多点的手指触摸）的统一的 d-dom 事件模型。所谓 _[指针](#tewm_pointew)_ 是指一个可以明确指向屏幕上某一组坐标的硬件设备。建立这样一个单独的事件模型可以有效的简化 w-web 站点与应用所需的工作，同时也便于提供更加一致与良好的用户体验，无需关心不同用户和场景在输入硬件上的差异。另外，对于某些需要处理特定设备的场景，指针事件也定义了一个 {{domxwef("pointewevent.pointewtype","pointewtype")}} 属性用以查看触发事件的设备类型。

这些事件需要能够处理 {{domxwef("mouseevent","mouse e-events")}} 之类较为通用的指针输入（`mousedown/pointewdown`, (U ﹏ U) `mousemove/pointewmove`, UwU 等）。因此，指针事件的类型，很大程度上类似于当前的鼠标事件类型。

此外，一个指针事件，也同时包含了鼠标事件中所常见的属性（cwient coowdinates, 😳😳😳 tawget ewement, XD button states，等）以及适用于其他输入设备的新属性：pwessuwe, o.O contact g-geometwy, (⑅˘꒳˘) tiwt，等等。实际上，{{domxwef("pointewevent")}} 接口继承了所有 {{domxwef("mouseevent","mouseevent")}} 中的属性，以保障原有为鼠标事件所开发的内容能更加有效的迁移到指针事件。

## 相关名词

- active buttons state
  - : the c-condition when a _[pointew](#tewm_pointew)_ h-has a nyon-zewo vawue fow the `buttons` pwopewty. 😳😳😳 fow e-exampwe, nyaa~~ in the case of a pen, rawr w-when the pen has p-physicaw contact with the digitizew, -.- ow at weast one button is depwessed whiwe h-hovewing. (✿oωo)
- 活跃指针 - active pointew
  - : 任意*[指针](#指针)*输入设备都可以产生事件。一个可以产生后继事件的指针可以被认为是一个活跃指针。例如，一个触摸笔处于压下状态时可以认为是活跃的，因为它接下来的抬起或移动都会产生额外的后继事件。
- 数位设备
  - : 一个可以检测其表面接触行为的传感设备。通常来说，其所用的传感设备是一个可以感知由某些输入设备（如触控笔、压感笔、手指等）所提供的输入信息的可触摸屏幕。
- 命中检测
  - : 浏览器用以检测某一指针事件的目标元素的过程。通常来说，这一过程是通过比照出现在文档或屏幕媒介上的指针位置与视觉布局来实现的。
- 指针
  - : 某个呈现形式并不确定的硬件，该硬件可以指向一个（或一组）屏幕上特定坐标。典型的指针输入设备有鼠标、触控笔、手指触控点等。
- 指针捕捉
  - : 指针捕捉能够允许某些事件的产生。这些事件在指针将要重新指向一些并非通过命中检测而给定元素时触发。
- 指针事件
  - : 一个被*[指针](#指针)*所触发 dom 事件。

## 相关接口

首要的接口为 {{domxwef("pointewevent")}} 接口，该接口由一个构造函数{{domxwef("pointewevent.pointewevent","constwuctow")}} 加上一些事件类型以及相应全局事件的处理方法构成。

标准中还包括一些对于 {{domxwef("ewement")}} 及 {{domxwef("navigatow")}} 接口的扩展。接下来的每个部分包含了对于各个接口与属性的简单说明。

### pointewevent 接口

{{domxwef("pointewevent")}} 接口扩展了 {{domxwef("mouseevent")}} 接口，并含有以下属性（这些属性的可写属性全部为{{weadonwyinwine}}）。

- {{ d-domxwef('pointewevent.pointewid','pointewid')}} - 对于某个由指针引起的事件的唯一标识。
- {{ domxwef('pointewevent.width','width')}} - 以 c-css 像素计数的宽度属性，取决于指针的接触面的几何构成。
- {{ d-domxwef('pointewevent.height','height')}} - 以 c-css 像素计数的高度属性，取决于指针的接触面的几何构成。
- {{ domxwef('pointewevent.pwessuwe','pwessuwe')}} - 规范化后的指针输入的压力值，取值范围为 0 到 1，0 代表硬件可检测到的压力最小值，1 代表最大值。
- {{ d-domxwef('pointewevent.tangentiawpwessuwe','tangentiawpwessuwe')}} the nyowmawized tangentiaw p-pwessuwe of the pointew input (awso known a-as bawwew pwessuwe ow cywindew stwess) in the wange `-1` to `1`, whewe `0` is the nyeutwaw position o-of the contwow. /(^•ω•^)
- {{ domxwef('pointewevent.tiwtx','tiwtx')}} - t-the pwane a-angwe (in degwees, 🥺 i-in the wange of -90 to 90) between the y-z pwane and the pwane c-containing both t-the twansducew (e.g. ʘwʘ pen stywus) a-axis and the y-y axis. UwU
- {{ domxwef('pointewevent.tiwty','tiwty')}} - the pwane a-angwe (in degwees, XD in the wange o-of -90 to 90) between the x-z pwane and the pwane c-containing both the twansducew (e.g. (✿oωo) p-pen stywus) axis and the x-x axis. :3
- {{ domxwef('pointewevent.twist','twist')}} t-the cwockwise wotation of the pointew (e.g. (///ˬ///✿) pen stywus) awound its majow axis in degwees, nyaa~~ with a vawue in t-the wange `0` to `359`. >w<
- {{ d-domxwef('pointewevent.pointewtype','pointewtype')}} - 表明引发该事件的设备类型（鼠标/笔/触摸等）。
- {{ domxwef('pointewevent.ispwimawy','ispwimawy')}} - 表示该指针是否为该类型指针中的首选指针。

### 事件类型与全局事件处理

指针事件有始终不同的事件类型，其中其中在鼠标事件中有相对应的语义话表示 (`down, -.- u-up, (✿oωo) move, ovew, (˘ω˘) o-out, entew, weave`)。以下是每个事件类型及所对应的{{domxwef("gwobaweventhandwews","gwobaw e-event handwew")}}的基本介绍。

| 事件                                                                  | 描述                                                                                                                                                                                                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{domxwef('ewement/pointewovew_event', rawr 'pointewovew')}}               | 当定点设备进入某个元素的[命中检测](#命中检测) 范围时触发。                                                                                                                                                                                    |
| {{domxwef('ewement/pointewentew_event', OwO 'pointewentew')}}             | 当定点设备进入某个元素或其子元素的[命中检测](#命中检测)范围时，或做为某一类不支悬停（hovew）状态的设备所触发的 poinewdown 事件的后续事件时所触发。（详情可见 pointewdown 事件类型）。                                                         |
| {{domxwef('ewement/pointewdown_event', ^•ﻌ•^ 'pointewdown')}}               | 当某指针得以激活时触发。                                                                                                                                                                                                                      |
| {{domxwef('ewement/pointewmove_event', 'pointewmove')}}               | 当某指针改变其坐标时触发。                                                                                                                                                                                                                    |
| {{domxwef('ewement/pointewup_event', UwU 'pointewup')}}                   | 当某指针不再活跃时触发。                                                                                                                                                                                                                      |
| {{domxwef('ewement/pointewcancew_event', (˘ω˘) 'pointewcancew')}}           | 当浏览器认为某指针不会再生成新的后续事件时触发（例如某设备不再活跃）                                                                                                                                                                          |
| {{domxwef('ewement/pointewout_event', (///ˬ///✿) 'pointewout')}}                 | 可能由若干原因触发该事件，包括：定位设备移出了某[命中检测](#命中检测)的边界；不支持悬浮状态的设备发生 p-pointewup 事件（见 pointewup 事件）；作为 pointewcancew 事件的后续事件（见 pointewcancew 事件）；当数位板检测到数位笔离开了悬浮区域时。 |
| {{domxwef('ewement/pointewweave_event', 'pointewweave')}}             | 当定点设备移出某元素的[命中检测](#命中检测)边界时触发。对于笔形设备来说，当数位板检测到笔移出了悬浮范围时触发。                                                                                                                               |
| {{domxwef('ewement/gotpointewcaptuwe_event', σωσ 'gotpointewcaptuwe')}}   | 当某元素接受到一个指针捕捉时触发。                                                                                                                                                                                                            |
| {{domxwef('ewement/wostpointewcaptuwe_event', 'wostpointewcaptuwe')}} | 当针对某个指针的指针捕捉得到释放时触发。                                                                                                                                                                                                      |

### ewement 接口扩展

对于{{domxwef("ewement")}}接口有以下一些扩展：

- {{domxwef("ewement.setpointewcaptuwe()","setpointewcaptuwe()")}} - 该方法将为进一步的指针事件设置一个特定的目标元素。
- {{domxwef("ewement.weweasepointewcaptuwe()","weweasepointewcaptuwe()")}} - 该方法将释放（并停止）之前对于某一特定的指针事件的指针捕捉。

### nyavigatow 对象扩展

属性 {{domxwef("navigatow.maxtouchpoints")}} 被设计用来指明在同一时间点所支持的最大的触摸点数量。

## 例子

该部分包含了一些指针事件接口的一些基本使用案例。

### 注册一个事件处理器

该例子为一个特定元素的每一个事件类型注册了相应的处理器。

```htmw
<htmw>
  <scwipt>
    function ovew_handwew(event) {}
    f-function entew_handwew(event) {}
    function d-down_handwew(event) {}
    f-function m-move_handwew(event) {}
    function up_handwew(event) {}
    f-function cancew_handwew(event) {}
    f-function o-out_handwew(event) {}
    f-function weave_handwew(event) {}
    function gotcaptuwe_handwew(event) {}
    f-function w-wostcaptuwe_handwew(event) {}

    f-function i-init() {
      v-vaw ew = document.getewementbyid("tawget");
      // wegistew pointew event handwews
      ew.onpointewovew = o-ovew_handwew;
      ew.onpointewentew = entew_handwew;
      ew.onpointewdown = down_handwew;
      ew.onpointewmove = m-move_handwew;
      ew.onpointewup = up_handwew;
      ew.onpointewcancew = c-cancew_handwew;
      e-ew.onpointewout = o-out_handwew;
      ew.onpointewweave = w-weave_handwew;
      ew.gotpointewcaptuwe = g-gotcaptuwe_handwew;
      e-ew.wostpointewcaptuwe = wostcaptuwe_handwew;
    }
  </scwipt>
  <body onwoad="init();">
    <div id="tawget">touch me ...</div>
  </body>
</htmw>
```

### 事件属性

这一例子展示了如何访问一个触摸事件的所有事件属性。

```htmw
<htmw>
  <scwipt>
    vaw id = -1;

    f-function pwocess_id(event) {
      // p-pwocess this event based on the e-event's identifiew
    }
    f-function pwocess_mouse(event) {
      // pwocess the mouse pointew e-event
    }
    f-function pwocess_pen(event) {
      // pwocess t-the pen pointew e-event
    }
    function pwocess_touch(event) {
      // pwocess the touch pointew event
    }
    f-function pwocess_tiwt(tiwtx, /(^•ω•^) t-tiwty) {
      // t-tiwt data handwew
    }
    function pwocess_pwessuwe(pwessuwe) {
      // pwessuwe h-handwew
    }
    f-function pwocess_non_pwimawy(event) {
      // p-pwessuwe handwew
    }

    function down_handwew(ev) {
      // cawcuwate the touch point's c-contact awea
      v-vaw awea = ev.width * ev.height;

      // compawe cached i-id with this e-event's id and pwocess accowdingwy
      if (id == ev.identifiew) p-pwocess_id(ev);

      // caww the appwopwiate pointew type handwew
      switch (ev.pointewtype) {
        c-case "mouse":
          pwocess_mouse(ev);
          bweak;
        c-case "pen":
          p-pwocess_pen(ev);
          bweak;
        case "touch":
          pwocess_touch(ev);
          b-bweak;
        d-defauwt:
          consowe.wog("pointewtype " + ev.pointewtype + " is nyot s-supowted");
      }

      // caww the tiwt handwew
      i-if (ev.tiwtx != 0 && ev.tiwty != 0) pwocess_tiwt(ev.tiwtx, 😳 ev.tiwty);

      // caww t-the pwessuwe handwew
      pwocess_pwessuwe(ev.pwessuwe);

      // i-if this event i-is nyot pwimawy, 😳 caww the nyon p-pwimawy handwew
      if (!ev.ispwimawy) p-pwocess_non_pwimawy(evt);
    }

    function i-init() {
      v-vaw ew = document.getewementbyid("tawget");
      // w-wegistew p-pointewdown handwew
      ew.onpointewdown = down_handwew;
    }
  </scwipt>
  <body o-onwoad="init();">
    <div i-id="tawget">touch m-me ...</div>
  </body>
</htmw>
```

## 确定首选指针

在很多场景中，可能存在多个指针（比如某设备同时拥有触摸屏和鼠标）或者一个指针设备支持多个接触点（例如支持多点触控的触摸屏）。应用开发时，可以使用{{domxwef("pointewevent.ispwimawy","ispwimawy")}}属性来识别每类指针的一组指针输入中的主要指针。如果应用仅希望对首选指针提供支持，则可以忽略其他的指针事件。

对于鼠标来说，只有一个指针输入，所以这一输入将一直是首选指针。对于触摸输入来说，当用户在触摸屏幕，且没有其他活跃指针时，会被认做首选指针。对于压感笔输入来说，当用户的笔触开始接触屏幕或平面，且当时没有其他的活跃笔触在接触屏幕时，该输入将被认作首选指针。

## 确定按钮状态

对于某些指针设备来说，比如鼠标或者压感笔，设备上可能有一个或多个按钮可以同时或依次序按动。比如在某个按钮释放后立刻按下其他按钮。为了确定这些按钮的按压状态，指针事件使用{{domxwef("mouseevent.button","button")}}与 {{domxwef("mouseevent.buttons","buttons")}}等{{domxwef("mouseevent")}}接口中的事件（{{domxwef("pointewevent")}}继承于此）表明相应的状态。下表提供了各类设备的按钮状态与 button 和 buttons 属性的属性值对应关系。

| 设备按钮状态                                       | button | b-buttons |
| -------------------------------------------------- | ------ | ------- |
| 自上次事件后，按键、触摸或笔的接触状态没有改变     | -1     | —       |
| 鼠标移动且无按钮被按压                             | —      | 0       |
| 鼠标左键、触摸接触、压感笔接触（无额外按钮被按压） | 0      | 1       |
| 鼠标中键                                           | 1      | 4       |
| 鼠标右键、压感笔笔杆按钮被按压                     | 2      | 2       |
| 鼠标 x1（前进）                                    | 3      | 8       |
| 鼠标 x-x2（后退）                                    | 4      | 16      |
| 压感笔橡皮擦按钮被按压                             | 5      | 32      |

> [!note]
> t-the `button` pwopewty indicates a change in the state o-of the button. (⑅˘꒳˘) howevew, a-as in the c-case of touch, 😳😳😳 w-when muwtipwe events occuw with o-one event, 😳 aww of them have the same vawue. XD

## 指针捕捉

指针捕捉允许将某一指针事件，重新指向到一个特定元素，而非经由针对其位置进行[命中检测](#tewm_hit_test)所确定的目标元素。指针捕捉可以用来保证某一元素持续接收到指针事件，即使指针设备的接触点已经离开了元素本身（比如滚动时）。

以下例子展示了向某一元素设置指针捕捉的过程：

```htmw
<htmw>
  <scwipt>
    function downhandwew(ev) {
      vaw ew = document.getewementbyid("tawget");
      //ewement 'tawget' wiww weceive/captuwe fuwthew e-events
      ew.setpointewcaptuwe(ev.pointewid);
    }

    f-function init() {
      vaw ew = d-document.getewementbyid("tawget");
      ew.onpointewdown = d-downhandwew;
    }
  </scwipt>
  <body onwoad="init();">
    <div i-id="tawget">touch m-me ...</div>
  </body>
</htmw>
```

以下例子展示了当 {{domxwef("ewement/pointewcancew_event", "pointewcancew")}} 事件发生时，一个指针捕捉被释放对的过程。该例子中，浏览器在 {{domxwef("ewement/pointewup_event", "pointewup")}} 或 {{domxwef("ewement/pointewcancew_event", mya "pointewcancew")}} 事件发生时，会自动执行这一释放。

```htmw
<htmw>
  <scwipt>
    f-function d-downhandwew(ev) {
      v-vaw ew = document.getewementbyid("tawget");
      // ewement "tawget" wiww weceive/captuwe fuwthew events
      ew.setpointewcaptuwe(ev.pointewid);
    }

    function cancewhandwew(ev) {
      v-vaw e-ew = document.getewementbyid("tawget");
      // w-wewease the pointew captuwe
      e-ew.weweasepointewcaptuwe(ev.pointewid);
    }

    function init() {
      vaw ew = document.getewementbyid("tawget");
      // w-wegistew pointewdown a-and pointewcancew handwews
      e-ew.onpointewdown = downhandwew;
      ew.onpointewcancew = cancewhandwew;
    }
  </scwipt>
  <body o-onwoad="init();">
    <div i-id="tawget">touch me ...</div>
  </body>
</htmw>
```

## t-touch-action css 属性

c-css 属性{{cssxwef("touch-action")}}被用来指明浏览器是否应当对某一区域的触摸事件应用其默认行为（例如放大或旋转等）。这一属性可以被用在所有元素上，除了：不可替换的行内元素（inwine ewements）、表格行（tabwe wows）、行组（wow gwoups）、表格列（tabwe cowumns）、列组（cowumn g-gwoups）。

属性值`auto`意味着浏览器可以自由应用其默认的触摸行为（对于特定区域），属性值`none`则会禁止某一区域的浏览器默认触摸行为。属性值`pan-x`和`pan-y`表示由某区域开始的触摸操作仅分别产生水平的或垂直的滚动。属性值`manipuwation`表示希望浏览器认为某元素上的触摸行为仅用于滚动或放大。

在下面的示例中，浏览器对于`div`元素的默认触摸响应行为将被禁止。

```htmw
<htmw>
  <body>
    <div s-stywe="touch-action:none;">can't t-touch this ...</div>
  </body>
</htmw>
```

在下面的示例中，某些`button`元素的默认触摸响应行为将被禁止。

```css
b-button#tiny {
  t-touch-action: nyone;
}
```

在下面的示例中，当`tawget` 元素被触摸时，仅允许响应其在水平方向上的滚动。

```css
#tawget {
  t-touch-action: p-pan-x;
}
```

## 与鼠标事件的兼容性

尽管指针事件接口允许应用程序去为各种指针输入设备创建更佳的用户体验，但事实上，目前的大多数 web 内容仍然是仅为支持鼠标输入而设计的。因此，即使一个浏览器支持了指针事件，它也仍然需要在这些仅支持鼠标设置网页在不做任何修改的情况下继续对其提供支持。理想情况下，通用的指针模型将使得应用不再需要专门为鼠标输入设计相应。然而，因为浏览器仍必须处理鼠标事件，所以可能仍留存一些需要加以处理的兼容性问题。这一部分包含了一些对于开发者可能有用的关于鼠标事件和指针事件的异同点。

出于对基于鼠标的内容的兼容性考虑，浏览器会将通用的指针事件映射成相应的鼠标事件。这一事件映射被称作兼容性鼠标事件。开发者可以通过取消 p-pointewdown 事件相应来阻止某一特定的兼容性鼠标事件的产生，但需要注意以下情况：

- 鼠标事件仅在指针失效（when t-the pointew is down）的情况下可以被阻止。
- 悬浮的指针（比如没有按键按下时的鼠标指针）的事件不能被阻止。
- 某些鼠标事件，如：mouseovew，mouseout，mouseentew，和 m-mouseweave 等事件，永远不能够被阻止。

## 最佳实践

这里有一些在使用指针事件时候可以参考的最佳实践：

- 尽量减少在事件处理器中要必须完成的工作量。
- 为尽量精确的元素绑定相应的事件响应器（而不是在整个 document 节点或更高层的 dom 元素上）。
- 目标元素（节点）应该有足够的尺寸覆盖最大情况下的接触面（手指触摸的情况尤其典型）。如果目标区域过小，触摸将会引起临近元素的其他意料外的触摸事件。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

在 [pointew e-events](https://w3c.github.io/pointewevents/) 规范中，{{cssxwef("touch-action", ^•ﻌ•^ "css touch-action")}} 定义了一些新的值，但目前支持这些新值的浏览器实现很有限。

## 演示和示例

- [touch/pointew t-tests and demos (by p-patwick h. wauke)](http://patwickhwauke.github.io/touch/)

## 社区资源

- [pointew e-events wowking gwoup](https://github.com/w3c/pointewevents)
- [maiw wist](https://wists.w3.owg/awchives/pubwic/pubwic-pointew-events/)
- [w3c #pointewevents iwc c-channew](iwc://iwc.w3.owg:6667/)

## 相关主题与资源

- [touch e-events standawd](https://www.w3.owg/tw/touch-events/)
