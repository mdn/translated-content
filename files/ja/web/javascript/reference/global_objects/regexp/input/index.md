---
title: RegExp.input ($_)
short-title: input ($_)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/input
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

> [!NOTE]
> グローバルに最後の一致状態を公開する `RegExp` の静的プロパティは、すべて非推奨です。詳しくは[非推奨の RegExp 機能](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)を参照してください。

**`RegExp.input`** は静的アクセサープロパティで、正規表現の一致した文字列を返します。`RegExp.$_` はこのプロパティのエイリアスです。

## 解説

`input` は {{jsxref("RegExp")}} の静的プロパティですので、作成した `RegExp` オブジェクト野プロパティとしてではなく、常に `RegExp.input` または `RegExp.$_` として使用してください。

`input` の値は `RegExp` インスタンス（ただし `RegExp` のサブクラスではない）が照合に成功するたびに更新されます。今まで一度も一致するものがなかった場合、 `input` は空文字列です。`input` に値を設定することはできますが、正規表現の他の動作には影響せず、値は次に行われた照合が成功した場合に再び上書きされます。

## 例

### input と $\_ の使用

```js
const re = /hi/g;
re.test("hi there!");
RegExp.input; // "hi there!"
re.test("foo"); // 新しい検査、一致しない
RegExp.$_; // "hi there!"
re.test("hi world!"); // 新しい検査、一致する
RegExp.$_; // "hi world!"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`RegExp.lastMatch` (`$&`)](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
- [`RegExp.lastParen` (`$+`)](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- [`RegExp.leftContext` (`` $` ``)](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
- [`RegExp.rightContext` (`$'`)](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
- [`RegExp.$1`, …, `RegExp.$9`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
