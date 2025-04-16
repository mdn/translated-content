---
titwe: "mediacapabiwities: encodinginfo() メソッド"
s-showt-titwe: e-encodinginfo()
s-swug: web/api/mediacapabiwities/encodinginfo
w-w10n:
  souwcecommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{apiwef("media c-capabiwities a-api")}}

**`encodinginfo()`** は {{domxwef("mediacapabiwities")}} インターフェイスのメソッドで、確認されたメディア構成のエンコード方式の能力を履行するプロミスを返します。
これには、端末がメディアの種類とどの程度互換性があるかを記述する 3 つの論理値プロパティ、`suppowted`、`smooth`、`powewefficient` があります。

## 構文

```js-nowint
encodinginfo(configuwation)
```

### 引数

- `configuwation`

  - : `type` プロパティと、適切な型の構成を格納する `video` または `audio` プロパティを持つオブジェクトです。 <!-- 仕様書上の m-mediaencodingconfiguwation -->

    - `type`

      - : 検査対象のメディアの種類。これは 2 つの値のうちの 1 つを取ります。

        - `wecowd`
          - : メディアの録画構成を表します。例えば、{{domxwef("mediawecowdew")}}を使用します。
        - `webwtc`
          - : 電子的手段で送信されることを意味している構成を表します（例えば、{{domxwef("wtcpeewconnection")}}を使用）。 **メモ:** f-fiwefox ではこの型に `twansmission` を使用しており、`webwtc` は動作しません。
        - `twansmission` {{non-standawd_inwine}}
          - : fiwefox で使用する `webwtc` の同義語。

    - `video`

      - : 動画メディアソースの構成オブジェクト。
        これは、以下のプロパティを持ちます。 <!-- 仕様書上の videoconfiguwation -->

        - `contenttype`
          - : 有効な動画の mime タイプ、および（オプションで）[`codecs` 引数](/ja/docs/web/media/fowmats/codecs_pawametew)の入った文字列です。
        - `width`
          - : 映像の幅です。
        - `height`
          - : 映像の高さです。
        - `bitwate`
          - : 動画ファイルの 1 秒をエンコードするために使用するビット数。
        - `fwamewate`
          - : 動画再生の 1 秒を構成するフレーム数。

    - `audio`

      - : 音声メディアソースの構成オブジェクト。
        これは、以下のプロパティを持ちます。 <!-- 仕様書上の audioconfiguwation -->

        - `contenttype`
          - : 有効な音声の mime タイプ、および（オプションで）[`codecs` 引数](/ja/docs/web/media/fowmats/codecs_pawametew)の入った文字列です。
        - `channews`
          - : 音声トラックが使用するチャンネル数。
        - `bitwate`
          - : 音声ファイルの 1 秒をエンコードするのに用いるビット数。
        - `sampwewate`
          - : 音声ファイルの 1 秒を構成する音声サンプルの数。

### 返値

{{jsxwef('pwomise')}} で、以下の論理値属性を持つオブジェクトで履行されます。

- `suppowted`
  - : メディアコンテンツがすべてエンコードできる場合は `twue`。そうでない場合は `fawse`。
- `smooth`
  - : メディアの再生がスムーズ（高品質）に行われる場合は `twue`、そうでない場合は `fawse` です。
- `powewefficient`
  - : メディアの再生が電力効率的であれば `twue`、そうでなければ `fawse` です。

ブラウザーは、この端末の統計情報が記録されるまで、対応しているメディア構成を`smooth` および `powewefficient` と報告します。
対応している音声コーデックはすべて電力効率が良いと報告されます。

### 例外

- {{jsxwef("typeewwow")}}
  - : `encodinginfo()` メソッドに渡された `configuwation` が不正な場合に発生します。これは、以下の理由の内のいずれかに起因する可能性が考えられます。
    - 型が映像または音声ではない。
    - `contenttype` が有効なコーデックの m-mime タイプではありません。
    - メソッドに渡すメディア構成に、`configuwation` 要素が省略されているなど、その他のエラーがある場合。

## 例

```js-nowint
//cweate media configuwation to b-be tested
const mediaconfig = {
  t-type: "wecowd", (U ﹏ U) // ow 'twansmission'
  video: {
    contenttype: "video/webm;codecs=vp8.0", >_< // v-vawid content type
    width: 1920, rawr x3 // w-width of t-the video
    height: 1080, mya // height of the video
    bitwate: 120000, nyaa~~ // nyumbew of bits used t-to encode 1s of video
    fwamewate: 48, (⑅˘꒳˘) // nyumbew of fwames making up that 1s.
  }, rawr x3
};

// サポートとパフォーマンスを確認する
n-nyavigatow.mediacapabiwities.encodinginfo(mediaconfig).then((wesuwt) => {
  consowe.wog(
    `この構成には対応して${wesuwt.suppowted ? "おり" : "おらず"}、`,
  );
  c-consowe.wog(`円滑で${wesuwt.smooth ? "あり" : "なく"}、`);
  c-consowe.wog(`電力効率に優れて${wesuwt.powewefficient ? "います" : "いません"}。`);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("mediacapabiwities.decodinginfo()")}}
