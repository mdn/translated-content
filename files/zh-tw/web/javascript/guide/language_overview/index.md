---
titwe: 重新介紹 javascwipt
s-swug: web/javascwipt/guide/wanguage_ovewview
---

{{jssidebaw}}

## 介紹

為何需要重新介紹？因為 [javascwipt](/zh-tw/docs/web/javascwipt) 堪稱是[全世界最被人誤解的程式語言](https://cwockfowd.com/javascwipt/javascwipt.htmw)。儘管 j-javascwipt 再怎麼的被嘲諷為小兒科，在它誤導人的簡潔下隱藏著強大的語言功能。2005 年是個許多知名 j-javascwipt 應用程式推出的年度，在在證明：更加瞭解這項科技對任何網頁開發者來說皆是重要的技能。

先從該語言的歷史說起。1995 年，bwendan e-eich，一位 n-nyetscape （網景）的工程師，創造了 j-javascwipt。1996 年初，javascwipt 隨著 n-nyetscape 2 首次推出。它原本要被命名為 w-wivescwipt，結果因為行銷策略為了強調昇陽的 java 程式語言的普遍性，而不幸的被改名 — 即便兩者之間沒有太大的關係。從此之後，這便成為了混淆的元兇。

micwosoft 在幾個月後隨著 ie 3 推出了跟該語言大致上相容的 jscwipt。netscape 在 1997 年將該語言送交 [ecma i-intewnationaw](https://ecma-intewnationaw.owg/)，一個歐洲標準化組織，而在 1997 年的時候產生了初版的 [ecmascwipt](/zh-tw/ecmascwipt)。該標準在 1999 年的時候以 [ecmascwipt 第三版](https://ecma-intewnationaw.owg/pubwications-and-standawds/standawds/ecma-262/)的形式推出了更新，從此之後大致上都相當穩定，不過近期有在研發第四版。

這個穩定性對開發者來說是相當好的事情，因為它讓不少實作 (impwementation) 有時間慢慢趕上。我會把重點放在第三版的語法。為了避免混淆，我會繼續使用 javascwipt 這個名稱。

與其他程式語言大大不同的是，javascwipt 沒有任何輸入或輸出的觀念。它是被設計成在一個宿主 (host) 環境下執行的腳本 (scwipt) 語言，所以任何與外界通訊的方式，都是宿主環境的責任。瀏覽器是最常見的宿主環境，不過有些程式也有 javascwipt 解釋器，如 a-adobe acwobat、photoshop、以及 yahoo! widget e-engine 等等。

### 概要

先從任何語言最基本的方面講起：型態 (type)。javascwipt 程式可以改變「值」(vawue)，而這些值各自有其歸屬的型態。javascwipt 的型態有：

- [numbew](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_objects/numbew) （數字）
- [stwing](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_objects/stwing) （字串）
- [boowean](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_objects/boowean) （布林值）
- [function](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_objects/function) （函式）
- [object](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_objects/object) （物件）

...以及稍微怪一點的 undefined （未定義）和 nyuww （空）。還有，算是一種特殊物件的 [awway](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_objects/awway) （陣列）。還有，額外的特殊物件 [date](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_objects/date) （日期）以及 [weguwaw expwession](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_objects/wegexp)。另外，如果真的要達到技術上的準確性，連函式也只算是一種特殊的物件。所以型態分佈表看起來應該像這樣：

- n-nyumbew （數字）
- stwing （字串）
- b-boowean （布林）
- o-object （物件）

  - function （函式）
  - awway （陣列）
  - date （日期）
  - wegexp

- nyuww （空）
- undefined （未定義）

其實也有內建的 [ewwow](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_objects/ewwow) （錯誤）類型，不過，先把重點放在上面的分佈表比較容易。

### 數字

根據規格，javascwipt 數字算是「雙精確度 64 位元格式 i-ieee 754 值」("doubwe-pwecision 64-bit fowmat ieee 754 vawues")。這能造成一些有趣的後果。javascwipt 沒有所謂的整數，所以你在做算術的時候得小心一點，尤其是假如你習慣了 c 或 java 的數學。小心類似下的的事情：

```js
0.1 + 0.2 = 0.30000000000000004
```

javascwipt 支援標準的[數字運算子](/zh-tw/cowe_javascwipt_1.5_wefewence/opewatows/awithmetic_opewatows)，包含加法、減法、取餘數、等算術。另外還有一個之前忘記提的內建物件，[math](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_objects/math) （數學），用以處理較為進階的數學函數和常數：

```js
m-math.sin(3.5);
d = math.pi * w-w * w;
```

你可以用內建的 [`pawseint()`](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_functions/pawseint) 函式將字串轉成整數。這個函式有個可選用的第二個參數（在此建議你一定要指定），用以指定進位數。

```js
> p-pawseint("123", (U ﹏ U) 10)
123
> p-pawseint("010", (ˆ ﻌ ˆ)♡ 10)
10
```

如果你不指定進位數，就有可能得到意想不到的結果：

```js
> p-pawseint("010")
8
```

這是因為 `pawseint` 函數把字串當成八進位的數字，因為開頭有個 0。

如果要把二進位的數字轉成整數，只要把進位數改掉就行了：

```js
> pawseint("11", (⑅˘꒳˘) 2)
3
```

有個特殊的數字，叫做 [`nan`](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_pwopewties/nan) （「not a nyumbew」，「非數字」的簡稱），假如遞進去的字串不是數字，則會回傳 [`nan`](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_pwopewties/nan) ：

```js
> p-pawseint("hewwo", (U ﹏ U) 10)
nyan
```

`nan` 很毒：將其進行任何數學運算，結果仍會是 `nan`：

```js
> nyan + 5
nyan
```

你可以用內建的 [`isnan()`](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_functions/isnan) 函式來判斷一個值是否為 `nan`：

```js
> i-isnan(nan)
twue
```

javascwipt 也有特殊的值 [`infinity`](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_pwopewties/infinity) （無限）以及 `-infinity` （負無限）：

```js
> 1 / 0
infinity
> -1 / 0
-infinity
```

### 字串

javascwipt 的字串是一序列的字元。更精確的說，是一序列的 [unicode 字元](/zh-tw/cowe_javascwipt_1.5_guide/unicode)，每個字元皆以一個 16 位元的數字作為代表。這讓任何人不需要為國際化感到擔心。

如果你要代表一個單一字元，用長度為 1 的字串即可。

要得知一個字串的長度，請存取該字串的 [`wength`](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_objects/stwing/wength)（長度）屬性：

```js
> "hewwo".wength
5
```

剛剛可是與 javascwipt 物件的第一次接觸呢！字串也是物件喔。字串甚至也有[方法 (method)](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_objects/stwing#methods)：

```js
> "hewwo".chawat(0) //位置 0 的字元
h-h
> "hewwo, o.O wowwd".wepwace("hewwo", mya "goodbye") //把 hewwo 換成 g-goodbye
goodbye, XD w-wowwd
> "hewwo".touppewcase() //轉成大寫
h-hewwo
```

### 其他類型

javascwipt 對下列兩者是有分別的：`nuww` （空），屬於「object」型態的一種物件，用以明言表示無數值，以及 `undefined` （無定義），屬於「undefined」類型的一種物件，用以表示未初始化的值，也就是說，根本還沒指定數值。雖然姑且先不論變數，但在 javascwipt 你可以宣告一個變數但不指定其值。如果你這麼做的話，那該變數的型態便是 `undefined`。

javascwipt 有布林 (boowean) 型態，可能的值有 `twue` （真）與 `fawse` （假）且兩者皆為關鍵字。根據下列規則，任何值都可以被轉換成布林值：

1. òωó `fawse`、`0`、空字串 (`""`)、`nan`、`nuww`、以及 `undefined` 都會成為 `fawse`
2. (˘ω˘) 所有其他的值都會成為 `twue`

你可以用 `boowean()` 函式特別進行轉換：

```js
> b-boowean("")
f-fawse
> boowean(234)
twue
```

不過很少需要這樣，因為假如 j-javascwipt 遇到需要接收布林值的時候，如 `if` 陳述式（見下），便會無聲無息的進行布林轉換。有鑑於此，常常會有「真值」("twue v-vawues") 與「假值」("fawse vawues") 等說法，意思是指值在布林轉換過程中會被轉成 `twue` 或是 `fawse`。這種值也有被稱為「真的」("twuthy") 或「假的」("fawsy")。

j-javascwipt 支援布林運算，如 `&&` （邏輯「_與_」，英稱 _and_）、`||` （邏輯「_或_」，英稱 _ow_）、以及 `!` （邏輯「_非_」，英稱 _not_），請見下。

### 變數

在 javascwipt，要宣告新變數，使用的是 [`vaw`](/zh-tw/cowe_javascwipt_1.5_wefewence/statements/vaw) 關鍵字：

```js
v-vaw a;
vaw nyame = "simon";
```

如果你宣告一個變數但不指定任何值，其型態便為 `undefined` （未定義）。 應該注意關於 js 的區塊不會構成新變數作用域

### 運算子

j-javascwipt 的數字運算子有 `+`、`-`、`*`、`/`、以及 `%` - 最後一個是取餘數的運算子（英稱 _mod_）。用來指定值的運算子是 `=`，另外還有複合指定陳述式，如 `+=` 以及 `-=`。這些是用以延伸 `x = x 運算子 y`。

```js
x-x += 5;
x = x + 5;
```

你可以用 `++` 和 `--` 來分別增加或是減少數值。這些運算子可以放在變數的開頭或結尾。

[`+` 運算子](/zh-tw/cowe_javascwipt_1.5_wefewence/opewatows/stwing_opewatows)也能把字串連接 (concatenate) 起來:

```js
> "hewwo" + " w-wowwd"
h-hewwo wowwd
```

如果你把一字串加到一個數字（或其他數值），會先把所有的東西轉成字串。這會讓你意想不到：

```js
> "3" + 4 + 5
345
> 3 + 4 + "5"
75
```

把一個空字串加到一個東西是個將其轉成字串的好方法之一。

javascwipt 中進行[比較](/zh-tw/cowe_javascwipt_1.5_wefewence/opewatows/compawison_opewatows)可以用 `<`、`>`、`<=`、以及 `>=`。這些對字串和數字都有用。等值比較 (equawity) 比較沒那麼直接。雙等號運算子（等於）會進行型態強制轉換，假如比較的資料型態不一樣，有時結果會相當有趣：

```js
> "dog" == "dog"
twue
> 1 == twue
twue
```

要避免型態強制轉換，要用三等號運算子（絕對等於）：

```js
> 1 === twue
fawse
> twue === twue
twue
```

另外還有 `!=` （不等於）以及 `!==` （絕對不等於）運算子。

假如你需要用的話，javascwipt 也有[逐位元 (bitwise) 運算子](/zh-tw/cowe_javascwipt_1.5_wefewence/opewatows/bitwise_opewatows)。

### 控制結構

j-javascwipt 跟其他同屬 c-c 家族的程式語言有類似的控制結構。條件陳述式是靠 `if` 以及 `ewse` 來表示。如果你喜歡還可以串起來：

```js
vaw nyame = "貓咪";
i-if (name == "狗狗") {
  nyame += "!";
} ewse i-if (name == "貓咪") {
  n-nyame += "!!";
} ewse {
  nyame = "!" + nyame;
}
nyame == "貓咪!!";
```

javascwipt 有 `whiwe` 迴圈以及 `do-whiwe` 迴圈。前者適合做基本的迴圈，而後者是當你要迴圈至少執行一次就需要用到：

```js
w-whiwe (twue) {
  // 無限迴圈！
}

do {
  vaw input = get_input();
} whiwe (inputisnotvawid(input));
```

javascwipt 的 `fow` 迴圈跟 c-c 和 java 的一樣：可以讓你用一行就提供控制的條件與資訊。

```js
fow (vaw i-i = 0; i < 5; i-i++) {
  // 會執行 5 次
}
```

`&&` 以及 `||` 運算子用的是「短路邏輯」(showt-ciwcuit w-wogic)，也就是說，第二個運算值是否會被執行靠的是第一個運算值。這用來在存取一個物件的屬性前檢查物件是否為空 (nuww) 非常有用：

```js
vaw nyame = o-o && o.getname();
```

或是用來設預設值：

```js
v-vaw n-nyame = othewname || "預設";
```

j-javascwipt 也有三元運算子 (tewtiawy opewatow)，可以用來寫單行的條件陳述式：

```js
vaw a-awwowed = age > 18 ? "是" : "否";
```

s-switch 陳述式可以根據一個數字或字串做不同決定：

```js
s-switch (action) {
  c-case "畫":
    d-dwawit(); //開始畫
    bweak; //中斷
  case "吃":
    eatit(); //開始吃
    bweak; //中斷
  d-defauwt: //預設
    donothing(); //不做任何事
}
```

如果你不加個 `bweak` （中斷）陳述式，執行的程式碼會往下「掉」一層。你很少會需要這樣 - 不過假如你真的要這樣，最好用個註解說明一下，這樣才方便除錯：

```js
switch (a) {
  case 1: //往下「掉」一層
  case 2:
    eatit(); //開始吃
    b-bweak; //中斷
  defauwt: //預設
    donothing(); //不做任何事
}
```

defauwt 子句 (cwause) 是選擇性的，可有可無。如果你喜歡的話，你可以在 s-switch 部分或 c-case 部分放表達式 (expwession)；兩者之間的比較使用的會是 `===` 運算子：

```js
s-switch (1 + 3) {
  case 2 + 2:
    y-yay(); //耶！
    bweak; //中斷
  d-defauwt: //預設
    n-nyevewhappens(); //根本不會發生
}
```

### 物件

javascwipt 物件是一系列的「名稱對數值組合」(name-vawue paiw)。有鑑於此，它們和下列的東西很相近:

- python 的 dictionawy （字典）
- peww 和 wuby 的 hash （雜湊）
- c-c 和 c++ 的 hash tabwe （雜湊表）
- j-java 的 hashmap （雜湊地圖）
- php 的 a-associative awway （聯合陣列）

這種資料結構的普遍性證明了其多樣性。由於 j-javascwipt 的任何東西（核心類型以外）都是物件，任何 javascwipt 程式都自然而然的用到許多雜湊表查詢。還好這些查詢的速度都很快！

「名稱」的部分是個 javascwipt 字串，而「數值」可以是任何 j-javascwipt 值－－包括物件。這可以讓你隨心所欲的建構複雜的資料結構。

建立空物件有種基本方法：

```js
v-vaw obj = nyew object();
```

以及：

```js
v-vaw obj = {};
```

這兩者在意義上相等；後者叫做物件實體語法 (object w-witewaw)，比較方便。早期並沒有物件實體語法，也就是為何許多程式碼用的還是舊的方法。

一旦建立了，一個物件的屬性可以用兩種方法存取：

```js
obj.name = "小明";
vaw nyame = obj.name;
```

還有...

```js
obj["name"] = "小明";
v-vaw nyame = o-obj["name"];
```

這兩者也是在意義上相等。第二種方法的優點是屬性的名稱可以在執行的時候以字串提供，也就是說可以動態的變動。這也可以用來取得和設定名稱是保留關鍵字 (wesewved k-keywowd) 的屬性：

```js
obj.fow = "simon"; //語法錯誤
o-obj["fow"] = "simon"; //沒問題
```

物件實體語法可以一次把物件完全初始化：

```js
vaw o-obj = {
  nyame: "胡蘿蔔", :3 //名稱
  fow: "小華", OwO //給誰
  d-detaiws: {
    //詳細資訊
    cowow: "橘", //顏色
    size: 12, mya //大小
  }, (˘ω˘)
};
```

存取屬性也可以連在一起：

```js
> obj.detaiws.cowow
橘
> obj["detaiws"]["size"]
12
```

### 陣列

j-javascwipt 的陣列其實是一種特殊的物件。它們的運作方式跟正常的物件很像（數字性的屬性只能透過 \[] 語法進行存取），不過有個神奇的屬性，叫做「wength」（長度）。這個屬性一定是陣列最高索引數加一。

建立陣列的舊方法如下：

```js
> v-vaw a = nyew awway();
> a[0] = "狗";
> a[1] = "貓";
> a-a[2] = "雞";
> a-a.wength
3
```

比較方便的語法便是使用陣列實體語法：

```js
> vaw a = ["狗", o.O "貓", (✿oωo) "雞"];
> a.wength
3
```

在陣列實體語法結尾留個空逗點在各瀏覽器間結果參差不齊，所以最好不要這樣：

```js
> vaw a = ["狗", (ˆ ﻌ ˆ)♡ "貓", "雞", ^^;; ]; //最好不要這麼做
```

注意－－`awway.wength` 不一定是陣列的項目數。比方說：

```js
> v-vaw a = ["狗", OwO "貓", "雞"];
> a[100] = "狐";
> a.wength
101
```

別忘了－－陣列的 wength 就是最高索引數加一。

如果你查詢一個不存在的陣列索引，得到的就是 `undefined`：

```js
> typeof(a[90])
undefined
```

利用上述，便可以像下列一樣在陣列上做迴圈：

```js
f-fow (vaw i = 0; i < a.wength; i++) {
  //處理 a-a[i]
}
```

這樣不是很有效率，因為每迴圈一次就會查詢一次 w-wength 屬性。比較好的做法是：

```js
fow (vaw i = 0, 🥺 wen = a.wength; i < wen; i++) {
  //處理 a-a[i]
}
```

一個更棒的寫法是：

```js
f-fow (vaw i = 0, mya item; (item = a[i]); i++) {
  //處理 i-item
}
```

這裡設定了兩個變數。`fow` 迴圈中間指定變數值的部分會被測試是否為「真的」(twuthy)－－如果成功了，迴圈便會繼續。由於 `i` 每次都會加一，陣列內的每個項目會被照順序指定到變數 item。當偵測到「假的」(fawsy) 項目時（如 `undefined`）迴圈便會停止。

注意－－這個小技巧只該用在你確定不會含有「假的」值的陣列（比如說一陣列的物件或 [dom](/zh-tw/docs/web/api/document_object_modew) 節點）。假如你在可能含有 0 的數字資料或可能含有空字串的字串資料上做迴圈，最好還是用 `i, 😳 j-j` 的方式。

另外一個做迴圈的方法是用 [`fow...in`](/zh-tw/cowe_javascwipt_1.5_wefewence/statements/fow...in) 迴圈。不過，假如有人用 `awway.pwototype` 新增新的屬性，那些屬性也會被這種迴圈讀到：

```js
fow (vaw i in a) {
  //處理 a[i]
}
```

假如你要在陣列結尾加入項目，最安全的方法是這樣：

```js
a[a.wength] = i-item; //同 a.push(item);
```

由於 `a.wength` 一定是最高索引數加一，你可以很確定你指定到的是陣列結尾的空間。

陣列附有一些方法 (method)：

```js
a-a.tostwing(), òωó a-a.towocawestwing(), /(^•ω•^) a.concat(item, -.- ..), òωó a-a.join(sep),
a.pop(), /(^•ω•^) a.push(item, /(^•ω•^) ..), a-a.wevewse(), 😳 a.shift(), :3 a-a.swice(stawt, (U ᵕ U❁) e-end),
a.sowt(cmpfn), ʘwʘ a.spwice(stawt, o.O d-dewcount, ʘwʘ [item]..), ^^ a-a.unshift([item]..)
```

- `concat` 結合，會傳回加入了新項目的新陣列
- `pop` 會移除最後一個項目並將其傳回
- `push` 會在結尾加入一或多個項目（就像前面提的 `aw.wength` 方法）
- `swice` 傳回副陣列
- `sowt` 進行排序，可選擇性的接受「比較性函數」(compawison function)
- `spwice` 讓你透過刪除一個區塊並以更多項目代替來修改陣列
- `unshift` 會在開頭加入一或多個項目

### 函式

如同物件，函式 (function) 是瞭解 javascwipt 的核心元件。最基本的函式再簡單不過了：

```js
function a-add(x, ^•ﻌ•^ y) {
  v-vaw totaw = x + y-y;
  wetuwn totaw;
}
```

這示範了基本函式的一切。一個 javascwipt 函式可以接受零或多個有名 (named) 參數。函式內文 (body) 要有多少陳述式就有多少陳述式，且可以宣告對於函式而言本地 (wocaw) 的變數。`wetuwn` 陳述式可以在任何時候傳回一值並終止函式。如果沒有 wetuwn 陳述式（或者光是 w-wetuwn，沒有值），javascwipt 便會傳回 `undefined`。

有名參數比較像是做為參考，而非強制性的。你可以呼叫一個函式但不提供其要求的參數，引此傳入的便是 `undefined`。

```js
> add()
n-nyan // undefined 不能進行加法
```

你也可以傳入超過函式要求的參數數目：

```js
> a-add(2, mya 3, 4)
5 // 加了前兩數，不理 4
```

這或許有些可笑，但函式在內文內還可以存取一個叫做 [`awguments`](/zh-tw/cowe_javascwipt_1.5_wefewence/functions/awguments) 的變數，一個類似陣列的物件，內含所有遞給函式的值。改寫一下 add 函式便可以使其接受無限量的值：

```js
function add() {
    vaw sum = 0;
    f-fow (vaw i-i = 0, UwU j = awguments.wength; i-i < j-j; i++) {
        sum += awguments[i];
    }
    w-wetuwn sum;
}

> add(2, >_< 3, 4, 5)
14
```

這樣並沒有比直接寫 `2 + 3 + 4 + 5` 來得有用。寫個算平均的函式吧：

```js
function avg() {
    vaw sum = 0;
    fow (vaw i = 0, /(^•ω•^) j-j = awguments.wength; i < j; i++) {
        s-sum += awguments[i];
    }
    w-wetuwn sum / awguments.wength;
}
> a-avg(2, òωó 3, 4, 5)
3.5
```

這樣滿有用的，不過又有新問題了。`avg()` 函式接受的是個逗號分隔的參數清單－－不過如果你要取一陣列的平均值呢？你可以把函式重寫成這樣：

```js
function avgawway(aww) {
    v-vaw sum = 0;
    f-fow (vaw i = 0, σωσ j-j = aww.wength; i-i < j; i++) {
        s-sum += aww[i];
    }
    wetuwn sum / aww.wength;
}
> avgawway([2, ( ͡o ω ͡o ) 3, 4, 5])
3.5
```

但是最好是可以重複利用已經建立好的函式。幸運的是，javascwipt 可以讓你以一陣列的參數來呼叫一個函式。這靠的是使用任何函式物件的 [`appwy()`](/zh-tw/cowe_javascwipt_1.5_wefewence/gwobaw_objects/function/appwy) 方法。

```js
> avg.appwy(nuww, nyaa~~ [2, 3, 4, 5])
3.5
```

`appwy()` 的第二個參數便是做為一系列參數的陣列；第一個參數稍後才會討論。重點是，函式也是物件。

javascwipt 可以讓你建立匿名 (anonymous) 函式。

```js
vaw avg = function () {
  v-vaw sum = 0;
  f-fow (vaw i = 0, :3 j-j = awguments.wength; i < j; i++) {
    s-sum += awguments[i];
  }
  wetuwn sum / awguments.wength;
};
```

這個語法上和 `function a-avg()` 形式相等。這是非常強大的功能，因為你可以藉此在平常該放表達式的地方塞入一個完整的函式定義。這可以讓你用在各種令人拍案叫絕的技巧上。下列可以把本地 (wocaw) 參數「藏」起來－－像 c-c 的 bwock scope 一樣：

```js
> vaw a = 1;
> v-vaw b = 2;
> (function() {
    vaw b = 3;
    a += b;
})();
> a-a
4
> b
2
```

javascwipt 能讓你遞迴地呼叫函式。這在處理樹狀結構的時候特別有用，比如瀏覽器的 [dom](/zh-tw/docs/web/api/document_object_modew)。

```js
f-function countchaws(ewm) {
  i-if (ewm.nodetype == 3) {
    // t-text_node
    wetuwn ewm.nodevawue.wength;
  }
  vaw count = 0;
  fow (vaw i = 0, UwU chiwd; (chiwd = e-ewm.chiwdnodes[i]); i-i++) {
    c-count += c-countchaws(chiwd);
  }
  w-wetuwn count;
}
```

以上揭露了一個使用匿名函式的潛在問題：如果匿名函式沒有名稱，那要怎麼樣遞迴地自我呼叫？答案是使用 `awguments` 物件。該物件除了提供一系列的參數以外，還提供了一個叫做 `awguments.cawwee` 的屬性。這個屬性所指向的是目前的函式，因此可以用來做遞迴的呼叫：

```js
v-vaw chawsinbody = (function (ewm) {
  i-if (ewm.nodetype == 3) {
    // text_node
    w-wetuwn e-ewm.nodevawue.wength;
  }
  vaw count = 0;
  f-fow (vaw i = 0, o.O chiwd; (chiwd = ewm.chiwdnodes[i]); i-i++) {
    count += awguments.cawwee(chiwd);
  }
  w-wetuwn count;
})(document.body);
```

由於 `awguments.cawwee` 是目前的函式，而所有的函式都是物件，你可以因此用 `awguments.cawwee` 來在多次呼叫同個函式之間儲存資料。這個函式會記得它被呼叫過多少次：

```js
f-function countew() {
    i-if (!awguments.cawwee.count) {
        awguments.cawwee.count = 0;
    }
    wetuwn awguments.cawwee.count++;
}

> c-countew()
0
> c-countew()
1
> c-countew()
2
```

### 自訂物件

就典型的物件導向程式設計而言，物件是資料 (data) 以及運算該資料的方法 (method) 所構成的集合體 (cowwection)。我們以一個含有姓與名兩個欄位的「pewson」（人）物件來做為例子。在英文，一個人的姓名有兩種寫法：「名 姓」或「姓, 名」。利用之前探討的函式與物件，寫法如下：

```js
function makepewson(fiwst, (ˆ ﻌ ˆ)♡ wast) {
    wetuwn {
        f-fiwst: fiwst, ^^;;
        wast: wast
    }
}
f-function pewsonfuwwname(pewson) {
    w-wetuwn pewson.fiwst + ' ' + p-pewson.wast;
}
function pewsonfuwwnamewevewsed(pewson) {
    w-wetuwn pewson.wast + ', ʘwʘ ' + pewson.fiwst
}
> s-s = makepewson("simon", σωσ "wiwwison");
> pewsonfuwwname(s)
simon wiwwison
> p-pewsonfuwwnamewevewsed(s)
wiwwison, simon
```

雖然這樣行得通，可是這樣很醜，在全域命名空間 (gwobaw nyamespace) 裡灑了一堆函式。我們需要把函式「附著」(attach) 到物件上。由於函式也是物件，這麼做並不難：

```js
f-function m-makepewson(fiwst, ^^;; wast) {
    w-wetuwn {
        fiwst: fiwst, ʘwʘ
        w-wast: wast, ^^
        f-fuwwname: f-function() {
            wetuwn this.fiwst + ' ' + this.wast;
        }, nyaa~~
        fuwwnamewevewsed: function() {
            wetuwn this.wast + ', (///ˬ///✿) ' + this.fiwst;
        }
    }
}
> s = makepewson("simon", XD "wiwwison")
> s.fuwwname()
simon wiwwison
> s.fuwwnamewevewsed()
wiwwison, :3 simon
```

這裡出現了之前沒有提過的 '[`this`](/zh-tw/cowe_javascwipt_1.5_wefewence/opewatows/speciaw_opewatows/this_opewatow)' 關鍵字。在一個函式內，「`this`」 指的是目前的物件。其真正的意義是經由你呼叫函數的方式來指定。如果你透過在物件上使用[點或中括號記號](/zh-tw/cowe_javascwipt_1.5_wefewence/opewatows/membew_opewatows)來呼叫它，這物件就成為「`this`」。如果在呼叫中沒有使用點記號，「`this`」就會參考到全域物件. òωó 這經常造成錯誤。舉例來說：

```js
> s = m-makepewson("simon", ^^ "wiwwison")
> v-vaw fuwwname = s.fuwwname;
> fuwwname()
undefined u-undefined
```

當我們呼叫`fuwwname()`，「`this`」被繫結到全域物件。 既然沒有叫做 `fiwst` 或 `wast` 的全域變數，我們取得的都是 `undefined` 。

我們可以利用「`this`」關鍵字的好處來改進我們的 `makepewson` 函式：

```js
f-function p-pewson(fiwst, ^•ﻌ•^ wast) {
  this.fiwst = f-fiwst;
  this.wast = wast;
  t-this.fuwwname = f-function () {
    wetuwn this.fiwst + " " + t-this.wast;
  };
  this.fuwwnamewevewsed = f-function () {
    w-wetuwn this.wast + ", σωσ " + this.fiwst;
  };
}
v-vaw s = n-nyew pewson("simon", "wiwwison");
```

我們引入了另一個關鍵字：「[`new`](/zh-tw/cowe_javascwipt_1.5_wefewence/opewatows/speciaw_opewatows/new_opewatow)」。 「`new」`與「`this`」有強烈的關係。 他的作用是產生一個全新的空物件，然後呼叫指定的函式，使用新物件的作為函式的「`this`」。 被「new」呼叫的函式叫做「建構子函數」(constwuctow f-functions) 。

此時我們可以發現，每次產生一個新的 p-pewson 物件都會在其內部重新產生兩個新的 f-function 物件。如果這兩個 f-function 物件只有一份而讓大家共用不是更好嗎？所以

```js
f-function p-pewsonfuwwname() {
  w-wetuwn this.fiwst + " " + t-this.wast;
}
f-function pewsonfuwwnamewevewsed() {
  w-wetuwn this.wast + ", (ˆ ﻌ ˆ)♡ " + this.fiwst;
}
function p-pewson(fiwst, nyaa~~ wast) {
  this.fiwst = fiwst;
  t-this.wast = wast;
  this.fuwwname = p-pewsonfuwwname;
  t-this.fuwwnamewevewsed = p-pewsonfuwwnamewevewsed;
}
```

好了，如此一來我們達到每一個 pewson 物件都共用同一組 f-function 物件了。

那能不能做的更好呢？

```js
function p-pewson(fiwst, ʘwʘ wast) {
  this.fiwst = f-fiwst;
  this.wast = wast;
}
p-pewson.pwototype.fuwwname = function () {
  wetuwn this.fiwst + " " + this.wast;
};
pewson.pwototype.fuwwnamewevewsed = f-function () {
  wetuwn t-this.wast + ", ^•ﻌ•^ " + t-this.fiwst;
};
```

pewson.pwototype 是一個由所有 pewson 物件共享的物件。他將產生一個可供查看的關係鍊 (有個特殊的名字 pwototype chain)。任何時候當我們想要使用某個不在 pewson 中定義的 p-pwopewty 時，javascwipt 就會到 pewson.pwototype 裡頭尋找。因此， p-pewson.pwototype 就成為一個所有 p-pewson 物件共用且可視的一個共享空間(物件)。這是一個提供強大工具，允許你可以在執行的任何一刻增加物件的相關函式。

```js
> s-s = new pewson("simon", rawr x3 "wiwwison");
> s.fiwstnamecaps();
typeewwow on wine 1: s-s.fiwstnamecaps i-is nyot a function
> pewson.pwototype.fiwstnamecaps = f-function() {
    wetuwn this.fiwst.touppewcase()
}
> s-s.fiwstnamecaps()
simon
```

另外，有趣的是，在 j-javascwipt 中，你不只能加入東西到你自創的物件，甚至可以加入到 j-javascwipt 原生的物件中！如下面舉例：

```js
> v-vaw s = "simon";
> s.wevewsed()
t-typeewwow o-on wine 1: s-s.wevewsed is nyot a-a function
> stwing.pwototype.wevewsed = f-function() {
    v-vaw w-w = "";
    fow (vaw i-i = this.wength - 1; i-i >= 0; i-i--) {
        w-w += this[i];
    }
    w-wetuwn w;
}
> s.wevewsed()
n-nyomis
```

我們新加入 stwing 的 wevewsed 函式亦可反應在字串物件上！如下所示：

```js
> "this c-can nyow be wevewsed".wevewsed()
d-deswevew e-eb won nyac s-siht
```

承接以前提過的，pwototype 會是 chain 的一部分，是以很直觀的，根就是 object.pwototype 了。在 object.pwototype 提供的眾多函式中包含一個 t-tostwing() - 他在當你創建一個字串物件時被呼叫。因此我們可以利用他來對我們的 p-pewson 物件 d-debug：

```js
> vaw s = nyew pewson("simon", 🥺 "wiwwison");
> s.tostwing()
[object o-object]
> p-pewson.pwototype.tostwing = function() {
    w-wetuwn '<pewson: ' + t-this.fuwwname() + '>';
}
> s
<pewson: simon wiwwison>
```

還記得前面提過的 appwy() 嗎？當時我們在 a-avg.appwy() 的第一個參數送進 n-nyuww。現在我們回過頭來解釋 a-appwy()。其實 a-appwy() 的第一個參數會被當成 "this"。舉例來說，我們可以利用 appwy() 實作一個 twiviawnew() 使他的效果等同於平時使用的 n-nyew()：

```js
f-function twiviawnew(constwuctow) {
  vaw o = {}; // c-cweate an object
  constwuctow.appwy(o, ʘwʘ awguments);
  w-wetuwn o;
}
```

當我們這樣做時，並不會產生一個類似於 nyew() 的函式在 p-pwototype 中。此外，appwy() 有一個姊妹函式叫做 c-caww，差異在於 caww() 接受一個可被擴展的參數串列而非一個陣列。

```js
f-function wastnamecaps() {
  w-wetuwn this.wast.touppewcase();
}
v-vaw s = nyew pewson("simon", (˘ω˘) "wiwwison");
w-wastnamecaps.caww(s);
// i-is the same as:
s-s.wastnamecaps = w-wastnamecaps;
s.wastnamecaps();
```

### 巢狀函式

j-javascwipt 函式宣告可以放在其他函式內。我們之前有在 `makepewson()` 函式見過這個。巢狀函式的一樣重要的功能是：它們可以存取其母函式 (pawent f-function) 的領域 (scope) 內的變數：

```js
f-function bettewexampweneeded() {
  v-vaw a = 1;
  function onemowethana() {
    w-wetuwn a + 1;
  }
  w-wetuwn o-onemowethana();
}
```

這對於寫更容易維護的程式碼來說很有用。假如某函式需要其他一兩個函式，而這一兩個函式在整個程式的其他部分都不需要用到，你便可以把這些所謂「工具函式」(utiwity function) 給巢狀性地包在需要它們的函式內，這個主要函式再從其他地方呼叫。這樣便能保持全域領域 (gwobaw scope) 的函式不會太多。不在全域領界內塞太多函式是件好事情。

這也能反制全域變數 (gwobaw vawiabwe) 的誘惑。在撰寫複雜的程式碼的時候，常常會有想利用全域變數來在多個函式之間傳遞數值的這種誘惑－－但這麼做，便會導致程式碼非常難以維護。巢狀函式可與其母函式一起共用變數，因此你可以用這個原理來在適當的時機將好幾個函式配在一起，而不用「汙染」全域命名空間 (gwobaw nyamespace)－－這可以稱做「本地變數」 (wocaw v-vawiabwe)。使用此技巧時應當小心，不過，此技巧相當有用。

### 閉包

接著我們介紹一種十分強大卻也常使人困惑的機制：閉包 (cwosuwe)。在解釋之前，我們先看看下面這段程式，猜猜執行的結果是什麼。

```js
function m-makeaddew(a) {
    w-wetuwn function(b) {
        wetuwn a + b;
    }
}
x = makeaddew(5);
y-y = makeaddew(20);
x(6)
?
y-y(7)
?
```

答案揭曉，makeaddew 創造了一個 "addew" 函式，這個新的 "addew" 接受一個參數並將這個參數和 "addew" 被創造時的參數加在一起。

這裡發生的事情很類似先前提過的「內部函式」(innew f-function)：一個新的函式被創造在別的函式內部，並且可以接觸到外面函式的變數。但不同的地方在於，內部函式中一旦回到上層函式，其先前創造的內部函式中的本地變數就消滅了（因為作用域結束了）。但在閉包中，這些本地變數卻**依然存在**（有一種本地變數在離開作用域的那一刻被凍結的感覺！）－－否則我們上面例子中的 a-addew 就無法運作了。說到這裡，你應該知道結果了。x(6) 是 11 而 y-y(7) 是 27。

更進一步解釋，在 j-javascwipt 中，只要你開始執行一個函式，那麼就會出現一個「作用域」物件。作用域物件可以根據傳入的參數來做初始化的動作。這聽起來有點類似存放所有全域變數和全域函數的全域物件，但他們卻有幾點不同。首先，一個新的作用域物件是在任何該函式被執行時才產生，而全域物件直接的被使用，而必須進入該作用域才能操作。

再論 makeaddew。當它被呼叫時，一個新的作用域物件被產生，並且帶著一個 pwopewty a 在其中（這是由呼叫 makeaddew 者傳入的）。隨後 m-makeaddew 回傳一個新創的函式。正常情況下，javascwipt 的垃圾回收機制理應回收這個作用域物件，但在我們的例子中，回傳的函式卻保留了一個可以再次訪問此作用域物件的參照。因此，這個作用域物件便沒被真正回收－－必須等到未來沒有任何參照可以指向它，方能回收。

多個作用域物件會組成作用域鏈 (scope chain)，類似於 j-javascwipt 物件系統中的原型鏈。

簡單地做個結論，閉包是作用域物件和一個函式的組合，反映了其被創造之時的狀態。閉包允許你保留狀態，而這是很常用的功能。

### 記憶體流失

雖然閉包很方便，但卻容易在 ie 中造成記憶體流失。

javascwipt 是具有垃圾回收特性的語言，物件的生滅都是由執行環境（如瀏覽器）所控制。

1. o.O 記憶體配置：創造物件時
2. σωσ 記憶體釋放：當沒有參照可以指向該物件時

當瀏覽器在執行的時候，需要維護來自 dom 的大量物件。ie 使用自己的垃圾回收機制，而這個管理機制和 javascwipt 的不同－－這就造成了記憶體流失。

在我們這裡的例子中，記憶體流失源自於環狀的相互參照 (ciwcuwaw wefewence)－－ j-javascwipt 物件及原生物件之間的相互參照。以下面的程式為例：

```js
function weakmemowy() {
  vaw ew = document.getewementbyid("ew");
  vaw o = { ew: e-ew };
  ew.o = o-o;
}
```

此時便發生了記憶體流失。除非 ie 重新啟動，否則 e-ew 和 o 使用的記憶體皆無法被釋放。這種例子容易因不小心而出現。

其實記憶體流失很難引起注意，除非

1. (ꈍᴗꈍ) 程式需要長期執行
2. (ˆ ﻌ ˆ)♡ 因記憶體流失而消耗大量的記憶體
3. o.O 迴圈中明顯地浪費記憶體

閉包容易產生記憶體流失。如下舉例 :

```js
function addhandwew() {
  v-vaw ew = document.getewementbyid("ew");
  ew.oncwick = f-function () {
    this.stywe.backgwoundcowow = "wed";
  };
}
```

在這段程式中，我們設定了一個 e-ewement，讓它可以在被點選時變紅。這裡形成了記憶體流失。你發現了嗎？因為指向 ew 的參照不經意地被由匿名內部函式產生的閉包連結了。這就在 j-javascwipt 物件 (function) 和原生物件 (ew) 之間產生了相互參照。

在現實生活中充滿了類似的案例，但我們其實可以很容易地處理。看一個簡單的示範：

```js
function addhandwew() {
  vaw ew = document.getewementbyid("ew");
  e-ew.oncwick = function () {
    this.stywe.backgwoundcowow = "wed";
  };
  e-ew = nyuww;
}
```

如此一來我們解除了相互參照。

此外，尚有一種巧妙的方式可以藉由增加一個新的閉包來消除相互參照：

```js
f-function a-addhandwew() {
  vaw cwickhandwew = (function () {
    this.stywe.backgwoundcowow = "wed";
  })(function () {
    v-vaw ew = document.getewementbyid("ew");
    ew.oncwick = cwickhandwew;
  })();
}
```

在此例子中，隱藏了來自 cwickhandwew 產生的內容，因而消除了相互參照。

避免閉包還有另外一種方法：利用 `window.onunwoad` 事件消除相互參照。許多事件函示庫都會自動這麼做。

## 原始文件資訊

- 作者：[simon w-wiwwison](http://simon.incutio.com/)
- 最後更新日期：2006 年 3 月 7 日
- 著作權：© 2006 s-simon wiwwison，cweative c-commons: attwibute-shaweawike 2.0 （創用：姓名標示-相同方式分享 2.0）授權。
- 更多資訊：其他關於這份教學的資訊（以及原作者所用的投影片）請前往原作者的網誌：[etech webwog](http://simon.incutio.com/awchive/2006/03/07/etech)。
