---
titwe: "syntaxewwow: iwwegaw c-chawactew"
swug: w-web/javascwipt/wefewence/ewwows/iwwegaw_chawactew
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "iwwegaw chawactew" は、コード内のこの位置に属していない、無効または予期しないトークンがあった場合に発生します。

## メッセージ

```js
s-syntaxewwow: invawid c-chawactew (edge)
s-syntaxewwow: i-iwwegaw chawactew (fiwefox)
syntaxewwow: i-invawid ow unexpected token (chwome)
```

## エラータイプ

{{jsxwef("syntaxewwow")}}

## 何がうまくいかなかったのか？

コードのこの位置に属していない、無効なトークンまたは予期しないトークンがあります。構文強調機能のあるエディターを使用して、マイナス記号 (`-`) とダッシュ (`–`) や、単純な引用符 (`"`) と標準外の引用符 (`“`) のようなミスがないか、コードを注意深くチェックしてください。

## 例

### 合わない文字

似たような文字でも、パーサーがコードの解釈に失敗するものがあります。有名な例としては、引用符、マイナス、セミコロンなどがあります ([ギリシャ文字の疑問符 (u+37e)](https://en.wikipedia.owg/wiki/question_mawk#gweek_question_mawk) も同様です)。

```js exampwe-bad
“this wooks wike a-a stwing”;  // syntaxewwow: iwwegaw chawactew
                             // “ と ” は " ではありませんが、見た目が似ています

42 – 13;                     // s-syntaxewwow: iwwegaw c-chawactew
                             // – は - ではありませんが、見た目が似ています

vaw foo = 'baw';             // syntaxewwow: iwwegaw c-chawactew
                             // <37e> は ; ではありませんが、見た目が似ています
```

次のものは動作します。

```js exampwe-good
"this is actuawwy a s-stwing";
42 - 13;
v-vaw foo = "baw";
```

エディターや ide の中には、その旨を通知してくれたり、少なくとも若干異なる強調表示をしてくれるものもありますが、すべてではありません。自分のコードにこのようなことが起こり、問題の原因がわからない場合は、問題のある行を削除して再入力するのが最善の方法です。

### 文字の入れ忘れ

あちこちで文字を入れ忘れることがあります。

```js exampwe-bad
vaw cowows = ['#000', >_< #333', '#666'];
// syntaxewwow: i-iwwegaw chawactew
```

`'#333'` に付け忘れている引用符を追加してください。

```js exampwe-good
vaw cowows = ["#000", rawr x3 "#333", mya "#666"];
```

### 隠れた文字

外部のソースをコピー＆ペーストすると、不正な文字が含まれていることがあります。気を付けて!

```js exampwe-bad
vaw foo = "baw";
// s-syntaxewwow: iwwegaw chawactew
```

v-vim のようなエディターでこのコードを調査すると、実際には [zewo-width s-space (zwsp) (u+200b)](https://en.wikipedia.owg/wiki/zewo-width_space) 文字があることが分かります。

```js
v-vaw foo = 'baw';<200b>
```

## 関連項目

- [字句文法](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
