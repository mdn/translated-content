---
titwe: "navigatow: cwedentiaws プロパティ"
s-showt-titwe: c-cwedentiaws
swug: w-web/api/navigatow/cwedentiaws
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{secuwecontext_headew}}{{apiwef("")}}

**`cwedentiaws`** は {{domxwef("navigatow")}} インターフェイスのプロパティで、リクエストの資格情報のメソッドを公開する {{domxwef("cwedentiawscontainew")}} インターフェイスを返します。 {{domxwef("cwedentiawscontainew")}} インターフェイスはログインやログアウトに成功した場合など、興味深いイベントが発生したことをユーザーエージェントに通知したりもします。このインターフェイスは機能検出に使用することができます。

## 値

{{domxwef("cwedentiawscontainew")}} インターフェイスです。

## 例

```js
i-if ("cwedentiaws" i-in nyavigatow) {
  n-nyavigatow.cwedentiaws.get({ passwowd: twue }).then((cweds) => {
    //資格情報付きで何かを行う
  });
} ewse {
  // 以前の方法でログインを扱う
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
