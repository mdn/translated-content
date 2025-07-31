---
title: HTML autocapitalize グローバル属性
short-title: autocapitalize
slug: Web/HTML/Reference/Global_attributes/autocapitalize
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`autocapitalize`** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)は[列挙型](/ja/docs/Glossary/Enumerated)の属性で、ユーザーによって入力／編集されたとき、入力文字列の先頭大文字化が自動的に行われるかどうか、どのように行われるかを制御します。これは次のものに関連します。

- {{htmlelement("input")}} および {{htmlelement("textarea")}} 要素
- [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) が設定されたあらゆる要素。

`autocapitalize` は、物理キーボードで入力する場合の動作には影響しません。モバイル端末の仮想キーボードや音声入力など、その他の入力メカニズムの動作に影響します。これにより、例えば各文の最初の文字を自動的に大文字にするなど、データ入力がより迅速かつ容易になり、ユーザーを支援することができます。

## 値

取りうる値は次の通りです。

- `none` または `off`
  - : 自動的な大文字化は適用されません。
- `sentences` または `on`
  - : 各文の最初の文字を既定で大文字にします。
- `words`
  - : 各語の最初の文字を既定で大文字にします。
- `characters`
  - : すべての文字が既定で大文字になります。

## 使用上のメモ

- `autocapitalize` は、`<input>` と `<textarea>` 要素、およびそれらを含む {{htmlelement("form")}} 要素に設定できます。 `autocapitalize` が `<form>` 要素に設定されている場合、その要素に含まれるすべての `<input>` および `<textarea>` 要素の自動大文字化動作が設定され、含まれている要素に設定されている `autocapitalize` の値は上書きされます。
- `autocapitalize` は、自動大文字化が決して有効にならない `url`、`email`、`password` `<input>` 型には効果はありません。
- `autocapitalize` が指定されていない場合、採用される既定の動作はブラウザーによって異なります。例を示します。
  - Chrome および Safari の既定値は `on`/`sentences`です。
  - Firefox の既定値は `off`/`none` です。

## 例

### HTML

```html-nolint
<p>さまざまな自動大文字化設定を検査するためのフォーム</p>

<form>
  <div>
    <label for="default">既定: 自動大文字化の設定なし</label>
    <input type="text" id="default" name="default" />
  </div>
  <div>
    <label for="off">autocapitalize="off"</label>
    <input type="text" id="off" name="off" autocapitalize="off" />
  </div>
  <div>
    <label for="none">autocapitalize="none"</label>
    <input type="text" id="none" name="none" autocapitalize="none" />
  </div>
  <div>
    <label for="on">autocapitalize="on"</label>
    <input type="text" id="on" name="on" autocapitalize="on" />
  </div>
  <div>
    <label for="sentences">autocapitalize="sentences"</label>
    <input
      type="text"
      id="sentences"
      name="sentences"
      autocapitalize="sentences" />
  </div>
  <div>
    <label for="words">autocapitalize="words"</label>
    <input type="text" id="words" name="words" autocapitalize="words" />
  </div>
  <div>
    <label for="characters">autocapitalize="characters"</label>
    <input
      type="text"
      id="characters"
      name="characters"
      autocapitalize="characters" />
  </div>
  <div>
    <label for="characters-ta">autocapitalize="characters" on textarea</label>
    <textarea
      type="text"
      id="characters-ta"
      name="characters-ta"
      autocapitalize="characters">
    </textarea>
  </div>
</form>

<hr />

<p contenteditable autocapitalize="characters">
  このコンテンツは編集可能であり、 autocapitalize="characters" が設定されています。
</p>
```

```css hidden
div {
  margin-bottom: 20px;
}
```

## 結果

仮想キーボードまたは音声入力を使用して、各入力に対する効果を検査してください（キーボード入力は動作しません）。

{{ EmbedLiveSample("Examples", "100%", "500") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
