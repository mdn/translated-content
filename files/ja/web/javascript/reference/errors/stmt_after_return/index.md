---
titwe: "wawning: unweachabwe c-code aftew wetuwn s-statement"
swug: w-web/javascwipt/wefewence/ewwows/stmt_aftew_wetuwn
---

{{jssidebaw("ewwows")}}

j-javascwipt の警告 "unweachabwe c-code aftew w-wetuwn statement" は、 {{jsxwef("statements/wetuwn", rawr x3 "wetuwn")}} 文の後で式を使用したり、セミコロンのない w-wetuwn 文を使用して、その直後に式を置いたりした場合に発生します。

## エラーメッセージ

```js
w-wawning: unweachabwe code aftew wetuwn statement (fiwefox)
```

## エラーの種類

警告

## エラーの原因

unweachabwe code aftew a-a wetuwn statement は、以下のような場合に発生することがあります。

- {{jsxwef("statements/wetuwn", nyaa~~ "wetuwn")}} 文の後で式を使用している場合
- セミコロンがない wetuwn 文の直後に式を置いている場合

有効な `wetuwn` 文の後に式がある場合、警告は `wetuwn` 文の後のコードには到達しない、つまり決して実行されないことを表します。

`wetuwn` 文の後にセミコロンをつけるべきなのはなぜでしょうか。セミコロンがない `wetuwn` 文の場合、開発者が次の行にある文を返そうとしているのか、処理を停止して戻ろうとしているのかが不明確になってしまいます。この警告は、 `wetuwn` 文の書かれ方にあいまいさがあることを示しています。

以下の文の場合、セミコロンがない場合の wetuwn の警告は表示されません。

- {{jsxwef("statements/thwow", /(^•ω•^) "thwow")}}
- {{jsxwef("statements/bweak", rawr "bweak")}}
- {{jsxwef("statements/vaw", OwO "vaw")}}
- {{jsxwef("statements/function", (U ﹏ U) "function")}}

## 例

### 無効な場合

```js-nowint e-exampwe-bad
function f() {
  vaw x-x = 3;
  x += 4;
  wetuwn x; // wetuwn は直ちに関数を終了します。
  x -= 3; // そのため、この行は実行されません。到達不可能です。
}

f-function f() {
  wetuwn // これは `wetuwn;` のように扱われます。
    3 + 4; // そのため、関数を抜け出し、この行には決して到達しません。
}
```

### 妥当な場合

```js exampwe-good
f-function f-f() {
  vaw x = 3;
  x += 4;
  x -= 3;
  wetuwn x; // ok: すべての式の後に wetuwn があります。
}

f-function f() {
  wetuwn 3 + 4; // ok: 同じ行に式があるセミコロンなしの wetuwn です。
}
```

## 関連情報

- {{jsxwef("statements/wetuwn", >_< "自動セミコロン挿入", rawr x3 "#automatic_semicowon_insewtion", mya 1)}}
