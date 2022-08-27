---
title: フォームウィジェット向けプロパティ実装状況一覧
slug: Learn/Forms/Property_compatibility_table_for_form_controls
tags:
  - Advanced
  - CSS
  - Forms
  - Guide
  - HTML
  - NeedsUpdate
  - Web
  - ウェブ
  - ガイド
  - フォーム
  - 高度
translation_of: Learn/Forms/Property_compatibility_table_for_form_controls
---
{{learnsidebar}}

以下の実装状況一覧表で、 HTML フォーム向けの CSS の対応状況を要約しています。 HTML フォームや CSS の複雑さにより、これらの表は完全なリファレンスであるとはいえません。それでも、何ができて何ができないかの見識を得られるでしょう。また、どうすればよいかを知る助けにもなるでしょう。

## 表の見方

### 値

それぞれのプロパティで取り得る値は 4 種類あります。

- Yes
  - : プロパティは各ブラウザー間で、一貫してほどよく対応されています。もっとも、特殊なケースでは奇妙な副作用に直面するかもしれません。
- Partial
  - : プロパティは動作しますが、たびたび奇妙な副作用や一貫性のなさに直面するかもしれません。まず副作用について熟知しているのでなければ、これらのプロパティは避けるべきでしょう。
- No
  - : プロパティは動作しない、または頼りにできるほどの一貫性がありません。
- n.a.
  - : 当該ウィジェットに対して、そのプロパティは意味がありません。

### レンダリング

それぞれのプロパティで可能なレンダリング方法は 2 種類あります:

- N (Normal)
  - : プロパティをそのまま適用することを表します。
- T (Tweaked)
  - : 下記の追加ルールとともにプロパティを適用することを表します:

```css
* {
/* これは、WebKit ベースのブラウザーでネイティブのルックアンドフィールを無効にします */
  -webkit-appearance: none;
  appearance: none;

/* Internet Explorer用 */
  background: none;
}
```

## 実装状況一覧表

### 全体的な動作

全体的なレベルで多くのブラウザーに共通する動作があります:

- {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("border-radius")}}, {{cssxref("height")}}
  - : これらのプロパティのいずれかを使用すると、一部のブラウザーでネイティブのルックアンドフィールが部分的に、あるいは全面的に無効になることがあります。これらを使用する際は注意してください。
- {{cssxref("line-height")}}
  - : このプロパティの対応状況は各ブラウザー間で一貫性がありませんので、避けるべきでしょう。
- {{cssxref("text-decoration")}}
  - : このプロパティはフォームウィジェットにおいて Opera が対応していません。
- {{cssxref("text-overflow")}}
  - : Opera、Safari および IE9 ではフォームウィジェットでこのプロパティに対応していません。
- {{cssxref("text-shadow")}}
  - : Opera は {{cssxref("text-shadow")}} をフォームウィジェットで対応していません。また、IE9 はまったく対応していません。

### テキストフィールド

`{{htmlelement("input/text", "text")}}`, `{{htmlelement("input/search", "search")}}`, and `{{htmlelement("input/password", "password")}}` の入力タイプを見てください。

<table>
  <thead>
    <tr>
      <th scope="col">プロパティ</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS ボックスモデル</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1][2]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td>
        <ol>
          <li>
            WebKit ブラウザーは (主に Mac OSX や iOS
            で)、検索フィールドでネイティブのルックアンドフィールを使用します。従って、検索フィールドにこのプロパティを適用できるようにするために、<code
              >-webkit-appearance:none</code
            >
            を使用することが必要です。
          </li>
          <li>
            Windows 7 で Internet Explorer 9 は、
            <code>background:none</code> が適用されなければ境界を適用しません。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1][2]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td>
        <ol>
          <li>
            WebKit ブラウザーは (主に Mac OSX や iOS
            で)、検索フィールドでネイティブのルックアンドフィールを使用します。従って、検索フィールドにこのプロパティを適用できるようにするために、<code
              >-webkit-appearance:none</code
            >
            を使用することが必要です。
          </li>
          <li>
            Windows 7 で Internet Explorer 9 は、<code>background:none</code>
            が適用されなければ境界を適用しません。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1][2]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td>
        <ol>
          <li>
            WebKit ブラウザーは (主に Mac OSX や iOS
            で)、検索フィールドでネイティブのルックアンドフィールを使用します。従って、検索フィールドにこのプロパティを適用できるようにするために、<code
              >-webkit-appearance:none</code
            >
            を使用することが必要です。
          </li>
          <li>
            Windows 7 で Internet Explorer 9 は、<code>background:none</code>
            が適用されなければ境界を適用しません。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>テキストとフォント</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}<sup>[1]</sup>
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td>
        <ol>
          <li>
            {{cssxref("border-color")}}
            プロパティが設定されていない場合、一部の WebKit ベースブラウザーは
            <code>{{htmlelement("textarea")}}</code>
            において、フォントだけでなく境界にも {{cssxref("color")}}
            プロパティを適用します。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td>{{cssxref("line-height")}} の注意事項をご覧ください。</td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial
      </td>
      <td>Opera に関する注意事項をご覧ください。</td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            IE9 はこのプロパティを
            <code>{{htmlelement("textarea")}}</code> のみで、Opera
            は単一行のテキストフィールドのみで対応しています。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>境界と背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td>
        <ol>
          <li>
            WebKit ブラウザーは (主に Mac OSX や iOS
            で)、検索フィールドでネイティブのルックアンドフィールを使用します。従って、検索フィールドにこのプロパティを適用できるようにするために、<code
              >-webkit-appearance:none</code
            >
            を使用することが必要です。Windows 7 で Internet Explorer 9 は、<code
              >background:none</code
            >
            が適用されなければ境界を適用しません。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1][2]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td>
        <ol>
          <li>
            WebKit ブラウザーは (主に Mac OSX や iOS
            で)、検索フィールドでネイティブのルックアンドフィールを使用します。従って、検索フィールドにこのプロパティを適用できるようにするために、<code
              >-webkit-appearance:none</code
            >
            を使用することが必要です。Windows 7 で Internet Explorer 9 は、<code
              >background:none</code
            >
            が適用されなければ境界を適用しません。
          </li>
          <li>
            Opera では、明示的に境界が設定されている場合にのみ
            {{cssxref("border-radius")}} が適用されます。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>IE9 はこのプロパティに対応していません。</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### ボタン

`{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}`, and `{{htmlelement("input/reset", "reset")}}` input types and the `{{htmlelement("button")}}` 要素を見てください。

<table>
  <thead>
    <tr>
      <th scope="col">プロパティ</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS ボックスモデル</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td>
        <ol>
          <li>
            Mac OSX や iOS では、WebKit
            ベースブラウザーでこのプロパティが適用されません。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td>
        <ol>
          <li>
            Mac OSX や iOS では、WebKit
            ベースブラウザーでこのプロパティが適用されません。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>テキストとフォント</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td>{{cssxref("line-height")}} の注意事項をご覧ください。</td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>境界と背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Opera では、明示的に境界が設定されている場合にのみ
            {{cssxref("border-radius")}} が適用されます。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>IE9 はこのプロパティに対応していません。</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### 数値

`{{htmlelement("input/number", "number")}}` 入力タイプを見てください。フィールドの値の変更に使用するスピンボタンのスタイルを変更するための、標準的な方法はありません。Safari では、スピンボタンがフィールドの外部にあることは知っておくべきです。

<table>
  <thead>
    <tr>
      <th scope="col">プロパティ</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS ボックスモデル</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Opera
            ではスピンボタンが拡大されて、フィールドの内容物を隠す場合があります。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Opera
            ではスピンボタンが拡大されて、フィールドの内容物を隠す場合があります。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>テキストとフォント</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td>{{cssxref("line-height")}} の注意事項をご覧ください。</td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>境界と背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td colspan="1" rowspan="3">
        <p>
          対応していますが、ブラウザー間で頼りにできるほどの一貫性はありません。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
    </tr>
  </tbody>
</table>

### チェックボックスとラジオボタン

`{{htmlelement("input/checkbox", "checkbox")}}` と `{{htmlelement("input/radio", "radio")}}` 入力タイプを見てください。

<table>
  <thead>
    <tr>
      <th scope="col">プロパティ</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS ボックスモデル</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            一部のブラウザーでは、マージンを追加したりウィジェットを引き伸ばしたりします。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            一部のブラウザーでは、マージンを追加したりウィジェットを引き伸ばしたりします。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>テキストとフォント</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>境界と背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

### セレクトボックス (単一行)

`{{htmlelement("select")}}`、 `{{htmlelement("optgroup")}}`、`{{htmlelement("option")}}` 要素を見てください。

<table>
  <thead>
    <tr>
      <th scope="col">プロパティ</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS ボックスモデル</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            このプロパティは
            <code>{{htmlelement("select")}}</code>
            要素では問題ありませんが、
            <code>{{htmlelement("option")}}</code> 要素や
            <code>{{htmlelement("optgroup")}}</code>
            要素では効果がありません。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[2]</sup>
      </td>
      <td>
        <ol>
          <li>
            プロパティは適用されますが、Mac OSX
            ではブラウザー間の一貫性がありません。
          </li>
          <li>
            このプロパティは
            <code>{{htmlelement("select")}}</code>
            要素には適用されますが、
            <code>{{htmlelement("option")}}</code> 要素や
            <code>{{htmlelement("optgroup")}}</code>
            要素では処理に一貫性がありません。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>テキストとフォント</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Mac OSX では、WebKit
            ベースのブラウザーがネイティブウィジェットでこのプロパティに対応せず、また
            <code>{{htmlelement("option")}}</code> 要素や
            <code>{{htmlelement("optgroup")}}</code> 要素では Opera
            を含めてまったく対応していません。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Mac OSX では、WebKit
            ベースのブラウザーがネイティブウィジェットでこのプロパティに対応せず、また
            <code>{{htmlelement("option")}}</code> 要素や
            <code>{{htmlelement("optgroup")}}</code> 要素では Opera
            を含めてまったく対応していません。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            IE9 は {{HTMLElement("select")}}、
            <code>{{htmlelement("option")}}</code> および
            <code>{{htmlelement("optgroup")}}</code>
            要素でこのプロパティに対応していません。Mac OSX で WebKit
            ベースのブラウザーは、
            <code>{{htmlelement("option")}}</code> 要素や
            <code>{{htmlelement("optgroup")}}</code>
            要素でこのプロパティに対応していません。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Windows 7 で IE9 および Mac OSX で WebKit
            ベースのブラウザーは、このウィジェットで本プロパティに対応していません。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Firefox のみがこのプロパティを完全対応しています。 Opera
            はこのプロパティに全く対応しておらず、また他のブラウザーは
            <code>{{htmlelement("select")}}</code>
            要素のみに対応しています。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1][2]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1][2]</sup>
      </td>
      <td>
        <ol>
          <li>
            ほとんどのブラウザーは、<code>{{htmlelement("select")}}</code>
            要素のみでこのプロパティに対応しています。
          </li>
          <li>IE9 はこのプロパティに対応していません。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1][2]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1][2]</sup>
      </td>
      <td>
        <ol>
          <li>
            ほとんどのブラウザーは、<code>{{htmlelement("select")}}</code>
            要素のみでこのプロパティに対応しています。
          </li>
          <li>IE9 はこのプロパティに対応していません。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            ほとんどのブラウザーは、<code>{{htmlelement("select")}}</code>要素のみでこのプロパティに対応しています。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>境界と背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td colspan="1" rowspan="3">
        <ol>
          <li>
            ほとんどのブラウザーは、<code>{{htmlelement("select")}}</code>要素のみでこのプロパティに対応しています。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
    </tr>
  </tbody>
</table>

Firefox では`{{htmlelement("select")}}` 要素の下矢印を変更する方法はありません。.

### セレクトボックス (複数行)

<table>
  <thead>
    <tr>
      <th scope="col">プロパティ</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS ボックスモデル</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Opera は {{cssxref("padding-top")}} および
            {{cssxref("padding-bottom")}} に
            <code>{{htmlelement("select")}}</code>
            要素で対応していません。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>テキストとフォント</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td>{{cssxref("line-height")}} の注意事項をご覧ください。</td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            IE9 は <code>{{htmlelement("select")}}</code> 、
            <code>{{htmlelement("option")}}</code> および
            <code>{{htmlelement("optgroup")}}</code>
            要素でこのプロパティに対応していません。Mac OSX で WebKit
            ベースのブラウザーは、
            <code>{{htmlelement("option")}}</code> 要素や
            <code>{{htmlelement("optgroup")}}</code>
            要素でこのプロパティに対応していません。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Windows 7 で IE9 および Mac OSX で WebKit
            ベースのブラウザーは、このウィジェットで本プロパティに対応していません。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>Firefox および IE9 以上のみが対応しています。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            ほとんどのブラウザーは、
            <code>{{htmlelement("select")}}</code>
            要素のみでこのプロパティに対応します。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>境界と背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Opera では、明示的に境界が設定されている場合にのみ
            {{cssxref("border-radius")}} が適用されます。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>IE9 はこのプロパティに対応していません。</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### Datalist

`{{htmlelement("datalist")}}` and `{{htmlelement("input")}}` 要素と [`list` 属性](/ja/docs/Web/HTML/Attributes/list)を見てください。

<table>
  <thead>
    <tr>
      <th scope="col">プロパティ</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS ボックスモデル</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>テキストとフォント</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>境界と背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

### ファイルピッカー

`{{htmlelement("input/file", "file")}}` 入力タイプを見てください。

<table>
  <thead>
    <tr>
      <th scope="col">プロパティ</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS ボックスモデル</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>テキストとフォント</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            対応されていますが、ブラウザー間で頼りにできるほどの一貫性はありません。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            ほとんどのブラウザーは、このプロパティを選択ボタンにも適用します。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>ウィジェットの外側に左マージンがあるような状態になります。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>境界と背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            対応されていますが、ブラウザー間で頼りにできるほどの一貫性はありません。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>IE9 はこのプロパティに対応していません。</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### 日付選択

`{{htmlelement("input/date", "date")}}` と `{{htmlelement("input/time", "time")}}` 入力タイプを見てください。多くのプロパティが対応されていますが、ブラウザー間で頼りにできるほどの一貫性はありません。

<table>
  <thead>
    <tr>
      <th scope="col">プロパティ</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS ボックスモデル</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>テキストとフォント</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>境界と背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

### カラーピッカー

`{{htmlelement("input/color", "color")}}` 入力タイプを見てください。

<table>
  <thead>
    <tr>
      <th scope="col">プロパティ</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS ボックスモデル</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td>
        <ol>
          <li>
            Opera はこのプロパティを、select
            ウィジェットと同じ制限事項のもとに処理します。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td>
        <ol>
          <li>
            Opera はこのプロパティを、select
            ウィジェットと同じ制限事項のもとに処理します。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>テキストとフォント</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>境界と背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td colspan="1" rowspan="3">
        <ol>
          <li>
            対応されていますが、ブラウザー間で頼りにできるほどの一貫性はありません。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
    </tr>
  </tbody>
</table>

### メーターとプログレスバー

`{{htmlelement("meter")}}` と `{{htmlelement("progress")}}` 要素を見てください:

<table>
  <thead>
    <tr>
      <th scope="col">プロパティ</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS ボックスモデル</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Chrome は調整された (Tweaked) 状態の要素に
            {{cssxref("padding")}}
            プロパティが適用されていると、{{HTMLElement("progress")}}
            要素や {{HTMLElement("meter")}} 要素を隠します。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>テキストとフォント</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>境界と背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td colspan="1" rowspan="3">
        <ol>
          <li>
            対応されていますが、ブラウザー間で頼りにできるほどの一貫性はありません。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
    </tr>
  </tbody>
</table>

### Range

`{{htmlelement("input/range", "range")}}` 入力タイプを見てください。スライダーのつまみのスタイルを変更するための標準的な方法はなく、また Opera ではウィジェットのデフォルトの表示を調整する方法がありません。

<table>
  <thead>
    <tr>
      <th scope="col">プロパティ</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS ボックスモデル</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Chrome や Opera はウィジェットの周りに余白を追加します。また Windows
            7 の Opera では、スライダーのつまみが引き伸ばされます。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td>
        <ol>
          <li>
            {{cssxref("padding")}}
            は適用されますが、視覚的な効果はありません。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>テキストとフォント</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>境界と背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td colspan="1" rowspan="3">
        <ol>
          <li>
            対応されていますが、ブラウザー間で頼りにできるほどの一貫性はありません。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 153, 153);
          vertical-align: top;
        "
      >
        No<sup>[1]</sup>
      </td>
    </tr>
  </tbody>
</table>

### 画像ボタン

`{{htmlelement("input/image", "image")}}` 入力タイプを見てください:

<table>
  <thead>
    <tr>
      <th scope="col">プロパティ</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS ボックスモデル</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>テキストとフォント</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>境界と背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(204, 255, 102);
          vertical-align: top;
        "
      >
        Yes
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>IE9 はこのプロパティに対応していません。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td
        style="
          text-align: center;
          background-color: rgb(255, 255, 102);
          vertical-align: top;
        "
      >
        Partial<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>IE9 はこのプロパティに対応していません。</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

{{PreviousMenu("Learn/HTML/Forms/Advanced_styling_for_HTML_forms", "Learn/HTML/Forms")}}

## このモジュール

### 学習コース

- [初めての HTML フォーム](/ja/docs/Learn/HTML/Forms/Your_first_HTML_form)
- [HTML フォームの構築方法](/ja/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form)
- [ネイティブフォームウィジェット](/ja/docs/Learn/HTML/Forms/The_native_form_widgets)
- [フォームデータの送信](/ja/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)
- [フォームデータの検証](/ja/docs/Learn/HTML/Forms/Data_form_validation)
- [カスタムフォームウィジェットの作成方法](/ja/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets)
- [JavaScript によるフォームの送信](/ja/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript)
- [古いブラウザーでの HTML フォーム](/ja/docs/Learn/HTML/Forms/HTML_forms_in_legacy_browsers)
- [HTML フォームへのスタイル設定](/ja/docs/Learn/HTML/Forms/Styling_HTML_forms)
- [HTML フォームへの高度なスタイル設定](/ja/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms)
- [フォームウィジェット向けプロパティ実装状況一覧](/ja/docs/Property_compatibility_table_for_form_widgets)

### 上級トピック

- [Sending forms through JavaScript](/ja/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript)
- [How to build custom form widgets](/ja/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets)
- [HTML forms in legacy browsers](/ja/docs/Learn/HTML/Forms/HTML_forms_in_legacy_browsers)
- [Advanced styling for HTML forms](/ja/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms)
- [Property compatibility table for form widgets](/ja/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets)
