---
title: "<details>: 詳細折りたたみ要素"
slug: Web/HTML/Element/details
---

{{HTMLSidebar}}

**`<details>`** は [HTML](/ja/docs/Web/HTML) の要素で、ウィジェットが「開いた」状態になった時のみ情報が表示される折りたたみウィジェットを作成します。</span>概要やラベルは {{HTMLElement("summary")}} 要素を使用して提供する必要があります。

折りたたみウィジェットはふつう、回転して開閉状態を示す小さな三角形を使用し、その隣のラベルと共に画面上に表現されます。 `<summary>` 要素の内容が折りたたみウィジェットのラベルとして使用されます。

{{EmbedInteractiveExample("pages/tabbed/details.html", "tabbed-shorter")}}

`<details>` ウィジェットは 2 つの状態のうち 1 つを取ります。既定の*閉じた*状態は `<summary>` を使用して指定されたラベル文字列（または `<summary>` がない場合は{{Glossary("user agent", "ユーザーエージェント")}}が定義した既定の文字列）とウィジェット自身による三角形だけを表示します。

ユーザーがウィジェットをクリックするか、フォーカスしてスペースバーを押すと、ウィジェットは「ツイスト」して開き、中身が見えるようになります。ウィジェットの開閉を表すために、回転したりねじれたりする三角形を使用することが多いため、「ツイスティ」 (twisty) と呼ばれることもあります。

CSS を使用して折り畳みウィジェットのスタイルを設定することができます。また、 [`open`](open) 属性を設定したり削除したりすることによって、プログラムによってウィジェットを開いたり閉じたりすることも可能です。残念ながら、現時点では、開閉の遷移をアニメーションで表現する方法は組み込まれていません。

既定では、ウィジェットが閉じている時、折りたたみの三角形と概要が表示できるだけの高さしかありません。ウィジェットが開くと、要素は中に含まれた詳細が表示できるだけの大きさに拡大されます。

完全な標準互換の実装では、 CSS の `{{cssxref("display")}}: list-item` が自動的に {{HTMLElement("summary")}} に適用されます。この表示方法はカスタマイズすることができます。詳しくは[折りたたみウィジェットのカスタマイズ](#折りたたみウィジェットのカスタマイズ)を参照してください。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- `open`

  - : この論理属性は、現在詳細（つまり `<details>` 要素の内容）が現在表示されていることを示します。この属性がある場合は詳細が表示され、この属性がない場合は非表示になります。既定では、この属性は存在しないため、詳細は表示されません。

    > [!NOTE]
    > 詳細を非表示にするには、この属性を完全に削除する必要があります。この属性は論理属性なので、 `open="false"` では詳細が表示状態になります。

## イベント

HTML で対応している通常のイベントに加えて、 `<details>` 要素は {{domxref("HTMLDetailsElement/toggle_event", "toggle")}} イベントに対応しており、開閉状態が変化するたびに `<details>` 要素が呼び出されます。イベントは状態が変化した**後**に送信され、もしブラウザーがイベントを送信する前に状態が 2 回以上変化しても、イベントは合体して 1 回しか送信されません。

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

### 単純な折りたたみの例

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

{{EmbedLiveSample("A_simple_disclosure_example", 650, 150)}}

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

### 表示方法のカスタマイズ

では、いくらか CSS を適用して折りたたみボックスの外見をカスタマイズしましょう。

#### CSS

```css
details {
  font:
    16px "Open Sans",
    Calibri,
    sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}

details[open] > summary {
  background-color: #ccf;
}
```

この CSS はタブ風のインターフェイスに似た外見を作り出し、クリックするとタブが開いてコンテンツを表示します。

`details[open]` セレクターを、開いている要素のスタイル付けに使用することができます。

#### HTML

```html
<details>
  <summary>システム要件</summary>
  <p>
    オペレーティングシステムを実行するコンピューターが必要です。コンピューターにはメモリーがあり、できれば何らかの長期保存用の記憶装置があること。入力機器と何らかの出力機器を推奨。
  </p>
</details>
```

#### 結果

{{EmbedLiveSample("Customizing_the_appearance", 650, 150)}}

### 折りたたみウィジェットのカスタマイズ

折りたたみの三角形ウィジェット自身はカスタマイズできますが、これは最近標準化され、広くは対応されていません。さらに、この対応方法については複数の種類があり、標準はそれに基づいて決定されましたので、しばらくの間はカスタマイズのために複数の方法を使用する必要があります。

{{HTMLElement("summary")}} 要素は {{cssxref("list-style")}} 一括指定プロパティや、 {{cssxref("list-style-type")}} などの個別指定プロパティに対応しており、折りたたみウィジェットを三角形から選択したものに変更することができます (ふつうは {{cssxref("list-style-image")}}) を使用します。例えば、折りたたみウィジェットのアイコンは `list-style: none` と設定することで削除することができます。

#### CSS

```css
details {
  font:
    16px "Open Sans",
    Calibri,
    sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
  list-style: none;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}
```

この CSS はタブ風のインターフェイスに似た外見を作り出し、クリックするとタブが開いてコンテンツを表示します。

#### HTML

```html
<details>
  <summary>システム要件</summary>
  <p>
    オペレーティングシステムを実行するコンピューターが必要です。コンピューターにはメモリーがあり、できれば何らかの長期保存用の記憶装置があること。入力機器と何らかの出力機器を推奨。
  </p>
</details>
```

#### 結果

{{EmbedLiveSample("Customizing_the_disclosure_widget", 650, 150)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、区分化ルート、対話型コンテンツ、知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        1 つの {{HTMLElement("summary")}} 要素と、それに続く <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
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
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙的な ARIA ロール</th>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a></td>
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
