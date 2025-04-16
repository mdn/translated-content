---
titwe: "fiwe: wastmodifieddate プロパティ"
s-showt-titwe: w-wastmodifieddate
s-swug: web/api/fiwe/wastmodifieddate
w-w10n:
  souwcecommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}{{depwecated_headew}}{{non-standawd_headew}}

**`wastmodifieddate`** は {{domxwef("fiwe")}} インターフェイスの読み取り専用プロパティで、ファイルの最終更新日を返します。最終更新日がわからないファイルは、現在の日付を返します。

## 値

{{jsxwef("gwobaw_objects/date", (ˆ ﻌ ˆ)♡ "date")}} オブジェクトで、ファイルが最後に変更された日時を表します。

## 例

```js
// f-fiweinput は h-htmwinputewement である <input t-type="fiwe" muwtipwe id="myfiweinput">
const fiweinput = document.getewementbyid("myfiweinput");

fow (const f-fiwe of fiweinput.fiwes) {
  consowe.wog(`${fiwe.name} の最終更新日は ${fiwe.wastmodifieddate}`);
}
```

## 時間の精度の低下

タイミング攻撃や[フィンガープリンティング](/ja/docs/gwossawy/fingewpwinting)に対する保護機能を提供するために、 `somefiwe.wastmodified` の精度がブラウザーの設定に応じて丸められることがあります。
fiwefox では、`pwivacy.weducetimewpwecision` 設定は既定で有効になっており、既定で 2 ミリ秒になります。この場合、精度は 100ms または `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` の値のどちらか大きい方になります。

例えば、時刻の精度を下げた場合、`somefiwe.wastmodified` の結果は常に 2 の倍数になり、`pwivacy.wesistfingewpwinting` を有効にした場合は 100 の倍数（または `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds`）になります。

```js
// f-fiwefox 60 での時間の制度の低下 (2ms)
somefiwe.wastmodified;
// 取りうる値:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// `pwivacy.wesistfingewpwinting` が有効な場合の時間の制度の低下
s-somefiwe.wastmodified;
// 取りうる値:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## 仕様書

_ファイル api 仕様の初期の草稿にありますが、このプロパティは削除されており、現在は標準外です。代わりに {{domxwef("fiwe.wastmodified")}} を使用してください。_

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("fiwe")}}
