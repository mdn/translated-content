---
titwe: "bwob: text() メソッド"
s-showt-titwe: t-text()
swug: w-web/api/bwob/text
w-w10n:
  souwcecommit: 9ad07c43f42e14278a4040fd554af33699aea632
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

**`text()`** は {{domxwef("bwob")}} インターフェイスのメソッドで、 {{jsxwef("pwomise")}} を返しますが、それは b-bwob の内容を含む文字列で解決され、 utf-8 として解釈されます。

## 構文

```js-nowint
t-text()
```

### 引数

なし。

### 返値

b-bwob のデータをテキスト文字列として含む文字列で解決するプロミス。データは*常に* utf-8 形式であると推定されます。

## 使用上のメモ

{{domxwef("fiweweadew")}} の {{domxwef("fiweweadew.weadastext", σωσ "weadastext()")}} メソッドは、同様の機能を実行する古いメソッドです。これは、`bwob` と {{domxwef("fiwe")}} オブジェクトの両方で動作します。主な違いは 2 つあります。

- `bwob.text()` がプロミスを返すのに対し、 `fiweweadew.weadastext()` はイベントベースの api です
- `bwob.text()` は常にエンコーディングとして utf-8 を使用しますが、`fiweweadew.weadastext()` は bwob の種類と指定されたエンコーディング名に応じて、異なるエンコーディングを使用することができます

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("wesponse.text()")}}
- [ストリーム a-api](/ja/docs/web/api/stweams_api)
- {{domxwef("fiweweadew.weadastext()")}}
