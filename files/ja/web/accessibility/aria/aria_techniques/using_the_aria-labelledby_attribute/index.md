---
title: aria-labelledby 属性の使用
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute
tags:
  - ARIA
  - Accessibility
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute
---
### 説明

[`aria-labelledby`](https://www.w3.org/TR/wai-aria/#aria-labelledby) 属性には、入力要素、ウィジェット、グループなどのオブジェクトのラベルの要素の ID が含まれます。 属性は、オブジェクトとそのラベルの間の関係を確立します。 スクリーンリーダーなどの支援技術では、この属性を使用してドキュメント内のオブジェクトをカタログ化し、ユーザーがドキュメント間を移動できるようにします。 要素の ID がなければ、支援技術はオブジェクトをカタログ化できません。

`aria-labelledby` は [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute) と非常によく似ています。 ラベルはオブジェクトに関する重要な情報を提供し、説明はユーザーが必要とする幅広い情報を提供します。

フォーム要素に加えて、`aria-labelledby` 属性を使用して、静的テキストをウィジェット、要素のグループ、枠、見出し、定義、およびその他のタイプのオブジェクトを持つ領域に関連付けることができます。 以下の[例](#examples)のセクションでは、この方法で属性を使用する方法の詳細について説明します。

ARIA をサポートしていないユーザーエージェントとの互換性を向上させるために、`aria-labelledby` を {{ HTMLElement("label") }} 要素とともに使用できます（`for` 属性を使用）。

この属性は、一般的な HTML フォーム要素で使用できます。 ARIA の `role` が割り当てられている要素に限定されるものではありません。

### 値

スペースで区切られた要素の ID のリスト

### ユーザーエージェントと支援技術への影響

ユーザーエージェントが `aria-labelledby` 属性と [`aria-label`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) 属性の両方を持つ要素のアクセス可能な名前プロパティを計算するとき、ユーザーエージェントは `aria-labelledby` を優先します。

### 例

#### 例 1: 複数のラベル

以下の例では、各入力フィールドは、それぞれの個別のラベルとグループのラベルの両方でラベル付けされています。

```html
<div id="billing">請求書</div>

<div>
    <div id="name">名前</div>
    <input type="text" aria-labelledby="billing name"/>
</div>
<div>
    <div id="address">住所</div>
    <input type="text" aria-labelledby="billing address"/>
</div>
```

#### 例 2: 見出しを領域に関連付ける

以下の例では、見出し要素は、見出しの内容に関連付けられています。 参照される領域は、見出しを含む領域であることに注意してください。

```html
<div role="main" aria-labelledby="foo">
   <h1 id="foo">サンディエゴ・ヒルズに広がる野火</h1>
   強風が高温の炎を広げます...
</div>
```

#### 例 3: ラジオグループ

以下の例では、[radiogroup](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_radio_role) のコンテナは、`aria-labelledby` 属性を使用してそのラベルに関連付けられています。

```html
<div id="radio_label">私のラジオラベル</div>
<ul role="radiogroup" aria-labelledby="radio_label">
    <li role="radio">項目 #1</li>
    <li role="radio">項目 #2</li>
    <li role="radio">項目 #3</li>
</ul>
```

#### 例 4: ダイアログラベル

以下の例では、ダイアログのラベルを付ける見出し要素は、`aria-labelledby` 属性によって参照されます。

```html
<div role="dialog" aria-labelledby="dialogheader">
    <h2 id="dialogheader">ファイルを選択</h2>
    ... ダイアログの内容
</div>
```

#### 例 5: インライン定義

以下の例では、ナレーションの自然な流れに記述されている用語の定義は、`aria-labelledby` 属性を使用してその用語自体に関連付けられています。

```html
<p>医師は、それが<dfn id="placebo">プラセボ</dfn>であり、<span role="definition" aria-labelledby="placebo">
疾病に対する実際の効果よりも、患者の精神的救済のためにより多く処方される不活性製剤</span>であると説明しました。
</p>
```

#### 例 6: 定義リスト

以下の例では、正式な定義リストの定義は、`aria-labelledby` 属性を使用して定義する用語に関連付けられています。

```html
<dl>
    <dt id="anathema">anathema</dt>
    <dd role="definition" aria-labelledby="anathema">教会の権威によって厳粛に発音され、
                                                     破門を伴う禁止または呪い</dd>
    <dd role="definition" aria-labelledby="anathema">激しい告発 : カーソル</dd>

    <dt id="homily">homily</dt>
    <dd role="definition" aria-labelledby="homily">通常は短い説教</dd>
    <dd role="definition" aria-labelledby="homily">道徳的テーマに関する講義や談話</dd>
</dl>
```

#### 例 7: メニュー

次の例では、`aria-labelledby` 属性を使用してポップアップメニューをラベルに関連付けています。

```html
<div role="menubar">
    <div role="menuitem" aria-haspopup="true" id="fileMenu">ファイル</div>
    <div role="menu" aria-labelledby="fileMenu">
        <div role="menuitem">開く</div>
        <div role="menuitem">保存</div>
        <div role="menuitem">名前をつけて保存 ...</div>
        ...
    </div>
    ...
</div>
```

#### 注

ラベルの最も一般的なアクセシビリティ API のマッピングは、アクセス可能な名前プロパティです

### ARIA ロールによって使用される

ベースマークアップのすべての要素

### 関連する ARIA 技術

- [aria-label 属性の使用](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)
- [aria-describedby 属性の使用](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute)

### 互換性

TBD: 一般的な UA と AT 製品の組み合わせに関するサポート情報を追加する

### その他のリソース

- [aria-labelledby の WAI-ARIA 仕様](https://www.w3.org/TR/wai-aria/#aria-labelledby)（英語）
