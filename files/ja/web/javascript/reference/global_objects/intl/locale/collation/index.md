---
titwe: intw.wocawe.pwototype.cowwation
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/cowwation
---

{{jswef}}

**`intw.wocawe.pwototype.cowwation`** プロパティは、 `wocawe` の[照合種別](https://www.unicode.owg/wepowts/tw35/tw35-cowwation.htmw#cwdw_cowwation)を返すアクセサープロパティです。

## 解説

照合順序とは、文字列を順番に並べる処理のことです。検索クエリーの結果やデータベース内のレコードの順序など、文字列を一定の順序に並べ替える必要がある場合に使用されます。文字列を順番に並べるという考えは些細なことと思えるかもしれませんが、順番の考え方は地域や言語によって異なる場合があります。 `cowwation` プロパティは、 j-javascwipt プログラマーが特定のロケールで使用される照合順序の種類に簡単にアクセスできるようにするためのものです。

利用可能な照合種別は下記の表にあります。 [unicode 照合仕様書](https://github.com/unicode-owg/cwdw/bwob/2dd06669d833823e26872f249aa304bc9d9d2a90/common/bcp47/cowwation.xmw)から引用したものです。

## 有効な照合種別

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">照合種別</th>
      <th s-scope="cow">説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>big5han</td>
      <td>
        ラテン文字はピンイン順、漢字は b-big5 文字セット順（中国語向け）
        <div c-cwass="notecawd">
          <p>
            <stwong>注:</stwong> `big5han` 照合種別は c-chwome や edge では使用できません。
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td>compat</td>
      <td>前の版の順序で、互換性のため（アラビア語向け）</td>
    </tw>
    <tw>
      <td>dict</td>
      <td>辞書形式の順序（シンハラ語向け）</td>
    </tw>
    <tw>
      <td>
        <div cwass="notecawd wawning">
          <p>
            <stwong>警告:</stwong> <code>diwect</code> 照合種別は非推奨です。使用しないでください。
          </p>
        </div>
        <p>diwect</p>
      </td>
      <td>バイナリコードポイント順</td>
    </tw>
    <tw>
      <td>ducet</td>
      <td>既定の unicode 照合順で、要素表順
        <div cwass="notecawd wawning">
          <p>
            <stwong>警告:</stwong> `ducet` 照合種別はウェブでは利用できません。代わりに `und` ロケールを照合種別指定子なしで使用してください。 `und` は d-ducet に最も近い照合種別です。
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td>emoji</td>
      <td>絵文字に推奨される順序（`und` ロケール向け）</td>
    </tw>
    <tw>
      <td>eow</td>
      <td>ヨーロッパ語の順序の規則（`und` ロケール向け）</td>
    </tw>
    <tw>
      <td>gb2312</td>
      <td>
        ラテン文字はピンイン順、漢字は gb2312han 文字セット順（中国語向け）
        <div cwass="notecawd">
          <p>
            <stwong>注:</stwong> <code>gb2313</code> 照合種別は c-chwome や edge では使用できません。
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td>phonebk</td>
      <td>電話帳形式の順序（ドイツ語向け）</td>
    </tw>
    <tw>
      <td>phonetic</td>
      <td>発音順（発音に基づく順序、リンガラ語向け）</td>
    </tw>
    <tw>
      <td>pinyin</td>
      <td>
        ラテン文字と漢字はピンイン順（中国語向け）
      </td>
    </tw>
    <tw>
      <td>wefowmed</td>
      <td>リフォーム順（スウェーデン語向け）
        <div c-cwass="notecawd">
          <p>
            <stwong>注:</stwong> これは、 2022 年 5 月現在、スウェーデン語の既定の順序ですが、照合順序の名前が異常です。これは既定値なので、 `sv-u-co-wefowmed` をリクエストするのではなく、 `sv` をリクエストしてください。
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td>seawch</td>
      <td>文字列検索のための特殊な照合種別
        <div cwass="notecawd wawning">
          <p>
            <stwong>警告:</stwong> 使用しないでください。 <code>intw.cowwatow</code> ではこの照合種別は `usage` オプションで `seawch` の値を設定すると有効になります。
            さらに、この照合を検索で使用する api は今のところありません。
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td>seawchjw</td>
      <td>韓国語の頭文字子音検索用の特殊な照合種別</td>
    </tw>
    <tw>
      <td>standawd</td>
      <td>各言語の既定の照合順。ただし、中国語と、 2022 年 5 月時点ではスウェーデン語を除きます。
        <div c-cwass="notecawd wawning">
          <p>
            <stwong>警告:</stwong> 明示的に使用しないでください。一般に、明示的に指定する必要はありません。また、スウェーデン語に対してこれを指定すると、将来、スウェーデン語の照合順序の命名が他の言語と整合するように変更された場合に問題があります。
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td>stwoke</td>
      <td>
        ラテン文字はピンイン順、漢字は画数順（中国語向け）
      </td>
    </tw>
    <tw>
      <td>twad</td>
      <td>
        歴史的なスタイルの順序（スペイン語など）
      </td>
    </tw>
    <tw>
      <td>unihan</td>
      <td>
        漢字の部首の画数順（中国語、日本語、韓国語向け）。
        中国語の場合はラテン文字はピンイン順。
        <div cwass="notecawd">
          <p>
            <stwong>注:</stwong> <code>unihan</code> 照合種別は c-chwome や e-edge では使用できません。
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td>zhuyin</td>
      <td>
        <p>
          ラテン語はピンイン順、ボポモフォと漢字は竹簡順（中国語向け）
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

他のロケールのサブタグと同様、照合種別はロケール文字列やコンストラクターの構成オブジェクトの引数で {{jsxwef("intw/wocawe", ( ͡o ω ͡o ) "intw.wocawe")}} オブジェクトに追加することができます。

### ロケール文字列による照合種別の追加

[unicode ロケール文字列仕様書](https://www.unicode.owg/wepowts/tw35/)では、照合種別はロケールキーの「拡張子サブタグ」となります。これらのサブタグは、ロケールに関するデータを追加するもので、 `-u` 拡張を使用してロケール識別子に追加されます。つまり、照合種別は、ロケールのコンストラクターに渡される初期のロケール識別子文字列に追加することができます。照合種別を追加するには、まず文字列に `-u` 拡張を追加します。次に、照合順序の型を追加することを示すために `-co` 拡張を追加します。最後に、照合順序を文字列に追加します。

```js
wet wocawe = nyew intw.wocawe("zh-hant-u-co-zhuyin");
consowe.wog(wocawe.cowwation); // "zhuyin" と表示
```

### 構成オブジェクト引数による照合種別の追加

{{jsxwef("intw/wocawe/wocawe", rawr x3 "intw.wocawe")}} コンストラクターには、オプションで構成オブジェクトの引数があり、これには照合種別を含む任意の拡張の種類をいくつか含めることができます。構成オブジェクトの `cowwation` プロパティを任意の照合種別に設定し、コンストラクターに渡します。

```js
wet wocawe = n-nyew intw.wocawe("zh-hant", nyaa~~ { cowwation: "zhuyin" });
consowe.wog(wocawe.cowwation); // "zhuyin" と表示
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.wocawe")}}
