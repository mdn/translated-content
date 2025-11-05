---
title: ::file-selector-button
slug: Web/CSS/Reference/Selectors/::file-selector-button
original_slug: Web/CSS/::file-selector-button
l10n:
  sourceCommit: 62c5c3f5655002f230bf0153fbdf8a883611014a
---

**`::file-selector-button`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、{{HTMLElement("input") }} 要素の [`type="file"`](/ja/docs/Web/HTML/Reference/Elements/input/file) のボタンを表します。

{{InteractiveExample("CSS デモ: ::file-selector-button", "tabbed-shorter")}}

```css interactive-example
input {
  margin-top: 1rem;
}

input::file-selector-button {
  font-weight: bold;
  color: dodgerblue;
  padding: 0.5em;
  border: thin solid grey;
  border-radius: 3px;
}
```

```html interactive-example
<label for="avatar">Choose a profile picture:</label><br />

<input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
```

## 構文

```css
selector::file-selector-button
```

## 例

### 基本的な例

#### HTML

```html
<form>
  <label for="fileUpload">ファイルをアップロードしてください</label>
  <input type="file" id="fileUpload" />
</form>
```

#### CSS

```css hidden
form {
  display: flex;
  gap: 1em;
  align-items: center;
}
```

```css
input[type="file"]::file-selector-button {
  border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type="file"]::file-selector-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}
```

#### 結果

{{EmbedLiveSample("Basic_example", "100%", 150)}}

`::file-selector-button` は要素全体であり、UA スタイルシートのルールと一致することを覚えておいてください。 特に、フォントや色は必ずしも `input` 要素から継承されるとは限りません。

### 代替の例

#### HTML

```html
<form>
  <label for="fileUpload">ファイルをアップロードしてください</label>
  <input type="file" id="fileUpload" />
</form>
```

#### CSS

```css hidden
form {
  display: flex;
  gap: 1em;
  align-items: center;
}
```

```css
input[type="file"]::file-selector-button {
  border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type="file"]::-ms-browse:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}

input[type="file"]::-webkit-file-upload-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}

input[type="file"]::file-selector-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}
```

#### 例

{{EmbedLiveSample("Fallback_example", "100%", 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebKit の CSS 拡張](/ja/docs/Web/CSS/Reference/Webkit_extensions)
- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の Firefox における対応](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [`<input type="file">`](/ja/docs/Web/HTML/Reference/Elements/input/file)
