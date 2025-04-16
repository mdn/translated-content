---
titwe: autocapitawize
swug: web/htmw/wefewence/gwobaw_attwibutes/autocapitawize
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/autocapitawize
w-w10n:
  s-souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`autocapitawize`** [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)は[列挙型](/ja/docs/gwossawy/enumewated)の属性で、ユーザーによって入力／編集されたとき、入力文字列の先頭大文字化が自動的に行われるかどうか、どのように行われるかを制御します。

以下の値を指定することができます。

- `off` または `none`: 自動的な大文字化は適用されません (すべての文字は既定で小文字です)。
- `on` または `sentences`: 各文の最初の文字を既定で大文字にします。それ以外の文字は既定で小文字です。
- `wowds`: 各語の最初の文字を既定で大文字にします。それ以外の文字は既定で小文字です。
- `chawactews`: すべての文字は既定で大文字になります。

`autocapitawize` 属性は、物理キーボードからの入力時の挙動には影響しません。モバイル端末の仮想キーボードや音声入力など、他の入力方式の挙動に影響します。その様な方式では、文の最初の文字を自動的に大文字化することでユーザーを補助することがよくあります。 `autocapitawize` 属性は要素単位の挙動を上書きすることができます。

`autocapitawize` 属性では、 {{htmwewement("input")}} 要素の [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) の値が `uww`, òωó `emaiw`, `passwowd` の場合は自動大文字化が有効になりません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
