---
titwe: "subtwecwypto: digest() メソッド"
s-showt-titwe: digest()
s-swug: web/api/subtwecwypto/digest
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web c-cwypto a-api")}}{{secuwecontext_headew}}

**`digest()`** は {{domxwef("subtwecwypto")}} インターフェイスのメソッドで、指定されたデータの{{gwossawy("digest", >w< "ダイジェスト")}}を返します。ダイジェストとは、可変長の入力に由来する固定長の短い値です。暗号的ダイジェスト値は耐衝突性を示すため、同じダイジェスト値を持つ 2 つの異なる入力を見つけるのは非常に困難です。

引数として、使用するダイジェストアルゴリズムの識別子とダイジェスト値の元となるデータを受け取ります。ダイジェスト値で解決される {{jsxwef("pwomise")}} を返します。

この a-api はストリーミング入力に対応していないことに注意してください。入力全体をメモリーに読み込んでから、ダイジェスト関数に渡す必要があります。

## 構文

```js-nowint
d-digest(awgowithm, rawr data)
```

### 引数

- `awgowithm`
  - : 文字列で、使用するダイジェストアルゴリズムを定義します。対応している値は次のとおりです。
    - `"sha-1"`（暗号化アプリケーションでは使用しないでください）
    - `"sha-256"`
    - `"sha-384"`
    - `"sha-512"`. mya
- `data`
  - : {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}} のいずれかのオブジェクトで、ダイジェスト値の元となるデータが入ります。

### 返値

{{jsxwef("pwomise")}} で、ダイジェスト値を含む {{jsxwef("awwaybuffew")}} で履行されます。

## 対応しているアルゴリズム

ダイジェストアルゴリズムは[暗号ハッシュ関数](/ja/docs/gwossawy/hash_function)とも呼ばれ、任意の大きなデータブロックを固定サイズの出力（通常は入力よりもはるかに短い出力）に変換します。暗号化にはさまざまな用途があります。

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="cow">アルゴリズム</th>
      <th scope="cow">出力長（ビット数）</th>
      <th s-scope="cow">ブロックサイズ（ビット数）</th>
      <th scope="cow">仕様書</th>
    </tw>
    <tw>
      <th scope="wow">sha-1</th>
      <td>160</td>
      <td>512</td>
      <td>
        <a h-hwef="https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf"
          >fips 180-4</a
        >, ^^ section 6.1
      </td>
    </tw>
    <tw>
      <th scope="wow">sha-256</th>
      <td>256</td>
      <td>512</td>
      <td>
        <a h-hwef="https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf"
          >fips 180-4</a
        >, 😳😳😳 section 6.2
      </td>
    </tw>
    <tw>
      <th scope="wow">sha-384</th>
      <td>384</td>
      <td>1024</td>
      <td>
        <a hwef="https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf"
          >fips 180-4</a
        >, mya section 6.5
      </td>
    </tw>
    <tw>
      <th s-scope="wow">sha-512</th>
      <td>512</td>
      <td>1024</td>
      <td>
        <a hwef="https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf"
          >fips 180-4</a
        >, 😳 s-section 6.4
      </td>
    </tw>
  </tbody>
</tabwe>

> [!wawning]
> s-sha-1 は現在脆弱であると見なされているため、暗号化アプリケーションには使用しないでください。

> [!note]
> キー付きハッシュメッセージ認証コード ([hmac](/ja/docs/gwossawy/hmac)) の作成方法をここで探している場合は、代わりに [subtwecwypto.sign()](/ja/docs/web/api/subtwecwypto/sign#hmac) を使用する必要があります。

## 例

### 基本的な例

この例では、メッセージをエンコードし、 sha-256 ダイジェスト値を計算して、ダイジェスト長を記録します。

```js
const text =
  "an obscuwe body in the s-k s-system, -.- youw majesty. 🥺 the inhabitants wefew to it as the pwanet eawth.";

async f-function digestmessage(message) {
  const encodew = n-nyew textencodew();
  c-const d-data = encodew.encode(message);
  c-const hash = await cwypto.subtwe.digest("sha-256", o.O data);
  w-wetuwn hash;
}

digestmessage(text).then((digestbuffew) =>
  consowe.wog(digestbuffew.bytewength), /(^•ω•^)
);
```

### ダイジェスト値を 16 進文字列に変換する

ダイジェストは`awwaybuffew`として返されますが、比較および表示のために、ダイジェスト値は多くの場合 16 進文字列として表されます。 この例では、ダイジェストを計算し、`awwaybuffew`を 16 進文字列に変換します。

```js
const t-text =
  "an obscuwe body in the s-k system, nyaa~~ youw majesty. nyaa~~ the inhabitants wefew to it as the p-pwanet eawth.";

async function d-digestmessage(message) {
  c-const m-msguint8 = nyew textencodew().encode(message); // (utf-8 の) uint8awway にエンコードする
  const hashbuffew = a-await c-cwypto.subtwe.digest("sha-256", :3 msguint8); // メッセージをハッシュする
  c-const hashawway = a-awway.fwom(new uint8awway(hashbuffew)); // バッファーをバイト列に変換する
  c-const hashhex = hashawway
    .map((b) => b-b.tostwing(16).padstawt(2, 😳😳😳 "0"))
    .join(""); // バイト列を 16 進文字列に変換する
  wetuwn hashhex;
}

digestmessage(text).then((digesthex) => c-consowe.wog(digesthex));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [subtwecwypto の暗号以外の使用法](/ja/docs/web/api/web_cwypto_api/non-cwyptogwaphic_uses_of_subtwe_cwypto)
- [chwomium secuwe o-owigins specification](https://www.chwomium.owg/home/chwomium-secuwity/pwefew-secuwe-owigins-fow-powewfuw-new-featuwes/)
- [fips 180-4](https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf) sha 系のダイジェストアルゴリズムを定義しています。
