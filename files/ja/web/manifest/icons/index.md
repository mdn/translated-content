---
title: icons
slug: Web/Manifest/icons
tags:
  - アイコン
  - マニフェスト
  - ウェブ
browser-compat: html.manifest.icons
translation_of: Web/Manifest/icons
---
{{QuickLinksWithSubpages("/ja/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">型</th>
      <td>配列 (<code>Array</code>)</td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

`icons` メンバーは、様々なコンテキストでアプリケーションアイコンとして機能する画像ファイルを表すオブジェクトの配列を指定します。例えば、他のアプリケーションのリストの中でウェブアプリケーションを表現したり、ウェブアプリケーションを OS のタスクマネージャーやシステム環境設定と統合したりするために使用することができます。

## 例

```json
"icons": [
  {
    "src": "icon/lowres.webp",
    "sizes": "48x48",
    "type": "image/webp"
  },
  {
    "src": "icon/lowres",
    "sizes": "48x48"
  },
  {
    "src": "icon/hd_hi.ico",
    "sizes": "72x72 96x96 128x128 256x256"
  },
  {
    "src": "icon/hd_hi.svg",
    "sizes": "72x72"
  }
]
```

## 値

画像オブジェクトには、次の値を入れることができます。

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">メンバー</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>sizes</code></td>
      <td>画像の寸法を空白区切りで指定する文字列です。</td>
    </tr>
    <tr>
      <td><code>src</code></td>
      <td>
        画像ファイルへのパスです。 <code>src</code> が相対 URL である場合、基準 URL はマニフェストの URL です。
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>
        画像のメディア種別のヒントです。このメンバーは、ユーザーエージェントが対応していないメディア種別の画像を素早く無視することができるようにするためのものです。
      </td>
    </tr>
    <tr>
      <td><code>purpose</code></td>
      <td>
        <p>
          画像の目的を定義します。例えば、画像がホスト OS の特定の場面で、特別な目的を果たすことを意図している場合などです (すなわち、よりよく統合するため)。
        </p>
        <p>
          <a href="https://w3c.github.io/manifest/#purpose-member"><code>purpose</code></a> は以下の値を 1 つ以上、空白で区切って指定することができます。
        </p>
        <ul>
          <li>
            <code>monochrome</code>: ユーザーエージェントは、このアイコンを、 <a href="https://w3c.github.io/manifest/#monochrome-icons-and-solid-fills">塗りつぶしのあるモノクロのアイコン</a>が必要なときに表示することができます。アイコンの色情報は破棄され、アルファデータのみが使用されます。アルファデータのみが使用されます。このアイコンは、ユーザーエージェントが塗りつぶしのマスクのように使うことができます。
          </li>
          <li>
            <code>maskable</code>:  画像が<a href="https://w3c.github.io/manifest/#icon-masks">アイコンのマスクと安全領域</a>に配慮して設計されており、画像の安全領域外の部分をユーザーエージェントが無視したりマスクしたりしても安全になるようになっています。
          </li>
          <li>
            <code>any</code>: ユーザーエージェントはどのような場合でも、自由にこのアイコンを表示することができます (これが既定値です)。
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
