---
title: "CryptoKey: extractable プロパティ"
short-title: extractable
slug: Web/API/CryptoKey/extractable
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Crypto API")}}{{SecureContext_Header}}

**`extractable`** は {{DOMxRef("CryptoKey")}} インターフェイスの読み取り専用プロパティで、[`SubtleCrypto.exportKey()`](/ja/docs/Web/API/SubtleCrypto/exportKey) または [`SubtleCrypto.wrapKey()`](/ja/docs/Web/API/SubtleCrypto/wrapKey) を使用してキーを抽出できるかどうかを示します。

キーがエクスポートできない場合は、 [`exportKey()`](/ja/docs/Web/API/SubtleCrypto/exportKey) や [`wrapKey()`](/ja/docs/Web/API/SubtleCrypto/wrapKey) では抽出しようとして例外を発生します。

## 値

論理値で、キーがエクスポート可能であれば `true`、不可能であれば `false` となります。

## 例

この例では、キーをエクスポートできない場合、「エクスポート」ボタンは無効になり、待ち受けするリスナーも追加されません。

```js
// 指定されたキーをエクスポートし、"exported-key" 空間に書き込みます。
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("raw", key);
  const exportedKeyBuffer = new Uint8Array(exported);

  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = `[${exportedKeyBuffer}]`;
}

// キーが抽出可能かどうかによって、exportButton を有効または無効にします。
function setExportButton(key) {
  const exportButton = document.querySelector(".raw");

  // キーが抽出できない場合は、ボタンを無効にする
  exportButton.disabled = !key.extractable;
  if (key.extractable) {
    // イベントリスナーを追加してキーを抽出する
    exportButton.addEventListener("click", () => {
      exportCryptoKey(key);
    });
  }
}

// 暗号化/復号する秘密鍵を生成する。
// 次に、「エクスポート」ボタンでイベントリスナーを有効にし、設定する。
window.crypto.subtle
  .generateKey(
    {
      name: "AES-GCM",
      length: 256,
    },
    true,
    ["encrypt", "decrypt"],
  )
  .then(setExportButton(key));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
