---
title: CSS 動畫
slug: Web/CSS/CSS_animations/Using_CSS_animations
---

{{SeeCompatTable}}{{CSSRef}}

CSS animations 使 CSS style configuration 的轉變變得可行。在這種動畫的運作上，你只需要定義兩個部份：1. 動畫的最初及結尾 2. 動畫轉變的方式。

相較於傳統 script-driven 的動畫技術，CSS animations 有三種好處：

1. 對於不複雜的動畫來說，CSS animation 是好選擇。你甚至不必懂得 JavaScript。
2. 在資源消耗上，CSS animation 有優勢，即使在系統負載超過 50% 仍可有效運作。在 JavaScript 上要達到一樣的目的有賴於你寫出品質非常好的 code。事實上，CSS animation 在運作上可以適時的減少 frame 量或以其它技術減少資源消耗。
3. CSS animation 讓瀏覽器來負責動畫的產生過程，如此可以擁有較好的優化。

## CSS animation 設定

你可以使用 {{ cssxref("animation") }} property 或其 sub-properties 來創建 CSS 動畫的細節(諸如轉化時間等)。但這並不能決定動畫的外觀，外觀的部份我們將在下面的 [使用關鍵影格定義動畫流程](#使用關鍵影格定義動畫流程) 介紹。

這裡是 {{ cssxref("animation") }} property 的 sub-properties：

- {{ cssxref("animation-delay") }}
  - : 定義元素讀取完畢到動畫開始的間隔時間。
- {{ cssxref("animation-direction") }}
  - : 定義是否動畫播放完畢後將會反向播放。
- {{ cssxref("animation-duration") }}
  - : 定義動畫完成一次週期的時間。
- {{ cssxref("animation-iteration-count") }}
  - : 定義動畫重複的次數。你可以用 `infinite` 來讓動畫永遠重複播放。
- {{ cssxref("animation-name") }}
  - : 定義關鍵影格 {{ cssxref("@keyframes") }} 的名字。
- {{ cssxref("animation-play-state") }}
  - : 控制動畫的播放狀態。有 pause 和 running 兩種值，後者為預設值。
- {{ cssxref("animation-timing-function") }}
  - : 定義動畫轉變時時間的加速曲線 (例如 linear)。
- {{ cssxref("animation-fill-mode") }}
  - : 定義元素在動畫播放外(動畫開始前及結束後)的狀態。

## 使用關鍵影格定義動畫流程

在你設定了動畫的時間資訊之後，你必須要設定動畫漸變的過程。這可以藉由建造兩個或更多的關鍵影格來達到目的 (使用 {{ cssxref("@keyframes") }} )。關鍵影格描述了該元素在漸變過程中的外觀。

因為動畫漸變時間已經在 CSS style 中被定義(見上節)，所以關鍵影格使用 {{ cssxref("percentage") }} 來指出他們會在整個漸變流程中的哪個時間點出現。 0% 代表他是整個動畫的起點，而 100% 指出他是整個動畫的結束點。這兩個特殊時間點一定要被定義，如此一來瀏覽器材知道該如何產生你的動畫。也因為他們是如此重要，所以這兩個時間點有特殊的別名： `from` 和 `to。`

當然你也可以在動畫轉變過程中增加更多的關鍵影格。

## 範例

> [!NOTE]
> 為了簡潔起見，以下的範例中我們只列出前綴為 `-moz-` 的部份。當你查看 Live Sample 的原始碼時，可以看到前綴為 `-webkit-` 的部份。

### 使文字滑過畫面

這是一個簡單的範例，他展示了 {{ HTMLElement("p") }} element 從畫面右方滑向左方。

```css
<style type="text/css">
  p {
    -moz-animation-duration: 3s;
    -moz-animation-name: slidein;
  }

  @-moz-keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
</style>
```

這裡用 {{ cssxref("animation-duration") }} property 定義 {{ HTMLElement("p") }} element 的變動自開始到結束共花 3 秒。而關鍵影格的名稱由 {{ cssxref("@keyframes") }} 指定 - 叫做 slidein。

傳統的 {{ HTMLElement("p") }} element 尚有其他性質可供設定，但假設這些性質並不支援 CSS animation，則我們不能期待他們會被瀏覽器顯示。

這裡的關鍵影格我們定義了兩個 (以 {{ cssxref("@keyframes") }} 定義)，開始 (0%)和結束 (100%)。開始的影格在 from 中，而結束在 to 中。由程式中我們可以看到，整個動畫由最一開始處於最右方且 width 為 300% 轉變為處於最左方且 width 為 100%。如此一來你就可以看到 {{ HTMLElement("p") }} element 由右而左的滑過畫面。

結束影格描述 width 為 100% 可以確保 {{ HTMLElement("p") }} element 在可視範圍內。

```html
<p>
  The Caterpillar and Alice looked at each other for some time in silence: at
  last the Caterpillar took the hookah out of its mouth, and addressed her in a
  languid, sleepy voice.
</p>
```

{{EmbedLiveSample("使文字滑過畫面","100%","250")}}

### 在開頭和結束間加入關鍵影格

現在我們試著多加入新的關鍵影格。在這個範例中，我們希望做到在文字在移動時字體先變大而後恢復正常。程式碼如下：

```css
75% {
  font-size: 300%;
  margin-left: 25%;
  width: 150%;
}
```

```css hidden
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html hidden
<p>
  The Caterpillar and Alice looked at each other for some time in silence: at
  last the Caterpillar took the hookah out of its mouth, and addressed her in a
  languid, sleepy voice.
</p>
```

這段程式碼告訴瀏覽器在開始後過了 75% 的時間後字體增大到三倍，且位置在離左側 25 % 處，此時總寬度為 150%。

{{EmbedLiveSample("在開頭和結束間加入關鍵影格","100%","250")}}

### 重複播放

為了達到重複播放的目的，我們使用 {{ cssxref("animation-iteration-count") }} property。讓我們把它設定成 `infinite` ：

```css
p {
  -moz-animation-duration: 3s;
  -moz-animation-name: slidein;
  -moz-animation-iteration-count: infinite;
}
```

```css hidden
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html hidden
<p>
  The Caterpillar and Alice looked at each other for some time in silence: at
  last the Caterpillar took the hookah out of its mouth, and addressed her in a
  languid, sleepy voice.
</p>
```

{{EmbedLiveSample("重複播放","100%","250")}}

### 播放完畢後反向播放

由上個例子我們知道該如何永久性播放動畫。但這個顯示結果有些突兀，是以我們試著讓他播放完畢後倒帶執行。這需要用到 {{ cssxref("animation-direction") }}，賦予 `alternate 的值：`

```css
p {
  -moz-animation-duration: 3s;
  -moz-animation-name: slidein;
  -moz-animation-iteration-count: infinite;
  -moz-animation-direction: alternate;
}
```

```css hidden
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html hidden
<p>
  The Caterpillar and Alice looked at each other for some time in silence: at
  last the Caterpillar took the hookah out of its mouth, and addressed her in a
  languid, sleepy voice.
</p>
```

{{EmbedLiveSample("播放完畢後反向播放","100%","250")}}

### 使用動畫的事件

你可以藉由 animation event 來對 CSS animation 做更進階的控制，這需要用到 {{ domxref("event/AnimationEvent", "AnimationEvent") }} 物件。他可以用來偵測動畫所處的時間點等資訊。每個 event 包含發生的時間以及觸發 event 的動畫名字。

我們將修改剛剛的範例來展示 animation event 的能力。

```css
.slidein {
  -moz-animation-duration: 3s;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -moz-animation-name: slidein;
  -webkit-animation-name: slidein;
  animation-name: slidein;
  -moz-animation-iteration-count: 3;
  -webkit-animation-iteration-count: 3;
  animation-iteration-count: 3;
  -moz-animation-direction: alternate;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

@-moz-keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

@-webkit-keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

#### 設定 animation event listeners

我們使用 JavaScript 來監控所有可能的 animation events。下面的 `setup()` 函式設定我們的 event listeners，並且在文件第一次被載入時執行他：

```js
function setup() {
  var e = document.getElementById("watchme");
  e.addEventListener("animationstart", listener, false);
  e.addEventListener("animationend", listener, false);
  e.addEventListener("animationiteration", listener, false);

  var e = document.getElementById("watchme");
  e.className = "slidein";
}
```

這是非常簡單的程式，你可以從其它相關文件中取得 {{ domxref("element.addEventListener()") }} 的更多細節。setup() 函式所做的最後一件事是設定這個 element 的 class name 為 slidein，此時，我們啟動了這個動畫。

這麼做的原因是 `animationstart` event 會在被動畫執行時立刻被觸發，所以我們只好在最後才設定 class name。

#### 接收 events

這些 events 會被發送到 `listener()` 函式，如下所示：

```js
function listener(e) {
  var l = document.createElement("li");
  switch (e.type) {
    case "animationstart":
      l.innerHTML = "Started: elapsed time is " + e.elapsedTime;
      break;
    case "animationend":
      l.innerHTML = "Ended: elapsed time is " + e.elapsedTime;
      break;
    case "animationiteration":
      l.innerHTML = "New loop started at time " + e.elapsedTime;
      break;
  }
  document.getElementById("output").appendChild(l);
}
```

這段程式檢查藉由檢查 {{ domxref("event.type") }} 得知現在收到了哪種 animation event，並且以一個 {{ HTMLElement("ul") }} (unordered list) 形式的記錄下他。

程式執行結果看起來會是這樣子的：

- Started: elapsed time is 0
- New loop started at time 3.01200008392334
- New loop started at time 6.00600004196167
- Ended: elapsed time is 9.234000205993652

注意這裡的時間是一個範例，你自己執行可能會取得不一樣的結果(但應該會近似)。此外，在動畫的最後，event 會是 `animationend` 而非 `animationiteration` 。

#### 完整的 HTML 程式碼

這裡是完整的 HTML 程式碼：

```html
<body onload="setup()">
  <h1 id="watchme">Watch me move</h1>
  <p>
    This example shows how to use CSS animations to make
    <code>h1</code> elements move across the page.
  </p>
  <p>
    In addition, we output some text each time an animation event fires, so you
    can see them in action.
  </p>
  <ul id="output"></ul>
</body>
```

{{EmbedLiveSample('使用動畫的事件', '600', '300')}}

## 更多資訊

- {{ domxref("Event/AnimationEvent", "AnimationEvent") }}
- [Detecting CSS animation support](/zh-TW/docs/CSS/CSS_animations/Detecting_CSS_animation_support)
