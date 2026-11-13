---
title: "`<details>` 詳細折りたたみ要素"
short-title: <details>
slug: Web/HTML/Reference/Elements/details
l10n:
  sourceCommit: 44a1a0348720bbd1b1085c7d92b93b4fd311a3dd
---

**`<details>`** は [HTML](/ja/docs/Web/HTML) の要素で、ウィジェットが「開いた」状態になった時のみ情報が表示される折りたたみウィジェットを作成します。概要やラベルは {{HTMLElement("summary")}} 要素を使用して提供する必要があります。

折りたたみウィジェットはふつう、回転して開閉状態を示す小さな三角形を使用し、その隣のラベルと共に画面上に表現されます。 `<summary>` 要素のコンテンツは、折りたたみウィジェットのラベルとして使用されます。 `<details>` のコンテンツは、 `<summary>` の{{glossary("accessible description", "アクセシブル説明")}}を提供します。

{{InteractiveExample("HTML デモ: &lt;details&gt;", "tabbed-shorter")}}

```html interactive-example
<details>
  <summary>詳細</summary>
  何気なく見過ごしてしまうほど小さなもの。
</details>
```

```css interactive-example
details {
  border: 1px solid #aaaaaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
}

summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
}

details[open] {
  padding: 0.5em;
}

details[open] summary {
  border-bottom: 1px solid #aaaaaa;
  margin-bottom: 0.5em;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `open`
  - : この論理属性は、現在詳細（つまり `<details>` 要素の内容）が現在表示されていることを示します。この属性がある場合は詳細が表示され、この属性がない場合は非表示になります。デフォルトでは、この属性は存在しないため、詳細は表示されません。

    > [!NOTE]
    > 詳細を非表示にするには、この属性を完全に削除する必要があります。この属性は論理属性なので、 `open="false"` では詳細が表示状態になります。

- `name`
  - : この属性により、複数の `<details>` 要素を関連付け、一度に 1 つだけ開くことができます。これにより、開発者はスクリプトを使用せずに、アコーディオンなどの UI 機能を簡単に作成できます。

    `name` 属性はグループ名を指定します。複数の `<details>` 要素をグループ化するには、それらに同じ `name` 値を指定してください。グループ化された `<details>` 要素は、一度に 1 つしか開くことができません。1 つを開くと、他の要素は閉じられます。複数のグループ化された `<details>` 要素に `open` 属性が指定されている場合、ソースの順序で最初の要素のみが開きます。

    > [!NOTE]
    > `<details>` 要素は、同じグループの一部であるために、ソース内で互いに隣接している必要はありません。

## 使用上の注意

`<details>` ウィジェットは 2 つの状態のうち 1 つを取ります。デフォルトの閉じた状態では、三角形と `<summary>` の中のラベル（または `<summary>` がない場合は{{Glossary("user agent", "ユーザーエージェント")}}が定義したデフォルトの文字列）のみを表示します。

ユーザーがウィジェットをクリックするか、フォーカスしてスペースバーを押すと、ウィジェットは「ツイスト」して開き、中身が見えるようになります。ウィジェットの開閉を表すために、回転したりねじれたりする三角形を使用することが多いため、「ツイスティ」 (twisty) と呼ばれることもあります。

[`open`](#open) 属性を設定または削除すると、プログラムからウィジェットを開閉できます。

### `<details>` 要素のスタイル設定

`<details>` 要素は、2 つの部分を含むコンテナーと考えることができます。1 つは展開時も折りたたみ時も表示される `<summary>` 要素、もう 1 つは折りたたみ時に内容が非表示になる {{cssxref("::details-content")}} 擬似要素です。

`<summary>` 要素には、自動的に {{cssxref("display")}} の値 `list-item` が設定されます。{{cssxref("list-style-type")}}、{{cssxref("list-style-position")}}、{{cssxref("::marker")}} などを使い、リストマーカーと同じようにマーカーをスタイル設定できます。[概要のアイコンの変更](/ja/docs/Web/HTML/Reference/Elements/summary#概要のアイコンの変更)も参照してください。

{{cssxref("::details-content")}} 擬似要素を使うと、開閉時のトランジションをアニメーション表示できます。例は [`::details-content` のリファレンスページ](/ja/docs/Web/CSS/Reference/Selectors/::details-content#トランジションの例)を参照してください。

## イベント

HTML で対応している通常のイベントに加えて、 `<details>` 要素は {{domxref("HTMLElement/toggle_event", "toggle")}} イベントに対応しており、開閉状態が変化するたびにこのイベントが `<details>` 要素へ送信されます。イベントは状態が変化した**後**に送信され、もしブラウザーがイベントを送信する前に状態が 2 回以上変化しても、イベントは合体して 1 回しか送信されません。

ウィジェットの状態が変化したことを検出するために、 `toggle` イベントを待ち受けすることができます。

```js
details.addEventListener("toggle", (event) => {
  if (details.open) {
    /* 要素が開いた方に切り替わった */
  } else {
    /* 要素が閉じた方に切り替わった */
  }
});
```

## 例

### 基本的な折りたたみの例

この例では `<details>` 要素を `<summary>` 付きで表示します。

```html
<details>
  <summary>システム要件</summary>
  <p>
    オペレーティングシステムを実行するコンピューターが必要です。コンピューターにはメモリーがあり、できれば何らかの長期保存用の記憶装置があること。入力機器と何らかの出力機器を推奨。
  </p>
</details>
```

#### 結果

{{EmbedLiveSample("A_basic_disclosure_example", 650, 150)}}

### 折りたたみボックスの作成

`<details>` ボックスを開いた状態にするために、論理値の `open` 属性を追加しましょう。

```html
<details open>
  <summary>システム要件</summary>
  <p>
    オペレーティングシステムを実行するコンピューターが必要です。コンピューターにはメモリーがあり、できれば何らかの長期保存用の記憶装置があること。入力機器と何らかの出力機器を推奨。
  </p>
</details>
```

#### 結果

{{EmbedLiveSample("Creating_an_open_disclosure_box", 650, 150)}}

### 複数の名前付き折りたたみボックス

同じ名前の `<details>` ボックスをいくつか用意し、一度に開くことができるのは 1 つだけになるようにしました。

```html-nolint
<details name="requirements">
  <summary>卒業要件</summary>
  <p>
    健康、地理、歴史、経済、木工の合格点を含む 40 単位が必須です。
  </p>
</details>
<details name="requirements">
  <summary>システム要件</summary>
  <p>
    オペレーティングシステムを実行するコンピューターが必要です。コンピューターには、メモリーと、できれば何らかの長期記憶装置が必要です。入力装置および何らかの出力装置も推奨されます。
  </p>
</details>
<details name="requirements">
  <summary>採用条件</summary>
  <p>
    HTML、CSS、JavaScript、アクセシビリティ、ウェブパフォーマンス、プライバシー、セキュリティ、国際化に関する知識、そしてブロッコリーが嫌いでなければなりません。
  </p>
</details>
```

#### 結果

{{EmbedLiveSample("Multiple named disclosure boxes", 650, 150)}}

すべての折りたたみウィジェットを開いてみてください。 1 つを開くと、それ以外のウィジェットはすべて自動的に閉じられます。

### 外見のカスタマイズ

では、いくらか CSS を適用して折りたたみボックスの外見をカスタマイズしましょう。

#### CSS

```css
details {
  font:
    16px "Open Sans",
    "Calibri",
    sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #dddddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #dddddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}

details:open > summary {
  background-color: #ccccff;
}
```

この CSS はタブ風のインターフェイスに似た外見を作り出し、クリックするとタブが開いてコンテンツを表示します。

> [!NOTE]
> ブラウザーが {{cssxref(":open")}} 擬似クラスに対応していない場合、属性セレクター `details[open]` を使用して、 `<details>` 要素が開いている状態のときにスタイルを設定することができます。

#### HTML

```html
<details>
  <summary>システム要件</summary>
  <p>
    オペレーティングシステムを実行するコンピューターが必要です。コンピューターには、メモリーと、できれば何らかの長期記憶装置が必要です。入力装置および何らかの出力装置も推奨されます。
  </p>
</details>
```

#### 結果

{{EmbedLiveSample("Customizing_the_appearance", 650, 150)}}

[折りたたみウィジェットをカスタマイズする例](/ja/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon)については、 {{htmlelement("summary")}} ページをご覧ください。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、区分化ルート、対話型コンテンツ、知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        1 つの {{HTMLElement("summary")}} 要素と、それに続く <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙的な ARIA ロール</th>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLDetailsElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("summary")}}
- {{cssxref("::details-content")}}
