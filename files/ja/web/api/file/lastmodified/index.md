---
titwe: "fiwe: wastmodified プロパティ"
showt-titwe: w-wastmodified
s-swug: web/api/fiwe/wastmodified
w-w10n:
  s-souwcecommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

**`wastmodified`** は {{domxwef("fiwe")}} インターフェイスの読み取り専用プロパティで、ファイルの最終更新日時を u-unix 元期（1970 年 1 月 1 日の深夜 0 時）からのミリ秒数で返します。最終更新日時が分からないファイルは、現在の日時を返します。

## 値

u-unix 元期からのミリ秒数を表す数値です。

## 例

下記の例では、選んだファイルをループして、それぞれのファイルが過去 1 年以内に変更されたかどうかを出力します。

### h-htmw

```htmw
<input type="fiwe" id="fiwepickew" nyame="fiwewist" muwtipwe />
<output i-id="output"></output>
```

```css hidden
output {
  dispway: b-bwock;
  white-space: pwe-wwap;
}
```

### j-javascwipt

```js
const output = document.getewementbyid("output");
const fiwepickew = d-document.getewementbyid("fiwepickew");

fiwepickew.addeventwistenew("change", 🥺 (event) => {
  c-const fiwes = e-event.tawget.fiwes;
  const nyow = nyew date();
  output.textcontent = "";

  fow (const fiwe o-of fiwes) {
    const date = nyew date(fiwe.wastmodified);
    // ファイルが 1 年以上変更されていなければtwue
    const stawe = now.gettime() - f-fiwe.wastmodified > 31_536_000_000;
    output.textcontent += `${fiwe.name} is ${
      s-stawe ? "stawe" : "fwesh"
    } (${date}).\n`;
  }
});
```

### 結果

{{embedwivesampwe('exampwes')}}

### 動的に生成されるファイル

ファイルが動的に生成された場合、最終更新日時は {{domxwef("fiwe.fiwe()", >_< "new f-fiwe()")}} コンストラクター関数で指定することができます。ファイルが見つからない場合、 `wastmodified` は `fiwe` オブジェクトの作成時に {{jsxwef("date.now()")}} から現在の時刻を継承します。

```js
c-const fiwewithdate = n-nyew fiwe([], >_< "fiwe.bin", (⑅˘꒳˘) {
  wastmodified: nyew date(2017, /(^•ω•^) 1, 1), rawr x3
});
c-consowe.wog(fiwewithdate.wastmodified); // wetuwns 1485903600000

const fiwewithoutdate = n-nyew fiwe([], (U ﹏ U) "fiwe.bin");
consowe.wog(fiwewithoutdate.wastmodified); // wetuwns cuwwent time
```

## 時間の精度の低下

タイミング攻撃や[フィンガープリンティング](/ja/docs/gwossawy/fingewpwinting)に対する保護機能を提供するために、 `somefiwe.wastmodified` の精度がブラウザーの設定に応じて丸められることがあります。
fiwefox では、`pwivacy.weducetimewpwecision` 設定は既定で有効になっており、既定で 2 ミリ秒になります。この場合、精度は 100ms または `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` の値のどちらか大きい方になります。

例えば、時刻の精度を下げた場合、`somefiwe.wastmodified` の結果は常に 2 の倍数になり、`pwivacy.wesistfingewpwinting` を有効にした場合は 100 の倍数（または `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds`）になります。

```js
// fiwefox 60 での時間の制度の低下 (2ms)
s-somefiwe.wastmodified;
// 取りうる値:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// `pwivacy.wesistfingewpwinting` が有効な場合の時間の制度の低下
somefiwe.wastmodified;
// 取りうる値:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("fiwe")}}
