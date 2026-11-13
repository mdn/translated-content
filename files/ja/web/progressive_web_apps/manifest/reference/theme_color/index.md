---
title: theme_color
slug: Web/Progressive_web_apps/Manifest/Reference/theme_color
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

`theme_color` メンバーは、ウェブアプリケーションのユーザーインターフェイスの既定色を指定するために使用します。
この色は、ツールバー、アドレスバー、ステータスバーなど、さまざまなブラウザー UI 要素に適用されます。
タスクスイッチャーやホーム画面にアプリケーションが追加された場合など、特に目立つ場合があります。

## 構文

```json-nolint
/* 有効な名前付き色 */
"theme_color": "rebeccapurple"

/* 16 進の色のを使用 */
"theme_color": "#42b5f4"

/* RGB 値の使用 */
"theme_color": "rgb(66 133 244)"
```

### 値

- `theme_color`
  - : 有効な[色値](/ja/docs/Web/CSS/Reference/Values/color_value)を指定する文字列。

    > [!NOTE]
    > ブラウザーは、コンテキストに応じて、色のアルファ成分を無視することがあります。
    > ほとんどの環境では、`theme_color` を透明にすることはできません。
    > 異なるプラットフォームやブラウザーで一貫した動作を確保するため、完全に不透明な色（アルファ値 1 または 100%）を使用することをお勧めします。

## 解説

`theme_color` の指定は任意ですが、指定すると、コンテンツ領域を超えてアプリの視覚的なアイデンティティを拡張することができます。
このカラーの適用により、特に[スタンドアロン](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/display#standalone)モードで読み込まれた際に、ウェブアプリにネイティブアプリのような体験を提供することができます。
`theme_color` は、アプリのブランドガイドラインに沿ったものを選びましょう。これにより、特に他のアプリケーションやシステムインターフェイスと一緒にアプリが表示される際に、ユーザーの認知度と想起力を高めることができます。

`theme_color` に対応しているブラウザーでは、マニフェストファイルで指定された値が、マニフェストが適用されるすべてのページにわたって、ウェブアプリの既定のテーマ色として使用されます。
この既定値は、次の方法で上書きすることができます。

- [`theme-color`](/ja/docs/Web/HTML/Reference/Elements/meta/name/theme-color) の値を HTML の `<meta>` 要素の `name` 属性に使用すると、ウェブページのテーマ色を、アプリに対して指定したマニフェストの `theme_color` とは異なる色に指定することができます。 これによって、アプリ内の個々のページに異なるテーマ色を設定することができます。

  ```html
  <meta name="theme-color" content="#9370DB" />
  ```

- `<meta name="theme-color">` 要素とメディアクエリーを結合すると、ユーザーの環境設定の好みに応じて使用できるテーマの色を指定することができます。

  ```html
  <meta
    name="theme-color"
    content="#F4E6D8"
    media="(prefers-color-scheme: light)" />
  <meta
    name="theme-color"
    content="#5D4037"
    media="(prefers-color-scheme: dark)" />
  ```

これらの上書きメソッドは、特定のページやユーザー環境設定に合わせてアプリの外観を柔軟に指定できるようにし、全体的なユーザー体験を向上させます。

また、ブラウザーはユーザーの環境設定に基づいて適用されたテーマカラーを調整する場合もあります。
ユーザーが環境設定でライトモードまたはダークモードにしている場合、ブラウザーはマニフェストの `theme_color` の値を上書きして、アプリの CSS で定義された任意の [`prefers-color-scheme`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) メディアクエリーに対応する場合があります。

```css
body {
  background: #f8f9fa;
  color: #212529;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #212529;
    color: #f8f9fa;
  }
}
```

## 例

### 名前付き色を使用

```json
{
  "theme_color": "red"
}
```

### RGB 値を使用

```json
{
  "theme_color": "rgb(66 133 244)"
}
```

### 16 進値を使用

```json
{
  "name": "My First App",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#ff4500"
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`display`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/display) マニフェストメンバー
- [`background_color`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/background_color) マニフェストメンバー
- [`scope`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/scope) マニフェストメンバー
- [アプリのテーマと背景色のカスタマイズ](/ja/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors)（PWA の構築時）
