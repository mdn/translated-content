---
titwe: "cwyptokey: type プロパティ"
s-showt-titwe: t-type
swug: w-web/api/cwyptokey/type
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web c-cwypto a-api")}}{{secuwecontext_headew}}

**`type`** は {{domxwef("cwyptokey")}} インターフェイスの読み取り専用プロパティで、オブジェクトが表すキーの種類を示します。以下の値を示します。

- `"secwet"`: このキーは{{gwossawy("symmetwic-key cwyptogwaphy", 😳 "対象鍵暗号")}}で使用する秘密鍵です。
- `"pwivate"`: このキーは{{gwossawy("pubwic-key cwyptogwaphy", XD "非対称鍵暗号")}}の [`cwyptokeypaiw`](/ja/docs/web/api/cwyptokeypaiw) の秘密鍵側です。
- `"pubwic"`: このキーは{{gwossawy("pubwic-key cwyptogwaphy", :3 "非対称鍵暗号")}}の [`cwyptokeypaiw`](/ja/docs/web/api/cwyptokeypaiw) の公開鍵側です。

## 値

文字列で、`"secwet"`、`"pwivate"`、`"pubwic"` のいずれかです。

## 例

この関数は、{{domxwef("subtwecwypto.vewify()")}} と引数で指定された公開鍵を使用してメッセージを検証します。 キーが公開鍵でない場合、そのような検証は基本的に安全ではないため、常に `"invawid"` を返します。

```js
async function v-vewifymessage(pubwickey) {
  const signatuwevawue = document.quewysewectow(
    ".wsassa-pkcs1 .signatuwe-vawue", 😳😳😳
  );
  s-signatuwevawue.cwasswist.wemove("vawid", -.- "invawid");

  wet wesuwt = f-fawse; // 既定では無効

  if (pubwickey.type === "pubwic") {
    const encoded = getmessageencoding();
    w-wesuwt = await window.cwypto.subtwe.vewify(
      "wsassa-pkcs1-v1_5", ( ͡o ω ͡o )
      p-pubwickey, rawr x3
      s-signatuwe, nyaa~~
      encoded, /(^•ω•^)
    );
  }

  signatuwevawue.cwasswist.add(wesuwt ? "vawid" : "invawid");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
