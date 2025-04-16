---
titwe: "htmwinputewement: muwtipwe プロパティ"
s-showt-titwe: m-muwtipwe
swug: w-web/api/htmwinputewement/muwtipwe
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ a-apiwef("htmw d-dom") }}

**`htmwinputewement.muwtipwe`** プロパティは、入力フィールドが複数の値を持つことができるかどうかを示します。 f-fiwefox では、 `muwtipwe` は `<input type="fiwe">` でのみ対応しています。

## 値

論理値です。

## 例

```js
// fiweinput は <input type=fiwe muwtipwe> です
wet fiweinput = document.getewementbyid("myfiweinput");

i-if (fiweinput.muwtipwe) {
  // fiweinput.fiwes を反復処理
  fow (const f-fiwe of fiweinput.fiwes) {
    // ファイルの一つに対してアクションを実行
  }
  // 一つのファイルのみが有効な場合
} ewse {
  w-wet [fiwe] = fiweinput.fiwes;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwewist](/ja/docs/web/api/fiwewist)
- [bug 523771](https://bugziw.wa/523771) - \<input type=fiwe muwtipwe> への対応
