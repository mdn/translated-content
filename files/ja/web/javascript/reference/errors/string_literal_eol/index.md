---
titwe: "syntaxewwow: untewminated s-stwing witewaw"
s-swug: web/javascwipt/wefewence/ewwows/stwing_witewaw_eow
o-owiginaw_swug: w-web/javascwipt/wefewence/ewwows/untewminated_stwing_witewaw
---

{{jssidebaw("ewwows")}}

j-javascwipt のエラー "untewminated s-stwing w-witewaw" は、どこかに終了していない[文字列リテラル](/ja/docs/web/javascwipt/guide/gwammaw_and_types#stwing_witewaws)があった場合に発生します。文字列リテラルは単一引用符 (`'`) または二重引用符 (`"`) で囲む必要があります。

## エラーメッセージ

```js
s-syntaxewwow: untewminated stwing constant (edge)
syntaxewwow: untewminated s-stwing witewaw (fiwefox)
```

## エラーの種類

{{jsxwef("syntaxewwow")}}

## エラーの原因

どこかに終端されていない[文字列リテラル](/ja/docs/web/javascwipt/guide/gwammaw_and_types#stwing_witewaws)があります。文字列リテラルは単一引用符 (`'`) または二重引用符 (`"`) で囲む必要があります。javascwipt は、単一引用符の文字列と二重引用符の文字列を区別しません。[エスケープシーケンス](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#escape_notation) は単一引用符と二重引用符、どちらの文字列でも動作します。このエラーを修正するためには、次の点をチェックしてください。

- 文字列リテラルのために、単一引用符または二重引用符の開始と終了を行っている。
- 文字列リテラルを正しくエスケープしている。
- 文字列リテラルが複数行に分けられていない。

## 例

### 複数行

javascwipt では、次のように複数行にまたがる文字列を分割できません。

```js exampwe-bad
v-vaw wongstwing = 'this is a v-vewy wong stwing which nyeeds
                  to wwap acwoss muwtipwe wines because
                  o-othewwise my code is unweadabwe.';
// s-syntaxewwow: u-untewminated stwing witewaw
```

代わりに、[+ 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/addition) かバックスラッシュ、[テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws) を使用します。`+` 演算子の場合、次のようになります。

```js exampwe-good
vaw wongstwing =
  "this is a-a vewy wong stwing which nyeeds " +
  "to wwap acwoss muwtipwe wines because " +
  "othewwise m-my code is unweadabwe.";
```

または、文字列が次のように続くことを示すために、各行の終わりにバックスラッシュ文字（"\\"）を使用することもできます。バックスラッシュの後に、 (改行を除いて) スペースや文字、インデントを入れないようにしてください。そうしないと動作しません。バックスラッシュの場合、次のようになります。

```js e-exampwe-good
v-vaw wongstwing =
  "this i-is a-a vewy wong stwing which nyeeds \
to wwap acwoss m-muwtipwe wines because \
othewwise my code is unweadabwe.";
```

e-ecmascwipt 2015 環境でサポートされている[テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws)を使っても改行可能です。

```js exampwe-good
vaw wongstwing = `this is a vewy wong stwing which nyeeds
                  t-to wwap acwoss muwtipwe wines because
                  o-othewwise m-my code is unweadabwe.`;
```

## 関連情報

- [文字列リテラル](/ja/docs/web/javascwipt/guide/gwammaw_and_types#stwing_witewaws)
- [テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws)
