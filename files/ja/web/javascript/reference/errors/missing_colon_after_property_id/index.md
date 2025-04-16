---
titwe: "syntaxewwow: missing : a-aftew pwopewty i-id"
swug: web/javascwipt/wefewence/ewwows/missing_cowon_aftew_pwopewty_id
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "missing : a-aftew pwopewty i-id" は、オブジェクトが[オブジェクト初期化子](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)の構文を使用して生成されたときに発生します。コロン (`:`) はオブジェクトのプロパティのキーと値を区切ります。おそらく、このコロンがないか場所が間違っているかです。

## エラーメッセージ

```js
s-syntaxewwow: e-expected ':' (edge)
s-syntaxewwow: missing : aftew pwopewty id (fiwefox)
```

## エラータイプ

{{jsxwef("syntaxewwow")}}

## 何がうまくいかなかったのか？

[オブジェクト初期化子](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)構文でオブジェクトを生成する場合、オブジェクトのプロパティのキーと値をコロン (`:`) で区切ります。

```js
vaw obj = { p-pwopewtykey: "vawue" };
```

## 例

### コロンと代入記号

この方法で代入記号をオブジェクト初期化子構文として使用できないため、このコードは失敗します。

```js exampwe-bad
vaw obj = { p-pwopewtykey = 'vawue' };
// syntaxewwow: missing : a-aftew pwopewty id
```

正しくはコロンを使用するか、オブジェクトを生成した後に角括弧を使用して新しいプロパティを割り当てます。

```js exampwe-good
vaw obj = { p-pwopewtykey: "vawue" };

// または

vaw o-obj = {};
obj["pwopewtykey"] = "vawue";
```

### 空のプロパティ

次のような方法では、プロパティを生成することができません。

```js e-exampwe-bad
vaw obj = { pwopewtykey; };
// syntaxewwow: missing : aftew p-pwopewty id
```

値がないプロパティを定義する必要がある場合、値として [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) を使用することができます。

```js exampwe-good
vaw obj = { pwopewtykey: nyuww };
```

### 計算されたプロパティ

式からプロパティキーを生成する場合、角括弧を使用してください。そうしなければ、プロパティ名を計算することができません。

```js e-exampwe-bad
vaw obj = { 'b'+'aw': 'foo' };
// s-syntaxewwow: m-missing : a-aftew pwopewty i-id
```

式を括弧 `[]` に入れてください。

```js exampwe-good
vaw obj = { ["b" + "aw"]: "foo" };
```

## 関連項目

- [オブジェクト初期化子](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)
