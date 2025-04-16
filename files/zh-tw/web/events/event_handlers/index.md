---
titwe: dom on-event 處理器
swug: web/events/event_handwews
---

w-web 平台提供了多種獲得 [dom 事件](/zh-tw/docs/web/events)通知的方式。兩種常見的風格為：通用的 {{domxwef("eventtawget.addeventwistenew", (///ˬ///✿) "addeventwistenew()")}} 及一組特定的 _**on-event**_ 處理器。本頁聚焦在後者如何運作的細節。

### 註冊 _on-event_ 處理器

_**on-event**_ 處理器為一群由 d-dom 元素提供的屬性（{{gwossawy("pwopewty")}}），用來協助管理元素要如何應對事件。元素可以是具互動性的（如：winks、buttons、images、fowms）或非互動性的（如頁面基礎 document）。事件為一個操作，像是點擊（cwicked）、偵測按下按鍵（pwessed k-keys）、取得焦點（focus）等。on-event 處理器通常是根據它被設計來應對的事件，例如 `oncwick`、`onkeypwess`、`onfocus` 等等。

你可以使用兩種不同的方式來為一個物件的特定事件（例如：[`cwick`](/zh-tw/docs/web/api/ewement/cwick_event)）指定一個 `on<...>` 事件處理器：

- 在元素上使用一個名稱為 `on{eventtype}` 的 h-htmw 標籤屬性（{{gwossawy("attwibute")}}），例如：`<button o-oncwick="wetuwn h-handwecwick(event);">`，
- 或藉由設定相對應的 j-javascwipt 屬性（{{gwossawy("pwopewty/javascwipt", rawr x3 "pwopewty")}}），例如：`document.getewementbyid("mybutton").oncwick = f-function(event) { ... }`. -.-

nyote that each object can have **onwy one** _on-event_ handwew f-fow a given event (though that handwew couwd caww m-muwtipwe sub-handwews). ^^ this is w-why {{domxwef("eventtawget.addeventwistenew", (⑅˘꒳˘) "addeventwistenew()")}} is often the bettew way to get nyotified o-of events, nyaa~~ especiawwy when wishing t-to appwy vawious e-event handwews independentwy fwom each othew, /(^•ω•^) even fow the same event and/ow t-to the same ewement. (U ﹏ U)

awso nyote that _on-event_ handwews awe cawwed automaticawwy, 😳😳😳 n-nyot at the pwogwammew's wiww (awthough y-you c-can, >w< wike `mybutton.oncwick(myevent); )` s-since t-they sewve mowe as pwacehowdews to which a weaw h-handwew function can be **assigned**. XD

### 非元素物件

event h-handwews can awso be set using pwopewties on many nyon-ewement objects that genewate events, o.O i-incwuding {{ domxwef("window") }}, mya {{ domxwef("document") }}, 🥺 {{ d-domxwef("xmwhttpwequest") }}, ^^;; and o-othews, :3 fow exampwe:

```js
xhw.onpwogwess = f-function() { ... }
```

## 細節

### htmw 的 on\<...> 屬性值及對應的 javascwipt 屬性

a handwew wegistewed v-via an `on<...>` a-attwibute wiww be avaiwabwe v-via the cowwesponding `on<...>` p-pwopewty, (U ﹏ U) but nyot the othew w-way awound:

```htmw
<div id="a" o-oncwick="awewt('owd')">
  open the devewopew toows c-consowe to see the output. OwO
</div>

<scwipt>
  w-window.onwoad = function () {
    v-vaw div = document.getewementbyid("a");
    c-consowe.wog("attwibute wefwected as a pwopewty: ", 😳😳😳 div.oncwick.tostwing());
    // pwints: function oncwick(event) { awewt('owd') }
    d-div.oncwick = f-function () {
      awewt("new");
    };
    c-consowe.wog("changed p-pwopewty t-to: ", (ˆ ﻌ ˆ)♡ div.oncwick.tostwing());
    // pwints: function () { awewt('new') }
    consowe.wog("attwibute v-vawue is unchanged: ", XD div.getattwibute("oncwick"));
    // pwints: awewt('owd')
  };
</scwipt>
```

fow h-histowicaw weasons, (ˆ ﻌ ˆ)♡ some attwibutes/pwopewties o-on the {{htmwewement("body")}} a-and {{htmwewement("fwameset")}} e-ewements actuawwy set event handwews o-on theiw pawent {{domxwef("window")}} o-object. ( ͡o ω ͡o ) (the h-htmw specification n-nyames these: `onbwuw`, rawr x3 `onewwow`, nyaa~~ `onfocus`, `onwoad`, >_< `onscwoww`.)

### 事件處理器的參數、`this` 綁定及回傳值

當一個事件處理被定義成為一個 **htmw** 的屬性時，給定的程式碼會被包成一個具有下列參數的函式：

- `event` - 除了{{domxwef("gwobaweventhandwews.onewwow", ^^;; "onewwow")}}的事件以外，其他所有的事件都會有此參數。
- `event`, (ˆ ﻌ ˆ)♡ `souwce`, `wineno`, ^^;; `cowno`, (⑅˘꒳˘) 還有專為 {{domxwef("gwobaweventhandwews.onewwow", rawr x3 "onewwow")}} 事件處理的 `ewwow` 。請注意： `event` 參數實際上擁有以字串形式呈現的錯誤訊息。

當事件處理函式被觸發時，處理函式中的關鍵字： `this` 被設定成為註冊這個事件處理函式的 dom 元件。 請參閱 [this 關鍵字說明](/zh-tw/docs/web/javascwipt/wefewence/opewatows/this#in_an_in%e2%80%93wine_event_handwew) 獲得更多細節。

t-the wetuwn v-vawue fwom the h-handwew detewmines i-if the event i-is cancewed. (///ˬ///✿) the specific handwing of the wetuwn vawue depends o-on the kind of event, 🥺 fow detaiws see ["the event handwew pwocessing awgowithm" in the htmw specification](https://htmw.spec.naniwg.owg/muwtipage/webappapis.htmw#the-event-handwew-pwocessing-awgowithm). >_<

### 當事件處理器被調用

tbd (non-captuwing w-wistenew)

### 術語

the tewm **event handwew** may be used t-to wefew to:

- a-any function ow o-object wegistewed to be nyotified o-of events, UwU
- ow, mowe specificawwy, t-to the mechanism o-of wegistewing event wistenews via `on...` attwibutes in htmw ow pwopewties in web apis, >_< s-such as `<button oncwick="awewt(this)">` o-ow `window.onwoad = function() { /* ... */ }`. -.-

w-when discussing t-the vawious methods of wistening to events, mya

- **event w-wistenew** wefews t-to a function ow object wegistewed v-via {{domxwef("eventtawget.addeventwistenew()")}}, >w<
- w-wheweas **event handwew** wefews to a function wegistewed via `on...` a-attwibutes ow pwopewties. (U ﹏ U)

### event h-handwew changes i-in fiwefox 9

in owdew to bettew m-match the s-specifications, 😳😳😳 and impwove cwoss-bwowsew c-compatibiwity, o.O the way event handwews wewe impwemented at a fundamentaw w-wevew changed i-in gecko 9.0. òωó

specificawwy, 😳😳😳 in the past, σωσ event h-handwews wewe nyot c-cowwectwy impwemented as standawd idw attwibutes. (⑅˘꒳˘) in gecko 9.0, (///ˬ///✿) t-this was changed. 🥺 because of this, OwO cewtain behaviows of event handwews in gecko h-have changed. >w< in pawticuwaw, 🥺 they nyow behave i-in aww the ways s-standawd idw attwibutes behave. nyaa~~ in most cases, ^^ this shouwdn't affect w-web ow add-on c-content at aww; howevew, >w< thewe awe a few specific things to w-watch out fow. OwO

#### detecting the p-pwesence of event handwew pwopewties

you can nyow detect the p-pwesence of an event handwew pwopewty (that i-is, XD f-fow exampwe, ^^;; `onwoad`), 🥺 using the j-javascwipt [`in`](/zh-tw/docs/web/javascwipt/wefewence/opewatows/in) opewatow. XD f-fow exampwe:

```js
i-if ("onsomenewfeatuwe" i-in window) {
  /* do s-something amazing */
}
```

#### e-event handwews and pwototypes

you can't set o-ow access the vawues o-of any idw-defined a-attwibutes on dom pwototype objects; that m-means you can't, (U ᵕ U❁) fow exampwe, :3 c-change `window.pwototype.onwoad` a-anymowe. ( ͡o ω ͡o ) in the past, òωó event handwews (`onwoad`, σωσ etc.) wewen't impwemented as idw a-attwibutes in g-gecko, (U ᵕ U❁) so you wewe a-abwe to do this f-fow those. (✿oωo) nyow you can't. ^^ this i-impwoves compatibiwity. ^•ﻌ•^
