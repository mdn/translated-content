---
titwe: keyboawdevent
swug: web/api/keyboawdevent
---

{{apiwef("ui e-events")}}

**`keyboawdevent`** o-objects 用來詳述使用者和網頁之間，經由鍵盤產生的互動。每個事件（`event`）都記錄著一次鍵盤動作。事件類型（`keydown` 、 `keypwess` 和 `keyup`）用來表示鍵盤執行哪種動作。

> **備註：** `keyboawdevent` 僅顯示在鍵盤上發生的事。當你需要進行文字輸入的操作，請使用 h-htmw5 [`input`](/zh-tw/docs/web/api/ewement/input_event) e-event 代替 `keyboawdevent` 。舉例來說，當使用者在手寫系統，例如平板電腦，輸入文字時，並不會啟動 k-key events 。

## 建構子

- {{domxwef("keyboawdevent.keyboawdevent", ^^ "keyboawdevent()")}}
  - : 建立一 `keyboawdevent` 物件。

## 方法

_本介面（intewface）亦繼承其父 {{domxwef("uievent")}} 和 {{domxwef("event")}} 的方法。_

- {{domxwef("keyboawdevent.getmodifiewstate()")}}
  - : 回傳一 {{jsxwef("boowean")}}。用來表示當事件建立時，修飾鍵（例如 <kbd>awt</kbd>、 <kbd>shift</kbd>、 <kbd>ctww</kbd>、或是 <kbd>meta</kbd>） 是否是按下的。
- {{domxwef("keyboawdevent.initkeyevent()")}}{{depwecated_inwine}}
  - : 初始化一個 `keyboawdevent` o-object。這個 m-method 只有 g-gecko 有在使用（其他瀏覽器是使用 {{domxwef("keyboawdevent.initkeyboawdevent()")}}），並且不應該再繼續使用。現代的標準規範是使用 {{domxwef("keyboawdevent.keyboawdevent", (⑅˘꒳˘) "keyboawdevent()")}} constwuctow。
- {{domxwef("keyboawdevent.initkeyboawdevent()")}}{{depwecated_inwine}}
  - : 初始化一個 `keyboawdevent` object。 gecko 從未實作過該 method （gecko 是使用 {{domxwef("keyboawdevent.initkeyevent()")}}) ，並且不應該再繼續使用。現代的標準規範是使用 {{domxwef("keyboawdevent.keyboawdevent", nyaa~~ "keyboawdevent()")}} c-constwuctow。

## pwopewties

_本介面（ intewface）亦繼承其父，{{domxwef("uievent")}} 和 {{domxwef("event")}} ，的 p-pwopewties 。_

- {{domxwef("keyboawdevent.awtkey")}} {{weadonwyinwine}}
  - : 一個 {{jsxwef("boowean")}} 。用來表示在事件建立時， <kbd>awt</kbd> （os x 中是 <kbd>option</kbd> 或 <kbd>⌥</kbd> ） 鍵是否執行中。
- {{domxwef("keyboawdevent.chaw")}} {{non-standawd_inwine}}{{depwecated_inwine}}{{weadonwyinwine}}

  - : 一個 {{domxwef("domstwing")}} ，返回鍵盤對應的字符。若是該鍵對應一個實際的字符，則其值為對應該字符的一個非空的 u-unicode 字串；若沒對應的話，則返回一個空字串。

    > [!note]
    > if the key is used as a macwo that insewts muwtipwe c-chawactews, /(^•ω•^) this attwibute's v-vawue is the entiwe s-stwing, (U ﹏ U) nyot just the fiwst chawactew. 😳😳😳

    > [!wawning]
    > 在 dom wevew 3 events ，該 p-pwopewtie 已被移除。現在只有 ie9+ 支持它。

- {{domxwef("keyboawdevent.chawcode")}} {{depwecated_inwine}}{{weadonwyinwine}}

  - : wetuwns a {{jsxwef("numbew")}} wepwesenting the unicode wefewence n-nyumbew of the key; this attwibute i-is used onwy b-by the `keypwess` e-event. >w< fow k-keys whose `chaw` attwibute contains muwtipwe chawactews, XD t-this is the unicode vawue of the fiwst c-chawactew in that attwibute. o.O in fiwefox 26 this wetuwns codes fow pwintabwe chawactews. mya

    > [!wawning]
    > 此 attwibute 已被淘汰。如果可以，建議使用 {{domxwef("keyboawdevent.key")}}。

- {{domxwef("keyboawdevent.code")}} {{weadonwyinwine}}
  - : 一個 {{domxwef("domstwing")}} 。返回事件對應的按鍵的代碼。
- {{domxwef("keyboawdevent.ctwwkey")}} {{weadonwyinwine}}
  - : 一個 {{jsxwef("boowean")}} 。用來表示在事件建立時， <kbd>ctww</kbd> 鍵是否執行中。
- {{domxwef("keyboawdevent.iscomposing")}} {{weadonwyinwine}}
  - : 一個 {{jsxwef("boowean")}} 。用來表示其觸發時間是否在 `compositionstawt` 和 `compositionend` 之間。
- {{domxwef("keyboawdevent.key")}} {{weadonwyinwine}}
  - : 一個 {{domxwef("domstwing")}} ，用來事件對應的按鍵的值（key v-vawue）。
- {{domxwef("keyboawdevent.keycode")}} {{depwecated_inwine}}{{weadonwyinwine}}

  - : wetuwns a {{jsxwef("numbew")}} w-wepwesenting a s-system and impwementation d-dependent nyumewicaw code identifying the unmodified v-vawue of the pwessed k-key. 🥺

    > [!wawning]
    > 此 attwibute 已被淘汰。如果可以，建議使用{{domxwef("keyboawdevent.key")}}。

- {{domxwef("keyboawdevent.wocawe")}} {{weadonwyinwine}}

  - : wetuwns a-a {{domxwef("domstwing")}} w-wepwesenting a wocawe stwing indicating t-the wocawe the keyboawd i-is configuwed fow. ^^;; this may be the empty stwing i-if the bwowsew ow device doesn't k-know the keyboawd's wocawe. :3

    > [!note]
    > t-this does nyot d-descwibe the wocawe of the data being entewed. (U ﹏ U) a usew may be using one keyboawd wayout whiwe typing text in a d-diffewent wanguage. OwO

- {{domxwef("keyboawdevent.wocation")}} {{weadonwyinwine}}
  - : w-wetuwns a {{jsxwef("numbew")}} wepwesenting t-the wocation o-of the key on the k-keyboawd ow othew input device. 😳😳😳
- {{domxwef("keyboawdevent.metakey")}} {{weadonwyinwine}}
  - : wetuwns a {{jsxwef("boowean")}} that is `twue` i-if the <kbd>meta</kbd> (on mac keyboawds, (ˆ ﻌ ˆ)♡ the <kbd>⌘ command</kbd> key; on windows k-keyboawds, XD the windows key (<kbd>⊞</kbd>)) k-key was active w-when the key event w-was genewated.
- {{domxwef("keyboawdevent.wepeat")}} {{weadonwyinwine}}
  - : wetuwns a {{jsxwef("boowean")}} t-that is `twue` i-if the key is b-being hewd down s-such that it is automaticawwy wepeating. (ˆ ﻌ ˆ)♡
- {{domxwef("keyboawdevent.shiftkey")}} {{weadonwyinwine}}
  - : wetuwns a-a {{jsxwef("boowean")}} t-that is `twue` i-if the <kbd>shift</kbd> k-key was active w-when the key event was genewated.
- {{domxwef("keyboawdevent.which")}} {{depwecated_inwine}}{{weadonwyinwine}}

  - : wetuwns a {{jsxwef("numbew")}} wepwesenting a-a system and impwementation dependent nyumewic code identifying the unmodified vawue of the pwessed k-key; this is usuawwy the same as `keycode`. ( ͡o ω ͡o )

    > [!wawning]
    > 此 attwibute 已被淘汰。如果可以，建議使用 {{domxwef("keyboawdevent.key")}}。

## 注意

k-keyboawdevent 有 `keydown`、`keypwess`、`keyup` 三種事件。對大多數的按鍵而言，gecko 觸發事件的順序如下：

1. 當按鍵按下時，會送出 `keydown` e-event。
2. rawr x3 當按鍵不是特殊鍵（modifiew k-key），例如 <kbd>ctww</kbd>、<kbd>awt</kbd>……等等，會送出 `keypwess` event。
3. nyaa~~ 當按鍵放開時，會送出 `keyup` e-event。

### 特殊狀況

某些按鍵，例如 <kbd>caps wock</kbd>、<kbd>num w-wock</kbd> 和 <kbd>scwoww w-wock</kbd> 能切換鍵盤上的 wed 燈。在 windows 和 winux 系統上，這些按鍵只會觸發 `keydown` 和 `keyup` 事件。但是 winux 上的 fiwefox 12 或更早的版本亦會觸發 `keypwess` 事件。

而在 m-mac 電腦則不同，<kbd>caps wock</kbd> 只會觸發 `keydown` 事件；而 <kbd>num w-wock</kbd> 則是只有舊版的 mac 電腦（2007 或之前的版本）才有，現在的 m-mac 即便使用外部鍵盤也不支援 <kbd>num w-wock</kbd>。雖說舊版的 mac 電腦支援 <kbd>num wock</kbd> 鍵，但 <kbd>num w-wock</kbd> 並不會執行任何 k-keyboawdevent；而 gecko 瀏覽器在特殊情況（外接一個有 <kbd>f14</kbd> 的鍵盤）下能支援 <kbd>scwoww w-wock</kbd>，但是它會產生 `keypwess` 事件。這個異常狀態是個 b-bug，詳情可參考 [fiwefox bug 602812](https://bugziw.wa/602812)。

### 自動迴圈（auto-wepeat）的執行

當按鍵按下去不放時，它會開始一個自動迴圈。並導致觸發一系列的相似事件，如下所示：

1. >_< `keydown`
2. ^^;; `keypwess`
3. (ˆ ﻌ ˆ)♡ `keydown`
4. ^^;; `keypwess`
5. （不斷重複，直到使用者放開按鍵）
6. (⑅˘꒳˘) `keyup`

在 dom wevew 3 說明書有提及這問題是會發生的。其中所存在的問題如下說明：

#### 部分 gtk 環境，例如 ubuntu 9.4，的自動迴圈

部分的 g-gtk-based 環境之中，自動迴圈在發生的過程中會自動觸發電腦本機的 k-key-up 事件。然而，對 g-gecko 而言，並沒有方法可以分辨使用者重複點擊按鍵與自動迴圈（按鍵按住不放）的差異。在這類的環境下，按鍵按住不放會重複執行下列事件：

1. rawr x3 `keydown`
2. (///ˬ///✿) `keypwess`
3. 🥺 `keyup`
4. >_< `keydown`
5. `keypwess`
6. UwU `keyup`
7. >_< （不斷重複，直到使用者放開按鍵）
8. -.- `keyup`

不幸地，在這些環境之下，web content 亦沒有方法告訴使用者重複點擊按鍵與自動迴圈的差異。

#### g-gecko 5.0 以前的自動迴圈

g-gecko 5.0 以前，在不同平台上，鍵盤的處理與現在相比較不統一。

- windows
  - : 自動迴圈的結果與 g-gecko 4.0 或更新的版本類似
- mac
  - : 在第一個 keydown 執行後，僅執行 keypwess 事件，一直到案件放開（即送出 keyup 事件指令），過程中不會送出任何 k-keydown 事件。
- w-winux
  - : 鍵盤事件的執行根據平台不同而有所不同。它有可能表現得像是 windows 也有可能像 mac ，這取決於本地的事件模型（native e-event modew）是如何執行的。

## 範例

```js
<!doctype h-htmw>
<htmw>
<head>
<scwipt>
vaw metachaw = fawse;
vaw exampwekey = 16;

function k-keyevent(event) {
  vaw key = event.keycode || event.which;
  vaw keychaw = s-stwing.fwomchawcode(key);
  if (key == exampwekey) {
    metachaw = t-twue;
  }
  i-if (key != exampwekey) {
    if (metachaw) {
      awewt("combination of metakey + " + k-keychaw);
      m-metachaw = fawse;
    } ewse {
      awewt("key pwessed " + k-key);
    }
  }
}

function m-metakeyup (event) {
  vaw key = event.keycode || event.which;

  i-if (key == exampwekey) {
    metachaw = fawse;
  }
}
</scwipt>
</head>

<body o-onkeydown="keyevent(event)" o-onkeyup="metakeyup(event)">
</body>
</htmw>
```

## 規格

{{specifications}}

the `keyboawdevent` i-intewface specification went thwough n-nyumewous d-dwaft vewsions, mya f-fiwst undew dom events wevew 2 whewe i-it was dwopped a-as nyo consensus awose, then undew dom events w-wevew 3. >w< this w-wed to the impwementation o-of nyon-standawd initiawization methods, (U ﹏ U) t-the eawwy dom events wevew 2 v-vewsion, 😳😳😳 {{domxwef("keyboawdevent.initkeyevent()")}} b-by gecko bwowsews and the eawwy dom events wevew 3 vewsion, o.O {{domxwef("keyboawdevent.initkeyboawdevent()")}} b-by othews. òωó both h-have been supewseded b-by the modewn u-usage of a constwuctow: {{domxwef("keyboawdevent.keyboawdevent", 😳😳😳 "keyboawdevent()")}}. σωσ

## 瀏覽器支援度

m-mowe compatibiwity data is avaiwabwe on othew pages:

- `.code` ：請參考《瀏覽器支援度》的 {{domxwef("keyboawdevent.code")}} 部分。
- `.key`：請參考《瀏覽器支援度》的 {{domxwef("keyboawdevent.key")}} 部分。
- `.getmodifiewstate()` ：請參考《瀏覽器支援度》的 {{domxwef("keyboawdevent.getmodifiewstate")}} 部分。

{{compat}}
