---
title: URL.origin
slug: Web/API/URL/origin
---

{{APIRef("URL API")}}

{{domxref("URL")}} インターフェイスの **`origin`** 読み取り専用プロパティは、表現された URL のオリジンの Unicode シリアル化を含む {{domxref("USVString")}} を返します。 正確な構造は、次のように URL のタイプによって異なります。

- `http` または `https` の URL の場合、スキームの後に `'://'`、ドメイン、`':'`、ポートが順に続きます。 （ポート部分は、明示的に指定されていて、それがデフォルトポートでない場合に存在します。 それぞれのデフォルトポートは、`80` と `443` です。）
- `file:` URL の場合、値はブラウザーに依存します。
- `blob:` URL の場合、`blob:` に続く URL のオリジンが使用されます。 例えば、`"blob:https://mozilla.org"` は `"https://mozilla.org"` として返されます。

{{AvailableInWorkers}}

## 構文

```
string = URLObject.origin;
```

### 値

{{domxref("USVString")}}。

## 例

```js
var url = new URL("blob:https://mozilla.org:443/")
url.origin; // 'https://mozilla.org' を返します
```

## 仕様

| 仕様                                                                 | 状態                 | コメント |
| -------------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#dom-url-origin', 'URL.origin')}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URL.origin")}}

## 関連情報

- {{domxref("URL")}} インターフェイスに属します。
