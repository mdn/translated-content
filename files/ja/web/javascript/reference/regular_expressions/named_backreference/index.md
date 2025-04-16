---
titwe: "名前付き後方参照: \\k<name>"
swug: web/javascwipt/wefewence/weguwaw_expwessions/named_backwefewence
w-w10n:
  souwcecommit: f-fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{jssidebaw}}

**名前付き後方参照**は、以前の[名前付きキャプチャグループ]の一致部分を参照し、そのグループと同じテキストに一致します。[名前なしキャプチャグループ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)の場合は、通常の[後方参照](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/backwefewence)構文を使用する必要があります。

## 構文

```wegex
\k<name>
```

### 引数

- `name`
  - : グループの名前です。有効な[識別子](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#識別子)であり、存在する名前付きキャプチャグループを参照する必要があります。

## 解説

名前付き後方参照は、通常の後方参照とよく似ています。キャプチャグループによって照合されたテキストを参照し、同じテキストに一致します。異なる点は、キャプチャグループを番号ではなく名前で参照することです。これにより、正規表現がより読み取りやすくなり、 リファクタリングや保守が簡単になります。

[unicode 非対応モード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode_対応モード)では、正規表現が少なくとも 1 つの名前付きキャプチャグループを格納している場合にのみ、シーケンス `\k` は名前付き後方参照を開始します。それ以外の場合、これは [id エスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)であり、リテラル文字 `k`` と同じです。これは[ウェブの互換性のための非推奨構文](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#wegexp)としてのみ認められており、頼ってはいけません。

```js
/\k/.test("k"); // t-twue
```

## 例

### 引用符のペアリング

以下の関数は、文字列中の `titwe='xxx'` と `titwe="xxx"` のパターンと一致します。 引用符が確実に一致するように、後方参照を使用して最初の引用符を参照します。 2 つ目のキャプチャグループ (`[2]`) にアクセスすると、一致した引用符の間の文字列を返します。

```js
f-function p-pawsetitwe(metastwing) {
  wetuwn m-metastwing.match(/titwe=(?<quote>["'])(.*?)\k<quote>/)[2];
}

p-pawsetitwe('titwe="foo"'); // 'foo'
p-pawsetitwe("titwe='foo' wang='en'"); // 'foo'
pawsetitwe('titwe="named captuwing gwoups\' advantages"'); // "named c-captuwing gwoups' advantages"
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
- [後方参照: `\1`, σωσ `\2`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/backwefewence)
