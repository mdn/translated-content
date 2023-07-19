---
title: "<summary>: 概要明示要素"
slug: Web/HTML/Element/summary
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<summary>`** は [HTML](/ja/docs/Web/HTML) の要素で、 {{HTMLElement("details")}} 要素の折り畳みボックスの要約、キャプション、説明、凡例を表します。 `<summary>` 要素をクリックすると、親の `<details>` 要素の開閉状態を切り替えることができます。

{{EmbedInteractiveExample("pages/tabbed/summary.html","tabbed-shorter")}}

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみを持ちます。

## 使用上の注意

`<summary>` 要素の中身には、見出しコンテンツ、プレーンテキスト、段落内で使用できる HTML が入れられます。

`<summary>` 要素は、 `<details>` 要素の最初の子として*のみ*使用できます。ユーザーが概要をクリックすると、親の `<details>` 要素が開閉し、 {{domxref("HTMLDetailsElement/toggle_event", "toggle")}} イベントが `<details>` 要素に送信され、状態が変化したことを知るために使用することができます。

## 既定のラベルテキスト

`<details>` 要素の最初の子が `<summary>` 要素でない場合、{{Glossary("user agent", "ユーザーエージェント")}}は既定の文字列（ふつうは「詳細」）を折りたたみボックスのラベルとして使用します。

## 既定のスタイル

HTML 仕様書では、`<summary>` の既定のスタイルに `display: list-item` が含まれています。これで、ラベルの隣に既定で（多くは三角形で）表示される折りたたみウィジェットとして表示されるアイコンを変更したり削除したりすることができます。

スタイルを `display: block` に変更すると、展開用の三角印を削除することができます。

詳しくは[ブラウザーの互換性](#ブラウザーの互換性)の節をご覧ください。すべてのブラウザーがこの要素の機能すべてに対応しているわけではありません。

Safari などの Webkit ベースのブラウザーでは、標準外の CSS 擬似要素 `::-webkit-details-marker` によって、アイコンの表示を制御することが可能です。三角形の表示を消すには、 `summary::-webkit-details-marker { display: none }` を使用してください。

## 例

以下に `<summary>` を使用している例をいくつか示します。 {{HTMLElement("details")}} 要素のドキュメントにもいくつか例があります。

## 基本的な例

{{HTMLElement("details")}} 要素の中で `<summary>` の使用を示す簡単な例です。

```html
<details open>
  <summary>Overview</summary>
  <ol>
    <li>Cash on hand: $500.00</li>
    <li>Current invoice: $75.30</li>
    <li>Due date: 5/6/19</li>
  </ol>
</details>
```

#### 結果

{{EmbedLiveSample("Basic_example", 650, 120)}}

## 見出しとしての概要

次のように、 `<summary>` の中で見出し要素を使用することができます。

```html
<details open>
  <summary><h4>Overview</h4></summary>
  <ol>
    <li>Cash on hand: $500.00</li>
    <li>Current invoice: $75.30</li>
    <li>Due date: 5/6/19</li>
  </ol>
</details>
```

#### 結果

{{EmbedLiveSample("Summaries_as_headings", 650, 120)}}

これは現在のところ、間隔の問題をいくつか抱えており、 CSS を使用して修正することができます。

> **警告:** `<summary>` 要素の既定のロールは [button](/ja/docs/Web/Accessibility/ARIA/Roles/button_role)（子要素からはすべてのロールを外す）ですので、この例はスクリーンリーダーのような支援技術のユーザーには動作しません。 `<h4>` のロールが削除されますので、これらのユーザーからは見出しとして扱われなくなります。
</div>

## 概要の中の HTML

この例は、 `<summary>` 要素にいくらか意味を追加して、ラベルを重要であると示します。

```html
<details open>
  <summary><strong>Overview</strong></summary>
  <ol>
    <li>Cash on hand: $500.00</li>
    <li>Current invoice: $75.30</li>
    <li>Due date: 5/6/19</li>
  </ol>
</details>
```

#### 結果

{{EmbedLiveSample("HTML_in_summaries", 650, 120)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ">記述コンテンツ</a>。または <a href="/ja/docs/Web/HTML/Content_categories#見出しコンテンツ">見出しコンテンツ</a> のうちひとつの要素
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>不可。開始タグと終了タグの両方が必要。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>{{HTMLElement("details")}} 要素</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("details")}}
