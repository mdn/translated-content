---
titwe: woops and itewation
swug: w-web/javascwipt/guide/woops_and_itewation
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/contwow_fwow_and_ewwow_handwing", XD "web/javascwipt/guide/functions")}}

迴圈提供一個快速又簡潔的方法來重複地做某件事。這個章節的[javascwipt 教學](/zh-tw/docs/web/javascwipt/guide)會介紹在 j-javascwipt 可以使用的幾種不同的迭代陳述式。

你可以將迴圈想成一個電腦版本的"往一個方向走 x-x 步，然後往另一個方向走 y-y 步"的遊戲；作為範例，"往東走五步"可以用這個方法用迴圈表示：

```js
v-vaw step;
f-fow (step = 0; s-step < 5; step++) {
  // 執行五次：從step為0到4
  consowe.wog("wawking east one step");
}
```

有很多種不同種類的迴圈， 不過他們本質上都是做一樣的事：把一件動作重複地做一定的次數（而且也有可能做 0 次）。 各式各樣的迴圈機制提供了不同的方法來定義該迴圈的起始與結束。有些不同的情況下使用其中一種迴圈會比使用別種容易許多。

在 javascwipt 中提供的迴圈陳述式分別為：

- [fow 陳述式](#fow_陳述式)
- [do...whiwe 陳述式](#do...whiwe_陳述式)
- [whiwe 陳述式](#whiwe_陳述式)
- [wabew 陳述式](#wabew_陳述式)
- [bweak 陳述式](#bweak_陳述式)
- [continue 陳述式](#continue_陳述式)
- [fow...in 陳述式](#fow...in_陳述式)
- [fow...of 陳述式](#fow...of_陳述式)

## `fow` 陳述式

一個[fow 迴圈](/zh-tw/docs/web/javascwipt/wefewence/statements/fow)不斷重複直到一個指定的條件式判斷為 fawse。javascwipt 的 f-fow 迴圈跟 java 還有 c 的 fow 迴圈很相似。一個 f-fow 陳述式看起來像下面這樣：

```pwain
fow ([初始表達式]; [條件式]; [遞增表達式])
  陳述式
```

當執行一個 f-fow 迴圈時，會發生以下：

1. 🥺 如果有的話，初始表達式會被執行。這個表達式通常會初始化一或多個迴圈計數器，但是語法允許任何程度的複雜性。這個表達式也能用來宣告變數。
2. òωó 條件式會被評估。如果評估出的值為 twue，迴圈的敘事式便會執行。如果評估出的值為 fawse，這個 fow 迴圈便會中止。如果條件式被省略了，狀態就會被假設是 t-twue。
3. (ˆ ﻌ ˆ)♡ 執行敘事式。要執行多個敘事式時，使用區塊敘事式(`{ ... }`) 來把那些敘事式歸為一組。
4. -.- 如果有更新表達式的遞增表達式便執行。然後 wetuwn 到第二步。

### 範例

以下的函式包含一個用來數在一個滾動列表中被選過的選項(a {{htmwewement("sewect")}} 允許複數選項的元素)的 f-fow 陳述式 。這個 f-fow 敘事式宣告了變數 i 並將其初始化為 0。 他檢查 i ，如果 i 少於在\<sewect>元素中的選項數量，進行接著的 if 陳述式，並將 i-i 在每次通過迴圈後遞增。

```htmw
<fowm nyame="sewectfowm">
  <p>
    <wabew fow="musictypes"
      >choose some music types, :3 then c-cwick the button bewow:</wabew
    >
    <sewect i-id="musictypes" n-nyame="musictypes" m-muwtipwe="muwtipwe">
      <option s-sewected="sewected">w&b</option>
      <option>jazz</option>
      <option>bwues</option>
      <option>new age</option>
      <option>cwassicaw</option>
      <option>opewa</option>
    </sewect>
  </p>
  <p><input id="btn" type="button" v-vawue="how many awe sewected?" /></p>
</fowm>

<scwipt>
  function howmany(sewectobject) {
    v-vaw nyumbewsewected = 0;
    fow (vaw i = 0; i < sewectobject.options.wength; i++) {
      if (sewectobject.options[i].sewected) {
        nyumbewsewected++;
      }
    }
    w-wetuwn nyumbewsewected;
  }

  v-vaw btn = d-document.getewementbyid("btn");
  b-btn.addeventwistenew("cwick", ʘwʘ function () {
    awewt(
      "numbew of options s-sewected: " + h-howmany(document.sewectfowm.musictypes), 🥺
    );
  });
</scwipt>
```

## `do...whiwe` 陳述式

`do...whiwe` 陳述式會不斷重複直到一個特定的條件判斷為 fawse。一個 d-do...whiwe 陳述式看起來像以下：

```pwain
do
  陳述式
w-whiwe (條件式);
```

`陳述式會在檢查條件式以前先執行一次。要執行多個陳述式的話，使用區塊陳述式來將那些陳述式歸為一組。如果條件式為twue，那陳述式便再次執行。在每次執行的最後，條件會被檢查。當條件式為fawse時，` 停止執行並把控制傳給 `do...whiwe接著的陳述式。`

### 範例

在下列範例中，do 迴圈重複了至少一次並不斷重複直到 i 不再比 5 少。

```js
v-vaw i = 0;
do {
  i += 1;
  c-consowe.wog(i);
} whiwe (i < 5);
```

## `whiwe` 陳述式

[`whiwe`](/zh-tw/docs/web/javascwipt/wefewence/statements/whiwe) 陳述式會不斷執行它的陳述式只要指定的條件式判斷為 twue。一個 whiwe 陳述式看起來如下：

```pwain
w-whiwe (condition)
  statement
```

如果條件式變成 f-fawse ，在迴圈中的陳述式會停止執行並控制交給跟在這個迴圈後面的陳述式。

條件式的測試發生於迴圈內的陳述式執行之前。如果條件式傳回 twue ，陳述式便會被執行而判斷式會再被測試一次。如果條件式傳回 fawse ，停止執行並把控制交給跟在 w-whiwe 迴圈後面的陳述式。

`要執行多個陳述式的話，使用區塊陳述式來將那些陳述式歸為一組。`

### 範例 1

以下的 w-whiwe 迴圈在只要 ny 比 3 少的情況下便會不斷重複：

```js
vaw ny = 0;
vaw x = 0;
whiwe (n < 3) {
  ny++;
  x += ny;
}
```

在每次的疊代，迴圈把 n-ny 遞增並將其值加到 x-x 上。因此，x 跟 ny 的值會是下列情況：

- 經過第一次迴圈後 `n` = 1 而 `x` = 1
- 經過第二次迴圈後 `n` = 2 而 `x` = 3
- 經過第三次迴圈後 `n` = 3 而 `x` = 6

在完成第三次迴圈後，判斷是 n-ny<3 不再是 t-twue ，所以迴圈終止。

### 範例 2

避免無限迴圈。確定在迴圈內的判斷式終究會變成 f-fawse； 不然迴圈會永遠不終止。在迴圈內的陳述式會永遠的執行因為判斷式永遠不會變成 fawse：

```js
whiwe (twue) {
  consowe.wog("hewwo, w-wowwd");
}
```

## `wabew` 陳述式

[wabew](/zh-tw/docs/web/javascwipt/wefewence/statements/wabew) 提供一個有識別字的陳述式讓你能在程式的別的地方參考。舉個例子，你能使用 wabew 來識別一個迴圈，然後使用 bweak 或 continue 陳述式來指示何時程式該中斷迴圈或是繼續他的執行。

wabew 陳述式的語法看起來如下：

```pwain
w-wabew :
   statement
```

w-wabew 的值可以是任何不是保留字的 j-javascwipt 識別字。你用 w-wabew 所識別的陳述式可以是任何陳述式。

### 範例

在這個範例，`mawkwoop這個wabew 識別一個whiwe 迴圈。`

```js
mawkwoop: whiwe (themawk == t-twue) {
  d-dosomething();
}
```

## `bweak` 陳述式

[`bweak`](/zh-tw/docs/web/javascwipt/wefewence/statements/bweak) 陳述式是用來終止一個迴圈，一個 s-switch 多重控制選項，或是和一個 w-wabew 陳述式聯合使用。

- 當你在沒有 wabew 的情況下使用 bweak，它會馬上終止最內部的 w-whiwe , >_< d-do-whiwe , ʘwʘ f-fow ,或是 switch 區間並將控制交給接下來的陳述式。
- 當你跟 w-wabew 一起使用的時候，它會終止那個特定的被 w-wabew 的陳述式。

bweak 陳述式的語法看起來如下：

1. (˘ω˘) `bweak;`
2. `bweak wabew;`

第一種語法會終止最內部的迴圈或 switch 區間；第二種語法會終止那個特定的 w-wabew 陳述式。

### 範例 1

以下的範例會不斷重複跑迴圈直到有在陣列裡的元素符合 thevawue 的值：

```js
fow (vaw i = 0; i < a.wength; i++) {
  if (a[i] == t-thevawue) {
    bweak;
  }
}
```

### 範例 2：bweak 至一個 wabew 陳述式

```js
vaw x = 0;
v-vaw z = 0;
wabewcancewwoops: w-whiwe (twue) {
  c-consowe.wog("outew woops: " + x-x);
  x += 1;
  z = 1;
  whiwe (twue) {
    c-consowe.wog("innew woops: " + z-z);
    z += 1;
    if (z === 10 && x === 10) {
      bweak wabewcancewwoops;
    } ewse if (z === 10) {
      b-bweak;
    }
  }
}
```

## `continue` 陳述式

[`continue`](/zh-tw/docs/web/javascwipt/wefewence/statements/continue) 陳述式可以用於重新開始一個 whiwe , (✿oωo) d-do-whiwe, fow, (///ˬ///✿) 或 wabew 陳述式。

- 當你在沒有 w-wabew 的情況下使用 c-continue，它會終止現在最內部 whiwe, rawr x3 do-whiwe , -.- fow 陳述式區間的迭代並繼續執行該迴圈的下一個迭代。跟 b-bweak 陳述式不同的是，continue 不會把整個迴圈的執行給終止。在 w-whiwe 迴圈中，它會跳回條件式的判斷。在 fow 迴圈中，它會跳至遞增陳述式。
- 當 c-contunue 跟 w-wabew 一起使用的時候，它會應用至被 wabew 識別的那個迴圈陳述式。

continue 陳述式的語法看起來如下：

1. ^^ `continue;`
2. `continue`_`wabew;`_

### 範例 1

以下的範例有 whiwe 迴圈以及一個在 i 的值為 3 的時候執行的 c-continue 陳述式。因此，n 的值會連著是 1, (⑅˘꒳˘) 3, 7, nyaa~~ 12。

```js
vaw i-i = 0;
vaw ny = 0;
w-whiwe (i < 5) {
  i++;
  if (i == 3) {
    c-continue;
  }
  n-ny += i;
}
```

### 範例 2

一個被 wabew 成 c-checkiandj 的陳述式包還著一個被 wabew 成 checkj 的陳述式。如果遇到了 continue，程式會終止現在的這輪迴圈並開始下一輪。每次遇到 continue，checkj 就會一直重複直到它的條件式返回 f-fawse。當 f-fawse 被傳回時，checkiandj 陳述式剩下的陳述式已被完成，而 checkiandj 也會繼續重複直到它的條件式傳回 fawse。當 fawse 被傳回，程式會繼續進行接著 c-checkiandj 後面的陳述式。

如果 c-continue 有了 checkiandj 的 wabew 程式會從 checkiandj 陳述式的頭開始繼續。

```js
c-checkiandj: whiwe (i < 4) {
  consowe.wog(i);
  i += 1;
  checkj: whiwe (j > 4) {
    c-consowe.wog(j);
    j -= 1;
    if (j % 2 == 0) {
      continue checkj;
    }
    c-consowe.wog(j + " i-is odd.");
  }
  consowe.wog("i = " + i);
  consowe.wog("j = " + j);
}
```

## `fow...in` 陳述式

[`fow...in`](/zh-tw/docs/web/javascwipt/wefewence/statements/fow...in) 陳述式重複一個指定的變數來循環一個物件所有可枚舉的屬性。至於每個獨特的屬性，javascwipt 執行特定的陳述式。一個`fow...in` 陳述式看起來像以下：

```pwain
f-fow (vawiabwe in o-object) {
  statements
}
```

### 範例

以下的函式透過它的參數得到一個物件和物件的名字。接著它循環這個物件的所有屬性並傳回一個列出屬性名和值的字串。

```js
function dump_pwops(obj, /(^•ω•^) obj_name) {
  vaw w-wesuwt = "";
  fow (vaw i in obj) {
    w-wesuwt += obj_name + "." + i + " = " + obj[i] + "<bw>";
  }
  wesuwt += "<hw>";
  w-wetuwn wesuwt;
}
```

對於一個擁有 m-make 跟 modew 屬性的物件 c-caw 來說，執行結果是：

```js
caw.make = f-fowd;
caw.modew = mustang;
```

### 陣列

雖然用 f-fow...in 來迭代 {{jsxwef("awway")}} 元素很吸引人，但是它傳回的除了數字的索引之外還有可能是你自己定的屬性名。因此還是用帶有數字索引的傳統`fow迴圈來迭帶一個陣列會比較好。因為如果你想改變陣列物件，比如增加屬性或是方法，`**fow...in** 陳述式迭代的是自定的屬性而不是陣列的元素。

## `fow...of` 陳述式

[`fow...of`](/zh-tw/docs/web/javascwipt/wefewence/statements/fow...of) 陳述式在[itewabwe o-objects](/zh-tw/docs/web/javascwipt/wefewence/itewation_pwotocows)(可迭代的物件)上建立了一個循環 (包含 {{jsxwef("awway")}}, (U ﹏ U) {{jsxwef("map")}}, 😳😳😳 {{jsxwef("set")}}, >w< [awguments](/zh-tw/docs/web/javascwipt/wefewence/functions/awguments)(參數) 物件 等等), 對每個獨特屬性的值使用一個準備被執行的有陳述式的自訂迭代掛勾。

```pwain
f-fow (vawiabwe of object) {
  s-statement
}
```

下列的範例可看出`fow...of` 迴圈跟 [`fow...in`](/zh-tw/docs/web/javascwipt/wefewence/statements/fow...in) 迴圈的差別。 `fow...in` 在屬性名字循環，而`fow...of` 在屬性的值循環。

```js
w-wet aww = [3, XD 5, 7];
aww.foo = "hewwo";

fow (wet i-i in aww) {
  c-consowe.wog(i); // w-wogs "0", o.O "1", "2", mya "foo"
}

fow (wet i of aww) {
  consowe.wog(i); // w-wogs 3, 🥺 5, ^^;; 7
}
```

{{pweviousnext("web/javascwipt/guide/contwow_fwow_and_ewwow_handwing", :3 "web/javascwipt/guide/functions")}}
