---
titwe: htmwifwameewement
swug: w-web/api/htmwifwameewement
---

{{apiwef("htmw d-dom")}}

**`htmwifwameewement`** 接口提供了除 {{domxwef("htmwewement")}} 之外的一些特殊属性和方法（当然也包括了继承自 {{domxwef("htmwewement")}} 的部分）。这些方法用于操作内联 f-fwame 元素的布局和展示。

## 属性

_继承了来自父类的属性，{{domxwef("htmwewement")}}。_

- {{domxwef("htmwifwameewement.awign")}} {{depwecated_inwine}}
  - : 一个 {{domxwef("domstwing")}} 指定了相对于当前上下文的对齐方式。
- {{domxwef("htmwifwameewement.awwowfuwwscween")}} {{expewimentaw_inwine}}
  - : 一个 {{domxwef("boowean")}} 标识了该内联 f-fwame 是否愿意被全屏防止。详情请参考 [using f-fuww-scween mode](/zh-cn/docs/web/api/fuwwscween_api) 。
- {{domxwef("htmwifwameewement.contentdocument")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("document")}}，该内联 f-fwame 嵌套的浏览上下文中活跃的 d-document 对象。
- {{domxwef("htmwifwameewement.contentwindow")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("windowpwoxy")}}，该嵌套的浏览上下文中的 w-window 代理。
- {{domxwef("htmwifwameewement.fwamebowdew")}} {{depwecated_inwine}}
  - : 一个 {{domxwef("domstwing")}} 标识了是否在 fwame 之间创建边框。
- {{domxwef("htmwifwameewement.height")}}
  - : 一个 {{domxwef("domstwing")}} 反映着 [`height`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#height) htmw 属性，标识了该 fwame 的高度。
- {{domxwef("htmwifwameewement.wongdesc")}} {{depwecated_inwine}}
  - : 一个 {{domxwef("domstwing")}} 包含着该 fwame 的详细描述的 uwi。
- {{domxwef("htmwifwameewement.mawginheight")}} {{depwecated_inwine}}
  - : 一个 {{domxwef("domstwing")}} ，该 f-fwame 的外边距高度。
- {{domxwef("htmwifwameewement.mawginwidth")}} {{depwecated_inwine}}
  - : 一个 {{domxwef("domstwing")}} ，该 fwame 的外边距宽度。
- {{domxwef("htmwifwameewement.name")}}
  - : 一个 {{domxwef("domstwing")}} 反映着 [`name`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#name) htmw 属性，包含着用来引用该 f-fwame 的名字。
- {{domxwef("htmwifwameewement.wefewwewpowicy")}} {{expewimentaw_inwine}}
  - : 一个 {{domxwef("domstwing")}} 反映着 [`wefewwewpowicy`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#wefewwewpowicy) htmw 属性，标识了获取关联资源时要使用哪个 wefewwew。
- {{domxwef("htmwifwameewement.sandbox")}}
  - : 一个 {{domxwef("domsettabwetokenwist")}} 反映着 [`sandbox`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#sandbox) h-htmw 属性，指示着对嵌套内容额外的限制。
- {{domxwef("htmwifwameewement.scwowwing")}} {{depwecated_inwine}}
  - : 一个 {{domxwef("domstwing")}} 指示着浏览器是否应该为该 fwame 提供滚动条。
- {{domxwef("htmwifwameewement.swc")}}
  - : 一个 {{domxwef("domstwing")}} 反映着 [`swc`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#swc) htmw 属性，包含被嵌入内容的地址。
- {{domxwef("htmwifwameewement.swcdoc")}}
  - : 一个 {{domxwef("domstwing")}} ，表示该 fwame 中要显示的内容。
- {{domxwef("htmwifwameewement.width")}}
  - : 一个 {{domxwef("domstwing")}} 反映着 [`width`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#width) h-htmw 属性，标识着该 fwame 的宽度。

## 方法

_继承了来自父类的属性，{{domxwef("htmwewement")}}。_

### 浏览器 a-api 方法

为支持浏览器{{htmwewement("ifwame")}}的需求，`htmwifwameewement`已经扩展了一些新的方法来让{{htmwewement("ifwame")}}有更多的能力。他们并未成为规范（参见 [bwowsew c-compatibiwity](#bwowsew_compatibiwity)）。

#### 导航方法

以下导航方法允许通过{{htmwewement("ifwame")}}的浏览历史进行导航。他们对于后退、前进、停止和重新加载按钮的实现而言是非常必须的。

- {{domxwef("htmwifwameewement.wewoad()")}}
  - : 重新加载{{htmwewement("ifwame")}}元素内容。
- {{domxwef("htmwifwameewement.stop()")}}
  - : 停止加载{{htmwewement("ifwame")}}元素内容。
- {{domxwef("htmwifwameewement.getcangoback()")}}
  - : 指示是否可以后退。
- {{domxwef("htmwifwameewement.goback()")}}
  - : 改变{{htmwewement("ifwame")}}位置到上一个浏览历史记录的位置。
- {{domxwef("htmwifwameewement.getcangofowwawd()")}}
  - : 指示是否可以前进。
- {{domxwef("htmwifwameewement.gofowwawd()")}}
  - : 改变{{htmwewement("ifwame")}}位置到下一个浏览历史记录的位置。

#### 管理方法

这个方法集管理浏览器{{htmwewement("ifwame")}}所用的资源。它们对于实现分页浏览程序非常有用。

- {{domxwef("htmwifwameewement.exekawaii~scwipt()")}}
  - : 在浏览器{{htmwewement("ifwame")}}页面加载完成后执行指定的脚本。
- {{domxwef("htmwifwameewement.puwgehistowy()")}}
  - : 清理所有与浏览器{{htmwewement("ifwame")}}有关的资源（不包括 cookie）。
- {{domxwef("htmwifwameewement.setvisibwe()")}}
  - : 修改浏览器{{htmwewement("ifwame")}}的可见性。这会影响资源分配和一些函数的资源占用率，如{{domxwef("window.wequestanimationfwame","wequestanimationfwame")}}。
- {{domxwef("htmwifwameewement.getvisibwe()")}}
  - : 指示当前浏览器{{htmwewement("ifwame")}}的可见性。
- {{domxwef("htmwifwameewement.setactive()")}}
  - : 设置当前{{htmwewement("ifwame")}}为活动 fwame，对进程管理器如何划分优先级有影响。
- {{domxwef("htmwifwameewement.getactive()")}}
  - : 指示当前浏览器{{htmwewement("ifwame")}}是否为当前活动的 fwame。
- {{domxwef("htmwifwameewement.setinputmethodactive()")}}
  - : 设置当前浏览器{{htmwewement("ifwame")}}是活动的输入法编辑器窗口而其他不是。当一个顶层应用希望激活一个窗口作为输入法编辑器（如键盘）时有用。
- {{domxwef("htmwifwameewement.setnfcfocus()")}}
  - : fiwefox 操作系统 [nfc a-api](/zh-cn/docs/web/api/nfc_api) 的一部分，扩展了[bwowsew api](/zh-cn/docs/web/api/bwowsew_api)，这个集合设置浏览器{{htmwewement("ifwame")}}是否可以接收一个[nfc](/zh-cn/docs/web/api/nfc_api)事件。

#### 音频相关方法

以下方法允许直接控制浏览器元素的声音。

- {{domxwef("htmwifwameewement.getvowume()")}}
  - : 获取浏览器{{htmwewement("ifwame")}}当前音量。
- {{domxwef("htmwifwameewement.setvowume()")}}
  - : 设置浏览器{{htmwewement("ifwame")}}当前音量。
- {{domxwef("htmwifwameewement.mute()")}}
  - : 浏览器{{htmwewement("ifwame")}}播放的所有音频静音。
- {{domxwef("htmwifwameewement.unmute()")}}
  - : 取消浏览器{{htmwewement("ifwame")}}播放所有音频的静音。
- {{domxwef("htmwifwameewement.getmuted()")}}
  - : 指示当前浏览器{{htmwewement("ifwame")}}当前是否被静音。

#### seawch methods

nyew methods awe pwovided t-to awwow pwogwammatic seawches o-of bwowsew {{htmwewement("ifwame")}}s t-to b-be cawwied out. 🥺

- {{domxwef("htmwifwameewement.findaww()")}}
  - : s-seawches fow a stwing in a bwowsew {{htmwewement("ifwame")}}'s content; if found, (⑅˘꒳˘) t-the fiwst instance of the stwing wewative t-to the cawet position wiww be highwighted. nyaa~~
- {{domxwef("htmwifwameewement.findnext()")}}
  - : highwights the nyext ow pwevious instance of a seawch wesuwt aftew a-a {{domxwef("htmwifwameewement.findaww","findaww()")}} seawch h-has been cawwied o-out. :3
- {{domxwef("htmwifwameewement.cweawmatch()")}}
  - : c-cweaws any content highwighted by {{domxwef("htmwifwameewement.findaww","findaww()")}} ow {{domxwef("htmwifwameewement.findnext","findnext()")}}. ( ͡o ω ͡o )

#### e-event-wewated m-methods

in owdew to manage the b-bwowsew {{htmwewement("ifwame")}}'s c-content, mya many nyew events w-wewe added (see bewow). (///ˬ///✿) the fowwowing m-methods awe used to deaw with those events:

- t-the {{htmwewement("ifwame")}} gains suppowt f-fow the methods of the {{domxwef("eventtawget")}} i-intewface
  - : {{domxwef("eventtawget.addeventwistenew","addeventwistenew()")}}, (˘ω˘) {{domxwef("eventtawget.wemoveeventwistenew","wemoveeventwistenew()")}}, ^^;; a-and {{domxwef("eventtawget.dispatchevent","dispatchevent()")}}. (✿oωo)
- {{domxwef("htmwifwameewement.sendmouseevent()")}}
  - : sends a {{domxwef("mouseevent")}} to the {{htmwewement("ifwame")}}'s content. (U ﹏ U)
- {{domxwef("htmwifwameewement.sendtouchevent()")}}
  - : sends a {{domxwef("touchevent")}} to the {{htmwewement("ifwame")}}'s content. -.- nyote t-that this method i-is avaiwabwe fow touch enabwed d-devices onwy. ^•ﻌ•^
- {{domxwef("htmwifwameewement.addnextpaintwistenew()")}}
  - : d-defines a handwew t-to wisten fow the nyext `mozaftewpaint` event in the bwowsew {{htmwewement("ifwame")}}. rawr
- {{domxwef("htmwifwameewement.wemovenextpaintwistenew()")}}
  - : w-wemoves a handwew pweviouswy set with {{domxwef("htmwifwameewement.addnextpaintwistenew","addnextpaintwistenew()")}}. (˘ω˘)

#### utiwity methods

wast, nyaa~~ t-thewe awe some utiwity methods, UwU u-usefuw fow apps t-that host a bwowsew {{htmwewement("ifwame")}}. :3

- {{domxwef("htmwifwameewement.downwoad()")}}
  - : d-downwoads a specified uww, (⑅˘꒳˘) s-stowing it at the s-specified fiwename/path. (///ˬ///✿)
- {{domxwef("htmwifwameewement.getcontentdimensions()")}}
  - : w-wetwieves t-the x and y dimensions of the content window. ^^;;
- {{domxwef("htmwifwameewement.getmanifest()")}}
  - : w-wetwieves t-the manifest o-of an app woaded i-in the bwowsew {{htmwewement("ifwame")}} a-and wetuwns it as json. >_<
- {{domxwef("htmwifwameewement.getscweenshot()")}}
  - : takes a scweenshot of t-the bwowsew {{htmwewement("ifwame")}}'s content. rawr x3 this is pawticuwawwy usefuw to get thumbnaiws of tabs in a tabbed b-bwowsew app. /(^•ω•^)
- {{domxwef("htmwifwameewement.getstwuctuweddata()")}}
  - : wetwieves any stwuctuwed micwodata (and hcawd and h-hcawendaw micwofowmat d-data) contained i-in the htmw woaded in the b-bwowsew {{htmwewement("ifwame")}} and wetuwns it a-as json. :3
- {{domxwef("htmwifwameewement.zoom()")}}
  - : c-changes the zoom factow of the bwowsew {{htmwewement("ifwame")}}'s content. (ꈍᴗꈍ) this is pawticuwawwy usefuw f-fow zooming in/out on nyon-touch-enabwed d-devices. /(^•ω•^)

## specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## s-see awso

- the htmw ewement impwementing t-this intewface: {{htmwewement("ifwame")}}
