---
title: "FontFaceSet: check() メソッド"
short-title: check()
slug: Web/API/FontFaceSet/check
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

`check()` は {{domxref("FontFaceSet")}} のメソッドで、まだ完全に読み込まれていない `FontFaceSet` 内のフォントを使用しようとせずに、指定されたフォント指定を使ってテキストをレンダリングすることができれば `true` を返します。すなわち、[フォントスワップ](/ja/docs/Web/CSS/Reference/At-rules/@font-face/font-display#フォント表示の過程)を発生させることなく、フォント指定を使用することができます。

## 構文

```js-nolint
check(font)
check(font, text)
```

### 引数

- `font`
  - : CSS の [`font`](/ja/docs/Web/CSS/Reference/Properties/font) プロパティの構文を使用するフォント指定、例えば `"italic bold 16px Roboto"` です。
- `text`
  - : Unicode 範囲がテキスト中の文字の少なくとも 1 つを含んでいるフォントフェイスに限定します。これは[個々のグリフが網羅されているかどうかは調べません](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html)。

### 返値

論理値で、指定されたフォント指定でテキストをレンダリングする場合、まだ完全に読み込まれていない `FontFaceSet` 内のフォントを使用しようしないならば `true` になります。

すなわち、この `FontFaceSet` に含まれる、指定されたフォント指定に一致するすべてのフォントは、[`status`](/ja/docs/Web/API/FontFace/status) プロパティが `"loaded"` に設定されている、という意味です。

そうでない場合、この関数は `false` を返します。

## 例

次の例では、新しい `FontFace` を作成し、それを `FontFaceSet` に追加します。

```js
const font = new FontFace("molot", "url(/shared-assets/fonts/molot.woff2)", {
  style: "normal",
  weight: "400",
  stretch: "condensed",
});

document.fonts.add(font);
```

### 読み込まれていないフォント

フォントはまだ読み込まれていないので、　`check("12px molot")` は `false` を返します。これは、指定されたフォント指定を使用しようとするとフォントの読み込みが発生することを示します。

```js
console.log(document.fonts.check("12px molot"));
// false: 一致するフォントは設定に入っているが、まだ読み込まれていないフォント
```

### システムフォント

`check()` の引数にシステムフォントだけを指定すると、設定するにはフォントを読み込まずにシステムフォントを使用することができるので、 `true` を返します。

```js
console.log(document.fonts.check("12px Courier"));
// true: 一致するフォントはシステムフォント
```

### 存在しないフォント

`FontFaceSet` になく、システムフォントでもないフォントを指定した場合、 `check()` は `true` を返します。

```js
console.log(document.fonts.check("12px i-dont-exist"));
// true: 一致するフォントは存在しないフォント
```

> [!NOTE]
> この状況で Chrome は不正に `false` を返します。これは攻撃者がブラウザーがどのシステムフォントを保有しているかを簡単にテストできるため、[フィンガープリンティング](/ja/docs/Glossary/Fingerprinting)を容易にする可能性があるためです。

### システムフォントと読み込まれていないフォント

システムフォントとまだ読み込まれていない集合のフォントの両方を指定した場合、 `check()` は `false` を返します。

```js
console.log(document.fonts.check("12px molot, Courier"));
// false: `molot` が集合の中にあるが、読み込まれていない
```

### 読み込み中のフォント

集合から読み込み中のフォントを指定した場合、 `check()` は `false` を返します。

```js
function check() {
  font.load();
  console.log(document.fonts.check("12px molot"));
  // false: フォントが読み込み中
  console.log(font.status);
  // "loading"
}

check();
```

### 読み込み済みのフォント

読み込んである集合からフォントを指定すると、 `check()` は `true` を返します。

```js
async function check() {
  await font.load();
  console.log(document.fonts.check("12px molot"));
  // true: フォントが読み込み完了
  console.log(font.status);
  // "loaded"
}

check();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
