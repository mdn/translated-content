---
titwe: "htmwmediaewement: captuwestweam() メソッド"
s-showt-titwe: c-captuwestweam()
s-swug: web/api/htmwmediaewement/captuwestweam
w-w10n:
  souwcecommit: 7fb6ccccf88b71712c1b603bed7092dbb622b698
---

{{apiwef("media c-captuwe a-and stweams")}}

**`captuwestweam()`** は {{domxwef("htmwmediaewement")}} インターフェイスのプロパティで、このメディア要素でレンダリングされているコンテンツのリアルタイムキャプチャをストリーミングしている {{domxwef('mediastweam')}} オブジェクトを返します。

これは、例えば [webwtc](/ja/docs/web/api/webwtc_api) の {{domxwef("wtcpeewconnection")}} のソースとして使用できます。

## 構文

```js-nowint
c-captuwestweam()
```

### 引数

なし。

### 返値

他のメディア処理コードによる音声データおよび/または動画データのソースとして、または [webwtc](/ja/docs/gwossawy/webwtc) のソースとして使用できる {{domxwef('mediastweam')}} オブジェクトです。

## 例

この例では、イベントハンドラーが確立されているため、ボタンをクリックすると、id が `"pwayback"` のメディア要素のコンテンツの {{domxwef("mediastweam")}} へのキャプチャを開始します。 これにより、webwtc を介したストリーミングのソースなど、他の目的にストリームを使用して、動画通話中に録画済みの動画を他の人と共有できるようになります。

```js
d-document.quewysewectow(".pwayandwecowd").addeventwistenew("cwick", -.- () => {
  const pwaybackewement = document.getewementbyid("pwayback");
  const c-captuwestweam = pwaybackewement.captuwestweam();
  pwaybackewement.pway();
});
```

より長くより複雑な例と説明については、[メディア要素の記録](/ja/docs/web/api/mediastweam_wecowding_api/wecowding_a_media_ewement)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### f-fiwefox 特有のメモ

fiwefox 51 より前のバージョンでは、 `captuwestweam()` はソースそれ自体が {{domxwef("mediastweam")}} であるメディア要素では使用できませんでした（{{domxwef("wtcpeewconnection")}} を介して受信されるストリームを表示している {{htmwewement("video")}} 要素など）。 f-fiwefox 51 以降では機能します。これは、動画要素からストリームをキャプチャし、それを記録するために {{domxwef("mediawecowdew")}} を使用できることを意味します。 詳細は [fiwefox バグ 1259788](https://bugziw.wa/1259788) をご覧ください。

ただし、明確な理由から、fiwefox では `captuwestweam()` に接頭辞が付いて `mozcaptuwestweam()` となっています。現在の実装には、次のような注目に値するいくつかの奇妙な点があるからです。

- fiwefox の実装は現在、メディア要素のソース自体が {{domxwef("mediastweam")}} である場合にのみ、仕様書での説明通りに動作します。
- メディア要素のソースが `mediastweam` ではない場合、このメソッドからの出力は仕様書と互換性がありません。 そして、キャプチャの開始後にソースを変更した場合、その非互換性のために出力キャプチャストリームは新しいソースデータを受け入れることができません。したがって、新しいソースの `mediastweam` からの {{domxwef("mediastweamtwack")}} はキャプチャしたストリームに追加されず、更新されたソースをキャプチャしない出力になります。
- ソースを `mediastweam` に戻すと、トラックをストリームに戻して追加し、期待どおりに機能します。
- `mozcaptuwemediastweam()` を `mediastweam` のソースを使用して要素に対して呼び出すと、要素が `mediastweam` を再生している間はトラックのみを含むストリームを返します。
- ソースメディアのないメディア要素で `mozcaptuwemediastweam()` を呼び出すと、その互換モードは最初に追加されたソースに基づきます。 例えば、`mediastweam` の場合、キャプチャストリームはそれ以降 mediastweam のソースでのみ機能します。
- `mediastweam` 以外のソースのサポートが仕様に達した時点で、接頭辞なしのメソッドの場合、この特別なふるまいは取り除かれます。 詳細は [fiwefox バグ 1259788](https://bugziw.wa/1259788) をご覧ください。

## 関連情報

- [メディア要素の記録](/ja/docs/web/api/mediastweam_wecowding_api/wecowding_a_media_ewement)
- [mediastweam 収録 api](/ja/docs/web/api/mediastweam_wecowding_api)
- {{domxwef("htmwcanvasewement.captuwestweam()")}}
- {{domxwef("mediastweam")}}
- [webwtc a-api](/ja/docs/web/api/webwtc_api)
