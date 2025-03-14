---
title: SVGStringList
slug: Web/API/SVGStringList
---

{{APIRef("SVG")}}

## SVGStringList インターフェイス

`SVGStringList` は string オブジェクトのリストを定義します。

`SVGStringList` オブジェクトは読み取り専用に設計できます。まりオブジェクトを編集しようとすると例外が投げられることになります。

### インターフェイスの概要

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Also implement</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">メソッド</th>
      <td>
        <ul>
          <li><code>void clear()</code></li>
          <li>
            string
            <code
              >initialize(in string
              <em>newItem</em>)</code
            >
          </li>
          <li>
            string
            <code>getItem(in unsigned long <em>index</em>)</code>
          </li>
          <li>
            string
            <code
              >insertItemBefore(in string
              <em>newItem</em>, in unsigned long <em>index</em>)</code
            >
          </li>
          <li>
            string
            <code
              >replaceItem(in string <em>newItem</em>,
              in unsigned long <em>index</em>)</code
            >
          </li>
          <li>
            string
            <code>removeItem(in unsigned long <em>index</em>)</code>
          </li>
          <li>
            string
            <code
              >appendItem(in string
              <em>newItem</em>)</code
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">属性</th>
      <td>
        <ul>
          <li>readonly unsigned long <code>numberOfItems</code></li>
          <li>
            readonly unsigned long
            <code>length</code> {{non-standard_inline}}
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a
          class="external"
          href="http://www.w3.org/TR/SVG11/types.html#InterfaceSVGStringList"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## 属性

| 名前            | 型              | 説明                                                                                  |
| --------------- | --------------- | ------------------------------------------------------------------------------------- |
| `numberOfItems` | `unsigned long` | リスト内の項目の数                                                                    |
| `length`        | `unsigned long` | `numberOfItems` のミラー値で、他のインターフェイスの整合性用。{{non-standard_inline}} |

## メソッド

<table class="standard-table">
  <thead>
    <tr>
      <th>名前と引数</th>
      <th>戻り値</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><strong>clear</strong>()</code>
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          リストから現在の既存アイテムをクリアーし、その結果空のリストになります。
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{domxref("DOMException")}} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>initialize</strong>(in string
          <em>newItem</em>)</code
        >
      </td>
      <td>string</td>
      <td>
        <p>
          リストから現在の既存アイテムをクリアーしてパラメーターで指定された単一項目を保持するように初期化します。挿入した項目が既にある場合は、直前のリストから削除された後に挿入されます。挿入した項目は項目自体であってコピーではありません。戻り値はリストに挿入された項目です。
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{domxref("DOMException")}} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>getItem</strong>(in unsigned long <em>index</em>)</code>
      </td>
      <td>string</td>
      <td>
        <p>
          リスト内の指定した項目を返します。戻り値は項目自体であってコピーではありません。戻り値はリストに挿入された項目です。項目になされた変更は即座にリストに反映されます。最初の項目は数字のゼロです。
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{domxref("DOMException")}} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>insertItemBefore</strong>(in string
          <em>newItem</em>, in unsigned long <em>index</em>)</code
        >
      </td>
      <td>string</td>
      <td>
        <p>
          リストの指定した位置に新しい項目を挿入します。最初の項目は数字の 0
          です。<code>newItem</code>
          がリスト中にすでに存在する場合、リストに挿入される前に以前のリストから削除されます。挿入される項目は項目自身でコピーではありません。注意点としてその前に挿入するという
          index は項目を削除する前の時点です。<code>index</code> が 0
          と等しい場合、新項目はリストの前に挿入されます。index が
          <code>numberOfItems</code>
          以上の場合、新項目はリストの後に挿入されます。
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{domxref("DOMException")}} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>replaceItem</strong>(in string
          <em>newItem</em>, in unsigned long <em>index</em>)</code
        >
      </td>
      <td>string</td>
      <td>
        <p>
          リスト内の項目を新項目に置き換えます。<code>newItem</code>
          がリスト内にすでに存在する場合、リストに挿入される前に以前のリストから削除されます。挿入される項目は項目自身でコピーではありません。項目がリストにすでに存在する場合、注意点として置換する項目の
          index は項目を削除する前の時点です。
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{domxref("DOMException")}} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
          <li>
            a {{domxref("DOMException")}} with code
            <code>INDEX_SIZE_ERR</code> is raised if the index number is greater
            than or equal to <code>numberOfItems</code>.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>removeItem</strong>(in unsigned long <em>index</em>)</code
        >
      </td>
      <td>string</td>
      <td>
        <p>リストから既存項目を削除します。</p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{domxref("DOMException")}} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
          <li>
            a {{domxref("DOMException")}} with code
            <code>INDEX_SIZE_ERR</code> is raised if the index number is greater
            than or equal to <code>numberOfItems</code>.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>appendItem</strong>(in string
          <em>newItem</em>)</code
        >
      </td>
      <td>string</td>
      <td>
        <p>
          リストの最後に新項目を挿入します。<code>newItem</code>
          がリスト内にすでに存在する場合、リストに挿入される前に以前のリストから削除されます。挿入される項目は項目自身でコピーではありません。
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{domxref("DOMException")}} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ブラウザー実装状況

{{Compat}}
