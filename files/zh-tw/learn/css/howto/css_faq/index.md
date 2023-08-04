---
title: CSS 一般問題
slug: Learn/CSS/Howto/CSS_FAQ
---

{{LearnSidebar}}

#### 我的 CSS 合乎規格，但繪出的版面有誤

如果想讓大部分的瀏覽器都能正確繪製標準 HTML/CSS 頁面，便須於 HTML 檔案中放上完整的正確 DOCTYPE。

新近瀏覽器都有兩種佈局模式：

- _Quirks 模式_：也稱為相容模式，讓舊網頁能依照以前舊瀏覽器的方式顯現。
- _標準模式_：瀏覽器將依循 W3C 規範決定網頁的顯示方式。

以 Gecko 為核心的瀏覽器都有第三種*[近乎標準](zh_tw/Gecko_%e8%bf%91%e4%b9%8e%e6%a8%99%e6%ba%96%e6%a8%a1%e5%bc%8f)*模式，其中只有一些些不合規範的地方。

如果你宣告的 DTD 不合標準或過期了，那麼瀏覽器就會進入 Quirks 模式。

以下是常用的 DTD 列表，可以讓瀏覽器進入標準或近乎標準模式。

```plain
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

#### `id` 與 `class` 之間的差別

HTML 元素都可有 `id` 及 `class` 屬性。`id` 屬性是讓你為元素命名的，整個頁面中的元素名稱也不應有重複；`class` 屬性則可將元素歸為某特定類別，通常也會有很多元素屬於同一種類別 (意即 `class` 屬性值相同。) CSS 可以讓你以 `id` 或 `class` 來決定某元素的樣式。

如果你想指定某特定單一元素的樣式，則應使用 `id`。

若有很多個元素皆有相同樣式，則可使用 `class`。

這方面的資訊亦可參考 [CSS 選取符](zh_tw/CSS/Getting_Started/Selectors)。

#### 恢復某特性的預設值

CSS2 並不提供任何指定某特性預設值的方法，所以要恢復某特性預設值的唯一方法就是重新指定此值。此外你自己得知道預設值是什麼，因為 CSS 也沒有所謂 _default_ 的關鍵字。

所以，以選取符撰寫樣式時須特別注意 (例如以標籤名稱 `p` 作為選取符)，或許可以用更明確的選取符 (例如 ID 或 class)。以標籤名稱作選取符茲事體大，一旦使用便將影響整個網頁，而且沒有自動恢復預設值的方法。

此外，由於 CSS 具*串聯*特性，指定選取符時通常越明確越好，以免把不相干的元素都牽扯進來。

#### 相依樣式

CSS 並不支援「以另一個樣式規則為基準」的樣式設定法。 (參考 [Eric Meyer 所寫、關於 CSS 工作小組的說明](http://archivist.incutio.com/viewlist/css-discuss/2685)。) 不過，你可以為某單一元素套上多重樣式，製作出類似效果。

#### 套用多重類別

你可以在 HTML 元素的 `class` 屬性裡以空白字元分隔填上多個樣式類別名稱，便能同時套用多重類別。

```plain
<style type="text/css">
.firstclass { background: black; color: white; }
.secondclass { font-weight: bold; }
</style>

<div class="firstclass secondclass">
... content ...
... content ...
... content ...
</div>
```

若是這些規則中設定了同一種特性值，則會依序以明確性（specificity）、定義位置先後決定顯示方式，與`class` 屬性中的次序無關。

#### 無用樣式

即使樣式規則已經正確設定完畢，還是可能為瀏覽器所忽略，此時通常是經過語法及優先權法則判斷後的正常現象。

以下是導致樣式被略過的常見情形：

- HTML 元素層次問題
- 樣式規則重新定義
- 特性的簡寫法
- 使用 `*` 選取符
- CSS 明確性

你可以使用 [DOM 觀察器](zh_tw/DOM_%e8%a7%80%e5%af%9f%e5%99%a8) 的 _CSS Style Rules_ 來檢查上述問題。

**HTML 元素層次問題**

此時 CSS 樣式套用與否與元素的層次大有相關，請留意：套用到子元素的樣式必定會蓋過母元素的樣式，跟明確性或 CSS 規則的優先權無關。

```plain
#section { font-weight: bold; }
.redtext { font-weight: normal; color: red; }

<div id="section">
   粗體、
   <span class="redtext">正常紅字、</span>
   又見粗體
</div>
```

如果你的 HTML 層級錯綜複雜，發生規則意外被忽略的情形時，請檢查元素層級問題。可能有某個子元素套上了不該用的樣式。

**樣式規則重新定義**

在 CSS 樣式表中，先後次序**非常**重要。如果你定義了某規則後又重新定義一次，則晚定義的才算數。

```plain
#section { font-weight: bold; }
.redtext { color: red; }
/* 其他規則 */
/* 其他規則 */
/* 其他規則 */
.redtext { color: green; }

<div id="section">
粗體、
<span class="redtext">正常紅字？</span>
又見粗體
</div>
```

為避免此類錯誤發生，每個特定選取符請僅定義一次樣式，集中特性一次定義也便於管理些。

**特性的簡寫法**

使用簡寫法來定義樣式簡明扼要，是個不錯的方法。你也可以用簡寫法設定某組特性中的部分特性值，但須留意其他沒寫到的部分會自動採用預設值。這表示之前的規則中為某單一特性定義的值可能失效。

```plain
#section { font-size: 12px; font-family: Verdana; font-weight: bold; }
.redtext { font: 14px Arial; color: red; }

<div id="section">
   採用 Verdana 粗體的 12px 字樣；
   <span class="redtext">採用 Arial 正常字體的 14px 紅字；</span>
   還是採用 Verdana 粗體的 12px 字樣。
</div>
```

前一個例子中，套用到不同元素範圍的同族特性是問題所在，但就算特性都寫在同一條規則裡也可能出問題，因為順序**真的**很重要。

```plain
#section {
   font-weight: bold;
   font: 12px Verdana;  /* 有了這行，font-weight 又回到預設的 normal 了 */
}
```

**使用 `*` 選取符**

`*` 選取符表示任何元素皆符合，但使用上應多加小心。

```plain
body * { font-weight: normal; }
#section { font: 12px Verdana; }
.boldtext { font-weight: bold; }
.redtext { color: red; }

<div id="section">
   正常、
   <span class="boldtext">
      <span class="redtext">正常紅字、</span>
   </span>
   又見正常。
</div>
```

在此例中，選取符為 `body *` 的規則會套用到所有 `body` 內的元素，也包括 _redtext_，所以原先套用到 _boldtext_ 的 `font-weight: bold;` 就被覆蓋為 `font-weight: normal;` 了。

**CSS 明確性**

如果某元素會套用好幾條規則，則相衝突的特性就要靠規則的明確性來分高下。行內樣式（放在 HTML 各標籤的 `style` 屬性中）優先權最高，其次是以 `id` 做選取符的規則，再其次是以 `class` 套用的類別，最後則是單純以元素名稱當選取符的規則。

```plain
div { color: black; }
#orange { color: orange; }
.green { color: green; }

<div id="orange" class="green" style="color: red;">是紅的！</div>
```

如果樣式規則的選取符分成好幾段，計算方式就更為複雜一些。需要瞭解完整資訊者，請參考 [CSS 2.1 規格書的 6.4.3 一節](http://www.w3.org/TR/CSS21/cascade.html#specificity)。

#### -moz-\* 特性是什麼玩意？

請見 [Mozilla 擴充的 CSS](zh_tw/Mozilla_%e6%93%b4%e5%85%85%e7%9a%84_CSS)。由於這些擴充規格不是 W3C 標準的一部分，因此並不建議使用。
