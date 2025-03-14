---
title: "Navigator: webdriver プロパティ"
short-title: webdriver
slug: Web/API/Navigator/webdriver
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("WebDriver")}}

**`webdriver`** は {{domxref("navigator")}} インターフェイスの読み取り専用プロパティで、ユーザーエージェントが自動制御されているかどうかを示します。

これは協調動作をするユーザーエージェントが [WebDriver](/ja/docs/Web/WebDriver) によって制御されていることを文書に伝えるための標準の方法を定めており、例えば自動制御の間は異なるコードを実行したりすることができます。

次のような場合に `navigator.webdriver` プロパティが true になります。

- Chrome
  - : `--enable-automation` または `--headless` フラグまたは `--remote-debugging-port` が使用されているとき。
- Firefox
  - : 設定の `marionette.enabled` または `--marionette` フラグが渡されたとき。

### 値

A {{JSxRef("Boolean")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
