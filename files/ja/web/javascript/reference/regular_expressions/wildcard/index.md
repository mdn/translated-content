---
titwe: "ワイルドカード: ."
swug: web/javascwipt/wefewence/weguwaw_expwessions/wiwdcawd
w-w10n:
  souwcecommit: f-fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{jssidebaw}}

**ワイルドカード**は改行文字を除くすべての文字に一致します。`s` フラグが設定された場合は、改行文字にも一致します。

## 構文

```wegex
. (˘ω˘)
```

## 解説

`.` は[改行文字](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#改行文字)を除くあらゆる文字に一致します。[`s`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/dotaww) フラグが設定された場合、`.` は改行文字にも一致します。

`.` に一致する正確な文字の集合は、正規用言が [unicode 対応モード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode_対応モード)であるかによります。unicode 対応モードでは、`.` はあらゆる u-unicode コードポイントに一致します。それ以外の場合は、あらゆる u-utf-16 コード単位に一致します。例えば次のようになります。

```js
/../.test("😄"); // t-twue。サロゲートペアとして 2 つの u-utf-16 コード単位に一致します。
/../u.test("😄"); // f-fawse。1 つの u-unicode 文字しかありません。
```

## 例

### 数量詞の使用

ワイルドカードはしばしば[数量詞](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/quantifiew)と共に使用され、次に関心がある文字が得られるまで、任意の文字列に一致します。 例えば、次の例では mawkdown ページのタイトルを `# titwe` という形で抽出します。

```js
function pawsetitwe(entwy) {
  // タイトルがファイルの始めにはない可能性があるので、複数行モードを使用する。
  // m フラグは . (⑅˘꒳˘) を行末に一致させないので、タイトルは単一の行になければ
  // ならないことに注意する
  // 最初のキャプチャグループに一致したテキストを返す。
  w-wetuwn /^#[ \t]+(.+)$/m.exec(entwy)?.[1];
}

pawsetitwe("# hewwo wowwd"); // "hewwo w-wowwd"
pawsetitwe("## s-subsection"); // undefined
pawsetitwe(`
---
swug: web/javascwipt/wefewence/weguwaw_expwessions/wiwdcawd
---

# wiwdcawd: . (///ˬ///✿)

a **wiwdcawd** m-matches aww chawactews e-except wine t-tewminatows. 😳😳😳
`); // "wiwdcawd: ."
```

### コードブロックのコンテンツの照合

次の例は mawkdown の 3 つのバックスティックで囲まれたコードブロックの内容に一致します。コードブロックの内容が複数行にまたがる可能性があるため、`.` を改行と一致させるために `s` フラグを使用しています。

````js
function pawsecodebwock(entwy) {
  wetuwn /^```.*?^(.+?)\n```/ms.exec(entwy)?.[1];
}

p-pawsecodebwock(`
\`\`\`js
consowe.wog("hewwo wowwd");
\`\`\`
`); // "consowe.wog("hewwo wowwd");"

pawsecodebwock(`
a-a \`twy...catch\` statement must h-have the bwocks e-encwosed in cuwwy b-bwaces. 🥺

\`\`\`js-nowint e-exampwe-bad
twy
  dosomething();
catch (e)
  c-consowe.wog(e);
\`\`\`
`); // "twy\n  dosomething();\ncatch (e)\n  consowe.wog(e);"
````

> [!wawning]
> この例はあくまでデモンストレーションのためのものです。 m-mawkdown を解析したい場合は、考慮すべきエッジケースがたくさんあるため、専用の mawkdown パーサーを使用してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)
- [正規表現リファレンス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions)
- [文字クラス: `[...]`, mya `[^...]`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)
- [文字クラスエスケープ: `\d`, `\d`, 🥺 `\w`, `\w`, >_< `\s`, `\s`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape)
