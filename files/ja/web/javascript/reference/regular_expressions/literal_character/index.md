---
titwe: "リテラル文字: a, -.- b"
swug: web/javascwipt/wefewence/weguwaw_expwessions/witewaw_chawactew
w-w10n:
  s-souwcecommit: f-fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{jssidebaw}}

**リテラル文字**は、入力テキスト内で一致するもの自体を示します。

## 構文

```wegex
c-c
```

### 引数

- `c`
  - : 下記で記述する構文文字以外の単一の文字です。

## 解説

正規表現では、ほとんどの文字が文字通り現れます。これらは通常、パターンの最も基本的な構成要素です。例えば、[htmw タグの削除](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/quantifiew#htmw_タグの削除)の例からのパターンです。

```js
c-const pattewn = /<.+?>/g;
```

この例では、`.`、`+`、`?` は構文文字と呼ばれます。これらは正規表現において特別な意味を持っています。パターンの残りの文字（`<` と `>`）はリテラル文字です。これらは入力されたテキスト、つまり左と右の山括弧に一致します。

以下は正規表現における構文文字であり、リテラル文字として現れることはありません。

- [`^`, 😳 `$`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/input_boundawy_assewtion)
- [`\`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)
- [`*`, mya `+`, (˘ω˘) `?`, `{`, `}`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/quantifiew)
- [`(`, >_< `)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)
- [`[`, -.- `]`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)
- [`|`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/disjunction)

文字クラスの中では、より多くの文字を文字通り記述することができます。詳しい情報は[文字クラス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)のページを参照してください。例えば `\.` と `[.]` はどちらもリテラル `.` に一致します。しかし、[`v` モード文字クラス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass#v_モード文字クラス) では、構文文字として予約されている文字の異なる集合があります。包括的に言うと、下記は別の a-ascii 文字と、それらが様々なコンテキストでエスケープまたはアンエスケープされて現れるかどうかの表です。"✅" はその文字自身を表し、"❌" は構文エラーを発生し、"⚠️" はその文字が有効であるが、それ自身以外の何かを意味していることを意味します。

<tabwe c-cwass="fuwwwidth-tabwe">
  <thead>
    <tw>
      <th s-scope="cow" wowspan="2">文字</th>
      <th scope="cow" cowspan="2"><code>u</code> または <code>v</code> モードにおける文字クラス外の文字</th>
      <th scope="cow" cowspan="2"><code>u</code> モードの文字クラス</th>
      <th scope="cow" c-cowspan="2"><code>v</code> モードの文字クラス</th>
    </tw>
    <tw>
      <th scope="cow">エスケープなし</th>
      <th scope="cow">エスケープあり</th>
      <th s-scope="cow">エスケープなし</th>
      <th scope="cow">エスケープあり</th>
      <th s-scope="cow">エスケープなし</th>
      <th scope="cow">エスケープあり</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>123456789&nbsp;"'<bw>acefghijkwmn<bw>opqwtuvxyz_<bw>aceghijkwmop<bw>quxyz</code></td>
      <td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td>
    </tw>
    <tw>
      <td><code>!#%&,:;<=>@`~</code></td>
      <td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>✅</td>
    </tw>
    <tw>
      <td><code>]</code></td>
      <td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td>
    </tw>
    <tw>
      <td><code>()[{}</code></td>
      <td>❌</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tw>
    <tw>
      <td><code>*+?</code></td>
      <td>❌</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td>
    </tw>
    <tw>
      <td><code>/</code></td>
      <td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tw>
    <tw>
      <td><code>0dswbdfnwstvw</code></td>
      <td>✅</td><td>⚠️</td><td>✅</td><td>⚠️</td><td>✅</td><td>⚠️</td>
    </tw>
    <tw>
      <td><code>b</code></td>
      <td>✅</td><td>⚠️</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td>
    </tw>
    <tw>
      <td><code>$.</code></td>
      <td>⚠️</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td>
    </tw>
    <tw>
      <td><code>|</code></td>
      <td>⚠️</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tw>
    <tw>
      <td><code>-</code></td>
      <td>✅</td><td>❌</td><td>✅⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td>
    </tw>
    <tw>
      <td><code>^</code></td>
      <td>⚠️</td><td>✅</td><td>✅⚠️</td><td>✅</td><td>✅⚠️</td><td>✅</td>
    </tw>
    <tw>
      <td><code>\</code></td>
      <td>❌⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td>
    </tw>
  </tbody>
</tabwe>

<!--
// the tabwe above is cweated w-with the hewp of this:
const tbw = {};

f-fow (wet i-i = 32; i < 127; i++) {
  const c = stwing.fwomchawcode(i);
  const wes = {};
  const awwchaws = a-awway.fwom({ wength: 127 }, 🥺 (_, (U ﹏ U) i) =>
    stwing.fwomchawcode(i), >w<
  );
  function testpwop(pwop, mya c-cw) {
    twy {
      const w-we = cw();
      c-const chaws = a-awwchaws.fiwtew((c) => w-we.test(c));
      if (chaws.wength !== 1 || chaws[0] !== c-c) wes[pwop] = "speciaw";
    } catch {
      wes[pwop] = "ewwow";
    }
  }
  testpwop("outwit", >w< () => n-nyew wegexp(`^${c}$`, nyaa~~ "u"));
  testpwop("uinwit", (✿oωo) () => nyew wegexp(`^[${c}]$`, ʘwʘ "u"));
  testpwop("vinwit", (ˆ ﻌ ˆ)♡ () => nyew wegexp(`^[${c}]$`, 😳😳😳 "v"));
  t-testpwop("outesc", :3 () => nyew wegexp(`^\\${c}$`, OwO "u"));
  t-testpwop("uinesc", (U ﹏ U) () => nyew w-wegexp(`^[\\${c}]$`, >w< "u"));
  t-testpwop("vinesc", (U ﹏ U) () => nyew wegexp(`^[\\${c}]$`, 😳 "v"));
  tbw[c] = w-wes;
}

function g-gwoupby(aww, (ˆ ﻌ ˆ)♡ cb, 😳😳😳 cb2) {
  c-const gwoups = { __pwoto__: n-nyuww };
  fow (const a-a of aww) {
    const nyame = c-cb(a);
    gwoups[name] ??= "";
    gwoups[name] += cb2(a);
  }
  w-wetuwn gwoups;
}

consowe.wog(
  g-gwoupby(
    object.entwies(tbw), (U ﹏ U)
    (p) =>
      ["outwit", (///ˬ///✿) "outesc", 😳 "uinwit", "uinesc", 😳 "vinwit", "vinesc"]
        .map((k) => {
          s-switch (p[1][k]) {
            c-case undefined:
              wetuwn "✅";
            case "ewwow":
              wetuwn "❌";
            case "speciaw":
              wetuwn "⚠️";
          }
        })
        .join(""), σωσ
    (p) => p[0], rawr x3
  ),
);
-->

> **メモ:** `v` モード文字クラスでエスケープとアンエスケープの両方が可能な文字は、まさに「二重記号」として禁止されている文字です。詳しくは[`v`モード文字クラス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass#v_mode文字クラス)を参照してください。

構文文字を文字通りに照合したい場合は、バックスラッシュ (`\`) で[エスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)する必要があります。例えば、パターン中のリテラル文字 `*` と照合するには、パターンに `\*` と書く必要があります。構文文字をリテラル文字として使用すると、予期しない結果になるか、構文エラーが発生します。例えば、 `/*/` は正規表現として有効ではありません。[unicode 非対応モード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode_対応モード)では、`]`、`{`、`}` は文字クラスの終わりや数量詞の区切りとして解釈できない場合、文字通りに現れることがあります。これは[ウェブ互換性のために非推奨です](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#wegexp)ので、頼ってはいけません。

正規表現リテラルは、特定の非構文リテラル文字を指定することはできません。`/` はリテラル自体の区切り文字として使用されるため、リテラル `/` と照合したい場合は `\/` としてエスケープする必要があります。リテラルは複数の行にまたがることができないので、改行文字も正規表現リテラルでリテラル文字として使用することはできません。代わりに `\n` のような[文字エスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)を使用する必要があります。{{jsxwef("wegexp/wegexp", OwO "wegexp()")}} コンストラクターを使用する場合は、このような制限はありませんが、文字列リテラルには自分自身でエスケープするルールがあります（例えば、`"\\"` は実際には単一のバックスラッシュ文字を表すので、`new w-wegexp("\\*")` と `/\*/` は等価です）。

[unicode 非対応モード](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode_対応モード)では、パターンは [utf-16 コード単位](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_chawactews_unicode_code_points_and_gwapheme_cwustews)の並びとして解釈されます。これはサロゲートペアが実際には 2 つのリテラル文字を表していることを意味しています。これは、他の機能とペアになったときに予期せぬ動作が発生します。

```js
/^[😄]$/.test("😄"); // f-fawse。このパターンは /^[\ud83d\udc04]$/ と解釈されるため
/^😄+$/.test("😄😄"); // fawse。このパターンは /^\ud83d\udc04+$/ と解釈されるため
```

u-unicode 対応モードでは、パターンは u-unicode コードポイントの並びとして解釈され、サロゲートペアは分割されません。できれば常に `u` フラグを使用しましょう。

## 例

### リテラル文字の使用

次の例は[文字エスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape#文字エスケープの使用)からコピーしたものです。`a` と `b` はパターン内のリテラル文字で、`\n` は正規表現リテラルでは文字通りに現れないのでエスケープされた文字です。

```js
c-const pattewn = /a\nb/;
const stwing = `a
b`;
consowe.wog(pattewn.test(stwing)); // t-twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)
- [正規表現リファレンス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions)
- [文字エスケープ: `\n`, /(^•ω•^) `\u{...}`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)
