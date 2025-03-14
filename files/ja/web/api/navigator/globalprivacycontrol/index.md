---
title: "Navigator: globalPrivacyControl プロパティ"
short-title: globalPrivacyControl
slug: Web/API/Navigator/globalPrivacyControl
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}{{SeeCompatTable}}{{Non-standard_header}}

**`Navigator.globalPrivacyControl`** プロパティはユーザーのグローバルプライバシー制御設定を返します。この設定は、ウェブサイトやサービスワーカースクリプトがユーザーの個人情報を第三者に販売したり、共有したりすることにユーザーが同意するかどうかを示します。

プロパティの値は、 {{httpheader("Sec-GPC")}} HTTP ヘッダーの値を反映します。

| Sec-GPC 値  | 意味                                                                 |
| ----------- | -------------------------------------------------------------------- |
| 1           | ユーザーは、自分のデータを販売または共有することに同意していません。 |
| 0           | ユーザーは、データの販売または共有に同意しました。                   |
| unspecified | ユーザーはデータに関してまだ同意していません。                       |

## 例

```js
console.log(navigator.globalPrivacyControl);
// prints "1" indicating user does not want their data shared or sold.
// prints "0" if the user consents to their data being shared or sold.
// prints "unspecified" if Sec-GPC header is not present.
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Sec-GPC")}} ヘッダー
- [globalprivacycontrol.org](https://globalprivacycontrol.org/)
- [Global Privacy Control Spec](https://globalprivacycontrol.github.io/gpc-spec/)
- [Do Not Track on Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
