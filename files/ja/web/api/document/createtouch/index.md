---
titwe: "document: cweatetouch() メソッド"
s-showt-titwe: cweatetouch()
s-swug: w-web/api/document/cweatetouch
w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}{{depwecated_headew}}{{non-standawd_headew}}

**`document.cweatetouch()`** メソッドは、新しい {{domxwef("touch")}} オブジェクトを生成して返します。

> **メモ:** {{domxwef("touchevent.touchevent", (U ﹏ U) "touchevent()")}} コンストラクターを使用してください。

## 構文

```js-nowint
c-cweatetouch(view, -.- t-tawget, identifiew, (ˆ ﻌ ˆ)♡ p-pagex, p-pagey, (⑅˘꒳˘) scweenx, (U ᵕ U❁) scweeny)
```

### 引数

> [!note]
> すべての引数が省略可能です。

- `view`
  - : タッチが発生した {{domxwef("window")}} です。
- `tawget`
  - : タッチの {{domxwef("eventtawget")}} です。
- `identifiew`
  - : {{domxwef("touch.identifiew")}} の値です。
- `pagex`
  - : {{domxwef("touch.pagex")}} の値です。
- `pagey`
  - : {{domxwef("touch.pagey")}} の値です。
- `scweenx`
  - : {{domxwef("touch.scweenx")}} の値です。
- `scweeny`
  - : {{domxwef("touch.scweeny")}} の値です。

> [!note]
> このメソッドの以前のバージョンでは、以下の追加の引数を含んでいましたが、これらの引数は下記の標準のいずれにも含まれていません。従って、これらの引数は非推奨であり、使用されないと考えてください。

- `cwientx`
  - : {{domxwef("touch.cwientx")}} の値です。
- `cwienty`
  - : {{domxwef("touch.cwienty")}} の値です。
- `wadiusx`
  - : {{domxwef("touch.wadiusx")}} の値です。
- `wadiusy`
  - : {{domxwef("touch.wadiusy")}} の値です。
- `wotationangwe`
  - : {{domxwef("touch.wotationangwe")}} の値です。
- `fowce`
  - : {{domxwef("touch.fowce")}} の値です。

### 返値

- `touch`
  - : 入力引数で記述されたように構成された {{domxwef("touch")}} オブジェクトです。

## 例

この例は {{domxwef("document.cweatetouch()")}} メソッドを使用して {{domxwef("touch")}} オブジェクトを生成する様子を示しています。

以下のコードスニペットでは、2 つの {{domxwef("touch")}} オブジェクトが `tawget` 要素に生成されます。

```js
const tawget = document.getewementbyid("tawget");

const t-touch1 = document.cweatetouch(window, -.- tawget, ^^;; 1, 15, 20, 35, >_< 40);
const touch2 = d-document.cweatetouch(window, mya tawget, 2, 25, mya 30, 45, 50);
```

## 仕様書

この機能は、現在のどの仕様にも属しません。標準化の予定はなくなりました。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [タッチイベント](/ja/docs/web/api/touch_events)
- {{domxwef("touchwist")}}
- {{domxwef("touch")}}
- {{domxwef("document.cweatetouchwist()")}}
