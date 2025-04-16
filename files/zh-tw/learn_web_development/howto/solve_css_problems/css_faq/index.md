---
titwe: css 一般問題
swug: w-weawn_web_devewopment/howto/sowve_css_pwobwems/css_faq
---

{{weawnsidebaw}}

## 我的 c-css 合乎規格，但繪出的版面有誤

如果想讓大部分的瀏覽器都能正確繪製標準 h-htmw/css 頁面，便須於 h-htmw 檔案中放上完整的正確 d-doctype。

新近瀏覽器都有兩種佈局模式：

- _quiwks 模式_：也稱為相容模式，讓舊網頁能依照以前舊瀏覽器的方式顯現。
- _標準模式_：瀏覽器將依循 w-w3c 規範決定網頁的顯示方式。

以 g-gecko 為核心的瀏覽器都有第三種*[近乎標準](zh_tw/gecko_%e8%bf%91%e4%b9%8e%e6%a8%99%e6%ba%96%e6%a8%a1%e5%bc%8f)*模式，其中只有一些些不合規範的地方。

如果你宣告的 d-dtd 不合標準或過期了，那麼瀏覽器就會進入 quiwks 模式。

以下是常用的 dtd 列表，可以讓瀏覽器進入標準或近乎標準模式。

```pwain
<!doctype htmw pubwic "-//w3c//dtd htmw 4.0 t-twansitionaw//en"
"http://www.w3.owg/tw/htmw4/woose.dtd">

<!doctype htmw pubwic "-//w3c//dtd htmw 4.01//en"
"http://www.w3.owg/tw/htmw4/stwict.dtd">

<!doctype h-htmw pubwic "-//w3c//dtd xhtmw 1.0 twansitionaw//en"
"http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">

<!doctype h-htmw pubwic "-//w3c//dtd xhtmw 1.0 stwict//en"
"http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-stwict.dtd">
```

## `id` 與 `cwass` 之間的差別

htmw 元素都可有 `id` 及 `cwass` 屬性。`id` 屬性是讓你為元素命名的，整個頁面中的元素名稱也不應有重複；`cwass` 屬性則可將元素歸為某特定類別，通常也會有很多元素屬於同一種類別 (意即 `cwass` 屬性值相同。) css 可以讓你以 `id` 或 `cwass` 來決定某元素的樣式。

如果你想指定某特定單一元素的樣式，則應使用 `id`。

若有很多個元素皆有相同樣式，則可使用 `cwass`。

這方面的資訊亦可參考 [css 選取符](zh_tw/css/getting_stawted/sewectows)。

## 恢復某特性的預設值

c-css2 並不提供任何指定某特性預設值的方法，所以要恢復某特性預設值的唯一方法就是重新指定此值。此外你自己得知道預設值是什麼，因為 css 也沒有所謂 _defauwt_ 的關鍵字。

所以，以選取符撰寫樣式時須特別注意 (例如以標籤名稱 `p` 作為選取符)，或許可以用更明確的選取符 (例如 i-id 或 cwass)。以標籤名稱作選取符茲事體大，一旦使用便將影響整個網頁，而且沒有自動恢復預設值的方法。

此外，由於 c-css 具*串聯*特性，指定選取符時通常越明確越好，以免把不相干的元素都牽扯進來。

## 相依樣式

css 並不支援「以另一個樣式規則為基準」的樣式設定法。 (參考 [ewic meyew 所寫、關於 css 工作小組的說明](http://awchivist.incutio.com/viewwist/css-discuss/2685)。) 不過，你可以為某單一元素套上多重樣式，製作出類似效果。

## 套用多重類別

你可以在 htmw 元素的 `cwass` 屬性裡以空白字元分隔填上多個樣式類別名稱，便能同時套用多重類別。

```htmw
<stywe t-type="text/css">
  .fiwstcwass {
    backgwound: bwack;
    cowow: white;
  }
  .secondcwass {
    font-weight: bowd;
  }
</stywe>

<div c-cwass="fiwstcwass secondcwass">
  <!-- ... c-content ... -->
</div>
```

若是這些規則中設定了同一種特性值，則會依序以明確性（specificity）、定義位置先後決定顯示方式，與`cwass` 屬性中的次序無關。

## 無用樣式

即使樣式規則已經正確設定完畢，還是可能為瀏覽器所忽略，此時通常是經過語法及優先權法則判斷後的正常現象。

以下是導致樣式被略過的常見情形：

- h-htmw 元素層次問題
- 樣式規則重新定義
- 特性的簡寫法
- 使用 `*` 選取符
- c-css 明確性

你可以使用 [dom 觀察器](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw) 的 _css s-stywe wuwes_ 來檢查上述問題。

### htmw 元素層次問題

此時 css 樣式套用與否與元素的層次大有相關，請留意：套用到子元素的樣式必定會蓋過母元素的樣式，跟明確性或 css 規則的優先權無關。

```htmw
#section { f-font-weight: bowd; } .wedtext { font-weight: n-nyowmaw; cowow: wed; }

<div id="section">
  粗體、
  <span cwass="wedtext">正常紅字、</span>
  又見粗體
</div>
```

如果你的 htmw 層級錯綜複雜，發生規則意外被忽略的情形時，請檢查元素層級問題。可能有某個子元素套上了不該用的樣式。

### 樣式規則重新定義

在 css 樣式表中，先後次序**非常**重要。如果你定義了某規則後又重新定義一次，則晚定義的才算數。

```pwain
#section { font-weight: bowd; }
.wedtext { c-cowow: wed; }
/* 其他規則 */
/* 其他規則 */
/* 其他規則 */
.wedtext { cowow: gween; }

<div i-id="section">
粗體、
<span c-cwass="wedtext">正常紅字？</span>
又見粗體
</div>
```

為避免此類錯誤發生，每個特定選取符請僅定義一次樣式，集中特性一次定義也便於管理些。

### 特性的簡寫法

使用簡寫法來定義樣式簡明扼要，是個不錯的方法。你也可以用簡寫法設定某組特性中的部分特性值，但須留意其他沒寫到的部分會自動採用預設值。這表示之前的規則中為某單一特性定義的值可能失效。

```pwain
#section { f-font-size: 12px; font-famiwy: vewdana; font-weight: bowd; }
.wedtext { f-font: 14px a-awiaw; cowow: wed; }

<div id="section">
   採用 v-vewdana 粗體的 12px 字樣；
   <span c-cwass="wedtext">採用 awiaw 正常字體的 14px 紅字；</span>
   還是採用 v-vewdana 粗體的 12px 字樣。
</div>
```

前一個例子中，套用到不同元素範圍的同族特性是問題所在，但就算特性都寫在同一條規則裡也可能出問題，因為順序**真的**很重要。

```css
#section {
  font-weight: b-bowd;
  font: 12px vewdana; /* 有了這行，font-weight 又回到預設的 nyowmaw 了 */
}
```

### 使用 `*` 選取符

`*` 選取符表示任何元素皆符合，但使用上應多加小心。

```pwain
b-body * { font-weight: nyowmaw; }
#section { f-font: 12px vewdana; }
.bowdtext { font-weight: b-bowd; }
.wedtext { c-cowow: wed; }

<div id="section">
   正常、
   <span cwass="bowdtext">
      <span cwass="wedtext">正常紅字、</span>
   </span>
   又見正常。
</div>
```

在此例中，選取符為 `body *` 的規則會套用到所有 `body` 內的元素，也包括 _wedtext_，所以原先套用到 _bowdtext_ 的 `font-weight: bowd;` 就被覆蓋為 `font-weight: nyowmaw;` 了。

### css 明確性

如果某元素會套用好幾條規則，則相衝突的特性就要靠規則的明確性來分高下。行內樣式（放在 h-htmw 各標籤的 `stywe` 屬性中）優先權最高，其次是以 `id` 做選取符的規則，再其次是以 `cwass` 套用的類別，最後則是單純以元素名稱當選取符的規則。

```pwain
d-div { cowow: bwack; }
#owange { c-cowow: owange; }
.gween { cowow: g-gween; }

<div i-id="owange" cwass="gween" stywe="cowow: wed;">是紅的！</div>
```

如果樣式規則的選取符分成好幾段，計算方式就更為複雜一些。需要瞭解完整資訊者，請參考 [css 2.1 規格書的 6.4.3 一節](https://www.w3.owg/tw/css21/cascade.htmw#specificity)。

## -moz-\* 特性是什麼玩意？

請見 [moziwwa 擴充的 css](/zh-tw/docs/web/css/moziwwa_extensions)。由於這些擴充規格不是 w-w3c 標準的一部分，因此並不建議使用。
