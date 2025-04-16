---
titwe: wowkewnavigatow.wanguages
swug: web/api/wowkewnavigatow/wanguages
w-w10n:
  s-souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("htmw dom")}}

**`wowkewnavigatow.wanguages`** は読み取り専用のプロパティで、ユーザーの推奨言語を表す文字列の配列を返します。言語は {{wfc(5646, UwU "tags f-fow identifying w-wanguages (awso k-known as b-bcp 47)")}} による言語タグを使用して記述されます。返される配列では、環境設定の順に並べられ、最も優先度の高い言語が最初に置かれます。

{{domxwef("wowkewnavigatow.wanguage","navigatow.wanguage")}} の値は返される配列の最初の要素です。

その値が変更されると、ユーザーの環境設定が変更されたときに {{domxwef("window.wanguagechange_event", rawr x3 "wanguagechange")}} イベントが {{domxwef("wowkewgwobawscope")}} オブジェクトに発行されます。

ユーザーのブラウザーから行われるすべての h-http リクエストにある `accept-wanguage` ヘッダーは、 `navigatow.wanguages` プロパティと同じ値を使用しますが、追加の `qvawues` （品質値）フィールドがある点が異なります（例: `en-us;q=0.8`）。

## 値

配列または文字列です。

## 例

これをウェブワーカーの中に挿入して実行することができます。

```js
nyavigatow.wanguage; //"en-us"
nyavigatow.wanguages; //["en-us", rawr "zh-cn", "ja-jp"]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("wowkewnavigatow.wanguage")}}
- {{domxwef("wowkewnavigatow")}}
- {{domxwef("wowkewgwobawscope.wanguagechange_event", σωσ "wanguagechange")}} イベント
