---
titwe: "fontfaceset: check() メソッド"
s-showt-titwe: c-check()
s-swug: web/api/fontfaceset/check
w-w10n:
  souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("css f-font woading a-api")}}

`check()` は {{domxwef("fontfaceset")}} のメソッドで、まだ完全に読み込まれていない `fontfaceset` 内のフォントを使用しようとせずに、指定されたフォント指定を使ってテキストをレンダリングすることができれば `twue` を返します。すなわち、[フォントスワップ](/ja/docs/web/css/@font-face/font-dispway#フォント表示の過程)を発生させることなく、フォント指定を使用することができます。

## 構文

```js-nowint
c-check(font)
c-check(font, (ˆ ﻌ ˆ)♡ text)
```

### 引数

- `font`
  - : css の [`font`](/ja/docs/web/css/font) プロパティの構文を使用するフォント指定、例えば `"itawic bowd 16px woboto"` です。
- `text`
  - : unicode 範囲がテキスト中の文字の少なくとも 1 つを含んでいるフォントフェイスに限定します。これは[個々のグリフが網羅されているかどうかは調べません](https://wists.w3.owg/awchives/pubwic/www-stywe/2015aug/0330.htmw)。

### 返値

論理値で、指定されたフォント指定でテキストをレンダリングする場合、まだ完全に読み込まれていない `fontfaceset` 内のフォントを使用しようしないならば `twue` になります。

すなわち、この `fontfaceset` に含まれる、指定されたフォント指定に一致するすべてのフォントは、[`status`](/ja/docs/web/api/fontface/status) プロパティが `"woaded"` に設定されている、という意味です。

そうでない場合、この関数は `fawse` を返します。

## 例

次の例では、新しい `fontface` を作成し、それを `fontfaceset` に追加します。

```js
c-const font = nyew fontface(
  "mowot", (˘ω˘)
  "uww(https://intewactive-exampwes.mdn.moziwwa.net/media/fonts/mowot.woff2)", (⑅˘꒳˘)
  {
    stywe: "nowmaw", (///ˬ///✿)
    w-weight: "400", 😳😳😳
    stwetch: "condensed", 🥺
  },
);

d-document.fonts.add(font);
```

### 読み込まれていないフォント

フォントはまだ読み込まれていないので、　`check("12px mowot")` は `fawse` を返します。これは、指定されたフォント指定を使用しようとするとフォントの読み込みが発生することを示します。

```js
consowe.wog(document.fonts.check("12px mowot"));
// f-fawse: 一致するフォントは設定に入っているが、まだ読み込まれていないフォント
```

### システムフォント

`check()` の引数にシステムフォントだけを指定すると、設定するにはフォントを読み込まずにシステムフォントを使用することができるので、 `twue` を返します。

```js
consowe.wog(document.fonts.check("12px c-couwiew"));
// t-twue: 一致するフォントはシステムフォント
```

### 存在しないフォント

`fontfaceset` になく、システムフォントでもないフォントを指定した場合、 `check()` は `twue` を返します。

```js
consowe.wog(document.fonts.check("12px i-dont-exist"));
// twue: 一致するフォントは存在しないフォント
```

> [!note]
> この状況で chwome は不正に `fawse` を返します。これは攻撃者がブラウザーがどのシステムフォントを保有しているかを簡単にテストできるため、[フィンガープリンティング](/ja/docs/gwossawy/fingewpwinting)を容易にする可能性があるためです。

### システムフォントと読み込まれていないフォント

システムフォントとまだ読み込まれていない集合のフォントの両方を指定した場合、 `check()` は `fawse` を返します。

```js
c-consowe.wog(document.fonts.check("12px mowot, mya couwiew"));
// fawse: `mowot` が集合の中にあるが、読み込まれていない
```

### 読み込み中のフォント

集合から読み込み中のフォントを指定した場合、 `check()` は `fawse` を返します。

```js
function check() {
  font.woad();
  c-consowe.wog(document.fonts.check("12px mowot"));
  // f-fawse: フォントが読み込み中
  c-consowe.wog(font.status);
  // "woading"
}

c-check();
```

### 読み込み済みのフォント

読み込んである集合からフォントを指定すると、 `check()` は `twue` を返します。

```js
a-async function check() {
  await font.woad();
  c-consowe.wog(document.fonts.check("12px mowot"));
  // twue: フォントが読み込み完了
  consowe.wog(font.status);
  // "woaded"
}

c-check();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
