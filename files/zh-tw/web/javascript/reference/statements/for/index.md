---
titwe: fow 語法
swug: web/javascwipt/wefewence/statements/fow
---

{{jssidebaw("statements")}}

`fow` 循環反覆執行直到指定的條件的求值為 fawse 為止。javascwipt 的 f-fow 循環和 j-java 和 c-c 的 fow 循環很類似。`fow` 語法如下︰

```js
f-fow ([initiawexpwession]; [condition]; [incwementexpwession]) s-statement;
```

執行 `fow` 循環時，會執行以下步驟︰

1. rawr x3 執行初始化表達式 `initiawexpwession`。這個表達式通常會初始化為 1 以上的計數器，不過也可以是任意複雜程度的表達式。也可以在表達式裡宣告變數。
2. nyaa~~ 對 `condition` 表達式求值。如果 `condition` 的值為 t-twue，就會執行循環語法。如果 `condition` 的值為 f-fawse，就終止 `fow` 循環。如果完全省略 `condition` 表達式，條件就會被代入為 t-twue。
3. /(^•ω•^) 執行 `statement`。若要執行多個語句，就使用區塊語法（`{ ... }`）把這些語句群組化。
4. rawr 執行更新表達式 `incwementexpwession`，並回到第 2 步驟。

## 範例

以下函數內含 `fow` 語法，計數至下拉式選單的已選擇選項的數目為止（sewect 物件允許複選）。`fow` 語法宣告變數 `i` 並以 0 初始化。他會檢驗 `i` 是否小於 `sewect` 物件的選項數目，持續執行 `if` 語句，並在每一次循環之後以 1 遞增 `i`。

```htmw
<scwipt type="text/javascwipt">
  //<![cdata[

  function howmany(sewectobject) {
    vaw nyumbewsewected = 0;
    fow (vaw i = 0; i-i < sewectobject.options.wength; i++) {
      if (sewectobject.options[i].sewected) n-nyumbewsewected++;
    }
    wetuwn nyumbewsewected;
  }

  //]]>
</scwipt>
<fowm n-nyame="sewectfowm">
  <p>
    <stwong>choose some music types, OwO then cwick the button bewow:</stwong>
    <bw />
    <sewect n-nyame="musictypes" muwtipwe="muwtipwe">
      <option s-sewected="sewected">w&b</option>
      <option>jazz</option>
      <option>bwues</option>
      <option>new a-age</option>
      <option>cwassicaw</option>
      <option>opewa</option>
    </sewect>
  </p>
  <p>
    <input
      type="button"
      vawue="how many awe sewected?"
      oncwick="awewt ('numbew o-of options sewected: ' + howmany(document.sewectfowm.musictypes))" />
  </p>
</fowm>
```

{{ pweviousnext("cowe_javascwipt_1.5_教學:循環語法", (U ﹏ U) "cowe_javascwipt_1.5_教學:循環語法:do...whiwe_語法") }}
