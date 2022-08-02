---
title: Intl.Locale.prototype.collation
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation
tags:
  - 国際化
  - Intl
  - JavaScript
  - プロパティ
  - Locale
  - ローカライズ
  - プロトタイプ
  - リファレンス
browser-compat: javascript.builtins.Intl.Locale.collation
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation
---
{{JSRef}}

**`Intl.Locale.prototype.collation`** プロパティは、 `Locale` の[照合種別](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_Collation)を返すアクセサープロパティです。

## 解説

照合順序とは、文字列を順番に並べる処理のことです。検索クエリーの結果やデータベース内のレコードの順序など、文字列を一定の順序に並べ替える必要がある場合に使用されます。文字列を順番に並べるという考えは些細なことと思えるかもしれませんが、順番の考え方は地域や言語によって異なる場合があります。 `collation` プロパティは、 JavaScript プログラマーが特定のロケールで使用される照合順序の種類に簡単にアクセスできるようにするためのものです。

利用可能な照合種別は下記の表にあります。 [Unicode 照合仕様書](https://github.com/unicode-org/cldr/blob/2dd06669d833823e26872f249aa304bc9d9d2a90/common/bcp47/collation.xml)から引用したものです。

## 有効な照合種別

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">照合種別</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>big5han</td>
      <td>
        ラテン文字はピンイン順、漢字は big5 文字セット順（中国語向け）
        <div class="notecard">
          <p>
            <strong>注:</strong> `big5han` 照合種別は Chrome や Edge では使用できません。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>compat</td>
      <td>前の版の順序で、互換性のため（アラビア語向け）</td>
    </tr>
    <tr>
      <td>dict</td>
      <td>辞書形式の順序（シンハラ語向け）</td>
    </tr>
    <tr>
      <td>
        <div class="notecard warning">
          <p>
            <strong>警告:</strong> <code>direct</code> 照合種別は非推奨です。使用しないでください。
          </p>
        </div>
        <p>direct</p>
      </td>
      <td>バイナリコードポイント順</td>
    </tr>
    <tr>
      <td>ducet</td>
      <td>既定の Unicode 照合順で、要素表順
        <div class="notecard warning">
          <p>
            <strong>警告:</strong> `ducet` 照合種別はウェブでは利用できません。代わりに `und` ロケールを照合種別指定子なしで使用してください。 `und` は DUCET に最も近い照合種別です。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>emoji</td>
      <td>絵文字に推奨される順序（`und` ロケール向け）</td>
    </tr>
    <tr>
      <td>eor</td>
      <td>ヨーロッパ語の順序の規則（`und` ロケール向け）</td>
    </tr>
    <tr>
      <td>gb2312</td>
      <td>
        ラテン文字はピンイン順、漢字は gb2312han 文字セット順（中国語向け）
        <div class="notecard">
          <p>
            <strong>注:</strong> <code>gb2313</code> 照合種別は Chrome や Edge では使用できません。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>phonebk</td>
      <td>電話帳形式の順序（ドイツ語向け）</td>
    </tr>
    <tr>
      <td>phonetic</td>
      <td>発音順（発音に基づく順序、リンガラ語向け）</td>
    </tr>
    <tr>
      <td>pinyin</td>
      <td>
        ラテン文字と漢字はピンイン順（中国語向け）
      </td>
    </tr>
    <tr>
      <td>reformed</td>
      <td>リフォーム順（スウェーデン語向け）
        <div class="notecard">
          <p>
            <strong>注:</strong> これは、 2022 年 5 月現在、スウェーデン語の既定の順序ですが、照合順序の名前が異常です。これは既定値なので、 `sv-u-co-reformed` をリクエストするのではなく、 `sv` をリクエストしてください。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>search</td>
      <td>文字列検索のための特殊な照合種別
        <div class="notecard warning">
          <p>
            <strong>警告:</strong> 使用しないでください。 <code>Intl.Collator</code> ではこの照合種別は `usage` オプションで `search` の値を設定すると有効になります。
            さらに、この照合を検索で使用する API は今のところありません。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>searchjl</td>
      <td>韓国語の頭文字子音検索用の特殊な照合種別</td>
    </tr>
    <tr>
      <td>standard</td>
      <td>各言語の既定の照合順。ただし、中国語と、 2022 年 5 月時点ではスウェーデン語を除きます。
        <div class="notecard warning">
          <p>
            <strong>警告:</strong> 明示的に使用しないでください。一般に、明示的に指定する必要はありません。また、スウェーデン語に対してこれを指定すると、将来、スウェーデン語の照合順序の命名が他の言語と整合するように変更された場合に問題があります。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>stroke</td>
      <td>
        ラテン文字はピンイン順、漢字は画数順（中国語向け）
      </td>
    </tr>
    <tr>
      <td>trad</td>
      <td>
        歴史的なスタイルの順序（スペイン語など）
      </td>
    </tr>
    <tr>
      <td>unihan</td>
      <td>
        漢字の部首の画数順（中国語、日本語、韓国語向け）。
        中国語の場合はラテン文字はピンイン順。
        <div class="notecard">
          <p>
            <strong>注:</strong> <code>unihan</code> 照合種別は Chrome や Edge では使用できません。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>zhuyin</td>
      <td>
        <p>
          ラテン語はピンイン順、ボポモフォと漢字は竹簡順（中国語向け）
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 例

他のロケールのサブタグと同様、照合種別はロケール文字列やコンストラクターの構成オブジェクトの引数で {{jsxref("Intl/Locale", "Intl.Locale")}} オブジェクトに追加することができます。

### ロケール文字列による照合種別の追加

[Unicode ロケール文字列仕様書](https://www.unicode.org/reports/tr35/)では、照合種別はロケールキーの「拡張子サブタグ」となります。これらのサブタグは、ロケールに関するデータを追加するもので、 `-u` 拡張を使用してロケール識別子に追加されます。つまり、照合種別は、ロケールのコンストラクターに渡される初期のロケール識別子文字列に追加することができます。照合種別を追加するには、まず文字列に `-u` 拡張を追加します。次に、照合順序の型を追加することを示すために `-co` 拡張を追加します。最後に、照合順序を文字列に追加します。

```js
let locale = new Intl.Locale("zh-Hant-u-co-zhuyin");
console.log(locale.collation); // "zhuyin" と表示
```

### 構成オブジェクト引数による照合種別の追加

{{jsxref("Intl/Locale/Locale", "Intl.Locale")}} コンストラクターには、オプションで構成オブジェクトの引数があり、これには照合種別を含む任意の拡張の種類をいくつか含めることができます。構成オブジェクトの `collation` プロパティを任意の照合種別に設定し、コンストラクターに渡します。

```js
let locale = new Intl.Locale("zh-Hant", { collation: "zhuyin" });
console.log(locale.collation); // "zhuyin" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
