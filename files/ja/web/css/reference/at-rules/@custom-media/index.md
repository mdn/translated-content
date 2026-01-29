---
title: "@custom-media"
slug: Web/CSS/Reference/At-rules/@custom-media
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{CSSRef}}{{SeeCompatTable}}

**`@custom-media`** は CSS の[アットルール](/ja/docs/Web/CSS/Reference/At-rules)で、長くて複雑な[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)の別名を定義します。同じ `<media-query-list>` をハードコードで複数の {{cssxref("@media")}} アットルールに繰り返し記述する代わりに、`@custom-media` アットルールで一度定義し、このスタイルシート内で必要に応じて参照できます。

## 構文

```css
@custom-media <extension-name> [<media-query-list> | true | false ];

@custom-media --media-query-name (width < 1200px);
@custom-media --media-query-name (width < 1200px), (orientation: portrait);
```

### 値

- `<extension-name>`
  - : {{cssxref("dashed-ident")}} です。このカスタムメディアクエリーを識別する名前です。
- 表現される値
  - : カスタムメディアクエリーで別名を作る値。取りうる値は次の通りです。
    - `<media-query-list>`
      - : カンマ区切りの [`<media-query>` 値のリスト](/ja/docs/Web/CSS/Reference/At-rules/@media#解説)です。
    - `true`
      - : `@custom-media` の値で、常に `true` と評価されます。
    - `false`
      - : `@custom-media` の値で、常に `false` と評価されます。

## 解説

レスポンシブインターフェイスを構築する際、同じメディア条件を複数の {{cssxref("@media")}} アットルールで繰り返し記述する必要があることが多く、時には異なるファイルやチーム間で重複することもあります。メディアクエリーを複製すると、ミス発生リスクが高まり、リファクタリングが困難になり、不要な保守オーバーヘッドが生まれます。メディアクエリーが変更されるたびに、すべてのインスタンスを手動で探して更新しなければならないので、大規模なコードベースではエラーが発生する可能性が高く、追跡も困難なプロセスとなります。

`@custom-media` アットルールは、メディアクエリーの**名前付き別名**を定義できるようにすることで、この問題に対処します。メディアクエリー全体を各所で繰り返す代わりに、カスタムメディアクエリーとしてメディア条件を一度宣言し、スタイルシート全体でその別名を参照します。これにより、基盤となるメディアクエリーを更新する際には、単一の変更のみで済みます。

カスタムメディアクエリーは、メディアクエリー機能内で他のものから別名を参照することで構成することができます。これにより、より表現力豊かで階層化された条件を構築することが可能になります。ただし、カスタムメディアクエリーは自身を参照することはできず、また循環参照の連鎖の一部を形成することもできません。循環依存関係が存在する場合（直接的または間接的を問わず）、そのループに関与するすべてのカスタムメディアクエリーが無効となります。

複数の `@custom-media` ルールが同じ `<dashed-ident>` 名を定義している場合、ソース順序における最後の宣言のみが適用されます。それ以前の宣言はすべて無視されます。

### 論理演算子でメディアクエリーを評価

カスタムメディアクエリーは、CSS の論理演算子の全般を受け入れます。すなわち `not`、`and`、`or`（カンマ区切りまたは `or` キーワード使用）です。

`@custom-media` の値は通常の `<media-query-list>` であるため、通常の `@media` ルールと同様に条件を組み合わせたり、反転させたり、グループ化したりすることが可能です。

#### `not` 演算子の使用

`not` 演算子はメディア条件全体を否定します。特定の条件が `false` の場合にのみルールを適用したい場合に有用です。

```css
@custom-media --no-script not (script);

@media (--no-script) {
}
```

#### `and` 演算子の使用

`and` 演算子を使用すると、すべてが `true` でなければならない複数の条件を組み合わせることができます。

```css
@custom-media --medium-screen (min-width: 40em) and (max-width: 60em);

@media (--medium-screen) {
}
```

この別名は、ビューポートが指定された幅の範囲内にある場合にのみ一致します。

#### `or` 演算子の使用

論理 `or` 演算子（またはその別名であるカンマ）は、掲載されている条件のいずれかが `true` の場合に一致するメディアクエリーを作成します。

```css
@custom-media --screen-or-print-1 screen, print;
@custom-media --screen-or-print-2 screen or print;

@media (--screen-or-print-1) {
}

@media (--screen-or-print-2) {
}
```

両方の別名は同一です。これらは画面環境と印刷環境の両方で有効になります。

## 形式文法

{{csssyntax}}

## 例

### 複数のメディアクエリーの更新

この例では、具体的なブレークポイントを複数箇所で使用するレスポンシブウェブサイトで、`@custom-media` アットルールが使用されています。

```css
@custom-media --narrow-window (width < 32em);

@media (--narrow-window) {
}

@media (--narrow-window) and (hover) {
}

@media (--narrow-window) and (orientation: portrait) {
}
```

ブレークポイントを変更する必要がある場合、1 ヶ所で更新すればサイト全体の依存するメディアクエリーをすべて調整できます。

### 複数のレスポンシブブレークポイントのグループ化

ここでは、`@custom-media` アットルールを使用して単一の場所で複数のブレークポイントを設定します。これにより保守性が改善され、複数のスタイルシートにまたがるレスポンシブデザインの管理が簡素化されます。

```css
/* general.css */

@custom-media --mobile-screen (width < 480px);
@custom-media --tablet-screen (width < 768px);
@custom-media --laptop-screen (width < 1024px);
@custom-media --desktop-screen (width < 1440px);
@custom-media --widescreen (width > 1441px);
```

```css
/* layout.css */

.container {
  padding: 1rem;
}

@media (--mobile-screen) {
  .container {
    padding: 0.5rem;
  }
}

@media (--laptop-screen) {
  .container {
    max-width: 1200px;
  }
}

@media (--widescreen) {
  .container {
    max-width: 1400px;
    padding: 2rem;
  }
}
```

```css
/* typography.css */

@media (--tablet-screen) {
  .container {
    font-size: 0.9rem;
  }
}

@media (--laptop-screen) {
  .container {
    font-size: 1rem;
  }
}

@media (--widescreen) {
  .container {
    font-size: 1.1rem;
  }
}
```

すべてのブレークポイントを単一の場所にまとめることで、レスポンシブデザインの維持が容易になります。ブレークポイントの調整が必要な場合、対応する `@custom-media` 定義を 1 ヶ所更新するだけで済み、すべてのスタイルシートで一貫性が保たれます。

### `true` および `false` キーワード

次の例は、`true` と `false` キーワードを `@custom-media` で使用すると、常に一致するメディアクエリーと、決して一致しないメディアクエリーをそれぞれ生成できることを示しています。

```css
@custom-media --enabled true;
@custom-media --disabled false;

@media (--enabled) {
  /* このスタイルは常に適用される */
  body {
    background-color: blue;
  }
}

@media (--disabled) {
  /* このスタイルは決して適用されない */
  body {
    background-color: red;
  }
}
```

これは、機能フラグやこのスタイルシート内の条件付きロジックに有益です。

### 既存の `@custom-media` ルールを上書き

この例では、1 つの `@custom-media `ルールが、同じ `<dashed-ident>` 名を使用する別の `@custom-media` ルールによって上書きされています。

```css
@custom-media --mobile-breakpoint (width < 320px);

@media (--mobile-breakpoint) {
  .container {
    grid-template-columns: 2fr 1fr;
  }
}

@custom-media --mobile-breakpoint (width < 480px);
```

`--mobile-breakpoint` の最初の定義は上書きされるため無視されます。最終的な宣言が、そのカスタムメディアクエリーを参照するすべての要素で使用される有効な値となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("@media")}} アットルール
- CSS の {{cssxref("@import")}} アットルール
- [レスポンシブデザイン](/ja/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [CSS メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)モジュール
