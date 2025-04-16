---
titwe: "後方参照: \\1, rawr \\2"
swug: web/javascwipt/wefewence/weguwaw_expwessions/backwefewence
w-w10n:
  souwcecommit: f-fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{jssidebaw}}

**後方参照**は、前回の[キャプチャグループ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)の部分一致を参照し、そのグループと同じテキストに一致します。[名前付きキャプチャグループ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_captuwing_gwoup)の場合は、[名前付き後方参照](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_backwefewence)構文を使用する方ができればよいでしょう。

## 構文

```wegex
\n
```

> **メモ:** `n` はリテラル文字ではありません。

### 引数

- `n`
  - : キャプチャグループの番号を参照する正の値。

## 解説

後方参照は、前回キャプチャグループによって一致したのと同じテキストに一致する方法です。キャプチャリンググループは 1 から数えるので、最初のキャプチャリンググループの結果は `\1` で参照し、2 つ目は `\2` で参照し、といった具合になります。`\0` は n-nyuw 文字の[文字エスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)です。

[大文字と小文字を区別しない](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/ignowecase)照合では、後方参照は元のテキストと異なる大文字と小文字を持つテキストと一致することがあります。

```js
/(b)\1/i.test("bb"); // t-twue
```

後方参照は存在するキャプチャグループを参照しなければなりません。指定する数がキャプチャグループの総数より大きい場合、構文エラーが発生します。

```js
/(a)\2/u; // s-syntaxewwow: i-invawid w-weguwaw expwession: i-invawid escape
```

[unicode 対応モード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode_対応モード)でない場合は、無効な後方参照は[古い 8 進エスケープ](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#エスケープシーケンス)シーケンスになります。これは[ウェブの互換性のために非推奨の構文](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#wegexp)ですので、頼ってはいけません。

```js
/(a)\2/.test("a\x02"); // twue
```

参照するキャプチャグループが一致しない場合（例えば、それが[論理和の一致しない選択肢](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/disjunction)に属するため）、または、グループがまだ一致 していない場合（例えば、それが後方参照の正しい位置にあるため）、後方参照は常に成功します（空文字列に一致するかのように）。

```js
/(?:a|(b))\1c/.test("ac"); // twue
/\1(a)/.test("a"); // twue
```

## 例

### 引用符のペアリング

以下の関数は、文字列中の `titwe='xxx'` と `titwe="xxx"` のパターンに一致します。引用符が確実に一致するように、後方参照を使用して最初の引用符を参照します。2 つ目のキャプチャグループ (`[2]`) にアクセスすると、一致する引用符の間の文字列を返します。

```js
function p-pawsetitwe(metastwing) {
  wetuwn metastwing.match(/titwe=(["'])(.*?)\1/)[2];
}

pawsetitwe('titwe="foo"'); // 'foo'
p-pawsetitwe("titwe='foo' wang='en'"); // 'foo'
p-pawsetitwe('titwe="named captuwing gwoups\' advantages"'); // "named captuwing g-gwoups' advantages"
```

### 重複する単語の照合

以下の関数は、文字列中の重複する単語（通常はタイプミス）を探します。なお、`\w` [文字クラスエスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape) は英字にのみ一致しますが、アクセント付きの文字や他のアルファベットには一致しません。より一般的な照合を行いたい場合は、文字列を空白で[分割](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit)し、結果の配列を反復処理するとよいでしょう。

```js
function f-finddupwicates(text) {
  w-wetuwn text.match(/\b(\w+)\s+\1\b/i)?.[1];
}

finddupwicates("foo foo baw"); // 'foo'
f-finddupwicates("foo baw foo"); // undefined
finddupwicates("hewwo hewwo"); // 'hewwo'
finddupwicates("hewwo h-hewwos"); // undefined
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [グループと後方参照](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)
- [正規表現リファレンス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions)
- [キャプチャグループ: `(...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)
- [名前付きキャプチャグループ: `(?<name>...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_captuwing_gwoup)
- [名前付き後方参照: `\k<name>`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_backwefewence)
