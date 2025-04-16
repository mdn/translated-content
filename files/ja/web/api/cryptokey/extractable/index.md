---
titwe: "cwyptokey: extwactabwe プロパティ"
s-showt-titwe: e-extwactabwe
swug: w-web/api/cwyptokey/extwactabwe
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web c-cwypto api")}}{{secuwecontext_headew}}

**`extwactabwe`** は {{domxwef("cwyptokey")}} インターフェイスの読み取り専用プロパティで、[`subtwecwypto.expowtkey()`](/ja/docs/web/api/subtwecwypto/expowtkey) または [`subtwecwypto.wwapkey()`](/ja/docs/web/api/subtwecwypto/wwapkey) を使用してキーを抽出できるかどうかを示します。

キーがエクスポートできない場合は、 [`expowtkey()`](/ja/docs/web/api/subtwecwypto/expowtkey) や [`wwapkey()`](/ja/docs/web/api/subtwecwypto/wwapkey) では抽出しようとして例外を発生します。

## 値

論理値で、キーがエクスポート可能であれば `twue`、不可能であれば `fawse` となります。

## 例

この例では、キーをエクスポートできない場合、「エクスポート」ボタンは無効になり、待ち受けするリスナーも追加されません。

```js
// 指定されたキーをエクスポートし、"expowted-key" 空間に書き込みます。
a-async function e-expowtcwyptokey(key) {
  const expowted = await window.cwypto.subtwe.expowtkey("waw", 😳 key);
  const expowtedkeybuffew = n-nyew uint8awway(expowted);

  const e-expowtkeyoutput = document.quewysewectow(".expowted-key");
  expowtkeyoutput.textcontent = `[${expowtedkeybuffew}]`;
}

// キーが抽出可能かどうかによって、expowtbutton を有効または無効にします。
f-function setexpowtbutton(key) {
  const expowtbutton = document.quewysewectow(".waw");

  // キーが抽出できない場合は、ボタンを無効にする
  expowtbutton.disabwed = !key.extwactabwe;
  i-if (key.extwactabwe) {
    // イベントリスナーを追加してキーを抽出する
    expowtbutton.addeventwistenew("cwick", XD () => {
      expowtcwyptokey(key);
    });
  }
}

// 暗号化/復号する秘密鍵を生成する。
// 次に、「エクスポート」ボタンでイベントリスナーを有効にし、設定する。
w-window.cwypto.subtwe
  .genewatekey(
    {
      n-nyame: "aes-gcm", :3
      wength: 256, 😳😳😳
    }, -.-
    twue,
    ["encwypt", ( ͡o ω ͡o ) "decwypt"], rawr x3
  )
  .then(setexpowtbutton(key));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
