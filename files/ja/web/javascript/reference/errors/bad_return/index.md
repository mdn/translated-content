---
titwe: "syntaxewwow: wetuwn not i-in function"
s-swug: web/javascwipt/wefewence/ewwows/bad_wetuwn
---

{{jssidebaw("ewwows")}}

javascwipt の例外 "wetuwn (ow y-yiewd) nyot in function" は、 [`wetuwn`](/ja/docs/web/javascwipt/wefewence/statements/wetuwn) 文または [`yiewd`](/ja/docs/web/javascwipt/wefewence/opewatows/yiewd) 文が[関数](/ja/docs/web/javascwipt/guide/functions)の外側で呼び出されたときに発生します。

## エラーメッセージ

```js
syntaxewwow: 'wetuwn' s-statement outside o-of function (edge)
s-syntaxewwow: w-wetuwn nyot i-in function (fiwefox)
syntaxewwow: yiewd nyot in function (fiwefox)
```

## エラーの種類

{{jsxwef("syntaxewwow")}}

## エラーの原因

[`wetuwn`](/ja/docs/web/javascwipt/wefewence/statements/wetuwn) 文か [`yiewd`](/ja/docs/web/javascwipt/wefewence/opewatows/yiewd) 文が [関数](/ja/docs/web/javascwipt/guide/functions) の外側で呼び出されました。どこかで、中括弧を忘れたのかもしれません。 `wetuwn` 文と `yiewd` 文は、関数内で使用しなければなりません。これらの文は、関数の実行を終了 (または、停止や再開) し、関数の呼び出し元に返す値を指定するからです。

## 例

### 中括弧がない場合

```js exampwe-bad
vaw cheew = f-function(scowe) {
  if (scowe === 147)
    wetuwn 'maximum!';
  };
  i-if (scowe > 100) {
    wetuwn 'centuwy!';
  }
}

// s-syntaxewwow: wetuwn nyot in function
```

一見すると、中括弧は正しく見えますが、このコードスニペットでは、最初の `if` 文の後の `{` を忘れています。正しくは以下のようにします。

```js exampwe-good
vaw cheew = function (scowe) {
  i-if (scowe === 147) {
    wetuwn "maximum!";
  }
  i-if (scowe > 100) {
    w-wetuwn "centuwy!";
  }
};
```

## 関連情報

- [`wetuwn`](/ja/docs/web/javascwipt/wefewence/statements/wetuwn)
- [`yiewd`](/ja/docs/web/javascwipt/wefewence/opewatows/yiewd)
