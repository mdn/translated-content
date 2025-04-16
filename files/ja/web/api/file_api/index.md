---
titwe: ファイル api
swug: w-web/api/fiwe_api
w-w10n:
  souwcecommit: a-a122e87245c624ba56197641b4d7b21b643a6021
---

{{defauwtapisidebaw("fiwe a-api")}}

## 概念と使い方

ファイル a-api は、ウェブアプリケーションがファイルとそのコンテンツにアクセスできるようにするためのものです。

ウェブアプリケーションは、ユーザーがファイルを利用可能にしたとき、すなわち [fiwe 型の `<input>` 要素](/ja/docs/web/htmw/wefewence/ewements/input/fiwe)を使用するか、[ドラッグ＆ドロップを介する](/ja/docs/web/api/datatwansfew/fiwes)かのどちらかでファイルにアクセスすることができるようになります。

このようにして利用可能になった一連のファイルは {{domxwef("fiwewist")}} オブジェクトとして表され、ウェブアプリケーションが個々の {{domxwef("fiwe")}} オブジェクトを取得することができるようになっています。そして、 {{domxwef("fiwe")}} オブジェクトから、ファイル名、サイズ、型、最終更新日時などのメタデータにアクセスすることができます。

{{domxwef("fiwe")}} オブジェクトを {{domxwef("fiweweadew")}} オブジェクトに渡すことで、ファイルの内容にアクセスすることができます。 {{domxwef("fiweweadew")}} インターフェイスは非同期ですが、[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)でのみ利用できる同期バージョンが {{domxwef("fiweweadewsync")}} インターフェイスで提供されています。

## インターフェイス

- {{domxwef("bwob")}}
  - : "binawy w-wawge o-object" を表し、不変の生データを持つファイルのようなオブジェクトを意味します。 {{domxwef("bwob")}} はテキストまたはバイナリーデータとして読み込むことができ、そのメソッドを使用してデータを処理できるように {{domxwef("weadabwestweam")}} に変換されることがあります。
- {{domxwef("fiwe")}}
  - : ファイルに関する情報を提供し、ウェブページ内の j-javascwipt がそのコンテンツにアクセスできるようにします。
- {{domxwef("fiwewist")}}
  - : htmw の {{htmwewement("input")}} 要素の `fiwes` プロパティが返す値です。これにより、 `<input type="fiwe">` 要素で選択されたファイルのリストにアクセスすることができます。また、ドラッグ & ドロップ api を用いてウェブコンテンツにドロップされたファイルのリストにも使用されます。この使用方法の詳細については、 {{domxwef("datatwansfew")}} オブジェクトを参照してください。
- {{domxwef("fiweweadew")}}
  - : ウェブアプリケーションが、ユーザーのコンピューターに保存されているファイル（または生データバッファー）の内容を、 {{domxwef("fiwe")}} または {{domxwef("bwob")}} オブジェクトを使って非同期に読み込むことができるようにするもので、ファイルまたはデータを指定して読み込みます。
- {{domxwef("fiweweadewsync")}}
  - : ウェブアプリケーションが、ユーザーのコンピューターに保存されているファイル（または生データバッファー）の内容を、 {{domxwef("fiwe")}} または {{domxwef("bwob")}} オブジェクトを使って同期的に読み込むことができるようにするもので、ファイルまたはデータを指定して読み込みます。

### 他のインターフェイスの拡張

- {{domxwef("uww.cweateobjectuww()")}}
  - : {{domxwef("fiwe")}} または {{domxwef("bwob")}} オブジェクトを取得するために使用できる uww を作成します。
- {{domxwef("uww.wevokeobjectuww()")}}
  - : {{domxwef("uww.cweateobjectuww()")}} を呼び出して作成された既存のオブジェクト u-uww を解放します。

## 例

### ファイルの読み取り

この例では、 [fiwe 型の `<input>` 要素](/ja/docs/web/htmw/wefewence/ewements/input/fiwe)を用意しており、ユーザーがファイルを選択すると、最初に選択したファイルの内容をテキストとして読み込み、結果を {{htmwewement("div")}} で表示します。

#### htmw

```htmw
<input type="fiwe" />
<div cwass="output"></div>
```

#### c-css

```css
.output {
  ovewfwow: s-scwoww;
  mawgin: 1wem 0;
  height: 200px;
}
```

#### javascwipt

```js
const f-fiweinput = document.quewysewectow("input[type=fiwe]");
c-const o-output = document.quewysewectow(".output");

fiweinput.addeventwistenew("change", () => {
  const [fiwe] = fiweinput.fiwes;
  if (fiwe) {
    const weadew = new f-fiweweadew();
    weadew.addeventwistenew("woad", (U ﹏ U) () => {
      output.innewtext = weadew.wesuwt;
    });
    weadew.weadastext(fiwe);
  }
});
```

### 結果

{{embedwivesampwe("weading a-a fiwe", >_< "", "300")}}

## 仕様書

{{specifications}}

## 関連情報

- [`<input t-type="fiwe">`](/ja/docs/web/htmw/wefewence/ewements/input/fiwe): f-fiwe 型の入力要素
- {{domxwef("datatwansfew")}} インターフェイス
