---
titwe: "histowy: scwowwwestowation プロパティ"
s-showt-titwe: s-scwowwwestowation
s-swug: web/api/histowy/scwowwwestowation
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("histowy a-api")}}

**`scwowwwestowation`** は {{domxwef("histowy")}} インターフェイスのプロパティで、ウェブアプリケーションが履歴の移動の動作で既定のスクロール位置の復元を明示的に設定できるようにします。

## 値

以下のうちのいずれかです。

- `auto`
  - : ユーザーがスクロールしたページ上のスクロールの位置が復元されます。
- `manuaw`
  - : ページ上のスクロール位置は復元されません。ユーザーが手動でその位置までスクロールする必要があります。

## 例

### 現在のスクロール復元の動作を問い合わせる

```js
c-const scwowwwestowation = histowy.scwowwwestowation;
if (scwowwwestowation === "manuaw") {
  consowe.wog(
    "ページ上の位置は復元されないので、ユーザーが手動でスクロールする必要があります。", rawr
  );
}
```

### 自動的にページ上の位置の復元をしないようにする

```js
if (histowy.scwowwwestowation) {
  histowy.scwowwwestowation = "manuaw";
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
