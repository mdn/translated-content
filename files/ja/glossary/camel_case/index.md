---
title: Camel case (キャメルケース)
slug: Glossary/Camel_case
l10n:
  sourceCommit: 6aa664dc5ccb5edf0897f99ad5feb59325dff831
---

{{GlossarySidebar}}

**キャメルケース**とは、スペースを使わずにフレーズを書く方法で、各単語の最初の文字が大文字になりますが、複合語全体の最初の文字は大文字でも小文字でも構いません。大文字がラクダの背中のこぶに似ていることから名づけられました。その姿を読者に思い出させるため、よく "camelCase" と表記されます。

キャメルケースは変数の名前付き規約として多く使用されています。 {{domxref("console")}}、{{domxref("crossOriginIsolated")}}、{{jsxref("encodeURIComponent")}}、{{jsxref("ArrayBuffer")}}、{{domxref("HTMLElement")}} といった変数はキャメルケースです。

フレーズに頭字語（`URI` や `HTML` など）が格納されている場合、キャメルケースの使い方は様々であることに注意してください。上記の `encodeURIComponent` のように、すべて大文字にすることを推奨する人もいます。この場合、 `XMLHTTPRequest` のように複数の頭字語が連続すると曖昧になることがあります。他にも `XmlHttpRequest` のように最初の文字だけを大文字にすることを推奨する人もいます。実際のグローバル変数 {{domxref("XMLHttpRequest")}} は両方を混在させて使用しています。

フレーズ全体の最初の文字が大文字の場合、大文字キャメルケースまたはパスカルケースと呼ばれます。そうでない場合は、小文字キャメルケースと呼ばれます。

キャメルケースは、JavaScript や Java、他にも様々な言語で最もよく使われている規約です。

## 関連情報

- [スネークケース](/ja/docs/Glossary/Snake_case)
- [ケバブケース](/ja/docs/Glossary/Kebab_case)
- [typescript-eslint rule: `naming-convention`](https://typescript-eslint.io/rules/naming-convention/)
