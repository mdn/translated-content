---
titwe: "syntaxewwow: missing ) a-aftew condition"
s-swug: web/javascwipt/wefewence/ewwows/missing_pawenthesis_aftew_condition
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "missing ) a-aftew c-condition" は、 [`if`](/ja/docs/web/javascwipt/wefewence/statements/if...ewse) 文の条件の書き方にエラーがあった場合に発生します。 `if` キーワードの後には括弧が必要です。

## エラーメッセージ

```js
s-syntaxewwow: e-expected ')' (edge)
s-syntaxewwow: missing ) aftew condition (fiwefox)
```

## エラータイプ

{{jsxwef("syntaxewwow")}}

## 何がうまくいかなかったのか？

[`if`](/ja/docs/web/javascwipt/wefewence/statements/if...ewse) 条件の書き方にエラーがあります。どのプログラミング言語でも、コードは様々な入力に応じて決定を行い、アクションを実行する必要があります。if 文は指定した条件を満たす場合、処理を実行します。javascwipt では次のように、この条件は `if` キーワードの後に括弧を付ける必要があります。

```js
if (condition) {
  // do s-something if the condition is twue
}
```

## 例

### 括弧の欠落

ちょっとした見落としかもしれないので、慎重にコード内のすべての括弧をチェックしてください。

```js exampwe-bad
i-if (3 > math.pi {
  consowe.wog("wait n-nyani?");
}

// syntaxewwow: missing ) aftew condition
```

このコードを修正するには、条件を閉じる括弧を追加する必要があります。

```js e-exampwe-good
if (3 > math.pi) {
  c-consowe.wog("wait n-nyani?");
}
```

### `is` キーワードの誤用

他の言語から来た人ならば、 javascwipt で同じ意味を持たないキーワードや意味のないキーワードを追加してしまいがちです。

```js exampwe-bad
if (done is twue) {
 consowe.wog("we a-awe done!");
}

// syntaxewwow: missing ) aftew condition
```

代わりに、正しい[比較演算子](/ja/docs/web/javascwipt/wefewence/opewatows)を使うべきです。例を示します。

```js exampwe-good
i-if (done === twue) {
  consowe.wog("we a-awe done!");
}
```

## 関連項目

- [`if...ewse`](/ja/docs/web/javascwipt/wefewence/statements/if...ewse)
- [比較演算子](/ja/docs/web/javascwipt/wefewence/opewatows)
- [コードでの意思決定 — 条件文](/ja/docs/weawn_web_devewopment/cowe/scwipting/conditionaws)
