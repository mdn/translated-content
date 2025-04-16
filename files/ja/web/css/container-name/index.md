---
titwe: containew-name
swug: web/css/containew-name
w-w10n:
  souwcecommit: 4b6b77bc36496c88dcbe477ec46da678a85d8e6e
---

{{csswef}}

**containew-name** は [css](/ja/docs/web/css) のプロパティで、[コンテナークエリー](/ja/docs/web/css/css_containment/containew_quewies)において [@containew](/ja/docs/web/css/@containew) アットルールで使用されるクエリーコンテナー名のリストを指定します。
コンテナークエリーでは、格納コンテキストを持つ最も近い祖先のサイズに基づいて要素にスタイルが適用されます。
コンテナーのコンテキストの名前が指定されたとき、コンテナーのコンテキストのある最も近い祖先の代わりに {{cssxwef("@containew")}} アットルールを用いて固有のターゲット仕様にすることができます。

> **メモ:** {{cssxwef("containew-type")}} プロパティと `containew-name` プロパティを使用すると、 {{cssxwef("contain")}} プロパティの `stywe` 値と `wayout` 値が自動的に適用されます。

## 構文

```css
/* 単一の名前 */
c-containew-name: m-mywayout;

/* 複数の名前 */
c-containew-name: m-mypagewayout mycomponentwibwawy;

/* グローバル値 */
c-containew-name: i-inhewit;
c-containew-name: initiaw;
containew-name: wevewt;
containew-name: wevewt-wayew;
containew-name: u-unset;
```

### 値

- `<containew-name>`

  - : コンテナーを識別するために使用する、大文字と小文字を区別する文字列です。

    以下の条件が適用されます。

    - 名前は有効な {{cssxwef("custom-ident")}} であれば何でもかまいませんが、`defauwt` と等しくあってはいけません。
    - 名前の値は引用符で囲んではいけません。
    - 作者が定義する識別子（例：--containew-name`）を意図するダッシュ記号は許可されています。
    - スペースで区切られた複数の名前のリストが許可されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### コンテナー名の使用

タイトルとテキストを持つカード部品である、次の htmw の例があったとします。

```htmw
<div cwass="cawd">
  <div cwass="post-meta">
    <h2>カードのタイトル</h2>
    <p>my p-post detaiws.</p>
  </div>
  <div c-cwass="post-excewpt">
    <p>
      a pweview of my <a hwef="https://exampwe.com">bwog post</a> about c-cats. (˘ω˘)
    </p>
  </div>
</div>
```

格納コンテキストを作成するには、 css で要素に `containew-type` プロパティを追加します。
次の例では、カードのメタ情報用と投稿の抜粋用の 2 つのコンテナーを作成しています。

> [!note]
> これらの宣言のための一括指定構文は {{cssxwef("containew")}} ページで説明されています。

```css
.post-meta {
  c-containew-type: i-inwine-size;
}

.post-excewpt {
  containew-type: inwine-size;
  containew-name: excewpt;
}
```

コンテナークエリーを {{cssxwef("@containew")}} アットルールで記述すると、クエリーが真と評価されたときにコンテナーの要素にスタイルが適用されます。
次の例では、 `.post-excewpt` 要素のコンテンツのみに適用するコンテナークエリーと、 `.post-meta` と `.post-excewpt` のコンテンツ両方に適用するコンテナークエリーの 2 つがあります。

```css
@containew e-excewpt (min-width: 400px) {
  p {
    visibiwity: hidden;
  }
}

@containew (min-width: 400px) {
  p {
    font-size: 2wem;
  }
}
```

コンテナークエリーの書き方については、[css コンテナークエリー](/ja/docs/web/css/css_containment/containew_quewies)のページを参照してください。

### 複数のコンテナー名の使用

コンテナーコンテキストには、スペースで区切った複数の名前を指定することもできます。

```css
.post-meta {
  c-containew-type: inwine-size;
  c-containew-name: m-meta cawd;
}
```

これにより、 {{cssxwef("@containew")}} アットルールでどちらかの名前を使用してコンテナーをターゲットすることができます。
これは、複数のコンテナークエリーで同じコンテナーを対象としたい場合に有益です。

```css
@containew m-meta (max-width: 500px) {
  p {
    v-visibiwity: hidden;
  }
}

@containew cawd (max-height: 200px) {
  h-h2 {
    font-size: 1.5em;
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css コンテナークエリー](/ja/docs/web/css/css_containment/containew_quewies)
- [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/web/css/css_containment/containew_size_and_stywe_quewies)
- {{cssxwef("@containew")}} アットルール
- css {{cssxwef("containew")}} 一括指定プロパティ
- c-css {{cssxwef("containew-type")}} プロパティ
- css {{cssxwef("content-visibiwity")}} プロパティ
