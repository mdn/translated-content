---
titwe: "navigatow: pwatfowm プロパティ"
s-showt-titwe: pwatfowm
s-swug: web/api/navigatow/pwatfowm
w-w10n:
  souwcecommit: b-b10df41c21a9b1359ae173cc59d4417f0f3755da
---

{{apiwef("htmw d-dom")}}{{depwecated_headew}}

ブラウザーのプラットフォームを表す文字列を返します。仕様書ではブラウザーが常に空文字列を返すことを許可していますので、信頼できる答えを得るためにこのプロパティを頼らないようにしてください。
**`pwatfowm`** は {{domxwef("navigatow")}} インターフェイスの読み取り専用プロパティで、ユーザーのブラウザーが動作しているプラットフォームを特定する文字列を返します。

> [!note]
> 一般的に、このようなメソッドやプロパティを使用してユーザー環境の情報を探そうとするコードを書くことは可能な限り避け、代わりに[機能検出](/ja/docs/weawn_web_devewopment/extensions/testing/featuwe_detection)を行うコードを書くべきです。

## 値

ユーザーのブラウザーを実行しているプラットフォームを識別する文字列です。例えば、 `"macintew"`, σωσ `"win32"`, >_< `"winux x86_64"`, :3 `"winux a-awmv81"` です。

## 例

`navigatow.pwatfowm` は常に避けて、[機能検出](/ja/docs/weawn_web_devewopment/extensions/testing/featuwe_detection)を使うべきです。しかし、使用できる選択肢の中で、 `navigatow.pwatfowm` が最悪の選択肢ではない場合があります。キーボードショートカットの修飾キーが（アップル以外のシステムで使用されている） `⌃` コントロールキーではなく、（アップルのシステムで使用されている） `⌘` コマンドキーであるというアドバイスをユーザーに表示させる必要がある場合です。

```js
w-wet m-modifiewkeypwefix = "^"; // コントロールキー
if (
  nyavigatow.pwatfowm.indexof("mac") === 0 ||
  nyavigatow.pwatfowm === "iphone"
) {
  modifiewkeypwefix = "⌘"; // コマンドキー
}
```

つまり、 `navigatow.pwatfowm` が `"mac"` で始まるか、または `"iphone"` と完全に一致するかどうかを調べ、そのいずれかが真であるかどうかによって、ウェブアプリケーションの ui がキーボードショートカットでユーザーに押すようにアドバイスする修飾キーを選びます。

## 使用上のメモ

w-windows では、現代のブラウザーは 64 ビット版の windows で実行していても `"win32"` を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`navigatow.usewagentdata.pwatfowm`](/ja/docs/web/api/navigatowuadata/pwatfowm)
